/**
 * 结局聚合
 */

import { Endings as mainEndings } from './main.js';
import { Endings as hiddenEndings } from './hidden.js';
import { Endings as expEndings } from './exp.js';
import { Endings as exp2Endings } from './exp2.js';
import { Endings as exp3Endings } from './exp3.js';

const ALL_ENDINGS = {
    ...mainEndings,
    ...hiddenEndings,
    ...expEndings,
    ...exp2Endings,
    ...exp3Endings
};

// 这些结局本质上是同一条“陪伴/正名”结果的不同标题，合并后减少收集负担。
// 保留非枚举别名，兼容旧存档和仍使用旧 ending id 的场景。
const MERGED_ENDINGS = {
    huimen_exp_ending_name_list: 'hidden_zhouWomen',
    huimen_exp_ending_name_stone: 'hidden_zhouWomen',
    huimen_exp_ending_sing_together: 'huimen_exp_redemption_loop',
    huimen_exp_ending_last_dance: 'huimen_exp_redemption_loop',
    huimen_exp_ending_farewell: 'huimen_exp_redemption_loop',
    huimen_exp_ending_apology: 'huimen_exp_redemption_loop'
};

export const Endings = Object.fromEntries(
    Object.entries(ALL_ENDINGS).filter(([id]) => !Object.hasOwn(MERGED_ENDINGS, id))
);

for (const [legacyId, activeId] of Object.entries(MERGED_ENDINGS)) {
    Object.defineProperty(Endings, legacyId, {
        value: Endings[activeId],
        enumerable: false,
        configurable: true
    });
}

export default Endings;
