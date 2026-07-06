/**
 * NPC 聚合
 */

import { NPCs as lin_shuNPCs } from './lin_shu.js';
import { NPCs as zhou_popoNPCs } from './zhou_popo.js';
import { NPCs as yunxiuNPCs } from './yunxiu.js';
import { NPCs as old_fanNPCs } from './old_fan.js';
import { NPCs as apprentice_ghostNPCs } from './apprentice_ghost.js';
import { NPCs as chenlei_ghostNPCs } from './chenlei_ghost.js';

export const NPCs = {
    ...lin_shuNPCs,
    ...zhou_popoNPCs,
    ...yunxiuNPCs,
    ...old_fanNPCs,
    ...apprentice_ghostNPCs,
    ...chenlei_ghostNPCs
};

export default NPCs;
