/**
 * 结局聚合
 */

import { Endings as normalEndings } from './normal.js';
import { Endings as deathEndings } from './death.js';
import { Endings as linkEndings } from './link.js';
import { Endings as hidden_journeysEndings } from './hidden_journeys.js';
import { Endings as hidden_ritesEndings } from './hidden_rites.js';

export const Endings = {
    ...normalEndings,
    ...deathEndings,
    ...linkEndings,
    ...hidden_journeysEndings,
    ...hidden_ritesEndings
};

export default Endings;
