/**
 * 《回门》场景模块：exp2_ruins
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_ruins_doll: createScene('huimen_exp2_ruins_doll', {title:'废墟纸偶',text:`你在废墟的角落里，发现一个破旧的纸偶。

废墟是一间塌了半边的老屋，断墙上爬满了藤蔓，地上铺着碎瓦和朽木。纸偶就蜷在角落里，半个身子埋在瓦砾下，像被人扔在那儿，再也没人管。

你扒开瓦砾，把纸偶取出来。纸偶穿着新郎服，红绸做的，已经褪色发白。脸上画着周文的模样——眉、眼、鼻、嘴，都画得很像，像是照着画像扎的。

纸偶的胸口贴着一张黄符，符上用朱砂写着秀兰的生辰八字。朱砂已经发黑，字却还认得出来。

[red]这是周文扎的替身，想替秀兰受过。他扎了自己，烧了自己，想让秀兰的怨气消一些。可怨气没有消，反而更重了——秀兰恨的不是他。[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"周文的纸偶"},choices:[createChoice({"text":"把纸偶烧了","next":"huimen_exp2_ruins_doll_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把纸偶给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"周文的纸偶"}})]}),
    huimen_exp2_ruins_doll_burn: createScene('huimen_exp2_ruins_doll_burn', {title:'废墟焚偶',text:`你点燃纸偶。

纸偶是竹篾扎的，外面糊的宣纸，一点就着。火苗从胸口烧起来，先把黄符烧了，朱砂发出"滋滋"的声响，像血在煎。

纸偶在火中扭曲，五官皱在一起，发出周文的声音："秀兰，对不起。"那声音从火里挤出来，断断续续，像是从很远的地方传来。

秀兰从井里浮出来。她站在废墟边，看着火光，没有说话。火光照在她的脸上，她的脸是平静的，没有恨，也没有原谅。但她的眼泪落进井里，一滴，两滴，井水变得清澈了一些，不再那么黑。`,effects:{"sanity":10,"yin":-10,"removeItem":"周文的纸偶"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
