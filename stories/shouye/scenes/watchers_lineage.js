/**
 * 《守夜》场景模块：watchers_lineage
 * 初代守夜人传承与墓碑
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    first_watcher_journal: createScene('first_watcher_journal', {
        title: "初代手记",
        text: "你在林叔给你的守夜人手记里，发现了夹在最后一页的一张更老的、脆得快碎的纸。\n\n那是第一代守夜人的亲笔。字迹是繁体竖排，毛笔写的：\n\n[faded]\"吾名陈守一，青石镇人。民国二十三年秋，镇上戏台大火，春香班五人罹难。其中旦角云袖，尸身入河，数日后浮起，被送至本馆。\n\n\"尸身不腐，面如生人。吾从业三十年，未见此状。班主言，云袖姑娘执念深，魂未散，需善守之。\n\n\"吾不才，愿守此灵。待有缘人至，助姑娘了却心愿，吾之责尽矣。\n\n\"陈守一，民国二十三年冬书。\"[/faded]\n\n陈守一。第一代守夜人。\n\n你忽然想起，殡仪馆后山的壁龛里，林叔带你去扫过墓。最老的一座，墓碑上的名字正是——陈守一。\n\n[whisper]原来，他是这一切的起点。[/whisper]",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "foundFirstWatcherJournal",
        },
        choices: [
            createChoice({
                text: "去后山拜陈守一的墓",
                next: "first_watcher_grave",
            }),
            createChoice({
                text: "回七号厅继续守云袖",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    first_watcher_grave: createScene('first_watcher_grave', {
        title: "初代守墓",
        text: "你来到殡仪馆后山的壁龛。\n\n陈守一的墓碑最老，石头都风化了，但上面的字还能辨认：\n\n[faded]\"陈公讳守一之墓。生卒不详，守灵一生，善始善终。\"[/faded]\n\n碑前有人最近上过香——香灰还是新的。你猜是林叔。\n\n你在碑前站定，按规矩鞠了三个躬。\n\n\"陈先生，\"你说，\"我是第七代守夜人。您守的那位云袖姑娘，我快帮她了却心愿了。\"\n\n风吹过壁龛，发出呜呜的声响。你总觉得，那是有人在回应。\n\n就在这时，你注意到碑的侧面，刻着一行极小的字，不仔细看根本看不见：\n\n[faded]\"吾无能，仅能守。望后来者，能渡。\"[/faded]\n\n[whisper]守与渡。第一代守夜人只做到了守，把\"渡\"留给了后来者。[/whisper]\n\n[whisper]而你，也许就是那个能渡的人。[/whisper]",
        effects: {
            sanity: 15,
            yin: -15,
            setFlag: "knowsWatcherLineage",
        },
        choices: [
            createChoice({
                text: "回七号厅，决心渡她",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "先去地下室找更多线索",
                next: "basement_descent",
            }),
        ],
    })
};
