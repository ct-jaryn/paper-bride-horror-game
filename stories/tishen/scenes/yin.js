import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：yin
 */

export const scenes = {
  yin_weak_doll: createScene('yin_weak_doll', {
    title: '未成型',
    text: `你走到院子里，仔细观察纸人。

月光照在它身上，投下的影子很淡，几乎看不清楚。它的手指、脚趾、甚至连嘴角的笑，都显得有些僵硬——像是画工匆匆完成的作品。

"你还没成型。" 你说，"你之所以想变成我，是因为你根本没有自己的样子。"

纸人沉默了。它低头看着自己的纸手，那手在风中微微颤抖。

"我可以给你起名字。" 你说，"但不是周安，不是任何和我有关的名字。你可以叫……纸生。"

"纸生？"

"纸做的生命，也是生命。" 你说，"但你不属于我，不属于我爸。你只属于你自己。"

纸人的身体晃了晃。它脸上的眉眼开始变化，不再是你的样子，而是一个陌生少年的模样。

"我……有自己的样子了？" 它问，声音里带着不敢置信。`,
    effects: {
      sanity: 10,
      yin: -20,
      setFlag: 'dollHasOwnFace'
    },
    choices: [createChoice({
      text: '放它离开',
      next: 'let_doll_go_free',
      ending: 'hidden_burn_my_remains'
    }), createChoice({
      text: '带它去见父亲',
      next: 'see_father'
    })]
  })

  // 放生纸生（新增分支）
};