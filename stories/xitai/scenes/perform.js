import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：perform
 */

export const scenes = {
  perform_opera: createScene('perform_opera', {
    title: '入戏',
    text: `你穿上小生戏服，走上戏台。

台下坐满了没有脸的观众。云袖站在你面前，水袖轻扬。

锣鼓响起，你开始唱：

[whisper]"则为你如花美眷，似水流年……"[/whisper]

你的声音不像自己的，像是周生在借你的口唱。

云袖越唱越近，越唱越近。你想起周生的警告，拼命不看她的眼睛。

但她在唱到"原来姹紫嫣红开遍"时，忽然摘下了自己的面具。

[red]面具下，是你的脸。[/red]

"你才是我的柳梦梅。" 她说，"从一开始就是。"`,
    effects: {
      sanity: -40,
      yin: 30
    },
    choices: [createChoice({
      text: '接受她',
      next: 'accept_yunxiu',
      ending: 'eternalDuet'
    }), createChoice({
      text: '推开她，唱完最后一句',
      next: 'finish_opera',
      effects: {
        sanity: -10
      }
    }), createChoice({
      text: '你保持清醒，看穿这不过是幻术',
      next: 'see_through_illusion',
      condition: {
        sanityAbove: 80
      },
      hidden: true,
      effects: {
        sanity: -5
      }
    })]
  })

  // 破幻（新增分支）
};