import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：prologue
 */

export const scenes = {
  prologue: createScene('prologue', {
    title: '替身',
    text: `你已经有五年没回过老家。

这次回来，是因为母亲打电话说父亲病重。你请了假，坐了六个小时高铁，又转了两趟大巴，终于在傍晚时分站在了老屋门前。

院子里的槐树比记忆中高了很多，树荫把半个院子都遮住了。树下摆着一张小桌，桌上放着一个东西，用红布盖着。

你走近，掀开红布。

[red]那是一个纸人。[/red]

纸人穿着你高中时的校服，理着你年轻时的发型，脸上画着眉眼唇红。最诡异的是，它的嘴角微微上扬，像是在笑。

你翻过纸人，发现它后背的纸壳接缝处压着一方小小的印章。印章是朱红色的，字迹已经褪色，只能勉强读出"青石镇"和"周氏"两个字。你父亲什么时候和那么远的纸扎铺子打过交道？

纸人的胸口贴着一张黄符，符上写着你的生辰八字。

母亲从屋里出来，看见你站在纸人前，脸色变了变："你别怕，这是……这是给你挡灾的。你爸找人扎的，说是能替你把病气吸走。"

"用我的八字？" 你的声音有些发颤。

"纸人替你病，你就不会病了。" 母亲说，"你爸这两年身子不好，全怪这个纸人没扎好。"

你再看那纸人。它的眼睛似乎转动了一下，看向你。`,
    effects: {
      sanity: -10,
      yin: 10
    },
    choices: [createChoice({
      text: '质问母亲这纸人扎了多久',
      next: 'ask_how_long'
    }), createChoice({
      text: '进屋看父亲',
      next: 'see_father'
    }), createChoice({
      text: '把纸人脸上的红布重新盖上',
      next: 'cover_doll',
      effects: {
        yin: -5
      }
    }), createChoice({
      text: '你保持清醒，注意到母亲的眼神在回避你',
      next: 'notice_parents',
      condition: {
        sanityAbove: 80
      },
      hidden: true,
      effects: {
        sanity: -5
      }
    }), createChoice({
      text: '转向槐树，似乎听见树影里有人叹息',
      npc: 'locust_tree_spirit',
      npcNode: 'start'
    })]
  })

  // 父母异样（新增分支）
};