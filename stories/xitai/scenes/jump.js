import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：jump
 */

export const scenes = {
  jump_off_stage: createScene('jump_off_stage', {
    title: '跳下戏台',
    text: `你跳下戏台。落地时脚踝"咔"地一声，一阵剧痛——崴了。可你顾不上这些，一瘸一拐地拼命往镇子的方向跑。

身后的锣鼓声越来越响。不是从戏台传来的，是从四面八方传来的——从你脚下的石板路、从路边的草丛、从头顶的树枝，都有锣鼓声跟着你。像是整个青石镇都变成了一个戏台，你在台中央跑，却怎么也跑不出戏台的范围。

你跑出大约一里地，回头一看。

戏台还是静静地立在那里，朱红柱子，破幕布，红灯笼——灯笼都灭了，戏台黑黢黢的，像是一直都这样。什么锣鼓声、什么唱腔，统统没有了。静得能听见自己的心跳。

你长舒一口气，以为自己逃掉了。你弯腰撑着膝盖喘气，喘了三口。

可当你转回头时，你面前站着一排穿戏服的人。

他们不知道什么时候出现的，站得离你不到三步。一排站了七个，穿的全是戏服——生、旦、净、末、丑，各行都有。他们没有五官，脸上是一片空白，可你知道他们在看你。他们的手齐齐朝你伸过来，水袖长长的，长得拖到了地上：

[whisper]"观众还没散场，怎能离席？"[/whisper]`,
    effects: {
      sanity: -25,
      yin: 20,
      visual: 'shake'
    },
    choices: [createChoice({
      text: '跟他们回去',
      next: 'watch_ghost_opera'
    }), createChoice({
      text: '继续逃跑',
      next: 'keep_running',
      ending: 'lostInFog'
    })]
  })
};