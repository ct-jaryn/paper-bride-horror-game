import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《ganshi》NPC 对话：秀兰
 */

export const xiulan_ghost = createNPC('xiulan_ghost', {
  name: '秀兰',
  title: '纸新娘的残魂',
  dialogue: {
    start: createDialogueNode('start', {
      text: `雨夜里，路边的红影不是灯笼，是一个穿嫁衣的女子。她的身体半透明，雨水穿过她落在泥里。

"田家的后生……"她看着你身后的三具尸体，"那具女尸，和我当年一样。"`,
      choices: [createDialogueChoice({
        text: '你是谁？',
        next: 'who_are_you'
      }), createDialogueChoice({
        text: '你也是冥婚新娘？',
        next: 'same_fate'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    who_are_you: createDialogueNode('who_are_you', {
      text: `"我叫秀兰。"她说，"青石镇人，被周家活埋配了冥婚。后来有人替我正了名，我才没有化作厉鬼。"\n\n她看向女尸盖着的白布："可这世上还有多少柳红，没等到那个人。"`,
      choices: [createDialogueChoice({
        text: '柳红是谁？',
        next: 'about_liuhong'
      }), createDialogueChoice({
        text: '怎样才能救她？',
        next: 'mercy_teach'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    same_fate: createDialogueNode('same_fate', {
      text: `"是。"秀兰苦笑，"周家喜服从纸扎铺来，红绳一系，黄土一埋，一个姑娘就成了'新娘'。"\n\n"我认得那嫁衣内衬的朱印——'青石镇 周氏纸扎铺'。三十年了，他们还在用同一套把戏。"`,
      choices: [createDialogueChoice({
        text: '怎样才能救她？',
        next: 'mercy_teach'
      }), createDialogueChoice({
        text: '你见过这个周家？',
        next: 'zhou_warning'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    about_liuhong: createDialogueNode('about_liuhong', {
      text: `"白布下那具女尸，就叫柳红。"秀兰说，"她在花轿里被迷晕，醒来时已经在棺材里。她和你一样，不甘心。"\n\n"你若把她当周家人，她就真是鬼了。你若把她当人……她也许还能有公道。"`,
      choices: [createDialogueChoice({
        text: '我答应替她讨公道',
        next: 'mercy_gift',
        condition: {
          noFlag: 'xiulanMercy'
        }
      }), createDialogueChoice({
        text: '（已经铭记于心）',
        next: 'mercy_teach',
        condition: {
          flag: 'xiulanMercy'
        }
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    mercy_teach: createDialogueNode('mercy_teach', {
      text: `"别把她送回周家，也别让她自己报仇。"秀兰说，"带她到县衙，让阳间的人给她正名。她的名字要写在案卷上，而不是周家的族谱里。"\n\n"这叫'恕'。不是饶过周家，是饶过自己。"`,
      choices: [createDialogueChoice({
        text: '我答应替她讨公道',
        next: 'mercy_gift',
        condition: {
          noFlag: 'xiulanMercy'
        }
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    mercy_gift: createDialogueNode('mercy_gift', {
      text: `秀兰伸出手，在你额前轻轻一点。你没有感觉到触碰，却忽然清醒了许多。\n\n"去吧。"她说，"记住，公道比报仇难，也比报仇长。"\n\n她的身影淡入雨中，像一纸湿透的嫁衣。`,
      effects: {
        setFlag: 'xiulanMercy',
        npcAffinity: 30,
        sanity: 5,
        yin: -5
      },
      choices: [createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    }),
    zhou_warning: createDialogueNode('zhou_warning', {
      text: `"周家祖上害过狐，也害过人。"秀兰说，"狐女报恩，周家造孽，这笔账缠了三代。你若要去青石镇，别只看冥婚，也看看周家祠堂里的狐仙牌位。"\n\n"那牌位后头，藏着周家最怕让人知道的事。"`,
      choices: [createDialogueChoice({
        text: '怎样才能救她？',
        next: 'mercy_teach'
      }), createDialogueChoice({
        text: '（离开）',
        exit: true
      })]
    })
  }
});
export const NPCs = {
  xiulan_ghost
};