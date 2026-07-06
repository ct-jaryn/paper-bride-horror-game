import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：respect
 */

export const scenes = {
  respect_mother_choice: createScene('respect_mother_choice', {
    title: '尊重母亲选择',
    text: `你看着母亲，眼泪流下来，一颗一颗砸在泥地里。

"妈，如果你真的想留在那里，我尊重你。"

母亲笑了，那笑容在水面上散开，温柔得像小时候哄你睡觉："傻孩子，别哭。妈不是死，妈是换了个地方住。水底下有秀姑陪，不冷。"

秀姑也说，声音轻飘飘的："我会照顾好莲姐的。三十年姐妹，我护着她。"

你跪在河边，重重磕了三个头，额头磕在湿泥上，泥水溅了一脸。

"妈，我会常来看你的。" 你说，声音哽住。

"不用常来。" 母亲说，声音突然认真起来，"活人别老往河边跑。跑多了，河水会记着你。你好好活着，成家立业，过你的日子，就是对我最大的孝顺。"`,
    effects: {
      sanity: -10,
      yin: -15
    },
    ending: 'respectfulStay'
  })
};
