/**
 * 《回门》场景模块：exp_paper_shop
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_paper_shop: createScene('huimen_exp_paper_shop', {title:'纸扎铺',text:`你推开纸扎铺的门。

门轴发出刺耳的"吱呀"声，像是骨头在摩擦。铺子里弥漫着一股浆糊和陈年纸的气味，混着若有若无的香火味。铺子里摆满了纸人、纸马、纸轿、纸房子，每一双墨点的眼睛都在盯着你。

柜台后面坐着一个老人，正低着头糊纸人。他的动作很慢，浆糊刷在竹篾上，发出黏腻的"刷刷"声响。

"客人，"老人头也不抬，"要扎什么？"

你还没来得及回答，他就把手里那个纸人转了过来。

[red]纸人的脸，和你一模一样。[/red]

"这个不像你。"老人说，枯瘦的手指在纸人下巴点了点，"下巴的痣，还差一点。"

    柜台上半掩着一本泛黄的账册，纸页卷了边。`,effects:{"sanity":-10,"yin":3,"visual":"paper-doll","visualDuration":2000},textVariants:[{condition:{flag:'huimen_exp_read_paper_shop_ledger'},text:`账册还摊在柜台上。你已看过那些名字——周氏秀兰、周氏柳红……一行行都是被纸替的女子。`},{condition:{flag:'knowsTruth'},text:`纸扎人的眼睛似乎跟着你转。你知道这些纸人腹中填的是什么了——是活人的发、甲、血。`}],choices:[createChoice({"text":"质问他为什么扎你的脸","next":"huimen_exp_paper_doll_craftsman","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"转身就跑","next":"huimen_exp_paper_doll_chase","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"仔细观察铺子里的纸人","next":"huimen_exp_paper_shop_backroom","effects":{"yin":2}}),createChoice({"text":"给秀兰扎一套嫁妆","next":"huimen_exp_paper_offering","condition":{"flag":"huimen_exp_saw_village_map"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"爬上屋顶看看","next":"huimen_exp_paper_shop_roof","effects":{"yin":2}}),createChoice({"text":"发现纸人的眼睛在动","next":"huimen_exp_paper_shop_doll_eyes","condition":{"flag":"huimen_exp_learned_doll_substitute"},"effects":{"yin":2}}),createChoice({"text":"发现通往地下室的暗门","next":"huimen_exp2_paper_doll_origin","condition":{"flag":"huimen_exp_learned_doll_substitute"},"effects":{"yin":2}}),createChoice({"text":"去地下室看看","next":"huimen_exp3_paper_shop_basement","effects":{"yin":2}}),createChoice({"text":"亲手给秀兰扎一套纸嫁妆","next":"huimen_exp_paper_offering_alt"}),createChoice({"text":"搜查纸扎铺的柜台和账册","next":"investigate_paper_shop"}),createChoice({"text":"柜台后还躲着一个年轻学徒","npc":"xiao_fu","npcNode":"start","effects":{"yin":1},"custom":true}),createChoice({"text":"你已从纸扎术古书里知道替身一事，去后屋地板下的地下室","next":"huimen_exp2_paper_shop_basement","condition":{"flag":"huimen_exp2_learned_paper_doll_origin"},"hidden":true,"effects":{"yin":2}}),createChoice({"text":"扎纸匠还在糊最后一个纸人，身形纤细像阿绣","next":"huimen_exp2_paper_shop_craftsman_doll","condition":{"flag":"huimen_exp_knows_craftsman_past"},"hidden":true,"effects":{"yin":1}})],hallucination:'[whisper]柜台后面的老人抬起头，他的脸和你一模一样。[/whisper]'}),
    huimen_exp_paper_shop_backroom: createScene('huimen_exp_paper_shop_backroom', {title:'纸扎铺后屋',text:`你绕过柜台，进了后屋。

后屋比前厅小得多，空气里飘着一股霉味和淡淡的腥甜。屋子正中摆着一张床，床上躺着一个人，盖着白布。你掀开白布一角，下面是一张没有五官的脸。

不，不是脸。是一张等待被画上去的纸，绷在竹篾骨架上，平平整整。

床边堆着许多已经画好的脸，一张一张叠在一起，每张都写着名字。你翻看着，看到了"二叔"、"三姑"、"四婶"，还有你自己的名字。

[red]你的名字下面，压着一张秀兰的脸。[/red]

你拿起秀兰的脸。纸很薄，却出奇地沉，像是有分量。纸上画着一双眼睛，那双眼睛正静静地看着你。

[whisper]"把我的脸还给我。"[/whisper]`,effects:{"sanity":-12,"yin":3,"addItem":"秀兰的纸脸"},choices:[createChoice({"text":"把纸脸烧掉","next":"huimen_exp_burn_paper_face","effects":{"sanity":5,"yin":-10}}),createChoice({"text":"把纸脸收好","next":"huimen_exp_village_street","effects":{"yin":2}}),createChoice({"text":"放回床上，退出后屋","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":3}})]}),
    huimen_exp_lead_to_paper_shop: createScene('huimen_exp_lead_to_paper_shop', {title:'引火',text:`你转身朝纸扎铺跑，纸人们抬着空轿子追你，纸脚踩在地上"沙沙"作响。

你冲进铺子，抓起一盏油灯，狠狠砸向那些纸人。纸人们浑身是浆糊，一点就着，"轰"地一声烧起来。火势迅速蔓延，把整个铺子吞没。

你逃出铺子，回头一看，纸人们在火中扭动，发出婴儿般的哭声，一声一声，越来越弱。

[red]你烧了周家三十年的替身。[/red]

火焰里，许多模糊的身影站起来，朝你鞠躬，然后消散在夜空中。`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp_burned_paper_shop"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"火势蔓延到整个村子，让一切化为灰烬","ending":"huimen_exp_ending_paper_doll_burned","condition":{"flag":"huimen_exp_burned_paper_shop"},"effects":{"yin":5}})]}),
    huimen_exp_paper_shop_roof: createScene('huimen_exp_paper_shop_roof', {title:'纸铺屋顶',text:`你顺着屋后的梯子，爬上纸扎铺的屋顶。

屋顶上堆满了晒干的纸人，它们面朝下趴着，像一群沉睡的尸体，整整齐齐。你踩上去，脚下发出"咔嚓咔嚓"的声响，像踩碎枯叶。

屋顶中央有一个小洞。你趴下身，透过洞往下看——铺子里的老人正对着烛火，细细地画一张脸。

那张脸不是你的，是一个年轻男子的脸。你认出来，那是你祖父年轻时的模样。

"替身要扎得像，才能替得主。"老人喃喃自语，一笔一笔描着眼角，"周文啊周文，你欠的债，让你的孙子来还。"`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"跳下去阻止他","next":"huimen_exp_paper_doll_craftsman","effects":{"yin":2}}),createChoice({"text":"悄悄离开屋顶","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_paper_shop_craftsman_memory: createScene('huimen_exp_paper_shop_craftsman_memory', {title:'扎纸匠的记忆',text:`你再次来到纸扎铺，老人还在糊纸人，头也不抬。

这次他忽然开口，像是自言自语："我年轻时，也爱过一个人。"

你停下脚步。

"她也是周家的'不祥女'，叫阿绣。她被沉塘那天，我躲在人群里，不敢出声。"

"后来我开始扎纸人。每扎一个，我就当是给她扎一个替身。扎了三十年，她的魂还是没回来。"

[red]原来扎纸匠不是周家的帮凶，也是周家的受害者。[/red]

"你如果能救出秀兰，"他终于抬起头，墨渍眼眶对着你，"能不能也替我问问阿绣，她恨不恨我？"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_craftsman_past"},choices:[createChoice({"text":"答应他","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_paper_shop_doll_eyes: createScene('huimen_exp_paper_shop_doll_eyes', {title:'纸眼',text:`你再次进入纸扎铺，发现所有的纸人都在看着你。

它们的眼睛是墨点的，黑黑的，可你分明感觉到它们的视线，像针一样扎在你身上。你走到一个纸人面前，发现它的眼珠在转动，缓缓追随着你的脸。

"你们为什么看我？"你问。

纸人们没有回答，但它们的嘴角开始上扬，露出和你一样的笑。

"因为我们都是你。"它们一起说，声音重叠在一起，"你是我们，我们也是你。"

[red]你忽然分不清，自己是人，还是纸人。[/red]

你摸了摸自己的脸，皮肤是温热的。还好，你还是人。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"把纸人的眼睛都涂上墨","next":"huimen_exp_paper_shop_doll_eyes_blind","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开铺子","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_paper_shop_doll_eyes_blind: createScene('huimen_exp_paper_shop_doll_eyes_blind', {title:'盲眼',text:`你抓起案上的朱砂，把纸人们的眼睛一个个都涂黑了。

纸人们开始尖叫："看不见了！看不见了！"

"看不见就对了。"你说，"你们不是人，不需要看见。"

纸人们瘫倒在地，像被抽走了灵魂，散了一地。铺子里安静下来，只剩下你粗重的呼吸声。

老人从柜台后面走出来，叹了口气："你断了它们的目，它们就不能再学你了。"

"那就让它们别学我。"你说。`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
