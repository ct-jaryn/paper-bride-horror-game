/**
 * 《tishen》故事入口
 */

import { scenes as agreeScenes } from './scenes/agree.js';
import { scenes as askScenes } from './scenes/ask.js';
import { scenes as barricadeScenes } from './scenes/barricade.js';
import { scenes as breakScenes } from './scenes/break.js';
import { scenes as burnScenes } from './scenes/burn.js';
import { scenes as calmScenes } from './scenes/calm.js';
import { scenes as checkScenes } from './scenes/check.js';
import { scenes as commandScenes } from './scenes/command.js';
import { scenes as coverScenes } from './scenes/cover.js';
import { scenes as denyScenes } from './scenes/deny.js';
import { scenes as dollScenes } from './scenes/doll.js';
import { scenes as fleeScenes } from './scenes/flee.js';
import { scenes as forceScenes } from './scenes/force.js';
import { scenes as forgettingScenes } from './scenes/forgetting.js';
import { scenes as giveScenes } from './scenes/give.js';
import { scenes as inspectScenes } from './scenes/inspect.js';
import { scenes as jumpScenes } from './scenes/jump.js';
import { scenes as keepScenes } from './scenes/keep.js';
import { scenes as letScenes } from './scenes/let.js';
import { scenes as memoryScenes } from './scenes/memory.js';
import { scenes as mirrorScenes } from './scenes/mirror.js';
import { scenes as negotiateScenes } from './scenes/negotiate.js';
import { scenes as neverScenes } from './scenes/never.js';
import { scenes as noticeScenes } from './scenes/notice.js';
import { scenes as paperScenes } from './scenes/paper.js';
import { scenes as performScenes } from './scenes/perform.js';
import { scenes as planScenes } from './scenes/plan.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as reclaimScenes } from './scenes/reclaim.js';
import { scenes as refuseScenes } from './scenes/refuse.js';
import { scenes as runScenes } from './scenes/run.js';
import { scenes as sealScenes } from './scenes/seal.js';
import { scenes as seeScenes } from './scenes/see.js';
import { scenes as sleepScenes } from './scenes/sleep.js';
import { scenes as smashScenes } from './scenes/smash.js';
import { scenes as stayScenes } from './scenes/stay.js';
import { scenes as takeScenes } from './scenes/take.js';
import { scenes as tellScenes } from './scenes/tell.js';
import { scenes as thinkScenes } from './scenes/think.js';
import { scenes as visitScenes } from './scenes/visit.js';
import { scenes as wantScenes } from './scenes/want.js';
import { scenes as yinScenes } from './scenes/yin.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...agreeScenes,
    ...askScenes,
    ...barricadeScenes,
    ...breakScenes,
    ...burnScenes,
    ...calmScenes,
    ...checkScenes,
    ...commandScenes,
    ...coverScenes,
    ...denyScenes,
    ...dollScenes,
    ...fleeScenes,
    ...forceScenes,
    ...forgettingScenes,
    ...giveScenes,
    ...inspectScenes,
    ...jumpScenes,
    ...keepScenes,
    ...letScenes,
    ...memoryScenes,
    ...mirrorScenes,
    ...negotiateScenes,
    ...neverScenes,
    ...noticeScenes,
    ...paperScenes,
    ...performScenes,
    ...planScenes,
    ...prologueScenes,
    ...reclaimScenes,
    ...refuseScenes,
    ...runScenes,
    ...sealScenes,
    ...seeScenes,
    ...sleepScenes,
    ...smashScenes,
    ...stayScenes,
    ...takeScenes,
    ...tellScenes,
    ...thinkScenes,
    ...visitScenes,
    ...wantScenes,
    ...yinScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
