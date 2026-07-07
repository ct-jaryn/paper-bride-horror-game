/**
 * 《回门》场景模块：exp3_zhou_mansion_cellar
 * 周家祖宅地窖探索
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_zhou_mansion_cellar: createScene('huimen_exp3_zhou_mansion_cellar', {title:'祖宅地窖',text:`石阶很长，每一步都踩在潮湿的苔藓上。

苔藓软得像一层皮，踩下去"咕叽"一声，渗出一点水来。那水是凉的，凉得发黏，沾在鞋底像胶。石阶两侧的墙缝里渗着水，水顺着墙流，流到下面去，不知流向何处。

空气越来越稠，带着一股陈年的霉味和纸灰的甜。越往下走，那甜味越浓，浓得你喉咙发紧。

地窖里没有灯，只有墙缝里渗出的一点磷光。磷光绿幽幽的，像无数只眼睛嵌在墙里，一眨不眨地盯着你。

你看见墙上钉着无数黄纸，每张纸上都写着一个女子的生辰八字，朱砂写的字已经发黑，像凝住的血。最下面一行是"秀兰，民国三年六月初七"。

那八个字写得格外用力，纸都被笔尖戳穿了。`,effects:{"sanity":-3,"yin":4},choices:[createChoice({"text":"撕下秀兰的黄纸","next":"huimen_exp3_zhou_mansion_cellar_tear","effects":{"sanity":3,"yin":-2}}),createChoice({"text":"点燃墙上的油灯","next":"huimen_exp3_zhou_mansion_cellar_light","effects":{"yin":3}}),createChoice({"text":"继续往深处走","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":5}})]}),
    huimen_exp3_zhou_mansion_cellar_tear: createScene('huimen_exp3_zhou_mansion_cellar_tear', {title:'撕纸',text:`黄纸被撕下的瞬间，地窖里响起一声女人的尖叫。

那尖叫又尖又长，像一根针从地窖这头扎到那头。你头皮一炸，手里的黄纸差点掉了。

墙上其他的黄纸开始颤抖，像是一群被惊醒的蝴蝶。它们"簌簌"地抖，抖得纸边都翘起来，像是要飞。

你赶紧把秀兰的纸折好收进口袋，那些颤抖慢慢平息下来。最后一张纸抖了两下，也安静了，像是确认了它的姐妹已经被人带走。

纸上的朱砂字蹭到你手上，像血一样红。你搓了搓，搓不掉，那红印在指纹里，像是秀兰在你手上盖了一个印。`,effects:{"sanity":3,"yin":-2,"addItem":"秀兰生辰纸"},choices:[createChoice({"text":"去点灯","next":"huimen_exp3_zhou_mansion_cellar_light","effects":{"yin":1}}),createChoice({"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_cellar_light: createScene('huimen_exp3_zhou_mansion_cellar_light', {title:'地窖点灯',text:`你摸出一根火柴，点亮墙角的油灯。

火柴划了三次才着，火苗一跳，地窖里的阴影一下子退了很远。那些阴影退得并不情愿，一寸一寸往墙缝里钻，像被赶的蛇。

火光一跳，地窖里亮了。你看见地上摆着九口小棺材，每口棺材里都躺着一个纸人。纸人们穿着不同花色的嫁衣，有红有粉有藕荷，脸上画着一样的笑——嘴角弯弯，眼睛弯弯，笑得都很甜。

太甜了。甜得不像画上去的，像是她们自己笑出来的。

最里面的那口棺材是空的。空棺里铺着红绸，红绸上什么都没有，却像是有人在等。`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"查看空棺材","next":"huimen_exp3_zhou_mansion_cellar_empty","effects":{"yin":2}}),createChoice({"text":"烧掉纸人","next":"huimen_exp3_zhou_mansion_cellar_burn","effects":{"sanity":8,"yin":-5}})]}),
    huimen_exp3_zhou_mansion_cellar_deep: createScene('huimen_exp3_zhou_mansion_cellar_deep', {title:'地窖深处',text:`你越往里走，空气越冷。

冷得不像地窖，像井底。每吸一口气，肺里就凉一下，凉得发痛。你的指尖开始发紫，关节也僵了，像是有什么东西在吸你的热气。

地窖尽头是一扇石门，门上刻着周家的族徽，被一圈红线缠着。红线已经褪色，有几处还沾着暗红的污渍——分不清是朱砂还是血。

门缝里传出低低的哭声，像是有很多人在门后说话。那哭声叠在一起，像一锅煮开的水，"咕嘟咕嘟"地冒着泡。

[whisper]你把耳朵贴上门，听见里面有一个声音在念名字。一个，两个，三个……念得很慢，像是在数人头。[/whisper]`,effects:{"sanity":-5,"yin":6},choices:[createChoice({"text":"解开红线","next":"huimen_exp3_zhou_mansion_cellar_door_open","effects":{"yin":8}}),createChoice({"text":"把红线重新缠紧","next":"huimen_exp3_zhou_mansion_cellar_door_seal","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"隔着门说话","next":"huimen_exp3_zhou_mansion_cellar_door_talk","effects":{"yin":2}})]}),
    huimen_exp3_zhou_mansion_cellar_empty: createScene('huimen_exp3_zhou_mansion_cellar_empty', {title:'空棺',text:`空棺材里铺着一层红绸，红绸上放着一只绣花鞋。

鞋面绣着并蒂莲，针脚细密，是秀兰的手艺。莲叶上的露珠都绣出来了，圆圆的一颗，像是真的要滚下来。鞋里塞着一张纸条，纸条折得很小，折了四折，边角都被磨毛了。

你展开纸条，上面写着一行字，是英文：

[faded]"waiting for the one who remembers"[/faded]

你认出这是秀兰留的。她识字不多，这几个英文是跟戏班子的人学的，写得很歪，却写得很认真。

她把一只鞋留在这里，作为还没被完全吞没的证据。`,effects:{"sanity":3,"yin":-2,"addItem":"秀兰的绣花鞋"},choices:[createChoice({"text":"把鞋收好，继续探索","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_cellar_burn: createScene('huimen_exp3_zhou_mansion_cellar_burn', {title:'地窖焚纸',text:`火从最近的纸人开始烧起，很快蔓延到所有小棺材。

纸人们在火里翻滚、尖叫，声音越来越小，最后变成一阵轻轻的叹息。那叹息声很轻，轻得像风，却像是从八个不同的方向同时传来的。

火光照着它们的脸，那些笑在火里扭曲，变成哭脸，变成怒脸，最后变成一张张平静的脸——像是终于等到了这一刻。

火焰熄灭后，地上只剩九堆灰烬，和一股说不出的香气。那香气是桂花的，混着纸灰，闻起来像葬礼上摆了太久的供品。

你感觉地窖里的阴气淡了许多。淡得你能呼吸了，能看见墙上的黄纸了，能听见自己心跳了。`,effects:{"sanity":8,"yin":-8,"setFlag":"huimen_exp3_burned_paper_brides"},choices:[createChoice({"text":"去石门","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":1}}),createChoice({"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_cellar_door_open: createScene('huimen_exp3_zhou_mansion_cellar_door_open', {title:'门后',text:`红线一松，石门自己开了。

门开得很慢，像是不情愿。门轴"吱呀"一声，长长的，像一声叹息。门后涌出一股冷气，冷得你打了个寒颤，那冷气里带着桂花的香和井水的腥。

门后是一间更小的石室，室中央摆着一张供桌，桌上供着一块无字牌位。牌位是青石的，磨得很光，却一个字都没有刻。

牌位后面，站着九个模糊的女子身影。她们穿着不同花色的嫁衣，有的红，有的粉，有的藕荷——和地窖里那九口棺材里的纸人一样。

她们齐声说："你终于来了。我们等了很久。"

那声音叠在一起，像九根弦同时被拨动。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"问她们想要什么","next":"huimen_exp3_zhou_mansion_cellar_women_want","effects":{"yin":2}}),createChoice({"text":"转身逃跑","next":"huimen_exp3_ending_ancestral_cellar_scene","effects":{"yin":3}})]}),
    huimen_exp3_zhou_mansion_cellar_door_seal: createScene('huimen_exp3_zhou_mansion_cellar_door_seal', {title:'缠线',text:`你把红线一圈一圈缠紧，手指被勒出血也顾不上。

血从指尖渗出来，染在红线上，红线更红了。你缠得很急，一圈比一圈紧，像是要把门后的一切都勒死在里面。

门后的哭声渐渐弱下去，最后只剩风声穿过红线的缝隙，发出"呜呜"的响，像一只被关在笼子里的兽在呜咽。

你退后几步，靠在墙上大口喘气。墙上凉得像冰，你后背贴上去，凉得发抖。

红线缠得很紧，但你知道，它总有一天会松的。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_cellar_door_talk: createScene('huimen_exp3_zhou_mansion_cellar_door_talk', {title:'隔门对话',text:`你把手按在石门上，低声说："我知道你们。我知道你们的名字。"

石门冰凉，你的手心贴上去，像贴在井壁上。门后安静了一瞬，那安静里有一种屏息的感觉，像是有很多人同时停止了哭泣，侧耳在听。

然后一个声音说："那就把我们的名字念出来。念对了，门就让你进。念错了，你就留下陪我们。"

那声音是九个人叠在一起的，分不清男女，也分不清老少。你听了一会儿，才从那叠声里分辨出一个最轻的声音——是秀兰的。

她在替你担心的。`,effects:{"sanity":-2,"yin":4},choices:[createChoice({"text":"念秀兰的名字","next":"huimen_exp3_zhou_mansion_cellar_door_talk_xiulan","effects":{"yin":2}}),createChoice({"text":"念九个人的名字","next":"huimen_exp3_zhou_mansion_cellar_door_talk_nine","condition":{"flag":"huimen_exp3_knows_seven_women"},"effects":{"sanity":5,"yin":-2}})]}),
    huimen_exp3_zhou_mansion_cellar_door_talk_xiulan: createScene('huimen_exp3_zhou_mansion_cellar_door_talk_xiulan', {title:'只念一人',text:`你只念了秀兰的名字。

两个字出口，门后沉默了很久。那沉默像一口深井，你往里投了一颗石子，等了很久都没有回声。

然后石门缓缓打开一条缝，缝里伸出一只苍白的手，把你拉了进去。

那只手很凉，却握得很轻，像是怕把你弄疼。你被拉进石室，门在身后合上，"咔哒"一声，像落了锁。

"秀兰说，你会来的。"那声音说，语气里带着一点酸，也带着一点释然，"我们让她先见你。"

[faded]石室深处，秀兰的身影浮了出来。她看着你，眼里有光。[/faded]`,effects:{"sanity":-3,"yin":5},choices:[createChoice({"text":"走进石室","next":"huimen_exp3_zhou_mansion_cellar_women_want","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_cellar_door_talk_nine: createScene('huimen_exp3_zhou_mansion_cellar_door_talk_nine', {title:'九名',text:`你把九个人的名字一一念出。

有的名字你已经知道，有的是从族谱上背下来的。每念一个，门后的哭声就轻一分，像是有谁终于被人记得了，松了一口气。

念到第五个名字时，门后有人在抽泣。念到第八个，门后的声音都变成了感谢。念到最后一个名字时——

石门无声地开了。

门后的女子身影朝两侧让开，露出供桌上那块无字牌位。牌位在烛光里泛着青光，像是在等一笔。

"给我们立个名。"她们说，声音叠在一起，却不再像哭，像合唱，"有名，才能走。"`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"在无字牌位上写下九个人的名字","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":8,"yin":-5}})]}),
    huimen_exp3_zhou_mansion_cellar_women_want: createScene('huimen_exp3_zhou_mansion_cellar_women_want', {title:'她们的心愿',text:`九个女子身影围成一圈，把你和无字牌位围在中间。

她们的衣角在看不见的风里飘，飘得像九面旗。烛光从下方照上来，把她们的影子投在墙上，长长的，像九条河。

"我们想要一个名字。"最前面的身影说，声音低低的，像怕惊动什么，"周家把我们的名字从族谱上划掉，我们就成了无名的鬼。无名，就不能投胎，不能回家。"

"帮我们刻回名字。"另一个身影说，她的声音更轻，像是已经哭了很久，"刻回名字，我们就放秀兰走。"

[whisper]秀兰站在最里圈，没有说话，只是看着你。她的眼神里有一种你从未见过的疲惫。[/whisper]`,effects:{"sanity":-3,"yin":5},choices:[createChoice({"text":"答应她们","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":5,"yin":-2}}),createChoice({"text":"说只带秀兰走","next":"huimen_exp3_zhou_mansion_cellar_women_angry","effects":{"yin":8}})]}),
    huimen_exp3_zhou_mansion_cellar_women_angry: createScene('huimen_exp3_zhou_mansion_cellar_women_angry', {title:'众怒',text:`"只带她走？"女子们的声音重叠在一起，像井底的回声。

那回声一波一波涌过来，撞在你胸口，像浪。"我们也是秀兰。我们也是被人忘了的秀兰。"

她们的影子朝你压过来，地窖里的温度骤降。你的呼吸开始困难，像是有水灌进肺里，每一口气都带着井水的凉。

供桌上的烛火被吹得只剩一豆，照着九张模糊的脸。她们的脸在烛光里晃，晃得你分不清哪个是哪个。

[red]你忽然明白，她们不是九个人，是一个人被分成了九份。[/red]`,effects:{"sanity":-8,"yin":8},choices:[createChoice({"text":"改口答应所有人","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":3,"yin":-2}}),createChoice({"text":"拼死冲出地窖","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}})]}),
    huimen_exp3_zhou_mansion_cellar_name_stele: createScene('huimen_exp3_zhou_mansion_cellar_name_stele', {title:'地窖名碑',text:`你咬破手指，用血在无字牌位上写下九个名字。

血渗进青石，像露水渗进土。每一个名字落上去，牌位就轻一分，像是有重量从它身上卸下来。

第一个名字写完，一个女子身影淡了。第二个名字写完，又淡了一个。写到第五个时，你的指尖已经麻了，血也少了，可你咬着牙继续写。

女子身影一个个淡去，像雪在太阳下化。最后只剩秀兰站在你面前，她穿着那件红嫁衣，眼里有泪，也有光。

"你做到了。"她说，声音轻得像风，"现在，我可以跟你走了。"

她伸出手，掌心里是一枚冰凉的骨片。那骨片上刻着一个"秀"字。`,effects:{"sanity":10,"yin":-10,"addItem":"秀兰骨片","setFlag":"huimen_exp3_freed_nine_women"},choices:[createChoice({"text":"握住她的手","next":"huimen_exp3_xiulan_hand","effects":{"sanity":5,"yin":-3}})]})
};
