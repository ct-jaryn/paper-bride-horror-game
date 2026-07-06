import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：watch
 */

export const scenes = {
  watch_ghost_opera: createScene('watch_ghost_opera', {
    title: '鬼戏',
    text: `你找了张长凳坐下。

戏唱到一半，突然停了。

所有戏子齐刷刷地看向你。

"柳梦梅呢？" 一个声音问，"杜丽娘等不到柳梦梅，戏怎么散场？"

你意识到，他们需要你上台。

[red]他们需要有人演完柳梦梅。[/red]`,
    effects: {
      sanity: -20,
      yin: 20
    },
    choices: [createChoice({
      text: '上台扮演柳梦梅',
      next: 'perform_opera'
    }), createChoice({
      text: '继续沉默',
      next: 'silence_punish',
      ending: 'trappedAudience'
    }), createChoice({
      text: '你曾见过另一个被辜负的新娘，也许云袖需要的不是对拜',
      next: 'xiulan_wisdom',
      condition: {
        flag: 'xiulanMercy'
      }
    }), createChoice({
      text: '你听过类似的低语，那旋律里也有戏台的余音',
      next: 'paper_whisper_melody',
      condition: {
        flag: 'heard_paper_whisper'
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: 5
      }
    })]
  })

  // 纸人余音（新增分支）
};