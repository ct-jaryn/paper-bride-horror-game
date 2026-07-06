import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：underwater
 */

export const scenes = {
  underwater_chorus: createScene('underwater_chorus', {
    title: '水下合唱',
    text: `你屏住呼吸，跪在湿泥地上，把耳朵贴近水面。

河水冰凉，贴着耳廓时你打了个寒颤。水底下传来极细的歌声，不是一个人在唱，而是很多个声音叠在一起，一层压一层，像是从很深很深的水底冒上来的。她们唱的不是河娘引诱人的那首——那首是甜的，软的；这一首更古老，更凄凉，调子拖得长长的，像是有人在哭：

[whisper]"水来呀，水来呀……
来的人不要问名字……
问名的人回不了家……"[/whisper]

你忽然明白了：河娘不止一个。这条河里，有很多很多 drowned 的女子。她们不是各自为战，而是在一起唱，一起拉人下来。歌声叠着歌声，怨气叠着怨气，越积越深，越唱越响。

水面下，隐约浮现出很多红色的身影。她们手拉着手，站成一排，站在河底，仰着头，张着嘴，像是在等什么。她们的头发在水里飘，像一丛一丛的水草。

[red]她们在等一个能让她们上岸的人。[/red]

你猛地后退一步，踩断了一根枯枝，"咔"的一声。水下的身影齐刷刷地转过头来看你——那一瞬间，你看见她们的脸全是一样的，苍白、浮肿、没有表情。

那些身影中，有一个特别熟悉。是母亲。她站在人群最边上，没有张嘴唱，也没有抬头，只是垂着眼，静静地看着你。`,
    effects: {
      sanity: -10,
      yin: 15,
      setFlag: 'heardUnderwaterChorus'
    },
    choices: [createChoice({
      text: '喊母亲',
      next: 'call_mother'
    }), createChoice({
      text: '去找神婆',
      next: 'find_shenpo'
    })]
  })
};
