import { createDialogueChoice, createDialogueNode } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：yunxiu_more
 */

export const yunxiuMoreDialogue = {
  // ===== 批次13：扩充云袖对话 =====
  yunxiu_life_question: createDialogueNode('yunxiu_life_question', {
    text: `"守夜人，"云袖忽然问，"活着的滋味，是什么样的？"

你愣了一下。

"我死得太早了，"她低声说，"早到我都快忘了，活着是什么感觉。是热的吗？是甜的吗？"

你想了想："活着，什么滋味都有。有苦有甜，有冷有热。可最珍贵的，是你还能选——选明天做什么，选爱谁，选走哪条路。"

云袖听完，沉默了一会儿。

"那我，再也没得选了。"她说，"我从火里落进河里的那一刻，就再也没得选了。"

"可你现在，还在选。"你说，"你选了等周生。你选了不害人。你选了，跟我说这些话。"

云袖抬起头，看着你。

"你说得对。"她露出一个极淡的笑，"原来，死了也还能选。谢谢你，守夜人。"`,
    choices: [createDialogueChoice({
      text: '继续陪她聊聊',
      next: 'yunxiu_final_play'
    }), createDialogueChoice({
      text: '告辞',
      exit: true,
      effects: {
        npcAffinity: 15,
        sanity: 10
      }
    })]
  }),
  yunxiu_other_members: createDialogueNode('yunxiu_other_members', {
    text: `"你见过班子里其他人吗？"你问。

云袖的眼神黯了黯。

"秦叔、赵哥、孙师傅……"她一一念着名字，"他们和我一起，死在那场火里。可我不知道他们去了哪里。我醒的时候，七号厅里只有我一个。"

"他们还在青石镇的废墟。"你说。

云袖的身体颤了一下。

"还在？"她急切地问，"他们……还好吗？"

"不太好。"你如实说，"他们和你一样，困在最后那一刻，反复重演。秦叔还在问救出来的孩子活着没。赵哥的脸卸不下来。孙师傅的二胡弦断了。"

云袖的眼泪涌了出来。

"我没想到，他们也在受苦。"她哽咽，"我以为，只有我一个。"

"我帮你去超度他们。"你说。

"谢谢你。"云袖擦了擦泪，"告诉他们……告诉他们，云袖想他们了。"`,
    choices: [createDialogueChoice({
      text: '答应她，去废墟',
      exit: true,
      effects: {
        npcAffinity: 25,
        setFlag: 'yunxiuAskedAboutMembers',
        sanity: 5
      }
    }), createDialogueChoice({
      text: '问她和周生的事',
      next: 'yunxiu_zhou_sheng',
      condition: {
        flag: 'knowsZhouSheng'
      }
    })]
  }),
  yunxiu_memory_fire: createDialogueNode('yunxiu_memory_fire', {
    text: `"你还记得那场火吗？"你轻声问。

云袖闭上了眼。

"记得。"她说，"每一个细节，都记得。

"我记得火从后梁窜出来。我记得台下的人尖叫着跑。我记得秦叔冲下台，去抱那个孩子。我记得孙师傅被人群撞倒，再没起来。

"我记得赵哥站在台上，想挡住塌下来的横梁。他那么壮，可横梁太重了。

"我记得……我记得我没跑。"

她睁开眼，眼里有一种困惑。

"我不知道我为什么没跑。也许是吓傻了。也许是……入戏太深。我把自己当成了杜丽娘，觉得杜丽娘就该死在戏台上。"

"周生冲上来救你。"你说。

"是。"云袖的泪又涌出来，"他剪了我的红绳。他把我推进暗门。他说'云袖，等我'。

"然后我就，落进了水里。我挣扎，我喊他的名字，可河水灌进我的喉咙。我最后看见的，是火光映红了的天，和戏台塌下去的那一瞬。"

她闭上眼，声音轻得像风：

"然后，就是漫长的、水底的黑暗。"`,
    choices: [createDialogueChoice({
      text: '告诉她周生的真相',
      next: 'yunxiu_zhou_sheng',
      condition: {
        flag: 'knowsZhouSheng'
      }
    }), createDialogueChoice({
      text: '什么都不说，只是握住她的手',
      exit: true,
      effects: {
        npcAffinity: 20,
        sanity: 10,
        setFlag: 'yunxiuComforted'
      }
    })]
  }),
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
      condition: {
        flag: 'knowsZhouSheng'
      }
    }), createDialogueChoice({
      text: '继续陪她',
      exit: true,
      effects: {
        npcAffinity: 20,
        sanity: 5
      }
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
      effects: {
        npcAffinity: 30,
        setFlag: 'promised',
        setFlag: 'yunxiuWishComplete',
        sanity: 10
      }
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
      effects: {
        npcAffinity: 25,
        setFlag: 'yunxiuKnowsArson',
        setFlag: 'yunxiuRemembered',
        sanity: 10
      }
    })]
  })
};
export const NPCs = {};