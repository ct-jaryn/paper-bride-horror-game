/**
 * 《回门》场景模块：exp2_school
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_school: createScene('huimen_exp2_school', {title:'废弃学堂',text:`你来到村口的学堂遗址。

学堂只剩下一间正屋，屋顶塌了一半，黑板上还留着模糊的字迹。课桌上积着厚厚的灰，每张桌子上都放着一个砚台。

你走到讲台前，黑板上写着一行字：

[faded]"女子无才便是德。"[/faded]

[red]秀兰曾经趴在窗外，偷听这里的课。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"坐在秀兰曾经的位置","next":"huimen_exp2_school_desk","effects":{"yin":1}}),createChoice({"text":"翻看课桌上的书本","next":"huimen_exp2_school_book","effects":{"yin":1}}),createChoice({"text":"在黑板上写字","next":"huimen_exp2_school_blackboard","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_school_desk: createScene('huimen_exp2_school_desk', {title:'课桌',text:`你坐在一张靠窗的课桌前。

桌面上刻着许多小字，都是学生无聊时留下的。你一条条看过去，忽然看见一行熟悉的字：

[faded]"秀兰到此一游。民国二十一年。"[/faded]

[red]她真的来过。[/red]`,effects:{"sanity":-3,"yin":1,"setFlag":"huimen_exp2_sat_at_school_desk"},choices:[createChoice({"text":"也刻下一行字","next":"huimen_exp2_school_desk_carve","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_school","effects":{"yin":1}})]}),
    huimen_exp2_school_desk_carve: createScene('huimen_exp2_school_desk_carve', {title:'学堂刻字',text:`你掏出小刀，在秀兰的名字旁边刻下：

"周秀兰，民国三年生，民国二十三年卒。周家后人铭记。"

刻完，你感到桌面微微发热，像是有个人在感谢你。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_at_school"},choices:[createChoice({"text":"回学堂","next":"huimen_exp2_school","effects":{"yin":1}})]}),
    huimen_exp2_school_book: createScene('huimen_exp2_school_book', {title:'书本',text:`你翻开一本破旧的课本。

课本里夹着一张纸条，纸条上是秀兰的字迹：

[faded]"今日偷听先生讲《木兰辞》，甚喜。愿天下女子，皆能如木兰。"[/faded]

[red]她也曾有过梦想。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"秀兰的课堂笔记"},choices:[createChoice({"text":"把笔记收好","next":"huimen_exp2_school","effects":{"yin":1}}),createChoice({"text":"把笔记带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"秀兰的课堂笔记"}})]}),
    huimen_exp2_school_blackboard: createScene('huimen_exp2_school_blackboard', {title:'写字',text:`你拿起粉笔，把黑板上的"女子无才便是德"擦掉。

然后你写下："女子有才，亦有德。"

粉笔灰纷纷扬扬，像是一场小小的雪。你仿佛看见秀兰站在窗外，朝你笑。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_wrote_on_blackboard"},choices:[createChoice({"text":"回学堂","next":"huimen_exp2_school","effects":{"yin":1}})]})
};
