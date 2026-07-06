/**
 * 《守夜》结局聚合
 */

import { HiddenEndings } from './hidden.js';
import { DeathEndings } from './death.js';
import { NormalEndings } from './normal.js';

export const Endings = {
    ...HiddenEndings,
    ...DeathEndings,
    ...NormalEndings
};

export default Endings;
