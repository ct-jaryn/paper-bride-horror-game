# 故事拆分脚本模板
# 用法: python3 split_story.py <story_id>
# 示例: python3 split_story.py huimen
#
# 会读取 stories/story_<story_id>.js 或 story_<story_id>_expansion.js
# 输出到 stories/<story_id>/ 目录下

import sys
import re
import os

story_id = sys.argv[1] if len(sys.argv) > 1 else 'example'

# 优先尝试 expansion 版本，否则使用基础版本
input_candidates = [
    f'/workspace/stories/story_{story_id}_expansion.js',
    f'/workspace/stories/story_{story_id}.js'
]
input_file = None
for c in input_candidates:
    if os.path.exists(c):
        input_file = c
        break

if not input_file:
    print(f'未找到 {story_id} 的故事源文件')
    sys.exit(1)

output_dir = f'/workspace/stories/{story_id}'
os.makedirs(os.path.join(output_dir, 'scenes'), exist_ok=True)
os.makedirs(os.path.join(output_dir, 'endings'), exist_ok=True)
os.makedirs(os.path.join(output_dir, 'npcs'), exist_ok=True)

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 默认分类：按场景 ID 前缀/关键词分组
def classify(scene_id):
    if scene_id == 'prologue': return 'prologue'
    # 根据 story_id 可在此添加自定义规则
    # 例如回门可按地点分：
    if story_id == 'huimen':
        if 'village' in scene_id: return 'village'
        if 'well' in scene_id: return 'well'
        if 'coffin' in scene_id or 'red' in scene_id: return 'coffin'
        if 'ancestral' in scene_id or 'family' in scene_id: return 'ancestral'
        if 'paper' in scene_id or 'doll' in scene_id: return 'paper'
        if 'moon' in scene_id: return 'moon'
        return 'main'
    # 默认按首个下划线前缀粗分
    prefix = scene_id.split('_')[0]
    return prefix if prefix != scene_id else 'main'

def extract_block(content, start_marker):
    start = content.find(start_marker)
    if start == -1:
        return None
    start += len(start_marker)
    depth = 0
    in_backtick = False
    in_single = False
    in_double = False
    i = start
    while i < len(content):
        ch = content[i]
        if in_backtick:
            if ch == '`' and (i == 0 or content[i-1] != '\\'):
                in_backtick = False
            i += 1
            continue
        if in_single:
            if ch == "'" and (i == 0 or content[i-1] != '\\'):
                in_single = False
            i += 1
            continue
        if in_double:
            if ch == '"' and (i == 0 or content[i-1] != '\\'):
                in_double = False
            i += 1
            continue
        if ch == '`':
            in_backtick = True
            i += 1
            continue
        if ch == "'":
            in_single = True
            i += 1
            continue
        if ch == '"':
            in_double = True
            i += 1
            continue
        if ch == '{':
            depth += 1
            i += 1
            continue
        if ch == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                return content[start:end]
            i += 1
            continue
        i += 1
    return None

sd_block = extract_block(content, 'export const StoryData = ')
if sd_block is None:
    print('提取 StoryData 失败')
    sys.exit(1)

inner = sd_block[1:-1]
scenes = []
pattern = re.compile(r'^    ([a-zA-Z0-9_]+):\s*\{', re.MULTILINE)
matches = list(pattern.finditer(inner))
print(f'发现 {len(matches)} 个场景')

for idx, m in enumerate(matches):
    scene_id = m.group(1)
    start = m.start()
    end = matches[idx+1].start() if idx+1 < len(matches) else len(inner)
    scene_block = inner[start:end].rstrip().rstrip(',')
    scenes.append((scene_id, scene_block))

groups = {}
for scene_id, scene_block in scenes:
    g = classify(scene_id)
    groups.setdefault(g, []).append((scene_id, scene_block))

for g, items in groups.items():
    filename = os.path.join(output_dir, 'scenes', f'{g}.js')
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(f"/**\n * 《{story_id}》场景模块：{g}\n */\n\n")
        f.write("export const scenes = {\n")
        for i, (scene_id, scene_block) in enumerate(items):
            f.write(scene_block)
            if i < len(items) - 1:
                f.write(',\n\n')
            else:
                f.write('\n')
        f.write("};\n")
    print(f'已写入 {filename}（{len(items)} 场景）')

end_block = extract_block(content, 'export const Endings = ')
if end_block:
    with open(os.path.join(output_dir, 'endings', 'index.js'), 'w', encoding='utf-8') as f:
        f.write(f"/**\n * 《{story_id}》结局集合\n */\n\n")
        f.write("export const Endings = ")
        f.write(end_block)
        f.write(";\n")
    print('已写入 endings/index.js')

npc_block = extract_block(content, 'export const NPCs = ')
if npc_block:
    with open(os.path.join(output_dir, 'npcs', 'index.js'), 'w', encoding='utf-8') as f:
        f.write(f"/**\n * 《{story_id}》NPC 对话\n */\n\n")
        f.write("export const NPCs = ")
        f.write(npc_block)
        f.write(";\n")
    print('已写入 npcs/index.js')

scene_files = sorted(groups.keys())
with open(os.path.join(output_dir, 'index.js'), 'w', encoding='utf-8') as f:
    f.write(f"/**\n * 《{story_id}》故事入口\n */\n\n")
    for g in scene_files:
        f.write(f"import {{ scenes as {g}Scenes }} from './scenes/{g}.js';\n")
    f.write("import { Endings } from './endings/index.js';\n")
    f.write("import { NPCs } from './npcs/index.js';\n\n")
    f.write("export const StoryData = {\n")
    for i, g in enumerate(scene_files):
        suffix = ',' if i < len(scene_files) - 1 else ''
        f.write(f"    ...{g}Scenes{suffix}\n")
    f.write("};\n\n")
    f.write("export { Endings, NPCs };\n")
    f.write("export { StoryConfig } from './config.js';\n")
print('已写入 index.js')

print('\\n提示：请手动创建 config.js 并更新 stories/manifest.js 中的 scriptPath')
print(f'  scriptPath: "stories/{story_id}/index.js"')
