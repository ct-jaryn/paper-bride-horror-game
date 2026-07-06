/**
 * 《守夜》场景模块：patrol
 */

export const scenes = {
    patrol_corridor: {
        title: '巡厅',
        text: `你决定先把整个殡仪馆走一遍。守夜人的规矩里有一条：子时之后，至少要巡一次各厅，确认没有异样。

走廊的声控灯坏了两盏，只剩尽头那盏还在惨白地亮着。你的脚步声在瓷砖地上回荡，每一步都像是踩在什么东西的脊背上。

一号厅的门虚掩着，里面是老张头——三天前心梗走的，七十三岁，喜丧。三号厅的门紧闭，里面是那个骑摩托撞上桥墩的少年，才十九岁。五号厅空着，可你路过时，分明听见里面有翻动纸张的声音。

再往前，是七号厅。门缝下渗着一缕若有若无的桂花香。

走廊尽头，通往地下室的铁门上，挂着一把落满灰的锁。你从没见人下去过。

[faded]林叔说过，那下面，是老殡仪馆留下的东西。[/faded]`,
        effects: { sanity: -5, yin: 5 },
        choices: [
            { text: '进一号厅看看老张头', next: 'hall_one_inspection' },
            { text: '进三号厅看那个少年', next: 'hall_three_inspection' },
            { text: '推开五号厅的门', next: 'hall_five_inspection' },
            { text: '直接回七号厅', next: 'enter_with_flashlight' }
        ]
    },

    // 一号厅 —— 喜丧老人的秘密,

    hall_one_inspection: {
        title: '一号厅 · 老张头',
        text: `一号厅的灯是暖黄色的，老张头躺在灵床上，盖着绣"寿"字的白绸。他的遗容化得很好，嘴角甚至带着一丝笑意，像是做了一个美梦。

老张头是镇上的老木匠，做了一辈子棺材。镇上有一半的老人，最后都是躺着他做的棺材走的。听说他临终前还在念叨："我的棺材还没给自己刨好呢。"

你在灵床前站定，按规矩鞠了三个躬。

就在你直起身的时候，你注意到老张头的右手——入殓时是交叠放在胸前的，现在却微微攥着拳，像是握着什么东西。

你犹豫了一下。按规矩，亡者的东西不能乱动。可那攥紧的手指缝里，露出半截泛黄的纸边。`,
        effects: { sanity: -5 },
        choices: [
            {
                text: '轻轻掰开他的手，看看握着什么',
                next: 'hall_one_paper',
                effects: { yin: 5 }
            },
            { text: '不碰，恭敬退出', next: 'hall_three_inspection' },
            {
                text: '你想起老木匠做的那些棺材，低声问他一句',
                next: 'hall_one_whisper',
                condition: { flag: 'knowsName' },
                hidden: true
            }
        ]
    },

    hall_one_paper: {
        title: '掌中纸',
        text: `你屏住呼吸，轻轻掰开老张头僵硬的手指。

指尖触到那截纸的瞬间，一股冰凉顺着你的胳膊窜上来。老张头的笑容似乎更深了一些。

你抽出那张纸。是一张被汗浸透又干透、反复折叠的旧信纸，上面的字迹歪歪扭扭，像是一个不怎么识字的人一笔一笔刻上去的：

[faded]"我做了四十年棺材。最后这口，是给七号厅那位姑娘留的。她不肯走，是因为没有一口像样的棺材装她的戏。棺材铺在地下室东墙根下，盖板第三块。切记，那棺材只能给云袖，旁人躺了，要出大事。"[/faded]

你猛地抬头。老张头的眼睛不知什么时候睁开了一条缝，浑浊的瞳仁正看着你。

他的嘴唇动了动，没有发出声音，但你读懂了口型：

[whisper]"地下……室……"[/whisper]

然后，他的眼睛又慢慢合上了。`,
        effects: { sanity: -15, yin: 10, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先收好纸条，继续巡厅', next: 'hall_three_inspection' },
            { text: '回七号厅告诉云袖', next: 'enter_with_flashlight', condition: { flag: 'knowsName' } }
        ]
    },

    hall_one_whisper: {
        title: '问棺',
        text: `你俯下身，凑到老张头耳边，轻声问："老张头，云袖姑娘的戏台，是不是得有口好棺材才唱得完？"

老张头的身体纹丝不动。但他的喉结——那个早已不会动的东西——缓缓地、艰难地上下滚了一下。

像是在点头。

然后，他的右手无力地垂落床沿。掌心里，一张纸条无声地飘落到地上。

你捡起来。上面写着地下室的位置，和一行小字：

[faded]"那口棺材，是我这辈子做得最好的一口。柚木，朱漆，里头衬了戏台幕布。给她，她就有了戏台。"[/faded]

你把纸条收好，再看老张头。他的笑容不见了，取而代之的是一种了却心愿的安详。

[whisper]做了一辈子棺材的人，最后的心愿，是替一个素不相识的戏子，做最后一口棺材。[/whisper]`,
        effects: { sanity: 5, yin: -5, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先去三号厅看看', next: 'hall_three_inspection' }
        ]
    },

    // 三号厅 —— 车祸少年的怨气,

    hall_three_inspection: {
        title: '三号厅 · 少年',
        text: `三号厅的门推开时，一股血腥味扑面而来。那个十九岁的少年躺在灵床上，全身盖着白布，但白布的形状凹凸不平——他撞得太碎了，入殓师用了很多石膏才勉强拼出一个人形。

他叫陈磊，镇东头修车铺老板的儿子。上个月骑摩托送女朋友回家，在青石桥上撞了护栏。女朋友飞出去落进河里，到现在都没找到。

少年的母亲白天来守过灵，哭得撕心裂肺。她走的时候，在灵床前放了一瓶他生前最爱喝的橘子汽水。

现在，那瓶汽水倒在地上，橘色的液体正沿着瓷砖缝，缓缓朝白布下的人形流去。

你走近时，白布下传来一个含混的声音，像是有水灌进了喉咙：

[whisper]"她……还在水里……"[/whisper]

[whisper]"我没救上来她……"[/whisper]`,
        effects: { sanity: -10, yin: 15 },
        choices: [
            {
                text: '扶起汽水瓶，放回灵床前',
                next: 'hall_three_soda',
                effects: { sanity: 5 }
            },
            { text: '问他女朋友在哪里', next: 'hall_three_girl' },
            { text: '不掺和，赶紧离开', next: 'hall_five_inspection', effects: { yin: 10 } }
        ]
    },

    hall_three_soda: {
        title: '橘子汽水',
        text: `你蹲下身，捡起那瓶滚落的橘子汽水。瓶身还是温的，像是有人刚刚握过。

你把它轻轻放回灵床前的供桌上，又把歪倒的香炉扶正。

"陈磊，"你轻声说，"汽水我帮你放好了。你女朋友的事……你尽力了。"

白布下的躁动渐渐平息了。那个含混的声音消失了。

你刚要转身，听见"啵"的一声轻响——汽水瓶的盖子，自己弹开了。

一股橘子汽水的甜香飘出来，混着血腥味，有一种说不出的、少年人的味道。

白布下，少年的右手——那只据说是完好的手——缓缓抬起，又缓缓落下，像是在跟你挥手。

[faded]十九岁。他还想喝一口橘子汽水，还想送女朋友回家。[/faded]`,
        effects: { sanity: 10, yin: -10, setFlag: 'comfortedChenlei' },
        choices: [
            { text: '答应帮他找女朋友的下落', next: 'river_search', effects: { setFlag: 'promisedChenlei' } },
            { text: '去五号厅看看', next: 'hall_five_inspection' },
            { text: '回七号厅继续守云袖', next: 'enter_with_flashlight' }
        ]
    },

    hall_three_girl: {
        title: '水中人',
        text: `"她在哪里？" 你压低声音问。

白布剧烈地起伏了一下，像是在努力翻身。

少年的声音从白布下渗出来，每一个字都带着水泡破裂的声响：

[whisper]"青石桥……第三个桥洞下面……她的脚卡在石头缝里……我下去找她，可水太急了……"[/whisper]

[whisper]"我一直没敢跟人说……我怕她妈妈恨我……"[/whisper]

白布下传来压抑的抽泣。一个撞碎了全身的少年，连哭都哭不出完整的调子。

你心里一沉。如果他说的是真的，那个女孩的尸体还在青石桥下，卡在第三个桥洞里。

而青石桥下面那条河——正是云袖被捞上来的青石河。

[red]同一条河，吞了两个年轻人。[/red]`,
        effects: { sanity: -15, yin: 10, setFlag: 'knowsGirlLocation' },
        choices: [
            { text: '天亮后去青石桥找那个女孩', next: 'river_search', effects: { setFlag: 'promisedChenlei' } },
            { text: '这事你管不了，去五号厅', next: 'hall_five_inspection', effects: { yin: 5 } }
        ]
    },

    hall_five_inspection: {
        title: '五号厅 · 空厅',
        text: `五号厅是空的，已经空了半年。

半年前，这里躺着一具无名男尸，没人来认领。按规定存放期满后，他被送进了火化炉。从那以后，五号厅就一直空着，没人愿意往里放新的遗体。

"邪门。"林叔是这么说的。

你推开门。厅里干干净净，灵床上连白布都没铺。声控灯"啪"地亮了，惨白的光照着空荡荡的房间。

可你分明听见——

[whisper]沙。沙。沙。[/whisper]

像有人在翻一本很厚的书。

声音是从灵床下面传来的。

你绕到灵床侧面，弯下腰，往床底看去。

床底下，整整齐齐地码着一摞纸。不是普通的纸——是殡仪馆的旧登记册，民国时期的，封皮都烂了。

最上面那本，翻开着，停在某一页。那一页上，用毛笔写着一行字：

[faded]"无名男，丁丑年腊月，疑似周氏纸扎铺学徒，自缢于铺中。无人认领，存五号厅。"[/faded]

你的手开始发抖。丁丑年，是民国二十六年。周氏纸扎铺——云袖的周生，就是开纸扎铺的。`,
        effects: { sanity: -15, yin: 15, setFlag: 'foundApprenticeRecord' },
        choices: [
            { text: '翻看更多登记册', next: 'hall_five_archives' },
            { text: '把登记册带走，回头细看', next: 'basement_descent', effects: { addItem: '旧登记册' } },
            { text: '太邪门了，赶紧出去', next: 'patrol_corridor', effects: { sanity: -5 } }
        ]
    },

    hall_five_archives: {
        title: '尘封的册子',
        text: `你跪在地上，一本一本地翻那些旧登记册。

纸张脆得像枯叶，一碰就掉渣。但在那些褪色的字迹里，你拼凑出了一条让人心惊的线索：

[faded]"民国二十三年，秋。无名女，戏服，河中捞出。存七号厅。后由周氏纸扎铺周生认领，称是其未婚妻云袖。因尸身不腐，无法火化，暂存。"[/faded]

[faded]"民国二十三年，冬。周生来馆，留下铜镜、妆奁、替身纸人，托殡仪馆代为保管。言明待有缘人至，可还于云袖。"[/faded]

[faded]"民国二十四年，春。周生失踪。据传投青石河自尽，尸身未寻获。"[/faded]

[faded]"民国二十六年，腊月。周氏纸扎铺学徒自缢。临终遗言：'师父临走前说，他去找师娘了。'"[/faded]

你合上册子，手心全是冷汗。

原来周生没有抛下云袖。他把她托付给了殡仪馆，然后……自己也走进了那条河。

[red]同一条青石河，先后吞没了云袖、周生、还有那个学徒。[/red]

而那个学徒的魂魄，至今还留在五号厅空荡荡的灵床下，守着这些无人翻看的册子。`,
        effects: { sanity: -20, yin: 10, setFlag: 'knowsFullZhouShengStory', setFlag: 'knowsApprentice' },
        choices: [
            { text: '跟床下的"人"说句话', next: 'hall_five_apprentice' },
            { text: '带上册子，去地下室', next: 'basement_descent', effects: { addItem: '旧登记册' } },
            { text: '回七号厅找云袖', next: 'enter_with_flashlight', condition: { flag: 'knowsName' } }
        ]
    },

    hall_five_apprentice: {
        title: '床下人',
        text: `你对着灵床底下，轻声说："我知道你在。你是周生的学徒吧？"

翻书声停了。

沉默了很久，一个年轻的、怯生生的声音从床底响起：

"您……您能听见我？"

"能。" 你说，"你在这里守了多久了？"

"我记不清了。师父走后，我就把铺子关了。可我舍不得那些册子……殡仪馆的老馆长答应让我住在这儿，帮师父守着七号厅那位师娘的物件。后来老馆长走了，新来的人不知道我，我就一直待在床底下。"

"你为什么不走？"

"师娘还没散呢。" 学徒的声音低了下去，"师父临走说，他去找师娘了。可师娘还在七号厅，那师父去哪儿找她了？我想不通，就不敢走。"

你心里一酸。一个民国时期的学徒，在殡仪馆的空厅床底下，守了快一百年，只为想通一个问题。

"你师父，"你轻声说，"去找云袖了。他走进了青石河。他们现在，应该在一起了。"

床底下沉默了很久。

然后，那摞登记册自己滑了出来，整整齐齐地推到你脚边。

"那……我可以走了吧？" 学徒的声音带着一丝释然的颤抖，"替我跟师娘说一声……师父没有负她。"`,
        effects: { sanity: 10, yin: -15, setFlag: 'apprenticeReleased', addItem: '旧登记册' },
        choices: [
            { text: '答应他，目送他离去', next: 'basement_descent', effects: { sanity: 5 } },
            { text: '回七号厅转告云袖', next: 'yunxiu_apprentice_message', condition: { flag: 'knowsName' } }
        ]
    }
};
