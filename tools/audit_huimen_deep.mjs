/**
 * 《回门》深度审计脚本
 *
 * 精确按运行时引擎语义（renderer/effectEngine/npcSystem）建模，检查：
 *  1. 引用完整性：choice.next / choice.ending / scene.ending / choice.npc / NPC choice.scene
 *  2. 可达性（BFS，含 NPC 对话跳场景）：从 prologue 出发无法到达的场景
 *  3. 死胡同：可达且非结局，但没有任何能推进的选项（无 next/ending/npc）
 *  4. 道具逻辑：被 hasItem/consume/removeItem 引用但从未被 addItem/defaultItems 给予的物品
 *  5. flag 逻辑：被 condition.flag 引用但从未被任何 setFlag 设置的旗标
 *  6. hasVisited 引用了不存在的场景
 *  7. 结局可达性：哪些结局能从 prologue 到达；哪些结局从未被引用
 *
 * 用法：node tools/audit_huimen_deep.mjs
 */

import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const storyPath = join(__dirname, '..', 'stories', 'huimen', 'index.js');

const { StoryData, Endings, NPCs, StoryConfig } = await import(pathToFileURL(storyPath).href);

// 引擎中会兜底提供的强制结局
const FORCED_ENDINGS = new Set(['madness', 'possessed', 'eternalNight']);
// 跨卷 flag，可能在其它故事里被设置
const CROSS_STORY_FLAGS = new Set([
    'restored_xiulan_name', 'xiulanMercy', 'knowsTruth', 'heard_paper_whisper',
    'hujia_to_zhou', 'ganshi_to_qingshi', 'hujia_to_qingshi',
    'yunxiuRemembered', 'yunxiuLinkedToPaper', 'knowsRitual'
]);

const sceneIds = new Set(Object.keys(StoryData));
const endingIds = new Set(Object.keys(Endings));
const npcIds = new Set(Object.keys(NPCs || {}));
// 结局可能是 endings/index.js 里定义的“非枚举合并别名”，用 in 运算符可检测到
const endingExists = (id) => (id in Endings) || FORCED_ENDINGS.has(id);

const errors = [];
const warnings = [];
const info = [];
const shadowed = [];   // 同时有 next 与 ending 的选项（运行时 next 优先，ending 被屏蔽）
function err(m) { errors.push(m); }
function warn(m) { warnings.push(m); }
function inf(m) { info.push(m); }

// ---------- 收集 flag / item 的设置与引用 ----------
const flagsSet = new Set(CROSS_STORY_FLAGS);
const flagsChecked = new Map();   // flag -> [locations]
const itemsGranted = new Set(StoryConfig?.defaultItems || []);
const itemsUsed = new Map();      // item -> [locations]

function addToMap(map, key, loc) {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(loc);
}

function collectEffects(effects, loc) {
    if (!effects || typeof effects !== 'object') return;
    if (effects.addItem) {
        const items = Array.isArray(effects.addItem) ? effects.addItem : [effects.addItem];
        items.forEach(i => itemsGranted.add(i));
    }
    if (effects.removeItem) addToMap(itemsUsed, effects.removeItem, loc + ' effects.removeItem');
    const sf = effects.setFlag;
    if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const sgf = effects.setGlobalFlag;
    if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const cf = effects.clearFlag;
    if (cf) (Array.isArray(cf) ? cf : [cf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
}

function collectCondition(cond, loc) {
    if (!cond || typeof cond !== 'object') return;
    if (cond.hasItem) addToMap(itemsUsed, cond.hasItem, loc + ' condition.hasItem');
    if (cond.lacksItem) addToMap(itemsUsed, cond.lacksItem, loc + ' condition.lacksItem(lacks)');
    if (cond.flag) addToMap(flagsChecked, cond.flag, loc + ' condition.flag');
    if (cond.noFlag) addToMap(flagsChecked, cond.noFlag, loc + ' condition.noFlag(neg)');
    if (cond.flagValue && cond.flagValue.key) addToMap(flagsChecked, cond.flagValue.key, loc + ' condition.flagValue');
    if (cond.hasVisited && !sceneIds.has(cond.hasVisited)) err(`${loc} condition.hasVisited 引用不存在场景: ${cond.hasVisited}`);
    if (cond.hasNotVisited && !sceneIds.has(cond.hasNotVisited)) warn(`${loc} condition.hasNotVisited 引用不存在场景: ${cond.hasNotVisited}`);
}

function collectChoiceMeta(choice, loc) {
    collectCondition(choice.condition, loc);
    if (choice.hideIf && typeof choice.hideIf === 'object') collectCondition(choice.hideIf, loc + ' hideIf');
    collectEffects(choice.effects, loc);
    if (choice.effect && typeof choice.effect === 'object') collectEffects(choice.effect, loc);
    if (choice.consume) addToMap(itemsUsed, choice.consume, loc + ' choice.consume');
    const sf = choice.setFlag;
    if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const sgf = choice.setGlobalFlag;
    if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
}

// ---------- 遍历场景，做引用完整性检查并收集 ----------
for (const [sceneId, scene] of Object.entries(StoryData)) {
    const loc = `场景 ${sceneId}`;
    if (!scene || typeof scene !== 'object') { err(`${loc} 不是对象`); continue; }
    collectEffects(scene.effects, loc + '.effects');
    if (Array.isArray(scene.textVariants)) {
        scene.textVariants.forEach((v, i) => collectCondition(v.condition, `${loc}.textVariants[${i}]`));
    }
    if (scene.ending && !endingExists(scene.ending)) {
        err(`${loc} 引用不存在结局: ${scene.ending}`);
    }
    if (Array.isArray(scene.choices)) {
        scene.choices.forEach((c, i) => {
            const cloc = `${loc} choices[${i}]("${(c && c.text) || ''}")`;
            if (!c || typeof c !== 'object') { err(`${cloc} 不是对象`); return; }
            collectChoiceMeta(c, cloc);
            if (c.next && !sceneIds.has(c.next)) err(`${cloc} 引用不存在场景 next: ${c.next}`);
            if (c.ending && !endingExists(c.ending)) err(`${cloc} 引用不存在结局 ending: ${c.ending}`);
            if (c.npc && !npcIds.has(c.npc)) err(`${cloc} 引用不存在 NPC: ${c.npc}`);
            if (c.next && c.ending) shadowed.push(`${cloc} 同时有 next(${c.next}) 与 ending(${c.ending})`);
            if (!c.next && !c.ending && !c.npc && !c.exit && !c.event && !c.action) {
                warn(`${cloc} 无 next/ending/npc/exit（可能死胡同选项）`);
            }
        });
    }
}

// ---------- NPC 对话检查并收集其 scene 跳转 ----------
const npcSceneTargets = new Map(); // npcId -> Set(sceneId) 可跳转到的场景
for (const [npcId, npc] of Object.entries(NPCs || {})) {
    const targets = new Set();
    npcSceneTargets.set(npcId, targets);
    const dlg = npc.dialogue || {};
    for (const [nodeId, node] of Object.entries(dlg)) {
        const nloc = `NPC ${npcId}.${nodeId}`;
        collectEffects(node.effects, nloc + '.effects');
        (node.choices || []).forEach((c, i) => {
            const cloc = `${nloc} choices[${i}]`;
            collectChoiceMeta(c, cloc);
            if (c.next && !dlg[c.next]) err(`${cloc} 引用不存在对话节点 next: ${c.next}`);
            if (c.scene) {
                if (!sceneIds.has(c.scene)) err(`${cloc} 引用不存在场景 scene: ${c.scene}`);
                else targets.add(c.scene);
            }
        });
    }
}

// ---------- 可达性 BFS（含 NPC scene 跳转） ----------
const reachable = new Set();
const reachedEndings = new Set();
const queue = ['prologue'];
if (!sceneIds.has('prologue')) err('缺少 prologue 场景');
while (queue.length) {
    const cur = queue.shift();
    if (reachable.has(cur)) continue;
    reachable.add(cur);
    const scene = StoryData[cur];
    if (!scene) continue;
    if (scene.ending) { reachedEndings.add(scene.ending); continue; }
    if (!Array.isArray(scene.choices)) continue;
    for (const c of scene.choices) {
        // 运行时 next 优先于 ending（见 recordManager.makeChoice）
        if (c.ending && !c.next) reachedEndings.add(c.ending);
        if (c.next && sceneIds.has(c.next)) queue.push(c.next);
        if (c.npc && npcSceneTargets.has(c.npc)) {
            for (const s of npcSceneTargets.get(c.npc)) queue.push(s);
        }
    }
}

// 彩蛋场景由 storyExtensions 注入，不计入不可达
const EASTER = new Set(['huimen_easter_qingshi_paper', 'huimen_easter_paper_doll']);
for (const id of sceneIds) {
    if (EASTER.has(id)) continue;
    if (!reachable.has(id)) warn(`场景 ${id} 从 prologue 不可达`);
}

// ---------- 死胡同：可达、非结局、无任何推进选项 ----------
for (const id of reachable) {
    const scene = StoryData[id];
    if (!scene || scene.ending) continue;
    const choices = Array.isArray(scene.choices) ? scene.choices : [];
    const canProgress = choices.some(c => c.next || c.ending || c.npc);
    if (!canProgress) {
        err(`死胡同场景 ${id}（"${scene.title || ''}"）：可达但无任何 next/ending/npc 选项`);
    }
}

// ---------- 道具逻辑 ----------
for (const [item, locs] of itemsUsed) {
    const lacksOnly = locs.every(l => l.includes('(lacks)'));
    if (!itemsGranted.has(item) && !lacksOnly) {
        err(`道具「${item}」被引用但从未被 addItem/defaultItems 给予；引用处：${locs.slice(0, 4).join(' | ')}${locs.length > 4 ? ' ...' : ''}`);
    }
}
// 给予但从未被使用的道具（信息级）
for (const item of itemsGranted) {
    if (!itemsUsed.has(item)) inf(`道具「${item}」被给予但从未在任何条件/消耗中使用`);
}

// ---------- flag 逻辑 ----------
for (const [flag, locs] of flagsChecked) {
    const negOnly = locs.every(l => l.includes('(neg)'));
    if (!flagsSet.has(flag) && !negOnly) {
        warn(`flag「${flag}」被 condition.flag 检查但从未被任何 setFlag 设置；检查处：${locs.slice(0, 4).join(' | ')}${locs.length > 4 ? ' ...' : ''}`);
    }
}

// ---------- 结局引用（运行时语义：next 优先） ----------
const referencedEndings = new Set();
for (const scene of Object.values(StoryData)) {
    if (scene.ending) referencedEndings.add(scene.ending);
    (scene.choices || []).forEach(c => { if (c.ending && !c.next) referencedEndings.add(c.ending); });
}
for (const eid of endingIds) {
    if (FORCED_ENDINGS.has(eid)) continue;
    if (!referencedEndings.has(eid)) err(`结局 ${eid} 运行时不可达（无有效引用，可能仅被 next 屏蔽的 ending 引用）`);
}

// ---------- 输出 ----------
console.log('==================== 《回门》深度审计 ====================');
console.log(`场景 ${sceneIds.size} · 结局 ${endingIds.size} · NPC ${npcIds.size}`);
console.log(`可达场景 ${reachable.size}/${sceneIds.size} · 可达结局(选项/场景级) ${reachedEndings.size}`);
console.log(`道具给予 ${itemsGranted.size} 种 · 被引用 ${itemsUsed.size} 种`);
console.log('---------------------------------------------------------');
console.log(`\n【错误 ${errors.length}】`);
errors.forEach(e => console.log('  ✗ ' + e));
console.log(`\n【警告 ${warnings.length}】`);
warnings.forEach(w => console.log('  ! ' + w));
console.log(`\n【信息 ${info.length}】`);
info.forEach(i => console.log('  · ' + i));

console.log(`\n【选项 next+ending 屏蔽 ${shadowed.length}】(运行时走 next；ending 仅当 next 目标自身归到同结局时才一致)`);
shadowed.forEach(s => console.log('  ~ ' + s));

console.log('\n【可达结局清单】');
console.log('  ' + [...reachedEndings].sort().join(', '));

process.exitCode = errors.length > 0 ? 1 : 0;
