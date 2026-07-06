/**
 * 《ganshi》场景模块：xiulan
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    xiulan_mercy_liuhong: createScene('xiulan_mercy_liuhong', {
        title: "柳红之变",
        text: "你轻轻掀开白布，没有恐惧，只有怜悯。\n\n\"柳红，\" 你说，\"我知道你遭受了不公。我不是来送你入冥婚的，我是来送你回家的。\"\n\n女尸的眼睛睁着，直直地看着你。但这一次，你注意到她眼角有一滴黑色的液体滑落——那是泪。\n\n\"秀兰……\" 她忽然开口，声音沙哑，\"她也穿过这样的嫁衣。\"\n\n你愣住了：\"你认识秀兰？\"\n\n\"不认识。\" 柳红说，\"但在河里……在河里的时候，我梦见过她。她说，有一个周家后人，为她正了名。\"\n\n她看着你，眼神复杂：\"你也会为我正名吗？\"\n\n\"会。\" 你说，\"我会带你回青石镇，不是嫁人，是作证。让所有人知道周家的罪行。\"\n\n柳红缓缓闭上眼睛。她的身体放松下来，像是终于等到了什么。",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "liuHongMercy",
        },
        choices: [
            createChoice({
                text: "带她一起逃走",
                next: "escape_with_woman",
            }),
            createChoice({
                text: "继续查清真相",
                next: "investigate_truth",
            }),
        ],
    })
};
