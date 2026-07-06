/**
 * 《tishen》NPC 对话
 */

export const NPCs = {
    locust_tree_spirit: {
        name: '槐婆婆',
        title: '槐树灵',
        dialogue: {
            start: {
                text: `你听见槐树深处传来一声轻叹。回头一看，树洞里坐着一个白发老妇，正用枯枝般的手指梳理着垂下来的槐花枝。`,
                choices: [
                    { text: '问她是谁', next: 'who_are_you' },
                    { text: '问她知不知道纸人的事', next: 'ask_doll' },
                    { text: '离开', exit: true }
                ]
            },
            who_are_you: {
                text: `"我？"老妇笑了，脸上的皱纹像树皮一样舒展开，"我在这棵槐树下住了快一百年。你小时候还在我身上爬过呢，只是你不记得了。你爸扎纸人的时候，在我树下烧过三炷香，求我护着那纸人别散了形。`,
                choices: [
                    { text: '问她为什么护着纸人', next: 'ask_doll' },
                    { text: '问她纸人有没有魂', next: 'ask_soul' }
                ]
            },
            ask_doll: {
                text: `槐婆婆望向红布盖着的纸人，眼神复杂。"它啊……我看着他一天天'长'大。起初只是竹篾和黄纸，后来有了眉眼，有了声音，有了……想法。你不在的这五年，它每天晚上都对着你的窗户说话，练习怎么叫你爸妈。`,
                choices: [
                    { text: '问它想说什么', next: 'ask_soul' },
                    { text: '问怎么才能让它走', next: 'ask_name' },
                    { text: '你求她给你一片护身的槐树叶', effects: { npcAffinity: 5 }, next: 'give_leaf' }
                ]
            },
            ask_soul: {
                text: `"魂？"槐婆婆沉默了很久，"它身体里确实装着什么东西。但那不是你的魂——你的魂还在你身上。那是一缕被周家纸扎铺子封进来的孤魂，借了你的手、你的脸、你的八字，来这人间走一遭。它想被看见，不是被当成'你'，是被当成'它自己'。`,
                choices: [
                    { text: '问她该起什么名字', next: 'ask_name' },
                    { text: '谢谢她，离开', effects: { npcAffinity: 10 }, exit: true }
                ]
            },
            ask_name: {
                text: `"名字不能和你有关。"槐婆婆说，"你若叫它'周安'，它只会更像你。你若叫它'纸生'，它就有了自己的根。名字是魂的锚，锚定了，它才知道自己不是谁的影子。给它一个名字，它也许就愿意走了。`,
                effects: { setFlag: 'locustNameHint', sanity: 5 },
                choices: [
                    { text: '问她要一片槐树叶护身', effects: { npcAffinity: 5 }, next: 'give_leaf' },
                    { text: '记下她的话，离开', exit: true }
                ]
            },
            give_leaf: {
                text: `槐婆婆从枝头摘下一枚叶子，叶脉在月光下泛着淡淡的金光。"拿着吧。槐树属阴，但能护住人的'名'。只要你还记得自己是谁，它就不能完全变成你。`,
                effects: { addItem: '槐树叶', sanity: 5 },
                choices: [
                    { text: '收下槐树叶，告别', exit: true }
                ]
            }
        }
    },

    lao_zhang: {
        name: '老张',
        title: '守夜人',
        dialogue: {
            start: {
                text: `你正和母亲说话，院门外传来一声咳嗽。一个提着灯笼的老人站在门槛边，朝你点点头。他的灯笼在风里晃了晃，火光映出他脸上深深的皱纹。`,
                choices: [
                    { text: '问他是不是见过纸人动', next: 'ask_paper' },
                    { text: '给他递一支烟，谢谢他守夜', effects: { npcAffinity: 10 }, next: 'ask_paper' },
                    { text: '离开', exit: true }
                ]
            },
            ask_paper: {
                text: `老张压低灯笼，脸色在火光中忽明忽暗。"见过。你不在的这五年，每逢大雾天，我就瞅见院子里站着个穿校服的人影，脸朝着你家窗户。你爸不让我告诉你，说那是给你挡灾的替身。去年冬天，你爸本来病得快不行了，忽然就好了。从那以后，那纸人身上多了一块焦痕，像是被雷劈过。`,
                choices: [
                    { text: '问他纸人里是不是住着别的魂', next: 'ask_soul' },
                    { text: '问他替身有什么讲究', next: 'ask_ritual' }
                ]
            },
            ask_soul: {
                text: `"魂？"老张从怀里掏出一块碎铜镜，"我祖上是走阴差的，留过一块照魂镜。你要是不怕，拿去看看那纸人。若镜子里映出的不是你的脸，那就说明……它身体里头，住着别的东西。`,
                condition: { lacksItem: '铜镜碎片' },
                effects: { addItem: '铜镜碎片', npcAffinity: 15 },
                choices: [
                    { text: '收下铜镜碎片', next: 'ask_ritual' }
                ]
            },
            ask_ritual: {
                text: `"纸扎替身最怕两样东西。"老张说，"一是火，二是名。烧了它，连着替你受过的灾会一并还给你；给了它名，它就有了自己的去处，不再缠着你。你选哪条路，得看你想怎么活。`,
                choices: [
                    { text: '问他有没有第三条路', next: 'ask_third' },
                    { text: '谢谢他，告别', effects: { npcAffinity: 5 }, exit: true }
                ]
            },
            ask_third: {
                text: `老张想了想，说："有。带它走。你爸的咒把它困在院子里，你只要抱它走出院门，它就自由了。但它愿不愿意跟你走，得看它信不信任你。`,
                effects: { setFlag: 'laoZhangThirdWay' },
                choices: [
                    { text: '告别', exit: true }
                ]
            }
        }
    },

    zhou_lao: {
        name: '周老',
        title: '纸扎匠',
        dialogue: {
            start: {
                text: `瞎了一只眼的老人坐在门槛上扎纸马，竹篾在他指间翻飞。他头也不抬："你身上沾着我周家纸扎的味道。那替身，养出魂来了吧？`,
                choices: [
                    { text: '问他怎么知道', next: 'ask_seal' },
                    { text: '求他救人', next: 'ask_free' },
                    { text: '离开', exit: true }
                ]
            },
            ask_seal: {
                text: `"纸人后背上那方印章，是我年轻时候盖的。"周老停下活计，用那只完好的眼睛看着你，"你爸当年求我扎一个替身，替儿子挡病。我给了他纸人，也告诉他：替身只能用三年，三年后必须烧掉。他舍不得。那纸人越来越像你，你爸就越来越信它能替你活。人呐，最怕的不是鬼，是盼头。`,
                effects: { sanity: -5 },
                choices: [
                    { text: '问他纸人里的魂从哪来', next: 'ask_soul' },
                    { text: '问他怎么救父亲', next: 'ask_free' }
                ]
            },
            ask_soul: {
                text: `"魂？"周老冷笑一声，"我周家做替身，从不拘魂。那魂是自己钻进纸壳里的。多半是附近哪个横死的孤魂野鬼，闻着人气儿，想借纸人的身体再活一回。它不一定想害你，但它想活，就一定会抢你的位置。烧了纸壳，魂没处去，会缠上烧它的人。你爸试过烧，不是没烧成吗？不是烧不着，是那魂不愿意走。`,
                choices: [
                    { text: '问怎么让它自愿离开', next: 'ask_free' }
                ]
            },
            ask_free: {
                text: `"两个法子。"周老竖起两根手指，"一是认主，你给它起个名字，喂它一滴血，它认你为主，你让它走它就得走。二是放生，带它离开这个院子，让它自己选去处。但这两个法子，都得它心甘情愿。强来的，会反噬。`,
                effects: { setFlag: 'zhouMasterHint' },
                choices: [
                    { text: '问他需要准备什么', next: 'ask_price' },
                    { text: '告别', exit: true }
                ]
            },
            ask_price: {
                text: `周老从柜台下取出一张黄符，推到你面前。"这是引路符，烧了它，纸人就知道该往哪走。但你得想清楚——符用出去，伤的是纸人，也是你爸的心血。代价你自己付。`,
                condition: { lacksItem: '周家引路符' },
                effects: { addItem: '周家引路符', npcAffinity: 10 },
                choices: [
                    { text: '收下引路符', exit: true }
                ]
            }
        }
    }
};
