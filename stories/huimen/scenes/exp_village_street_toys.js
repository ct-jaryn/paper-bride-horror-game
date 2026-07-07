/**
 * 《回门》场景模块：exp_village_street_toys
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_paper_kite: createScene('huimen_exp_village_street_paper_kite', {title:'纸鸢',text:`你看见天上飞着一只纸鸢，摇摇晃晃。

纸鸢的形状是一只凤凰，翅膀上画着五彩的羽毛，鲜艳得像是刚画上去的。可它飞得不高，像被什么东西牵着，挣不脱。

你顺着线看，线的另一端系在一个纸人的手腕上，系得死紧。纸人站在屋顶上，仰头看着纸鸢，一动不动。

"放纸鸢的是秀兰。"纸人说，声音细细的，"她活着的时候最喜欢放纸鸢。死后，我们每年给她放一个。"

[faded]纸鸢的尾巴拖着一串小铃铛，"叮铃铃"地响。每一只铃铛上都系着一缕头发——是秀兰每一年的发。三十年，三十只铃铛，三十缕发，从头一年的乌黑到最后一年的灰白。鬼也会老，老的不是身子，是怨气。[/faded]

[whisper]"她放纸鸢，"[/whisper]纸人说，"是想让纸鸢飞过周家的墙，飞到山外去。她说，山外有学堂，她想去读书。可纸鸢飞不高，每次都栽下来，栽在周家的院子里。"

[red]你接过线，感到一阵轻风。纸鸢在你手里挣扎，像是要飞向远方。[/red]

"放它走吧。"纸人说，"它飞了三十年的圈，该飞出去了。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"剪断线，放纸鸢走","next":"huimen_exp_village_street_paper_kite_release","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把线系在手腕上","next":"huimen_exp_village_street","effects":{"yin":3}})]}),
    huimen_exp_village_street_paper_kite_release: createScene('huimen_exp_village_street_paper_kite_release', {title:'放飞',text:`你剪断了纸鸢的线。

纸鸢没有掉下来，而是越飞越高，越飞越远，最后化作一个五彩的光点，消失在夜空中，再也看不见。

纸人站在屋顶上，朝纸鸢离去的方向鞠了一躬，深深一躬。

"秀兰，"它说，"你的纸鸢飞出去了。你也可以飞了。"

[faded]线断了之后，纸鸢尾巴上的三十只铃铛一个接一个地响起来，"叮铃——叮铃——"，每一声都拖得很长，像是在替秀兰念三十年的心事。最后一只铃铛响完，那条线在空中燃起一串火，烧成一道金线，从天顶一直烧到屋顶，烧到纸人的手腕上。[/faded]

[whisper]"线烧了，"[/whisper]纸人说，"她终于不被拴着了。三十年，每年拴一缕发，三十年拴了三十缕。如今线断了，发也散了。"

你感到胸口的压抑轻了一些，像是某种束缚也被剪断了。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_paper_kite"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_swing: createScene('huimen_exp_village_street_swing', {title:'秋千',text:`你来到一座小院前，院里有一架秋千，吱呀作响。

秋千不是用绳子做的，是用红绳。绳子上缠着许多女子的头发，乌黑发亮，在风中轻轻飘动，"沙沙"地响。

秋千自己在晃，"嘎吱嘎吱"地响，像有人坐在上面。你走近，听见一个女子的笑声："来推我一把。"

你伸手推了一下秋千。秋千荡得很高，红绳上的头发发出"沙沙"的声响，像在哭。

"再高一点。"女子说，"我想看看村子外面的山。"

[faded]红绳上的头发开始一根根往下掉，每一根落地的瞬间都化作一个小小的人影，蹲在地上抱着膝盖。这是周家历代"荡秋千"的女子——所谓"荡秋千"，是周家的旧俗，把"不洁"的女子放在秋千上荡，荡到她魂魄散了为止。每根头发，都是一个散了的魂。[/faded]

[whisper]"我们没看清过山。"[/whisper]那些蹲在地上的小人影齐声说，"荡得太低，看不见。再高一点，再高一点……"

你推了很久，那些小人影开始一个个站起来，踮着脚往墙外看，像是终于看见了什么。然后它们一个个笑了，化作光点散去。

[red]你推了很久，直到秋千上的笑声变成哭声。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"继续推","next":"huimen_exp_village_street_swing_push","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"停下秋千","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}})]}),
    huimen_exp_village_street_swing_push: createScene('huimen_exp_village_street_swing_push', {title:'高处',text:`你继续推秋千。

秋千越荡越高，红绳开始一根根断裂，"啪啪"地响。坐在秋千上的女子身影越来越淡，最后化作一缕青烟，飘散了。

"谢谢你。"她说，"我终于看见山外的山了。"

[faded]秋千荡到最高点的时候，你看见她真的回了一下头，朝着村子外面的山看了一眼。山是青的，叠着好几层，最远的那一层被雾盖住，看不真切。可她笑了，像是看见了什么她想看的东西——也许是学堂，也许是河，也许是山外的世界。[/faded]

秋千停了，空荡荡地晃着，"嘎吱"一声。红绳上的头发全部脱落，像一场黑色的雪，纷纷扬扬。

[whisper]"原来山外是这样的。"[/whisper]她的声音在风里飘，越来越远，"我以为山外全是周家。原来不是。"

你接住一缕头发，它在你手心里化为灰烬。`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp_freed_swing_spirit"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_well_bucket: createScene('huimen_exp_village_street_well_bucket', {title:'井桶',text:`井边放着一个木桶，落满灰。

木桶很旧，桶壁上刻着"秀兰"两个字，字迹拙朴。你拿起桶，往里看，桶底沉着一层红色的泥，黏糊糊的。

[red]这是当年秀兰被活埋后，用来打水的桶。[/red]

你把桶伸进井里，打上来的不是水，而是一团黑发。黑发在桶里扭动，像活物一样，"嘶嘶"地响。

[faded]黑发越缠越多，从桶里溢出来，缠上你的手腕。发丝冰凉，却动得很有章法——像是有什么在牵着它们。你低头看，发丝的尽头是一只小小的手，从桶底伸出来，抓着发的一端——那是秀兰未出世孩子的手，他在井底替母亲收发。[/faded]

[whisper]"别扔。"[/whisper]秀兰的声音说，"那是我的头发。当年他们剪了我的发，散在井里。我一根根捡回来，缠在桶上，怕它们漂走。发是我唯一能带进死的东西。"`,effects:{"sanity":-8,"yin":2,"addItem":"井桶里的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把桶放回原处","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_well_bucket_return: createScene('huimen_exp_village_street_well_bucket_return', {title:'还发',text:`你把头发放进井里。

头发像蛇一样游向井底，消失在黑暗中，"窸窸窣窣"地响。过了一会儿，秀兰的身影浮出来，她的头发比之前长了许多，乌黑发亮。

"谢谢你。"她说，"头发对女子很重要。我以前最喜欢梳头了。"

你看着她乌黑的长发，想起她曾是这样一个爱美的姑娘。

[faded]她的头发在水里散开，像一朵黑色的花。井水原本是黑的，被她的发一衬，黑得更深了，深得像一面镜子，照得出人影。你探头看，井水里映出的是秀兰的脸——不是现在的、井底的秀兰，是三十年前、活着时候的秀兰，扎着辫子，眼睛亮亮的。[/faded]

[whisper]"我以前每天早上都梳头。"[/whisper]她说，"梳完头，母亲会帮我系一根红头绳。红头绳系上了，就是有家的人。后来他们剪了我的发，红头绳也剪了。我在井底找了很多年，没找到那根红头绳。"

"我帮你梳一次头吧。"你说。

秀兰愣了一下，然后笑了："好。"`,effects:{"sanity":10,"yin":-10,"removeItem":"井桶里的头发","setFlag":"huimen_exp_combed_xiulan_hair"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_old_well: createScene('huimen_exp_village_street_old_well', {title:'旧井',text:`你找到另一口井，杂草丛生。

这口井已经干枯，井底堆满了碎石，乱七八糟。你探头看，发现井壁上刻着许多名字，都是女子的名字，一个挨一个。

"这是周家最早的井。"秀兰说，"第一批被活埋的女子，都在这里。"

你数了数，有十二个名字。每一个名字后面都刻着"贞烈"二字，工工整整。

[red]"贞烈"不是赞美，是封口令。[/red]

[faded]井壁的石头被磨得发亮，那是三十年来无数人探头看留下的痕迹。你顺着名字往下摸，每个名字的"烈"字最后一笔都拖得很长，一直拖到下一个名字的起笔——像是这些女子在井底手拉着手，一个连一个，谁也没放手。[/faded]

[whisper]"贞烈"是周家的说法。"[/whisper]秀兰说，"意思是这些女子'为周家守贞而死'，外人听了还以为是烈女。其实她们一个比一个死得冤——有被打下去的，有被推下去的，有被绑着石头沉下去的。'贞烈'两个字，是周家给自己遮羞的。"

你用手指描摹那些名字，感到一阵刺痛，指尖发麻。`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_saw_old_well_names"},choices:[createChoice({"text":"把\"贞烈\"二字凿掉","next":"huimen_exp_village_street_old_well_chisel","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_old_well_chisel: createScene('huimen_exp_village_street_old_well_chisel', {title:'凿名',text:`你捡起一块尖锐的石头，开始凿井壁上的"贞烈"二字。

每凿一下，井底就传来一声女子的叹息，悠长。你凿了整整十二个，直到所有"贞烈"都被凿平，石屑落了一地。

[faded]凿到第七个的时候，石头忽然崩了一块，露出下面的青砖——青砖上刻着另一行字，是被"贞烈"盖住的："冤"。每一个名字后面原本都刻着"冤"，被周家抹了，刻上"贞烈"。你这一凿，把被盖的"冤"也凿出来了。[/faded]

然后你在每个名字后面刻上"无辜"二字，一笔一划。

[whisper]"凿轻一点。"[/whisper]井底一个声音说，是十二个女子中的一位，"我们等了三十年，等的就是这两个字。你慢慢刻，让我们听一听，听一听被人喊'无辜'是什么感觉。"

你放慢了手，一笔一笔，刻得很重。"无"字的最后一笔，"辜"字的最后一笔，每一笔都让井底的水涨一分。

[red]无辜。她们本是无辜的。[/red]

井底开始渗水，清澈的水，不是血。十二个女子的身影浮出来，朝你福了一福，然后消散。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_chiseled_old_well"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_fan: createScene('huimen_exp_village_street_paper_fan', {title:'纸扇',text:`你看见地上有一把纸扇，落满灰。

纸扇上画着并蒂莲，粉白相间，扇骨是竹子的，油光发亮。你捡起来，扇了扇，一阵风卷起地上的纸钱，"哗哗"地响。

纸钱在风中拼出几个字："秀兰之物，勿动。"

[faded]你愣了一下，把纸扇放在井沿。

"这是我的扇子。"秀兰说，"周文送我的。他说，夏天给我扇风。"

扇面上那对并蒂莲是周文亲手画的——他不会画画，画得歪歪扭扭，可秀兰当宝贝一样收着。她死前，扇子被周家人夺走，扔在街上。她说，那把扇子是她这辈子收到的第一件，也是唯一一件"礼物"。[/faded]

[whisper]"他说，等成亲了，天天给我扇。"[/whisper]秀兰说，"我说，那你手不酸吗？他笑，说酸也值。"

[red]可那个夏天，她没能等到。[/red]`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的纸扇"},choices:[createChoice({"text":"把扇子还给她","next":"huimen_exp_village_street_paper_fan_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_fan_return: createScene('huimen_exp_village_street_paper_fan_return', {title:'还扇',text:`你把纸扇放进井里。

扇子没有沉，而是漂在水面上，像一叶小舟，晃晃悠悠。秀兰的手从水里伸出来，握住扇柄。

"谢谢。"她说，"这把扇子，我等了三十年。"

[faded]扇子在她手里慢慢张开，扇面上的并蒂莲一朵一朵活过来，从扇面上飘出来，落进井水里，化作一片片粉白的花瓣。花瓣在水面上转圈，越转越多，最后把整口井都铺满了，像一池盛开的莲。[/faded]

[whisper]"他画的并蒂莲，"[/whisper]秀兰轻声说，"歪歪扭扭的，可我一眼就认出来了。并蒂莲是夫妻同心的意思。他不会说情话，就用画的。他画了一整个夏天，画废了十几把扇骨，才画出这一把能看的。"

扇子化作一道光，没入她的身体。她的身影凝实了一些，笑容也更温柔。

"他送我的东西，终于回来了。"她说。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的纸扇"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
