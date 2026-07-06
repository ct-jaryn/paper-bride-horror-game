import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《ganshi》NPC 对话：老张
 */

export const zhang_guard = createNPC('zhang_guard', {
  name: '老张',
  title: '守夜人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `洞口蹲着一个抽旱烟的老人，烟锅一明一灭。他抬头看了你一眼，又看了看你身后的三具尸体。\n\n"赶尸的，这洞三十年前死过一个道人。你师父姓田吧？"`,
      choices: [createDialogueChoice({
        text: '你认识我师父？',
        next: 'ask_master'
      }), createDialogueChoice({
        text: '这洞有什么讲究？',
        next: 'ask_curse'
      }), createDialogueChoice({
        text: '这三具尸体有冤？',
        next: 'ask_corpses'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    ask_master: createDialogueNode('ask_master', {
      text: `"不认识。"老张磕了磕烟锅，"但我守了三十年夜，见过你师父从这洞里出来。他出来时少了半条命，从此再也不走这条路。"\n\n"洞里那位，是田家的债主。"`,
      choices: [createDialogueChoice({
        text: '怎样才能过去？',
        next: 'ask_curse'
      }), createDialogueChoice({
        text: '这三具尸体有冤？',
        next: 'ask_corpses'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    ask_curse: createDialogueNode('ask_curse', {
      text: `"石壁上刻着字，是那位道人用血写的。"老张说，"田家背信弃义，害他全家。他等了三十年，等一个田家后人偿命。"\n\n"但你若肯替田家还债，也许不必偿命。"`,
      choices: [createDialogueChoice({
        text: '怎么还债？',
        next: 'ask_atone'
      }), createDialogueChoice({
        text: '这三具尸体有冤？',
        next: 'ask_corpses'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    ask_corpses: createDialogueNode('ask_corpses', {
      text: `"账房先生发现了赈灾银的猫腻，青年是周家赌坊的债主，柳红——就是那具女尸——是周家少爷的冥婚新娘。"老张压低声音，"县太爷、县丞、周老爷，三方都想让他们死在半道。"`,
      choices: [createDialogueChoice({
        text: '我该怎么做？',
        next: 'ask_justice'
      }), createDialogueChoice({
        text: '这洞有什么讲究？',
        next: 'ask_curse'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    ask_atone: createDialogueNode('ask_atone', {
      text: `"欠债还情，欠命还义。"老张说，"你师父当年把人家的尸体扔给野狗，你若护住这三具尸体，便是替他还义。"\n\n"答应它们，送它们回家，替它们申冤。这比磕头烧纸都管用。"`,
      choices: [createDialogueChoice({
        text: '我答应替它们讨公道',
        next: 'justice_gift',
        condition: {
          noFlag: 'promisedJustice'
        }
      }), createDialogueChoice({
        text: '我已经答应过了',
        next: 'justice_known',
        condition: {
          flag: 'promisedJustice'
        }
      }), createDialogueChoice({
        text: '我只管赶尸，不管申冤',
        next: 'zhang_sigh',
        effects: {
          npcAffinity: -10
        }
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    ask_justice: createDialogueNode('ask_justice', {
      text: `"它们不是要害人，是要人记住。"老张说，"你若能答应送它们回家、替它们申冤，它们就不会害你。这笔账，比周家的银子重。"`,
      choices: [createDialogueChoice({
        text: '我答应替它们讨公道',
        next: 'justice_gift',
        condition: {
          noFlag: 'promisedJustice'
        }
      }), createDialogueChoice({
        text: '我已经答应过了',
        next: 'justice_known',
        condition: {
          flag: 'promisedJustice'
        }
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    justice_gift: createDialogueNode('justice_gift', {
      text: `老张点点头，从怀里掏出一张用老朱砂画的黄符递给你。\n\n"贴在最不老实那具尸体的额头上。记住，这不是镇它们，是替它们守门。"\n\n他往火堆里撒了一把糯米，火星噼啪作响。`,
      effects: {
        setFlag: 'promisedJustice',
        addItem: '老朱砂符',
        npcAffinity: 25,
        sanity: 5,
        yin: -5
      },
      choices: [createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    justice_known: createDialogueNode('justice_known', {
      text: `"那就好。"老张笑了笑，"田家有后，赶尸匠也有良心。你师父当年若有你一半担当，也不至于欠下这笔债。"`,
      effects: {
        npcAffinity: 5
      },
      choices: [createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    zhang_sigh: createDialogueNode('zhang_sigh', {
      text: `老张叹口气，把烟锅在石头上磕灭。\n\n"那你就自求多福吧。这三具尸体的债，你不替它们讨，它们就会自己讨。到时候，你就是第四具。"`,
      choices: [createDialogueChoice({
        text: '我答应替它们讨公道',
        next: 'justice_gift',
        condition: {
          noFlag: 'promisedJustice'
        }
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    })
  }
});
export const NPCs = {
  zhang_guard
};