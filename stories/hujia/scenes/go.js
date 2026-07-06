/**
 * 《hujia》场景模块：go
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    go_to_tomb: createScene('go_to_tomb', {
        title: "古墓",
        text: "你和狐女来到古墓前。\n\n古墓的门上刻着一只九尾狐，眼睛是用红宝石镶嵌的。狐女念了一段咒语，石门缓缓打开。\n\n墓室里阴冷潮湿，墙上画满了狐狸的壁画。你举着火把照过去，发现其中一幅画的不只是狐狸——一条大河从画面中央流过，河边站着一个穿红衣服的女子，背对着观者，长发垂入水中。她的脚边，蹲着一只通体雪白的狐狸。\n\n\"那是很久以前的狐族前辈。\" 狐女低声说，\"她曾在河边修行，后来……成了河里的东西。\"\n\n[red]那就是避雷珠。[/red]\n\n你正要伸手去拿，石棺里传来一声叹息：\n\n[whisper]\"后人，来取我的珠子？\"[/whisper]\n\n一个苍老的声音说：\"拿珠子可以，但要用你最珍贵的东西来换。\"",
        effects: {
            sanity: -15,
            yin: 20,
        },
        choices: [
            createChoice({
                text: "问它要什么",
                next: "ask_ancestor_price",
            }),
            createChoice({
                text: "直接抢珠子",
                next: "grab_pearl",
                effects: {
                    sanity: -10,
                },
            }),
        ],
    })
};
