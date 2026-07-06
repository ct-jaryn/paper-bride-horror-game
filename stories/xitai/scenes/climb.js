import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：climb
 */

export const scenes = {
  climb_stage: createScene('climb_stage', {
    title: '登台',
    text: `你踩上戏台的木板。

木板发出"吱呀"一声，但承受住了你的重量。你走到台中央，脚下的位置有一块颜色更深的木板。

你蹲下来，发现那是一块被烧过的痕迹。痕迹的形状像是一个人形。

[red]这里就是当年有人被烧死的位置。[/red]

你伸手摸了摸那块木板。触感温热，像是刚刚有人躺在这里。

突然，锣鼓自己响了一声：

[scream]"锵——"[/scream]

你吓得一屁股坐在地上。`,
    effects: {
      sanity: -15,
      yin: 20,
      visual: 'shake'
    },
    choices: [createChoice({
      text: '查看烧痕周围的木板',
      next: 'inspect_burn_mark'
    }), createChoice({
      text: '马上跳下戏台',
      next: 'jump_off_stage'
    })]
  })
};