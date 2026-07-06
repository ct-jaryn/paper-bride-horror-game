import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：calm
 */

export const scenes = {
  calm_down_escape: createScene('calm_down_escape', {
    title: '镇定逃脱',
    text: `你强迫自己镇定下来。

纸人们还在说："我们都是你。"

"不，" 你说，"你们不是我。你们只是我爸的执念。"

你走到最前面的纸人面前——那是大学的你。你轻轻揭开它胸口的黄符，上面写着：

[faded]"代吾儿受难"[/faded]

你一张张揭开所有纸人的符。每揭开一张，纸人就瘫软下去，变回普通的黄纸。

最后，院子里只剩下一地黄纸和你一个人。

你跪在纸堆中，大哭出声。`,
    effects: {
      sanity: -10,
      yin: -20
    },
    ending: 'liftedCurse'
  })

  // 冥婚分支
};