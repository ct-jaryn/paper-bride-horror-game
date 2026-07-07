/**
 * 《回门》场景模块：exp2_child_ghost
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_child_ghost_playground: createScene('huimen_exp2_child_ghost_playground', {title:'鬼孩玩耍地',text:`你循着一阵孩子的嬉笑声，来到村边的一片空地。

空地上有许多孩子玩的痕迹：跳房子的格子用白灰画在地上，灰已经发黄，格子却还清晰；丢沙包的圈是用石头围的，圈里长满了野草；还有一架破旧的秋千，秋千绳已经断了一根，在风里荡来荡去，发出"嘎吱嘎吱"的响声。

但这里没有活的孩子。只有几个半透明的身影在追逐打闹，他们的笑声像铃铛，铃铛里却没有铜——是空心的，一碰就碎。

你走近，他们忽然停了下来，齐刷刷地望向你。他们的眼睛是黑的，黑得像两个小井。

"大哥哥，" 一个小女孩说，她的声音脆生生的，"你是来陪我们玩的吗？"

她朝你伸出手，那只手是透明的，你透过她的手，看见她身后的野草。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"陪他们玩","next":"huimen_exp2_child_ghost_play","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"问他们是谁","next":"huimen_exp2_child_ghost_ask","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_child_ghost_play: createScene('huimen_exp2_child_ghost_play', {title:'玩耍',text:`你蹲下身，和他们玩了起来。

你们踢毽子——毽子是纸做的，踢起来没有声音。你们跳房子——格子里的白灰会动，每跳一格，就有一个孩子的身影亮一下。你们丢沙包——沙包是空的，丢出去会"噗"地散成一团纸屑，然后又自动聚拢。

孩子们笑得很开心，他们的笑声像铃铛一样，把周围的阴气一点点驱散。你笑着笑着，忽然发现一个奇怪的事：你的影子也在笑，可你不记得自己在笑。

"大哥哥，你真好。" 小女孩说，她跳到你身边，拽了拽你的衣角，"作为谢礼，我们送你一样东西。"

她把手背在身后，神神秘秘的。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_played_with_child_ghosts"},choices:[createChoice({"text":"接过礼物","next":"huimen_exp2_child_ghost_gift","effects":{"yin":-3}}),createChoice({"text":"问他们想要什么","next":"huimen_exp2_child_ghost_wish","effects":{"yin":1}})]}),
    huimen_exp2_child_ghost_gift: createScene('huimen_exp2_child_ghost_gift', {title:'礼物',text:`小女孩把手伸到你面前，掌心里是一颗玻璃珠。

珠子是透明的，比大拇指盖还小，里面却有一缕红色的光在流动，像一根细细的红线，绕啊绕，绕不出那颗珠子。

"这是我们的眼泪。" 她说，声音忽然低了下去，"我们哭的时候，眼泪不落地，就结成这个。"

她把珠子塞进你手里，珠子是凉的，凉得像井水。

"你拿着它，周家的人就不敢欺负你。" 她说完，退后一步，和其他孩子站成一排。

他们一起朝你鞠了一躬，那个动作整齐得吓人，像是排练过很久。鞠完躬，他们的身影就淡了一些。`,effects:{"sanity":5,"yin":-5,"addItem":"鬼孩的眼泪"},choices:[createChoice({"text":"收好","next":"huimen_exp2_child_ghost_playground","effects":{"yin":1}}),createChoice({"text":"把它给秀兰","next":"huimen_exp2_riverbank","condition":{"hasItem":"鬼孩的眼泪"},"effects":{"sanity":5,"yin":-5,"removeItem":"鬼孩的眼泪"}})]}),
    huimen_exp2_child_ghost_wish: createScene('huimen_exp2_child_ghost_wish', {title:'愿望',text:`你问："你们想要什么？"

孩子们安静下来。嬉笑声一下子没了，空地上静得能听见秋千绳的嘎吱声。

一个小男孩低着头，踢着脚下的野草，踢了好一会儿才开口："我们想回家。可我们不知道家在哪里。"

"你们的名字呢？" 你问。

"我们没有名字。" 小女孩说，她的声音平静得像在说一件早就习惯了的事，"周家只叫我们'借来的命'。借来的，就不配有个名字。"

她说完，抬起头看你。她的眼睛是黑的，黑得像两口小井，井底有东西在动。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_knows_child_ghosts_wish"},choices:[createChoice({"text":"答应帮他们找名字","next":"huimen_exp2_child_ghost_playground","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"带他们回家","ending":"huimen_exp2_ending_child_ghost_home","effects":{"yin":-5}})]}),
    huimen_exp2_child_ghost_ask: createScene('huimen_exp2_child_ghost_ask', {title:'鬼孩询问',text:`你问："你们为什么会在这里？"

小女孩歪着头想了想："我们都是被周家借走命的孩子。借完了，没地方去，就在这里玩。"

"秀兰姐姐的孩子也和我们一起玩过。" 小男孩忽然插嘴，他的声音很轻，像是怕被谁听见，"他叫元宝。后来他去找他娘了。"

他说"元宝"两个字时，所有孩子都低下头。空地上响起一阵细碎的抽泣声，哭的人很多，声音叠在一起，像风穿过竹林。

你忽然觉得脚下的土地是热的，热得像有什么东西在底下贴着你的鞋底。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"陪他们玩","next":"huimen_exp2_child_ghost_play","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
