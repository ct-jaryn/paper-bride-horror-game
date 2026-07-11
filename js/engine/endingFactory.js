/**
 * 《阴阳簿》结局与 NPC 工厂函数
 *
 * 提供可选的辅助函数，用于减少 endings/npcs 数据中的重复字段。
 */

/**
 * 创建一个结局对象。
 *
 * @param {string} id - 结局唯一标识
 * @param {object} options
 * @param {string} options.title - 结局标题
 * @param {string} options.text - 结局正文
 * @param {string} [options.description] - 结局简述
 * @param {boolean} [options.hidden] - 是否为隐藏结局
 * @param {object} [options.condition] - 解锁条件
 * @returns {object} 结局对象
 */
export function createEnding(id, options) {
    const { title, text } = options;
    const ending = { id, ...options };
    // 确保 id 参数优先，避免 options 中同名属性覆盖
    ending.id = id;
    // 自动识别标题以"真结局"开头的结局
    if (typeof ending.title === 'string' && ending.title.startsWith('真结局')) {
        ending.trueEnding = true;
    }
    return ending;
}

/**
 * 创建一个 NPC 对象。
 *
 * @param {string} id - NPC 唯一标识
 * @param {object} options
 * @param {string} options.name - NPC 名称
 * @param {string} options.title - NPC 称号
 * @param {object} options.dialogue - 对话节点图
 * @param {object} [options.affinity] - 初始好感度
 * @param {object} [options.effects] - 交互效果
 * @returns {object} NPC 对象
 */
export function createNPC(id, { name, title, dialogue, affinity, effects }) {
    const npc = { id, name, title, dialogue };
    if (affinity !== undefined) npc.affinity = affinity;
    if (effects) npc.effects = effects;
    return npc;
}

/**
 * 创建一个对话节点。
 *
 * @param {string} nodeId - 节点 id
 * @param {object} options
 * @param {string} options.text - 节点文本
 * @param {Array} options.choices - 选项列表
 * @param {object} [options.effects] - 进入节点时生效的效果
 * @returns {object} 对话节点对象
 */
export function createDialogueNode(nodeId, { text, choices, effects, next, exit }) {
    const node = { id: nodeId, text, choices };
    if (effects) node.effects = effects;
    if (next) node.next = next;
    if (exit) node.exit = exit;
    return node;
}

/**
 * 创建一个 NPC 对话选项。
 *
 * @param {object} options
 * @param {string} options.text - 按钮文本
 * @param {string} [options.next] - 跳转节点 id
 * @param {boolean} [options.exit] - 是否退出对话
 * @param {object} [options.condition] - 显示条件
 * @param {object} [options.effects] - 选择后效果
 * @returns {object} NPC 选项对象
 */
export function createDialogueChoice({ text, next, exit, condition, effects }) {
    const choice = { text };
    if (next) choice.next = next;
    if (exit) choice.exit = exit;
    if (condition) choice.condition = condition;
    if (effects) choice.effects = effects;
    return choice;
}
