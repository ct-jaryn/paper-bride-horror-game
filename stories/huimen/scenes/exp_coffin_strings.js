/**
 * 《回门》场景模块：exp_coffin_strings
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_untie_red_string: createScene('huimen_exp_untie_red_string', {title:"解绳",text:`你伸手，小心翼翼地解开系在桑树上的一根红绳。

绳结松开的瞬间，树杈间挂着的小布包"啪"地一声弹开，里面掉出一枚发黑的乳牙。乳牙落地，"叮"的一声，化作一个半透明的小孩。

那孩子看着你，脸上没有眼睛，只有两个黑洞洞的眼眶，眼眶里却流着泪。

"你把我的命还我了？"他问，声音奶声奶气，却冷得让人发抖。

你点了点头。

小孩咧嘴笑了，露出没有牙的牙床："那我也帮你一次。"

他飘到桑树前，鼓起腮帮，对着树洞吹了一口气。树洞里飞出无数萤火虫，绿莹莹的光把整棵老桑树照得通亮。

[red]你看见树干上密密麻麻刻满了名字——全是那些被"借命"的女子。[/red]`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp_freed_child_spirit"},choices:[createChoice({"text":"谢谢小孩，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_cut_red_string: createScene('huimen_exp_cut_red_string', {title:"断绳",text:`你咬着牙，举起缠发剪刀，对准自己的手腕。

剪刀的刃口贴上皮肤，却没有碰到皮肉——它剪断了一根你看不见的红绳。

红绳断裂的瞬间，村子里传来无数声惊呼，此起彼伏，像是一群人同时被掐住了喉咙。

"他剪断了！"

"周家的命线断了！"

你低头看自己的手腕，那里原本有一圈暗红的印痕，现在红印消失了，只剩下一道浅浅的白痕。

[red]你不再是周家用来抵债的祭品了。[/red]

废墟外传来纸钱纷飞的声音，沙沙作响，可你一点也不怕。`,effects:{"sanity":10,"yin":-10,"removeItem":"缠发剪刀","setFlag":"huimen_exp_cut_fate_string"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_return_coffin: createScene('huimen_exp_return_coffin', {title:"回堂屋",text:`你推门回到堂屋。

棺材还摆在正中央，黑漆漆的，散发着陈年的桐油味。墙上倒贴的囍字红得刺眼，红得发黑。二叔、三姑、四婶齐齐转过头来看你，嘴角依然挂着那种统一的、僵硬的笑。

"想通了？"二叔开口，声音沙哑，"想通了就拜堂。"

你握紧了拳头。你刚从另一个村子回来，你知道了更多的真相。秀兰不是耻辱，是被害的人。周家欠下的债，不该用你的命来还。

[red]你决定从棺材这条线继续查下去。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"继续主线","next":"ask_coffin","effects":{"yin":1}})]}),
    huimen_exp_return_red_coffin: createScene('huimen_exp_return_red_coffin', {title:"回红棺",text:`你攥紧井绳，顺着湿滑的井壁一寸一寸下到井底。

井水冰冷，浸透了你的裤脚。红漆棺材还在原处，棺盖上钉着九根桃木钉，钉头上刻着镇邪的符文。你摸了摸胸口那把铜钥匙，硬邦邦的还在。

秀兰的三份魂已经在另一个村子里归一，但她真正的尸骨和怨念，还封在这口红棺里。

[red]开棺，是结束一切的钥匙。[/red]

井底的风阴冷，吹得棺材上的红漆"啪啪"剥落，露出底下乌黑的木料。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"继续主线","next":"open_red_coffin","effects":{"yin":1}}),createChoice({"text":"你已开过红棺，想再看一眼棺中物","next":"huimen_exp2_red_coffin_inside","condition":{"flag":"red_coffin_unlocked"},"hidden":true,"effects":{"yin":2}})]})
};
