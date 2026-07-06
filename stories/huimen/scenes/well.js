/**
 * 《回门》场景模块：well
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    mirror_well: createScene('mirror_well', {title:'照魂镜',text:`你抓起井沿上的铜镜，对准井水。

镜面裂痕中射出一道浑浊的光，井水"咕嘟咕嘟"沸腾起来。水里的女子发出一声尖啸，像是被烫伤一样缩回深处。

你的手终于能动了。

铜镜掉在地上，裂成了更多碎片。你捡起最大的一片，背面刻着两个字：

[faded]"照魂"[/faded]

四婶不知何时站在了你身后，脸色苍白："你……你竟然拿起了照魂镜？三十年了，除了秀兰，没人能拿起它。"

她把铜镜碎片从你手里拿走，却又恭敬地放回井沿。

"看来，真的是你。" 她喃喃道，"真的是你回来了。"`,effects:{"addItem":"铜镜碎片","sanity":-5,"yin":-5},choices:[createChoice({"text":"问她\"真的是我\"是什么意思","next":"ask_really_me"}),createChoice({"text":"趁她恍惚，往后山跑","next":"run_to_mountain","danger":true}),createChoice({"text":"铜镜碎片里映出的村子，似乎多了一条月光铺成的小路","next":"huimen_exp_village_loop_entry","condition":{"hasItem":"铜镜碎片"},"hidden":true,"effects":{"yin":2}})]}),
    struggle_in_well: createScene('struggle_in_well', {title:'溺亡',text:`黑发越缠越紧。

你感到自己的意识在被一点点抽离。秀兰的脸贴近你，她的眼眶里流出红色的泪。

"我等了三十年，" 她说，"不是为了杀你。是为了让你体会我当年的绝望。"

井水漫过你的头顶。你最后的念头是：

[whisper]原来，被活埋是这样的感觉。[/whisper]

第二天，村里人在井里发现了一具男尸。他穿着新郎服，脸上带着诡异的微笑。

他的手腕上，系着一根红绳。红绳的另一端，消失在井底深处。`,ending:'possessed'})
};
