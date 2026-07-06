import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：bury
 */

export const scenes = {
  bury_yunxiu_memory: createScene('bury_yunxiu_memory', {
    title: '立碑',
    text: `你在青石戏台的废墟边，用石头和木板搭起一块简易的碑。

碑上没有刻字，只有一支录音笔，里面录下了你刚才听到的唱腔。

"云袖，" 你对着戏台说，"你的名字，你的戏，我会带回去。以后每一个研究民俗的人，都会知道春香班，知道《牡丹亭》，知道你。"

戏台上的红灯笼一盏接一盏熄灭。

云袖的身影出现在戏台边缘。她没有五官的脸上，似乎浮现出一个淡淡的笑。

"谢谢。" 她说，"这出戏，终于可以散了。"

她的身影化作一阵风，吹过废墟，吹向远方。

天亮了。青石戏台再也没有唱过鬼戏。`,
    effects: {
      sanity: 15,
      yin: -30,
      setFlag: 'yunxiuRemembered'
    },
    choices: [createChoice({
      text: '带着录音笔离开',
      next: '',
      ending: 'hidden_songEnds'
    })]
  }),
  // 曲终人散前置：戏服安葬（新增分支）,

  bury_yunxiu_costume: createScene('bury_yunxiu_costume', {
    title: '葬衣',
    text: `你在戏台废墟边挖了一个浅坑，把云袖的戏服和银钗一起放进去。

"你不想再唱一辈子。" 你说，"我帮你把这套戏服葬了。从今以后，你只是云袖，不是杜丽娘。"

戏服接触泥土的瞬间，你听见一声似有似无的叹息。

坑填平了。你在上面放了一块石头，用朱砂写下两个字：

[faded]"云袖"[/faded]

风过戏台，幕布轻轻飘动，像是在向你作揖谢幕。`,
    effects: {
      sanity: 10,
      yin: -25,
      setFlag: 'yunxiuCostumeBuried'
    },
    choices: [createChoice({
      text: '离开青石镇',
      next: '',
      ending: 'hidden_songEnds'
    })]
  })

  // 隐藏结局分支：慈悲戏
};