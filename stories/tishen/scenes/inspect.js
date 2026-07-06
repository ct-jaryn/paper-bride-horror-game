import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：inspect
 */

export const scenes = {
  inspect_doll_night: createScene('inspect_doll_night', {
    title: '纸人夜话',
    text: `夜里，你来到院子。

月亮很白，白得不像月亮，倒像一只没有眼白的眼睛。月光透过槐树叶，在地上投下斑驳的影子，那些影子一颤一颤的，像水面上的光斑。纸人还站在小桌旁，红布盖着头。槐树的气根垂下来，绕过纸人的肩膀，像是从树里伸出一只手，搭在它身上。

你鼓起勇气，掀开红布。手指碰到红布时，那布是凉的，凉得不像布，像一片冷掉的皮。

[red]纸人的脸变了。[/red]

下午看它时，它还是你年轻时的样子——高中时的眉眼，没有胡茬，皮肤光滑。现在，它的眉眼、鼻梁、嘴型，都更像现在的你。眉骨比下午高了一点，下颌的线条硬了，连你最近长出的那道法令纹，都出现在它脸上，一道浅浅的沟，从鼻翼拉到嘴角。

最让你脊背发凉的是，它下巴上有一小颗痣。你下巴上也有一颗，长在同一个位置。下午看的时候，它脸上还没有。

"你来了。" 纸人突然开口。那声音从纸壳里震出来，是你的声音，连你说话时尾音微微上扬的习惯都学去了。

你的血液仿佛凝固了。月光照在它脸上，那张脸在光里一动不动，可你总觉得它在悄悄变化——眨一下眼的工夫，它又像你多了一分。

"我替你病了五年，" 纸人说，声音里有一种你读不懂的东西——是委屈？是怨？还是别的什么，"现在，该你替我还了。"`,
    effects: {
      sanity: -35,
      yin: 25,
      visual: 'paper-doll'
    },
    choices: [createChoice({
      text: '质问它什么意思',
      next: 'ask_doll_meaning'
    }), createChoice({
      text: '转身就跑',
      next: 'run_from_doll',
      effects: {
        sanity: -10
      }
    }), createChoice({
      text: '你摸到口袋里的铜镜碎片，对准纸人的脸',
      next: 'mirror_reveal',
      condition: {
        hasItem: '铜镜碎片'
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: -10
      }
    }), createChoice({
      text: '把手按在它胸口，感受它的记忆',
      next: 'memory_exchange',
      effects: {
        sanity: -5,
        yin: 5
      }
    })]
  })

  // 铜镜照魂（新增分支）
};