/**
 * 《ganshi》场景模块：ledger
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ledger_temptation: createScene('ledger_temptation', {
        title: "贪墨",
        text: "你翻到账册最后一页，看见一串数字。\n\n那是赈灾银的账目，足够买下半个青石镇。你忽然意识到，这本账册不只是证据，也是筹码。\n\n县太爷和县丞会出高价买回它。周老爷也会。你甚至可以把账册抄三份，卖给三方。\n\n你的手抖了起来。赶尸匠一辈子走夜路，也挣不到这么多。\n\n三具尸体静静站着。账房先生的黄符下，似乎有一双眼睛在看着你。\n\n[whisper]\"你不会想……私吞吧？\"[/whisper] 风里传来他的声音。",
        effects: {
            sanity: -10,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "把账册交给省城的按察使",
                ending: "hidden_ledgerLight",
            }),
            createChoice({
                text: "用账册勒索县太爷",
                ending: "death_greedyCourier",
                effects: {
                    sanity: -10,
                    yin: 10,
                },
            }),
            createChoice({
                text: "烧了账册，从此隐姓埋名",
                ending: "hidden_exiledDriver",
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
        ],
    })
};
