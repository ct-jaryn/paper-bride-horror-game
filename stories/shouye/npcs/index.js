/**
 * 《守夜》NPC 对话
 */

export const NPCs = {
    lin_shu: {
        name: '林叔',
        title: '老守夜人',
        dialogue: {
            start: {
                text: `电话响了三声才接通。林叔的声音带着睡意："周遥？这才几点。七号厅……那位醒了？"`,
                choices: [
                    { text: '她是谁？', next: 'lin_yunxiu' },
                    { text: '守夜有什么规矩？', next: 'lin_rules' },
                    { text: '我能换班吗？', next: 'lin_switch', effects: { npcAffinity: -10 } },
                    { text: '没事，挂了吧', exit: true }
                ]
            },
            lin_yunxiu: {
                text: `林叔沉默片刻："她叫云袖，民国二十三年春香班的旦角。死在青石镇戏台一场大火里。后来有人把她从河里捞出来，送到这儿。她啊，不是想害人，是想唱完那出《牡丹亭》。"`,
                choices: [
                    { text: '谁把她移到河里的？', next: 'lin_zhou_sheng' },
                    { text: '该怎么对她？', next: 'lin_rules' },
                    { text: '谢谢林叔', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            lin_rules: {
                text: `林叔压低声音："三条规矩记牢：子时后莫开大灯；进门先敲三下；她若开口求你，能答应就答应，答应不了也要敬一杯水酒。守夜人敬鬼，鬼亦敬人。"`,
                choices: [
                    { text: '记住了', exit: true, effects: { npcAffinity: 5, setFlag: 'linRulesLearned' } },
                    { text: '您以前守过她？', next: 'lin_past' }
                ]
            },
            lin_zhou_sheng: {
                text: `"听老辈说是青石镇周氏纸扎铺的少爷，叫周生。戏台要塌时把她推进河里，想以水克火。结果水锁了魂。你要是见着什么老镜子、银钗，那都是他的念想，别乱碰。"`,
                choices: [
                    { text: '原来如此', exit: true, effects: { npcAffinity: 5, setFlag: 'linHintedZhouSheng' } },
                    { text: '守夜规矩再说一遍', next: 'lin_rules' }
                ]
            },
            lin_past: {
                text: `林叔苦笑："年轻时我也怕她，被她吓掉半条命。后来才明白，她不是恶鬼，只是戏没散。你要是有心，替她搭个台，她能记你一辈子。"`,
                choices: [
                    { text: '我会试试', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            lin_switch: {
                text: `"换班？"林叔的声音冷下来，"守夜人哪有临阵脱逃的规矩。她既然醒了，就是冲着你来。你跑，她跟你一辈子。"`,
                choices: [
                    { text: '我懂了', next: 'lin_rules' },
                    { text: '还是算了，我再想想', exit: true }
                ]
            },
            // ===== 批次13：扩充林叔对话 =====
            lin_other_halls: {
                text: `"林叔，"你问，"馆里其他厅，有没有什么讲究？"

林叔想了想："一号厅的老张头，做了一辈子棺材，是个善人。你要是巡到那儿，多拜拜，他保你。

"三号厅那个孩子，车祸走的，怨气重。你要是听见他说话，别怕，问问他有什么放不下的，帮他说了，他就安生了。

"五号厅空着，可你别以为真空。那里头住着一个民国来的学徒，守着他师父的东西。他不害人，就是爱翻书。你要是听见翻书声，别理他，那是他在守他的本分。"

林叔顿了顿。

"这馆子里，每一个厅都有故事。守夜人，守的不只是尸，是这些故事。"`,
                choices: [
                    { text: '记住了', exit: true, effects: { npcAffinity: 15, setFlag: 'linToldOtherHalls', sanity: 5 } },
                    { text: '那地下室呢？', next: 'lin_basement' }
                ]
            },
            lin_basement: {
                text: `"地下室？"林叔的声音压低了，"你怎么知道地下室？"

"走廊尽头那扇铁门。"

林叔沉默了一会儿。

"那地方，我守了三十年都没敢下去。老馆长临终前交代过，地下室里存着老殡仪馆的旧物，还有……一些不该动的东西。

"他说，民国时候有个纸扎匠，把一堆东西存在那儿，说是'待有缘人'。可谁是那个有缘人，老馆长也不知道。他就把这事，一代代传下来了。

"你要是觉得，你就是那个有缘人……"林叔叹了口气，"那你就去吧。钥匙在值班室抽屉里。我给你留着呢。"`,
                choices: [
                    { text: '谢过林叔，去地下室', exit: true, effects: { npcAffinity: 20, setFlag: 'linGaveBasementKey', sanity: 5 } },
                    { text: '再问问', next: 'lin_other_halls' }
                ]
            },
            lin_retirement: {
                text: `"林叔，"你问，"您什么时候退休？"

林叔沉默了很久。

"快了。"他说，"我心脏不好，医生说我撑不了几年了。

"我本来想，再守几年，等云袖姑娘的事了了再说。可我这身子骨……"他苦笑，"怕是等不到了。"

"您放心。"你说，"云袖的事，我接手。"

电话那头，林叔长长地舒了一口气。

"好孩子。"他说，声音里带着一丝哽咽，"好孩子。我守了三十年，就盼着有人能跟我说这句话。

"周遥，你比我强。我老了，只能守。你能渡。云袖姑娘等了快一百年，等的就是你这样的人。"

林叔顿了顿。

"我退休后，这馆子就交给你了。守夜人手记我会留给你。还有一本老书，叫《阴阳簿》，是上一任记录者留下的。你也一并收着。"`,
                choices: [
                    { text: '郑重答应', exit: true, effects: { npcAffinity: 30, setFlag: 'linShuPassedDown', sanity: 15, addItem: '守夜人手记' } }
                ]
            },
            lin_dying_wish: {
                text: `"周遥，"林叔的声音忽然变得郑重，"我有件事，想托付你。"

"您说。"

"我退休后，要是哪天……我走了，你替我，把我葬在殡仪馆后山。陈家几代守夜人都葬在那儿，我想跟他们做伴。

"还有，我守了云袖姑娘三十年，没能帮她。我走的时候，你替我在她灵床前，点三炷香，告诉她，林叔对不起她，没能让她唱完那出戏。

"然后，你替我，把这事办了。让她散。让她，和周生在一起。"

电话那头传来林叔压抑的咳嗽。

"我这辈子，就这一个遗憾。你能替我了，我就能安心走了。"`,
                choices: [
                    { text: '我答应您，林叔', exit: true, effects: { npcAffinity: 40, setFlag: 'linDyingWish', sanity: 20, setFlag: 'yunxiuWishComplete' } }
                ]
            }
        }
    },
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
    },
    yunxiu: {
        name: '云袖',
        title: '春香班旦角',
        dialogue: {
            start: {
                text: `她的眼珠缓缓转向你，戏服上的水珠滴落在地。她没有张嘴，声音却直接落进你耳中："活人见了我，不是逃就是骂。你为何还站在这里？"`,
                choices: [
                    { text: '我知道你的名字', next: 'yunxiu_knows_name', condition: { flag: 'knowsName' } },
                    { text: '我想帮你', next: 'yunxiu_help' },
                    { text: '你为什么不肯闭眼？', next: 'yunxiu_awake' },
                    { text: '我这就走', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_knows_name: {
                text: `"云袖……"她轻轻重复，像是在品一壶隔夜的茶。"好久没人叫我的名字了。他们都叫我七号厅那位、那具女尸、那个唱戏的鬼。"`,
                choices: [
                    { text: '你想唱完哪一出？', next: 'yunxiu_final_play' },
                    { text: '谁把你移到河里的？', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '我会记住你', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            yunxiu_help: {
                text: `"帮我？"她低声笑了，笑声像碎玉落地。"帮我搭一座戏台，帮我唱完《牡丹亭》。或者……帮我找到那个把我放进河里的人，问问他，可曾后悔。"`,
                choices: [
                    { text: '我答应帮你搭戏台', exit: true, effects: { npcAffinity: 15, setFlag: 'promised', sanity: 5 } },
                    { text: '你是说周生？', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '我需要报酬', next: 'yunxiu_payment' }
                ]
            },
            yunxiu_awake: {
                text: `"我醒来，是因为有人记得我，也是因为有人忘了我。守夜的人换了一拨又一拨，只有你问我需要什么。"她顿了顿，"可你要小心，记得我的人，也会被我的执念缠住。"`,
                choices: [
                    { text: '我不怕', next: 'yunxiu_help' },
                    { text: '我会保持距离', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_final_play: {
                text: `"《牡丹亭·惊梦》。"她说，"我死在那一场火里，戏台塌了，鼓点停了。可我的魂还在唱。你若替我搭一座戏台，我便安心。"`,
                choices: [
                    { text: '我答应你', exit: true, effects: { npcAffinity: 20, setFlag: 'promised' } },
                    { text: '如果我也喜欢上你的戏呢？', next: 'yunxiu_duet', condition: { flag: 'yunxiuComforted' } }
                ]
            },
            yunxiu_duet: {
                text: `云袖愣了一下，随即露出一个极淡的笑："那我便唱给你一个人听。只是听完了，你可别像我，再也走不出那出戏。"`,
                choices: [
                    { text: '我甘愿做你的最后一名观众', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuLastAudience' } }
                ]
            },
            yunxiu_zhou_sheng: {
                text: `"周生……"她的声音忽然变得很轻，"他把我放进青石河，说水能灭火。他以为救了我，却锁住了我的魂。我不怪他。我只是想问他，那枚银钗，他可还记得。"`,
                choices: [
                    { text: '我会替你问他', exit: true, effects: { npcAffinity: 15, setFlag: 'yunxiuForgaveZhouSheng' } },
                    { text: '如果你见到他呢？', next: 'yunxiu_meet_zhou' }
                ]
            },
            yunxiu_meet_zhou: {
                text: `"若再见他，我便唱完《牡丹亭》，然后随他走。戏散了，魂也该散了。"她闭上眼，"可我不知道，他还在不在。"`,
                choices: [
                    { text: '我会帮你找他的痕迹', exit: true, effects: { npcAffinity: 10, setFlag: 'yunxiuSearchZhouSheng' } }
                ]
            },
            yunxiu_payment: {
                text: `"活人总是贪。"她的戏服无风自动，"你要什么？我的银钗？我的戏服？还是我的命？"`,
                choices: [
                    { text: '你的银钗', next: 'yunxiu_give_hairpin', condition: { lacksItem: '云袖的银钗' } },
                    { text: '我开玩笑的', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_give_hairpin: {
                text: `云袖取下鬓边的银钗，轻轻放在你掌心。钗身冰凉，刻着她的名字。"拿去吧。但你要记住，拿了戏子的钗，就要听戏子的话。"`,
                choices: [
                    { text: '收下', exit: true, effects: { addItem: '云袖的银钗', npcAffinity: -5, yin: 5 } }
                ]
            },
            // ===== 批次13：扩充云袖对话 =====
            yunxiu_life_question: {
                text: `"守夜人，"云袖忽然问，"活着的滋味，是什么样的？"

你愣了一下。

"我死得太早了，"她低声说，"早到我都快忘了，活着是什么感觉。是热的吗？是甜的吗？"

你想了想："活着，什么滋味都有。有苦有甜，有冷有热。可最珍贵的，是你还能选——选明天做什么，选爱谁，选走哪条路。"

云袖听完，沉默了一会儿。

"那我，再也没得选了。"她说，"我从火里落进河里的那一刻，就再也没得选了。"

"可你现在，还在选。"你说，"你选了等周生。你选了不害人。你选了，跟我说这些话。"

云袖抬起头，看着你。

"你说得对。"她露出一个极淡的笑，"原来，死了也还能选。谢谢你，守夜人。"`,
                choices: [
                    { text: '继续陪她聊聊', next: 'yunxiu_final_play' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 15, sanity: 10 } }
                ]
            },
            yunxiu_other_members: {
                text: `"你见过班子里其他人吗？"你问。

云袖的眼神黯了黯。

"秦叔、赵哥、孙师傅……"她一一念着名字，"他们和我一起，死在那场火里。可我不知道他们去了哪里。我醒的时候，七号厅里只有我一个。"

"他们还在青石镇的废墟。"你说。

云袖的身体颤了一下。

"还在？"她急切地问，"他们……还好吗？"

"不太好。"你如实说，"他们和你一样，困在最后那一刻，反复重演。秦叔还在问救出来的孩子活着没。赵哥的脸卸不下来。孙师傅的二胡弦断了。"

云袖的眼泪涌了出来。

"我没想到，他们也在受苦。"她哽咽，"我以为，只有我一个。"

"我帮你去超度他们。"你说。

"谢谢你。"云袖擦了擦泪，"告诉他们……告诉他们，云袖想他们了。"`,
                choices: [
                    { text: '答应她，去废墟', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuAskedAboutMembers', sanity: 5 } },
                    { text: '问她和周生的事', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } }
                ]
            },
            yunxiu_memory_fire: {
                text: `"你还记得那场火吗？"你轻声问。

云袖闭上了眼。

"记得。"她说，"每一个细节，都记得。

"我记得火从后梁窜出来。我记得台下的人尖叫着跑。我记得秦叔冲下台，去抱那个孩子。我记得孙师傅被人群撞倒，再没起来。

"我记得赵哥站在台上，想挡住塌下来的横梁。他那么壮，可横梁太重了。

"我记得……我记得我没跑。"

她睁开眼，眼里有一种困惑。

"我不知道我为什么没跑。也许是吓傻了。也许是……入戏太深。我把自己当成了杜丽娘，觉得杜丽娘就该死在戏台上。"

"周生冲上来救你。"你说。

"是。"云袖的泪又涌出来，"他剪了我的红绳。他把我推进暗门。他说'云袖，等我'。

"然后我就，落进了水里。我挣扎，我喊他的名字，可河水灌进我的喉咙。我最后看见的，是火光映红了的天，和戏台塌下去的那一瞬。"

她闭上眼，声音轻得像风：

"然后，就是漫长的、水底的黑暗。"`,
                choices: [
                    { text: '告诉她周生的真相', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '什么都不说，只是握住她的手', exit: true, effects: { npcAffinity: 20, sanity: 10, setFlag: 'yunxiuComforted' } }
                ]
            },
            yunxiu_dream: {
                text: `"云袖，"你问，"你这些年，做过梦吗？"

她愣了一下，然后苦笑。

"鬼怎么会做梦呢？我们就是别人的梦。"

她顿了顿。

"可我总在重复一个画面——周生冲上台，剪断我的红绳。我落进水里。然后，我看见他在火里，朝我伸出手。

"每一次，我都想握住他的手。每一次，都握不住。然后我就醒——'醒'，也就是重新浮在七号厅的灵床上。"

"那不是梦。"你说，"那是记忆。"

"可如果是记忆，"云袖低下头，"为什么每次我都握不住他的手？我明明记得，他朝我伸了手。"

你沉默了一会儿。

"也许，"你轻声说，"是因为，你心里一直觉得他抛下了你。所以记忆里，你也握不住他。"

云袖抬起头，看着你，眼里的雾，一点一点散了。`,
                choices: [
                    { text: '告诉她周生一直在等她', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '继续陪她', exit: true, effects: { npcAffinity: 20, sanity: 5 } }
                ]
            },
            yunxiu_farewell_prep: {
                text: `"云袖，"你问，"如果有一天，你真的能走了，你想怎么走？"

她想了很久。

"我想穿着戏服走。"她说，"那是我这辈子最体面的衣服。

"我想在戏台上唱完最后一折，然后，福一福，谢幕。

"我想……我想周生在台下看着我。就像当年，他每场戏都坐在第一排，看我唱。"

她转向你，眼神里有一种近乎活人的光彩。

"你能帮我，实现这个吗？"

"能。"你说。

"那，"她笑了，"我现在就开始练嗓子。这一折《惊梦》，我等了一百年，要唱得最好。"`,
                choices: [
                    { text: '答应她，为她搭起戏台', exit: true, effects: { npcAffinity: 30, setFlag: 'promised', setFlag: 'yunxiuWishComplete', sanity: 10 } }
                ]
            },
            yunxiu_question_greed: {
                text: `"守夜人，"云袖忽然问，"人为什么会害人？"

"什么意思？"

"那场火。"她说，"我后来知道了，不是意外。是有人，为了地皮，烧了戏台。"

她低下头。

"五条命，就为了一块地。我到今天都想不通。地，能比命贵吗？"

你想了想："对有些人来说，能。"

"那他们，"云袖的声音带着一丝冷意，"晚上睡得着吗？"

"睡得着。"你说，"因为那种人，没有心。"

云袖沉默了很久。

"我恨过他们。"她终于说，"恨了将近一百年。可恨太累了。我决定不恨了。我只希望，以后的人，能记住这件事。记住贪婪能烧死五条命。"

"我会记住的。"你说，"我还会写下来。"

"那就好。"云袖点点头，"有你在，我放心了。"`,
                choices: [
                    { text: '答应她把真相写进书里', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuKnowsArson', setFlag: 'yunxiuRemembered', sanity: 10 } }
                ]
            }
        }
    },

    // ===== 批次6：新增 NPC =====
    old_fan: {
        name: '何伯',
        title: '青石镇老票友',
        dialogue: {
            start: {
                text: `你在青石镇茶馆里找到何伯。他八十多岁了，耳朵背，但一听见"春香班"三个字，眼睛就亮了。

"春香班！哎呀，那是多少年前的事了。"何伯拍着大腿，"我年轻时候，追着春香班跑了半个县，就为了听云袖姑娘一出《牡丹亭》。"`,
                choices: [
                    { text: '你听过云袖唱戏？', next: 'fan_yunxiu_voice' },
                    { text: '那场大火你知道吗？', next: 'fan_fire' },
                    { text: '周生是什么人？', next: 'fan_zhousheng' },
                    { text: '告辞', exit: true }
                ]
            },
            fan_yunxiu_voice: {
                text: `"听过！怎么没听过！"何伯闭上眼，像是回到了几十年前，"云袖姑娘的嗓子，那是老天爷赏饭吃。她一开腔，满园子鸦雀无声，连树上的鸟都不叫了。

"我记得她唱《惊梦》，唱到'良辰美景奈何天'，我在台下，眼泪就下来了。那时候我不懂什么叫好戏，可我就是想哭。后来我才明白，那是唱到了人心里去。"`,
                choices: [
                    { text: '除了你，还有人记得她吗？', next: 'fan_others_remember' },
                    { text: '那场大火怎么回事？', next: 'fan_fire' },
                    { text: '谢谢何伯', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            fan_fire: {
                text: `何伯的脸色暗下来。

"那场火啊……是我这辈子见过最惨的事。戏台后梁断了，火一下子就烧起来。满园子的人疯了一样往外跑。

"可云袖姑娘没跑。她站在台上，还在唱。大家都说她疯了，可我那时候就坐在第一排，我看清了——她不是疯了，她是入戏了。她把自己当成了杜丽娘，死也要死在戏台上。"

何伯擦了擦眼角。

"后来有个年轻人冲上去救她。听说是纸扎铺的周生。再后来，戏台塌了，火光里什么都看不见了。云袖姑娘和周生，都没出来。"`,
                choices: [
                    { text: '周生后来呢？', next: 'fan_zhousheng' },
                    { text: '你会唱《牡丹亭》吗？', next: 'fan_can_sing' },
                    { text: '谢谢何伯告诉我这些', exit: true, effects: { npcAffinity: 10, setFlag: 'fanToldFire', sanity: 5 } }
                ]
            },
            fan_zhousheng: {
                text: `"周生啊……"何伯想了想，"是个老实人。话不多，手特别巧。他扎的纸花，全镇第一。

"他对云袖姑娘好，全镇都知道。每场戏，他都送一篮子纸花去后台。云袖姑娘上台，鬓边别的花，十有八九是他扎的。

"大伙儿都说他们是天生一对，就等周生攒够聘礼提亲了。谁能想到……"

何伯叹了口气。

"要是没那场火，他们早成亲了，没准儿现在孙子都有了。哪至于……一个泡在河里，一个不知所踪。"`,
                choices: [
                    { text: '周生其实投河了', next: 'fan_zhousheng_river', condition: { flag: 'foundZhouShengDiary' } },
                    { text: '那场大火的详情？', next: 'fan_fire' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            fan_zhousheng_river: {
                text: `你把周生投河的事告诉何伯。

老人家的茶杯停在半空，手抖得厉害。

"他……他也走了？"何伯的声音哽咽，"为了云袖姑娘，他也……"

他沉默了很久。

"那他们，总算是在一起了。"他最后说，"水里也好，土里也好，总算是在一起了。"

何伯颤巍巍地从怀里掏出一张发黄的戏票，递给你。

"这是云袖姑娘最后那场戏的票。我留了一辈子。你拿去，替我烧给她。告诉她，何伯这辈子，没忘了她的戏。"`,
                choices: [
                    { text: '收下戏票', exit: true, effects: { addItem: '云袖最后的戏票', npcAffinity: 20, sanity: 10, setFlag: 'fanGaveTicket' } }
                ]
            },
            fan_others_remember: {
                text: `"记得她的人？"何伯想了想，"老一辈的，走得差不多了。年轻人谁还知道春香班？

"不过，你要是真想找人，去镇南养老院找孙家奶奶。她爷爷是春香班的班主，家里应该还留着些旧物件。

"再就是省城有个戏曲研究所，前些年来人问过云袖姑娘的事，说是要写进什么书里。你若有心，可以去那边问问。"`,
                choices: [
                    { text: '记下了，谢谢何伯', exit: true, effects: { npcAffinity: 10, setFlag: 'fanHintedDescendant' } }
                ]
            },
            fan_can_sing: {
                text: `何伯愣了一下，然后清了清嗓子。

"我唱得不好，就记得几句。"

他闭着眼，用沙哑的、跑调的嗓音，轻轻唱了起来：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

茶馆里的人都转过头来看。何伯唱得不好，但每一个字都带着一种说不出的、苍凉的深情。

唱完，他睁开眼，笑了。

"云袖姑娘唱得比我好一万倍。可我这一辈子，也没忘过这一句。"`,
                choices: [
                    { text: '何伯，谢谢你', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'fanSangForYunxiu' } }
                ]
            }
        }
    },

    apprentice_ghost: {
        name: '纸扎学徒',
        title: '五号厅守册人',
        dialogue: {
            start: {
                text: `你对着五号厅灵床底下轻声说："我能跟你聊聊吗？"

翻书声停了。过了一会儿，一个怯生生的年轻声音响起：

"您……您又来了？我以为您只是路过。"`,
                choices: [
                    { text: '你叫什么名字？', next: 'app_name' },
                    { text: '你师父是个什么样的人？', next: 'app_master' },
                    { text: '你知道七号厅的云袖吗？', next: 'app_yunxiu' },
                    { text: '你该走了', next: 'app_leave', condition: { flag: 'yunxiuKnowsTruth' } },
                    { text: '告辞', exit: true }
                ]
            },
            app_name: {
                text: `"我？"声音沉默了一会儿，"我叫……我想不起来了。师父叫我'小扎'，因为我年纪小，专门帮他扎纸花的花瓣。

"我大概是十二三岁来的铺子。家里穷，爹妈把我送给师父学手艺。师父人好，不打我，还管饭。"

"后来师父走了，铺子就剩我一个人。殡仪馆的老馆长可怜我，让我住这儿，帮师父守着那些册子。"`,
                choices: [
                    { text: '你师父是什么样的人？', next: 'app_master' },
                    { text: '你知道云袖吗？', next: 'app_yunxiu' },
                    { text: '我帮你记起名字', exit: true, effects: { npcAffinity: 10 } }
                ]
            },
            app_master: {
                text: `"师父啊……"学徒的声音温柔起来，"师父是全青石镇手艺最好的纸扎匠。他扎的纸人，眉眼跟活的一样。

"可师父心里只有一个人。就是云袖姑娘。师父给她扎花，扎了好多好多年。

"云袖姑娘出事那天，师父疯了一样冲进火里。后来云袖姑娘不见了，师父就变了个人。他白天扎纸，夜里去河边，一站就是一宿。

"有一天，师父把我叫到跟前，说：'小扎，铺子交给你了。云袖姑娘的东西都在殡仪馆地下室，你帮我守着。我去找她了。'

"然后师父就再也没回来。"`,
                choices: [
                    { text: '他去找云袖了，在青石河里', next: 'app_master_river', condition: { flag: 'foundZhouShengDiary' } },
                    { text: '你知道云袖吗？', next: 'app_yunxiu' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            app_master_river: {
                text: `"在河里……"学徒的声音颤抖，"师父他……跳进了河里？"

床底下沉默了很久。

"那他现在，和师娘在一起了吗？"学徒小心翼翼地问。

"师娘知道了真相。"你说，"她不怨师父了。她想去找他。"

"那……"学徒的声音带上了哭腔，"那我是不是也可以走了？我守了这么多年，就是想等师娘不怨师父的那一天……"`,
                choices: [
                    { text: '你可以走了，我带你去见师娘', next: 'app_leave', effects: { npcAffinity: 15 } },
                    { text: '再等等', exit: true }
                ]
            },
            app_yunxiu: {
                text: `"师娘？"学徒的声音里带着敬畏，"我从来没见过师娘。师父不让我见。

"可我知道师父给她扎了好多东西。有一口棺材——不对，是一座戏台。师父说那不是棺材，是师娘的戏台。

"还有头面、曲谱、铜镜……师父都存在殡仪馆的地下室了。他说，等有缘人来，就把这些东西都给师娘送去。"

"我一直在等那个有缘人。"学徒轻声说，"等了好多好多年。也许，就是您？"`,
                choices: [
                    { text: '我就是那个有缘人', exit: true, effects: { npcAffinity: 20, setFlag: 'apprenticeTrust', sanity: 5 } },
                    { text: '我只是路过', exit: true }
                ]
            },
            app_leave: {
                text: `学徒沉默了很久。

"好。"他终于说，声音轻得像风，"那……您替我跟师娘说一声。师父没有负她。师父这辈子，只喜欢过她一个人。"

"还有，我跟师父说一声。师父，小扎守完了。可以歇了。"

床底下，那摞登记册最后一次滑出来，整整齐齐停在你脚边。

然后，翻书声彻底消失了。

五号厅恢复了真正的空寂——是那种亡者已得安息的、干净的空寂。`,
                choices: [
                    { text: '默哀片刻', exit: true, effects: { npcAffinity: 30, sanity: 15, yin: -15, setFlag: 'apprenticeReleased', clearFlag: 'apprenticeWantsToLeave' } }
                ]
            }
        }
    },

    chenlei_ghost: {
        name: '陈磊',
        title: '三号厅 · 车祸少年',
        dialogue: {
            start: {
                text: `你站在三号厅的白布前，轻声说："陈磊，能听见我吗？"

白布下沉默了一会儿。然后，一个年轻的、带着水泡声的声音响起：

"叔叔……您能听见我？白天我妈来的时候，她听不见。只有您能听见。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '你女朋友的事……', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你今年多大？', next: 'cl_age' },
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            cl_worry: {
                text: `"我妈。"少年的声音哽咽，"我爸走得早，就剩我妈一个人。我没了，她怎么活？

"还有……还有小月。那天是我送她回家。桥上那段路没灯，是我骑太快了。我看见护栏的时候，已经刹不住了。

"小月飞出去的时候，我还伸手去抓她。可我抓了个空。然后我也撞上去了。"`,
                choices: [
                    { text: '小月找到了，在第三个桥洞', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你妈妈会好起来的', next: 'cl_mother' },
                    { text: '不是你的错', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            cl_girlfriend: {
                text: `"找到了？"白布下的声音一下子亮了起来，"她在哪？她还好吗？"

"在青石桥第三个桥洞下面。"你说，"我们把她捞上来了。她妈妈也知道了。"

白布下传来压抑的抽泣。

"那就好……那就好。我一直不敢跟人说她在哪。我怕小月她妈恨我。是我害了小月。"

"不是你害的。"你说，"是个意外。"

"可如果那天我骑慢一点……"`,
                choices: [
                    { text: '小月不会怪你的', next: 'cl_xiaoyue_forgive' },
                    { text: '你该走了，别让小月等太久', exit: true, effects: { npcAffinity: 20, sanity: 10, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_xiaoyue_forgive: {
                text: `"小月……不怪我？"少年的声音颤抖。

"她手腕上那条手绳，"你说，"坠子是个小摩托。她每天都戴着。你觉得，她会怪一个她那么在乎的人吗？"

白布下安静了很久。

"谢谢你，叔叔。"少年的声音变得清澈，不再有水泡声，"帮我跟我妈说一声……对不起。下辈子，我还做她儿子，再也不骑快车了。"

"还有小月……如果有下辈子，我还送她回家。这次，我一定骑慢一点。"`,
                choices: [
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 30, sanity: 20, yin: -20, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_mother: {
                text: `"我妈……"少年哽咽，"她白天来哭了好久。我听见了，可我动不了，也说不出话。

"叔叔，您要是见到我妈，跟她说……别太难过。她还有我姐。我姐会照顾她的。

"还有我屋里那个摩托车模型，是我自己拼的。让她别扔了，送给我表弟吧。他一直想要。"`,
                choices: [
                    { text: '我会转告的', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'chenleiMotherMessage' } }
                ]
            },
            cl_age: {
                text: `"十九。"少年说，"刚考上大专，汽修专业。我妈说，等我毕业了，就能进我表舅的修车铺，自己挣钱了。

"我上个月刚买了那辆二手摩托，是用攒的零花钱买的。我妈骂我乱花钱，说太危险。

"她说得对。太危险了。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '安息吧', exit: true, effects: { npcAffinity: 5 } }
                ]
            }
        }
    }
};
