import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：plan
 */

export const scenes = {
  plan_burn_night: createScene('plan_burn_night', {
    title: '计划夜焚',
    text: `你决定夜里烧了它。

你找来打火机、柴油、还有一把铁锹。等到凌晨两点，院子里安静得只能听见虫鸣。

你走到纸人面前，把柴油泼在它身上。

纸人没有动。但它头上的红布滑落了，露出那张越来越像你的脸。

"你要烧我？" 它问，"烧了我，你爸也会死。我们的命连在一起。"

你的手抖了一下。`,
    effects: {
      sanity: -10,
      yin: 10
    },
    choices: [createChoice({
      text: '不管，点火',
      next: 'burn_doll_now',
      danger: true
    }), createChoice({
      text: '停下，问它怎么解开联系',
      next: 'ask_doll_meaning'
    })]
  })
};