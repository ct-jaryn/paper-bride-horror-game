import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：xiulan
 */

export const scenes = {
  xiulan_dress_heniang: createScene('xiulan_dress_heniang', {
    title: '嫁衣迟疑',
    text: `你从背包里取出那件叠得整整齐齐的红嫁衣。

嫁衣是绸的，绣工极细，上面绣着"周氏秀兰"四个字，已经被岁月洗得有些发白。布料凉凉的，摸上去却有一种说不出的沉。你展开它的瞬间，红嫁衣在河风里"哗"地一声展开，像一面血红的旗。

河面上的母亲猛地后退了一步，水面被她搅得泛起涟漪。

"这是……" 母亲的声音变了，带上了一丝颤，"秀兰的嫁衣？"

"对。" 你说，把嫁衣举高了一些，"另一个被河水和周家害过的女人。她比你更苦——她连岸上的人都没有了。"

母亲的表情从狰狞变成了复杂。她低下头，看着河水，像是在回忆什么。河水在她身下流着，倒映着她的脸，和那件红嫁衣。

"秀兰……" 她喃喃道，声音很轻，"她也是个苦命人。周家害了她，河水也害了她。"

"妈，" 你说，往前走了一步，"你下来陪秀姑，是因为你孤单。但岸上还有人记得你。我天天想着你，夜夜梦见你。秀兰已经没有岸上的人了，她才是真的孤单。你连我都不想要了吗？"

母亲沉默了。河水变得平静，像一面镜子，倒映着天上的星。良久，她抬起头，看着你：

"把嫁衣收好。别让它再沾水了。沾了水，她就走不掉了。"`,
    effects: {
      sanity: 5,
      yin: -15,
      setFlag: 'motherHesitated'
    },
    choices: [createChoice({
      text: '趁机问她怎么才能上来',
      next: 'promise_save_mother'
    }), createChoice({
      text: '把嫁衣留在岸边',
      next: 'leave_dress_by_river',
      effects: {
        yin: -5
      }
    })]
  })

  // 留衣岸边（新增分支）
};
