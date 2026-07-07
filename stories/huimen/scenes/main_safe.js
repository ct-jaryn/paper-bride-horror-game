/**
 * 《回门》场景模块：main_safe
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    safe_house: createScene('safe_house', {title:'老宅偏房 · 歇脚处',text:`你推开老宅西侧一间偏僻的小屋。

门很轻，一推就开，门轴"吱呀"一声，长长的，像一声叹息。屋里很干净，干净得不正常——老宅里别的屋都积着灰，唯独这间像是有人定期打扫。桌上的灰很薄，薄得能看见桌面原来的颜色。

桌上摆着几支没点过的香烛，香烛是新的，蜡还白着。墙角堆着一小袋糯米，米袋上落了一层薄灰，米却没坏。窗台上还压着几张黄纸符，符上的朱砂还红着，红得像新的。

[faded]这是历代周家守夜人用来"歇脚"的地方。[/faded]

你关上门，门一关，屋外的一切喧嚣都被隔绝了。隔绝得很彻底，连风声都听不见了，只剩你自己的心跳。你可以在这里点一支香烛，吃一把糯米，让紧绷的神经稍稍放松。

但你不能一直躲着。天快亮了，你必须在天亮前做出选择。窗外的天色已经泛起一点灰白，灰白得很淡，淡得像没睡醒的眼。`,effects:{"yin":-5},choices:[createChoice({"text":"点香烛恢复理智","next":"safe_house_candle","condition":{"lacksItem":"香烛"},"effects":{"addItem":"香烛"}}),createChoice({"text":"吃糯米压阴气","next":"safe_house_nuomi","condition":{"lacksItem":"糯米"},"effects":{"addItem":"糯米"}}),createChoice({"text":"拿护身符防身","next":"safe_house_talisman","condition":{"lacksItem":"护身符"},"effects":{"addItem":"护身符"}}),createChoice({"text":"休息够了，继续行动","next":"to_old_house"})]}),
    safe_house_candle: createScene('safe_house_candle', {title:'烛光',text:`你点燃一支香烛。

打火机划了两下才着，火苗很小，小得像一粒豆。火苗很小，但意外地稳定。那稳定很奇怪——别的烛火都会跳，唯独这支不跳，直直地烧着，像被什么东西定住了。橙黄色的光照着你疲惫的脸，你感到理智在慢慢回流。那回流很慢，慢得像井水一点一点往上渗。

[whisper]香烛是活人的火。鬼怕火，人也靠火找回自己。[/whisper]

那声音不在耳边，在你心里，像是一个很老的人在替你念叨。你不知道是谁在念，却觉得安心。

你吹灭蜡烛，把剩下的收好。剩下的不多了，你收得很小心，怕折断。`,effects:{"sanity":20,"time":15},choices:[createChoice({"text":"离开歇脚处","next":"to_old_house"})]}),
    safe_house_nuomi: createScene('safe_house_nuomi', {title:'糯米',text:`你抓了一把生糯米塞进嘴里。

米很硬，硬得硌牙。嚼起来涩涩的，涩得你舌头都麻了。但咽下去之后，你感到胸口那股阴冷的气散了一些。那阴冷是从骨头里渗出来的，糯米咽下去，热气从胃里往上走，走到胸口，把那阴冷顶散了一半。

[faded]糯米压阴，这是老规矩。[/faded]

老规矩。你不知道这规矩是谁定的，却觉得它管用。你又装了一小袋糯米随身带着，袋口扎得很紧，怕漏。`,effects:{"yin":-15,"time":10},choices:[createChoice({"text":"离开歇脚处","next":"to_old_house"})]}),
    safe_house_talisman: createScene('safe_house_talisman', {title:'歇脚处护身符',text:`你拿起一张黄纸符。

符纸很薄，薄得能透光。符上的朱砂画着你看不懂的图案，图案弯弯绕绕，像一团纠缠的线。你摸起来有一种奇异的温度，不像纸，更像人皮——温的，软的，摸久了还能感觉到一点脉搏似的搏动。

你把护身符折好，贴身收着。它也许能在关键时刻替你挡一次灾。你收的时候，符纸"嗡"地响了一声，像是在应你。`,effects:{"sanity":10,"addItem":"护身符"},choices:[createChoice({"text":"离开歇脚处","next":"to_old_house"})]})
};
