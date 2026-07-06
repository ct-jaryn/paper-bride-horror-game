/**
 * 《ganshi》故事入口
 */

import { scenes as abandonScenes } from './scenes/abandon.js';
import { scenes as apologizeScenes } from './scenes/apologize.js';
import { scenes as askBrideScenes } from './scenes/ask_bride.js';
import { scenes as askPoisonScenes } from './scenes/ask_poison.js';
import { scenes as askTianScenes } from './scenes/ask_tian.js';
import { scenes as atoneScenes } from './scenes/atone.js';
import { scenes as bellScenes } from './scenes/bell.js';
import { scenes as breakScenes } from './scenes/break.js';
import { scenes as brideScenes } from './scenes/bride.js';
import { scenes as calmScenes } from './scenes/calm.js';
import { scenes as chantScenes } from './scenes/chant.js';
import { scenes as checkScenes } from './scenes/check.js';
import { scenes as confrontScenes } from './scenes/confront.js';
import { scenes as continueScenes } from './scenes/continue.js';
import { scenes as copperScenes } from './scenes/copper.js';
import { scenes as corpseScenes } from './scenes/corpse.js';
import { scenes as coverScenes } from './scenes/cover.js';
import { scenes as escapeScenes } from './scenes/escape.js';
import { scenes as goScenes } from './scenes/go.js';
import { scenes as headScenes } from './scenes/head.js';
import { scenes as helpScenes } from './scenes/help.js';
import { scenes as inspectScenes } from './scenes/inspect.js';
import { scenes as intensifyScenes } from './scenes/intensify.js';
import { scenes as investigateScenes } from './scenes/investigate.js';
import { scenes as leaveScenes } from './scenes/leave.js';
import { scenes as ledgerScenes } from './scenes/ledger.js';
import { scenes as liuHongScenes } from './scenes/liuHong.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as promiseScenes } from './scenes/promise.js';
import { scenes as refuseScenes } from './scenes/refuse.js';
import { scenes as reviveScenes } from './scenes/revive.js';
import { scenes as sendScenes } from './scenes/send.js';
import { scenes as shoutScenes } from './scenes/shout.js';
import { scenes as soulScenes } from './scenes/soul.js';
import { scenes as suppressScenes } from './scenes/suppress.js';
import { scenes as throwScenes } from './scenes/throw.js';
import { scenes as untieScenes } from './scenes/untie.js';
import { scenes as xiulanScenes } from './scenes/xiulan.js';
import { scenes as youthScenes } from './scenes/youth.js';
import { scenes as zhouScenes } from './scenes/zhou.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...abandonScenes,
    ...apologizeScenes,
    ...askBrideScenes,
    ...askPoisonScenes,
    ...askTianScenes,
    ...atoneScenes,
    ...bellScenes,
    ...breakScenes,
    ...brideScenes,
    ...calmScenes,
    ...chantScenes,
    ...checkScenes,
    ...confrontScenes,
    ...continueScenes,
    ...copperScenes,
    ...corpseScenes,
    ...coverScenes,
    ...escapeScenes,
    ...goScenes,
    ...headScenes,
    ...helpScenes,
    ...inspectScenes,
    ...intensifyScenes,
    ...investigateScenes,
    ...leaveScenes,
    ...ledgerScenes,
    ...liuHongScenes,
    ...prologueScenes,
    ...promiseScenes,
    ...refuseScenes,
    ...reviveScenes,
    ...sendScenes,
    ...shoutScenes,
    ...soulScenes,
    ...suppressScenes,
    ...throwScenes,
    ...untieScenes,
    ...xiulanScenes,
    ...youthScenes,
    ...zhouScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
