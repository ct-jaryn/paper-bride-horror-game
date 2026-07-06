/**
 * 《回门》场景模块：exp_village
 */

export const scenes = {
    huimen_exp_village_loop_entry: {
        title: '山村夜路',
        text: `你踏出那一步，身后的堂屋忽然变得很远。

村子不是你记忆中的样子。街巷曲折，屋檐低垂，每一扇门都紧闭着，门缝里却透出幽幽的白光。纸钱不是从天上飘下来的，是从墙缝里、从石板缝里、从每一道门缝里渗出来的。

[whisper]"又来一个……"[/whisper]

你回头，来时的路已经不见了，只剩一堵斑驳的土墙，墙上贴着一张褪色的喜字。

[red]你似乎走进了村子的另一面。[/red]

这里没有时间。月亮永远停在东山之上，雾气里偶尔传来唢呐声，忽远忽近。你知道这不是真实的世界，而是秀兰三十年怨念织出的网。

但你没有立刻死去。这说明她还在等你做选择。`,
        effects: {"sanity":-5,"yin":2,"visual":"flicker","visualDuration":2000},
        choices: [{"text":"沿着村街往前走","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"贴着墙根，试图找到出路","next":"huimen_exp_village_map","effects":{"sanity":-3,"yin":2}},{"text":"立刻回头，回老宅去","next":"huimen_exp_return_old_house","effects":{"yin":1}}],
    }
,
    huimen_exp_village_map: {
        title: '村图',
        text: `你贴着墙根走，手指触到一块松动的墙砖。

墙砖后面藏着一张发黄的纸，纸上画着村子的地图。可那地图不是平面的，而是像人的脏腑一样盘绕着。心脏位置标着一口井，胃的位置画着一栋纸扎铺，肝的位置是一座庙，肺的位置是周家祖祠。

地图右下角有一行小字：

[faded]"入此门者，须历五脏，方可出。"[/faded]

你还没看完，地图就从你手里化成了灰。灰落在地上，拼出五个字：

[red]井、铺、庙、祠、桑。[/red]

你明白了，要想走出这个村子，必须去这五个地方。`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp_saw_village_map"},
        choices: [{"text":"先去井边","next":"huimen_exp_well_night","effects":{"yin":1}},{"text":"先去纸扎铺","next":"huimen_exp_paper_shop","effects":{"yin":1}},{"text":"先去庙里","next":"huimen_exp_temple_gate","effects":{"yin":1}},{"text":"先去祖祠","next":"huimen_exp_ancestral_hall","effects":{"yin":1}},{"text":"先去桑树下","next":"huimen_exp_mulberry_tree","effects":{"yin":1}}],
    }
,
    huimen_exp_village_ghost: {
        title: '化鬼',
        text: `你用手去解红绳。

红绳像活物一样缠上你的手指，越缠越紧，最后勒进肉里。你感到自己的血被红绳吸走，意识开始模糊。

新娘的脸凑近你："你解不开的。这是周家男人的命。"

你想挣扎，却发现自己动不了。你的皮肤在变纸，关节在变脆，嘴角在上扬。

[red]你成了新的新娘替身。[/red]

红灯笼重新亮起，喜房里传出唢呐声。`,
        effects: {"sanity":-20,"yin":10},
        ending: 'huimen_exp_village_ghost',
    }
,
    huimen_exp_village_heart: {
        title: '村心',
        text: `你来到村子中央。

那里没有井，只有一棵巨大的树。树的根须裸露在地面上，像无数条纠缠的蛇。每一根根须上都缠着红绳，红绳的另一端消失在地下。

你走近树，发现树干上刻着密密麻麻的名字。有周家男丁的，也有女子的。男子的名字是凸出来的，女子的名字是凹进去的。

[red]这棵树在吸女子的命，养男子的寿。[/red]

你伸手去摸一个凹进去的名字，指尖传来一阵刺痛，像被针扎。`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp_saw_village_heart_tree"},
        choices: [{"text":"用刀割断根须","next":"huimen_exp_village_heart_cut","condition":{"hasItem":"缠发剪刀"},"effects":{"sanity":-5,"yin":-10}},{"text":"把女子的名字刻深一些","next":"huimen_exp_village_heart_names","effects":{"sanity":-5,"yin":3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_heart_cut: {
        title: '断根',
        text: `你用缠发剪刀割向根须。

根须断裂的瞬间，整个村子震动起来。地下传来无数女子的尖叫，不是痛苦，而是解脱。

黑色的液体从断根处喷涌而出，却不是血，而是像墨水一样的东西。那些被吸走的命，正在回流。

树开始枯萎，叶子一片片落下。每一片叶子上都写着一个女子的名字。

[red]你断了周家续命的根。[/red]

你感到自己的身体在变轻，像是某种束缚被解开了。`,
        effects: {"sanity":10,"yin":-15,"removeItem":"缠发剪刀","setFlag":"huimen_exp_cut_village_heart_root"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_heart_names: {
        title: '村心刻名',
        text: `你用手指去抠那些凹进去的女子名字。

指甲翻了，血渗进树干的缝隙里。可你没有停，你一个名字一个名字地抠，把它们抠深，抠清晰。

"秀兰"、"柳红"、"阿绣"、"云袖"……每一个名字被抠深时，树都会颤抖一下。

"你干什么！" 树发出周家祖先的声音，"你敢让她们的名字比男丁的深！"

"为什么不敢？" 你说，"她们的命，比你们的名字重得多。"`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp_deepened_women_names"},
        choices: [{"text":"继续刻","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ending_village_memory_scene: {
        title: '守忆',
        text: `你选择了黑暗的路。

路的尽头不是出口，而是整个村子的记忆。你走进去，成为村子的一部分。

从此，你记住每一个被周家害死的女子。你记住秀兰的笑，柳红的戏，阿绣的绣，云袖的琴。

你不是鬼，也不是人。你是守忆人。

很多年后，会有另一个年轻人来到这个村子。你会坐在老槐树下，给他讲一个故事。

"很久以前，这里有一个叫秀兰的姑娘……"`,
        effects: {"sanity":10,"yin":-10},
        ending: 'huimen_exp_ending_village_memory',
    }
,
    huimen_exp_village_escape_alt: {
        title: '离村',
        text: `你没有回头，也没有成亲。

你趁着夜色翻过后山，一路跑回城里。报了警，带着警察和记者回到村子。

但村子已经空了。井还在，老宅还在，纸扎人还在，但村民都不见了。

只有井边的青苔上，留着一双小小的红绣鞋印。

秀兰没有跟你走，但也没有留你。她只是让你活着离开了。`,
        choices: [{"text":"活下去","ending":"hidden_villageEscape"}],
    }
,
    huimen_exp_village_ghost_alt: {
        title: '村中鬼',
        text: `你终究没有走出村子。

不是秀兰拦你，而是你自己停下了脚步。你渐渐习惯了纸钱的气味，习惯了白灯笼的光，习惯了每到子时便响起的唢呐。

村民们看见你，会远远地鞠一躬，叫你"周家的守夜人"。

你的手腕上系着一根红绳，红绳的另一端消失在雾里。有时候你自己也忘了，那端系着的到底是谁。

很多年后，又一个年轻人回到山村。你站在纸人中间，朝他露出和其他纸人一样的笑。`,
        choices: [{"text":"成为纸人中的一员","ending":"huimen_exp_village_ghost"}],
    }
};
