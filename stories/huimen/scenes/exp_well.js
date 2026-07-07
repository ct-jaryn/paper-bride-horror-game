/**
 * 《回门》场景模块：exp_well
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_well_night: createScene('huimen_exp_well_night', {title:'夜井',text:`你来到井边。

井比白天更深，深得看不见底，像一只黑洞。井口的青石被月光照得发白，泛着冷光。你探头往下看——水面平静如镜，却没有映出你的脸，而是映出一顶红轿子，红得刺眼。

轿帘掀开，里面坐着一个盖着红盖头的人，凤冠霞帔。

[whisper]"夫君，下来陪我。"[/whisper]

你猛地后退，却被井绳绊了一下。井绳像蛇一样缠住你的脚踝，冰凉黏腻，把你往井口拖。

你拼命抓住井沿，指甲在石缝里抠出血痕，一阵阵刺痛。`,effects:{"sanity":-8,"yin":3,"visual":"blood","visualDuration":2000},textVariants:[{condition:{flag:'foundBones'},text:`你已经下过一次井。井壁的湿滑还留在掌心，红棺的影像在眼前挥之不去。`},{condition:{hasItem:'铜钥匙'},text:`铜钥匙在手心攥出了汗。你知道这次下去，要打开那口红棺。`},{condition:{flag:'knowsTruth'},text:`井底传来若有若无的哭声。你知道那是秀兰——她等了三十年，终于有人来接她了。`}],choices:[createChoice({"text":"掏出铜镜碎片照向井底","next":"huimen_exp_well_reflection","condition":{"hasItem":"铜镜碎片"},"effects":{"sanity":3,"yin":-5}}),createChoice({"text":"用力挣脱井绳","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"对着井水说话：\"我不是来娶你的\"","next":"huimen_exp_well_whisper","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"抓着井绳下到井底看看","next":"huimen_exp_well_dive","effects":{"yin":2}}),createChoice({"text":"再下一次井，看看井壁上的字","next":"huimen_exp_well_bottom","condition":{"flag":"huimen_exp_sat_with_xiulan"},"effects":{"yin":1}}),createChoice({"text":"拼死挣脱井绳，逃回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"下井","next":"huimen_exp3_well_bottom","effects":{"yin":3},"condition":{"flag":"knowsTruth"}}),createChoice({"text":"坐在井边，听她说","next":"huimen_exp_well_whisper_alt"}),createChoice({"text":"掏出纸笔记下她的话","next":"huimen_exp_well_truth_record","effects":{"yin":1}}),createChoice({"text":"丑时到了，该去揭开真相","next":"shichen_chou_entry","condition":{"timeAfter":1500},"hidden":true,"effects":{"time":30}}),createChoice({"text":"趴在井口做详细调查","next":"investigate_well"}),createChoice({"text":"井沿上蹲着一个浣洗衣裳的女子虚影","npc":"a_huan","npcNode":"start","effects":{"yin":1},"custom":true}),createChoice({"text":"你已在井边坐过，槐花香引你走向秀兰的记忆","next":"huimen_exp3_xiulan_memory_childhood_intro","condition":{"flag":"huimen_exp_sat_with_xiulan"},"hidden":true,"effects":{"sanity":-3,"yin":2}})],hallucination:'[whisper]井水里的红轿子掀开帘，里面坐着的不是秀兰，是你自己。[/whisper]'}),
    huimen_exp_well_reflection: createScene('huimen_exp_well_reflection', {title:'镜中井',text:`你把铜镜碎片对准井底。

碎片里的裂痕射出一道浑浊的光，井水"咕嘟"一声，像被烧开了一样，冒起泡来。水里的红轿子开始扭曲，盖头下传来秀兰的尖叫，凄厉刺耳。

[scream]"你照我！你竟敢照我！"[/scream]

可叫声只持续了一瞬。水面平静下来，映出的不再是红轿子，而是一间喜房。喜房里点着红烛，烛火摇曳，床上坐着一个穿嫁衣的女子，正在梳头，木梳一下一下。

她放下梳子，缓缓转过头来。你看见她的脸——不是秀兰，是祖母年轻时的脸，眉眼凌厉。

[faded]"秀兰啊，我对不起你。"[/faded]祖母说，"可周家女人，又何尝不是被活埋的人？"

画面碎了。铜镜碎片从你手里滑落，却没有掉进井里，而是化作一缕青烟消散了。`,effects:{"sanity":-10,"yin":-8,"removeItem":"铜镜碎片","setFlag":"huimen_exp_saw_grandmother_memory"},choices:[createChoice({"text":"回村街去","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"去后院找真正的井","next":"huimen_exp_return_well","effects":{"yin":1}})]}),
    huimen_exp_well_whisper: createScene('huimen_exp_well_whisper', {title:'井语',text:`你对着井水说："我不是来娶你的。"

井水沉默了很久，久到你以为不会有回应。空气安静得能听见自己的心跳。

然后，水面开始泛起涟漪，一圈一圈。一个声音从深处传来，那声音不像是秀兰的，更像是一个孩子，奶声奶气。

[whisper]"那你是来干嘛的？"[/whisper]

你愣了一下："我是来……听你说的。"

水面"咕嘟"冒出一个气泡，气泡破裂时，溅起的水珠落在你的手背上，冰凉。

[whisper]"姐姐一直在哭。"[/whisper]孩子说，"她哭的时候，整个村子都在下雨。你能让她不哭吗？"

你还没来得及回答，井绳突然松开了你的脚踝，像一条死去的蛇滑回井里。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_heard_well_child"},choices:[createChoice({"text":"问孩子是谁","next":"huimen_exp_little_boy","effects":{"yin":1}}),createChoice({"text":"离开井边","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_well_release: createScene('huimen_exp_well_release', {title:'解井魂',text:`你回到井边。

井水比之前更红了，像一锅稀释的血，腥气扑鼻。你对着井水说："秀兰，我来还你第二份魂。"

水面翻涌，一个女子的身影从井底升起，水珠从她发梢滴落。她没有盖头，脸色苍白，眉眼却很清秀。

"你为什么要帮我？"她问。

"因为周家欠你的。"你说，"更因为，你本该活着。"

秀兰的眼泪落进井里，井水顿时变得清澈，能看见井底的石头。她化作一道红光，钻进你手腕的红痕里。

[whisper]"还有最后一份。"[/whisper]`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp_released_well_soul"},choices:[createChoice({"text":"去桑树解最后一份魂","next":"huimen_exp_mulberry_release","effects":{"yin":1}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_well_whisper_truth: createScene('huimen_exp_well_whisper_truth', {title:'井语成录',text:`你继续坐着，听秀兰说话。

她从十六岁说起，说到怎么认识你祖父，怎么怀上孩子，怎么被周家人拖到井边。她说得很慢，很平静，像是在讲别人的故事，语调没有起伏。

你掏出手机，打开录音。山里没有信号，但录音功能还能用。

"你录这个干嘛？"她问。

"让更多人听见。"你说。

秀兰愣了一下，然后笑了。那是你第一次看见她笑，笑得像个普通的姑娘，眉眼弯弯。

"好。"她说，"那我继续讲。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_recorded_xiulan"},ending:'huimen_exp_well_whisper_truth'}),
    huimen_exp_return_well: createScene('huimen_exp_return_well', {title:'回井边',text:`你来到老宅后院。

井边的铜镜碎片还在，井水幽深，黑得发亮。你蹲下身子，水面映出你的脸，也映出秀兰的影子，两张脸叠在一起。

"你回来了。"她说。

你点点头。你已经去过村子的另一面，见过她的另一部分。现在，你回到真正的井边，准备面对真正的她。

[red]你还有机会用铜镜照她，或者听她说话。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"沿铜镜碎片的光走去","next":"mirror_well","effects":{"yin":1}})]}),
    huimen_exp_well_dive: createScene('huimen_exp_well_dive', {title:'下井',text:`你决定下到井里看看。

井绳还在，你系在腰上，慢慢往下滑。井水冰凉，越往下越红，红得发紫。井壁上刻满了字，密密麻麻，都是秀兰用指甲刻的。

"周文，我恨你。"
"周文，我等你。"
"孩子，别怕。"
"娘在这里。"

[red]每一行字都刻得很深，深得像是刻进了石头的骨头里。[/red]

你下到井底，脚踩到了硬物。那是一口红漆棺材，棺材上钉着九根桃木钉，钉头上刻着符。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"这就回去拿钥匙","next":"huimen_exp_return_red_coffin","condition":{"hasItem":"铜钥匙"},"effects":{"yin":1}}),createChoice({"text":"用铜钥匙当场开棺","next":"huimen_exp_red_coffin_open_alt","condition":{"hasItem":"铜钥匙"},"effects":{"yin":1}}),createChoice({"text":"没有钥匙，先上去","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已知道真相，细看井壁上更多的字","next":"huimen_exp2_well_wall","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp_well_night_repeat: createScene('huimen_exp_well_night_repeat', {title:'再临夜井',text:`你再次来到井边。

井比上次更安静，静得没有一丝声响。水面如镜，映出你的脸，也映出你身后的村子。村子在井水里是倒着的，像另一个世界，纸人倒着走，灯笼倒着挂。

[whisper]"你又来了。"[/whisper]秀兰说，"这次，你想问什么？"

你想了想，问："你为什么一直在井里？"

"因为井底最黑。"她说，"黑到可以把所有的委屈都藏起来。"

[red]可委屈藏久了，就成了怨。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问她最想要什么","next":"huimen_exp_xiulan_wish","effects":{"yin":1}}),createChoice({"text":"给她讲外面的世界","next":"huimen_exp_xiulan_outside_world","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_well_bottom: createScene('huimen_exp_well_bottom', {title:'深井井底',text:`你再次下到井底。

这次井底没有红棺，只有一片空旷，黑漆漆的。井壁上密密麻麻刻着"秀兰"两个字，一遍又一遍，每一笔都刻得很深。

你伸手去摸那些字，指尖传来一阵刺痛。那是秀兰用指甲刻了三十年留下的痕迹，指甲断了又长，长了又断。

在字的尽头，你发现了一行小字，笔画凌乱：

[faded]"周文，我恨你。周文，我等你。"[/faded]

[red]爱和恨，被她刻在了一起。[/red]

你在那行字旁边，用石子刻下了新的字："秀兰，我记住你了。"`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp_carried_in_well"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_well_whisper_alt: createScene('huimen_exp_well_whisper_alt', {title:'井语低喃',text:`你没有开棺，而是坐在井边，对着井水说话。

"秀兰，我知道你能听见。我不是来娶你的，我是来听你说的。"

井水开始翻涌。一个女子的声音从深处传来，平静地讲述她的一生：怎么认识祖父，怎么怀上孩子，怎么被周家人活埋，一字一句，没有哭腔。

你打开手机录音。天亮后，你把这段录音交给了来村里调查的记者。`,choices:[createChoice({"text":"让她的声音被听见","ending":"hidden_wellWhisper"})]}),
    huimen_exp_well_truth_record: createScene('huimen_exp_well_truth_record', {title:'录井语',text:`你在井边坐了一夜。

秀兰的话很多，讲到天亮都没讲完。你用手机录下了所有——山里没信号，但录音功能还能用。

三个月后，一篇报道登了出来：《山村冥婚三十年：一个被活埋女子的声音》。

秀兰的名字第一次以受害者的身份出现在报纸上。她给你托梦，说："我终于不用只躺在井底说话了。"`,choices:[createChoice({"text":"把录音保存一辈子","ending":"huimen_exp_well_whisper_truth"})]})
};
