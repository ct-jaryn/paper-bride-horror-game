import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：watch
 */

export const scenes = {
  watch_ghost_opera: createScene('watch_ghost_opera', {
    title: '鬼戏',
    text: `你找了张长凳坐下。凳面冰凉，上面那层"灰"被你一坐，扑簌簌地飘起来，呛得你咳嗽。

戏唱到一半，突然停了。

锣鼓先停，二胡跟着停，唢呐最后咽下去。台上所有的戏子，动作一律定格——抬脚的，脚停在半空；甩袖的，袖子停在半空；张嘴的，嘴张成"啊"的形状，却没有声音出来。

台下静得能听见自己心跳。

然后，所有的戏子齐刷刷地转过头看你。

他们没有脸，可你知道他们在看你。那种被盯着的感觉像针一样扎在你的后颈上。

"柳梦梅呢？"

一个声音问。那声音不是从某个戏子嘴里发出来的，是从四面八方一起发出来的，像是十七个人同时在问你，又像是一个人在你耳边问你十七遍。

"杜丽娘等不到柳梦梅，戏怎么散场？"

你想起戏单上那个被划掉的"柳梦梅 — 周生"。柳梦梅这角色本该由周生演，可周生划掉了自己的名字，再也没人演过柳梦梅。这出戏从那一日起，就卡在《惊梦》一折——杜丽娘入了梦，却等不到柳梦梅入梦来。

戏不散，是因为没有人替她把梦做完。

[red]他们需要有人上台，演完柳梦梅。[/red]`,
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