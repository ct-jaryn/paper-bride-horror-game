/**
 * 《回门》场景模块：exp2_mulberry
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_mulberry_bird: createScene('huimen_exp2_mulberry_bird', {title:'桑树鸟',text:`你来到桑树下，发现枝头站着一只乌鸦。

乌鸦的眼睛是红色的，嘴里叼着一根红绳。它看见你，把红绳吐下来，正好落在你脚边。

[red]红绳上系着一个小布包，布包里是一枚乳牙。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"桑树上的乳牙"},choices:[createChoice({"text":"把乳牙给元宝","next":"huimen_exp2_mulberry_bird_give","condition":{"flag":"huimen_exp_boy_friendly"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"收好","next":"huimen_exp_mulberry_tree","effects":{"yin":1}})]}),
    huimen_exp2_mulberry_bird_give: createScene('huimen_exp2_mulberry_bird_give', {title:'还牙',text:`你拿着乳牙来到井边。

元宝从井里浮出来，看见乳牙，高兴地跳起来："我的牙！我找了很久！"

他把牙放回嘴里，身体变得凝实了一些。

"谢谢你。" 他说，"我会一直保护你的。"`,effects:{"sanity":10,"yin":-10,"removeItem":"桑树上的乳牙","setFlag":"huimen_exp2_returned_yuan_bao_tooth"},choices:[createChoice({"text":"回桑树","next":"huimen_exp_mulberry_tree","effects":{"yin":1}})]})
};
