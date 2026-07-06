/**
 * 《回门》场景模块：main_escape_pursuit
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chase_li_po: createScene('chase_li_po', {title:"追李婆",text:"你追上去，想拉住李婆。\n\n可你的手刚碰到她的肩膀，就像碰到了一团冰冷的纸。\n\n李婆缓缓转过身。她的脸还是那张脸，但眼眶里……眼眶里没有眼白，只有两团漆黑的墨点，和村口纸人一模一样。\n\n\"新郎官，\" 她说，\"你这么着急见新娘子？\"\n\n[scream]她的嘴越裂越大，一直裂到耳根。[/scream]\n\n你想后退，却发现双脚像是被什么东西抓住了。低头一看，地上的纸钱全都贴在了你的鞋面上，一张张脸从纸钱上浮出来，无声地笑着。\n\n[red]你的阴气太重了。[/red]",effects:{"sanity":-25,"yin":15,"visual":"paper-doll","visualDuration":3000},choices:[createChoice({"text":"拼命挣扎，甩开纸钱","next":"break_free","effects":{"sanity":-10}}),createChoice({"text":"从兜里掏出打火机烧纸钱","next":"burn_paper_money","effects":{"yin":-10}})]}),
    break_free: createScene('break_free', {title:"挣脱",text:"你发疯似的跺脚，那些纸钱却越贴越紧。\n\n忽然，一阵清脆的铃声从老宅方向传来。纸钱像是被烫到一样，\"嘶\"地一声从你脚上脱落，在地上打着旋儿。\n\n李婆也不见了。只剩那盏白灯笼倒在路边，灯笼里的火苗幽幽地燃着，映出\"囍\"字像在流血。\n\n你不敢再停留，跌跌撞撞地向老宅跑去。\n\n身后，风声呜咽，像是在笑。",effects:{"yin":7,"time":30},choices:[createChoice({"text":"冲进老宅","next":"huimen_paper_doll_warning"})]}),
    refuse_wine_plan: createScene('refuse_wine_plan', {title:"破局之策",text:"你想起纸人那句\"别喝交杯酒\"。\n\n秀兰要的不是你的人，而是周家欠她的那场名分。交杯酒是契约，一旦喝下，你就真的成了她的鬼新郎。\n\n但如果你能在拜堂之前，把她的名字写进周家族谱，给她正名，也许就能打破这个契约。\n\n你低声对二叔说：\"我可以拜堂，但我要先给秀兰上族谱。没有名分的冥婚，她不会安心。\"\n\n二叔和三姑对视一眼。三姑慢慢点头：\"……有道理。\"\n\n他们松开了你的手腕。",effects:{"sanity":-5,"yin":2,"setFlag":"knows_ritual_loophole"},choices:[createChoice({"text":"趁他们松懈，跑向小门","next":"small_door"}),createChoice({"text":"真的去找族谱","next":"find_family_tree","effects":{"time":30}})]}),
    pretend_comply: createScene('pretend_comply', {title:"假装顺从",text:"你垂下眼睛，不再反抗。\n\n二叔满意地点点头：\"好孩子。你去后院洗把脸，换身衣服。吉时要到了。\"\n\n你被四婶带到后院。后院有一口老井，井沿上放着一面铜镜。铜镜背面刻着八卦图，镜面却布满裂痕。\n\n你捧起水，正要洗脸，水面忽然晃动起来。\n\n[red]井水里，映出的不是你自己的脸。[/red]\n\n那是一个年轻女子的脸，盖着红盖头，盖头下露出一双没有瞳孔的眼睛。\n\n\"你来了。\" 水里的女子说。\n\n你想松手，却发现自己的手被水面吸住了。",effects:{"sanity":-20,"yin":10,"visual":"whisper"},choices:[createChoice({"text":"用铜镜照井水","next":"mirror_well","condition":{"lacksItem":"铜镜"}}),createChoice({"text":"用力抽回手","next":"pull_back_hand","effects":{"sanity":-10}}),createChoice({"text":"问她是谁","next":"ask_who_are_you"})]})
};
