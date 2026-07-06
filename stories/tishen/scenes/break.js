import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：break
 */

export const scenes = {
  break_window_doll: createScene('break_window_doll', {
    title: '砸窗逃',
    text: `你拿起台灯砸向窗户。

玻璃碎了，碎玻璃像冰碴子一样溅开。纸人发出一声尖叫，那声音尖利得像撕布，又像猫被踩了尾巴。它从窗台上跌落，纸壳撞在窗框上发出闷响，跌进院子里的泥地上。

你趁机冲出房间，跑到院子里。夜风灌进来，带着槐树叶的苦味和一股焦糊的纸味。纸人趴在窗台下，身体扭曲成一个不可能的角度——它的腰是软的，纸壳在那里折成了直角，竹篾从断口里戳出来，像断裂的肋骨。

但它还在笑。那张脸朝上，月光照着，嘴角咧到了腮边，露出一口画上去的白牙。

"你砸坏了我的身体，" 它说，声音从歪着的嘴里漏出来，含含糊糊的，"没关系。我可以换一个新的。"

它顿了顿，歪着头看你，眼神里有一种你读不懂的得意："周师傅说过，纸人坏了能补。可人坏了，补不回来。你砸我一下，你身上就少一块。你信不信？"`,
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