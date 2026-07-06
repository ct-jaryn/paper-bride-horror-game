/**
 * 《守夜》场景模块：patrol_hall_five
 * 五号厅：空厅与旧登记册
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    hall_five_inspection: createScene('hall_five_inspection', {
        title: "五号厅 · 空厅",
        text: "五号厅是空的，已经空了半年。\n\n半年前，这里躺着一具无名男尸，没人来认领。按规定存放期满后，他被送进了火化炉。从那以后，五号厅就一直空着，没人愿意往里放新的遗体。\n\n\"邪门。\"林叔是这么说的。\n\n你推开门。厅里干干净净，灵床上连白布都没铺。声控灯\"啪\"地亮了，惨白的光照着空荡荡的房间。\n\n可你分明听见——\n\n[whisper]沙。沙。沙。[/whisper]\n\n像有人在翻一本很厚的书。\n\n声音是从灵床下面传来的。\n\n你绕到灵床侧面，弯下腰，往床底看去。\n\n床底下，整整齐齐地码着一摞纸。不是普通的纸——是殡仪馆的旧登记册，民国时期的，封皮都烂了。\n\n最上面那本，翻开着，停在某一页。那一页上，用毛笔写着一行字：\n\n[faded]\"无名男，丁丑年腊月，疑似周氏纸扎铺学徒，自缢于铺中。无人认领，存五号厅。\"[/faded]\n\n你的手开始发抖。丁丑年，是民国二十六年。周氏纸扎铺——云袖的周生，就是开纸扎铺的。",
        effects: {
            sanity: -15,
            yin: 15,
            setFlag: "foundApprenticeRecord",
        },
        choices: [
            createChoice({
                text: "翻看更多登记册",
                next: "hall_five_archives",
            }),
            createChoice({
                text: "把登记册带走，回头细看",
                next: "basement_descent",
                effects: {
                    addItem: "旧登记册",
                },
            }),
            createChoice({
                text: "太邪门了，赶紧出去",
                next: "patrol_corridor",
                effects: {
                    sanity: -5,
                },
            }),
        ],
    }),
    hall_five_archives: createScene('hall_five_archives', {
        title: "尘封的册子",
        text: "你跪在地上，一本一本地翻那些旧登记册。\n\n纸张脆得像枯叶，一碰就掉渣。但在那些褪色的字迹里，你拼凑出了一条让人心惊的线索：\n\n[faded]\"民国二十三年，秋。无名女，戏服，河中捞出。存七号厅。后由周氏纸扎铺周生认领，称是其未婚妻云袖。因尸身不腐，无法火化，暂存。\"[/faded]\n\n[faded]\"民国二十三年，冬。周生来馆，留下铜镜、妆奁、替身纸人，托殡仪馆代为保管。言明待有缘人至，可还于云袖。\"[/faded]\n\n[faded]\"民国二十四年，春。周生失踪。据传投青石河自尽，尸身未寻获。\"[/faded]\n\n[faded]\"民国二十六年，腊月。周氏纸扎铺学徒自缢。临终遗言：'师父临走前说，他去找师娘了。'\"[/faded]\n\n你合上册子，手心全是冷汗。\n\n原来周生没有抛下云袖。他把她托付给了殡仪馆，然后……自己也走进了那条河。\n\n[red]同一条青石河，先后吞没了云袖、周生、还有那个学徒。[/red]\n\n而那个学徒的魂魄，至今还留在五号厅空荡荡的灵床下，守着这些无人翻看的册子。",
        effects: {
            sanity: -20,
            yin: 10,
            setFlag: "knowsApprentice",
        },
        choices: [
            createChoice({
                text: "跟床下的\"人\"说句话",
                next: "hall_five_apprentice",
            }),
            createChoice({
                text: "带上册子，去地下室",
                next: "basement_descent",
                effects: {
                    addItem: "旧登记册",
                },
            }),
            createChoice({
                text: "回七号厅找云袖",
                next: "enter_with_flashlight",
                condition: {
                    flag: "knowsName",
                },
            }),
        ],
    }),
    hall_five_apprentice: createScene('hall_five_apprentice', {
        title: "床下人",
        text: "你对着灵床底下，轻声说：\"我知道你在。你是周生的学徒吧？\"\n\n翻书声停了。\n\n沉默了很久，一个年轻的、怯生生的声音从床底响起：\n\n\"您……您能听见我？\"\n\n\"能。\" 你说，\"你在这里守了多久了？\"\n\n\"我记不清了。师父走后，我就把铺子关了。可我舍不得那些册子……殡仪馆的老馆长答应让我住在这儿，帮师父守着七号厅那位师娘的物件。后来老馆长走了，新来的人不知道我，我就一直待在床底下。\"\n\n\"你为什么不走？\"\n\n\"师娘还没散呢。\" 学徒的声音低了下去，\"师父临走说，他去找师娘了。可师娘还在七号厅，那师父去哪儿找她了？我想不通，就不敢走。\"\n\n你心里一酸。一个民国时期的学徒，在殡仪馆的空厅床底下，守了快一百年，只为想通一个问题。\n\n\"你师父，\"你轻声说，\"去找云袖了。他走进了青石河。他们现在，应该在一起了。\"\n\n床底下沉默了很久。\n\n然后，那摞登记册自己滑了出来，整整齐齐地推到你脚边。\n\n\"那……我可以走了吧？\" 学徒的声音带着一丝释然的颤抖，\"替我跟师娘说一声……师父没有负她。\"",
        effects: {
            sanity: 10,
            yin: -15,
            setFlag: "apprenticeReleased",
            addItem: "旧登记册",
        },
        choices: [
            createChoice({
                text: "答应他，目送他离去",
                next: "basement_descent",
                effects: {
                    sanity: 5,
                },
            }),
            createChoice({
                text: "回七号厅转告云袖",
                next: "yunxiu_apprentice_message",
                condition: {
                    flag: "knowsName",
                },
            }),
        ],
    })
};
