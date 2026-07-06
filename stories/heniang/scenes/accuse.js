import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：accuse
 */

export const scenes = {
  accuse_xiugu: createScene('accuse_xiugu', {
    title: '质问秀姑',
    text: `"你为什么要害我妈？" 你质问，声音在河面上荡开。

秀姑摇摇头，水面跟着晃："我没有害她。是她自己愿意下来的。她天天来河边看我，看了三十年，最后自己走下来的。"

"你骗她！"

"我没有骗她。" 秀姑说，声音很平静，"我只是告诉她，水里不冷，水里很安静，水里没有孤单。她说她想听，她就一年一年地来听。"

"这就是骗！" 你喊。

秀姑的脸色变了。她原本苍白的脸泛起一层青，眼睛里没有光了："你懂什么？！你在外面有工作，有朋友，有生活！你一年回来几趟？你娘有什么？她只有这间空房子，和这条河！"

河水随着她的愤怒翻涌起来，一浪一浪地拍上岸，打湿你的裤脚。水草被搅得乱飘，缠在你脚踝上，滑腻腻的。

"既然你这么孝顺，" 秀姑说，声音突然变得又尖又冷，"那你下来陪她啊！"`,
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
