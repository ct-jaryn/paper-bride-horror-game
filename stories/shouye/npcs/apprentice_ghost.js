import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：apprentice_ghost
 */

export const NPCs = {
  apprentice_ghost: createNPC('apprentice_ghost', {
    name: '纸扎学徒',
    title: '五号厅守册人',
    dialogue: {
      start: createDialogueNode('start', {
        text: `你对着五号厅灵床底下轻声说："我能跟你聊聊吗？"

翻书声停了。过了一会儿，一个怯生生的年轻声音响起：

"您……您又来了？我以为您只是路过。"`,
        choices: [createDialogueChoice({
          text: '你叫什么名字？',
          next: 'app_name'
        }), createDialogueChoice({
          text: '你师父是个什么样的人？',
          next: 'app_master'
        }), createDialogueChoice({
          text: '你知道七号厅的云袖吗？',
          next: 'app_yunxiu'
        }), createDialogueChoice({
          text: '你该走了',
          next: 'app_leave',
          condition: {
            flag: 'yunxiuKnowsTruth'
          }
        }), createDialogueChoice({
          text: '告辞',
          exit: true
        })]
      }),
      app_name: createDialogueNode('app_name', {
        text: `"我？"声音沉默了一会儿，"我叫……我想不起来了。师父叫我'小扎'，因为我年纪小，专门帮他扎纸花的花瓣。

"我大概是十二三岁来的铺子。家里穷，爹妈把我送给师父学手艺。师父人好，不打我，还管饭。"

"后来师父走了，铺子就剩我一个人。殡仪馆的老馆长可怜我，让我住这儿，帮师父守着那些册子。"`,
        choices: [createDialogueChoice({
          text: '你师父是什么样的人？',
          next: 'app_master'
        }), createDialogueChoice({
          text: '你知道云袖吗？',
          next: 'app_yunxiu'
        }), createDialogueChoice({
          text: '我帮你记起名字',
          exit: true,
          effects: {
            npcAffinity: 10
          }
        })]
      }),
      app_master: createDialogueNode('app_master', {
        text: `"师父啊……"学徒的声音温柔起来，"师父是全青石镇手艺最好的纸扎匠。他扎的纸人，眉眼跟活的一样。

"可师父心里只有一个人。就是云袖姑娘。师父给她扎花，扎了好多好多年。

"云袖姑娘出事那天，师父疯了一样冲进火里。后来云袖姑娘不见了，师父就变了个人。他白天扎纸，夜里去河边，一站就是一宿。

"有一天，师父把我叫到跟前，说：'小扎，铺子交给你了。云袖姑娘的东西都在殡仪馆地下室，你帮我守着。我去找她了。'

"然后师父就再也没回来。"`,
        choices: [createDialogueChoice({
          text: '他去找云袖了，在青石河里',
          next: 'app_master_river',
          condition: {
            flag: 'foundZhouShengDiary'
          }
        }), createDialogueChoice({
          text: '你知道云袖吗？',
          next: 'app_yunxiu'
        }), createDialogueChoice({
          text: '告辞',
          exit: true,
          effects: {
            npcAffinity: 5
          }
        })]
      }),
      app_master_river: createDialogueNode('app_master_river', {
        text: `"在河里……"学徒的声音颤抖，"师父他……跳进了河里？"

床底下沉默了很久。

"那他现在，和师娘在一起了吗？"学徒小心翼翼地问。

"师娘知道了真相。"你说，"她不怨师父了。她想去找他。"

"那……"学徒的声音带上了哭腔，"那我是不是也可以走了？我守了这么多年，就是想等师娘不怨师父的那一天……"`,
        choices: [createDialogueChoice({
          text: '你可以走了，我带你去见师娘',
          next: 'app_leave',
          effects: {
            npcAffinity: 15
          }
        }), createDialogueChoice({
          text: '再等等',
          exit: true
        })]
      }),
      app_yunxiu: createDialogueNode('app_yunxiu', {
        text: `"师娘？"学徒的声音里带着敬畏，"我从来没见过师娘。师父不让我见。

"可我知道师父给她扎了好多东西。有一口棺材——不对，是一座戏台。师父说那不是棺材，是师娘的戏台。

"还有头面、曲谱、铜镜……师父都存在殡仪馆的地下室了。他说，等有缘人来，就把这些东西都给师娘送去。"

"我一直在等那个有缘人。"学徒轻声说，"等了好多好多年。也许，就是您？"`,
        choices: [createDialogueChoice({
          text: '我就是那个有缘人',
          exit: true,
          effects: {
            npcAffinity: 20,
            setFlag: 'apprenticeTrust',
            sanity: 5
          }
        }), createDialogueChoice({
          text: '我只是路过',
          exit: true
        })]
      }),
      app_leave: createDialogueNode('app_leave', {
        text: `学徒沉默了很久。

"好。"他终于说，声音轻得像风，"那……您替我跟师娘说一声。师父没有负她。师父这辈子，只喜欢过她一个人。"

"还有，我跟师父说一声。师父，小扎守完了。可以歇了。"

床底下，那摞登记册最后一次滑出来，整整齐齐停在你脚边。

然后，翻书声彻底消失了。

五号厅恢复了真正的空寂——是那种亡者已得安息的、干净的空寂。`,
        choices: [createDialogueChoice({
          text: '默哀片刻',
          exit: true,
          effects: {
            npcAffinity: 30,
            sanity: 15,
            yin: -15,
            setFlag: 'apprenticeReleased',
            clearFlag: 'apprenticeWantsToLeave'
          }
        })]
      })
    }
  })
};