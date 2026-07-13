/**
 * 《回门》场景模块：main_extended_truth
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_red_coffin_discovery: createScene('huimen_red_coffin_discovery', {title:`井底红棺`,text:`你喘了口气，抓着井绳滑了下去。井底的红棺还在，红绳和铜钱在幽暗中泛着旧光。

碎片很碎，碎成十几片，散在井沿四周。每一片都映着一弯残月，残月在碎片里晃，像在碎玻璃里游泳。

井绳粗得硌手，麻绳的纤维勒进掌心，勒出一道道红印。井水冰凉刺骨，凉得你一口气没喘上来，差点呛了一口。

越往下越红。水先是淡红，然后是暗红，最后红得像血。红光从井底透上来，照得井壁上的青苔都发着红。

终于，你的脚踩到了硬物。

那是一口红漆棺材，棺盖上钉着九根桃木钉，每根钉子上都缠着一张黄符。符上写着你的生辰八字。

[red]这才是秀兰真正的棺木。[/red]

棺材旁边散落着一些女子的饰物：一支银簪、半块玉佩、一束干枯的头发。你捡起银簪，簪头刻着两个字："照魂"。`,effects:{"sanity":-20,"yin":10,"addItem":"云袖银簪","setFlag":"found_red_coffin"},textVariants:[{condition:{custom:(state)=>state.history.filter(s=>s==='huimen_red_coffin_discovery').length===1},text:`这是你第一次下到井底，井水凉得你倒吸一口冷气。`},{condition:{custom:(state)=>state.history.filter(s=>s==='huimen_red_coffin_discovery').length>=2},text:`你重新下到井底，红棺还在原来的位置，只是水温似乎比之前更冷了。`},{condition:{custom:(state)=>state.history.length>=2 && state.history[state.history.length-2]==='hold_breath'},text:`你沿着山路跑回村子，月光把井口照得发白。井沿上的铜镜碎片还在，碎片很多，每一片都映着一弯残月。你不知哪来的勇气，抓着井绳滑了下去。`}],choices:[createChoice({"text":"用银簪撬开棺盖","next":"open_red_coffin","condition":{"hasItem":"云袖银簪"},"effects":{"sanity":-10,"yin":5}}),createChoice({"text":"先上井寻找开棺线索","next":"huimen_truth_revelation","effects":{"sanity":3,"yin":1}})]}),
    huimen_truth_revelation: createScene('huimen_truth_revelation', {title:`真相如刀`,text:`你爬出井口，坐在井沿上喘气。

你浑身湿透，水顺着衣角往下淌，淌在青石板上，汇成一摊暗红。你的牙在打颤，分不清是冷还是怕。月光照在你身上，把你影子投在地上，那影子比你还黑。

月光照在无字碑上，碑身浮现出一行行血字。那血字是从碑里渗出来的，一笔一画都红得刺眼：

[faded]"周家秀兰，年十六。与周家少爷有情，珠胎暗结。周家恐丑事外扬，于子时活埋于井底，对外宣称未婚卒。秀兰含冤三十年，求周家后人还我名分，令我归土。"[/faded]

你浑身发抖。

[red]秀兰不是病死的。她是被周家活埋的。[/red]

而那个周家少爷，正是你的祖父。你胸口忽然一烫，像有人用烧红的针尖按在那颗红痣上。你小时候祖母说过，周家男丁都有这样一颗痣，你却从没放在心上。此刻那句话记得格外清楚，清晰得像是她在耳边又念了一遍。`,effects:{"sanity":-15,"yin":5,"setFlag":"knowsTruth"},choices:[createChoice({"text":"回老宅找族谱","next":"huimen_seek_evidence","effects":{"yin":1}}),createChoice({"text":"喘口气，再下一次井，把她接上来","next":"huimen_red_coffin_discovery","effects":{"yin":2}}),createChoice({"text":"在碑前发誓为她正名","next":"swear_justice","effects":{"sanity":5,"yin":-5,"setFlag":"xiulanMercy"}})]}),
    huimen_seek_evidence: createScene('huimen_seek_evidence', {title:`寻证`,text:`你悄悄摸进老宅东厢房。

厢房很暗，窗户被布帘遮得严严实实。你摸黑找到樟木箱，箱盖很沉，掀开时"嘎吱"一声，像是一只老兽在呻吟。樟木的香扑出来，香里压着一股陈年的霉。

樟木箱底有一本泛黄的族谱。族谱厚得像砖，封皮是黑布的，已经被翻得发毛。你翻到最后一页，秀兰的名字被墨水涂黑了，旁边用朱笔写着"周氏不祥女"五个字。那朱笔写得很重，把纸都戳穿了。

你手指发抖，用指甲把涂黑的地方一点点刮开。墨是陈墨，刮起来"沙沙"地响，像在刮一块干掉的伤疤。

秀兰。周家长子未婚妻。民国二十三年卒。

[red]她不是不祥。她是被周家活埋的。[/red]

你在她名字旁边，用颤抖的手写下："周氏秀兰，明媒正娶。"刚写完最后一个字，窗外的纸钱忽然停了。远处传来一声似有似无的叹息。`,effects:{"sanity":-10,"yin":-10,"setFlag":"restored_xiulan_name"},choices:[createChoice({"text":"把族谱带去给秀兰看","next":"huimen_family_tree_confront","effects":{"yin":1}}),createChoice({"text":"先去井底开棺","next":"huimen_red_coffin_discovery","effects":{"yin":2}}),createChoice({"text":"在祠堂公开族谱","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-3}})]}),
    huimen_family_tree_confront: createScene('huimen_family_tree_confront', {title:`对簿`,text:`你带着改写过的族谱回到井边。

井水还在，月光还在。秀兰的身影从井水里浮出来，浮得很慢，像一张被水泡过的画慢慢显形。她看着你手里的族谱，眼眶里红色的泪光闪烁。

"你……真的把我的名字写回去了？"她的声音很轻，轻得像怕惊碎什么。她伸出手，想摸那本族谱，手却穿过了纸页。

"不只是名字。"你说，把族谱翻给她看，"我把'不祥女'三个字也划掉了。你是周家的人，从来都是。"

秀兰伸出手，苍白的手指穿过族谱纸页。纸页上的墨迹忽然亮了一下，像是被什么力量认可了。那亮是一瞬的，却很暖，暖得她整个人都透了一点。

"三十年，"她说，声音哽住了，"我等了三十年，就想听周家人说一句：你是我的。"

她缓缓从井水里托起三样东西，递到你面前——一件叠得整整齐齐的红嫁衣，一包被井水浸黑的骨殖，还有一截小小的、发白的骸骨。那截小骨头轻得像一捧碎瓷，是她未出世的孩子留在井底的唯一一点形骸。

"带上它们，"她说，"带我走。"`,textVariants:[{condition:{flag:'huimen_exp3_knows_xiulan_birth'},text:`你想起那张红纸上的生辰八字。你把它也写进了族谱——不是周家随手糊弄的假名，是她真正的生日。`},{condition:{flag:'huimen_exp3_promised_xiulan_opera'},text:`你低声说："我还记得答应过你，带你去看戏。"她的眼眶又亮了一下，像很多年前的那个小女孩。`},{condition:{flag:'huimen_exp2_promised_to_restore_name'},text:`你想起在井底记忆里握着她的手时说过："我会把你的名字写回族谱。"现在，你真的做到了。`},{condition:{flag:'huimen_exp3_promised_to_restore_name'},text:`你握紧族谱："秀兰，我把你的名字堂堂正正写回去了。"`}],effects:{"sanity":10,"yin":-15,"setFlag":"xiulanMercy","addItem":["秀兰的嫁衣","秀兰的骨殖","孩子的骸骨"]},choices:[createChoice({"text":"现在我可以带你走了","next":"huimen_prepare_burial","condition":{"hasItem":"秀兰的嫁衣"},"effects":{"yin":1}}),createChoice({"text":"先解开红棺的封印","next":"open_red_coffin","effects":{"yin":2}}),createChoice({"text":"让族谱上的所有女子都被看见","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-5}})]})
};
