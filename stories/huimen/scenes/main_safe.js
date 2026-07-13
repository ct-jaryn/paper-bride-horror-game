/**
 * 《回门》场景模块：main_safe
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    safe_house: createScene('safe_house', {title:'老宅偏房 · 歇脚处',text:`你推开老宅西侧一间偏僻的小屋。

门很轻，一推就开，门轴"吱呀"一声，长长的，像一声叹息。屋里很干净，干净得不正常——老宅里别的屋都积着灰，唯独这间像是有人定期打扫。桌上的灰很薄，薄得能看见桌面原来的颜色。

桌上摆着几支没点过的香烛，香烛是新的，蜡还白着。墙角堆着一小袋糯米，米袋上落了一层薄灰，米却没坏。窗台上还压着几张黄纸符，符上的朱砂还红着，红得像新的。

[faded]这是历代周家守夜人用来"歇脚"的地方。[/faded]

你关上门，门一关，屋外的一切喧嚣都被隔绝了。隔绝得很彻底，连风声都听不见了，只剩你自己的心跳。

你喘了口气，胸口却闷得发慌，心跳快得像有只手从里面攥着它。手腕上的红绳不知何时勒进皮肉，一圈红印，像是要钻进骨头里。你想起小时候祖母说的话：人吓破了胆，魂就握不住了；阴气重了，就分不清自己是谁；天要是不亮，就永远走不出这村子。子时之前，她只能借纸人、借井水的影子跟你说话；子时一到，她才肯现身。

你可以在这里点一支香烛，吃一把糯米，让紧绷的神经稍稍放松。

但你不能一直躲着。窗外的天色已经泛起一点灰白，灰白得很淡，淡得像没睡醒的眼——可你知道，那层灰白不会变成天光。`,effects:{"yin":-5},choices:[createChoice({"text":"点香烛恢复理智","next":"safe_house_candle","condition":{"lacksItem":"香烛"},"effects":{"addItem":"香烛"}}),createChoice({"text":"吃糯米压阴气","next":"safe_house_nuomi","condition":{"lacksItem":"糯米"},"effects":{"addItem":"糯米"}}),createChoice({"text":"拿护身符防身","next":"safe_house_talisman","condition":{"lacksItem":"护身符"},"effects":{"addItem":"护身符"}}),createChoice({"text":"整理思绪，检查自己","next":"huimen_safe_self_check"}),createChoice({"text":"休息够了，继续行动","next":"to_old_house"})]}),
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

你把护身符折好，贴身收着。它也许能在关键时刻替你挡一次灾。你收的时候，符纸"嗡"地响了一声，像是在应你。`,effects:{"sanity":10,"addItem":"护身符"},choices:[createChoice({"text":"离开歇脚处","next":"to_old_house"})]}),
    huimen_safe_self_check: createScene('huimen_safe_self_check', {title:'老宅偏房 · 自查',text:`你靠着墙，闭上眼，把乱糟糟的念头一样样拢回来。

胸口闷得发慌。不是累的，是从里面被攥着，像有只手隔着肋骨在握你的心跳。你想起祖母说过：人吓破了胆，魂就握不住了。真到了那一步，你连自己是人是鬼都分不清。

手腕上的红绳勒得更紧了。那红绳不知何时系上的，另一端没入黑暗，像有人在暗处牵着。它勒进皮肉，一圈红印，火辣辣地疼。阴气太重的时候，这东西就会往里钻，钻到分不清这身子是自己在动，还是别人在替你动。

窗外还是灰白。你盯着那层灰白看了很久，久到眼睛发酸，它却一点也没有亮起来的意思。天被糊住了。卯时不会来了。要是熬到那之后，天就再也不会亮，这村子会永远停在黑里。

还有她。井水里映出她的影子，纸人嘴里借她的声音，可她本人不肯轻易现身。子时之前，她只能用这些影子跟你说话；子时一到，她才肯真的站在你面前。

你把这些感受一样样在心里过了一遍，像是把散落的珠子重新串成绳。`,choices:[createChoice({"text":"缓过来了，退回歇脚处","next":"safe_house"})]})
};
