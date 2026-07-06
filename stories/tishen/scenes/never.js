import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：never
 */

export const scenes = {
  never_agree: createScene('never_agree', {
    title: '绝不答应',
    text: `"我永远不会同意。" 你说。

纸人沉默了很久。然后它缓缓摘下自己的头—— literally 把自己的纸头从脖子上取下来，捧在手里。

"那我把这个给你。" 它说，"你烧了它，我就没了。但你爸也会没。"

它把纸头放在小桌上，然后无头的身体退到一边。

"你选吧。" 它的声音从纸头里传出，"是让我继续替你爸受罪，还是让我们一起消失。"`,
    effects: {
      sanity: -25,
      yin: 10
    },
    choices: [createChoice({
      text: '烧了纸头',
      ending: 'burnedTogether'
    }), createChoice({
      text: '不烧，继续谈判',
      next: 'negotiate_doll'
    })]
  })
};