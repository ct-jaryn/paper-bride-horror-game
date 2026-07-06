import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：doll
 */

export const scenes = {
  doll_takeover_plan: createScene('doll_takeover_plan', {
    title: '纸人夺身',
    text: `"我的意思是，" 纸人说，"你既然不愿意救你爸，那你的命留着也没用。不如给我。"

它的话音刚落，你就感到一阵眩晕。你低头看自己的手，发现皮肤正在变皱、变黄、变薄。

[red]像纸一样。[/red]

"你爸扎我的时候，顺便把我和你连在一起了。" 纸人说，"你以为你是主人？不，我才是。"

它走向你，每一步你的身体就干瘪一分。

"放心，我会替你好好活着的。"`,
    effects: {
      sanity: -40,
      yin: 30
    },
    ending: 'replaced'
  })
};