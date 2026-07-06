/**
 * NPC 模块：zhou_popo
 */

export const NPCs = {
zhou_popo: {
        name: '瞎眼阿婆',
        title: '周氏纸扎铺守铺人',
        dialogue: {
            start: {
                text: `阿婆侧耳听了听你的脚步声："后生，你是来找云袖姑娘的吧？我爷爷那辈就守着这铺子，等一个能把替身送出去的人。"`,
                choices: [
                    { text: '替身是什么？', next: 'popo_tishen' },
                    { text: '周生是什么样的人？', next: 'popo_zhousheng' },
                    { text: '我带了青石镇的旧报纸', next: 'popo_newspaper', condition: { hasItem: '青石镇旧报纸' } },
                    { text: '告辞', exit: true }
                ]
            },
            popo_tishen: {
                text: `"纸人替身，替真身受过。周生扎了云袖的替身，本想烧给她，让她免了戏台坍塌的灾。可他没来得及。这纸人如今还在我柜底，你要是拿去七号厅焚了，云袖就有个替身的，好上路。"`,
                choices: [
                    { text: '怎么才能得到它？', next: 'popo_price' },
                    { text: '我明白了', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            popo_price: {
                text: `阿婆枯瘦的手指敲了敲柜台："不要钱。但要你替周生做一件事——把铜镜和信，一并还给她。让他在阴间也能了了这桩心愿。"`,
                choices: [
                    { text: '我答应', exit: true, effects: { npcAffinity: 10, setFlag: 'promisedReturnZhouSheng' } },
                    { text: '我只想要纸人', next: 'popo_greedy', effects: { npcAffinity: -15 } },
                    { text: '算了', exit: true }
                ]
            },
            popo_greedy: {
                text: `阿婆脸色一沉："贪心的人，替身不会认你。回去吧，等你想清楚了再来。"`,
                choices: [
                    { text: '对不起', exit: true, effects: { npcAffinity: 5 } },
                    { text: '哼，不要也罢', exit: true }
                ]
            },
            popo_zhousheng: {
                text: `"周生啊……是个手巧的扎纸匠，也是云袖的戏迷。戏台塌那晚，他冲进去救人，被横梁砸了背。后来他把云袖背到青石河，以为水能灭火。他临走前把铜镜和信留在我这儿，说总有一天会有人来接。"`,
                choices: [
                    { text: '铜镜有什么用？', next: 'popo_mirror' },
                    { text: '信在哪里？', next: 'popo_letter' },
                    { text: '他们真可怜', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            popo_mirror: {
                text: `"铜镜是定情物，背面刻着"周生赠云袖"。镜里映的不是人脸，是他最后看见的火。你若有缘得到它，放在她枕边，她就知道他不是负心人。"`,
                choices: [
                    { text: '记下了', exit: true, effects: { npcAffinity: 5, setFlag: 'popoHintedMirror' } }
                ]
            },
            popo_letter: {
                text: `"信在我这里，但只有真心想送还的人，才能拆开。你若念给她听，比烧一百叠纸钱都管用。"`,
                choices: [
                    { text: '请把信给我', next: 'popo_give_letter', condition: { flag: 'promisedReturnZhouSheng' } },
                    { text: '我会再来', exit: true }
                ]
            },
            popo_give_letter: {
                text: `阿婆从柜台底摸出一个油纸包，递给你："念给她听时，声音轻一点。她等这句话，等了近百年。"`,
                choices: [
                    { text: '收下', exit: true, effects: { addItem: '周生的信', npcAffinity: 10 } }
                ]
            },
            popo_newspaper: {
                text: `你读出报纸上"青石镇戏台坍塌"的标题。阿婆点点头："你这报纸是从别处得来的吧？云袖的事不是青石镇一家的债。你能找来这个，说明你和她有缘。"`,
                choices: [
                    { text: '能告诉我更多吗？', next: 'popo_zhousheng' },
                    { text: '谢谢阿婆', exit: true, effects: { npcAffinity: 5, sanity: 5 } }
                ]
            }
        }
    }
};
