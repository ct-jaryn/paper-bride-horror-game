/**
 * 《heniang》故事入口
 */

import { scenes as accuseScenes } from './scenes/accuse.js';
import { scenes as agreeScenes } from './scenes/agree.js';
import { scenes as askScenes } from './scenes/ask.js';
import { scenes as backScenes } from './scenes/back.js';
import { scenes as bargainScenes } from './scenes/bargain.js';
import { scenes as burnScenes } from './scenes/burn.js';
import { scenes as callScenes } from './scenes/call.js';
import { scenes as clearScenes } from './scenes/clear.js';
import { scenes as ferrymanScenes } from './scenes/ferryman.js';
import { scenes as findScenes } from './scenes/find.js';
import { scenes as fleeScenes } from './scenes/flee.js';
import { scenes as honestScenes } from './scenes/honest.js';
import { scenes as itemUseScenes } from './scenes/item_use.js';
import { scenes as leaveScenes } from './scenes/leave.js';
import { scenes as lieScenes } from './scenes/lie.js';
import { scenes as lookScenes } from './scenes/look.js';
import { scenes as motherScenes } from './scenes/mother.js';
import { scenes as negotiateScenes } from './scenes/negotiate.js';
import { scenes as planScenes } from './scenes/plan.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as promiseScenes } from './scenes/promise.js';
import { scenes as reburyScenes } from './scenes/rebury.js';
import { scenes as refuseScenes } from './scenes/refuse.js';
import { scenes as respectScenes } from './scenes/respect.js';
import { scenes as saneScenes } from './scenes/sane.js';
import { scenes as searchScenes } from './scenes/search.js';
import { scenes as silenceScenes } from './scenes/silence.js';
import { scenes as takeScenes } from './scenes/take.js';
import { scenes as tellScenes } from './scenes/tell.js';
import { scenes as threatenScenes } from './scenes/threaten.js';
import { scenes as underwaterScenes } from './scenes/underwater.js';
import { scenes as useScenes } from './scenes/use.js';
import { scenes as walkScenes } from './scenes/walk.js';
import { scenes as xiulanScenes } from './scenes/xiulan.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...accuseScenes,
    ...agreeScenes,
    ...askScenes,
    ...backScenes,
    ...bargainScenes,
    ...burnScenes,
    ...callScenes,
    ...clearScenes,
    ...ferrymanScenes,
    ...findScenes,
    ...fleeScenes,
    ...honestScenes,
    ...itemUseScenes,
    ...leaveScenes,
    ...lieScenes,
    ...lookScenes,
    ...motherScenes,
    ...negotiateScenes,
    ...planScenes,
    ...prologueScenes,
    ...promiseScenes,
    ...reburyScenes,
    ...refuseScenes,
    ...respectScenes,
    ...saneScenes,
    ...searchScenes,
    ...silenceScenes,
    ...takeScenes,
    ...tellScenes,
    ...threatenScenes,
    ...underwaterScenes,
    ...useScenes,
    ...walkScenes,
    ...xiulanScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
