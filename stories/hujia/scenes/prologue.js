/**
 * 《hujia》场景模块：prologue
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    prologue: createScene('prologue', {
        title: "狐嫁",
        text: "你叫周远，是山脚下的猎户之子。\n\n父亲死后，你独自住在老屋里，靠打猎为生。村里人都不太喜欢你，说你命硬，克死了父亲。\n\n老屋的柜子上放着一面铜镜，镜面裂了好几道，是你母亲留下的唯一物件。小时候你曾问父亲镜子是哪里来的，他只说是\"祖上从青石镇带出来的\"，便不再多说。\n\n这天傍晚，你打猎回来，发现院子里摆着一顶红色的小轿。轿子很精致，但轿帘上绣的不是龙凤，是狐狸。\n\n[red]九条尾巴的狐狸。[/red]\n\n轿帘掀开，走出一个穿红嫁衣的女子。她长得极美，美得不像是山里的人。眼睛细长，眼尾微微上挑，笑起来的时候，露出一对尖尖的虎牙。\n\n\"周远。\" 她叫你，\"我来娶你。\"\n\n你愣住了：\"娶我？\"\n\n\"我是青丘山的狐女。\" 她说，\"修炼千年，还差一场人婚。你命硬，阳气重，正合适。\"\n\n她向你伸出手，指甲又长又尖：\"跟我走吧。我会让你长生不死。\"",
        effects: {
            sanity: -10,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "拒绝，让她离开",
                next: "refuse_fox",
            }),
            createChoice({
                text: "问她为什么选中你",
                next: "ask_why_chosen",
            }),
            createChoice({
                text: "答应跟她走",
                next: "agree_fox",
                effects: {
                    setFlag: "agreedFox",
                },
            }),
            createChoice({
                text: "你保持清醒，注意到她的影子有九条尾巴",
                next: "see_through_fox",
                condition: {
                    sanityAbove: 80,
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    })
};
