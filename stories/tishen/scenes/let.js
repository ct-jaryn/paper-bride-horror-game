import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：let
 */

export const scenes = {
  let_doll_go_free: createScene('let_doll_go_free', {
    title: '放生',
    text: `你替纸生解开胸口的黄符，把写着"代吾儿受难"的符纸撕下来，烧成灰。

"你自由了。" 你说。

纸生——现在它有了陌生的眉眼，不再像你了——看着你，眼中有一种你读不懂的情绪。

"可我没有地方去。" 它说。

"去你该去的地方。" 你说，"纸扎铺子把你抓来，但你不是任何人的替身。"

纸生点点头。它的身体开始变轻，变透明，最后化作一缕青烟，飘向夜空。

院子里只剩下那张小桌，和那件旧校服。

你转身进屋。父亲还在睡觉，但他的呼吸似乎平稳了一些。`,
    effects: {
      sanity: 15,
      yin: -30,
      setFlag: 'dollReleased'
    },
    choices: [createChoice({
      text: '看着它消失',
      next: '',
      ending: 'hidden_burn_my_remains'
    })]
  }),
  let_doll_in: createScene('let_doll_in', {
    title: '放它进门',
    text: `你深吸一口气，打开了门。

纸人站在门口，歪着头看你。月光照在它脸上，那张和你一模一样的脸白得发亮。

"谢谢。" 它说。

它迈过门槛，动作僵硬地走进你的房间。它走到书桌前，拿起你的照片，用手指摸了摸。

"你小时候，" 它说，"父母也是这么看着你的吗？"

你不知如何回答。

它放下照片，转向你："我不会抢走你。我只是想知道，真正的'活着'是什么感觉。"`,
    effects: {
      sanity: -15,
      yin: 20,
      setFlag: 'doll_entered_room'
    },
    choices: [createChoice({
      text: '告诉它活着很苦',
      next: 'tell_life_is_hard'
    }), createChoice({
      text: '问它愿不愿意离开',
      next: 'ask_doll_leave'
    })]
  })

  // 告诉它活着很苦
};