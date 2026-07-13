/**
 * 《守夜》场景模块：village
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    osmanthus_alley: createScene('osmanthus_alley', {
        title: "桂花巷",
        text: "你听何伯提起过青石镇有条桂花巷——云袖生前住的地方。\n\n你找到那条巷子。如今已经拆迁大半，只剩几间老房子。巷口有一棵老桂花树，树龄据说超过百年。\n\n树下坐着个老太太，正在纳鞋底。她看见你，眯着眼打量了一会儿。\n\n\"后生，你是来找云袖姑娘的？\"她问。\n\n你愣住了：\"您怎么知道？\"\n\n老太太笑了笑：\"这棵树下，每隔几年就来一个找云袖姑娘的年轻人。上一个，是三十年前一个姓林的殡仪馆守夜人。\"\n\n[whisper]林叔。[/whisper]\n\n你在凌晨四点离开了殡仪馆。\n\n你不知道你为什么离开。你只是觉得你需要出去走走。\n\n殡仪馆外面是一条土路。路两边是农田。农田的尽头是一个村子。青石村。\n\n你沿着土路走。你走进了村子。\n\n村子很安静。凌晨四点。所有人都在睡觉。\n\n但你看到了一个人。\n\n一个老人。坐在村口的石凳上。手里拿着一个旱烟袋。\n\n你走上前去。\n\n\"老人家。这么早？\"\n\n老人看了你一眼。\"你是新来的守夜人？\"\n\n你点头。\n\n老人叹了口气。\"造孽啊。\"\n\n\"怎么了？\"\n\n\"七号厅里的那个女人。\"老人说。\"她造孽啊。\"\n\n\"您认识她？\"\n\n\"认识？\"老人苦笑。\"青石镇谁不认识云袖？当年春香班的旦角。美得不像人。唱得一嗓子好戏。可惜啊——\"\n\n\"可惜什么？\"\n\n\"可惜死得早。\"老人磕了磕烟袋。\"火烧的。四条人命。一夜之间。\"\n\n\"您知道那场火？\"\n\n\"知道？\"老人看了你一眼。\"我当时就在台下看戏。)\"\n\n你愣住了。\n\n\"您……您看了一场火灾？\"\n\n老人点头。\"我跑了。我活着跑出来了。很多人没跑出来。\"\n\n\"云袖……是怎么死的？\"\n\n老人沉默了很久。\n\n\"火烧的。但也不是火烧的。\"他说。\"她是被拖进水里的。\"\n\n\"什么？\"\n\n\"火灭了之后。有人从河里捞上来了五具尸体。其中一个是云袖。她穿着红戏服。她的手里攥着一根红绳。红绳的另一端——连着一枚铃铛。\"\n\n老人看着你。\n\n\"铃铛上写着两个字。'等你'。\"\n\n你攥紧了拳头。\n\n\"那是周生写的。\"你说。\n\n老人看了你一眼。\"你认识周生？\"\n\n你摇头。\"不认识。但我听说过他的故事。\"\n\n\"扎纸匠。\"老人说。\"一个扎纸匠。等了一百年。\"\n\n\"等等——您怎么知道等了一百年？\"\n\n老人没有回答。他站起来。他转身往村子里走。\n\n\"老人家——\"\n\n\"回去吧。\"老人头也不回。\"你是守夜人。你该回去守夜了。\"\n\n你看着老人的背影消失在晨雾里。\n\n你不知道他是谁。你不知道他为什么知道这些。\n\n但你知道——你知道了一些你不知道的事情。\n\n你转身往殡仪馆的方向走。",
        effects: {
            time: 60,
            sanity: -5,
            yin: 5,
            setFlag: "metOsmanthusAlleyGranny",
        },
        choices: [
            createChoice({
                text: "问她和云袖的事",
                next: "alley_granny_yunxiu",
            }),
            createChoice({
                text: "问林叔当年的事",
                next: "alley_granny_linshu",
            }),
        ],
    }),
    alley_granny_yunxiu: createScene('alley_granny_yunxiu', {
        title: "桂花树下",
        text: "\"我小时候见过云袖姑娘。\"老太太说，\"那时候我才七八岁。她住巷子最里头那间，每天清晨在这棵树下吊嗓子。\n\n\"她人好，看见我们这些小孩，总是笑。有时候还给我们桂花糕吃——她自己做的，用这棵树上的桂花。\n\n\"她出事那天，这棵树突然落了一地的桂花，像是知道什么似的。镇上人都说，是云袖姑娘的魂，最后回来看了一眼。\"\n\n老太太指了指树根处：\"你要是有心，给她磕个头吧。这棵树的根，盘着她不少念想。\"",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "grannyToldOsmanthus",
        },
        choices: [
            createChoice({
                text: "在树下磕三个头",
                next: "alley_granny_kowtow",
                effects: {
                    sanity: 5,
                },
            }),
            createChoice({
                text: "问林叔当年的事",
                next: "alley_granny_linshu",
            }),
            createChoice({
                text: "告辞",
                next: "enter_with_flashlight",
                exit: true,
                effects: {
                    sanity: 5,
                },
            }),
        ],
    }),
    alley_granny_kowtow: createScene('alley_granny_kowtow', {
        title: "三拜",
        text: "你走到桂花树下，对着树根，恭敬地磕了三个头。\n\n第一个头，磕下去，老桂花树无风自动，落了几朵桂花在你肩上。\n\n第二个头，磕下去，你感觉一阵极轻的风拂过脸颊，像是有人在你耳边叹息。\n\n第三个头，磕下去，你听见——\n\n[whisper]\"谢谢你还记得我。\"[/whisper]\n\n那声音不在你耳边，而是在你心里。\n\n你抬起头。树下空无一人，老太太不知什么时候已经回屋了。只有满地的桂花，香气浓郁得像是某个季节错乱了。\n\n你捡起一朵桂花，夹进口袋。也许，这就是云袖给你的、最后的祝福。",
        effects: {
            sanity: 20,
            yin: -20,
            addItem: "桂花巷的桂花",
            setFlag: "yunxiuBlessed",
        },
        choices: [
            createChoice({
                text: "回殡仪馆",
                next: "enter_with_flashlight",
            }),
            createChoice({
                text: "去老茶楼看看",
                next: "old_teahouse",
            }),
        ],
    }),
    alley_granny_linshu: createScene('alley_granny_linshu', {
        title: "林叔当年",
        text: "\"林家那小子啊。\"老太太笑了，\"三十年前他来的时候，比你还年轻，胆子小得跟老鼠似的。\n\n\"他在那棵树下坐了一整天，最后也没敢去殡仪馆。后来他又来了好几次，每次都在树下坐一会儿。第四次来的时候，他跟我说，他决定了，要去当守夜人，守着云袖姑娘。\n\n\"我问他为什么。他说，'我总觉得她在等我。'\n\n\"这一守，就是三十年。\"\n\n老太太叹了口气。\n\n\"他是个好孩子。云袖姑娘能有他守着，也是福气。现在轮到你了，后生。你比他有慧根。\"",
        effects: {
            sanity: 10,
            yin: -5,
            setFlag: "knowsLinShuPast",
        },
        choices: [
            createChoice({
                text: "去老茶楼",
                next: "old_teahouse",
            }),
            createChoice({
                text: "回殡仪馆",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    old_teahouse: createScene('old_teahouse', {
        title: "老茶楼",
        text: "你找到了青石镇仅存的一家老茶楼。\n\n茶楼还是民国时期的木结构，二楼有个小戏台，如今已经不再演戏，只供老人喝茶听评书。\n\n你点了一壶茶，坐在角落。茶楼的老板是个六十多岁的老头，听说你对春香班感兴趣，主动坐过来聊。\n\n\"我爹生前是这茶楼的跑堂。\"他说，\"春香班当年红火的时候，班里的人天天来喝茶。云袖姑娘最爱坐你这个位置。\n\n\"她说，这个位置能看见戏台，又能看见门口，是最好的。\"\n\n你看了看自己坐的位置。靠窗，视野开阔，确是个好位子。\n\n老板从柜台后拿出一本旧账册：\"这是我爹留下的茶楼账本，里面有春香班当年的赊账记录。云袖姑娘赊了不少桂花糕的账——她爱吃，可戏班穷，赊着赊着就还不上。后来班主帮她结了，但账本上还留着记录。\"\n\n你翻开账本。云袖的名字出现了二十多次，每次都是\"桂花糕两块\"。",
        effects: {
            time: 60,
            sanity: 5,
            yin: -5,
            addItem: "茶楼旧账本",
            setFlag: "visitedTeahouse",
        },
        choices: [
            createChoice({
                text: "点两块桂花糕，一块给云袖",
                next: "teahouse_osmanthus_cake",
            }),
            createChoice({
                text: "问老板其他春香班的事",
                next: "teahouse_other_members",
            }),
        ],
    }),
    teahouse_osmanthus_cake: createScene('teahouse_osmanthus_cake', {
        title: "桂花糕",
        text: "你跟老板说：\"来两块桂花糕。\"\n\n老板愣了一下，然后会意地笑了。他端来两块桂花糕，一块放在你面前，一块放在你对面——云袖生前常坐的那个位置。\n\n\"这另一块，算我请的。\"老板说，\"替我爹请的。他生前总念叨，云袖姑娘的桂花糕账，他一直没好意思催。\"\n\n你看着对面那块桂花糕。\n\n茶楼里其他客人都没注意到什么异样。但你能感觉到，对面那个空位上，有什么东西，正在静静地\"吃\"那块糕。\n\n过了一会儿，对面的桂花糕，少了一小角。\n\n[whisper]她来过了。[/whisper]",
        effects: {
            sanity: 20,
            yin: -15,
            setFlag: "yunxiuComforted",
        },
        choices: [
            createChoice({
                text: "静静坐一会儿，陪她喝完这壶茶",
                ending: "hidden_teahouseReunion",
            }),
            createChoice({
                text: "问老板其他春香班的事",
                next: "teahouse_other_members",
            }),
        ],
    }),
    teahouse_other_members: createScene('teahouse_other_members', {
        title: "班里的人",
        text: "你问老板春香班其他成员的事。\n\n老板翻了翻账本：\"除了云袖，还有老生秦鸣远、花脸赵铁柱、琴师孙瞎子。这四位是班里的台柱子。\n\n\"秦鸣远人厚道，每次来喝茶都多给小费。赵铁柱嗓门大，进门总要喊一嗓子。孙瞎子话少，总是坐在角落听别人说。\n\n\"对了，还有班主孙老胖——孙奶奶的爷爷。他最疼云袖，逢人就夸'我家袖儿'。\n\n\"这五个人，加上那个纸扎铺的周生，是茶楼的常客。他们赊的账，我爹从来没真要过。\"\n\n老板合上账本。\n\n\"火后，他们一个都没再来。我爹把他们的赊账一笔一笔划了，说是替他们'结了尘世的账'。\"",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "knowsTeahouseMembers",
        },
        choices: [
            createChoice({
                text: "替他们把账还了",
                next: "teahouse_pay_debt",
            }),
            createChoice({
                text: "去废墟超度他们",
                next: "old_stage_victims",
                condition: {
                    flag: "knowsVictimDetails",
                },
            }),
        ],
    }),
    teahouse_pay_debt: createScene('teahouse_pay_debt', {
        title: "还账",
        text: "你掏出钱，要把春香班的赊账还了。\n\n老板摆摆手：\"我爹说了，他们的账，早结了。你给钱，反而是不敬。\"\n\n你想了想，把钱收起来。\n\n\"那我换个方式还。\"你说，\"我替他们，把这茶楼的戏台重新修一修。让以后来喝茶的人，还能看见戏台。\"\n\n老板愣住了，然后笑了。\n\n\"那敢情好。\"他说，\"戏台修好了，我请你喝第一壶茶。\"\n\n半年后，老茶楼的小戏台翻新完工。开台那天，老板请了镇上的票友来唱了一出《牡丹亭》。\n\n你坐在云袖生前常坐的位置，听完了整出戏。\n\n[whisper]戏台上没有人。可你总觉得，有个穿红戏服的身影，在台上和你对视。[/whisper]",
        effects: {
            time: 180,
            sanity: 25,
            yin: -25,
            setFlag: "yunxiuRemembered",
        },
        choices: [
            createChoice({
                text: "回殡仪馆告诉云袖",
                next: "enter_with_flashlight",
            }),
        ],
    })
};
