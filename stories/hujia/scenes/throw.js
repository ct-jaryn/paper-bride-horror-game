/**
 * 《hujia》场景模块：throw
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    throw_dagger: createScene('throw_dagger', {
        title: "掷出匕首",
        text: "你把匕首扔出院子。\n\n\"我不想杀你。\" 你说，\"但我也不想跟你走。\"\n\n狐女捡起匕首，把玩了一下，然后轻轻一捏，匕首断成两截。\n\n\"你走吧。\" 她说。\n\n你愣住了：\"什么？\"\n\n\"我说你走吧。\" 狐女说，\"你不愿意，我不会强求。我青丘狐族，从不做那强抢民男之事。\"\n\n她转身要走，又回头看了你一眼：\"但你记住，你欠我一个人情。\"\n\n\"什么人情？\"\n\n\"我放过你的人情。\" 狐女笑了笑，\"总有一天，我会来讨的。\"",
        effects: {
            sanity: 10,
            yin: -10,
        },
        ending: "foxLetsGo",
    })
};
