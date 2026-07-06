/**
 * 《回门》场景模块：exp2_child_ghost
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_child_ghost_playground: createScene('huimen_exp2_child_ghost_playground', {title:'鬼孩玩耍地',text:`你来到村边的一片空地。

空地上有许多孩子玩的痕迹：跳房子的格子、丢沙包的圈、还有一架破旧的秋千。但这里没有孩子，只有几个半透明的身影在追逐打闹。

他们看见你，停了下来。

"大哥哥，" 一个小女孩说，"你是来陪我们玩的吗？"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"陪他们玩","next":"huimen_exp2_child_ghost_play","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"问他们是谁","next":"huimen_exp2_child_ghost_ask","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_child_ghost_play: createScene('huimen_exp2_child_ghost_play', {title:'玩耍',text:`你和孩子们玩了起来。

你们踢毽子、跳房子、丢沙包。孩子们笑得很开心，他们的笑声像铃铛一样，把周围的阴气一点点驱散。

"大哥哥，你真好。" 小女孩说，"作为谢礼，我们送你一样东西。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_played_with_child_ghosts"},choices:[createChoice({"text":"接过礼物","next":"huimen_exp2_child_ghost_gift","effects":{"yin":-3}}),createChoice({"text":"问他们想要什么","next":"huimen_exp2_child_ghost_wish","effects":{"yin":1}})]}),
    huimen_exp2_child_ghost_gift: createScene('huimen_exp2_child_ghost_gift', {title:'礼物',text:`小女孩递给你一颗玻璃珠。

珠子是透明的，里面却有一缕红色的光在流动。

"这是我们的眼泪。" 她说，"你拿着它，周家的人就不敢欺负你。"`,effects:{"sanity":5,"yin":-5,"addItem":"鬼孩的眼泪"},choices:[createChoice({"text":"收好","next":"huimen_exp2_child_ghost_playground","effects":{"yin":1}}),createChoice({"text":"把它给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"鬼孩的眼泪"}})]}),
    huimen_exp2_child_ghost_wish: createScene('huimen_exp2_child_ghost_wish', {title:'愿望',text:`你问："你们想要什么？"

孩子们安静下来。一个小男孩说："我们想回家。可我们不知道家在哪里。"

"你们的名字呢？" 你问。

"我们没有名字。" 小女孩说，"周家只叫我们'借来的命'。"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_knows_child_ghosts_wish"},choices:[createChoice({"text":"答应帮他们找名字","next":"huimen_exp2_child_ghost_playground","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"带他们回家","ending":"huimen_exp2_ending_child_ghost_home","effects":{"yin":-5}})]}),
    huimen_exp2_child_ghost_ask: createScene('huimen_exp2_child_ghost_ask', {title:'鬼孩询问',text:`你问："你们为什么会在这里？"

小女孩说："我们都是被周家借走命的孩子。借完了，没地方去，就在这里玩。"

"秀兰姐姐的孩子也和我们一起玩过。" 小男孩说，"他叫元宝。后来他去找他娘了。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"陪他们玩","next":"huimen_exp2_child_ghost_play","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
