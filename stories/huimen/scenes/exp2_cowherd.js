/**
 * 《回门》场景模块：exp2_cowherd
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_cowherd_hut: createScene('huimen_exp2_cowherd_hut', {title:'牧童小屋',text:`你循着一阵断断续续的牛铃声，来到山脚下的一座小屋前。

屋子很小，比一间柴房大不了多少。屋顶上长满了野草，草已经枯黄，在风里瑟瑟发抖。门口挂着一个生锈的牛铃，铃舌已经没了，只剩空壳，风一吹，发出沉闷的"咣"声，像有人在敲一口空棺。

你推开门，门是虚掩的，一推就开。屋里很暗，只有从墙缝里漏进来的一线天光。地上铺着稻草，稻草已经发黑，散发出一股霉湿的气息。

屋里有一个小男孩，七八岁的模样，坐在稻草上，正用一根草茎编一只蚱蜢。他的手指很细，是透明的，你透过他的手指，能看见他身后的墙。

他抬头看你，眼睛是透明的，像两汪清水。

"你是来找牛铃的吗？" 他问，声音脆生生的，像山泉。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问他牛铃在哪里","next":"huimen_exp2_cowherd_bell","effects":{"yin":1}}),createChoice({"text":"陪他编蚱蜢","next":"huimen_exp2_cowherd_play","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_cowherd_bell: createScene('huimen_exp2_cowherd_bell', {title:'牛铃',text:`牧童放下手里的草蚱蜢，抬头看你。

"我的牛铃挂在老槐树上。" 他说，"没有牛铃，我找不到回家的路。"

"我帮你找。" 你说。

牧童笑了，笑容里有一种奇怪的老成，不像一个孩子该有的："真的？姐姐说，会有一个人来帮我找的。"

他说"姐姐"时，眼神往窗外飘了一下，像是在看什么人。你顺着他的目光看过去，窗外什么都没有，只有一片枯黄的野草。

"姐姐是谁？" 你问。

牧童没有回答，只是低头继续编他的蚱蜢。他的手指动得很快，草茎在他指间翻飞，像活的一样。`,effects:{"sanity":3,"yin":-3,"setFlag":"huimen_exp2_promised_cowherd_bell"},choices:[createChoice({"text":"去老槐树找牛铃","next":"huimen_exp2_dawn_tree_cowherd","effects":{"yin":1}}),createChoice({"text":"先陪他玩","next":"huimen_exp2_cowherd_play","effects":{"yin":-3}})]}),
    huimen_exp2_cowherd_play: createScene('huimen_exp2_cowherd_play', {title:'编蚱蜢',text:`你坐下来，和牧童一起编蚱蜢。

稻草扎手，你编得笨，草茎总是断。牧童却编得很顺，他的手指是透明的，却灵巧得很，草茎在他指间听话地绕来绕去。不一会儿，一只草蚱蜢就编好了，腿是腿，须是须，比真的还像。

"送给你。" 他说，把蚱蜢递到你手里，"它会保护你的。"

蚱蜢是干的，放在手心里却有一种微弱的暖意，像握着一颗小小的、跳得很慢的心。`,effects:{"sanity":5,"yin":-5,"addItem":"草蚱蜢"},choices:[createChoice({"text":"收好","next":"huimen_exp2_cowherd_hut","effects":{"yin":1}}),createChoice({"text":"去找牛铃","next":"huimen_exp2_dawn_tree_cowherd","effects":{"yin":1}})]}),
    huimen_exp2_dawn_tree_cowherd: createScene('huimen_exp2_dawn_tree_cowherd', {title:'槐上取铃',text:`你来到村口老槐树下。

老槐树的枝桠伸得很开，像一只张开的手。每一根枝条上都挂着褪色的红绳，红绳末端系着纸钱，纸钱已经发白，在风里沙沙作响。

牛铃挂在最高的树枝上，已经生了锈，锈把铃舌和铃壳粘在一起，摇不动。你脱了鞋，爬上树，树皮粗糙，磨得你手心发疼。

爬到一半，你听见树干里传来一阵细微的哭声，像是从树心里渗出来的。你没有停，继续往上爬。

终于够到牛铃。你用力一拽，铃身"咯"的一声，锈裂开，铃舌松了。你把它取下来，捧在手里。

铃身上刻着两个字："回家"。

字是新的，像是刚刻上去的。`,effects:{"sanity":3,"yin":1,"addItem":"牧童的牛铃"},choices:[createChoice({"text":"把牛铃还给牧童","next":"huimen_exp2_cowherd_home","condition":{"hasItem":"牧童的牛铃"},"effects":{"sanity":10,"yin":-10,"removeItem":"牧童的牛铃"}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_cowherd_home: createScene('huimen_exp2_cowherd_home', {title:'归家',text:`你把牛铃交给牧童。

他接过铃，摇了摇。清脆的响声传遍村子，铃声不大，却传得很远，像水波一样荡开去。村里的纸人纷纷停下动作，朝这边看。

"我可以回家了。" 他高兴地说，眼睛亮了一下，"姐姐，谢谢你。"

他牵起你的手。他的手是凉的，却有一种孩子的柔软。他带你走出山村，纸人纷纷让开，不敢靠近，像是怕那铃声。

到了村口，老槐树下，他停下来。他把牛铃重新递给你，这次是送的。

"以后你迷路了，摇一摇，我就来找你。" 他说。

他说完，转身朝村外的雾里走去。你看见雾里有一头老牛在等他，老牛的身上驮着一个女人。那女人朝你福了一福，然后和牧童一起消失在雾里。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_cowherd_released"},choices:[createChoice({"text":"收下牛铃","ending":"huimen_exp2_ending_cowherd_bell","effects":{"yin":-5}})]})
};
