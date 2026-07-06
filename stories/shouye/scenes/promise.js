/**
 * 《守夜》场景模块：promise
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    promise_help: createScene('promise_help', {
        title: "最后一折",
        text: "你跪坐在灵床边，轻声说：\"云袖，我知道你想唱完《牡丹亭》。我帮你。\"\n\n女尸的眼睛里流出一滴红色的泪。那不是血，是胭脂化了。\n\n她的嘴唇翕动：\"戏台……塌了……没有戏台……\"\n\n\"那我给你搭一个。\" 你说。\n\n你找来殡仪馆里的白布、花圈、纸扎，在七号厅中央搭了一个简易的戏台。你又打开手机，找到《牡丹亭·惊梦》的唱段，放给她听。\n\n女尸缓缓坐起，对着那简陋的戏台，开始吟唱。\n\n她的声音开始时沙哑难听，但越唱越清亮，越唱越婉转。到最后，七号厅里仿佛坐满了观众，掌声雷动。\n\n一曲终了，她朝你福了一福，躺回灵床。\n\n[red]这一次，她的眼睛再也没有睁开。[/red]",
        effects: {
            sanity: 10,
            yin: -30,
        },
        choices: [
            createChoice({
                text: "为她搭起简易戏台",
                next: "yunxiu_final_stage",
            }),
            createChoice({
                text: "你想起银钗唤起的记忆，问她的心愿是否不止于唱完一出戏",
                next: "yunxiu_true_wish",
                condition: {
                    flag: "yunxiuMemoryRestored",
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    }),
    yunxiu_true_wish: createScene('yunxiu_true_wish', {
        title: "未了之愿",
        text: "你蹲下身，和云袖平视。\n\n\"你想唱完《牡丹亭》，我知道。\" 你说，\"但你的心愿不止这个，对吗？\"\n\n云袖沉默了。她的身影在七号厅昏暗的灯光下显得有些透明。\n\n\"我想被人记住。\" 她终于说，\"不是作为那个死在戏台上的鬼，而是作为唱过《牡丹亭》的云袖。\"\n\n你点点头：\"我会记住你。不只是我，我还会把你的名字、春香班的名字、那场大火的真相，都写下来。\"\n\n\"写下来？\"\n\n\"写下来。\" 你说，\"让以后每一个来守夜的人，都知道曾有一个叫云袖的女子，唱得很好。\"\n\n云袖笑了。那是你第一次看见她笑，不是戏里的笑，是一个真正释然的笑。\n\n\"那我可以安心走了。\" 她说。",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "yunxiuWishComplete",
        },
        choices: [
            createChoice({
                text: "送她最后一程",
                next: "yunxiu_final_stage",
            }),
        ],
    }),
    yunxiu_final_stage: createScene('yunxiu_final_stage', {
        title: "牡丹亭终章",
        text: "你找来殡仪馆里能找到的一切：白布、花圈、纸扎、还有手机里的唱段。\n\n你在七号厅中央搭起一座简陋的戏台。云袖缓缓飘到台上，对着你，唱完了《牡丹亭》的最后一折。\n\n唱到\"则为你如花美眷，似水流年\"时，她的声音不再凄厉，而是带着一种从未有过的温柔。\n\n曲终，她朝你深深一福。\n\n\"谢谢你。\" 她说，\"这一折，我等了近百年。\"\n\n她的身影渐渐变淡，最后化作点点红光，消散在空气中。\n\n七号厅里，只剩下那枚银钗轻轻落在戏台上，发出一声清脆的响声。",
        effects: {
            sanity: 15,
            yin: -30,
        },
        choices: [
            createChoice({
                text: "拾起银钗，送她最后一程",
                next: "",
                ending: "hidden_peony_pavilion_final",
                condition: {
                    flag: "yunxiuWishComplete",
                },
                hidden: true,
            }),
            createChoice({
                text: "目送她离去",
                next: "",
                ending: "hidden_finalCurtain",
            }),
        ],
    }),
    not_my_problem: createScene('not_my_problem', {
        title: "与我无关",
        text: "你摇摇头：\"你的戏台不在我这里。我只是个守夜的。\"\n\n女尸的眼睛里闪过一丝怨毒。\n\n\"那……你就替我……守着吧……\"\n\n她的身体开始融化，像被水泡烂的纸。黑水从灵床上流到地上，流到你的脚下。\n\n你想跑，但双脚被黑水粘住。黑水漫过你的脚踝、膝盖、腰……\n\n你拼命挣扎，但越挣扎沉得越快。\n\n最后一刻，你听见林叔在门外叹气：\"都说了，不守规矩要付出代价。\"",
        effects: {
            sanity: -50,
            yin: 40,
        },
        ending: "death_drownedOnLand",
    })
};
