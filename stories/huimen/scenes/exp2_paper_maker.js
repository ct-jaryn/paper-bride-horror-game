/**
 * 《回门》场景模块：exp2_paper_maker
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_paper_maker_house: createScene('huimen_exp2_paper_maker_house', {title:'纸扎匠家',text:`你来到纸扎匠的住处。

屋子比纸扎铺还要破旧，墙是土坯的，已经裂了几道缝，缝里塞着稻草。屋顶的瓦碎了好几块，露出底下的椽子。门是半开的，门板上贴着褪色的门神，门神的脸被人用墨涂掉了。

屋里很暗，只有一盏豆油灯。墙上贴满了画废的脸谱——眼睛、眉毛、嘴巴，都是画坏了的，一张一张撕下来，贴在墙上，像一面墙的脸。屋里有一张床，床上放着一个没有完成的纸人。纸人的身形已经扎好，脸是空白的，等着人画上去。

床头挂着一幅画像，画是工笔，画得很细。画像上是一个年轻的女子，眉眼弯弯，笑得很甜，发髻上插着一朵绢花。画像下方写着"阿绣"两个字，字是秀气的楷书。

[red]这是扎纸匠一生唯一的牵挂。他扎了一辈子纸人，每一个都当是阿绣，没有一个像。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"查看未完成的纸人","next":"huimen_exp2_paper_maker_doll","effects":{"yin":2}}),createChoice({"text":"翻看床头的日记","next":"huimen_exp2_paper_maker_diary","effects":{"yin":1}}),createChoice({"text":"对着画像说话","next":"huimen_exp2_paper_maker_painting","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_paper_maker_doll: createScene('huimen_exp2_paper_maker_doll', {title:'未完成的纸人',text:`你走近那个未完成的纸人，凑近了看。

纸人的身材纤细，不像男子，更像女子。竹篾扎的骨架，外面糊着白色的宣纸，纸很薄，能看见里面竹篾的轮廓。纸人的胸口写着"阿绣"二字，是用朱砂写的，字已经发暗。

"我想给她扎一个身体。" 扎纸匠的声音从背后传来，沙哑，疲惫，"这样她就能从画里走出来，和我说话了。"

你转身，看见老人站在门口。他的眼眶里湿润了，眼角的墨渍——那是他常年画脸谱蹭上的——和泪水混在一起，流下来，黑一道白一道。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"帮他完成纸人","next":"huimen_exp2_paper_maker_finish","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"告诉他阿绣已经解脱","next":"huimen_exp2_paper_maker_release","condition":{"flag":"huimen_exp2_axiu_released"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"离开","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}})]}),
    huimen_exp2_paper_maker_finish: createScene('huimen_exp2_paper_maker_finish', {title:'完成纸人',text:`你拿起老人桌上的笔，蘸了墨，帮纸人画上眉眼。

你画得并不好，眉画歪了，眼画大了。可老人不在乎，他站在你身后，看一笔，点一下头，像是在确认什么。

画完，他抱起纸人，轻轻放在床上，给她盖好被子。

"阿绣，" 他说，声音在抖，"你看，有人愿意帮我完成你。"

纸人的嘴角似乎动了动，像是在笑。那笑很淡，淡得像一缕烟。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_finished_axiu_doll"},choices:[createChoice({"text":"查看日记","next":"huimen_exp2_paper_maker_diary","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_paper_maker_release: createScene('huimen_exp2_paper_maker_release', {title:'纸匠解脱',text:`你告诉扎纸匠："阿绣已经解脱了。她去了一个没有周家的地方，那里没有井，没有纸人，没有冥婚。"

老人愣了很久，久到你以为他没听见。然后他笑了，那笑容里有释然，也有不舍。他从枕下抽出一封信，递给你。信封已经发黄，上面写着"遗书"两个字。

"那我也该走了。" 他说，"请你帮我把这个烧了。烧了，我就能去找她了。"

你接过遗书，信封很轻，却沉得让你手腕发酸。`,effects:{"sanity":5,"yin":-5,"addItem":"纸扎匠遗书"},choices:[createChoice({"text":"烧掉遗书","ending":"huimen_exp2_ending_paper_maker_truth","effects":{"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}})]}),
    huimen_exp2_paper_maker_diary: createScene('huimen_exp2_paper_maker_diary', {title:'纸匠日记',text:`你翻开床头的日记。

日记是手缝的，布面，已经磨损得看不出原本的颜色。纸页发黄，字迹工整，是扎纸匠的笔迹。

日记里记载着扎纸匠的一生。每一页都在念叨阿绣：

[faded]"今日扎纸人第七十三个，仍不像阿绣。眉画得不像，眼画得不像，嘴也不像。我画了三十年，画不出她的笑。"[/faded]
[faded]"阿绣，我若能早一日带你走，你也不会沉塘。是我没用，我只敢扎纸人，不敢救人。"[/faded]
[faded]"秀兰死了，又一个女子死了。周家的债，什么时候能还完？我替他们扎的每一个纸人，都封着一个女子的魂。我是个罪人。"[/faded]

最后一页，字迹潦草，墨很淡，像是没墨了还硬写：

"我扎不动了。愿以纸骨，换阿绣来生。"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_read_paper_maker_diary"},choices:[createChoice({"text":"把日记收好","next":"huimen_exp2_paper_maker_house","effects":{"yin":1,"addItem":"纸扎匠日记"}}),createChoice({"text":"烧了日记","next":"huimen_exp2_paper_maker_house","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_paper_maker_painting: createScene('huimen_exp2_paper_maker_painting', {title:'画像',text:`你对着阿绣的画像说："阿绣，扎纸匠一直在等你。他扎了一辈子纸人，每一个都当是你。如果你听见了，就去见他吧。"

画像上的女子眨了眨眼——你以为是看花了眼，可她真的眨了。然后她笑了，笑得比画里更甜。她的笑容从画里渗出来，像水从画里流出来，化作一道光，飘出窗外，飘向祖坟地的方向。

扎纸匠推门而入，正好看见那道光。他的眼睛瞪大了，手里的东西"啪"地掉在地上。他追出去，一边跑一边喊："阿绣！阿绣！"

那声音里有三十年的等待，响彻整个村子。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_called_axiu_from_painting"},choices:[createChoice({"text":"跟着去祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}}),createChoice({"text":"留在屋里","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}})]})
};
