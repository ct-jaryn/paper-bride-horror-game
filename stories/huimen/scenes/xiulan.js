/**
 * 《回门》场景模块：xiulan
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_xiulan: createScene('ask_xiulan', {title:'李婆的秘密',text:`李婆的笑容僵住了。

那一僵只有一瞬，可你看得清清楚楚——她脸上那层画上去似的喜气"咔"地碎开一道缝，底下露出的，是真正的、活了几十年的那张老脸。

"秀兰？" 她的声音忽然变得很轻，压得极低，像是怕被井里的、风里的、纸人里的什么东西听见，"秀兰是你祖父年轻时候的……那姑娘命不好。井底冷，她一个人喊了三十年。"`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"她到底是谁？","next":"ask_xiulan_who"})]}),
    ask_xiulan_who: createScene('ask_xiulan_who', {title:'李婆的秘密 · 姻缘',text:`李婆没立刻回答。她抬头望了望井的方向，像是要确认那口井还在原地，井里的东西没跟出来。

"周家祖上定的娃娃亲，"她终于开口，声音低得几乎被风吹散，"没等过门就出了事。你祖父……他护不住她。"`,choices:[createChoice({"text":"她怎么死的？","next":"ask_xiulan_how"})]}),
    ask_xiulan_how: createScene('ask_xiulan_how', {title:'李婆的秘密 · 死法',text:`李婆的嘴唇抖了一下，像是那三个字在她嘴里搁了三十年，早已生了锈。

"周家嫌她败坏门风。她和你祖父有了私情，肚子里还怀了一个。周家把她活埋在井底，对外只说得了急病。"`,choices:[createChoice({"text":"孩子呢？","next":"ask_xiulan_child"})]}),
    ask_xiulan_child: createScene('ask_xiulan_child', {title:'李婆的秘密 · 婴灵',text:`李婆的眼神躲开了你。

"孩子没保住。那口井从那时起就不干净。"

她的话没说完。一阵冷风卷着纸钱"啪"地扑到她脸上，她连忙低下头，用袖口擦了擦并不存在的眼泪，肩膀一抖一抖的。你分不清她是真的在哭，还是在掩饰刚才那一瞬的失态。

"快去吧，灵堂都搭好了。" 她缓过来，又恢复成那副画上去的笑脸，只是笑得比刚才更勉强，"你祖母……你祖母躺在堂屋里，盖着红盖头呢。"

[red]死人盖红盖头？[/red] 你心头一紧。盖头是给新娘子盖的，给一个死去的祖母盖红盖头，这不合规矩。

李婆像是看出了你的心思，凑近一步。她身上有一股陈年纸钱和香灰的味道，混着一丝说不清的甜，像放了很久的桂花糕。她压低声音：

"咱村的风俗，喜丧喜丧，红事白事一起办。你祖母走前留下话，要让你替周家还这笔债，娶秀兰过门。三十年了，她一个人在井底，总得给个名分。"

她说完，不再看你，提着灯笼转身就走。灯笼光在地上晃，照出满地湿透的纸钱。可你盯着她的影子看，越看越觉得不对——

灯笼在地上投下的影子，不是一个人的形状。

[whisper]那影子有三个头。[/whisper]

一个高，一个矮，还有一个，很小很小，像是个还没足月的婴孩。`,choices:[createChoice({"text":"追上去继续问","next":"chase_li_po","danger":true}),createChoice({"text":"快步走向老宅","next":"huimen_after_li_po"})]}),
    bury_xiulan: createScene('bury_xiulan', {title:'安葬秀兰',text:`你抱着秀兰的骨殖、嫁衣和孩子的骸骨，向后山走去。

那具小小的骸骨轻得没有分量，捧在手里像捧着一捧碎掉的瓷器片，骨头又薄又脆，泛着发黄的白色。嫁衣叠在臂弯里，金线在晨光里一闪一闪，料子却冰得像井水浸过。

天边已经泛起鱼肚白，山头的雾一缕一缕往低处沉，把后山的树、坟、石碑都泡成一片灰白。村口的纸人们还整整齐齐站在那里，一动不动，脸上画着笑，眼睛是墨点的黑洞。可它们没有追来，像是被什么定住了一样，只在你走远时，齐刷刷把头转向你离开的方向。

你来到无字碑旁，桂树下已经挖好了一个土坑。坑边的湿土还带着昨夜的雨气，坑壁的泥土颜色比周围新一些，像是不久前有人替你翻过。你把秀兰的骨殖和嫁衣放进坑里，再把孩子的骸骨放在她怀中，像是终于让母子团聚。

你蹲下身，用手一捧一捧地埋上土。土是湿的，凉丝丝地从指缝里漏下去，盖住嫁衣的金线，也盖住那具小小的骨头。你埋得很慢，一捧一捧，像在替一家人盖好最后一床被子。

"秀兰，" 你说，嗓子发紧，"愿你下辈子，能嫁一个真心待你的人。愿这孩子，能有个名字，能被记在族谱上，能堂堂正正活着。"

最后一捧土盖上时，无字碑上的字慢慢变了。先前那些还在渗的血字一笔一笔褪了红，变成普通的、刻进石头里的阴文：

[faded]"周氏秀兰之墓"[/faded]

第一缕阳光照在碑上时，你看见一个穿红嫁衣的女子站在阳光下，朝你福了一礼，盖头下的脸看不清，可你能感到她在笑。然后她化作点点红光，散进晨雾里，连那个一直蜷在她怀里的婴孩的影子，也跟着散了。

你终于走出了山村。晨雾沾在睫毛上，凉凉的。你低头看手腕，那根红绳不知何时松了，落在脚边，变成一截褪色的线。你弯腰拾起，放进口袋。这个村子的罪还没有还完，但秀兰，终于不用再等了。`,textVariants:[{condition:{flag:'huimen_exp2_saw_xiulan_childhood'},text:`你想起她说，女子要学会绣花，将来好做嫁衣。`},{condition:{flag:'huimen_exp2_saw_xiulan_pregnancy'},text:`你想起她给小衣服绣的小老虎，虎头虎脑。`},{condition:{flag:'huimen_exp2_saw_xiulan_betrayal'},text:`你想起她在门缝里伸手去抓周文，只差一点点。`},{condition:{flag:'huimen_exp2_held_xiulan_in_well_memory'},text:`你想起她最后说："原来我不是一个人死的。"`},{condition:{flag:'huimen_exp2_promised_to_restore_name'},text:`你也想起在井底记忆里答应过她："我会把你的名字写回族谱。"如今碑上终于有了字。`},{condition:{flag:'huimen_exp3_knows_xiulan_birth'},text:`你想起她真正的生辰八字，现在终于写进了族谱。`},{condition:{flag:'huimen_exp3_promised_xiulan_opera'},text:`你想起你答应带她去看戏。也许来世，她会坐在最好的位置。`},{condition:{flag:'huimen_exp_saw_xiulan_death'},text:`你想起她刻在井壁上的字，爱和恨揉在一起。`},{condition:{hasItem:'记忆中的玉佩（虚幻）'},text:`你口袋里的玉佩忽然变得温热，然后化作一缕青烟，飘向碑后。`},{condition:{hasItem:'秀兰的绣品'},text:`你怀里的绣品轻轻颤了颤，针脚散在晨光里，像终于松开的执念。`}],choices:[createChoice({"text":"离开山村","next":"","ending":"redemption"}),createChoice({"text":"你想起族谱上的正名，把族谱也埋在墓旁","next":"","ending":"hidden_perfect_redemption","condition":{"flag":"restored_xiulan_name"},"hidden":true}),createChoice({"text":"一切已明，打开阴阳簿","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]}),
    beg_xiulan: createScene('beg_xiulan', {title:'求她',text:`"秀兰！" 你大喊，嗓子被烟熏得发哑，"我知道真相了！周家对不起你！我带你走，我给你正名！"

秀兰的动作停住了。

她原本正飘向红烛，盖头下的脸朝向供桌。这一声喊像一根绳，把她从某种沉溺里拽了回来。她停在原地，盖头垂着，一动不动。

堂屋里那些纸人开始颤抖，"沙沙沙"，是纸片在风里抖动的声音，像一群受惊的鸟。红烛的火苗也跟着一抖。

二叔的脸色变了。他一直四平八稳的那张脸，头一回出现了裂缝："胡说什么！成亲不能停！一停就破煞，破煞要出人命！"

但秀兰没听他的。她缓缓转过身，面对着你。盖头下的声音很轻，轻得像怕惊碎了什么：

"你……愿意为我正名？"

三十年了，她在井底问的，从来不是谁愿意娶她，是谁愿意认她。

"我愿意。" 你说，"周家欠你的名分，我认。你怀的那个孩子，我认。你的名字，我写进族谱。"

秀兰伸出手，那只苍白的手穿过了你的身体。你以为会冷，可穿过的是一阵暖意，暖得你眼眶发酸，像有人在你心里捂了一捧热水。

"那好，" 她说，声音里有一丝你从未听过的、近乎温柔的疲惫，"我跟你走。"`,effects:{"sanity":10,"yin":-20,"addItem":"秀兰的嫁衣"},choices:[createChoice({"text":"向她承诺正名与安葬","next":"huimen_xiulan_forgiveness","effects":{"yin":1}})]}),
    huimen_exp_sit_with_xiulan: createScene('huimen_exp_sit_with_xiulan', {title:'静坐',text:`你在井沿坐下，一句话也不说。

井沿的青石冰凉，凉意顺着尾椎往上爬，一直爬到后脑勺。你把双手搁在膝上，盯着黑漆漆的井口，什么也不做，什么也不烧，什么也不求——就像元宝说的，只是坐着。

井水开始翻涌，"咕嘟、咕嘟"，像底下有什么东西在换气。一个女子的身影浮上来，她趴在井沿上，湿漉漉的头发贴在脸上，盖头不知什么时候掉了，露出一张很年轻的脸——比你想的年轻得多，像是还没满二十岁。她看着你，眼神里没有怨，没有恨，只有满得快要溢出来的疲惫。

你们就这样对视了很久。

风把纸钱吹过井沿，吹过她的脸，她都不眨眼，只是看着你。

"你不怕我？" 她终于问，声音哑得像含着井水。

"怕。" 你说，老老实实的，"但我不想再逃了。逃了一辈子，从父亲逃到我这辈，再逃下去，这份债就永远还不完了。"

秀兰的眼泪落进井里。那眼泪没有让井水变红，反而化作一圈一圈的涟漪，从井心慢慢荡开，荡到井壁，又荡回来。井水在这涟漪里，一点点清了。

"三十年，" 她说，趴在井沿上的肩膀垮了下来，"你是第一个愿意坐下来的人。他们要么烧我，要么娶我，要么跑。没有人，只是坐着。"`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp_sat_with_xiulan"},choices:[createChoice({"text":"问她愿不愿意离开","next":"huimen_exp_ask_leave","effects":{"yin":1}}),createChoice({"text":"继续坐着","next":"huimen_exp_well_whisper_truth","effects":{"sanity":5,"yin":-5}})]}),
    huimen_exp_return_bury_xiulan: createScene('huimen_exp_return_bury_xiulan', {title:'去安葬',text:`你抱着秀兰的嫁衣，向后山走去。

嫁衣抱在怀里，金线冰凉，料子却轻得不像实物。天边的鱼肚白越来越亮，山头的雾一缕一缕往低处沉，把后山的孤坟、无字碑、青苔石阶都泡成一片灰白。

村口的纸人们还站在那里，没有追来。它们脸朝村外，画上去的笑还挂着，墨点的眼睛却齐刷刷跟着你转，转到你看不见的方向才停。秀兰跟在你身后，脚步轻得像风，踩在湿泥上不留一点印子，只有嫁衣的下摆偶尔扫过草叶，发出一点窸窣的声响。

"你真的愿意给我名分？" 她问，声音轻得像怕说大声了就碎了。

"愿意。" 你说。

"我等这句话，等了三十年。" 她没再说别的。

你们来到无字碑前。碑脚的土坑已经挖好，坑壁还带着昨夜的雨气。你把嫁衣放进坑里，嫁衣落下时发出一声极轻的叹息，像有人终于躺了下来。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"离开山村","ending":"redemption","effects":{"yin":-5}}),createChoice({"text":"带她沿月光小路回家","next":"huimen_exp_redemption_loop_alt","effects":{"yin":-5}})]})
};
