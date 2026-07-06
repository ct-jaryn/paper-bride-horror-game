/**
 * 《hujia》场景模块：refuse
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    refuse_fox: createScene('refuse_fox', {
        title: "拒婚",
        text: "\"我不去。\" 你说。\n\n狐女的笑容僵了一下，但很快恢复：\"为什么？\"\n\n\"我是人，你是妖。人妖殊途。\"\n\n狐女笑了，笑声像银铃：\"人妖殊途？你们村上个月才活埋了一个姑娘给山神配阴婚，你跟我说人妖殊途？\"\n\n你无言以对。\n\n\"我给你三天时间考虑。\" 狐女说，\"三天后，我会再来。如果你还是不肯，我就让全村人替你答应。\"\n\n她转身走进轿子。轿子没有轿夫，却自己飘了起来，向山里飞去。\n\n你看着满地的红纸屑，心跳得厉害。",
        effects: {
            sanity: -10,
            yin: 10,
            time: 60,
        },
        choices: [
            createChoice({
                text: "去村里打听狐女的事",
                next: "ask_village_fox",
            }),
            createChoice({
                text: "准备猎具，防备狐女再来",
                next: "prepare_hunt",
            }),
        ],
    }),
    refuse_dagger: createScene('refuse_dagger', {
        title: "拒绝匕首",
        text: "\"我不想杀她。\" 你说。\n\n老村长摇头：\"你会后悔的。\"\n\n你回到家，躺在床上睡不着。\n\n半夜，窗户被敲响了。你打开窗，狐女蹲在窗台上，尾巴在身后轻轻摇晃。\n\n\"你拒绝了村长的匕首。\" 她说，\"为什么？\"\n\n\"因为我父亲救过你母亲。\" 你说，\"我不想杀救命恩人的女儿。\"\n\n狐女的眼神柔和了一些：\"你和你父亲一样，都是好人。\"\n\n\"但我也不想跟你走。\" 你说。\n\n狐女沉默了一会儿：\"那这样吧。你给我一样东西，我就再也不来找你。\"\n\n\"什么东西？\"\n\n\"你的一滴心头血。\" 她说，\"有了它，我就能渡劫，不用再找人成婚。\"",
        effects: {
            yin: 5,
        },
        choices: [
            createChoice({
                text: "答应给她心头血",
                next: "give_heart_blood",
                effects: {
                    setFlag: "gaveHeartBlood",
                },
            }),
            createChoice({
                text: "拒绝",
                next: "refuse_heart_blood",
            }),
        ],
    }),
    refuse_heart_blood: createScene('refuse_heart_blood', {
        title: "拒绝心头血",
        text: "\"心头血会损伤我的寿命。\" 你说，\"我不能给。\"\n\n狐女点点头：\"理解。\"\n\n她转身要走。你忽然问：\"如果我什么都不给你，你会怎样？\"\n\n\"渡劫失败，灰飞烟灭。\" 她说，语气平静。\n\n你沉默了。\n\n狐女回头朝你笑了笑：\"别担心。狐狸活了一千年，早就看淡了。\"",
        effects: {
            sanity: -10,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "改变主意，给她血",
                next: "give_heart_blood",
            }),
            createChoice({
                text: "目送她离开",
                next: "watch_fox_leave",
                ending: "foxPerishes",
            }),
        ],
    })
};
