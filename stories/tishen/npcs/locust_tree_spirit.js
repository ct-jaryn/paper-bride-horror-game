import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《tishen》NPC：槐婆婆（槐树灵）
 */

export const locust_tree_spirit = createNPC('locust_tree_spirit', {
  name: '槐婆婆',
  title: '槐树灵',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你听见槐树深处传来一声轻叹。回头一看，树洞里坐着一个白发老妇，正用枯枝般的手指梳理着垂下来的槐花枝。`,
      choices: [createDialogueChoice({
        text: '问她是谁',
        next: 'who_are_you'
      }), createDialogueChoice({
        text: '问她知不知道纸人的事',
        next: 'ask_doll'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    who_are_you: createDialogueNode('who_are_you', {
      text: `"我？"老妇笑了，脸上的皱纹像树皮一样舒展开，"我在这棵槐树下住了快一百年。你小时候还在我身上爬过呢，只是你不记得了。你爸扎纸人的时候，在我树下烧过三炷香，求我护着那纸人别散了形。`,
      choices: [createDialogueChoice({
        text: '问她为什么护着纸人',
        next: 'ask_doll'
      }), createDialogueChoice({
        text: '问她纸人有没有魂',
        next: 'ask_soul'
      })]
    }),
    ask_doll: createDialogueNode('ask_doll', {
      text: `槐婆婆望向红布盖着的纸人，眼神复杂。"它啊……我看着他一天天'长大'。起初只是竹篾和黄纸，后来有了眉眼，有了声音，有了……想法。你不在的这五年，它每天晚上都对着你的窗户说话，练习怎么叫你爸妈。`,
      choices: [createDialogueChoice({
        text: '问它想说什么',
        next: 'ask_soul'
      }), createDialogueChoice({
        text: '问怎么才能让它走',
        next: 'ask_name'
      }), createDialogueChoice({
        text: '你求她给你一片护身的槐树叶',
        effects: { npcAffinity: 5 },
        next: 'give_leaf'
      })]
    }),
    ask_soul: createDialogueNode('ask_soul', {
      text: `"魂？"槐婆婆沉默了很久，"它身体里确实装着什么东西。但那不是你的魂——你的魂还在你身上。那是一缕被周家纸扎铺子封进来的孤魂，借了你的手、你的脸、你的八字，来这人间走一遭。它想被看见，不是被当成'你'，是被当成'它自己'。`,
      choices: [createDialogueChoice({
        text: '问她该起什么名字',
        next: 'ask_name'
      }), createDialogueChoice({
        text: '谢谢她，离开',
        effects: { npcAffinity: 10 },
        exit: true
      })]
    }),
    ask_name: createDialogueNode('ask_name', {
      text: `"名字不能和你有关。"槐婆婆说，"你若叫它'周安'，它只会更像你。你若叫它'纸生'，它就有了自己的根。名字是魂的锚，锚定了，它才知道自己不是谁的影子。给它一个名字，它也许就愿意走了。`,
      effects: { setFlag: 'locustNameHint', sanity: 5 },
      choices: [createDialogueChoice({
        text: '问她要一片槐树叶护身',
        effects: { npcAffinity: 5 },
        next: 'give_leaf'
      }), createDialogueChoice({
        text: '记下她的话，离开',
        exit: true
      })]
    }),
    give_leaf: createDialogueNode('give_leaf', {
      text: `槐婆婆从枝头摘下一枚叶子，叶脉在月光下泛着淡淡的金光。"拿着吧。槐树属阴，但能护住人的'名'。只要你还记得自己是谁，它就不能完全变成你。`,
      effects: { addItem: '槐树叶', sanity: 5 },
      choices: [createDialogueChoice({
        text: '收下槐树叶，告别',
        exit: true
      })]
    })
  }
});
