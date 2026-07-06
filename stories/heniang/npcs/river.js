import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：river
 */

export const NPCs = {
  hong_xiu: createNPC('hong_xiu', {
    name: '红袖',
    title: '水下戏魂',
    dialogue: {
      start: createDialogueNode('start', {
        text: `水面下传来咿咿呀呀的唱腔，像有一根细线牵着你的耳朵：

[whisper]"原来姹紫嫣红开遍……"[/whisper]

那截红绸水袖在风里轻轻颤动，仿佛在等待什么。`,
        choices: [createDialogueChoice({
          text: '你是谁？',
          next: 'ask_story'
        }), createDialogueChoice({
          text: '接唱下一句',
          next: 'sing_together'
        }), createDialogueChoice({
          text: '把红绸还给她',
          next: 'return_sleeve'
        }), createDialogueChoice({
          text: '转身离开',
          exit: true
        })]
      }),
      ask_story: createDialogueNode('ask_story', {
        text: `水下的声音近了些，带着旧戏台特有的回音：

"我是春香班的旦角。负心人骗了我的嫁妆，我穿着这身戏服投了河。这截水袖，是我留给岸上的念想。"`,
        choices: [createDialogueChoice({
          text: '你一直在等谁？',
          next: 'ask_peony'
        }), createDialogueChoice({
          text: '我替你唱完这出戏',
          next: 'sing_together'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      sing_together: createDialogueNode('sing_together', {
        text: `你嗓子发干，但还记得母亲年轻时哼过的调子。你接唱：

[whisper]"似这般都付与断井颓垣……"[/whisper]

水下的唱腔忽然停了。片刻后，那声音再起时，竟带了三分笑意。`,
        choices: [createDialogueChoice({
          text: '继续唱',
          effects: {
            npcAffinity: 20,
            setFlag: 'hongxiuSangTogether'
          },
          next: 'sing_response'
        }), createDialogueChoice({
          text: '问她想要什么',
          next: 'ask_peony'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      sing_response: createDialogueNode('sing_response', {
        text: `"多少年没人接我的戏了。"红袖的声音像是从很远的地方传来，"你若再来，我教你整出《惊梦》。唱完了，我也就散了。"`,
        choices: [createDialogueChoice({
          text: '我会来的',
          next: 'ask_peony'
        }), createDialogueChoice({
          text: '把红绸还你',
          next: 'return_sleeve'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      ask_peony: createDialogueNode('ask_peony', {
        text: `"牡丹是我最爱的花。"红袖轻声说，"河底沉着一件红戏服，上面绣着半朵牡丹。你若能把漂走的水袖拼回去，我就能唱完最后一出。"

"唱完了，我就走。不再拉人下水。"`,
        choices: [createDialogueChoice({
          text: '我帮你找牡丹戏服',
          effects: {
            npcAffinity: 10,
            setFlag: 'knowsPeonyDress'
          },
          next: 'return_sleeve'
        }), createDialogueChoice({
          text: '怎么拼回去？',
          next: 'ask_story'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      return_sleeve: createDialogueNode('return_sleeve', {
        text: `你把红绸水袖轻轻放回水面。水袖像一条红蛇，自己游向河心，消失在浑浊的水里。

"还你了。"你说。

水下的唱腔低回婉转，像是在道谢。`,
        choices: [createDialogueChoice({
          text: '我会帮你唱完',
          effects: {
            npcAffinity: 15,
            setFlag: 'returnedSleeve'
          },
          next: 'start'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      })
    }
  }),
  a_cai: createNPC('a_cai', {
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
  })
};