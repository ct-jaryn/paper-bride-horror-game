/**
 * 《回门》场景模块：exp3_main_well
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_well_bottom: createScene('huimen_exp3_well_bottom', {title:"三代井底",text:"你顺着井壁的凹槽，慢慢下到井底。\n\n井底没有水，只有一层厚厚的淤泥。淤泥里散落着白骨，有的完整，有的已经碎裂。你借着头上的微光，一具一具地辨认。\n\n最深处，有一具穿着红嫁衣的骨架，手腕上系着一根红绳。",effects:{"sanity":-5,"yin":6},choices:[createChoice({"text":"靠近红嫁衣骨架","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":3}}),createChoice({"text":"先祭拜其他尸骨","next":"huimen_exp3_well_bottom_bow","effects":{"sanity":5,"yin":-2}}),createChoice({"text":"在井底寻找出口","next":"huimen_exp3_well_bottom_exit","effects":{"yin":2}})]}),
    huimen_exp3_well_bottom_bow: createScene('huimen_exp3_well_bottom_bow', {title:"井底祭拜",text:"你跪在淤泥里，朝散落的白骨拜了三拜。\n\n\"我不知道你们的名字，但我知道你们受过苦。\"你说，\"我会把秀兰带出去。你们若愿意，也跟着光走。\"\n\n白骨上没有反应，但井底的阴气明显轻了。几缕磷光从骨缝里升起，像萤火虫一样飘向井口。",effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"去收敛秀兰的骨殖","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_wrap: createScene('huimen_exp3_well_bottom_wrap', {title:"包骨",text:"你脱下外套，把秀兰的骨殖一块一块包好。\n\n骨殖很轻，像是包着一捆干柴。你把她系在背上，感觉有一股凉意贴着脊背，却并不沉重。\n\n井壁上忽然渗出一行水字：\"背我回家。\"",effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_has_bones"},choices:[createChoice({"text":"寻找出路","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_change_dress: createScene('huimen_exp3_well_bottom_change_dress', {title:"换衣",text:"你从怀里取出那件粉色的嫁衣——是你在裁缝铺请刘姐连夜赶制的。\n\n你小心翼翼地替她脱下那件绣着井的红嫁衣，换上粉色的新衣。粉色嫁衣套上骨架时，井底忽然亮起一层柔和的光。\n\n\"好看。\"秀兰的声音在井壁间回荡，\"比周家那件好看多了。\"",effects:{"sanity":10,"yin":-5,"setFlag":"huimen_exp3_has_bones_dressed"},choices:[createChoice({"text":"带她离开井底","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_exit: createScene('huimen_exp3_well_bottom_exit', {title:"井底出口",text:"井底一侧的淤泥里，露出半扇石门。石门上刻着：\"背井者出，负骨者归。\"\n\n你用力推开石门，后面是一条向上的石阶。石阶尽头有光，不是月光，是天亮前的鱼肚白。",effects:{"yin":2},choices:[createChoice({"text":"沿石阶上去","next":"huimen_exp3_well_bottom_surface","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_surface: createScene('huimen_exp3_well_bottom_surface', {title:"出井",text:"你背着秀兰的骨殖，从石阶尽头钻出来。\n\n外面是一片陌生的河岸。河面上漂浮着无数纸船，每只纸船上都点着一盏小灯。秀兰的声音轻轻说：\"纸船会带我们离开。\"\n\n你找了一只最大的纸船，把骨殖放进去。纸船没有沉，反而稳稳地漂向河心。",effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"跟着纸船走","next":"huimen_exp3_ending_paper_boat_ferry_scene","effects":{"yin":1}}),createChoice({"text":"把船推远，自己游上岸","next":"huimen_exp3_well_bottom_shore","effects":{"yin":2}})]}),
    huimen_exp3_well_bottom_shore: createScene('huimen_exp3_well_bottom_shore', {title:"上岸",text:"你游到对岸，浑身湿透。\n\n回头再看，河面上的纸船已经汇成一条灯带，向远方漂去。你手里还攥着从船上抓下的一块船板，上面写着一个\"周\"字，被你一点点掰碎了。\n\n天快亮了。",effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"朝有人烟的地方走","ending":"huimen_exp3_ending_well_bottom_bones","effects":{"yin":0}})]}),
    huimen_exp3_ending_paper_boat_ferry_scene: createScene('huimen_exp3_ending_paper_boat_ferry_scene', {title:"渡",text:"你跟着纸船走了很久，直到河水变清，天边泛起金色。\n\n纸船在晨光里慢慢融化，秀兰的骨殖沉入河底。你跪在岸边，看着最后一缕纸灰被风吹散。\n\n\"谢谢你。\"她的声音从水里传来，\"这次我真的走了。\"",effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"目送她离去","ending":"huimen_exp3_ending_paper_boat_ferry","effects":{"yin":0}})]})
};
