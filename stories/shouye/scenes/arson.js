/**
 * 《守夜》场景模块：arson
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    old_opera_house_ruins: createScene('old_opera_house_ruins', {
        title: "戏园旧址",
        text: "你找到了春香班当年驻唱的戏园子旧址。\n\n如今这里是个废品收购站。但走进后院，还能看见当年戏园子的青砖地基，和半截埋在土里的、漆金剥落的\"春香\"二字门楣。\n\n收购站的老板是个中年汉子，看见你盯着那半截门楣，主动搭话：\n\n\"你也是来找那个戏班的？前些年来过几拨人，有写书的，有搞研究的。这地基下面，据说埋了不少戏班的旧物。我不敢动，怕招晦气。\"\n\n他指了指后院角落的一个土坑：\"你要是有兴趣，自己挖挖看。挖出来的东西归你，别跟人说就行。\"",
        effects: {
            time: 60,
            sanity: -5,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "在土坑里挖一挖",
                next: "opera_house_dig",
            }),
            createChoice({
                text: "问老板戏园子当年的事",
                next: "opera_house_boss_story",
            }),
        ],
    }),
    opera_house_dig: createScene('opera_house_dig', {
        title: "出土",
        text: "你蹲在土坑边，用手一点点刨开浮土。\n\n坑不深，大约两尺。底下埋着一个油布包，包得很严实。\n\n你打开油布包。\n\n里面是一摞戏单——春香班当年的演出戏单，从民国二十年一直到民国二十三年，每一场戏的剧目、演员、日期都印得清清楚楚。\n\n最后一张戏单，日期是民国二十三年九月初九。剧目：全本《牡丹亭》。主演：云袖。\n\n戏单的边角被火烧焦了，但中央的字还清晰。\n\n戏单下面，压着一样东西——\n\n是一朵纸扎的牡丹。颜色已经褪尽，但花瓣一层一层的，扎得极其细致。\n\n[faded]和周生当年扎给云袖的，一模一样。[/faded]\n\n你把纸花捧在掌心。它在土里埋了将近一百年，却一点没烂，像是有人日日擦拭。",
        effects: {
            time: 30,
            sanity: 5,
            yin: -5,
            addItem: "春香班戏单",
            setFlag: "dugOperaHouse",
        },
        choices: [
            createChoice({
                text: "把纸花带回去给云袖",
                next: "paper_peony_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "问老板这花的事",
                next: "opera_house_boss_story",
            }),
        ],
    }),
    opera_house_boss_story: createScene('opera_house_boss_story', {
        title: "收购站老板",
        text: "你问老板这戏园子的往事。\n\n老板挠挠头：\"我也是听我爸说的。我爸小时候，这戏园子还在。他说春香班是这儿最红的班子，特别是有个叫云袖的旦角，全镇的人都追着听。\n\n\"后来着了火，死了好几个人，戏园子就废了。我爸说，火是意外，戏台老了吗，木头都朽了。可镇上老人不信，说火是有人故意点的。\"\n\n你心里一动：\"谁点的？\"\n\n老板压低声音：\"不知道。但我爸说，火灾前一天，有人看见一个外乡人在戏台后头转悠。那人戴斗笠，看不清脸。火灾后就再没出现过。\"\n\n[red]一个戴斗笠的外乡人。在火灾前一天，出现在戏台后。[/red]\n\n[whisper]那场火，也许根本不是意外。[/whisper]",
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: "knowsArsonMystery",
        },
        choices: [
            createChoice({
                text: "深查纵火案",
                next: "arson_investigation",
            }),
            createChoice({
                text: "先去县志馆查",
                next: "county_archive",
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    paper_peony_to_yunxiu: createScene('paper_peony_to_yunxiu', {
        title: "还花",
        text: "你把那朵从戏园旧址挖出来的纸牡丹，放在云袖的枕边。\n\n云袖低头看着那朵褪色的纸花，身体剧烈地颤抖起来。\n\n\"这是……\" 她的声音哽咽，\"周生扎的。开台那天他送我的第一朵。我以为它烧没了。\"\n\n她把纸花贴在胸口，像是抱着一个失而复得的、最重要的东西。\n\n\"他扎了一辈子纸花给我。\" 她说，\"我以为最后一朵，是火场里没来得及送出的那束。原来，第一朵还在。\"\n\n她抬起头，看着你，眼里有了从未有过的、完整的光。\n\n\"守夜人，\"她说，\"有了这朵花，我就有勇气走了。这是周生送我的第一份礼，也是我带走的第一份念想。\"\n\n[whisper]起点和终点，在这一刻，重合了。[/whisper]",
        effects: {
            sanity: 25,
            yin: -30,
            setFlag: "yunxiuReadyToDepart",
        },
        choices: [
            createChoice({
                text: "为她搭起戏台，送她最后一程",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "深查纵火案，替她讨个公道",
                next: "arson_investigation",
            }),
        ],
    }),
    arson_investigation: createScene('arson_investigation', {
        title: "纵火疑云",
        text: "你开始调查那场\"意外\"。\n\n县志馆的警务日志里，火灾的定性是\"戏台年久失修，烛火引燃幕布\"。但你查到当时验尸官的一份备注：\n\n[faded]\"死者赵铁柱（花脸）后脑有钝器伤痕，非火灾所致。疑为火灾前已遭袭击。\"[/faded]\n\n这条备注被夹在卷宗最末，没有人深究。\n\n你又查到，火灾前一个月，青石镇来了一伙外地商人，想买下戏园子的地皮盖货栈。班主不卖。火灾后，那伙商人低价买下了地皮——也就是后来变成废品收购站的那块地。\n\n[red]那场火，不是意外。是有人为了地皮，纵火灭口。[/red]\n\n纵火的人早已作古，案子无法再追。但真相，至少浮出了水面。\n\n云袖、周生、秦鸣远、赵铁柱、孙瞎子——五条人命，是因为一桩生意。",
        effects: {
            time: 180,
            sanity: -15,
            yin: 10,
            setFlag: "knowsArsonTruth",
        },
        choices: [
            createChoice({
                text: "回殡仪馆，把真相告诉云袖",
                next: "arson_truth_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "去纵火者后人那里讨说法",
                next: "arson_descendant",
            }),
            createChoice({
                text: "暂时封存档案，先回殡仪馆",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    arson_truth_to_yunxiu: createScene('arson_truth_to_yunxiu', {
        title: "公道",
        text: "你把纵火案的真相，原原本本告诉云袖。\n\n她听完，沉默了很久。\n\n\"原来……\"她轻声说，\"原来我们不是死于意外。是有人，为了一块地皮，烧死了五个人。\"\n\n她的眼里没有恨，只有一种深沉的悲凉。\n\n\"那个戴斗笠的外乡人，\"她问，\"他还活着吗？\"\n\n\"早死了。\"你说，\"纵火者和他的后人，都没了。案子没法再追。\"\n\n云袖点点头。\n\n\"也好。\"她说，\"恨一个已经不在的人，太累了。\"\n\n她抬起头，看着七号厅的天花板。\n\n\"但我要记住。\"她说，\"我和周生、和班子里的人，不是白白死的。我们死，是因为有人贪。以后，你要把这个也写进去。让读我们故事的人知道，贪念能烧死五条命。\"\n\n你郑重地点了点头。",
        effects: {
            sanity: 15,
            yin: -20,
            setFlag: "yunxiuWishComplete",
        },
        choices: [
            createChoice({
                text: "答应她，为她讨回公道的方式就是铭记",
                ending: "hidden_arsonExposed",
                condition: {
                    flag: "yunxiuRemembered",
                },
            }),
            createChoice({
                text: "继续帮她搭戏台",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "再去青石镇走走",
                next: "old_teahouse",
            }),
        ],
    }),
    arson_descendant: createScene('arson_descendant', {
        title: "讨公道",
        text: "你查到了纵火者后人的下落。\n\n那户人家如今已经败落，住在镇外的一个小村子里。纵火者的孙子是个五十多岁的农民，听说你提起当年的事，脸色惨白。\n\n\"那……那都是我爷爷干的事。\"他结结巴巴，\"跟我没关系。\"\n\n\"我没让你负责。\"你说，\"我只想让你知道，你家这块地皮上，躺着五条人命。\"\n\n农民沉默了很久，最后从屋里拿出一沓钱：\"这……这是我能出的。你拿去，给那些人立个碑吧。\"\n\n你没有接钱。\n\n\"碑会立的。\"你说，\"用你爷爷的名字立。让以后路过的人都知道，这块地，是用五条命换的。\"\n\n农民的脸更白了。\n\n[whisper]公道，有时候不需要法庭。只需要一个不被遗忘的名字。[/whisper]",
        effects: {
            time: 120,
            sanity: 5,
            yin: -10,
            setFlag: "arsonDescendantConfronted",
        },
        choices: [
            createChoice({
                text: "回殡仪馆告诉云袖",
                next: "arson_truth_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "先回殡仪馆",
                next: "enter_with_flashlight",
            }),
        ],
    })
};
