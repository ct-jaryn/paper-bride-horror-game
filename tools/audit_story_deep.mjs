/**
 * 通用故事深度审计脚本
 *
 * 精确按运行时引擎语义（renderer/effectEngine/npcSystem/recordManager）建模，检查：
 *  1. 引用完整性：choice.next / choice.ending / scene.ending / choice.npc / NPC choice.scene
 *  2. 可达性（BFS，含 NPC 对话跳场景）：从 prologue 出发无法到达的场景
 *  3. 死胡同：可达且非结局，但没有任何能推进的选项（无 next/ending/npc）
 *  4. 道具逻辑：被 hasItem/consume/removeItem 引用但从未被 addItem/defaultItems 给予的物品
 *  5. flag 逻辑：被 condition.flag 引用但从未被任何 setFlag 设置的旗标
 *  6. hasVisited 引用了不存在的场景
 *  7. 选项 next+ending 屏蔽：运行时 next 优先，ending 被屏蔽
 *  8. 结局运行时可达性：哪些结局无有效引用（仅被 next 屏蔽的 ending 引用）
 *
 * 会调用 applyEasterEggs 注入跨卷彩蛋场景/选择，以贴合真实运行时数据。
 *
 * 用法：node tools/audit_story_deep.mjs [storyId]   （默认 huimen）
 */

import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { Huimen } from '../js/engine/namespace.js';
import { applyEasterEggs } from '../js/engine/storyExtensions/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const storyId = process.argv[2] || 'huimen';
const storyPath = join(__dirname, '..', 'stories', storyId, 'index.js');

const module = await import(pathToFileURL(storyPath).href);

// 模拟引擎加载并注入彩蛋（applyEasterEggs 会就地修改 Huimen.StoryData）
Huimen.CurrentStory = { id: storyId };
Huimen.StoryData = { ...module.StoryData };
Huimen.Endings = module.Endings;
Huimen.NPCs = module.NPCs || {};
Huimen.StoryConfig = module.StoryConfig || null;
applyEasterEggs();

const StoryData = Huimen.StoryData;
const Endings = module.Endings;
const NPCs = Huimen.NPCs;
const StoryConfig = module.StoryConfig;

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
const endingExists = (id) => (id in Endings) || FORCED_ENDINGS.has(id);

const errors = [];
const warnings = [];
const info = [];
const shadowed = [];
function err(m) { errors.push(m); }
function warn(m) { warnings.push(m); }
function inf(m) { info.push(m); }

const flagsSet = new Set(CROSS_STORY_FLAGS);
const flagsChecked = new Map();
const itemsGranted = new Set(StoryConfig?.defaultItems || []);
const itemsUsed = new Map();

function addToMap(map, key, loc) {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(loc);
}

function collectEffects(effects) {
    if (!effects || typeof effects !== 'object') return;
    if (effects.addItem) {
        const items = Array.isArray(effects.addItem) ? effects.addItem : [effects.addItem];
        items.forEach(i => itemsGranted.add(i));
    }
    if (effects.removeItem) addToMap(itemsUsed, effects.removeItem, 'effects.removeItem');
    const sf = effects.setFlag;
    if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const sgf = effects.setGlobalFlag;
    if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const cf = effects.clearFlag;
    if (cf) (Array.isArray(cf) ? cf : [cf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
}

function collectCondition(cond, loc) {
    if (!cond || typeof cond !== 'object') return;
    if (cond.hasItem) addToMap(itemsUsed, cond.hasItem, loc + ' hasItem');
    if (cond.lacksItem) addToMap(itemsUsed, cond.lacksItem, loc + ' lacksItem(lacks)');
    if (cond.flag) addToMap(flagsChecked, cond.flag, loc + ' flag');
    if (cond.noFlag) addToMap(flagsChecked, cond.noFlag, loc + ' noFlag(neg)');
    if (cond.flagValue && cond.flagValue.key) addToMap(flagsChecked, cond.flagValue.key, loc + ' flagValue');
    if (cond.hasVisited && !sceneIds.has(cond.hasVisited)) err(`${loc} condition.hasVisited 引用不存在场景: ${cond.hasVisited}`);
    if (cond.hasNotVisited && !sceneIds.has(cond.hasNotVisited)) warn(`${loc} condition.hasNotVisited 引用不存在场景: ${cond.hasNotVisited}`);
}

function collectChoiceMeta(choice, loc) {
    collectCondition(choice.condition, loc);
    if (choice.hideIf && typeof choice.hideIf === 'object') collectCondition(choice.hideIf, loc + ' hideIf');
    collectEffects(choice.effects);
    if (choice.effect && typeof choice.effect === 'object') collectEffects(choice.effect);
    if (choice.consume) addToMap(itemsUsed, choice.consume, loc + ' consume');
    const sf = choice.setFlag;
    if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
    const sgf = choice.setGlobalFlag;
    if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => flagsSet.add(typeof f === 'string' ? f : f.key));
}

for (const [sceneId, scene] of Object.entries(StoryData)) {
    const loc = `场景 ${sceneId}`;
    if (!scene || typeof scene !== 'object') { err(`${loc} 不是对象`); continue; }
    collectEffects(scene.effects);
    if (Array.isArray(scene.textVariants)) {
        scene.textVariants.forEach((v, i) => collectCondition(v.condition, `${loc}.textVariants[${i}]`));
    }
    if (scene.ending && !endingExists(scene.ending)) err(`${loc} 引用不存在结局: ${scene.ending}`);
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

// NPC 对话检查并收集 scene 跳转
const npcSceneTargets = new Map();
for (const [npcId, npc] of Object.entries(NPCs || {})) {
    const targets = new Set();
    npcSceneTargets.set(npcId, targets);
    const dlg = npc.dialogue || {};
    for (const [nodeId, node] of Object.entries(dlg)) {
        const nloc = `NPC ${npcId}.${nodeId}`;
        collectEffects(node.effects);
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

// 可达性 BFS（含 NPC scene 跳转；运行时 next 优先于 ending）
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
        if (c.ending && !c.next) reachedEndings.add(c.ending);
        if (c.next && sceneIds.has(c.next)) queue.push(c.next);
        if (c.npc && npcSceneTargets.has(c.npc)) {
            for (const s of npcSceneTargets.get(c.npc)) queue.push(s);
        }
    }
}

for (const id of sceneIds) {
    if (!reachable.has(id)) warn(`场景 ${id} 从 prologue 不可达`);
}

// 死胡同
for (const id of reachable) {
    const scene = StoryData[id];
    if (!scene || scene.ending) continue;
    const choices = Array.isArray(scene.choices) ? scene.choices : [];
    const progressable = choices.filter(c => c.next || c.ending || c.npc);
    if (progressable.length === 0) {
        err(`死胡同场景 ${id}（"${scene.title || ''}"）：可达但无任何 next/ending/npc 选项`);
        continue;
    }
    // 所有推进选项都带 condition/hideIf：若这些条件在到达时都不满足，运行时会被 renderChoices 过滤成死胡同
    // 空对象 {} 条件在引擎里视为“永真”（checkCondition 对空条件返回 true），视为无条件
    const isUncond = (c) => {
        const condOk = !c.condition || (typeof c.condition === 'object' && Object.keys(c.condition).length === 0);
        const hideOk = !c.hideIf || (typeof c.hideIf === 'object' && Object.keys(c.hideIf).length === 0);
        return condOk && hideOk;
    };
    const hasUnconditional = progressable.some(isUncond);
    // 场景自身 effects 会 setFlag/addItem，从而满足某个选项的 flag/hasItem 条件（进场时先结算 effects 再渲染选项）
    const sceneFlags = new Set();
    const sceneItems = new Set();
    if (scene.effects) {
        const sf = scene.effects.setFlag;
        if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => sceneFlags.add(typeof f === 'string' ? f : f.key));
        const ai = scene.effects.addItem;
        if (ai) (Array.isArray(ai) ? ai : [ai]).forEach(i => sceneItems.add(i));
    }
    const selfCovered = progressable.some(c => {
        const cond = c.condition;
        if (!cond || typeof cond !== 'object' || Object.keys(cond).length !== 1) return false;
        return (cond.flag && sceneFlags.has(cond.flag)) || (cond.hasItem && sceneItems.has(cond.hasItem));
    });
    // 大型 hub（推进选项很多，条件多样）几乎不可能全部不满足，交由真实游玩测试兑底
    const isLargeHub = progressable.length > 12;
    // 互补 flag/noFlag 对（单键）：{flag:X} 与 {noFlag:X} 必有其一满足
    const yesFlags = new Set();
    const noFlags = new Set();
    for (const c of progressable) {
        const cond = c.condition;
        if (cond && typeof cond === 'object' && Object.keys(cond).length === 1) {
            if (cond.flag) yesFlags.add(cond.flag);
            if (cond.noFlag) noFlags.add(cond.noFlag);
        }
    }
    const hasComplementaryFlag = [...yesFlags].some(f => noFlags.has(f));
    // 互补 custom 对：s=>X 与 s=>!X 必有其一满足
    const normFn = (fn) => { const src = fn.toString(); const i = src.indexOf('=>'); return (i >= 0 ? src.slice(i + 2) : src).replace(/\s/g, ''); };
    const customs = progressable
        .filter(c => c.condition && typeof c.condition === 'object' && Object.keys(c.condition).length === 1 && typeof c.condition.custom === 'function')
        .map(c => normFn(c.condition.custom));
    const hasComplementaryCustom = customs.some(b => customs.includes('!' + b) || customs.includes('!(' + b + ')'));
    // 入口保证：所有推进选项都只要求同一单 flag X，且所有 next 入边都要求 X 或在源场景 effects 里设置 X
    let entryGuaranteed = false;
    const singleFlags = progressable.map(c => (c.condition && typeof c.condition === 'object' && Object.keys(c.condition).length === 1 && c.condition.flag) ? c.condition.flag : null);
    if (singleFlags.length && singleFlags.every(f => f && f === singleFlags[0])) {
        const X = singleFlags[0];
        let anyEntry = false, allGuarantee = true;
        for (const sc of Object.values(StoryData)) {
            const sf = sc.effects && sc.effects.setFlag;
            const setsX = sf ? (Array.isArray(sf) ? sf : [sf]).some(f => (typeof f === 'string' ? f : (f && f.key)) === X) : false;
            for (const c2 of (sc.choices || [])) {
                if (c2.next === id) {
                    anyEntry = true;
                    const reqX = c2.condition && typeof c2.condition === 'object' && c2.condition.flag === X;
                    if (!reqX && !setsX) allGuarantee = false;
                }
            }
        }
        entryGuaranteed = anyEntry && allGuarantee;
    }
    if (!hasUnconditional && !selfCovered && !isLargeHub && !hasComplementaryFlag && !hasComplementaryCustom && !entryGuaranteed) {
        warn(`潜在运行时死胡同场景 ${id}（"${scene.title || ''}"）：${progressable.length} 个推进选项全部带 condition/hideIf且无互补/入口保证，条件都不满足时会触发死胡同兜底`);
    }
}

// 道具逻辑
for (const [item, locs] of itemsUsed) {
    const lacksOnly = locs.every(l => l.includes('(lacks)'));
    if (!itemsGranted.has(item) && !lacksOnly) {
        err(`道具「${item}」被引用但从未被 addItem/defaultItems 给予；引用处：${locs.slice(0, 4).join(' | ')}${locs.length > 4 ? ' ...' : ''}`);
    }
}
for (const item of itemsGranted) {
    if (!itemsUsed.has(item)) inf(`道具「${item}」被给予但从未在任何条件/消耗中使用`);
}

// flag 逻辑
for (const [flag, locs] of flagsChecked) {
    const negOnly = locs.every(l => l.includes('(neg)'));
    if (!flagsSet.has(flag) && !negOnly) {
        warn(`flag「${flag}」被 condition.flag 检查但从未被任何 setFlag 设置；检查处：${locs.slice(0, 4).join(' | ')}${locs.length > 4 ? ' ...' : ''}`);
    }
}

// 结局引用（运行时语义：next 优先）
const referencedEndings = new Set();
for (const scene of Object.values(StoryData)) {
    if (scene.ending) referencedEndings.add(scene.ending);
    (scene.choices || []).forEach(c => { if (c.ending && !c.next) referencedEndings.add(c.ending); });
}
for (const eid of endingIds) {
    if (FORCED_ENDINGS.has(eid)) continue;
    if (!referencedEndings.has(eid)) err(`结局 ${eid} 运行时不可达（无有效引用，可能仅被 next 屏蔽的 ending 引用）`);
}

// 输出
console.log(`==================== 《${StoryConfig?.title || storyId}》(${storyId}) 深度审计 ====================`);
console.log(`场景 ${sceneIds.size} · 结局 ${endingIds.size} · NPC ${npcIds.size}`);
console.log(`可达场景 ${reachable.size}/${sceneIds.size} · 可达结局 ${reachedEndings.size}`);
console.log(`道具给予 ${itemsGranted.size} 种 · 被引用 ${itemsUsed.size} 种`);
console.log('---------------------------------------------------------');
console.log(`\n【错误 ${errors.length}】`);
errors.forEach(e => console.log('  ✗ ' + e));
console.log(`\n【警告 ${warnings.length}】`);
warnings.forEach(w => console.log('  ! ' + w));
console.log(`\n【选项 next+ending 屏蔽 ${shadowed.length}】`);
shadowed.forEach(s => console.log('  ~ ' + s));
console.log(`\n【信息 ${info.length}】`);
info.forEach(i => console.log('  · ' + i));

process.exitCode = errors.length > 0 ? 1 : 0;
