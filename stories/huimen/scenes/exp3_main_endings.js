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

[faded]"下辈子，"他哑着嗓子说，"我给你打一口最好的棺材。"[/faded]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"离开","ending":"huimen_exp3_ending_carpenter_saw","effects":{"yin":0}})]}),
    huimen_exp3_return_mainline: createScene('huimen_exp3_return_mainline', {title:`回归主线`,text:`你感觉到周围的雾气开始变薄。

雾从你脚边退起，一寸一寸退，像退潮的水。退过的地方露出干净的青石板，石板上没有纸钱，没有脚印，只有昨夜的露水。

村口的方向，你隐约看见老宅的轮廓——不是山村周家，而是你最初回到的那座老宅。堂屋里还点着灯，灯光昏黄，像有人在等你回来。秀兰的红棺还在那里，棺盖合着，合得很轻，像只是睡着。

你背着秀兰的骨殖，一步一步走回去。骨殖在背上轻轻晃着，像是一个趴在你背上睡着的人。

[whisper]走到半路，你听见她在你耳边说："快到了。"[/whisper]

路边的纸人一个个低下了头，像是在送行，也像是在道别。`,effects:{"yin":-5},choices:[createChoice({"text":"回到堂屋","next":"to_old_house","effects":{"yin":0}}),createChoice({"text":"先把骨殖安葬","next":"ask_coffin","effects":{"yin":0}}),createChoice({"text":"牵着秀兰的手，沿着月光小路走出山村","next":"huimen_exp_redemption_loop_alt","condition":{"hasItem":"秀兰的骨殖"},"hidden":true})]})
};
