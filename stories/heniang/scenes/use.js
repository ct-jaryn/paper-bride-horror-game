import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：use
 */

export const scenes = {
  use_incense_ash: createScene('use_incense_ash', {
    title: '用香灰',
    text: `你掏出香灰，扬手撒向秀姑。

香灰是黑的，扬出去像一团乌云。香灰碰到她的身体，发出"嗤嗤"的声音，冒起白烟，像是烧红的铁扔进水里。秀姑惨叫一声，捂着脸退入水底，红嫁衣在水里一闪，没了。

你趁机逃跑，一路跑到神婆家。鞋跑丢了一只，膝盖磕破了，血流了一裤腿。神婆开门，看见你这副狼狈样子，摇摇头，把你让进屋。

神婆给你倒了碗热水，你自己捧着，手抖得碗盖"叮当"响。她坐回门槛上，旱烟杆在膝盖上磕了磕："你用香灰伤了她，她更不会放你妈了。你伤她一分，她记你十分。"

"那怎么办？" 你问。

"没办法了。" 神婆说，吐出一口烟，"除非你比她更狠。狠到让她怕你，狠到让她不敢不放。"`,
    effects: {
      sanity: -10,
      yin: 15
    },
    choices: [createChoice({
      text: '问怎么比她更狠',
      next: 'ask_how_cruel'
    })]
  })
};
