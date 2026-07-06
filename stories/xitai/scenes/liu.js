/**
 * 《xitai》场景模块：liu
 */

export const scenes = {
    liu_descendants: {
        title: '刘掌柜后人',
        text: `你找到刘掌柜的后人，一个开杂货铺的中年男人。

听说你问老戏台的事，他脸色煞白："我爷爷……他晚年总说胡话，说什么对不起春香班。他死前留下一封信，说不许后人打开。"

你买了他店里最贵的烟，他终于把信拿了出来。

信上只有一句话：

[faded]"云袖不死，我女儿永无出头之日。"[/faded]

原来刘掌柜的女儿也想当旦角，但云袖压得她出不了头。刘掌柜为了女儿的前途，在戏台底下倒了桐油。

但火势失控，烧死了整个戏班。`,
        effects: {
            sanity: -10,
            setFlag: 'knowsTrueKiller'
        },
        choices: [
            {
                text: '回戏台公布真相',
                next: 'return_to_stage'
            }
        ]
    }
};
