import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：accuse
 */

export const scenes = {
  accuse_xiugu: createScene('accuse_xiugu', {
    title: '质问秀姑',
    text: `"你为什么要害我妈？" 你质问。

秀姑摇摇头："我没有害她。是她自己愿意下来的。"

"你骗她！"

"我没有骗她。" 秀姑说，"我只是告诉她，水里不冷，水里很安静，水里没有孤单。"

"这就是骗！"

秀姑的脸色变了："你懂什么？！你在外面有工作，有朋友，有生活！你娘有什么？她只有这间空房子和这条河！"

河水随着她的愤怒翻涌起来，打湿你的裤脚。

"既然你这么孝顺，" 秀姑说，"那你下来陪她啊！"`,
    effects: {
      sanity: -20,
      yin: 20
    },
    choices: [createChoice({
      text: '转身逃跑',
      next: 'flee_river'
    }), createChoice({
      text: '撒香灰逼退她',
      next: 'use_incense_ash',
      condition: {
        hasItem: '香灰和朱砂'
      }
    })]
  })
};