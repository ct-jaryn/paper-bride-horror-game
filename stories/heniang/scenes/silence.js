import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：silence
 */

export const scenes = {
  silence_by_river: createScene('silence_by_river', {
    title: '河边沉默',
    text: `你沉默了。

秀姑和母亲对视一眼，然后一起沉了下去。水面恢复平静，像是什么都没发生过。

你在河边站了很久。

最后，你脱鞋下水。

河水冰凉，但你不在乎。你一步一步往深处走，直到水漫过胸口。

[red]如果母亲不想走，那就让我来陪她。[/red]

水下，母亲和秀姑一起伸手接住了你。`,
    effects: {
      sanity: -30,
      yin: 30
    },
    ending: 'joinMother'
  })
};