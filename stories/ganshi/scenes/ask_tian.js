/**
 * 《ganshi》场景模块：ask_tian
 * 田姓前辈与师父恩怨
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_tian_grudge: createScene('ask_tian_grudge', {
        title: "问田姓恩怨",
        text: "\"前辈，我师父做过什么对不起您的事？\" 你问。\n\n火光中，一个苍老的身影渐渐显现。他是一个穿着旧式道袍的老人，但身体半透明，显然是个鬼。\n\n\"三十年前，\" 老人说，\"我和你师父同拜一个师父学艺。我们约定，学成后一起开赶尸铺子。\"\n\n\"但后来呢？\"\n\n\"后来你师父偷了我的赶尸秘籍，还把我推下山崖。\" 老人说，\"我死后，尸体被野狗吃了，魂魄被困在这洞里。\"\n\n你沉默了。你师父确实提到过一位\"早逝的师兄\"，但从未说过是他害的。\n\n\"前辈，\" 你说，\"我师父已经死了。您若要报仇，找我便是。但请放过这三具尸体。\"",
        effects: {
            sanity: -10,
            setFlag: "knowsMasterSin",
        },
        choices: [
            createChoice({
                text: "愿意为师父赎罪",
                next: "atone_for_master",
            }),
            createChoice({
                text: "说师父的错不该由你承担",
                next: "refuse_inherit_sin",
            }),
        ],
    })
};
