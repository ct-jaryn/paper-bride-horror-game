import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：lie
 */

export const scenes = {
  lie_about_ritual: createScene('lie_about_ritual', {
    title: '谎言超度',
    text: `"秀姑阿姨，我找到你的尸骨了。" 你说，"我想超度你，让你离开这条河。"

秀姑歪着头看你，眼神里有些怀疑："真的？"

"真的。" 你说，"你救过我妈，我感激你。"

秀姑慢慢走近岸边。她的身体半透明，能看见水下投出的影子。

"那你要怎么超度我？" 她问。

"烧掉你的尸骨，再念往生咒。" 你说，"这样你就能投胎了。"

秀姑沉默了很久。最后她点点头："好。但你答应我，要每年给我烧纸。"

"我答应。" 你说，心里一阵刺痛。

秀姑转过身，对着河水喊："莲姐，我要走了。你上来吧。"`,
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