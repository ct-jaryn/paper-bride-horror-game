import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：forgetting
 */

export const scenes = {
  forgetting_self: createScene('forgetting_self', {
    title: '忘我',
    text: `你和纸人的记忆混在一起，像两杯水倒进同一个碗。

你想起小时候父亲教你放风筝，却记不清放风筝的人是你，还是站在院子里看的那个"你"。

你记得站在屋里看院子，也记得站在院子里看屋里。

你低头看自己的手，皮肤正在变皱、变薄，指节处露出浅黄色的纸纹。

"别挣扎。"纸人说，"你马上就会明白，当纸人更轻。"

你望向窗玻璃，那里面映出的不是你的脸，而是纸人的脸。

它正在对你笑。`,
    effects: {
      sanity: -25,
      yin: 20
    },
    choices: [createChoice({
      text: '大喊自己的真名',
      next: '',
      ending: 'hidden_trueName'
    }), createChoice({
      text: '放弃辨认，任由纸壳覆盖全身',
      next: '',
      ending: 'hidden_whoAmI'
    })]
  })

  // 青石镇周氏纸扎铺分支
};