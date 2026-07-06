import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：bargain
 */

export const scenes = {
  bargain_years: createScene('bargain_years', {
    title: '讨价还价',
    text: `"三十年太长了。" 你说，"十年行不行？"

秀姑的笑容消失了："你以为这是菜市场买菜？"

"十五年。"

"三十年。" 秀姑的声音变得冰冷，"少一年，你娘就多在河里泡一年。"

你咬咬牙："好，三十年。"

秀姑满意地点点头。她正要放母亲走，突然又停下："还有，你每次来唱歌，要在河边待到子时。不能早走。"

"为什么？"

"因为子时，河门开。" 秀姑说，"只有那个时候，我才能听见岸上的声音。"`,
    effects: {
      sanity: -10,
      yin: 10
    },
    ending: 'thirtyYearsSong'
  })
};