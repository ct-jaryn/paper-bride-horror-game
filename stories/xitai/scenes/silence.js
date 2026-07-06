import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：silence
 */

export const scenes = {
  silence_punish: createScene('silence_punish', {
    title: '沉默受罚',
    text: `你沉默着。

戏子们的脸开始融化，戏服开始燃烧。但他们还在唱，即使喉咙被火吞噬，即使身体化为灰烬。

"戏……不能散……" 他们唱。

你被无形的力量按在观众席上。大火蔓延到你身上，但你感觉不到疼。

你只是和他们一起唱，一遍又一遍，直到自己也变成戏台的一部分。`,
    ending: 'trappedAudience'
  })
};