import { createDialogueChoice, createDialogueNode } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：lin_shu_more（林叔对话补充节点）
 */

export const linShuMoreDialogue = {
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
};

export const NPCs = {};
