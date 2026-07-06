/**
 * 《ganshi》场景模块：revive
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    revive_woman: createScene('revive_woman', {
        title: "救活她",
        text: "你掐她人中，又按压她的胸口。\n\n女子剧烈咳嗽起来，吐出一口黑水。她的眼睛恢复了一些神采。\n\n\"你是……\" 她虚弱地问。\n\n\"我是赶尸的。\" 你说，\"你别怕，我会救你出去。\"\n\n女子抓住你的手，她的手冰凉，但确实是人手。\n\n\"他们要把我配冥婚……\" 她说，\"我不同意……他们就活埋我……\"\n\n你握紧她的手：\"我带你去找他们算账。\"",
        effects: {
            sanity: -5,
            yin: -5,
            setFlag: "womanAlive",
        },
        choices: [
            createChoice({
                text: "带她逃走",
                next: "escape_with_woman",
            }),
        ],
    })
};
