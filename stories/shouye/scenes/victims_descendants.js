/**
 * 《守夜》场景模块：victims_descendants
 * 火灾遇难者后人支线
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    victim_descendants: createScene('victim_descendants', {
        title: "后人",
        text: "你在青石镇多方打听，找到了三位死难者的后人。\n\n秦鸣远的女儿，如今已是八十多岁的老太太。她父亲死时她才三岁，对父亲几乎没记忆，但家里一直供着父亲的灵位。听说你提起了她父亲救孩子的事，老人家哭了。\n\n\"原来……我爸是为了救人。\"她说，\"我一直以为他是逃不出来。\"\n\n赵铁柱没有后人。他是外乡人，死后无人收殓，骨灰被镇上集体掩埋在乱葬岗。你在乱葬岗的一角，找到了一块没有名字的小碑。\n\n孙瞎子有个徒弟，是镇上现在的盲人按摩师。他没见过师父，但师父的二胡技艺传到了他手里。你找到他时，他正在给客人按肩，旁边放着一把他自己做的二胡。\n\n\"师父的琴艺是春香班传下来的。\"他说，\"虽然我没见过他，但每次拉琴，我都觉得他在我身后听。\"",
        effects: {
            time: 120,
            sanity: 10,
            yin: -10,
            setFlag: "metVictimDescendants",
        },
        choices: [
            createChoice({
                text: "请孙瞎子的徒弟拉一曲",
                next: "sun_disciple_play",
            }),
            createChoice({
                text: "回废墟超度三人",
                next: "old_stage_victims",
            }),
            createChoice({
                text: "回殡仪馆",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    sun_disciple_play: createScene('sun_disciple_play', {
        title: "一曲",
        text: "孙瞎子的徒弟——一个四十多岁的中年盲人——坐下来，拿起二胡。\n\n\"拉什么？\"他问。\n\n\"《牡丹亭》的过门。\"你说。\n\n他愣了一下：\"这是老曲子了，现在没什么人听。您怎么知道这个？\"\n\n\"我听过。\"你说，\"从一个老琴师那里。\"\n\n他没再问，调了调弦，开始拉。\n\n琴声一响，你浑身起了一层鸡皮疙瘩。\n\n那琴声，和你在废墟上听到的、孙瞎子\"弦接上了\"后那段琴声，几乎一模一样。同样的颤音，同样的滑指，同样的、属于盲人特有的、靠耳朵练出来的精准。\n\n[whisper]师父的手艺，传到了徒弟手里。[/whisper]\n\n拉到一半，徒弟忽然停下来，侧着耳朵听了一会儿。\n\n\"怪了。\"他说，\"我总觉得，身后有人在跟我合。\"\n\n你回头看了看。按摩铺的角落里，空无一人。\n\n但那里，分明有一把椅子，正对着二胡的位置，像是留给某个看不见的听众的。\n\n[whisper]也许是有的。[/whisper]",
        effects: {
            sanity: 20,
            yin: -15,
            setFlag: "sunReleased",
        },
        choices: [
            createChoice({
                text: "谢过徒弟，回废墟",
                next: "old_stage_victims",
            }),
            createChoice({
                text: "回殡仪馆",
                next: "enter_with_flashlight",
            }),
        ],
    })
};
