/**
 * 《回门》场景模块：main_escape_flight
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    break_window: createScene('break_window', {title:`破窗`,text:`你用肩膀撞破木窗，碎玻璃划破了手臂。

窗框很旧，木都朽了，一撞就散。玻璃碎片扎进你的肉里，疼得你抽了一口气，却顾不上拔。你滚落在屋外的泥地里，泥是凉的，糊了你一脸。

雨还在下，但天上的月亮不知什么时候出来了，惨白地照着院子。那月光白得不像月光，像一匹铺在天上的白布。

院子里站满了人。

不，不是人。是纸人。

几十个纸人穿着红嫁衣、白丧服，整整齐齐地站在院子里，低着头，像是在等什么。它们的纸衣服被雨淋湿了，湿得发亮，像一身的鳞。

你猛然发现，最后一排的纸人里，混着一个异样的身影——那纸人穿的不是喜服，而是一身湿漉漉的大红戏服，水袖垂到地面，脸上画着旦角的妆。

它的脸不是你的脸。而是一张苍白的女人的脸。

它站在人群最后，没有抬头，只是低声哼着一段你听不清的曲调。那调子很熟，熟得你心里发酸。

听见你落地的声音，它们齐刷刷地抬起头。

[red]每一张脸，都是你的脸。[/red]

它们向你走来，脚步轻盈，像是踩在棉花上。

"新郎官，"它们一起说，"吉时到了。"`,effects:{"sanity":-35,"yin":12,"visual":"paper-doll","visualDuration":4000},choices:[createChoice({"text":"向后山狂奔","next":"run_to_mountain"}),createChoice({"text":"躲进柴房","next":"hide_in_woodshed"})]}),
    hold_breath: createScene('hold_breath', {title:`无字碑`,text:`你死死咬住嘴唇，不敢出气。

肩上的手停了一会儿，那手很凉，凉得像铁。它在你肩上停着，停得你能感觉到它的指节——五根，每根都凉得像冰柱。它在你肩上慢慢收紧，又慢慢松开，像是在确认你是不是活的。

慢慢地，那手缩了回去。纸人们的脚步声也渐渐远去，像是退回了村子里。脚步声"沙沙"地响，越来越轻，最后消失在风里。

你等了足足一刻钟，才敢动弹。你先动了一根手指，又动了一根，然后才敢抬头。

月光照在无字碑上，碑身浮现出一行行血字。那血字是从碑里渗出来的，一笔一画都红得刺眼：

[faded]"周家秀兰，年十六。与周家少爷有情，珠胎暗结。周家恐丑事外扬，于子时活埋于井底，对外宣称未婚卒。秀兰含冤三十年，求周家后人还我名分，令我归土。"[/faded]

你浑身发抖。

[red]秀兰不是病死的。她是被周家活埋的。[/red]

而那个周家少爷，正是你的祖父。`,effects:{"sanity":-15,"yin":5,"setFlag":"knowsTruth"},choices:[createChoice({"text":"回村找秀兰的尸骨","next":"huimen_red_coffin_discovery"}),createChoice({"text":"去老宅找族谱证据","next":"huimen_seek_evidence","effects":{"yin":1}}),createChoice({"text":"在坟前发誓为她正名","next":"swear_justice","effects":{"setFlag":"xiulanMercy"}}),createChoice({"text":"想起狐嫁女也提过周家血脉……","next":"zhou_bloodline_revelation","condition":{"flag":"hujia_to_zhou"}}),createChoice({"text":"无字碑后有条小路，似乎通向村子深处","next":"huimen_exp_village_loop_entry","condition":{"flag":"knowsTruth"},"effects":{"yin":2}})],hallucination:`[whisper]你摸了摸自己的下巴，那里有一颗痣，和秀兰一模一样。[/whisper]`}),
    hide_in_woodshed: createScene('hide_in_woodshed', {title:`柴房`,text:`你钻进柴房，缩在一堆干草后面。

干草扎得你皮肤发痒，你不敢动，只是把身子缩得再小一点。柴房很黑，黑得你看不见自己的手，只能听见自己的心跳，"咚咚咚"地撞着胸腔。

纸人的脚步声在院子里转了几圈，"沙沙、沙沙"，像一群人在扫地。它们转得很慢，每转一圈就停一下，像是在听。你屏住呼吸，连心跳都恨不得压下去。

脚步声渐渐远去。你刚松一口气，就听见身后传来"沙沙"声。

你以为是老鼠，没在意。柴房里有老鼠是常事，你不愿为了一只老鼠动弹。

[red]沙沙声越来越近。[/red]

你猛地回头。柴房的角落里，堆着十几个纸扎人，刚才它们还背对着你，现在全都转了过来。

它们的脸，和你一模一样。`,effects:{"sanity":-30,"yin":10,"visual":"paper-doll"},choices:[createChoice({"text":"点燃柴火","next":"burn_woodshed","condition":{"hasItem":"打火机"},"effects":{"removeItem":"打火机","sanity":-15}}),createChoice({"text":"冲出柴房","next":"run_to_mountain"})]}),
    burn_woodshed: createScene('burn_woodshed', {title:`焚柴房`,text:`你掏出打火机，点燃了一把干草。

打火机的火苗很小，小得像一粒豆。可干草太干了，一碰到火就"呼"地烧起来，火苗窜得老高。

纸人们发出尖叫。那声音不像是纸燃烧的声音，更像是人的惨叫。叫得又尖又长，刺得你耳朵发疼。火苗舔上它们的纸脸，那些画上去的笑在火里扭曲，变成哭脸。

你趁乱冲出柴房，身后是一片火光。火光照得整个院子都亮了，亮得像白天。

可当你跑到村口时，发现全村的人都站在那里。他们低着头，手里提着白灯笼。灯笼上写着"囍"字，字是黑的。

"你烧了秀兰的嫁妆。"二叔说，声音很平，平得发冷，"她会更生气的。"`,effects:{"sanity":-15,"yin":10,"time":60},choices:[createChoice({"text":"硬闯村口","next":"huimen_escape_curse_follows"}),createChoice({"text":"退回后山","next":"run_to_mountain"})]}),
    huimen_escape_curse_follows: createScene('huimen_escape_curse_follows', {title:`未断`,text:`你冲向村口。

火光照亮了半条村街，纸灰像黑雪一样落在你的肩上。你越过那些燃烧的纸人，越过被火舌舔歪的囍字，一直往前冲。

村口的老槐树在风里摇晃，树下的两个纸扎人不知何时转了过来，墨点眼睛直直望着你。你没有停，从它们中间穿了过去。

那一刻，你听见身后传来一声唢呐。那唢呐声很远，却像贴在耳根上吹响，调子不是喜乐，是送葬的调子。

你低头看向自己的手腕。那根红绳——不知道什么时候系上的——不仅没有松开，反而勒得更紧了，勒进皮肉里，一圈红印正在慢慢发黑。

[red]它还在。她还在。[/red]

你忽然明白，烧掉一座柴房、跑出村口，并不能烧断三十年前结下的那根绳。那绳子系在你的血脉里，不管你跑到哪里，它都会跟到哪里。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"硬闯村口","next":"charge_exit","ending":"sacrificed"})]})
};
