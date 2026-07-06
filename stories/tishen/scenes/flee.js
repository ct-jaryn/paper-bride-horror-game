import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：flee
 */

export const scenes = {
  flee_house: createScene('flee_house', {
    title: '逃离院子',
    text: `你冲出房间，冲向院门。

院子里站满了纸人。每一个都穿着你不同年龄段的衣服：小学的你、初中的你、高中的你、大学的你。

"我们都是你。" 它们齐声说，"你每长大一岁，你爸就扎一个我们。"

你愣住了。原来这五年来，父亲不是只扎了一个纸人。

他扎了一整个"你"的成长史。`,
    effects: {
      sanity: -45,
      yin: 30,
      visual: 'paper-doll'
    },
    choices: [createChoice({
      text: '崩溃倒地',
      ending: 'madness'
    }), createChoice({
      text: '强迫自己镇定',
      next: 'calm_down_escape'
    })]
  })
};