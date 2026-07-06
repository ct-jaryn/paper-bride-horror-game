/**
 * 《回门》场景模块：exp2_tailor
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_tailor_shop: createScene('huimen_exp2_tailor_shop', {title:'裁缝铺',text:`你来到一间裁缝铺前。

铺子里挂着许多嫁衣，每一件都红得刺眼。裁缝台上放着一把剪刀，剪刀上缠着一缕长发。

墙上贴着许多纸条，都是尺寸和名字。你看见了秀兰的名字，后面写着"嫁衣一套，加急"。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"查看那件嫁衣","next":"huimen_exp2_tailor_dress","effects":{"yin":2}}),createChoice({"text":"拿起剪刀","next":"huimen_exp2_tailor_scissors","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已知道秀兰的遭遇，柜台下似乎藏着更多身形","next":"huimen_exp2_tailor_secret","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_tailor_dress: createScene('huimen_exp2_tailor_dress', {title:'裁缝铺嫁衣',text:`你取下那件绣着"秀兰"二字的嫁衣。

嫁衣是崭新的，像是刚做好没多久。可它永远不会有人穿了。

你在嫁衣内衬里发现一行小字：

[faded]"愿兰妹新婚大喜，白头偕老。——周文"[/faded]

[red]这是祖父为秀兰订做的嫁衣。[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"秀兰的嫁衣（裁缝铺）"},choices:[createChoice({"text":"把嫁衣带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的嫁衣（裁缝铺）"}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_scissors: createScene('huimen_exp2_tailor_scissors', {title:'剪刀',text:`你拿起那把缠着头发的剪刀。

剪刀很沉，像是吸了很多年的怨气。你刚拿起它，就听见一个女子的声音："别剪，那是我的头发。"

你放下剪刀，头发自动松开，飘向门外。`,effects:{"sanity":-3,"yin":1,"addItem":"裁缝剪刀"},choices:[createChoice({"text":"把剪刀带给扎纸匠","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret: createScene('huimen_exp2_tailor_secret', {title:'裁缝铺密室',text:`你在裁缝铺的柜台下发现一个暗格。

暗格里有一卷布，布上画着许多女子的身形。每一道身形旁边都写着名字和尺寸。

[red]周家每害一个女子，都会先给她做一身嫁衣。[/red]`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_found_tailor_secret"},choices:[createChoice({"text":"烧了布卷","next":"huimen_exp2_tailor_secret_burn","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"把秀兰的嫁衣剪下来","next":"huimen_exp2_tailor_secret_cut","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret_burn: createScene('huimen_exp2_tailor_secret_burn', {title:'焚卷',text:`你点燃布卷。

火光里，许多女子的身影浮现出来。她们穿着嫁衣，在火中跳舞，最后化为灰烬。

"谢谢你。" 她们说，"我们不用再穿周家的嫁衣了。"`,effects:{"sanity":-5,"yin":10},choices:[createChoice({"text":"离开","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]}),
    huimen_exp2_tailor_secret_cut: createScene('huimen_exp2_tailor_secret_cut', {title:'剪嫁衣',text:`你用裁缝剪刀剪下秀兰的嫁衣身形。

布上的秀兰忽然动了，她朝你福了一福，然后从布上走下来，化作一道光，飞入你的怀中。

"带我走。" 她说。`,effects:{"sanity":5,"yin":-5,"addItem":"布上的秀兰"},choices:[createChoice({"text":"带她去找秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"布上的秀兰"}}),createChoice({"text":"收好","next":"huimen_exp2_tailor_shop","effects":{"yin":1}})]})
};
