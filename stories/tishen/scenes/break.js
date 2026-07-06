import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：break
 */

export const scenes = {
  break_window_doll: createScene('break_window_doll', {
    title: '砸窗逃',
    text: `你拿起台灯砸向窗户。

玻璃碎了，纸人发出一声尖叫，从窗台上跌落。

你趁机冲出房间，跑到院子里。纸人趴在窗台下，身体扭曲成一个不可能的角度。

但它还在笑。

"你砸坏了我的身体，" 它说，"没关系。我可以换一个新的。"`,
    effects: {
      sanity: -20,
      yin: 15
    },
    choices: [createChoice({
      text: '问它怎么才能彻底消失',
      next: 'ask_how_destroy'
    })]
  })
};