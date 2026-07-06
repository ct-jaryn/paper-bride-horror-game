import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：refuse
 */

export const scenes = {
  refuse_deceive: createScene('refuse_deceive', {
    title: '拒绝欺骗',
    text: `你决定不骗秀姑。

你带着找到的几块骨头来到河边，对水里喊："秀姑阿姨，我找到你的骨头了。我不打算烧，也不打算骗你。我只想知道，我妈是不是自愿跟你走的。"

水面平静了一会儿，然后母亲和秀姑一起浮出水面。

"我是自愿的。" 母亲说，"秀姑没有害我。"

秀姑点点头："莲姐说，她活着没意思。我让她下来陪我。"

"那我现在怎么办？" 你问。

母亲看着你，眼里有泪："你回去吧。好好活着。"

秀姑却说："你每年来看看我们就行。不用下来。"`,
    effects: {
      sanity: -10,
      yin: -10,
      setFlag: 'honestApproach'
    },
    choices: [createChoice({
      text: '接受母亲的决定',
      ending: 'peacefulParting'
    }), createChoice({
      text: '拒绝接受，想办法救她',
      next: 'search_for_other_way'
    }), createChoice({
      text: '你听过水下合唱，知道她们不是不想走，是没人渡',
      next: 'ferryman_path',
      condition: {
        flag: 'heardUnderwaterChorus'
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: 10
      }
    })]
  })

  // 渡河人（新增隐藏分支）
};