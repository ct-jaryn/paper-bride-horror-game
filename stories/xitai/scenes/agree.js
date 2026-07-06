import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：agree
 */

export const scenes = {
  agree_to_perform: createScene('agree_to_perform', {
    title: '答应代唱',
    text: `你点点头："我替她唱完。"

周生的身影从镜子里走出来，他的脸渐渐有了轮廓——是一个清秀的年轻人，满脸泪痕。

"谢谢。" 他说，"云袖等这句话，等了三十年。"

他把一件小生戏服递给你。戏服上有焦痕，但还能穿。

"记住，" 他说，"唱到'原来姹紫嫣红开遍'时，不要看她的眼睛。一看，你就再也走不了了。"`,
    effects: {
      sanity: -10,
      yin: 10,
      addItem: '小生戏服'
    },
    choices: [createChoice({
      text: '登台演出',
      next: 'perform_opera'
    })]
  })
};