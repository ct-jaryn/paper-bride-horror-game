/**
 * 《阴阳簿》成就系统
 *
 * 成就分为两类：
 * 1. 单卷成就：完成某卷故事的特定结局或关键事件
 * 2. 跨卷成就：需要在多卷之间触发联动条件
 *
 * 成就数据通过 SaveManager 持久化。
 */

import { Huimen } from './js/engine/namespace.js';
import { loadAchievements, saveAchievements } from './js/engine/saveManager.js';

export const Achievements = [
    // 基础成就
    {
        id: 'first_tale',
        name: '初窥阴阳',
        description: '完成任意一卷故事，翻开阴阳簿的第一页。',
        icon: '簿',
        hidden: false,
        condition: { type: 'anyEnding' }
    },
    {
        id: 'all_volumes',
        name: '阴阳全录',
        description: '完成全部七卷故事，至少触达每个世界的一角。',
        icon: '全',
        hidden: false,
        condition: { type: 'allStoriesAnyEnding', storyIds: ['huimen', 'shouye', 'xitai', 'tishen', 'heniang', 'hujia', 'ganshi'] }
    },

    // 单卷成就
    {
        id: 'huimen_completed',
        name: '回门之人',
        description: '完成《回门》，回到三十年未归的山村。',
        icon: '门',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'huimen' }
    },
    {
        id: 'shouye_completed',
        name: '守夜之人',
        description: '完成《守夜》，在殡仪馆度过一个不眠之夜。',
        icon: '夜',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'shouye' }
    },
    {
        id: 'xitai_completed',
        name: '戏台之人',
        description: '完成《戏台》，听完那出未唱完的鬼戏。',
        icon: '戏',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'xitai' }
    },
    {
        id: 'tishen_completed',
        name: '替身之人',
        description: '完成《替身》，见识纸扎替身的执念。',
        icon: '纸',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'tishen' }
    },
    {
        id: 'heniang_completed',
        name: '河娘之人',
        description: '完成《河娘》，听见河边唱歌的女人。',
        icon: '河',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'heniang' }
    },
    {
        id: 'hujia_completed',
        name: '狐嫁之人',
        description: '完成《狐嫁》，与青丘山的狐女结下一段缘。',
        icon: '狐',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'hujia' }
    },
    {
        id: 'ganshi_completed',
        name: '赶尸之人',
        description: '完成《赶尸》，走完湘西雨夜的送尸之路。',
        icon: '尸',
        hidden: false,
        condition: { type: 'storyAnyEnding', storyId: 'ganshi' }
    },

    // 关键结局成就
    {
        id: 'xiulan_mercy',
        name: '慈悲为怀',
        description: '在《回门》中选择宽恕秀兰，让亡魂得以安息。',
        icon: '恕',
        hidden: false,
        condition: { type: 'storyEnding', storyId: 'huimen', endingId: 'redemption' }
    },
    {
        id: 'paper_replaced',
        name: '纸人替身',
        description: '在《替身》中彻底被纸人取代。',
        icon: '替',
        hidden: false,
        condition: { type: 'storyEnding', storyId: 'tishen', endingId: 'replaced' }
    },
    {
        id: 'thirty_years_song',
        name: '三十年之歌',
        description: '在《河娘》中替母亲兑现三十年的承诺。',
        icon: '诺',
        hidden: false,
        condition: { type: 'storyEnding', storyId: 'heniang', endingId: 'thirtyYearsSong' }
    },
    {
        id: 'fox_immortal',
        name: '狐婿长生',
        description: '在《狐嫁》中真正成为狐族的一员。',
        icon: '妖',
        hidden: false,
        condition: { type: 'anyOfEndings', storyId: 'hujia', endingIds: ['foxHusband', 'becomeFox', 'fiftyYears'] }
    },
    {
        id: 'corpse_delivered',
        name: '夜路走多',
        description: '在《赶尸》中成功将尸体送达目的地。',
        icon: '铃',
        hidden: false,
        condition: { type: 'anyOfEndings', storyId: 'ganshi', endingIds: ['arrivedQingshi', 'savedBride', 'passedTheTest', 'ghostRealizesFault'] }
    },

    // 跨卷联动成就（隐藏）
    {
        id: 'zhou_clan_link',
        name: '周家迷局',
        description: '在《狐嫁》中身为周远，又从《赶尸》抵达青石镇周家。两个世界，同一个姓氏。',
        icon: '周',
        hidden: true,
        condition: {
            type: 'allConditions',
            conditions: [
                { type: 'storyAnyEnding', storyId: 'hujia' },
                { type: 'globalFlag', flag: 'hujia_to_zhou' }
            ]
        }
    },
    {
        id: 'qingshi_connection',
        name: '青石镇往事',
        description: '在《赶尸》中抵达青石镇。那里似乎与许多故事都有关。',
        icon: '石',
        hidden: true,
        condition: { type: 'globalFlag', flag: 'ganshi_to_qingshi' }
    },
    {
        id: 'truth_seeker',
        name: '真相追寻者',
        description: '在三卷不同的故事中，都曾触及事件的核心真相。',
        icon: '真',
        hidden: false,
        condition: {
            type: 'flagCountAtLeast',
            flags: ['knowsTruth', 'knowsFullStory', 'knowsXiuguStory', 'knowsAllMurdered', 'knowsExchange'],
            count: 3
        }
    },
    {
        id: 'ghost_whisperer',
        name: '通灵者',
        description: '在守夜、河娘、赶尸三卷中，都曾与亡魂直接对话。',
        icon: '灵',
        hidden: true,
        condition: {
            type: 'allConditions',
            conditions: [
                { type: 'globalFlag', flag: 'knowsName' },
                { type: 'globalFlag', flag: 'knowsPromise' },
                { type: 'globalFlag', flag: 'knowsGhostBride' }
            ]
        }
    },
    {
        id: 'all_bad_ends',
        name: '万劫不复',
        description: '在三卷不同故事中触达死亡、疯狂或被附身的结局。',
        icon: '劫',
        hidden: true,
        condition: {
            type: 'badEndingCountAtLeast',
            badEndingIds: ['madness', 'possessed', 'eternalNight', 'replaced', 'paperTrapped', 'joinMother', 'lostInFoxRealm', 'corpsesTaken', 'imprisoned'],
            count: 3
        }
    },
    {
        id: 'hidden_collector',
        name: '幽冥遍览',
        description: '在多条故事线中触达 7 个以上的隐藏结局，窥见阴阳簿的幽微一角。',
        icon: '幽',
        hidden: true,
        condition: { type: 'hiddenEndingCountAtLeast', count: 7 }
    },

    // 特殊探索成就
    {
        id: 'inventory_collector',
        name: '拾荒者',
        description: '在单卷故事中同时携带过至少三件物品。',
        icon: '物',
        hidden: false,
        condition: { type: 'inventorySizeAtLeast', count: 3 }
    },
    {
        id: 'low_sanity_survivor',
        name: '濒临崩溃',
        description: '理智值降到 10 以下后仍存活至结局。',
        icon: '疯',
        hidden: false,
        condition: { type: 'flagSet', flag: 'survivedLowSanity' }
    }
];

/**
 * 成就引擎
 */
export const AchievementEngine = {
    // 已解锁成就 id 集合
    unlocked: new Set(),

    // 已达成结局记录：{ storyId: [endingId, ...] }
    endingsReached: {},

    // 初始化，从 SaveManager 读取
    init() {
        try {
            const data = loadAchievements();
            this.unlocked = new Set(data.unlocked || []);
            this.endingsReached = data.endingsReached || {};
        } catch (e) {
            console.error('读取成就失败:', e);
            this.unlocked = new Set();
            this.endingsReached = {};
        }
    },

    // 保存到 SaveManager
    save() {
        try {
            saveAchievements({
                unlocked: Array.from(this.unlocked),
                endingsReached: this.endingsReached
            });
        } catch (e) {
            console.error('保存成就失败:', e);
        }
    },

    // 记录一个结局
    recordEnding(storyId, endingId) {
        if (!this.endingsReached[storyId]) {
            this.endingsReached[storyId] = [];
        }
        if (!this.endingsReached[storyId].includes(endingId)) {
            this.endingsReached[storyId].push(endingId);
            this.save();
            return true;
        }
        return false;
    },

    // 检查单条成就条件
    checkCondition(condition, context) {
        if (!condition) return true;

        const { storyId, endingId, globalFlags, currentEndingId } = context;
        const endings = this.endingsReached;

        switch (condition.type) {
            case 'anyEnding':
                return Object.keys(endings).some(sid => endings[sid].length > 0);

            case 'storyAnyEnding':
                return !!(endings[condition.storyId] && endings[condition.storyId].length > 0);

            case 'storyEnding':
                return !!(endings[condition.storyId] && endings[condition.storyId].includes(condition.endingId));

            case 'anyOfEndings':
                return !!(endings[condition.storyId] &&
                    condition.endingIds.some(eid => endings[condition.storyId].includes(eid)));

            case 'allStoriesAnyEnding':
                return condition.storyIds.every(sid => endings[sid] && endings[sid].length > 0);

            case 'globalFlag':
                return !!globalFlags[condition.flag];

            case 'flagSet':
                // 当前故事运行时 flag 或全局 flag
                return !!(context.flags && context.flags[condition.flag]) || !!globalFlags[condition.flag];

            case 'flagCountAtLeast': {
                const matched = condition.flags.filter(f => globalFlags[f] || (context.flags && context.flags[f]));
                return matched.length >= condition.count;
            }

            case 'badEndingCountAtLeast': {
                let count = 0;
                Object.keys(endings).forEach(sid => {
                    endings[sid].forEach(eid => {
                        if (condition.badEndingIds.includes(eid)) count++;
                    });
                });
                return count >= condition.count;
            }

            case 'hiddenEndingCountAtLeast': {
                let count = 0;
                Object.keys(endings).forEach(sid => {
                    endings[sid].forEach(eid => {
                        if (eid.startsWith('hidden_')) count++;
                    });
                });
                return count >= condition.count;
            }

            case 'inventorySizeAtLeast':
                return !!(context.inventory && context.inventory.length >= condition.count);

            case 'allConditions':
                return condition.conditions.every(c => this.checkCondition(c, context));

            case 'anyCondition':
                return condition.conditions.some(c => this.checkCondition(c, context));

            default:
                return false;
        }
    },

    // 检查所有成就，返回本次新解锁的成就列表
    checkAll(context) {
        const newlyUnlocked = [];
        Achievements.forEach(ach => {
            if (this.unlocked.has(ach.id)) return;
            if (this.checkCondition(ach.condition, context)) {
                this.unlocked.add(ach.id);
                newlyUnlocked.push(ach);
            }
        });
        if (newlyUnlocked.length > 0) {
            this.save();
        }
        return newlyUnlocked;
    },

    // 获取全部成就（含解锁状态）
    getAll() {
        return Achievements.map(ach => ({
            ...ach,
            unlocked: this.unlocked.has(ach.id)
        }));
    },

    // 获取解锁数量
    getUnlockedCount() {
        return this.unlocked.size;
    },

    // 重置（调试用）
    reset() {
        this.unlocked.clear();
        this.endingsReached = {};
        this.save();
    }
};

// 注册到 Huimen 命名空间，供其他模块访问
Huimen.AchievementEngine = AchievementEngine;
