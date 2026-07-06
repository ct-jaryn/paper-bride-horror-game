/**
 * 《xitai》场景模块：ask
 */

export const scenes = {
    ask_villagers: {
        title: '询问村民',
        text: `你回到镇上，找到一家小卖部。

店老板是个六十多岁的老头，听说你要去老戏台，脸色当时就变了。

"那地方去不得。" 老头压低声音，"二十年前那场火，不是意外。"

"不是意外？" 你追问。

老头左右看看，凑近你："春香班的班主得罪了人。演出那天，有人在戏台底下倒了桐油。火是从台下烧起来的，台上的人一个都没跑掉。"

"谁干的？"

老头摇摇头："不知道。但从那以后，每年七月半，老戏台都会自己唱戏。唱的还是那场没唱完的《牡丹亭》。"

他递给你一支烟："你要去也行，记住一句话——戏不散，人莫近。要是听见戏停了，马上跑。"

你接过烟，目光落在柜台后一堆没卖完的纸扎上。那些纸人纸马糊得精致，每个纸人胸口都贴着一张小小的黄签，签上印着"周氏纸扎铺"几个字。你问老头这铺子在哪里，老头摆摆手："青石镇东头，早没人了。"`,
        effects: {
            sanity: -5,
            setFlag: 'knowsArson'
        },
        choices: [
            {
                text: '问谁可能知道真相',
                next: 'ask_suspects'
            },
            {
                text: '返回戏台',
                next: 'return_to_stage'
            }
        ]
    },

    ask_suspects: {
        title: '询问嫌疑人',
        text: `老头想了想："当年和春香班有过节的，只有两个人。一个是镇上开绸缎庄的刘掌柜，他女儿想进春香班当学徒，被班主拒了。另一个是……"

老头压低声音："云袖的未婚夫，周生。"

"周生？"

"对。云袖唱红了，周生怕她不要他了，几次三番闹着要她退班。演出前一天，还有人看见他们在戏台后面吵架。"

你想起戏单上被划掉的"柳梦梅 — 周生"。

那个角色，是不是 cloud sleeve 亲手划掉的？`,
        effects: {
            sanity: -5,
            setFlag: 'knowsSuspects'
        },
        choices: [
            {
                text: '去查刘掌柜后人',
                next: 'liu_descendants'
            },
            {
                text: '去查周生后人',
                next: 'zhou_descendants'
            }
        ]
    },

    ask_ghost_actor: {
        title: '无脸小生',
        text: `你举起相机对准镜子。

闪光灯亮起的瞬间，镜子里的小生发出一声惨叫。他的脸像玻璃一样碎裂，碎片落在地上，变成一滩黑水。

但黑水里浮现出一段画面：

[faded]年轻的周生跪在戏台底下，手里拿着一个油壶。云袖站在台上，正看着他。她没有喊，没有逃，只是静静地看着他。[/faded]

画面最后，云袖的嘴唇动了动。从口型看，她说的是：

[whisper]"我不怪你。"[/whisper]

黑水慢慢渗入地板，消失不见。`,
        effects: {
            sanity: -10,
            yin: 5,
            setFlag: 'knowsTruth'
        },
        choices: [
            {
                text: '去台前找云袖',
                next: 'find_yunxiu'
            },
            {
                text: '你想起秀兰要的不过是一句道歉，云袖也许也一样',
                next: 'truth_for_yunxiu',
                condition: { flag: 'knowsTruth' }
            },
            {
                text: '我替她唱完',
                next: 'agree_to_perform'
            },
            {
                text: '你害死了她，还想让我替你赎罪？',
                next: 'condemn_zhou'
            }
        ]
    }
};
