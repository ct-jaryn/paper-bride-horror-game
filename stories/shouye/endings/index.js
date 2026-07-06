/**
 * 结局聚合
 */

import { Endings as hidden_trueEndings } from './hidden_true.js';
import { Endings as hidden_publicEndings } from './hidden_public.js';
import { Endings as hidden_actsEndings } from './hidden_acts.js';
import { Endings as hidden_peopleEndings } from './hidden_people.js';
import { Endings as deathEndings } from '././death.js';
import { Endings as normalEndings } from '././normal.js';

export const Endings = {
    ...hidden_trueEndings,
    ...hidden_publicEndings,
    ...hidden_actsEndings,
    ...hidden_peopleEndings,
    ...deathEndings,
    ...normalEndings
};

export default Endings;
