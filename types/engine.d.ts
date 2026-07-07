/**
 * 《阴阳簿》游戏引擎核心类型定义
 */

/** 游戏运行时状态（由 state.js 维护，挂载于 Huimen.GameState） */
export interface GameState {
    storyId: string | null;
    sanity: number;
    yin: number;
    time: number;
    inventory: string[];
    flags: Record<string, any>;
    currentScene: string;
    history: string[];
    choiceLog: any[];
    reviveCheckpoints?: any[];
    npcState: Record<string, Record<string, NPCRuntimeState>>;
    lastSaveAt?: number;
}

/** 单个 NPC 在运行时的状态（按 storyId -> npcId 二级嵌套存储于 GameState.npcState） */
export interface NPCRuntimeState {
    affinity: number;
    met: boolean;
    talked: number;
    [key: string]: any;
}

/** 全局 flag（跨故事持久化，挂载于 Huimen.GlobalFlags） */
export interface GlobalFlags {
    [key: string]: any;
}

/** 场景对象 */
export interface Scene {
    id: string;
    title: string;
    text: string | ((state: GameState) => string);
    textVariants?: TextVariant[];
    effects?: Effects;
    choices?: Choice[];
    condition?: Condition;
    hallucination?: string;
    cg?: string;
    onEnter?: (state: GameState) => void;
    ending?: string;
    [key: string]: any;
}

/** 状态感知文本变体（满足 condition 时追加到 text 之后） */
export interface TextVariant {
    condition: Condition;
    text: string;
}

/** 玩家选择对象 */
export interface Choice {
    text: string;
    next?: string;
    ending?: string;
    condition?: Condition;
    effect?: (state: GameState) => void;
    effects?: Effects;
    consume?: string;
    setFlag?: string | string[];
    clearFlag?: string;
    hideIf?: (state: GameState) => boolean;
    hidden?: boolean;
    npc?: string;
    npcNode?: string;
    scene?: string;
    custom?: any;
    danger?: boolean;
    exit?: boolean;
    [key: string]: any;
}

/** 效果（数值/物品/flag/视觉特效） */
export interface Effects {
    sanity?: number;
    yin?: number;
    time?: number;
    addItem?: string | string[];
    removeItem?: string;
    setFlag?: string | string[];
    clearFlag?: string;
    visual?: VisualEffect;
    visualDuration?: number;
    npcAffinity?: number;
    [key: string]: any;
}

/** 视觉特效类型 */
export type VisualEffect = 'flicker' | 'blood' | 'shake' | 'whisper' | 'paper-doll' | (string & {});

/** 条件 */
export interface Condition {
    hasItem?: string;
    lacksItem?: string;
    flag?: string;
    noFlag?: string;
    flagValue?: { key: string; value: any };
    sanityBelow?: number;
    sanityAbove?: number;
    yinAbove?: number;
    yinBelow?: number;
    timeAfter?: number;
    timeBefore?: number;
    hasVisited?: string;
    hasNotVisited?: string;
    custom?: (state: GameState) => boolean;
    [key: string]: any;
}

/** 结局 */
export interface Ending {
    id: string;
    title: string;
    text: string;
    description?: string;
    hidden?: boolean;
    type?: string;
    condition?: Condition;
    cg?: string;
    [key: string]: any;
}

/** NPC 定义 */
export interface NPC {
    id: string;
    name: string;
    title: string;
    dialogue: Record<string, DialogueNode>;
    affinity?: number;
    effects?: Effects;
    [key: string]: any;
}

/** 对话节点 */
export interface DialogueNode {
    id?: string;
    text: string | ((state: GameState, npcState: NPCRuntimeState) => string);
    choices?: DialogueChoice[];
    effects?: Effects;
    next?: string;
    exit?: boolean;
    [key: string]: any;
}

/** 对话选项 */
export interface DialogueChoice {
    text: string;
    next?: string;
    exit?: boolean;
    scene?: string;
    condition?: Condition;
    effects?: Effects;
    danger?: boolean;
    [key: string]: any;
}

/** 故事清单条目（manifest.js 中每条记录） */
export interface StoryManifestEntry {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    difficulty: string;
    horrorLevel: number;
    playTime: string;
    tags: string[];
    scriptPath: string;
}

/** 故事配置（config.js） */
export interface StoryConfig {
    id: string;
    title: string;
    subtitle: string;
    difficulty: string;
    horrorLevel: number;
    playTime: string;
    tags: string[];
    defaultState?: Partial<GameState>;
    defaultItems?: string[];
    timePhases?: any[];
    specialRules?: Record<string, any>;
}

/** 故事数据（场景 id -> 场景对象） */
export interface StoryData {
    [sceneId: string]: Scene;
}

/** 故事模块导出结构（stories/<id>/index.js） */
export interface StoryModule {
    StoryData: StoryData;
    Endings: Record<string, Ending>;
    NPCs: Record<string, NPC>;
    StoryConfig: StoryConfig;
}

/** 时辰刻名定义 */
export interface Shichen {
    name: string;
    start: number;
    end: number;
}

/** 事件总线监听器回调 */
export type EventCallback<T = any> = (data: T) => void;

/** 事件系统接口 */
export interface GameEvents {
    listeners: Record<string, EventCallback[]>;
    on<T = any>(event: string, callback: EventCallback<T>): void;
    off<T = any>(event: string, callback: EventCallback<T>): void;
    emit<T = any>(event: string, data: T): void;
}

/** Toast 选项 */
export interface ToastOptions {
    icon?: string;
    title?: string;
    description?: string;
    duration?: number;
    className?: string;
}

/** Toast 管理器 */
export interface ToastManager {
    show(options: ToastOptions): void;
}

/** Huimen 全局命名空间（window.Huimen） */
export interface HuimenNamespace {
    CurrentStory: StoryManifestEntry | null;
    StoryData: StoryData;
    Endings: Record<string, Ending>;
    NPCs: Record<string, NPC>;
    GameState: GameState;
    GlobalFlags: GlobalFlags;
    StoryManifest: StoryManifestEntry[] | null;
    StoryConfig: StoryConfig | null;
    GameEvents: GameEvents;
    ToastManager: ToastManager | null;
    loadStory: ((storyId: string, forceReset?: boolean) => void) | null;
    showScreen: ((name: string) => void) | null;
    renderScene: ((sceneId: string) => void) | null;
    skipTyping: (() => void) | null;
    showLoading: ((text?: string) => void) | null;
    hideLoading: (() => void) | null;
    startNPCDialogue: ((npcId: string, nodeId?: string) => void) | null;
    closeNPCDialogue: (() => void) | null;
    getNPCState: ((npcId: string) => NPCRuntimeState) | null;
    getChoiceLog: (() => any[]) | null;
    exportChoiceLog: (() => void) | null;
    openRecordOverlay: (() => void) | null;
    closeRecordOverlay: (() => void) | null;
    openJourneyOverlay: (() => void) | null;
    closeJourneyOverlay: (() => void) | null;
    [key: string]: any;
}
