/**
 * 《守夜》场景模块：watchers
 */

export const scenes = {
    first_watcher_journal: {
        title: '初代手记',
        text: `你在林叔给你的守夜人手记里，发现了夹在最后一页的一张更老的、脆得快碎的纸。

那是第一代守夜人的亲笔。字迹是繁体竖排，毛笔写的：

[faded]"吾名陈守一，青石镇人。民国二十三年秋，镇上戏台大火，春香班五人罹难。其中旦角云袖，尸身入河，数日后浮起，被送至本馆。

"尸身不腐，面如生人。吾从业三十年，未见此状。班主言，云袖姑娘执念深，魂未散，需善守之。

"吾不才，愿守此灵。待有缘人至，助姑娘了却心愿，吾之责尽矣。

"陈守一，民国二十三年冬书。"[/faded]

陈守一。第一代守夜人。

你忽然想起，殡仪馆后山的壁龛里，林叔带你去扫过墓。最老的一座，墓碑上的名字正是——陈守一。

[whisper]原来，他是这一切的起点。[/whisper]`,
        effects: { sanity: 5, yin: -5, setFlag: 'foundFirstWatcherJournal' },
        choices: [
            { text: '去后山拜陈守一的墓', next: 'first_watcher_grave' },
            { text: '回七号厅继续守云袖', next: 'enter_with_flashlight' }
        ]
    },

    first_watcher_grave: {
        title: '初代守墓',
        text: `你来到殡仪馆后山的壁龛。

陈守一的墓碑最老，石头都风化了，但上面的字还能辨认：

[faded]"陈公讳守一之墓。生卒不详，守灵一生，善始善终。"[/faded]

碑前有人最近上过香——香灰还是新的。你猜是林叔。

你在碑前站定，按规矩鞠了三个躬。

"陈先生，"你说，"我是第七代守夜人。您守的那位云袖姑娘，我快帮她了却心愿了。"

风吹过壁龛，发出呜呜的声响。你总觉得，那是有人在回应。

就在这时，你注意到碑的侧面，刻着一行极小的字，不仔细看根本看不见：

[faded]"吾无能，仅能守。望后来者，能渡。"[/faded]

[whisper]守与渡。第一代守夜人只做到了守，把"渡"留给了后来者。[/whisper]

[whisper]而你，也许就是那个能渡的人。[/whisper]`,
        effects: { sanity: 15, yin: -15, setFlag: 'visitedFirstWatcherGrave', setFlag: 'knowsWatcherLineage' },
        choices: [
            { text: '回七号厅，决心渡她', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '先去地下室找更多线索', next: 'basement_descent' }
        ]
    },

    // 神秘来电者,

    mysterious_call: {
        title: '神秘来电',
        text: `凌晨三点，殡仪馆的座机响了。

这个时间来电，不是好事。你接起来。

电话那头先是一阵杂音，然后是一个苍老的、像是隔着一层什么的男声：

"……是七号厅的守夜人吗？"

"我是。您哪位？"

电话那头沉默了一会儿。

"我是上一个殡仪馆的……守夜人。林叔的前任。我姓陈。"

你心里一惊。林叔的前任？那是第六代守夜人。可林叔说过，他的前任早就退休了，不知去向。

"陈先生，您怎么知道这里的电话？"

"我一直在关注这馆子。"老人说，"七号厅那位，我守了二十年，没能帮她。我老了，没那个慧根。听说来了个年轻人，懂行……我想问问，你，能不能替我，了了这桩心愿？"

[red]电话那头，隐约传来唱戏声。不是从电话里，而是从老人那边。[/red]`,
        effects: { sanity: -10, yin: 10, setFlag: 'mysteriousCaller' },
        choices: [
            { text: '答应他', next: 'caller_promise' },
            { text: '问他和云袖的事', next: 'caller_yunxiu_story' },
            { text: '问他为什么现在才打来', next: 'caller_why_now' }
        ]
    },

    caller_promise: {
        title: '应承',
        text: `"我答应您。"你说。

电话那头沉默了很久。

"好。"老人说，声音里带着一丝释然，"那我就能安心了。

"孩子，我告诉你一个秘密。云袖姑娘的心愿，不是唱完一出戏，也不是有人记住她。她的心愿，是周生。

"她等的不是戏台。她等的是周生来找她。周生没来，她就一直等。可周生……"

老人的声音低了下去。

"周生也在等她。他们在同一条河里，隔着一层水，谁也没找到谁。你要是真想渡她，就带她去青石河。不是去河畔，是去河里——去他们彼此错过的地方。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'callerRevealedRiver' },
        choices: [
            { text: '问他怎么知道这些', next: 'caller_identity' },
            { text: '挂了电话，去青石河', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } }
        ]
    },

    caller_yunxiu_story: {
        title: '前任的故事',
        text: `"我守了她二十年。"老人说，"从七十年代到九十年代。

"那时候殡仪馆条件差，没有手电筒，我就点煤油灯守夜。云袖姑娘每年子时都会醒，我都害怕，但不敢不守。

"有一次，我壮着胆子跟她说话。我问她，你想要什么。

"她没回答。但她抬起手，指了指墙上的一幅画。那是民国时期留下的、一幅褪色的牡丹图。

"我后来才明白，她想要的是戏台。可我不会搭，也没钱搭。我只能年复一年地守着她，给她点三炷香，敬一杯酒。

"守了二十年，我累了，也老了。我把这摊事交给了林家小子。可我心里一直过不去——我守了，却没能渡。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'callerToldStory' },
        choices: [
            { text: '问为什么现在才打来', next: 'caller_why_now' },
            { text: '答应替他了愿', next: 'caller_promise' }
        ]
    },

    caller_why_now: {
        title: '此刻',
        text: `"为什么现在才打来？"你问。

老人沉默了一会儿。

"因为我快走了。"他说，"我得了病，医生说撑不过这个月。

"我守了一辈子灵，最后，轮到别人来守我的灵了。可我放心不下云袖姑娘。我托人打听，听说馆里来了个年轻人，懂行，跟云袖姑娘处得不错。

"我想，在我走之前，把这桩事，托付出去。"

电话那头传来一阵咳嗽。

"孩子，"老人的声音弱了下去，"替我渡她。我……我在那边，会保佑你的。"`,
        effects: { sanity: -5, yin: 5, setFlag: 'callerDying' },
        choices: [
            { text: '郑重答应他', next: 'caller_promise' },
            { text: '问他到底是谁', next: 'caller_identity' }
        ]
    },

    caller_identity: {
        title: '身份',
        text: `"陈先生，"你问，"您到底是谁？"

电话那头笑了，笑声苍老而温和。

"我说了，我姓陈。我是第六代守夜人。可我没告诉你——"

他顿了顿。

"陈守一，是我爷爷。第一代守夜人。"

你握着话筒的手紧了。

"我们陈家，守了云袖姑娘四代。爷爷、我爸、我、然后交给了林家小子。我们是世代的守灵人。

"可到了我这一代，断了。我没孩子，守夜人的衣钵传不下去，只能交给外姓。林家小子是好的，可他也没孩子。

"现在轮到你了。"老人说，"你不是陈家人，也不是林家人。但你是被选中的人。阴阳簿的记录者，从来不是靠血脉传的，是靠缘。"

[whisper]你，就是那个有缘人。[/whisper]`,
        effects: { sanity: 10, yin: -10, setFlag: 'callerIdentityRevealed', setFlag: 'knowsWatcherLineage' },
        choices: [
            { text: '答应他，接受这份传承', next: 'caller_accept_lineage' }
        ]
    },

    caller_accept_lineage: {
        title: '传承',
        text: `"我接受。"你说。

电话那头沉默了一会儿，然后传来一声轻轻的、如释重负的叹息。

"好孩子。"老人说，"好孩子。

"那我就……安心了。"

电话那头的杂音越来越重，唱戏声也渐渐远了。

"最后一件事，"老人的声音像是从很远的地方飘来，"我走后，你会收到一个包裹。那是我守夜二十年的笔记，和我爷爷、我爸留下的东西。都交给你了。

"孩子，渡了她。然后，把你的名字，写进阴阳簿。"

电话断了。

你握着话筒，久久没有放下。

[faded]三天后，你收到了一个包裹。寄件人地址是省城一家医院。里面是一摞泛黄的笔记，和一枚刻着"守"字的铜印。[/faded]

[whisper]传承，在你手里，续上了。[/whisper]`,
        effects: { sanity: 20, yin: -20, addItem: '历代守夜人笔记', addItem: '守夜人铜印', setFlag: 'acceptedLineage', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '带着这份传承，去渡云袖', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } }
        ]
    },

    // 青石河底探索
};
