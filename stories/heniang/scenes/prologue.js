import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：prologue
 */

export const scenes = {
  prologue: createScene('prologue', {
    title: '河娘',
    text: `你母亲的葬礼在雨天举行。

不是生病，不是意外。她是自己走进河里的。

村里人说，她是被"河娘"叫走的。

河娘是这条河里的东西。每隔十几年，河里就会多一个穿红衣服的女人。她们会站在水边唱歌，唱得岸边的人心里发慌，不知不觉就往水里走。

你小时候听过河娘的歌。那是一个夏天，你在河边玩，听见有人在唱：

[whisper]"来呀，水凉快呀……"[/whisper]

你差点就走进去了。是母亲冲过来把你拉回去，然后在你额头抹了一把香灰。

现在，母亲自己也成了河娘。

葬礼结束后，你独自来到河边。河水浑浊，看不清底。但你总觉得，水下有人在看着你。

河面上漂着一些上游冲下来的杂物：断绳、枯叶、还有一片巴掌大的红色绸布。绸布的质地不像寻常衣服，倒像是戏服上撕下来的水袖。你捡起来看了看，发现上面绣着半朵残破的牡丹。`,
    effects: {
      sanity: -10,
      yin: 10
    },
    choices: [createChoice({
      text: '在河边喊母亲',
      next: 'call_mother'
    }), createChoice({
      text: '找村里的神婆问清楚',
      next: 'find_shenpo'
    }), createChoice({
      text: '沿着河边走走，看有没有线索',
      next: 'walk_riverbank'
    }), createChoice({
      text: '你阴气太重，听见水下传来隐约的合唱',
      next: 'underwater_chorus',
      condition: {
        yinAbove: 15
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: 10
      }
    })]
  })

  // 水下合唱（新增隐藏分支）
};