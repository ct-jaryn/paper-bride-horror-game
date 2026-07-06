/**
 * 场景聚合：基础场景（prologue/main/escape/coffin/ancestral 等）
 */

import { scenes as ancestralScenes } from './ancestral.js';
import { scenes as coffinScenes } from './coffin.js';
import { scenes as escapeScenes } from './escape.js';
import { scenes as ghostScenes } from './ghost.js';
import { scenes as mainScenes } from './main.js';
import { scenes as paperScenes } from './paper.js';
import { scenes as prologueScenes } from './prologue.js';
import { scenes as wellScenes } from './well.js';
import { scenes as xiulanScenes } from './xiulan.js';
import { scenes as zhouScenes } from './zhou.js';

export const scenes = {
    ...ancestralScenes,
    ...coffinScenes,
    ...escapeScenes,
    ...ghostScenes,
    ...mainScenes,
    ...paperScenes,
    ...prologueScenes,
    ...wellScenes,
    ...xiulanScenes,
    ...zhouScenes
};
