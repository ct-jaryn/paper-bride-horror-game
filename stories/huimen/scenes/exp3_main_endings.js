/**
 * 《回门》场景模块：exp3_main_endings
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_ending_ancestral_cellar_scene: createScene('huimen_exp3_ending_ancestral_cellar_scene', {title:"地窖长明",text:"你转身往地窖口跑，却撞上一堵无形的墙。\n\n女子们的影子从你身后涌来，却没有伤害你。她们只是围着你，一遍又一遍地念自己的名字。\n\n不知过了多久，你口袋里的火柴自己划着了。火光落到地上，点燃了一片不知道什么时候铺在地上的纸钱。\n\n火越烧越大，把地窖照得通明。女子们在火光里鞠躬，然后化作青烟。\n\n你醒来时，躺在祖宅的门槛上，手里握着一盏熄灭的古灯。",effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"起身","ending":"huimen_exp3_ending_ancestral_cellar","effects":{"yin":0}})]}),
    huimen_exp3_ending_carpenter_saw_scene: createScene('huimen_exp3_ending_carpenter_saw_scene', {title:"锯",text:"李木匠瘫坐在树桩上，浑身是汗。\n\n秀兰走到他面前，伸出手，像是要替他擦汗。她的手穿过他的身体，带起一阵微风。\n\n\"谢谢你。\"她说。\n\n李木匠笑了，笑着笑着就哭了。",effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"离开","ending":"huimen_exp3_ending_carpenter_saw","effects":{"yin":0}})]}),
    huimen_exp3_return_mainline: createScene('huimen_exp3_return_mainline', {title:"回归主线",text:"你感觉到周围的雾气开始变薄。\n\n村口的方向，你隐约看见老宅的轮廓——不是山村周家，而是你最初回到的那座老宅。堂屋里还点着灯，秀兰的红棺还在那里。\n\n你背着秀兰的骨殖，一步一步走回去。",effects:{"yin":-5},choices:[createChoice({"text":"回到堂屋","next":"to_old_house","effects":{"yin":0}}),createChoice({"text":"先把骨殖安葬","next":"ask_coffin","effects":{"yin":0}}),createChoice({"text":"牵着秀兰的手，沿着月光小路走出山村","next":"huimen_exp_redemption_loop_alt","condition":{"hasItem":"秀兰的骨殖"},"hidden":true})]})
};
