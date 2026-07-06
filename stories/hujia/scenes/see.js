/**
 * 《hujia》场景模块：see
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    see_through_fox: createScene('see_through_fox', {
        title: "狐影",
        text: "你深吸一口气，强迫自己冷静。\n\n狐女很美，美得不真实。但你注意到，月光照在她身上，投下的影子不是一个人的影子——\n\n那是一只巨大的白狐，身后九条尾巴缓缓摆动。\n\n[red]她不是人。她甚至不是完全化形。[/red]\n\n\"你的尾巴露出来了。\" 你说。\n\n狐女愣了一下。她低头看自己的影子，脸色变了。\n\n\"你看得见？\" 她问。\n\n\"我看得见。\" 你说，\"你不是来娶我的，你是来渡劫的。人婚只是借口，你真正需要的，是有人不害怕你。\"\n\n狐女沉默了。她身后的狐尾影子慢慢收拢，最后变成一个普通女子的轮廓。\n\n\"你比我想象的聪明。\" 她说，\"但聪明不能帮我渡劫。\"\n\n\"也许可以。\" 你说，\"如果你不把我当工具。\"",
        effects: {
            sanity: -10,
            yin: -10,
            setFlag: "sawFoxShadow",
        },
        choices: [
            createChoice({
                text: "问她愿不愿意平等相待",
                next: "no_marriage_path",
                effects: {
                    setFlag: "seekEquality",
                },
            }),
            createChoice({
                text: "仍然拒绝",
                next: "refuse_fox",
            }),
        ],
    }),
    see_through_village: createScene('see_through_village', {
        title: "识破",
        text: "你没有接匕首。\n\n\"村长，\" 你说，\"你为什么要杀她？\"\n\n老村长的脸色僵了一下：\"她是妖，会害人。\"\n\n\"她是妖，但她还没害过人。\" 你说，\"倒是你，三年前你儿子被狐群吓死，你想借我的手报仇，对吗？\"\n\n村长的手抖了一下。匕首掉在地上。\n\n\"你……你怎么知道？\"\n\n\"你说话的时候，一直在看山上的方向。\" 你说，\"那不是害怕，是恨。\"\n\n村长沉默了很久，最后叹了口气：\"是。我儿子死在山里。可狐女来找你，也是真的。她不怀好意。\"\n\n\"我知道。\" 你说，\"但我会用自己的方式处理。\"\n\n你转身离开，没有拿那把匕首。",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "sawThroughVillageChief",
        },
        choices: [
            createChoice({
                text: "回家准备谈判",
                next: "prepare_hunt",
            }),
            createChoice({
                text: "直接去找狐女",
                next: "negotiate_fox",
            }),
        ],
    })
};
