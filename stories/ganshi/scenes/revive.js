/**
 * 《ganshi》场景模块：revive
 */

export const scenes = {
    revive_woman: {
        title: '救活她',
        text: `你掐她人中，又按压她的胸口。

女子剧烈咳嗽起来，吐出一口黑水。她的眼睛恢复了一些神采。

"你是……" 她虚弱地问。

"我是赶尸的。" 你说，"你别怕，我会救你出去。"

女子抓住你的手，她的手冰凉，但确实是人手。

"他们要把我配冥婚……" 她说，"我不同意……他们就活埋我……"

你握紧她的手："我带你去找他们算账。"`,
        effects: {
            sanity: -5,
            yin: -5,
            setFlag: 'womanAlive'
        },
        choices: [
            {
                text: '带她逃走',
                next: 'escape_with_woman'
            }
        ]
    }
};
