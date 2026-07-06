/**
 * 《回门》场景模块：exp_moon
 */

export const scenes = {
    huimen_exp_moonlit_path: {
        title: '月光路',
        text: `你顺着月光照出的小路走。

小路很窄，两旁是及腰的野草。野草里藏着许多东西：破碎的瓷碗、生锈的铜镜、褪色的红绸带。

月光把路面照得像一条银白色的河。你踩上去，脚下会泛起一圈圈涟漪，但路面是干的。

[whisper]"这条路是秀兰的记忆。"[/whisper]

你看见路边有一座小石桥，桥下有流水声。可桥下没有水，只有一层薄薄的纸灰。

纸灰上印着脚印，很小，是女人的脚印。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"跟着脚印走","next":"huimen_exp_moonlit_path_end","effects":{"yin":2}},{"text":"过桥看看","next":"huimen_exp_moonlit_bridge","effects":{"yin":2}},{"text":"路边有块可以休息的大石头","next":"huimen_exp2_moonlit_path_rest","effects":{"yin":1}},{"text":"路边有座孤坟","next":"huimen_exp_moonlit_grave","effects":{"yin":1}},{"text":"继续走到河边","next":"huimen_exp_moonlit_river","condition":{"flag":"huimen_exp_named_xiulan_on_bridge"},"effects":{"yin":2}},{"text":"小路在前方分成两条","next":"huimen_exp_moonlit_path_fork","condition":{"flag":"huimen_exp_truly_saw_xiulan"},"effects":{"yin":2}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_bridge: {
        title: '石桥',
        text: `你走上石桥。

桥面很滑，像涂了一层油脂。你扶着桥栏，发现桥栏上刻满了名字，都是女子的名字，密密麻麻，一直刻到桥的另一端。

桥下有东西在动。

你探头一看，桥下不是纸灰，而是无数张仰着的脸。它们没有身体，只有脸，像莲花一样浮在黑暗里。

"过桥的人，要留下名字。" 它们一起说。

你感到桥栏上有力量在吸你的手。如果你再不松手，你的名字也会被刻上去。`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"咬破手指，在桥栏上写秀兰的名字","next":"huimen_exp_bridge_name","effects":{"sanity":5,"yin":-5}},{"text":"奋力挣脱，跑过桥去","next":"huimen_exp_moonlit_path_end","effects":{"sanity":-5,"yin":3}},{"text":"退回桥头","next":"huimen_exp_moonlit_path","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_path_end: {
        title: '路尽',
        text: `你走到小路尽头。

那里有一扇纸门，门上画着秀兰的像。她盖着红盖头，盖头下露出一双眼睛，正看着你。

"你走到这里了。" 她说，"再往前，就是出村的路。"

你伸手去推门，纸门却像有生命一样贴在你手上。门上的秀兰开口说话：

"出去可以。但你要答应我一件事。"

[whisper]"每年七月半，回来看我一眼。"[/whisper]

[red]你意识到，这不是出口，是一个约定。[/red]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"答应她","next":"huimen_exp_moonlit_escape","effects":{"sanity":3,"yin":-5}},{"text":"拒绝，转身回村街","next":"huimen_exp_village_street","effects":{"yin":2}},{"text":"答应她每年七月半来陪她看月亮","next":"huimen_exp_moon_pact_alt"}],
    }
,
    huimen_exp_moonlit_escape: {
        title: '月下离村',
        text: `你答应了秀兰。

纸门轻轻打开，月光像水一样涌进来。你踏出门，发现自己站在村口的石板路上，身后是沉睡的山村。

天边泛起鱼肚白。纸人们倒在路边，像被风吹倒的稻草人。

你没有回头，一直往前走。你知道秀兰在看着你，但她的目光不再是冷的。

[whisper]"记得回来。"[/whisper]`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"独自离开","ending":"huimen_exp_moonlit_escape","effects":{"yin":-1}},{"text":"带秀兰一起走","ending":"huimen_exp_ending_flower_rain","condition":{"flag":"xiulanMercy"},"effects":{"yin":-5}},{"text":"逃回城市，假装一切没发生过","next":"huimen_exp_escape_aftermath"}],
    }
,
    huimen_exp_moonlit_grave: {
        title: '月下孤坟',
        text: `你沿着月光小路走，来到一座孤坟前。

坟没有碑，只有一块扁平的石头。石头上放着一束枯萎的桂花。

你蹲下身，发现石头下面压着一张纸：

[faded]"无名女子之墓。周家所害，无人祭奠。过路者若有余心，请献一花。"[/faded]

[red]这不是秀兰的坟。这是另一个被遗忘的女子。[/red]

你把那束枯桂花扶正，又从路边摘了一朵小白花放在上面。`,
        effects: {"sanity":3,"yin":-3},
        choices: [{"text":"在坟前磕个头","next":"huimen_exp_moonlit_grave_bow","effects":{"sanity":5,"yin":-5}},{"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}},{"text":"在秀兰坟旁种一棵松树","next":"huimen_exp_little_pine_alt"}],
    }
,
    huimen_exp_moonlit_grave_bow: {
        title: '无名祭',
        text: `你跪在坟前，磕了三个头。

"我不知道你是谁。" 你说，"但我知道你受过委屈。我替你磕个头，愿你来生，能做个幸福的人。"

坟头的石头忽然裂了一道缝，缝里飘出一缕青烟。青烟在空中凝成一个人形，朝你福了一福。

"谢谢。" 她说，"我叫阿绣。三十年了，第一次有人给我磕头。"

她的身影消散在月光里。你站起身，感到胸口的压抑又轻了一些。`,
        effects: {"sanity":10,"yin":-8,"setFlag":"huimen_exp_honored_unknown_woman"},
        choices: [{"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_river: {
        title: '月下河',
        text: `月光小路尽头有一条河。

河水是银色的，像流动的水银。河面上漂着许多纸船，每只船上都点着一根小蜡烛。

你蹲在河边，看见河水里映出许多张脸。有秀兰、有柳红、有阿绣，还有很多你不认识的女子。

"渡河吧。" 她们一起说，"渡过去，你就自由了。"

可你知道，这条河不是给人渡的。它是给亡魂渡的。`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"找船渡河","next":"huimen_exp_moonlit_river_cross","effects":{"yin":3}},{"text":"沿河岸走","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_river_cross: {
        title: '月夜渡河',
        text: `你找到一只小船，船夫是个穿蓑衣的老人。

"过河？" 老人问。

"是。" 你说。

"过河要付船钱。" 他说，"把你的名字写在船舷上。"

你拿起船上的笔，刚要写自己的名字，却停住了。

[red]你把名字写在船上，岂不是把命交给了河？[/red]

你转而写下"周氏秀兰"四个字。河水翻涌，船却平稳地驶向对岸。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"到对岸","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}}],
    }
,
    huimen_exp_moonlit_path_memory: {
        title: '记忆路',
        text: `你再次踏上月光小路。

这次，路面不再只是银色的，而是开始浮现画面。你每走一步，就看见秀兰的一段记忆。

她第一次穿新衣裳，第一次收到情书，第一次偷偷和祖父牵手。然后是怀孕，是被发现，是被拖向井边。

[red]这条路，是她的整个人生。[/red]

你走到画面最后，看见秀兰躺在井底，手里握着一张纸。你蹲下身子，发现那张纸是你的照片。

"我等的是你吗？" 她问，"还是只是等一个愿意看我的人？"`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"告诉她你一直在看她","next":"huimen_exp_moonlit_path_memory_stay","effects":{"sanity":5,"yin":-5}},{"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_path_memory_stay: {
        title: '看见',
        text: `你说："我看见你了。从出生到死亡，每一段我都看见了。你不是不祥女，你是一个很好的姑娘。"

秀兰的身影在月光里凝实。她看着你，眼泪无声地落下。

"你真的看见了？" 她问。

"真的。"

"那你能不能记住我？" 她说，"不要只记住我是鬼，记住我曾经也爱笑，爱穿花衣裳，爱听戏。"

"我答应你。" 你说。

月光更亮了，像是一盏为一个人点亮的灯。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_truly_saw_xiulan"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_moonlit_path_fork: {
        title: '岔路',
        text: `月光小路在前方分成两条。

一条通向光明，一条通向黑暗。光明的路上开满了桂花，黑暗的路上飘满了纸钱。

你站在岔路口，不知道该走哪条。

[whisper]"走光明的路，你会忘记我。"[/whisper] 秀兰说，"走黑暗的路，你会永远和我在一起。"

[red]这不是选择路，是选择人生。[/red]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"走光明的路","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}},{"text":"走黑暗的路","next":"huimen_exp_ending_village_memory_scene","effects":{"yin":3}}],
    }
,
    huimen_exp_moon_pact_alt: {
        title: '月约',
        text: `秀兰提出一个条件：她不要你娶她，只要你每年七月半来陪她坐一夜。

你答应了。

那一夜没有红嫁衣，没有纸人，只有你和秀兰坐在井边，看月亮从东山升到西山。

"我现在算嫁人了吗？"你问。

她笑了："算吧。嫁给月光了。"`,
        choices: [{"text":"明年再见","ending":"hidden_moonPact"}],
    }
};
