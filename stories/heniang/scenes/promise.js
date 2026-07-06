import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：promise
 */

export const scenes = {
  promise_save_mother: createScene('promise_save_mother', {
    title: '承诺',
    text: `"妈，我会救你的。" 你说，攥紧了拳头，"你等我。我一定把你拉上来。"

水里的母亲摇摇头，涟漪一圈圈荡开："没有人能救河娘。除非有人愿意替她——替她待在河里，替她守着这条河。"

"那我替你。"

母亲的脸突然变得狰狞——原本浮肿苍白的脸扭曲起来，眼白翻出来，嘴角咧到耳根："不行！你不能下来！你下来了，我就真的成了害你的人了！我这辈子护着你，不是让你来送死的！"

水面剧烈翻涌，水花溅起来打在你脸上，冰凉刺骨。母亲的脸被水花打散，碎成一片一片，沉回水底。等水面平静下来，你已经看不见她了。

但你听见水下传来她的哭声，呜呜咽咽的，像是从很深很深的地方冒上来。

哭声里，还掺着另一个女人的笑声——轻轻地，得意地。

[whisper]"她不肯要你。" 那女人说，声音贴着水面飘过来，"但我会要。"[/whisper]`,
    effects: {
      sanity: -15,
      yin: 10,
      setFlag: 'motherProtects'
    },
    choices: [createChoice({
      text: '问水下的女人是谁',
      next: 'ask_underwater_woman'
    }), createChoice({
      text: '逃离河边',
      next: 'flee_river'
    }), createChoice({
      text: '你保持清醒，听出那笑声不属于母亲',
      next: 'sane_promise',
      condition: {
        sanityAbove: 80
      },
      hidden: true,
      effects: {
        sanity: -5
      }
    })]
  }),
  // 清醒承诺（新增分支）,

  promise_stay_village: createScene('promise_stay_village', {
    title: '一年之约',
    text: `"我留在村里。" 你说，"我陪我妈，直到她愿意上来。"

秀姑看着你，水面跟着晃了晃，她点点头："好。我给你一年时间。一年里，你天天来河边。一年后，如果你还在，我就让莲姐跟你走。"

"一言为定。"

你回到村里，辞掉了外地的工作，把行李寄回家。你开始务农——种地、喂鸡、劈柴，过起了母亲当年的日子。

每天晚上，你都会到河边和母亲说话。有时候秀姑也在，三个"人"就隔着河水聊天。你讲村里的琐事，母亲听着笑；秀姑偶尔插嘴，说她当年唱戏的事。河水在脚边流着，凉飕飕的，可你不觉得冷。

一年后，母亲自己从河里走了上来。

她浑身湿淋淋的，水珠往下滴，可她的脸是活的，有了血色。她说："我不能耽误你一辈子。"`,
    effects: {
      sanity: 5,
      yin: -20
    },
    ending: 'yearOfWaiting'
  })
};
