/**
 * 《hujia》场景模块：friend
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    friend_against_thunder: createScene('friend_against_thunder', {
        title: "共劫",
        text: "三年后，雷劫来临。\n\n狐女——现在你愿意叫她青丘——站在青丘山最高处。乌云压顶，电光在云层中翻滚。\n\n\"你不必来的。\" 她说，\"朋友不需要陪我送死。\"\n\n\"朋友才要陪你送死。\" 你说。\n\n你站在她身边，没有握住她的手，只是和她并肩而立。\n\n第一道雷劈下来。青丘化作白狐，迎向雷电。你没有挡在她身前，因为你不是她的丈夫，你没有资格替她承受。\n\n但你在她身边。\n\n第二道、第三道……你数不清有多少道雷。你只觉得身体麻木，耳边轰鸣。\n\n最后一声雷响过后，天空放晴。\n\n青丘倒在地上，白毛被烧焦了大半。你爬过去，发现她还活着。\n\n\"为什么……\" 她虚弱地问，\"你不逃？\"\n\n\"因为我说过陪你。\" 你说。\n\n她闭上眼睛，嘴角带着笑：\"人类……也不是都那么坏。\"",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "friendThroughThunder",
        },
        choices: [
            createChoice({
                text: "扶她回洞府养伤",
                next: "",
                ending: "hidden_no_marriage_no_demon",
            }),
        ],
    })
};
