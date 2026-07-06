import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：tell
 */

export const scenes = {
  tell_mother_has_you: createScene('tell_mother_has_you', {
    title: '告诉母亲有你',
    text: `"我妈还有我。" 你对秀姑说，声音发紧，"她活着的时候，我没有多陪她，是我的错。但她还有我。你不能把她带走。"

秀姑看着你，眼神复杂，水面跟着暗了一暗："你以为她不知道你有孝心？她知道。她天天念叨你。可她更知道，你迟早要走。你有你的工作，你的家，你在外地扎了根。"

"我不会走。" 你说。

"你总会走的。" 秀姑说，声音里带着一点怜悯，"你有你的工作，你的生活，你的孩子。你不能一辈子陪着她。她会老，你也会老。到头来，她还是一个人。"

"我可以。" 你说，攥紧了拳头，"我留下来。我陪她。"

秀姑笑了，那笑容在水面上泛开："那好啊。你证明给我看。一年，两年，十年，你陪得住，我就放她走。"`,
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
