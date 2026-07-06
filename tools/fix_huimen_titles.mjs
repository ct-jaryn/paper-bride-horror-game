/**
 * 修复因自动去重而产生的劣质/重复标题
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const sceneDir = '/workspace/stories/huimen/scenes';

const files = readdirSync(sceneDir).filter(f => f.endsWith('.js'));

const fixes = {
    // 重复且难看的
    'huimen_exp2_paper_boat_read': '河边纸船',
    'huimen_exp_street_paper_boat': '街缝纸船',
    'huimen_exp_burn_dolls_alt': '焚偶',
    'huimen_exp_ruins_photo': '废墟旧照',
    'huimen_exp_show_xiulan_photo': '给秀兰看旧照',
    'huimen_exp_use_child_tooth': '用护身乳牙',
    'use_talisman_ghost': '以符驱鬼',
    'huimen_exp3_zhou_mansion_cellar_name_stele': '地窖名碑',
    'huimen_exp_burn_grandmother_talisman': '焚祖母符',
    'huimen_exp_gate_of_paper_alt': '纸门',
    'huimen_exp_village_street_paper_door': '街门',
    'huimen_exp3_zhou_mansion_cellar': '祖宅地窖',
    'huimen_exp_ruins_cellar': '废墟地窖',
    'huimen_exp_well_whisper': '井语',
    'huimen_exp_well_whisper_alt': '井语低喃',
    'huimen_exp_well_whisper_truth': '井语成录',
    'huimen_exp_well_dive': '下井',
    'find_bones': '井底寻骨',
    'ask_meaning': '李婆的护身符',
    'safe_house_talisman': '安全屋护身符',
    // 剩余重复
    'huimen_exp2_paper_shop_basement': '二层纸扎铺地下室',
    'huimen_exp3_paper_shop_basement': '三层纸扎铺地下室',
    'huimen_exp2_river_cross': '河边渡河',
    'huimen_exp_moonlit_river_cross': '月夜渡河',
    'huimen_exp2_xiulan_memory_childhood_sew': '秀兰童年绣花',
    'huimen_exp3_xiulan_memory_childhood_sew': '秀兰记忆绣花',
    'huimen_exp3_well_bottom': '三代井底',
    'huimen_exp_well_bottom': '深井井底',
};

const idToFile = {};
for (const f of files) {
    const content = readFileSync(join(sceneDir, f), 'utf8');
    const matches = content.matchAll(/\b([a-zA-Z0-9_]+):\s*\{\s*\n\s*title:/g);
    for (const m of matches) {
        idToFile[m[1]] = f;
    }
}

let applied = 0;
for (const [id, newTitle] of Object.entries(fixes)) {
    const f = idToFile[id];
    if (!f) {
        console.log('未找到文件:', id);
        continue;
    }
    const path = join(sceneDir, f);
    let content = readFileSync(path, 'utf8');
    // 匹配 title: '...' 或 title: "..."
    const regex = new RegExp(`(    ${id}:\\\s*\\{\\n\\s*title:\\s*)['\"]([^'\"]+)['\"],`);
    if (regex.test(content)) {
        content = content.replace(regex, `$1'${newTitle}',`);
        writeFileSync(path, content);
        applied++;
        console.log(`[${f}] ${id}: -> "${newTitle}"`);
    } else {
        console.log('无法定位:', id);
    }
}

console.log('已修复:', applied);
