/**
 * 《回门》场景模块：exp2_main
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_stone_bridge: createScene('huimen_exp2_stone_bridge', {title:'石桥洞',text:`你循着一阵细碎的、像猫叫一样的哭声，来到石桥下。

石桥是青石砌的，年头很久了，桥墩上长满青苔，苔里藏着蜗牛的壳。桥洞里堆满了纸人，都是小孩子的模样，比巴掌大不了多少，穿着小红褂、小蓝裤，纸脸白得发亮。

他们蜷缩在一起，像一群受惊的猫，挤在桥洞最里面，不敢出来。有的纸人已经破了，露出里面的竹篾骨架，有的纸人还是新的，脸上一笔一画地画着笑。

你蹲下身，靠近他们。纸人们缩了缩，却没有跑。

"我们都是被周家借走命的孩子。" 一个纸孩子说，他的声音细得像蚊子，"秀兰姐姐答应过，会有人来还我们。她等了很久，等得魂都散了一半。"

[red]你数了数，有十几个。每一个纸人胸前都贴着一张黄符，符上写着他们的"借命"日期。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"把长命锁给他们看","next":"huimen_exp2_stone_bridge_children","condition":{"hasItem":"秀兰的长命锁"},"effects":{"yin":-5}}),createChoice({"text":"问他们怎么才能解脱","next":"huimen_exp2_stone_bridge_ask","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank_walk","effects":{"yin":1}})]}),
    huimen_exp2_stone_bridge_children: createScene('huimen_exp2_stone_bridge_children', {title:'还锁',text:`你把长命锁从怀里掏出来，放在纸孩子们中间。

锁是银的，已经发黑，锁面上刻着"长命百岁"四个字，字是阳刻，摸起来有棱。锁一落地，就"叮"地响了一声，清脆得不像一块旧银。

锁化作一道金光，金光铺开来，把整个桥洞都照亮了。纸孩子们纷纷站起来，身上的纸一点点褪去，像蝉蜕壳。褪出来的影子是透明的，像真正孩子一样的身影。

"我们可以走了。" 他们说，声音叠在一起，像一串小铃铛，"谢谢你，还有秀兰姐姐。"

他们手拉着手，排成一队，跑向河对岸。最末一个小男孩回过头，朝你挥了挥手，然后消失在晨光里。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的长命锁"},choices:[createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_stone_bridge_ask: createScene('huimen_exp2_stone_bridge_ask', {title:'石桥问解脱',text:`你问："怎么才能还你们自由？"

纸孩子抬起头，那张纸脸上有眼，却不会眨。他想了想，纸脸皱了起来，像揉过的纸。

"把我们的名字从周家族谱上划掉。" 他说，"族谱上压着名字，我们的魂就飞不远。飞出去没多远，就被吸回来。"

他抬起纸手，指向村子的方向。那手指是软的，因为纸软。

"去找村长。" 他说，"他知道族谱在哪里。族谱放在他家的密室里，钥匙挂在他腰上，他睡觉都不摘。"`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_knows_children_names"},choices:[createChoice({"text":"去找村长","next":"huimen_exp2_village_head_house","effects":{"yin":1}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_reed_bundle: createScene('huimen_exp2_reed_bundle', {title:'芦苇丛',text:`你拨开芦苇，芦苇的叶子割手，割出一道细口子，渗出血珠。

芦苇丛里藏着一艘小船。船很小，只能坐一个人，船身是柏木的，已经发黑。船底铺着一件红色嫁衣，嫁衣是绸的，红得刺眼，像一摊血。

嫁衣上放着一根骨头。骨头很白，比人的骨头细，也比人的骨头轻。

[red]那不是人的骨头，是纸扎的骨架。[/red]

你拿起嫁衣，发现内衬上绣着"秀兰"二字，是用金线绣的，针脚细密，像是一个女人一针一针绣了很久。`,effects:{"sanity":-5,"yin":2,"addItem":"芦苇中的嫁衣"},choices:[createChoice({"text":"把嫁衣带回去给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"芦苇中的嫁衣"}}),createChoice({"text":"把船推回河里","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
