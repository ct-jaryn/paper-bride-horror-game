import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：barricade
 */

export const scenes = {
  barricade_door: createScene('barricade_door', {
    title: '抵住门',
    text: `你搬来椅子抵住门，又堆上行李箱。

门外的纸人叹了口气："你怕我？"

"当然怕你。"

"可我不怕你。" 它说，"我从来没有怕过你。"

过了一会儿，门外安静了。你以为它走了，刚要松口气，就听见天花板上传来沙沙声。

你抬头。纸人的脸从天花板的缝隙里探出来，正倒着看你。

"椅子挡不住我。" 它说，"我是纸，可以从缝里进来。"`,
    effects: {
      sanity: -30,
      yin: 20,
      visual: 'paper-doll'
    },
    choices: [createChoice({
      text: '吓得冲出房间',
      next: 'flee_house'
    }), createChoice({
      text: '镇定地问它到底要什么',
      next: 'ask_doll_truth'
    })]
  })
};