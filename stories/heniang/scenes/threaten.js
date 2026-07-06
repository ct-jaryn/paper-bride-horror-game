import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：threaten
 */

export const scenes = {
  threaten_xiugu: createScene('threaten_xiugu', {
    title: '威胁秀姑',
    text: `"如果你不放过我妈，我就把你的尸骨挖出来，烧成灰，撒进粪坑里。" 你说。

秀姑的脸瞬间扭曲。河水开始翻涌，天空暗了下来。

"你敢！" 她的声音变成了千百个人的合唱。

你掏出从神婆那里拿来的香灰，撒进河里。河水发出"嗤嗤"的声音，像是被烫伤。

秀姑惨叫一声，退入水底。

但你没有赢。你听见她在水下发誓：

[whisper]"你害我，我就让你娘永世不得超生。"[/whisper]`,
    effects: {
      sanity: -15,
      yin: 20
    },
    choices: [createChoice({
      text: '继续找尸骨',
      next: 'search_for_bones'
    })]
  })
};