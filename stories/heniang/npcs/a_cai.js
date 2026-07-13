import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：a_cai（阿彩）
 */

export const a_cai = createNPC('a_cai', {
  name: '阿彩',
  title: '无名河娘',
  dialogue: {
    start: createDialogueNode('start', {
      text: `秀姑的尸骨旁，浮现出一个瘦小的女子身影。她低着头，红头绳在雾里若隐若现。

她不开口，只是用手指在泥地上反复画着三个字，又被河水冲掉。`,
      choices: [createDialogueChoice({
        text: '你叫什么名字？',
        next: 'ask_name'
      }), createDialogueChoice({
        text: '你在这里多久了？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '我给你起个名字',
        next: 'give_name'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_name: createDialogueNode('ask_name', {
      text: `女子抬起头，眼眶里不是泪，是河水。

"我……我不记得了。他们把我的名字从族谱上抹了，我就没有名字了。没有名字的人，连鬼都做不安稳。"`,
      choices: [createDialogueChoice({
        text: '我给你起个名字',
        next: 'give_name'
      }), createDialogueChoice({
        text: '谁抹了你的名字？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_name: createDialogueNode('give_name', {
      text: `你看着那根褪色的红头绳，轻声说："从今以后，你叫阿彩。彩色的彩。"

女子的身影颤了一下。她张开嘴，无声地重复："阿……彩……"`,
      choices: [createDialogueChoice({
        text: '对，你叫阿彩',
        effects: {
          npcAffinity: 25,
          setFlag: 'namedAca'
        },
        next: 'named_response'
      }), createDialogueChoice({
        text: '我再想想',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    named_response: createDialogueNode('named_response', {
      text: `阿彩抬起头，眼里有了光。那光很微弱，像风里的烛火。

"阿彩……我也有名字了。"她笑了，笑容里带着几十年的委屈，"谢谢你。你是第一个叫我名字的人。"`,
      choices: [createDialogueChoice({
        text: '你为什么会投河？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '我给你立碑',
        next: 'promise_bury'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_story: createDialogueNode('ask_story', {
      text: `"我是童养媳。"阿彩的声音很轻，"男人打我，婆婆骂我。我半夜投了河，他们怕丢人，连碑都不给我立，还把我的名字从族谱上剪了。"

"我只能跟着别的河娘一起唱歌。可我不知道在唱给谁听。"`,
      choices: [createDialogueChoice({
        text: '我帮你立碑',
        next: 'promise_bury'
      }), createDialogueChoice({
        text: '你已经自由了',
        next: 'give_name'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    promise_bury: createDialogueNode('promise_bury', {
      text: `阿彩看着你，像是在确认你是不是认真的。

"你要是给我立碑，"她说，"碑上就刻：无名女阿彩之墓。不，我现在有名字了——女阿彩之墓。"

她笑了，这一次笑得像个真正的姑娘。`,
      choices: [createDialogueChoice({
        text: '我答应你',
        effects: {
          npcAffinity: 20,
          setFlag: 'promisedAcaBurial'
        },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
