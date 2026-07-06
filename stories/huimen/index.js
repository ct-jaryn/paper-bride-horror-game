/**
 * 《回门》故事入口
 */

import { scenes as baseScenes } from './scenes/_base.js';
import { scenes as expScenes } from './scenes/_exp.js';
import { scenes as exp2Scenes } from './scenes/_exp2.js';
import { scenes as exp3Scenes } from './scenes/_exp3.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...baseScenes,
    ...expScenes,
    ...exp2Scenes,
    ...exp3Scenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
