/**
 * 《回门》场景模块：exp2_coffin
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_red_coffin_inside: createScene('huimen_exp2_red_coffin_inside', {title:'棺中',text:`你顺着井壁的石阶，再次下到井底，打开那口红棺。

棺是柏木的，刷了七遍朱漆，漆面在井底潮气里起了细密的裂纹，像蛛网，又像老人的手背。你伸手推棺盖，盖子很沉，却滑得很顺，像有人替你上了油。

棺中没有尸体。只有一件叠得整整齐齐的嫁衣，大红绸缎，金线绣的鸳鸯，针脚细密。嫁衣上放着一张照片，照片已经发黄，边角卷起，是年轻的秀兰和周文。

照片里，秀兰穿一件素色的旗装，站在一棵桂花树下。周文穿学生装，站在她身后半步，手搭在她肩上。两人笑得羞涩，眼神却是亮的。

你把照片翻过来，背面写着一行小字，是周文的笔迹：

[faded]"愿生生世世，不离不弃。"[/faded]

字是用毛笔写的，墨很浓，最后一笔拖得很长，像是写到一半手抖了。

你把照片贴在胸口，照片是凉的，凉得像井底的水。`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_opened_red_coffin_again"},choices:[createChoice({"text":"把照片给秀兰","next":"huimen_exp2_red_coffin_photo","effects":{"yin":-5}}),createChoice({"text":"把嫁衣收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"红棺中的嫁衣"}})]}),
    huimen_exp2_red_coffin_photo: createScene('huimen_exp2_red_coffin_photo', {title:'照片',text:`你拿着照片，爬出井口，走到那口老井边。井栏上爬满青苔，井水黑沉沉的，像一只闭着的眼。

你对着井说："秀兰，你看。"

水里泛起一圈涟漪。秀兰的身影慢慢浮出来，先是头发，然后是肩膀，最后是脸。她的脸是湿的，水珠从她的睫毛上滴下来，砸进井里，发出"叮"的一声。

她看着照片，手在发抖。她的手指是半透明的，你透过她的手指，能看见照片上周文的脸。

"他还留着。" 她说，声音很轻，像怕惊动什么，"我以为他早就烧了。烧了，我就不用再想他了。"

"他留着。" 你说，"直到死。"

秀兰沉默了很久。井水在她脸下轻轻晃动，映出她的脸，又碎开，再映出，再碎开。

"那我不怪他了。" 她终于说。

她的身影慢慢沉下去，井水恢复平静。你低头看照片，照片上的秀兰似乎也笑了一下。`,effects:{"sanity":10,"yin":-10,"removeItem":"红棺中的嫁衣"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
