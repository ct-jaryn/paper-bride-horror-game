/**
 * 《阴阳簿》工厂函数类型定义
 *
 * 为 sceneFactory.js 和 endingFactory.js 的工厂函数声明精确类型，
 * 帮助故事开发者在 createScene / createChoice / createEnding / createNPC /
 * createDialogueNode / createDialogueChoice 时获得类型提示与代码补全。
 */

import {
    Scene,
    Choice,
    Ending,
    NPC,
    DialogueNode,
    DialogueChoice,
    Effects,
    Condition,
    GameState
} from './engine';

/** createScene 的 options 参数 */
export interface CreateSceneOptions {
    title: string;
    text: string | ((state: GameState) => string);
    textVariants?: Array<{ condition: Condition; text: string }>;
    effects?: Effects;
    choices?: Choice[];
    condition?: Condition;
    hallucination?: string;
    cg?: string;
    onEnter?: (state: GameState) => void;
    ending?: string;
}

/**
 * 创建一个场景对象。
 * 来源：js/engine/sceneFactory.js
 */
export function createScene(id: string, options: CreateSceneOptions): Scene;

/** createChoice 的 options 参数 */
export interface CreateChoiceOptions {
    text: string;
    next?: string;
    ending?: string;
    condition?: Condition;
    effect?: (state: GameState) => void;
    effects?: Effects;
    consume?: string;
    setFlag?: string | string[];
    hideIf?: (state: GameState) => boolean;
    hidden?: boolean;
    npc?: string;
    npcNode?: string;
    custom?: any;
    danger?: boolean;
    exit?: boolean;
    scene?: string;
}

/**
 * 创建一个选择对象。
 * 来源：js/engine/sceneFactory.js
 */
export function createChoice(options: CreateChoiceOptions): Choice;

/** createEnding 的 options 参数 */
export interface CreateEndingOptions {
    title: string;
    text: string;
    description?: string;
    hidden?: boolean;
    type?: string;
    condition?: Condition;
    cg?: string;
    [key: string]: any;
}

/**
 * 创建一个结局对象。
 * 来源：js/engine/endingFactory.js
 */
export function createEnding(id: string, options: CreateEndingOptions): Ending;

/** createNPC 的 options 参数 */
export interface CreateNPCOptions {
    name: string;
    title: string;
    dialogue: Record<string, DialogueNode>;
    affinity?: number;
    effects?: Effects;
    [key: string]: any;
}

/**
 * 创建一个 NPC 对象。
 * 来源：js/engine/endingFactory.js
 */
export function createNPC(id: string, options: CreateNPCOptions): NPC;

/** createDialogueNode 的 options 参数 */
export interface CreateDialogueNodeOptions {
    text: string | ((state: GameState, npcState: any) => string);
    choices?: DialogueChoice[];
    effects?: Effects;
    next?: string;
    exit?: boolean;
    [key: string]: any;
}

/**
 * 创建一个对话节点对象。
 * 来源：js/engine/endingFactory.js
 */
export function createDialogueNode(nodeId: string, options: CreateDialogueNodeOptions): DialogueNode;

/** createDialogueChoice 的 options 参数 */
export interface CreateDialogueChoiceOptions {
    text: string;
    next?: string;
    exit?: boolean;
    scene?: string;
    condition?: Condition;
    effects?: Effects;
    danger?: boolean;
    [key: string]: any;
}

/**
 * 创建一个 NPC 对话选项对象。
 * 来源：js/engine/endingFactory.js
 */
export function createDialogueChoice(options: CreateDialogueChoiceOptions): DialogueChoice;
