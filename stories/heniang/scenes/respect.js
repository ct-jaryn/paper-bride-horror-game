import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：respect
 */

export const scenes = {
  respect_mother_choice: createScene('respect_mother_choice', {
    title: '尊重母亲选择',
    text: `你看着母亲，眼泪流下来。

"妈，如果你真的想留在那里，我尊重你。"

母亲笑了："傻孩子，别哭。妈不是死，妈是换了个地方住。"

秀姑也说："我会照顾好莲姐的。"

你跪在河边，重重磕了三个头。

"妈，我会常来看你的。" 你说。

"不用常来。" 母亲说，"活人别老往河边跑。你好好活着，就是对我最大的孝顺。"`,
    effects: {
      sanity: -10,
      yin: -15
    },
    ending: 'respectfulStay'
  })
};