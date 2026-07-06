import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《tishen》NPC：周老（纸扎匠）
 */

export const zhou_lao = createNPC('zhou_lao', {
  name: '周老',
  title: '纸扎匠',
  dialogue: {
    start: createDialogueNode('start', {
      text: `瞎了一只眼的老人坐在门槛上扎纸马，竹篾在他指间翻飞。他头也不抬："你身上沾着我周家纸扎的味道。那替身，养出魂来了吧？`,
      choices: [createDialogueChoice({
        text: '问他怎么知道',
        next: 'ask_seal'
      }), createDialogueChoice({
        text: '求他救人',
        next: 'ask_free'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_seal: createDialogueNode('ask_seal', {
      text: `"纸人后背上那方印章，是我年轻时候盖的。"周老停下活计，用那只完好的眼睛看着你，"你爸当年求我扎一个替身，替儿子挡病。我给了他纸人，也告诉他：替身只能用三年，三年后必须烧掉。他舍不得。那纸人越来越像你，你爸就越来越信它能替你活。人呐，最怕的不是鬼，是盼头。`,
      effects: { sanity: -5 },
      choices: [createDialogueChoice({
        text: '问他纸人里的魂从哪来',
        next: 'ask_soul'
      }), createDialogueChoice({
        text: '问他怎么救父亲',
        next: 'ask_free'
      })]
    }),
    ask_soul: createDialogueNode('ask_soul', {
      text: `"魂？"周老冷笑一声，"我周家做替身，从不拘魂。那魂是自己钻进纸壳里的。多半是附近哪个横死的孤魂野鬼，闻着人气儿，想借纸人的身体再活一回。它不一定想害你，但它想活，就一定会抢你的位置。烧了纸壳，魂没处去，会缠上烧它的人。你爸试过烧，不是没烧成吗？不是烧不着，是那魂不愿意走。`,
      choices: [createDialogueChoice({
        text: '问怎么让它自愿离开',
        next: 'ask_free'
      })]
    }),
    ask_free: createDialogueNode('ask_free', {
      text: `"两个法子。"周老竖起两根手指，"一是认主，你给它起个名字，喂它一滴血，它认你为主，你让它走它就得走。二是放生，带它离开这个院子，让它自己选去处。但这两个法子，都得它心甘情愿。强来的，会反噬。`,
      effects: { setFlag: 'zhouMasterHint' },
      choices: [createDialogueChoice({
        text: '问他需要准备什么',
        next: 'ask_price'
      }), createDialogueChoice({
        text: '告别',
        exit: true
      })]
    }),
    ask_price: createDialogueNode('ask_price', {
      text: `周老从柜台下取出一张黄符，推到你面前。"这是引路符，烧了它，纸人就知道该往哪走。但你得想清楚——符用出去，伤的是纸人，也是你爸的心血。代价你自己付。`,
      condition: { lacksItem: '周家引路符' },
      effects: { addItem: '周家引路符', npcAffinity: 10 },
      choices: [createDialogueChoice({
        text: '收下引路符',
        exit: true
      })]
    })
  }
});
