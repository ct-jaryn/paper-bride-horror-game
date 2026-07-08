/**
 * 《守夜》场景模块：watchers_call_promise
 * 前任守夜人的托付与传承
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    caller_promise: createScene('caller_promise', {
        title: "应承",
        text: "\"我答应您。\"你说。\n\n电话那头沉默了很久。\n\n\"好。\"老人说，声音里带着一丝释然，\"那我就能安心了。\n\n\"孩子，我告诉你一个秘密。云袖姑娘的心愿，不是唱完一出戏，也不是有人记住她。她的心愿，是周生。\n\n\"她等的不是戏台。她等的是周生来找她。周生没来，她就一直等。可周生……\"\n\n老人的声音低了下去。\n\n\"周生也在等她。他们在同一条河里，隔着一层水，谁也没找到谁。你要是真想渡她，就带她去青石河。不是去河畔，是去河里——去他们彼此错过的地方。\"",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "callerRevealedRiver",
        },
        choices: [
            createChoice({
                text: "问他怎么知道这些",
                next: "caller_identity",
            }),
            createChoice({
                text: "挂了电话，去青石河",
                next: "coffin_to_river",
                condition: {
                    flag: "foundCoffin",
                },
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    caller_yunxiu_story: createScene('caller_yunxiu_story', {
        title: "前任的故事",
        text: "\"我守了她二十年。\"老人说，\"从七十年代到九十年代。\n\n\"那时候殡仪馆条件差，没有手电筒，我就点煤油灯守夜。云袖姑娘每年子时都会醒，我都害怕，但不敢不守。\n\n\"有一次，我壮着胆子跟她说话。我问她，你想要什么。\n\n\"她没回答。但她抬起手，指了指墙上的一幅画。那是民国时期留下的、一幅褪色的牡丹图。\n\n\"我后来才明白，她想要的是戏台。可我不会搭，也没钱搭。我只能年复一年地守着她，给她点三炷香，敬一杯酒。\n\n\"守了二十年，我累了，也老了。我把这摊事交给了林家小子。可我心里一直过不去——我守了，却没能渡。\"",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "callerToldStory",
        },
        choices: [
            createChoice({
                text: "问为什么现在才打来",
                next: "caller_why_now",
            }),
            createChoice({
                text: "答应替他了愿",
                next: "caller_promise",
            }),
        ],
    }),
    caller_identity: createScene('caller_identity', {
        title: "身份",
        text: "\"陈先生，\"你问，\"您到底是谁？\"\n\n电话那头笑了，笑声苍老而温和。\n\n\"我说了，我姓陈。我是第六代守夜人。可我没告诉你——\"\n\n他顿了顿。\n\n\"陈守一，是我爷爷。第一代守夜人。\"\n\n你握着话筒的手紧了。\n\n\"我们陈家，守了云袖姑娘四代。爷爷、我爸、我、然后交给了林家小子。我们是世代的守灵人。\n\n\"可到了我这一代，断了。我没孩子，守夜人的衣钵传不下去，只能交给外姓。林家小子是好的，可他也没孩子。\n\n\"现在轮到你了。\"老人说，\"你不是陈家人，也不是林家人。但你是被选中的人。阴阳簿的记录者，从来不是靠血脉传的，是靠缘。\"\n\n[whisper]你，就是那个有缘人。[/whisper]",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "knowsWatcherLineage",
        },
        choices: [
            createChoice({
                text: "答应他，接受这份传承",
                next: "caller_accept_lineage",
            }),
        ],
    }),
    caller_accept_lineage: createScene('caller_accept_lineage', {
        title: "传承",
        text: "\"我接受。\"你说。\n\n电话那头沉默了一会儿，然后传来一声轻轻的、如释重负的叹息。\n\n\"好孩子。\"老人说，\"好孩子。\n\n\"那我就……安心了。\"\n\n电话那头的杂音越来越重，唱戏声也渐渐远了。\n\n\"最后一件事，\"老人的声音像是从很远的地方飘来，\"我走后，你会收到一个包裹。那是我守夜二十年的笔记，和我爷爷、我爸留下的东西。都交给你了。\n\n\"孩子，渡了她。然后，把你的名字，写进阴阳簿。\"\n\n电话断了。\n\n你握着话筒，久久没有放下。\n\n[faded]三天后，你收到了一个包裹。寄件人地址是省城一家医院。里面是一摞泛黄的笔记，和一枚刻着\"守\"字的铜印。[/faded]\n\n[whisper]传承，在你手里，续上了。[/whisper]",
        effects: {
            sanity: 20,
            yin: -20,
            addItem: "守夜人铜印",
            setFlag: "yunxiuWishComplete",
        },
        choices: [
            createChoice({
                text: "带着这份传承，去渡云袖",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "先去地下室找那口柚木棺材",
                next: "basement_descent",
                condition: {
                    noFlag: "foundCoffin",
                },
                effects: {
                    time: 30,
                },
            }),
            createChoice({
                text: "回七号厅，把铜印放在云袖棺前",
                next: "enter_with_flashlight",
                condition: {
                    noFlag: "foundCoffin",
                },
            }),
        ],
    })
};
