import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：back
 */

export const scenes = {
  back_away: createScene('back_away', {
    title: '后退远离',
    text: `你后退几步，远离河岸。

脚踩在湿泥上，"咕叽"一声。你一步退，两步退，一直退到岸上的干土里。水里的母亲没有追来——她只是浮在那里，半张脸露在水面上，看着你。河面上的雾气把她笼着，看不清表情。

"你跑什么？" 她的声音还飘在水面上，带着水声，"我是你妈。我不会害你。"

那声音不像是母亲平日说话的样子，又低又黏，像是河水从她嘴里流出来。你不敢回答，背过身，一路跑回村里。脚底打滑摔了两跤，膝盖磕破了都没觉着疼。

可你知道，你不可能一直躲着。只要这条河还在，只要水还在流，她就会一直叫你。今晚不来叫，明晚也会来叫。河娘的歌，是关不住的。`,
    effects: {
      sanity: -10,
      yin: 5
    },
    choices: [createChoice({
      text: '去找神婆',
      next: 'find_shenpo'
    })]
  })
};
