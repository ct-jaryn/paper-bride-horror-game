/**
 * 结局聚合
 */

import { Endings as normalEndings } from './normal.js';
import { Endings as deathEndings } from './death.js';
import { Endings as hidden_truthEndings } from './hidden_truth.js';
import { Endings as hidden_stageEndings } from './hidden_stage.js';

export const Endings = {
    ...normalEndings,
    ...deathEndings,
    ...hidden_truthEndings,
    ...hidden_stageEndings
};

export default Endings;
