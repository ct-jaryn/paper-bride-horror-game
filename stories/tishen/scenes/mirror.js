import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：mirror
 */

export const scenes = {
  mirror_reveal: createScene('mirror_reveal', {
    title: '铜镜照魂',
    text: `你掏出铜镜碎片，对准纸人的脸。

碎片裂痕中射出一道浑浊的光，照在纸人脸上。纸人发出一声尖叫，用手捂住脸。

"别看！" 它大喊，"别照我！"

但你已经看见了。

铜镜里映出的不是纸扎的眉眼，而是一团模糊的人形。那人形被困在黄纸和竹篾之间，像是被装进了一个狭小的壳。

[red]那不是你的脸。那是另一个人的魂。[/red]

纸人缓缓放下手，铜镜里的光也暗了下去。它看着你，眼神复杂：

"你看见了？" 它问，"我不是你。我只是……被装进了你的样子。"

"你是谁？" 你问。

"我不知道。" 它说，"我只记得火、戏台、还有水。很多水。"`,
    effects: {
      sanity: -10,
      yin: -15,
      setFlag: 'dollSoulRevealed'
    },
    choices: [createChoice({
      text: '问它想不想解脱',
      next: 'ask_doll_meaning'
    }), createChoice({
      text: '用铜镜碎片继续照，直到它显出原形',
      next: 'force_reveal',
      effects: {
        sanity: -10,
        yin: 10
      }
    })]
  })

  // 强行显形（新增分支）
};