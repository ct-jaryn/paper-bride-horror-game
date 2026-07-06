import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：refuse
 */

export const scenes = {
  refuse_seat: createScene('refuse_seat', {
    title: '拒绝入座',
    text: `"我不看戏。" 你说。

台上的戏子们停下了动作。整个戏台陷入死寂。

然后，他们开始向你走来。步伐很慢，但每一步都带着水汽——他们的戏服在滴水。

"不看戏的人，" 领头的戏子说，"就永远留在戏里。"`,
    effects: {
      sanity: -30,
      yin: 25
    },
    choices: [createChoice({
      text: '转身狂奔',
      next: 'keep_running',
      ending: 'lostInFog'
    }), createChoice({
      text: '跪下求饶',
      next: 'beg_for_exit',
      ending: 'trappedAudience'
    })]
  })
};