import { createScene } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：command
 */

export const scenes = {
  command_leave_father: createScene('command_leave_father', {
    title: '命令离开父亲',
    text: `"我命令你，离开我父亲的身。" 你说。

纸人周安低下头："遵命，主人。"

它转身走进里屋。你听见父亲发出一声长长的叹息，然后呼吸变得平稳。

几分钟后，纸人走出来。它的身体比之前更干瘪了，像是把什么东西还给了父亲。

"他没事了。" 纸人说，"但我快散了。"

你看着它。它确实在慢慢变扁，像被水泡过的纸。

"谢谢你。" 你说。

纸人笑了笑，那笑容和你一模一样："不用谢。我终于……有名字了。"`,
    effects: {
      sanity: 10,
      yin: -20
    },
    ending: 'namedAndFree'
  }),
  command_take_disaster: createScene('command_take_disaster', {
    title: '命令替灾',
    text: `"我命令你，继续替我承受所有灾病。" 你说。

纸人周安抬起头，眼神里闪过一丝失望，但很快低下头："遵命，主人。"

你感到身上的疲惫一扫而空。这几年积累的小病小痛，全部消失了。

但第二天早上，你发现纸人站在了镜子前，正在用眉笔描自己的眉毛。

"你在干什么？" 你问。

"我在学你。" 它说，"主人越健康，我就越要像主人。这是规矩。"

你看着镜子里，发现它的脸已经和你分毫不差。

[red]也许再过一段时间，就没人能分清你们了。[/red]`,
    effects: {
      sanity: -15,
      yin: 20
    },
    ending: 'slowReplacement'
  })
};