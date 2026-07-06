/**
 * 《守夜》故事入口
 * 按模块聚合所有场景、结局、NPC
 */

import { scenes as archiveScenes } from './scenes/archive.js';
import { scenes as arsonScenes } from './scenes/arson.js';
import { scenes as basementScenes } from './scenes/basement.js';
import { scenes as coffinScenes } from './scenes/coffin.js';
import { scenes as discoveryScenes } from './scenes/discovery.js';
import { scenes as entryScenes } from './scenes/entry.js';
import { scenes as escapeScenes } from './scenes/escape.js';
import { scenes as investigationScenes } from './scenes/investigation.js';
import { scenes as legacyScenes } from './scenes/legacy.js';
import { scenes as lineageScenes } from './scenes/lineage.js';
import { scenes as makeupScenes } from './scenes/makeup.js';
import { scenes as memoryScenes } from './scenes/memory.js';
import { scenes as nightScenes } from './scenes/night.js';
import { scenes as paperScenes } from './scenes/paper.js';
import { scenes as patrolScenes } from './scenes/patrol.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as promiseScenes } from './scenes/promise.js';
import { scenes as ritualScenes } from './scenes/ritual.js';
import { scenes as riverScenes } from './scenes/river.js';
import { scenes as stageScenes } from './scenes/stage.js';
import { scenes as victimsScenes } from './scenes/victims.js';
import { scenes as villageScenes } from './scenes/village.js';
import { scenes as watchersScenes } from './scenes/watchers.js';
import { scenes as yunxiuScenes } from './scenes/yunxiu.js';
import { scenes as zhoushengScenes } from './scenes/zhousheng.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...archiveScenes,
    ...arsonScenes,
    ...basementScenes,
    ...coffinScenes,
    ...discoveryScenes,
    ...entryScenes,
    ...escapeScenes,
    ...investigationScenes,
    ...legacyScenes,
    ...lineageScenes,
    ...makeupScenes,
    ...memoryScenes,
    ...nightScenes,
    ...paperScenes,
    ...patrolScenes,
    ...prologueScenes,
    ...promiseScenes,
    ...ritualScenes,
    ...riverScenes,
    ...stageScenes,
    ...victimsScenes,
    ...villageScenes,
    ...watchersScenes,
    ...yunxiuScenes,
    ...zhoushengScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
