import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：tell
 */

export const scenes = {
  tell_mother_has_you: createScene('tell_mother_has_you', {
    title: '告诉母亲有你',
    text: `"我妈还有我。" 你对秀姑说，"她活着的时候，我没有多陪她。但她还有我。你不能把她带走。"

秀姑看着你，眼神复杂："你以为她不知道你有孝心？她知道。可她更知道，你迟早要走。"

"我不会走。"

"你总会走的。" 秀姑说，"你有你的工作，你的生活。你不能一辈子陪着她。"

"我可以。" 你说。

秀姑笑了："那好啊。你证明给我看。"`,
    effects: {
      yin: 5,
      setFlag: 'promisedStay'
    },
    choices: [createChoice({
      text: '说你会留在村里',
      next: 'promise_stay_village'
    })]
  })
};