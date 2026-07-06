/**
 * 《xitai》故事入口
 */

import { scenes as acceptScenes } from './scenes/accept.js';
import { scenes as agreeScenes } from './scenes/agree.js';
import { scenes as askScenes } from './scenes/ask.js';
import { scenes as begScenes } from './scenes/beg.js';
import { scenes as burnScenes } from './scenes/burn.js';
import { scenes as buryScenes } from './scenes/bury.js';
import { scenes as climbScenes } from './scenes/climb.js';
import { scenes as condemnScenes } from './scenes/condemn.js';
import { scenes as confrontScenes } from './scenes/confront.js';
import { scenes as findScenes } from './scenes/find.js';
import { scenes as finishScenes } from './scenes/finish.js';
import { scenes as inspectScenes } from './scenes/inspect.js';
import { scenes as jumpScenes } from './scenes/jump.js';
import { scenes as keepScenes } from './scenes/keep.js';
import { scenes as liuScenes } from './scenes/liu.js';
import { scenes as mainScenes } from './scenes/main.js';
import { scenes as mirrorScenes } from './scenes/mirror.js';
import { scenes as paperScenes } from './scenes/paper.js';
import { scenes as performScenes } from './scenes/perform.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as refuseScenes } from './scenes/refuse.js';
import { scenes as retreatScenes } from './scenes/retreat.js';
import { scenes as returnScenes } from './scenes/return.js';
import { scenes as runScenes } from './scenes/run.js';
import { scenes as seeScenes } from './scenes/see.js';
import { scenes as sideScenes } from './scenes/side.js';
import { scenes as silenceScenes } from './scenes/silence.js';
import { scenes as takeScenes } from './scenes/take.js';
import { scenes as talismanScenes } from './scenes/talisman.js';
import { scenes as tearScenes } from './scenes/tear.js';
import { scenes as trueScenes } from './scenes/true.js';
import { scenes as truthScenes } from './scenes/truth.js';
import { scenes as tryScenes } from './scenes/try.js';
import { scenes as watchScenes } from './scenes/watch.js';
import { scenes as xiulanScenes } from './scenes/xiulan.js';
import { scenes as zhouScenes } from './scenes/zhou.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...acceptScenes,
    ...agreeScenes,
    ...askScenes,
    ...begScenes,
    ...burnScenes,
    ...buryScenes,
    ...climbScenes,
    ...condemnScenes,
    ...confrontScenes,
    ...findScenes,
    ...finishScenes,
    ...inspectScenes,
    ...jumpScenes,
    ...keepScenes,
    ...liuScenes,
    ...mainScenes,
    ...mirrorScenes,
    ...paperScenes,
    ...performScenes,
    ...prologueScenes,
    ...refuseScenes,
    ...retreatScenes,
    ...returnScenes,
    ...runScenes,
    ...seeScenes,
    ...sideScenes,
    ...silenceScenes,
    ...takeScenes,
    ...talismanScenes,
    ...tearScenes,
    ...trueScenes,
    ...truthScenes,
    ...tryScenes,
    ...watchScenes,
    ...xiulanScenes,
    ...zhouScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
