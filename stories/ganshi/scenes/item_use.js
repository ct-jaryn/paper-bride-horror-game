/**
 * 《赶尸》场景模块：item_use
 * 关键道具的额外使用场景
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ganshi_item_use_talisman_shadow: createScene('ganshi_item_use_talisman_shadow', {
        title: '符镇第四影',
        text: `你摸出怀里的老朱砂符。

符纸被你的体温焐得发软，朱砂的字迹在火光里泛着暗红。老张说过，这道符不是镇尸的，是"替它们守门"——守的是它们和活人之间的那道界限。

你把黄符贴在第四个影子的方向。符纸刚一离手，就像被什么东西吸住了，"啪"地一声贴在洞壁上。火光里，你看见那道矮瘦的阴影剧烈地抖了一下，像是被烫着了。

[whisper]"田家的人……也会还债？"[/whisper] 洞深处传来一个声音，又老又哑，像是从石头缝里挤出来的。

"我答应送它们回家。" 你对着那道阴影说，"它们的债，我来还。你的债，我也认。但别挡我的路。"

阴影沉默了很久。火堆"噼啪"响了一声，洞壁上的黄符慢慢焦卷起来，像被无形的火烤着。最后，那道影子矮了下去，缩进墙角的黑暗里，不见了。

三具尸体的铜铃同时响了一声，"叮铃"，清亮亮的，像是什么东西松了口气。`,
        effects: {
            sanity: 10,
            yin: -15,
            removeItem: "老朱砂符",
            setFlag: "ganshi_shadow_pacified"
        },
        choices: [
            createChoice({
                text: "继续休息，等雨小些再赶路",
                next: "continue_journey"
            })
        ]
    }),

    ganshi_item_use_talisman_cave: createScene('ganshi_item_use_talisman_cave', {
        title: '符守门',
        text: `你想起老张给的那道老朱砂符。

他说过，这道符不是镇它们的，是替它们守门。现在它们被诅咒堵在洞里，进退不得，也许这道符能替它们守一回——守的是它们回家的路。

你把黄符贴在洞口的石壁上。符纸一沾石头，朱砂字迹就亮了起来，不是火光的亮，是一种温润的、像是从符纸里头透出来的红光。那光照在三具尸体身上，它们僵硬的肩膀一点点松下来。

[whisper]"田家后人……"[/whisper] 洞深处那个声音又响了，这次却没有敌意，"你师父当年，没你这份担当。"

"我师父是我师父，我是我。" 你说，"你们拦我，是怕我再像田家从前的人一样，把尸体扔了跑路。我告诉你们，我不会。"

你话音落下，洞壁上的血字开始褪色。不是被擦掉，是被什么更温和的东西盖住了——像是有人用一块湿布，轻轻擦去了陈年血迹。

三具尸体缓缓转过身，背对洞口，重新站成一排。它们的头微微低着，像在等你的命令。

洞口的符纸燃尽，化作一片金红色的灰，被风吹散。`,
        effects: {
            sanity: 15,
            yin: -20,
            removeItem: "老朱砂符",
            setFlag: "ganshi_curse_broken"
        },
        choices: [
            createChoice({
                text: "牵着尸体，继续赶路",
                next: "continue_journey"
            })
        ]
    }),

    ganshi_item_use_bell_cave: createScene('ganshi_item_use_bell_cave', {
        title: '铃响魂归',
        text: `你握紧手里的铜铃。

师父说过，铜铃是给死人引路的，也是给活人提神的。铃声一断，魂就散了。可他没说过，铃声也可以把散了的魂叫回来。

你把铜铃举到三具尸体面前，用力一摇。

[whisper]叮铃——叮铃——叮铃——[/whisper]

铃声在洞里撞出回音，一声叠一声，像是有很多人在应和。账房先生的头先抬起来一点，青年的肩膀松了，女尸垂着的手也微微动了动。

你一边摇铃，一边念师父教的引魂咒："前路有灯，归家有门。阴人上路，莫回头，莫留连……"

三具尸体跟着铃声，一步一步朝洞口走来。它们的脚步不再僵硬，倒像是被什么牵引着，很慢，却很稳。

洞深处那个声音叹了口气，很轻，像是一阵风。

"走吧。" 它说，"田家有后，这债……慢慢还。"

你把铜铃收回怀里。铃声停了，可余音还在洞里绕了很久。`,
        effects: {
            sanity: 10,
            yin: -15,
            setFlag: "ganshi_corpse_calmed"
        },
        choices: [
            createChoice({
                text: "继续赶路",
                next: "continue_journey"
            })
        ]
    })
};
