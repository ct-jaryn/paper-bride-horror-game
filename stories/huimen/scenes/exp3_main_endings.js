/**
 * 《回门》场景模块：exp3_main_endings
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_ending_ancestral_cellar_scene: createScene('huimen_exp3_ending_ancestral_cellar_scene', {title:`地窖长明`,text:`你转身往地窖口跑，却撞上一堵无形的墙。

那墙是凉的，贴上去像贴在一块湿冷的墓碑上。你伸手去摸，摸到的却是虚空——墙在，又不在。

女子们的影子从你身后涌来，却没有伤害你。她们只是围着你，一遍又一遍地念自己的名字。那些名字你有的认得，有的不认得，但每一个都念得很慢，像是在确认自己真的有过这样一个名字。

不知过了多久，你口袋里的火柴自己划着了。"嗤"的一声，火光落到地上，点燃了一片不知道什么时候铺在地上的纸钱。

火越烧越大，把地窖照得通明。女子们在火光里鞠躬，一个接一个，鞠得很深。她们鞠完最后一个躬，就化作青烟，从地窖口飘了出去。

最后一缕青烟散尽时，地窖里只剩你一个人，和满地的灰烬。

你醒来时，躺在祖宅的门槛上，手里握着一盏熄灭的古灯。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"起身","ending":"huimen_exp3_ending_ancestral_cellar","effects":{"yin":0}})]}),
    huimen_exp3_ending_carpenter_saw_scene: createScene('huimen_exp3_ending_carpenter_saw_scene', {title:`锯`,text:`李木匠瘫坐在树桩上，浑身是汗。

老槐树倒了，锯口还在往外渗着暗红的树汁，像一道合不上的伤口。空气里满是木屑和血的混合味，闻起来像葬礼上的香。

秀兰走到他面前，伸出手，像是要替他擦汗。她的手穿过他的身体，带起一阵微风。那风很凉，却让李木匠脸上滚烫的汗珠凉了下来。

"谢谢你。"她说。

李木匠笑了，笑着笑着就哭了。他哭得没有声音，肩膀一耸一耸，像一个憋了太久的孩子终于找到了可以哭的地方。

他抬起手，想握住秀兰的手，却只握住了一把空气。那空气里还带着一点桂花的香，是秀兰留给他的最后一点念想。

[faded]"下辈子，"他哑着嗓子说，"我给你打一口最好的棺材。"[/faded]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"老槐树倒了，但救赎还没完成，去井边","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"去祖祠补全女子的名字","next":"huimen_exp_ancestral_hall","effects":{"yin":1}})]})
};
