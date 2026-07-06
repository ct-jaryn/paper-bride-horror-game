/**
 * 《回门》场景模块：exp2_main
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_stone_bridge: createScene('huimen_exp2_stone_bridge', {title:'石桥洞',text:`你来到石桥下。

桥洞里堆满了纸人，都是小孩子的模样。他们蜷缩在一起，像一群受惊的猫。

"我们都是被周家借走命的孩子。" 一个纸孩子说，"秀兰姐姐答应过，会有人来还我们。"

[red]你数了数，有十几个。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"把长命锁给他们看","next":"huimen_exp2_stone_bridge_children","condition":{"hasItem":"秀兰的长命锁"},"effects":{"yin":-5}}),createChoice({"text":"问他们怎么才能解脱","next":"huimen_exp2_stone_bridge_ask","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank_walk","effects":{"yin":1}})]}),
    huimen_exp2_stone_bridge_children: createScene('huimen_exp2_stone_bridge_children', {title:'还锁',text:`你把长命锁放在纸孩子们中间。

锁一落地，就化作一道金光。纸孩子们纷纷站起来，身上的纸一点点褪去，露出透明的、像真正孩子一样的身影。

"我们可以走了。" 他们说，"谢谢你，还有秀兰姐姐。"

他们手拉着手，跑向河对岸，消失在晨光里。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的长命锁"},choices:[createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_stone_bridge_ask: createScene('huimen_exp2_stone_bridge_ask', {title:'石桥问解脱',text:`你问："怎么才能还你们自由？"

纸孩子说："把我们的名字从周家族谱上划掉。族谱上压着名字，我们的魂就飞不远。"

他指向村子的方向："去找村长。他知道族谱在哪里。"`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_knows_children_names"},choices:[createChoice({"text":"去找村长","next":"huimen_exp2_village_head_house","effects":{"yin":1}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_reed_bundle: createScene('huimen_exp2_reed_bundle', {title:'芦苇丛',text:`你拨开芦苇，发现里面藏着一艘小船。

船很小，只能坐一个人。船底铺着一件红色嫁衣，嫁衣上放着一根骨头。

[red]那不是人的骨头，是纸扎的骨架。[/red]

你拿起嫁衣，发现内衬上绣着"秀兰"二字。`,effects:{"sanity":-5,"yin":2,"addItem":"芦苇中的嫁衣"},choices:[createChoice({"text":"把嫁衣带回去给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"芦苇中的嫁衣"}}),createChoice({"text":"把船推回河里","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
