/**
 * 《hujia》NPC 对话
 */

export const NPCs = {
    yun_po: {
        name: '云婆婆',
        title: '村中神婆',
        dialogue: {
            start: {
                text: `村口老槐树下坐着一个裹小脚的老太太，手里捻着一串桃木珠。她是云婆婆，村里人红白事都找她看日子。"周家小子，"她眼皮也不抬，"你身上有狐骚味。"`,
                choices: [
                    { text: '问她周家与狐族的恩怨', next: 'zhou_debt' },
                    { text: '问她狐女为什么选中我', next: 'fox_choice' },
                    { text: '问她铜镜的事', next: 'mirror_tale' },
                    { text: '离开', exit: true }
                ]
            },
            zhou_debt: {
                text: `云婆婆叹了口气："你祖上在青石镇是猎狐的。三百年前，周家先祖设下陷阱，捕杀了青丘山一窝白狐，把它们的皮卖给了镇上的裁缝。狐族记仇，记了三百年。"她顿了顿，"你父亲救的那只母狐，是当年漏网的狐崽。她报恩，是想还这份债。"`,
                choices: [
                    { text: '问她怎么还这份债', next: 'repay_debt' },
                    { text: '离开', exit: true }
                ]
            },
            fox_choice: {
                text: `"狐女选中你，一半是你命硬阳气重，一半是你父亲。"云婆婆压低声音，"她母亲临死前把恩情传给了她。她来娶你，是想用一场人婚把恩情换成因果。成了，她渡劫；不成，她灰飞烟灭。"`,
                choices: [
                    { text: '问她有没有两全之法', next: 'both_ways' },
                    { text: '离开', exit: true }
                ]
            },
            mirror_tale: {
                text: `"那面镜子？"云婆婆脸色变了，"那是你祖上从青石镇带出来的，里面封着一只老狐。三百年前就是它告密，让周家找到了狐窝。后来狐族反噬，把它也封进了镜子里。它恨周家，也恨狐族，你千万别信它。"`,
                choices: [
                    { text: '问她怎么处置镜子', next: 'mirror_deal' },
                    { text: '离开', exit: true }
                ]
            },
            repay_debt: {
                text: `"还债不难，难的是肯不肯低头。"云婆婆说，"你若真心承认周家错了，不把狐女当妖怪，反有转机。狐族最重因果，你父亲种下的善因，你若能续上，就能结出善果。"她说着，从怀里掏出一张泛黄的纸，"这是你父亲当年救狐时落下的，或许有用。"`,
                effects: { npcAffinity: 10, addItem: '狐毛契约残页' },
                choices: [
                    { text: '谢过她', exit: true }
                ]
            },
            both_ways: {
                text: `"两全？"云婆婆冷笑，"世间哪来那么多两全。不过……你若不把她当妻，把她当人，或许不必死。狐狸修千年，求的不过是一个'被当成真的'。你把她当成真的，她就未必非要你的阳气。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '记下她的话', exit: true }
                ]
            },
            mirror_deal: {
                text: `"别碰它，别打碎它。"云婆婆说，"最安全的办法，是用红布包住，埋到青丘山脚下的老槐树下。那是狐族祭祖的地方，老狐不敢造次。但你要是真把它放出来……"她没有说完，只是摇了摇头。`,
                choices: [
                    { text: '离开', exit: true }
                ]
            }
        }
    },

    hu_langzhong: {
        name: '胡郎中',
        title: '游方郎中',
        dialogue: {
            start: {
                text: `一个背着药箱的中年男子路过你家门口，停下来揉了揉鼻子。"年轻人，你屋里煞气重啊。"他自我介绍说姓胡，是个走村串镇的郎中，"我闻得出，是狐妖的味儿。需要帮忙吗？"`,
                choices: [
                    { text: '问他心头血的事', next: 'heart_blood' },
                    { text: '问他有没有安神的药', next: 'calm_herb' },
                    { text: '问他被狐妖迷了怎么办', next: 'fox_charm' },
                    { text: '离开', exit: true }
                ]
            },
            heart_blood: {
                text: `"舌尖血、心头血，都是人的精气神。"胡郎中皱眉，"给了狐妖，少则折寿十年，多则当场昏死。不过……你若真要给，也别给舌尖，给中指血。中指通心，却不如心头血伤本。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '问他有没有替代之法', next: 'blood_alt' },
                    { text: '离开', exit: true }
                ]
            },
            calm_herb: {
                text: `胡郎中从药箱里取出一个小布包："这是安魂草，晒干的。夜里焚一点，能保持清醒。狐妖最喜趁人神志不清时下套，你理智些，她骗不了你。"他把布包递给你。`,
                effects: { npcAffinity: 5, addItem: '安魂草' },
                choices: [
                    { text: '收下', exit: true }
                ]
            },
            fox_charm: {
                text: `"被狐妖迷了，先别慌。"胡郎中说，"狐妖惑人，靠的是你心里的念想。你若不贪长生、不贪美色、不贪恋富贵，她的术就弱了一半。剩下的一半，靠疼痛和清醒。"他递给你一根银针，"扎自己中指，疼醒自己。"`,
                effects: { npcAffinity: 5, addItem: '醒神银针' },
                choices: [
                    { text: '收下', exit: true }
                ]
            },
            blood_alt: {
                text: `"替代之法？"胡郎中想了想，"狐妖要血，其实是借你的生气渡劫。你若肯给她一件贴身戴了多年的旧物，里面也浸着你的气，虽不如血，却能少伤你些。不过……这件旧物给了，可就再也要不回来了。"`,
                choices: [
                    { text: '记下了', exit: true }
                ]
            }
        }
    },

    xiao_shitou: {
        name: '小石头',
        title: '村中小孩',
        dialogue: {
            start: {
                text: `狐女的轿子飞走后，你看见井边蹲着一个小身影。是隔壁家的石头，才八岁，胆子却比大人还大。"周远哥，"他小声说，"我刚才看见那狐狸姐姐哭了。"`,
                choices: [
                    { text: '问他狐女为什么哭', next: 'fox_cry' },
                    { text: '问他山里有没有怪事', next: 'mountain_weird' },
                    { text: '给他一块麦芽糖', next: 'give_candy' },
                    { text: '离开', exit: true }
                ]
            },
            fox_cry: {
                text: `"她就蹲在那棵老槐树下，尾巴卷成一团。"小石头比划着，"她好像在等谁，等了很久。然后她抬头看月亮，眼泪就掉下来了。我听见她说'母亲'。"他挠挠头，"狐狸也有妈妈吗？"`,
                choices: [
                    { text: '问他后来呢', next: 'after_cry' },
                    { text: '离开', exit: true }
                ]
            },
            mountain_weird: {
                text: `"有！"小石头眼睛亮了，"后山古墓那边，晚上会发光。我爹说是鬼火，不让我靠近。但我看见过一只大白狐从墓里走出来，嘴里叼着一颗珠子，亮晶晶的。"他压低声音，"我还知道一条小路，可以绕到墓后面。"`,
                effects: { npcAffinity: 5, setFlag: 'knowsTombBackPath' },
                choices: [
                    { text: '让他画下来', next: 'draw_map' },
                    { text: '离开', exit: true }
                ]
            },
            give_candy: {
                text: `你从口袋里摸出一块麦芽糖递给他。小石头高兴地接过去，剥开糖纸塞进嘴里。"周远哥，你真好。不像村长，老是吓我们说狐狸会吃小孩。"他含糊地说，"我告诉你一个秘密——狐狸不吃人，村长才吃人。"`,
                effects: { npcAffinity: 10 },
                choices: [
                    { text: '问他什么意思', next: 'chief_secret' },
                    { text: '离开', exit: true }
                ]
            },
            after_cry: {
                text: `"后来她就不哭了，站起来拍了拍裙子。"小石头说，"她看见我躲在树后，也没生气，只是对我笑了笑。她的虎牙尖尖的，但笑得很温柔。她说'小孩，别告诉你周远哥我哭过'。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '离开', exit: true }
                ]
            },
            draw_map: {
                text: `小石头用树枝在地上画了一条歪歪扭扭的路线："从这里绕到后山，有个被藤蔓遮住的小洞。我钻进去过，里面很凉快，还有好多亮晶晶的石头。我爹说那是狐狸的宝藏。"`,
                effects: { addItem: '手绘古墓后路图' },
                choices: [
                    { text: '谢过他', exit: true }
                ]
            },
            chief_secret: {
                text: `"我听见我爹和村长喝酒的时候说，"小石头压低声音，"村长儿子不是狐狸害的，是他自己进山偷小狐狸，被山里的狼咬死的。村长知道，但不敢说，怕丢人。"`,
                effects: { npcAffinity: 5, setFlag: 'knowsChiefSonTruth' },
                choices: [
                    { text: '离开', exit: true }
                ]
            }
        }
    },

    shoumu_huling: {
        name: '守墓狐灵',
        title: '古墓守门人',
        dialogue: {
            start: {
                text: `古墓石门开启的瞬间，一股寒气涌出。石阶上蹲着一只半透明的老狐，身形佝偻，眼睛却亮如星子。"后人，"它开口，声音像风吹过空棺，"你来取避雷珠？"`,
                choices: [
                    { text: '问它要什么代价', next: 'ask_price' },
                    { text: '问它有没有别的路', next: 'other_way' },
                    { text: '问它青丘和老狐的关系', next: 'relationship' },
                    { text: '离开', exit: true }
                ]
            },
            ask_price: {
                text: `"代价？"守墓狐灵笑了，笑声像骨头摩擦，"我守墓三百年，最缺的就是生气。拿你三十年寿命，或者你身后那小狐女一半内丹，珠子便给。"它看向青丘，"她若不肯，你们便死在墓里。"`,
                choices: [
                    { text: '问它为何如此苛刻', next: 'why_harsh' },
                    { text: '离开', exit: true }
                ]
            },
            other_way: {
                text: `"别的路？"老狐眯起眼，"墓后有条小洞，是当年山崩时裂开的。但那洞窄，只能过一人，而且通向墓室深处，没有火把照路，十死无生。"它看了看你，"你若从那边走，可以绕到我背后。但能不能拿到珠子，看你造化。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '问它洞在哪里', next: 'back_hole_location', condition: { flag: 'knowsTombBackPath' } },
                    { text: '离开', exit: true }
                ]
            },
            relationship: {
                text: `"青丘？"守墓狐灵的眼神柔和了一瞬，"她是我曾孙女。她母亲就是我女儿。当年周家猎狐，她母亲险些死在那场劫里，是你们周家那个猎户救了她。"它冷笑，"所以我说你们人类奇怪，一边杀我们，一边又救我们。"`,
                choices: [
                    { text: '问它是否肯成全青丘', next: 'plea_for_qingqiu' },
                    { text: '离开', exit: true }
                ]
            },
            why_harsh: {
                text: `"苛刻？"守墓狐灵站起身，身形骤然变大，"三百年了，你们人类进这墓的，哪个不是来抢珠子的？我若不给代价，你们便动手。我若给代价，你们又说苛刻。"它重新蹲下，"想要珠子，就拿出诚意来。"`,
                choices: [
                    { text: '离开', exit: true }
                ]
            },
            back_hole_location: {
                text: `守墓狐灵有些意外："你知道那条路？"它点点头，"墓后第三块石碑下，藤蔓最密处。进去后一直向左，不要碰墙上的红漆。走到尽头，就是放珠子的石台。"它顿了顿，"但记住，珠子有灵，强取不得。"`,
                effects: { npcAffinity: 10, addItem: '守墓狐灵的提示' },
                choices: [
                    { text: '谢过它', exit: true }
                ]
            },
            plea_for_qingqiu: {
                text: `守墓狐灵沉默了很久。"成全？"它说，"我守墓三百年，早没了当年的情分。但……"它看着青丘，"她长得真像她母亲。"它叹了口气，"若你能让她心甘情愿分你一半内丹，再分我一半，我便把珠子给你们。这样你们三人各受损伤，却也各得其所。"`,
                effects: { npcAffinity: 5 },
                choices: [
                    { text: '离开', exit: true }
                ]
            }
        }
    }
};
