/**
 * 《hujia》场景模块：escape
 */

export const scenes = {
    escape_cave_night: {
        title: '夜逃山洞',
        text: `你趁狐女不注意，抓起烛台砸向洞府里的油灯。

火光冲天，狐狸们尖叫着四散奔逃。你趁机冲出洞府，往山下跑。

山林里的路依然古怪，但你不管不顾，拼命跑。

终于，你看见了山脚下的村子。你冲进村子，大喊："狐狸要抓我！救我！"

村民们惊醒，纷纷拿起农具。但当他们看见你身后的狐群时，都吓得不敢动。

狐女站在狐群最前面，红嫁衣在火光中燃烧："周远，你逃不掉的。"`,
        effects: {
            sanity: -25,
            yin: 20,
            visual: 'shake'
        },
        choices: [
            {
                text: '让村民们一起抵抗',
                next: 'village_battle'
            },
            {
                text: '自己站出来，不连累村民',
                next: 'surrender_to_fox'
            }
        ]
    }
};
