/**
 * 《守夜》场景模块：escape
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    flee_hall7: createScene('flee_hall7', {
        title: "走廊奔逃",
        text: "你转身就跑。\n\n走廊好像变得很长，怎么跑都跑不到尽头。身后的门\"吱呀\"一声开了，然后是一串湿漉漉的脚步声。\n\n[red]啪嗒。啪嗒。啪嗒。[/red]\n\n你不敢回头，拼命冲向值班室。\n\n终于，你撞开值班室的门，反手锁上。背靠着门，大口喘气。\n\n门外安静了。\n\n你慢慢转过身。值班室的玻璃窗外，贴着一张苍白的脸。\n\n她的戏服还在滴水。",
        effects: {
            sanity: -30,
            yin: 25,
            visual: "shake",
        },
        choices: [
            createChoice({
                text: "用符咒封窗",
                next: "seal_window",
                condition: {
                    hasItem: "护身符",
                },
            }),
            createChoice({
                text: "打电话求救",
                next: "call_for_help",
            }),
            createChoice({
                text: "拉下窗帘装看不见",
                next: "hide_behind_curtain",
            }),
        ],
    }),
    seal_window: createScene('seal_window', {
        title: "符封窗",
        text: "你把护身符贴在玻璃窗上。\n\n窗外的女尸发出一声尖啸，向后退去。她的身影在走廊的灯光下渐渐淡去，最后只剩下一滩水渍。\n\n你靠着墙滑坐在地上，浑身冷汗。\n\n天快亮时，你听见七号厅里传来一阵轻微的锣鼓声，然后是云袖的唱腔，从高昂渐渐转为低沉，最后消失。\n\n你打开门去看。女尸安静地躺着，眼睛闭着，嘴角带着一丝笑意。\n\n她终于唱完了。",
        effects: {
            sanity: 10,
            yin: -20,
            removeItem: "护身符",
        },
        ending: "normal_sealedNight",
    }),
    call_for_help: createScene('call_for_help', {
        title: "求救电话",
        text: "你颤抖着拨通林叔的电话。\n\n\"林叔，七号厅的尸体……\"\n\n\"我知道。\" 林叔的声音很平静，\"她每年这个时候都会醒。你做了什么？\"\n\n\"我……我没做什么。\"\n\n\"你没敲门就进去了？\" 林叔叹了口气，\"年轻人，不守规矩是要付出代价的。\"\n\n电话断了。\n\n窗外的女尸笑了。她的脸贴着玻璃，越贴越近，越贴越近——\n\n[red]玻璃碎了。[/red]",
        effects: {
            sanity: -40,
            yin: 30,
        },
        ending: "death_glassShatter",
    }),
    hide_behind_curtain: createScene('hide_behind_curtain', {
        title: "帘后躲藏",
        text: "你拉下窗帘，缩在值班室角落，浑身发抖。\n\n你不知道她在外面站了多久。也许几分钟，也许几小时。\n\n你不敢看表，不敢出声，甚至不敢呼吸。\n\n终于，天亮了。你鼓起勇气拉开窗帘。\n\n窗外什么都没有。只有玻璃上留着一个人形的湿印。\n\n你打开值班室的门，准备离开。一低头，看见门缝下塞着一张湿透的戏票。\n\n戏票上写着：\n\n[faded]\"今晚子时，青石戏台，《牡丹亭》。特邀：周遥。\"[/faded]",
        ending: "normal_invitedToShow",
    })
};
