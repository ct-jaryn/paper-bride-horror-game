/**
 * 《hujia》场景模块：surrender
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    surrender_to_fox: createScene('surrender_to_fox', {
        title: "向狐女投降",
        text: "你走出人群，站在狐女面前。\n\n\"我跟你走。\" 你说，\"别伤害村民。\"\n\n狐女满意地点点头。她牵起你的手，带你离开村子。\n\n身后，村民们松了一口气。没有人挽留你。\n\n你回头看了最后一眼。这个你生活了二十多年的村子，在火光中越来越远。\n\n[red]你成了狐婿。[/red]\n\n从此，人间少了一个猎户，青丘山多了一对狐仙夫妻。",
        effects: {
            sanity: -20,
            yin: 20,
        },
        ending: "foxHusband",
    })
};
