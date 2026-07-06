/**
 * 《hujia》场景模块：watch
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    watch_fox_leave: createScene('watch_fox_leave', {
        title: "目送狐女离去",
        text: "你看着狐女离开。\n\n她的背影很孤独。你想叫住她，但不知道该说什么。\n\n三天后，山里传来一声巨响，像是天雷劈下。\n\n你跑到山顶，看见青丘山最高处被雷劈得焦黑。\n\n狐女没有渡过雷劫。\n\n你后来常常想，如果当时给了她心头血，她是不是就能活下来。但人生没有如果。\n\n你只是偶尔会梦见一只白狐，在月光下对你笑。",
        ending: "foxPerishes",
    })
};
