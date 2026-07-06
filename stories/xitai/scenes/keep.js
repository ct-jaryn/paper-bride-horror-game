import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：keep
 */

export const scenes = {
  keep_running: createScene('keep_running', {
    title: '继续奔跑',
    text: `你拼命跑。

雾气越来越浓，你分不清方向。戏台上的锣鼓声忽远忽近，像是有无数戏班子在雾中跟着你。

你跑啊跑，跑到再也跑不动。

最后，你撞上了一根木桩。抬头一看，是戏台的台柱。

你一直在戏台周围打转。

台上，戏子们齐声唱道：

[whisper]"戏不散，人莫近。人既近，戏不散。"[/whisper]`,
    ending: 'lostInFog'
  })
};