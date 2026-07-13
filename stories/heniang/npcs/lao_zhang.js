import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：老张（守夜人）
 */

export const lao_zhang = createNPC('lao_zhang', {
  name: '老张',
  title: '守夜人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `河边站着个佝偻老头，手里提着一盏昏黄的马灯。他看见你，把灯举高了些。

"小子，夜里别靠河太近。这河吃人，不是一天两天了。"`,
      choices: [createDialogueChoice({
        text: '你守这条河多久了？',
        next: 'ask_duty'
      }), createDialogueChoice({
        text: '你见过河娘吗？',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '你见过我妈吗？',
        next: 'ask_mother'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_duty: createDialogueNode('ask_duty', {
      text: `"三十年喽。"老张叹了口气，"以前守河，是怕人失足。现在守河，是怕人自己往下跳。"`,
      choices: [createDialogueChoice({
        text: '河娘到底是什么？',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '给我点防身的东西',
        next: 'give_lantern'
      }), createDialogueChoice({
        text: '先走一步',
        exit: true
      })]
    }),
    ask_river: createDialogueNode('ask_river', {
      text: `"穿红衣裳的女人，半夜站在水边唱歌。"老张压低声音，"你要是听见有人叫你名字，千万别答应。答应了，魂就被勾走了。"`,
      choices: [createDialogueChoice({
        text: '那怎么脱身？',
        next: 'warn_ferryman'
      }), createDialogueChoice({
        text: '给我一盏河灯',
        next: 'give_lantern'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_mother: createDialogueNode('ask_mother', {
      text: `老张沉默了一会儿，点点头："上礼拜我还看见你娘在河边发呆。她……是在等什么人吧。"

他顿了顿："你娘是个好人，别让她害了你们。"`,
      choices: [createDialogueChoice({
        text: '她在等谁？',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '谢谢你告诉我',
        effects: { npcAffinity: 10, setFlag: 'laoZhangSawMother' },
        next: 'ask_duty'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_lantern: createDialogueNode('give_lantern', {
      text: `老张从怀里摸出一盏纸糊的小河灯，灯芯浸过桐油。

"拿着。要是被河娘缠住，点上它，她们会以为你是来送行的，不会拉你下水。"他郑重地说，"记住，只能点一次。"`,
      choices: [createDialogueChoice({
        text: '收下河灯',
        effects: { npcAffinity: 15, addItem: '守夜人的河灯' },
        next: 'lantern_given'
      }), createDialogueChoice({
        text: '不用了',
        exit: true
      })]
    }),
    lantern_given: createDialogueNode('lantern_given', {
      text: `"灯灭了，你就得自己游回来。"老张把马灯转了个方向，"子时以后，这条河不归活人管。你心里有数。"`,
      choices: [createDialogueChoice({
        text: '子时会发生什么？',
        next: 'warn_ferryman'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    warn_ferryman: createDialogueNode('warn_ferryman', {
      text: `"子时过后，河上会有条船。"老张的眼神变得飘忽，"那船夫没有脸，只有一团水雾。上了船，就别想下来。"

"除非，"他补了一句，"你舍得用一个名字当船钱。"`,
      choices: [createDialogueChoice({
        text: '用名字当船钱？',
        effects: { setFlag: 'knowsFerrymanWarning' },
        next: 'ask_river'
      }), createDialogueChoice({
        text: '走了，多谢',
        exit: true
      })]
    })
  }
});
