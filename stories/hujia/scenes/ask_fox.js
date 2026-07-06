/**
 * 《hujia》场景模块：ask_fox
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_why_chosen: createScene('ask_why_chosen', {
        title: "问为何选中你",
        text: "\"为什么是我？\" 你问。\n\n狐女走近你，你能闻到她身上有一股淡淡的狐狸味儿，还有一点桂花香。\n\n\"因为你父亲。\" 她说。\n\n\"我父亲？\"\n\n\"二十年前，你父亲救过一只受伤的狐狸。\" 狐女说，\"那只狐狸就是我母亲。我母亲临终前让我报恩，说周家后人若有难，要我相助。\"\n\n\"我现在没有难。\"\n\n\"你有。\" 狐女说，\"你命硬克父，寿数不过三十。与我成婚，我可借你阳气渡劫，你也可借我妖力延寿。双赢之事，何乐不为？\"\n\n她顿了顿，像是想起了什么：\"你们周家祖上在青石镇造过不少孽。你父亲救我母亲，本是想积德抵消。可孽债太重，积来的德……只够保你一个人。\"\n\n你看着她。她说得很诚恳，但你知道狐狸最会骗人。",
        effects: {
            yin: 5,
        },
        choices: [
            createChoice({
                text: "问她成婚之后会怎样",
                next: "ask_after_marriage",
            }),
            createChoice({
                text: "仍然拒绝",
                next: "refuse_fox",
            }),
        ],
    }),
    ask_after_marriage: createScene('ask_after_marriage', {
        title: "追问",
        text: "\"成婚之后呢？\" 你问。\n\n狐女说：\"三年后，我渡劫成功，可化去妖身，成为真正的仙。届时你若有情，可与我同修；你若无情，我可送你一场富贵，让你回人间享福。\"\n\n\"那这三年我要做什么？\"\n\n\"陪我。\" 狐女说，\"在我修炼时守着我，在我渡劫时为我挡雷。\"\n\n\"挡雷？\"\n\n\"雷劫会把你劈死。\" 狐女说得轻描淡写，\"但你放心，我会尽力保你。\"\n\n[red]你的脸色变了。[/red]\n\n原来不是双赢。你是她的避雷针。",
        effects: {
            sanity: -10,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "拒绝，说不想送死",
                next: "refuse_fox",
            }),
            createChoice({
                text: "问她有没有不死的办法",
                next: "ask_survive",
            }),
            createChoice({
                text: "你曾宽恕过一个被辜负的亡魂，狐族也能懂这份慈悲吗？",
                next: "fox_mercy_path",
                condition: {
                    flag: "xiulanMercy",
                },
            }),
            createChoice({
                text: "你想起周家有人曾为秀兰正名，狐族也能被正名吗？",
                next: "zhou_name_mentioned",
                condition: {
                    flag: "restored_xiulan_name",
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    }),
    ask_survive: createScene('ask_survive', {
        title: "求生之法",
        text: "\"有没有办法，让我不死？\" 你问。\n\n狐女沉默了很久。月光下，她的尾巴轻轻摆动，像是犹豫。\n\n\"有。\" 她终于说，\"但你要付出比死更重的代价。\"\n\n\"什么代价？\"\n\n\"把你的名字从周家族谱上抹去。\" 她说，\"周家祖上害我狐族，欠下血债。你是周家最后的男丁，只要你不姓周，这债就不算在你头上。\"\n\n你愣住。不姓周？\n\n\"我可以给你一个新名字。\" 狐女说，\"但从此之后，周家的孽，与你无关；周家的福，也与你无关。\"\n\n[red]你将不再是周远。你将只是你自己。[/red]",
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: "knows_name_escape",
        },
        choices: [
            createChoice({
                text: "答应她，放弃周家姓氏",
                next: "",
                ending: "hidden_no_marriage_no_demon",
            }),
            createChoice({
                text: "拒绝，宁愿死也不忘本",
                next: "refuse_fox",
            }),
        ],
    })
};
