/**
 * 《阴阳簿》场景与选择工厂函数
 *
 * 提供可选的辅助函数，用于减少故事数据中的重复字段。
 * 现有场景对象字面量仍然完全兼容，无需强制迁移。
 */

/**
 * 创建一个场景对象。
 *
 * @param {string} id - 场景唯一标识
 * @param {object} options
 * @param {string} options.title - 场景标题
 * @param {string} options.text - 场景正文
 * @param {Array<{condition: object, text: string}>} [options.textVariants] - 状态感知补充文本，满足 condition 时追加到 text 之后
 * @param {object} [options.effects] - 进入场景时生效的数值/物品效果
 * @param {Array} [options.choices] - 玩家可选项
 * @param {string} [options.cg] - CG id
 * @param {Function} [options.onEnter] - 进入场景时执行的副作用
 * @returns {object} 场景对象
 */
export function createScene(id, { title, text, textVariants, effects, choices, condition, hallucination, cg, onEnter, ending }) {
    const scene = { id, title, text };
    if (textVariants) scene.textVariants = textVariants;
    if (effects) scene.effects = effects;
    if (choices) scene.choices = choices;
    if (condition) scene.condition = condition;
    if (hallucination) scene.hallucination = hallucination;
    if (cg) scene.cg = cg;
    if (onEnter) scene.onEnter = onEnter;
    if (ending) scene.ending = ending;
    return scene;
}

/**
 * 创建一个选择对象。
 *
 * @param {object} options
 * @param {string} options.text - 按钮文本
 * @param {string} [options.next] - 跳转目标场景 id
 * @param {string} [options.ending] - 触发的结局 id
 * @param {Function} [options.condition] - 显示条件
 * @param {Function} [options.effect] - 选择后的副作用函数
 * @param {object} [options.effects] - 选择后的数值/物品效果
 * @param {string} [options.consume] - 消耗的物品 id
 * @param {object} [options.setFlag] - 设置的 flag
 * @param {Function} [options.hideIf] - 隐藏条件
 * @param {string} [options.npc] - 进入的 NPC 对话 id
 * @param {string} [options.npcNode] - NPC 对话节点
 * @param {boolean} [options.danger] - 是否为危险选项
 * @param {boolean} [options.exit] - 是否为退出选项
 * @returns {object} 选择对象
 */
export function createChoice({
    text,
    next,
    ending,
    condition,
    effect,
    effects,
    consume,
    setFlag,
    hideIf,
    hidden,
    npc,
    npcNode,
    custom,
    danger,
    exit
}) {
    const choice = { text };
    if (next) choice.next = next;
    if (ending) choice.ending = ending;
    if (condition) choice.condition = condition;
    if (effect) choice.effect = effect;
    if (effects) choice.effects = effects;
    if (consume) choice.consume = consume;
    if (setFlag) choice.setFlag = setFlag;
    if (hideIf) choice.hideIf = hideIf;
    if (hidden) choice.hidden = hidden;
    if (npc) choice.npc = npc;
    if (npcNode) choice.npcNode = npcNode;
    if (custom !== undefined) choice.custom = custom;
    if (danger !== undefined) choice.danger = danger;
    if (exit) choice.exit = exit;
    return choice;
}
