import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：leave
 */

export const scenes = {
  leave_dress_by_river: createScene('leave_dress_by_river', {
    title: '留衣',
    text: `你把秀兰的嫁衣平铺在河岸上，红嫁衣在月光下泛着暗红的光，像是在为两个不相干的女子搭一座桥。

"秀兰阿姨，" 你对着河水说，声音在夜色里飘得很远，"我妈也是个可怜人。她下来不是为了害你，是为了陪她的老朋友秀姑。如果你在天有灵，帮帮她，别让她忘了岸上的家。我妈还有我，可你连岸上的人都没了。你比我妈还苦。"

河水轻轻拍打着岸边的石头，发出温柔的声响，"哗——哗——"，像是在回应你。

母亲浮出水面，看着那件嫁衣。她的眼神不再空洞，而是带着一丝悲伤，嘴角微微动了一下。

"秀兰……" 她说，声音很轻，"原来我们都一样。都是被这河、被人害的。"

她转向你，看了很久："儿子，妈不会拉你下水。妈答应你。但妈也上不去——水太深了，我泡得太久了。你走吧，别再来河边了。来一次，河水就记你一次。"`,
    effects: {
      sanity: 10,
      yin: -20,
      setFlag: 'xiulanDressOffered'
    },
    choices: [createChoice({
      text: '答应她，去找救她的办法',
      next: 'find_shenpo'
    })]
  })
};
