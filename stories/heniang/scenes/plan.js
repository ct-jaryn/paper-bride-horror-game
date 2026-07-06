import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：plan
 */

export const scenes = {
  plan_ritual: createScene('plan_ritual', {
    title: '计划仪式',
    text: `你决定按神婆说的做。

你等到午夜。河边的夜很黑，没有月亮，只有对岸村子里几点灯火。河风贴着水面刮，凉得刺骨。你在河边架起柴火，把秀姑的尸骨放上去——骨头在柴火堆里，白得发亮。

你点燃火把，火光"噼啪"地跳。你举着火把，正要往柴堆上凑——

就在火要碰到骨头的时候，母亲的脸从水里浮出来。

"别烧。" 母亲说，声音急切，"秀姑救过我。三十年前，她把我推上岸，自己沉了下去。我不能让你这样对她。"

"可她不放你走。" 你说，举着火把的手顿住了。

"她会的。" 母亲说，眼睛亮了一下，"如果她知道我自愿留下陪她，她就会放你走。她要的从来不是我的命，是有人陪。"

你愣住了："妈，你说什么？"

母亲笑了，那笑容很温柔，像是放下了一副重担："我活够了。你爸走了十五年，你在外地，一年回不来几趟。我一个人守着这空屋子，夜里能听见河水响。秀姑叫我下来，我就下来了。不怪她，是我自己要来的。"`,
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
