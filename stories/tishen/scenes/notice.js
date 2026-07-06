import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：notice
 */

export const scenes = {
  notice_parents: createScene('notice_parents', {
    title: '回避',
    text: `你强迫自己冷静，观察母亲的表情。

她说话时，目光一直躲闪，不敢直视你的眼睛。她的手在围裙上反复擦着同一个位置——那是她紧张时才会有的动作。

"妈，" 你问，"爸的病，和纸人有什么关系？"

她的手停住了。

"没什么关系。" 她说，但声音发虚。

你再看向屋里。父亲躺在床上，背对着门口，但他的肩膀绷得很紧——他在装睡。他听见了你们的对话。

[red]他们在隐瞒什么。[/red]

"纸人用的是我的八字。" 你说，"它替我承受的灾病，是不是转嫁到爸身上了？"

母亲的脸色瞬间惨白。她没有否认。`,
    effects: {
      sanity: -5,
      yin: 5,
      setFlag: 'noticedParentsStrange'
    },
    choices: [createChoice({
      text: '追问真相',
      next: 'ask_how_long'
    }), createChoice({
      text: '进屋直接问父亲',
      next: 'see_father'
    })]
  })
};