import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：flee
 */

export const scenes = {
  flee_river: createScene('flee_river', {
    title: '逃离河边',
    text: `你转身就跑。

可河水像是有意识一样，突然涨了起来，漫过你的脚踝。水是冰的，刺骨的冰，凉气顺着脚踝往上爬，一直爬到心口。你感到有无数只手在抓你的脚——冰凉的、浮肿的、青指甲的手，一把一把地抓，抓得你迈不开步子。

你拼命往前跑，鞋跑掉了一只都没敢回头捡。水草缠住你的脚，你一脚踹开，再缠上来，你再踹。终于跑出河水范围，脚踩上干地的那一刻，你腿一软，差点跪下去。

回头一看，河水已经退了回去，恢复成缓缓流淌的样子。可河面上漂浮着很多红色的花瓣——一片一片的，顺着水流往下漂。

[red]这个季节，河里根本没有花。[/red]

你瘫坐在地上，大口喘气，喘了半天才喘匀。心脏还在胸腔里"咚咚"地撞。`,
    effects: {
      sanity: -20,
      yin: 15,
      visual: 'shake'
    },
    choices: [createChoice({
      text: '去找神婆想办法',
      next: 'find_shenpo'
    })]
  })
};
