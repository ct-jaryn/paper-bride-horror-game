import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：refuse
 */

export const scenes = {
  refuse_deceive: createScene('refuse_deceive', {
    title: '拒绝欺骗',
    text: `你决定不骗秀姑。

你带着找到的几块骨头来到河边，蹲在水边，对水里喊："秀姑阿姨，我找到你的骨头了。我不打算烧，也不打算骗你。我只想知道一件事——我妈是不是自愿跟你走的。"

水面平静了一会儿，久到你以为没人理你。河风贴着水面刮，凉飕飕的。然后，水慢慢分开，母亲和秀姑一起浮出水面，肩并肩，头发在水里散开。

"我是自愿的。" 母亲先开口，声音很轻，"秀姑没有害我。"

秀姑点点头，水面跟着晃："莲姐说，她活着没意思。她天天来河边看我，看了一年又一年。我让她下来陪我，她下来了。"

"那我现在怎么办？" 你问，嗓子发干。

母亲看着你，眼里有泪——可那泪是水，是河水从她眼眶里溢出来："你回去吧。好好活着。别再来了。"

秀姑却说："你每年来看看我们就行。不用下来。站岸边说说话，我们听得见。"`,
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
