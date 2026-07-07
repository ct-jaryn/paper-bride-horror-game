/**
 * 《回门》场景模块：exp_temple
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_temple_gate: createScene('huimen_exp_temple_gate', {title:'山庙',text:`你来到村外的小庙前。

庙门只剩下一扇，另一扇倒在草丛里，半埋在腐叶中。门框上缠满了藤蔓，藤蔓上挂着褪色的红绸，红绸已被风雨撕成条。庙里没有香火气，只有一股潮湿的霉味，混着陈年的血腥。

你跨过门槛，脚下的石板突然"咔"地陷下去一块。低头一看，石板上刻着字，字迹已被磨得模糊：

[faded]"秀兰埋骨之处，后人莫近。"[/faded]

你心头一紧。这庙不是供神的，是镇魂的。

供桌上积着厚厚的灰，灰里埋着半支熄灭的香。你拿起那支香，香头上还残留着一点余温，像是刚熄不久。`,effects:{"sanity":-5,"yin":2,"addItem":"半支安神香"},choices:[createChoice({"text":"点燃安神香","next":"huimen_exp_burn_incense_scene","condition":{"hasItem":"打火机"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"进内殿看看","next":"huimen_exp_temple_inner","effects":{"yin":2}}),createChoice({"text":"敲响庙钟","next":"huimen_exp_temple_bell","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"跪在庙前祈愿","next":"huimen_exp_temple_pray","effects":{"yin":1}}),createChoice({"text":"离开，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"庙门后坐着一个敲木鱼的枯瘦老人","npc":"lao_zhou","npcNode":"start","effects":{"yin":1},"custom":true})]}),
    huimen_exp_temple_inner: createScene('huimen_exp_temple_inner', {title:'庙内',text:`你举着未燃尽的安神香走进内殿。香烟像活物一样往前钻，所到之处，棺材上的黄符自动剥落，露出底下漆黑的棺木。

内殿里没有神像，只有一口竖着的棺材，黑漆漆的，靠墙而立。棺材上贴着密密麻麻的黄符，一层叠一层，符上的朱砂字已经褪色，变成暗红。

你走近一步，棺材里传来"咚咚"的声响，像是什么东西在里面敲门。

[red]是心跳声。[/red]

你屏住呼吸，凑近看，发现棺材板上刻着一行小字：

[faded]"秀兰之魂，分而镇之。一镇于井，一镇于庙，一镇于桑。三魂归一，方得超脱。"[/faded]

原来秀兰的魂被分成了三份，分别镇在井、庙、桑树。你要救她，必须解开这三处镇魂。`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_knows_three_souls"},choices:[createChoice({"text":"撕掉棺材上的黄符","next":"huimen_exp_temple_release","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"后退离开","next":"huimen_exp_temple_gate","effects":{"yin":1}}),createChoice({"text":"你已经知道解法，去桑树","next":"huimen_exp_mulberry_tree","condition":{"flag":"huimen_exp_knows_three_souls"},"effects":{"yin":1}}),createChoice({"text":"掀开内殿地面的石板","next":"huimen_exp_temple_underground","condition":{"flag":"huimen_exp_released_temple_soul"},"effects":{"yin":2}})]}),
    huimen_exp_temple_release: createScene('huimen_exp_temple_release', {title:'庙中开棺',text:`你一张一张撕下棺材上的黄符，符纸脆得像枯叶，一撕就碎。

棺材板"砰"地一声弹开，里面却没有尸体，只有一缕细细的黑发。黑发像有生命一样飘出来，缠在你的手腕上，凉丝丝的。

你感到一阵刺痛，像是被烙铁烫过。黑发渐渐变白、变轻，最后化为一团光，没入你的胸口。

[whisper]"第一份魂，我收回了。"[/whisper]秀兰的声音在你脑海里响起，"还有两份。"

你低头看自己的手腕，那里多了一道细细的红痕，像一根褪色的红绳。`,effects:{"sanity":-5,"yin":5,"setFlag":"huimen_exp_released_temple_soul"},choices:[createChoice({"text":"去井边解第二份魂","next":"huimen_exp_well_release","effects":{"yin":1}}),createChoice({"text":"先回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_temple_bell: createScene('huimen_exp_temple_bell', {title:'庙钟',text:`你拉住钟绳，敲响庙钟。

钟声不是金属声，而是像敲在骨头上，沉闷、空洞，一声一声，回荡在空山里。敲到第三下时，你听见钟声里混着别的声音——

[whisper]"别敲了……别敲了……"[/whisper]

是秀兰的声音，带着哭腔。

你继续敲。第四下、第五下、第六下。每敲一下，庙里的灰尘就落下一大片，像是有什么东西被震醒了，在庙梁上窸窸窣窣地动。

第七下时，供桌"轰"地塌了。半支安神香滚到你脚边，香灰撒了一地。

[red]你看见香灰里有一行字："敲钟七下，魂归故里。"[/red]`,effects:{"sanity":-8,"yin":3,"removeItem":"半支安神香"},choices:[createChoice({"text":"把香灰收集起来","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"香灰"}}),createChoice({"text":"离开庙","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_temple_pray: createScene('huimen_exp_temple_pray', {title:'祈愿',text:`你跪在庙前的石阶上，双手合十。

你不知道该求什么。求秀兰放过你？求周家祖先保佑你？还是求自己能活着走出这个村子？念头转了一圈又一圈。

最后你只说了一句话："愿秀兰安息。"

话音刚落，庙前的石阶上忽然长出一朵小花，"噗"地从石缝里钻出来。花是白色的，在月光下微微发亮。

[red]这是秀兰最喜欢的桂花。[/red]

你摘下花，放在鼻尖闻了闻，香气清淡，却让你安心。`,effects:{"sanity":5,"yin":-5,"addItem":"桂花"},choices:[createChoice({"text":"把花献给秀兰","next":"huimen_exp_xiulan_flower","effects":{"yin":-3}}),createChoice({"text":"收好，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_temple_donation: createScene('huimen_exp_temple_donation', {title:'捐香火',text:`你在庙里找到一个破旧的功德箱。

功德箱上写着"周家香火"，箱口已经生锈，锈迹斑斑。你摸了摸口袋，掏出那枚清代铜钱，投了进去。

铜钱落箱，发出一声清脆的响声，"叮——"地回荡。庙里的阴影忽然退散了许多，亮堂了几分。

"这不是周家的香火。"一个声音说，"这是秀兰的香火。"

你抬头，看见庙梁上刻着一行小字：

[faded]"凡捐一文者，可减秀兰一日之苦。"[/faded]

[red]原来这枚铜钱，是专门为秀兰准备的。[/red]`,effects:{"sanity":5,"yin":-5,"removeItem":"清代铜钱"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_temple_underground: createScene('huimen_exp_temple_underground', {title:'庙下',text:`你在庙里发现一块松动的石板，石板比别处高出半寸。

你掀开石板，下面是一条狭窄的通道，只容一人侧身而过。通道尽头是一间石室，石室正中放着一口石棺。

石棺上刻着"周氏秀兰之遗蜕"。你深吸一口气，打开石棺——里面是一具小小的骸骨，蜷缩着，像是在保护什么，姿势像个熟睡的孩子。

[red]这是秀兰真正的尸骨。[/red]

骸骨的怀里，紧紧抱着一个小小的布包。你小心打开布包，里面是一块已经发硬的桂花糕，还隐约闻得到一点甜香。`,effects:{"sanity":-10,"yin":3,"addItem":"秀兰的遗骨"},choices:[createChoice({"text":"把遗骨带出去安葬","next":"huimen_exp_return_bury_xiulan","effects":{"yin":-5}}),createChoice({"text":"把桂花糕留给井里的秀兰","next":"huimen_exp_temple_underground_cake","effects":{"sanity":5,"yin":-5}})]}),
    huimen_exp_temple_underground_cake: createScene('huimen_exp_temple_underground_cake', {title:'还糕',text:`你捧着那块发硬的桂花糕，来到井边。

秀兰的身影浮出来。她看见桂花糕，整个人愣住了，手悬在半空，不敢去接。

"这是我娘给我做的。"她说，声音发颤，"她说，嫁人的时候要吃桂花糕。"

"你吃吧。"你说，"虽然硬了。"

秀兰接过桂花糕，化作一道光吸入身体。她的身影凝实了一些，笑容也更真了。

"甜的。"她说，眼泪却落了下来，"三十年了，我终于又吃到甜的。"`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的遗骨"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
