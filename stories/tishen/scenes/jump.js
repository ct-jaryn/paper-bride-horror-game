/**
 * 《tishen》场景模块：jump
 */

export const scenes = {
    jump_window: {
        title: '跳窗',
        text: `你撞破窗户跳出去。

落地时扭伤了脚，但你顾不上疼，一瘸一拐地往村口跑。

身后的沙沙声越来越近。你不敢回头。

终于，你跑到了村口的大槐树下。树下站着一个人影。

"你跑什么？" 人影说。

是父亲。但他的声音很空洞。

你走近，发现父亲的身体是纸糊的，只有头是真的。

"回来吧，" 纸父亲说，"我们一家人，要整整齐齐。"`,
        effects: {
            sanity: -40,
            yin: 30,
            visual: 'shake'
        },
        ending: 'paperFamily'
    }
};
