import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：honest
 */

export const scenes = {
  honest_about_bones: createScene('honest_about_bones', {
    title: '坦诚来意',
    text: `"秀姑阿姨，我找到你的骨头了。" 你说，把布包抱在胸前，"我想带你离开这条河，让你入土为安。"

秀姑愣住了。她似乎没想到你会这么说——她以为你要烧她，要骗她，要威胁她。她的身体在水里僵了僵，像是不敢相信。

"离开这条河？" 她喃喃道，声音轻得几乎听不见，"我能离开吗？三十年了……我还能离开吗？"

"能。" 你说，往前走了一步，"我请神婆看过，只要把你的尸骨重新安葬，入土为安，你就能解脱。不用再泡在水里了。"

秀姑的眼里流出了水。不是泪，是河水——浑浊的河水从她的眼眶里淌出来，顺着脸颊往下滴。

"那莲姐呢？" 她问，声音发抖，"她也能走吗？"

"她也能。" 你说，"你们一起走。"`,
    effects: {
      sanity: 5,
      yin: -10,
      setFlag: 'willRebury'
    },
    choices: [createChoice({
      text: '准备重新安葬',
      next: 'rebury_both'
    })]
  })
};
