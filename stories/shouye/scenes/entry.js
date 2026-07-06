/**
 * 《守夜》场景模块：entry
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    morgue_whisper: createScene('morgue_whisper', {
        title: "停尸间低语",
        text: "你屏住呼吸，把耳朵贴近七号厅的门板。\n\n门后传来极细极细的声音，像是从很远的地方传来，又像是从尸体口里直接吐出来的：\n\n[whisper]\"井……下……有……人……\"[/whisper]\n\n[whisper]\"别……喝……交……杯……酒……\"[/whisper]\n\n你猛地后退一步。这声音和停尸间里的女尸毫无关系，却又像是从她身上某个更深处发出来的。\n\n你忽然想起，云袖是被烧死在戏台上的。可她的尸体却在河边被发现，泡在水里整整一个月。\n\n[red]是谁把她从戏台搬到了河里？[/red]\n\n低语声停了。门缝里缓缓渗出一缕黑色的长发，像是有生命一样，在门板上画了一个字：\n\n[faded]\"周\"[/faded]\n\n那个字你不久前才在另一座山村见过。周家的债，原来也渗进了这座殡仪馆。",
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: "heard_paper_whisper",
        },
        choices: [
            createChoice({
                text: "推门进去查看",
                next: "enter_with_flashlight",
            }),
            createChoice({
                text: "先敲三下门，按规矩来",
                next: "knock_first",
                effects: {
                    yin: -5,
                },
            }),
        ],
    }),
    enter_with_light: createScene('enter_with_light', {
        title: "开灯入厅",
        text: "你按亮顶灯，推开七号厅的门。\n\n女尸还躺在灵床上，盖着白布。你走近，想确认刚才的声响。\n\n白布下，她的眼睛是睁开的。\n\n[red]眼白浑浊，瞳孔放大，正直直地盯着天花板。[/red]\n\n你倒吸一口凉气。入殓时你明明看到她闭着眼睛。\n\n更恐怖的是，她的嘴角似乎在上扬。\n\n你伸手想去合上她的眼皮，指尖刚碰到她的皮肤——\n\n[scream]她的头猛地转向你。[/scream]\n\n厅里的灯开始闪烁。",
        effects: {
            sanity: -25,
            yin: 20,
            visual: "flicker",
        },
        choices: [
            createChoice({
                text: "继续尝试合上眼睛",
                next: "close_eyes_force",
                effects: {
                    sanity: -10,
                },
            }),
            createChoice({
                text: "后退，问她是何人",
                next: "ask_her_name",
            }),
            createChoice({
                text: "逃出七号厅",
                next: "flee_hall7",
            }),
        ],
    }),
    enter_with_flashlight: createScene('enter_with_flashlight', {
        title: "手电微光",
        text: "你打着手电筒，轻轻推开门。\n\n光束扫过灵床，白布下的人形一动不动。\n\n你松了口气，准备退出去。就在这时，手电筒的光照到了女尸的脸上。\n\n[red]她的眼睛睁着。[/red]\n\n不，不只是睁着。她的眼珠在动，慢慢地、慢慢地转向门口——转向你站的位置。\n\n你捂住嘴，不敢出声。\n\n她的嘴唇翕动，没有发出声音，但你看懂了口型：\n\n[whisper]\"帮……我……\"[/whisper]",
        effects: {
            sanity: -15,
            yin: 10,
        },
        choices: [
            createChoice({
                text: "轻声问她需要什么帮助",
                next: "ask_her_name",
            }),
            createChoice({
                text: "关上灯，假装没看见",
                next: "ignore_her",
                effects: {
                    yin: 10,
                },
            }),
            createChoice({
                text: "立刻退出房间锁门",
                next: "flee_hall7",
            }),
            createChoice({
                text: "你保持清醒，注意到她眼角有一滴没化开的胭脂泪",
                next: "notice_tear",
                condition: {
                    sanityAbove: 80,
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    }),
    knock_first: createScene('knock_first', {
        title: "敲门",
        text: "你按照老规矩，在门上敲了三下。\n\n[whisper]咚。咚。咚。[/whisper]\n\n每一声都像敲在水面上，声音传得很远，又很快消散。\n\n然后你才推门进去，没有开灯，只借着走廊的幽光往里看。\n\n女尸还躺在那里，眼睛闭着，双手规规矩矩地放在胸前。和入殓时一模一样。\n\n但你注意到，她脚边的地面上，有一小片水渍。\n\n水渍的形状像是一个脚印。\n\n[red]朝着门口的方向。[/red]",
        effects: {
            yin: 5,
            setFlag: "followedRitual",
        },
        choices: [
            createChoice({
                text: "查看那片水渍",
                next: "check_water_stain",
            }),
            createChoice({
                text: "离开，继续守夜",
                next: "continue_watch",
            }),
        ],
    }),
    osmanthus_trace: createScene('osmanthus_trace', {
        title: "桂香引",
        text: "你本已准备推门，忽然闻到一缕若有若无的香气从门缝里渗出来。\n\n不是香烛味，也不是尸体的腐臭，而是桂花的甜香。这香气在殡仪馆里显得格外诡异，像是从某个不该存在的季节飘来的。\n\n你顺着香气望去，发现七号厅门下的缝隙里，有一小片暗红色的痕迹正在缓缓晕开。不是血，是胭脂。\n\n那胭脂的痕迹像是一条细线，从门内延伸出来，一直爬到走廊拐角的阴影里。阴影中，放着一个你从未见过的旧妆奁。\n\n妆奁的漆早已斑驳，铜扣上却干干净净，像是有人日日擦拭。",
        effects: {
            sanity: -5,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "打开妆奁",
                next: "open_makeup_box",
            }),
            createChoice({
                text: "按规矩先敲门，不理会香气",
                next: "knock_first",
                effects: {
                    yin: -5,
                },
            }),
        ],
    })
};
