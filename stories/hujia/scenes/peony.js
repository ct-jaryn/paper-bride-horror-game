/**
 * 《hujia》场景模块：peony
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    peony_opera_defense: createScene('peony_opera_defense', {
        title: "戏退狐",
        text: "你迅速换上那套烧焦的小生戏服，清了清嗓子。\n\n[whisper]\"原来姹紫嫣红开遍，似这般都付与断井颓垣……\"[/whisper]\n\n狐女愣住了。她身后的白狐影子猛地缩成一团，像是被什么东西刺痛了。\n\n\"你……你怎么会唱这个？\" 她问，声音里带着一丝颤抖。\n\n\"我在青石镇戏台学过。\" 你说，\"云袖唱完这出戏，执念就散了。你呢？你的执念是什么？\"\n\n狐女后退一步。她的红嫁衣在风中飘动，像一团燃烧的火焰。\n\n\"我的执念……\" 她喃喃道，\"我只是想活下去。不是作为狐，是作为人。\"\n\n\"你可以活下去。\" 你说，\"但不是靠娶我。\"\n\n戏服上的焦痕在月光下泛着微光。狐女看着那套戏服，忽然落下泪来。\n\n\"云袖……\" 她说，\"她也曾是我的朋友。\"",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "peonyDefeatedFox",
        },
        choices: [
            createChoice({
                text: "问她愿不愿意放下人婚",
                next: "no_marriage_path",
                effects: {
                    setFlag: "seekEquality",
                },
            }),
            createChoice({
                text: "继续谈判",
                next: "negotiate_fox",
            }),
        ],
    })
};
