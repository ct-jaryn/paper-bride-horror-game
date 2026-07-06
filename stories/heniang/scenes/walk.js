import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：walk
 */

export const scenes = {
  walk_riverbank: createScene('walk_riverbank', {
    title: '河畔',
    text: `你沿着河岸边走边看。

天已经黑透了，河边没有路灯，只有对岸村子里漏出来的几点灯火。河水不急，缓缓地流着，发出很低的"哗——哗——"声，像是谁在水底叹气。可这水流有一种说不出的吸力。你看向水面时，会不自觉地想象水下的世界：黑暗、安静、没有声音，也没有痛苦。水底下一定很凉快，很软，躺下去就再也不用起来了。

[whisper]也许水底真的很好。[/whisper]

那念头一冒出来，你后背一凉，猛地摇头，把它甩出去。可它像水草一样缠着你，甩一次又回来一次。

河岸边的泥地软烂，一脚下去陷到脚踝。你深一脚浅一脚地走了一里多地，前面出现一块大青石，半截埋在泥里，半截斜插进水里，石头上长满了青苔。石头正面刻着字，字被水侵蚀得很厉害，边缘都圆了，有些笔画已经看不清，但还能辨认：

[faded]"爱女秀姑之墓。溺水而亡，年仅十九。"[/faded]

秀姑。你母亲年轻时最好的朋友就叫秀姑。你小时候还听她提起过——母亲说秀姑会唱戏，唱得极好，可惜命不好，年纪轻轻就病死了。

原来秀姑不是病死的，是淹死的。

[red]而且她就死在这里。[/red]

你蹲下来摸那块石头，石头冰凉，上面的水还在往下渗。水底下隐约有什么东西一闪——你定睛看去，是一段褪了色的红布，缠在石头根部的水草里，被水流带着一飘一飘的。`,
    effects: {
      sanity: -10,
      yin: 10,
      setFlag: 'foundXiuguStone'
    },
    choices: [createChoice({
      text: '在附近寻找秀姑的尸骨',
      next: 'search_for_bones'
    }), createChoice({
      text: '回家翻看母亲的老照片',
      next: 'look_old_photos'
    }), createChoice({
      text: '你神志恍惚，把河边的身影看成了母亲',
      next: 'mother_as_heniang',
      condition: {
        sanityBelow: 30
      },
      hidden: true,
      effects: {
        sanity: -10,
        yin: 10
      }
    })]
  })

  // 母亲河娘（新增分支）
};
