/**
 * 《hujia》故事入口
 */

import { scenes as agreeScenes } from './scenes/agree.js';
import { scenes as askScenes } from './scenes/ask.js';
import { scenes as chaseScenes } from './scenes/chase.js';
import { scenes as escapeScenes } from './scenes/escape.js';
import { scenes as foxScenes } from './scenes/fox.js';
import { scenes as friendScenes } from './scenes/friend.js';
import { scenes as giveScenes } from './scenes/give.js';
import { scenes as goScenes } from './scenes/go.js';
import { scenes as grabScenes } from './scenes/grab.js';
import { scenes as marryScenes } from './scenes/marry.js';
import { scenes as negotiateScenes } from './scenes/negotiate.js';
import { scenes as noScenes } from './scenes/no.js';
import { scenes as peonyScenes } from './scenes/peony.js';
import { scenes as prepareScenes } from './scenes/prepare.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as refuseScenes } from './scenes/refuse.js';
import { scenes as repentScenes } from './scenes/repent.js';
import { scenes as seeScenes } from './scenes/see.js';
import { scenes as shootScenes } from './scenes/shoot.js';
import { scenes as stabScenes } from './scenes/stab.js';
import { scenes as surrenderScenes } from './scenes/surrender.js';
import { scenes as takeScenes } from './scenes/take.js';
import { scenes as throwScenes } from './scenes/throw.js';
import { scenes as trueScenes } from './scenes/true.js';
import { scenes as tryScenes } from './scenes/try.js';
import { scenes as villageScenes } from './scenes/village.js';
import { scenes as watchScenes } from './scenes/watch.js';
import { scenes as zhouScenes } from './scenes/zhou.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...agreeScenes,
    ...askScenes,
    ...chaseScenes,
    ...escapeScenes,
    ...foxScenes,
    ...friendScenes,
    ...giveScenes,
    ...goScenes,
    ...grabScenes,
    ...marryScenes,
    ...negotiateScenes,
    ...noScenes,
    ...peonyScenes,
    ...prepareScenes,
    ...prologueScenes,
    ...refuseScenes,
    ...repentScenes,
    ...seeScenes,
    ...shootScenes,
    ...stabScenes,
    ...surrenderScenes,
    ...takeScenes,
    ...throwScenes,
    ...trueScenes,
    ...tryScenes,
    ...villageScenes,
    ...watchScenes,
    ...zhouScenes
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
