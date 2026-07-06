/**
 * 《ganshi》NPC 对话
 */

export const NPCs = {
    xiulan_ghost: {
        name: '秀兰',
        title: '纸新娘的残魂',
        dialogue: {
            start: {
                text: `雨夜里，路边的红影不是灯笼，是一个穿嫁衣的女子。她的身体半透明，雨水穿过她落在泥里。

"田家的后生……"她看着你身后的三具尸体，"那具女尸，和我当年一样。"`,
                choices: [
                    { text: '你是谁？', next: 'who_are_you' },
                    { text: '你也是冥婚新娘？', next: 'same_fate' },
                    { text: '（离开）', exit: true }
                ]
            },
            who_are_you: {
                text: `"我叫秀兰。"她说，"青石镇人，被周家活埋配了冥婚。后来有人替我正了名，我才没有化作厉鬼。"\n\n她看向女尸盖着的白布："可这世上还有多少柳红，没等到那个人。"`,
                choices: [
                    { text: '柳红是谁？', next: 'about_liuhong' },
                    { text: '怎样才能救她？', next: 'mercy_teach' },
                    { text: '（离开）', exit: true }
                ]
            },
            same_fate: {
                text: `"是。"秀兰苦笑，"周家喜服从纸扎铺来，红绳一系，黄土一埋，一个姑娘就成了'新娘'。"\n\n"我认得那嫁衣内衬的朱印——'青石镇 周氏纸扎铺'。三十年了，他们还在用同一套把戏。"`,
                choices: [
                    { text: '怎样才能救她？', next: 'mercy_teach' },
                    { text: '你见过这个周家？', next: 'zhou_warning' },
                    { text: '（离开）', exit: true }
                ]
            },
            about_liuhong: {
                text: `"白布下那具女尸，就叫柳红。"秀兰说，"她在花轿里被迷晕，醒来时已经在棺材里。她和你一样，不甘心。"\n\n"你若把她当周家人，她就真是鬼了。你若把她当人……她也许还能有公道。"`,
                choices: [
                    { text: '我答应替她讨公道', next: 'mercy_gift', condition: { noFlag: 'xiulanMercy' } },
                    { text: '（已经铭记于心）', next: 'mercy_teach', condition: { flag: 'xiulanMercy' } },
                    { text: '（离开）', exit: true }
                ]
            },
            mercy_teach: {
                text: `"别把她送回周家，也别让她自己报仇。"秀兰说，"带她到县衙，让阳间的人给她正名。她的名字要写在案卷上，而不是周家的族谱里。"\n\n"这叫'恕'。不是饶过周家，是饶过自己。"`,
                choices: [
                    { text: '我答应替她讨公道', next: 'mercy_gift', condition: { noFlag: 'xiulanMercy' } },
                    { text: '（离开）', exit: true }
                ]
            },
            mercy_gift: {
                text: `秀兰伸出手，在你额前轻轻一点。你没有感觉到触碰，却忽然清醒了许多。\n\n"去吧。"她说，"记住，公道比报仇难，也比报仇长。"\n\n她的身影淡入雨中，像一纸湿透的嫁衣。`,
                effects: { setFlag: 'xiulanMercy', npcAffinity: 30, sanity: 5, yin: -5 },
                choices: [
                    { text: '（离开）', exit: true }
                ]
            },
            zhou_warning: {
                text: `"周家祖上害过狐，也害过人。"秀兰说，"狐女报恩，周家造孽，这笔账缠了三代。你若要去青石镇，别只看冥婚，也看看周家祠堂里的狐仙牌位。"\n\n"那牌位后头，藏着周家最怕让人知道的事。"`,
                choices: [
                    { text: '怎样才能救她？', next: 'mercy_teach' },
                    { text: '（离开）', exit: true }
                ]
            }
        }
    },

    zhang_guard: {
        name: '老张',
        title: '守夜人',
        dialogue: {
            start: {
                text: `洞口蹲着一个抽旱烟的老人，烟锅一明一灭。他抬头看了你一眼，又看了看你身后的三具尸体。\n\n"赶尸的，这洞三十年前死过一个道人。你师父姓田吧？"`,
                choices: [
                    { text: '你认识我师父？', next: 'ask_master' },
                    { text: '这洞有什么讲究？', next: 'ask_curse' },
                    { text: '这三具尸体有冤？', next: 'ask_corpses' },
                    { text: '（离开）', exit: true }
                ]
            },
            ask_master: {
                text: `"不认识。"老张磕了磕烟锅，"但我守了三十年夜，见过你师父从这洞里出来。他出来时少了半条命，从此再也不走这条路。"\n\n"洞里那位，是田家的债主。"`,
                choices: [
                    { text: '怎样才能过去？', next: 'ask_curse' },
                    { text: '这三具尸体有冤？', next: 'ask_corpses' },
                    { text: '（离开）', exit: true }
                ]
            },
            ask_curse: {
                text: `"石壁上刻着字，是那位道人用血写的。"老张说，"田家背信弃义，害他全家。他等了三十年，等一个田家后人偿命。"\n\n"但你若肯替田家还债，也许不必偿命。"`,
                choices: [
                    { text: '怎么还债？', next: 'ask_atone' },
                    { text: '这三具尸体有冤？', next: 'ask_corpses' },
                    { text: '（离开）', exit: true }
                ]
            },
            ask_corpses: {
                text: `"账房先生发现了赈灾银的猫腻，青年是周家赌坊的债主，柳红——就是那具女尸——是周家少爷的冥婚新娘。"老张压低声音，"县太爷、县丞、周老爷，三方都想让他们死在半道。"`,
                choices: [
                    { text: '我该怎么做？', next: 'ask_justice' },
                    { text: '这洞有什么讲究？', next: 'ask_curse' },
                    { text: '（离开）', exit: true }
                ]
            },
            ask_atone: {
                text: `"欠债还情，欠命还义。"老张说，"你师父当年把人家的尸体扔给野狗，你若护住这三具尸体，便是替他还义。"\n\n"答应它们，送它们回家，替它们申冤。这比磕头烧纸都管用。"`,
                choices: [
                    { text: '我答应替它们讨公道', next: 'justice_gift', condition: { noFlag: 'promisedJustice' } },
                    { text: '我已经答应过了', next: 'justice_known', condition: { flag: 'promisedJustice' } },
                    { text: '我只管赶尸，不管申冤', next: 'zhang_sigh', effects: { npcAffinity: -10 } },
                    { text: '（离开）', exit: true }
                ]
            },
            ask_justice: {
                text: `"它们不是要害人，是要人记住。"老张说，"你若能答应送它们回家、替它们申冤，它们就不会害你。这笔账，比周家的银子重。"`,
                choices: [
                    { text: '我答应替它们讨公道', next: 'justice_gift', condition: { noFlag: 'promisedJustice' } },
                    { text: '我已经答应过了', next: 'justice_known', condition: { flag: 'promisedJustice' } },
                    { text: '（离开）', exit: true }
                ]
            },
            justice_gift: {
                text: `老张点点头，从怀里掏出一张用老朱砂画的黄符递给你。\n\n"贴在最不老实那具尸体的额头上。记住，这不是镇它们，是替它们守门。"\n\n他往火堆里撒了一把糯米，火星噼啪作响。`,
                effects: { setFlag: 'promisedJustice', addItem: '老朱砂符', npcAffinity: 25, sanity: 5, yin: -5 },
                choices: [
                    { text: '（离开）', exit: true }
                ]
            },
            justice_known: {
                text: `"那就好。"老张笑了笑，"田家有后，赶尸匠也有良心。你师父当年若有你一半担当，也不至于欠下这笔债。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '（离开）', exit: true }
                ]
            },
            zhang_sigh: {
                text: `老张叹口气，把烟锅在石头上磕灭。\n\n"那你就自求多福吧。这三具尸体的债，你不替它们讨，它们就会自己讨。到时候，你就是第四具。"`,
                choices: [
                    { text: '我答应替它们讨公道', next: 'justice_gift', condition: { noFlag: 'promisedJustice' } },
                    { text: '（离开）', exit: true }
                ]
            }
        }
    },

    zhou_maid: {
        name: '阿菊',
        title: '周家旧婢',
        dialogue: {
            start: {
                text: `洞壁的阴影里走出一个老妇人的鬼魂，穿着周家下人的青布衣裳。她看着你，目光浑浊。\n\n"又一个来送死的姑娘……不对，是个赶尸匠。"`,
                choices: [
                    { text: '你是谁？', next: 'who_are_you' },
                    { text: '你认识周家？', next: 'know_zhou' },
                    { text: '（离开）', exit: true }
                ]
            },
            who_are_you: {
                text: `"我姓菊，曾是周家的婢女。"老妇人说，"活着的时候给他们浆洗冥婚喜服，死了被他们封在这洞里，免得我说出去。"\n\n她看向女尸："这姑娘的嫁衣，就是我死前浆洗的最后一件。"`,
                choices: [
                    { text: '周家还做过什么？', next: 'know_zhou' },
                    { text: '怎样才能救她？', next: 'save_bride' },
                    { text: '（离开）', exit: true }
                ]
            },
            know_zhou: {
                text: `"周家祖上造过大孽。"阿菊压低声音，"他们害过狐族，狐女却报恩救了周家后人。可周家后人不懂积德，反而拿狐族的血脉当护身符，继续害人。"\n\n"你若去青石镇，看看周家祠堂的狐仙牌位，就明白了。"`,
                choices: [
                    { text: '狐族和周家有什么关系？', next: 'fox_link', condition: { noFlag: 'hujia_to_zhou' } },
                    { text: '我已经知道这层关系', next: 'fox_known', condition: { flag: 'hujia_to_zhou' } },
                    { text: '（离开）', exit: true }
                ]
            },
            save_bride: {
                text: `"别把她葬进周家祖坟。"阿菊说，"让她在阳间留下名字，周家才会怕。周家最怕的不是厉鬼，是被人知道。"\n\n"账册、血书、喜服内衬的朱印，都是证据。"`,
                choices: [
                    { text: '狐族和周家有什么关系？', next: 'fox_link', condition: { noFlag: 'hujia_to_zhou' } },
                    { text: '（离开）', exit: true }
                ]
            },
            fox_link: {
                text: `"周远那孩子，就是他父亲救过狐。"阿菊说，"狐女来报恩，周家却以为是理所应当。他们不知道，狐族的恩情是要还的，孽也是要还的。"\n\n"你若遇见狐族的人，把这话带给她：周家的债，该从狐仙牌位后头算起。"`,
                effects: { setFlag: 'hujia_to_zhou', npcAffinity: 20, sanity: -5, yin: 5 },
                choices: [
                    { text: '我该去哪里找狐族？', next: 'fox_hint' },
                    { text: '（离开）', exit: true }
                ]
            },
            fox_known: {
                text: `"你果然知道。"阿菊点点头，"那我就不多说了。记住，狐族报恩也讨债，周家最怕的，就是这笔账被翻出来。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '（离开）', exit: true }
                ]
            },
            fox_hint: {
                text: `"去青丘山。"阿菊说，"狐女常在山腰的望月石旁。你告诉她，阿菊没有忘，周家祠堂里那些姑娘也没有忘。"\n\n她的身影退入石壁，像一滴墨溶进水里。`,
                choices: [
                    { text: '（离开）', exit: true }
                ]
            }
        }
    }
};
