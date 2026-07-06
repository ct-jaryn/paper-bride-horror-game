import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：call
 */

export const scenes = {
  call_mother: createScene('call_mother', {
    title: '唤母',
    text: `你对着河水喊："妈！"

河水泛起一圈圈涟漪。涟漪不是从你这边扩散出去的，而是从河中央向岸边扩散。

像是有什么东西正在靠近。

水面上浮现出一张脸。是你母亲的脸，但苍白浮肿，头发像水草一样漂在水面上。

"你来啦。" 母亲说。她的声音带着水声，咕噜咕噜的。

"妈，你上来。" 你说。

母亲摇摇头："我上不去了。我已经不是人了。"

"那你为什么要叫我？"

母亲笑了，那笑容让你毛骨悚然："因为我孤单呀。河底很冷，我想让你下来陪我。"`,
    effects: {
      sanity: -25,
      yin: 20
    },
    choices: [createChoice({
      text: '说你会想办法救她',
      next: 'promise_save_mother'
    }), createChoice({
      text: '后退，远离河岸',
      next: 'back_away'
    }), createChoice({
      text: '你展开怀里秀兰的嫁衣，母亲的脸色变了',
      next: 'xiulan_dress_heniang',
      condition: {
        hasItem: '秀兰的嫁衣'
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: -10
      }
    })]
  })

  // 嫁衣迟疑（新增分支）
};