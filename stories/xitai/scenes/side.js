import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：side
 */

export const scenes = {
  side_of_stage: createScene('side_of_stage', {
    title: '戏台侧面',
    text: `你绕到戏台侧面，发现台基下有一个狭小的空间。

那是当年放火的人躲藏的地方。地上还放着一个生锈的油壶，壶身上有"刘记绸缎"四个字。

[red]放火的人不是周生，是刘掌柜。[/red]

你正想进一步查看，身后传来一个苍老的声音：

"年轻人，知道太多，不好。"

你回头，看见一个穿着绸缎马褂的老人站在那里。他的身体半透明，脚不沾地。`,
    effects: {
      sanity: -15,
      yin: 15,
      setFlag: 'knowsTrueKiller'
    },
    choices: [createChoice({
      text: '质问他为何放火',
      next: 'confront_liu'
    }), createChoice({
      text: '悄悄后退',
      next: 'retreat_slowly'
    })]
  })
};