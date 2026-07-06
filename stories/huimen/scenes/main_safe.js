/**
 * 《回门》场景模块：main_safe
 */

export const scenes = {
    safe_house: {
        title: '老宅偏房 · 安全屋',
        text: `你推开老宅西侧一间偏僻的小屋。

屋里很干净，像是有人定期打扫。桌上摆着几支没点过的香烛，墙角堆着一小袋糯米，窗台上还压着几张黄纸符。

[faded]这是历代周家守夜人用来"歇脚"的地方。[/faded]

你关上门，坐在椅子上。屋外的一切喧嚣都被隔绝了。你可以在这里点一支香烛，吃一把糯米，让紧绷的神经稍稍放松。

但你不能一直躲着。天快亮了，你必须在天亮前做出选择。`,
        effects: {"yin":-5},
        choices: [{"text":"点香烛恢复理智","next":"safe_house_candle","condition":{"lacksItem":"香烛"},"effects":{"addItem":"香烛"}},{"text":"吃糯米压阴气","next":"safe_house_nuomi","condition":{"lacksItem":"糯米"},"effects":{"addItem":"糯米"}},{"text":"拿护身符防身","next":"safe_house_talisman","condition":{"lacksItem":"护身符"},"effects":{"addItem":"护身符"}},{"text":"休息够了，继续行动","next":"to_old_house"}],
    }
,
    safe_house_candle: {
        title: '烛光',
        text: `你点燃一支香烛。

火苗很小，但意外地稳定。橙黄色的光照着你疲惫的脸，你感到理智在慢慢回流。

[whisper]香烛是活人的火。鬼怕火，人也靠火找回自己。[/whisper]

你吹灭蜡烛，把剩下的收好。`,
        effects: {"sanity":20,"time":15},
        choices: [{"text":"离开安全屋","next":"to_old_house"}],
    }
,
    safe_house_nuomi: {
        title: '糯米',
        text: `你抓了一把生糯米塞进嘴里。

米很硬，嚼起来涩涩的，但咽下去之后，你感到胸口那股阴冷的气散了一些。

[faded]糯米压阴，这是老规矩。[/faded]

你又装了一小袋糯米随身带着。`,
        effects: {"yin":-15,"time":10},
        choices: [{"text":"离开安全屋","next":"to_old_house"}],
    }
,
    safe_house_talisman: {
        title: '安全屋护身符',
        text: `你拿起一张黄纸符。

符上的朱砂画着你看不懂的图案，但摸起来有一种奇异的温度，不像纸，更像人皮。

你把护身符折好，贴身收着。它也许能在关键时刻替你挡一次灾。`,
        effects: {"sanity":10,"addItem":"护身符"},
        choices: [{"text":"离开安全屋","next":"to_old_house"}],
    }
};
