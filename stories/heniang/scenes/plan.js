import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：plan
 */

export const scenes = {
  plan_ritual: createScene('plan_ritual', {
    title: '计划仪式',
    text: `你决定按神婆说的做。

你等到午夜，在河边架起柴火，把秀姑的尸骨放上去。然后你点燃火把，准备烧。

就在火要碰到骨头的时候，母亲的脸从水里浮出来。

"别烧。" 母亲说，"秀姑救过我。我不能让你这样对她。"

"可她不放你走。"

"她会的。" 母亲说，"如果她知道我自愿留下陪她，她就会放你走。"

你愣住了："妈，你说什么？"

母亲笑了，那笑容很温柔："我活够了。你爸走了，你在外地，我一个人没意思。秀姑叫我下来，我就下来了。"`,
    effects: {
      sanity: -20,
      yin: 10
    },
    choices: [createChoice({
      text: '尊重母亲的选择',
      next: 'respect_mother_choice',
      effects: {
        setFlag: 'respectChoice'
      }
    }), createChoice({
      text: '坚持烧掉尸骨',
      next: 'burn_bones_anyway',
      danger: true
    })]
  })
};