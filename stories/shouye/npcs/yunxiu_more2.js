import { createDialogueChoice, createDialogueNode } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：yunxiu_more2（云袖对话第二批）
 */

export const yunxiuMoreDialogue2 = {
  yunxiu_dream: createDialogueNode('yunxiu_dream', {
    text: `"云袖，"你问，"你这些年，做过梦吗？"

她愣了一下，然后苦笑。

"鬼怎么会做梦呢？我们就是别人的梦。"

她顿了顿。

"可我总在重复一个画面——周生冲上台，剪断我的红绳。我落进水里。然后，我看见他在火里，朝我伸出手。

"每一次，我都想握住他的手。每一次，都握不住。然后我就醒——'醒'，也就是重新浮在七号厅的灵床上。"

"那不是梦。"你说，"那是记忆。"

"可如果是记忆，"云袖低下头，"为什么每次我都握不住他的手？我明明记得，他朝我伸了手。"

你沉默了一会儿。

"也许，"你轻声说，"是因为，你心里一直觉得他抛下了你。所以记忆里，你也握不住他。"

云袖抬起头，看着你，眼里的雾，一点一点散了。`,
    choices: [createDialogueChoice({
      text: '告诉她周生一直在等她',
      next: 'yunxiu_zhou_sheng',
      condition: { flag: 'knowsZhouSheng' }
    }), createDialogueChoice({
      text: '继续陪她',
      exit: true,
      effects: { npcAffinity: 20, sanity: 5 }
    })]
  }),
  yunxiu_farewell_prep: createDialogueNode('yunxiu_farewell_prep', {
    text: `"云袖，"你问，"如果有一天，你真的能走了，你想怎么走？"

她想了很久。

"我想穿着戏服走。"她说，"那是我这辈子最体面的衣服。

"我想在戏台上唱完最后一折，然后，福一福，谢幕。

"我想……我想周生在台下看着我。就像当年，他每场戏都坐在第一排，看我唱。"

她转向你，眼神里有一种近乎活人的光彩。

"你能帮我，实现这个吗？"

"能。"你说。

"那，"她笑了，"我现在就开始练嗓子。这一折《惊梦》，我等了一百年，要唱得最好。"`,
    choices: [createDialogueChoice({
      text: '答应她，为她搭起戏台',
      exit: true,
      effects: { npcAffinity: 30, setFlag: 'promised', setFlag: 'yunxiuWishComplete', sanity: 10 }
    })]
  }),
  yunxiu_question_greed: createDialogueNode('yunxiu_question_greed', {
    text: `"守夜人，"云袖忽然问，"人为什么会害人？"

"什么意思？"

"那场火。"她说，"我后来知道了，不是意外。是有人，为了地皮，烧了戏台。"

她低下头。

"五条命，就为了一块地。我到今天都想不通。地，能比命贵吗？"

你想了想："对有些人来说，能。"

"那他们，"云袖的声音带着一丝冷意，"晚上睡得着吗？"

"睡得着。"你说，"因为那种人，没有心。"

云袖沉默了很久。

"我恨过他们。"她终于说，"恨了将近一百年。可恨太累了。我决定不恨了。我只希望，以后的人，能记住这件事。记住贪婪能烧死五条命。"

"我会记住的。"你说，"我还会写下来。"

"那就好。"云袖点点头，"有你在，我放心了。"`,
    choices: [createDialogueChoice({
      text: '答应她把真相写进书里',
      exit: true,
      effects: { npcAffinity: 25, setFlag: 'yunxiuKnowsArson', setFlag: 'yunxiuRemembered', sanity: 10 }
    })]
  })
};

export const NPCs = {};
