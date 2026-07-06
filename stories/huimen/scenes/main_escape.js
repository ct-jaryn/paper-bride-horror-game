/**
 * 《回门》场景模块：main_escape
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chase_li_po: createScene('chase_li_po', {title:'追李婆',text:`你追上去，想拉住李婆。

可你的手刚碰到她的肩膀，就像碰到了一团冰冷的纸。

李婆缓缓转过身。她的脸还是那张脸，但眼眶里……眼眶里没有眼白，只有两团漆黑的墨点，和村口纸人一模一样。

"新郎官，" 她说，"你这么着急见新娘子？"

[scream]她的嘴越裂越大，一直裂到耳根。[/scream]

你想后退，却发现双脚像是被什么东西抓住了。低头一看，地上的纸钱全都贴在了你的鞋面上，一张张脸从纸钱上浮出来，无声地笑着。

[red]你的阴气太重了。[/red]`,effects:{"sanity":-25,"yin":15,"visual":"paper-doll","visualDuration":3000},choices:[createChoice({"text":"拼命挣扎，甩开纸钱","next":"break_free","effects":{"sanity":-10}}),createChoice({"text":"从兜里掏出打火机烧纸钱","next":"burn_paper_money","effects":{"yin":-10}})]}),
    break_free: createScene('break_free', {title:'挣脱',text:`你发疯似的跺脚，那些纸钱却越贴越紧。

忽然，一阵清脆的铃声从老宅方向传来。纸钱像是被烫到一样，"嘶"地一声从你脚上脱落，在地上打着旋儿。

李婆也不见了。只剩那盏白灯笼倒在路边，灯笼里的火苗幽幽地燃着，映出"囍"字像在流血。

你不敢再停留，跌跌撞撞地向老宅跑去。

身后，风声呜咽，像是在笑。`,effects:{"yin":7,"time":30},choices:[createChoice({"text":"冲进老宅","next":"huimen_paper_doll_warning"})]}),
    refuse_wine_plan: createScene('refuse_wine_plan', {title:'破局之策',text:`你想起纸人那句"别喝交杯酒"。

秀兰要的不是你的人，而是周家欠她的那场名分。交杯酒是契约，一旦喝下，你就真的成了她的鬼新郎。

但如果你能在拜堂之前，把她的名字写进周家族谱，给她正名，也许就能打破这个契约。

你低声对二叔说："我可以拜堂，但我要先给秀兰上族谱。没有名分的冥婚，她不会安心。"

二叔和三姑对视一眼。三姑慢慢点头："……有道理。"

他们松开了你的手腕。`,effects:{"sanity":-5,"yin":2,"setFlag":"knows_ritual_loophole"},choices:[createChoice({"text":"趁他们松懈，跑向小门","next":"small_door"}),createChoice({"text":"真的去找族谱","next":"find_family_tree","effects":{"time":30}})]}),
    pretend_comply: createScene('pretend_comply', {title:'假装顺从',text:`你垂下眼睛，不再反抗。

二叔满意地点点头："好孩子。你去后院洗把脸，换身衣服。吉时要到了。"

你被四婶带到后院。后院有一口老井，井沿上放着一面铜镜。铜镜背面刻着八卦图，镜面却布满裂痕。

你捧起水，正要洗脸，水面忽然晃动起来。

[red]井水里，映出的不是你自己的脸。[/red]

那是一个年轻女子的脸，盖着红盖头，盖头下露出一双没有瞳孔的眼睛。

"你来了。" 水里的女子说。

你想松手，却发现自己的手被水面吸住了。`,effects:{"sanity":-20,"yin":10,"visual":"whisper"},choices:[createChoice({"text":"用铜镜照井水","next":"mirror_well","condition":{"lacksItem":"铜镜"}}),createChoice({"text":"用力抽回手","next":"pull_back_hand","effects":{"sanity":-10}}),createChoice({"text":"问她是谁","next":"ask_who_are_you"})]}),
    break_window: createScene('break_window', {title:'破窗',text:`你用肩膀撞破木窗，碎玻璃划破了手臂。

顾不上疼痛，你滚落在屋外的泥地里。雨还在下，但天上的月亮不知什么时候出来了，惨白地照着院子。

院子里站满了人。

不，不是人。是纸人。

几十个纸人穿着红嫁衣、白丧服，整整齐齐地站在院子里，低着头，像是在等什么。

你猛然发现，最后一排的纸人里，混着一个异样的身影——那纸人穿的不是喜服，而是一身湿漉漉的大红戏服，水袖垂到地面，脸上画着旦角的妆。

它的脸不是你的脸。而是一张苍白的女人的脸。

它站在人群最后，没有抬头，只是低声哼着一段你听不清的曲调。

听见你落地的声音，它们齐刷刷地抬起头。

[red]每一张脸，都是你的脸。[/red]

它们向你走来，脚步轻盈，像是踩在棉花上。

"新郎官，" 它们一起说，"吉时到了。"`,effects:{"sanity":-35,"yin":12,"visual":"paper-doll","visualDuration":4000},choices:[createChoice({"text":"向后山狂奔","next":"run_to_mountain"}),createChoice({"text":"躲进柴房","next":"hide_in_woodshed"})]}),
    hold_breath: createScene('hold_breath', {title:'无字碑',text:`你死死咬住嘴唇，不敢出气。

肩上的手停了一会儿，慢慢缩了回去。纸人们的脚步声也渐渐远去，像是退回了村子里。

你等了足足一刻钟，才敢动弹。

月光照在无字碑上，碑身浮现出一行行血字：

[faded]"周家秀兰，年十六。与周家少爷有情，珠胎暗结。周家恐丑事外扬，于子时活埋于井底，对外宣称未婚卒。秀兰含冤三十年，求周家后人还我名分，令我归土。"[/faded]

你浑身发抖。

[red]秀兰不是病死的。她是被周家活埋的。[/red]

而那个周家少爷，正是你的祖父。`,effects:{"sanity":-15,"yin":5,"setFlag":"knowsTruth"},choices:[createChoice({"text":"回村找秀兰的尸骨","next":"huimen_red_coffin_discovery"}),createChoice({"text":"去老宅找族谱证据","next":"huimen_seek_evidence","effects":{"yin":1}}),createChoice({"text":"在坟前发誓为她正名","next":"swear_justice","effects":{"setFlag":"xiulanMercy"}}),createChoice({"text":"想起狐嫁女也提过周家血脉……","next":"zhou_bloodline_revelation","condition":{"flag":"hujia_to_zhou"}}),createChoice({"text":"无字碑后有条小路，似乎通向村子深处","next":"huimen_exp_village_loop_entry","condition":{"flag":"knowsTruth"},"effects":{"yin":2}})],hallucination:'[whisper]你摸了摸自己的下巴，那里有一颗痣，和秀兰一模一样。[/whisper]'}),
    hide_in_woodshed: createScene('hide_in_woodshed', {title:'柴房',text:`你钻进柴房，缩在一堆干草后面。

纸人的脚步声在院子里转了几圈，渐渐远去。你刚松一口气，就听见身后传来"沙沙"声。

你以为是老鼠，没在意。

[red]沙沙声越来越近。[/red]

你猛地回头。柴房的角落里，堆着十几个纸扎人，刚才它们还背对着你，现在全都转了过来。

它们的脸，和你一模一样。`,effects:{"sanity":-30,"yin":10,"visual":"paper-doll"},choices:[createChoice({"text":"点燃柴火","next":"burn_woodshed","condition":{"hasItem":"打火机"}}),createChoice({"text":"冲出柴房","next":"run_to_mountain"})]}),
    burn_woodshed: createScene('burn_woodshed', {title:'焚柴房',text:`你掏出打火机，点燃了一把干草。

火苗迅速蔓延，纸人们发出尖叫。那声音不像是纸燃烧的声音，更像是人的惨叫。

你趁乱冲出柴房，身后是一片火光。

可当你跑到村口时，发现全村的人都站在那里。他们低着头，手里提着白灯笼。

"你烧了秀兰的嫁妆。" 二叔说，"她会更生气的。"`,effects:{"sanity":-15,"yin":10,"time":60},choices:[createChoice({"text":"硬闯村口","next":"charge_exit","ending":"sacrificed"}),createChoice({"text":"退回后山","next":"run_to_mountain"})]}),
    sneak_back_yard: createScene('sneak_back_yard', {title:'潜回后院',text:`你悄悄潜回老宅后院。

井边的铜镜碎片在月光下泛着冷光。你注意到井绳垂在井里，还在微微晃动——像是刚有人下去过。

你顺着井绳滑下，井底的红棺已经打开了。

秀兰坐在棺材边，手里捧着那张祖父的字条。她抬头看你，眼神不再怨毒。

"你来了。" 她说，"我知道你会来。"`,effects:{"yin":-10},choices:[createChoice({"text":"递上字条","next":"give_letter"}),createChoice({"text":"她已经原谅你了，准备安葬","next":"huimen_xiulan_forgiveness","condition":{"flag":"xiulanMercy"},"effects":{"yin":1}})]}),
    charge_exit: createScene('charge_exit', {title:'硬闯村口',text:`你冲向村口。

村民们没有拦你，只是默默让开一条路。你跑出村口，跑出山路，一直跑到天亮。

你回到了城市，回到了自己的公寓，冲了个澡，躺在床上。

一切仿佛都是一场噩梦。

直到三天后，你在镜子前刮胡子，发现镜中的自己穿着一身大红喜服，嘴角咧到耳根。

[red]它对你笑了笑。[/red]

你低头看向自己的身体。皮肤苍白，四肢僵硬，胸口贴着一张黄符，上面写着你的生辰八字。

原来，你从来没有逃出那个村子。`,ending:'escapedButNot'}),
    paralyzed: createScene('paralyzed', {title:'动不了',text:`你想跑，但双腿像灌了铅。

秀兰从棺材里坐起来，红盖头滑落到肩上。她的脸和你一模一样，只是没有血色。

"别怕，" 她说，"成亲之后，你就不会怕了。"

她握住你的手。那只手冰冷刺骨，但你竟然感到一阵安心。

堂屋里的亲戚们开始敲锣打鼓，唢呐声再次响起。

"送入洞房——"

你被扶进那顶红轿子。轿帘放下的一瞬间，你看见轿壁上贴满了黄符，每一张都写着同一个名字：

[red]你的名字。[/red]

从此，山村多了一对恩爱的鬼夫妻。每年七月半，都能听见他们的笑声。`,ending:'ghostMarriage'}),
    turn_around: createScene('turn_around', {title:'回头',text:`你转过身。

秀兰的脸几乎贴在你的脸上。她的眼睛没有瞳孔，只有两团漆黑的墨点。

"你终于看我了。" 她说。

她的嘴唇贴上你的额头。那不是亲吻，而是某种古老的契约。

你感到有什么东西钻进了你的身体。你的记忆开始模糊，取而代之的，是另一个女人的记忆——

被活埋的恐惧，孩子的哭声，三十年的等待，还有……爱。

[red]你变成了秀兰。[/red]

而秀兰，穿着你的衣服，走向了天亮。`,ending:'possessed'})
};
