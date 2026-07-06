/**
 * 《守夜》场景模块：investigation_reaction
 * 对女尸的不同反应与结局分支
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ignore_her: createScene('ignore_her', {
        title: "视而不见",
        text: "你关掉手电筒，退出门外，轻轻带上门。\n\n走廊里安静得可怕。你坐回塑料椅，假装什么都没发生。\n\n但你知道，门后的她在看着你。\n\n凌晨一点，走廊的灯开始闪烁。你听见七号厅里传来细微的声响——\n\n[whisper]沙沙。沙沙。[/whisper]\n\n像是有人在用指甲刮门。\n\n你戴上耳机，把音乐调到最大声。\n\n可音乐里混进了一个女人的唱腔，凄婉悠长：\n\n[whisper]\"原来姹紫嫣红开遍，似这般都付与断井颓垣……\"[/whisper]",
        effects: {
            sanity: -20,
            yin: 20,
            time: 60,
        },
        choices: [
            createChoice({
                text: "摘下耳机，回去处理",
                next: "enter_with_flashlight",
            }),
            createChoice({
                text: "继续装没听见",
                next: "keep_ignoring",
                effects: {
                    sanity: -10,
                    yin: 10,
                },
            }),
        ],
    }),
    return_items: createScene('return_items', {
        title: "归还遗物",
        text: "你把照片和纸条重新塞回她的腰带，恭敬地鞠了三个躬。\n\n\"我不知道你想要什么，但我会尊重你。\"\n\n女尸的眼睛缓缓闭上了。她的嘴角似乎微微上扬，像是在笑。\n\n你退出七号厅，轻轻带上门。\n\n这一夜，七号厅再没传出任何声响。\n\n天亮了，林叔来接班。他看着七号厅，点点头：\"你是个好守灵人。\"",
        ending: "normal_peacefulRest",
    }),
    burn_photo: createScene('burn_photo', {
        title: "焚照",
        text: "你用打火机点燃照片，放在女尸脚边的铁盆里。\n\n火苗舔上照片，云袖的笑容在火焰中扭曲。\n\n\"我给你烧了照片，\" 你说，\"你可以安心走了。\"\n\n照片烧完，铁盆里只剩下一堆灰。灰里突然伸出一只苍白的手，抓住你的手腕。\n\n女尸的眼睛睁得极大，眼眶里流出黑色的泪水：\n\n[scream]\"那不是我要的！\"[/scream]\n\n你被拖向灵床。",
        effects: {
            sanity: -35,
            yin: 30,
        },
        choices: [
            createChoice({
                text: "挣扎",
                next: "struggle_dragged",
                ending: "death_drownedOnLand",
            }),
        ],
    })
};
