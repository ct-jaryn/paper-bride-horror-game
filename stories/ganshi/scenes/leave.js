/**
 * 《ganshi》场景模块：leave
 */

export const scenes = {
    leave_her_behind: {
        title: '抛下她',
        text: `你硬下心肠，牵着另外两具尸体继续走。

女尸没有跟上来。但她的哭声一直在你身后回荡，像是一根线缠着你的心脏。

你走了很久，终于天亮。你把两具尸体送到目的地，领了酬金。

但你心里不安。

当天晚上，你梦见那个女尸站在你床头，红嫁衣被风吹得猎猎作响。

"你为什么……不救我……" 她说。

你惊醒，发现自己胸口多了一道抓痕。`,
        effects: {
            sanity: -20,
            yin: 20
        },
        ending: 'hauntedByBride'
    }
};
