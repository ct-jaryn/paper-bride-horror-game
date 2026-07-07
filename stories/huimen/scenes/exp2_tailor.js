/**
 * 《回门》场景模块：exp2_tailor
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_tailor_shop: createScene('huimen_exp2_tailor_shop', {title:'裁缝铺',text:`你循着一股若有若无的樟脑味，来到一间裁缝铺前。

铺子是木板的，门面已经发黑，招牌挂在门楣上，写着"周记裁缝"四个字，字是金漆写的，漆已经剥落大半。门是虚掩的，你一推就开。

铺子里挂着许多嫁衣，每一件都红得刺眼。嫁衣是绸缎的，挂在木架上，像一排没有身体的红人。空气里弥漫着一股樟脑味，混着丝绸的腥气和陈年的灰尘味。

裁缝台上放着一把剪刀，剪刀是铁的，已经生锈。剪刀上缠着一缕长发——黑得发亮，很长，缠了好几圈，像是有人故意缠上去的。

墙上贴着许多纸条，都是尺寸和名字。你一条条看过去，看见了秀兰的名字，后面写着"嫁衣一套，加急"。字迹是裁缝的，工整，却有些抖，像是写的时候手不稳。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"查看那件嫁衣","next":"huimen_exp2_tailor_dress","effects":{"yin":2}}),createChoice({"text":"拿起剪刀","next":"huimen_exp2_tailor_scissors","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已知道秀兰的遭遇，柜台下似乎藏着更多身形","next":"huimen_exp2_tailor_secret","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_tailor_dress: createScene('huimen_exp2_tailor_dress', {title:'裁缝铺嫁衣',text:`你取下那件绣着"秀兰"二字的嫁衣。

嫁衣是崭新的，红绸缎，金线绣的鸳鸯，针脚细密，像是刚做好没多久。领口、袖口、裙摆，每一处都绣着桂花，金线在灯光下闪。可它永远不会有人穿了。

你在嫁衣内衬里发现一行小字，是用墨写的，藏在领口的翻边里，不翻开看不见：

[faded]"愿兰妹新婚大喜，白头偕老。——周文"[/faded]

[red]这是祖父为秀兰订做的嫁衣。他订做的时候，秀兰还活着，还怀着他的孩子。嫁衣做好了，秀兰却已经死了。嫁衣挂在这里，三十年，等着一个永远不会来穿它的新娘。[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"秀兰的嫁衣（裁缝铺）"},choices:[createChoice({"text":"把嫁衣带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的嫁衣（裁缝铺）"}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_scissors: createScene('huimen_exp2_tailor_scissors', {title:'剪刀',text:`你伸手，拿起那把缠着头发的剪刀。

剪刀很沉，沉得不像一把剪刀，像吸了很多年的怨气。铁是凉的，凉得刺骨。你刚拿起它，就听见一个女子的声音，从剪刀里传来：

"别剪，那是我的头发。"

声音很轻，却很清楚，像是贴着你的耳朵说的。你一惊，剪刀差点脱手。

你放下剪刀。剪刀一沾台面，缠在上面的头发就自动松开，像活了一样，飘向门外，飘进夜色里，不见了。`,effects:{"sanity":-3,"yin":1,"addItem":"裁缝剪刀"},choices:[createChoice({"text":"把剪刀带给扎纸匠","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret: createScene('huimen_exp2_tailor_secret', {title:'裁缝铺密室',text:`你蹲下身，在裁缝铺的柜台下摸到一个暗格。

暗格是木的，做了一个假底，不仔细看发现不了。你抠开假底，里面有一卷布。布是白棉布，卷得很整齐，用红线系着。

你展开布卷，发现布上画着许多女子的身形——是用墨画的，每一个身形都画得很细，连肩宽、腰围、胸围都标了尺寸。每一道身形旁边都写着名字和尺寸，字迹是裁缝的。

[red]周家每害一个女子，都会先给她做一身嫁衣。嫁衣做好，女子就成了周家的"鬼新娘"。这卷布，是周家三十年的"新娘名册"。[/red]`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_found_tailor_secret"},choices:[createChoice({"text":"烧了布卷","next":"huimen_exp2_tailor_secret_burn","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"把秀兰的嫁衣剪下来","next":"huimen_exp2_tailor_secret_cut","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret_burn: createScene('huimen_exp2_tailor_secret_burn', {title:'焚卷',text:`你点燃布卷。

布是棉的，一点就着。火光里，许多女子的身影浮现出来。她们穿着嫁衣，在火中跳舞，舞姿老旧，像是几十年前的舞步。她们跳着跳着，就化了，化成灰烬，落了一地。

"谢谢你。" 她们说，声音从火里传出来，叠在一起，"我们不用再穿周家的嫁衣了。"`,effects:{"sanity":-5,"yin":10},choices:[createChoice({"text":"离开","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret_cut: createScene('huimen_exp2_tailor_secret_cut', {title:'剪嫁衣',text:`你拿起裁缝剪刀，对准布卷上秀兰的身形，剪了下去。

剪刀"咔嚓"一声，布上的秀兰忽然动了。她朝你福了一福，姿态老旧，像是从前的女子。然后她从布上走下来，脚一沾地，就化作一道光，飞入你的怀中。

"带我走。" 她说，声音很轻，"带我离开这卷布。我在这里躺了三十年，躺得腰都直不起来了。"`,effects:{"sanity":5,"yin":-5,"addItem":"布上的秀兰"},choices:[createChoice({"text":"带她去找秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"布上的秀兰"}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]})
};
