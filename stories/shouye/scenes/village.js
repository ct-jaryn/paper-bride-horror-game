/**
 * 《守夜》场景模块：village
 */

export const scenes = {
    osmanthus_alley: {
        title: '桂花巷',
        text: `你听何伯提起过青石镇有条桂花巷——云袖生前住的地方。

你找到那条巷子。如今已经拆迁大半，只剩几间老房子。巷口有一棵老桂花树，树龄据说超过百年。

树下坐着个老太太，正在纳鞋底。她看见你，眯着眼打量了一会儿。

"后生，你是来找云袖姑娘的？"她问。

你愣住了："您怎么知道？"

老太太笑了笑："这棵树下，每隔几年就来一个找云袖姑娘的年轻人。上一个，是三十年前一个姓林的殡仪馆守夜人。"

[whisper]林叔。[/whisper]`,
        effects: { time: 60, sanity: -5, yin: 5, setFlag: 'metOsmanthusAlleyGranny' },
        choices: [
            { text: '问她和云袖的事', next: 'alley_granny_yunxiu' },
            { text: '问林叔当年的事', next: 'alley_granny_linshu' }
        ]
    },

    alley_granny_yunxiu: {
        title: '桂花树下',
        text: `"我小时候见过云袖姑娘。"老太太说，"那时候我才七八岁。她住巷子最里头那间，每天清晨在这棵树下吊嗓子。

"她人好，看见我们这些小孩，总是笑。有时候还给我们桂花糕吃——她自己做的，用这棵树上的桂花。

"她出事那天，这棵树突然落了一地的桂花，像是知道什么似的。镇上人都说，是云袖姑娘的魂，最后回来看了一眼。"

老太太指了指树根处："你要是有心，给她磕个头吧。这棵树的根，盘着她不少念想。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'grannyToldOsmanthus' },
        choices: [
            { text: '在树下磕三个头', next: 'alley_granny_kowtow', effects: { sanity: 5 } },
            { text: '问林叔当年的事', next: 'alley_granny_linshu' },
            { text: '告辞', exit: true, effects: { sanity: 5 } }
        ]
    },

    alley_granny_kowtow: {
        title: '三拜',
        text: `你走到桂花树下，对着树根，恭敬地磕了三个头。

第一个头，磕下去，老桂花树无风自动，落了几朵桂花在你肩上。

第二个头，磕下去，你感觉一阵极轻的风拂过脸颊，像是有人在你耳边叹息。

第三个头，磕下去，你听见——

[whisper]"谢谢你还记得我。"[/whisper]

那声音不在你耳边，而是在你心里。

你抬起头。树下空无一人，老太太不知什么时候已经回屋了。只有满地的桂花，香气浓郁得像是某个季节错乱了。

你捡起一朵桂花，夹进口袋。也许，这就是云袖给你的、最后的祝福。`,
        effects: { sanity: 20, yin: -20, addItem: '桂花巷的桂花', setFlag: 'yunxiuBlessed' },
        choices: [
            { text: '回殡仪馆', next: 'enter_with_flashlight' },
            { text: '去老茶楼看看', next: 'old_teahouse' }
        ]
    },

    alley_granny_linshu: {
        title: '林叔当年',
        text: `"林家那小子啊。"老太太笑了，"三十年前他来的时候，比你还年轻，胆子小得跟老鼠似的。

"他在那棵树下坐了一整天，最后也没敢去殡仪馆。后来他又来了好几次，每次都在树下坐一会儿。第四次来的时候，他跟我说，他决定了，要去当守夜人，守着云袖姑娘。

"我问他为什么。他说，'我总觉得她在等我。'

"这一守，就是三十年。"

老太太叹了口气。

"他是个好孩子。云袖姑娘能有他守着，也是福气。现在轮到你了，后生。你比他有慧根。"`,
        effects: { sanity: 10, yin: -5, setFlag: 'knowsLinShuPast' },
        choices: [
            { text: '去老茶楼', next: 'old_teahouse' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    old_teahouse: {
        title: '老茶楼',
        text: `你找到了青石镇仅存的一家老茶楼。

茶楼还是民国时期的木结构，二楼有个小戏台，如今已经不再演戏，只供老人喝茶听评书。

你点了一壶茶，坐在角落。茶楼的老板是个六十多岁的老头，听说你对春香班感兴趣，主动坐过来聊。

"我爹生前是这茶楼的跑堂。"他说，"春香班当年红火的时候，班里的人天天来喝茶。云袖姑娘最爱坐你这个位置。

"她说，这个位置能看见戏台，又能看见门口，是最好的。"

你看了看自己坐的位置。靠窗，视野开阔，确是个好位子。

老板从柜台后拿出一本旧账册："这是我爹留下的茶楼账本，里面有春香班当年的赊账记录。云袖姑娘赊了不少桂花糕的账——她爱吃，可戏班穷，赊着赊着就还不上。后来班主帮她结了，但账本上还留着记录。"

你翻开账本。云袖的名字出现了二十多次，每次都是"桂花糕两块"。`,
        effects: { time: 60, sanity: 5, yin: -5, addItem: '茶楼旧账本', setFlag: 'visitedTeahouse' },
        choices: [
            { text: '点两块桂花糕，一块给云袖', next: 'teahouse_osmanthus_cake' },
            { text: '问老板其他春香班的事', next: 'teahouse_other_members' }
        ]
    },

    teahouse_osmanthus_cake: {
        title: '桂花糕',
        text: `你跟老板说："来两块桂花糕。"

老板愣了一下，然后会意地笑了。他端来两块桂花糕，一块放在你面前，一块放在你对面——云袖生前常坐的那个位置。

"这另一块，算我请的。"老板说，"替我爹请的。他生前总念叨，云袖姑娘的桂花糕账，他一直没好意思催。"

你看着对面那块桂花糕。

茶楼里其他客人都没注意到什么异样。但你能感觉到，对面那个空位上，有什么东西，正在静静地"吃"那块糕。

过了一会儿，对面的桂花糕，少了一小角。

[whisper]她来过了。[/whisper]`,
        effects: { sanity: 20, yin: -15, setFlag: 'yunxiuAteCake', setFlag: 'yunxiuComforted' },
        choices: [
            { text: '静静坐一会儿，陪她喝完这壶茶', ending: 'hidden_teahouseReunion' },
            { text: '问老板其他春香班的事', next: 'teahouse_other_members' }
        ]
    },

    teahouse_other_members: {
        title: '班里的人',
        text: `你问老板春香班其他成员的事。

老板翻了翻账本："除了云袖，还有老生秦鸣远、花脸赵铁柱、琴师孙瞎子。这四位是班里的台柱子。

"秦鸣远人厚道，每次来喝茶都多给小费。赵铁柱嗓门大，进门总要喊一嗓子。孙瞎子话少，总是坐在角落听别人说。

"对了，还有班主孙老胖——孙奶奶的爷爷。他最疼云袖，逢人就夸'我家袖儿'。

"这五个人，加上那个纸扎铺的周生，是茶楼的常客。他们赊的账，我爹从来没真要过。"

老板合上账本。

"火后，他们一个都没再来。我爹把他们的赊账一笔一笔划了，说是替他们'结了尘世的账'。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'knowsTeahouseMembers' },
        choices: [
            { text: '替他们把账还了', next: 'teahouse_pay_debt' },
            { text: '去废墟超度他们', next: 'old_stage_victims', condition: { flag: 'knowsVictimDetails' } }
        ]
    },

    teahouse_pay_debt: {
        title: '还账',
        text: `你掏出钱，要把春香班的赊账还了。

老板摆摆手："我爹说了，他们的账，早结了。你给钱，反而是不敬。"

你想了想，把钱收起来。

"那我换个方式还。"你说，"我替他们，把这茶楼的戏台重新修一修。让以后来喝茶的人，还能看见戏台。"

老板愣住了，然后笑了。

"那敢情好。"他说，"戏台修好了，我请你喝第一壶茶。"

半年后，老茶楼的小戏台翻新完工。开台那天，老板请了镇上的票友来唱了一出《牡丹亭》。

你坐在云袖生前常坐的位置，听完了整出戏。

[whisper]戏台上没有人。可你总觉得，有个穿红戏服的身影，在台上和你对视。[/whisper]`,
        effects: { time: 180, sanity: 25, yin: -25, setFlag: 'teahouseStageRestored', setFlag: 'yunxiuRemembered' },
        choices: [
            { text: '回殡仪馆告诉云袖', next: 'enter_with_flashlight' }
        ]
    },

    // ============================================================
    // 批次11：第一代守夜人 + 神秘来电者
    // ============================================================
};
