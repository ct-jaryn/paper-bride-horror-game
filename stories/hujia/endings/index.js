/**
 * 结局聚合
 */

import { Endings as trueEndings } from './true.js';
import { Endings as deathEndings } from './death.js';
import { Endings as hidden_bondsEndings } from './hidden_bonds.js';
import { Endings as hidden_fatesEndings } from './hidden_fates.js';

export const Endings = {
    ...trueEndings,
    ...deathEndings,
    ...hidden_bondsEndings,
    ...hidden_fatesEndings
};

export default Endings;
