/**
 * 《回门》场景模块：exp_women
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_old_woman: createScene('huimen_exp_old_woman', {title:'卖纸老妇',text:`你在巷子里遇见一个老妇。

她推着一辆木车，车上堆满了纸钱、纸人、纸衣。她看见你，咧嘴笑了，露出没有牙的牙龈。

"买张脸吧？" 她说，"你的脸太像周家的人了，不吉利。买张新脸，秀兰就认不出你。"

她拿起一张黄纸，纸上画着一张陌生的男人的脸。

"这张好，" 她说，"是个读书人，死在科举那年，怨气不重。"

[red]你看着那张脸，觉得它在对你眨眼。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"买张脸","next":"huimen_exp_buy_face","effects":{"sanity":-5,"yin":3,"addItem":"纸脸"}}),createChoice({"text":"拒绝","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}}),createChoice({"text":"问她秀兰的事","next":"huimen_exp_ask_old_woman","effects":{"yin":1}})]}),
    huimen_exp_ask_old_woman: createScene('huimen_exp_ask_old_woman', {title:'老妇人的话',text:`老妇叹了口气，放下手里的纸人。

"秀兰啊，是个苦命的孩子。她本可以嫁到镇上当教书先生的太太，可偏偏看上了周家少爷。"

"周家少爷也是真心喜欢她的，但他护不住她。周家的女人，从来只分两种：有用的，和活埋的。"

她从车里翻出一张旧照片递给你。照片上是年轻的秀兰，穿着学生装，笑得很甜。

"拿着吧。" 她说，"让她看见自己以前的样子，也许就不那么恨了。"`,effects:{"sanity":-3,"yin":1,"addItem":"秀兰旧照片"},choices:[createChoice({"text":"把照片给秀兰看","next":"huimen_exp_show_xiulan_photo","condition":{"hasItem":"秀兰旧照片"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好照片，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_singing_woman: createScene('huimen_exp_singing_woman', {title:'夜歌',text:`你听见有人在唱歌。

歌声从远处传来，婉转凄凉，是一段你听不清词的古曲。你顺着歌声走，来到一座破败的戏台前。

戏台上站着一个穿红戏服的女子，水袖垂到地面。她没有脸，只有一团模糊的白影，但唱腔却清清楚楚：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

你想起村口旧报纸上的话：青石镇戏台，鬼戏又唱。

[red]这不是青石镇，但戏却是一样的戏。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"鼓掌","next":"huimen_exp_singing_woman_bow","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"问她是谁","next":"huimen_exp_singing_woman_ask","effects":{"yin":2}}),createChoice({"text":"悄悄离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_singing_woman_bow: createScene('huimen_exp_singing_woman_bow', {title:'谢幕',text:`你鼓起掌来。

戏台上的女子停住了。她缓缓转向你，虽然没有脸，你却感到她在"看"你。

"有活人的掌声……" 她说，"三十年没有了。"

她朝你深深一福，水袖拂过戏台边缘。戏台开始崩塌，砖瓦像纸一样飘落。

"告诉秀兰，" 她说，"戏散场了，该回家了。"

她化作一道红光，飞向井的方向。`,effects:{"sanity":5,"yin":-8,"setFlag":"huimen_exp_singer_released"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_singing_woman_ask: createScene('huimen_exp_singing_woman_ask', {title:'问名',text:`你问："你是谁？"

戏台上的女子沉默了一会儿，然后轻轻笑了。

"我是谁？" 她说，"我是被周家活埋的第十七个女子。秀兰是第十八个。"

"我们本来互不相识，死后却成了姐妹。她唱不了戏，我替她唱。我报不了仇，她替我报。"

她抬起水袖，指向村子深处："周家的罪，比你想的深。你若只救秀兰一个，是不够的。"

说完，她化作纸灰，散落在戏台上。`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_knows_seventeen_women"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
