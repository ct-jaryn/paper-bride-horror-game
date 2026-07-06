import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《hujia》NPC：胡郎中
 */

export const hu_langzhong = createNPC('hu_langzhong', {
  name: '胡郎中',
  title: '游方郎中',
  dialogue: {
    start: createDialogueNode('start', {
      text: `一个背着药箱的中年男子路过你家门口，停下来揉了揉鼻子。"年轻人，你屋里煞气重啊。"他自我介绍说姓胡，是个走村串镇的郎中，"我闻得出，是狐妖的味儿。需要帮忙吗？"`,
      choices: [createDialogueChoice({
        text: '问他心头血的事',
        next: 'heart_blood'
      }), createDialogueChoice({
        text: '问他有没有安神的药',
        next: 'calm_herb'
      }), createDialogueChoice({
        text: '问他被狐妖迷了怎么办',
        next: 'fox_charm'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    heart_blood: createDialogueNode('heart_blood', {
      text: `"舌尖血、心头血，都是人的精气神。"胡郎中皱眉，"给了狐妖，少则折寿十年，多则当场昏死。不过……你若真要给，也别给舌尖，给中指血。中指通心，却不如心头血伤本。"`,
      effects: {
        npcAffinity: 5
      },
      choices: [createDialogueChoice({
        text: '问他有没有替代之法',
        next: 'blood_alt'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    calm_herb: createDialogueNode('calm_herb', {
      text: `胡郎中从药箱里取出一个小布包："这是安魂草，晒干的。夜里焚一点，能保持清醒。狐妖最喜趁人神志不清时下套，你理智些，她骗不了你。"他把布包递给你。`,
      effects: {
        npcAffinity: 5,
        addItem: '安魂草'
      },
      choices: [createDialogueChoice({
        text: '收下',
        exit: true
      })]
    }),
    fox_charm: createDialogueNode('fox_charm', {
      text: `"被狐妖迷了，先别慌。"胡郎中说，"狐妖惑人，靠的是你心里的念想。你若不贪长生、不贪美色、不贪恋富贵，她的术就弱了一半。剩下的一半，靠疼痛和清醒。"他递给你一根银针，"扎自己中指，疼醒自己。"`,
      effects: {
        npcAffinity: 5,
        addItem: '醒神银针'
      },
      choices: [createDialogueChoice({
        text: '收下',
        exit: true
      })]
    }),
    blood_alt: createDialogueNode('blood_alt', {
      text: `"替代之法？"胡郎中想了想，"狐妖要血，其实是借你的生气渡劫。你若肯给她一件贴身戴了多年的旧物，里面也浸着你的气，虽不如血，却能少伤你些。不过……这件旧物给了，可就再也要不回来了。"`,
      choices: [createDialogueChoice({
        text: '记下了',
        exit: true
      })]
    })
  }
});
export const NPCs = {
  hu_langzhong
};