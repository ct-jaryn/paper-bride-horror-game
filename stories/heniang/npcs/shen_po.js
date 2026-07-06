import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：神婆（河婆）
 */

export const shen_po = createNPC('shen_po', {
  name: '神婆',
  title: '河婆',
  dialogue: {
    start: createDialogueNode('start', {
      text: `神婆用剩下的那只眼睛盯着你，忽然咧嘴笑了。

"你身上有阴气。你妈在找你，秀姑也在找你。你打算怎么办？"`,
      choices: [createDialogueChoice({
        text: '怎么救我妈？',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '第一个河娘是谁？',
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '再给我点东西防身',
        next: 'give_charm'
      }), createDialogueChoice({
        text: '先告辞',
        exit: true
      })]
    }),
    ask_ritual: createDialogueNode('ask_ritual', {
      text: `"想救你妈，路有三条。"神婆竖起三根枯瘦的手指，"一条是骗秀姑替你妈；一条是正了这条河的源头；最难得的路，是有人肯渡她们。"`,
      choices: [createDialogueChoice({
        text: '渡她们是什么意思？',
        next: 'ask_ferryman_path'
      }), createDialogueChoice({
        text: '源头怎么正？',
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '教我一首河娘爱听的歌',
        next: 'teach_song'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_first_heniang: createDialogueNode('ask_first_heniang', {
      text: `"第一个河娘？三百年前沉塘的沈氏。"神婆的声音像从井底传来，"她的怨气是根。根不除，河娘不断。"

"你要是想正名，就去她碑前说一句：她没错。"`,
      choices: [createDialogueChoice({
        text: '沈氏后人呢？',
        next: 'ask_descendants'
      }), createDialogueChoice({
        text: '教我唱歌',
        next: 'teach_song'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_descendants: createDialogueNode('ask_descendants', {
      text: `"后人？村里还有姓沈的。"神婆冷笑，"可他们肯不肯替祖宗认罪，那就是另一回事了。"

"你要是真想走这条路，得先让他们相信，河里还在闹，是因为他们欠了债。"`,
      choices: [createDialogueChoice({
        text: '怎么让他们相信？',
        effects: { setFlag: 'knowsShenDescendants' },
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_ferryman_path: createDialogueNode('ask_ferryman_path', {
      text: `"超度、正名、道歉，都是活人的规矩。"神婆眯起眼，"河娘要的不是规矩，是有人把她们从这边，送到那边。"

"你要是心里够硬，也够软，就去做那个撑船的人。"`,
      choices: [createDialogueChoice({
        text: '撑船需要什么？',
        effects: { setFlag: 'knowsFerrymanPath' },
        next: 'give_charm'
      }), createDialogueChoice({
        text: '我做不到',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    teach_song: createDialogueNode('teach_song', {
      text: `神婆清了清嗓子，哼了一段婉转的调子：

[whisper]"月亮出来亮汪汪，亮汪汪，想起我的阿妹在深山……"[/whisper]

"这是《小河淌水》。七月半唱给秀姑听，她兴许会松口。"`,
      choices: [createDialogueChoice({
        text: '记住这支歌',
        effects: { npcAffinity: 10, setFlag: 'knowsRiverSong' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_charm: createDialogueNode('give_charm', {
      text: `神婆从袖中摸出一道折成三角的黄符，符上朱砂已经有些发暗。

"这道符不伤人，只护身。带着它，河娘拉你的时候，你能多挣一口气。"`,
      choices: [createDialogueChoice({
        text: '收下护身符',
        effects: { npcAffinity: 10, addItem: '河婆护身符' },
        next: 'start'
      }), createDialogueChoice({
        text: '不要了',
        exit: true
      })]
    })
  }
});
