/**
 * NPC 模块：town
 */

export const NPCs = {
lao_zhang: {
        name: '老张',
        title: '守夜人',
        dialogue: {
            start: {
                text: `河边站着个佝偻老头，手里提着一盏昏黄的马灯。他看见你，把灯举高了些。

"小子，夜里别靠河太近。这河吃人，不是一天两天了。"`,
                choices: [
                    { text: '你守这条河多久了？', next: 'ask_duty' },
                    { text: '你见过河娘吗？', next: 'ask_river' },
                    { text: '你见过我妈吗？', next: 'ask_mother' },
                    { text: '离开', exit: true }
                ]
            },
            ask_duty: {
                text: `"三十年喽。"老张叹了口气，"以前守河，是怕人失足。现在守河，是怕人自己往下跳。"`,
                choices: [
                    { text: '河娘到底是什么？', next: 'ask_river' },
                    { text: '给我点防身的东西', next: 'give_lantern' },
                    { text: '先走一步', exit: true }
                ]
            },
            ask_river: {
                text: `"穿红衣裳的女人，半夜站在水边唱歌。"老张压低声音，"你要是听见有人叫你名字，千万别答应。答应了，魂就被勾走了。"`,
                choices: [
                    { text: '那怎么脱身？', next: 'warn_ferryman' },
                    { text: '给我一盏河灯', next: 'give_lantern' },
                    { text: '离开', exit: true }
                ]
            },
            ask_mother: {
                text: `老张沉默了一会儿，点点头："上礼拜我还看见你娘在河边发呆。她……是在等什么人吧。"

他顿了顿："你娘是个好人，别让她害了你们。"`,
                choices: [
                    { text: '她在等谁？', next: 'ask_river' },
                    { text: '谢谢你告诉我', effects: { npcAffinity: 10, setFlag: 'laoZhangSawMother' }, next: 'ask_duty' },
                    { text: '离开', exit: true }
                ]
            },
            give_lantern: {
                text: `老张从怀里摸出一盏纸糊的小河灯，灯芯浸过桐油。

"拿着。要是被河娘缠住，点上它，她们会以为你是来送行的，不会拉你下水。"他郑重地说，"记住，只能点一次。"`,
                choices: [
                    { text: '收下河灯', effects: { npcAffinity: 15, addItem: '守夜人的河灯' }, next: 'lantern_given' },
                    { text: '不用了', exit: true }
                ]
            },
            lantern_given: {
                text: `"灯灭了，你就得自己游回来。"老张把马灯转了个方向，"子时以后，这条河不归活人管。你心里有数。"`,
                choices: [
                    { text: '子时会发生什么？', next: 'warn_ferryman' },
                    { text: '离开', exit: true }
                ]
            },
            warn_ferryman: {
                text: `"子时过后，河上会有条船。"老张的眼神变得飘忽，"那船夫没有脸，只有一团水雾。上了船，就别想下来。"

"除非，"他补了一句，"你舍得用一个名字当船钱。"`,
                choices: [
                    { text: '用名字当船钱？', effects: { setFlag: 'knowsFerrymanWarning' }, next: 'ask_river' },
                    { text: '走了，多谢', exit: true }
                ]
            }
        }
    },

shen_po: {
        name: '神婆',
        title: '河婆',
        dialogue: {
            start: {
                text: `神婆用剩下的那只眼睛盯着你，忽然咧嘴笑了。

"你身上有阴气。你妈在找你，秀姑也在找你。你打算怎么办？"`,
                choices: [
                    { text: '怎么救我妈？', next: 'ask_ritual' },
                    { text: '第一个河娘是谁？', next: 'ask_first_heniang' },
                    { text: '再给我点东西防身', next: 'give_charm' },
                    { text: '先告辞', exit: true }
                ]
            },
            ask_ritual: {
                text: `"想救你妈，路有三条。"神婆竖起三根枯瘦的手指，"一条是骗秀姑替你妈；一条是正了这条河的源头；最难得的路，是有人肯渡她们。"`,
                choices: [
                    { text: '渡她们是什么意思？', next: 'ask_ferryman_path' },
                    { text: '源头怎么正？', next: 'ask_first_heniang' },
                    { text: '教我一首河娘爱听的歌', next: 'teach_song' },
                    { text: '离开', exit: true }
                ]
            },
            ask_first_heniang: {
                text: `"第一个河娘？三百年前沉塘的沈氏。"神婆的声音像从井底传来，"她的怨气是根。根不除，河娘不断。"

"你要是想正名，就去她碑前说一句：她没错。"`,
                choices: [
                    { text: '沈氏后人呢？', next: 'ask_descendants' },
                    { text: '教我唱歌', next: 'teach_song' },
                    { text: '离开', exit: true }
                ]
            },
            ask_descendants: {
                text: `"后人？村里还有姓沈的。"神婆冷笑，"可他们肯不肯替祖宗认罪，那就是另一回事了。"

"你要是真想走这条路，得先让他们相信，河里还在闹，是因为他们欠了债。"`,
                choices: [
                    { text: '怎么让他们相信？', effects: { setFlag: 'knowsShenDescendants' }, next: 'ask_ritual' },
                    { text: '离开', exit: true }
                ]
            },
            ask_ferryman_path: {
                text: `"超度、正名、道歉，都是活人的规矩。"神婆眯起眼，"河娘要的不是规矩，是有人把她们从这边，送到那边。"

"你要是心里够硬，也够软，就去做那个撑船的人。"`,
                choices: [
                    { text: '撑船需要什么？', effects: { setFlag: 'knowsFerrymanPath' }, next: 'give_charm' },
                    { text: '我做不到', next: 'ask_ritual' },
                    { text: '离开', exit: true }
                ]
            },
            teach_song: {
                text: `神婆清了清嗓子，哼了一段婉转的调子：

[whisper]"月亮出来亮汪汪，亮汪汪，想起我的阿妹在深山……"[/whisper]

"这是《小河淌水》。七月半唱给秀姑听，她兴许会松口。"`,
                choices: [
                    { text: '记住这支歌', effects: { npcAffinity: 10, setFlag: 'knowsRiverSong' }, next: 'start' },
                    { text: '离开', exit: true }
                ]
            },
            give_charm: {
                text: `神婆从袖中摸出一道折成三角的黄符，符上朱砂已经有些发暗。

"这道符不伤人，只护身。带着它，河娘拉你的时候，你能多挣一口气。"`,
                choices: [
                    { text: '收下护身符', effects: { npcAffinity: 10, addItem: '河婆护身符' }, next: 'start' },
                    { text: '不要了', exit: true }
                ]
            }
        }
    }
};
