import { createDialogueChoice, createDialogueNode } from '../../../js/engine/endingFactory.js';
/**
 * NPC 模块：yunxiu_more（云袖对话第一批）
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
  })
};

export const NPCs = {};