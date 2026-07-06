/**
 * 《回门》场景模块：exp3_loop_resolution
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_path_heart: createScene('huimen_exp3_loop_path_heart', {title:'心路',text:`你凭着心中的方向走，不再看路标。

脚下的石板时软时硬，两边的房屋时新时旧，但你没有停。你心里只想着一件事：带秀兰离开。

渐渐地，路变得平坦，天空泛起鱼肚白。`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"继续走","next":"huimen_exp3_loop_exit_dawn","effects":{"yin":0}})]}),
    huimen_exp3_loop_moon_exit: createScene('huimen_exp3_loop_moon_exit', {title:'月路尽头',text:`月光箭头指向一条蜿蜒的小路。

小路上没有纸人，没有白灯笼，只有清冷的月光和路边不知名的白花。你走了很久，走到天边泛起微光。

秀兰的身影出现在小路尽头。她说："你找到真正的路了。"`,effects:{"sanity":8,"yin":-5},choices:[createChoice({"text":"走向她","next":"huimen_exp3_loop_dawn_together","effects":{"yin":0}})]}),
    huimen_exp3_loop_exit_dawn: createScene('huimen_exp3_loop_exit_dawn', {title:'黎明出口',text:`你走到小路的尽头，那里有一座石牌坊。

牌坊上刻着"回门"二字，但字迹已经风化，像是很多年没有人走过了。

你跨过牌坊，身后的山村忽然安静下来。你知道，循环被你打破了。`,effects:{"sanity":8,"yin":-5},choices:[createChoice({"text":"继续走","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}})]}),
    huimen_exp3_loop_dawn_together: createScene('huimen_exp3_loop_dawn_together', {title:'黎明循环同行',text:`秀兰走在你身侧，身影越来越淡。

"我不能再往前了。"她说，"但你已经打破循环，可以出去了。"

她把一样东西塞进你手里——是她腕上那根红绳，现在已经断了。

"带着它，别再回来。"`,effects:{"sanity":5,"yin":-3,"addItem":"断红绳"},choices:[createChoice({"text":"独自离开","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}}),createChoice({"text":"说你会带她一起","next":"huimen_exp3_loop_dawn_bones","condition":{"hasItem":"秀兰的骨殖"},"effects":{"sanity":5,"yin":0}})]}),
    huimen_exp3_loop_dawn_bones: createScene('huimen_exp3_loop_dawn_bones', {title:'携骨',text:`你把背上的骨殖抱到身前。

"我已经带你出来了。"你说，"不管是魂还是骨，我们一起走。"

秀兰的身影在晨光里颤抖。她伸出手，触碰骨殖，然后整个人化作一缕光，融入其中。

骨殖在你怀里变轻，最后只剩一件粉色的嫁衣。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"离开山村","ending":"huimen_exp3_hidden_return_with_xiulan","effects":{"yin":0}})]})
};
