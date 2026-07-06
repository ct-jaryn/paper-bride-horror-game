/**
 * 《回门》场景模块：exp_coffin
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_untie_red_string: createScene('huimen_exp_untie_red_string', {title:'解绳',text:`你解开一根红绳。

红绳落下的瞬间，树上的小布包"啪"地一声打开，里面掉出一枚发黑的乳牙。乳牙落地，化为一个透明的小孩。

小孩看着你，没有眼睛，只有两个黑洞。

"你把我的命还我了？" 他问。

你点点头。

小孩笑了，露出没有牙的嘴："那我也帮你一次。"

他飘到桑树前，对着树洞吹了一口气。树洞里飞出无数萤火虫，照亮了整棵树。

[red]你看见树干上刻满了名字，都是那些被"借命"的女子。[/red]`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp_freed_child_spirit"},choices:[createChoice({"text":"谢谢小孩，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_cut_red_string: createScene('huimen_exp_cut_red_string', {title:'断绳',text:`你用缠发剪刀剪向手腕。

剪刀没有碰到皮肉，却剪断了一根看不见的红绳。红绳断裂的瞬间，你听见村子里传来无数声惊呼。

"他剪断了！"

"周家的命线断了！"

你低头看自己的手腕，那里原本有一圈红印，现在红印消失了，只剩下一道浅浅的白痕。

[red]你不再是周家用来抵债的祭品了。[/red]

废墟外传来纸钱纷飞的声音，但你一点也不怕。`,effects:{"sanity":10,"yin":-10,"removeItem":"缠发剪刀","setFlag":"huimen_exp_cut_fate_string"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_redemption_loop: createScene('huimen_exp_redemption_loop', {title:'带她走',text:`你牵起秀兰的手。

她的手很凉，却没有先前那种刺骨的寒意。你们沿着月光小路走，纸门在你们身后一扇扇打开，又关闭。

走到村口时，秀兰停下脚步，回头望了望村子。

"三十年了。" 她说，"我终于可以走了。"

你把她的手攥得更紧。你们一起走出山村，走向天光。

村口的老桑树在你们身后轻轻摇晃，像是在道别。`,effects:{"sanity":20,"yin":-20},ending:'huimen_exp_redemption_loop'}),
    huimen_exp_red_lantern: createScene('huimen_exp_red_lantern', {title:'红灯笼',text:`巷子尽头亮起一盏红灯笼。

灯笼在雾里飘，没有提灯笼的人。你跟着它走，发现它停在一扇朱门前。

门自动开了，里面是一间喜房。床上坐着一个盖着红盖头的新娘，她的手腕上系着红绳，红绳的另一端消失在床底。

"进来吧。" 新娘说，"拜了堂，你就是周家的人了。"

[red]你不想进去，可灯笼的光把你往里拉。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"转身就跑","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"把灯笼吹灭","next":"huimen_extinguish_lantern","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"问新娘是不是秀兰","next":"huimen_exp_red_lantern_bride","effects":{"yin":2}})]}),
    huimen_exp_red_lantern_bride: createScene('huimen_exp_red_lantern_bride', {title:'新娘',text:`你问："你是秀兰吗？"

新娘沉默了很久，然后缓缓摇头。

"我不是秀兰。我是秀兰之前的新娘，也是秀兰之后的新娘。" 她说，"周家每隔几年就要娶一个，秀兰是最有名的一个，但不是唯一一个。"

她掀开盖头，露出一张腐烂的脸："你想救她，就救救我们所有人。"

她把红绳递到你面前："剪断它。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"用缠发剪刀剪断红绳","next":"huimen_exp_cut_bride_string","condition":{"hasItem":"缠发剪刀"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"没有剪刀，用手解","next":"huimen_exp_village_ghost","effects":{"sanity":-10,"yin":5}})]}),
    huimen_exp_return_coffin: createScene('huimen_exp_return_coffin', {title:'回堂屋',text:`你回到堂屋。

棺材还摆在正中，倒挂的囍字还在墙上。二叔、三姑、四婶转过头看你，嘴角依然挂着那种统一的笑。

"想通了？" 二叔问，"想通了就拜堂。"

你握紧拳头。你刚从另一个村子回来，你知道了更多真相。秀兰不是耻辱，是被害的人。周家的债，不该用你的生命来还。

[red]你决定从棺材这条线继续。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"继续主线","next":"ask_coffin","effects":{"yin":1}})]}),
    huimen_exp_return_red_coffin: createScene('huimen_exp_return_red_coffin', {title:'回红棺',text:`你顺着井绳下到井底。

红漆棺材还在，九根桃木钉封着棺盖。你摸了摸胸口的铜钥匙，知道是时候了。

秀兰的三份魂已经在另一个村子归一，但她真正的尸骨和怨念，还封在这口红棺里。

[red]开棺，是结束一切的钥匙。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"继续主线","next":"open_red_coffin","effects":{"yin":1}})]}),
    huimen_exp_street_red_shoes: createScene('huimen_exp_street_red_shoes', {title:'红绣鞋',text:`石板路上放着一双红绣鞋。

鞋子很小，像是三寸金莲。鞋面上绣着并蒂莲，针脚很细，看得出是做鞋的人用了心。

你捡起来，发现鞋子里有一张纸条：

[faded]"妾身秀兰，亲手所制。愿君珍重，白头偕老。"[/faded]

[red]这是她给祖父做的鞋，还没来得及送出去。[/red]

你捧着鞋，感到一阵心酸。三十年前，她也曾经满怀期待地想要嫁人。`,effects:{"sanity":-5,"yin":1,"addItem":"红绣鞋"},choices:[createChoice({"text":"把鞋送到秀兰坟前","next":"huimen_exp_street_red_shoes_grave","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_red_shoes_grave: createScene('huimen_exp_street_red_shoes_grave', {title:'鞋归',text:`你捧着红绣鞋，来到无字碑前。

"秀兰，" 你说，"你的鞋，我替你收回来了。"

你把鞋放在碑前。鞋面上忽然出现了一双小小的脚印，像是有人穿上了它们。

[whisper]"刚刚好。"[/whisper] 秀兰的声音说，"不大不小。"

无字碑上的血字慢慢变淡，最后变成了一行普通的刻字：

[faded]"周氏秀兰之墓"[/faded]

你知道，她离解脱又近了一步。`,effects:{"sanity":10,"yin":-10,"removeItem":"红绣鞋","setFlag":"huimen_exp_returned_red_shoes"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_scared: createScene('huimen_exp_xiulan_scared', {title:'秀兰的怕',text:`你忽然发现秀兰在发抖。

"你怎么了？" 你问。

"我怕。" 她说，"我怕天亮。"

"为什么？"

"因为天亮之后，我可能就不存在了。" 她说，"鬼是不能见太阳的。"

你看着她，心里一阵难过。她等了三十年的解脱，却害怕解脱本身。

"你不会消失。" 你说，"你会变成风，变成雨，变成桂花。你会以另一种方式存在。"

秀兰看着你，眼眶里的红色淡了一些："真的吗？"

"真的。" 你说，"我会记得你。这就是你的存在。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"握住她的手","next":"huimen_exp_xiulan_scared_hold","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_scared_hold: createScene('huimen_exp_xiulan_scared_hold', {title:'相握',text:`你把手伸进井水，握住秀兰的手。

她的手很凉，但你没有缩回。你握着她的手，像握着一块冰，也像握着一个即将融化的梦。

"我不怕了。" 她说，"有人在，我就不怕。"

你点点头，眼泪却不争气地流了下来。你为秀兰哭，也为所有来不及被爱的人哭。

井水开始变暖，秀兰的手也渐渐有了温度。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_held_xiulan_hand"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_red_coffin_open_alt: createScene('huimen_exp_red_coffin_open_alt', {title:'井底开棺',text:`你打开了井底的红棺。

里面没有尸体，只有一件叠得整整齐齐的嫁衣，和一个小小的纸人。纸人脸上画着秀兰的眉眼，胸口贴着你的生辰八字。

你明白了：周家不仅想让你娶秀兰，还想让你成为她的替身。

你把嫁衣和纸人一起烧了。火光中，秀兰的身影渐渐清晰，眼里有泪。

"你救了自己，"她说，"也救了我。"`,choices:[createChoice({"text":"结束替身","ending":"hidden_redCoffinOpen"})]}),
    huimen_exp_redemption_loop_alt: createScene('huimen_exp_redemption_loop_alt', {title:'回门续章',text:`你牵着秀兰的手，沿着月光小路走出山村。

她没有盖头，没有血泪，只是一个沉默的姑娘。你把她带到后山，和无字碑一起，重新立了一座新碑。

碑上刻着："周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

秀兰看着那行字，忽然笑了："原来回门，是真的可以回家的。"

她化作红光消散前，把一枚金戒指放在你手心。`,choices:[createChoice({"text":"带她回家","ending":"huimen_exp_redemption_loop"}),createChoice({"text":"在带她走之前，先问她是否愿意成为记录","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]})
};
