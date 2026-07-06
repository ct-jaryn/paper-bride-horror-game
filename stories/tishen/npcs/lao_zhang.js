import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《tishen》NPC：老张（守夜人）
 */

export const lao_zhang = createNPC('lao_zhang', {
  name: '老张',
  title: '守夜人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你正和母亲说话，院门外传来一声咳嗽。一个提着灯笼的老人站在门槛边，朝你点点头。他的灯笼在风里晃了晃，火光映出他脸上深深的皱纹。`,
      choices: [createDialogueChoice({
        text: '问他是不是见过纸人动',
        next: 'ask_paper'
      }), createDialogueChoice({
        text: '给他递一支烟，谢谢他守夜',
        effects: { npcAffinity: 10 },
        next: 'ask_paper'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_paper: createDialogueNode('ask_paper', {
      text: `老张压低灯笼，脸色在火光中忽明忽暗。"见过。你不在的这五年，每逢大雾天，我就瞅见院子里站着个穿校服的人影，脸朝着你家窗户。你爸不让我告诉你，说那是给你挡灾的替身。去年冬天，你爸本来病得快不行了，忽然就好了。从那以后，那纸人身上多了一块焦痕，像是被雷劈过。`,
      choices: [createDialogueChoice({
        text: '问他纸人里是不是住着别的魂',
        next: 'ask_soul'
      }), createDialogueChoice({
        text: '问他替身有什么讲究',
        next: 'ask_ritual'
      })]
    }),
    ask_soul: createDialogueNode('ask_soul', {
      text: `"魂？"老张从怀里掏出一块碎铜镜，"我祖上是走阴差的，留过一块照魂镜。你要是不怕，拿去看看那纸人。若镜子里映出的不是你的脸，那就说明……它身体里头，住着别的东西。`,
      condition: { lacksItem: '铜镜碎片' },
      effects: { addItem: '铜镜碎片', npcAffinity: 15 },
      choices: [createDialogueChoice({
        text: '收下铜镜碎片',
        next: 'ask_ritual'
      })]
    }),
    ask_ritual: createDialogueNode('ask_ritual', {
      text: `"纸扎替身最怕两样东西。"老张说，"一是火，二是名。烧了它，连着替你受过的灾会一并还给你；给了它名，它就有了自己的去处，不再缠着你。你选哪条路，得看你想怎么活。`,
      choices: [createDialogueChoice({
        text: '问他有没有第三条路',
        next: 'ask_third'
      }), createDialogueChoice({
        text: '谢谢他，告别',
        effects: { npcAffinity: 5 },
        exit: true
      })]
    }),
    ask_third: createDialogueNode('ask_third', {
      text: `老张想了想，说："有。带它走。你爸的咒把它困在院子里，你只要抱它走出院门，它就自由了。但它愿不愿意跟你走，得看它信不信任你。`,
      effects: { setFlag: 'laoZhangThirdWay' },
      choices: [createDialogueChoice({
        text: '告别',
        exit: true
      })]
    })
  }
});
