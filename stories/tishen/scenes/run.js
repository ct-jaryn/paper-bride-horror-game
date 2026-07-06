import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：run
 */

export const scenes = {
  run_from_doll: createScene('run_from_doll', {
    title: '逃离纸人',
    text: `你转身就跑。脚刚迈出去，心跳得要从嗓子眼蹦出来。

可院子里好像有什么东西绊住了你的脚。你低头一看，是槐树的根。那根不知什么时候从土里钻出来了，像一截截苍白的指头，缠住了你的脚踝。你越挣，它缠得越紧，根须顺着你的小腿往上爬，每一根都带着一股子冰凉的土腥气。

"别跑。" 纸人说，声音不急不慢，像在劝一个闹脾气的孩子，"你跑了，我就只能继续留在这里。我不想留在这里。我在这里站了五年，站够了。"

你挣扎着，可树根越缠越紧。你能感觉到根须正在往你裤管里钻，凉的，痒的，像无数只蚂蚁在爬。纸人慢慢向你走来，每一步都发出纸张摩擦的沙沙声——那声音在夜里的院子里格外清晰，沙沙，沙沙，沙沙，像有人在撕一本很厚的书，一页一页。

它走到你面前，那张和你一模一样的脸在月光下白得发亮。它伸手想碰你的脸，那纸手指停在离你皮肤半寸的地方，没敢落下。

"我不会害你。" 它说，声音里第一次有了你读不懂的东西——是恳求？是害怕？"我只是想和你换一天。就一天。我想用人的身体，在人的床上，睡一个不会被露水泡醒的觉。"`,
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