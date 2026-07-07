/**
 * 《回门》场景模块：exp2_village_head
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_village_head_house: createScene('huimen_exp2_village_head_house', {title:'村长家',text:`你来到村子中央最大的院子前。

院子是青砖砌的，比村里任何一户都气派。院门是朱红色的，漆还新，像是前几天刚刷的。门上贴着门神，门神是秦琼和尉迟恭，画得威风，可门神的眼睛被人用刀挖掉了——两个黑洞，像眼眶。

你推开门，门"吱呀"一声。院子里站着许多人，都穿着三十年前的衣裳——长袍、马褂、布鞋。他们低着头，排成一排，像是在受审，又像是在等什么人。你看他们的脸，每一张都是模糊的，像被水泡过的纸。

正屋里坐着一个老者，穿着长袍，手里握着一卷黄纸。他坐在太师椅上，背挺得很直，像是坐在审判席上。

"你来了。" 老者说，没有抬头，"我是周家村的村长。秀兰的事，是我主持办的。三十年了，我等这一天，等了很久。"`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_heard_village_head_secret"},choices:[createChoice({"text":"质问他","next":"huimen_exp2_village_head_confront","effects":{"yin":2}}),createChoice({"text":"索要族谱","next":"huimen_exp2_village_head_record","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"村长家床底似乎有暗门，你已敢与他对质","next":"huimen_exp2_village_head_vault","condition":{"flag":"huimen_exp2_confronted_village_head"},"hidden":true,"effects":{"yin":2}}),createChoice({"text":"检查灶台","next":"huimen_exp2_secret_tunnel","condition":{"flag":"huimen_exp2_confronted_village_head"},"hidden":true,"effects":{"yin":2}}),createChoice({"text":"搜索屋子的每个角落","next":"huimen_exp2_blood_contract","condition":{"flag":"huimen_exp2_confronted_village_head"},"effects":{"yin":2}})]}),
    huimen_exp2_village_head_confront: createScene('huimen_exp2_village_head_confront', {title:'村长对质',text:`你质问村长："你为什么要活埋秀兰？"

村长冷笑，那笑容里有三十年的理直气壮："她是周家的耻辱，也是村子的耻辱。她没出嫁就有了孩子，不埋她，周家能放过我们？整个村子都要跟着遭殃。"

"她不是耻辱。" 你说，声音在正屋里回荡，"她是被你们害死的。她怀的孩子，是周家的骨肉，是周文的孩子。你们害的是自己人。"

村长的脸扭曲了，黄纸在他手里捏皱了："你以为你几句话就能翻案？周家养了三十年，就是为了今天！等一个周家后人回来，替他们还债！"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"继续反驳","next":"huimen_exp2_village_head_refute","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"动手打他","ending":"huimen_exp2_ending_village_head_judge","effects":{"yin":5}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_village_head_refute: createScene('huimen_exp2_village_head_refute', {title:'村长驳斥',text:`你说："周家欠秀兰的，不是名声，是命。你们帮周家杀人，你们也是凶手。每一个低头的人，每一只闭上的眼，都是帮凶。"

院子里的村民开始骚动。有人低头，有人冷笑，有人哭泣。一个老婆婆忽然抬起头，眼眶是空的："我孙女也被埋了。我也不敢说话。"

村长拍案而起，桌子"砰"地响了一声："住口！你以为你是谁？"

"我是周家的后人。" 你说，一字一顿，"但我不是周家的刀。周家要杀人，我不帮。周家要还债，我来还。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_confronted_village_head"},choices:[createChoice({"text":"索要族谱","next":"huimen_exp2_village_head_record","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_village_head_record: createScene('huimen_exp2_village_head_record', {title:'族谱',text:`你伸手要族谱。

村长把族谱紧紧抱在怀里，像抱一个孩子。他的手在抖，黄纸的边角戳进他的肉里："给你？给你了，周家就完了。三百年的根，三百年的规矩，都要散。"

"周家早就完了。" 你说，"只是你们不敢承认。三百年的根，扎在女子的血里，早就烂了。"

村长犹豫了一下，又一下，最后把族谱递给你。你翻开最后一页，上面压着许多女子的名字，每一个名字后面都写着"借命"二字。墨是红的，像是用血写的。`,effects:{"sanity":-5,"yin":3,"addItem":"周家村族谱"},choices:[createChoice({"text":"撕掉借命那一页","next":"huimen_exp2_village_head_record_burn","effects":{"sanity":10,"yin":-10}}),createChoice({"text":"收好族谱","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_village_head_record_burn: createScene('huimen_exp2_village_head_record_burn', {title:'撕谱',text:`你当着村长的面，把族谱上"借命"的那一页撕了下来。

纸页"嘶"地一声，撕得很脆。村长的脸"刷"地白了，像被人抽了一巴掌。

纸页在你手里燃烧，没有火源，是自己烧起来的。火光里浮现出许多女子的脸，她们朝你微笑，然后化作青烟散去。

村长瘫坐在地上，像是一下子老了三十岁，背塌下去，头垂到膝盖上。

"完了，" 他喃喃，"周家村完了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_burned_borrowed_life_page"},choices:[createChoice({"text":"把族谱带走","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"烧了整本族谱","next":"huimen_exp2_village_head_record_burn_all","effects":{"yin":5}})]}),
    huimen_exp2_village_head_record_burn_all: createScene('huimen_exp2_village_head_record_burn_all', {title:'焚谱',text:`你点燃整本族谱。

族谱是线装的，布面，一点就着。火光冲天，把整个正屋都照亮了。村长发出一声凄厉的惨叫，那叫声里有三百年的不甘。院子里的村民一个一个地化为灰烬，灰烬在火光里飞，像黑色的雪。

整座房子开始崩塌，梁"咔嚓"地断，瓦"哗啦"地落。你跑出院子，身后是一片火海，火海里有人在哭，有人在笑。

[red]你烧了周家村三百年的账。从今以后，周家再没有族谱，再没有"借命"，再没有"不祥女"。[/red]`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_village_head_vault: createScene('huimen_exp2_village_head_vault', {title:'村长密室',text:`你在村长家的床底下，发现一道暗门。

暗门是石板的，做了一个假底。你用力推开石板，下面是一段石阶，通向一间密室。

密室不大，也就一间屋子大小。里面堆满了金银财宝——银锭、银元、金条、玉器，一箱一箱，码得整整齐齐。每一锭银子下面都压着一张黄纸，纸上写着一个女子的名字。

你拿起一锭银子，银子是沉的，沉得像铅。黄纸从银子下飘出来，纸上写着"柳红"二字。

[red]周家的财富，是女子的命换来的。每一锭银子，都是一条人命的价格。[/red]`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"把财宝扔出密室","next":"huimen_exp2_village_head_vault_throw","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"翻看黄纸","next":"huimen_exp2_village_head_vault_read","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_village_head_vault_throw: createScene('huimen_exp2_village_head_vault_throw', {title:'扔银',text:`你抱起一锭银子，用力扔出密室。

银子飞出去，"咣"地砸在石阶上，发出沉闷的响声。黄纸从银子下飘出来，像蝴蝶一样，飞向空中，越飞越高，最后不见了。

"我们的钱，不要了。" 一个女子的声音说，从黄纸里渗出来，"我们要的是名字。钱是脏的，我们不要。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_threw_village_head_silver"},choices:[createChoice({"text":"继续扔","next":"huimen_exp2_village_head_vault","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_village_head_vault_read: createScene('huimen_exp2_village_head_vault_read', {title:'村长密室读纸',text:`你翻看黄纸。

每一张纸都一样，都有一个女子的名字和生辰，以及她被"换"了多少钱。字迹工整，是账房先生的笔迹。

秀兰被换了三十两银子。柳红被换了二十两。阿绣被换了十五两。最便宜的一个，只换了五两——是一个叫"小翠"的丫鬟，死了没人收尸，周家把她的尸首卖了。

[red]原来她们的命，在周家眼里就这么便宜。三十两银子，是一桌酒席的钱。一个女子的命，只值一桌酒席。[/red]`,effects:{"sanity":-10,"yin":3,"addItem":"周家女子命价单"},choices:[createChoice({"text":"把命价单贴到村口","next":"huimen_exp_village_street","condition":{"hasItem":"周家女子命价单"},"effects":{"sanity":10,"yin":-10,"removeItem":"周家女子命价单","setFlag":"huimen_exp2_posted_price_list"}}),createChoice({"text":"收好","next":"huimen_exp2_village_head_vault","effects":{"yin":1}})]})
};
