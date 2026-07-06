import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：search
 */

export const scenes = {
  search_for_bones: createScene('search_for_bones', {
    title: '寻找尸骨',
    text: `你在石头周围寻找。

河水清澈了一些——天快亮了，水里能看见底。河底的鹅卵石白花花的，铺着一层细沙。水草一丛一丛，被水流带着轻轻摆动，像谁在水底甩袖子。

你脱鞋下水。河水冰得刺骨，一脚下去凉到头顶，牙关直打架。淤泥软烂，脚陷进去拔不出来，每走一步都费劲。水草缠着你的脚踝，滑腻腻的，像是有人在水下抓你。

你弯腰摸索了十几分钟，手指在淤泥里来回划。忽然碰到一个硬物，凉凉的，长长的。你屏住呼吸，把它从淤泥里抽出来——

[red]是一根腿骨。[/red]

骨头很小，像是女人的。上面缠着一段红色的布条，布条已经褪成了粉白，可还能看出原本是红的。

你顺着这个位置又在附近摸，一块，两块，三块。摸了小半个时辰，拼起来正好是一副完整的骨架。骨架的盆骨较宽，确实是个女人。骨头在水里泡了三十年，已经发黑发脆，可还硬。

在骨架旁边，淤泥里埋着一块玉佩。你捞起来冲干净，玉佩上刻着一个"秀"字。

[whisper]这是秀姑。[/whisper]

水底忽然安静下来，连水草都不动了，像是有什么东西在水下屏住了呼吸。`,
    effects: {
      sanity: -15,
      yin: 15,
      addItem: '秀姑的尸骨'
    },
    choices: [createChoice({
      text: '把尸骨捞上岸',
      next: 'take_bones_ashore'
    }), createChoice({
      text: '把尸骨重新埋好',
      next: 'rebury_bones',
      effects: {
        yin: -10
      }
    })]
  }),
  search_for_other_way: createScene('search_for_other_way', {
    title: '寻找他法',
    text: `你拒绝接受。

你开始查资料、问老人、走遍上下游。你跑遍了沿河的村子，问遍了每一个上了年纪的老人。七天下来，你拼凑出一条线：这条河里的河娘不止秀姑一个，她们形成了一个"河娘会"。任何一个河娘离开，都会惊动其他的——她们靠彼此的怨气撑着，谁也不能先走。

要救母亲，只有一个办法：找到河娘的源头，也就是第一个跳进这条河的女人。

据说，第一个河娘是三百年前一个被沉塘的寡妇。她死得冤，怨气污染了整条河。从那以后，这条河里所有溺亡的女子都会成为河娘，一个接一个，像水草一样缠在一起。

要超度她，需要找到她的尸骨，和她当年被沉塘的原因——只有把冤屈洗清，怨气才能散。`,
    effects: {
      sanity: -10,
      yin: 10,
      setFlag: 'searchingSource'
    },
    choices: [createChoice({
      text: '去上游找第一个河娘的墓',
      next: 'find_first_heniang'
    })]
  })
};
