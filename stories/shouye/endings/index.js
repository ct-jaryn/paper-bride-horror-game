/**
 * 结局聚合
 */

import { Endings as hidden_trueEndings } from './hidden_true.js';
import { Endings as hidden_publicEndings } from './hidden_public.js';
import { Endings as deathEndings } from '././death.js';
import { Endings as normalEndings } from '././normal.js';

const ALL_ENDINGS = {
    ...hidden_trueEndings,
    ...hidden_publicEndings,
    ...deathEndings,
    ...normalEndings
};

// 巡夜旧分支中的展示型/重复结局已下线，保留定义文件便于旧存档兼容，但不再作为可收集结局。
const REMOVED_ENDINGS = new Set([
    'hidden_allSoulsRelease',
    'death_riverBottom',
    'death_arsonCurse',
    'normal_simpleWatch'
]);

export const Endings = Object.fromEntries(
    Object.entries(ALL_ENDINGS).filter(([id]) => !REMOVED_ENDINGS.has(id))
);

export default Endings;
