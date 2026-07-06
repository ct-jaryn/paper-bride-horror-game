import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：negotiate
 */

export const scenes = {
  negotiate_xiugu: createScene('negotiate_xiugu', {
    title: '谈判',
    text: `"秀姑阿姨，" 你尽量让自己的声音平稳，深吸一口气，"你和我妈是好朋友，你当年还救过我妈——三十年前你把她推上岸，自己沉了下去。你为什么要让她留在河里？"

秀姑的眼神柔和了一些，水面也跟着静了一静："因为我孤单。河里很冷，一个人待久了，会忘记自己是谁。我守了三十年，就等着有人来陪我。莲姐来了，我才觉得自己还活着。"

"那我经常来看你，好不好？" 你说，往前走了一步，"我给你烧纸，给你带吃的，陪你说话。你放我妈走。我妈在岸上还有我。"

秀姑笑了，笑声像水珠落在石头上："你是活人，活人不能常来河边。来了，就回不去了。河水会记着你，天天叫你。"

"那我可以给你立庙，让村里人拜你。逢年过节，香火不断。"

秀姑沉默了很久。河风吹过，她的红嫁衣在水面上飘。最后她说："你和你妈一样，会说话。"

"我答应你，" 她说，声音放轻了，"但你每年七月半，要在河边给我唱一首歌。唱三十年，我就放她走。三十年，一天不能少，一年不能缺。"`,
    effects: {
      yin: -5
    },
    choices: [createChoice({
      text: '答应她',
      next: 'agree_sing_thirty',
      effects: {
        setFlag: 'promisedToSing'
      }
    }), createChoice({
      text: '三十年太长，再商量',
      next: 'bargain_years'
    })]
  })
};
