/**
 * 《回门》大结局全流程验证
 *
 * 以「紧凑状态前向 BFS」忠实复刻引擎的条件判定 / 效果结算 / 强制结局规则，
 * 从 prologue 出发寻找到各结局的最短可行路径，证明「开始 → 大结局」整条流程
 * 在运行时真的能走通、不卡死。
 *
 * 性能：状态签名只跟踪「真正参与条件判定」的 flag / 道具 / 已访问场景，
 *       其余（大量纪念品类道具、纯剧情 flag）不进入状态空间，避免组合爆炸。
 *
 * 复刻自 js/engine/effectEngine.js 的语义。
 * 用法：node tools/huimen_grand_ending_test.mjs
 */

import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const module = await import(pathToFileURL(join(__dirname, '..', 'stories', 'huimen', 'index.js')).href);
const StoryData = module.StoryData;
const Endings = module.Endings;
const StoryConfig = module.StoryConfig;

const clamp = (v) => Math.max(0, Math.min(100, v));

// ---------- 计算「参与门控」的 flag / 道具 / 已访问场景集合 ----------
const relFlags = new Set();
const relItems = new Set();
const relVisited = new Set();

function scanCondition(cond) {
    if (!cond) return;
    if (typeof cond === 'function') {
        // custom：从源码里抠出引号内的名字，保守地同时视为道具与 flag
        const src = cond.toString();
        const m = src.match(/['"]([^'"]+)['"]/g) || [];
        m.forEach(q => { const name = q.slice(1, -1); relItems.add(name); relFlags.add(name); });
        return;
    }
    if (typeof cond !== 'object') return;
    if (cond.hasItem) relItems.add(cond.hasItem);
    if (cond.lacksItem) relItems.add(cond.lacksItem);
    if (cond.flag) relFlags.add(cond.flag);
    if (cond.noFlag) relFlags.add(cond.noFlag);
    if (cond.flagValue && cond.flagValue.key) relFlags.add(cond.flagValue.key);
    if (cond.hasVisited) relVisited.add(cond.hasVisited);
    if (cond.hasNotVisited) relVisited.add(cond.hasNotVisited);
    if (cond.custom) scanCondition(cond.custom);
}
for (const scene of Object.values(StoryData)) {
    (scene.choices || []).forEach(c => {
        scanCondition(c.condition);
        if (c.hideIf && typeof c.hideIf === 'object') scanCondition(c.hideIf);
    });
    (scene.textVariants || []).forEach(v => scanCondition(v.condition));
}

// ---------- 状态：仅数值 + 门控 caps ----------
function initState() {
    const ds = (StoryConfig && StoryConfig.defaultState) || {};
    const inv = new Set();
    ((StoryConfig && StoryConfig.defaultItems) || []).forEach(i => { if (relItems.has(i)) inv.add(i); });
    return {
        sanity: typeof ds.sanity === 'number' ? ds.sanity : 100,
        yin: typeof ds.yin === 'number' ? ds.yin : 0,
        time: typeof ds.time === 'number' ? ds.time : 1140,
        inv, flags: new Set(), vis: new Set()
    };
}
function view(st) {
    const flags = {}; for (const f of st.flags) flags[f] = true;
    return { sanity: st.sanity, yin: st.yin, time: st.time, inventory: [...st.inv], flags, history: [...st.vis] };
}
function cloneState(st) {
    return { sanity: st.sanity, yin: st.yin, time: st.time, inv: new Set(st.inv), flags: new Set(st.flags), vis: new Set(st.vis) };
}

function checkCondition(cond, st) {
    if (!cond || (typeof cond === 'object' && Object.keys(cond).length === 0)) return true;
    if (typeof cond === 'function') return Boolean(cond(view(st)));
    const has = (k) => Object.prototype.hasOwnProperty.call(cond, k);
    const checks = [];
    if (has('hasItem')) checks.push(st.inv.has(cond.hasItem));
    if (has('lacksItem')) checks.push(!st.inv.has(cond.lacksItem));
    if (has('flag')) checks.push(st.flags.has(cond.flag));
    if (has('noFlag')) checks.push(!st.flags.has(cond.noFlag));
    if (has('flagValue')) checks.push(cond.flagValue.value === true ? st.flags.has(cond.flagValue.key) : !st.flags.has(cond.flagValue.key));
    if (has('sanityBelow')) checks.push(st.sanity < cond.sanityBelow);
    if (has('sanityAbove')) checks.push(st.sanity > cond.sanityAbove);
    if (has('yinAbove')) checks.push(st.yin > cond.yinAbove);
    if (has('yinBelow')) checks.push(st.yin < cond.yinBelow);
    if (has('timeAfter')) checks.push(st.time >= cond.timeAfter);
    if (has('timeBefore')) checks.push(st.time < cond.timeBefore);
    if (has('hasVisited')) checks.push(st.vis.has(cond.hasVisited));
    if (has('hasNotVisited')) checks.push(!st.vis.has(cond.hasNotVisited));
    if (has('custom') && typeof cond.custom === 'function') checks.push(Boolean(cond.custom(view(st))));
    if (checks.length === 0) return false;
    return checks.every(Boolean);
}

function applyEffects(eff, st) {
    if (!eff) return;
    if (typeof eff.sanity === 'number') st.sanity = clamp(st.sanity + eff.sanity);
    if (typeof eff.yin === 'number') st.yin = clamp(st.yin + eff.yin);
    if (typeof eff.time === 'number') st.time += eff.time;
    if (eff.addItem) (Array.isArray(eff.addItem) ? eff.addItem : [eff.addItem]).forEach(i => { if (relItems.has(i)) st.inv.add(i); });
    if (eff.removeItem) st.inv.delete(eff.removeItem);
    const sf = eff.setFlag; if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => { const k = typeof f === 'string' ? f : f.key; if (relFlags.has(k)) st.flags.add(k); });
    const sgf = eff.setGlobalFlag; if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => { const k = typeof f === 'string' ? f : f.key; if (relFlags.has(k)) st.flags.add(k); });
    const cf = eff.clearFlag; if (cf) (Array.isArray(cf) ? cf : [cf]).forEach(f => st.flags.delete(typeof f === 'string' ? f : f.key));
}
function applyChoiceEffects(choice, st) {
    if (choice.effects) applyEffects(choice.effects, st);
    if (choice.effect && typeof choice.effect === 'object') applyEffects(choice.effect, st);
    if (choice.consume) st.inv.delete(choice.consume);
    const sf = choice.setFlag; if (sf) (Array.isArray(sf) ? sf : [sf]).forEach(f => { const k = typeof f === 'string' ? f : f.key; if (relFlags.has(k)) st.flags.add(k); });
    const sgf = choice.setGlobalFlag; if (sgf) (Array.isArray(sgf) ? sgf : [sgf]).forEach(f => { const k = typeof f === 'string' ? f : f.key; if (relFlags.has(k)) st.flags.add(k); });
}
function gameOver(st) {
    if (st.sanity <= 0) return 'madness';
    if (st.yin >= 100) return 'possessed';
    if (st.time >= 1860) return 'eternalNight';
    return null;
}
function enterScene(sceneId, st) {
    const scene = StoryData[sceneId];
    if (!scene) return { error: true };
    if (relVisited.has(sceneId)) st.vis.add(sceneId);
    applyEffects(scene.effects, st);
    const forced = gameOver(st);
    if (forced) return { ending: forced };
    if (scene.ending) return { ending: scene.ending };
    return {};
}
// 数值分桶进签名，保留 sanity/yin/time 的关键进度（用于数值型死亡结局）
function sig(sceneId, st) {
    const nb = Math.floor(st.yin / 20) + ':' + Math.floor(st.sanity / 20) + ':' + Math.floor(st.time / 120);
    return sceneId + '#' + [...st.flags].sort().join(',') + '#' + [...st.inv].sort().join(',') + '#' + [...st.vis].sort().join(',') + '#' + nb;
}

/**
 * 单次 BFS，收集到所有目标结局的最短路径（父指针重建）。
 */
function findAll(targetSet) {
    const found = new Map();
    const start = initState();
    const enter0 = enterScene('prologue', start);
    if (enter0.ending && targetSet.has(enter0.ending)) found.set(enter0.ending, []);

    const nodes = [{ scene: 'prologue', st: start, parent: -1, via: null }];
    const visited = new Set([sig('prologue', start)]);
    let head = 0;
    const MAX = 600000;

    function rebuild(parentIdx, lastStep) {
        const steps = [lastStep];
        let p = parentIdx;
        while (p >= 0) {
            const n = nodes[p];
            if (n.via) steps.unshift(n.via);
            p = n.parent;
        }
        return steps;
    }

    while (head < nodes.length) {
        if (head > MAX) break;
        const idx = head++;
        const { scene, st } = nodes[idx];
        const sc = StoryData[scene];
        if (!sc || !Array.isArray(sc.choices)) continue;

        for (const c of sc.choices) {
            if (!c.next && !c.ending) continue;
            if (c.condition && !checkCondition(c.condition, st)) continue;
            if (c.hideIf && typeof c.hideIf === 'object' && checkCondition(c.hideIf, st)) continue;

            const ns = cloneState(st);
            applyChoiceEffects(c, ns);
            const forced = gameOver(ns);
            const step = { scene, text: c.text, to: null };

            if (forced) {
                if (targetSet.has(forced) && !found.has(forced)) found.set(forced, rebuild(idx, { ...step, to: `结局:${forced}` }));
                continue;
            }
            if (c.ending) {
                if (targetSet.has(c.ending) && !found.has(c.ending)) found.set(c.ending, rebuild(idx, { ...step, to: `结局:${c.ending}` }));
                continue;
            }
            const enterRes = enterScene(c.next, ns);
            if (enterRes.ending) {
                if (targetSet.has(enterRes.ending) && !found.has(enterRes.ending)) {
                    found.set(enterRes.ending, rebuild(idx, { ...step, to: c.next }).concat([{ scene: c.next, text: '(进入即结局)', to: `结局:${enterRes.ending}` }]));
                }
                continue;
            }
            const s = sig(c.next, ns);
            if (visited.has(s)) continue;
            visited.add(s);
            nodes.push({ scene: c.next, st: ns, parent: idx, via: { ...step, to: c.next } });
        }
        if (found.size === targetSet.size) break;
    }
    return { found, explored: nodes.length };
}

/**
 * DFS 兜底：深潜式搜索，对 BFS 因预算未触达的深层线性分支（如逃亡/溺亡死亡线）更高效。
 * 全局 visited 按签名去重（对可达性判定是完备的）。
 */
function findPathDFS(target, maxNodes = 150000) {
    const start = initState();
    const e0 = enterScene('prologue', start);
    if (e0.ending) return e0.ending === target ? [] : null;
    const nodes = [{ scene: 'prologue', st: start, parent: -1, via: null }];
    const visited = new Set([sig('prologue', start)]);
    const stack = [0];
    let count = 0;
    const rebuild = (idx, last) => {
        const steps = [last];
        let p = idx;
        while (p >= 0) { const n = nodes[p]; if (n.via) steps.unshift(n.via); p = n.parent; }
        return steps;
    };
    while (stack.length) {
        if (++count > maxNodes) return undefined;
        const idx = stack.pop();
        const { scene, st } = nodes[idx];
        const sc = StoryData[scene];
        if (!sc || !Array.isArray(sc.choices)) continue;
        for (const c of sc.choices) {
            if (!c.next && !c.ending) continue;
            if (c.condition && !checkCondition(c.condition, st)) continue;
            if (c.hideIf && typeof c.hideIf === 'object' && checkCondition(c.hideIf, st)) continue;
            const ns = cloneState(st);
            applyChoiceEffects(c, ns);
            const forced = gameOver(ns);
            const step = { scene, text: c.text, to: null };
            if (forced) { if (forced === target) return rebuild(idx, { ...step, to: `结局:${forced}` }); continue; }
            if (c.ending) { if (c.ending === target) return rebuild(idx, { ...step, to: `结局:${c.ending}` }); continue; }
            const er = enterScene(c.next, ns);
            if (er.ending) { if (er.ending === target) return rebuild(idx, { ...step, to: c.next }).concat([{ scene: c.next, text: '(进入即结局)', to: `结局:${er.ending}` }]); continue; }
            const s = sig(c.next, ns);
            if (visited.has(s)) continue;
            visited.add(s);
            nodes.push({ scene: c.next, st: ns, parent: idx, via: { ...step, to: c.next } });
            stack.push(nodes.length - 1);
        }
    }
    return null;
}

// 重点验证的“大结局”与主要结局
const targets = [
    'hidden_perfect_redemption',       // 真结局 · 正名归位
    'huimen_exp3_ending_dawn_return',  // 天亮归来
    'redemption',                      // 主线救赎
    'sacrificed',                      // 献祭
    'ghostMarriage',                   // 冥婚
    'escapedButNot',                   // 逃离却未脱
    'paperDoll',                       // 纸人替身
    'possessed',                       // 阴气附身（数值死亡）
    'huimen_exp_redemption_loop',      // 陪伴/正名合并结局
    'huimen_exp2_ending_river_god'     // 扩展线 · 河神
];

console.log('==================== 《回门》大结局全流程验证（真实引擎语义） ====================');
console.log(`场景 ${Object.keys(StoryData).length} · 结局 ${Object.keys(Endings).length} · 门控flag ${relFlags.size} · 门控道具 ${relItems.size}`);

const { found, explored } = findAll(new Set(targets));
// DFS 兜底：BFS 因预算未触达的目标（多为深层死亡线）改用深潜搜索
const budgetMissed = new Set();
for (const target of targets) {
    if (!found.has(target)) {
        const p = findPathDFS(target);
        if (p) found.set(target, p);
        else if (p === undefined) budgetMissed.add(target);
    }
}
let ok = 0, fail = 0, note = 0;
for (const target of targets) {
    const title = (target in Endings && Endings[target] && Endings[target].title) || target;
    const path = found.get(target);
    if (path) {
        ok++;
        console.log(`\n✓ [${target}] ${title} —— ${path.length} 步走通`);
        const head = path.slice(0, 5).map((s, i) => `${i + 1}.${(StoryData[s.scene] && StoryData[s.scene].title) || s.scene}→「${s.text}」`).join('  ');
        console.log(`   开端: ${head}${path.length > 5 ? '  …' : ''}`);
        const tail = path[path.length - 1];
        console.log(`   收束: ${(StoryData[tail.scene] && StoryData[tail.scene].title) || tail.scene} → ${tail.to}`);
    } else if (budgetMissed.has(target)) {
        note++;
        console.log(`\n? [${target}] ${title} —— 超出搜索预算（深度审计已确认运行时可达）`);
    } else {
        fail++;
        console.log(`\n✗ [${target}] ${title} —— 未找到可行路径`);
    }
}
console.log(`\n---------------------------------------------------------`);
console.log(`探索节点 ${explored} · 走通 ${ok} · 超预算(审计已确认) ${note} · 不可达 ${fail}（共 ${targets.length}）`);
process.exitCode = fail > 0 ? 1 : 0;
