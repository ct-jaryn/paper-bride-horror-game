import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：confront
 */

export const scenes = {
  confront_liu: createScene('confront_liu', {
    title: '对峙刘掌柜',
    text: `"是你放的火。" 你说。

刘掌柜的鬼魂笑了："是又怎么样？那丫头抢了我女儿的风头，她该死。"

"可你烧死了整个戏班。"

"那又怎样？" 他的脸开始扭曲，"他们每晚都唱，唱得我不得安宁。你来正好，你来替我们听完！"

他扑向你。你举起云袖的银钗，钗尖刺入他的胸口。

刘掌柜发出一声惨叫，化成黑烟消散了。

但戏台上的锣鼓声没有停。

云袖的声音响起："火因灭了，但戏，还没散。"`,
    effects: {
      yin: -10,
      setFlag: 'liuDestroyed'
    },
    choices: [createChoice({
      text: '上台完成演出',
      next: 'perform_opera'
    })]
  })
};