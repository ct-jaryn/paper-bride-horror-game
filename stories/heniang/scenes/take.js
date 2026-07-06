import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：take
 */

export const scenes = {
  take_bones_ashore: createScene('take_bones_ashore', {
    title: '带骨上岸',
    text: `你把秀姑的尸骨一块一块捞上岸，用衣服包好。

骨头湿漉漉的，带着淤泥的腥味。你一块一块地洗，一块一块地擦，最后用母亲的旧褂子包成一包，抱在怀里。骨头的凉气透过布，一直凉到你心口。

河水在你捞骨头的过程中变得很安静——安静得反常。原先的"哗哗"水声没了，水草也不动了，连风都停了。你总觉得水下有无数双眼睛在看着你，盯着你怀里那一包骨头。

捞完最后一块骨头，你直起腰，准备离开。突然，水面"哗"地一声分开，水花溅起老高。一个穿红嫁衣的女人站在水里，水只到她的腰。她的脸很白，眉眼很清秀，可那双眼睛是空的。

是秀姑。

"你拿我的骨头做什么？" 她问，声音带着水声，像是嘴里含着水。`,
    effects: {
      sanity: -15,
      yin: 15
    },
    choices: [createChoice({
      text: '说要超度她',
      next: 'lie_about_ritual',
      condition: {
        flag: 'knowsRitual'
      }
    }), createChoice({
      text: '说要带她离开这条河',
      next: 'honest_about_bones',
      condition: {
        flag: 'honestApproach'
      }
    }), createChoice({
      text: '质问她为何害母亲',
      next: 'accuse_xiugu'
    })]
  })
};
