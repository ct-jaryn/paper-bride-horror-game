import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：call
 */

export const scenes = {
  call_mother: createScene('call_mother', {
    title: '唤母',
    text: `你站在岸边，深吸一口气，对着河水喊："妈！"

声音穿过河面上的雾，落进水里，没了回音。河水泛起一圈圈涟漪——奇怪的是，那涟漪不是从你这边扩散出去的，而是从河中央向岸边一圈一圈地推过来。

像是有什么东西正在靠近。

水慢慢往这边涌，带着一股腥味。水面上浮起一层水草，被水流带着往岸边漂。然后，水里浮现出一张脸。

是你母亲的脸。

但那不是葬礼上那张安详的脸。苍白，浮肿，皮肤上起着皱，像是泡了太久。眼睛半睁着，眼白翻出来一片。头发像水草一样散开，漂在水面上，一缕一缕地动。

"你来啦。" 母亲说。她的声音带着水声，咕噜咕噜的，像是嘴里含着一口水没咽下去，"妈等你好久了。"

"妈，你上来。" 你说，嗓子发干。

母亲摇摇头，水里泛起一阵涟漪："我上不去了。我已经不是人了。水底下才是我的家。"

"那你为什么要叫我？" 你声音有点抖。

母亲笑了。那笑容缓缓在浮肿的脸上展开，嘴角咧得太开，露出一线发黑的牙床："因为我孤单呀。河底很冷，一个人待着，能听见自己骨头响。我想让你下来陪我。"`,
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
