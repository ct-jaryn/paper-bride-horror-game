import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：want
 */

export const scenes = {
  want_burn_doll: createScene('want_burn_doll', {
    title: '决心焚烧',
    text: `"我要把它烧了。" 你说。

母亲的反应出乎你意料。她没有阻拦，只是摇摇头："烧不掉的。你爸试过。每次烧完，第二天早上它都会重新出现在院子里，只是身上多一道焦痕。"

她卷起纸人的袖子。纸人的手臂上，果然有三道黑色的焦痕。

"它越烧越像你了。" 母亲说。

你仔细看，发现纸人的手臂上不仅有了焦痕，还出现了一些细小的纹路——像是血管，又像是皮肤下的青筋。

[red]那些纹路的走向，和你手臂上的一模一样。[/red]`,
    effects: {
      sanity: -15,
      yin: 15
    },
    choices: [createChoice({
      text: '问母亲有没有别的办法',
      next: 'ask_other_way'
    }), createChoice({
      text: '决定夜里偷偷烧了它',
      next: 'plan_burn_night'
    })]
  })
};