/**
 * 《守夜》场景模块：zhousheng_vision
 * 周生镜中记忆：火后、河边夜、决意与入水
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    zhousheng_mirror_vision: createScene('zhousheng_mirror_vision', {
        title: "周生镜",
        text: "在地下室的深处，你发现了第二面铜镜。\n\n这面镜子藏在铁皮柜的最底层，用红绸包着，绸子上绣着\"周生\"二字。和云袖那面是一对。\n\n你打开红绸，看向镜面。\n\n这一次，镜子里的画面是连贯的、完整的——像是有人在镜子里演了一出戏，主角是周生。\n\n[whisper]你将看到，周生视角的那一百年。[/whisper]",
        effects: {
            sanity: -10,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "看下去",
                next: "zhousheng_vision_after_fire",
            }),
        ],
    }),
    zhousheng_vision_after_fire: createScene('zhousheng_vision_after_fire', {
        title: "火后",
        text: "镜中——\n\n火灾后的第三天。周生被镇上人从废墟里挖出来，腿断了，但还活着。\n\n他醒来的第一句话是：\"云袖呢？\"\n\n没人回答。所有人都知道云袖失踪了，但没人敢告诉他。他们怕他撑不住。\n\n周生在床上躺了三个月。腿接好了，但瘸了。他再也不能像从前那样，扛着纸花篮在戏园子后台跑来跑去了。\n\n第三个月，他能下地的那天，他拄着拐，一瘸一拐地去了青石河边。\n\n他在河边坐了一整天。\n\n天黑的时候，他对着河水说了一句话：\n\n[whisper]\"云袖，你听见我吗？我活着。你呢？\"[/whisper]\n\n河水没有回答。只有哗哗的水声，像是嘲笑，又像是安抚。",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "sawZhouAfterFire",
        },
        choices: [
            createChoice({
                text: "继续看",
                next: "zhousheng_vision_river_nights",
            }),
        ],
    }),
    zhousheng_vision_river_nights: createScene('zhousheng_vision_river_nights', {
        title: "河边夜",
        text: "镜中的时间快进。\n\n周生开始夜夜去河边。\n\n白天，他在铺子里扎纸花——给云袖扎的，一朵又一朵，扎满了整个铺子。\n\n晚上，他拄着拐，走到青石桥头第三柱，坐在那里，对着河水说话。\n\n有时是说云袖生前的事，有时是念戏词，有时只是静静地坐到天亮。\n\n镇上人都说他疯了。瞎眼阿婆的爷爷——那时的纸扎铺老掌柜——劝他：\"周生，云袖姑娘不在了。你得往前看。\"\n\n周生只是摇头：\"她没走。她在水里。我能感觉到。\"\n\n老掌柜叹气，不再劝了。\n\n[whisper]镜中的画面，一页页翻过，周生的头发一点一点白了。他三十岁，看起来像五十岁。[/whisper]",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "sawZhouRiverNights",
        },
        choices: [
            createChoice({
                text: "继续看",
                next: "zhousheng_vision_decision",
            }),
        ],
    }),
    zhousheng_vision_decision: createScene('zhousheng_vision_decision', {
        title: "决意",
        text: "镜中的画面，停在民国二十四年的春天。\n\n那是一个雨夜。周生照常坐在桥头第三柱下。\n\n但这一次，他没有说话。他从怀里掏出一样东西——是那枚铜镜，背面刻着\"周生赠云袖\"。\n\n他把铜镜放在掌心，对着河水，轻声说：\n\n[whisper]\"云袖，我想明白了。水能灭火，亦能锁魂。你的魂，被锁在水里了。我剪断了你的红绳，却没能解开你的锁。\"[/whisper]\n\n[whisper]\"我解不开。但我可以……陪你一起锁着。\"[/whisper]\n\n他从怀里又掏出一封信——就是后来在妆奁里发现的那封。他把信写完，折好，连同铜镜、妆奁、替身纸人，一起托付给了殡仪馆的老馆长。\n\n\"待有缘人至，可还于云袖。\"他说。\n\n然后，他站起身，最后一次，对着河水笑了笑。\n\n[red]那个笑，和云袖在火场最后看见的笑，一模一样。[/red]",
        effects: {
            sanity: -15,
            yin: 15,
            setFlag: "sawZhouDecision",
        },
        choices: [
            createChoice({
                text: "看他最后的样子",
                next: "zhousheng_vision_jump",
            }),
        ],
    }),
    zhousheng_vision_jump: createScene('zhousheng_vision_jump', {
        title: "入水",
        text: "镜中的最后一幕。\n\n民国二十四年三月初九，子时。\n\n周生站在青石桥头第三柱下。他没有犹豫，没有回头。\n\n他对着河水说了最后一句话——\n\n[whisper]\"云袖，我来找你了。\"[/whisper]\n\n然后，他纵身一跃。\n\n水花溅起，又迅速被河水吞没。\n\n镜中归于黑暗。\n\n良久，黑暗里浮起一点微光——是河底的一盏灯。周生点亮了它，等着云袖。\n\n[faded]他等了将近一百年。[/faded]\n\n[faded]云袖等了将近一百年。[/faded]\n\n[faded]他们隔着一层水，谁也没等到谁。直到你来了。[/faded]\n\n你从镜面前退开，泪流满面。",
        effects: {
            sanity: -20,
            yin: 10,
            setFlag: "knowsCompleteMemory",
        },
        choices: [
            createChoice({
                text: "上楼，把这些告诉云袖",
                next: "memory_tell_yunxiu",
            }),
        ],
    })
};
