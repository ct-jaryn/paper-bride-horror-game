/**
 * 《回门》场景模块：exp3_carpenter_li
 */

export const scenes = {
    huimen_exp3_carpenter_li_shop: {
        title: '李木匠铺',
        text: `村街尽头有一间木匠铺，铺子里堆满刨花和未完工的棺木。

一个中年男人坐在刨花堆里，正在刨一块棺材板。他的手指粗大，掌心布满老茧，眼神却很温和。`,
        effects: {"yin":1},
        choices: [{"text":"问他是不是李木匠","next":"huimen_exp3_carpenter_li_talk","effects":{"yin":1}},{"text":"看他在做什么","next":"huimen_exp3_carpenter_li_work","effects":{"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_talk: {
        title: '李木匠',
        text: `"是我。"李木匠放下刨子，"你要打棺材？还是要打家具？"

你摇摇头，说你是来找秀兰的。他的脸色变了，手里的刨子"当啷"一声掉在地上。

"秀兰……"他重复这个名字，像是怕惊动什么，"我给她打过嫁妆箱。她出嫁那天，我还偷偷在箱底刻了她的名字。"`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"问他为什么这么做","next":"huimen_exp3_carpenter_li_why","effects":{"yin":1}},{"text":"问他知不知道秀兰被沉井","next":"huimen_exp3_carpenter_li_know","effects":{"yin":2}}],
    }
,
    huimen_exp3_carpenter_li_work: {
        title: '棺木',
        text: `他正在给一口小棺材刨盖。棺材只有三尺长，像是给孩子用的。

"这是给周家小少爷的。"李木匠说，"那孩子满月就夭折了，周家要纸人陪葬，我偏要给他做一口真棺材。"

他的刨子推过木板，发出一声悠长的叹息。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"帮他一起刨","next":"huimen_exp3_carpenter_li_help","effects":{"sanity":3,"yin":1}},{"text":"问他小少爷的母亲是谁","next":"huimen_exp3_carpenter_li_mother","effects":{"yin":2}}],
    }
,
    huimen_exp3_carpenter_li_why: {
        title: '木匠刻名',
        text: `"为什么？"李木匠苦笑，"因为我喜欢她。可她是周家定下的媳妇，我配不上。"

他从棺材板下摸出一张发黄的纸，上面画着一个女子侧面像，眉眼和秀兰一模一样。

"她出嫁前，求我给她画一张像。她说，想留个自己的样子。"`,
        effects: {"sanity":-3,"yin":2,"addItem":"秀兰的画像"},
        choices: [{"text":"问他后来怎么样了","next":"huimen_exp3_carpenter_li_later","effects":{"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_know: {
        title: '知情',
        text: `"知道。"李木匠低下头，"全村人都知道。可谁敢管？周家有钱有势，井神的事情，谁管谁死。"

他忽然抬头，眼里有泪："我管了。我去井边烧纸，被他们打断了一条腿。"

他掀起裤脚，露出一截扭曲的小腿。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"说这次可以一起救她","next":"huimen_exp3_carpenter_li_join","effects":{"sanity":3,"yin":1}},{"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_later: {
        title: '后来',
        text: `"后来她回门，再没回来。"李木匠说，"我去周家要人，被他们赶出来。我去井边哭，井里却传来她的声音，叫我别管。"

他把画像收回怀里："她说，让我好好活着。可我怎么活得下去？"

刨花堆里的刨子忽然自己动了，像是要刨出什么东西。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"帮他完成棺材","next":"huimen_exp3_carpenter_li_help","effects":{"sanity":3,"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_help: {
        title: '帮手',
        text: `你拿起刨子，帮他推过木板。

木屑纷飞，棺材板越来越光滑。李木匠说："这口棺材，我打算送给秀兰。她的尸骨在井里泡了太久，该有个像样的家了。"`,
        effects: {"sanity":3,"yin":1,"setFlag":"huimen_exp3_carpenter_helped"},
        choices: [{"text":"说你会把她的骨殖带出来","next":"huimen_exp3_carpenter_li_promise","effects":{"sanity":5,"yin":1}},{"text":"问他要不要一起去井边","next":"huimen_exp3_carpenter_li_together","effects":{"yin":2}}],
    }
,
    huimen_exp3_carpenter_li_mother: {
        title: '母亲',
        text: `"小少爷的母亲？"李木匠的声音更低了，"就是秀兰。她怀孕三个月时被沉的井，孩子也没了。"

"周家怕人说闲话，对外说是难产。其实那孩子根本没机会生下来。"他的拳头攥得发白，"秀兰井里喊得最凶的时候，就是孩子没的那天。"`,
        effects: {"sanity":-8,"yin":4},
        choices: [{"text":"说一定要让她安息","next":"huimen_exp3_carpenter_li_join","effects":{"sanity":5,"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_join: {
        title: '木匠同行',
        text: `李木匠点点头，从墙上取下一把锯子。

"这把锯子，我藏了很多年。"他说，"井边那棵老槐树，是周家用第一个女子的血种下的。锯断它，井里的怨气就能散一半。"

他把锯子递给你："你走前面，我腿不好，跟在后面。"`,
        effects: {"sanity":3,"yin":1,"addItem":"李木匠的锯"},
        choices: [{"text":"去老槐树","next":"huimen_exp_mulberry_tree","effects":{"yin":1}},{"text":"先去井边","next":"huimen_exp_well_night","effects":{"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_together: {
        title: '同往井边',
        text: `李木匠拄着一根木拐，一瘸一拐地跟你走到井边。

秀兰的身影从井里浮出来。李木匠扑通跪下，把脸埋进土里："秀兰，我没用，护不住你。"

秀兰看着他，眼泪无声地流进井水。她说："你已经做得够多了。"`,
        effects: {"sanity":8,"yin":-3,"setFlag":"huimen_exp3_carpenter_at_well"},
        choices: [{"text":"让他锯断老槐树","next":"huimen_exp3_carpenter_li_saw_tree","condition":{"hasItem":"李木匠的锯"},"effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp3_carpenter_li_promise: {
        title: '木匠承诺',
        text: `李木匠看着你，眼里第一次有了光。

"你若真能把她的骨殖带出来，我就把棺材给她。"他说，"再给她刻一块碑，碑上不写周家媳妇，只写'秀兰之墓'。"

他把手心的刨花吹散，像吹散一场隔了很久的雪。`,
        effects: {"sanity":5,"yin":-2,"setFlag":"huimen_exp3_carpenter_promise"},
        choices: [{"text":"去井底","next":"huimen_exp3_well_bottom","effects":{"yin":1}}],
    }
,
    huimen_exp3_carpenter_li_saw_tree: {
        title: '锯树',
        text: `李木匠接过锯子，一下一下锯向老槐树。

树汁喷涌而出，暗红如血。秀兰的身影站在树影里，随着每一锯下去，她的身形就清晰一分。

最后一锯落下，老槐树轰然倒地。树洞里滚出无数细小的骨珠，像是谁藏了一辈子的眼泪。`,
        effects: {"sanity":10,"yin":-8,"setFlag":"huimen_exp3_tree_cut"},
        choices: [{"text":"扶李木匠坐下","next":"huimen_exp3_ending_carpenter_saw_scene","effects":{"yin":1}}],
    }
};
