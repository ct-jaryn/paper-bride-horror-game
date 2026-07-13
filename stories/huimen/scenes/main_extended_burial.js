/**
 * 《回门》场景模块：main_extended_burial
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_xiulan_forgiveness: createScene('huimen_xiulan_forgiveness', {title:`她说的原谅`,text:`秀兰看着字条，又看着你。

她看了很久，看得字条上的字都开始发抖——不，是她的手在抖。她拿着字条的手是半透明的，月光能从手背透到手心。

"你祖父写了对不起。"她说，声音很轻，像怕惊动井底那些睡着的人，"可三十年，我等的不只是一句对不起。"

"那你还想要什么？"你问。

"我想要周家承认我。"她说，抬起头，眼里有一种你从未见过的亮，"不是作为鬼新娘，不是作为不祥女，是作为周秀兰——一个活生生的人。"

你点点头："我可以做到。族谱上，墓碑上，我都会写下你的名字。"

秀兰的眼泪落进井水里，井水第一次变得清澈。她伸出手，那只苍白的手穿过你的身体，你没有感到冷，而是感到一阵温暖。

"那我跟你走。"她说，声音里带着一点笑，也带着一点哭。`,textVariants:[{condition:{flag:'huimen_exp2_saw_xiulan_childhood'},text:`你想起她小时候绣花的样子：她说女子要学会绣花，将来好做嫁衣。`},{condition:{flag:'huimen_exp2_saw_xiulan_pregnancy'},text:`你想起她给小老虎衣服绣花时，说县里的学堂女孩子也能读书。`},{condition:{flag:'huimen_exp2_saw_xiulan_betrayal'},text:`你想起周文在门缝里伸出的手，差一寸就够到她了。`},{condition:{flag:'huimen_exp2_held_xiulan_in_well_memory'},text:`你想起井底她最后说："原来我不是一个人死的。"`},{condition:{flag:'huimen_exp3_knows_xiulan_birth'},text:`你想起她咬破手指写下的生辰八字。那才是真正的她。`},{condition:{flag:'huimen_exp3_promised_xiulan_opera'},text:`你想起她说过想看戏台上的花旦。"我带你去。"你说。`},{condition:{flag:'huimen_exp_saw_xiulan_death'},text:`你想起她刻在井壁上的"周文，我恨你。周文，我等你。"`},{condition:{hasItem:'记忆中的玉佩（虚幻）'},text:`你手中的玉佩忽然变得温热，又渐渐化作一缕青烟，像是终于还给了她。`},{condition:{hasItem:'秀兰的绣品'},text:`你怀里的绣品也轻轻颤了一下，针脚化在风里，像她的一个笑。`}],effects:{"sanity":15,"yin":-20,"setFlag":"xiulanMercy","addItem":["秀兰的嫁衣","秀兰的骨殖","孩子的骸骨"],"time":120},choices:[createChoice({"text":"准备安葬她","next":"huimen_prepare_burial","effects":{"yin":1}}),createChoice({"text":"先带她去见周家列祖列宗","next":"huimen_exp_ancestral_hall","effects":{"yin":1}})]}),
    huimen_prepare_burial: createScene('huimen_prepare_burial', {title:`备葬`,text:`你向秀兰伸出手。"走，"你说，"我带你回家。"她的身影从井水里缓缓升起，落在你身边，像一缕被月光纺成的纱。天快亮了。

东边的山头已经泛起一点鱼肚白，白得很淡，淡得像没睡醒的眼。你回到老宅，找出一身干净的白衣、一篮纸钱、一束从村口采来的野菊。

野菊是黄的，黄得发苦，闻着像葬礼。你把菊花的根泥抖干净，理齐花瓣，放在篮子最上面。秀兰的骨殖和孩子的骸骨都已经在你怀里，你要带着她们离开井底，好好安葬。

四婶看见你，没有阻拦，只是从角落里递给你一把铁锹。铁锹是旧的，锹柄磨得发亮，像是用过很多年。她的手在抖，抖得很厉害，却还是把铁锹塞进你手里。

"后山那块无字碑，是她唯一能去的地方。周家不让她进祖坟。"

"那从今以后，"你说，握紧那把铁锹，"她就是我的家人。我给她立碑。"`,effects:{"sanity":5,"yin":-5,"addItem":"葬花","time":120},choices:[createChoice({"text":"带村民作证，再去后山选葬地","next":"huimen_gather_villagers","effects":{"yin":1}}),createChoice({"text":"直接去后山安葬","next":"bury_xiulan","condition":{"hasItem":"秀兰的嫁衣"},"effects":{"yin":-3}})]}),
    huimen_gather_villagers: createScene('huimen_gather_villagers', {title:`请村民作证`,text:`你抱着秀兰的骨殖、嫁衣和孩子的骸骨走出老宅，身后跟着一队沉默的村民。

他们不知道什么时候跟上来的，你回头时，他们已经站成一排，低着头，像送葬的队伍。没有人说话，只有脚步声，"沙沙"地踩在泥路上。纸人们站在屋檐下，低着头，像是在送行。

你停在村街中央，大声说："周家秀兰，不是不祥女。她是我祖父未过门的妻子，是周家害了她。今天，我要给她名分，让她入土为安。"

没有人回应。但你注意到，有几户人家的门缝里，露出女子的脸。她们在看你，眼神里不再是恐惧，而是某种期待——像是等这一天，也等了很久。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_villagers_witnessed_burial"},choices:[createChoice({"text":"继续去后山","next":"huimen_choose_burial_site","effects":{"yin":1}}),createChoice({"text":"让村民们也写下她的名字","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-5}})]}),
    huimen_choose_burial_site: createScene('huimen_choose_burial_site', {title:`择地`,text:`你来到后山，无字碑立在荒草中。

草长得很高，高过你的腰。草里有露水，一走就湿了裤腿。无字碑孤零零地立着，碑身爬满了青苔，青苔里开着细小的白花。

碑旁有一棵老桂树，树龄看上去比村子还老。树干粗得要两个人才能合抱，树皮裂成一道道沟，沟里积着雨水。你想起秀兰说过，她最喜欢桂花。每年八月，桂花落在井沿上，是她唯一能闻到的香味。

[red]就葬在这里吧。[/red]

无字碑旁的桂树下已经挖好了一个土坑。坑边的土还带着湿气，像是不久前有人替你翻过。你握着四婶递来的铁锹，在坑边跪下，伸手拨开浮土。你挖到一尺深时，指尖碰到了一个硬物——是一只小小的虎头鞋，已经朽烂了，鞋面上的虎头还依稀可辨。`,effects:{"sanity":-5,"yin":-3,"setFlag":"huimen_chose_burial_site"},choices:[createChoice({"text":"把虎头鞋一并安葬","next":"huimen_burial_ritual","effects":{"sanity":5,"yin":-5,"addItem":"虎头鞋"}}),createChoice({"text":"继续挖坟坑","next":"huimen_burial_ritual","effects":{"yin":1,"addItem":"虎头鞋"}}),createChoice({"text":"把虎头鞋捧给秀兰看","next":"huimen_show_tiger_shoe","effects":{"yin":2,"addItem":"虎头鞋"}})]}),
    huimen_show_tiger_shoe: createScene('huimen_show_tiger_shoe', {title:'孩子的虎头鞋',text:`你没有立刻把虎头鞋放进土坑，而是把它捧到秀兰面前。

她的身影站在无字碑旁，薄得像一层晨雾。看见那只鞋时，她先是怔住，随后慢慢蹲下身，伸手碰了碰鞋面上已经褪色的虎头。

"这是我给他做的。"她说，声音轻得几乎听不见，"那时候我还以为，他能穿着它走出这座山。"

鞋底绣着的那个"元"字在她指尖下亮了一瞬。她没有哭，只把手收回来，朝你点了点头："现在，把我们一起埋下去吧。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_xiulan_saw_child_shoe"},choices:[createChoice({"text":"把虎头鞋和她们一起安葬","next":"huimen_burial_ritual","effects":{"yin":-5}})]}),
    huimen_burial_ritual: createScene('huimen_burial_ritual', {title:`归土`,text:`你把秀兰的骨殖、嫁衣、孩子的骸骨和那只朽烂的虎头鞋，一起放进土坑。

嫁衣是粉的，粉得像一捧春光。秀兰的骨殖被嫁衣包着，孩子的骸骨小得能托在掌心。虎头鞋已经朽得只剩一个轮廓，却还是虎头的样子。

天边泛起鱼肚白。第一缕阳光照在无字碑上时，碑身上的血字慢慢褪去，取而代之是普通的刻字：

[faded]"周氏秀兰之墓"[/faded]

你捧起土，一捧一捧地盖上去。土是湿的，盖上去"沙沙"地响，像在替她盖被子。

"秀兰，"你说，声音哽在喉咙里，"愿你下辈子，能嫁一个真心待你的人。"

一个穿红嫁衣的女子站在阳光下，朝你福了一福，然后化作点点红光消散。那红光很暖，暖得你眼眶发酸。

你终于走出了山村。

但你知道，这个村子的罪，还没有还完。`,effects:{"sanity":20,"yin":-30},choices:[createChoice({"text":"离开山村","next":"","ending":"redemption"}),createChoice({"text":"想起族谱上的正名，把族谱也埋在墓旁","next":"","condition":{"flag":"restored_xiulan_name"},"hidden":true,"ending":"hidden_perfect_redemption"}),createChoice({"text":"一切已明，打开阴阳簿","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]})
};
