/**
 * 《回门》场景模块：exp3_loop_paths
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_eyes_closed: createScene('huimen_exp3_loop_eyes_closed', {title:'循环闭眼',text:`你闭上眼睛。

眼前一片漆黑，但黑得并不干净——像有人在你眼皮内侧贴了一层湿纸，纸上还隐隐透出字迹，你却怎么也看不清。

耳边传来风声、水声、纸人的沙沙声，一声叠着一声。风声里有人在数数，用一种很老的方言，从一数到三，又从一数到三，反反复复，像织布机上来回的梭子。

你咬住舌尖，不为所动。渐渐地，所有声音都退远了，只剩自己的心跳。

心跳里，你听见秀兰轻声说："跟着我。"

那声音不在耳边，也不在井底，而是直接在你心口的血肉里，像一颗沉了三十年的珠子，终于被人摸到了。

你睁不开眼，却感觉到脚下的路变了——石板变软，像踩在某种活的东西上。`,effects:{"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_heart"},choices:[createChoice({"text":"凭感觉走","next":"huimen_exp3_loop_path_heart","effects":{"yin":0}})]}),
    huimen_exp3_loop_call_xiulan: createScene('huimen_exp3_loop_call_xiulan', {title:'念名',text:`你低声念出秀兰的名字。

第一个字出口，雾就薄了一层。第二个字出口，村街两侧的纸人齐齐转过头来，脸上画的笑都凝固着，像在等你念完。第三个字出口——

名字像一粒石子投入井中，荡开涟漪。你听见远处井底"咕咚"一声，像是有谁应了你。

石碑上的青苔纷纷脱落，露出第四道箭头——它不是刻在石碑上，而是浮在空中，用月光凝成。

月光是凉的，照在你手背上，像一根手指。

箭头指向村外，指向一条你从未见过的路。那条路上没有纸人，没有白灯笼，只有两侧不知名的白花，开得安安静静。

[whisper]"第四次，就不要再回来了。"秀兰的声音从月光里渗出来。[/whisper]`,effects:{"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_moon_path"},choices:[createChoice({"text":"沿月光箭头走","next":"huimen_exp3_loop_moon_exit","effects":{"yin":0}})]}),
    huimen_exp3_loop_mansion: createScene('huimen_exp3_loop_mansion', {title:'老宅之路',text:`你走向老宅方向。

路越走越长，鞋底磨在青石板上，发出"沙沙"的响，像是有人在身后跟着你扫地。你回头，没有人；再回头，还是没有人。第三次回头时，你看见自己的影子正蹲在路中央，抱着膝盖，抬头看你。

你绕过影子继续走。

两边的房子越来越旧，先是窗棂塌了，再是瓦片掉了，最后连墙都塌成一堆瓦砾。废墟里站着许多纸人，它们朝你鞠躬，齐声说："周家的人，回来了。"

那声音又轻又齐，像是一群纸人在风里翻动。

[red]这里和现实中的周府废墟重叠，却比现实更破败。纸人脸上的笑不是画上去的，是刻出来的，每一笔都刻着周家的族徽。你脚下的瓦砾，一半是砖，一半是烧了一半的纸钱。[/red]

你意识到这是循环的一部分——这条路你已经走过，这些纸人你已经见过，它们鞠的躬你也已经回过。

可它们还在鞠，还在说，像一台停不下来的戏。`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"继续走","next":"huimen_exp3_loop_mansion_deep","effects":{"yin":3}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_counter","condition":{"noFlag":"huimen_exp3_loop_third"},"effects":{"yin":1}}),createChoice({"text":"第三次，你已退不回石碑","next":"huimen_exp3_loop_third_force","condition":{"flag":"huimen_exp3_loop_third"},"effects":{"yin":5}})]}),
    huimen_exp3_loop_well: createScene('huimen_exp3_loop_well', {title:'井边之路',text:`你走向井边方向。

路越走越湿，脚下的石板渗出井水，每踩一步都"咕叽"一声，像踩在一块浸透的海绵上。水是凉的，凉得发黏，像有什么东西正顺着你的脚踝往上爬。

你听见井底有人在唱歌，声音很熟悉，是秀兰常唱的那首童谣。可那童谣的词变了，唱的是："一更鼓儿敲，新娘子不要逃；二更鼓儿响，新郎官下了塘……"

你越走越快，水越走越深。等走到井边时，井水已经没过你的脚踝。

井水里映出的不是你的脸，而是无数个你自己。它们有的在笑，有的在哭，有的嘴张得很大，像在喊什么，却发不出声。

[whisper]它们齐齐对你伸出手。[/whisper]`,effects:{"sanity":-3,"yin":4},choices:[createChoice({"text":"看井水里的自己","next":"huimen_exp3_loop_well_reflection","effects":{"yin":3}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_counter","condition":{"noFlag":"huimen_exp3_loop_third"},"effects":{"yin":1}}),createChoice({"text":"第三次，你已退不回石碑","next":"huimen_exp3_loop_third_force","condition":{"flag":"huimen_exp3_loop_third"},"effects":{"yin":5}})]}),
    huimen_exp3_loop_paper: createScene('huimen_exp3_loop_paper', {title:'纸扎铺之路',text:`你走向纸扎铺方向。

这条路最短，却也最静。静得你能听见自己的血在血管里流，"咕咚、咕咚"，像有人在井底敲鼓。

纸扎铺的灯笼亮了，红光把整条街都染成血色。但铺子里没有人，柜台后摆满了纸人，每个纸人都长着你的脸。

有的在笑，有的在哭，有的闭着眼，有的睁着——睁着的那些，眼珠还在转。

它们看见你进来，齐齐站直了身子，像是在等检阅。

"选一个替身，你就可以走了。"一个声音说。那声音从柜台下面传来，又像是从你自己喉咙里发出来的。

[faded]你低头，发现柜台上摆着一把剪刀，剪刀柄上缠着一根红绳。[/faded]`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"拒绝选替身","next":"huimen_exp3_loop_paper_refuse","effects":{"sanity":3,"yin":1}}),createChoice({"text":"选一个纸人","next":"huimen_exp3_loop_paper_chose","effects":{"yin":8}})]}),
    huimen_exp3_loop_mansion_deep: createScene('huimen_exp3_loop_mansion_deep', {title:'废墟深处',text:`废墟深处有一口枯井，井沿上坐着一个小女孩。

她背对着你，正在用井水梳头。梳子是一把断齿的木梳，每梳一下，就有一缕头发掉进井里，像黑色的水草。

你走近时，她回过头——没有脸，只有一团漆黑。那团漆黑里却有一双眼睛，白得发亮，像两颗沉在井底的珍珠。

"你走错了。"她说，声音却不是孩子的声音，是一个苍老女人的声音，"回去重来。"

她伸出一只手，那只手有六根手指，每根手指上都系着一根红绳。

[red]红绳的另一端，连着你自己的手腕。[/red]`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"问她怎么走对","next":"huimen_exp3_loop_mansion_ask","effects":{"yin":1}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_counter","condition":{"noFlag":"huimen_exp3_loop_third"},"effects":{"yin":1}}),createChoice({"text":"第三次，你已退不回石碑","next":"huimen_exp3_loop_third_force","condition":{"flag":"huimen_exp3_loop_third"},"effects":{"yin":5}})]}),
    huimen_exp3_loop_well_reflection: createScene('huimen_exp3_loop_well_reflection', {title:'水中倒影',text:`井水里的无数个你同时开口："留下来，陪我们。"

它们的声音叠在一起，像一锅煮沸的水。你感觉自己的意识在被拉扯，像是要分裂成很多份——每一份都被一个倒影认领，每一份都在井底过着一种你没活过的人生。

你咬破舌尖，疼痛让你清醒过来。血腥味在嘴里散开，铁锈一样的腥。

"我不是你们。"你说，声音却像是从井底传上来的，"我要出去。"

那些倒影愣了一下，然后齐齐露出失望的神色。它们开始下沉，一个接一个沉入井底，像一排排按顺序落水的纸船。

[whisper]最后一个沉下去时，回头看了你一眼。那眼神，分明是秀兰的。[/whisper]`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"砸碎水面","next":"huimen_exp3_loop_well_smash","effects":{"sanity":3,"yin":2}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_counter","condition":{"noFlag":"huimen_exp3_loop_third"},"effects":{"yin":1}}),createChoice({"text":"第三次，你已退不回石碑","next":"huimen_exp3_loop_third_force","condition":{"flag":"huimen_exp3_loop_third"},"effects":{"yin":5}})]}),
    huimen_exp3_loop_paper_refuse: createScene('huimen_exp3_loop_paper_refuse', {title:'拒替',text:`"我不需要替身。"你说。

纸人们齐声叹了口气，像是很失望。那叹气声从四面八方涌来，吹得柜台上的红绳都飘了起来。

柜台后的布帘掀起，露出一条通往村街的小路。路很窄，两侧的墙上贴满了黄符，符上全是你的名字。

"你心性够硬。"那个声音说，语气里竟有一丝赞许，"回去吧，下次再来。"

[faded]你听见柜台下面有东西在哭，哭得很轻，像是一只被关在纸盒里的猫。[/faded]

你没有去掀开看。你知道，那是上一个没选替身的人留下的东西。`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"回到石碑","next":"huimen_exp3_loop_counter","effects":{"yin":0}}),createChoice({"text":"掀开柜台布帘查看","next":"huimen_exp3_loop_paper_under_counter","effects":{"yin":1}})]}),
    huimen_exp3_loop_paper_under_counter: createScene('huimen_exp3_loop_paper_under_counter', {title:'柜台下',text:`你掀开柜台下的布帘。

底下没有纸人，只有一团蜷起来的红线。红线已经断了，断口整齐，像被人用剪刀剪断。线团里裹着一张发黄的纸条，纸条上的字歪歪扭扭，像是用左手写的：

[faded]"我是上一个没选替身的人。我把红绳留在这里，希望你带出去。"[/faded]

你把断红绳收好。它很轻，轻得像一截没有说完的话。`,effects:{"sanity":3,"yin":-1,"addItem":"上一人留下的断红绳"},choices:[createChoice({"text":"回到石碑","next":"huimen_exp3_loop_counter","effects":{"yin":0}})]}),
    huimen_exp3_loop_paper_chose: createScene('huimen_exp3_loop_paper_chose', {title:'选替身',text:`你选了一个纸人。

它和你长得最像，连眉角那颗小痣的位置都一样。你的手指碰到它的脸时，那脸是温的，温得像活人的皮。

纸人笑了，从柜台后面走出来，活动了一下手脚。它的关节发出"咔咔"的响，像是久未动过的木偶。

它朝你鞠了一躬，鞠得很深，深得头几乎贴到脚面。然后它推开铺门，走向村外。门外的月光照在它身上，它的影子越拉越长，最后长得不像人，像一口棺材。

你低头看自己的手，发现手指正在变纸。

[red]先是指尖，然后是指节，然后是掌心。纸是白的，上面印着你的生辰八字。[/red]`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"你已变成纸人","next":"huimen_exp3_loop_paper_turned","effects":{"sanity":-5,"yin":5}})]}),
    huimen_exp3_loop_paper_turned: createScene('huimen_exp3_loop_paper_turned', {title:'纸人',text:`你挣了一下，身体却不听使唤。

纸从手指一路往上爬，爬到手腕，爬到手肘，爬到肩膀。你低头看胸口，那里的皮肤也在变白，一寸一寸，像有人在给你糊纸衣。

柜台后的纸人已经不见了。它替你走了出去，而你替它留了下来。

你的眼睛还能转，还能看见柜台上的剪刀。可你够不到。你够不到任何东西。

[faded]你成了一具新的纸人，等着下一个走进来的人。[/faded]`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"被摆进柜台","ending":"huimen_exp3_ending_paper_self","effects":{"yin":0}})]}),
    huimen_exp3_loop_mansion_ask: createScene('huimen_exp3_loop_mansion_ask', {title:'问路',text:`"走对的路，不在地上。"无脸小女孩说，"在你心里。你心里装着谁，路就通向谁。"

她说完，重新转过身，继续梳头。井水从她发梢滴落，一滴一滴，落在地上"啪嗒、啪嗒"地响。

那些水滴落地后并不散开，而是汇成一行字："想她。"

字写得歪歪扭扭，像一个刚学写字的孩子。

你想起秀兰。想起她站在井水里看你，想起她说"我想回家"，想起她最后一次伸手却没有触到你的指尖。

[whisper]心里有什么东西动了。脚下的路也跟着动了。[/whisper]`,effects:{"sanity":3,"yin":1},choices:[createChoice({"text":"想秀兰","next":"huimen_exp3_loop_path_heart","effects":{"sanity":3,"yin":0}})]}),
    huimen_exp3_loop_well_smash: createScene('huimen_exp3_loop_well_smash', {title:'破水',text:`你捡起一块石头，砸向井水面。

水面碎成无数片，每一片里的倒影都尖叫着消散。那声音又尖又细，像无数根针同时扎进耳朵。你捂住耳朵，血从指缝里渗出来。

水面底下，井壁上那些刻满"秀兰"的字一个个亮了，像被人点亮的灯。

井底传来秀兰的声音："快回来，别再看了。"

她的声音很急，急得像是在哭。你退后几步，水面慢慢恢复平静，但那些倒影已经不见了——它们被你砸碎了，再也拼不回来。

[red]你忽然意识到，那些倒影不是无数个秀兰，而是被井困住的历代女子。每砸碎一个，就有一个无辜的魂彻底散了。[/red]`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"回到石碑","next":"huimen_exp3_loop_counter","effects":{"yin":0}})]})
};
