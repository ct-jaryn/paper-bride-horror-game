/**
 * 《回门》场景模块：exp2_xiulan_memory
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_xiulan_memory_childhood: createScene('huimen_exp2_xiulan_memory_childhood', {title:'秀兰的记忆 · 童年',text:`你忽然感到一阵眩晕，眼前的景象晃动起来，像是水面被石子打碎。

再睁眼时，你已经不在村街上了。你站在一座小院里，院子是青砖铺的，缝里长着青草。院子里有一棵桂花树，树不大，刚到屋檐，却开满了花，金黄的小花落了一地，像铺了一层金。

树下坐着一个小女孩，七八岁的模样，扎着两条小辫，穿一件蓝布褂子。她正低着头绣花，针线在手里翻飞，绣的是一对鸳鸯。

"秀兰。" 你脱口而出。

小女孩抬起头，脸上有一道针扎的红痕——是绣花时不小心扎的。她笑了，笑得很甜，露出两颗缺了的门牙："你怎么知道我的名字？"`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"陪她绣花","next":"huimen_exp2_xiulan_memory_childhood_sew","effects":{"yin":-3}}),createChoice({"text":"告诉她以后的事","next":"huimen_exp2_xiulan_memory_childhood_warn","effects":{"yin":2}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_childhood_sew: createScene('huimen_exp2_xiulan_memory_childhood_sew', {title:'秀兰童年绣花',text:`你坐下来，看秀兰绣花。

她绣的是一对鸳鸯，针脚细密，红线在蓝布上跳，像活的一样。她的手指很短，却灵巧得很，一针上来，一针下去，快得你眼睛都跟不上。

"我娘说，女子要学会绣花，将来好做嫁衣。" 她说，头也不抬，"她说绣得好，就能嫁个好人家。"

"你绣得很好。" 你说，喉咙发紧。

秀兰开心地笑了，那笑容里没有一丝阴霾，干净得像井里的水。她不知道，她绣的嫁衣，永远没有机会穿。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_childhood"},choices:[createChoice({"text":"继续看她的后来","next":"huimen_exp2_xiulan_memory_love","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_childhood_warn: createScene('huimen_exp2_xiulan_memory_childhood_warn', {title:'警告',text:`你想告诉她以后的事——告诉她不要爱周文，不要怀孕，不要相信周家的承诺。你张开嘴，却发现自己发不出声音，像是有人掐住了你的喉咙。

秀兰疑惑地看着你，放下手里的针线："你怎么了？脸怎么白了？"

你拼命摇头，眼泪却流了下来。你知道，历史不能改变。你能做的，只是记住她此刻的笑容，记住这个还没有受过伤害的小女孩。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_love: createScene('huimen_exp2_xiulan_memory_love', {title:'秀兰的记忆 · 相爱',text:`画面一转，你又进入一段记忆。

这次是在河边。河水清清，能看见底下的卵石。年轻的秀兰站在岸边，穿一件素色的旗装，发髻上插着一朵野花。一个穿学生装的男子站在她面前，手里捧着一束野花，递给她。

秀兰脸红地接过，低下头，不敢看他。

"周文，" 她说，声音很轻，"你考上县里的学堂了，以后会不会忘了我？"

"不会。" 男子说，他的声音里有少年的坚定，"我一辈子都不会忘。我读完书，就回来娶你。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"继续看","next":"huimen_exp2_xiulan_memory_love_more","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_love_more: createScene('huimen_exp2_xiulan_memory_love_more', {title:'誓言',text:`周文从怀里掏出一块玉佩，递给秀兰。

玉佩是白的，刻着一朵兰花，润得像脂。他用一根红绳穿着，红绳是新系的，结打得歪歪扭扭，像是一个不会打结的人打的。

"这是我娘留给我的。" 他说，"等我娶你那天，再给你戴上。"

秀兰接过玉佩，贴在心口，像是贴着一个承诺。

[red]你认出那块玉佩。它在祖母的遗物里，用红布包着，三十年没动过。祖母临终前，把它塞进你手里，说："还给秀兰。"[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"记忆中的玉佩（虚幻）"},choices:[createChoice({"text":"继续看下去","next":"huimen_exp2_xiulan_memory_pregnancy","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_pregnancy: createScene('huimen_exp2_xiulan_memory_pregnancy', {title:'秀兰的记忆 · 怀孕',text:`画面来到一间小屋。

屋子不大，却收拾得干净。周文已经走了三年。秀兰发现他离开三个月后，便有了这个孩子。

桌上放着一碗没吃完的桂花糕，旁边是一把剪刀和一块没剪完的布。秀兰坐在床边，手放在微微隆起的肚子上，脸上带着幸福的笑。

她正在缝制一件小衣服，衣服很小，是给婴儿穿的。针脚比童年时更细密了，她绣的是一只小老虎，虎头虎脑，很可爱。

"宝宝，" 她对着肚子说，声音轻柔，"你爹会来接我们的。我们要离开这里，去县里，去更大的地方。你爹说，县里有学堂，女孩子也能读书。"`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"告诉她真相","next":"huimen_exp2_xiulan_memory_pregnancy_cry","effects":{"yin":3}}),createChoice({"text":"安静地看","next":"huimen_exp2_xiulan_memory_pregnancy_silent","effects":{"yin":-3}})]}),
    huimen_exp2_xiulan_memory_pregnancy_cry: createScene('huimen_exp2_xiulan_memory_pregnancy_cry', {title:'崩溃',text:`你忍不住，脱口而出："他不会来的。"

秀兰的笑容僵住了。她抬起头看你，眼眶里慢慢涌出泪水，泪水在眼眶里转了一圈，终于落下来，砸在手背上。

"你说什么？" 她问，声音发抖。

你再也说不出话。你想说"他会来的"，可你刚才已经说了实话。画面开始扭曲，桌上的桂花糕碎成一片，小衣服上的老虎也化了。秀兰的哭声像刀子一样，一下一下，刺进你心里。`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"继续看","next":"huimen_exp2_xiulan_memory_betrayal","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_pregnancy_silent: createScene('huimen_exp2_xiulan_memory_pregnancy_silent', {title:'静默',text:`你静静地站在一边，看秀兰。

她缝完最后一件小衣服，把它叠好，整整齐齐地放在枕边。然后她轻轻哼起一首歌，哄肚子里的孩子睡觉。那歌没有词，只有调子，是村里的摇篮曲。

[whisper]"睡吧，睡吧，我的宝贝……"[/whisper]

她的声音很轻，轻得像风。你泪流满面，却不敢出声，怕惊动她，怕让她知道，她的孩子永远等不到穿这件衣服的那一天。`,effects:{"sanity":-3,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_pregnancy"},choices:[createChoice({"text":"继续看","next":"huimen_exp2_xiulan_memory_betrayal","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_betrayal: createScene('huimen_exp2_xiulan_memory_betrayal', {title:'秀兰的记忆 · 背叛',text:`画面来到秀兰被拖走的那天。

天是阴的，要下雨。秀兰在小屋里收拾东西，把小衣服一件件叠好。门忽然被踹开，几个壮汉闯进来，把秀兰按在床上。秀兰挣扎，喊救命，可没有人来。

周文的母亲站在门口，穿着一身黑，脸像一块铁，冷冷地说："丢尽周家的脸。活埋。"

秀兰挣扎着，喊周文的名字，一声一声，像是要把喉咙喊破。周文被关在东厢房，砸门的声音很远，"砰砰砰"，一下一下，却始终打不开。

[red]她最后看见周文，是在门缝里。他哭着看她，伸手要抓她，却被几个人按住。他的手指从门缝里伸出来，秀兰也伸手去抓——两根手指，差一点就够到了。[/red]`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp2_saw_xiulan_betrayal"},choices:[createChoice({"text":"退出这段痛苦的记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}}),createChoice({"text":"抱住秀兰","next":"huimen_exp2_xiulan_memory_betrayal_hug","effects":{"sanity":-5,"yin":-5}})]}),
    huimen_exp2_xiulan_memory_betrayal_hug: createScene('huimen_exp2_xiulan_memory_betrayal_hug', {title:'背叛记忆拥抱',text:`你冲上去，抱住秀兰。

你的身体穿过了她——她是记忆，不是实体。可她似乎感觉到了什么，像是有一阵暖风拂过。她抬起头，朝你的方向看了一眼，眼眶里满是泪水。

"是谁？" 她问，声音很轻。

"是一个会记住你的人。" 你说，明知她听不见，还是说了，"是一个三十年后会回来的人。"

画面渐渐淡去，秀兰的身影也越来越淡，最后只剩下一缕桂花香。`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp2_hugged_xiulan_in_memory"},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_wedding: createScene('huimen_exp2_xiulan_memory_wedding', {title:'秀兰的记忆 · 嫁衣',text:`你进入一段新的记忆。

这是她被拖走前的最后一夜。红嫁衣是她自己偷偷缝的，周文说会回来娶她，但她再也没等到。这不是真正举行过的婚礼，而是她死前反复做的一场梦，是执念凝成的记忆。

秀兰穿着一身大红嫁衣，坐在喜房里。嫁衣是她自己绣的，金线鸳鸯，针脚细密。她盖着红盖头，手里攥着一块玉佩——是周文给她的那块。

喜房里点着红烛，烛火"噼啪"地响。桌上放着合卺酒，酒是红的，像血。

"周文说，今夜就来娶我。" 她轻声说，像是对自己说，也像是对玉佩说，"我等这一天，等了三年。"`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"掀开她的盖头","next":"huimen_exp2_xiulan_memory_wedding_unveil","effects":{"yin":2}}),createChoice({"text":"陪她等","next":"huimen_exp2_xiulan_memory_wedding_wait","effects":{"yin":-3}})]}),
    huimen_exp2_xiulan_memory_wedding_unveil: createScene('huimen_exp2_xiulan_memory_wedding_unveil', {title:'掀盖头',text:`你伸出手，掀开她的盖头。

盖头下的秀兰笑得很美，眉如远山，眼含秋水，眼角有一颗泪痣。她看着你——不，是看着周文的方向——脸上是新娘子的羞涩和期待：

"你来了。"

画面突然扭曲。喜房变成了井底，红烛变成了井壁的青苔，合卺酒变成了井水。秀兰穿着同样的嫁衣，沉在血红的井水里，头发散开，像水草。`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}}),createChoice({"text":"捡起地上的红盖头","next":"huimen_exp_bride_veil_alt","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_wedding_wait: createScene('huimen_exp2_xiulan_memory_wedding_wait', {title:'婚礼记忆等待',text:`你陪秀兰坐着，看她等。

她等了很久。红烛烧了一半，烛泪流了一桌。窗外的天从黑变灰，从灰变白，鸡叫了三遍。她脸上的笑容渐渐淡了，从期待变成失望，从失望变成认命。

"他不会来了。" 她说，声音很平静，平静得让人心碎，"我知道。我早就知道。"

[red]可她还是穿着嫁衣，等到了天亮。她不愿意脱，像是脱了，就连最后的希望都没有了。[/red]`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_wedding_wait"},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}}),createChoice({"text":"继续看，她等到了井底","next":"huimen_exp2_xiulan_memory_well","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_well: createScene('huimen_exp2_xiulan_memory_well', {title:'秀兰的记忆 · 井底',text:`你来到秀兰被活埋时的记忆。

井水冰冷，秀兰蜷缩在井底，双手护着肚子。井底很黑，看不见手指，只能摸到湿滑的井壁。她的指甲在井壁上刻字，刻到指甲翻起，血把井水染红。

她刻一行，停一下，喘一口气，再刻一行：

"周文，我恨你。周文，我等你。"

恨和爱，写在同一面墙上。`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp2_saw_xiulan_well_memory"},choices:[createChoice({"text":"帮她刻字","next":"huimen_exp2_xiulan_memory_well_help","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"握住她的手","next":"huimen_exp2_xiulan_memory_well_hold","effects":{"sanity":5,"yin":-10}})]}),
    huimen_exp2_xiulan_memory_well_help: createScene('huimen_exp2_xiulan_memory_well_help', {title:'井中相助刻字',text:`你伸出手，帮她在井壁上刻字。

你的手指穿不过井壁——你是记忆里的人，可你能感觉到井壁的冰凉。你和秀兰一起，一笔一画地刻：

"周秀兰，民国二十三年卒。周家所害。"

刻完，秀兰看着你，眼泪和井水混在一起，分不清哪是泪，哪是水。

"谢谢你。" 她说，声音很轻，"至少有人知道我是怎么死的。"`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_well_hold: createScene('huimen_exp2_xiulan_memory_well_hold', {title:'握手',text:`你伸出手，握住她的手。

她的手很凉，凉得像井水，凉得像石头。可你没有松，你把她的手握在掌心，想用自己的体温把她焐热。

你陪她在井底坐着，看井口的星星一颗一颗地出来，又一颗一颗地隐去。她的呼吸越来越浅，越来越慢，像是潮水在退。

"原来我不是一个人死的。" 她说，声音轻得像风，"谢谢你陪我。"

她的手最后松开了，松得很轻，像是一片叶子落下。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_held_xiulan_in_well_memory"},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1},"setFlag":"huimen_exp2_promised_to_restore_name"})]}),
    huimen_exp_bride_veil_alt: createScene('huimen_exp_bride_veil_alt', {title:'红盖头',text:`你弯腰捡起红盖头。

盖头还很新，金线绣的鸳鸯却已散了眼。你指尖一碰，红线就化作一缕红烟，从你指缝里漏了出去。烟里浮出秀兰的声音，很轻："别捡了。那不是我的嫁衣，是我等不到的那一夜。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"退出记忆","next":"huimen_exp2_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp2_xiulan_memory_return: createScene('huimen_exp2_xiulan_memory_return', {title:'从记忆里回来',text:`桂花香气忽然淡了。

你像是被人从一幅画里推了出来，踉跄一步，发现自己还站在村街上。手里没有玉佩，没有绣针，可那些触感还留在皮肤上。

街边的纸人看了你一眼，又低下头去，像是什么都没发生。`,textVariants:[{condition:{flag:'huimen_exp2_saw_xiulan_childhood'},text:`你想起那个绣花的小女孩，她还说要嫁个好人家。`},{condition:{flag:'huimen_exp2_saw_xiulan_pregnancy'},text:`你想起她缝给小老虎的衣服，针脚比童年时更细密。`},{condition:{flag:'huimen_exp2_saw_xiulan_betrayal'},text:`你想起周文在门缝里伸出的手，差一点点就够到秀兰。`},{condition:{flag:'huimen_exp2_hugged_xiulan_in_memory'},text:`你想起那个穿过了她的拥抱，像一阵暖风。`},{condition:{flag:'huimen_exp2_saw_xiulan_well_memory'},text:`你想起井壁上那行"周文，我恨你。周文，我等你"。`},{condition:{flag:'huimen_exp2_held_xiulan_in_well_memory'},text:`你想起她在井底说："原来我不是一个人死的。"`},{condition:{flag:'huimen_exp2_promised_to_restore_name'},text:`你低声重复："我会把你的名字写回族谱。"风停了，像有人在暗处听。`}],choices:[createChoice({"text":"回到村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};