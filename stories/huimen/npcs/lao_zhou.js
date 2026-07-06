import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《huimen》NPC：老周（山庙守庙人）
 */

export const lao_zhou = createNPC('lao_zhou', {
  name: '老周',
  title: '山庙守庙人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `庙门后的阴影里，坐着一个枯瘦的老人。他盘腿坐在蒲团上，手里捻着一串褪色的木念珠，膝上横着一本翻烂了的经卷。木鱼搁在他手边，槌子已经磨得发亮，可他没在敲——他只是坐着，眼睛半睁半闭，像是睡着了，又像是在听什么。\n\n你走近时，他睁开眼。那双眼睛浑浊得像井水，可你看进去的时候，觉得自己像是被什么东西认出来了。\n\n"你回来了。" 他说，嗓子干得像砂纸，"我以为你不会再回来。三十年了，你比那时候瘦了。"`,
      choices: [createDialogueChoice({
        text: '你认得我？',
        next: 'ask_recognize'
      }), createDialogueChoice({
        text: '这庙是镇什么的？',
        next: 'ask_temple'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_recognize: createDialogueNode('ask_recognize', {
      text: `"认得。" 老人点点头，念珠在他手里转了一圈，"你小时候来过这儿。你祖母带你来的，让你在庙门口磕了三个头。那时候你才这么高——"他比了比膝盖的位置，"你祖母说，这庙里有你一个'亲'，让你别怕，她只是想看看你。"\n\n他抬眼看你："你祖母没告诉你？"\n\n你心里一沉。你祖母从未提过这座庙，也从未带你来过——至少在你的记忆里没有。可老人的眼神不像在撒谎，他看你的样子，倒真像是看着一个三十年没见的熟人。`,
      effects: { npcAffinity: 5 },
      choices: [createDialogueChoice({
        text: '那个"亲"是谁？',
        next: 'ask_relation'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_temple: createDialogueNode('ask_temple', {
      text: `老人沉默了一会儿，敲了一下木鱼。"咚"的一声，在空庙里回响了好久。\n\n"这庙不是供神的。"他说，"是镇魂的。三十年前，这村里有个姑娘，死得冤。她家里人不让她入祖坟，说她'不洁'，就把她埋在庙底下。我守了三十年，就是怕她出来。"\n\n他看了你一眼："你祖母是她的什么人，你该比我清楚。我只知道，她埋下去那天，井里的水红了三天。"\n\n你又想起庙门口那块刻着"秀兰埋骨之处"的石板。`,
      effects: { npcAffinity: 5, setFlag: 'huimen_exp_laozhou_temple_secret' },
      choices: [createDialogueChoice({
        text: '她还能出来吗？',
        next: 'ask_danger'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_relation: createDialogueNode('ask_relation', {
      text: `老人摇摇头，念珠在他手里停了。\n\n"我不该说。"他说，"你祖母不让我说。她只让我告诉你一句话——'该还的，迟早要还。你跑不了的。'"\n\n他重新闭上眼，像是刚才那段话耗尽了他的力气。你再问，他只是敲木鱼，一下一下，不接你的话。\n\n木鱼声里，你隐约听见庙底下有什么东西，也在跟着敲。一下一下，和老人的木鱼一个节奏。`,
      effects: { npcAffinity: 10, setFlag: 'huimen_exp_laozhou_relation_hint' },
      choices: [createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_danger: createDialogueNode('ask_danger', {
      text: `"能出来吗？" 老人苦笑了一下，"她早就出来了。只是她还困在'那一天'里，出不来。你看见井里的红轿子了吗？那是她的喜轿。她一直在等她的新郎来接她。"\n\n他顿了顿："你要是听见了井里有人叫你'夫君'，别答应。一答应，你就走不了了。"\n\n"我能帮你的，"他从蒲团底下摸出一小包东西，搁在你面前，"就这点儿艾草。井边待久了，阴气重，把这草点着，熏一熏，能挡一时。挡不了一世。"\n\n你接过艾草。草是干的，闻着有一股苦味。`,
      effects: { npcAffinity: 10, addItem: '艾草束' },
      choices: [createDialogueChoice({
        text: '收下艾草',
        next: 'start'
      })]
    })
  }
});
