/**
 * 《ganshi》场景模块：soul
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    soul_homeward: createScene('soul_homeward', {
        title: "魂归",
        text: "你收起账册和血书，没有往青石镇去。\n\n\"我答应过你们，送你们回家。\" 你对三具尸体说，\"不是去报仇，是回家。\"\n\n你找了一处背风的山坳，把三具尸体并排放下。你点燃三炷香，插在泥地里，又把账房先生的账册、青年的借据、柳红的血书一一焚化。\n\n\"阳间的事，阳间的人会管。\" 你说，\"你们的路，我送到底。\"\n\n你摇动铜铃，念起师父教过的《送魂咒》。这一次，你不是镇压它们，你是在引路。\n\n三具尸体缓缓跪下，朝你磕了一个头。\n\n账房先生的声音从风里传来：\"田家后生……谢谢你。\"\n\n青年的声音说：\"我们……不恨了。\"\n\n柳红没有说话，只是解下手腕上的红绳，轻轻放在你脚边。\n\n天快亮时，三具尸体重新站起，转向东方。它们的身影在晨雾中越来越淡，最后和山间的雾气融为一体。\n\n铜铃还在你手里，但铃声不再沉重。",
        effects: {
            sanity: 20,
            yin: -30,
            setFlag: "soulsSentHome",
        },
        choices: [
            createChoice({
                text: "看着它们消散",
                ending: "hidden_soul_homeward",
            }),
        ],
    })
};
