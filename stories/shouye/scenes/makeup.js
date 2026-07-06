/**
 * 《守夜》场景模块：makeup
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    open_makeup_box: createScene('open_makeup_box', {
        title: "妆奁",
        text: "你蹲下身，轻轻掀开妆奁的盖子。\n\n奁中铺着褪色的红绸，上面放着一面铜镜、一盒胭脂、一封泛黄的信。铜镜背面刻着[faded]\"周生赠云袖\"[/faded]五个小字。\n\n你拿起铜镜，镜中却没有映出你的脸。你看见一座燃烧的舞台，一个穿红戏服的女子在火中起舞，而舞台下站着一个穿长衫的年轻男子，正泪流满面地望着她。\n\n那男子手中握着一把剪刀，剪断了系在女子腕上的红绳。\n\n你猛地放下镜子。再拿起那封信，信纸上的字迹已经模糊，但还能辨认：\n\n[faded]\"云袖吾爱，戏台将塌，我不得不将你移入青石河。水能灭火，亦能锁魂。待我找到救你之法，必来寻你。周生泣笔。\"[/faded]\n\n原来，把她从戏台搬到河里的，不是别人，正是她的心上人周生。",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "knowsZhouSheng",
        },
        choices: [
            createChoice({
                text: "把信念给云袖听",
                ending: "hidden_zhouShengLetter",
            }),
            createChoice({
                text: "再看一眼铜镜",
                ending: "death_makeupMirror",
            }),
            createChoice({
                text: "合上妆奁，答应帮她完成心愿",
                next: "promise_help",
            }),
        ],
    })
};
