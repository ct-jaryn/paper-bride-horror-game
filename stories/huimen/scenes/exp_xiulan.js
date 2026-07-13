/**
 * 《回门》场景模块：exp_xiulan
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_show_xiulan_photo: createScene('huimen_exp_show_xiulan_photo', {title:'给秀兰看旧照',text:`你从怀里掏出那张泛黄的照片，对着空气轻声说："秀兰，这是你的照片。"

一阵阴风吹过，照片从你指间飞出去，悬在半空。照片里的秀兰动了，她眨了眨眼，嘴角慢慢翘起来，露出一个清亮的笑。

"我都忘了，我以前长这样。"她的声音从照片里传出来，带着一丝恍惚，"那时候，我还想着要考女校呢。"

照片缓缓飘回你手里。你翻过来看，背面不知何时多了一行字，是娟秀的小楷：

[faded]"愿来生，生于寻常人家。"[/faded]

你用指腹摩挲那行字，感到照片微微发烫，像是一个人的体温，透过薄薄的纸页传过来。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰旧照片","setFlag":"huimen_exp_showed_photo"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_forgive: createScene('huimen_exp_xiulan_forgive', {title:'原谅',text:`你对着那片浓得化不开的黑暗说："秀兰，对不起。周家对不起你。我会让所有人知道你的事。"

黑暗里亮起一点光，很弱，像一盏快要熄灭的灯。秀兰的身影出现在光里，她没有盖头，没有血泪，只是一个穿着旧布衫、疲惫不堪的姑娘。

"我不要所有人都知道。"她说，"我只要你记得。"

你郑重地点头："我记得。"

她伸出手，轻轻摸了摸你的脸。那只手很凉，像深秋的井水，但你没有躲。

"你和他很像。"她说，"但你比他勇敢。"

光灭了。你发现自己站在村街上，抬头看，天边那轮月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
