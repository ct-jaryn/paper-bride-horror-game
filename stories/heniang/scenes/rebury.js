import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：rebury
 */

export const scenes = {
  rebury_bones: createScene('rebury_bones', {
    title: '迁葬尸骨',
    text: `你把秀姑的尸骨重新埋好，还在坟头插了三炷香。

"秀姑，我替我娘给你赔不是。" 你说，"你要是怨，就怨我，别怨我娘。"

香燃到一半，突然被一阵风吹灭了。

你抬头，看见秀姑站在河边，红嫁衣被风吹得猎猎作响。

"你以为重新埋了我就行？" 她说，"我在河里待了三十年，早就回不去了。"

"那你想怎样？"

"我要你娘陪我。" 秀姑说，"她答应过我的。"`,
    effects: {
      yin: 5
    },
    choices: [createChoice({
      text: '问她母亲答应过什么',
      next: 'ask_mother_promise'
    })]
  }),
  rebury_both: createScene('rebury_both', {
    title: '合葬二人',
    text: `你把秀姑的尸骨重新安葬在河岸上，又在旁边为母亲立了一个衣冠冢。

下葬那天，你请来道士做法事。道士说，只要秀姑解脱了，母亲就能跟着走。

法事做到一半，河水开始翻涌。秀姑和母亲一起浮出水面。

秀姑看着自己的新坟，笑了："终于能睡个好觉了。"

母亲看着你，眼里满是不舍："妈对不起你。"

"妈，你安心走。" 你说，"我会好好的。"`,
    effects: {
      sanity: 5,
      yin: -30
    },
    ending: 'honestReburial'
  })
};