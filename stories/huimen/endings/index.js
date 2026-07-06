/**
 * 结局聚合
 */

import { Endings as mainEndings } from './main.js';
import { Endings as hiddenEndings } from './hidden.js';
import { Endings as expEndings } from './exp.js';
import { Endings as exp2Endings } from './exp2.js';
import { Endings as exp3Endings } from './exp3.js';

export const Endings = {
    ...mainEndings,
    ...hiddenEndings,
    ...expEndings,
    ...exp2Endings,
    ...exp3Endings
};

export default Endings;
