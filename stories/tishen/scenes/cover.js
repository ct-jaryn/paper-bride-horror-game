import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：cover
 */

export const scenes = {
  cover_doll: createScene('cover_doll', {
    title: '盖红布',
    text: `你把红布重新盖在纸人头上。

纸人的脸被遮住了，但你总觉得红布下面有什么东西在动。像是它在呼吸。

母亲走过来，拍拍你的肩膀："别管它。纸人要有名字才能活，我们没给它起名字，它就是死物。"

"可它用了我的八字。"

"八字只是引子。" 母亲说，"没有名字，它最多替你病，不会替你活。"

她的话并没有让你安心。你跟着她进屋，但一路上都觉得后背发凉，好像有什么东西在盯着你。

[whisper]你回头看了三次，纸人还在红布下，一动不动。[/whisper]`,
    effects: {
      sanity: -5
    },
    choices: [createChoice({
      text: '进屋看父亲',
      next: 'see_father'
    })]
  })
};