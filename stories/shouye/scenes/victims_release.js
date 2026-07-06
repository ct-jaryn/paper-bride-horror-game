/**
 * 《守夜》场景模块：victims_release
 * 青石戏台废墟超度三魂
 */

export const scenes = {
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
    }
};
