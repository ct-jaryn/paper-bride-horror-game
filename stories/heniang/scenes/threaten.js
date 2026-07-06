import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：threaten
 */

export const scenes = {
  threaten_xiugu: createScene('threaten_xiugu', {
    title: '威胁秀姑',
    text: `"如果你不放过我妈，我就把你的尸骨挖出来，烧成灰，撒进粪坑里。" 你说，咬着牙，一个字一个字往外蹦。

秀姑的脸瞬间扭曲。她原本清秀的脸皱成一团，眼眶里流出黑水。河水开始翻涌，天空暗了下来，河面上飘起一层黑雾。

"你敢！" 她的声音变成了千百个人的合唱，一层叠一层，震得你耳朵嗡嗡响。

你没退。你掏出从神婆那里拿来的香灰，一把撒进河里。香灰落在水面上，河水发出"嗤嗤"的声音，冒起白烟，像是被烫伤。水草焦了，水冒泡了，腥味冲天。

秀姑惨叫一声，捂着脸退入水底。水面"哗"地合拢，把她吞了下去。

可你没有赢。你听见她在水下发誓，声音从很深很深的地方冒上来，带着恨：

[whisper]"你害我，我就让你娘永世不得超生。我守她三十年，我要守她三百年。"[/whisper]`,
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
