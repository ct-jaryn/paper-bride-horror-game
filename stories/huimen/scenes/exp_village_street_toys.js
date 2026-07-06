/**
 * 《回门》场景模块：exp_village_street_toys
 */

export const scenes = {
    huimen_exp_village_street_paper_kite: {
        title: '纸鸢',
        text: `你看见天上飞着一只纸鸢。

纸鸢的形状是一只凤凰，翅膀上画着五彩的羽毛。可它飞得不高，像被什么东西牵着。

你顺着线看，线的另一端系在一个纸人的手腕上。纸人站在屋顶上，仰头看着纸鸢。

"放纸鸢的是秀兰。" 纸人说，"她活着的时候最喜欢放纸鸢。死后，我们每年给她放一个。"

[red]你接过线，感到一阵轻风。纸鸢在你手里挣扎，像是要飞向远方。[/red]

"放它走吧。" 纸人说，"它飞了三十年的圈，该飞出去了。"`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"剪断线，放纸鸢走","next":"huimen_exp_village_street_paper_kite_release","effects":{"sanity":5,"yin":-5}},{"text":"把线系在手腕上","next":"huimen_exp_village_street","effects":{"yin":3}}],
    }
,
    huimen_exp_village_street_paper_kite_release: {
        title: '放飞',
        text: `你剪断了纸鸢的线。

纸鸢没有掉下来，而是越飞越高，越飞越远，最后化作一个五彩的光点，消失在夜空中。

纸人站在屋顶上，朝纸鸢离去的方向鞠了一躬。

"秀兰，" 它说，"你的纸鸢飞出去了。你也可以飞了。"

你感到胸口的压抑轻了一些，像是某种束缚也被剪断了。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_paper_kite"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_swing: {
        title: '秋千',
        text: `你来到一座小院前，院里有一架秋千。

秋千不是用绳子做的，是用红绳。绳子上缠着许多女子的头发，在风中轻轻飘动。

秋千自己在晃，像有人坐在上面。你走近，听见一个女子的笑声："来推我一把。"

你伸手推了一下秋千。秋千荡得很高，红绳上的头发发出沙沙的声响。

"再高一点。" 女子说，"我想看看村子外面的山。"

[red]你推了很久，直到秋千上的笑声变成哭声。[/red]`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"继续推","next":"huimen_exp_village_street_swing_push","effects":{"sanity":-5,"yin":3}},{"text":"停下秋千","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}}],
    }
,
    huimen_exp_village_street_swing_push: {
        title: '高处',
        text: `你继续推秋千。

秋千越荡越高，红绳开始一根根断裂。坐在秋千上的女子身影越来越淡，最后化作一缕青烟。

"谢谢你。" 她说，"我终于看见山外的山了。"

秋千停了，空荡荡地晃着。红绳上的头发全部脱落，像一场黑色的雪。

你接住一缕头发，它在你手心里化为灰烬。`,
        effects: {"sanity":-5,"yin":-5,"setFlag":"huimen_exp_freed_swing_spirit"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_well_bucket: {
        title: '井桶',
        text: `井边放着一个木桶。

木桶很旧，桶壁上刻着"秀兰"两个字。你拿起桶，往里看，桶底沉着一层红色的泥。

[red]这是当年秀兰被活埋后，用来打水的桶。[/red]

你把桶伸进井里，打上来的不是水，而是一团黑发。黑发在桶里扭动，像活物一样。

"别扔。" 秀兰的声音说，"那是我的头发。"`,
        effects: {"sanity":-8,"yin":2,"addItem":"井桶里的头发"},
        choices: [{"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}},{"text":"把桶放回原处","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_well_bucket_return: {
        title: '还发',
        text: `你把头发放进井里。

头发像蛇一样游向井底，消失在黑暗中。过了一会儿，秀兰的身影浮出来，她的头发比之前长了许多。

"谢谢你。" 她说，"头发对女子很重要。我以前最喜欢梳头了。"

你看着她乌黑的长发，想起她曾是这样一个爱美的姑娘。

"我帮你梳一次头吧。" 你说。

秀兰愣了一下，然后笑了："好。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"井桶里的头发","setFlag":"huimen_exp_combed_xiulan_hair"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_old_well: {
        title: '旧井',
        text: `你找到另一口井。

这口井已经干枯，井底堆满了碎石。你探头看，发现井壁上刻着许多名字，都是女子的名字。

"这是周家最早的井。" 秀兰说，"第一批被活埋的女子，都在这里。"

你数了数，有十二个名字。每一个名字后面都刻着"贞烈"二字。

[red]"贞烈"不是赞美，是封口令。[/red]

你用手指描摹那些名字，感到一阵刺痛。`,
        effects: {"sanity":-10,"yin":3,"setFlag":"huimen_exp_saw_old_well_names"},
        choices: [{"text":"把\"贞烈\"二字凿掉","next":"huimen_exp_village_street_old_well_chisel","effects":{"sanity":-5,"yin":3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_old_well_chisel: {
        title: '凿名',
        text: `你捡起一块尖锐的石头，开始凿井壁上的"贞烈"二字。

每凿一下，井底就传来一声女子的叹息。你凿了整整十二个，直到所有"贞烈"都被凿平。

然后你在每个名字后面刻上"无辜"二字。

[red]无辜。她们本是无辜的。[/red]

井底开始渗水，清澈的水，不是血。十二个女子的身影浮出来，朝你福了一福，然后消散。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_chiseled_old_well"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_fan: {
        title: '纸扇',
        text: `你看见地上有一把纸扇。

纸扇上画着并蒂莲，扇骨是竹子的。你捡起来，扇了扇，一阵风卷起地上的纸钱。

纸钱在风中拼出几个字："秀兰之物，勿动。"

你愣了一下，把纸扇放在井沿。

"这是我的扇子。" 秀兰说，"周文送我的。他说，夏天给我扇风。"

[red]可那个夏天，她没能等到。[/red]`,
        effects: {"sanity":-5,"yin":1,"addItem":"秀兰的纸扇"},
        choices: [{"text":"把扇子还给她","next":"huimen_exp_village_street_paper_fan_return","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_fan_return: {
        title: '还扇',
        text: `你把纸扇放进井里。

扇子没有沉，而是漂在水面上，像一叶小舟。秀兰的手从水里伸出来，握住扇柄。

"谢谢。" 她说，"这把扇子，我等了三十年。"

扇子化作一道光，没入她的身体。她的身影凝实了一些，笑容也更温柔。

"他送我的东西，终于回来了。" 她说。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰的纸扇"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
