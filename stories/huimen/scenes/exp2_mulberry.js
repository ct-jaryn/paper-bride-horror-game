/**
 * 《回门》场景模块：exp2_mulberry
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_mulberry_bird: createScene('huimen_exp2_mulberry_bird', {title:'桑树鸟',text:`你来到桑树下。桑树已经很老了，树干粗得两人合抱不过来，树皮皴裂，像老人干枯的手背。树冠却还茂密，叶子在风里翻动，沙沙地响。

你抬头，发现枝头站着一只乌鸦。乌鸦的羽毛是黑的，黑得发亮，眼睛却是红的——红得像两颗红豆，一动不动地盯着你。

乌鸦嘴里叼着一根红绳。它看见你，"哇"地叫了一声，把红绳吐下来。红绳在空中飘了一阵，正好落在你脚边。

你捡起红绳。红绳上系着一个小布包，布包已经发黄，打开来，里面是一枚乳牙——小小的，白白的，牙根还沾着一点干透的血。

[red]这是一颗孩子的乳牙。是元宝的。他生下来没几天就死了，连牙都没长齐。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"桑树上的乳牙"},choices:[createChoice({"text":"把乳牙给元宝","next":"huimen_exp2_mulberry_bird_give","condition":{"flag":"huimen_exp_boy_friendly"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"收好","next":"huimen_exp_mulberry_tree","effects":{"yin":1}})]}),
    huimen_exp2_mulberry_bird_give: createScene('huimen_exp2_mulberry_bird_give', {title:'还牙',text:`你拿着乳牙，来到井边。

井栏上爬满青苔，井水黑沉沉的，像一只闭着的眼。你对着井说："元宝，你的牙，我找到了。"

水里泛起一圈涟漪。元宝从井里浮出来，小小的，半个身子还在水里。他看见乳牙，眼睛亮了，高兴得在水里蹦了一下，溅起几滴水花。

"我的牙！我找了很久！" 他伸手接过乳牙，把牙放回嘴里——下颌的牙床上缺了一颗，正好对上。牙一回到嘴里，他的身体就变得凝实了一些，不像刚才那样透明。

"谢谢你。" 他说，声音比刚才清楚了许多，"我会一直保护你的。"`,effects:{"sanity":10,"yin":-10,"removeItem":"桑树上的乳牙","setFlag":"huimen_exp2_returned_yuan_bao_tooth"},choices:[createChoice({"text":"回桑树","next":"huimen_exp_mulberry_tree","effects":{"yin":1}})]})
};
