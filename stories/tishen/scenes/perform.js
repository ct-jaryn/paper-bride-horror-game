import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：perform
 */

export const scenes = {
  perform_ritual: createScene('perform_ritual', {
    title: '认主',
    text: `你决定给纸人认主。

按照母亲说的，你要给纸人起名字，再喂它一滴血。但名字不能用你的真名，否则纸人会完全取代你。

你拿起针，刺破指尖。血珠冒出来，在月光下泛着暗红色的光。

"从今以后，你叫周安。" 你说，"平安的安。"

你把血滴在纸人的额头上。血珠渗入纸中，留下一个红点。

纸人浑身颤抖，然后缓缓跪下："主人。"

你感到一阵虚弱，像是有什么东西从你身体里被抽走了。但同时，你也感到一种奇异的联系——你和纸人之间，多了一根看不见的线。`,
    effects: {
      sanity: -10,
      yin: 20,
      addItem: '纸人周安',
      setFlag: 'dollBound'
    },
    choices: [createChoice({
      text: '命令它离开父亲',
      next: 'command_leave_father'
    }), createChoice({
      text: '命令它替你承受一切灾病',
      next: 'command_take_disaster',
      effects: {
        yin: 10
      }
    })]
  })
};