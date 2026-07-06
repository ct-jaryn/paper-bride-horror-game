/**
 * 《heniang》场景模块：promise
 */

export const scenes = {
    promise_save_mother: {
        title: '承诺',
        title: '承诺',
        text: `"妈，我会救你的。" 你说，"你等我。"

水里的母亲摇摇头："没有人能救河娘。除非有人愿意替她。"

"那我替你。"

母亲的脸突然变得狰狞："不行！你不能下来！你下来了，我就真的成了害你的人！"

水面剧烈翻涌，母亲的脸被水花打散。等水面平静下来，你已经看不见她了。

但你听见水下传来她的哭声，还有另一个女人的笑声。

[whisper]"她不肯要你。" 另一个女人说，"但我会要。"[/whisper]`,
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: 'motherProtects'
        },
        choices: [
            {
                text: '问水下的女人是谁',
                next: 'ask_underwater_woman'
            },
            {
                text: '逃离河边',
                next: 'flee_river'
            },
            {
                text: '你保持清醒，听出那笑声不属于母亲',
                next: 'sane_promise',
                condition: { sanityAbove: 80 },
                hidden: true,
                effects: { sanity: -5 }
            }
        ]
    },

    // 清醒承诺（新增分支）,

    promise_stay_village: {
        title: '一年之约',
        text: `"我留在村里。" 你说，"我陪我妈，直到她愿意上来。"

秀姑看着你，点点头："好。我给你一年时间。一年后，如果你还在，我就让莲姐跟你走。"

"一言为定。"

你回到村里，辞掉了外地的工作，开始务农。

每天晚上，你都会到河边和母亲说话。有时候秀姑也在，三个"人"就隔着河水聊天。

一年后，母亲自己从河里走了上来。

她说："我不能耽误你一辈子。"`,
        effects: {
            sanity: 5,
            yin: -20
        },
        ending: 'yearOfWaiting'
    }
};
