/**
 * 《守夜》场景模块：lineage
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    lin_shu_memory: createScene('lin_shu_memory', {
        title: "林叔的往事",
        text: "守完一夜后，林叔来接班。\n\n他看你熬得脸色发白，却精神出奇地好，便递给你一根烟，两人在殡仪馆后院坐下。\n\n\"你昨晚，见了她吧。\" 林叔不是问句，是肯定。\n\n你没否认。\n\n林叔吐出一口烟，望着远处青石河的方向。\n\n\"我守了她三十年。\" 他说，\"我刚来这馆子的时候，才二十出头，比你还小。第一个夜班，就是七号厅。\"\n\n\"我也怕过。\" 他接着说，\"她第一次睁眼，我吓得从椅子上摔下来，磕破了后脑勺。可后来我发现，她不害人。她只是想唱戏。\"\n\n林叔沉默了一会儿。\n\n\"我年轻的时候，也想帮她搭个戏台。可我不懂戏，搭不起来。后来我就想，等我找到一个懂行的守夜人，就把这茬交给他。\"\n\n他看了你一眼。\n\n\"周遥，你就是那个人。\"\n\n你愣住了。\n\n林叔掐灭烟头，站起身。\n\n\"我快退休了。\" 他说，\"这馆子以后，就交给你了。七号厅那位云袖姑娘，也交给你。你比我有慧根。\"\n\n他从兜里掏出一本泛黄的小册子，递给你。\n\n\"这是上一代守夜人留给我的，现在给你。里面记的，都是这馆子里的规矩和故事。\"",
        effects: {
            sanity: 15,
            yin: -10,
            setFlag: "linShuPassedDown",
            addItem: "守夜人手记",
        },
        choices: [
            createChoice({
                text: "翻开那本守夜人手记",
                next: "watcher_notebook",
            }),
            createChoice({
                text: "谢过林叔，先回七号厅",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    watcher_notebook: createScene('watcher_notebook', {
        title: "守夜人手记",
        text: "你翻开那本泛黄的册子。\n\n第一页，用毛笔写着四个大字：[faded]\"阴阳簿 · 守\"[/faded]。\n\n往后翻，是一代代守夜人的记录。\n\n第一代守夜人，民国二十三年。他记道：[faded]\"今日收一具无名女尸，戏服，河中捞出。尸身不腐，似有执念。班主言，此乃春香班旦角云袖，死于戏台大火。嘱我善守之，待其执念消散。\"[/faded]\n\n第二代，民国三十年。记道：[faded]\"云袖姑娘每岁子时必醒，求还戏台。我无力搭台，唯敬香守之。\"[/faded]\n\n第三代，建国后。记道：[faded]\"馆子翻新，地下室封存。云袖姑娘物件，悉数移入，待有缘人。\"[/faded]\n\n……\n\n第七代，林叔。记道：[faded]\"我守了三十年。她不害人。我信，终有一日，有人能让她散了。\"[/faded]\n\n最后一页，是空白的。\n\n林叔在旁边批了一行小字：[faded]\"这一页，留给下一个守夜人。等你帮她唱完了戏，就把你的名字，写在这里。\"[/faded]\n\n你看着那页空白，忽然明白了一件事——\n\n[whisper]你不仅仅是一个守灵人。你是这条延续了近百年的、守护之链上，最新的一环。[/whisper]\n\n而云袖的戏，将在你手里，唱完最后一折。",
        effects: {
            sanity: 20,
            yin: -15,
            setFlag: "yunxiuWishComplete",
        },
        choices: [
            createChoice({
                text: "回到七号厅，为云袖搭起戏台",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "先去地下室取齐物件",
                next: "basement_descent",
            }),
            createChoice({
                text: "去找齐所有线索再动手",
                next: "patrol_corridor",
            }),
        ],
    })
};
