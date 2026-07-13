/**
 * 《回门》场景模块：exp2_old_tree
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_old_tree: createScene('huimen_exp2_old_tree', {title:'老槐树下',text:`你再次来到村口的老槐树下。

老槐树已经很老了，树干粗得三人合抱不过来，树皮皴裂，像一张老人干枯的脸。树下落满了枯叶，踩上去"沙沙"地响。树根处裸露在外，盘根错节，像一群纠缠的手。

树干上刻满了名字，有新有旧，有的刻得深，有的刻得浅。你仔细辨认，发现最深的地方刻着"周文"和"秀兰"两个名字，中间画着一颗心。心是用刀尖一点一点凿出来的，凿得很深，三十年的风雨都没能磨平它。

[red]那是他们年轻时刻下的。那时候，他们还相信会有以后。[/red]

树下有一块石头，石头是温的，像有人常坐。`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"抚摸那两个名字","next":"huimen_exp2_old_tree_touch","effects":{"yin":-3}}),createChoice({"text":"在名字旁边刻字","next":"huimen_exp2_old_tree_carve","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_tree_touch: createScene('huimen_exp2_old_tree_touch', {title:'触名',text:`你伸出手指，轻轻抚摸"周文"和"秀兰"两个字。

树皮粗糙，字迹却很深，像是刻了很多遍。你顺着字的笔画一笔一笔地摸过去，忽然感到一阵温暖——不是树皮的热，是记忆里残留的温度。那温度从树皮里渗出来，渗进你的指尖，渗进你的心里。

"他刻了很多遍。" 秀兰的声音从树梢传来，轻得像风，"每次吵架，他都会来刻一遍，说这样我就不会离开他。他刻了七遍，每一遍都比上一遍深。"

"第七遍刻完的第二天，他们就把我抓走了。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_touched_old_tree_names"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_tree_carve: createScene('huimen_exp2_old_tree_carve', {title:'老树刻字',text:`你掏出小刀，在两个名字旁边刻下：

"愿来世，你们能堂堂正正在一起。"

刀在树皮上"咯吱咯吱"地刻，每一刀都溅出一点木屑。木屑是黄的，落在地上，像一地的桂花。

刻完，一阵风吹过。老槐树的叶子沙沙作响，每一片叶子都在动，像是有人在替它鼓掌，又像是有人在哭。那声音持续了很久，才慢慢停了。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_old_tree"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
