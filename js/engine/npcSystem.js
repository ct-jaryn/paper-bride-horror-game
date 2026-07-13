/**
 * 《阴阳簿》NPC 对话系统
 * 支持场景中与 NPC 对话、好感度、条件分支、效果触发。
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { checkCondition } from './effectEngine.js';
import { applyChoiceEffects, applyEffects } from './effectEngine.js';
import { patchGameState, saveStoryState } from './state.js';

let currentNPCId = null;
let currentNodeId = null;

/**
 * 获取当前故事的 NPC 数据
 */
function getNPCs() {
    return Huimen.NPCs || {};
}

/**
 * 获取某个 NPC 的好感度状态
 */
function getNPCState(npcId) {
    const storyId = Huimen.CurrentStory ? Huimen.CurrentStory.id : 'global';
    const all = Huimen.GameState.npcState || {};
    if (!all[storyId]) all[storyId] = {};
    if (!all[storyId][npcId]) all[storyId][npcId] = { affinity: 0, met: false, talked: 0 };
    return all[storyId][npcId];
}

/**
 * 持久化 NPC 状态到 GameState
 */
function syncNPCState(npcId, state) {
    const storyId = Huimen.CurrentStory ? Huimen.CurrentStory.id : 'global';
    const all = { ...(Huimen.GameState.npcState || {}) };
    if (!all[storyId]) all[storyId] = {};
    all[storyId][npcId] = { ...state };
    patchGameState('npcState', all);
}

/**
 * 打开 NPC 对话
 */
export function startNPCDialogue(npcId, nodeId = 'start') {
    const npcs = getNPCs();
    const npc = npcs[npcId];
    if (!npc) {
        console.warn('NPC 不存在:', npcId);
        return;
    }

    currentNPCId = npcId;
    currentNodeId = nodeId;

    const state = getNPCState(npcId);
    state.met = true;
    state.talked += 1;
    syncNPCState(npcId, state);

    emit('npcDialogueStart', { npcId, npc });
    renderDialogue();
    showDialogueOverlay();
}

/**
 * 渲染当前对话节点
 */
function renderDialogue() {
    const npcs = getNPCs();
    const npc = npcs[currentNPCId];
    const node = npc.dialogue[currentNodeId];
    if (!node) {
        console.warn('对话节点不存在:', currentNPCId, currentNodeId);
        closeNPCDialogue();
        return;
    }

    const nameEl = document.getElementById('npc-name');
    const titleEl = document.getElementById('npc-title');
    const textEl = document.getElementById('npc-dialogue-text');
    const choicesEl = document.getElementById('npc-dialogue-choices');
    const affinityEl = document.getElementById('npc-affinity');
    const portraitEl = document.getElementById('npc-portrait-text');

    if (nameEl) nameEl.textContent = npc.name || currentNPCId;
    if (titleEl) titleEl.textContent = npc.title || '';
    if (affinityEl) affinityEl.textContent = formatAffinity(getNPCState(currentNPCId).affinity);
    if (portraitEl) portraitEl.textContent = (npc.name || currentNPCId).charAt(0);

    let text = node.text;
    if (node.effects) applyEffects(node.effects);
    if (typeof text === 'function') text = text(Huimen.GameState, getNPCState(currentNPCId));
    if (textEl) textEl.textContent = text || '';

    if (choicesEl) {
        choicesEl.innerHTML = '';
        const choices = node.choices || [];
        choices.forEach((choice, idx) => {
            if (choice.condition && !checkCondition(choice.condition)) return;

            const btn = document.createElement('button');
            btn.className = 'npc-choice-btn';
            if (choice.danger) btn.classList.add('danger');
            btn.style.setProperty('--order', String(idx));
            btn.textContent = choice.text;
            btn.addEventListener('click', () => handleChoice(choice));
            choicesEl.appendChild(btn);
        });

        if (choicesEl.children.length === 0) {
            const btn = document.createElement('button');
            btn.className = 'npc-choice-btn';
            btn.textContent = '（离开）';
            btn.addEventListener('click', closeNPCDialogue);
            choicesEl.appendChild(btn);
        }
    }
}

/**
 * 处理对话选择
 */
function handleChoice(choice) {
    if (!choice) return;

    // 应用效果（好感度通过 effects.npcAffinity 传递）
    if (choice.effects) {
        if (typeof choice.effects.npcAffinity === 'number' && currentNPCId) {
            const state = getNPCState(currentNPCId);
            state.affinity += choice.effects.npcAffinity;
            if (state.affinity > 100) state.affinity = 100;
            if (state.affinity < -100) state.affinity = -100;
            syncNPCState(currentNPCId, state);
        }
        applyChoiceEffects(choice);
    }

    emit('npcDialogueChoice', { npcId: currentNPCId, choice });

    if (choice.exit) {
        closeNPCDialogue();
        return;
    }

    if (choice.next) {
        currentNodeId = choice.next;
        renderDialogue();
        return;
    }

    if (choice.scene) {
        closeNPCDialogue();
        if (typeof Huimen.renderScene === 'function') {
            Huimen.renderScene(choice.scene);
        }
        return;
    }

    // 默认关闭
    closeNPCDialogue();
}

/**
 * 格式化好感度文本
 */
function formatAffinity(value) {
    if (value >= 80) return '生死之交';
    if (value >= 50) return '推心置腹';
    if (value >= 20) return '略有好感';
    if (value >= -20) return '萍水相逢';
    if (value >= -50) return '心存芥蒂';
    return '势同水火';
}

/**
 * 显示对话浮层
 */
function showDialogueOverlay() {
    const overlay = document.getElementById('npc-dialogue-overlay');
    if (!overlay) return;
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

/**
 * 关闭对话浮层
 */
export function closeNPCDialogue() {
    const overlay = document.getElementById('npc-dialogue-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }

    emit('npcDialogueEnd', { npcId: currentNPCId });

    if (Huimen.CurrentStory) {
        saveStoryState(Huimen.CurrentStory.id);
    }

    currentNPCId = null;
    currentNodeId = null;
}

/**
 * 绑定关闭按钮
 */
function bindOnce() {
    const closeBtn = document.getElementById('npc-dialogue-close');
    if (closeBtn) closeBtn.addEventListener('click', closeNPCDialogue);

    const overlay = document.getElementById('npc-dialogue-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeNPCDialogue();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindOnce);
} else {
    bindOnce();
}

// 导出公共 API
Huimen.startNPCDialogue = startNPCDialogue;
Huimen.closeNPCDialogue = closeNPCDialogue;
Huimen.getNPCState = getNPCState;
