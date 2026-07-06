import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：lin_shu
 */

export const NPCs = {
  lin_shu: createNPC('lin_shu', {
    name: '林叔',
    title: '老守夜人',
    dialogue: {
      start: createDialogueNode('start', {
        text: `电话响了三声才接通。林叔的声音带着睡意："周遥？这才几点。七号厅……那位醒了？"`,
        choices: [createDialogueChoice({
          text: '她是谁？',
          next: 'lin_yunxiu'
        }), createDialogueChoice({
          text: '守夜有什么规矩？',
          next: 'lin_rules'
        }), createDialogueChoice({
          text: '我能换班吗？',
          next: 'lin_switch',
          effects: {
            npcAffinity: -10
          }
        }), createDialogueChoice({
          text: '没事，挂了吧',
          exit: true
        })]
      }),
      lin_yunxiu: createDialogueNode('lin_yunxiu', {
        text: `林叔沉默片刻："她叫云袖，民国二十三年春香班的旦角。死在青石镇戏台一场大火里。后来有人把她从河里捞出来，送到这儿。她啊，不是想害人，是想唱完那出《牡丹亭》。"`,
        choices: [createDialogueChoice({
          text: '谁把她移到河里的？',
          next: 'lin_zhou_sheng'
        }), createDialogueChoice({
          text: '该怎么对她？',
          next: 'lin_rules'
        }), createDialogueChoice({
          text: '谢谢林叔',
          exit: true,
          effects: {
            npcAffinity: 5
          }
        })]
      }),
      lin_rules: createDialogueNode('lin_rules', {
        text: `林叔压低声音："三条规矩记牢：子时后莫开大灯；进门先敲三下；她若开口求你，能答应就答应，答应不了也要敬一杯水酒。守夜人敬鬼，鬼亦敬人。"`,
        choices: [createDialogueChoice({
          text: '记住了',
          exit: true,
          effects: {
            npcAffinity: 5,
            setFlag: 'linRulesLearned'
          }
        }), createDialogueChoice({
          text: '您以前守过她？',
          next: 'lin_past'
        })]
      }),
      lin_zhou_sheng: createDialogueNode('lin_zhou_sheng', {
        text: `"听老辈说是青石镇周氏纸扎铺的少爷，叫周生。戏台要塌时把她推进河里，想以水克火。结果水锁了魂。你要是见着什么老镜子、银钗，那都是他的念想，别乱碰。"`,
        choices: [createDialogueChoice({
          text: '原来如此',
          exit: true,
          effects: {
            npcAffinity: 5,
            setFlag: 'linHintedZhouSheng'
          }
        }), createDialogueChoice({
          text: '守夜规矩再说一遍',
          next: 'lin_rules'
        })]
      }),
      lin_past: createDialogueNode('lin_past', {
        text: `林叔苦笑："年轻时我也怕她，被她吓掉半条命。后来才明白，她不是恶鬼，只是戏没散。你要是有心，替她搭个台，她能记你一辈子。"`,
        choices: [createDialogueChoice({
          text: '我会试试',
          exit: true,
          effects: {
            npcAffinity: 10,
            sanity: 5
          }
        })]
      }),
      lin_switch: createDialogueNode('lin_switch', {
        text: `"换班？"林叔的声音冷下来，"守夜人哪有临阵脱逃的规矩。她既然醒了，就是冲着你来。你跑，她跟你一辈子。"`,
        choices: [createDialogueChoice({
          text: '我懂了',
          next: 'lin_rules'
        }), createDialogueChoice({
          text: '还是算了，我再想想',
          exit: true
        })]
      }),
      // ===== 批次13：扩充林叔对话 =====
      lin_other_halls: createDialogueNode('lin_other_halls', {
        text: `"林叔，"你问，"馆里其他厅，有没有什么讲究？"

林叔想了想："一号厅的老张头，做了一辈子棺材，是个善人。你要是巡到那儿，多拜拜，他保你。

"三号厅那个孩子，车祸走的，怨气重。你要是听见他说话，别怕，问问他有什么放不下的，帮他说了，他就安生了。

"五号厅空着，可你别以为真空。那里头住着一个民国来的学徒，守着他师父的东西。他不害人，就是爱翻书。你要是听见翻书声，别理他，那是他在守他的本分。"

林叔顿了顿。

"这馆子里，每一个厅都有故事。守夜人，守的不只是尸，是这些故事。"`,
        choices: [createDialogueChoice({
          text: '记住了',
          exit: true,
          effects: {
            npcAffinity: 15,
            setFlag: 'linToldOtherHalls',
            sanity: 5
          }
        }), createDialogueChoice({
          text: '那地下室呢？',
          next: 'lin_basement'
        })]
      }),
      lin_basement: createDialogueNode('lin_basement', {
        text: `"地下室？"林叔的声音压低了，"你怎么知道地下室？"

"走廊尽头那扇铁门。"

林叔沉默了一会儿。

"那地方，我守了三十年都没敢下去。老馆长临终前交代过，地下室里存着老殡仪馆的旧物，还有……一些不该动的东西。

"他说，民国时候有个纸扎匠，把一堆东西存在那儿，说是'待有缘人'。可谁是那个有缘人，老馆长也不知道。他就把这事，一代代传下来了。

"你要是觉得，你就是那个有缘人……"林叔叹了口气，"那你就去吧。钥匙在值班室抽屉里。我给你留着呢。"`,
        choices: [createDialogueChoice({
          text: '谢过林叔，去地下室',
          exit: true,
          effects: {
            npcAffinity: 20,
            setFlag: 'linGaveBasementKey',
            sanity: 5
          }
        }), createDialogueChoice({
          text: '再问问',
          next: 'lin_other_halls'
        })]
      }),
      lin_retirement: createDialogueNode('lin_retirement', {
        text: `"林叔，"你问，"您什么时候退休？"

林叔沉默了很久。

"快了。"他说，"我心脏不好，医生说我撑不了几年了。

"我本来想，再守几年，等云袖姑娘的事了了再说。可我这身子骨……"他苦笑，"怕是等不到了。"

"您放心。"你说，"云袖的事，我接手。"

电话那头，林叔长长地舒了一口气。

"好孩子。"他说，声音里带着一丝哽咽，"好孩子。我守了三十年，就盼着有人能跟我说这句话。

"周遥，你比我强。我老了，只能守。你能渡。云袖姑娘等了快一百年，等的就是你这样的人。"

林叔顿了顿。

"我退休后，这馆子就交给你了。守夜人手记我会留给你。还有一本老书，叫《阴阳簿》，是上一任记录者留下的。你也一并收着。"`,
        choices: [createDialogueChoice({
          text: '郑重答应',
          exit: true,
          effects: {
            npcAffinity: 30,
            setFlag: 'linShuPassedDown',
            sanity: 15,
            addItem: '守夜人手记'
          }
        })]
      }),
      lin_dying_wish: createDialogueNode('lin_dying_wish', {
        text: `"周遥，"林叔的声音忽然变得郑重，"我有件事，想托付你。"

"您说。"

"我退休后，要是哪天……我走了，你替我，把我葬在殡仪馆后山。陈家几代守夜人都葬在那儿，我想跟他们做伴。

"还有，我守了云袖姑娘三十年，没能帮她。我走的时候，你替我在她灵床前，点三炷香，告诉她，林叔对不起她，没能让她唱完那出戏。

"然后，你替我，把这事办了。让她散。让她，和周生在一起。"

电话那头传来林叔压抑的咳嗽。

"我这辈子，就这一个遗憾。你能替我了，我就能安心走了。"`,
        choices: [createDialogueChoice({
          text: '我答应您，林叔',
          exit: true,
          effects: {
            npcAffinity: 40,
            setFlag: 'linDyingWish',
            sanity: 20,
            setFlag: 'yunxiuWishComplete'
          }
        })]
      })
    }
  })
};