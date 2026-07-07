/**
 * 《回门》场景模块：exp2_school
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_school: createScene('huimen_exp2_school', {title:'废弃学堂',text:`你来到村口的学堂遗址。

学堂只剩下一间正屋，屋顶塌了一半，剩下的瓦片也松动了，风一吹就"哗啦哗啦"地响。墙是土坯的，已经裂了几道缝，缝里塞着稻草。黑板上还留着模糊的字迹，是被雨水冲淡了的粉笔字，辨不清写的什么。

你走进去，课桌上积着厚厚的灰，灰里混着虫壳和蛛网。每张桌子上都放着一个砚台，砚台已经干透，墨结成一块黑石头。桌椅歪歪斜斜，像是在匆忙中被人丢下的。

你走到讲台前，抬头看黑板。黑板上写着一行字，字是用白粉笔写的，写得很用力，每一笔都把粉笔按断了：

[faded]"女子无才便是德。"[/faded]

[red]秀兰曾经趴在窗外，偷听这里的课。她听得入神，被先生发现，赶走了。先生赶她的时候说："女子读什么书？回家学绣花去。"[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"坐在秀兰曾经的位置","next":"huimen_exp2_school_desk","effects":{"yin":1}}),createChoice({"text":"翻看课桌上的书本","next":"huimen_exp2_school_book","effects":{"yin":1}}),createChoice({"text":"在黑板上写字","next":"huimen_exp2_school_blackboard","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_school_desk: createScene('huimen_exp2_school_desk', {title:'课桌',text:`你坐在一张靠窗的课桌前。窗是破的，风从破洞里吹进来，吹动桌上的灰。

桌面上刻着许多小字，都是学生无聊时留下的。有刻名字的，有刻"到此一游"的，有画小人的。你一条条看过去，忽然看见一行熟悉的字，刻在桌角最不起眼的地方：

[faded]"秀兰到此一游。民国二十一年。"[/faded]

字是用发簪刻的，笔锋娟秀，是一个女子的笔迹。刻得很浅，像是怕被人发现，刮掉了又长出来，长出来又刮掉，反反复复，留下了痕。

[red]她真的来过。她趴在窗外偷听，夜里偷偷溜进来，在自己的桌上刻下名字，像一个孩子。[/red]`,effects:{"sanity":-3,"yin":1,"setFlag":"huimen_exp2_sat_at_school_desk"},choices:[createChoice({"text":"也刻下一行字","next":"huimen_exp2_school_desk_carve","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_school","effects":{"yin":1}})]}),
    huimen_exp2_school_desk_carve: createScene('huimen_exp2_school_desk_carve', {title:'学堂刻字',text:`你掏出小刀，在秀兰的名字旁边刻下：

"周秀兰，民国三年生，民国二十三年卒。周家后人铭记。"

刀在木桌上"咯吱咯吱"地刻，每一刀都溅出一点木屑。刻完，你用手抹了抹桌面。桌面微微发热，像是有一个人，贴着桌底，把手心按在桌板上，向你道谢。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_at_school"},choices:[createChoice({"text":"回学堂","next":"huimen_exp2_school","effects":{"yin":1}})]}),
    huimen_exp2_school_book: createScene('huimen_exp2_school_book', {title:'书本',text:`你翻开一本破旧的课本。

课本是线装的，封皮已经脱落，纸页发黄发脆。你翻了几页，发现里面夹着一张纸条。纸条是宣纸，折得很小，折成一只燕子的形状。

你小心地展开，纸上是秀兰的字迹，娟秀，工整：

[faded]"今日偷听先生讲《木兰辞》，甚喜。愿天下女子，皆能如木兰，不必嫁人，不必死，可以自己选自己的路。"[/faded]

[red]她也曾有过梦想。她梦想的不是嫁人，是读书，是走出去，是做一个像木兰一样的人。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"秀兰的课堂笔记"},choices:[createChoice({"text":"把笔记收好","next":"huimen_exp2_school","effects":{"yin":1}}),createChoice({"text":"把笔记带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"秀兰的课堂笔记"}})]}),
    huimen_exp2_school_blackboard: createScene('huimen_exp2_school_blackboard', {title:'写字',text:`你拿起讲台上的粉笔。粉笔已经很短了，只剩一截，捏在手里刚刚好。

你抬手，把黑板上的"女子无才便是德"擦掉。粉笔灰纷纷扬扬地落下来，像一场小小的雪。

然后你写下："女子有才，亦有德。"

字写得很大，一笔一画，用力得把粉笔按断了两次。粉笔灰在阳光下飘，像雪，又像骨灰。你仿佛看见秀兰站在窗外，朝你笑，那笑容很短，一闪就没了。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_wrote_on_blackboard"},choices:[createChoice({"text":"回学堂","next":"huimen_exp2_school","effects":{"yin":1}})]})
};
