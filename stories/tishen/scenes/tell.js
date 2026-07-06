import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：tell
 */

export const scenes = {
  tell_life_is_hard: createScene('tell_life_is_hard', {
    title: '活着很苦',
    text: `"活着很苦。" 你说。

纸人愣了一下，然后笑了。它的笑声像纸摩擦纸，沙沙的。

"那我做你也一样苦。" 它说，"可我没有选择。我被造出来，就是为了替你受苦。"

它走到窗边，月光照在它身上，纸壳变得透明。你看见它身体里塞满了写着符咒的黄纸，每一张上都写着你的名字。

"我不想替你死了。" 它说。

然后它从窗户跳了出去。`,
    effects: {
      sanity: -10,
      yin: 10
    },
    choices: [createChoice({
      text: '追出去',
      next: 'break_window_doll'
    })]
  })

  // 问它愿不愿意离开
};