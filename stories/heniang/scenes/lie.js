import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：lie
 */

export const scenes = {
  lie_about_ritual: createScene('lie_about_ritual', {
    title: '谎言超度',
    text: `"秀姑阿姨，我找到你的尸骨了。" 你说，努力让声音听起来平静，"我想超度你，让你离开这条河。"

秀姑歪着头看你，眼神里有些怀疑。她的身体半透明，能看见水下投出的影子，影子在淤泥上晃："真的？"

"真的。" 你说，心里一阵发紧，"你救过我妈，我感激你。我念了三十年，欠你一份情。"

秀姑慢慢走近岸边，水在她身下分开，露出她浸得发白的双脚。她的身体半透明，能看见水下投出的影子。

"那你要怎么超度我？" 她问，声音里带着一点期待。

"烧掉你的尸骨，再念往生咒。" 你说，把布包往前递了递，"这样你就能投胎了。下辈子，投个好人家。"

秀姑沉默了很久。河风吹过，她的红嫁衣在水面上飘，像一片化不开的血。最后她点点头，嘴角扯开一个笑："好。但你答应我，要每年给我烧纸。逢年过节，不许忘。"

"我答应。" 你说，心里一阵刺痛，像是有什么东西扎了一下。

秀姑转过身，对着河水喊，声音在水面上荡开："莲姐，我要走了。你上来吧。"`,
    effects: {
      sanity: -15,
      yin: 15
    },
    choices: [createChoice({
      text: '点燃尸骨',
      next: 'burn_bones_ritual',
      effects: {
        setFlag: 'burnedBones'
      }
    })]
  })
};
