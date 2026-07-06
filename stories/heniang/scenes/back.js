import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：back
 */

export const scenes = {
  back_away: createScene('back_away', {
    title: '后退远离',
    text: `你后退几步，远离河岸。

水里的母亲没有追来，但她的声音还飘在水面上："你跑什么？我是你妈。我不会害你。"

你不敢回答，一路跑回村里。

但你知道，你不可能一直躲着。只要这条河还在，她就会一直叫你。`,
    effects: {
      sanity: -10,
      yin: 5
    },
    choices: [createChoice({
      text: '去找神婆',
      next: 'find_shenpo'
    })]
  })
};