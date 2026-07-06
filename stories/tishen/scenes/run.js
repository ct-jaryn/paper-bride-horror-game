import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：run
 */

export const scenes = {
  run_from_doll: createScene('run_from_doll', {
    title: '逃离纸人',
    text: `你转身就跑。

可院子里好像有什么东西绊住了你的脚。你低头一看，是槐树的根。树根从土里钻出来，像手一样缠住了你的脚踝。

"别跑。" 纸人说，"你跑了，我就只能继续留在这里。我不想留在这里。"

你挣扎着，但树根越缠越紧。纸人慢慢向你走来，每一步都发出纸张摩擦的沙沙声。

"我不会害你。" 它说，"我只是想和你换一天。就一天。"`,
    effects: {
      sanity: -15,
      yin: 15
    },
    choices: [createChoice({
      text: '答应换一天',
      next: 'agree_one_day',
      effects: {
        setFlag: 'agreedSwap'
      }
    }), createChoice({
      text: '继续反抗',
      next: 'keep_resisting',
      effects: {
        sanity: -10
      }
    })]
  })
};