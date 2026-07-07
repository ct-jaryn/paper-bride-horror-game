/**
 * 《回门》场景模块：exp3_main_paper_shop
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_paper_shop_basement: createScene('huimen_exp3_paper_shop_basement', {title:`三层纸扎铺地下室`,text:`你掀开纸扎铺柜台后的布帘，发现一道向下的木梯。

梯子很窄，仅容一人侧身而下。木板上落满灰尘，却有一串新鲜的脚印——脚印很小，五指分明，像是女子的脚。你把手指按进脚印里，指尖触到一丝温热，像是刚踩下不久。

你顺着梯子下去，空气越来越闷，带着一股糊纸的浆糊味，底下还压着一层说不出的腥。

地下室里堆满了未完工的纸人，有的有脸，有的没有。有脸的那些都睁着眼，眼珠是用墨点上去的，黑得发亮，跟着你的脚步一起转动。

[faded]它们在等你。等了很久。[/faded]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"查看没有脸的纸人","next":"huimen_exp3_paper_shop_faceless","effects":{"yin":2}}),createChoice({"text":"找扎纸匠问问","next":"huimen_exp_paper_doll_craftsman","effects":{"yin":1}}),createChoice({"text":"点燃一盏油灯","next":"huimen_exp3_paper_shop_basement_light","effects":{"yin":2}})]}),
    huimen_exp3_paper_shop_faceless: createScene('huimen_exp3_paper_shop_faceless', {title:`无脸纸人`,text:`没有脸的纸人一共有七个，排成一排，像是在等什么东西。

它们的脸是一片空白，白纸糊得平平整整，连五官的轮廓都没有。可你走近时，却觉得它们在看你——那种被盯着的感觉，从七个方向同时压过来。

你听见它们身上发出细微的沙沙声，像是纸在呼吸。仔细一看，纸人的胸口都贴着一张黄纸，写着女子的名字和生辰。墨迹有新有旧，最旧的一张已经褪成淡黄。

最边上的那个，贴着"秀兰"。

那两个字是用朱砂写的，红得刺眼，像刚从伤口里渗出来的血。`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"撕下秀兰的纸","next":"huimen_exp3_paper_shop_faceless_tear","effects":{"sanity":3,"yin":-2}}),createChoice({"text":"给它们画上脸","next":"huimen_exp3_paper_shop_faceless_draw","effects":{"yin":5}})]}),
    huimen_exp3_paper_shop_faceless_tear: createScene('huimen_exp3_paper_shop_faceless_tear', {title:`撕名`,text:`黄纸一撕，那个无脸纸人忽然软倒，像被抽掉了骨头。

它软下去的样子不像纸，更像是一具没了气的身子，肩膀先塌，然后是腰，最后是膝盖，"扑通"一声跪在地上。

其他的纸人开始颤抖，发出婴儿哭泣般的声响。那声音又细又尖，从纸缝里钻出来，钻进你的耳朵里搅。

你赶紧把黄纸折好收进口袋，后退到梯子口。脚下踩到什么软软的东西，低头一看，是一缕头发，黑得发亮，缠在你鞋跟上。

纸人们慢慢平静下来，但它们的身体似乎比之前更瘦了——像是被撕掉的那张纸，带走了它们的一点什么。`,effects:{"sanity":3,"yin":-3,"addItem":"纸人名纸"},choices:[createChoice({"text":"离开地下室","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp3_paper_shop_faceless_draw: createScene('huimen_exp3_paper_shop_faceless_draw', {title:`画脸`,text:`你蘸着朱砂，给纸人一一画上眉眼。

第一张脸画完，纸人的嘴角动了动，像是要笑。第二张脸画完，它的眼睛眨了一下。画到第三个时，纸人忽然睁开眼睛——不是你画的那种眼，而是真的睁开了。

那眼睛里没有眼白，只有两团漆黑。它张开嘴，发出秀兰的声音："别画了。画脸就是借命。"

你吓得把笔一扔。笔掉在地上，朱砂溅开，像一朵小小的红花。

纸人们齐声叹了口气，像是在惋惜。它们的脸又慢慢退回空白，只留下你画的那三张，歪歪扭扭地挂在脸上，像戴错了面具。`,effects:{"sanity":-8,"yin":8},choices:[createChoice({"text":"烧毁所有纸人","next":"huimen_exp3_paper_shop_faceless_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"逃上梯子","next":"huimen_exp_paper_shop","effects":{"yin":2}})]}),
    huimen_exp3_paper_shop_faceless_burn: createScene('huimen_exp3_paper_shop_faceless_burn', {title:`焚毁`,text:`火从纸人脚下燃起，很快吞噬了整排无脸纸人。

它们在火里没有尖叫，只是静静地燃烧，像是在等待这一刻已经很久。火光照在它们空白的脸上，那些空白慢慢被熏黑，最后变成一张张笑着的脸——是火烧出来的，不是画出来的。

你站在火边，被热浪逼得睁不开眼。

最后，灰烬里露出七枚小小的骨珠。骨珠白得发亮，像是七颗被烧净了怨气的舍利。

你拾起骨珠，感觉它们在掌心里微微发温。那温度不像火，像是一个人体温最后散去前的余热。`,effects:{"sanity":5,"yin":-5,"addItem":"七枚骨珠"},choices:[createChoice({"text":"离开地下室","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp3_paper_shop_basement_light: createScene('huimen_exp3_paper_shop_basement_light', {title:`地下室的光`,text:`你点亮油灯，地下室里的阴影一下子退了很远。

那些阴影退得并不情愿，像被赶的蛇，一寸一寸往墙缝里钻。火苗很稳，照出一室的纸人和棺材。

在灯光照不到的角落里，有一口小小的纸棺材。棺材只有三尺长，漆是红的，红得发亮，像刚刷上去还没干透。棺材盖半开着，里面躺着一个穿着红肚兜的纸娃娃。

纸娃娃的脸上带着笑，那笑画得很精细，嘴角弯弯，眼睛弯弯，像是一个真在开心的孩子。它的小手里攥着一张纸条，纸条已经被它攥出了褶皱。

[faded]"吾儿周安，满月夭折，以纸代之。"[/faded]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"把纸娃娃抱出来","next":"huimen_exp3_paper_shop_baby_doll","effects":{"yin":3}}),createChoice({"text":"盖上棺材盖","next":"huimen_exp3_paper_shop_baby_doll_close","effects":{"sanity":3,"yin":1}})]}),
    huimen_exp3_paper_shop_baby_doll: createScene('huimen_exp3_paper_shop_baby_doll', {title:`纸娃娃`,text:`纸娃娃很轻，轻得像一只空心的鸡蛋。

你把它抱起来时，它忽然动了动，像是一个睡梦中的孩子翻了个身。它的小手松开，把纸条塞进你手里。

纸条背面还有一行小字，写得歪歪扭扭，像是用左手写的：

[faded]"娘亲秀兰，愿儿来世不姓周。"[/faded]

你的眼眶忽然一酸。你想起李木匠说的那个满月夭折的小少爷，想起秀兰怀着三个月的身孕被沉进井里。

这个纸娃娃，是周家用来代替那个没机会生下来的孩子的。它在这里躺了多少年，替那个孩子"活"了多少年。

[whisper]它的脸贴着你的胸口，像是在找奶吃。[/whisper]`,effects:{"sanity":-5,"yin":4,"addItem":"纸娃娃"},choices:[createChoice({"text":"把娃娃带去给秀兰","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"放回棺材","next":"huimen_exp3_paper_shop_baby_doll_close","effects":{"sanity":3,"yin":1}})]}),
    huimen_exp3_paper_shop_baby_doll_close: createScene('huimen_exp3_paper_shop_baby_doll_close', {title:`盖棺`,text:`你把棺材盖轻轻盖上。

纸娃娃在盖合的瞬间发出一声细细的呜咽，随即安静下来。那呜咽声很短，短得像是不存在，却在你耳朵里回荡了很久。

地下室里的阴气似乎也淡了一些。油灯的火苗稳了一些，照在棺材上的光不再跳动。

你在棺材盖上摸了摸，发现刻着一行小字："以纸代骨，以名代魂。"

字是用指甲刻的，刻得很深，刻的人当时一定用尽了力气。你摸着那些凹痕，像摸着一个母亲最后能给孩子留下的全部。`,effects:{"sanity":3,"yin":1},choices:[createChoice({"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}})]})
};
