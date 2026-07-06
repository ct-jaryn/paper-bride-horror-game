/**
 * NPC 模块：yunxiu
 */

import { yunxiuMoreDialogue } from './yunxiu_more.js';
import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
export const NPCs = {
  yunxiu: createNPC('yunxiu', {
    name: '云袖',
    title: '春香班旦角',
    dialogue: {
      start: createDialogueNode('start', {
        text: `她的眼珠缓缓转向你，戏服上的水珠滴落在地。她没有张嘴，声音却直接落进你耳中："活人见了我，不是逃就是骂。你为何还站在这里？"`,
        choices: [createDialogueChoice({
          text: '我知道你的名字',
          next: 'yunxiu_knows_name',
          condition: {
            flag: 'knowsName'
          }
        }), createDialogueChoice({
          text: '我想帮你',
          next: 'yunxiu_help'
        }), createDialogueChoice({
          text: '你为什么不肯闭眼？',
          next: 'yunxiu_awake'
        }), createDialogueChoice({
          text: '我这就走',
          exit: true,
          effects: {
            npcAffinity: -5
          }
        })]
      }),
      yunxiu_knows_name: createDialogueNode('yunxiu_knows_name', {
        text: `"云袖……"她轻轻重复，像是在品一壶隔夜的茶。"好久没人叫我的名字了。他们都叫我七号厅那位、那具女尸、那个唱戏的鬼。"`,
        choices: [createDialogueChoice({
          text: '你想唱完哪一出？',
          next: 'yunxiu_final_play'
        }), createDialogueChoice({
          text: '谁把你移到河里的？',
          next: 'yunxiu_zhou_sheng',
          condition: {
            flag: 'knowsZhouSheng'
          }
        }), createDialogueChoice({
          text: '我会记住你',
          exit: true,
          effects: {
            npcAffinity: 10,
            sanity: 5
          }
        })]
      }),
      yunxiu_help: createDialogueNode('yunxiu_help', {
        text: `"帮我？"她低声笑了，笑声像碎玉落地。"帮我搭一座戏台，帮我唱完《牡丹亭》。或者……帮我找到那个把我放进河里的人，问问他，可曾后悔。"`,
        choices: [createDialogueChoice({
          text: '我答应帮你搭戏台',
          exit: true,
          effects: {
            npcAffinity: 15,
            setFlag: 'promised',
            sanity: 5
          }
        }), createDialogueChoice({
          text: '你是说周生？',
          next: 'yunxiu_zhou_sheng',
          condition: {
            flag: 'knowsZhouSheng'
          }
        }), createDialogueChoice({
          text: '我需要报酬',
          next: 'yunxiu_payment'
        })]
      }),
      yunxiu_awake: createDialogueNode('yunxiu_awake', {
        text: `"我醒来，是因为有人记得我，也是因为有人忘了我。守夜的人换了一拨又一拨，只有你问我需要什么。"她顿了顿，"可你要小心，记得我的人，也会被我的执念缠住。"`,
        choices: [createDialogueChoice({
          text: '我不怕',
          next: 'yunxiu_help'
        }), createDialogueChoice({
          text: '我会保持距离',
          exit: true,
          effects: {
            npcAffinity: -5
          }
        })]
      }),
      yunxiu_final_play: createDialogueNode('yunxiu_final_play', {
        text: `"《牡丹亭·惊梦》。"她说，"我死在那一场火里，戏台塌了，鼓点停了。可我的魂还在唱。你若替我搭一座戏台，我便安心。"`,
        choices: [createDialogueChoice({
          text: '我答应你',
          exit: true,
          effects: {
            npcAffinity: 20,
            setFlag: 'promised'
          }
        }), createDialogueChoice({
          text: '如果我也喜欢上你的戏呢？',
          next: 'yunxiu_duet',
          condition: {
            flag: 'yunxiuComforted'
          }
        })]
      }),
      yunxiu_duet: createDialogueNode('yunxiu_duet', {
        text: `云袖愣了一下，随即露出一个极淡的笑："那我便唱给你一个人听。只是听完了，你可别像我，再也走不出那出戏。"`,
        choices: [createDialogueChoice({
          text: '我甘愿做你的最后一名观众',
          exit: true,
          effects: {
            npcAffinity: 25,
            setFlag: 'yunxiuLastAudience'
          }
        })]
      }),
      yunxiu_zhou_sheng: createDialogueNode('yunxiu_zhou_sheng', {
        text: `"周生……"她的声音忽然变得很轻，"他把我放进青石河，说水能灭火。他以为救了我，却锁住了我的魂。我不怪他。我只是想问他，那枚银钗，他可还记得。"`,
        choices: [createDialogueChoice({
          text: '我会替你问他',
          exit: true,
          effects: {
            npcAffinity: 15,
            setFlag: 'yunxiuForgaveZhouSheng'
          }
        }), createDialogueChoice({
          text: '如果你见到他呢？',
          next: 'yunxiu_meet_zhou'
        })]
      }),
      yunxiu_meet_zhou: createDialogueNode('yunxiu_meet_zhou', {
        text: `"若再见他，我便唱完《牡丹亭》，然后随他走。戏散了，魂也该散了。"她闭上眼，"可我不知道，他还在不在。"`,
        choices: [createDialogueChoice({
          text: '我会帮你找他的痕迹',
          exit: true,
          effects: {
            npcAffinity: 10,
            setFlag: 'yunxiuSearchZhouSheng'
          }
        })]
      }),
      yunxiu_payment: createDialogueNode('yunxiu_payment', {
        text: `"活人总是贪。"她的戏服无风自动，"你要什么？我的银钗？我的戏服？还是我的命？"`,
        choices: [createDialogueChoice({
          text: '你的银钗',
          next: 'yunxiu_give_hairpin',
          condition: {
            lacksItem: '云袖的银钗'
          }
        }), createDialogueChoice({
          text: '我开玩笑的',
          exit: true,
          effects: {
            npcAffinity: -5
          }
        })]
      }),
      yunxiu_give_hairpin: createDialogueNode('yunxiu_give_hairpin', {
        text: `云袖取下鬓边的银钗，轻轻放在你掌心。钗身冰凉，刻着她的名字。"拿去吧。但你要记住，拿了戏子的钗，就要听戏子的话。"`,
        choices: [createDialogueChoice({
          text: '收下',
          exit: true,
          effects: {
            addItem: '云袖的银钗',
            npcAffinity: -5,
            yin: 5
          }
        })]
      }),
      ...yunxiuMoreDialogue
    }
  })
};