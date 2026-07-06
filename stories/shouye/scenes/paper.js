/**
 * 《守夜》场景模块：paper
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    paper_shop_visit: createScene('paper_shop_visit', {
        title: "纸扎铺旧闻",
        text: "你循着报纸上的地址，找到青石镇东街的周氏纸扎铺。\n\n铺子已经破败，门口挂着的白灯笼上写着一个褪色的[faded]\"周\"[/faded]字。一个瞎眼的老太太坐在门槛上，像是在等你。\n\n\"你是来找云袖姑娘的？\"她问，\"我爷爷那辈就传下话，说有个唱戏的姑娘，魂没散干净。\"\n\n她从柜台底下取出一个纸人。纸人穿着红戏服，脸上画着旦角的妆，眉眼间竟和七号厅的女尸有几分相似。\n\n\"这是周生当年扎的替身。他本想烧给云袖，让她替自己受苦，可没来得及。\"\n\n老太太把纸人塞到你手里：\"你拿去，烧在七号厅。让她有个替身的，好上路。\"",
        effects: {
            time: 60,
            sanity: -5,
            yin: -5,
            setFlag: "hasPaperFigure",
        },
        choices: [
            createChoice({
                text: "拿纸人回七号厅焚化",
                next: "paper_burn_rite",
            }),
            createChoice({
                text: "把纸人交给民俗研究所",
                ending: "hidden_paperKeeper",
            }),
        ],
    }),
    paper_burn_rite: createScene('paper_burn_rite', {
        title: "焚纸人",
        text: "你带着纸人回到七号厅。\n\n云袖的眼睛还睁着。当你把纸人放在灵床边的铁盆里点燃时，她的眼珠猛地转向火盆。\n\n纸人在火中扭曲，发出细微的\"噼啪\"声。那声音渐渐变成了唱戏声，又变成了女子的啜泣。\n\n\"替身……\"云袖的声音很轻，\"他要我替谁？\"\n\n你想起那个扎纸人的男人，和他未完成的执念。这个替身，本该替她受苦，如今却成了替她承受怨气、送她上路的舟。\n\n纸人烧尽时，七号厅里的阴冷似乎也轻了一些。",
        effects: {
            yin: -15,
            sanity: 5,
        },
        choices: [
            createChoice({
                text: "把灰撒入青石河",
                ending: "hidden_paperFigure",
            }),
            createChoice({
                text: "火盆突然炸开，火星溅到花圈上",
                ending: "death_burningStage",
            }),
        ],
    }),
    burn_incense_for_her: createScene('burn_incense_for_her', {
        title: "焚香祭",
        text: "你想起老规矩：守夜人不仅要防鬼，也要敬鬼。\n\n你从供桌上取了三炷香，在七号厅门口点燃，恭敬地拜了三拜。\n\n\"云袖姑娘，\"你说，\"戏台之事，非我所能。但今夜，我周遥以守灵人之名，敬你一杯水酒。\"\n\n你把酒洒在门口。门内传来一声轻叹，像是风，又像是人的呼吸。\n\n女尸没有睁眼，但你感觉到，她的怨气稍稍平息了。",
        effects: {
            sanity: 5,
            yin: -10,
        },
        choices: [
            createChoice({
                text: "继续守到天亮",
                ending: "normal_morningRitual",
            }),
        ],
    })
};
