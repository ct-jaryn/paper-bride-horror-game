/**
 * 《回门》场景模块：exp_ruins
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_ruins: createScene('huimen_exp_ruins', {title:'废墟',text:`你来到一座塌了半边的土屋前。

屋顶的茅草已经腐烂，垂下来一缕一缕的，像乱发。墙根处长满了青苔，湿漉漉的，散发着一股霉味。门框上贴着一张褪色的黄符，符上的字被雨水冲得模糊不清，只剩下几道朱砂的痕迹。

你跨进门，脚下的瓦砾发出碎裂的声响，"咔嚓、咔嚓"，在空荡荡的屋里格外刺耳。屋里有一张倒了的木床，床腿断了一根，歪斜地靠着墙。床上散落着几件小衣服，都是婴儿的衣裳，叠得整整齐齐。

[red]一件小红肚兜上，绣着一个"元"字。[/red]

你捡起肚兜，感到一阵刺骨的寒意从指尖窜上来。这不是普通的寒意，是小孩子特有的、湿漉漉的冷。`,effects:{"sanity":-5,"yin":2,"addItem":"小红肚兜"},choices:[createChoice({"text":"查看床底","next":"huimen_exp_ruins_cellar","effects":{"yin":2}}),createChoice({"text":"寻找屋里的日记","next":"huimen_exp_ruins_diary","effects":{"yin":1}}),createChoice({"text":"翻找其他婴儿衣物","next":"huimen_exp_ruins_baby_clothes","effects":{"yin":1}}),createChoice({"text":"在墙缝里找信","next":"huimen_exp_ruins_letter","condition":{"flag":"huimen_exp_read_xiulan_diary"},"effects":{"yin":1}}),createChoice({"text":"在瓦砾里找镜子","next":"huimen_exp_ruins_mirror","effects":{"yin":2}}),createChoice({"text":"把肚兜放回原处","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-3,"removeItem":"小红肚兜"}}),createChoice({"text":"在废墟里翻找旧物","next":"investigate_ruins"}),createChoice({"text":"角落里还落着一个穿新郎服的纸偶","next":"huimen_exp2_ruins_doll","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp_ruins_cellar: createScene('huimen_exp_ruins_cellar', {title:'废墟地窖',text:`你掀开床板，下面露出一个黑漆漆的地窖口。

地窖里飘出一股霉味和血腥气混合的味道，呛得你退了一步。你摸索着顺着木梯下去，脚踩到一堆软软的东西，"扑哧"一声。

你蹲下身，借着洞口的光一看——是许多已经腐烂的纸人，堆得满满的。纸人的脸上都画着同一个女子的模样，眉眼弯弯，是秀兰。

[whisper]"她们扎了无数替身，想让她认错。"[/whisper]

地窖尽头有一口小小的棺材，棺材上刻着"周氏不祥女之灵"。你打开棺盖，里面没有尸骨，只有一把生锈的剪刀。

剪刀上缠着一缕长发，发丝根根分明，乌黑发亮，像刚剪下来不久。`,effects:{"sanity":-10,"yin":3,"addItem":"缠发剪刀"},choices:[createChoice({"text":"用剪刀剪断手腕上的红绳","next":"huimen_exp_cut_red_string","effects":{"sanity":5,"yin":-10}}),createChoice({"text":"把剪刀收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_diary: createScene('huimen_exp_ruins_diary', {title:'残日记',text:`你在瓦砾里翻出一本烧焦了一半的日记。

日记的主人叫"周秀兰"，字迹娟秀。纸页发脆，你小心地翻到中间一页：

[faded]"今日胎动，喜忧参半。他说会娶我，会带我走。我信他。"
[/faded]

[faded]"他们发现了。婆母说我是周家的耻辱。他们把门板钉死，把我拖到井边。我求他救我，他站在人群后面，没有看我。"
[/faded]

[faded]"井水好冷。孩子还在踢我。我用指甲在井壁上刻字，刻到指甲都翻了。我想让后来的人知道，我不是病死的。"
[/faded]

最后一页只有一行字，笔画凌乱，像是用尽了最后的力气：

[red]"若有来生，不做周家人。"[/red]`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_read_xiulan_diary"},choices:[createChoice({"text":"把日记带在身上","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"秀兰日记"}}),createChoice({"text":"把日记埋在废墟里","next":"huimen_exp_bury_diary","effects":{"sanity":5,"yin":-5}})]}),
    huimen_exp_ruins_baby_clothes: createScene('huimen_exp_ruins_baby_clothes', {title:'婴衣',text:`你在废墟里翻到更多婴儿衣物。

小红肚兜、小棉裤、虎头鞋，还有一顶小小的虎头帽。每一件都绣着"元"字，针脚细密匀称。

[red]这是秀兰给未出世的孩子准备的。[/red]

你把它们一件件摆好，整整齐齐，仿佛能看见一个母亲在油灯下一针一线缝制的样子，眉眼带笑。她一定很期待这个孩子的到来。

可孩子没能来到这世上。

你拿起虎头帽，帽子里掉出一张小纸条：

[faded]"愿吾儿元宝安康，长命百岁。"[/faded]

纸条上的字迹已经模糊，但那份母爱却穿越了三十年，清晰地刺进你心里。`,effects:{"sanity":-10,"yin":2,"addItem":"虎头帽"},choices:[createChoice({"text":"把衣物收好，带给秀兰","next":"huimen_exp_ruins_baby_clothes_give","effects":{"yin":1}}),createChoice({"text":"在废墟里为它们烧掉","next":"huimen_exp_village_street","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp_ruins_baby_clothes_give: createScene('huimen_exp_ruins_baby_clothes_give', {title:'归衣',text:`你抱着婴儿衣物，来到井边。

秀兰的身影从井底浮出。她看着你怀里的衣服，颤抖着伸出手，半天不敢碰。

"我的孩子……"她说，声音哽咽，"我的孩子……"

她把衣物一件件抱在怀里，像抱着一个真实的婴儿，小心翼翼。她的眼泪落在虎头帽上，却没有打湿它，而是化作一颗颗红色的珠子滚落下来。

"谢谢你。"她说，"我终于可以为我的孩子穿一次衣服了。"

衣物在她怀里化作一道光，飞向了远方。秀兰的身影也淡了一些，怨念似乎减轻了。`,effects:{"sanity":10,"yin":-10,"removeItem":"虎头帽","setFlag":"huimen_exp_returned_baby_clothes"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_letter: createScene('huimen_exp_ruins_letter', {title:'遗书',text:`你在废墟的墙缝里，发现一封信。

信封已经发黄，封口处还沾着蜡，上面写着"秀兰亲启"。你撬开蜡封，展开信纸，里面是你祖父周文的字迹，墨色已淡：

[faded]"兰妹：我今夜便来带你走。东厢房后墙有洞，你钻出来，我在老槐树下等你。此后天涯，再不分离。"[/faded]

[red]可他没能来。[/red]

信的背面还有一行字，是秀兰后来用指甲尖划上去的：

[faded]"周文，我不怪你。我只怪这吃人的周家。"[/faded]

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,effects:{"sanity":-8,"yin":2,"addItem":"周文的信"},choices:[createChoice({"text":"把信给秀兰看","next":"huimen_exp_ruins_letter_show","effects":{"yin":1}}),createChoice({"text":"收好，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_letter_show: createScene('huimen_exp_ruins_letter_show', {title:'废墟信归',text:`你把信放在井沿。

秀兰的身影浮出来，她看着那封信，手在发抖，好半天才敢伸手去拿。

"他真的写过……"她喃喃，眼泪无声落下，"我以为他骗我。"

"他没有骗你。"你说，"他只是没来得及。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，不是等他救我。"她说，"是等一个答案。"

她抬起头，眼眶里的红色淡了一些："现在我有答案了。"`,effects:{"sanity":10,"yin":-10,"removeItem":"周文的信","setFlag":"huimen_exp_showed_zhou_wen_letter"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_photo: createScene('huimen_exp_ruins_photo', {title:'废墟旧照',text:`你在废墟的墙缝里，又找到一张照片。

照片上是年轻的秀兰和一个女子站在一起，两人挽着手。那女子穿着粗布衣裳，笑得很腼腆，眉眼温柔。

照片背面写着："秀兰与阿绣，民国二十二年春。"

[red]阿绣，就是扎纸匠爱过的那个女子。[/red]

你把照片收好。也许有一天，你可以把它带给扎纸匠，告诉他阿绣没有恨他。`,effects:{"sanity":-3,"yin":1,"addItem":"秀兰与阿绣的合照"},choices:[createChoice({"text":"把照片给扎纸匠","next":"huimen_exp_ruins_photo_give","condition":{"flag":"huimen_exp_knows_craftsman_past"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_photo_give: createScene('huimen_exp_ruins_photo_give', {title:'还照',text:`你把照片交给扎纸匠。

老人接过照片，手抖得厉害，半天拿不稳。他看着照片上的阿绣，眼眶里那两团墨渍湿润了，有水光闪动。

"她没有恨我。"他喃喃，枯瘦的手指摩挲着照片，"她笑得多开心。"

"她不恨你。"你说，"她知道你无能为力。"

扎纸匠把照片贴在心口，照片化作一道光，渗入他的身体。他的身体开始变得透明，轮廓发亮。

"谢谢你。"他说，声音轻飘飘的，"我可以去找她了。"

他化作一阵风，吹出了纸扎铺。铺子里的纸人纷纷倒下，像失去了主人。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰与阿绣的合照","setFlag":"huimen_exp_craftsman_released"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ruins_mirror: createScene('huimen_exp_ruins_mirror', {title:'破镜',text:`你在废墟的瓦砾里，找到一面破镜子。

镜子的裂痕像蛛网，但还能照出人影。你举起来照了照——镜中的自己竟穿着大红喜服，嘴角咧到耳根，露出一个诡异的笑。

你吓了一跳，手一抖，把镜子扔在地上。

镜子碎成更多片，"哗啦"一声。每一片里都映出一个不同的你——有穿新郎服的，有穿纸人衣服的，有变成纸人的，有正常模样的。

[red]哪一个，才是真正的你？[/red]

你蹲下身，捡起那片映出正常自己的碎片，把其他的都一脚一脚踩碎。`,effects:{"sanity":-10,"yin":3,"addItem":"破镜碎片"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
