/**
 * NPC 聚合
 */

import { NPCs as townNPCs } from './town.js';
import { NPCs as riverNPCs } from './river.js';

export const NPCs = {
    ...townNPCs,
    ...riverNPCs
};

export default NPCs;
