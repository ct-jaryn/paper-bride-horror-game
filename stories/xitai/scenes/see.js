import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：see
 */

export const scenes = {
  see_through_illusion: createScene('see_through_illusion', {
    title: '破幻',
    text: `你深吸一口气，强迫自己不去看云袖的眼睛。

这不是真的。你是民俗研究所的研究员，你研究过无数类似的案例。戏台上的幻术，靠的就是让人相信自己就是戏中人。

"你不是在找柳梦梅。" 你说，"你在找一个人，替你记住云袖这个名字。"

云袖的动作停住了。

"你唱得很好。" 你继续说，"但戏已经散了三十年。周生死了，刘掌柜也死了。你还要困在这里多久？"

台下的"观众"开始骚动。他们的脸一张一张消失，像被擦掉的粉墨。

云袖的身影晃了晃。她脸上的面具——你的脸——出现了裂痕。

"我……不知道还能去哪里。" 她说。

"去该去的地方。" 你说，"我会记住你。不只是我，还有这块碑。"`,
    effects: {
      sanity: 10,
      yin: -20,
      setFlag: 'yunxiuIllusionBroken'
    },
    choices: [createChoice({
      text: '为她立一块碑',
      next: 'bury_yunxiu_memory',
      ending: 'hidden_songEnds'
    }), createChoice({
      text: '唱完最后一句，送她走',
      next: 'finish_opera',
      effects: {
        sanity: -10
      }
    })]
  })
};