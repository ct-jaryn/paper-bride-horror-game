/**
 * 结局聚合
 */

import { Endings as trueEndings } from './true.js';
import { Endings as normal_and_deathEndings } from './normal_and_death.js';
import { Endings as hiddenEndings } from './hidden.js';

export const Endings = {
    ...trueEndings,
    ...normal_and_deathEndings,
    ...hiddenEndings
};

export default Endings;
