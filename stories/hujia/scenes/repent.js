/**
 * 《hujia》场景模块：repent
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    repent_kill_fox: createScene('repent_kill_fox', {
        title: "悔杀狐女",
        text: "你跪在地上，对着狐女消散的方向磕头。\n\n\"对不起……\" 你说，\"我不该杀你……\"\n\n但道歉没有用。狐女已经死了。\n\n你捡起地上的狐妖内丹，犹豫了很久，最后把它埋在了院子里。\n\n\"愿你安息。\" 你说。\n\n从那以后，你每天晚上都会梦见一只白狐。它不咬你，只是远远地看着你。\n\n你知道，它是在等你下去赔命。",
        effects: {
            sanity: -20,
            yin: 10,
        },
        ending: "hauntedByFox",
    })
};
