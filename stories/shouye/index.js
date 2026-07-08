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
import { scenes as investigationCluesScenes } from './scenes/investigation_clues.js';
import { scenes as investigationIdentityScenes } from './scenes/investigation_identity.js';
import { scenes as investigationReactionScenes } from './scenes/investigation_reaction.js';
import { scenes as itemUseScenes } from './scenes/item_use.js';
import { scenes as legacyScenes } from './scenes/legacy.js';
import { scenes as lineageScenes } from './scenes/lineage.js';
import { scenes as makeupScenes } from './scenes/makeup.js';
import { scenes as memoryEntryScenes } from './scenes/memory_entry.js';
import { scenes as memoryFireScenes } from './scenes/memory_fire.js';
import { scenes as nightScenes } from './scenes/night.js';
import { scenes as paperScenes } from './scenes/paper.js';
import { scenes as patrolEntryScenes } from './scenes/patrol_entry.js';
import { scenes as patrolHallFiveScenes } from './scenes/patrol_hall_five.js';
import { scenes as patrolHallOneScenes } from './scenes/patrol_hall_one.js';
import { scenes as patrolHallThreeScenes } from './scenes/patrol_hall_three.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as promiseScenes } from './scenes/promise.js';
import { scenes as ritualScenes } from './scenes/ritual.js';
import { scenes as riverScenes } from './scenes/river.js';
import { scenes as stageScenes } from './scenes/stage.js';
import { scenes as victimsDescendantsScenes } from './scenes/victims_descendants.js';
import { scenes as victimsReleaseIntroScenes } from './scenes/victims_release_intro.js';
import { scenes as victimsReleaseRiteScenes } from './scenes/victims_release_rite.js';
import { scenes as victimsReleaseSoulsScenes } from './scenes/victims_release_souls.js';
import { scenes as victimsResearchScenes } from './scenes/victims_research.js';
import { scenes as villageScenes } from './scenes/village.js';
import { scenes as watchersCallIntroScenes } from './scenes/watchers_call_intro.js';
import { scenes as watchersCallPromiseScenes } from './scenes/watchers_call_promise.js';
import { scenes as watchersLineageScenes } from './scenes/watchers_lineage.js';
import { scenes as yunxiuScenes } from './scenes/yunxiu.js';
import { scenes as zhoushengGraveScenes } from './scenes/zhousheng_grave.js';
import { scenes as zhoushengRuinsScenes } from './scenes/zhousheng_ruins.js';
import { scenes as zhoushengVisionScenes } from './scenes/zhousheng_vision.js';
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
    ...investigationCluesScenes,
    ...investigationIdentityScenes,
    ...investigationReactionScenes,
    ...itemUseScenes,
    ...legacyScenes,
    ...lineageScenes,
    ...makeupScenes,
    ...memoryEntryScenes,
    ...memoryFireScenes,
    ...nightScenes,
    ...paperScenes,
    ...patrolEntryScenes,
    ...patrolHallFiveScenes,
    ...patrolHallOneScenes,
    ...patrolHallThreeScenes,
    ...prologueScenes,
    ...promiseScenes,
    ...ritualScenes,
    ...riverScenes,
    ...stageScenes,
    ...victimsDescendantsScenes,
    ...victimsReleaseIntroScenes,
    ...victimsReleaseRiteScenes,
    ...victimsReleaseSoulsScenes,
    ...victimsResearchScenes,
    ...villageScenes,
    ...watchersCallIntroScenes,
    ...watchersCallPromiseScenes,
    ...watchersLineageScenes,
    ...yunxiuScenes,
    ...zhoushengGraveScenes,
    ...zhoushengRuinsScenes,
    ...zhoushengVisionScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
