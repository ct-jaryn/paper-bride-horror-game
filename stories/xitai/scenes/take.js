import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：take
 */

export const scenes = {
  take_photo: createScene('take_photo', {
    title: '鬼影',
    title: '鬼影',
    text: `你又按了几下快门。

每张照片里，戏台上的人都比前一张更多。他们从后台走出来，排队上妆，像是准备开演。

最后一张照片里，他们齐刷刷地转过头，看向镜头。

[red]每一张脸都没有五官，只有一片空白。[/red]

你的相机突然罢工了。胶卷仓自动弹开，里面的胶卷已经变成了焦黑色，像是被火烧过。

一阵冷风吹过，戏台上的幕布轻轻飘动。

你听见后台传来一声清嗓：

[whisper]"开——戏——"[/whisper]`,
    effects: {
      sanity: -20,
      yin: 15,
      addItem: '烧焦的胶卷'
    },
    choices: [createChoice({
      text: '冲进后台',
      next: 'backstage'
    }), createChoice({
      text: '转身离开戏台',
      next: 'try_leave'
    })]
  }),
  take_hairpin: createScene('take_hairpin', {
    title: '拿走银钗',
    text: `你把银钗装进口袋，准备带回去研究。

刚走出戏台，天就黑了。不是正常的黑，是像有人把墨汁泼在了天上。

戏台上的锣鼓声大作，这次不是一出戏，而是十几出戏同时开唱。无数戏子的声音混在一起，震得你头疼欲裂。

[red]你把她的命根子带走了，她不会让你走的。[/red]

你被无形的力量拖回了戏台。戏服一件一件套在你身上，油彩一层一层画在你脸上。

最后，你看见镜子里的自己。

你变成了云袖。`,
    effects: {
      sanity: -40,
      yin: 30
    },
    ending: 'becomeYunxiu'
  })
};