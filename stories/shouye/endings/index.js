/**
 * 结局聚合
 */

import { Endings as hidden_trueEndings } from './hidden_true.js';
import { Endings as hidden_publicEndings } from './hidden_public.js';
import { Endings as hidden_actsEndings } from './hidden_acts.js';
import { Endings as hidden_peopleEndings } from './hidden_people.js';
import { Endings as deathEndings } from '././death.js';
import { Endings as normalEndings } from '././normal.js';

const ALL_ENDINGS = {
    ...hidden_trueEndings,
    ...hidden_publicEndings,
    ...hidden_actsEndings,
    ...hidden_peopleEndings,
    ...deathEndings,
    ...normalEndings
};

// 巡夜旧分支中的展示型/重复结局已下线，保留定义文件便于旧存档兼容，但不再作为可收集结局。
const REMOVED_ENDINGS = new Set([
    'hidden_allSoulsRelease',
    'death_riverBottom',
    'death_arsonCurse',
    'normal_simpleWatch',
    // 以下彩蛋结局仅由已下线的“巡夜结局选择器”(patrol_corridor)引用，主线场景未引用；
    // 保留定义以兼容旧存档，但不计入可收集结局。
    'hidden_tearBlessing',
    'hidden_silverHairpinReturn',
    'hidden_stageRecord',
    'hidden_riversideStage',
    'hidden_paperWhisperDuet',
    'hidden_yunxiuNamePlaque',
    'hidden_lastAudience',
    'hidden_burningCurtain',
    'hidden_morgueLullaby',
    'hidden_farewellSong',
    'hidden_callerPeace',
    'hidden_apprenticeFamily',
    'hidden_zhouShengRebornHint',
    'hidden_gravekeeperLife'
]);

export const Endings = Object.fromEntries(
    Object.entries(ALL_ENDINGS).filter(([id]) => !REMOVED_ENDINGS.has(id))
);

export default Endings;
