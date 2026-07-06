/**
 * 《ganshi》场景模块：youth
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    youth_driver_token: createScene('youth_driver_token', {
        title: "同行",
        text: "你掀开青年尸体的衣领，发现他脖子上挂着一枚小小的铜铃。那铃铛和你手里的一模一样，只是更旧，铃舌上刻着一个\"陈\"字。\n\n你愣住了。\n\n这是赶尸匠的随身铃。每个赶尸匠出师时，师父都会赠一枚刻着自己姓氏的铜铃。\n\n\"你是赶尸匠？\" 你问尸体。\n\n青年的眼睛忽然转动了一下，看着你。他的嘴唇没有动，但声音直接传进你脑子里：\n\n[whisper]\"第七个……\"[/whisper]\n\n\"什么第七个？\"\n\n[whisper]\"湘西……赶尸匠……第七个……死在……周家……手里……\"[/whisper]\n\n他的手指向自己的后背。那道刀伤，从脖子延伸到腰，正是赶尸匠最忌讳的\"断脊\"。\n\n有人故意断了他的脊，让他死后也不能直立行走。",
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: "knowsSeventhDriver",
        },
        choices: [
            createChoice({
                text: "替他完成最后一单",
                ending: "hidden_seventhDriver",
                effects: {
                    sanity: 5,
                    yin: -5,
                },
            }),
            createChoice({
                text: "查清谁杀了他",
                next: "investigate_truth",
            }),
        ],
    })
};
