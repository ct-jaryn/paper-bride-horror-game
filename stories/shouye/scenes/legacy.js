/**
 * 《守夜》场景模块：legacy
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chunxiang_descendant_home: createScene('chunxiang_descendant_home', {
        title: "春香班后人",
        text: "你辗转打听，找到了春香班班主的后人——一个住在镇南养老院的八十岁老太太，姓孙，人称孙奶奶。\n\n她的祖父就是当年春香班的班主。听说你是来问云袖的事，老人家的眼睛亮了。\n\n\"云袖姑姑啊！\" 她拉着你的手，\"我祖父一辈子最得意的，就是发现了云袖姑姑。他说，云袖姑姑是他见过的，嗓子最好的旦角。\"\n\n她颤巍巍地从枕头底下摸出一个红布包，打开，里面是一张泛黄的戏班合影，和一截断了的银簪子。\n\n合影上，年轻的云袖站在正中间，笑得灿烂。\n\n\"我祖父说，云袖姑姑死后，戏班就散了。祖父一直想替她立个碑，可那时候兵荒马乱，没立成。这是他留给我的，说等太平了，一定要替云袖姑姑做点什么。\"\n\n她把合影和断簪子都塞到你手里。\n\n\"后生，你要是能替云袖姑姑了了心愿，就是替我们孙家也了了一桩。这照片和簪子，你拿去。云袖姑姑的，本就该归云袖姑姑。\"",
        effects: {
            time: 120,
            sanity: 10,
            yin: -10,
            setFlag: "foundChunxiangPhoto",
            addItem: "断银簪",
        },
        choices: [
            createChoice({
                text: "把合影带回七号厅给云袖看",
                next: "chunxiang_photo_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "去戏曲研究所求证云袖的唱腔",
                next: "opera_institute",
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    chunxiang_photo_to_yunxiu: createScene('chunxiang_photo_to_yunxiu', {
        title: "合影",
        text: "你把那张春香班的合影，放在云袖的枕边。\n\n云袖低头看着照片上那个笑得灿烂的自己，身体僵住了。\n\n\"这是……我？\" 她的声音颤抖，\"我都快忘了，我笑起来是这个样子。\"\n\n她的手指轻轻抚过照片上每一个人的脸。班主、琴师、老生、花脸……最后停在自己身上。\n\n\"原来有人，把我们照下来了。\" 她说，\"原来我们春香班，真的存在过。\"\n\n她抬起头，看着你，眼里有了光。\n\n\"守夜人，\"她说，\"你答应我一件事。等我的戏唱完了，把这张照片，挂在七号厅的墙上。让以后来守夜的人，都看一眼。\"\n\n\"我不只是七号厅里那具女尸。我是云袖。是春香班的旦角。是被人记住的，云袖。\"\n\n你郑重地点了点头。",
        effects: {
            sanity: 20,
            yin: -25,
            setFlag: "yunxiuRemembered",
        },
        choices: [
            createChoice({
                text: "答应她，并为她搭起戏台",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "先去戏曲研究所，让她的唱腔被世人所知",
                next: "opera_institute",
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    opera_institute: createScene('opera_institute', {
        title: "戏曲研究所",
        text: "你带着从地下室找到的云袖手抄曲谱，去了省城的戏曲研究所。\n\n一位研究民国戏曲的老教授接待了你。他戴上老花镜，小心翼翼地翻看那本曲谱，越看越激动。\n\n\"这是孤本！\" 老教授的声音都抖了，\"春香班的曲谱，学界找了半个多世纪，一直以为在战火里毁了。你这是从哪里……\"\n\n你把云袖的故事简单讲了一遍。老教授听得入了神，摘下眼镜擦了擦眼角。\n\n\"云袖……\"他喃喃，\"我会查证这段历史。如果属实，她的名字，应该被写进戏曲史。\"\n\n三个月后，老教授给你寄来一本刚出版的学术专著，扉页上写着：\n\n[faded]\"谨以此书，纪念春香班旦角云袖。她唱过的戏，终于有人听见了。\"[/faded]\n\n你把这本书，放在了七号厅的灵床边。",
        effects: {
            time: 180,
            sanity: 25,
            yin: -30,
            setFlag: "yunxiuInHistory",
        },
        choices: [
            createChoice({
                text: "回七号厅告诉云袖这个消息",
                next: "opera_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
        ],
    }),
    opera_to_yunxiu: createScene('opera_to_yunxiu', {
        title: "载入",
        text: "你把那本学术专著放在云袖的灵床边，告诉她：\n\n\"云袖，你的名字，被写进书里了。以后所有研究戏曲的人，都会知道春香班，都会知道你。\"\n\n云袖看着那本书的封面，看着上面印着自己的名字。\n\n她的身影，开始变得透明。不是因为消散，而是因为，她身上的执念，一点一点地化成了光。\n\n\"守夜人，\"她的声音空灵得像风，\"我的戏，真的唱完了。\"\n\n她飘到灵床中央，对着空荡荡的七号厅，深深地福了一福——像是谢幕。\n\n\"我不再是困在这里的怨魂了。\" 她说，\"我是云袖。被记住的，唱过《牡丹亭》的，云袖。\"",
        effects: {
            sanity: 30,
            yin: -40,
            setFlag: "yunxiuFulfilled",
        },
        choices: [
            createChoice({
                text: "送她最后一程",
                next: "coffin_final_rite",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "为她搭起戏台，唱完最后一折",
                next: "promise_help",
            }),
        ],
    })
};
