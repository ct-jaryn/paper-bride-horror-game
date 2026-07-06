/**
 * 结局聚合
 */

import { Endings as trueEndings } from './true.js';
import { Endings as deathEndings } from './death.js';
import { Endings as hidden_fireEndings } from './hidden_fire.js';
import { Endings as hidden_selfEndings } from './hidden_self.js';
import { Endings as hidden_lifeEndings } from './hidden_life.js';

export const Endings = {
    ...trueEndings,
    ...deathEndings,
    ...hidden_fireEndings,
    ...hidden_selfEndings,
    ...hidden_lifeEndings
};

export default Endings;
