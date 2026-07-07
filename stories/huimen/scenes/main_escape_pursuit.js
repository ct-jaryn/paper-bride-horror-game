/**
 * 《回门》场景模块：main_escape_pursuit
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chase_li_po: createScene('chase_li_po', {title:`追李婆`,text:`你追上去，想拉住李婆。

雨还在下，雨点打在李婆的伞上，"啪啪"地响。她的伞是油纸的，伞面画着一朵并蒂莲，莲已经褪了色，只剩一团模糊的红。

可你的手刚碰到她的肩膀，就像碰到了一团冰冷的纸。那肩膀是软的，软得没有骨头，像一沓湿透的纸叠在一起。

李婆缓缓转过身。她转得很慢，慢得你能听见她脖子"咔咔"地响，像一扇很久没开过的门。她的脸还是那张脸，皱纹纵横，下巴没有牙。但眼眶里……眼眶里没有眼白，只有两团漆黑的墨点，和村口纸人一模一样。

"新郎官，"她说，嘴角咧开，咧得很大，"你这么着急见新娘子？"

[scream]她的嘴越裂越大，一直裂到耳根。[/scream]

你想后退，却发现双脚像是被什么东西抓住了。低头一看，地上的纸钱全都贴在了你的鞋面上，一张张脸从纸钱上浮出来，无声地笑着。那笑是画的，红红的嘴角弯弯，却像是在笑你。

[red]你的阴气太重了。[/red]`,effects:{"sanity":-25,"yin":15,"visual":"paper-doll","visualDuration":3000},choices:[createChoice({"text":"拼命挣扎，甩开纸钱","next":"break_free","effects":{"sanity":-10}}),createChoice({"text":"从兜里掏出打火机烧纸钱","next":"burn_paper_money","effects":{"yin":-10}})]}),
    break_free: createScene('break_free', {title:`挣脱`,text:`你发疯似的跺脚，那些纸钱却越贴越紧。

你跺得越狠，它们贴得越紧，紧得像长在你鞋面上。纸钱上的脸也跟着你跺脚的节奏一张张抬头，朝你咧嘴笑。

忽然，一阵清脆的铃声从老宅方向传来。那铃声很脆，"叮叮当当"，像有人在远处摇铃铛。纸钱像是被烫到一样，"嘶"地一声从你脚上脱落，在地上打着旋儿，旋成一堆。

李婆也不见了。只剩那盏白灯笼倒在路边，灯笼里的火苗幽幽地燃着，映出"囍"字像在流血。那血是红的，顺着灯笼纸往下淌，淌进泥地里。

你不敢再停留，跌跌撞撞地向老宅跑去。脚下的泥路又湿又滑，你摔了一跤，膝盖磕在石头上，疼得你眼冒金星，却不敢停。

身后，风声呜咽，像是在笑。`,effects:{"yin":7,"time":30},choices:[createChoice({"text":"冲进老宅","next":"huimen_paper_doll_warning"})]}),
    refuse_wine_plan: createScene('refuse_wine_plan', {title:`破局之策`,text:`你想起纸人那句"别喝交杯酒"。

那句话又轻又急，像一根刺扎在你脑子里。秀兰要的不是你的人，而是周家欠她的那场名分。交杯酒是契约，一旦喝下，你就真的成了她的鬼新郎——活人喝死人的酒，从此阴阳不分。

但如果你能在拜堂之前，把她的名字写进周家族谱，给她正名，也许就能打破这个契约。名分一正，她便不再是无名鬼，契约就失效了。

你低声对二叔说："我可以拜堂，但我要先给秀兰上族谱。没有名分的冥婚，她不会安心。"

二叔和三姑对视一眼。那眼神交会了一下，像是在算账。三姑慢慢点头："……有道理。"

他们松开了你的手腕。松手的时候，二叔的手在你腕上多停了一瞬，像是想说什么，最终没说。`,effects:{"sanity":-5,"yin":2,"setFlag":"knows_ritual_loophole"},choices:[createChoice({"text":"趁他们松懈，跑向小门","next":"small_door"}),createChoice({"text":"真的去找族谱","next":"find_family_tree","effects":{"time":30}})]}),
    pretend_comply: createScene('pretend_comply', {title:`假装顺从`,text:`你垂下眼睛，不再反抗。

二叔满意地点点头，那点头很轻，像在确认一件早就定好的事："好孩子。你去后院洗把脸，换身衣服。吉时要到了。"

你被四婶带到后院。后院有一口老井，井沿上放着一面铜镜。铜镜背面刻着八卦图，镜面却布满裂痕，裂痕里嵌着黑色的东西，像是干掉的血。

你捧起水，正要洗脸，水面忽然晃动起来。那晃动不是你弄的，是水自己在晃，晃得井底的影子都碎了。

[red]井水里，映出的不是你自己的脸。[/red]

那是一个年轻女子的脸，盖着红盖头，盖头下露出一双没有瞳孔的眼睛。那眼睛是空的，空得像两个井。

"你来了。"水里的女子说。

你想松手，却发现自己的手被水面吸住了。`,effects:{"sanity":-20,"yin":10,"visual":"whisper"},choices:[createChoice({"text":"用铜镜照井水","next":"mirror_well","condition":{"lacksItem":"铜镜"}}),createChoice({"text":"用力抽回手","next":"pull_back_hand","effects":{"sanity":-10}}),createChoice({"text":"问她是谁","next":"ask_who_are_you"})]})
};
