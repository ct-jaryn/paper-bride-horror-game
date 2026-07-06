/**
 * 《ganshi》场景模块：atone
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    atone_for_master: createScene('atone_for_master', {
        title: "替师父赎罪",
        text: "你跪在鬼道人面前：\"前辈，我师父的错，我替他赎。您要我做什么，我都答应。\"\n\n鬼道人看着你，眼神复杂：\"你倒是比你师父有担当。\"\n\n\"请前辈明示。\"\n\n\"我要你在每年的今天，来这洞里给我烧纸。\" 鬼道人说，\"连烧三十年。三十年后，我怨气消散，自然放你师父的魂魄投胎。\"\n\n\"我答应。\" 你说。\n\n鬼道人点点头，身影渐渐淡去。\n\n三具尸体重新站好，铜铃重新响起。\n\n你带着它们，走出了山洞。",
        effects: {
            sanity: 5,
            yin: -15,
        },
        ending: "thirtyYearsPaper",
    })
};
