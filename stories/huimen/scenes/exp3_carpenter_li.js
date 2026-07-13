/**
 * 《回门》场景模块：exp3_carpenter_li
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_carpenter_li_shop: createScene('huimen_exp3_carpenter_li_shop', {title:'李木匠铺',text:`村街尽头有一间木匠铺，铺子里堆满刨花和未完工的棺木。

刨花堆得像小山，散发着松木的清香。可那香里压着一股说不出的霉，像是木头自己也想哭。铺子的门半掩着，门板上贴着一张褪色的招贴，写着"承接棺木寿材"，字迹被烟熏得发黄。

一个中年男人坐在刨花堆里，正在刨一块棺材板。他的手指粗大，掌心布满老茧，指甲缝里塞着木屑。他刨得很慢，每刨一下，刨花就卷成一圈落下来，像一朵朵白色的花。

他抬头看你，眼神却很温和。那温和里有一点累，像是一个守了很久的活人，活在一个全是鬼的村子里，早就活麻木了。`,effects:{"yin":1},choices:[createChoice({"text":"问他是不是李木匠","next":"huimen_exp3_carpenter_li_talk","effects":{"yin":1}}),createChoice({"text":"看他在做什么","next":"huimen_exp3_carpenter_li_work","effects":{"yin":1}})]}),
    huimen_exp3_carpenter_li_talk: createScene('huimen_exp3_carpenter_li_talk', {title:'李木匠',text:`"是我。"李木匠放下刨子，"你要打棺材？还是要打家具？"

你摇摇头，说你是来找秀兰的。

他的脸色变了。那变化很慢，像一池水被人投进了一颗石子，涟漪从他眼角荡开，一直荡到嘴角。他手里的刨子"当啷"一声掉在地上，刨花被震得飞起来，又慢慢落回他膝盖。

"秀兰……"他重复这个名字，像是怕惊动什么，又像是怕说出来就再也收不回去，"我给她打过嫁妆箱。她出嫁那天，我还偷偷在箱底刻了她的名字。"

他低下头，盯着自己满是老茧的手。那双手在抖，抖得很轻，轻得像怕被人发现。

[whisper]"她出嫁那天，下雨。"他没头没脑地说了一句。[/whisper]`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"问他为什么这么做","next":"huimen_exp3_carpenter_li_why","effects":{"yin":1}}),createChoice({"text":"问他知不知道秀兰被沉井","next":"huimen_exp3_carpenter_li_know","effects":{"yin":2}})]}),
    huimen_exp3_carpenter_li_work: createScene('huimen_exp3_carpenter_li_work', {title:'棺木',text:`他正在给一口小棺材刨盖。

棺材只有三尺长，像是给孩子用的。木料是上好的柏木，刨得已经很光，光得能照见人影。可那棺材却让人看着心里发紧——这么小的棺材，本不该出现在这个世上。

"这是给周家小少爷的。"李木匠说，刨子一下一下推过木板，发出悠长的声响，"那孩子未成形而夭，周家要纸人陪葬，我偏要给他做一口真棺材。"

他的刨子推过木板，发出一声悠长的叹息。那叹息不是他叹的，是木板叹的——柏木在哭，哭一个没满月的孩子。

[faded]他没有说，那孩子是秀兰的。[/faded]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"帮他一起刨","next":"huimen_exp3_carpenter_li_help","effects":{"sanity":3,"yin":1}}),createChoice({"text":"问他小少爷的母亲是谁","next":"huimen_exp3_carpenter_li_mother","effects":{"yin":2}})]}),
    huimen_exp3_carpenter_li_why: createScene('huimen_exp3_carpenter_li_why', {title:'木匠刻名',text:`"为什么？"李木匠苦笑，笑得很苦，苦得嘴角都拧到一边去了，"因为我喜欢她。可她是周家定下的媳妇，我配不上。"

他从棺材板下摸出一张发黄的纸，纸折得很小，折了四折，边角都被手汗磨得发亮。他展开，上面画着一个女子侧面像，眉眼和秀兰一模一样。

那画是用炭笔画的，画得很好，连她鬓角那缕碎发都画出来了。画上的人低着头，像是在绣花，又像是在哭。

"她出嫁前，求我给她画一张像。"他说，声音轻得像怕惊动画里的人，"她说，想留个自己的样子。"

[red]她想留的样子，不是周家媳妇的样子，是秀兰的样子。[/red]`,effects:{"sanity":-3,"yin":2,"addItem":"秀兰的画像"},choices:[createChoice({"text":"问他后来怎么样了","next":"huimen_exp3_carpenter_li_later","effects":{"yin":1}})]}),
    huimen_exp3_carpenter_li_know: createScene('huimen_exp3_carpenter_li_know', {title:'知情',text:`"知道。"李木匠低下头，头低得很深，深得你只能看见他头顶的旋，"全村人都知道。可谁敢管？周家有钱有势，井神的事情，谁管谁死。"

他忽然抬头，眼里有泪。那泪在眼眶里打转，却倔强地不落下来。

"我管了。"他说，声音忽然硬了起来，"我去井边烧纸，被他们打断了一条腿。"

他掀起裤脚，露出一截扭曲的小腿。那小腿歪得很厉害，骨头在皮下面支棱着，像一根被打折又胡乱接上的树枝。伤疤是旧的，已经发白，却还看得出当年断得很彻底。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"说这次可以一起救她","next":"huimen_exp3_carpenter_li_join","effects":{"sanity":3,"yin":1}}),createChoice({"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_carpenter_li_later: createScene('huimen_exp3_carpenter_li_later', {title:'后来',text:`"后来她回门，再没回来。"李木匠说，声音哑了，像是有什么东西卡在他喉咙里。

"我去周家要人，被他们赶出来。我去井边哭，井里却传来她的声音，叫我别管。"

他把画像收回怀里，收得很小心，像是怕弄皱了她。他收画像时，手指在画像的脸上停了一下，像是在最后一次摸她的脸。

"她说，让我好好活着。"他说，眼里的泪终于掉了下来，掉在刨花上，被刨花吸进去，"可我怎么活得下去？"

刨花堆里的刨子忽然自己动了，"咔——咔——"地推过木板，像是要刨出什么东西。

[whisper]那刨子，是替他刨他刨不下去的话。[/whisper]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"帮他完成棺材","next":"huimen_exp3_carpenter_li_help","effects":{"sanity":3,"yin":1}})]}),
    huimen_exp3_carpenter_li_help: createScene('huimen_exp3_carpenter_li_help', {title:'帮手',text:`你拿起刨子，帮他推过木板。

刨子很沉，沉得你第一下没推动。李木匠在旁边看着，没有说话，只是用他那只布满老茧的手，轻轻按了按你的背，像是在说"用力"。

木屑纷飞，棺材板越来越光滑。你的手很快磨出了水泡，泡破了，渗出血，血混在木屑里，把刨花染成粉红。

李木匠看着你的手，忽然笑了："这口棺材，我打算送给秀兰。她的尸骨在井里泡了太久，该有个像样的家了。"

他说"像样的家"四个字时，声音哽了一下。

[faded]他在井边等了三十年，就为了能给她一个家。[/faded]`,effects:{"sanity":3,"yin":1,"setFlag":"huimen_exp3_carpenter_helped"},choices:[createChoice({"text":"说你会把她的骨殖带出来","next":"huimen_exp3_carpenter_li_promise","effects":{"sanity":5,"yin":1}}),createChoice({"text":"问他要不要一起去井边","next":"huimen_exp3_carpenter_li_together","effects":{"yin":2}})]}),
    huimen_exp3_carpenter_li_mother: createScene('huimen_exp3_carpenter_li_mother', {title:'母亲',text:`"小少爷的母亲？"李木匠的声音更低了，低得你几乎听不见。

他停下刨子，把那口小棺材轻轻推开，像是不敢再碰它。

"就是秀兰。她怀着孩子时被沉的井，腹中胎儿未成形便夭了。"

他说"孩子也没了"四个字时，手攥成了拳，拳攥得发白，关节都突出来。

"周家怕人说闲话，对外说是难产。其实那孩子根本没机会生下来。"他的拳头攥得发白，指甲都嵌进肉里，"秀兰井里喊得最凶的时候，就是孩子没的那天。"

[red]那口小棺材，是他给一个没机会出生的孩子打的。[/red]`,effects:{"sanity":-8,"yin":4},choices:[createChoice({"text":"说一定要让她安息","next":"huimen_exp3_carpenter_li_join","effects":{"sanity":5,"yin":1}})]}),
    huimen_exp3_carpenter_li_join: createScene('huimen_exp3_carpenter_li_join', {title:'木匠同行',text:`李木匠点点头，从墙上取下一把锯子。

那锯子挂得很高，挂在一根钉子上，钉子都被锈蚀得发红。他踮着脚取下来，取的时候那条断腿一瘸，差点摔倒。

"这把锯子，我藏了很多年。"他说，用袖子擦了擦锯面上的锈，"井边那棵老槐树，是周家用第一个女子的血种下的。那女子叫阿沅，是族长他姐姐，第一个被沉井的人。锯断它，井里的怨气就能散一半。"

锯面上的锈被他擦掉了，露出底下的钢。那钢还亮，亮得能照见人，像是这把锯子一直在等今天。

他把锯子递给你："你走前面，我腿不好，跟在后面。"

[whisper]他的腿虽然瘸，走得却比你快。像是这条路，他已经走了无数遍。[/whisper]`,effects:{"sanity":3,"yin":1,"addItem":"李木匠的锯"},choices:[createChoice({"text":"去老槐树","next":"huimen_exp_mulberry_tree","effects":{"yin":1}}),createChoice({"text":"先去井边","next":"huimen_exp_well_night","effects":{"yin":1}})]}),
    huimen_exp3_carpenter_li_together: createScene('huimen_exp3_carpenter_li_together', {title:'同往井边',text:`李木匠拄着一根木拐，一瘸一拐地跟你走到井边。

他的脚步很轻，像踩在云上。每走一步，他身上的阴气就淡一分，等到了井边，他已经变得半透明。你回头看，能看见他身后的路，路上一串脚印，左深右浅，是他那条断腿留下的。

秀兰的身影从井里浮出来。她看见李木匠，愣了一下，然后眼眶就红了。

李木匠扑通跪下，把脸埋进土里。土是湿的，糊了他一脸泥。

"秀兰，我没用，护不住你。"他说，声音闷在土里，听不清。

秀兰看着他，眼泪无声地流进井水。她说："你已经做得够多了。"

[faded]她在井里等了三十年，等的不是道歉，是这一句"护不住你"。[/faded]`,effects:{"sanity":8,"yin":-3,"addItem":"李木匠的锯","setFlag":"huimen_exp3_carpenter_at_well"},choices:[createChoice({"text":"让他锯断老槐树","next":"huimen_exp3_carpenter_li_saw_tree","condition":{"hasItem":"李木匠的锯"},"effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp3_carpenter_li_promise: createScene('huimen_exp3_carpenter_li_promise', {title:'木匠承诺',text:`李木匠看着你，眼里第一次有了光。

那光很淡，淡得像井底的一点磷火。可它确实在亮，亮在他浑浊的眼里，亮在他干枯的脸上。

"你若真能把她的骨殖带出来，我就把棺材给她。"他说，声音轻得像怕惊动什么，"再给她刻一块碑，碑上不写周家媳妇，只写'秀兰之墓'。"

他把手心的刨花吹散，刨花在风里飞，像一场隔了很久的雪。雪落在地上，落在他那条断腿上，落在那口没完工的小棺材上。

"三十年的债，"他说，"该还了。"`,effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_carpenter_promise"},choices:[createChoice({"text":"去井底","next":"huimen_exp3_well_bottom","effects":{"yin":1}})]}),
    huimen_exp3_carpenter_li_saw_tree: createScene('huimen_exp3_carpenter_li_saw_tree', {title:'锯树',text:`李木匠接过锯子，一下一下锯向老槐树。

锯齿咬进树皮，发出"咔——咔——"的响，像在锯骨头。树皮裂开，露出底下的木，那木是暗红的，红得像肉。

树汁喷涌而出，暗红如血。树汁溅在李木匠脸上，他没有擦，只是一下一下地锯。他的断腿撑着地，每锯一下，那条腿就抖一下，可他没有停。

秀兰的身影站在树影里，随着每一锯下去，她的身形就清晰一分。她的红嫁衣在树影里飘，像一面旗。

最后一锯落下，老槐树轰然倒地。树根翻起的土里，滚出无数细小的骨珠，像是谁藏了一辈子的眼泪。

[red]那些骨珠，是井里那些女子三十年的泪。[/red]`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp3_tree_cut"},choices:[createChoice({"text":"扶李木匠坐下","next":"huimen_exp3_ending_carpenter_saw_scene","effects":{"yin":1}})]})
};
