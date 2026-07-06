import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：mother
 */

export const scenes = {
  mother_as_heniang: createScene('mother_as_heniang', {
    title: '错认',
    text: `你的理智像一根绷得太紧的弦，"啪"地一声断了。

河边的石头上坐着的，不是秀姑，而是母亲。她穿着那件葬礼上的黑衣服，背对着你，正在梳头。

"妈？" 你喊了一声。

母亲缓缓转过头。她的脸苍白浮肿，头发湿漉漉地贴在脸上，水珠顺着下巴往下滴。

"你来啦。" 她笑着说，"水底下不冷。下来吧，妈接着你。"

你向她走去。河水漫过你的脚踝，但你感觉不到冷。

"妈，我来了。" 你说。

就在水要漫过你膝盖的时候，你怀里有什么东西烫了一下——是神婆给的香灰包。

[red]你猛地清醒过来。[/red]

眼前哪有什么母亲，只有一个穿红嫁衣的女人，正拉着你的手往深处走。`,
    effects: {
      sanity: -20,
      yin: 20
    },
    choices: [createChoice({
      text: '撒香灰逼退她',
      next: 'use_incense_ash',
      condition: {
        hasItem: '香灰和朱砂'
      }
    }), createChoice({
      text: '拼命往岸上跑',
      next: 'flee_river',
      effects: {
        sanity: -10
      }
    })]
  })
};