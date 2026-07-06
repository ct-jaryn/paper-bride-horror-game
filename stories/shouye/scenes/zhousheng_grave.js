/**
 * 《守夜》场景模块：zhousheng_grave
 * 周生衣冠冢
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    zhousheng_grave: createScene('zhousheng_grave', {
        title: "衣冠冢",
        text: "你在青石镇后山，找到了周生的衣冠冢。\n\n那是镇上老辈人凑钱立的，因为周生尸骨无存，只能立个衣冠冢。坟很小，墓碑上刻着：\n\n[faded]\"故友周生之衣冠冢。生卒不详，纸扎一生，义重于山。青石镇同乡公立。\"[/faded]\n\n碑前放着一束早已枯成灰的纸花——那是当年镇上人祭奠时放的，和你（周生记忆里）扎的牡丹，一模一样。\n\n你在坟前站定，按规矩鞠了三个躬。\n\n\"周生，\"你说，\"云袖一直在等你。她现在知道了真相，她想去找你。\"\n\n风吹过坟头的荒草，发出簌簌的声响，像是一种回应。\n\n你弯腰，把碑前那束枯灰的纸花，换成了你从殡仪馆带来的一朵新扎的纸牡丹。\n\n\"这花，\"你说，\"就当我替云袖，先还你一朵。\"\n\n坟前的纸花，无风自动，花瓣轻轻颤了颤。\n\n[whisper]像是有人，接住了它。[/whisper]",
        effects: {
            time: 90,
            sanity: 5,
            yin: -10,
            setFlag: "visitedZhouShengGrave",
        },
        choices: [
            createChoice({
                text: "回殡仪馆，带云袖来青石河",
                next: "coffin_to_river",
                condition: {
                    flag: "foundCoffin",
                },
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "去找春香班的后人",
                next: "chunxiang_descendant_home",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
