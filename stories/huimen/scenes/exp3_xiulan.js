/**
 * 《回门》场景模块：exp3_xiulan
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_xiulan_ask_save: createScene('huimen_exp3_xiulan_ask_save', {title:'未了心愿',text:`井水平静下来，映出秀兰苍白的脸。

她的脸浮在水面上，水波一荡，五官就模糊了，像一张被水泡过的画。你蹲在井沿，和她隔着一丈深的水，却觉得她离你很近，近得你能看见她眼角那颗小小的泪痣。

"我想回家。"她说，声音从水底传上来，带着井水的凉，"不是周家，是我自己的家。我想让我娘知道，我没有做错事。"

她的手指划过水面，荡开一圈涟漪。涟漪一圈圈往外扩，扩到井沿，又折回来，像是有去无回的话。

[whisper]"还有……"她顿了顿，水面上浮起一层薄雾，"我想穿一次自己的嫁衣。不是周家给我穿的那件。"[/whisper]

她说"那件"两个字时，井底泛起一点暗红，像旧血被搅动了。`,effects:{"sanity":3,"yin":2},choices:[createChoice({"text":"答应带她回家","next":"huimen_exp3_xiulan_wish_home","effects":{"sanity":5,"yin":1,"setFlag":"huimen_exp3_wish_home"}}),createChoice({"text":"答应给她一件自己的嫁衣","next":"huimen_exp3_xiulan_wish_dress","effects":{"sanity":5,"yin":1,"setFlag":"huimen_exp3_wish_dress"}}),createChoice({"text":"问她还需要什么","next":"huimen_exp3_xiulan_wish_more","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_wish_home: createScene('huimen_exp3_xiulan_wish_home', {title:'回家',text:`秀兰笑了，那笑容像水面上最后一点月光。

笑得很淡，淡得你几乎要以为是自己看花了眼。但她确实在笑，眉眼弯弯，像她还是个在门槛上绣花的小姑娘时那样笑。

"我娘住在村东头，门口有棵石榴树。"她说，"她眼睛不好，你替我把顶针还给她。"

她抬起手，掌心里浮出一枚铜顶针，顶针上刻着一个"秀"字。顶针浮在井水上方，发着幽幽的光。

[faded]"她等我等了三十年。你告诉她，我没有做错事。"[/faded]

她的身影开始淡去，井水里只剩那弯残月。残月在水里晃了晃，也碎了。`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"离开井边","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_wish_dress: createScene('huimen_exp3_xiulan_wish_dress', {title:'秀兰心愿嫁衣',text:`"裁缝铺的刘姐手艺最好。"秀兰说，"我攒了三年布钱，本想请她做一件粉的。"

她说"粉的"两个字时，声音里带着一点羞，像一个还在憧憬嫁人的姑娘。井水里的月光在她身上镀了一层银边，让她看起来不像鬼，更像一个等了很久的新娘。

她的眼泪落进井水，没有溅起涟漪，而是变成一颗颗细小的珍珠，沉向井底。珍珠沉得很慢，每一颗都在水里转着圈，像是在找一个能安身的地方。

[faded]你伸手想去接，却只接到了一捧凉井水。[/faded]`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"拾起一颗珍珠","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"秀兰泪珠"}})]}),
    huimen_exp3_xiulan_wish_more: createScene('huimen_exp3_xiulan_wish_more', {title:'更多',text:`秀兰想了很久。

井水"咕咚"一声，像是在替她叹气。她低下头，水里的脸和井底的脸重叠在一起，分不清哪个是魂，哪个是骨。

"我还想……听人叫我的名字。"她终于开口，声音很轻，像怕惊动井底那些睡着的人，"不是周家媳妇，不是井里的东西，是秀兰。就是秀兰两个字。"

她说完，井水里泛起一层薄薄的光，像是谁把月光碾碎了撒进去。那光一圈圈荡开，照亮了井壁上那些刻满"秀兰"的字。

[whisper]原来那些字，都是她自己刻的。三十年，她一遍遍刻自己的名字，怕自己忘了。[/whisper]`,effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_wish_name"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_hand: createScene('huimen_exp3_xiulan_hand', {title:'牵手',text:`秀兰的手很凉，但不再是没有形状的雾气。

她的手指有骨节，有指甲，甚至有一道淡淡的茧——是常年握绣花针磨出来的。你握住她的手，像握住一块浸了井水的玉。

"地窖后面有一条密道，通向村口。"她说，目光避开你的眼睛，"但我还不能直接走出去。我的尸骨还在井里，你得把我捞上来。"

她说"尸骨"两个字时，手抖了一下。那抖动传到你掌心，让你心里一酸。

她的身影慢慢淡去，井水重新合拢。只留下一句话飘在水面上："我在井边等你。"

[faded]井沿上多了一枚铜顶针，不知何时放在那里的。[/faded]`,effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"去井边","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"先回村街准备","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"带着她，离开这条旧路","next":"huimen_exp3_return_mainline","condition":{"custom":(state)=>state.inventory.includes('秀兰的骨殖')||state.flags['huimen_exp3_freed_nine_women']===true},"effects":{"yin":0}})]}),
    huimen_exp3_well_bottom_xiulan_bones: createScene('huimen_exp3_well_bottom_xiulan_bones', {title:'秀兰的骨殖',text:`你轻轻拨开淤泥，露出红嫁衣下的骨架。

红嫁衣已经褪成暗红，绣的井纹却还清晰，针脚细密，是秀兰自己的手艺。你拨开嫁衣的领口，看见骨架很小，肩胛骨上还有一处旧伤，凹下去一块，像是很久以前被什么东西勒过——是红绳，勒了三十年都没长好。

嫁衣的袖口绣着井，井下绣着你的名字——不是周家的名字，是你在城里用的名字。

你蹲在淤泥里，盯着那两个字看了很久。井底的红光照着它们，让它们一笔一画都发着光。

[faded]这件是真真正正穿在她沉井那夜的红嫁衣。你在记忆里烧掉的那件，只是她怨念的投影。真正的嫁衣还在，井纹还在，你的名字也还在。[/faded]

[red]你这才明白，她一直在等你。从你出生那天起，她就知道你会回来。[/red]`,effects:{"sanity":-3,"yin":4,"addItem":"秀兰的骨殖"},choices:[createChoice({"text":"把骨殖包好","next":"huimen_exp3_well_bottom_wrap","effects":{"sanity":3,"yin":1}}),createChoice({"text":"给她换上带来的嫁衣","next":"huimen_exp3_well_bottom_change_dress","condition":{"flag":"huimen_exp3_wish_dress"},"effects":{"sanity":8,"yin":-3}})]}),
    huimen_exp3_return_mainline: createScene('huimen_exp3_return_mainline', {title:'回老宅',text:`你带着秀兰的骨殖，沿着村街走回老宅。

夜已经深得像一口井。老宅的轮廓在雾里若隐若现，门口那盏红灯笼还亮着，把门前的青石照得像一块血玉。你绕过正门，从侧门翻进后院。

后院的井绳还在，井沿上的铜镜碎片已经不见了。秀兰的骨殖在你怀里很轻，轻得像一包纸灰。你听见堂屋里传来低低的唢呐声，那是周家还在等你完成最后一件事。

[red]是时候了。[/red]`,effects:{"yin":2},choices:[createChoice({"text":"潜入后院井边","next":"sneak_back_yard"})]})
};
