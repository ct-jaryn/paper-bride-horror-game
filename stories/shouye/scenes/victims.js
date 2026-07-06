/**
 * 《守夜》场景模块：victims
 */

export const scenes = {
    fire_victim_list: {
        title: '死难名册',
        text: `你继续翻地下室铁皮柜里那摞旧登记册，在一本民国二十三年的殡葬记录里，找到了那场火灾的完整死难名单：

[faded]"民国二十三年九月初九，青石戏台坍塌起火。死难者共五人：

一、春香班旦角云袖，女，十七岁，尸体失踪（实为入河）；

二、春香班老生秦鸣远，男，四十二岁，火场中为救观众重返，殉职；

三、春香班花脸赵铁柱，男，三十五岁，横梁砸中头部，当场身亡；

四、春香班琴师孙瞎子，男，六十岁，被踩踏致死；

五、青石镇纸扎铺周生，男，二十岁，重伤，下落不明（实为投河）。"[/faded]

你手指一顿。除了云袖和周生，还有三个人死在那场火里。老生、花脸、琴师。

[faded]那些人，他们的魂魄，又去了哪里？[/faded]

你想起一件事——青石镇老戏台的废墟，至今夜里还能听见唱戏声。如果云袖的执念把她困在了殡仪馆，那另外三个人的执念，会不会还困在那座烧塌的戏台下面？`,
        effects: { sanity: -15, yin: 15, setFlag: 'knowsOtherVictims' },
        choices: [
            { text: '去青石戏台废墟找他们的踪迹', next: 'old_stage_victims', effects: { time: 60 } },
            { text: '先查另外三个人的身份', next: 'fire_victim_detail' }
        ]
    },

    fire_victim_detail: {
        title: '三人记',
        text: `你继续翻阅档案，拼凑出另外三位死难者的生平。

[faded]秦鸣远，老生。青石镇人氏，唱戏二十余年，是春香班的台柱子之一。家中有一妻一女。火灾当夜，他本已逃出，却看见台下一个孩子被困，返身去救。孩子救出来了，他被火封在台上了。[/faded]

[faded]赵铁柱，花脸。外乡人，体壮如牛，演关公、钟馓最拿手。据说火灾前夜他做了个梦，梦见自己卸了花脸妆，露出一张苍白的脸。第二天他就死在了横梁下。镇上人说他"被梦里那张脸叫走了"。[/faded]

[faded]孙瞎子，琴师。眼盲，但耳力极好，能听出云袖唱腔里最细微的颤音。火灾时人群奔逃，他被撞倒，再没起来。死时怀里还紧紧抱着那把跟了他一辈子的二胡。[/faded]

三个人，三种死法。一个为救人，一个被梦兆，一个死于踩踏。

但他们的共同点是：都死在了戏台上，都没能唱完最后一出。

[whisper]和云袖一样，他们的戏，也散了场。[/whisper]`,
        effects: { sanity: -10, yin: 10, setFlag: 'knowsVictimDetails' },
        choices: [
            { text: '去青石戏台废墟超度他们', next: 'old_stage_victims', effects: { time: 60 } },
            { text: '去找他们的后人', next: 'victim_descendants' }
        ]
    },

    old_stage_victims: {
        title: '废墟三魂',
        text: `你请了假，再次赶到青石镇。

老戏台的废墟还在。烧焦的木桩、塌了一半的台基、地上爬满了荒草。镇上人夜里不敢靠近，说这儿"邪"。

你站在废墟中央，闭上眼。

风过荒草的声音里，你听见了——

不是云袖的唱腔，而是三个男人的声音。

一个苍凉的、唱老生的男声：[whisper]"救……出来了吗……那个孩子……"[/whisper]

一个浑厚的、唱花脸的男声：[whisper]"我的脸……卸不下来了……"[/whisper]

一个沙哑的、哼琴师的调子：[whisper]"我的二胡……弦断了……"[/whisper]

三个声音重叠在一起，像一出永远唱不完的群戏。

你睁开眼。废墟上空无一人，但你能感觉到，他们就在这里，困了近百年，反复重演着火起的那一刻。

[faded]他们和云袖一样，需要有人帮他们散场。[/faded]`,
        effects: { time: 60, sanity: -15, yin: 20, visual: 'flicker' },
        choices: [
            { text: '告诉秦鸣远，那个孩子活下来了', next: 'qin_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '帮赵铁柱卸掉那张花脸', next: 'zhao_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '替孙瞎子修好那把二胡', next: 'sun_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '三魂齐度', next: 'three_souls_rite', condition: { flag: 'knowsVictimDetails' } }
        ]
    },

    qin_release: {
        title: '老生散',
        text: `你对着废墟，大声说："秦先生！那个孩子，活下来了！他叫张小宝，今年已经八十多岁了，住在镇南！他一辈子都在说，是春香班的老生救了他的命！"

风声停了片刻。

那个苍凉的男声再次响起，但这次没有疑问，只有释然：

[whisper]"活下来了……就好……"[/whisper]

废墟的角落，一缕青烟升起，像是戏台上飘散的香火气，转瞬即逝。

你听见一个极轻的、完整的唱段，是老生的《空城计》——

[whisper]"我本是卧龙岗散淡的人……"[/whisper]

唱到一半，声音渐渐远了。

秦鸣远散了。他的戏，终于唱完了。`,
        effects: { sanity: 10, yin: -10, setFlag: 'qinReleased' },
        choices: [
            { text: '继续超度赵铁柱', next: 'zhao_release' },
            { text: '继续超度孙瞎子', next: 'sun_release' },
            { text: '三人皆度，回殡仪馆', next: 'enter_with_flashlight', condition: { flag: 'sunReleased', flagValue: { key: 'zhaoReleased', value: true } } }
        ]
    },

    zhao_release: {
        title: '花脸卸',
        text: `你走到废墟中央那根烧焦的横梁前——据档案，赵铁柱就是死在这里。

你蹲下身，用手扒开横梁下的灰烬。灰烬深处，有一块已经风化的、画着花脸妆的戏妆残片。红的、黑的、白的油彩，已经褪得几乎看不见，但还能辨认出那是关公的脸谱。

你想起档案里的话："他梦见自己卸了花脸妆，露出一张苍白的脸。"

"赵先生，"你轻声说，"你演了一辈子关公，忠义千秋。可关公也得卸妆睡觉。你不必再戴着这张脸了。"

你把那块戏妆残片，轻轻从灰烬里取出来，放进手心。

残片在你掌心慢慢软化，油彩一层层剥落，最后只剩下一小撮干净的灰。

[whisper]"卸……下来了……"[/whisper]

一个浑厚的男声，带着如释重负的疲惫。

废墟的另一角，又升起一缕青烟。`,
        effects: { sanity: 10, yin: -10, setFlag: 'zhaoReleased' },
        choices: [
            { text: '继续超度秦鸣远', next: 'qin_release', condition: { noFlag: 'qinReleased' } },
            { text: '继续超度孙瞎子', next: 'sun_release' },
            { text: '三人皆度，回殡仪馆', next: 'enter_with_flashlight', condition: { flag: 'qinReleased' } }
        ]
    },

    sun_release: {
        title: '二胡续弦',
        text: `你找到戏台侧后方——那是琴师的位置。

灰烬里，有一把已经烧得只剩骨架的二胡。两根弦都断了，琴筒也裂了。

你想起档案："死时怀里还紧紧抱着那把二胡。"

你把二胡的残骸小心地捡起来。它在你手里轻得像纸，可你能感觉到，里面有一个人一辈子的重量。

"孙先生，"你说，"弦断了，可以再续。您不用一直抱着它了。"

你从口袋里掏出一根线——是从周生桥头找到的那截红绳的碎头。你把它缠在断弦处，打了个结。

[red]就在打结的瞬间，你听见了。[/red]

一个沙哑的、跑了调的、却充满喜悦的琴声，从二胡的残骸里溢出来。

[whisper]"弦……接上了……"[/whisper]

琴声响了一会儿，然后渐渐弱了，弱成一丝，最后消失在风里。

废墟的第三角，最后一缕青烟升起。`,
        effects: { sanity: 15, yin: -15, setFlag: 'sunReleased' },
        choices: [
            { text: '继续超度秦鸣远', next: 'qin_release', condition: { noFlag: 'qinReleased' } },
            { text: '继续超度赵铁柱', next: 'zhao_release', condition: { noFlag: 'zhaoReleased' } },
            { text: '三人皆度，回殡仪馆', next: 'three_souls_complete', condition: { flag: 'qinReleased' } }
        ]
    },

    three_souls_rite: {
        title: '群戏散',
        text: `你站在废墟正中央，依次对三个方向说话。

对老生位："秦先生，孩子活下来了。"

对花脸位："赵先生，脸卸了。"

对琴师位："孙先生，弦续上了。"

说完，你闭上眼，静静等待。

风过废墟，发出呜呜的声响，像是戏台的幕布最后一次抖动。

然后，三个声音同时响起，齐齐唱了一句——

[whisper]"今日散场，各自归家。"[/whisper]

这是一句戏班的散场词。你听何伯说过，老戏班每演完一出，班主都会喊这句。

可这一次，是三个亡魂，对着彼此喊的。

声音渐渐远了。废墟上空，三缕青烟汇成一股，朝青石河的方向飘去。

[whisper]他们去找云袖和周生了。同一个班子的，总要齐齐整整地走。[/whisper]

你睁开眼，废墟恢复了真正的死寂。

但这一次，是干净的死寂。`,
        effects: { sanity: 25, yin: -30, setFlag: 'threeSoulsReleased', setFlag: 'qinReleased', setFlag: 'zhaoReleased', setFlag: 'sunReleased' },
        choices: [
            { text: '回殡仪馆告诉云袖，她的同伴走了', next: 'three_souls_to_yunxiu', condition: { flag: 'knowsName' } }
        ]
    },

    three_souls_complete: {
        title: '三人皆散',
        text: `三缕青烟都散尽了。

废墟上只剩下你一个人。风过荒草的声音，恢复了普通的风声，不再有唱腔。

你长舒一口气。

三个困了近百年的亡魂，终于散场了。

[red]可你忽然意识到一件事——[/red]

云袖，作为春香班的旦角，是最后一个还在"唱戏"的人。

如果她的同伴都走了，她是不是也该走了？

[whisper]她的戏台，是时候真正搭起来了。[/whisper]`,
        effects: { sanity: 15, yin: -15, setFlag: 'threeSoulsReleased' },
        choices: [
            { text: '回殡仪馆告诉云袖', next: 'three_souls_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '去找他们的后人', next: 'victim_descendants' }
        ]
    },

    three_souls_to_yunxiu: {
        title: '同伴',
        text: `你回到七号厅，把废墟上发生的事告诉云袖。

云袖听完，沉默了很久。

"秦叔、赵哥、孙师傅……都走了吗？" 她的声音很轻。

"都走了。"你说，"他们最后喊了一句'各自归家'。"

云袖的眼角，缓缓流下一滴泪。

"我们春香班，"她低声说，"散了快一百年了。我以为，我是最后一个还守着戏的人。"

她抬起头，看着七号厅的天花板，像是能透过层层楼板，看见青石镇废墟上空那三缕飘散的青烟。

"他们也等了我快一百年。" 她说，"等我和他们一起，回家。"

她转向你，眼神里没有了犹豫。

"守夜人，"她说，"我也该走了。我的戏，唱完了。班子里的人，都在河那头等我。"`,
        effects: { sanity: 20, yin: -30, setFlag: 'yunxiuReadyToDepart', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '为她搭起最后的戏台', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '送她去青石河与同伴重逢', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } }
        ]
    },

    // 三人后人支线,

    victim_descendants: {
        title: '后人',
        text: `你在青石镇多方打听，找到了三位死难者的后人。

秦鸣远的女儿，如今已是八十多岁的老太太。她父亲死时她才三岁，对父亲几乎没记忆，但家里一直供着父亲的灵位。听说你提起了她父亲救孩子的事，老人家哭了。

"原来……我爸是为了救人。"她说，"我一直以为他是逃不出来。"

赵铁柱没有后人。他是外乡人，死后无人收殓，骨灰被镇上集体掩埋在乱葬岗。你在乱葬岗的一角，找到了一块没有名字的小碑。

孙瞎子有个徒弟，是镇上现在的盲人按摩师。他没见过师父，但师父的二胡技艺传到了他手里。你找到他时，他正在给客人按肩，旁边放着一把他自己做的二胡。

"师父的琴艺是春香班传下来的。"他说，"虽然我没见过他，但每次拉琴，我都觉得他在我身后听。"`,
        effects: { time: 120, sanity: 10, yin: -10, setFlag: 'metVictimDescendants' },
        choices: [
            { text: '请孙瞎子的徒弟拉一曲', next: 'sun_disciple_play' },
            { text: '回废墟超度三人', next: 'old_stage_victims' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    sun_disciple_play: {
        title: '一曲',
        text: `孙瞎子的徒弟——一个四十多岁的中年盲人——坐下来，拿起二胡。

"拉什么？"他问。

"《牡丹亭》的过门。"你说。

他愣了一下："这是老曲子了，现在没什么人听。您怎么知道这个？"

"我听过。"你说，"从一个老琴师那里。"

他没再问，调了调弦，开始拉。

琴声一响，你浑身起了一层鸡皮疙瘩。

那琴声，和你在废墟上听到的、孙瞎子"弦接上了"后那段琴声，几乎一模一样。同样的颤音，同样的滑指，同样的、属于盲人特有的、靠耳朵练出来的精准。

[whisper]师父的手艺，传到了徒弟手里。[/whisper]

拉到一半，徒弟忽然停下来，侧着耳朵听了一会儿。

"怪了。"他说，"我总觉得，身后有人在跟我合。"

你回头看了看。按摩铺的角落里，空无一人。

但那里，分明有一把椅子，正对着二胡的位置，像是留给某个看不见的听众的。

[whisper]也许是有的。[/whisper]`,
        effects: { sanity: 20, yin: -15, setFlag: 'sunDisciplePlayed', setFlag: 'sunReleased' },
        choices: [
            { text: '谢过徒弟，回废墟', next: 'old_stage_victims' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    // ============================================================
    // 批次9：周生视角回忆线（从地下室第二面镜子）
    // ============================================================
};
