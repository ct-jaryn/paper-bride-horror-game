/**
 * 《回门》场景模块：exp_village_street_core
 * 村街主入口，只保留核心入口与聚合枢纽
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street: createScene('huimen_exp_village_street', {title:'村街',text:`你站在村街中央。

街道两旁是低矮的瓦房，灰扑扑的，每一扇窗后都有一盏白灯笼，昏黄地亮着。灯笼上没有字，只有一个墨点画成的眼睛，圆溜溜的。你走到哪，那些眼睛就跟到哪，一眨不眨。

石板路是湿的，踩上去会发出黏腻的声响，"啪叽、啪叽"，像踩在舌头上。空气里弥漫着一股纸灰和香火混合的气味，呛人。

远处有纸钱在旋舞，"沙沙"地响，偶尔能看见一个纸人的背影拐进巷子，一闪就没了。你叫一声，它不回头；你追上去，巷子尽头是一堵墙，墙上爬满了青苔。

[whisper]"别追。追上了，你就变成它。"[/whisper]

风里传来这句话，你分不清是警告还是邀请。

[red]这里可以通往村子的每个角落。[/red]`,effects:{"sanity":-3,"yin":2},textVariants:[{condition:{flag:'knowsTruth'},text:`你以不同的眼光看着这条街。纸钱在脚边打旋，每一步都像踩在秀兰走过的路上。`},{condition:{flag:'restored_xiulan_name'},text:`街口的纸钱不再飞舞，像是被什么安抚了。你知道，秀兰的名字终于被正了。`},{condition:{flag:'huimen_exp_knows_three_souls'},text:`三魂已聚，村街的雾似乎淡了些。你能感到脚下土地的脉动，秀兰的气息就在不远处。`},{condition:{hasItem:'铜钥匙'},text:`口袋里的铜钥匙在发烫。你知道井底等着一口红棺，那是秀兰最后的栖身之处。`},{condition:{hasItem:'祖父日记残页'},text:`怀里的日记残页硌着胸口。祖父的字迹在脑中挥之不去——他欠秀兰的，远不止一条命。`},{condition:{flag:'xiulanMercy'},text:`秀兰已经原谅了。风里不再有哭声，只有桂花若有若无的甜香。`},{condition:{flag:'huimen_exp3_loop_count'},text:`你手腕上还缠着那根从纸扎铺带出来的断红绳。它提醒你，循环石碑不是幻象，它已经看见你至少一次了。`}],choices:[createChoice({text:"去井边",next:"huimen_exp_well_night",effects:{yin:1}}),createChoice({text:"去纸扎铺",next:"huimen_exp_paper_shop",effects:{yin:1}}),createChoice({text:"去庙里",next:"huimen_exp_temple_gate",effects:{yin:1}}),createChoice({text:"去祖祠",next:"huimen_exp_ancestral_hall",effects:{yin:1}}),createChoice({text:"去桑树下",next:"huimen_exp_mulberry_tree",effects:{yin:1}}),createChoice({text:"去村东头李木匠铺",next:"huimen_exp3_carpenter_li_shop",effects:{yin:1},condition:{flag:"knowsTruth"}}),createChoice({text:"拜访族长家",next:"huimen_exp3_clan_head_house",effects:{yin:2},condition:{flag:"knowsTruth"}}),createChoice({text:"去村街拐角王婆家",next:"huimen_exp3_granny_wang_house",effects:{yin:1},condition:{flag:"knowsTruth"}}),createChoice({text:"去废墟看看",next:"huimen_exp_ruins",effects:{yin:2}}),createChoice({text:"顺着月光小路走",next:"huimen_exp_moonlit_path",effects:{yin:2}}),createChoice({text:"调查村街四周",next:"huimen_exp_village_street_events_hub",effects:{yin:1}}),createChoice({text:"寻找秀兰",next:"huimen_exp_village_street_xiulan_hub",effects:{yin:1},condition:{flag:"knowsTruth"}}),createChoice({text:"探索更远的区域",next:"huimen_exp_village_street_districts_hub",effects:{yin:1}}),createChoice({text:"村街尽头有一块被青苔覆盖的石碑",next:"huimen_exp3_loop_counter",effects:{yin:2},condition:{yinAbove:8},hidden:true}),createChoice({text:"天快亮了，村街的气氛变了",next:"huimen_exp_village_street_dawn",effects:{yin:1},condition:{custom:(state)=>state.time>=1500&&!state.flags['huimen_exp_village_loop_entry_visited']},hidden:true}),createChoice({text:"子时到了，村子变得不对劲",next:"huimen_exp_village_street_midnight",effects:{yin:2},condition:{custom:(state)=>state.time>=1380&&!state.flags['huimen_exp_village_loop_entry_visited']},hidden:true}),createChoice({text:"回老宅正堂，不在这里耽搁",next:"huimen_exp_return_old_house",effects:{yin:1}}),createChoice({text:"去后院井边，用铜镜照一照",next:"huimen_exp_return_well",effects:{yin:1},condition:{hasItem:"铜镜碎片"}}),createChoice({text:"该去开红棺了",next:"huimen_exp_return_red_coffin",effects:{yin:1},condition:{hasItem:"铜钥匙"}}),createChoice({text:"先去老宅调查，不进灵堂",next:"investigate_old_house",effects:{yin:1},hidden:true}),createChoice({text:"把老宅的门换成一扇纸门",next:"huimen_exp_gate_of_paper_alt",effects:{yin:1},hidden:true}),createChoice({text:"村街尽头有块石碑，刻着\"入村者三，出村者一\"",next:"huimen_exp3_loop_stone",effects:{yin:1},condition:{yinAbove:8},hidden:true}),createChoice({text:"你保持清醒，注意到烛火阴影里还有一个人",next:"shadow_in_corner",effects:{sanity:-5},condition:{sanityAbove:80},hidden:true})],hallucination:'[whisper]你低头看自己的影子，影子里似乎还有一个人，正牵着你的衣角。[/whisper]'}),
    huimen_exp_village_street_dawn: createScene('huimen_exp_village_street_dawn', {title:'黎明前的村街',text:`你在村街上走了很久，久到月亮开始西斜，天边泛起一线鱼肚白。

村里的雾气变得稀薄，街道两旁的纸人开始枯萎，像被晒干的树叶，瘪了下去。你听见远处传来鸡鸣声，可那鸡鸣声不像来自活鸡，而像来自某个纸扎的鸡，"喔喔"地叫，带着回音。

[whisper]"天快亮了。"[/whisper]秀兰的声音说，"天亮之前，你必须做出选择。"

你抬头看天，东方的云层里透出一丝灰白。那是黎明的前兆。

[red]可这个村子，从来没有真正天亮过。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"趁天亮前离开村子","next":"huimen_exp_moonlit_escape","effects":{"yin":-3}}),createChoice({"text":"头也不回地离开，不带走任何东西","next":"huimen_exp_village_escape_alt","effects":{"yin":-3}}),createChoice({"text":"继续探索","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"去村口老槐树下等天亮","next":"huimen_exp_dawn_tree","effects":{"yin":2}})]}),
    huimen_exp_village_street_midnight: createScene('huimen_exp_village_street_midnight', {title:'子夜村街',text:`子时到了。

村街忽然安静下来，纸人、灯笼、纸钱，都停住了，一动不动。整个村子像被按下了暂停键，只有你的心跳还在响，"咚咚、咚咚"。

你抬头看天，月亮变成了血红色，悬在半空。月光照在地上，把石板路照得像一条血河，红得发亮。

[whisper]"子时是一天的尽头，也是阴阳交替的时候。"[/whisper]秀兰的声音说，"在这个时候，你可以看见村子真正的样子。"

你环顾四周，发现每一栋房子都在渗出黑色的液体，像血，又像墨，顺着墙根流。那些液体顺着石板缝流向村子中央，流向那口井。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"去村子中央看看","next":"huimen_exp_village_heart","effects":{"yin":2}}),createChoice({"text":"找地方躲起来","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":1}})]}),
    huimen_exp_village_street_empty: createScene('huimen_exp_village_street_empty', {title:'空村',text:`你走着走着，发现村街空了。

纸人不见了，灯笼熄灭了，连风声都停了，死寂。整条街只剩你一个人，脚步声在空旷中回响，"嗒、嗒、嗒"。

你推开一扇门，屋里空荡荡的，只有一张供桌，积着厚厚的灰。供桌上摆着一张照片，照片里是一家人的合影，站得整整齐齐。

你仔细一看，照片上的人都没有脸，一片空白。

[red]这个村子的人，早就不是人了。他们只是一段段被保存下来的记忆。[/red]

你把照片翻过来，背面写着："周家村，民国二十三年。"

你听见有人在叫你的名字。声音很轻，很远，像是从另一个世界传来的。你转过头，看见一个模糊的身影站在巷子的尽头。那身影穿着一件红色的衣服，在黑暗中格外醒目。它又叫了一声你的名字，声音甜腻而温柔，像是母亲的呼唤。你明知不该过去，但双脚却不受控制地朝它走去。你每走一步，那身影就退一步，始终保持着同样的距离。你开始跑，它也跑了起来，红色的衣摆在黑暗中飘动，像是一团漂浮的火焰。你追着它跑进了一条从未见过的小巷，巷子越来越窄，越来越暗，最后你撞上了一面墙——而那面墙是温热的、柔软的、在呼吸的。你闻到了一股浓烈的纸灰味。那气味像是从你的每一个毛孔里渗出来的，从你的呼吸、你的汗水、你的血液中散发出来。你低头看自己的身体，皮肤上浮现出密密麻麻的文字，是一种古老的、你从没学过的字体。那些文字在你的皮肤上蠕动，像是有生命的虫子，重新排列组合，形成一行又一行你读不懂的句子。你想把它们擦掉，但文字已经渗入了皮肤之下，和你的血管、神经、骨骼融为一体。你感到自己的记忆在被改写，那些文字正在一笔一划地覆盖你原来的记忆。水面上倒映的不是天空，而是另一个世界。你蹲在池塘边，看见水下的世界里有一栋房子，灯火通明，人声鼎沸。水下的你站在房子门口，身边围着许多人，有说有笑。但那个"你"忽然停下来，抬起头，隔着水面，直视着水面上的你。它笑了，然后缓缓举起一只手，朝你挥手。水面上忽然伸出一只苍白的手，抓住了你的脚踝。那只手冰冷刺骨，力气大得惊人，把你往水里拖。你拼命挣扎，但那只手越勒越紧，指甲嵌进你的皮肤，你感到自己正在被拖入那个不属于你的世界。你闻到了一股浓烈的纸灰味。那气味像是从你的每一个毛孔里渗出来的，从你的呼吸、你的汗水、你的血液中散发出来。你低头看自己的身体，皮肤上浮现出密密麻麻的文字，是一种古老的、你从没学过的字体。那些文字在你的皮肤上蠕动，像是有生命的虫子，重新排列组合，形成一行又一行你读不懂的句子。你想把它们擦掉，但文字已经渗入了皮肤之下，和你的血管、神经、骨骼融为一体。你感到自己的记忆在被改写，那些文字正在一笔一划地覆盖你原来的记忆。

一只冰冷的手从背后搭上了你的肩膀。你浑身一僵，不敢转头。那只手缓缓收紧，指甲嵌进你的肩膀，你感到温热的血液顺着衣服往下流。一个声音在你耳边响起，呼出的气冰冷刺骨："你不该回来的。"那个声音你很熟悉，是父亲的声音。但你的父亲十年前就已经死了。那只手开始用力，把你往黑暗里拉。你挣扎着转过身去——身后空无一人，只有无尽的黑暗。但你的肩膀上留下了五个深深的指甲痕，正在往外渗血。远处传来了唢呐的声音。那是一支婚嫁的曲子，本该喜庆欢快的旋律，在这个死寂的夜里听起来却像是送葬的哀乐。唢呐声越来越近，伴随着锣鼓声和鞭炮声，但那些声音都是失真的，像是从深水中传来的，沉闷而扭曲。你看见远处的黑暗中隐隐约约出现了一队人影，排成长列，缓缓向你走来。前面是举着牌子的人，后面是抬轿的人，再后面是吹吹打打的乐队。但那些"人"的动作僵硬而机械，像是被线牵着的木偶。你仔细一看，发现它们全都是纸人。四周的温度在急剧下降。你呼出的气变成了白雾，眉毛和睫毛上结了一层薄霜。地面开始结冰，冰面下隐约可见一些东西——手、脚、扭曲的肢体——被封在冰层中，保持着挣扎的姿势。你蹲下来，用袖子擦去冰面上的霜，想看得更清楚一些。冰层下面有一张脸，正仰面看着你，眼睛睁得很大，嘴唇翕动着，像是在说什么。你贴近冰面去听，只听到一个微弱的、断断续续的声音："救……我……"那张脸你认识——那是你自己。你听见有人在叫你的名字。声音很轻，很远，像是从另一个世界传来的。你转过头，看见一个模糊的身影站在巷子的尽头。那身影穿着一件红色的衣服，在黑暗中格外醒目。它又叫了一声你的名字，声音甜腻而温柔，像是母亲的呼唤。你明知不该过去，但双脚却不受控制地朝它走去。你每走一步，那身影就退一步，始终保持着同样的距离。你开始跑，它也跑了起来，红色的衣摆在黑暗中飘动，像是一团漂浮的火焰。你追着它跑进了一条从未见过的小巷，巷子越来越窄，越来越暗，最后你撞上了一面墙——而那面墙是温热的、柔软的、在呼吸的。

四周的温度在急剧下降。你呼出的气变成了白雾，眉毛和睫毛上结了一层薄霜。地面开始结冰，冰面下隐约可见一些东西——手、脚、扭曲的肢体——被封在冰层中，保持着挣扎的姿势。你蹲下来，用袖子擦去冰面上的霜，想看得更清楚一些。冰层下面有一张脸，正仰面看着你，眼睛睁得很大，嘴唇翕动着，像是在说什么。你贴近冰面去听，只听到一个微弱的、断断续续的声音："救……我……"那张脸你认识——那是你自己。镜子里的那个人不是你。你们穿着同样的衣服，长着同样的脸，但镜子里的那个"你"眼神空洞，表情呆滞，嘴角挂着一丝不属于你的微笑。你在镜外，它在镜内。你举起右手，它也举起右手——不，它举起了左手。你后退一步，它却前进一步，整张脸贴在了镜子上，鼻子压得扁平，嘴巴张开，露出里面黑洞洞的口腔。它开始用手指甲刮镜子，发出刺耳的吱嘎声，一道道划痕出现在镜面上，从里面。它想出来。你感到有什么东西从你的身体里往外钻。不是从外面进来的，而是从里面——从你的皮肤下面、肌肉里面、骨骼中间。那种感觉像是无数只蚂蚁在你的体内爬行，又像是无数根针同时刺入你的每一个毛孔。你撕开衣服，看见自己的皮肤上鼓起了一个个细小的包，包在移动，从胸口到腹部，从腹部到四肢。你用刀尖挑破了一个包，里面钻出一条白色的虫子，身体半透明，可以看见它体内流动的黑色液体。虫子落在地上，朝着黑暗深处爬去，和其他无数条虫子汇合在一起。你听见自己的心跳声在黑暗中回荡，那声音越来越响，越来越密，像是有人在你的胸腔里擂鼓。每一次心跳都带来一阵剧痛，从胸口蔓延到四肢百骸。你低头看去，胸口的衣服上渗出了暗红色的液体，不是血，是一种粘稠的、散发着甜腥气味的液体。液体在衣服上蔓延，形成一幅图案——那是一张脸，是你的脸，但表情扭曲，嘴巴大张，无声地尖叫着。你不记得自己什么时候流过这样的液体，但你知道，那不是你的。

空气中弥漫着一种奇怪的味道，像是烧焦的头发和腐烂的水果混合在一起。你开始咳嗽，咳出的不是唾液，而是一根根细小的、黑色的丝线。那些丝线落在地上，像虫子一样蠕动，朝着同一个方向爬去——朝着黑暗的最深处。你感到喉咙里有什么东西在生长，像是无数细小的根须在你的气管里蔓延，吸取你的养分。你想把它们拔出来，但每次伸手去抓，那些根须就往更深处缩，同时带来一阵撕心裂肺的疼痛。你发现自己的影子动了。不是跟着你动，而是自己在动。你站着一动不动，但地面上的影子却缓缓转过身来，用那张没有五官的脸"看"着你。影子的手臂抬起来，指向你的身后。你想回头，但一股强烈的不制止住了你——你想起了一个古老的禁忌：在夜里，如果你的影子自己动了，千万不要回头，因为你的身后站着的东西，是你这辈子最不想看见的。但影子还在指，越指越急，像是在警告你。你听见有人在叫你的名字。声音很轻，很远，像是从另一个世界传来的。你转过头，看见一个模糊的身影站在巷子的尽头。那身影穿着一件红色的衣服，在黑暗中格外醒目。它又叫了一声你的名字，声音甜腻而温柔，像是母亲的呼唤。你明知不该过去，但双脚却不受控制地朝它走去。你每走一步，那身影就退一步，始终保持着同样的距离。你开始跑，它也跑了起来，红色的衣摆在黑暗中飘动，像是一团漂浮的火焰。你追着它跑进了一条从未见过的小巷，巷子越来越窄，越来越暗，最后你撞上了一面墙——而那面墙是温热的、柔软的、在呼吸的。你听见了音乐。不是人间的音乐，那旋律尖锐而扭曲，像是用生锈的铁片刮过玻璃，又像是用钝刀切割骨头。音乐从四面八方传来，你无法分辨方向，它似乎同时从前后左右上下涌来，把你包裹在中间。随着音乐的节奏，黑暗中开始出现一些光点——幽绿色的、忽明忽暗的光点，像是无数只萤火虫，又像是无数只眼睛。光点开始移动，朝着你聚拢，越来越近，越来越密。你终于看清了那些光点的真面目——那是一颗颗悬浮在空中的眼球，瞳孔全部对准了你。`,effects:{"sanity":-8,"yin":2,"addItem":"民国二十三年周家村合影"},choices:[createChoice({"text":"把照片收好","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
