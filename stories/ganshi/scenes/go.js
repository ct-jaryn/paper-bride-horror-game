/**
 * 《ganshi》场景模块：go
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    go_to_county: createScene('go_to_county', {
        title: "报官",
        text: "你改变路线，带着尸体去县城。\n\n天快亮时，你终于到了县衙门口。你把三具尸体摆在衙门前，敲响鸣冤鼓。\n\n县太爷被吵醒来，看见三具尸体，脸色大变。\n\n\"大胆赶尸匠，竟敢扰民！\" 他怒道。\n\n\"大人，这三人不是病死的。\" 你说，\"他们是被人害死的。请大人明察。\"\n\n县太爷的脸色更难看了。你想起账房先生临死前说的话：县太爷和县丞贪了赈灾银。\n\n\"来人啊，\" 县太爷说，\"把这个妖言惑众的赶尸匠拿下！\"",
        effects: {
            sanity: -10,
            yin: 10,
        },
        ending: "imprisoned",
    })
};
