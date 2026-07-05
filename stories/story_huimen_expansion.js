/**
 * 《回门》剧情扩展包：山村夜行
 * 本文件导入主线 story_huimen.js 的数据并做深拷贝，
 * 在不影响原文件的前提下注入大量新场景、新结局，
 * 以及通往“山村循环”的入口选择。
 * 导出结构与主线完全一致，可直接被引擎合并。
 */

import { StoryData as BaseStoryData, Endings as BaseEndings } from './story_huimen.js';

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export const StoryData = deepClone(BaseStoryData);
export const Endings = deepClone(BaseEndings);

// ============================================================
// 新结局
// ============================================================

Endings.huimen_exp_village_ghost = {
    title: '死亡结局 · 村中鬼',
    text: `你终究没有走出村子。

不是秀兰拦你，而是你自己停下了脚步。你渐渐习惯了纸钱的气味，习惯了白灯笼的光，习惯了每到子时便响起的唢呐。

村民们看见你，会远远地鞠一躬，叫你"周家的守夜人"。

你的手腕上系着一根红绳，红绳的另一端消失在雾里。有时候你自己也忘了，那端系着的到底是谁。

很多年后，又有一个年轻人回到山村。你站在纸人中间，朝他露出和其他纸人一样的笑。`
};

Endings.huimen_exp_paper_doll = {
    title: '死亡结局 · 纸人替身',
    text: `你在纸扎铺里待得太久了。

起初你只是好奇，后来你开始帮那位老师傅糊纸人。你学会了画眉眼，点朱砂，扎骨架。你扎的第一个纸人，下巴有一颗和你一样的痣。

老师傅说："很好，很像。"

第二天，你发现自己站到了纸人堆里。你的身体轻飘飘的，关节处糊着浆糊。你试着说话，嘴里却塞满了纸灰。

铺子里，另一个"你"正低头糊着下一个纸人。`
};

Endings.huimen_exp_forgotten = {
    title: '死亡结局 · 被遗忘的名字',
    text: `你在山村里走了很多年。

你记得自己姓周，记得秀兰，记得一口井。但你忘了自己为什么要回来，忘了自己有没有走出去。

村里的石碑上刻满了名字，你找了很多遍，找不到自己的。

秀兰告诉你："名字被纸人借走的人，是回不来的。"

你低头看了看自己的手，发现手指正在变纸，变脆，变白。原来你早就不是人了，只是村子的记忆里，还留着一个模糊的影。`
};

Endings.huimen_exp_moonlit_escape = {
    title: '普通结局 · 月下离村',
    text: `你沿着月光照出的小路一直走，没有回头。

纸人们站在村口，没有追来。秀兰站在井边，也没有追来。你听见她在身后轻轻地说："走吧，走得越远越好。"

天快亮时，你到了镇上。你买了最早一班车的票，回到城里。

可你每晚都会梦见那条月光小路。梦见它还在等你走回去。梦见秀兰说："你欠我的，还没还清。"

也许有一天，你会再次踏上那条路。`
};

Endings.huimen_exp_ancestor_judge = {
    title: '死亡结局 · 祖祠审判',
    text: `你推开了祖祠里不该推开的门。

门后是周家历代祖先的牌位，每一座牌位后面都站着一团黑影。它们看着你，像看一个罪人。

"周家男丁，活不过四十。" 最老的那团黑影说，"你知道为什么吗？因为我们把命都用来抵债了。你以为你能例外？"

你感到自己的生命力被牌位吸走。你的头发变白，皮肤松弛，背脊佝偻。

最后，你成了一座新的牌位，摆在秀兰的名字旁边。`
};

Endings.huimen_exp_little_boy_friend = {
    title: '隐藏结局 · 鬼孩伴行',
    text: `你答应陪小鬼玩一夜。

那一夜你们踢了纸毽子，放了纸船，在井边数星星。小鬼说他叫"元宝"，是秀兰当年未出世的孩子分出来的一缕魂。

"姐姐太苦了。" 元宝说，"你帮她，我就帮你。"

天亮时，元宝化作一道青光钻进你的影子里。你走出山村，发现纸人们都怕你，不敢靠近。

后来你结了婚，生了孩子。孩子三岁那年，你看见他枕边站着一个穿肚兜的小男孩，正朝你挥手。

"我走了。" 元宝说，"谢谢你陪我玩。"`
};

Endings.huimen_exp_mulberry_guard = {
    title: '隐藏结局 · 桑树守灵',
    text: `你决定留在老桑树下。

桑树里封着秀兰的一缕头发。你握着那缕头发，感到她的怨念像蚕丝一样缠住你，却不勒紧。

"你不走了？" 她问。
"不走了。" 你说，"我替你守着，守到周家的债还清为止。"

从此，老桑树下多了一个守树人。村民们说，那棵树越来越像人形，风一吹，叶子就唱戏。

每年中元，都会有一个年轻人来到树下，听见一个苍老的声音说："秀兰不在这里了，她早就被带走了。"

然后年轻人就会安心地离开。`
};

Endings.huimen_exp_well_whisper_truth = {
    title: '隐藏结局 · 井语成录',
    text: `你没有开棺，也没有成亲。

你坐在井边，从夜里坐到凌晨，听秀兰讲完她的一生。你用手机录下了所有的话——虽然山里没有信号，但录音功能还能用。

天亮后，你把录音交给了来山村调查的记者。三个月后，一篇报道登了出来：《山村冥婚三十年：一个被活埋女子的声音》。

秀兰的名字第一次以受害者的身份出现在报纸上。她给你托梦，说："我终于不用只躺在井底说话了。"

你把那段录音保存了一辈子。`
};

Endings.huimen_exp_paper_offering = {
    title: '隐藏结局 · 纸供',
    text: `你在纸扎铺里亲手给秀兰扎了一套嫁妆。

纸轿子、纸衣裳、纸首饰，还有一对小小的纸鞋。你在每件东西上都写了秀兰的名字，然后在村口烧了。

火光里，秀兰穿上了那身纸嫁衣。她不再是浑身湿透的怨鬼，而是一个清清爽爽的新娘。

"谢谢你。" 她说，"这是我第一次，堂堂正正地穿上嫁衣。"

她坐上纸轿子，轿帘落下，纸灰被风吹向远方。

你再也没有梦见她。`
};

Endings.huimen_exp_redemption_loop = {
    title: '真结局 · 回门续章',
    text: `你牵着秀兰的手，沿着月光小路走出山村。

她没有盖头，没有血泪，只是一个沉默的姑娘。你把她带到后山，和无字碑一起，重新立了一座新碑。

碑上刻着："周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

秀兰看着那行字，忽然笑了："原来回门，是真的可以回家的。"

她化作红光消散前，把一枚金戒指放在你手心。那是祖母的戒指，也是她唯一从周家带走的东西。

你走出山村时，天已经大亮。村口两个纸扎人倒在地上，纸壳里空空如也。

你知道，有些债，终于可以一笔勾销了。`
};

// ============================================================
// 新场景
// ============================================================

StoryData.huimen_exp_village_loop_entry = {
    title: '山村夜路',
    text: `你踏出那一步，身后的堂屋忽然变得很远。

村子不是你记忆中的样子。街巷曲折，屋檐低垂，每一扇门都紧闭着，门缝里却透出幽幽的白光。纸钱不是从天上飘下来的，是从墙缝里、从石板缝里、从每一道门缝里渗出来的。

[whisper]"又来一个……"[/whisper]

你回头，来时的路已经不见了，只剩一堵斑驳的土墙，墙上贴着一张褪色的喜字。

[red]你似乎走进了村子的另一面。[/red]

这里没有时间。月亮永远停在东山之上，雾气里偶尔传来唢呐声，忽远忽近。你知道这不是真实的世界，而是秀兰三十年怨念织出的网。

但你没有立刻死去。这说明她还在等你做选择。`,
    effects: {
        sanity: -5,
        yin: 2,
        visual: 'flicker',
        visualDuration: 2000
    },
    choices: [
        {
            text: '沿着村街往前走',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '贴着墙根，试图找到出路',
            next: 'huimen_exp_village_map',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '立刻回头，回老宅去',
            next: 'huimen_exp_return_old_house',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_map = {
    title: '村图',
    text: `你贴着墙根走，手指触到一块松动的墙砖。

墙砖后面藏着一张发黄的纸，纸上画着村子的地图。可那地图不是平面的，而是像人的脏腑一样盘绕着。心脏位置标着一口井，胃的位置画着一栋纸扎铺，肝的位置是一座庙，肺的位置是周家祖祠。

地图右下角有一行小字：

[faded]"入此门者，须历五脏，方可出。"[/faded]

你还没看完，地图就从你手里化成了灰。灰落在地上，拼出五个字：

[red]井、铺、庙、祠、桑。[/red]

你明白了，要想走出这个村子，必须去这五个地方。`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_saw_village_map'
    },
    choices: [
        {
            text: '先去井边',
            next: 'huimen_exp_well_night',
            effects: { yin: 1 }
        },
        {
            text: '先去纸扎铺',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
        {
            text: '先去庙里',
            next: 'huimen_exp_temple_gate',
            effects: { yin: 1 }
        },
        {
            text: '先去祖祠',
            next: 'huimen_exp_ancestral_hall',
            effects: { yin: 1 }
        },
        {
            text: '先去桑树下',
            next: 'huimen_exp_mulberry_tree',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street = {
    title: '村街',
    text: `你站在村街中央。

街道两旁是低矮的瓦房，每一扇窗后都有一盏白灯笼。灯笼上没有字，只有一个墨点画成的眼睛。你走到哪，那些眼睛就跟到哪。

石板路是湿的，踩上去会发出黏腻的声响，像踩在舌头上。

远处有纸钱在旋舞，偶尔能看见一个纸人的背影拐进巷子。你叫一声，它不回头；你追上去，巷子尽头是一堵墙。

[whisper]"别追。追上了，你就变成它。"[/whisper]

风里传来这句话，你分不清是警告还是邀请。

[red]这里可以通往村子的每个角落。[/red]`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '去井边',
            next: 'huimen_exp_well_night',
            effects: { yin: 1 }
        },
        {
            text: '去纸扎铺',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
        {
            text: '去庙里',
            next: 'huimen_exp_temple_gate',
            effects: { yin: 1 }
        },
        {
            text: '去祖祠',
            next: 'huimen_exp_ancestral_hall',
            effects: { yin: 1 }
        },
        {
            text: '去桑树下',
            next: 'huimen_exp_mulberry_tree',
            effects: { yin: 1 }
        },
        {
            text: '去废墟看看',
            next: 'huimen_exp_ruins',
            effects: { yin: 2 }
        },
        {
            text: '顺着月光小路走',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 2 }
        },
        {
            text: '雾里似乎有人影晃动',
            next: 'huimen_exp_street_fog',
            condition: { yinAbove: 15 },
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '天上落下雨点，颜色不太对',
            next: 'huimen_exp_street_rain',
            condition: { yinAbove: 18 },
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '纸钱像雪一样飘落',
            next: 'huimen_exp_street_paper_rain',
            condition: { yinAbove: 20 },
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '身后传来沉重的脚步声',
            next: 'huimen_exp_street_footsteps',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '有人吹着你熟悉的口哨',
            next: 'huimen_exp_street_whistle',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '雾里有声音在叫你的名字',
            next: 'huimen_exp_street_calling',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '墙缝里伸出一只苍白的手',
            next: 'huimen_exp_street_hand',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一扇门在轻轻敲响',
            next: 'huimen_exp_street_knocking',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '雾中立着一面朱红镜子',
            next: 'huimen_exp_street_mirror',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '石板路上有一双红绣鞋',
            next: 'huimen_exp_street_red_shoes',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一个小女孩在街边玩石子',
            next: 'huimen_exp_street_little_girl',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一只纸船顺着石缝漂来',
            next: 'huimen_exp_street_paper_boat',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '远处传来唱戏声',
            next: 'huimen_exp_street_opera_tune',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '地底传来沉闷的鼓声',
            next: 'huimen_exp_street_drum',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '远处有唢呐声和红灯笼',
            next: 'huimen_exp_wedding_procession',
            hidden: true,
            effects: { yin: 2 }
        },
        {
            text: '巷口有个卖纸的老妇',
            next: 'huimen_exp_old_woman',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '破败戏台上传来唱戏声',
            next: 'huimen_exp_singing_woman',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一盏红灯笼在巷尾飘摇',
            next: 'huimen_exp_red_lantern',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一户人家传出狗吠',
            next: 'huimen_exp_dog_bark',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '坟地里有绿色的火焰跳动',
            next: 'huimen_exp_fox_fire',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '天快亮了，村街的气氛变了',
            next: 'huimen_exp_village_street_dawn',
            condition: { timeAfter: 120 },
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '子时到了，村子变得不对劲',
            next: 'huimen_exp_village_street_midnight',
            condition: { timeAfter: 180 },
            hidden: true,
            effects: { yin: 2 }
        },
        {
            text: '街道忽然空了，像所有人都消失了',
            next: 'huimen_exp_village_street_empty',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '听见许多人在笑',
            next: 'huimen_exp_village_street_laugh',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '听见许多女人在哭',
            next: 'huimen_exp_village_street_cry',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '石板缝里伸出一只婴儿的小手',
            next: 'huimen_exp_village_street_baby',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一队送亲的队伍走来',
            next: 'huimen_exp_village_street_bride_parade',
            hidden: true,
            effects: { yin: 2 }
        },
        {
            text: '路边站着一匹纸马',
            next: 'huimen_exp_village_street_paper_horse',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '井里传来敲击声',
            next: 'huimen_exp_village_street_well_sound',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '身后跟着一个没有主人的影子',
            next: 'huimen_exp_village_street_ancestor_shadow',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '手腕上缠着一根红线',
            next: 'huimen_exp_village_street_red_thread',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '再去井边看看秀兰',
            next: 'huimen_exp_well_night_repeat',
            condition: { flag: 'huimen_exp_sat_with_xiulan' },
            effects: { yin: 1 }
        },
        {
            text: '去纸扎铺找老人聊聊',
            next: 'huimen_exp_paper_shop_craftsman_memory',
            condition: { flag: 'huimen_exp_learned_doll_substitute' },
            effects: { yin: 1 }
        },
        {
            text: '去庙里捐香火',
            next: 'huimen_exp_temple_donation',
            condition: { hasItem: '清代铜钱' },
            effects: { yin: 1 }
        },
        {
            text: '去祖祠找那根红烛',
            next: 'huimen_exp_ancestral_candle',
            condition: { flag: 'huimen_exp_read_ancestral_record' },
            effects: { yin: 1 }
        },
        {
            text: '去桑树下陪秀兰哭',
            next: 'huimen_exp_mulberry_weep',
            condition: { flag: 'huimen_exp_released_mulberry_soul' },
            effects: { yin: 1 }
        },
        {
            text: '去废墟再找线索',
            next: 'huimen_exp_ruins_photo',
            condition: { flag: 'huimen_exp_read_xiulan_diary' },
            effects: { yin: 1 }
        },
        {
            text: '再走一次月光路',
            next: 'huimen_exp_moonlit_path_memory',
            condition: { flag: 'huimen_exp_named_xiulan_on_bridge' },
            effects: { yin: 1 }
        },
        {
            text: '让秀兰唱一段戏',
            next: 'huimen_exp_xiulan_sing',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '看秀兰跳舞',
            next: 'huimen_exp_xiulan_dance',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '逗秀兰笑',
            next: 'huimen_exp_xiulan_laugh',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '问秀兰恨不恨',
            next: 'huimen_exp_xiulan_angry',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: 1 }
        },
        {
            text: '安慰害怕的秀兰',
            next: 'huimen_exp_xiulan_scared',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '和秀兰聊未来',
            next: 'huimen_exp_xiulan_hope',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '给秀兰做桂花糕',
            next: 'huimen_exp_xiulan_cook',
            condition: { flag: 'huimen_exp_knows_xiulan_wish' },
            effects: { yin: -1 }
        },
        {
            text: '给秀兰做嫁衣',
            next: 'huimen_exp_xiulan_sew',
            condition: { flag: 'huimen_exp_knows_xiulan_wish' },
            effects: { yin: -1 }
        },
        {
            text: '带秀兰去学堂遗址',
            next: 'huimen_exp_xiulan_school',
            condition: { flag: 'huimen_exp_xiulan_danced' },
            effects: { yin: -1 }
        },
        {
            text: '用铜钱换秀兰自由',
            next: 'huimen_exp_use_old_coin',
            condition: { hasItem: '清代铜钱' },
            effects: { yin: -1 }
        },
        {
            text: '用桑叶织命丝',
            next: 'huimen_exp_use_silk',
            condition: { hasItem: '桑叶' },
            effects: { yin: -1 }
        },
        {
            text: '握紧护身乳牙',
            next: 'huimen_exp_use_child_tooth',
            condition: { hasItem: '护身乳牙' },
            effects: { yin: -1 }
        },
        {
            text: '把柳红的戏服还给她',
            next: 'huimen_exp_use_liu_hong_dress',
            condition: { hasItem: '柳红的戏服' },
            effects: { yin: -1 }
        },
        {
            text: '去村中央和祖先对质',
            next: 'huimen_exp_final_confrontation',
            condition: { flag: 'huimen_exp_ended_zhou_curse' },
            effects: { yin: 1 }
        },
        {
            text: '天上飞着一只纸鸢',
            next: 'huimen_exp_village_street_paper_kite',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '院里有一架自己在晃的秋千',
            next: 'huimen_exp_village_street_swing',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '井边放着一个旧木桶',
            next: 'huimen_exp_village_street_well_bucket',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '发现另一口枯井',
            next: 'huimen_exp_village_street_old_well',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '地上有一把画着并蒂莲的纸扇',
            next: 'huimen_exp_village_street_paper_fan',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '桌上摆着一盘红月饼',
            next: 'huimen_exp_village_street_mooncake',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '废弃祠堂前有个刻着女子名字的香炉',
            next: 'huimen_exp_village_street_incense_burner',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '村口石狮嘴里似乎有东西',
            next: 'huimen_exp_village_street_stone_lion',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一扇门里摆着新婚的床铺',
            next: 'huimen_exp_village_street_abandoned_bed',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '河边搭着一座纸桥',
            next: 'huimen_exp_village_street_paper_bridge',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '路边垃圾堆里有一本旧歌本',
            next: 'huimen_exp_village_street_song_book',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '窗台上有一方绣帕',
            next: 'huimen_exp_village_street_embroidery',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '桌上摆着一盘点心',
            next: 'huimen_exp_village_street_wedding_cake',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一只黑狗一直在跟着你',
            next: 'huimen_exp_village_street_ghost_dog',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '井沿上停着一只纸鸟',
            next: 'huimen_exp_village_street_paper_bird',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '石板路上有一只青色布鞋',
            next: 'huimen_exp_village_street_lost_shoe',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '灶台上放着半碗发黑的米饭',
            next: 'huimen_exp_village_street_rice_bowl',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '井边有一把木梳',
            next: 'huimen_exp_village_street_comb',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '发现一个生锈的信箱',
            next: 'huimen_exp_village_street_letter_box',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一条纸鱼在石板上跳',
            next: 'huimen_exp_village_street_paper_fish',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '墙边靠着一把旧扫帚',
            next: 'huimen_exp_village_street_old_broom',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '一户人家的门是纸糊的',
            next: 'huimen_exp_village_street_paper_door',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '纸门上的门神似乎在看你',
            next: 'huimen_exp_village_street_paper_door_god',
            condition: { flag: 'huimen_exp_saw_village_map' },
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '再照一次井水里的秀兰',
            next: 'huimen_exp_xiulan_mirror_2',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '下雨了，陪秀兰一起淋',
            next: 'huimen_exp_xiulan_rain',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '天亮时帮秀兰挡住阳光',
            next: 'huimen_exp_xiulan_sun',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '拥抱秀兰',
            next: 'huimen_exp_final_hug',
            condition: { flag: 'huimen_exp_held_xiulan_hand' },
            effects: { yin: -1 }
        },
        {
            text: '院子里堆满了印着囍字的纸钱',
            next: 'huimen_exp_village_street_paper_money_pile',
            hidden: true,
            effects: { yin: 1 }
        },
        {
            text: '再摘一朵桂花给秀兰',
            next: 'huimen_exp_xiulan_flower_2',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '给秀兰梳头',
            next: 'huimen_exp_xiulan_hair',
            condition: { flag: 'huimen_exp_combed_xiulan_hair' },
            effects: { yin: -1 }
        },
        {
            text: '答应帮秀兰托梦',
            next: 'huimen_exp_xiulan_dream',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '用破镜碎片照井底',
            next: 'huimen_exp_use_broken_mirror',
            condition: { hasItem: '破镜碎片' },
            effects: { yin: -1 }
        },
        {
            text: '系上命丝锦带',
            next: 'huimen_exp_use_life_silk',
            condition: { hasItem: '命丝锦带' },
            effects: { yin: -1 }
        },
        {
            text: '把秀兰的头发系在手腕上',
            next: 'huimen_exp_use_xiulan_hair',
            condition: { hasItem: '秀兰的头发' },
            effects: { yin: -1 }
        },
        {
            text: '向秀兰道歉',
            next: 'huimen_exp_xiulan_apology',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '听秀兰说谢谢',
            next: 'huimen_exp_xiulan_thanks',
            condition: { flag: 'huimen_exp_apologized_to_xiulan' },
            effects: { yin: -1 }
        },
        {
            text: '叫秀兰的名字',
            next: 'huimen_exp_xiulan_name',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -1 }
        },
        {
            text: '问秀兰如果活着会是什么样',
            next: 'huimen_exp_xiulan_age',
            condition: { flag: 'huimen_exp_called_xiulan_name' },
            effects: { yin: -1 }
        },
        {
            text: '和秀兰道别',
            next: 'huimen_exp_xiulan_goodbye',
            condition: { flag: 'huimen_exp_said_goodbye_to_xiulan' },
            effects: { yin: -1 }
        },
        {
            text: '把婚床字条给秀兰',
            next: 'huimen_exp_use_wedding_bed_note',
            condition: { hasItem: '婚床上的字条' },
            effects: { yin: -1 }
        },
        {
            text: '把石狮口中的名字还给秀兰',
            next: 'huimen_exp_use_stone_lion_name',
            condition: { hasItem: '石狮口中的名字' },
            effects: { yin: -1 }
        },
        {
            text: '带秀兰做最后的告别',
            next: 'huimen_exp_final_goodbye',
            condition: { flag: 'huimen_exp_truly_saw_xiulan' },
            effects: { yin: -5 }
        },
        {
            text: '你觉得自己已经属于这个村子，决定留下守护记忆',
            ending: 'huimen_exp_ending_village_memory',
            condition: { flag: 'huimen_exp_truly_saw_xiulan' },
            effects: { yin: -5 }
        },
        {
            text: '回老宅正堂，不在这里耽搁',
            next: 'huimen_exp_return_old_house',
            effects: { yin: 1 }
        },
        {
            text: '去后院井边，用铜镜照一照',
            next: 'huimen_exp_return_well',
            condition: { hasItem: '铜镜碎片' },
            effects: { yin: 1 }
        },
        {
            text: '该去开红棺了',
            next: 'huimen_exp_return_red_coffin',
            condition: { hasItem: '铜钥匙' },
            effects: { yin: 1 }
        },
        {
            text: '直接把秀兰安葬',
            next: 'huimen_exp_return_bury_xiulan',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_well_night = {
    title: '夜井',
    text: `你来到井边。

井比白天更深，井口的青石被月光照得发白。你探头往下看，水面平静如镜，却没有映出你的脸，而是映出一顶红轿子。

轿帘掀开，里面坐着一个盖着红盖头的人。

[whisper]"夫君，下来陪我。"[/whisper]

你猛地后退，却被井绳绊了一下。井绳像蛇一样缠住你的脚踝，把你往井口拖。

你拼命抓住井沿，指甲在石缝里抠出血痕。`,
    effects: {
        sanity: -8,
        yin: 3,
        visual: 'blood',
        visualDuration: 2000
    },
    choices: [
        {
            text: '掏出铜镜碎片照向井底',
            next: 'huimen_exp_well_reflection',
            condition: { hasItem: '铜镜碎片' },
            effects: { sanity: 3, yin: -5 }
        },
        {
            text: '用力挣脱井绳',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 2 }
        },
        {
            text: '对着井水说话："我不是来娶你的"',
            next: 'huimen_exp_well_whisper',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '抓着井绳下到井底看看',
            next: 'huimen_exp_well_dive',
            effects: { yin: 2 }
        },
        {
            text: '再下一次井，看看井壁上的字',
            next: 'huimen_exp_well_bottom',
            condition: { flag: 'huimen_exp_sat_with_xiulan' },
            effects: { yin: 1 }
        },
        {
            text: '这里太危险，回老宅去',
            next: 'huimen_exp_return_old_house',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_reflection = {
    title: '镜中井',
    text: `你把铜镜碎片对准井底。

碎片里的裂痕射出一道浑浊的光，井水"咕嘟"一声，像被烧开了一样。水里的红轿子开始扭曲，盖头下传来秀兰的尖叫。

[scream]"你照我！你竟敢照我！"[/scream]

可叫声只持续了一瞬。水面平静下来，映出的不再是红轿子，而是一间喜房。喜房里点着红烛，床上坐着一个穿嫁衣的女子，正在梳头。

她放下梳子，转过头来。你看见她的脸——不是秀兰，是祖母年轻时的脸。

[faded]"秀兰啊，我对不起你。"[/faded] 祖母说，"可周家女人，又何尝不是被活埋的人？"

画面碎了。铜镜碎片从你手里滑落，却没有掉进井里，而是化作一缕青烟消散了。`,
    effects: {
        sanity: -10,
        yin: -8,
        removeItem: '铜镜碎片',
        setFlag: 'huimen_exp_saw_grandmother_memory'
    },
    choices: [
        {
            text: '回村街去',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '去后院找真正的井',
            next: 'huimen_exp_return_well',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_whisper = {
    title: '井语',
    text: `你对着井水说："我不是来娶你的。"

井水沉默了很久。久到你以为不会有回应。

然后，水面开始泛起涟漪，一个声音从深处传来。那声音不像是秀兰的，更像是一个孩子。

[whisper]"那你是来干嘛的？"[/whisper]

你愣了一下："我是来……听你说的。"

水面"咕嘟"冒出一个气泡，气泡破裂时，溅起的水珠落在你的手背上，冰凉。

[whisper]"姐姐一直在哭。"[/whisper] 孩子说，"她哭的时候，整个村子都在下雨。你能让她不哭吗？"

你还没来得及回答，井绳突然松开了你的脚踝，像一条死去的蛇滑回井里。`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_heard_well_child'
    },
    choices: [
        {
            text: '问孩子是谁',
            next: 'huimen_exp_little_boy',
            effects: { yin: 1 }
        },
        {
            text: '离开井边',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_paper_shop = {
    title: '纸扎铺',
    text: `你推开纸扎铺的门。

门轴发出刺耳的"吱呀"声，像是骨头在摩擦。铺子里摆满了纸人、纸马、纸轿、纸房子，每一双墨点眼睛都在盯着你。

柜台后面坐着一个老人，正低着头糊纸人。他的动作很慢，浆糊刷在竹篾上，发出黏腻的声响。

"客人，" 老人头也不抬，"要扎什么？"

你还没来得及回答，他就把手里那个纸人转了过来。

[red]纸人的脸，和你一模一样。[/red]

"这个不像你。" 老人说，"下巴的痣，还差一点。"`,
    effects: {
        sanity: -10,
        yin: 3,
        visual: 'paper-doll',
        visualDuration: 2000
    },
    choices: [
        {
            text: '质问他为什么扎你的脸',
            next: 'huimen_exp_paper_doll_craftsman',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '转身就跑',
            next: 'huimen_exp_paper_doll_chase',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '仔细观察铺子里的纸人',
            next: 'huimen_exp_paper_shop_backroom',
            effects: { yin: 2 }
        },
        {
            text: '给秀兰扎一套嫁妆',
            next: 'huimen_exp_paper_offering',
            condition: { flag: 'huimen_exp_saw_village_map' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '爬上屋顶看看',
            next: 'huimen_exp_paper_shop_roof',
            effects: { yin: 2 }
        },
        {
            text: '发现纸人的眼睛在动',
            next: 'huimen_exp_paper_shop_doll_eyes',
            condition: { flag: 'huimen_exp_learned_doll_substitute' },
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_paper_shop_backroom = {
    title: '纸扎铺后屋',
    text: `你绕过柜台，进了后屋。

后屋比前厅小得多，正中摆着一张床，床上躺着一个人，盖着白布。你掀开白布一角，下面是一张没有五官的脸。

不，不是脸。是一张等待被画上的纸。

床边堆着许多已经画好的脸，每张都写着名字。你翻看着，看到了"二叔"、"三姑"、"四婶"，还有你自己的名字。

[red]你的名字下面压着一张秀兰的脸。[/red]

你拿起秀兰的脸。纸很薄，却出奇地沉。纸上有一双眼睛，正静静地看着你。

[whisper]"把我的脸还给我。"[/whisper]`,
    effects: {
        sanity: -12,
        yin: 3,
        addItem: '秀兰的纸脸'
    },
    choices: [
        {
            text: '把纸脸烧掉',
            next: 'huimen_exp_burn_paper_face',
            effects: { sanity: 5, yin: -10 }
        },
        {
            text: '把纸脸收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        },
        {
            text: '放回床上，退出后屋',
            next: 'huimen_exp_paper_doll_chase',
            effects: { sanity: -5, yin: 3 }
        }
    ]
};

StoryData.huimen_exp_paper_doll_craftsman = {
    title: '扎纸匠',
    text: `你问老人："你为什么扎我的脸？"

老人终于抬起头。他的眼眶里没有眼珠，只有两团干涸的墨渍。"不是我要扎。是周家要扎。"

"周家每个男丁满三十岁，都要来扎一个自己的替身。替身替你们挡灾，替你们成亲，替你们下井。"

他指了指铺子里密密麻麻的纸人："这些，都是周家男人的替身。你祖父的、你父亲的、你二叔的……还有你的。"

[red]你这才看清，那些纸人的下巴都有一颗痣。[/red]

"秀兰等的不是你。" 老人说，"她等的是替身。等一个和她一样，被活埋在纸里的魂。"`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp_learned_doll_substitute'
    },
    choices: [
        {
            text: '烧掉铺子里所有纸人',
            next: 'huimen_exp_burn_all_dolls',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '拒绝扎替身，离开铺子',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -5 }
        },
        {
            text: '答应扎一个替身',
            ending: 'huimen_exp_paper_doll',
            effects: { sanity: -20, yin: 10 }
        }
    ]
};

StoryData.huimen_exp_paper_doll_chase = {
    title: '纸人追',
    text: `你转身想跑，可铺子里的纸人全都动了。

它们的关节发出"咯吱咯吱"的声响，像是一群刚学会走路的傀儡。它们没有追你，而是先围住了门口，把出去的路堵死了。

"别走。" 它们一起说，"脸还没画完。"

你退到柜台后面，手碰到了一摞黄纸。黄纸上印着人脸的轮廓，像面膜一样。

你抓起一把黄纸朝它们扔去。纸人们停住了，开始争抢地上的黄纸，把它们往自己脸上贴。

[red]每一张纸脸都变成了你的样子。[/red]

你趁机从窗户口翻了出去。`,
    effects: {
        sanity: -10,
        yin: 3,
        visual: 'paper-doll',
        visualDuration: 3000
    },
    choices: [
        {
            text: '拼命跑回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        },
        {
            text: '躲进旁边的巷子',
            next: 'huimen_exp_village_street',
            effects: { sanity: -3, yin: 2 }
        }
    ]
};

StoryData.huimen_exp_burn_paper_face = {
    title: '焚面',
    text: `你摸出打火机，点燃了秀兰的纸脸。

火苗舔上纸面的瞬间，纸脸发出一声凄厉的尖叫。那声音不是秀兰的，而是无数女子叠加在一起的哭声。

火光里，你看见许多张脸在旋转。有秀兰、有祖母、有你不认识的女子。她们的脸在火中扭曲，最后化为一缕青烟。

铺子里的纸人突然安静下来。它们放下手里的黄纸，齐刷刷地转向你，然后——

[red]一起跪下了。[/red]

老人在柜台后面叹了口气："你烧了她们的脸，她们就自由了。可周家，不会放过你。"`,
    effects: {
        sanity: 5,
        yin: -10,
        removeItem: '秀兰的纸脸',
        setFlag: 'huimen_exp_burned_paper_faces'
    },
    choices: [
        {
            text: '离开纸扎铺',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_burn_all_dolls = {
    title: '焚铺',
    text: `你点燃了铺子里的纸人。

火势蔓延得很快。纸马、纸轿、纸房子，还有那一排排长着你的脸的纸人，都在火中扭曲、尖叫、化为灰烬。

你站在火中，感到一种奇异的解脱。

[scream]"你烧的是你自己！"[/scream] 老人在火外大喊，"你烧的是周家男丁的命！"

你低头一看，发现自己的手正在变纸，变脆，变白。火焰顺着你的指尖往上爬，却不烫，只让你觉得轻。

你明白得太晚了。`,
    effects: {
        sanity: -20,
        yin: 10
    },
    ending: 'huimen_exp_paper_doll'
};

StoryData.huimen_exp_paper_offering = {
    title: '扎嫁妆',
    text: `你坐在柜台前，开始为秀兰扎嫁妆。

你记得小时候祖母教过你糊纸人。竹篾做骨，黄纸做肉，朱砂点睛。你扎了一座纸轿子，一身纸嫁衣，一对纸鞋，还有一把纸扇。

每扎完一件，你就在上面写下"周氏秀兰"四个字。

老人在旁边看着，眼眶里的墨渍似乎湿润了："三十年了，第一次有人给她扎嫁妆。"

"周家欠她的。" 你说。

老人点点头，从柜台下取出一盒朱砂："用这个。这是正经的喜砂，不是给死人用的。"`,
    effects: {
        sanity: 10,
        yin: -5,
        setFlag: 'huimen_exp_made_paper_offering'
    },
    choices: [
        {
            text: '去村口把这些烧了',
            next: 'huimen_exp_paper_offering_burn',
            effects: { yin: 1 }
        },
        {
            text: '先收着，以后用',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_paper_offering_burn = {
    title: '纸供成灰',
    text: `你捧着纸嫁妆来到村口。

村口的老槐树下，那两个纸扎人还在。你把纸轿子、纸嫁衣、纸鞋、纸扇一件件摆在它们面前，用火点燃。

火光不是红色的，而是淡淡的金色。纸灰被风吹起，在空中旋转，像一只只蝴蝶。

[whisper]"谢谢你。"[/whisper] 秀兰的声音从火里传来，"这是我第一次，堂堂正正地穿上嫁衣。"

纸扎人倒下了。它们的纸壳里空空如也，只有两根红绳从手腕垂落，像两条死去的蛇。

你感到胸口的压抑轻了许多。`,
    effects: {
        sanity: 15,
        yin: -15,
        clearFlag: 'huimen_exp_made_paper_offering'
    },
    ending: 'huimen_exp_paper_offering'
};

StoryData.huimen_exp_temple_gate = {
    title: '山庙',
    text: `你来到村外的小庙前。

庙门只剩下一扇，另一扇倒在草丛里，门框上缠满了藤蔓。庙里没有香火气，只有一股潮湿的霉味。

你跨过门槛，脚下的石板突然陷下去一块。低头一看，石板上刻着字：

[faded]"秀兰埋骨之处，后人莫近。"[/faded]

你心头一紧。这庙不是供神的，是镇魂的。

供桌上积着厚厚的灰，灰里埋着半支熄灭的香。你拿起那支香，香头上还残留着一点余温。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '半支安神香'
    },
    choices: [
        {
            text: '点燃安神香',
            next: 'huimen_exp_burn_incense_scene',
            condition: { hasItem: '打火机' },
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '进内殿看看',
            next: 'huimen_exp_temple_inner',
            effects: { yin: 2 }
        },
        {
            text: '敲响庙钟',
            next: 'huimen_exp_temple_bell',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '跪在庙前祈愿',
            next: 'huimen_exp_temple_pray',
            effects: { yin: 1 }
        },
        {
            text: '离开，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_temple_inner = {
    title: '庙内',
    text: `你走进内殿。

内殿里没有神像，只有一口竖着的棺材。棺材上贴着密密麻麻的黄符，符上的朱砂字已经褪色。

你走近一步，棺材里传来"咚咚"的声响，像是什么东西在敲门。

[red]是心跳声。[/red]

你屏住呼吸，发现棺材板上刻着一行小字：

[faded]"秀兰之魂，分而镇之。一镇于井，一镇于庙，一镇于桑。三魂归一，方得超脱。"[/faded]

原来秀兰的魂被分成了三份，分别镇在井、庙、桑树。你要救她，必须解开这三处镇魂。`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_knows_three_souls'
    },
    choices: [
        {
            text: '撕掉棺材上的黄符',
            next: 'huimen_exp_temple_release',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '后退离开',
            next: 'huimen_exp_temple_gate',
            effects: { yin: 1 }
        },
        {
            text: '你已经知道解法，去桑树',
            next: 'huimen_exp_mulberry_tree',
            condition: { flag: 'huimen_exp_knows_three_souls' },
            effects: { yin: 1 }
        },
        {
            text: '掀开内殿地面的石板',
            next: 'huimen_exp_temple_underground',
            condition: { flag: 'huimen_exp_released_temple_soul' },
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_temple_release = {
    title: '开棺',
    text: `你撕下了棺材上的黄符。

棺材板"砰"地一声弹开，里面却没有尸体，只有一缕细细的黑发。黑发像有生命一样飘出来，缠在你的手腕上。

你感到一阵刺痛，像是被烙铁烫过。黑发渐渐变白、变轻，最后化为一团光，没入你的胸口。

[whisper]"第一份魂，我收回了。"[/whisper] 秀兰的声音在你脑海里响起，"还有两份。"

你低头看自己的手腕，那里多了一道细细的红痕，像一根褪色的红绳。`,
    effects: {
        sanity: -5,
        yin: 5,
        setFlag: 'huimen_exp_released_temple_soul'
    },
    choices: [
        {
            text: '去井边解第二份魂',
            next: 'huimen_exp_well_release',
            effects: { yin: 1 }
        },
        {
            text: '先回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_temple_bell = {
    title: '庙钟',
    text: `你敲响庙钟。

钟声不是金属声，而是像敲在骨头上，沉闷、空洞。敲到第三下时，你听见钟声里混着别的声音——

[whisper]"别敲了……别敲了……"[/whisper]

是秀兰的声音，带着哭腔。

你继续敲。第四下、第五下、第六下。每敲一下，庙里的灰尘就落下一大片，像是有什么东西被震醒了。

第七下时，供桌塌了。半支安神香滚到你脚边，香灰撒了一地。

[red]你看见香灰里有一行字："敲钟七下，魂归故里。"[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
        removeItem: '半支安神香'
    },
    choices: [
        {
            text: '把香灰收集起来',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '香灰' }
        },
        {
            text: '离开庙',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_release = {
    title: '解井魂',
    text: `你回到井边。

井水比之前更红了，像一锅稀释的血。你对着井水说："秀兰，我来还你第二份魂。"

水面翻涌，一个女子的身影从井底升起。她没有盖头，脸色苍白，眉眼却很清秀。

"你为什么要帮我？" 她问。

"因为周家欠你的。" 你说，"更因为，你本该活着。"

秀兰的眼泪落进井里，井水顿时变得清澈。她化作一道红光，钻进你手腕的红痕里。

[whisper]"还有最后一份。"[/whisper]`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp_released_well_soul'
    },
    choices: [
        {
            text: '去桑树解最后一份魂',
            next: 'huimen_exp_mulberry_release',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_hall = {
    title: '周家祖祠',
    text: `你来到周家祖祠前。

祖祠的门是朱红色的，门上的漆已经剥落，露出底下层层叠叠的黄符。每一张黄符上都写着一个名字，都是周家男丁。

你推开门，里面是一排排牌位。牌位前的香炉里积着厚厚的香灰，香灰里插着几根没烧完的香。

最上面的牌位写着"周氏先祖"，下面的牌位越来越小，最末一排，有一个空位。

[red]那个空位旁边，已经刻好了你的名字。[/red]

你伸手去摸那个名字，指尖触到木头的瞬间，所有牌位同时发出一声叹息。`,
    effects: {
        sanity: -10,
        yin: 3,
        visual: 'flicker',
        visualDuration: 2000
    },
    choices: [
        {
            text: '查看牌位后的暗格',
            next: 'huimen_exp_ancestral_hall_vault',
            effects: { yin: 2 }
        },
        {
            text: '跪拜祖先，请求宽恕',
            next: 'huimen_exp_ancestor_judge_scene',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '用香灰涂抹刻着自己名字的牌位',
            next: 'huimen_exp_erase_name',
            condition: { hasItem: '香灰' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '查看角落里的画像',
            next: 'huimen_exp_ancestral_painting',
            effects: { yin: 2 }
        },
        {
            text: '去后墙看看那面女墙',
            next: 'huimen_exp_ancestral_women_wall',
            condition: { flag: 'huimen_exp_read_ancestral_record' },
            effects: { yin: 2 }
        },
        {
            text: '寻找祖祠地下密室',
            next: 'huimen_exp_ancestral_blood_pool',
            condition: { flag: 'huimen_exp_defied_ancestor' },
            effects: { yin: 3 }
        },
        {
            text: '离开祖祠',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_hall_vault = {
    title: '暗格',
    text: `你挪开最老那座牌位，后面露出一方暗格。

暗格里放着一本薄薄的册子，封面上写着"周家秘录"。你翻开第一页，上面记载着周家每一代"不祥女"的名字。

秀兰、柳红、云袖、素心、月娥……每一个名字后面都写着"活埋"、"配冥婚"、"沉塘"。

[red]周家不是靠男丁传宗接代，而是靠女人的血养着。[/red]

你翻到最后一页，发现是空白的。空白页上只有一滴干涸的血，血旁边有一行小字：

[faded]"最后一个名字，由你写。"[/faded]`,
    effects: {
        sanity: -15,
        yin: 3,
        setFlag: 'huimen_exp_read_ancestral_record'
    },
    choices: [
        {
            text: '写下秀兰的名字，承认她的身份',
            next: 'huimen_exp_restore_xiulan_name',
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '撕掉这本册子',
            next: 'huimen_exp_burn_ancestral_record',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '把册子带走',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '周家秘录' }
        }
    ]
};

StoryData.huimen_exp_restore_xiulan_name = {
    title: '正名',
    text: `你咬破手指，在空白页上写下：

"周氏秀兰，周家长子未婚妻，明媒正娶，未嫁而亡。周家后人今正其名，以血为证。"

血字渗入纸页，发出淡淡的红光。祖祠里的牌位开始颤抖，最上面那座"周氏先祖"的牌位"咔嚓"一声裂开。

[whisper]"够了。"[/whisper] 秀兰的声音从四面八方传来，"不用再写了。"

你感到胸口的压抑彻底消散了。手腕上的红痕也变得温热，像是一个安心的印记。`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp_restored_xiulan_name_in_hall'
    },
    choices: [
        {
            text: '离开祖祠',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '回老宅，把这件事告诉亲戚',
            next: 'huimen_exp_return_coffin',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_burn_ancestral_record = {
    title: '焚册',
    text: `你点燃了周家秘录。

火光照亮了祖祠，牌位上的名字在火中扭曲。你听见无数女子的哭声，从火光里传出来。

"你烧了我们的名字！" 她们哭喊，"我们连鬼都做不成了！"

你愣住了。你本想毁掉周家的罪证，却连她们最后的痕迹也烧掉了。

火势蔓延到牌位上，整个祖祠开始燃烧。你想逃，却发现门已经被黄符封死。

[red]你和周家的秘密，一起化成了灰。[/red]`,
    effects: {
        sanity: -20,
        yin: 10
    },
    ending: 'huimen_exp_forgotten'
};

StoryData.huimen_exp_ancestor_judge_scene = {
    title: '祖先',
    text: `你跪在牌位前，重重磕了三个头。

"列祖列宗，秀兰之冤，周家之过。我愿替她正名，求你们放过周家后人。"

牌位后的阴影开始聚拢，化作一个个模糊的人形。最老的那个人形走到你面前，它的脸是一团黑雾，只有眼睛是两颗燃烧的纸钱。

"放过？" 它说，"周家男人活不过四十，不是诅咒，是报应。你想替她正名，就拿你的命来换。"

它朝你伸出手。那只手不是骨头，是无数根红绳缠成的。`,
    effects: {
        sanity: -15,
        yin: 5
    },
    choices: [
        {
            text: '答应以命换命',
            ending: 'huimen_exp_ancestor_judge',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '拒绝，冲出祖祠',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 3 }
        }
    ]
};

StoryData.huimen_exp_erase_name = {
    title: '抹名',
    text: `你把香灰涂在刻着自己名字的牌位上。

香灰触到木头的瞬间，发出"嗤嗤"的声响，像是什么东西被腐蚀了。你的名字渐渐模糊，最后变成一团灰白色的痕迹。

牌位后的阴影发出愤怒的嘶吼："你敢抹掉自己的名字！"

"我不是周家的祭品。" 你说，"我是来还债的，不是来献命的。"

你把那块牌位从架子上取下来，在地上摔碎。碎木片里掉出一张黄符，符上写着你的生辰八字。

你捡起黄符，撕成两半。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '香灰',
        setFlag: 'huimen_exp_erased_name'
    },
    choices: [
        {
            text: '离开祖祠',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_tree = {
    title: '老桑树',
    text: `你来到村口的老桑树下。

桑树很高，树冠遮住了半边天。树干上缠满了红绳，每一根红绳的另一端都系着一个小布包，布包里装着指甲、头发、乳牙。

这是村里人用来"借命"的东西。

你伸手摸了摸树干，树皮粗糙，却带着一点温度，像人的皮肤。

[whisper]"你来了。"[/whisper] 秀兰的声音从树洞里传出来，"最后一份魂，就在这里。"

树洞里黑漆漆的，有一缕头发垂在外面。那缕头发很长，一直拖到地上，发梢还系着一根红绳。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '伸手去取那缕头发',
            next: 'huimen_exp_mulberry_tree_hole',
            effects: { yin: 2 }
        },
        {
            text: '绕着树走一圈',
            next: 'huimen_exp_mulberry_shadow',
            effects: { yin: 1 }
        },
        {
            text: '解开一根红绳看看',
            next: 'huimen_exp_untie_red_string',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '抬头看树冠里的鸟巢',
            next: 'huimen_exp_mulberry_nest',
            effects: { yin: 2 }
        },
        {
            text: '观察树上缠绕的银丝',
            next: 'huimen_exp_mulberry_silk',
            condition: { flag: 'huimen_exp_knows_three_souls' },
            effects: { yin: 1 }
        },
        {
            text: '挖开树根下的泥土',
            next: 'huimen_exp_mulberry_root',
            condition: { flag: 'huimen_exp_released_mulberry_soul' },
            effects: { yin: 1 }
        },
        {
            text: '离开，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_tree_hole = {
    title: '树洞',
    text: `你把手伸进树洞。

树洞里很暖，不像外面那么阴冷。你的手指触到那缕头发，头发像是有生命一样缠上你的手腕。

你没有害怕，而是轻轻握住它。

[whisper]"你不怕我？"[/whisper] 秀兰问。

"怕。" 你说，"但我也知道，你等了三十年，等的不是一个怕你的人。"

头发渐渐松开你的手腕，化作一道红光，钻进你心口。你感到三份魂终于归一，胸口的压抑彻底消散。

[red]桑树的叶子开始沙沙作响，像是在笑，又像是在哭。[/red]`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_released_mulberry_soul'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '三魂已归一，带秀兰离开',
            next: 'huimen_exp_redemption_loop',
            condition: { flag: 'huimen_exp_restored_xiulan_name_in_hall' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_mulberry_shadow = {
    title: '树影',
    text: `你绕着桑树走了一圈。

树干背面有一道裂缝，裂缝里渗出红色的汁液，像血。你凑近看，发现裂缝里刻着一张人脸。

那张脸很年轻，是个女子。她的眼睛闭着，嘴角却微微上扬，像是在做一个安详的梦。

[whisper]"我是秀兰的姐妹。"[/whisper] 裂缝里的脸说，"周家不止害了她一个。"

你想再问，裂缝却合上了。树干上只剩下一道浅浅的痕迹，像一道泪痕。

你后退一步，发现地上落满了桑叶。每片叶子上都写着一个名字，都是女子的名字。`,
    effects: {
        sanity: -8,
        yin: 2,
        setFlag: 'huimen_exp_saw_mulberry_sisters'
    },
    choices: [
        {
            text: '把桑叶收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '桑叶' }
        },
        {
            text: '离开桑树',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_untie_red_string = {
    title: '解绳',
    text: `你解开一根红绳。

红绳落下的瞬间，树上的小布包"啪"地一声打开，里面掉出一枚发黑的乳牙。乳牙落地，化为一个透明的小孩。

小孩看着你，没有眼睛，只有两个黑洞。

"你把我的命还我了？" 他问。

你点点头。

小孩笑了，露出没有牙的嘴："那我也帮你一次。"

他飘到桑树前，对着树洞吹了一口气。树洞里飞出无数萤火虫，照亮了整棵树。

[red]你看见树干上刻满了名字，都是那些被"借命"的女子。[/red]`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp_freed_child_spirit'
    },
    choices: [
        {
            text: '谢谢小孩，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_release = {
    title: '桑魂归',
    text: `你回到桑树下，对着树洞说："秀兰，最后一份魂，我来还你。"

树洞里伸出一只苍白的手，手里握着那缕长发。你接过头发，感到三股力量在你体内汇合。

井水的寒凉、庙钟的沉郁、桑树的柔韧，三种感觉交织在一起，最后化作一声悠长的叹息。

秀兰的身影在你面前凝实。她没有盖头，没有血泪，穿着一身普通的布衣，只是一个清清秀秀的姑娘。

"三魂归一，我可以走了。" 她说，"但你呢？你愿意跟我一起走吗？"

[red]她的眼神里没有怨，只有一丝不舍。[/red]`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_released_mulberry_soul'
    },
    choices: [
        {
            text: '牵她的手，带她离开',
            next: 'huimen_exp_redemption_loop',
            condition: { flag: 'huimen_exp_restored_xiulan_name_in_hall' },
            effects: { yin: -5 }
        },
        {
            text: '送她走，自己留下',
            next: 'huimen_exp_mulberry_guard',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '回村街再想想',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins = {
    title: '废墟',
    text: `你来到一座塌了半边的土屋前。

屋顶的茅草已经腐烂，墙根处长满了青苔。门框上贴着一张褪色的黄符，符上的字被雨水冲得模糊不清。

你跨进门，脚下的瓦砾发出碎裂的声响。屋里有一张倒了的木床，床上散落着几件小衣服，都是婴儿的衣裳。

[red]一件小红肚兜上绣着一个"元"字。[/red]

你捡起肚兜，感到一阵刺骨的寒意。这不是普通的寒意，是小孩子特有的、湿漉漉的冷。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '小红肚兜'
    },
    choices: [
        {
            text: '查看床底',
            next: 'huimen_exp_ruins_cellar',
            effects: { yin: 2 }
        },
        {
            text: '寻找屋里的日记',
            next: 'huimen_exp_ruins_diary',
            effects: { yin: 1 }
        },
        {
            text: '翻找其他婴儿衣物',
            next: 'huimen_exp_ruins_baby_clothes',
            effects: { yin: 1 }
        },
        {
            text: '在墙缝里找信',
            next: 'huimen_exp_ruins_letter',
            condition: { flag: 'huimen_exp_read_xiulan_diary' },
            effects: { yin: 1 }
        },
        {
            text: '在瓦砾里找镜子',
            next: 'huimen_exp_ruins_mirror',
            effects: { yin: 2 }
        },
        {
            text: '把肚兜放回原处',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -3, removeItem: '小红肚兜' }
        }
    ]
};

StoryData.huimen_exp_ruins_cellar = {
    title: '地窖',
    text: `你掀开床板，下面露出一个黑漆漆的地窖。

地窖里有一股霉味和血腥气混合的味道。你摸索着下去，脚踩到一堆软软的东西。

你蹲下身，发现那是许多已经腐烂的纸人。纸人的脸上都画着同一个女子的模样——秀兰。

[whisper]"她们扎了无数替身，想让她认错。"[/whisper]

地窖尽头有一口小棺材，棺材上刻着"周氏不祥女之灵"。你打开棺材，里面没有尸骨，只有一把生锈的剪刀。

剪刀上缠着一缕长发，发丝根根分明，像刚剪下来不久。`,
    effects: {
        sanity: -10,
        yin: 3,
        addItem: '缠发剪刀'
    },
    choices: [
        {
            text: '用剪刀剪断手腕上的红绳',
            next: 'huimen_exp_cut_red_string',
            effects: { sanity: 5, yin: -10 }
        },
        {
            text: '把剪刀收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_diary = {
    title: '残日记',
    text: `你在瓦砾里翻出一本烧焦了一半的日记。

日记的主人叫"周秀兰"，字迹娟秀。你翻到中间一页：

[faded]"今日胎动，喜忧参半。他说会娶我，会带我走。我信他。"
[/faded]

[faded]"他们发现了。婆母说我是周家的耻辱。他们把门板钉死，把我拖到井边。我求他救我，他站在人群后面，没有看我。"
[/faded]

[faded]"井水好冷。孩子还在踢我。我用指甲在井壁上刻字，刻到指甲都翻了。我想让后来的人知道，我不是病死的。"
[/faded]

最后一页只有一行字：

[red]"若有来生，不做周家人。"[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_read_xiulan_diary'
    },
    choices: [
        {
            text: '把日记带在身上',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '秀兰日记' }
        },
        {
            text: '把日记埋在废墟里',
            next: 'huimen_exp_bury_diary',
            effects: { sanity: 5, yin: -5 }
        }
    ]
};

StoryData.huimen_exp_bury_diary = {
    title: '埋日记',
    text: `你在废墟墙角挖了一个小坑，把烧焦的日记放进去。

"秀兰，" 你说，"你的委屈，我知道了。我会让更多人知道。"

你捧起土，盖在日记上。土落下的瞬间，你听见一声很轻很轻的"谢谢"，像是从很远的地方传来。

废墟里的纸人忽然安静下来。它们脸上的墨点眼睛似乎不再那么阴森，而像是……闭上了。

你站起身，感到胸口轻松了许多。`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_cut_red_string = {
    title: '断绳',
    text: `你用缠发剪刀剪向手腕。

剪刀没有碰到皮肉，却剪断了一根看不见的红绳。红绳断裂的瞬间，你听见村子里传来无数声惊呼。

"他剪断了！"

"周家的命线断了！"

你低头看自己的手腕，那里原本有一圈红印，现在红印消失了，只剩下一道浅浅的白痕。

[red]你不再是周家用来抵债的祭品了。[/red]

废墟外传来纸钱纷飞的声音，但你一点也不怕。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '缠发剪刀',
        setFlag: 'huimen_exp_cut_fate_string'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_path = {
    title: '月光路',
    text: `你顺着月光照出的小路走。

小路很窄，两旁是及腰的野草。野草里藏着许多东西：破碎的瓷碗、生锈的铜镜、褪色的红绸带。

月光把路面照得像一条银白色的河。你踩上去，脚下会泛起一圈圈涟漪，但路面是干的。

[whisper]"这条路是秀兰的记忆。"[/whisper]

你看见路边有一座小石桥，桥下有流水声。可桥下没有水，只有一层薄薄的纸灰。

纸灰上印着脚印，很小，是女人的脚印。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '跟着脚印走',
            next: 'huimen_exp_moonlit_path_end',
            effects: { yin: 2 }
        },
        {
            text: '过桥看看',
            next: 'huimen_exp_moonlit_bridge',
            effects: { yin: 2 }
        },
        {
            text: '路边有座孤坟',
            next: 'huimen_exp_moonlit_grave',
            effects: { yin: 1 }
        },
        {
            text: '继续走到河边',
            next: 'huimen_exp_moonlit_river',
            condition: { flag: 'huimen_exp_named_xiulan_on_bridge' },
            effects: { yin: 2 }
        },
        {
            text: '小路在前方分成两条',
            next: 'huimen_exp_moonlit_path_fork',
            condition: { flag: 'huimen_exp_truly_saw_xiulan' },
            effects: { yin: 2 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_bridge = {
    title: '石桥',
    text: `你走上石桥。

桥面很滑，像涂了一层油脂。你扶着桥栏，发现桥栏上刻满了名字，都是女子的名字，密密麻麻，一直刻到桥的另一端。

桥下有东西在动。

你探头一看，桥下不是纸灰，而是无数张仰着的脸。它们没有身体，只有脸，像莲花一样浮在黑暗里。

"过桥的人，要留下名字。" 它们一起说。

你感到桥栏上有力量在吸你的手。如果你再不松手，你的名字也会被刻上去。`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '咬破手指，在桥栏上写秀兰的名字',
            next: 'huimen_exp_bridge_name',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '奋力挣脱，跑过桥去',
            next: 'huimen_exp_moonlit_path_end',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '退回桥头',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_bridge_name = {
    title: '刻名',
    text: `你咬破手指，在桥栏上写下"周氏秀兰"。

血字渗入石头，桥下的脸发出一阵骚动。它们纷纷仰起头，像是在辨认这个名字。

"秀兰……秀兰……" 它们喃喃，"她终于有人记得了。"

桥栏上的吸力消失了。你收回手，发现桥栏上别的名字开始褪色，而"周氏秀兰"四个字越来越清晰。

[red]你帮秀兰在桥上占了位置，也帮其他被遗忘的女子开了一扇门。[/red]

桥下传来轻轻的笑声，不再是阴森的，而是带着一点释然。`,
    effects: {
        sanity: 5,
        yin: -8,
        setFlag: 'huimen_exp_named_xiulan_on_bridge'
    },
    choices: [
        {
            text: '继续往前走',
            next: 'huimen_exp_moonlit_path_end',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_path_end = {
    title: '路尽',
    text: `你走到小路尽头。

那里有一扇纸门，门上画着秀兰的像。她盖着红盖头，盖头下露出一双眼睛，正看着你。

"你走到这里了。" 她说，"再往前，就是出村的路。"

你伸手去推门，纸门却像有生命一样贴在你手上。门上的秀兰开口说话：

"出去可以。但你要答应我一件事。"

[whisper]"每年七月半，回来看我一眼。"[/whisper]

[red]你意识到，这不是出口，是一个约定。[/red]`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '答应她',
            next: 'huimen_exp_moonlit_escape',
            effects: { sanity: 3, yin: -5 }
        },
        {
            text: '拒绝，转身回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_moonlit_escape = {
    title: '月下离村',
    text: `你答应了秀兰。

纸门轻轻打开，月光像水一样涌进来。你踏出门，发现自己站在村口的石板路上，身后是沉睡的山村。

天边泛起鱼肚白。纸人们倒在路边，像被风吹倒的稻草人。

你没有回头，一直往前走。你知道秀兰在看着你，但她的目光不再是冷的。

[whisper]"记得回来。"[/whisper]`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '独自离开',
            ending: 'huimen_exp_moonlit_escape',
            effects: { yin: -1 }
        },
        {
            text: '带秀兰一起走',
            ending: 'huimen_exp_ending_flower_rain',
            condition: { flag: 'xiulanMercy' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_redemption_loop = {
    title: '带她走',
    text: `你牵起秀兰的手。

她的手很凉，却没有先前那种刺骨的寒意。你们沿着月光小路走，纸门在你们身后一扇扇打开，又关闭。

走到村口时，秀兰停下脚步，回头望了望村子。

"三十年了。" 她说，"我终于可以走了。"

你把她的手攥得更紧。你们一起走出山村，走向天光。

村口的老桑树在你们身后轻轻摇晃，像是在道别。`,
    effects: {
        sanity: 20,
        yin: -20
    },
    ending: 'huimen_exp_redemption_loop'
};

StoryData.huimen_exp_mulberry_guard = {
    title: '守树人',
    text: `你松开秀兰的手。

"你走吧。" 你说，"我留下来，守着这棵桑树。守着周家欠下的所有名字。"

秀兰看着你，眼泪落了下来。她的眼泪是红色的，滴在桑树根上，树根发出一阵温暖的颤动。

"傻子。" 她说，"你会变成树的。"

"那就变成树吧。" 你说，"至少，比变成纸人强。"

秀兰化作红光消散。你靠着桑树坐下，感到自己的双脚正在生根，双手正在变作树枝。

你不害怕。你听见风里有许多女子的声音在说话，她们终于有人听了。`,
    effects: {
        sanity: -5,
        yin: 5
    },
    ending: 'huimen_exp_mulberry_guard'
};

// 小鬼相关场景
StoryData.huimen_exp_little_boy = {
    title: '元宝',
    text: `井水里浮出一个小小的身影。

是个男孩，穿着红肚兜，扎着冲天辫。他的脸很白，眼睛却很大，黑漆漆的，像两颗浸在水里的珠子。

"我叫元宝。" 他说，"是秀兰姐姐的弟弟……也不是。我是她没出世的孩子，被井水冲出来的一缕魂。"

他爬上井沿，坐在你旁边，脚一晃一晃的。

"姐姐太苦了。她每天都在哭，哭到整个村子都下雨。你能让她不哭吗？"

你看着他，心里忽然没那么怕了。`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '陪他玩一会儿',
            next: 'huimen_exp_play_with_boy',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '问他怎么才能救秀兰',
            next: 'huimen_exp_boy_advice',
            effects: { yin: 1 }
        },
        {
            text: '离开井边',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_play_with_boy = {
    title: '踢毽子',
    text: `你捡起地上的纸钱，折成一个纸毽子。

元宝高兴地跳起来："陪我踢！"

你们就在井边踢起了毽子。元宝踢得很高，纸毽子在空中翻飞，像一只白色的鸟。

你忽然发现，每踢一下，井水的红色就淡一分。元宝的笑声像铃铛一样，把井底的阴气一点点敲散。

"你是好人。" 元宝说，"我帮你一次。"

他朝你吹了一口气，你感到胸口的压抑轻了许多。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_boy_friendly'
    },
    choices: [
        {
            text: '问他愿意跟你走吗',
            next: 'huimen_exp_little_boy_friend',
            effects: { yin: -3 }
        },
        {
            text: '送他回井里',
            next: 'huimen_exp_village_street',
            effects: { sanity: 5, yin: -2 }
        }
    ]
};

StoryData.huimen_exp_boy_advice = {
    title: '鬼孩的指点',
    text: `元宝歪着头想了想说："姐姐最怕一个人。"

"她一个人被埋在井底，一个人生孩子，一个人死。你们周家的人，都把她当耻辱，没人陪她。"

"你要是想让她不哭，就陪她坐一夜。不要说话，不要烧纸，不要成亲。就坐着。"

他伸出小手，指了指井沿："坐在这里，她就能看见你。"

[red]你忽然明白了，秀兰要的不是仪式，是被看见。[/red]`,
    effects: {
        sanity: 3,
        yin: -3,
        setFlag: 'huimen_exp_knows_sit_with_xiulan'
    },
    choices: [
        {
            text: '坐在井边陪她',
            next: 'huimen_exp_sit_with_xiulan',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_sit_with_xiulan = {
    title: '静坐',
    text: `你坐在井边，一句话也不说。

井水开始翻涌，一个女子的身影浮出来。她趴在井沿上，看着你，眼神里满是疲惫。

你们就这样对视了很久。

"你不怕我？" 她终于问。

"怕。" 你说，"但我不想再逃了。"

秀兰的眼泪落进井里，却没有让井水变红，而是化作一圈圈涟漪，慢慢散开。

"三十年，" 她说，"你是第一个愿意坐下来的人。"`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp_sat_with_xiulan'
    },
    choices: [
        {
            text: '问她愿不愿意离开',
            next: 'huimen_exp_ask_leave',
            effects: { yin: 1 }
        },
        {
            text: '继续坐着',
            next: 'huimen_exp_well_whisper_truth',
            effects: { sanity: 5, yin: -5 }
        }
    ]
};

StoryData.huimen_exp_ask_leave = {
    title: '问她',
    text: `你问："你愿意离开这里吗？"

秀兰沉默了很久。她低下头，看着井水里自己的倒影。

"我走了，谁会记得我？" 她说，"周家不会承认我，村子不会承认我。我连个名字都没有。"

"我记得。" 你说，"我会把你的名字写下来，告诉所有人。"

秀兰抬起头，眼眶里有红色的泪光："你发誓？"

"我发誓。"

她伸出手，那只苍白的手穿过你的身体，你没有感到冷，而是感到一阵温暖。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'xiulanMercy'
    },
    choices: [
        {
            text: '带她回老宅，走 redemption',
            next: 'huimen_exp_return_bury_xiulan',
            effects: { yin: -5 }
        },
        {
            text: '先回村街准备',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_whisper_truth = {
    title: '井语成录',
    text: `你继续坐着，听秀兰说话。

她从十六岁说起，说到怎么认识你祖父，怎么怀上孩子，怎么被周家人拖到井边。她说得很慢，很平静，像是在讲别人的故事。

你掏出手机，打开录音。山里没有信号，但录音功能还能用。

"你录这个干嘛？" 她问。

"让更多人听见。" 你说。

秀兰愣了一下，然后笑了。那是你第一次看见她笑，笑得像个普通的姑娘。

"好。" 她说，"那我继续讲。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_recorded_xiulan'
    },
    ending: 'huimen_exp_well_whisper_truth'
};

StoryData.huimen_exp_little_boy_friend = {
    title: '伴行',
    text: `元宝眨眨眼睛："你真的愿意带我走？"

"愿意。" 你说。

他高兴得跳起来，化作一道青光钻进你的影子里。你低头看自己的影子，发现它比往常浓了一些，像是有个小男孩牵着你的衣角。

"我会保护你的。" 元宝的声音从你影子里传出来，"纸人不敢靠近我了。"

你走出山村时，天边已经亮了。你的影子在地上拉得很长，里面似乎藏着一个小小的笑声。`,
    effects: {
        sanity: 10,
        yin: -10
    },
    ending: 'huimen_exp_little_boy_friend'
};

// 随机遭遇场景
StoryData.huimen_exp_old_woman = {
    title: '卖纸老妇',
    text: `你在巷子里遇见一个老妇。

她推着一辆木车，车上堆满了纸钱、纸人、纸衣。她看见你，咧嘴笑了，露出没有牙的牙龈。

"买张脸吧？" 她说，"你的脸太像周家的人了，不吉利。买张新脸，秀兰就认不出你。"

她拿起一张黄纸，纸上画着一张陌生的男人的脸。

"这张好，" 她说，"是个读书人，死在科举那年，怨气不重。"

[red]你看着那张脸，觉得它在对你眨眼。[/red]`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '买张脸',
            next: 'huimen_exp_buy_face',
            effects: { sanity: -5, yin: 3, addItem: '纸脸' }
        },
        {
            text: '拒绝',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2 }
        },
        {
            text: '问她秀兰的事',
            next: 'huimen_exp_ask_old_woman',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_buy_face = {
    title: '换脸',
    text: `你接过纸脸，贴在脸上。

纸脸像有生命一样吸住你的皮肤，你感到自己的五官在移动、重塑。片刻后，你摸了摸脸，已经变成了另一个人的模样。

老妇满意地点点头："好了，秀兰认不出你了。"

可你低头看自己的手，发现手腕上那根红绳还在，勒得更紧了。

[red]脸可以换，债换不了。[/red]`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp_wearing_paper_face'
    },
    choices: [
        {
            text: '把纸脸撕下来',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: -3, removeItem: '纸脸' }
        },
        {
            text: '戴着纸脸继续走',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_ask_old_woman = {
    title: '老妇人的话',
    text: `老妇叹了口气，放下手里的纸人。

"秀兰啊，是个苦命的孩子。她本可以嫁到镇上当教书先生的太太，可偏偏看上了周家少爷。"

"周家少爷也是真心喜欢她的，但他护不住她。周家的女人，从来只分两种：有用的，和活埋的。"

她从车里翻出一张旧照片递给你。照片上是年轻的秀兰，穿着学生装，笑得很甜。

"拿着吧。" 她说，"让她看见自己以前的样子，也许就不那么恨了。"`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '秀兰旧照片'
    },
    choices: [
        {
            text: '把照片给秀兰看',
            next: 'huimen_exp_show_xiulan_photo',
            condition: { hasItem: '秀兰旧照片' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好照片，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_show_xiulan_photo = {
    title: '旧照',
    text: `你拿出照片，对着空气说："秀兰，这是你的照片。"

一阵风吹过，照片从你手里飞出去，悬在半空中。照片里的秀兰开始动，她眨了眨眼，然后笑了。

"我都忘了，我以前长这样。" 她的声音从照片里传出来，"那时候，我还想着要考女校呢。"

照片缓缓落到你手里，背面多了一行字：

[faded]"愿来生，生于寻常人家。"[/faded]

你感到照片上的温度，像是一个人的体温。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰旧照片',
        setFlag: 'huimen_exp_showed_photo'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_singing_woman = {
    title: '夜歌',
    text: `你听见有人在唱歌。

歌声从远处传来，婉转凄凉，是一段你听不清词的古曲。你顺着歌声走，来到一座破败的戏台前。

戏台上站着一个穿红戏服的女子，水袖垂到地面。她没有脸，只有一团模糊的白影，但唱腔却清清楚楚：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

你想起村口旧报纸上的话：青石镇戏台，鬼戏又唱。

[red]这不是青石镇，但戏却是一样的戏。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '鼓掌',
            next: 'huimen_exp_singing_woman_bow',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '问她是谁',
            next: 'huimen_exp_singing_woman_ask',
            effects: { yin: 2 }
        },
        {
            text: '悄悄离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_singing_woman_bow = {
    title: '谢幕',
    text: `你鼓起掌来。

戏台上的女子停住了。她缓缓转向你，虽然没有脸，你却感到她在"看"你。

"有活人的掌声……" 她说，"三十年没有了。"

她朝你深深一福，水袖拂过戏台边缘。戏台开始崩塌，砖瓦像纸一样飘落。

"告诉秀兰，" 她说，"戏散场了，该回家了。"

她化作一道红光，飞向井的方向。`,
    effects: {
        sanity: 5,
        yin: -8,
        setFlag: 'huimen_exp_singer_released'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_singing_woman_ask = {
    title: '问名',
    text: `你问："你是谁？"

戏台上的女子沉默了一会儿，然后轻轻笑了。

"我是谁？" 她说，"我是被周家活埋的第十七个女子。秀兰是第十八个。"

"我们本来互不相识，死后却成了姐妹。她唱不了戏，我替她唱。我报不了仇，她替我报。"

她抬起水袖，指向村子深处："周家的罪，比你想的深。你若只救秀兰一个，是不够的。"

说完，她化作纸灰，散落在戏台上。`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_knows_seventeen_women'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_red_lantern = {
    title: '红灯笼',
    text: `巷子尽头亮起一盏红灯笼。

灯笼在雾里飘，没有提灯笼的人。你跟着它走，发现它停在一扇朱门前。

门自动开了，里面是一间喜房。床上坐着一个盖着红盖头的新娘，她的手腕上系着红绳，红绳的另一端消失在床底。

"进来吧。" 新娘说，"拜了堂，你就是周家的人了。"

[red]你不想进去，可灯笼的光把你往里拉。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '转身就跑',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 2 }
        },
        {
            text: '把灯笼吹灭',
            next: 'huimen_extinguish_lantern',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '问新娘是不是秀兰',
            next: 'huimen_exp_red_lantern_bride',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_extinguish_lantern = {
    title: '吹灯',
    text: `你深吸一口气，吹向红灯笼。

灯笼没有灭，火苗反而窜起三尺高。火光里，你看见无数张脸在尖叫，都是被红灯笼困住的魂。

"你吹不灭。" 新娘说，"这灯笼烧了三十年的脂油，是你的血亲供的。"

你咬破手指，把血弹向灯笼。

"嗤"的一声，火苗熄灭了。灯笼纸迅速焦黑，化作灰烬落下。

新娘发出一声哀鸣，红盖头飘落，露出一张和你一模一样的脸。`,
    effects: {
        sanity: -5,
        yin: -5
    },
    choices: [
        {
            text: '趁她愣住，逃离',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_red_lantern_bride = {
    title: '新娘',
    text: `你问："你是秀兰吗？"

新娘沉默了很久，然后缓缓摇头。

"我不是秀兰。我是秀兰之前的新娘，也是秀兰之后的新娘。" 她说，"周家每隔几年就要娶一个，秀兰是最有名的一个，但不是唯一一个。"

她掀开盖头，露出一张腐烂的脸："你想救她，就救救我们所有人。"

她把红绳递到你面前："剪断它。"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '用缠发剪刀剪断红绳',
            next: 'huimen_exp_cut_bride_string',
            condition: { hasItem: '缠发剪刀' },
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '没有剪刀，用手解',
            next: 'huimen_exp_village_ghost',
            effects: { sanity: -10, yin: 5 }
        }
    ]
};

StoryData.huimen_exp_cut_bride_string = {
    title: '断红绳',
    text: `你用剪刀剪断了新娘手腕上的红绳。

红绳断裂的瞬间，新娘发出一声长长的叹息。她的腐烂开始消退，露出一张清秀的脸。

"谢谢你。" 她说，"我终于可以走了。"

她化作一道白光，从窗户飞出去。屋子里其他的红灯笼一盏盏熄灭，每一盏熄灭时，都传来一声解脱的叹息。

你走出朱门，发现巷子里的雾淡了许多。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '缠发剪刀'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_ghost = {
    title: '化鬼',
    text: `你用手去解红绳。

红绳像活物一样缠上你的手指，越缠越紧，最后勒进肉里。你感到自己的血被红绳吸走，意识开始模糊。

新娘的脸凑近你："你解不开的。这是周家男人的命。"

你想挣扎，却发现自己动不了。你的皮肤在变纸，关节在变脆，嘴角在上扬。

[red]你成了新的新娘替身。[/red]

红灯笼重新亮起，喜房里传出唢呐声。`,
    effects: {
        sanity: -20,
        yin: 10
    },
    ending: 'huimen_exp_village_ghost'
};

StoryData.huimen_exp_dog_bark = {
    title: '犬吠',
    text: `你经过一户人家，听见里面有狗叫。

狗叫声很凄厉，不像看家，像在哭。你凑到门缝前，看见院子里蹲着一只黑狗，黑狗的眼睛是红色的。

黑狗看见你，不叫了。它站起来，走到门边，用爪子扒门。

"你想出来？" 你问。

黑狗点点头。

你推开门，黑狗冲出来，却没有跑远，而是围着你转了三圈，然后朝村外跑去。

[red]它跑的方向，是秀兰的坟。[/red]`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '跟着黑狗',
            next: 'huimen_exp_follow_dog',
            effects: { yin: 1 }
        },
        {
            text: '不管它，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_follow_dog = {
    title: '引路',
    text: `你跟着黑狗跑。

黑狗跑得不快，时不时回头看看你。它带你绕过纸人聚集的巷子，穿过一片坟地，最后停在一座无字碑前。

无字碑上浮现出血字：

[faded]"秀兰之骨，分埋三处。井底一，庙中一，桑下一。"[/faded]

黑狗对着无字碑叫了三声，然后趴在地上，不动了。

你蹲下身，发现它已经变成了一尊石狗。`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_knows_bone_locations'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_fox_fire = {
    title: '狐火',
    text: `村外的坟地里飘起几团绿色的火焰。

火焰忽高忽低，像是有生命一样在坟头跳跃。你想起老人讲过的狐火，说那是狐狸引路的灯笼。

一团狐火飘到你面前，停住。火光里，你看见一只狐狸的轮廓。它朝你摇了摇尾巴，然后朝树林深处跑去。

[whisper]"跟上。"[/whisper] 一个声音说，"它知道出村的路。"[/whisper]

可你也听说过，跟狐火走的人，多半回不来。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '跟着狐火',
            next: 'huimen_exp_follow_fox_fire',
            effects: { yin: 2 }
        },
        {
            text: '不跟，回村街',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -1 }
        }
    ]
};

StoryData.huimen_exp_follow_fox_fire = {
    title: '狐径',
    text: `你跟着狐火走进树林。

树林里的小路不是石板路，而是落叶铺成的。每走一步，脚下的落叶就会发出"沙沙"的声响，像有人在低语。

狐火停在一棵大树下。树洞里有一面铜镜，镜子里映出的不是树林，而是村子。

"你想出去？" 狐狸的声音问，"还是想留下？"

[red]镜子里的村子正在燃烧，纸人在火中跳舞。[/red]

"这是秀兰的怨念烧起来的样子。" 狐狸说，"你出去，村子就烧。你留下，村子就还在。"`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '出去，让村子烧',
            next: 'huimen_exp_fox_fire_escape',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '留下，找别的办法',
            next: 'huimen_exp_village_street',
            effects: { sanity: 5, yin: -3 }
        }
    ]
};

StoryData.huimen_exp_fox_fire_escape = {
    title: '狐火引路',
    text: `你踏进了铜镜。

镜面像水一样包裹住你，你感到自己在下坠。下坠了很久，你落在村口的石板路上。

身后，村子正在燃烧。纸人在火中尖叫，化为灰烬。你看见秀兰站在井边，看着这场大火，脸上没有表情。

"你选了最轻松的路。" 她说，"但也是最无情的路。"

你没有回头。你沿着山路一直走，直到天亮。

可你再也没有梦见过秀兰。你只梦见火，梦见纸人在火里跳舞，梦见它们的脸都是你的脸。`,
    effects: {
        sanity: -10,
        yin: 10
    },
    ending: 'huimen_exp_moonlit_escape'
};

StoryData.huimen_exp_wedding_procession = {
    title: '迎亲队',
    text: `你听见唢呐声。

一队纸人抬着红轿子从巷子里出来，吹鼓手也是纸人，唢呐里没有气，却发出凄厉的乐声。

纸人们看见你，停了下来。

"新郎官，上轿吧。" 为首的纸人说。

轿帘掀开，里面坐着一个盖着红盖头的人。盖头下伸出一只苍白的手，朝你招了招。

[red]你不上去，它们就不走。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
        visual: 'paper-doll',
        visualDuration: 2000
    },
    choices: [
        {
            text: '掀翻轿子',
            next: 'huimen_exp_overturn_palanquin',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '把纸人引到纸扎铺',
            next: 'huimen_exp_lead_to_paper_shop',
            condition: { flag: 'huimen_exp_burned_paper_faces' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '上轿',
            next: 'huimen_exp_enter_palanquin',
            effects: { sanity: -15, yin: 5 }
        }
    ]
};

StoryData.huimen_exp_overturn_palanquin = {
    title: '掀轿',
    text: `你冲上去，掀翻了红轿子。

轿子落地，里面的新娘滚了出来。盖头滑落，露出一张腐烂的脸——不是秀兰，是一个你不认识的老妇人。

"不是你？" 纸人们发出失望的叹息，"不是你……"

它们开始融化，像被雨淋湿的纸人一样瘫软在地上。轿子也塌了，变成一堆红黄相间的纸。

老妇人的魂飘起来，朝你鞠了一躬："谢谢。我等了三十年，终于有人敢掀轿了。"`,
    effects: {
        sanity: -5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_lead_to_paper_shop = {
    title: '引火',
    text: `你转身朝纸扎铺跑，纸人们抬着空轿子追你。

你冲进铺子，抓起一盏油灯砸向那些纸人。纸人们浑身是浆糊，一点就着。火势迅速蔓延，把整个铺子吞没。

你逃出铺子，回头一看，纸人们在火中扭动，发出婴儿般的哭声。

[red]你烧了周家三十年的替身。[/red]

火焰里，许多模糊的身影站起来，朝你鞠躬，然后消散在夜空中。`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp_burned_paper_shop'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '火势蔓延到整个村子，让一切化为灰烬',
            ending: 'huimen_exp_ending_paper_doll_burned',
            condition: { flag: 'huimen_exp_burned_paper_shop' },
            effects: { yin: 5 }
        }
    ]
};

StoryData.huimen_exp_enter_palanquin = {
    title: '上轿',
    text: `你上了轿子。

轿帘落下，里面很黑。新娘坐在你旁边，盖头下的呼吸喷在你脖子上，冰凉。

"你终于来了。" 她说，"我等了你好久。"

她靠在你身上，你感到自己的体温在被吸走。你的手脚开始变纸，皮肤开始发白。

[red]你明白了，上轿的人，都会变成新的纸人新郎。[/red]

轿子外，唢呐声越来越响，像在庆祝一场迟到三十年的婚礼。`,
    effects: {
        sanity: -20,
        yin: 10
    },
    ending: 'huimen_exp_paper_doll'
};

// 返回主线的过渡场景
StoryData.huimen_exp_return_old_house = {
    title: '回老宅',
    text: `你深吸一口气，转身朝老宅走去。

身后的村街像退潮一样远去，纸钱、白灯笼、纸人，都渐渐模糊。你推开老宅的门，堂屋里的红烛还在燃烧，亲戚们还跪在那里。

二叔抬起头："你去哪了？吉时要到了。"

你摇摇头，没有回答。你知道自己刚才去过另一个村子，一个藏在怨气里的村子。

[red]但现在，你回到了主线上。[/red]

你还有机会改变结局。`,
    effects: {
        sanity: 3,
        yin: 1
    },
    choices: [
        {
            text: '继续主线',
            next: 'to_old_house',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_return_coffin = {
    title: '回堂屋',
    text: `你回到堂屋。

棺材还摆在正中，倒挂的囍字还在墙上。二叔、三姑、四婶转过头看你，嘴角依然挂着那种统一的笑。

"想通了？" 二叔问，"想通了就拜堂。"

你握紧拳头。你刚从另一个村子回来，你知道了更多真相。秀兰不是耻辱，是被害的人。周家的债，不该用你的生命来还。

[red]你决定从棺材这条线继续。[/red]`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '继续主线',
            next: 'ask_coffin',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_return_well = {
    title: '回井边',
    text: `你来到老宅后院。

井边的铜镜碎片还在，井水幽深。你蹲下身子，水面映出你的脸，也映出秀兰的影子。

"你回来了。" 她说。

你点点头。你已经去过村子的另一面，见过她的另一部分。现在，你回到真正的井边，准备面对真正的她。

[red]你还有机会用铜镜照她，或者听她说话。[/red]`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '继续主线',
            next: 'mirror_well',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_return_red_coffin = {
    title: '回红棺',
    text: `你顺着井绳下到井底。

红漆棺材还在，九根桃木钉封着棺盖。你摸了摸胸口的铜钥匙，知道是时候了。

秀兰的三份魂已经在另一个村子归一，但她真正的尸骨和怨念，还封在这口红棺里。

[red]开棺，是结束一切的钥匙。[/red]`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '继续主线',
            next: 'open_red_coffin',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_return_bury_xiulan = {
    title: '去安葬',
    text: `你抱着秀兰的嫁衣，向后山走去。

天边的鱼肚白越来越亮。纸人们站在村口，没有追来。秀兰跟在你身后，脚步轻得像风。

"你真的愿意给我名分？" 她问。

"愿意。" 你说。

你们来到无字碑前。你把嫁衣放进土坑，用手一捧一捧地埋上土。

[red]这一刻，你回到了主线最温柔的结局。[/red]`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '继续主线',
            next: 'bury_xiulan',
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_burn_incense_scene = {
    title: '燃香',
    text: `你摸出打火机，点燃了那半支安神香。

香头冒出一缕青烟，烟不是往上升的，而是盘旋着往你口鼻里钻。你闻到一股奇异的香气，像是艾草，又像是陈年桂花。

庙里的阴冷忽然退散了。供桌上的灰尘簌簌落下，露出底下崭新的红漆。牌位后的阴影发出不甘的嘶吼，却不敢靠近香烟的范围。

[red]原来这香不是祭品，是镇物。[/red]

你举着香，在庙里走了一圈。每到一处，墙上的黄符就自动剥落，像被烫到的蛇。庙外传来秀兰轻轻的叹息，那叹息里没有怨，只有一点疲惫的释然。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '半支安神香',
        setFlag: 'huimen_exp_burned_temple_incense'
    },
    choices: [
        {
            text: '趁香还没烧完，进内殿',
            next: 'huimen_exp_temple_inner',
            effects: { yin: 1 }
        },
        {
            text: '离开庙，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_fog = {
    title: '雾中村街',
    text: `雾忽然浓了起来。

村街两旁的灯笼变成了模糊的白点，像漂浮在牛奶里的眼睛。你摸索着往前走，石板路却变成了软的，每踩一步都往下陷。

你低头看，路还是石板路，只是石缝里长出了厚厚的青苔。青苔是红色的，像干涸的血。

雾里有脚步声，不止一个，而是很多个，整齐地跟着你的节奏。你停下，它们也停下；你走，它们也走。

[whisper]"雾里有东西。"[/whisper] 你对自己说。

可那东西，也许就是你自己的影子。`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '大声喊，问是谁',
            next: 'huimen_exp_street_fog_answer',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '蹲下身摸青苔',
            next: 'huimen_exp_street_fog_moss',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '加快脚步离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_fog_answer = {
    title: '雾答',
    text: `你大喊："是谁！"

雾里的脚步声停了一瞬，然后传来一个女子的轻笑。

[whisper]"是你啊。"[/whisper]

雾气在你面前聚拢，凝成一张模糊的脸。那脸没有五官，只有一张嘴，嘴角咧到耳根。

"你问我是谁？" 那张嘴说，"我是你今晚要娶的新娘啊。"

你转身就跑。雾像手一样拉扯你，但你拼命挣扎，终于冲出了浓雾。

回头一看，雾里站着一排穿红嫁衣的女子，都在朝你招手。`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_fog_moss = {
    title: '血苔',
    text: `你蹲下身，用手指蹭了蹭青苔。

青苔是湿的，沾在指尖上，有一股铁锈味。你凑近闻了闻，确实是血，但不是新鲜的血，而是沉淀了很多年的、发黑的血。

[red]这条村街，是用血养着的。[/red]

你继续摸，发现石板缝里不仅有青苔，还有一些细小的东西。你捡起来看，是一枚生锈的铜钱，钱眼上缠着一根红绳。

铜钱背面刻着"周氏"两个字。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '清代铜钱'
    },
    choices: [
        {
            text: '把铜钱收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '把铜钱扔回石缝',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2, removeItem: '清代铜钱' }
        }
    ]
};

StoryData.huimen_exp_street_rain = {
    title: '夜雨',
    text: `雨又下了起来。

不是普通的雨，雨点落在皮肤上，会留下一道浅浅的红印。你抬头看天，天上没有云，只有一轮惨白的月亮。

雨是从月亮里落下来的。

街道两旁的纸人开始融化，脸上的颜料顺着雨水流下，像五颜六色的泪。它们伸出手，想抓你，但手指一碰到雨，就软成了纸浆。

[whisper]"躲一躲吧。"[/whisper] 一个声音说。

你看见路边有一间敞开的门，门里点着一盏油灯。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '进门躲雨',
            next: 'huimen_exp_street_rain_shelter',
            effects: { yin: 2 }
        },
        {
            text: '在雨里继续走',
            next: 'huimen_exp_village_street',
            effects: { sanity: -3, yin: 3 }
        }
    ]
};

StoryData.huimen_exp_street_rain_shelter = {
    title: '避雨',
    text: `你冲进那间屋子。

屋里很暖和，正中摆着一张桌子，桌子上有一碗热气腾腾的汤圆。桌子旁坐着一个老太太，正低着头绣花。

"吃吧。" 老太太头也不抬，"吃完雨就停了。"

你看着那碗汤圆，汤圆是红色的，浮在黑色的汤里。

"我不饿。" 你说。

老太太终于抬起头。她的眼睛是两个黑洞，嘴角却带着慈祥的笑："不饿？那你的心呢？心不饿，怎么活？"

[red]你意识到，她不是活人，而是村子用来"留人"的饵。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '吃一口汤圆',
            next: 'huimen_exp_street_rain_eat',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '转身离开',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2 }
        }
    ]
};

StoryData.huimen_exp_street_rain_eat = {
    title: '红汤圆',
    text: `你舀起一个汤圆，放进嘴里。

汤圆不是糯米做的，而是纸浆。它在你嘴里化开，变成一团湿冷的纸糊，堵住你的喉咙。

你想吐，却吐不出来。老太太在旁边鼓掌："好孩子，吃了周家的饭，就是周家的人了。"

你感到自己的胃在变重，像塞了一团纸。你跌跌撞撞地冲出屋子，雨已经停了，月光照在你身上。

[red]你低头看自己的手，皮肤正在泛白，像纸一样。[/red]`,
    effects: {
        sanity: -15,
        yin: 10
    },
    choices: [
        {
            text: '拼命催吐',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: -3 }
        },
        {
            text: '接受变化',
            ending: 'huimen_exp_paper_doll',
            effects: { yin: 5 }
        }
    ]
};

StoryData.huimen_exp_street_paper_rain = {
    title: '纸钱雨',
    text: `天上忽然下起纸钱。

不是飘，是下，像雪片一样密集。纸钱落在地上，发出"沙沙"的声响，像无数只脚在走路。

你捡起一张，发现上面印着你的脸。不是照片，是画上去的，眉眼唇红，和你一模一样。

[red]每一张纸钱上都是你的脸。[/red]

纸钱越落越多，渐渐埋到你的脚踝。你想跑，却发现纸钱像磁铁一样吸住你的鞋。

"别浪费。" 一个纸人说，"这些都是你的买命钱。"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '用打火机烧纸钱',
            next: 'huimen_exp_street_paper_rain_burn',
            condition: { hasItem: '打火机' },
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '把纸钱一张张撕碎',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 2 }
        }
    ]
};

StoryData.huimen_exp_street_paper_rain_burn = {
    title: '焚钱',
    text: `你点燃打火机，火苗舔上纸钱。

纸钱发出尖利的叫声，像活物一样卷曲、焦黑，最后化为一缕青烟。奇怪的是，那些烟没有散去，而是在空中聚成一个人形。

那人形和你一样高，一样胖瘦，只是没有脸。

"你烧了自己的买命钱。" 它说，"现在你的命，没人能买走了。"

它朝你鞠了一躬，然后散开了。纸钱雨也停了，地上只剩下一层薄薄的灰烬。`,
    effects: {
        sanity: 5,
        yin: -8
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_footsteps = {
    title: '重步',
    text: `你听见身后传来沉重的脚步声。

不是纸人的轻飘脚步，而是人的脚步，一步一步，很慢，很重。你不敢回头，只敢加快脚步。

脚步声也加快了。

你跑起来，脚步声也跑起来。你停下，脚步声也停下。

[red]它一直在你身后三尺远的地方。[/red]

你终于忍不住回头。身后什么也没有，只有一串湿漉漉的脚印，一直延伸到雾里。

脚印很大，是个男人的脚印。可你分明听见，那脚步声里还混着婴儿的啼哭。`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '顺着脚印走',
            next: 'huimen_exp_street_footsteps_follow',
            effects: { yin: 2 }
        },
        {
            text: '不管它，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_footsteps_follow = {
    title: '脚印尽头',
    text: `你顺着脚印走。

脚印越来越淡，最后停在一口古井前。井沿上放着一双男人的布鞋，鞋里塞着一团湿漉漉的纸。

你把纸拿出来，展开一看，是一张生辰八字。八字是你的。

[whisper]"原来他一直在跟着你。"[/whisper]

你抬头看井，井水里映出一个男人的身影。他穿着长袍，和你祖父的照片很像。

"秀兰等了三十年。" 他说，"我也等了三十年。"

你认出了他。他是你的祖父。`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_saw_grandfather_ghost'
    },
    choices: [
        {
            text: '问他为什么不来救秀兰',
            next: 'huimen_exp_grandfather_confession',
            effects: { yin: 2 }
        },
        {
            text: '转身离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_grandfather_confession = {
    title: '祖父',
    text: `井里的祖父低下头。

"我想救她。" 他说，"我被关在东厢房，听着他们把她拖到井边。我砸门，砸到手骨都断了，可门太厚。"

"秀兰在井里叫我。她叫了一夜。第二天，他们告诉我，她病死了。"

他的眼泪落进井里，井水的红色淡了一些。

"我后来每年都在井边烧纸，烧了三十年。可她不收我的纸，她只要周家一个道歉。"

[red]你看着祖父，不知道该恨他还是可怜他。[/red]`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '告诉他你会替她正名',
            next: 'huimen_exp_grandfather_release',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '冷冷地离开',
            next: 'huimen_exp_village_street',
            effects: { sanity: -3, yin: 3 }
        }
    ]
};

StoryData.huimen_exp_grandfather_release = {
    title: '解脱',
    text: `你对着井水说："我会给秀兰正名。周家欠她的，我来还。你可以走了。"

祖父的身影颤抖了一下，然后露出一个释然的笑。

"谢谢你，孙子。" 他说，"我等这句话，等了三十年。"

他的身影渐渐淡去，化作一滴泪落进井里。井水顿时变得清澈，映出满天星斗。

你感到胸口的压抑又轻了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_grandfather_released'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_whistle = {
    title: '口哨',
    text: `你听见有人在吹口哨。

曲调很熟悉，是你小时候祖母哄你睡觉时常哼的调子。可在这村子里，没有人会吹这首曲子。

你顺着口哨声走去，来到一座小桥边。桥上站着一个背对你的男人，穿着旧式长衫。

"祖母？" 你脱口而出，然后意识到那是个男人。

男人转过身，脸上没有五官，只有一张嘴。嘴还在吹口哨，吹的正是那首摇篮曲。`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '跟着哼唱',
            next: 'huimen_exp_street_whistle_sing',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '捂住耳朵离开',
            next: 'huimen_exp_village_street',
            effects: { sanity: -3, yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_whistle_sing = {
    title: '合鸣',
    text: `你跟着哼起了那首摇篮曲。

男人的口哨声停了一下，然后变得更加凄厉。他的身体开始扭曲，像一张被揉皱的纸。

"你记得这首曲子？" 他问，"你祖母临死前，也在哼这首曲子。"

"她在等谁？"

"等秀兰。" 男人说，"她这辈子最对不起的人。"

男人的身体彻底散开了，化作无数音符飘向夜空。你站在桥上，感到一阵莫名的悲伤。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_calling = {
    title: '唤名',
    text: `雾里有声音在叫你的名字。

不是秀兰的声音，是一个苍老的女声，带着哭腔："回来吧，回来吧，外面冷。"

你辨认出那是祖母的声音。

你朝着声音走去，看见一个佝偻的背影站在一扇门前。她穿着祖母常穿的那件蓝布褂子，花白的头发梳得整整齐齐。

"祖母？" 你喊。

她缓缓转过身。她的脸是祖母的脸，可眼睛是两个黑洞，嘴角却带着笑："回来就好，回来就好。奶奶给你准备了红嫁衣。"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '质问她为什么害秀兰',
            next: 'huimen_exp_grandmother_confront',
            effects: { sanity: -5, yin: 2 }
        },
        {
            text: '后退离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_grandmother_confront = {
    title: '对质',
    text: `你大喊："你为什么要活埋秀兰？"

"祖母"的笑容僵住了。她的脸像纸一样皱起来，声音变得尖锐："因为周家不能丢脸！她未婚先孕，败坏门风，不埋她埋谁？"

"可她也是人！"

"人？" 她冷笑，"在周家，女人不是人，女人是债。生不出儿子的女人是债，丢了脸的女人是债。秀兰是债，我也是债。"

她的身体开始燃烧，却没有化为灰，而是变成一张黄符，飘落在地上。

符上写着："周家女，世世为债。"`,
    effects: {
        sanity: -5,
        yin: 3,
        setFlag: 'huimen_exp_confronted_grandmother'
    },
    choices: [
        {
            text: '把黄符烧掉',
            next: 'huimen_exp_burn_grandmother_talisman',
            condition: { hasItem: '打火机' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_burn_grandmother_talisman = {
    title: '焚符',
    text: `你点燃黄符。

火焰不是红色的，而是青白色的。符纸在火中扭动，发出祖母的尖叫："你敢烧周家的根！"

"周家的根，早就烂了。" 你说。

符纸化为灰烬，风里传来一声长长的叹息。那不是祖母的叹息，而是很多女子的叹息，叠加在一起。

你感到手腕上的红绳松了一些。`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_hand = {
    title: '墙中手',
    text: `你贴着墙走，忽然感到有什么东西抓住了你的衣角。

你低头一看，一只苍白的手从墙缝里伸出来，正攥着你的衣服。那只手的指甲很长，缝里全是泥。

你想挣脱，可那只手抓得很紧。墙缝里传来一个女子的声音："拉我出去……墙里好挤……"

你环顾四周，发现不止这一面墙，整条街的墙缝里都有手伸出来。有的手在抓空气，有的手在互相握手，有的手在敲墙。

[red]这条村街，是用人和墙一起砌起来的。[/red]`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '用力把那只手拉出来',
            next: 'huimen_exp_street_hand_pull',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '用缠发剪刀剪断手指',
            next: 'huimen_exp_street_hand_cut',
            condition: { hasItem: '缠发剪刀' },
            effects: { sanity: -5, yin: -3 }
        },
        {
            text: '挣脱衣角，快跑',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_street_hand_pull = {
    title: '拉人',
    text: `你抓住那只手，用力往外拉。

墙缝开始扩大，碎石簌簌落下。你拉出一个女子的上半身，她的脸被墙灰糊住，只露出一双眼睛。

"谢谢……" 她说，"你是第一个愿意拉我的人。"

可她下半身还在墙里，你拉不动了。更多的手从墙里伸出来，抓住她的肩膀，把她往回拖。

"不！" 她尖叫，"我不要回去！"

你拼命拉，可墙的力量太大。最后，你只扯下她的一只袖子。

袖子上绣着一个"兰"字。`,
    effects: {
        sanity: -10,
        yin: 5,
        addItem: '绣兰袖'
    },
    choices: [
        {
            text: '把袖子收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_hand_cut = {
    title: '断指',
    text: `你用缠发剪刀剪向那只手的手指。

剪刀落下，手指断开，却没有流血，而是化作一缕青烟。墙缝里传来一声哀鸣，所有的手都缩了回去。

你看了看手里的剪刀，发现刀刃上多了一道黑色的痕迹，像是一个女子的轮廓。

"对不起。" 你低声说。

你没有别的选择。在这村子里，有时候救人，要先学会断腕。`,
    effects: {
        sanity: -5,
        yin: -3
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_knocking = {
    title: '敲门',
    text: `你经过一扇门，门里传来敲门声。

"咚咚咚"，三声，很有节奏。你停下脚步，敲门声也停了。

你继续走，敲门声又响起。你再停，它也停。

[whisper]"进来呀。"[/whisper] 门缝里飘出一个声音，"进来喝杯茶。"

你透过门缝往里看，屋里点着红烛，桌上摆着茶具。一个穿红嫁衣的女子背对着你，正在倒茶。

茶水是红色的。`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '推门进去',
            next: 'huimen_exp_street_knocking_enter',
            effects: { yin: 3 }
        },
        {
            text: '不管它，继续走',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -1 }
        }
    ]
};

StoryData.huimen_exp_street_knocking_enter = {
    title: '茶室',
    text: `你推开门，女子转过头来。

她没有脸，只有一团白纸。可她的声音很温柔："坐，喝茶。"

你坐下，茶杯里的红色茶水在冒热气。你不敢喝。

"你不喝？" 她问，"这茶是秀兰生前最爱喝的，桂花红茶。"

你愣了一下。桂花红茶，是祖母也常泡的茶。

"秀兰不是坏人。" 女子说，"她只是等得太久了。你喝了这杯茶，就能听见她的心里话。"

你端起茶杯，茶水映出你的脸，也映出秀兰的脸。`,
    effects: {
        sanity: -5,
        yin: 3
    },
    choices: [
        {
            text: '喝一口',
            next: 'huimen_exp_street_knocking_drink',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '把茶倒在地上',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2 }
        }
    ]
};

StoryData.huimen_exp_street_knocking_drink = {
    title: '茶心',
    text: `你喝了一口茶。

茶不是苦的，是甜的，甜得发腻。茶水入腹，你眼前出现了一幅幅画面——

秀兰十六岁，在河边洗衣；秀兰十七岁，在学堂窗外偷听；秀兰十八岁，穿着嫁衣坐在喜房里，等着一个不会来的新郎。

然后是被活埋的画面。井水灌入耳鼻，孩子在腹中踢动，指甲在井壁上抓出血痕。

[red]你尝到了她的绝望。[/red]

你跪在地上，泪水止不住地流。那不是你的泪，是秀兰三十年的泪，终于有人替她流了。`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp_tasted_xiulan_tea'
    },
    choices: [
        {
            text: '擦干眼泪，回村街',
            next: 'huimen_exp_village_street',
            effects: { sanity: 5, yin: -3 }
        }
    ]
};

StoryData.huimen_exp_street_mirror = {
    title: '雾镜',
    text: `雾中出现一面镜子。

镜子很大，立在街道中央，镜框是朱红色的，刻着龙凤。你走近，发现镜子里映出的不是你，而是秀兰。

她坐在喜房里，正在梳头。她梳得很慢，每一梳都带下一缕头发。

"你看得见我？" 她问。

你点点头，虽然知道她看不见。

"那你告诉我，" 她说，"我好看吗？"

镜子里的她没有盖头，脸色苍白，但眉眼清秀。你忽然发现，如果她活着，应该是个很好看的姑娘。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '说好看',
            next: 'huimen_exp_street_mirror_praise',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '沉默',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_mirror_praise = {
    title: '镜笑',
    text: `你说："好看。"

秀兰愣了一下，然后笑了。她笑得很浅，像是一朵刚开的花。

"三十年了，" 她说，"第一次有人夸我好看。"

镜子里的画面变了。秀兰站了起来，朝你福了一福，然后转身走向一扇门。门后是一片白光。

"我会记得你的。" 她说，"你也别忘了我。"

镜子"咔"地一声裂了，裂痕正好把你的脸和秀兰的脸分开。`,
    effects: {
        sanity: 10,
        yin: -8,
        setFlag: 'huimen_exp_praised_xiulan'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_red_shoes = {
    title: '红绣鞋',
    text: `石板路上放着一双红绣鞋。

鞋子很小，像是三寸金莲。鞋面上绣着并蒂莲，针脚很细，看得出是做鞋的人用了心。

你捡起来，发现鞋子里有一张纸条：

[faded]"妾身秀兰，亲手所制。愿君珍重，白头偕老。"[/faded]

[red]这是她给祖父做的鞋，还没来得及送出去。[/red]

你捧着鞋，感到一阵心酸。三十年前，她也曾经满怀期待地想要嫁人。`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '红绣鞋'
    },
    choices: [
        {
            text: '把鞋送到秀兰坟前',
            next: 'huimen_exp_street_red_shoes_grave',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_red_shoes_grave = {
    title: '鞋归',
    text: `你捧着红绣鞋，来到无字碑前。

"秀兰，" 你说，"你的鞋，我替你收回来了。"

你把鞋放在碑前。鞋面上忽然出现了一双小小的脚印，像是有人穿上了它们。

[whisper]"刚刚好。"[/whisper] 秀兰的声音说，"不大不小。"

无字碑上的血字慢慢变淡，最后变成了一行普通的刻字：

[faded]"周氏秀兰之墓"[/faded]

你知道，她离解脱又近了一步。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '红绣鞋',
        setFlag: 'huimen_exp_returned_red_shoes'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_little_girl = {
    title: '小女孩',
    text: `你看见一个小女孩蹲在街边玩石子。

她穿着旧式的花布衣裳，扎着两个羊角辫。她抬头看见你，甜甜地笑了："大哥哥，陪我玩好吗？"

你走近她，发现她玩的不是石子，是人的牙齿。一颗颗乳牙，被她排成一排。

"你在玩什么？" 你问。

"排牙齿。" 她说，"这些都是被周家借走命的小孩。我把它们排整齐，它们就能找到回家的路。"

[red]她抬起头，你发现她没有眼睛，眼眶里是两团墨点。[/red]`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '帮她一起排牙齿',
            next: 'huimen_exp_street_little_girl_help',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '问她谁借的命',
            next: 'huimen_exp_street_little_girl_ask',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_little_girl_help = {
    title: '排牙',
    text: `你蹲下来，帮小女孩排牙齿。

牙齿很凉，但不像鬼物，更像是一个个睡着的孩子。你按照大小一颗颗排好，小女孩在旁边拍手。

"大哥哥真好。" 她说，"作为谢礼，我送你一颗。"

她捡起最白最完整的一颗牙齿，放进你手心。牙齿触到皮肤的瞬间，化作一道温暖的光，钻进你胸口。

"它会保护你。" 她说，"不让周家借你的命。"`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '护身乳牙'
    },
    choices: [
        {
            text: '谢谢她，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_little_girl_ask = {
    title: '借命',
    text: `你问："谁借走你们的命？"

小女孩歪着头，像是在回忆。

"周家的祖先。" 她说，"他们活不长，就借小孩子的命。秀兰姐姐的孩子也被借走了，所以元宝一直长不大。"

"那怎么才能还？"

"把名字还给我们。" 她说，"周家族谱上写了我们的名字，我们的命就被押在那里。你把名字划掉，我们就自由了。"

她指向祖祠的方向。`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_knows_children_names_in_record'
    },
    choices: [
        {
            text: '去祖祠查名册',
            next: 'huimen_exp_ancestral_hall',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_paper_boat = {
    title: '纸船',
    text: `你看见石板路上漂着一只纸船。

纸船不是被人放在地上的，而是像在河里一样，顺着石缝往前漂。船头点着一根小蜡烛，烛光摇曳。

你跟着纸船走，它带你来到一口井边。纸船在井沿停了一下，然后一头栽进井里。

井底传来一声轻笑。

[whisper]"船到了。"[/whisper]

你探头看，井水里浮着许多纸船，每一只船上都写着一个人的名字。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '也折一只纸船放下去',
            next: 'huimen_exp_street_paper_boat_make',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '离开井边',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_paper_boat_make = {
    title: '放船',
    text: `你捡起一张黄纸，折成一只小船。

你在船身上写下"周氏秀兰"四个字，然后把船放进井里。

纸船没有沉，而是稳稳地漂在水面上，像被一只手托着。井底的纸船纷纷让开一条道，让你的船驶向深处。

[whisper]"我收到了。"[/whisper] 秀兰说，"谢谢你送的船。"

你感到一阵轻松，像是把某种沉重的东西交给了水。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp_sent_paper_boat'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_opera_tune = {
    title: '戏腔',
    text: `远处传来唱戏的声音。

唱的是《牡丹亭》里的"游园惊梦"，可唱腔越走越调，到了后半段，竟然变成了哭腔。

你顺着声音来到一座破败的戏台前。戏台上没有演员，只有一件大红戏服在空中飘动，水袖自己挥舞，像是在表演。

戏服的心口处有一道裂缝，缝里渗出红色的水。

[red]这是一件会自己唱戏的戏服。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '鼓掌叫好',
            next: 'huimen_exp_street_opera_tune_clap',
            effects: { sanity: -3, yin: 2 }
        },
        {
            text: '问它是不是秀兰',
            next: 'huimen_exp_street_opera_tune_ask',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_street_opera_tune_clap = {
    title: '戏散',
    text: `你鼓起掌来。

戏服停住了。它缓缓转向你，虽然没有头，你却感到它在"看"你。

"好……" 一个女子的声音从戏服里传出，"终于有人给我鼓掌了。"

戏服从空中落下，平铺在地上。裂缝里渗出最后一滴红水，然后不动了。

你走近，发现戏服内衬上绣着一个名字："柳红"。

[red]不是秀兰。是另一个被周家害死的女子。[/red]`,
    effects: {
        sanity: -5,
        yin: -3,
        setFlag: 'huimen_exp_found_liu_hong_dress'
    },
    choices: [
        {
            text: '把戏服收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的戏服' }
        }
    ]
};

StoryData.huimen_exp_street_opera_tune_ask = {
    title: '问戏',
    text: `你问："你是秀兰吗？"

戏服颤抖了一下，发出一声苦笑。

"秀兰？她不在这里。她在井里。" 戏服说，"我是柳红，青石镇来的戏子。我和秀兰一样，被周家配了冥婚。"

"青石镇？" 你想起村口旧报纸上的话。

"是啊。" 柳红说，"周家的罪，不止这一个小山村。你若救秀兰，也救救我。把我的戏服带出村子，交给一个赶尸匠。他会懂。"`,
    effects: {
        sanity: -5,
        yin: 3,
        setFlag: 'huimen_exp_met_liu_hong'
    },
    choices: [
        {
            text: '答应她',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的戏服' }
        }
    ]
};

StoryData.huimen_exp_street_drum = {
    title: '鼓声',
    text: `你听见一声沉闷的鼓声。

鼓声从地底传来，每响一声，地面就轻微颤动一下。你趴在地上听，发现鼓声是从村子中央传来的。

你来到村中央，那里有一口古井，井口盖着一块大石板。石板上画着八卦图，八卦图的中央是一面鼓的图案。

[red]这口井，是村子的"心"。[/red]

鼓声就是从井底传来的，像是有一颗巨大的心脏在跳动。`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '掀开石板',
            next: 'huimen_exp_street_drum_open',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '把耳朵贴在石板上听',
            next: 'huimen_exp_street_drum_listen',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_street_drum_listen = {
    title: '听鼓',
    text: `你把耳朵贴在石板上。

鼓声里混着很多声音：有女人的哭喊，有男人的叹息，有婴儿的啼哭，还有秀兰轻轻哼唱的摇篮曲。

你听了很久，忽然明白了：这口井不是井，是村子的"记忆"。所有被周家害死的人，都被封在这里，成为维持这个村子运转的"心"。

"你想让我们安静吗？" 一个声音问，"那就把我们的心放出去。"`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_heard_village_heart'
    },
    choices: [
        {
            text: '想办法掀开石板',
            next: 'huimen_exp_street_drum_open',
            effects: { yin: 2 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_street_drum_open = {
    title: '开井',
    text: `你用力掀开石板。

石板下不是井水，而是一面巨大的鼓。鼓面是用人皮糊的，上面画着密密麻麻的符咒。鼓槌是一根骨头，正在自己敲击鼓面。

你伸手去按鼓面，鼓面却把你吸了进去。

你感到自己在坠落，穿过无数张脸，无数双手，无数个声音。最后，你落在一个漆黑的空间里。

"你来了。" 秀兰说，"这是我的心。你怕吗？"

[red]你落在了秀兰的记忆深处。[/red]`,
    effects: {
        sanity: -15,
        yin: 5
    },
    choices: [
        {
            text: '说不怕',
            next: 'huimen_exp_xiulan_memory_1',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '沉默',
            next: 'huimen_exp_xiulan_memory_1',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_memory_1 = {
    title: '秀兰的记忆 · 一',
    text: `你眼前亮起一片光。

你看见十六岁的秀兰，穿着粗布衣裳，在河边洗衣。她一边洗衣一边唱歌，歌声清亮，像山涧的泉水。

一个年轻男人骑着自行车经过，停在她面前。

"秀兰，" 他说，"我考上县里的学堂了。"

秀兰抬起头，脸红了："周少爷，恭喜。"

"别叫我周少爷。" 男人说，"叫我名字。"

秀兰低下头，声音像蚊子："……周文。"

[red]那就是你的祖父。[/red]

画面 fade 了。你听见秀兰在你耳边说："那时候，我是真的喜欢他。"`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '继续看',
            next: 'huimen_exp_xiulan_memory_2',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_memory_2 = {
    title: '秀兰的记忆 · 二',
    text: `画面变了。

秀兰坐在一间小屋里，怀里抱着一件小衣服。她正在绣花样，针脚很细。

门突然被撞开，周文冲进来，脸色惨白："秀兰，他们知道了。"

"知道什么？" 秀兰问。

"你……你怀孕了。" 周文跪在她面前，"我会娶你的，我会说服爹娘的。"

秀兰摸着自己的肚子，笑了："真的吗？"

"真的。" 周文说，"我发誓。"

可画面一转，秀兰被几个人拖走。周文被关在东厢房，他砸门，哭喊，最后瘫倒在地。

[red]誓言在现实面前，轻得像一张纸。[/red]`,
    effects: {
        sanity: -8,
        yin: 2
    },
    choices: [
        {
            text: '继续看',
            next: 'huimen_exp_xiulan_memory_3',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_memory_3 = {
    title: '秀兰的记忆 · 三',
    text: `画面来到井边。

秀兰被绑着，嘴上塞着布。她的眼睛里没有泪，只有绝望。

周文的母亲站在井边，冷冷地说："丢尽周家的脸。活埋。"

秀兰被推进井里。她在下坠中捂住肚子，像是要保护腹中的孩子。

井水很冷。她挣扎着，用指甲在井壁上刻字。你凑近看，刻的是：

[red]"周文，我恨你。周文，我等你。"[/red]

[scream]矛盾的两个字，被她的血混在一起。[/scream]

画面消失了。你跪在黑暗中，泪流满面。`,
    effects: {
        sanity: -15,
        yin: 3,
        setFlag: 'huimen_exp_saw_xiulan_death'
    },
    choices: [
        {
            text: '对她说对不起',
            next: 'huimen_exp_xiulan_forgive',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_forgive = {
    title: '原谅',
    text: `你对着黑暗说："秀兰，对不起。周家对不起你。我会让所有人知道你的事。"

黑暗里亮起一点光。秀兰的身影出现在光里，她没有盖头，没有血泪，只是一个疲惫的姑娘。

"我不要所有人的知道。" 她说，"我只要你记得。"

你点点头："我记得。"

她伸出手，轻轻摸了摸你的脸。那只手很凉，但你没有躲。

"你和他很像。" 她说，"但你比他勇敢。"

光灭了。你发现自己站在村街上，天边的月亮似乎亮了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'xiulanMercy'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_dive = {
    title: '下井',
    text: `你决定下到井里看看。

井绳还在，你系在腰上，慢慢往下滑。井水冰凉，越往下越红。井壁上刻满了字，都是秀兰用指甲刻的。

"周文，我恨你。"
"周文，我等你。"
"孩子，别怕。"
"娘在这里。"

[red]每一行字都刻得很深，深得像是刻进了石头的骨头里。[/red]

你下到井底，脚踩到了硬物。那是一口红漆棺材，棺材上钉着九根桃木钉。`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '这就回去拿钥匙',
            next: 'huimen_exp_return_red_coffin',
            condition: { hasItem: '铜钥匙' },
            effects: { yin: 1 }
        },
        {
            text: '没有钥匙，先上去',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_paper_shop_roof = {
    title: '纸铺屋顶',
    text: `你爬上纸扎铺的屋顶。

屋顶上堆满了晒干的纸人，它们面朝下趴着，像一群沉睡的尸体。你踩上去，脚下发出"咔嚓咔嚓"的声响。

屋顶中央有一个小洞，你透过洞往下看，看见铺子里的老人正在画一张脸。

那张脸不是你的，是一个老人的脸。你认出来，那是你祖父年轻时的模样。

"替身要扎得像，才能替得主。" 老人喃喃自语，"周文啊周文，你欠的债，让你的孙子来还。"`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '跳下去阻止他',
            next: 'huimen_exp_paper_doll_craftsman',
            effects: { yin: 2 }
        },
        {
            text: '悄悄离开屋顶',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_temple_pray = {
    title: '祈愿',
    text: `你跪在庙前的石阶上，双手合十。

你不知道该求什么。求秀兰放过你？求周家祖先保佑你？还是求自己能活着走出这个村子？

最后你只说了一句话："愿秀兰安息。"

话音刚落，庙前的石阶上忽然长出一朵小花。花是白色的，在月光下微微发亮。

[red]这是秀兰最喜欢的桂花。[/red]

你摘下花，放在鼻尖闻了闻，香气清淡，却让你安心。`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '桂花'
    },
    choices: [
        {
            text: '把花献给秀兰',
            next: 'huimen_exp_xiulan_flower',
            effects: { yin: -3 }
        },
        {
            text: '收好，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_flower = {
    title: '献花',
    text: `你把桂花放在井沿。

井水里浮出秀兰的脸。她看着那朵花，眼神柔和了许多。

"桂花……" 她说，"我活着的时候，院子里有一棵桂花树。每年秋天，周文都会摘一束给我。"

她的眼泪落进井里，却没有让水变红，而是化作一圈圈涟漪。

"后来树被砍了。" 她说，"他们说，不祥的人，不配闻桂花香。"

你握紧了拳头。周家连一棵树都不放过。`,
    effects: {
        sanity: 5,
        yin: -8,
        removeItem: '桂花'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_painting = {
    title: '祖像',
    text: `你在祖祠的角落里发现一幅画像。

画像已经发黄，画上是一个穿长袍的老者，面目威严。画像下方写着"周氏开基祖"。

你盯着画像看，发现老者的眼睛似乎在动。你再仔细看，他的嘴角也微微上扬。

"你来了。" 画像说，"周家等你很久了。"

你后退一步，画像却从墙上飘下来，悬在你面前。

"秀兰的事，是我定的。" 老者说，"一个女人，坏了周家的名声，就必须除掉。你认同吗？"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '说不认同',
            next: 'huimen_exp_ancestral_painting_defy',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '沉默',
            next: 'huimen_exp_ancestral_painting_silent',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_ancestral_painting_defy = {
    title: '驳祖',
    text: `你说："我不认同。人命不是名声能换的。"

画像老者的脸扭曲了，像被火烧的纸一样卷曲起来。

"逆子！" 他尖叫，"你敢反驳祖先！"

"如果祖先错了，就该被反驳。" 你说。

画像"砰"地一声烧起来，化作灰烬落在地上。灰烬里有一张黄符，符上写着"周氏开基祖之灵位"。

你把黄符踩碎。祖祠里的阴影发出一阵骚动，然后渐渐退散。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_defied_ancestor'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_painting_silent = {
    title: '沉默',
    text: `你沉默了。

画像老者满意地点点头："好孩子。周家需要你这样的人。"

他伸出手，想拍你的肩膀。你侧身躲开。

"你不认同？" 老者问。

"我不说话，不代表我认同。" 你说，"我只是不想和一张纸争辩。"

画像老者的脸僵住了，然后缓缓飘回墙上，恢复了原来的模样。

你知道，他还会再找机会。`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_women_wall = {
    title: '女墙',
    text: `你在祖祠的后墙发现一面"女墙"。

墙上密密麻麻刻着很多名字，都是女子的名字。周氏秀兰、周氏柳红、周氏云袖……每一个名字后面都刻着"不祥"、"沉塘"、"活埋"。

你数了数，一共有三十七个名字。

[red]三十七个女子，三十七条命，撑起周家所谓的"清白"。[/red]

你用手指描摹那些名字，感到一阵刺痛。墙在吸你的血，每描一个字，你的指尖就渗出一滴血。

"把我们的名字记下来。" 一个声音说，"别让世人忘了。"`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_saw_women_wall'
    },
    choices: [
        {
            text: '用血在墙上写正名',
            next: 'huimen_exp_ancestral_women_wall_rename',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '把名字抄下来',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '女子名单' }
        }
    ]
};

StoryData.huimen_exp_ancestral_women_wall_rename = {
    title: '重写',
    text: `你咬破手指，在每个名字后面写下"正名"二字。

血字渗入墙面，那些原本黯淡的名字一个个亮起来。墙里传来女子的哭声，这次不是悲伤，而是解脱。

"谢谢……" 她们说，"终于有人看见我们了。"

墙面开始剥落，露出底下的红砖。红砖上刻着新字：

[faded]"周氏女子，各有名姓，各有来生。"[/faded]

你感到胸口的压抑轻了很多，像是卸下了三十七年的重担。`,
    effects: {
        sanity: 10,
        yin: -15,
        setFlag: 'huimen_exp_renamed_women_wall'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '把名单带出村子，让世人知道',
            ending: 'huimen_exp_ending_name_list',
            condition: { hasItem: '女子名单' },
            effects: { yin: -5 }
        },
        {
            text: '在村口立一块名碑',
            ending: 'huimen_exp_ending_name_stone',
            condition: { flag: 'huimen_exp_renamed_women_wall' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_mulberry_nest = {
    title: '鸟巢',
    text: `你抬头看桑树，发现树冠里有一个鸟巢。

鸟巢不是用树枝搭的，而是用头发。乌黑的长发一圈圈盘绕，中间躺着几颗蛋。

蛋是白色的，蛋壳上画着人脸。你仔细一看，那些脸都是女子的脸，有秀兰，有柳红，还有很多你不认识的女子。

"别碰。" 一个声音从树上传来，"那是我们的蛋。"

你抬头，看见一只乌鸦站在枝头。乌鸦的眼睛是红色的，像两颗燃烧的纸钱。`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '问乌鸦这些蛋是什么',
            next: 'huimen_exp_mulberry_nest_ask',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_nest_ask = {
    title: '鸦答',
    text: `乌鸦歪着头看你。

"这些蛋，是周家女人的魂。" 它说，"她们死后不能投胎，就变成蛋，等在树上。等有人把她们孵出来，她们才能重新做人。"

"怎么孵？"

"用心温。" 乌鸦说，"把她们的名字念出来，念一百遍，蛋就会裂开。"

你看着那些蛋，心里一阵酸楚。三十七个女子，三十七个蛋，都在等一个愿意念她们名字的人。

"我会念的。" 你说。`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_knows_how_to_hatch_souls'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_silk = {
    title: '蚕丝',
    text: `你看见桑树上挂着许多白色的丝。

不是普通的蚕丝，而是像头发一样细的丝，在月光下泛着银光。你扯下一根，丝竟然发出一声轻响，像琴弦被拨动。

[whisper]"别扯。"[/whisper] 秀兰说，"那是我的命丝。"

你松手，丝飘回树上，和其他的丝缠在一起。

"我的命被分成三份，用丝系着。" 她说，"井一份，庙一份，桑树一份。你把丝解开，我就能走了。"

你抬头看，桑树上的丝尽头，系着一个小小的布包。布包里，应该就是她最后一份魂。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '解开布包',
            next: 'huimen_exp_mulberry_tree_hole',
            effects: { yin: 2 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_baby_clothes = {
    title: '婴衣',
    text: `你在废墟里翻到更多婴儿衣物。

小红肚兜、小棉裤、虎头鞋，还有一顶小小的虎头帽。每一件都绣着"元"字。

[red]这是秀兰给未出世的孩子准备的。[/red]

你把它们一件件摆好，仿佛能看见一个母亲在灯下缝制的样子。她一定很期待这个孩子的到来。

可孩子没能来到这世上。

你拿起虎头帽，帽子里掉出一张小纸条：

[faded]"愿吾儿元宝安康，长命百岁。"[/faded]

纸条上的字迹已经模糊，但母爱却穿越了三十年，清晰地刺进你心里。`,
    effects: {
        sanity: -10,
        yin: 2,
        addItem: '虎头帽'
    },
    choices: [
        {
            text: '把衣物收好，带给秀兰',
            next: 'huimen_exp_ruins_baby_clothes_give',
            effects: { yin: 1 }
        },
        {
            text: '在废墟里为它们烧掉',
            next: 'huimen_exp_village_street',
            effects: { sanity: 5, yin: -3 }
        }
    ]
};

StoryData.huimen_exp_ruins_baby_clothes_give = {
    title: '归衣',
    text: `你抱着婴儿衣物来到井边。

秀兰的身影从井底浮出。她看着你怀里的衣服，颤抖着伸出手。

"我的孩子……" 她说，"我的孩子……"

她把衣物一件件抱在怀里，像抱着一个真实的婴儿。她的眼泪落在虎头帽上，却没有打湿它，而是化作一颗颗红色的珠子滚落。

"谢谢你。" 她说，"我终于可以为我的孩子穿一次衣服了。"

衣物在她怀里化作一道光，飞向了远方。秀兰的身影也淡了一些，怨念似乎减轻了。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '虎头帽',
        setFlag: 'huimen_exp_returned_baby_clothes'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_letter = {
    title: '遗书',
    text: `你在废墟的墙缝里发现一封信。

信封已经发黄，上面写着"秀兰亲启"。你打开信，里面是你祖父周文的字迹：

[faded]"兰妹：我今夜便来带你走。东厢房后墙有洞，你钻出来，我在老槐树下等你。此后天涯，再不分离。"[/faded]

[red]可他没能来。[/red]

信的背面还有一行字，是秀兰后来加上的：

[faded]"周文，我不怪你。我只怪这吃人的周家。"[/faded]

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,
    effects: {
        sanity: -8,
        yin: 2,
        addItem: '周文的信'
    },
    choices: [
        {
            text: '把信给秀兰看',
            next: 'huimen_exp_ruins_letter_show',
            effects: { yin: 1 }
        },
        {
            text: '收好，回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_letter_show = {
    title: '信归',
    text: `你把信放在井沿。

秀兰的身影浮出来，她看着信，手在发抖。

"他真的写过……" 她喃喃，"我以为他骗我。"

"他没有骗你。" 你说，"他只是没来得及。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，不是等他救我。" 她说，"是等一个答案。"

她抬起头，眼眶里的红色淡了一些："现在我有答案了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '周文的信',
        setFlag: 'huimen_exp_showed_zhou_wen_letter'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_grave = {
    title: '月下孤坟',
    text: `你沿着月光小路走，来到一座孤坟前。

坟没有碑，只有一块扁平的石头。石头上放着一束枯萎的桂花。

你蹲下身，发现石头下面压着一张纸：

[faded]"无名女子之墓。周家所害，无人祭奠。过路者若有余心，请献一花。"[/faded]

[red]这不是秀兰的坟。这是另一个被遗忘的女子。[/red]

你把那束枯桂花扶正，又从路边摘了一朵小白花放在上面。`,
    effects: {
        sanity: 3,
        yin: -3
    },
    choices: [
        {
            text: '在坟前磕个头',
            next: 'huimen_exp_moonlit_grave_bow',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '继续往前走',
            next: 'huimen_exp_moonlit_path_end',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_grave_bow = {
    title: '无名祭',
    text: `你跪在坟前，磕了三个头。

"我不知道你是谁。" 你说，"但我知道你受过委屈。我替你磕个头，愿你来生，能做个幸福的人。"

坟头的石头忽然裂了一道缝，缝里飘出一缕青烟。青烟在空中凝成一个人形，朝你福了一福。

"谢谢。" 她说，"我叫阿绣。三十年了，第一次有人给我磕头。"

她的身影消散在月光里。你站起身，感到胸口的压抑又轻了一些。`,
    effects: {
        sanity: 10,
        yin: -8,
        setFlag: 'huimen_exp_honored_unknown_woman'
    },
    choices: [
        {
            text: '继续往前走',
            next: 'huimen_exp_moonlit_path_end',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_river = {
    title: '月下河',
    text: `月光小路尽头有一条河。

河水是银色的，像流动的水银。河面上漂着许多纸船，每只船上都点着一根小蜡烛。

你蹲在河边，看见河水里映出许多张脸。有秀兰、有柳红、有阿绣，还有很多你不认识的女子。

"渡河吧。" 她们一起说，"渡过去，你就自由了。"

可你知道，这条河不是给人渡的。它是给亡魂渡的。`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '找船渡河',
            next: 'huimen_exp_moonlit_river_cross',
            effects: { yin: 3 }
        },
        {
            text: '沿河岸走',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_river_cross = {
    title: '渡河',
    text: `你找到一只小船，船夫是个穿蓑衣的老人。

"过河？" 老人问。

"是。" 你说。

"过河要付船钱。" 他说，"把你的名字写在船舷上。"

你拿起船上的笔，刚要写自己的名字，却停住了。

[red]你把名字写在船上，岂不是把命交给了河？[/red]

你转而写下"周氏秀兰"四个字。河水翻涌，船却平稳地驶向对岸。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '到对岸',
            next: 'huimen_exp_moonlit_escape',
            effects: { sanity: 5, yin: -5 }
        }
    ]
};

StoryData.huimen_exp_village_street_dawn = {
    title: '黎明前的村街',
    text: `你在村街上走了很久，久到月亮开始西斜。

村里的雾气变得稀薄，街道两旁的纸人开始枯萎，像被晒干的树叶。你听见远处传来鸡鸣声，可那鸡鸣声不像来自活鸡，而像来自某个纸扎的鸡。

[whisper]"天快亮了。"[/whisper] 秀兰的声音说，"天亮之前，你必须做出选择。"

你抬头看天，东方的云层里透出一丝灰白。那是黎明的前兆。

[red]可这个村子，从来没有真正天亮过。[/red]`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '趁天亮前离开村子',
            next: 'huimen_exp_moonlit_escape',
            effects: { yin: -3 }
        },
        {
            text: '继续探索',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '去村口老槐树下等天亮',
            next: 'huimen_exp_dawn_tree',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_dawn_tree = {
    title: '槐下待晓',
    text: `你来到村口老槐树下。

老槐树的树冠很大，遮住了半边天。树下站着两个纸扎人，一男一女，穿着大红喜服。他们的脸被雨水泡得发白，嘴角却还在笑。

你走近，发现男纸人的手里握着一封信，信封上写着"秀兰亲启"。

你抽出信，里面是你祖父的字迹：

[faded]"兰妹，今夜子时，老槐树下，我带你走。"[/faded]

[red]这封信，三十年前没能送到她手里。[/red]

你把信放在女纸人手里。一阵风吹过，两个纸人倒在地上，化为灰烬。`,
    effects: {
        sanity: -5,
        yin: 3,
        addItem: '老槐树下未寄出的信'
    },
    choices: [
        {
            text: '把信给秀兰',
            next: 'huimen_exp_dawn_tree_give_letter',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_dawn_tree_give_letter = {
    title: '迟到的信',
    text: `你来到井边，把信放在井沿。

秀兰的身影浮出来。她看着信，手在发抖。

"他真的来了？" 她问。

"他来了。" 你说，"只是没等到你。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，" 她说，"不是等他救我，是等他告诉我，他没有骗我。"

她的眼泪落进井里，井水变得清澈。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '老槐树下未寄出的信',
        setFlag: 'huimen_exp_gave_dawn_letter'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_night_repeat = {
    title: '再临夜井',
    text: `你再次来到井边。

井比上次更安静。水面如镜，映出你的脸，也映出你身后的村子。村子在井水里是倒着的，像另一个世界。

[whisper]"你又来了。"[/whisper] 秀兰说，"这次，你想问什么？"

你想了想，问："你为什么一直在井里？"

"因为井底最黑。" 她说，"黑到可以把所有的委屈都藏起来。"

[red]可委屈藏久了，就成了怨。[/red]`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '问她最想要什么',
            next: 'huimen_exp_xiulan_wish',
            effects: { yin: 1 }
        },
        {
            text: '给她讲外面的世界',
            next: 'huimen_exp_xiulan_outside_world',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_wish = {
    title: '秀兰的愿望',
    text: `秀兰想了很久。

"我最想要的？" 她说，"我想穿一次凤冠霞帔，光明正大地嫁一次人。不是冥婚，不是替身，是堂堂正正地拜天地。"

"我还想吃一次桂花糕。小时候母亲说过，嫁人的时候，要请全村人吃桂花糕。"

"我还想……" 她顿了顿，"想有人在我死的时候，叫我一声秀兰，而不是不祥女。"

[red]她的愿望很小，小到让人心碎。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_knows_xiulan_wish'
    },
    choices: [
        {
            text: '答应帮她实现愿望',
            next: 'huimen_exp_xiulan_wish_promise',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '沉默',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_wish_promise = {
    title: '承诺',
    text: `你说："我会帮你实现。我带你去拜天地，给你买桂花糕，让所有人都叫你的名字。"

秀兰愣了一下，然后笑了。她笑得很轻，像一片落叶飘在水面。

"你知不知道，" 她说，"男人骗女人的时候，最喜欢说'我会'。"

"我不会骗你。" 你说。

秀兰看着你，眼眶里的红色渐渐褪去。

"那好。" 她说，"我信你这一次。"

井水泛起涟漪，像是一个女子终于舒展了眉头。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'xiulanMercy'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_outside_world = {
    title: '外面',
    text: `你坐在井沿上，给秀兰讲外面的世界。

你讲汽车、火车、飞机，讲高楼、电影、手机。你讲女孩子可以读书、工作、自己决定嫁不嫁人。

秀兰听得入神，时不时问一句："真的吗？"

"真的。" 你说，"如果你活到现在，你可以做任何想做的事。"

秀兰沉默了很久，然后说："那下辈子，我要活在你说的那个世界里。"

[whisper]"我要考大学，要当老师，要嫁一个真心待我的人。"[/whisper]

[red]她的声音很轻，却带着一种穿越三十年的渴望。[/red]`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '告诉她一定会的',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -3 }
        }
    ]
};

StoryData.huimen_exp_paper_shop_craftsman_memory = {
    title: '扎纸匠的记忆',
    text: `你再次来到纸扎铺，老人还在糊纸人。

这次他没有抬头，只是自顾自地说："我年轻时，也爱过一个人。"

你停下脚步。

"她也是周家的'不祥女'，叫阿绣。她被沉塘那天，我躲在人群里，不敢出声。"

"后来我开始扎纸人。每扎一个，我就当是给她扎一个替身。扎了三十年，她的魂还是没回来。"

[red]原来扎纸匠不是周家的帮凶，也是周家的受害者。[/red]

"你如果能救出秀兰，" 他说，"能不能也替我问问阿绣，她恨不恨我？"`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_knows_craftsman_past'
    },
    choices: [
        {
            text: '答应他',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_temple_donation = {
    title: '捐香火',
    text: `你在庙里找到一个破旧的功德箱。

功德箱上写着"周家香火"，箱口已经生锈。你摸了摸口袋，掏出那枚清代铜钱，投了进去。

铜钱落箱，发出一声清脆的响声。庙里的阴影忽然退散了许多。

"这不是周家的香火。" 一个声音说，"这是秀兰的香火。"

你抬头，看见庙梁上刻着一行小字：

[faded]"凡捐一文者，可减秀兰一日之苦。"[/faded]

[red]原来这枚铜钱，是专门为秀兰准备的。[/red]`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '清代铜钱'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_candle = {
    title: '点烛',
    text: `你在祖祠的香炉里找到一根没烧完的红烛。

烛身上刻着"长命"二字，是周家男丁出生时点的。你把蜡烛点燃，烛火却是青白色的。

火焰里浮现出许多女子的脸，她们在火中扭曲、挣扎。

"这不是长命烛。" 秀兰的声音说，"这是续命烛。周家男人多活的每一年，都是我们的命续的。"

[red]你看着那根蜡烛，感到一阵恶心。[/red]

你吹灭了它。`,
    effects: {
        sanity: -5,
        yin: 3
    },
    choices: [
        {
            text: '把蜡烛折断',
            next: 'huimen_exp_ancestral_candle_break',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把蜡烛收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '续命烛' }
        }
    ]
};

StoryData.huimen_exp_ancestral_candle_break = {
    title: '折烛',
    text: `你用力折断蜡烛。

蜡烛断成两截，里面的蜡芯不是棉线，而是一缕头发。头发在火焰里卷曲、焦黑，发出一股腥臭。

祖祠里的牌位开始颤抖，最上面的"周氏先祖"牌位"咔嚓"一声裂开。

"你断了周家的命！" 阴影们尖叫。

"不。" 你说，"我断了周家偷来的命。"

蜡烛彻底熄灭，祖祠陷入黑暗。可你并不害怕，因为你知道，黑暗之后，会是真正的天亮。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_broke_continuing_life_candle'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_mulberry_weep = {
    title: '树泣',
    text: `你听见桑树在哭。

不是风声，是树本身在发出低沉的呜咽。树干上的裂缝里渗出红色的汁液，像眼泪一样往下流。

你把手放在树干上，感到一阵剧烈的悲伤。那不是你的悲伤，是树的悲伤，是秀兰的悲伤，是所有被周家害死的女子的悲伤。

"我们不该是这样的结局。" 树说，"我们也曾开花，也曾结果，也曾被人爱过。"

[red]你抱住树干，像抱住一个哭泣的人。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '陪树哭一会儿',
            next: 'huimen_exp_mulberry_weep_stay',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '用袖子擦去树泪',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -3 }
        }
    ]
};

StoryData.huimen_exp_mulberry_weep_stay = {
    title: '同悲',
    text: `你靠着桑树坐下，任由悲伤淹没你。

你想起秀兰十六岁的笑容，想起她未出世的孩子，想起她被活埋的那个雨夜。你想起周家三十七个女子的名字，想起她们各自来不及过的人生。

你的眼泪和树的眼泪混在一起，渗入泥土。

[whisper]"谢谢你为我们哭。"[/whisper] 秀兰说，"三十年了，第一次有人为我们哭。"

天边的月亮似乎亮了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_wept_with_mulberry'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_photo = {
    title: '旧照',
    text: `你在废墟的墙缝里又找到一张照片。

照片上是年轻的秀兰和一个女子站在一起。那女子穿着粗布衣裳，笑得很腼腆。

照片背面写着："秀兰与阿绣，民国二十二年春。"

[red]阿绣，就是扎纸匠爱过的那个女子。[/red]

你把照片收好。也许有一天，你可以把它带给扎纸匠，告诉他阿绣没有恨他。`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '秀兰与阿绣的合照'
    },
    choices: [
        {
            text: '把照片给扎纸匠',
            next: 'huimen_exp_ruins_photo_give',
            condition: { flag: 'huimen_exp_knows_craftsman_past' },
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_photo_give = {
    title: '还照',
    text: `你把照片交给扎纸匠。

老人接过照片，手抖得厉害。他看着照片上的阿绣，眼眶里的墨渍湿润了。

"她没有恨我。" 他喃喃，"她笑得多开心。"

"她不恨你。" 你说，"她知道你无能为力。"

扎纸匠把照片贴在心口，照片化作一道光，渗入他的身体。他的身体开始变得透明。

"谢谢你。" 他说，"我可以去找她了。"

他化作一阵风，吹出了纸扎铺。铺子里的纸人纷纷倒下，像失去了主人。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰与阿绣的合照',
        setFlag: 'huimen_exp_craftsman_released'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_path_memory = {
    title: '记忆路',
    text: `你再次踏上月光小路。

这次，路面不再只是银色的，而是开始浮现画面。你每走一步，就看见秀兰的一段记忆。

她第一次穿新衣裳，第一次收到情书，第一次偷偷和祖父牵手。然后是怀孕，是被发现，是被拖向井边。

[red]这条路，是她的整个人生。[/red]

你走到画面最后，看见秀兰躺在井底，手里握着一张纸。你蹲下身子，发现那张纸是你的照片。

"我等的是你吗？" 她问，"还是只是等一个愿意看我的人？"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '告诉她你一直在看她',
            next: 'huimen_exp_moonlit_path_memory_stay',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '继续往前走',
            next: 'huimen_exp_moonlit_path_end',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_path_memory_stay = {
    title: '看见',
    text: `你说："我看见你了。从出生到死亡，每一段我都看见了。你不是不祥女，你是一个很好的姑娘。"

秀兰的身影在月光里凝实。她看着你，眼泪无声地落下。

"你真的看见了？" 她问。

"真的。"

"那你能不能记住我？" 她说，"不要只记住我是鬼，记住我曾经也爱笑，爱穿花衣裳，爱听戏。"

"我答应你。" 你说。

月光更亮了，像是一盏为一个人点亮的灯。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_truly_saw_xiulan'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_sing = {
    title: '秀兰唱戏',
    text: `你坐在井边，秀兰给你唱了一段戏。

她唱的是《游园惊梦》，声音没有鬼气，反而带着少女的清亮。她唱到"良辰美景奈何天"时，停顿了一下。

"我以前最想学的，就是这段。" 她说，"可周家说，戏子伤风败俗，不许我学。"

"你唱得很好。" 你说。

秀兰笑了："真的吗？"

"真的。" 你说，"比戏台上的名角儿都好。"

她笑得更开心了，像得到了全世界最好的夸奖。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '让她再唱一段',
            next: 'huimen_exp_xiulan_sing_more',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_sing_more = {
    title: '再唱',
    text: `秀兰又唱了一段《惊梦》。

这次她唱得更投入，水袖在空中挥舞。你虽然看不见袖子，但能感觉到风在跟着她的声音流动。

唱到最高处，她的声音忽然断了。

"对不起，" 她说，"三十年没唱，嗓子生了。"

"没关系。" 你说，"你已经唱得很好了。"

秀兰点点头，脸上带着满足的笑。你忽然觉得，如果她能一直这样笑，该有多好。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp_heard_xiulan_sing'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '和她一起唱完最后一段',
            ending: 'huimen_exp_ending_sing_together',
            condition: { flag: 'huimen_exp_heard_xiulan_sing' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_xiulan_dance = {
    title: '月下舞',
    text: `秀兰从井里出来，在月光下跳舞。

她没有脚，身影是飘着的。可她的舞姿很美，像一片落叶，像一缕轻烟，像三十年前那个还没被伤害的少女。

你坐在井沿上，静静地看。

"我母亲说，" 她一边跳一边说，"我跳舞的时候，像天上的仙女。"

"你母亲说得对。" 你说。

秀兰转了个圈，身影在月光里散开，又聚拢。

"可惜，她没能看见我嫁人。" 她说。

[red]月光下，她的舞带着一种说不出的凄美。[/red]`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '鼓掌',
            next: 'huimen_exp_xiulan_dance_clap',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_dance_clap = {
    title: '鼓掌',
    text: `你鼓起掌来。

秀兰停住，不好意思地低下头："跳得不好。"

"很好。" 你说。

她抬起头，眼里有光。那是你第一次在她眼里看到光，不是鬼火，而是活人一样的光。

"如果能再跳一次给周文看就好了。" 她说。

"他看见了。" 你说，"在另一个世界，他一定看见了。"

秀兰点点头，身影渐渐淡去。你知道，她又回到了井里。但她的心情，似乎好了很多。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_xiulan_danced'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '邀请她再跳最后一支舞',
            ending: 'huimen_exp_ending_last_dance',
            condition: { flag: 'huimen_exp_xiulan_danced' },
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_xiulan_cook = {
    title: '桂花糕',
    text: `你想起秀兰想吃桂花糕的愿望。

你在村子里找到一间废弃的厨房，里面还有一些发霉的糯米和桂花。你勉强做了一块桂花糕，端到井边。

秀兰看着那块黑乎乎的糕点，笑了。

"这算桂花糕吗？" 她问。

"算吧。" 你说，"条件有限。"

她伸手碰了碰糕点，糕点化作一道光，被她吸进身体里。

"甜的。" 她说，"虽然是鬼，但我尝到了甜味。"

[red]你看着她满足的样子，心里又酸又软。[/red]`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_sew = {
    title: '嫁衣',
    text: `你找到一块红布和针线，决定给秀兰做一件嫁衣。

你的针线活很糟糕，做出的嫁衣歪歪扭扭。但秀兰穿在身上，却很高兴。

"这是我第二件嫁衣。" 她说，"第一件被他们烧了，说是不祥。"

"这件不会被烧。" 你说，"我会把它和你一起，堂堂正正地埋进土里。"

秀兰摸着嫁衣上的针脚，眼泪落了下来。

"你的手很笨。" 她说，"但你的心很细。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_made_xiulan_dress'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_school = {
    title: '学堂',
    text: `你带秀兰"去"了一趟学堂。

其实是你在村口的旧学堂遗址里，给她讲课本上的知识。你讲地理、历史、算术，她听得津津有味。

"原来世界这么大。" 她说。

"是啊。" 你说，"比周家村大得多。"

"如果我能去上学，" 她说，"我想当老师，教女孩子们认字。"

"你可以的。" 你说，"下辈子一定可以。"

秀兰笑了，那笑容里没有怨，只有对未来的向往。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_old_coin = {
    title: '用钱',
    text: `你掏出那枚清代铜钱。

铜钱在月光下泛着幽幽的光。你想起老妇的话：这枚铜钱，是秀兰的买命钱。

你来到井边，把铜钱投入井中。

"秀兰，" 你说，"我用这枚铜钱，买你自由。"

铜钱落水，发出一声清脆的响声。井水开始翻涌，一个女子的身影浮出来。

"你买了我的命？" 她问。

"不。" 你说，"我买你的自由。"`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '清代铜钱',
        setFlag: 'huimen_exp_used_old_coin'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_silk = {
    title: '织锦',
    text: `你收集桑树上的银丝，编成一小段锦带。

锦带很细，却带着桑树的温度。你把它系在手腕上，感到一阵安心。

"这是命丝。" 秀兰说，"你把它带在身上，周家就绑不走你的命。"

你点点头，把锦带系紧。

"也给我一根。" 秀兰说。

你又编了一根，放进井里。井水轻轻荡漾，像是一个女子收下了礼物。`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '桑叶',
        addItem: '命丝锦带'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_child_tooth = {
    title: '护身',
    text: `你握紧那枚护身乳牙。

牙齿在你手心里发热，像一颗小小的心脏。你感到有什么东西在保护你，让周围的阴气不敢靠近。

"这是元宝的牙。" 秀兰说，"他把自己的命分了一点给你。"

你把牙齿贴身收好。虽然它只是一颗小小的乳牙，却重得像一份承诺。

"告诉他，" 秀兰说，"谢谢他。"`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '护身乳牙'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_liu_hong_dress = {
    title: '还衣',
    text: `你取出柳红的戏服。

戏服在月光下泛着暗红的光，心口的裂缝还在。你对着戏服说："柳红，我会带你离开这里。"

戏服轻轻飘动，像有人在点头。

秀兰的声音从井里传来："柳红是我最好的朋友。我们死后才认识的。"

"我会把她的衣服交给赶尸匠。" 你说，"他会带她回家。"

戏服化作一道红光，飞入你的怀中。你感到一阵温暖，那是两个女子对你的信任。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_final_confrontation = {
    title: '最终对质',
    text: `你回到村中央，那里站着周家所有的祖先。

他们的身影模糊，却带着压迫感。最老的那个祖先走上前："你闹够了没有？"

"没有。" 你说，"我要带秀兰走，要给所有被周家害死的女子正名。"

"你敢！" 祖先们齐声怒吼，"没有这些女子的血，周家早就完了！"

[red]你终于听到了真相：周家的兴旺，是踩着女人的尸骨堆起来的。[/red]

"那周家就完了。" 你说，"从今天起，周家不再靠女人续命。"`,
    effects: {
        sanity: -10,
        yin: 5
    },
    choices: [
        {
            text: '用族谱和她们谈判',
            next: 'huimen_exp_final_choice',
            condition: { hasItem: '周家秘录' },
            effects: { yin: -5 }
        },
        {
            text: '直接冲过去',
            ending: 'huimen_exp_ancestor_judge',
            effects: { sanity: -10, yin: 5 }
        }
    ]
};

StoryData.huimen_exp_final_choice = {
    title: '抉择',
    text: `你翻开周家秘录，当着所有祖先的面，把记载女子罪名的那一页撕了下来。

"周家的债，我来还。" 你说，"但你们欠她们的清白，我现在就还给她们。"

你把撕下的纸页点燃，火焰不是普通的火焰，而是金色的。火光里，三十七个女子的身影浮现出来。

"我们自由了。" 她们说。

祖先们的身影开始颤抖、扭曲，最后化为灰烬。

[red]周家的诅咒，从你这一代，彻底终结。[/red]`,
    effects: {
        sanity: 20,
        yin: -20,
        removeItem: '周家秘录',
        setFlag: 'huimen_exp_ended_zhou_curse'
    },
    choices: [
        {
            text: '带秀兰离开',
            next: 'huimen_exp_redemption_loop',
            effects: { yin: -5 }
        }
    ]
};

// 新增结局
Endings.huimen_exp_ending_village_memory = {
    title: '隐藏结局 · 守忆人',
    text: `你决定不离开村子。

不是被困，而是自愿留下。你成了村子的"守忆人"，记住每一个被周家害死的女子，记住她们的名字、笑容和未竟的梦想。

每年中元节，你都会坐在井边，给秀兰唱一段《游园惊梦》。她的身影在月光里跳舞，像三十年前那个少女。

村民们渐渐忘了这个村子的恐怖。他们只记得，老宅后山有一位守墓人，守着一个叫秀兰的女子。

你活了很久，久到把她们的故事写成了一本书。书出版那天，你在扉页上写了一句话：

"她们不是鬼，她们只是没来得及被爱的人。"`
};

Endings.huimen_exp_ending_paper_doll_burned = {
    title: '隐藏结局 · 焚尽纸人',
    text: `你点燃了村子里所有的纸人。

纸扎铺、老宅、村口、巷尾，所有长着周家人脸的纸人都在火中尖叫。火光映红了夜空，像一场迟到的审判。

秀兰站在火外，看着这一切。

"你烧了周家三十年的替身。" 她说，"从今以后，周家再没有人能借别人的命活下去。"

你点点头，把手伸进火里。火焰没有灼伤你，反而温暖得像一场拥抱。

"我也烧了我自己的替身。" 你说，"从今以后，我只做我自己。"

纸灰被风吹散，村子开始崩塌。你和秀兰站在废墟上，看着第一缕真正的阳光照进来。`
};

Endings.huimen_exp_ending_name_list = {
    title: '隐藏结局 · 名单',
    text: `你把女子名单带出了村子。

名单上有三十七个名字。你找到了记者、历史学家、女性权益组织。三个月后，周家村的丑闻被全国报道。

秀兰的名字第一次以受害者的身份出现在报纸上，而不是"不祥女"。柳红、阿绣、云袖……每一个名字都被世人看见。

你在村口的废墟上立了一块碑，碑上刻着所有女子的名字。每年清明，都有人前来献花。

秀兰给你托梦，说："我们终于不再是地下的影子了。"

你醒来时，枕边放着一朵干枯的桂花。`
};

Endings.huimen_exp_ending_sing_together = {
    title: '隐藏结局 · 同唱',
    text: `你和秀兰一起唱完了《游园惊梦》。

不是在一个世界。你在井外，她在井里。但你们的歌声穿过井水，穿过月光，穿过了三十年的时光。

唱到最后一句"则为你如花美眷，似水流年"时，井水里浮出一件大红嫁衣。

"这是我唯一一件嫁衣。" 秀兰说，"你帮我穿上，我就算嫁过了。"

你把嫁衣展开，轻轻放在井沿。嫁衣化作一道红光，升入夜空。

"谢谢你。" 秀兰说，"这是我最好的婚礼。"`
};

StoryData.huimen_exp_village_street_midnight = {
    title: '子夜村街',
    text: `子时到了。

村街忽然安静下来，纸人、灯笼、纸钱，都停住了。整个村子像被按下了暂停键，只有你的心跳还在响。

你抬头看天，月亮变成了血红色。月光照在地上，把石板路照得像一条血河。

[whisper]"子时是一天的尽头，也是阴阳交替的时候。"[/whisper] 秀兰的声音说，"在这个时候，你可以看见村子真正的样子。"

你环顾四周，发现每一栋房子都在渗出黑色的液体，像血，又像墨。那些液体顺着石板缝流向村子中央，流向那口井。`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '去村子中央看看',
            next: 'huimen_exp_village_heart',
            effects: { yin: 2 }
        },
        {
            text: '找地方躲起来',
            next: 'huimen_exp_village_street',
            effects: { sanity: -3, yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_heart = {
    title: '村心',
    text: `你来到村子中央。

那里没有井，只有一棵巨大的树。树的根须裸露在地面上，像无数条纠缠的蛇。每一根根须上都缠着红绳，红绳的另一端消失在地下。

你走近树，发现树干上刻着密密麻麻的名字。有周家男丁的，也有女子的。男子的名字是凸出来的，女子的名字是凹进去的。

[red]这棵树在吸女子的命，养男子的寿。[/red]

你伸手去摸一个凹进去的名字，指尖传来一阵刺痛，像被针扎。`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp_saw_village_heart_tree'
    },
    choices: [
        {
            text: '用刀割断根须',
            next: 'huimen_exp_village_heart_cut',
            condition: { hasItem: '缠发剪刀' },
            effects: { sanity: -5, yin: -10 }
        },
        {
            text: '把女子的名字刻深一些',
            next: 'huimen_exp_village_heart_names',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_heart_cut = {
    title: '断根',
    text: `你用缠发剪刀割向根须。

根须断裂的瞬间，整个村子震动起来。地下传来无数女子的尖叫，不是痛苦，而是解脱。

黑色的液体从断根处喷涌而出，却不是血，而是像墨水一样的东西。那些被吸走的命，正在回流。

树开始枯萎，叶子一片片落下。每一片叶子上都写着一个女子的名字。

[red]你断了周家续命的根。[/red]

你感到自己的身体在变轻，像是某种束缚被解开了。`,
    effects: {
        sanity: 10,
        yin: -15,
        removeItem: '缠发剪刀',
        setFlag: 'huimen_exp_cut_village_heart_root'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_heart_names = {
    title: '刻名',
    text: `你用手指去抠那些凹进去的女子名字。

指甲翻了，血渗进树干的缝隙里。可你没有停，你一个名字一个名字地抠，把它们抠深，抠清晰。

"秀兰"、"柳红"、"阿绣"、"云袖"……每一个名字被抠深时，树都会颤抖一下。

"你干什么！" 树发出周家祖先的声音，"你敢让她们的名字比男丁的深！"

"为什么不敢？" 你说，"她们的命，比你们的名字重得多。"`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp_deepened_women_names'
    },
    choices: [
        {
            text: '继续刻',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_empty = {
    title: '空村',
    text: `你走着走着，发现村街空了。

纸人不见了，灯笼熄灭了，连风声都停了。整条街只剩你一个人，脚步声在空旷中回响。

你推开一扇门，屋里空荡荡的，只有一张供桌。供桌上摆着一张照片，照片里是一家人的合影。

你仔细一看，照片上的人都没有脸。

[red]这个村子的人，早就不是人了。他们只是一段段被保存下来的记忆。[/red]

你把照片翻过来，背面写着："周家村，民国二十三年。"`,
    effects: {
        sanity: -8,
        yin: 2,
        addItem: '民国二十三年周家村合影'
    },
    choices: [
        {
            text: '把照片收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_laugh = {
    title: '笑声',
    text: `你听见一阵笑声。

笑声从四面八方传来，像是很多人在笑，又像是同一个人在不同的方向笑。你转了一圈，看不见人。

"谁？" 你问。

笑声停了。然后一个声音说："我们在笑你。你居然还想救秀兰。"

"秀兰不值得救。" 另一个声音说，"她是个贱人，勾引周家少爷。"

"她该死。" 又一个声音说。

[red]你认出了这些声音。它们是三十年前围观秀兰被活埋的村民。[/red]

"她不该死。" 你说，"该死的是你们。"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '大声反驳他们',
            next: 'huimen_exp_village_street_laugh_refute',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '不去理会',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_laugh_refute = {
    title: '驳斥',
    text: `你大喊："秀兰没有勾引任何人！她和你我一样，只是想活下去！你们把她活埋，不是因为她是坏人，是因为你们懦弱！"

笑声变成了尖叫。

"你胡说！"

"我们没错！"

"周家让我们干的！"

"周家让你们干，你们就干？" 你冷笑，"那你们的命，和周家的狗有什么区别？"

笑声彻底消失了。村子里安静了很久。

[red]你感到一种奇异的痛快，像是替秀兰出了一口三十年前的气。[/red]`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_refuted_villagers'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_cry = {
    title: '哭声',
    text: `你听见有人在哭。

不是秀兰的哭，是很多女人的哭，层层叠叠，像潮水一样涌来。你捂住耳朵，哭声还是从指缝里钻进来。

你蹲在地上，感到一阵无力。这些哭声里有绝望，有不甘，有对生命的眷恋。

[whisper]"救救我们……"[/whisper] 她们说，"我们不想做鬼……"

你抬起头，发现街道两旁的墙壁上浮现出许多张脸。都是女子的脸，有的年轻，有的苍老，有的还带着婴儿肥。

她们在墙里哭。`,
    effects: {
        sanity: -12,
        yin: 3
    },
    choices: [
        {
            text: '对她们说我会记住你们',
            next: 'huimen_exp_village_street_cry_promise',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '逃离哭声',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 2 }
        }
    ]
};

StoryData.huimen_exp_village_street_cry_promise = {
    title: '记住',
    text: `你说："我会记住你们。每一个人的名字，每一个人的脸，我都会记住。"

哭声渐渐小了。墙上的脸一个个露出感激的表情，然后慢慢淡去。

"谢谢你……" 她们说，"记住我们，我们就还存在。"

最后消失的那张脸，是一个年轻的姑娘。她朝你笑了笑，那笑容里没有怨，只有释然。

你站起身，感到自己的肩膀上多了一份重量。那是三十七个女子的托付。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_promised_to_remember'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_baby = {
    title: '婴啼',
    text: `你听见婴儿的哭声。

哭声很细，像是从很远的地方传来，又像是从你脚边传来。你低头看，石板缝里伸出一只小小的手。

那是一只婴儿的手，苍白，柔软，五指张开，像在抓什么。

[red]这是秀兰未出世的孩子。[/red]

你蹲下身，轻轻握住那只小手。小手很凉，却在你手心里动了动。

"娘……" 一个微弱的声音说，"我要娘……"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '带他去见秀兰',
            next: 'huimen_exp_village_street_baby_to_xiulan',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '松开手',
            next: 'huimen_exp_village_street',
            effects: { sanity: -5, yin: 2 }
        }
    ]
};

StoryData.huimen_exp_village_street_baby_to_xiulan = {
    title: '母子',
    text: `你捧着那只小手，来到井边。

秀兰的身影立刻浮出来。她看见那只小手，发出一声撕心裂肺的哭喊："我的孩子！"

小手从石板缝里挣脱出来，化作一个透明的小婴儿，飘向秀兰。秀兰接过婴儿，紧紧抱在怀里。

"元宝……我的元宝……" 她哭着说。

婴儿在她怀里笑了，小手抓着她的头发。

[red]这一刻，你不是在救一个怨鬼，而是在帮一个母亲找回孩子。[/red]

秀兰抬起头，泪眼婆娑地看着你："谢谢你。这是我三十年来，第一次抱他。"`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp_reunited_xiulan_and_baby'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_bride_parade = {
    title: '送亲',
    text: `你看见一队送亲的队伍从巷子里出来。

不是纸人，而是真正的村民。他们穿着三十年前的衣裳，抬着一顶红轿子，脸上带着喜庆的笑。

可那喜庆里透着诡异。轿帘掀开，里面坐着一个盖着红盖头的女子。女子的手腕上系着红绳，红绳的另一端被四个村民牵着。

[red]这不是送亲，是送葬。[/red]

队伍从你面前经过，你没有动。最后一抬轿的村民看了你一眼，说："小伙子，让让，别挡着新娘子回门。"

回门？死人回什么门？`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '拦住队伍',
            next: 'huimen_exp_village_street_bride_parade_stop',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '让开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_bride_parade_stop = {
    title: '拦轿',
    text: `你冲到轿子前，掀开轿帘。

里面的女子抬起头，红盖头滑落。她的脸和秀兰一模一样，但眼神空洞，像是一个被操控的傀儡。

"秀兰？" 你喊。

"我不是秀兰。" 她说，"我是下一个秀兰。"

村民们的脸变了，变得纸一样白。他们朝你围过来："你也要上轿吗？"

你抱起轿子里的女子，转身就跑。她的身体很轻，像一张纸。

"谢谢你。" 她说，"我终于可以不用回门了。"`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp_saved_next_bride'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_horse = {
    title: '纸马',
    text: `你看见一匹纸马站在路边。

纸马很高，差不多到你的肩膀。它的眼睛是两个黑洞，鼻孔里却喷出白气。

你走近它，它低下头，用鼻子蹭了蹭你的手。纸做的鼻子居然有温度。

"你想带我走？" 你问。

纸马点了点头。

你骑上马背。纸马迈开步子，跑向村口。风在你耳边呼啸，纸马的鬃毛扫过你的脸。

[red]它真的要带你离开这个村子。[/red]`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '让它带你走',
            next: 'huimen_exp_moonlit_escape',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '跳下马',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_well_sound = {
    title: '井响',
    text: `你听见井里传来声音。

不是水声，是敲击声，像有人在井底敲打着井壁。"咚咚咚"，很有节奏。

你来到井边，对着井口喊："是谁？"

敲击声停了。然后一个声音说："是我。秀兰。我在井底刻字，刻了三十年。"

"你刻了什么？"

"刻我的名字。" 她说，"我怕时间久了，连我自己都忘了自己是谁。"

[red]你探头看，井壁上密密麻麻全是"秀兰"两个字。[/red]`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '对她说我记得你',
            next: 'huimen_exp_village_street_well_sound_remember',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_well_sound_remember = {
    title: '记得',
    text: `你说："我记得你。你是周秀兰，民国三年生，喜欢桂花糕，喜欢听戏，想当老师。"

井底的敲击声停了。过了一会儿，传来轻轻的啜泣。

"你真的记得。" 秀兰说，"不是只记得我是鬼。"

"我记得你是人。" 你说，"一个很好的人。"

井壁上的"秀兰"两个字开始发光，然后一个个从井壁上脱落，像萤火虫一样飞向夜空。

"我不需要再刻了。" 她说，"因为有人会记得我了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_xiulan_remembered'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_ancestor_shadow = {
    title: '祖影',
    text: `你看见一个老人的影子跟在身后。

影子没有主人，就这么贴着地面走。你快它也快，你慢它也慢。

你停下，转身："你是谁？"

影子从地上立起来，化作一个穿长袍的老者。他的脸是模糊的，但下巴有一颗痣——和周家男人一样的痣。

"我是周家的先祖。" 他说，"我来劝你回头。"

"回头？" 你冷笑，"回去做周家的祭品？"

"你可以做周家的救星。" 他说，"娶了秀兰，平息她的怨，周家还能再续百年。"

[red]你明白了，他们从来没有把秀兰当人看，只把她当工具。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '拒绝',
            next: 'huimen_exp_village_street_ancestor_shadow_refuse',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '假装答应',
            next: 'huimen_exp_village_street',
            effects: { yin: 2 }
        }
    ]
};

StoryData.huimen_exp_village_street_ancestor_shadow_refuse = {
    title: '拒祖',
    text: `你说："周家的百年，不该用女人的血来续。"

老者影子的脸扭曲了："逆子！没有周家，哪来的你！"

"没有那些女子，也没有周家。" 你说，"你们吸她们的血，还觉得自己高高在上。"

你掏出打火机，点燃一张黄符，扔向影子。

影子发出一声尖叫，像被火烧的纸一样卷曲、焦黑，最后化为一缕烟。

"周家的根，早就烂了。" 你说。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_refused_ancestor_shadow'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_red_thread = {
    title: '红线',
    text: `你发现自己的手腕上缠着一根红线。

红线很细，一头系在你手腕上，另一头延伸到街道深处。你顺着红线走，发现它穿过无数纸人的手腕，最后系在一口井上。

这是秀兰的红线。她把所有的纸人都连在自己身上，像是一个巨大的蜘蛛网。

[red]你在这张网里，也是一只猎物。[/red]

可你忽然发现，红线不是绑着你的，而是绕着你。它似乎在保护你，不让纸人靠近。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '顺着红线去井边',
            next: 'huimen_exp_well_night',
            effects: { yin: 1 }
        },
        {
            text: '把红线系紧',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2 }
        }
    ]
};

StoryData.huimen_exp_xiulan_laugh = {
    title: '秀兰的笑',
    text: `你讲了一个很冷的笑话给秀兰听。

秀兰愣了一下，然后"噗嗤"一声笑了出来。她笑得很大声，像是很久没有这样笑过。

"你真傻。" 她说，"这种笑话也讲得出来。"

"能让你笑就行。" 你说。

秀兰笑够了，擦了擦眼角。她的眼泪是红色的，但笑容是真的。

"谢谢你。" 她说，"我死之前，也爱笑。死后三十年，今天才知道自己还能笑。"`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '再讲一个',
            next: 'huimen_exp_xiulan_laugh_more',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_laugh_more = {
    title: '再笑',
    text: `你又讲了一个更冷的笑话。

这次秀兰没有立刻笑，而是看着你，眼神温柔。

"你知道吗，" 她说，"周文以前也这样逗我笑。他讲的笑话比你还可笑。"

"那后来呢？"

"后来……" 她低下头，"后来我就不笑了。"

你沉默了一会儿，说："那从现在开始，你可以再笑了。不是为了他，是为了你自己。"

秀兰抬起头，又笑了。这次笑得更久，更深。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_made_xiulan_laugh'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_angry = {
    title: '秀兰的怒',
    text: `你问秀兰："你恨周家吗？"

秀兰的脸色变了。井里的水开始翻涌，像一锅沸腾的血。

"恨？" 她说，"我恨了三十年。我恨周文的母亲，恨那些村民，恨周家的每一块砖。"

"那你恨周文吗？"

她愣了一下，然后低下头："恨。也不恨。我恨他没有救我，可我明白他救不了我。"

[red]她的愤怒像井水一样汹涌，却也像井水一样深不见底。[/red]

"你想让我不恨吗？" 她问。

"不。" 你说，"你有权利恨。但别让恨把你永远困在这里。"`,
    effects: {
        sanity: -5,
        yin: 3
    },
    choices: [
        {
            text: '帮她发泄愤怒',
            next: 'huimen_exp_xiulan_angry_release',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '安静地陪她',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_angry_release = {
    title: '泄愤',
    text: `你捡起一块石头，递给秀兰。

"砸吧。" 你说，"把井壁砸碎，把恨都砸出来。"

秀兰接过石头——不，是阴气凝成的石头——砸向井壁。

"砰！砰！砰！" 每一声都像是三十年的控诉。

井壁上的符咒开始剥落，井水开始变清。秀兰砸了整整一百下，直到阴气耗尽，瘫坐在井底。

"够了。" 她说，"我不想再砸了。"

你坐在井沿，陪着她。天边的月亮，似乎亮了一些。`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp_xiulan_anger_released'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_scared = {
    title: '秀兰的怕',
    text: `你忽然发现秀兰在发抖。

"你怎么了？" 你问。

"我怕。" 她说，"我怕天亮。"

"为什么？"

"因为天亮之后，我可能就不存在了。" 她说，"鬼是不能见太阳的。"

你看着她，心里一阵难过。她等了三十年的解脱，却害怕解脱本身。

"你不会消失。" 你说，"你会变成风，变成雨，变成桂花。你会以另一种方式存在。"

秀兰看着你，眼眶里的红色淡了一些："真的吗？"

"真的。" 你说，"我会记得你。这就是你的存在。"`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '握住她的手',
            next: 'huimen_exp_xiulan_scared_hold',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_scared_hold = {
    title: '相握',
    text: `你把手伸进井水，握住秀兰的手。

她的手很凉，但你没有缩回。你握着她的手，像握着一块冰，也像握着一个即将融化的梦。

"我不怕了。" 她说，"有人在，我就不怕。"

你点点头，眼泪却不争气地流了下来。你为秀兰哭，也为所有来不及被爱的人哭。

井水开始变暖，秀兰的手也渐渐有了温度。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_held_xiulan_hand'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_hope = {
    title: '秀兰的愿',
    text: `秀兰问你："外面的世界，女孩子真的可以自己做主吗？"

"可以。" 你说，"她们可以读书、工作、旅行、结婚或者单身。没有人可以强迫她们。"

"那下辈子，" 她说，"我要做你所说的那种女孩。"

"你一定会的。" 你说。

秀兰笑了，那笑容里没有怨，只有希望。

"那我等你。" 她说，"等下辈子，我们做朋友。"

"好。" 你说，"下辈子，我们做朋友。"`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_well_bottom = {
    title: '井底',
    text: `你再次下到井底。

这次井底没有红棺，只有一片空旷。井壁上密密麻麻刻着"秀兰"两个字，每一笔都刻得很深。

你伸手去摸那些字，指尖传来一阵刺痛。那是秀兰用指甲刻了三十年留下的痕迹。

在字的尽头，你发现了一行小字：

[faded]"周文，我恨你。周文，我等你。"[/faded]

[red]爱和恨，被她刻在了一起。[/red]

你在那行字旁边，刻下了新的字："秀兰，我记住你了。"`,
    effects: {
        sanity: -5,
        yin: 3,
        setFlag: 'huimen_exp_carried_in_well'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_paper_shop_doll_eyes = {
    title: '纸眼',
    text: `你再次进入纸扎铺，发现所有的纸人都在看着你。

它们的眼睛是墨点的，但你感觉到它们的视线。你走到一个纸人面前，发现它的眼睛在转动。

"你们为什么看我？" 你问。

纸人们没有回答，但它们的嘴角开始上扬，露出和你一样的笑。

"因为我们都是你。" 它们一起说，"你是我们，我们也是你。"

[red]你忽然分不清，自己是人，还是纸人。[/red]

你摸了摸自己的脸，皮肤是温热的。还好，你还是人。`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '把纸人的眼睛都涂上墨',
            next: 'huimen_exp_paper_shop_doll_eyes_blind',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '离开铺子',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_paper_shop_doll_eyes_blind = {
    title: '盲眼',
    text: `你抓起朱砂，把纸人们的眼睛都涂黑了。

纸人们开始尖叫："看不见了！看不见了！"

"看不见就对了。" 你说，"你们不是人，不需要看见。"

纸人们瘫倒在地，像被抽走了灵魂。铺子里安静下来，只有你的呼吸声。

老人从柜台后面走出来，叹了口气："你断了它们的目，它们就不能再学你了。"

"那就让它们别学我。" 你说。`,
    effects: {
        sanity: -5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_temple_underground = {
    title: '庙下',
    text: `你在庙里发现一块松动的石板。

掀开石板，下面是一条狭窄的通道。通道尽头是一间石室，石室正中放着一口石棺。

石棺上刻着"周氏秀兰之遗蜕"。你打开石棺，里面是一具小小的骸骨，蜷缩着，像是在保护什么。

[red]这是秀兰真正的尸骨。[/red]

骸骨的怀里，抱着一个小小的布包。你打开布包，里面是一块已经发硬的桂花糕。`,
    effects: {
        sanity: -10,
        yin: 3,
        addItem: '秀兰的遗骨'
    },
    choices: [
        {
            text: '把遗骨带出去安葬',
            next: 'huimen_exp_return_bury_xiulan',
            effects: { yin: -5 }
        },
        {
            text: '把桂花糕留给井里的秀兰',
            next: 'huimen_exp_temple_underground_cake',
            effects: { sanity: 5, yin: -5 }
        }
    ]
};

StoryData.huimen_exp_temple_underground_cake = {
    title: '还糕',
    text: `你捧着那块发硬的桂花糕，来到井边。

秀兰的身影浮出来。她看见桂花糕，愣住了。

"这是我娘给我做的。" 她说，"她说，嫁人的时候要吃桂花糕。"

"你吃吧。" 你说，"虽然硬了。"

秀兰接过桂花糕，化作一道光吸入身体。她的身影凝实了一些，笑容也更真了。

"甜的。" 她说，"三十年了，我终于又吃到甜的。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的遗骨'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_blood_pool = {
    title: '血池',
    text: `你在祖祠地下发现一间密室。

密室里有一个血池，池里不是血，而是红色的液体，像水银一样流动。池边刻着字：

[faded]"周家男丁，饮此延寿。"[/faded]

[red]这就是周家男人活不过四十的真相：他们不是靠自己的命活，而是靠女子的血。[/red]

你看着血池，感到一阵恶心。你想起父亲死时三十九岁，二叔、三姑的丈夫，没有一个活过四十。

原来他们不是短命，是借来的命到期了。`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp_saw_blood_pool'
    },
    choices: [
        {
            text: '把血池砸破',
            next: 'huimen_exp_ancestral_blood_pool_break',
            effects: { sanity: -10, yin: 5 }
        },
        {
            text: '离开密室',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ancestral_blood_pool_break = {
    title: '破池',
    text: `你举起一块石头，砸向血池。

血池破裂，红色的液体喷涌而出。液体流过的地面，浮现出无数女子的脸。她们在液体里挣扎、哭喊，然后化为一道道红光，飞向夜空。

"自由了……" 她们说，"我们自由了……"

祖祠开始崩塌，牌位一个个倒下。你跑出祖祠，身后是一片烟尘。

[red]你毁了周家续命的根。[/red]`,
    effects: {
        sanity: -10,
        yin: 10
    },
    ending: 'huimen_exp_ending_paper_doll_burned'
};

StoryData.huimen_exp_mulberry_root = {
    title: '树根',
    text: `你挖开桑树根部的泥土。

树根盘结在一起，像一张巨大的网。网中央埋着一个陶罐，陶罐里装着一撮头发和一张纸条。

纸条上是秀兰的字迹：

[faded]"若有后人见此，请将我的头发与周文合葬。虽不能同生，愿能同穴。"[/faded]

[red]她到死，还想和祖父在一起。[/red]

你把陶罐盖好，放回土里。这个愿望，也许不该由你来替她完成。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '秀兰的头发'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_ruins_mirror = {
    title: '破镜',
    text: `你在废墟里找到一面破镜子。

镜子的裂痕像蛛网，但还能照出人影。你照了照，发现镜中的自己穿着大红喜服，嘴角咧到耳根。

你吓了一跳，把镜子扔在地上。

镜子碎成更多片，每一片里都映出一个不同的你。有穿新郎服的，有穿纸人衣服的，有变成纸人的，有正常模样的。

[red]哪一个才是真正的你？[/red]

你捡起那片映出正常自己的碎片，把其他的都踩碎。`,
    effects: {
        sanity: -10,
        yin: 3,
        addItem: '破镜碎片'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_moonlit_path_fork = {
    title: '岔路',
    text: `月光小路在前方分成两条。

一条通向光明，一条通向黑暗。光明的路上开满了桂花，黑暗的路上飘满了纸钱。

你站在岔路口，不知道该走哪条。

[whisper]"走光明的路，你会忘记我。"[/whisper] 秀兰说，"走黑暗的路，你会永远和我在一起。"

[red]这不是选择路，是选择人生。[/red]`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '走光明的路',
            next: 'huimen_exp_moonlit_escape',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '走黑暗的路',
            next: 'huimen_exp_ending_village_memory_scene',
            effects: { yin: 3 }
        }
    ]
};

// 新增一个结局引用场景
StoryData.huimen_exp_ending_village_memory_scene = {
    title: '守忆',
    text: `你选择了黑暗的路。

路的尽头不是出口，而是整个村子的记忆。你走进去，成为村子的一部分。

从此，你记住每一个被周家害死的女子。你记住秀兰的笑，柳红的戏，阿绣的绣，云袖的琴。

你不是鬼，也不是人。你是守忆人。

很多年后，会有另一个年轻人来到这个村子。你会坐在老槐树下，给他讲一个故事。

"很久以前，这里有一个叫秀兰的姑娘……"`,
    effects: {
        sanity: 10,
        yin: -10
    },
    ending: 'huimen_exp_ending_village_memory'
};

StoryData.huimen_exp_village_street_paper_kite = {
    title: '纸鸢',
    text: `你看见天上飞着一只纸鸢。

纸鸢的形状是一只凤凰，翅膀上画着五彩的羽毛。可它飞得不高，像被什么东西牵着。

你顺着线看，线的另一端系在一个纸人的手腕上。纸人站在屋顶上，仰头看着纸鸢。

"放纸鸢的是秀兰。" 纸人说，"她活着的时候最喜欢放纸鸢。死后，我们每年给她放一个。"

[red]你接过线，感到一阵轻风。纸鸢在你手里挣扎，像是要飞向远方。[/red]

"放它走吧。" 纸人说，"它飞了三十年的圈，该飞出去了。"`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '剪断线，放纸鸢走',
            next: 'huimen_exp_village_street_paper_kite_release',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把线系在手腕上',
            next: 'huimen_exp_village_street',
            effects: { yin: 3 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_kite_release = {
    title: '放飞',
    text: `你剪断了纸鸢的线。

纸鸢没有掉下来，而是越飞越高，越飞越远，最后化作一个五彩的光点，消失在夜空中。

纸人站在屋顶上，朝纸鸢离去的方向鞠了一躬。

"秀兰，" 它说，"你的纸鸢飞出去了。你也可以飞了。"

你感到胸口的压抑轻了一些，像是某种束缚也被剪断了。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_released_paper_kite'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_swing = {
    title: '秋千',
    text: `你来到一座小院前，院里有一架秋千。

秋千不是用绳子做的，是用红绳。绳子上缠着许多女子的头发，在风中轻轻飘动。

秋千自己在晃，像有人坐在上面。你走近，听见一个女子的笑声："来推我一把。"

你伸手推了一下秋千。秋千荡得很高，红绳上的头发发出沙沙的声响。

"再高一点。" 女子说，"我想看看村子外面的山。"

[red]你推了很久，直到秋千上的笑声变成哭声。[/red]`,
    effects: {
        sanity: -8,
        yin: 3
    },
    choices: [
        {
            text: '继续推',
            next: 'huimen_exp_village_street_swing_push',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '停下秋千',
            next: 'huimen_exp_village_street',
            effects: { sanity: 3, yin: -2 }
        }
    ]
};

StoryData.huimen_exp_village_street_swing_push = {
    title: '高处',
    text: `你继续推秋千。

秋千越荡越高，红绳开始一根根断裂。坐在秋千上的女子身影越来越淡，最后化作一缕青烟。

"谢谢你。" 她说，"我终于看见山外的山了。"

秋千停了，空荡荡地晃着。红绳上的头发全部脱落，像一场黑色的雪。

你接住一缕头发，它在你手心里化为灰烬。`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp_freed_swing_spirit'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_well_bucket = {
    title: '井桶',
    text: `井边放着一个木桶。

木桶很旧，桶壁上刻着"秀兰"两个字。你拿起桶，往里看，桶底沉着一层红色的泥。

[red]这是当年秀兰被活埋后，用来打水的桶。[/red]

你把桶伸进井里，打上来的不是水，而是一团黑发。黑发在桶里扭动，像活物一样。

"别扔。" 秀兰的声音说，"那是我的头发。"`,
    effects: {
        sanity: -8,
        yin: 2,
        addItem: '井桶里的头发'
    },
    choices: [
        {
            text: '把头发还给秀兰',
            next: 'huimen_exp_village_street_well_bucket_return',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把桶放回原处',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_well_bucket_return = {
    title: '还发',
    text: `你把头发放进井里。

头发像蛇一样游向井底，消失在黑暗中。过了一会儿，秀兰的身影浮出来，她的头发比之前长了许多。

"谢谢你。" 她说，"头发对女子很重要。我以前最喜欢梳头了。"

你看着她乌黑的长发，想起她曾是这样一个爱美的姑娘。

"我帮你梳一次头吧。" 你说。

秀兰愣了一下，然后笑了："好。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '井桶里的头发',
        setFlag: 'huimen_exp_combed_xiulan_hair'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_old_well = {
    title: '旧井',
    text: `你找到另一口井。

这口井已经干枯，井底堆满了碎石。你探头看，发现井壁上刻着许多名字，都是女子的名字。

"这是周家最早的井。" 秀兰说，"第一批被活埋的女子，都在这里。"

你数了数，有十二个名字。每一个名字后面都刻着"贞烈"二字。

[red]"贞烈"不是赞美，是封口令。[/red]

你用手指描摹那些名字，感到一阵刺痛。`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp_saw_old_well_names'
    },
    choices: [
        {
            text: '把"贞烈"二字凿掉',
            next: 'huimen_exp_village_street_old_well_chisel',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_old_well_chisel = {
    title: '凿名',
    text: `你捡起一块尖锐的石头，开始凿井壁上的"贞烈"二字。

每凿一下，井底就传来一声女子的叹息。你凿了整整十二个，直到所有"贞烈"都被凿平。

然后你在每个名字后面刻上"无辜"二字。

[red]无辜。她们本是无辜的。[/red]

井底开始渗水，清澈的水，不是血。十二个女子的身影浮出来，朝你福了一福，然后消散。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_chiseled_old_well'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_fan = {
    title: '纸扇',
    text: `你看见地上有一把纸扇。

纸扇上画着并蒂莲，扇骨是竹子的。你捡起来，扇了扇，一阵风卷起地上的纸钱。

纸钱在风中拼出几个字："秀兰之物，勿动。"

你愣了一下，把纸扇放在井沿。

"这是我的扇子。" 秀兰说，"周文送我的。他说，夏天给我扇风。"

[red]可那个夏天，她没能等到。[/red]`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '秀兰的纸扇'
    },
    choices: [
        {
            text: '把扇子还给她',
            next: 'huimen_exp_village_street_paper_fan_return',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_fan_return = {
    title: '还扇',
    text: `你把纸扇放进井里。

扇子没有沉，而是漂在水面上，像一叶小舟。秀兰的手从水里伸出来，握住扇柄。

"谢谢。" 她说，"这把扇子，我等了三十年。"

扇子化作一道光，没入她的身体。她的身影凝实了一些，笑容也更温柔。

"他送我的东西，终于回来了。" 她说。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的纸扇'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_mooncake = {
    title: '月饼',
    text: `你经过一个院子，桌上摆着一盘月饼。

月饼是红色的，像血染过。你拿起一个，发现月饼上印着"团圆"二字。

"今天是中秋吗？" 你问。

"每天都是中秋。" 一个声音说，"因为秀兰死在中秋前夜。"

[red]原来秀兰是在团圆节前一天被活埋的。[/red]

你把月饼放回去，对着月亮鞠了一躬。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '把月饼带给秀兰',
            next: 'huimen_exp_village_street_mooncake_give',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_mooncake_give = {
    title: '团圆',
    text: `你捧着月饼来到井边。

秀兰看着月饼，眼泪落了下来。

"我死的那天晚上，本来要吃月饼的。" 她说，"周文说，等月亮圆了，就来接我。"

"月亮圆了很多次了。" 你说，"这次，我陪你吃。"

你把月饼掰成两半，一半放在井沿，一半自己咬了一口。月饼是苦的，但你咽了下去。

秀兰也"吃"了一口。她笑了："甜的。原来团圆是甜的。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_ate_mooncake_with_xiulan'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_incense_burner = {
    title: '香炉',
    text: `你在一座废弃的祠堂前找到一个香炉。

香炉里插着许多香，香都熄灭了。你仔细一看，香头上刻着的不是"福"，而是女子的名字。

"这是周家女人用的香炉。" 秀兰说，"我们生前不能进正祠，只能在这里偷偷烧香。"

你把香炉擦干净，点燃三支香，插了进去。

[red]烟雾袅袅升起，在空中化作许多女子的脸。[/red]

她们朝你笑了笑，然后散去。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_stone_lion = {
    title: '石狮',
    text: `村口有一对石狮。

石狮不是石头的，是纸糊的。你走近，发现石狮的眼睛在动。

"守了周家三十年。" 一只石狮说，"现在想走了。"

"你们为什么要守？" 你问。

"因为嘴里含着我们的名字。" 另一只石狮张开嘴，嘴里有一团纸，纸上写着"秀兰"。

[red]周家把女子的名字塞进石狮嘴里，让她们守门。[/red]

你从石狮嘴里取出那团纸。石狮顿时瘫软在地，化为一堆废纸。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '石狮口中的名字'
    },
    choices: [
        {
            text: '把纸烧掉',
            next: 'huimen_exp_village_street_stone_lion_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_stone_lion_burn = {
    title: '焚名',
    text: `你点燃那团纸。

火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，飞向夜空。

"我自由了。" 蝴蝶说，"谢谢你，守门人。"

另一只石狮也张开了嘴，里面还有更多名字。你一只一只取出，一只一只烧掉。

村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '石狮口中的名字'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_abandoned_bed = {
    title: '空床',
    text: `你推开一扇门，屋里有一张床。

床上铺着大红被褥，像是新婚的床。可床上没有人，只有一个纸人，穿着新娘服，盖着红盖头。

你掀开盖头，纸人的脸是空白的。

"这是秀兰的婚床。" 一个声音说，"她没睡过，就被活埋了。"

[red]你把被褥掀开，床板上刻着一行字："兰妹，等我。"[/red]

那是祖父的字迹。`,
    effects: {
        sanity: -8,
        yin: 2,
        addItem: '婚床上的字条'
    },
    choices: [
        {
            text: '把字条给秀兰',
            next: 'huimen_exp_village_street_abandoned_bed_give',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_abandoned_bed_give = {
    title: '婚床之约',
    text: `你把字条放在井沿。

秀兰浮出来，看着字条上的字，手在发抖。

"兰妹，等我。" 她念了一遍又一遍，"他叫我兰妹。"

"他一直在等你。" 你说，"只是没等到。"

秀兰把字条贴在心口，字条化作一道光，渗入她的身体。

"我等到了。" 她说，"三百年也值了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '婚床上的字条'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_money_pile = {
    title: '纸钱堆',
    text: `你来到一个院子，院子里堆满了纸钱。

纸钱堆得像小山一样，每一张上都印着"囍"字。你走近，发现纸钱堆里埋着一个人。

是个女子，穿着嫁衣，双手交叠放在胸前，像是睡着了。

"她是秀兰的替身。" 一个声音说，"周家每年给她烧一个替身，替秀兰受过。"

[red]你看着那个和秀兰一模一样的纸人，感到一阵愤怒。[/red]

"她不是秀兰。" 你说，"秀兰不需要替身。"`,
    effects: {
        sanity: -10,
        yin: 3
    },
    choices: [
        {
            text: '把纸钱堆烧掉',
            next: 'huimen_exp_village_street_paper_money_pile_burn',
            condition: { hasItem: '打火机' },
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_money_pile_burn = {
    title: '焚堆',
    text: `你点燃纸钱堆。

火焰冲天而起，纸钱在火中尖叫、扭曲。那个和秀兰一模一样的纸人坐起来，朝你笑了笑，然后化为灰烬。

"谢谢你。" 她说，"我终于不用替谁受过了。"

火光照亮了整个村子。你看见无数纸人从屋里跑出来，朝着火光跪拜。

[red]你烧了周家三十年的谎言。[/red]`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp_burned_paper_money_pile'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_flower_2 = {
    title: '再献花',
    text: `你又摘了一朵桂花，放在井沿。

秀兰浮出来，闻着花香，闭上眼睛。

"我活着的时候，院子里有一棵桂花树。" 她说，"每年秋天，整个院子都是香的。"

"后来呢？" 你问。

"后来被砍了。" 她睁开眼睛，"因为我死了，树也成了不祥之物。"

你握紧了拳头。周家连一棵树都不放过。

"等我出去，" 你说，"我给你种一棵桂花树。"`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_hair = {
    title: '梳头',
    text: `你坐在井边，给秀兰梳头。

她的头发很长，从井里一直拖到地上。你用手指梳理那些打结的发丝，动作很轻。

"我娘以前也这样给我梳头。" 秀兰说，"她说，女子的头发是命，要爱惜。"

"你的命不该这么短。" 你说。

秀兰沉默了一会儿，然后说："可我的头发还在。三十年了，还在长。"

[red]你梳了很久，直到她的头发顺得像一条黑色的河。[/red]`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_combed_xiulan_hair_2'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_dream = {
    title: '托梦',
    text: `秀兰问你："你出去之后，会梦见我吗？"

"会。" 你说。

"那你可以帮我托梦吗？" 她问，"托给我娘。告诉她，我不恨她。她当年是没办法。"

你点点头："我帮你。"

秀兰笑了，那笑容里有一种释然。

"还有，" 她说，"告诉周文，我等过他。不恨他，只是等累了。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp_promised_dream'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_broken_mirror = {
    title: '照镜',
    text: `你拿出破镜碎片，照向井底。

碎片里的裂痕射出一道光，井水开始翻涌。秀兰的身影在光里凝实，她看着自己水中的倒影，愣住了。

"这是我吗？" 她问，"我不记得自己长这样了。"

"这是你。" 你说，"很好看。"

秀兰摸了摸自己的脸，眼泪落进井里。

"原来我没有那么可怕。" 她说。`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '破镜碎片'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_life_silk = {
    title: '系丝',
    text: `你取出命丝锦带，系在手腕上。

锦带发出淡淡的银光，像是一圈月光缠在手上。你感到自己的命被稳稳地系住，不再被周家牵扯。

"这丝里有我的命。" 秀兰说，"也有一部分桑树的力量。它会保护你。"

"那你的命呢？" 你问。

"我的命，已经在你心里了。" 她说。

你握紧锦带，感到一阵温暖。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_xiulan_hair = {
    title: '缠发',
    text: `你取出秀兰的头发，握在手心。

头发虽然离开了她，却依然带着她的气息。你把头发系在手腕上，和自己的脉搏贴在一起。

"你做什么？" 秀兰问。

"这样你就不会走丢了。" 你说。

秀兰笑了："傻子，我是鬼，不会走丢的。"

"可我会。" 你说，"所以让我带着你。"

头发化作一道红光，缠上你的手腕，像一根细细的红绳。`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '秀兰的头发',
        setFlag: 'huimen_exp_wearing_xiulan_hair'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

Endings.huimen_exp_ending_flower_rain = {
    title: '隐藏结局 · 花雨',
    text: `你带着秀兰走出山村。

天亮了，阳光照在你们身上。秀兰的身影开始变淡，但她没有害怕，反而笑了。

"原来太阳这么暖。" 她说。

你握紧她的手，虽然她的手越来越透明。

"谢谢你。" 她说，"三十年了，我终于可以走了。"

她的身影化作无数桂花花瓣，被风吹散。花瓣落在你的头发上、肩膀上、手心里。

[red]那不是死亡，是一场花雨。[/red]

你走出山村，身后留下一路桂花香。`
};

Endings.huimen_exp_ending_last_dance = {
    title: '隐藏结局 · 最后一舞',
    text: `你在村口老槐树下，陪秀兰跳了最后一支舞。

没有音乐，没有观众，只有月光和你们两个人。秀兰穿着你给她做的纸嫁衣，在月光下旋转。

"这是我这辈子最好的一支舞。" 她说。

"也是最美的新娘。" 你说。

舞毕，她朝你深深一福，然后化作一道红光，飞入夜空。

你站在老槐树下，看着空荡的村子。纸人倒了，红绳断了，囍字褪色了。

秀兰终于自由了。而你，也自由了。`
};

StoryData.huimen_exp_village_street_paper_bridge = {
    title: '纸桥',
    text: `你来到村边的小河，河上搭着一座纸桥。

桥是用黄纸和竹篾扎的，很窄，只容一人通过。桥下没有水，只有一层厚厚的纸灰。

你踩上纸桥，桥发出"咯吱"的声响。走到桥中央，你低头看，纸灰里映出许多张脸。

"过桥的人，要留下一个秘密。" 那些脸说。

你想了想，说："我小时候偷过祖母的钱，买了一块糖。"

纸灰泛起涟漪，像是一个个微笑。`,
    effects: {
        sanity: -3,
        yin: 2
    },
    choices: [
        {
            text: '继续过桥',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 1 }
        },
        {
            text: '退回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_song_book = {
    title: '歌本',
    text: `你在路边的垃圾堆里翻到一本旧歌本。

歌本的封面已经烂了，但里面的字迹还很清楚。你翻开一页，是一首叫《兰花花》的民歌：

[faded]"青线线那个蓝线线，蓝格英英的彩，生下一个兰花花，实实的爱死个人……"[/faded]

歌本最后一页写着一行小字："秀兰最爱唱。民国二十二年。"

[red]你把歌本贴在胸口，像是贴着一颗三十年前的心。[/red]`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '秀兰的歌本'
    },
    choices: [
        {
            text: '把歌本给秀兰',
            next: 'huimen_exp_village_street_song_book_give',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_song_book_give = {
    title: '还歌',
    text: `你把歌本放在井沿。

秀兰浮出来，看着歌本，眼泪落了下来。

"这是我从学堂借来的。" 她说，"我死的时候，还想着要还回去。"

"我帮你还。" 你说。

"不用了。" 她摇摇头，"让它留在这里吧。这是我活过的证据。"

歌本化作一道光，没入井里。秀兰轻轻哼起了《兰花花》，声音清澈得像山间的溪水。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的歌本'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_embroidery = {
    title: '绣帕',
    text: `你看见窗台上放着一方绣帕。

绣帕上绣着一对鸳鸯，针脚细密，栩栩如生。帕角绣着一个"兰"字。

你拿起绣帕，发现背面还有一行小字：

[faded]"愿与君共白头。"[/faded]

[red]这是秀兰绣给祖父的定情之物。[/red]

帕子上的鸳鸯被血染红了一半，像是一对被迫分离的恋人。`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '秀兰的绣帕'
    },
    choices: [
        {
            text: '把绣帕给秀兰',
            next: 'huimen_exp_village_street_embroidery_return',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_embroidery_return = {
    title: '还帕',
    text: `你把绣帕放进井里。

秀兰接过绣帕，贴在脸上。她的眼泪把帕子上的血迹晕开，像是一朵盛开的花。

"我绣了一个月。" 她说，"想在成亲那天送给他。"

"他收到了。" 你说，"在另一个世界。"

秀兰笑了笑，把绣帕系在手腕上。

"那我也算嫁过他了。" 她说。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的绣帕'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_wedding_cake = {
    title: '喜糕',
    text: `你来到一户人家的厨房，桌上摆着一盘点心。

点心是红色的，做成喜字的形状。你拿起一块，发现糕点是纸做的，里面塞着一张黄符。

黄符上写着你的生辰八字。

[red]这是给你准备的喜糕。[/red]

你想起秀兰说过，成亲那天要吃桂花糕。可周家给你准备的，是纸做的喜糕。`,
    effects: {
        sanity: -8,
        yin: 3,
        addItem: '纸喜糕'
    },
    choices: [
        {
            text: '把喜糕烧了',
            next: 'huimen_exp_village_street_wedding_cake_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_wedding_cake_burn = {
    title: '焚糕',
    text: `你点燃纸喜糕。

喜糕在火中卷曲，发出凄厉的尖叫。火光里，你看见一个穿新郎服的纸人在跳舞，那纸人的脸和你一模一样。

"你烧了我！" 纸人尖叫，"你烧了自己！"

"你不是我。" 你说，"我是人，你是周家的替身。"

纸人化为灰烬，喜糕里的黄符也烧成了灰。你感到手腕上的红绳松了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '纸喜糕'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_ghost_dog = {
    title: '义犬',
    text: `你看见一只黑狗跟在你身后。

这只狗和之前那只不同，它的身体是半透明的，脖子上系着一根红绳。它看着你，眼神里没有凶光，只有哀求。

"你想带我去哪里？" 你问。

黑狗转身朝一个方向跑去，跑几步就回头看你。

你跟着它，来到一座矮坟前。坟前没有碑，只有一块木板，上面写着"义犬黑子之墓"。

"这是秀兰生前养的狗。" 秀兰的声音说，"我死那晚，它想救我，被打死了。"`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp_found_ghost_dog'
    },
    choices: [
        {
            text: '在坟前磕个头',
            next: 'huimen_exp_village_street_ghost_dog_bow',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_ghost_dog_bow = {
    title: '义犬祭',
    text: `你跪在狗坟前，磕了三个头。

"黑子，谢谢你当年想救秀兰。" 你说，"她现在很好，我会带她走的。"

黑狗的身影凝实了一些，它蹭了蹭你的手，然后化作一道黑光，飞入你的影子里。

"它会保护你。" 秀兰说，"就像当年想保护我一样。"

你站起身，感到自己的影子重了一些。那不是负担，是一份忠诚。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_ghost_dog_protection'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_apology = {
    title: '道歉',
    text: `你对着井水说："秀兰，我替周家向你道歉。"

秀兰浮出来，看着你，眼神复杂。

"你为什么要道歉？" 她问，"你又没害我。"

"因为我是周家的后人。" 你说，"周家欠你的，我替他们认。"

秀兰沉默了很久，然后说："我不需要周家道歉。我需要周家承认我。"

"我会让周家承认你。" 你说，"不是作为不祥女，而是作为周秀兰。"

她点点头，眼眶里的红色又淡了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_apologized_to_xiulan'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '跪下，正式向秀兰道歉',
            ending: 'huimen_exp_ending_apology',
            effects: { yin: -5 }
        }
    ]
};

StoryData.huimen_exp_xiulan_thanks = {
    title: '道谢',
    text: `秀兰忽然说："谢谢你。"

你愣了一下："谢我什么？"

"谢谢你愿意听我说话。" 她说，"三十年了，所有人都在告诉我该做什么：该嫁人，该去死，该原谅，该报仇。只有你问我想要什么。"

"那你想要什么？" 你问。

"我想被人记住。" 她说，"记住我原本的样子。"

"我记住了。" 你说，"周秀兰，十六岁会唱《兰花花》，十八岁会绣鸳鸯，喜欢桂花糕，梦想当老师。"

秀兰笑了，那笑容里没有鬼气，只有少女的羞涩。`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_goodbye = {
    title: '道别',
    text: `你坐在井边，秀兰也"坐"在旁边。

你们聊了很久，从她的童年聊到她的死，从她的恨聊到她的愿。月亮西斜，天边泛起灰白。

"天要亮了。" 秀兰说，"你该走了。"

"你呢？" 你问。

"我也该走了。" 她说，"去我该去的地方。"

你们沉默地坐了一会儿。

"再见。" 你说。

"再见。" 秀兰说，"不是永别。是下次再见。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_said_goodbye_to_xiulan'
    },
    choices: [
        {
            text: '离开村子',
            ending: 'huimen_exp_ending_farewell',
            effects: { yin: -5 }
        },
        {
            text: '再陪她一会儿',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_name = {
    title: '名字',
    text: `你问秀兰："你的名字是谁取的？"

"我娘。" 她说，"她说我出生的时候，院子里的兰花开了，所以叫我秀兰。"

"很好听。" 你说。

"可周家的人从不叫我的名字。" 她说，"他们叫我贱人、不祥女、赔钱货。"

"那是他们瞎。" 你说，"你的名字很好听。秀兰，周秀兰。"

秀兰看着你，眼泪落了下来。这次的眼泪不是红色的，是透明的。

"你再叫一次。" 她说。

"周秀兰。" 你说。

她又哭了，但这一次是笑着哭的。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp_called_xiulan_name'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_age = {
    title: '年华',
    text: `你问秀兰："如果你活着，现在多大了？"

秀兰算了算："四十六了。"

"四十六……" 你说，"应该是一个安稳的年纪。"

"是啊。" 她说，"也许有孩子，也许有孙子。也许我会在院子里种桂花，等他们回家。"

"你会是个好母亲。" 你说。

"你怎么知道？" 她问。

"因为你等了孩子三十年。" 你说，"光这份等，就没人比得上。"

秀兰低下头，看着自己的手。那双手苍白，却温柔。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_wedding_bed_note = {
    title: '婚约',
    text: `你取出婚床上的字条，再次阅读："兰妹，等我。"

秀兰从井里浮出来，看着字条，轻轻叹气。

"他终究没来接我。" 她说。

"他来了。" 你说，"只是没等到。"

"那有什么区别呢？" 她问。

"有。" 你说，"来了，说明他心里有你。没等到，是周家不让。这不是你的错，也不是他的错。是周家的错。"

秀兰沉默了，然后把字条贴在心口。

"谢谢你。" 她说，"这是我三十年来，听过最安慰的话。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '婚床上的字条'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_use_stone_lion_name = {
    title: '还名',
    text: `你取出石狮口中的名字团纸。

纸团上写着"秀兰"，被口水和泥土弄脏了。你把纸团清洗干净，在月光下展开。

"秀兰，" 你说，"你的名字，不该在石狮子嘴里。"

纸团化作一道红光，飞向井里。秀兰的身影浮出来，她的手腕上多了一根细细的红线。

"我感觉到了。" 她说，"我的名字回来了。"

"它本来就该是你的。" 你说。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '石狮口中的名字'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_final_goodbye = {
    title: '终别',
    text: `你决定带秀兰离开。

天快亮了，村子开始崩塌。纸人化为灰烬，红绳断裂，囍字褪色。你牵着秀兰的手，沿着村口的小路往外走。

秀兰走得很慢，时不时回头看。

"舍不得？" 你问。

"不是舍不得。" 她说，"是在告别。"

她对着村子轻轻说："再见了，我的三十年。"

你们走出村口，第一缕阳光照在你们身上。秀兰的身影开始变淡，但她的笑容很真。

"谢谢你。" 她说，"我终于可以走了。"`,
    effects: {
        sanity: 20,
        yin: -20
    },
    ending: 'huimen_exp_redemption_loop'
};

Endings.huimen_exp_ending_farewell = {
    title: '隐藏结局 · 道别',
    text: `你和秀兰道了别，独自走出山村。

天亮了，村子在你身后渐渐模糊。你没有回头，因为你知道回头也没用。

可你带走了一些东西：秀兰的名字，她的歌，她的笑，还有她未说完的故事。

多年后，你写了一本书，叫《周秀兰》。书出版那天，你在扉页上写：

"献给所有被忘记名字的女子。"

那天晚上，你梦见秀兰。她穿着一身布衣，站在桂花树下，朝你挥手。

"我很好。" 她说，"谢谢你记得我。"`
};

Endings.huimen_exp_ending_apology = {
    title: '隐藏结局 · 迟来的道歉',
    text: `你跪在井边，替周家磕了三个头。

"秀兰，周家对不起你。" 你说，"我代表周家，向你道歉。"

井水开始翻涌，秀兰的身影浮出来。她没有说话，只是看着你。

"我不原谅周家。" 她说，"但我接受你的道歉。"

她伸出手，轻轻摸了摸你的头。

"你和周家不一样。" 她说，"你是第一个向我跪下的人。"

天亮了，秀兰化作一道红光消散。你站起身，感到自己的膝盖很痛，但心很轻。

有些道歉虽然迟到，但总比没有好。`
};

Endings.huimen_exp_ending_name_stone = {
    title: '隐藏结局 · 名碑',
    text: `你在村口立了一块碑。

碑上刻着秀兰的名字，还有周家三十七个女子的名字。你把碑立得很高，高到整个村子都能看见。

村民们围过来，有人说你疯了，有人看完默默流泪。

秀兰站在碑前，看着自己的名字，看了很久。

"原来我的名字，可以刻在石头上。" 她说，"不是刻在井底，不是刻在符上，是刻在阳光能照到的地方。"

她转身朝你深深一福，然后化作一阵风。

碑上的名字在阳光下闪闪发亮。你知道，从今以后，没有人会再忘记她们。`
};

StoryData.huimen_exp_village_street_paper_bird = {
    title: '纸鸟',
    text: `你看见一只纸折的鸟停在井沿。

纸鸟折得很精巧，翅膀还能动。你走近，它歪着头看你，黑豆一样的眼睛里没有光。

"这是秀兰折的。" 一个声音说，"她活着的时候，最会折纸。"

你轻轻捧起纸鸟，发现鸟肚子里塞着一张小纸条：

[faded]"愿来生，做一只自由的鸟。"[/faded]

[red]你把纸鸟举高，它忽然活了过来，从你手里飞走，飞向夜空。[/red]

"它自由了。" 秀兰说。`,
    effects: {
        sanity: 5,
        yin: -3
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_lost_shoe = {
    title: '遗鞋',
    text: `石板路上有一只绣花鞋。

不是红绣鞋，是一只普通的青色布鞋，鞋面上绣着一朵兰花。鞋跟处磨损得很厉害，说明主人经常走路。

你捡起鞋，发现里面有一张纸条：

[faded]"秀兰，把这双鞋烧了，让她路上有伴。"[/faded]

[red]这是秀兰的母亲留给她的。[/red]

你捧着鞋，感到一阵心酸。一个母亲，连女儿下葬的鞋都要偷偷准备。`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '秀兰的布鞋'
    },
    choices: [
        {
            text: '把鞋烧给秀兰',
            next: 'huimen_exp_village_street_lost_shoe_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_lost_shoe_burn = {
    title: '烧鞋',
    text: `你点燃那只布鞋。

火焰不是红色的，而是淡青色。火光里，一个老妇人的身影浮现出来。

"秀兰，" 老妇人说，"娘对不起你，没能保护你。"

秀兰从井里浮出来，看着老妇人，哭喊："娘！"

母女俩隔着火焰相望，却无法相拥。最后，老妇人的身影化作一缕青烟，和布鞋一起消散。

"我娘来送我了。" 秀兰说，"我可以走了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的布鞋'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_rice_bowl = {
    title: '饭碗',
    text: `你在一户人家的灶台上发现一个碗。

碗里装着半碗米饭，米饭已经发黑。碗底压着一张纸条："秀兰的最后一顿饭。"

[red]原来秀兰被活埋前，周家给了她一碗饭，说是送她上路。[/red]

你端起碗，把发黑的米饭倒在地上。

"这不是送你的上路饭。" 你说，"这是周家的罪证。"

米饭落地，化作一群黑色的蚂蚁，四散爬走。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_comb = {
    title: '木梳',
    text: `你在井边发现一把木梳。

木梳上缠着几根长发，梳齿间还残留着一点油脂。你把梳子拿起来，发现梳背上刻着"秀兰"二字。

[red]这是秀兰常用的梳子。[/red]

你用清水把梳子洗干净，放在井沿。

"你的梳子。" 你说。

秀兰浮出来，拿起梳子，轻轻梳了梳自己的长发。

"谢谢你。" 她说，"三十年没梳头了。"`,
    effects: {
        sanity: 5,
        yin: -3,
        addItem: '秀兰的木梳'
    },
    choices: [
        {
            text: '看她梳头',
            next: 'huimen_exp_village_street_comb_watch',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_comb_watch = {
    title: '梳发',
    text: `秀兰坐在井沿上，一下一下梳着自己的头发。

她的动作很慢，很温柔，像是在对待一件珍贵的宝物。梳齿划过发丝，发出细微的声响。

"我娘说，女子的头发是命。" 她说，"要好好梳，不能打结。"

"你现在没有打结了。" 你说。

秀兰笑了笑，把梳子递给你："帮我梳一次，好吗？"

你接过梳子，轻轻梳理她的长发。那头发冰凉，却很柔顺。

"谢谢你。" 她说，"这是我三十年来，最像人的时刻。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的木梳'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_letter_box = {
    title: '信箱',
    text: `你发现一个老旧的信箱。

信箱已经生锈，里面塞满了没有寄出的信。你抽出最上面一封，信封上写着"秀兰收"。

信是你祖父写的：

[faded]"兰妹，今日母亲将我软禁，无法赴约。但我心已定，明日无论如何都会来接你。等我。"[/faded]

[red]这封信，永远没能寄到秀兰手里。[/red]

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,
    effects: {
        sanity: -5,
        yin: 1,
        addItem: '未寄出的信'
    },
    choices: [
        {
            text: '把信给秀兰',
            next: 'huimen_exp_village_street_letter_box_give',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_letter_box_give = {
    title: '信归',
    text: `你把信交给秀兰。

她读了一遍又一遍，眼泪把信纸打湿。

"他来了。" 她说，"他真的来了。"

"是的。" 你说，"他来了。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，" 她说，"不是等他救我，是等他告诉我，他没有放弃我。"

天边的月亮似乎亮了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '未寄出的信'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_rain = {
    title: '雨诉',
    text: `下雨了。

秀兰从井里伸出手，接住一滴雨。

"这雨是我的眼泪。" 她说，"我哭的时候，村子就下雨。"

"那你别哭了。" 你说。

"我忍不住。" 她说，"三十年的委屈，不是想停就能停的。"

你把手伸进雨里，和秀兰一起接着雨滴。

"那我陪你一起淋。" 你说，"你哭多少，我陪多少。"

秀兰看着你，眼泪和雨水混在一起。`,
    effects: {
        sanity: 5,
        yin: -5
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_sun = {
    title: '向阳',
    text: `天边露出一丝阳光。

秀兰连忙缩回井里："别照到我。"

"为什么？" 你问。

"鬼不能见太阳。" 她说，"会魂飞魄散的。"

你脱下外套，撑在井口，为她挡住阳光。

"你看，" 你说，"有我在，你可以见太阳。"

秀兰探出一点头，阳光照在她脸上。她眯起眼睛，像是很久没有见过光。

"好暖和。" 她说，"原来太阳这么好。"`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_final_hug = {
    title: '拥抱',
    text: `你张开双臂，对秀兰说："我能抱你一下吗？"

秀兰愣住了："你不怕？"

"不怕。" 你说。

秀兰从井里浮出来，慢慢靠近你。她的身体冰凉，但你还是抱住了她。

她在你怀里发抖，像是一个受了很多委屈的孩子。

"三十年了，" 她说，"第一次有人抱我。"

你抱得更紧了一些。

"你不会再孤单了。" 你说，"无论结局如何，我都在这里。"`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp_hugged_xiulan'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_fish = {
    title: '纸鱼',
    text: `你看见一条纸鱼在石板路上跳。

纸鱼是红色的，身上画着鳞片。它一跳一跳地朝井的方向去，像是要回家。

你跟着它来到井边。纸鱼在井沿上停了一下，然后跳进井里。

井水里浮出秀兰的脸，她嘴里咬着那条纸鱼。

"这是我小时候放的纸鱼。" 她说，"每年端午，我都会放一条，许愿能嫁个好人家。"

[red]她的愿望，永远停在了那一年。[/red]

你把手指伸进井水里，轻轻碰了碰纸鱼。纸鱼化作一道红光，绕着秀兰转了一圈，然后消散在水中。

"它回家了。" 秀兰说，"我也该回家了。"`,
    effects: {
        sanity: -3,
        yin: 1
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_old_broom = {
    title: '旧帚',
    text: `你发现一把旧扫帚靠在墙边。

扫帚柄上缠着一根红绳，绳上系着一个小布包。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，用以束帚，扫尽不祥。"

[red]周家把秀兰的头发绑在扫帚上，让她替周家扫走晦气。[/red]

你解开红绳，把头发取下来。

"你的头发，不该用来扫地。" 你说。

头发在你手心里动了动，像是有生命一般。它轻轻缠上你的手指，又松开，像是在向你道谢。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '扫帚上的头发'
    },
    choices: [
        {
            text: '把头发还给秀兰',
            next: 'huimen_exp_village_street_well_bucket_return',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_xiulan_mirror_2 = {
    title: '再照',
    text: `你再次用井水照秀兰。

这次水面很平静，映出秀兰完整的脸。她没有盖头，没有血泪，只是一个清秀的姑娘。

"我好看吗？" 她问。

"好看。" 你说。

"比新娘子还好看？"

"比任何新娘子都好看。" 你说。

秀兰笑了，那笑容像一朵在井底开了三十年的花。

"谢谢你让我看见自己。" 她说，"三十年了，我第一次觉得自己不那么可怕。"`,
    effects: {
        sanity: 10,
        yin: -10
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_door = {
    title: '纸门',
    text: `你走到一户人家门前，发现门是纸糊的。

门上画着门神，可门神的眼睛被挖掉了，只剩下两个黑洞。你推开门，门后不是屋子，而是一片漆黑。

漆黑里传来许多人的呼吸声，像是有无数人在门后等着你。

"进来吧。" 他们说，"进来就不用再怕了。"

[red]你知道这不是邀请，是陷阱。[/red]

你松开手，纸门自动关上。门上的门神眼睛又长了出来，正直勾勾地盯着你。

你后退一步，发现门缝里渗出一缕黑烟。黑烟在空中凝成一只手，朝你抓来。你侧身躲开，黑烟抓了个空，不甘心地缩回门里。

[whisper]"下次，你会进来的。"[/whisper] 门后的声音说。

你没有回答。你转身离开，但你知道，这扇门还会再出现。`,
    effects: {
        sanity: -5,
        yin: 2
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp_village_street_paper_door_god = {
    title: '门神',
    text: `你盯着纸门上的门神。

门神的眼睛动了动，然后开口说话："年轻人，你不该来这里。"

"我来还债。" 你说。

"债？" 门神冷笑，"周家的债，不是你一个人能还清的。"

"那也要还。" 你说，"还一点，是一点。"

门神沉默了一会儿，然后说："把门上的红纸撕了，我能帮你一次。"

你撕下门上的红纸，门神的身影消失了。你感到一阵轻松，像是某种阻碍被清除了。风吹过，红纸化作一只红色的蝴蝶，向村子外面飞去。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp_helped_by_door_god'
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        }
    ]
};


// ============================================================
// 新增场景与结局（山村深处扩展）
// ============================================================

Endings.huimen_exp2_ending_river_memory = {
    title: '隐藏结局 · 河忆',
    text: `你把秀兰的名字写在河边的鹅卵石上。

河水带走了石头，也带走了她三十年的委屈。从那以后，每年雨季，村里人都会听见河底传来女子的歌声，唱的是《兰花花》。

有人说那是秀兰在告别，也有人说那是她在提醒后来的人：有些名字，不能被水冲走。

你在河边坐了一夜。天亮时，发现脚边长出一株兰花。`
};

Endings.huimen_exp2_ending_graveyard_keeper = {
    title: '隐藏结局 · 守坟人',
    text: `你决定留在祖坟地，为秀兰和三十七个女子守墓。

你没有立碑，只是每天清扫落叶，每逢清明便烧一沓纸钱。纸灰被风吹散，像是一群终于能飞的蝴蝶。

秀兰偶尔会在夜里来坐一会儿。她不说话，只是看着你。你知道，她在谢你。

很多年后，有人发现这片坟地开满了兰花。他们说，那是守坟人的眼泪变的。`
};

Endings.huimen_exp2_ending_midwife_secret = {
    title: '隐藏结局 · 稳婆的忏悔',
    text: `你找到了当年给秀兰接生的稳婆。

她已经死了三十年，魂魄被封在接生箱里。你打开箱子，她跪在你面前，把真相说了出来：秀兰的孩子本可以活，是周家老太爷亲手按死的。

你把这件事告诉了秀兰。她沉默了很久，然后说："我知道。我一直知道。"

她原谅了稳婆，却没有原谅周家。你带着稳婆的忏悔走出山村，把它写成了一篇文章。

文章发表那天，秀兰给你托梦，说她终于可以闭上眼睛了。`
};

Endings.huimen_exp2_ending_paper_maker_truth = {
    title: '隐藏结局 · 纸匠遗书',
    text: `你在纸扎匠的枕头下发现了一封遗书。

遗书上写着："我一生扎了九百九十九个纸人，每一个都替我爱人阿绣受过一次。如今我扎不动了，愿以这一身纸骨，换她来世平安。"

你把遗书烧了。火光里，纸扎匠和阿绣手拉着手，朝你鞠了一躬，然后一起消失在夜空。

纸扎铺从此空了。但每年中元，铺子里都会传出浆糊的味道，像是一对老夫妻还在糊纸人。`
};

Endings.huimen_exp2_ending_grandma_song = {
    title: '隐藏结局 · 盲婆婆的歌',
    text: `盲婆婆给你唱了一首歌。

那歌没有词，只有一个苍老的女声在哼。你听不懂，却哭了。后来才知道，那是三十年前秀兰被活埋时，村里唯一一个为她哭过的声音。

你把这首歌录了下来。走出山村后，你把它交给了一位音乐学者。学者说，这调子很老，老到可以追溯到明代的"哭嫁调"。

秀兰的名字随着这首歌流传开来。人们说，每个听到这首歌的人，都会为一个叫秀兰的女子流一滴泪。`
};

Endings.huimen_exp2_ending_cowherd_bell = {
    title: '隐藏结局 · 牧铃',
    text: `你答应帮牧童找回他的牛铃。

牛铃挂在村口老槐树的最高处，已经生了锈。你爬上去取下来，交给牧童。他摇了摇铃铛，清脆的响声传遍整个村子。

"姐姐说，听见铃声，就知道我回家了。" 牧童说。

他牵着你的手，带你走出山村。路上纸人纷纷让开，不敢靠近。因为牧童虽然是个鬼，却比他们干净得多。

到了村口，牧童把牛铃送给你："以后你迷路了，摇一摇，我就来找你。"`
};

Endings.huimen_exp2_ending_kitchen_smoke = {
    title: '隐藏结局 · 炊烟',
    text: `你在废弃的厨房里为秀兰做了一碗桂花糕。

糕蒸好的时候，厨房上空升起一缕炊烟。在这没有天亮的村子里，那缕烟像是一根通往人间的线。

秀兰尝了一口，说："比我娘做的还甜。"

你们坐在灶台前，像一对普通的朋友。她给你讲她小时候的事，你给她讲外面的世界。

天快亮时，秀兰化作炊烟散去。你说不清那是解脱，还是另一种陪伴。`
};

Endings.huimen_exp2_ending_granary_ash = {
    title: '隐藏结局 · 谷灰',
    text: `你在粮仓里找到了秀兰当年藏身的谷堆。

谷粒早已腐烂，但谷灰里埋着她的一缕头发。你把头发和谷灰一起撒向风中。

"我活着的时候，" 她说，"最喜欢躲在谷堆里闻新米的味道。"

风把谷灰吹向远方。秀兰说，她终于可以闻到新米的香了。

你走出粮仓，发现村口多了一条新路。路的尽头，是一片金黄的稻田。`
};

Endings.huimen_exp2_ending_village_head_judge = {
    title: '死亡结局 · 村长审判',
    text: `你找到村长的魂魄，质问他为什么要活埋秀兰。

村长冷笑："她是周家的耻辱，也是村子的耻辱。不埋她，周家还能放过我们？"

你告诉他，秀兰没有错。村长的脸扭曲了，他招来所有村民的魂魄，把你围在中间。

"既然你觉得她没错，" 村长说，"那你就替她受过。"

你被他们按进一口空棺材，钉上盖子。棺材里贴满了黄符，每一张都写着你的名字。

你听见秀兰在棺材外哭，却打不开棺盖。`
};

Endings.huimen_exp2_ending_child_ghost_home = {
    title: '隐藏结局 · 鬼孩归家',
    text: `你答应帮小鬼找到回家的路。

那是一条很窄很窄的小路，路两旁开满了白色的野花。小鬼牵着你的手，一边走一边数星星。

"我娘在路的尽头等我。" 他说，"她等了三十年，一定等累了。"

你们走到尽头，那里站着一对男女。女的一看见小鬼就哭了，男的朝你深深鞠躬。

"谢谢你送我们的孩子回家。" 他们说。

小鬼回头朝你挥手："再见，大哥哥。"

你转身离开，发现那条路正在消失。你知道，有些告别，真的是最后一次。`
};

StoryData.huimen_exp2_riverbank = {
    title: '河边',
    text: `你循着水声来到河边。

河水不是流动的，而是静止的，像一面黑色的镜子。河面上漂着许多纸船，每只船上都点着一根小蜡烛。烛光映在水里，却照不出倒影。

[whisper]"过河的人，要留下影子。"[/whisper]

你低头看自己的影子，发现它比平常淡了许多，像是要被河水吸走。`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '沿河岸走',
            next: 'huimen_exp2_riverbank_walk',
            effects: { yin: 1 }
        },
        {
            text: '捡起一只纸船看看',
            next: 'huimen_exp2_paper_boat_read',
            effects: { yin: 1 }
        },
        {
            text: '蹲在河边，对着河水说话',
            next: 'huimen_exp2_riverbank_whisper',
            effects: { yin: -3 }
        },
        {
            text: '找一处浅滩渡河',
            next: 'huimen_exp2_river_cross',
            effects: { yin: 3 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_riverbank_walk = {
    title: '河岸',
    text: `你沿着河岸走。

河岸上的草不是绿色的，而是灰白色，像被火烧过。草叶上挂着露珠，每一滴珠子里都映着一张女子的脸。

你走过一片芦苇荡，芦苇发出沙沙的声响，像有人在低声说话。

[red]河尽头有一座石桥，桥洞下似乎藏着什么东西。[/red]`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '去石桥看看',
            next: 'huimen_exp2_stone_bridge',
            effects: { yin: 1 }
        },
        {
            text: '拨开芦苇',
            next: 'huimen_exp2_reed_bundle',
            effects: { yin: 2 }
        },
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_boat_read = {
    title: '纸船',
    text: `你捡起一只纸船。

船身是用黄纸折的，上面写着一个名字："周氏秀兰"。字迹娟秀，是秀兰亲笔。

船舱里还有一张小纸条：

[faded]"愿此船载我魂，顺流归故乡。"[/faded]

[red]原来她也曾想让自己的魂顺着河水流出去。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
    },
    choices: [
        {
            text: '把纸船放回河里',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, setFlag: 'huimen_exp2_released_paper_boat' }
        },
        {
            text: '把纸船收好',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1, addItem: '秀兰的纸船' }
        },
    ]
};

StoryData.huimen_exp2_riverbank_whisper = {
    title: '水语',
    text: `你蹲在河边，对着河水轻声说："秀兰，我来了。"

河水开始泛起涟漪，一圈一圈，像是一个人在回应你。水里的纸船纷纷让开，露出河底的一块青石。

青石上刻着字：

[faded]"秀兰沉骨之处，后人莫忘。"[/faded]

[whisper]"我没有忘。"[/whisper] 你说。`,
    effects: {
        sanity: 3,
        yin: -5,
    },
    choices: [
        {
            text: '把青石上的字拓下来',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1, addItem: '河边青石刻字' }
        },
        {
            text: '继续和河水说话',
            next: 'huimen_exp2_river_talk_more',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_river_talk_more = {
    title: '河忆',
    text: `你继续对着河水说话。

你说外面的世界，说女孩子的自由，说迟到的正义。河水静静地听，纸船静静地漂。

忽然，水面浮出一张脸。是秀兰，但不是鬼，是她十六岁时的样子。

"谢谢你告诉我。" 她说，"下辈子，我一定要去看看。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_river_memory_shared',
    },
    choices: [
        {
            text: '在河边写下秀兰的名字',
            ending: 'huimen_exp2_ending_river_memory',
            ending: 'huimen_exp2_ending_river_memory',
            effects: { yin: -5 }
        },
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_cross = {
    title: '渡河',
    text: `你找到一处浅滩，试探着踏入河水。

河水冰冷刺骨，却不是水的冷，而是无数只手在抓你的脚踝。你每走一步，就感到有什么东西在往下拽。

河对岸站着一个人影，背对着你，穿着大红嫁衣。

[red]那是秀兰，还是另一个新娘？[/red]`,
    effects: {
        sanity: -8,
        yin: 5,
    },
    choices: [
        {
            text: '继续往前走',
            next: 'huimen_exp2_river_other_side',
            effects: { yin: 3 }
        },
        {
            text: '退回河岸',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: -3, yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_other_side = {
    title: '对岸',
    text: `你终于走到对岸。

那个人影缓缓转过身。不是秀兰，是一个更老的女子，脸上布满皱纹，眼眶是两个黑洞。

"我不是秀兰。" 她说，"我是她娘。我等了三十年，终于等到有人把她带来。"

她伸出手，手里是一枚生锈的长命锁。`,
    effects: {
        sanity: -5,
        yin: 3,
        addItem: '秀兰的长命锁',
    },
    choices: [
        {
            text: '把长命锁交给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '秀兰的长命锁', setFlag: 'huimen_exp2_returned_longevity_lock' }
        },
        {
            text: '收好长命锁',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_stone_bridge = {
    title: '石桥洞',
    text: `你来到石桥下。

桥洞里堆满了纸人，都是小孩子的模样。他们蜷缩在一起，像一群受惊的猫。

"我们都是被周家借走命的孩子。" 一个纸孩子说，"秀兰姐姐答应过，会有人来还我们。"

[red]你数了数，有十几个。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '把长命锁给他们看',
            next: 'huimen_exp2_stone_bridge_children',
            condition: { hasItem: '秀兰的长命锁' },
            effects: { yin: -5 }
        },
        {
            text: '问他们怎么才能解脱',
            next: 'huimen_exp2_stone_bridge_ask',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank_walk',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_stone_bridge_children = {
    title: '还锁',
    text: `你把长命锁放在纸孩子们中间。

锁一落地，就化作一道金光。纸孩子们纷纷站起来，身上的纸一点点褪去，露出透明的、像真正孩子一样的身影。

"我们可以走了。" 他们说，"谢谢你，还有秀兰姐姐。"

他们手拉着手，跑向河对岸，消失在晨光里。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '秀兰的长命锁',
    },
    choices: [
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_stone_bridge_ask = {
    title: '问解脱',
    text: `你问："怎么才能还你们自由？"

纸孩子说："把我们的名字从周家族谱上划掉。族谱上压着名字，我们的魂就飞不远。"

他指向村子的方向："去找村长。他知道族谱在哪里。"`,
    effects: {
        sanity: -3,
        yin: 2,
        setFlag: 'huimen_exp2_knows_children_names',
    },
    choices: [
        {
            text: '去找村长',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_reed_bundle = {
    title: '芦苇丛',
    text: `你拨开芦苇，发现里面藏着一艘小船。

船很小，只能坐一个人。船底铺着一件红色嫁衣，嫁衣上放着一根骨头。

[red]那不是人的骨头，是纸扎的骨架。[/red]

你拿起嫁衣，发现内衬上绣着"秀兰"二字。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '芦苇中的嫁衣',
    },
    choices: [
        {
            text: '把嫁衣带回去给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, removeItem: '芦苇中的嫁衣' }
        },
        {
            text: '把船推回河里',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_graveyard = {
    title: '祖坟地',
    text: `你来到村后的祖坟地。

坟头密密麻麻，像一片起伏的海。每一座坟前都插着白幡，幡上没有字，只有墨点画成的眼睛。

你走过一座座坟，发现男丁的坟都很高大，女子的坟却只有一个小小的土包，有些甚至连碑都没有。

[whisper]"她们连死后都没有名字。"[/whisper]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '寻找秀兰的坟',
            next: 'huimen_exp2_graveyard_search',
            effects: { yin: 1 }
        },
        {
            text: '在一座无名坟前停下',
            next: 'huimen_exp2_unknown_grave',
            effects: { yin: 1 }
        },
        {
            text: '查看最大的那座祖坟',
            next: 'huimen_exp2_ancestor_grave',
            effects: { yin: 2 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_graveyard_search = {
    title: '寻坟',
    text: `你在坟地里寻找秀兰的坟。

没有碑，只有一块扁平的石头。石头上放着一束枯萎的桂花，和一双小小的红绣鞋。

你蹲下身，发现石头下面压着一张纸：

[faded]"秀兰之骨，分埋三处。此处仅有一缕头发。"[/faded]

[red]原来连她的坟，都是不完整的。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
        addItem: '秀兰坟前的桂花',
    },
    choices: [
        {
            text: '把桂花献给井里的秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, removeItem: '秀兰坟前的桂花' }
        },
        {
            text: '在坟前磕头',
            next: 'huimen_exp2_graveyard_bow',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '继续寻找其他骨头',
            next: 'huimen_exp2_graveyard_dig',
            effects: { yin: 2 }
        },
    ]
};

StoryData.huimen_exp2_graveyard_bow = {
    title: '祭拜',
    text: `你在秀兰的坟前磕了三个头。

"秀兰，" 你说，"我来看你了。不是作为周家的后人，而是作为一个人。"

坟头的石头忽然裂了一道缝，缝里飘出一缕青烟。青烟在空中凝成一个女子的身形，朝你福了一福。

"谢谢你。" 她说，"三十年了，第一次有人给我磕头。"`,
    effects: {
        sanity: 10,
        yin: -8,
        setFlag: 'huimen_exp2_bowed_at_grave',
    },
    choices: [
        {
            text: '回祖坟地',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_unknown_grave = {
    title: '无名坟',
    text: `你停在一座小小的无名坟前。

坟前没有供品，只有一根枯萎的野菊。你蹲下身，轻轻把野菊扶正。

"你是谁？" 你问。

坟里传来一个微弱的声音："我叫阿绣。三十年前被沉塘。没有人记得我。"

[red]阿绣。扎纸匠爱过的那个女子。[/red]`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '告诉她扎纸匠还在等她',
            next: 'huimen_exp2_unknown_grave_release',
            effects: { sanity: 5, yin: -5, setFlag: 'huimen_exp2_told_axiu_about_craftsman' }
        },
        {
            text: '在坟前再插一根野菊',
            next: 'huimen_exp2_graveyard',
            effects: { sanity: 3, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_unknown_grave_release = {
    title: '转告',
    text: `你对着坟说："阿绣，扎纸匠一直在等你。他扎了三十年纸人，每一个都当是给你扎的替身。"

坟里沉默了很久。然后，一个女子的身影从土里浮出来。她长得清秀，眉眼间带着愁苦。

"他真的……还在等我？" 她问。

"是的。" 你说，"你可以去找他了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_axiu_released',
    },
    choices: [
        {
            text: '回祖坟地',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
        {
            text: '去纸扎铺告诉老人',
            next: 'huimen_exp_paper_shop',
            condition: { flag: 'huimen_exp2_axiu_released' },
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_ancestor_grave = {
    title: '祖坟',
    text: `你来到最大的那座祖坟前。

坟前立着一块高大的石碑，碑上刻着"周氏列祖列宗之墓"。碑前的香炉里还冒着青烟，像是刚有人祭拜过。

你绕到碑后，发现背面刻着许多小字，都是女子的名字。秀兰、柳红、阿绣……每一个名字后面都刻着"供养"二字。

[red]她们不是被供奉，是被献祭。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
    },
    choices: [
        {
            text: '用石头凿掉"供养"二字',
            next: 'huimen_exp2_ancestor_grave_chisel',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '在碑前烧纸钱',
            next: 'huimen_exp2_ancestor_grave_burn',
            condition: { hasItem: '打火机' },
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_ancestor_grave_chisel = {
    title: '凿碑',
    text: `你捡起一块尖锐的石头，开始凿碑上的"供养"二字。

每凿一下，石碑就颤抖一下，像是什么东西在碑里尖叫。你不管，继续凿。把"供养"凿平后，你在每个名字后面刻上"安息"。

[red]安息。她们本该安息。[/red]

刻完最后一个字，石碑"咔嚓"一声裂开，露出里面空空如也。`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp2_chiseled_ancestor_grave',
    },
    choices: [
        {
            text: '决定留在坟地守墓',
            ending: 'huimen_exp2_ending_graveyard_keeper',
            ending: 'huimen_exp2_ending_graveyard_keeper',
            effects: { yin: -5 }
        },
        {
            text: '回祖坟地',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_ancestor_grave_burn = {
    title: '焚纸',
    text: `你在秀兰的坟前点燃纸钱。

火焰不是红色的，而是淡淡的金色。纸灰被风吹起，在空中旋转，像一只只黑色的蝴蝶。

坟头的石头开始发热，"周氏不祥女"四个字在热里扭曲、焦黑，最后化为灰烬。

[red]你烧了周家给秀兰贴的标签。[/red]

灰烬落在地上，拼成一行新字："周氏秀兰之墓。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_burned_at_ancestor_grave'
    },
    choices: [
        {
            text: '回祖坟地',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        }
    ]
};

StoryData.huimen_exp2_graveyard_dig = {
    title: '挖坟',
    text: `你用手挖开秀兰坟边的泥土。

土很松，像是被人挖过很多次。你挖了没多久，就碰到一个陶罐。陶罐里装着一截指骨，指骨上套着一枚生锈的铜戒指。

[red]那是秀兰的戒指。[/red]

你把戒指取出来，感到一阵刺骨的寒意。`,
    effects: {
        sanity: -8,
        yin: 3,
        addItem: '秀兰的铜戒指',
    },
    choices: [
        {
            text: '把戒指还给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '秀兰的铜戒指', setFlag: 'huimen_exp2_returned_copper_ring' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_house = {
    title: '稳婆家',
    text: `你来到村东头一座矮屋前。

屋子门窗紧闭，门缝里却透出昏黄的灯光。你推开门，一股浓重的药味扑面而来。

屋里摆满了接生用的器具：剪刀、秤、铜盆，还有一叠叠染血的布。正中的床上躺着一个老妇人，盖着白布，一动不动。

[red]她已经死了三十年，却还在等下一个产妇。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '掀开白布',
            next: 'huimen_exp2_midwife_body',
            effects: { yin: 3 }
        },
        {
            text: '查看接生箱',
            next: 'huimen_exp2_midwife_box',
            effects: { yin: 2 }
        },
        {
            text: '对着尸体说话',
            next: 'huimen_exp2_midwife_talk',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_body = {
    title: '稳婆遗躯',
    text: `你掀开白布。

老妇人的脸干瘪如纸，眼睛却睁得很大，像是看见了什么恐怖的东西。她的手里攥着一张黄符，符上写着"封"。

你试图掰开她的手，她却突然开口："别碰我。我手里封着秀兰孩子的魂。"

[whisper]"周家不让我说。说了，我连鬼都做不成。"[/whisper]`,
    effects: {
        sanity: -10,
        yin: 5,
    },
    choices: [
        {
            text: '质问她真相',
            next: 'huimen_exp2_midwife_confession',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '抢过黄符',
            next: 'huimen_exp2_midwife_seal',
            effects: { yin: 5 }
        },
        {
            text: '放下白布',
            next: 'huimen_exp2_midwife_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_confession = {
    title: '逼问',
    text: `你质问稳婆："秀兰的孩子到底怎么了？"

稳婆的魂魄从身体里飘出来，跪在你面前："我说，我都说。秀兰被活埋时，孩子还没死。周家老太爷怕孩子生下来丢人，让我把孩子掐死在肚子里。"

"我掐了。" 她哭，"我亲手掐的。秀兰在井底还在叫孩子的名字。"

[red]你感到一阵恶心。[/red]`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp2_heard_midwife_confession',
    },
    choices: [
        {
            text: '告诉她去告诉秀兰真相',
            next: 'huimen_exp2_midwife_release',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '冷冷地离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 3 }
        },
    ]
};

StoryData.huimen_exp2_midwife_release = {
    title: '释放',
    text: `你说："你去告诉秀兰真相。告诉她，孩子不是她的错。"

稳婆愣住了："你不怪我？"

"我怪你。" 你说，"但秀兰有权知道真相。"

稳婆点点头，化作一缕青烟飘向井的方向。你感到屋里的药味淡了许多。`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp2_midwife_released',
    },
    choices: [
        {
            text: '把稳婆的忏悔录下来带出村子',
            ending: 'huimen_exp2_ending_midwife_secret',
            effects: { yin: -5 }
        },
        {
            text: '去井边看秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_seal = {
    title: '夺符',
    text: `你用力掰开稳婆的手，抢过黄符。

黄符一离开她的手，就燃烧起来。火光里，一个婴儿的虚影浮现出来，哇哇大哭。

"我的孩子！" 秀兰的声音从四面八方传来。

婴儿化作一道光，飞向井的方向。稳婆发出一声惨叫，身体化为灰烬。`,
    effects: {
        sanity: -10,
        yin: 10,
    },
    choices: [
        {
            text: '追向井边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_box = {
    title: '接生箱',
    text: `你打开接生箱。

箱子里没有器具，只有一叠叠写着名字的纸条。每张纸条上都写着一个女子的名字和"难产卒"三个字。

你翻到最后，找到了秀兰的名字。纸条背面有一行小字：

[faded]"秀兰，民国二十三年中秋前夜，母子俱亡。"[/faded]

[red]"母子俱亡"四个字，把两条命轻描淡写地抹去了。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
        addItem: '稳婆的接生记录',
    },
    choices: [
        {
            text: '把记录带给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, removeItem: '稳婆的接生记录' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_midwife_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_talk = {
    title: '对话',
    text: `你对着稳婆的尸体说："秀兰的孩子，是周家欠她的。不是你的错，但你可以选择说出来。"

尸体没有动，但屋里的风停了。过了一会儿，一个苍老的声音说："我一辈子接生，第一次觉得自己是在杀人。"

"那就赎罪。" 你说。`,
    effects: {
        sanity: 3,
        yin: -3,
    },
    choices: [
        {
            text: '继续劝说',
            next: 'huimen_exp2_midwife_confession',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_house = {
    title: '纸扎匠家',
    text: `你来到纸扎匠的住处。

屋子比纸扎铺还要破旧，墙上贴满了画废的脸谱。屋里有一张床，床上放着一个没有完成的纸人，纸人的脸是空白的。

床头挂着一幅画像，画像上是一个年轻的女子，笑得很甜。画像下方写着"阿绣"。

[red]这是扎纸匠一生唯一的牵挂。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '查看未完成的纸人',
            next: 'huimen_exp2_paper_maker_doll',
            effects: { yin: 2 }
        },
        {
            text: '翻看床头的日记',
            next: 'huimen_exp2_paper_maker_diary',
            effects: { yin: 1 }
        },
        {
            text: '对着画像说话',
            next: 'huimen_exp2_paper_maker_painting',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_doll = {
    title: '未完成的纸人',
    text: `你走近那个未完成的纸人。

纸人的身材纤细，不像男子，更像女子。纸人的胸口写着"阿绣"二字。

"我想给她扎一个身体。" 扎纸匠的声音从背后传来，"这样她就能从画里走出来，和我说话了。"

你转身，看见老人站在门口，眼眶里的墨渍湿润了。`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '帮他完成纸人',
            next: 'huimen_exp2_paper_maker_finish',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '告诉他阿绣已经解脱',
            next: 'huimen_exp2_paper_maker_release',
            condition: { flag: 'huimen_exp2_axiu_released' },
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_paper_maker_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_finish = {
    title: '完成纸人',
    text: `你帮扎纸匠给纸人画上眉眼。

你画得并不好，但老人很满意。他抱起纸人，轻轻放在床上。

"阿绣，" 他说，"你看，有人愿意帮我完成你。"

纸人的嘴角似乎动了动，像是在笑。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_finished_axiu_doll',
    },
    choices: [
        {
            text: '查看日记',
            next: 'huimen_exp2_paper_maker_diary',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_release = {
    title: '解脱',
    text: `你告诉扎纸匠："阿绣已经解脱了。她去了一个没有周家的地方。"

老人愣了很久，然后笑了。他拿起枕下的遗书，递给你。

"那我也该走了。" 他说，"请你帮我把这个烧了。"

你接过遗书，感到它的分量。`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '纸扎匠遗书',
    },
    choices: [
        {
            text: '烧掉遗书',
            ending: 'huimen_exp2_ending_paper_maker_truth',
            ending: 'huimen_exp2_ending_paper_maker_truth',
            effects: { yin: -5 }
        },
        {
            text: '收好',
            next: 'huimen_exp2_paper_maker_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_diary = {
    title: '纸匠日记',
    text: `你翻开床头的日记。

日记里记载着扎纸匠的一生。每一页都在念叨阿绣：

[faded]"今日扎纸人第七十三个，仍不像阿绣。"[/faded]
[faded]"阿绣，我若能早一日带你走，你也不会沉塘。"[/faded]
[faded]"秀兰死了，又一个女子死了。周家的债，什么时候能还完？"[/faded]

最后一页写着："我扎不动了。愿以纸骨，换阿绣来生。"`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp2_read_paper_maker_diary',
    },
    choices: [
        {
            text: '把日记收好',
            next: 'huimen_exp2_paper_maker_house',
            effects: { yin: 1, addItem: '纸扎匠日记' }
        },
        {
            text: '烧了日记',
            next: 'huimen_exp2_paper_maker_house',
            effects: { sanity: 5, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_paper_maker_painting = {
    title: '画像',
    text: `你对着阿绣的画像说："阿绣，扎纸匠一直在等你。如果你听见了，就去见他吧。"

画像上的女子眨了眨眼，然后笑了。她的笑容从画里渗出来，化作一道光，飘向祖坟地的方向。

扎纸匠推门而入，正好看见那道光。他追出去，一边跑一边喊："阿绣！阿绣！"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_called_axiu_from_painting',
    },
    choices: [
        {
            text: '跟着去祖坟地',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
        {
            text: '留在屋里',
            next: 'huimen_exp2_paper_maker_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blind_granny_house = {
    title: '盲婆婆家',
    text: `你来到一座茅草屋前。

屋里传出苍老的歌声，没有词，只有一个女声在哼。那调子很老，老到不像这个时代的歌。

你推开门，看见一个瞎眼的老太太坐在门槛上，怀里抱着一把破旧的月琴。

"你是谁？" 她问，"是来听老婆子唱歌的，还是来封我嘴的？"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '说你是来听歌的',
            next: 'huimen_exp2_blind_granny_sing',
            effects: { yin: -3 }
        },
        {
            text: '问她秀兰的事',
            next: 'huimen_exp2_blind_granny_ask',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blind_granny_sing = {
    title: '哭嫁调',
    text: `盲婆婆开始唱歌。

那是一首古老的哭嫁调，唱的是一个女子被活埋前的哀鸣。你听不懂词，却听得泪流满面。

唱到最后，盲婆婆说："这是我为秀兰唱的。三十年前，我是村里唯一一个为她哭的人。"

"他们不让哭，说会招鬼。可我不怕。秀兰活着的时候对我好，我不能让她死得没人哭。"`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp2_heard_blind_granny_song',
    },
    choices: [
        {
            text: '请她再唱一遍',
            next: 'huimen_exp2_blind_granny_sing_more',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '问她秀兰的事',
            next: 'huimen_exp2_blind_granny_ask',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blind_granny_sing_more = {
    title: '再唱',
    text: `盲婆婆又唱了一遍。

这次你听懂了几句：

"兰花开，兰花谢，兰花落在井底眠。"
"周家郎，周家债，周家女儿不值钱。"

唱完，盲婆婆把月琴递给你："带走吧。让外面的人也听听秀兰。"`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '盲婆婆的月琴',
    },
    choices: [
        {
            text: '收下月琴',
            next: 'huimen_exp2_blind_granny_house',
            effects: { yin: 1 }
        },
        {
            text: '录下歌声',
            ending: 'huimen_exp2_ending_grandma_song',
            ending: 'huimen_exp2_ending_grandma_song',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_blind_granny_ask = {
    title: '询问',
    text: `你问盲婆婆："秀兰是个什么样的人？"

盲婆婆沉默了一会儿，说："好姑娘。心善，手巧，爱唱歌。她常来给我送菜，叫我婆婆。"

"她怀孕那阵，还来给我梳头。她说，等孩子生下来，要认我做干奶奶。"

盲婆婆的眼泪从空洞的眼眶里流出来："可孩子没生下来。我也没做成干奶奶。"`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '安慰她',
            next: 'huimen_exp2_blind_granny_comfort',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blind_granny_comfort = {
    title: '安慰',
    text: `你握住盲婆婆的手："婆婆，秀兰没有怪你。她知道你为她哭过。"

盲婆婆笑了，那笑容里有苦涩也有释然："真的？"

"真的。" 你说，"她让我告诉你，谢谢你。"

盲婆婆点点头，把月琴抱得更紧："那我这辈子，也不算白活。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_comforted_blind_granny',
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_house = {
    title: '村长家',
    text: `你来到村子中央最大的院子前。

院门是朱红色的，门上贴着门神，门神的眼睛被挖掉了。你推开门，院子里站着许多人，都穿着三十年前的衣裳，低着头，像是在受审。

正屋里坐着一个老者，穿着长袍，手里握着一卷黄纸。

"你来了。" 老者说，"我是周家村的村长。秀兰的事，是我主持办的。"`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '质问他',
            next: 'huimen_exp2_village_head_confront',
            effects: { yin: 2 }
        },
        {
            text: '索要族谱',
            next: 'huimen_exp2_village_head_record',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_confront = {
    title: '对质',
    text: `你质问村长："你为什么要活埋秀兰？"

村长冷笑："她是周家的耻辱，也是村子的耻辱。不埋她，周家能放过我们？"

"她不是耻辱。" 你说，"她是被你们害死的。"

村长的脸扭曲了："你以为你几句话就能翻案？周家养了三十年，就是为了今天！"`,
    effects: {
        sanity: -10,
        yin: 3,
    },
    choices: [
        {
            text: '继续反驳',
            next: 'huimen_exp2_village_head_refute',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '动手打他',
            ending: 'huimen_exp2_ending_village_head_judge',
            ending: 'huimen_exp2_ending_village_head_judge',
            effects: { yin: 5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_refute = {
    title: '驳斥',
    text: `你说："周家欠秀兰的，不是名声，是命。你们帮周家杀人，你们也是凶手。"

院子里的村民开始骚动。有人低头，有人冷笑，有人哭泣。

村长拍案而起："住口！你以为你是谁？"

"我是周家的后人。" 你说，"但我不是周家的刀。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_confronted_village_head',
    },
    choices: [
        {
            text: '索要族谱',
            next: 'huimen_exp2_village_head_record',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_record = {
    title: '族谱',
    text: `你伸手要族谱。

村长把族谱紧紧抱在怀里："给你？给你了，周家就完了。"

"周家早就完了。" 你说，"只是你们不敢承认。"

村长犹豫了一下，把族谱递给你。你翻开最后一页，上面果然压着许多女子的名字，每一个名字后面都写着"借命"。`,
    effects: {
        sanity: -5,
        yin: 3,
        addItem: '周家村族谱',
    },
    choices: [
        {
            text: '撕掉借命那一页',
            next: 'huimen_exp2_village_head_record_burn',
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '收好族谱',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_record_burn = {
    title: '撕谱',
    text: `你当着村长的面，把族谱上"借命"的那一页撕了下来。

纸页在你手里燃烧，火光里浮现出许多女子的脸。她们朝你微笑，然后化作青烟散去。

村长瘫坐在地上，像是一下子老了三十岁。

"完了，" 他喃喃，"周家村完了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_burned_borrowed_life_page',
    },
    choices: [
        {
            text: '把族谱带走',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '烧了整本族谱',
            next: 'huimen_exp2_village_head_record_burn_all',
            effects: { yin: 5 }
        },
    ]
};

StoryData.huimen_exp2_village_head_record_burn_all = {
    title: '焚谱',
    text: `你点燃整本族谱。

火光冲天，村长发出凄厉的惨叫。院子里的村民一个个化为灰烬，整座房子开始崩塌。

你跑出院子，身后是一片火海。

[red]你烧了周家村三百年的账。[/red]`,
    effects: {
        sanity: -10,
        yin: 10,
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen = {
    title: '废弃厨房',
    text: `你来到一间废弃的厨房。

灶台上积着厚厚的灰，锅里还有半锅发黑的汤。墙上挂着各种厨具，刀、铲、勺，都生锈了。

你打开锅盖，一股桂花的香气飘出来。锅里不是汤，是一锅凝固的桂花糕。

[red]这是秀兰被活埋前，最后一次想做却没有做成的桂花糕。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '尝一口桂花糕',
            next: 'huimen_exp2_kitchen_taste',
            effects: { yin: 3 }
        },
        {
            text: '重新蒸一锅',
            next: 'huimen_exp2_kitchen_cook',
            effects: { yin: -3 }
        },
        {
            text: '查看灶台下的柴火',
            next: 'huimen_exp2_kitchen_firewood',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_taste = {
    title: '尝糕',
    text: `你舀起一勺凝固的桂花糕，放进嘴里。

糕是苦的，苦得让你想吐。但你咽了下去。

"好吃吗？" 一个声音问。

你转头，看见秀兰站在灶台边，穿着围裙，像是三十年前那个准备做糕的姑娘。

"好吃。" 你说，"就是有点苦。"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '问她为什么不走',
            next: 'huimen_exp2_kitchen_talk',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_talk = {
    title: '对话',
    text: `你问秀兰："你为什么还留在这里？"

秀兰看着锅里的桂花糕："因为我想做完这锅糕。我死那天，糕还没蒸好。"

"我帮你蒸。" 你说。

秀兰笑了："你？你会蒸桂花糕？"

"不会。" 你说，"但我可以学。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_promised_to_cook',
    },
    choices: [
        {
            text: '重新蒸糕',
            next: 'huimen_exp2_kitchen_cook',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_cook = {
    title: '蒸糕',
    text: `你找来干柴，点燃灶火。

锅里的桂花糕慢慢融化，香气越来越浓。秀兰站在你身边，指导你加水、加糖、加桂花。

"火不要太旺。" 她说，"桂花糕要慢慢蒸，才甜。"

你照她说的做。过了一会儿，锅里飘出真正的甜香。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_cooked_guihua_gao',
    },
    choices: [
        {
            text: '把糕带给秀兰',
            ending: 'huimen_exp2_ending_kitchen_smoke',
            ending: 'huimen_exp2_ending_kitchen_smoke',
            effects: { yin: -5 }
        },
        {
            text: '自己尝一口',
            next: 'huimen_exp2_kitchen_eat',
            effects: { sanity: 5, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_eat = {
    title: '吃糕',
    text: `你尝了一口刚蒸好的桂花糕。

很甜，甜得发腻。但你吃着吃着，眼泪就流了下来。

"你怎么哭了？" 秀兰问。

"因为甜。" 你说，"因为三十年了，你终于吃到甜的了。"`,
    effects: {
        sanity: 10,
        yin: -10,
    },
    choices: [
        {
            text: '回厨房',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_firewood = {
    title: '柴火',
    text: `你查看灶台下的柴火。

柴火堆里埋着一个小布包。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，藏于灶下，愿来生有火暖身。"

[red]秀兰连来生取暖的愿望，都这么小。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '灶下的头发',
    },
    choices: [
        {
            text: '把头发还给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '灶下的头发' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary = {
    title: '粮仓',
    text: `你来到村西的粮仓。

粮仓很大，门却很小，像一张紧闭的嘴。你推开门，一股霉味和谷物腐烂的味道扑面而来。

谷堆里藏着许多东西：破碎的瓷碗、生锈的铜钱、褪色的红绳。你走到谷堆中央，发现那里有一个凹陷，像是一个人曾经蜷缩过。

[red]秀兰被活埋前，曾在这里躲了一夜。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '躺在凹陷里',
            next: 'huimen_exp2_granary_lie',
            effects: { yin: 2 }
        },
        {
            text: '翻找谷堆',
            next: 'huimen_exp2_granary_search',
            effects: { yin: 1 }
        },
        {
            text: '点燃一盏油灯',
            next: 'huimen_exp2_granary_light',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_lie = {
    title: '谷凹',
    text: `你躺在那个凹陷里。

谷粒从四面八方涌来，像是要把你埋住。你闭上眼睛，感到一种奇异的安心。

"你也在躲吗？" 秀兰的声音问。

"不是躲。" 你说，"是想感受你当时的害怕。"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '问她当时怕不怕',
            next: 'huimen_exp2_granary_fear',
            effects: { yin: 1 }
        },
        {
            text: '站起来',
            next: 'huimen_exp2_granary',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_fear = {
    title: '害怕',
    text: `秀兰说："当时不怕。我以为周文会来救我。我怕的是后来，怕井水的冷，怕孩子不动，怕再也见不到太阳。"

"你怕过吗？" 你问。

"怕过。" 她说，"但我更怕被人忘记。"`,
    effects: {
        sanity: -5,
        yin: -5,
    },
    choices: [
        {
            text: '告诉她你不会忘',
            next: 'huimen_exp2_granary',
            effects: { sanity: 5, yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_granary_search = {
    title: '翻找',
    text: `你在谷堆里翻找。

你找到一个布包，里面是一双小鞋，虎头鞋，绣着"元"字。这是秀兰给孩子做的鞋。

你把鞋捧在手里，感到一阵刺骨的冷。`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '粮仓里的虎头鞋',
    },
    choices: [
        {
            text: '把鞋带给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '粮仓里的虎头鞋' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_granary',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_light = {
    title: '点灯',
    text: `你点燃一盏油灯。

火光里，粮仓的墙壁上浮现出许多字，都是秀兰用指甲刻的：

"周文，我等你。"
"孩子，别怕。"
"我会出去。"
"我不想死。"

[red]最后一行刻得很浅，像是她已经没有力气了。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
        setFlag: 'huimen_exp2_saw_granary_words',
    },
    choices: [
        {
            text: '把秀兰的头发和谷灰一起撒向风中',
            ending: 'huimen_exp2_ending_granary_ash',
            condition: { hasItem: '灶下的头发' },
            effects: { yin: -5 }
        },
        {
            text: '在墙上刻"我记住你了"',
            next: 'huimen_exp2_granary',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_school = {
    title: '废弃学堂',
    text: `你来到村口的学堂遗址。

学堂只剩下一间正屋，屋顶塌了一半，黑板上还留着模糊的字迹。课桌上积着厚厚的灰，每张桌子上都放着一个砚台。

你走到讲台前，黑板上写着一行字：

[faded]"女子无才便是德。"[/faded]

[red]秀兰曾经趴在窗外，偷听这里的课。[/red]`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '坐在秀兰曾经的位置',
            next: 'huimen_exp2_school_desk',
            effects: { yin: 1 }
        },
        {
            text: '翻看课桌上的书本',
            next: 'huimen_exp2_school_book',
            effects: { yin: 1 }
        },
        {
            text: '在黑板上写字',
            next: 'huimen_exp2_school_blackboard',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_school_desk = {
    title: '课桌',
    text: `你坐在一张靠窗的课桌前。

桌面上刻着许多小字，都是学生无聊时留下的。你一条条看过去，忽然看见一行熟悉的字：

[faded]"秀兰到此一游。民国二十一年。"[/faded]

[red]她真的来过。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
        setFlag: 'huimen_exp2_sat_at_school_desk',
    },
    choices: [
        {
            text: '也刻下一行字',
            next: 'huimen_exp2_school_desk_carve',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_school',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_school_desk_carve = {
    title: '刻字',
    text: `你掏出小刀，在秀兰的名字旁边刻下：

"周秀兰，民国三年生，民国二十三年卒。周家后人铭记。"

刻完，你感到桌面微微发热，像是有个人在感谢你。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_carved_at_school',
    },
    choices: [
        {
            text: '回学堂',
            next: 'huimen_exp2_school',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_school_book = {
    title: '书本',
    text: `你翻开一本破旧的课本。

课本里夹着一张纸条，纸条上是秀兰的字迹：

[faded]"今日偷听先生讲《木兰辞》，甚喜。愿天下女子，皆能如木兰。"[/faded]

[red]她也曾有过梦想。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '秀兰的课堂笔记',
    },
    choices: [
        {
            text: '把笔记收好',
            next: 'huimen_exp2_school',
            effects: { yin: 1 }
        },
        {
            text: '把笔记带给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, removeItem: '秀兰的课堂笔记' }
        },
    ]
};

StoryData.huimen_exp2_school_blackboard = {
    title: '写字',
    text: `你拿起粉笔，把黑板上的"女子无才便是德"擦掉。

然后你写下："女子有才，亦有德。"

粉笔灰纷纷扬扬，像是一场小小的雪。你仿佛看见秀兰站在窗外，朝你笑。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_wrote_on_blackboard',
    },
    choices: [
        {
            text: '回学堂',
            next: 'huimen_exp2_school',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path = {
    title: '山路',
    text: `你踏上一条通往后山的小路。

路两旁是茂密的竹林，竹叶在风中沙沙作响，像无数人在低声说话。月光透过竹缝洒下来，在地上形成斑驳的影子。

你走了很久，发现路越来越窄，最后停在一座石牌坊前。

牌坊上刻着"周家禁地"四个字。`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '穿过牌坊',
            next: 'huimen_exp2_mountain_path_in',
            effects: { yin: 2 }
        },
        {
            text: '绕路走',
            next: 'huimen_exp2_mountain_path_around',
            effects: { yin: 1 }
        },
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_in = {
    title: '禁地',
    text: `你穿过牌坊。

里面的景象和外面完全不同。没有竹林，只有一片荒凉的石滩。石滩上立着许多石碑，每一块碑上都刻着一个名字。

你走近看，发现这些名字都是女子的名字。秀兰、柳红、阿绣、云袖……还有更多你不认识的。

[red]这是周家真正的祖坟。男人埋在村里，女人埋在这里。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '在碑前磕头',
            next: 'huimen_exp2_mountain_path_bow',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '寻找秀兰的碑',
            next: 'huimen_exp2_mountain_path_xiulan',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_bow = {
    title: '祭拜',
    text: `你在每一块碑前都磕了一个头。

"我不知道你们的名字。" 你说，"但我知道你们受过委屈。我替周家给你们磕头。"

石碑开始微微颤动，像是有许多人在哭泣。天边的月亮似乎亮了一些。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_bowed_at_women_graves',
    },
    choices: [
        {
            text: '继续寻找秀兰',
            next: 'huimen_exp2_mountain_path_xiulan',
            effects: { yin: 1 }
        },
        {
            text: '回山路',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_xiulan = {
    title: '秀兰之碑',
    text: `你找到秀兰的碑。

碑上没有名字，只有一行字："周氏不祥女之墓"。碑前放着一束枯萎的桂花。

你跪在碑前，用手把"不祥女"三个字擦掉。

"你不是不祥女。" 你说，"你是周秀兰。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_found_xiulan_mountain_grave',
    },
    choices: [
        {
            text: '把碑上的字改过来',
            next: 'huimen_exp2_mountain_path_rename',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '回山路',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_rename = {
    title: '正名',
    text: `你咬破手指，在碑上写下：

"周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

血字渗入石碑，发出淡淡的红光。你感到有许多目光落在身上，那些目光里不再有怨，只有感激。

[red]你帮她们每一个人，拿回了名字。[/red]`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp2_renamed_mountain_grave',
    },
    choices: [
        {
            text: '回山路',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_around = {
    title: '绕路',
    text: `你绕开牌坊，从竹林里穿行。

竹林很深，你走了很久，忽然听见前方传来水声。你拨开竹子，看见一条小溪。

溪水里漂着许多纸船，每只船上都写着"秀兰"。`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '沿着溪走',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
        {
            text: '回山路',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_child_ghost_playground = {
    title: '鬼孩玩耍地',
    text: `你来到村边的一片空地。

空地上有许多孩子玩的痕迹：跳房子的格子、丢沙包的圈、还有一架破旧的秋千。但这里没有孩子，只有几个半透明的身影在追逐打闹。

他们看见你，停了下来。

"大哥哥，" 一个小女孩说，"你是来陪我们玩的吗？"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '陪他们玩',
            next: 'huimen_exp2_child_ghost_play',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '问他们是谁',
            next: 'huimen_exp2_child_ghost_ask',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_child_ghost_play = {
    title: '玩耍',
    text: `你和孩子们玩了起来。

你们踢毽子、跳房子、丢沙包。孩子们笑得很开心，他们的笑声像铃铛一样，把周围的阴气一点点驱散。

"大哥哥，你真好。" 小女孩说，"作为谢礼，我们送你一样东西。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_played_with_child_ghosts',
    },
    choices: [
        {
            text: '接过礼物',
            next: 'huimen_exp2_child_ghost_gift',
            effects: { yin: -3 }
        },
        {
            text: '问他们想要什么',
            next: 'huimen_exp2_child_ghost_wish',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_child_ghost_gift = {
    title: '礼物',
    text: `小女孩递给你一颗玻璃珠。

珠子是透明的，里面却有一缕红色的光在流动。

"这是我们的眼泪。" 她说，"你拿着它，周家的人就不敢欺负你。"`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '鬼孩的眼泪',
    },
    choices: [
        {
            text: '收好',
            next: 'huimen_exp2_child_ghost_playground',
            effects: { yin: 1 }
        },
        {
            text: '把它给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, removeItem: '鬼孩的眼泪' }
        },
    ]
};

StoryData.huimen_exp2_child_ghost_wish = {
    title: '愿望',
    text: `你问："你们想要什么？"

孩子们安静下来。一个小男孩说："我们想回家。可我们不知道家在哪里。"

"你们的名字呢？" 你问。

"我们没有名字。" 小女孩说，"周家只叫我们'借来的命'。"`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp2_knows_child_ghosts_wish',
    },
    choices: [
        {
            text: '答应帮他们找名字',
            next: 'huimen_exp2_child_ghost_playground',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '带他们回家',
            ending: 'huimen_exp2_ending_child_ghost_home',
            ending: 'huimen_exp2_ending_child_ghost_home',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_child_ghost_ask = {
    title: '询问',
    text: `你问："你们为什么会在这里？"

小女孩说："我们都是被周家借走命的孩子。借完了，没地方去，就在这里玩。"

"秀兰姐姐的孩子也和我们一起玩过。" 小男孩说，"他叫元宝。后来他去找他娘了。"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '陪他们玩',
            next: 'huimen_exp2_child_ghost_play',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_cowherd_hut = {
    title: '牧童小屋',
    text: `你来到山脚下的一座小屋前。

屋子很小，屋顶上长满了野草。门口挂着一个生锈的牛铃，风一吹，发出沉闷的响声。

你推开门，屋里有一个小男孩，正在用草编一只蚱蜢。他抬头看你，眼睛是透明的。

"你是来找牛铃的吗？" 他问。`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '问他牛铃在哪里',
            next: 'huimen_exp2_cowherd_bell',
            effects: { yin: 1 }
        },
        {
            text: '陪他编蚱蜢',
            next: 'huimen_exp2_cowherd_play',
            effects: { sanity: 5, yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_cowherd_bell = {
    title: '牛铃',
    text: `牧童说："我的牛铃挂在老槐树上。没有牛铃，我找不到回家的路。"

"你帮你找。" 你说。

牧童笑了："真的？姐姐说，会有一个人来帮我找的。"`,
    effects: {
        sanity: 3,
        yin: -3,
        setFlag: 'huimen_exp2_promised_cowherd_bell',
    },
    choices: [
        {
            text: '去老槐树找牛铃',
            next: 'huimen_exp2_dawn_tree_cowherd',
            effects: { yin: 1 }
        },
        {
            text: '先陪他玩',
            next: 'huimen_exp2_cowherd_play',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_cowherd_play = {
    title: '编蚱蜢',
    text: `你坐下来，和牧童一起编蚱蜢。

他的手指是透明的，却灵巧得很。不一会儿，一只草蚱蜢就编好了。

"送给你。" 他说，"它会保护你的。"`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '草蚱蜢',
    },
    choices: [
        {
            text: '收好',
            next: 'huimen_exp2_cowherd_hut',
            effects: { yin: 1 }
        },
        {
            text: '去找牛铃',
            next: 'huimen_exp2_dawn_tree_cowherd',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_dawn_tree_cowherd = {
    title: '槐上取铃',
    text: `你来到村口老槐树下。

牛铃挂在最高的树枝上，已经生了锈。你爬上去，把它取下来。

铃身上刻着两个字："回家"。`,
    effects: {
        sanity: 3,
        yin: 1,
        addItem: '牧童的牛铃',
    },
    choices: [
        {
            text: '把牛铃还给牧童',
            next: 'huimen_exp2_cowherd_home',
            effects: { sanity: 10, yin: -10, removeItem: '牧童的牛铃' }
        },
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_cowherd_home = {
    title: '归家',
    text: `你把牛铃交给牧童。

他摇了摇铃铛，清脆的响声传遍村子。

"我可以回家了。" 他高兴地说，"姐姐，谢谢你。"

他牵起你的手，带你走出山村。纸人纷纷让开，不敢靠近。

到了村口，他把牛铃送给你："以后你迷路了，摇一摇，我就来找你。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_cowherd_released',
    },
    choices: [
        {
            text: '收下牛铃',
            ending: 'huimen_exp2_ending_cowherd_bell',
            ending: 'huimen_exp2_ending_cowherd_bell',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_medicine_shop = {
    title: '药铺',
    text: `你来到一间破败的药铺前。

药柜上的抽屉大多已经腐烂，地上散落着各种药材。空气中弥漫着一股苦涩的药味。

柜台后面挂着一块匾额，上面写着"悬壶济世"，但"世"字被人用刀划掉了。`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '翻看药柜',
            next: 'huimen_exp2_medicine_drawer',
            effects: { yin: 1 }
        },
        {
            text: '查看柜台下的账本',
            next: 'huimen_exp2_medicine_account',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_medicine_drawer = {
    title: '药柜',
    text: `你拉开一个药柜抽屉。

里面没有药材，只有一叠黄纸，纸上写着许多人的名字和生辰八字。你翻到最后，找到了秀兰的名字。

纸条背面写着："堕胎药一剂，银元三枚。"`,
    effects: {
        sanity: -8,
        yin: 3,
        addItem: '药铺堕胎记录',
    },
    choices: [
        {
            text: '把记录收好',
            next: 'huimen_exp2_medicine_shop',
            effects: { yin: 1 }
        },
        {
            text: '烧掉记录',
            next: 'huimen_exp2_medicine_shop',
            effects: { sanity: 5, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_medicine_account = {
    title: '账本',
    text: `你翻开柜台下的账本。

账本上记载着药铺三十年的生意。最后一页写着："民国二十三年中秋前夜，周家取堕胎药一副，用于不祥女秀兰。"

[red]原来连药铺都是帮凶。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp2_read_medicine_account',
    },
    choices: [
        {
            text: '把账本带走',
            next: 'huimen_exp2_medicine_shop',
            effects: { yin: 1, addItem: '药铺账本' }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_shop = {
    title: '裁缝铺',
    text: `你来到一间裁缝铺前。

铺子里挂着许多嫁衣，每一件都红得刺眼。裁缝台上放着一把剪刀，剪刀上缠着一缕长发。

墙上贴着许多纸条，都是尺寸和名字。你看见了秀兰的名字，后面写着"嫁衣一套，加急"。`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '查看那件嫁衣',
            next: 'huimen_exp2_tailor_dress',
            effects: { yin: 2 }
        },
        {
            text: '拿起剪刀',
            next: 'huimen_exp2_tailor_scissors',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_dress = {
    title: '嫁衣',
    text: `你取下那件绣着"秀兰"二字的嫁衣。

嫁衣是崭新的，像是刚做好没多久。可它永远不会有人穿了。

你在嫁衣内衬里发现一行小字：

[faded]"愿兰妹新婚大喜，白头偕老。——周文"[/faded]

[red]这是祖父为秀兰订做的嫁衣。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '秀兰的嫁衣（裁缝铺）',
    },
    choices: [
        {
            text: '把嫁衣带给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '秀兰的嫁衣（裁缝铺）' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_tailor_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_scissors = {
    title: '剪刀',
    text: `你拿起那把缠着头发的剪刀。

剪刀很沉，像是吸了很多年的怨气。你刚拿起它，就听见一个女子的声音："别剪，那是我的头发。"

你放下剪刀，头发自动松开，飘向门外。`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '裁缝剪刀',
    },
    choices: [
        {
            text: '把剪刀带给扎纸匠',
            next: 'huimen_exp2_paper_maker_house',
            effects: { yin: 1 }
        },
        {
            text: '收好',
            next: 'huimen_exp2_tailor_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_abandoned_hall = {
    title: '废弃祠堂',
    text: `你来到一座废弃的祠堂前。

祠堂的屋顶塌了一半，门上的漆剥落殆尽。你走进去，发现里面没有牌位，只有一面墙，墙上画着许多女子的画像。

每一个女子都穿着嫁衣，脸上却没有五官。画像下方写着她们的名字：秀兰、柳红、阿绣、云袖……`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '给画像补上五官',
            next: 'huimen_exp2_abandoned_hall_draw',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '在画像前烧香',
            next: 'huimen_exp2_abandoned_hall_incense',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_abandoned_hall_draw = {
    title: '补脸',
    text: `你捡起地上的木炭，给每一幅画像补上五官。

你画得很慢，很认真。秀兰的眼睛、柳红的眉、阿绣的嘴、云袖的鼻……你一边画，一边念她们的名字。

画完最后一笔，墙上的画像似乎都活了。她们朝你微笑，然后画像上的颜色一点点褪去，露出底下洁白的墙。`,
    effects: {
        sanity: -5,
        yin: -10,
        setFlag: 'huimen_exp2_drew_faces_for_women',
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_abandoned_hall_incense = {
    title: '上香',
    text: `你在地上找到几支没烧完的香，点燃，插在画像前。

烟雾升起，在空中凝成许多女子的身影。她们朝你鞠躬，然后消散。

"谢谢你。" 秀兰的声音说，"她们终于被人看见了。"`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp2_burned_incense_for_women',
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_childhood = {
    title: '秀兰的记忆 · 童年',
    text: `你忽然感到一阵眩晕。

再睁眼时，你站在一座小院里。院子里有一棵桂花树，树下坐着一个小女孩，正在绣花。

"秀兰。" 你脱口而出。

小女孩抬起头，笑了："你怎么知道我的名字？"`,
    effects: {
        sanity: -3,
        yin: 1,
    },
    choices: [
        {
            text: '陪她绣花',
            next: 'huimen_exp2_xiulan_memory_childhood_sew',
            effects: { yin: -3 }
        },
        {
            text: '告诉她以后的事',
            next: 'huimen_exp2_xiulan_memory_childhood_warn',
            effects: { yin: 2 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_childhood_sew = {
    title: '绣花',
    text: `你坐下来，看秀兰绣花。

她绣的是一对鸳鸯，针脚细密。"我娘说，女子要学会绣花，将来好做嫁衣。" 她说。

"你绣得很好。" 你说。

秀兰开心地笑了，那笑容里没有一丝阴霾。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_saw_xiulan_childhood',
    },
    choices: [
        {
            text: '继续看她的后来',
            next: 'huimen_exp2_xiulan_memory_love',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_childhood_warn = {
    title: '警告',
    text: `你想告诉她以后的事，却发现自己发不出声音。

秀兰疑惑地看着你："你怎么了？"

你拼命摇头。你知道，历史不能改变。你能做的，只是记住她此刻的笑容。`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_love = {
    title: '秀兰的记忆 · 相爱',
    text: `你又进入一段记忆。

这次是在河边。年轻的秀兰和一个穿学生装的男子站在一起。男子递给她一束野花，她脸红地接过。

"周文，" 她说，"你考上县里的学堂了，以后会不会忘了我？"

"不会。" 男子说，"我一辈子都不会忘。"`,
    effects: {
        sanity: -3,
        yin: 2,
    },
    choices: [
        {
            text: '继续看',
            next: 'huimen_exp2_xiulan_memory_love_more',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_love_more = {
    title: '誓言',
    text: `周文从怀里掏出一块玉佩，递给秀兰。

"这是我娘留给我的。" 他说，"等我娶你那天，再给你戴上。"

秀兰接过玉佩，贴在心口。

[red]你认出那块玉佩。它在祖母的遗物里。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '记忆中的玉佩（虚幻）',
    },
    choices: [
        {
            text: '继续看下去',
            next: 'huimen_exp2_xiulan_memory_pregnancy',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_pregnancy = {
    title: '秀兰的记忆 · 怀孕',
    text: `画面来到一间小屋。

秀兰坐在床边，手放在微微隆起的肚子上。她脸上带着幸福的笑，正在缝制一件小衣服。

"宝宝，" 她说，"你爹会来接我们的。我们要离开这里，去县里，去更大的地方。"`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '告诉她真相',
            next: 'huimen_exp2_xiulan_memory_pregnancy_cry',
            effects: { yin: 3 }
        },
        {
            text: '安静地看',
            next: 'huimen_exp2_xiulan_memory_pregnancy_silent',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_pregnancy_cry = {
    title: '崩溃',
    text: `你忍不住说："他不会来的。"

秀兰的笑容僵住了。她看着你，眼眶里慢慢涌出泪水："你说什么？"

你再也说不出话。画面开始扭曲，秀兰的哭声像刀子一样刺进你心里。`,
    effects: {
        sanity: -10,
        yin: 5,
    },
    choices: [
        {
            text: '继续看',
            next: 'huimen_exp2_xiulan_memory_betrayal',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_pregnancy_silent = {
    title: '静默',
    text: `你静静地看着秀兰。

她缝完最后一件小衣服，把它叠好，放在枕边。然后她轻轻哼起一首歌，哄肚子里的孩子睡觉。

[whisper]"睡吧，睡吧，我的宝贝……"[/whisper]

你泪流满面，却不敢出声。`,
    effects: {
        sanity: -3,
        yin: -5,
        setFlag: 'huimen_exp2_saw_xiulan_pregnancy',
    },
    choices: [
        {
            text: '继续看',
            next: 'huimen_exp2_xiulan_memory_betrayal',
            effects: { yin: 1 }
        },
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_betrayal = {
    title: '秀兰的记忆 · 背叛',
    text: `画面来到秀兰被拖走的那天。

几个壮汉闯进小屋，把秀兰按在床上。周文的母亲站在门口，冷冷地说："丢尽周家的脸。活埋。"

秀兰挣扎着，喊周文的名字。周文被关在东厢房，砸门的声音很远。

[red]她最后看见周文，是在门缝里。他哭着看她，却打不开门。[/red]`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp2_saw_xiulan_betrayal',
    },
    choices: [
        {
            text: '退出这段痛苦的记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
        {
            text: '抱住秀兰',
            next: 'huimen_exp2_xiulan_memory_betrayal_hug',
            effects: { sanity: -5, yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_betrayal_hug = {
    title: '拥抱',
    text: `你冲上去，抱住秀兰。

你的身体穿过了她，但她似乎感觉到了。她抬起头，朝你的方向看了一眼。

"是谁？" 她问。

"是一个会记住你的人。" 你说。

画面渐渐淡去。`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp2_hugged_xiulan_in_memory',
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

// 把新地点入口注入村街枢纽
StoryData.huimen_exp_village_street.choices.push({
    text: '去河边看看',
    next: 'huimen_exp2_riverbank',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去祖坟地',
    next: 'huimen_exp2_graveyard',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去稳婆家',
    next: 'huimen_exp2_midwife_house',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去纸扎匠家',
    next: 'huimen_exp2_paper_maker_house',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去盲婆婆家',
    next: 'huimen_exp2_blind_granny_house',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去村长家',
    next: 'huimen_exp2_village_head_house',
    condition: { flag: 'huimen_exp2_knows_children_names' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去废弃厨房',
    next: 'huimen_exp2_kitchen',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去粮仓',
    next: 'huimen_exp2_granary',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去学堂遗址',
    next: 'huimen_exp2_school',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '走山路去后山',
    next: 'huimen_exp2_mountain_path',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去孩子们玩耍的空地',
    next: 'huimen_exp2_child_ghost_playground',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去牧童小屋',
    next: 'huimen_exp2_cowherd_hut',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去药铺',
    next: 'huimen_exp2_medicine_shop',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去裁缝铺',
    next: 'huimen_exp2_tailor_shop',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去废弃祠堂',
    next: 'huimen_exp2_abandoned_hall',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '进入秀兰的记忆',
    next: 'huimen_exp2_xiulan_memory_childhood',
    condition: { flag: 'xiulanMercy' }, effects: { yin: -3 }
});

// ============================================================
// 新增场景与结局（山村深处扩展 · 二）
// ============================================================

Endings.huimen_exp2_ending_theater_shadow = {
    title: '隐藏结局 · 戏影',
    text: `你陪柳红唱完了最后一出戏。

戏台在月光下崩塌，柳红的戏服化作灰烬。她朝你深深一福："三十年了，终于有人听完我的戏。"

你把她的灰烬收进一个小瓷瓶，带出山村。后来在青石镇，你把骨灰撒进了戏台下的土里。

从那以后，青石镇的戏台每年中元都会自动唱一出《游园惊梦》。有人说，那是柳红在报答你。`
};

Endings.huimen_exp2_ending_river_god = {
    title: '隐藏结局 · 河神',
    text: `你把秀兰的名字刻在了河神的石碑上。

河水开始流动，不再是静止的黑镜。纸船一艘艘漂向远方，每一艘上都载着一个女子的名字。

河神从水里浮出来，是一个苍老的女人。她说："你替她们付了船钱，她们可以渡河了。"

秀兰站在船头，朝你挥手。她没有说话，但你听见了她心里的"谢谢"。

河水带走了她，也带走了三十年的怨。`
};

Endings.huimen_exp2_ending_mountain_pact = {
    title: '隐藏结局 · 山约',
    text: `你在后山禁地立了一块碑。

碑上刻着三十七个名字，每一个都是周家害死的女子。你跪在碑前，发誓每年都会回来祭拜。

山风很大，吹得碑文铮铮作响。你知道，那是她们在回应你。

从那以后，每年清明，你都会带一束桂花来到后山。村民们说，那碑前总会多出一束不知名的野花。

"是她们回礼。" 你说。`
};

StoryData.huimen_exp2_old_theater = {
    title: '老戏台',
    text: `你循着唱戏声，来到村子的老戏台前。

戏台比huimen_exp_street_opera_tune那座更大，台柱上缠满了红绸。台上没有演员，只有一件大红戏服在空中飘动，水袖自己挥舞，像是在表演。

台下发着许多纸人观众，它们整齐地坐着，仰着头，像是在看一出好戏。`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '上台',
            next: 'huimen_exp2_old_theater_stage',
            effects: { yin: 3 }
        },
        {
            text: '坐在纸人中间',
            next: 'huimen_exp2_old_theater_audience',
            effects: { yin: 2 }
        },
        {
            text: '问戏服是不是柳红',
            next: 'huimen_exp2_old_theater_liu_hong',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_stage = {
    title: '登台',
    text: `你走上戏台。

戏服立刻飘到你面前，水袖缠上你的脖子。戏服里没有身体，却发出一个女子的声音：

"你会唱戏吗？"

"不会。" 你说。

"那你会鼓掌吗？" 她问。

你鼓起掌来。戏服松开了水袖，缓缓飘回台中央。`,
    effects: {
        sanity: -8,
        yin: 2,
    },
    choices: [
        {
            text: '陪她唱一段',
            next: 'huimen_exp2_old_theater_sing',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '问她要什么',
            next: 'huimen_exp2_old_theater_ask',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_sing = {
    title: '同唱',
    text: `你张开嘴，和着戏服的唱腔唱起来。

你唱得很难听，但戏服没有嫌弃。它越唱越轻，越唱越淡，最后像一缕烟一样消散在月光里。

台下发发出一阵掌声。纸人观众们纷纷站起来，朝你鞠躬，然后化为灰烬。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_sang_with_liu_hong',
    },
    choices: [
        {
            text: '把柳红的戏服收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的戏服' }
        },
        {
            text: '让戏服随风散去',
            ending: 'huimen_exp2_ending_theater_shadow',
            ending: 'huimen_exp2_ending_theater_shadow',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_audience = {
    title: '观众席',
    text: `你坐在纸人中间。

纸人们一动不动，但你能感觉到它们在"看"你。台上的戏服唱到高潮处，纸人们齐齐鼓掌，掌声像一阵干燥的风。

你旁边的纸人转过头，它的脸和你一模一样。

"你也来听戏？" 它问。`,
    effects: {
        sanity: -10,
        yin: 3,
    },
    choices: [
        {
            text: '点头',
            next: 'huimen_exp2_old_theater_audience_nod',
            effects: { yin: 2 }
        },
        {
            text: '起身离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_audience_nod = {
    title: '纸人观众',
    text: `你点点头。

纸人笑了："那就好。柳红姐唱了三十年，终于有人愿意当她的观众。"

它从怀里掏出一张戏票，递给你。票上写着："青石镇戏台，柳红，民国二十三年中秋。"

[red]这是柳红生前最后一场戏的票。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '柳红的戏票',
    },
    choices: [
        {
            text: '收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_liu_hong = {
    title: '问柳红',
    text: `你问："你是柳红吗？"

戏服颤抖了一下，发出一声苦笑："我是，也不是。我只是她的一件衣服，替她唱她没唱完的戏。"

"她的魂呢？" 你问。

"被封在青石镇。" 戏服说，"你若去青石镇，帮我把这件衣服带去。她会跟你走的。"`,
    effects: {
        sanity: -3,
        yin: 2,
        setFlag: 'huimen_exp2_met_liu_hong_dress',
    },
    choices: [
        {
            text: '答应',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的戏服' }
        },
        {
            text: '拒绝',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_theater_ask = {
    title: '问所求',
    text: `你问戏服："你想要什么？"

戏服沉默了一会儿，说："我想被人听完。三十年了，每次唱到一半，台下的活人就跑了。"

"我听完。" 你说。

戏服又开始唱，这次唱得很慢，很完整。唱到最后，它化作一件普通的戏服，落在台上。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_finished_liu_hong_song',
    },
    choices: [
        {
            text: '收起戏服',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的戏服' }
        },
    ]
};

StoryData.huimen_exp2_river_god = {
    title: '河神石',
    text: `你在河边发现一块巨大的石头。

石头立在河中央，上面刻着"河神之位"四个字。石头周围漂着许多纸船，每只船上都写着一个名字。

你走近石头，发现石头上有一道裂缝，缝里渗出黑色的液体，像血，又像墨。`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '把手放在石头上',
            next: 'huimen_exp2_river_god_touch',
            effects: { yin: 3 }
        },
        {
            text: '在石头上刻字',
            next: 'huimen_exp2_river_god_carve',
            effects: { yin: -3 }
        },
        {
            text: '把纸船推开',
            next: 'huimen_exp2_river_god_boats',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_god_touch = {
    title: '河神之触',
    text: `你把手放在石头上。

石头很冰，冰得刺骨。你感到有什么东西从石头里钻出来，顺着你的手臂往上爬。

"又一个周家的人。" 一个苍老的声音说，"你们周家欠这条河太多命。"

"我来还债。" 你说。

"那就把你的名字刻上来。" 河神说，"刻一个名字，还一条命。"`,
    effects: {
        sanity: -8,
        yin: 5,
    },
    choices: [
        {
            text: '刻秀兰的名字',
            next: 'huimen_exp2_river_god_carve_xiulan',
            effects: { sanity: 5, yin: -10 }
        },
        {
            text: '刻自己的名字',
            next: 'huimen_exp2_river_god_carve_self',
            effects: { yin: 10 }
        },
    ]
};

StoryData.huimen_exp2_river_god_carve_xiulan = {
    title: '刻名',
    text: `你用手指在石头上刻下"周氏秀兰"四个字。

石头开始震动，黑色的液体从裂缝里涌出，却不是血，而是像墨水一样的东西。河面上的纸船纷纷让开，露出河底的一块青石。

"你替她还了船钱。" 河神说，"她可以渡河了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_paid_xiulan_river_fare',
    },
    choices: [
        {
            text: '送秀兰渡河',
            ending: 'huimen_exp2_ending_river_god',
            ending: 'huimen_exp2_ending_river_god',
            effects: { yin: -5 }
        },
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_god_carve_self = {
    title: '刻己',
    text: `你刻下自己的名字。

石头吸收了你的名字，你感到自己的生命力在流失。河神的声音变得满意："好，又一条命。"

[red]你成了周家又一个献祭给河的人。[/red]`,
    effects: {
        sanity: -15,
        yin: 10,
    },
    choices: [
        {
            text: '挣脱',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '放弃',
            ending: 'huimen_exp2_ending_village_head_judge',
            ending: 'huimen_exp2_ending_village_head_judge',
            effects: { yin: 5 }
        },
    ]
};

StoryData.huimen_exp2_river_god_carve = {
    title: '刻石',
    text: `你捡起一块尖锐的石头，在河神石上刻字。

你刻下"无辜"二字。石头发出一声哀鸣，裂缝里的黑液开始变清。

"你刻的是什么？" 河神问。

"真相。" 你说。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_carved_river_god',
    },
    choices: [
        {
            text: '继续刻',
            next: 'huimen_exp2_river_god_carve_more',
            effects: { sanity: -3, yin: -3 }
        },
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_god_carve_more = {
    title: '刻满',
    text: `你继续刻，刻下"秀兰、柳红、阿绣、云袖……"所有你能记住的名字。

河神石开始裂开，黑色的液体全部涌出，化作许多女子的身影。她们朝你鞠躬，然后顺着河水漂向远方。

"你替我们把名字刻在了河上。" 她们说，"河水会记住我们。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_carved_all_names_on_river',
    },
    choices: [
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_river_god_boats = {
    title: '推船',
    text: `你把河神石周围的纸船一一推开。

每只船被你推开时，都会发出一声轻轻的叹息。你忽然意识到，这些船不是被困在这里，而是在等一个愿意推它们走的人。

"谢谢你。" 一个声音说，"我们等了三十年，终于等到有人愿意让我们走。"`,
    effects: {
        sanity: 5,
        yin: -5,
    },
    choices: [
        {
            text: '继续推',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 3, yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_deep = {
    title: '山路深处',
    text: `你继续往山路深处走。

路越来越陡，两旁的竹子变成了枯骨一样的白色。你听见山顶传来钟声，沉闷而悠长，每响一声，地面就震动一下。

前方有一座小庙，庙门上挂着一块匾，匾上写着"送子观音"。`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '进庙',
            next: 'huimen_exp2_mountain_temple',
            effects: { yin: 2 }
        },
        {
            text: '绕过庙继续走',
            next: 'huimen_exp2_mountain_path_peak',
            effects: { yin: 2 }
        },
        {
            text: '回山路',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_temple = {
    title: '送子庙',
    text: `你走进庙里。

庙里没有观音像，只有许多泥塑的婴儿。它们排列在神龛上，每一个都闭着眼，嘴角却带着笑。

[red]这是周家求子的地方。每一个泥塑婴儿，都代表一个被借走命的孩子。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '砸碎泥塑',
            next: 'huimen_exp2_mountain_temple_smash',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '给泥塑取名',
            next: 'huimen_exp2_mountain_temple_name',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_mountain_path_deep',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_temple_smash = {
    title: '砸像',
    text: `你举起一块石头，砸向泥塑婴儿。

泥塑碎裂，里面掉出一缕头发。每砸一个，就有一股黑烟冒出来，化作一个小孩的虚影，朝你鞠躬，然后飞走。

"你放了他们。" 秀兰的声音说，"周家再也不能用他们续命了。"`,
    effects: {
        sanity: -5,
        yin: 5,
        setFlag: 'huimen_exp2_smashed_baby_statues',
    },
    choices: [
        {
            text: '继续砸',
            next: 'huimen_exp2_mountain_temple',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_mountain_path_deep',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_temple_name = {
    title: '取名',
    text: `你对着泥塑婴儿们，一个一个取名。

"大宝、二宝、三宝……" 你编了许多名字。每取一个，泥塑的笑容就更真一些。

"我们有名字了。" 一个声音说，"有名字，就能找到回家的路。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_named_baby_statues',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp2_mountain_path_deep',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_path_peak = {
    title: '山顶',
    text: `你绕过庙，来到山顶。

山顶有一块平地，平地上立着一根巨大的石柱。石柱上刻满了名字，男子的名字是凸出来的，女子的名字是凹进去的。

你伸手去摸一个凹进去的名字，指尖传来一阵刺痛。`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '把女子的名字刻深',
            next: 'huimen_exp2_mountain_peak_names',
            effects: { sanity: -5, yin: 3 }
        },
        {
            text: '在石柱前立誓',
            ending: 'huimen_exp2_ending_mountain_pact',
            ending: 'huimen_exp2_ending_mountain_pact',
            effects: { yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_mountain_path_deep',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_peak_names = {
    title: '刻深',
    text: `你用手指去抠那些凹进去的女子名字。

指甲翻了，血渗进石柱的缝隙里。可你没有停，你一个名字一个名字地抠，把它们抠深，抠清晰。

石柱开始颤抖，发出周家祖先的怒吼。但你不管。

"她们的名字，应该比你们的更深。" 你说。`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp2_deepened_mountain_names',
    },
    choices: [
        {
            text: '下山',
            next: 'huimen_exp2_mountain_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_nameless_stones = {
    title: '无名碑林',
    text: `你在祖坟地深处发现一片碑林。

碑林里有几十块无字碑，排列得整整齐齐，像一群沉默的人。你走近一块碑，发现碑下压着一张黄纸，纸上写着一个女子的生辰八字。

[red]这些是无名女子的墓。周家连名字都不愿刻在碑上。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '一张张看黄纸',
            next: 'huimen_exp2_nameless_stones_read',
            effects: { yin: 2 }
        },
        {
            text: '在每块碑上写名字',
            next: 'huimen_exp2_nameless_stones_write',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_nameless_stones_read = {
    title: '读纸',
    text: `你一张张翻看黄纸。

每一张纸上都有一个女子的生辰八字，却没有名字。你翻到最下面一张，发现是秀兰的。

"民国三年三月初七，子时。" 你念出声。

[whisper]"那是我出生的时辰。"[/whisper] 秀兰说，"周家连我的八字都记得，却不愿记我的名字。"`,
    effects: {
        sanity: -5,
        yin: 3,
        setFlag: 'huimen_exp2_read_nameless_papers',
    },
    choices: [
        {
            text: '把八字收好',
            next: 'huimen_exp2_nameless_stones',
            effects: { yin: 1, addItem: '秀兰的八字纸' }
        },
        {
            text: '烧掉它们',
            next: 'huimen_exp2_nameless_stones',
            effects: { sanity: 5, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_nameless_stones_write = {
    title: '写名',
    text: `你咬破手指，在每块无字碑上写下名字。

你不知道她们真正的名字，就写"周氏女子之墓"、"无名姐妹之墓"、"被周家所害之墓"。

写到最后一笔，碑林开始发光。无数女子的身影从碑后浮现，朝你鞠躬。

"谢谢你。" 她们说，"终于有人知道我们在这里。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_wrote_nameless_stones',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp2_graveyard',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_stove = {
    title: '灶台',
    text: `你蹲在废弃厨房的灶台前。

灶台里还有没烧完的柴火，柴火中间埋着一个陶罐。你把陶罐取出来，发现罐口封着黄符，符上写着"禁"。

[red]周家在灶台里封了东西。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '打开陶罐',
            next: 'huimen_exp2_kitchen_stove_open',
            effects: { yin: 3 }
        },
        {
            text: '把黄符烧了',
            next: 'huimen_exp2_kitchen_stove_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '放回原处',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_stove_open = {
    title: '开罐',
    text: `你撕开黄符，打开陶罐。

罐里不是东西，是一团黑雾。黑雾飘出来，在空中凝成一个女子的身形。

"我是秀兰的厨娘。" 她说，"她怀孕那阵，我偷偷给她送吃的。后来我被周家赶出去，饿死在路上。"

"你能告诉我秀兰的事吗？" 你问。`,
    effects: {
        sanity: -3,
        yin: 3,
        setFlag: 'huimen_exp2_met_cook_spirit',
    },
    choices: [
        {
            text: '听她讲',
            next: 'huimen_exp2_kitchen_stove_listen',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_stove_listen = {
    title: '厨娘的话',
    text: `厨娘说："秀兰是个好孩子。她怀孕那阵，总说要给孩子做桂花糕。我教她，她学得可快了。"

"后来她被抓走，我被关在门外。我听见她在屋里喊：'姨，救救我。' 可我救不了她。"

厨娘的魂开始变淡："你要是见到秀兰，告诉她，姨对不起她，但姨给她留了一罐桂花蜜。"`,
    effects: {
        sanity: -5,
        yin: -5,
        addItem: '厨娘的桂花蜜',
    },
    choices: [
        {
            text: '把桂花蜜给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '厨娘的桂花蜜' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_kitchen_stove_burn = {
    title: '焚符',
    text: `你点燃黄符。

符纸燃烧时，发出一阵婴儿的啼哭。厨娘的魂从灶台里飘出来，朝你鞠躬："谢谢你放我出来。"

她化作一道光，飞向远方。灶台里的火熄灭了，屋里弥漫着桂花的香气。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_released_cook_spirit',
    },
    choices: [
        {
            text: '回厨房',
            next: 'huimen_exp2_kitchen',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_soul = {
    title: '谷魂',
    text: `你听见粮仓深处传来叹息声。

你循声走去，发现谷堆中央站着一个女子。她的身体是半透明的，由无数谷粒组成。

"我是谷魂。" 她说，"周家把女子的魂封在谷里，每年祭祀时吃一点，就能延年益寿。"`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '问她怎么才能解脱',
            next: 'huimen_exp2_granary_soul_ask',
            effects: { yin: 1 }
        },
        {
            text: '把谷堆散开',
            next: 'huimen_exp2_granary_soul_release',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_granary',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_soul_ask = {
    title: '问解脱',
    text: `谷魂说："你把谷堆散开，我们的魂就能飞出去。但你要小心，周家会发现你。"

[red]她的话音刚落，粮仓外就传来脚步声。[/red]`,
    effects: {
        sanity: -3,
        yin: 2,
        setFlag: 'huimen_exp2_knows_granary_soul_release',
    },
    choices: [
        {
            text: '立刻散开谷堆',
            next: 'huimen_exp2_granary_soul_release',
            effects: { yin: -3 }
        },
        {
            text: '躲起来',
            next: 'huimen_exp2_granary_hide',
            effects: { yin: 2 }
        },
    ]
};

StoryData.huimen_exp2_granary_soul_release = {
    title: '散谷',
    text: `你冲进谷堆，用双手把谷粒向四周拨开。

谷粒飞舞，每一颗都发出一道微弱的光。女子的身影从谷粒中升起，越来越多，最后化作一片光海。

"自由了……" 她们说，"终于自由了……"`,
    effects: {
        sanity: 5,
        yin: -10,
        setFlag: 'huimen_exp2_released_granary_souls',
    },
    choices: [
        {
            text: '回粮仓',
            next: 'huimen_exp2_granary',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_granary_hide = {
    title: '躲藏',
    text: `你躲进谷堆后面。

脚步声在粮仓里转了一圈，然后停在你藏身的谷堆前。你屏住呼吸。

"出来吧。" 一个声音说，"我知道你在。周家的事，你管不了。"`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '出来',
            next: 'huimen_exp2_granary_soul_release',
            effects: { yin: -3 }
        },
        {
            text: '继续躲',
            next: 'huimen_exp2_granary',
            effects: { sanity: -3, yin: 2 }
        },
    ]
};

StoryData.huimen_exp2_blood_contract = {
    title: '血契',
    text: `你在村长家的密室里发现一卷羊皮纸。

羊皮纸上写满了血字，是周家开基祖与某个存在签的契约。契约内容大致是：周家以女子之血续命，换取男丁荣华富贵。

[red]秀兰不是第一个，也不会是最后一个。[/red]`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp2_found_blood_contract',
    },
    choices: [
        {
            text: '烧毁契约',
            next: 'huimen_exp2_blood_contract_burn',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '用血改写契约',
            next: 'huimen_exp2_blood_contract_rewrite',
            effects: { sanity: -10, yin: -10 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blood_contract_burn = {
    title: '焚契',
    text: `你点燃羊皮纸。

火光里，一个苍老的身影尖叫："你敢毁周家的根！"

"周家的根早就烂了。" 你说。

契约化为灰烬，密室开始崩塌。你跑出去，身后是一片烟尘。`,
    effects: {
        sanity: -10,
        yin: 10,
    },
    choices: [
        {
            text: '回村长家',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_blood_contract_rewrite = {
    title: '改写',
    text: `你咬破手指，在契约背面写下：

"周家后世子孙，愿以己身替女子受过。从此女子不再为债，男丁不再借命。"

血字渗入羊皮纸，纸上的旧字开始褪色。你感到胸口的压抑轻了许多。`,
    effects: {
        sanity: 10,
        yin: -15,
        setFlag: 'huimen_exp2_rewrote_blood_contract',
    },
    choices: [
        {
            text: '把契约带走',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1, addItem: '改写后的血契' }
        },
        {
            text: '烧了它',
            next: 'huimen_exp2_blood_contract_burn',
            effects: { yin: 5 }
        },
    ]
};

StoryData.huimen_exp2_paper_doll_origin = {
    title: '纸偶起源',
    text: `你在纸扎铺的地下室里发现一本古书。

书上记载着纸扎术的起源：很久以前，周家祖先为了逃避死亡，发明了一种把活人魂封进纸人的术法。第一个被封进去的，是一个叫"阿绣"的女子。

[red]纸扎术不是手艺，是囚魂术。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp2_learned_paper_doll_origin',
    },
    choices: [
        {
            text: '烧了古书',
            next: 'huimen_exp2_paper_doll_origin_burn',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '把古书带走',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1, addItem: '纸扎术古书' }
        },
        {
            text: '离开',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_doll_origin_burn = {
    title: '焚书',
    text: `你点燃古书。

书页在火中扭曲，发出许多女子的哭声。她们是被封在纸扎术里的魂，随着古书的焚毁，一个个飞出来。

"谢谢你。" 她们说，"我们终于可以不再做纸人了。"`,
    effects: {
        sanity: -5,
        yin: 10,
        setFlag: 'huimen_exp2_burned_paper_doll_book',
    },
    choices: [
        {
            text: '回纸扎铺',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
    ]
};

// 把第二批新地点入口注入村街枢纽
StoryData.huimen_exp_village_street.choices.push({
    text: '去老戏台看看',
    next: 'huimen_exp2_old_theater',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去河神石那里',
    next: 'huimen_exp2_river_god',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '往山路深处走',
    next: 'huimen_exp2_mountain_path_deep',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去无名碑林',
    next: 'huimen_exp2_nameless_stones',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '查看灶台下面',
    next: 'huimen_exp2_kitchen_stove',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '寻找谷魂',
    next: 'huimen_exp2_granary_soul',
    effects: { yin: 1 }
});

// 特殊入口
StoryData.huimen_exp2_village_head_house.choices.push({
    text: '在村长家密室发现一卷血契',
    next: 'huimen_exp2_blood_contract',
    condition: { flag: 'huimen_exp2_confronted_village_head' },
    effects: { yin: 2 }
});

StoryData.huimen_exp_paper_shop.choices.push({
    text: '发现通往地下室的暗门',
    next: 'huimen_exp2_paper_doll_origin',
    condition: { flag: 'huimen_exp_learned_doll_substitute' },
    effects: { yin: 2 }
});

// ============================================================
// 新增场景与结局（山村深处扩展 · 三）
// ============================================================

Endings.huimen_exp2_ending_lantern_river = {
    title: '隐藏结局 · 灯河',
    text: `你在河边放了一盏河灯。

河灯是用秀兰的头发和纸船做的，灯芯是她三十年未熄的怨。你把灯放进河里，看着它漂向远方。

河水开始流动，一艘艘纸船跟着河灯走。船上坐着许多女子的身影，她们朝你挥手，然后消失在晨光里。

秀兰坐在最后一艘船上。她没有回头，只是轻轻说了一句："我走了。"

河灯漂远了，河水也清了。你知道，有些债，终于还清了。`
};

Endings.huimen_exp2_ending_seed = {
    title: '隐藏结局 · 种籽',
    text: `你在秀兰的坟前种下一粒种子。

种子是秀兰生前最喜欢的桂花树种。你埋好土，浇上水，坐在坟边等了一夜。

天亮时，种子发芽了。不是普通的芽，是一缕细细的红光，像一根红绳从土里钻出来。

"我会长大的。" 秀兰的声音说，"长成一棵桂花树，每年秋天开花。"

你离开山村时，回头看了看。那缕红光已经长成了一棵小树，在风中轻轻摇晃。

很多年后，那棵树比老宅还高。村里人说，每年秋天，树下都会站着一个穿红嫁衣的女子。`
};

Endings.huimen_exp2_ending_mirror_lake = {
    title: '隐藏结局 · 镜湖',
    text: `你在河边发现了一面镜子。

镜子不是普通的镜子，它是河水凝成的。你把它捞起来，照向井底。

井底的秀兰看见了镜子里的自己。不是鬼，是十六岁的她，扎着辫子，笑着。

"原来我以前长这样。" 她说，"我都忘了。"

她把镜子接过去，镜面碎成无数片，每一片都映出她不同年纪的样子。最后一片，是她穿着嫁衣，走向光明的样子。

"谢谢你让我看见自己。" 她说，"我可以走了。"`
};

StoryData.huimen_exp2_theater_backstage = {
    title: '戏台后台',
    text: `你绕到戏台后面。

后台堆满了戏服、头面、胭脂盒。一面镜子立在角落里，镜面上布满裂痕。你走近，镜子里映出的不是你自己，而是一个正在化妆的女子。

她在画眉，动作很慢，每一笔都带着忧愁。`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '看她化妆',
            next: 'huimen_exp2_theater_mirror',
            effects: { yin: 2 }
        },
        {
            text: '翻找胭脂盒',
            next: 'huimen_exp2_theater_makeup',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_old_theater',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_theater_mirror = {
    title: '镜中女子',
    text: `你看着镜中的女子画完眉，然后缓缓转过头。

她没有脸，只有一团模糊的白影。可她的声音很清楚："我等了三十年，等一个愿意看我化妆的人。"

"你是谁？" 你问。

"我是柳红。" 她说，"我死前正在化新娘妆，妆没化完，就被活埋了。"`,
    effects: {
        sanity: -8,
        yin: 3,
        setFlag: 'huimen_exp2_met_liu_hong_mirror',
    },
    choices: [
        {
            text: '帮她化完妆',
            next: 'huimen_exp2_theater_makeup_help',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开镜子',
            next: 'huimen_exp2_theater_backstage',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_theater_makeup = {
    title: '胭脂盒',
    text: `你翻开一个胭脂盒。

盒里的胭脂已经干涸，却还散发着淡淡的香气。盒底刻着两个字："柳红"。

[red]这是柳红的胭脂。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '柳红的胭脂',
    },
    choices: [
        {
            text: '把胭脂带给柳红的戏服',
            next: 'huimen_exp2_old_theater',
            effects: { sanity: 5, yin: -5, removeItem: '柳红的胭脂' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_theater_backstage',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_theater_makeup_help = {
    title: '完妆',
    text: `你拿起眉笔，帮镜中的柳红画完剩下的妆。

你的手穿过镜面，却像穿过水一样。柳红的脸渐渐清晰，露出一个清秀的女子模样。

"我好看吗？" 她问。

"好看。" 你说，"比任何新娘都好看。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_finished_liu_hong_makeup',
    },
    choices: [
        {
            text: '把她的骨灰带出去',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '柳红的骨灰' }
        },
        {
            text: '让她随风散去',
            next: 'huimen_exp_village_street',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_river_lantern = {
    title: '河灯',
    text: `你在河边发现一盏未点燃的河灯。

河灯是用黄纸扎的，灯芯是一缕细细的头发。你把灯拿起来，发现灯底写着"秀兰"二字。

[red]这是秀兰生前放的河灯，三十年了，还没有漂出去。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
    },
    choices: [
        {
            text: '点燃河灯',
            next: 'huimen_exp2_river_lantern_light',
            condition: { hasItem: '打火机' },
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把河灯放回河里',
            next: 'huimen_exp2_river_lantern_release',
            effects: { yin: -3 }
        },
        {
            text: '收好',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1, addItem: '秀兰的河灯' }
        },
    ]
};

StoryData.huimen_exp2_river_lantern_light = {
    title: '点灯',
    text: `你点燃打火机，凑近河灯。

火苗舔上灯芯，发出淡淡的金光。河灯没有燃烧，反而变得更亮，像一只小小的太阳。

"你点燃了我的灯。" 秀兰的声音说，"我可以跟着它走了。"`,
    effects: {
        sanity: 5,
        yin: -5,
        removeItem: '秀兰的河灯',
    },
    choices: [
        {
            text: '放灯入河',
            ending: 'huimen_exp2_ending_lantern_river',
            ending: 'huimen_exp2_ending_lantern_river',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_river_lantern_release = {
    title: '放灯',
    text: `你把河灯轻轻放进河里。

河灯没有沉，而是稳稳地漂在水面上。水面泛起涟漪，像是一只手在推着它。

"它会漂到该去的地方。" 秀兰说，"谢谢你。"`,
    effects: {
        sanity: 5,
        yin: -5,
    },
    choices: [
        {
            text: '回河边',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mirror_lake = {
    title: '镜湖',
    text: `你沿着河走，来到一片平静的湖面。

湖面像一面巨大的镜子，倒映着天空和月亮。可镜中的月亮是红色的，而天上的月亮是白色的。

[red]这不是倒影，是另一个世界。[/red]`,
    effects: {
        sanity: -5,
        yin: 3,
    },
    choices: [
        {
            text: '把手伸进湖里',
            next: 'huimen_exp2_mirror_lake_touch',
            effects: { yin: 3 }
        },
        {
            text: '对湖面说话',
            next: 'huimen_exp2_mirror_lake_talk',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mirror_lake_touch = {
    title: '触镜',
    text: `你把手伸进湖里。

湖水不是凉的，是温的，像人的体温。你的手穿过了水面，触到一只冰冷的手。

那只手把你往下拉。你拼命挣扎，终于把手抽回来。

[red]你的手腕上多了一道红印，像被人握过。[/red]`,
    effects: {
        sanity: -8,
        yin: 5,
    },
    choices: [
        {
            text: '再试一次',
            next: 'huimen_exp2_mirror_lake_pull',
            effects: { yin: 5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mirror_lake_pull = {
    title: '拉人',
    text: `你再次把手伸进湖里。

这次你没有挣扎，而是用力一拉。湖里被你拉出一个人——是秀兰，浑身湿透，脸色苍白。

"你救了我？" 她问。

"我拉你出来。" 你说。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_pulled_xiulan_from_lake',
    },
    choices: [
        {
            text: '用镜子照她',
            ending: 'huimen_exp2_ending_mirror_lake',
            ending: 'huimen_exp2_ending_mirror_lake',
            effects: { yin: -5 }
        },
    ]
};

StoryData.huimen_exp2_mirror_lake_talk = {
    title: '湖语',
    text: `你对着湖面说："秀兰，你在这里吗？"

湖面泛起涟漪，涟漪中浮现出秀兰的脸。她看着你，眼神里有一丝惊讶。

"你看得见我？" 她问。

"看得见。" 你说，"你不是倒影，你就在这里。"`,
    effects: {
        sanity: 5,
        yin: -5,
    },
    choices: [
        {
            text: '继续说话',
            next: 'huimen_exp2_mirror_lake',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_riverbank',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mountain_seed = {
    title: '山顶种籽',
    text: `你在山顶石柱下发现一粒种子。

种子是黑色的，像一颗小小的石头。你把它捡起来，感到一阵温暖。

"那是我的桂花树种。" 秀兰的声音说，"我死前把它埋在后山，希望来世能闻到桂花香。"`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '秀兰的桂花种子',
    },
    choices: [
        {
            text: '把种子种在秀兰坟前',
            ending: 'huimen_exp2_ending_seed',
            ending: 'huimen_exp2_ending_seed',
            effects: { yin: -5 }
        },
        {
            text: '把种子带在身上',
            next: 'huimen_exp2_mountain_path_peak',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_vault = {
    title: '村长密室',
    text: `你在村长家的床底下发现一道暗门。

暗门通向一间密室，密室里堆满了金银财宝。每一锭银子下面都压着一张黄纸，纸上写着一个女子的名字。

[red]周家的财富，是女子的命换来的。[/red]`,
    effects: {
        sanity: -10,
        yin: 5,
    },
    choices: [
        {
            text: '把财宝扔出密室',
            next: 'huimen_exp2_village_head_vault_throw',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '翻看黄纸',
            next: 'huimen_exp2_village_head_vault_read',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_vault_throw = {
    title: '扔银',
    text: `你抱起一锭银子，扔出密室。

银子落地，发出沉闷的响声。黄纸从银子下飘出来，像蝴蝶一样飞向空中。

"我们的钱，不要了。" 一个女子的声音说，"我们要的是名字。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_threw_village_head_silver',
    },
    choices: [
        {
            text: '继续扔',
            next: 'huimen_exp2_village_head_vault',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_village_head_vault_read = {
    title: '读纸',
    text: `你翻看黄纸。

每一张纸上都有一个女子的名字和生辰，以及她被"换"了多少钱。秀兰被换了三十两银子，柳红被换了二十两，阿绣被换了十五两。

[red]原来她们的命，在周家眼里就这么便宜。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
        addItem: '周家女子命价单',
    },
    choices: [
        {
            text: '把命价单贴到村口',
            next: 'huimen_exp_village_street',
            effects: { sanity: 10, yin: -10, removeItem: '周家女子命价单', setFlag: 'huimen_exp2_posted_price_list' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_village_head_vault',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_midwife_secret_room = {
    title: '稳婆密室',
    text: `你在稳婆家的床板下发现一个暗格。

暗格里有一本日记，日记里记载着稳婆一生的秘密。你翻到民国二十三年那一页：

[faded]"今日为周家不祥女接生。孩子已出母腹，周老太爷亲手按死。我无力阻止，只能把孩子的脐带藏起。此罪此生难消。"[/faded]`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp2_found_midwife_secret',
    },
    choices: [
        {
            text: '把日记给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 5, yin: -5, addItem: '稳婆日记' }
        },
        {
            text: '烧了日记',
            next: 'huimen_exp2_midwife_house',
            effects: { sanity: 5, yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_paper_shop_basement = {
    title: '纸扎铺地下室',
    text: `你推开纸扎铺后屋的地板，发现一条向下的楼梯。

地下室里摆满了纸人，每一个纸人都长着周家男丁的脸。最里面的架子上，放着一具特别的纸人——它长着秀兰的脸。

[red]周家不仅扎替身，还扎新娘。[/red]`,
    effects: {
        sanity: -10,
        yin: 3,
    },
    choices: [
        {
            text: '烧了秀兰的纸人',
            next: 'huimen_exp2_paper_shop_basement_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把纸人带走',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1, addItem: '秀兰的纸人' }
        },
        {
            text: '离开',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_shop_basement_burn = {
    title: '焚偶',
    text: `你点燃秀兰的纸人。

纸人在火中扭曲，发出秀兰的尖叫。但叫声里没有痛苦，只有解脱。

"你烧了我最后一个替身。" 秀兰的声音说，"从今以后，周家再也不能复制我。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_burned_xiulan_paper_doll',
    },
    choices: [
        {
            text: '回纸扎铺',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_wedding = {
    title: '秀兰的记忆 · 嫁衣',
    text: `你进入一段新的记忆。

秀兰穿着一身大红嫁衣，坐在喜房里。她盖着红盖头，手里攥着一块玉佩。

"周文说，今夜就来娶我。" 她轻声说，"我等这一天，等了三年。"`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '掀开她的盖头',
            next: 'huimen_exp2_xiulan_memory_wedding_unveil',
            effects: { yin: 2 }
        },
        {
            text: '陪她等',
            next: 'huimen_exp2_xiulan_memory_wedding_wait',
            effects: { yin: -3 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_wedding_unveil = {
    title: '掀盖头',
    text: `你掀开她的盖头。

盖头下的秀兰笑得很美，眼角有一颗泪痣。她看着你，不，是看着周文的方向："你来了。"

画面突然扭曲。喜房变成了井底，秀兰穿着同样的嫁衣，沉在血红的井水里。`,
    effects: {
        sanity: -10,
        yin: 5,
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_wedding_wait = {
    title: '等待',
    text: `你陪秀兰坐着。

她等了很久，红烛烧了一半，窗外的天从黑变灰。她脸上的笑容渐渐淡了。

"他不会来了。" 她说，"我知道。"

[red]可她还是穿着嫁衣，等到了天亮。[/red]`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp2_saw_xiulan_wedding_wait',
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_well = {
    title: '秀兰的记忆 · 井底',
    text: `你来到秀兰被活埋时的记忆。

井水冰冷，秀兰蜷缩在井底，双手护着肚子。她的指甲在井壁上刻字，刻到指甲翻起，血把井水染红。

"周文，我恨你。周文，我等你。"`,
    effects: {
        sanity: -15,
        yin: 5,
        setFlag: 'huimen_exp2_saw_xiulan_well_memory',
    },
    choices: [
        {
            text: '帮她刻字',
            next: 'huimen_exp2_xiulan_memory_well_help',
            effects: { sanity: -5, yin: -5 }
        },
        {
            text: '握住她的手',
            next: 'huimen_exp2_xiulan_memory_well_hold',
            effects: { sanity: 5, yin: -10 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_well_help = {
    title: '刻字',
    text: `你帮她在井壁上刻字。

你们一起刻："周秀兰，民国二十三年卒。周家所害。"

刻完，秀兰看着你，眼泪和井水混在一起："谢谢你。至少有人知道我是怎么死的。"`,
    effects: {
        sanity: -5,
        yin: -5,
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_xiulan_memory_well_hold = {
    title: '握手',
    text: `你握住她的手。

她的手很凉，但你没有松。你陪她在井底坐着，直到她的呼吸停止。

"原来我不是一个人死的。" 她说，"谢谢你陪我。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_held_xiulan_in_well_memory',
    },
    choices: [
        {
            text: '退出记忆',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel = {
    title: '秘道',
    text: `你在村长家的灶台后发现一道暗门。

暗门后是一条狭窄的秘道，墙壁上点着长明灯，灯油散发着一股奇怪的气味，像脂肪燃烧的味道。

[red]这条秘道通向哪里？[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '沿秘道走',
            next: 'huimen_exp2_secret_tunnel_walk',
            effects: { yin: 2 }
        },
        {
            text: '查看灯油',
            next: 'huimen_exp2_secret_tunnel_oil',
            effects: { yin: 3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel_walk = {
    title: '秘道深处',
    text: `你沿着秘道走了很久。

秘道的尽头是一间石室，石室正中有一口井。井不是通向地下，而是通向天空——你抬头看，井口外是满天星斗。

"这是周家的星井。" 一个声音说，"所有被周家害死的人，最后都要从这里出去。"`,
    effects: {
        sanity: -8,
        yin: 3,
    },
    choices: [
        {
            text: '对井喊话',
            next: 'huimen_exp2_secret_tunnel_well_call',
            effects: { yin: -3 }
        },
        {
            text: '把黄纸扔进井里',
            next: 'huimen_exp2_secret_tunnel_well_paper',
            effects: { yin: 2 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_secret_tunnel',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel_oil = {
    title: '灯油',
    text: `你凑近长明灯闻了闻。

灯油有一股腥甜的味道，像是……人油。你想起周家续命的传说，胃里一阵翻腾。

"这是女子的脂膏。" 一个声音说，"烧了三百年，还没烧完。"`,
    effects: {
        sanity: -10,
        yin: 5,
        setFlag: 'huimen_exp2_learned_lamp_oil_secret',
    },
    choices: [
        {
            text: '吹灭长明灯',
            next: 'huimen_exp2_secret_tunnel_oil_extinguish',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_secret_tunnel',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel_oil_extinguish = {
    title: '熄灯',
    text: `你吹灭一盏长明灯。

密室暗了一角， walls上的影子开始骚动。你继续吹，一盏接一盏，直到整个秘道陷入黑暗。

"你断了周家的灯。" 秀兰的声音说，"她们不用再被烧了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_extinguished_tunnel_lamps',
    },
    choices: [
        {
            text: '摸黑离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel_well_call = {
    title: '对井喊话',
    text: `你对着星井喊："秀兰，你听得见吗？"

井里传来回应："听得见。这里能看见所有星星。"

"你想出来吗？" 你问。

"想。" 她说，"但我要带着她们一起出来。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_called_xiulan_in_star_well',
    },
    choices: [
        {
            text: '等她',
            next: 'huimen_exp2_secret_tunnel',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_secret_tunnel_well_paper = {
    title: '扔纸',
    text: `你把一张黄纸扔进星井。

黄纸没有下落，而是向上飘去，飘出井口，飘向星空。

"那是我们的信。" 秀兰说，"你帮我们把信寄给天了。"`,
    effects: {
        sanity: 3,
        yin: -3,
    },
    choices: [
        {
            text: '多扔几张',
            next: 'huimen_exp2_secret_tunnel',
            effects: { yin: -2 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_village_head_house',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_secret = {
    title: '裁缝铺密室',
    text: `你在裁缝铺的柜台下发现一个暗格。

暗格里有一卷布，布上画着许多女子的身形。每一道身形旁边都写着名字和尺寸。

[red]周家每害一个女子，都会先给她做一身嫁衣。[/red]`,
    effects: {
        sanity: -8,
        yin: 3,
        setFlag: 'huimen_exp2_found_tailor_secret',
    },
    choices: [
        {
            text: '烧了布卷',
            next: 'huimen_exp2_tailor_secret_burn',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '把秀兰的嫁衣剪下来',
            next: 'huimen_exp2_tailor_secret_cut',
            effects: { yin: 1 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_tailor_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_secret_burn = {
    title: '焚卷',
    text: `你点燃布卷。

火光里，许多女子的身影浮现出来。她们穿着嫁衣，在火中跳舞，最后化为灰烬。

"谢谢你。" 她们说，"我们不用再穿周家的嫁衣了。"`,
    effects: {
        sanity: -5,
        yin: 10,
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp2_tailor_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_tailor_secret_cut = {
    title: '剪嫁衣',
    text: `你用裁缝剪刀剪下秀兰的嫁衣身形。

布上的秀兰忽然动了，她朝你福了一福，然后从布上走下来，化作一道光，飞入你的怀中。

"带我走。" 她说。`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '布上的秀兰',
    },
    choices: [
        {
            text: '带她去找秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '布上的秀兰' }
        },
        {
            text: '收好',
            next: 'huimen_exp2_tailor_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_medicine_secret = {
    title: '药铺密室',
    text: `你在药铺的柜台后发现一道暗门。

暗门后是一间小密室，墙上挂着许多女子的画像。每一幅画像下面都摆着一碗黑乎乎的药渣。

[red]这些药渣，是周家给"不祥女"喝的堕胎药。[/red]`,
    effects: {
        sanity: -10,
        yin: 5,
    },
    choices: [
        {
            text: '砸碎药碗',
            next: 'huimen_exp2_medicine_secret_smash',
            effects: { sanity: -5, yin: 5 }
        },
        {
            text: '把画像翻过来',
            next: 'huimen_exp2_medicine_secret_turn',
            effects: { yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp2_medicine_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_medicine_secret_smash = {
    title: '砸碗',
    text: `你砸碎药碗。

药渣飞溅，化作许多女子的哭声。墙上的画像开始抖动，像是要从画里走出来。

"你砸了我们的药。" 她们说，"我们不用再喝了。"`,
    effects: {
        sanity: -5,
        yin: 10,
        setFlag: 'huimen_exp2_smashed_medicine_bowls',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp2_medicine_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_medicine_secret_turn = {
    title: '翻画像',
    text: `你把画像翻过来。

画像背面写着每个女子的真实姓名和生辰，以及一句话："我本无辜。"

你把它们一一念出来。每念一个，画像上的女子就笑一下，然后消失。`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_read_medicine_portraits',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp2_medicine_shop',
            effects: { yin: 1 }
        },
    ]
};

// 把第三批新地点入口注入村街枢纽
StoryData.huimen_exp_village_street.choices.push({
    text: '去戏台后台',
    next: 'huimen_exp2_theater_backstage',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '在河边放一盏灯',
    next: 'huimen_exp2_river_lantern',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去那片像镜子的湖',
    next: 'huimen_exp2_mirror_lake',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '查看村长家密室',
    next: 'huimen_exp2_village_head_vault',
    condition: { flag: 'huimen_exp2_confronted_village_head' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '查看稳婆的暗格',
    next: 'huimen_exp2_midwife_secret_room',
    condition: { flag: 'huimen_exp2_midwife_released' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去纸扎铺地下室',
    next: 'huimen_exp2_paper_shop_basement',
    condition: { flag: 'huimen_exp_learned_doll_substitute' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '进入秀兰的婚礼记忆',
    next: 'huimen_exp2_xiulan_memory_wedding',
    condition: { flag: 'huimen_exp2_saw_xiulan_childhood' }, effects: { yin: -3 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '进入秀兰的井底记忆',
    next: 'huimen_exp2_xiulan_memory_well',
    condition: { flag: 'huimen_exp2_saw_xiulan_betrayal' }, effects: { yin: -3 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '探查村长家秘道',
    next: 'huimen_exp2_secret_tunnel',
    condition: { flag: 'huimen_exp2_confronted_village_head' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '查看裁缝铺暗格',
    next: 'huimen_exp2_tailor_secret',
    condition: { flag: 'huimen_exp2_found_liu_hong_dress' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '查看药铺密室',
    next: 'huimen_exp2_medicine_secret',
    condition: { flag: 'huimen_exp2_read_medicine_account' }, effects: { yin: 1 }
});

// 特殊入口
StoryData.huimen_exp2_mountain_path_peak.choices.push({
    text: '在石柱下发现一粒桂花种子',
    next: 'huimen_exp2_mountain_seed',
    condition: { flag: 'huimen_exp2_deepened_mountain_names' },
    effects: { yin: 1 }
});

// ============================================================
// 新增场景与结局（山村深处扩展 · 四）
// ============================================================

Endings.huimen_exp2_ending_white_hair = {
    title: '隐藏结局 · 白发',
    text: `你走出山村时，头发全白了。

不是一夜白头，是三十年的阴气在一瞬间从你身体里抽离，带走了你的颜色。秀兰跟在你身后，她的身影却越来越清晰。

"你替我付了代价。" 她说，"从今以后，你会梦见这个村子一辈子。"

你说："没关系。能记住你，值得。"

后来你活了很久，久到把你的故事讲给很多人听。每次讲完，你都会在枕边放一束桂花。`
};

StoryData.huimen_exp2_old_tree = {
    title: '老槐树下',
    text: `你再次来到村口的老槐树下。

老槐树的树干上刻满了名字，有新有旧。你仔细辨认，发现最深处刻着"周文"和"秀兰"两个名字，中间画着一颗心。

[red]那是他们年轻时刻下的。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
    },
    choices: [
        {
            text: '抚摸那两个名字',
            next: 'huimen_exp2_old_tree_touch',
            effects: { yin: -3 }
        },
        {
            text: '在名字旁边刻字',
            next: 'huimen_exp2_old_tree_carve',
            effects: { yin: -3 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_tree_touch = {
    title: '触名',
    text: `你用手指抚摸"周文"和"秀兰"两个字。

树皮粗糙，字迹却很深，像是刻了很多遍。你忽然感到一阵温暖，不是树皮的热，是记忆里残留的温度。

"他刻了很多遍。" 秀兰说，"每次吵架，他都会来刻一遍，说这样我就不会离开他。"`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_touched_old_tree_names',
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_old_tree_carve = {
    title: '刻字',
    text: `你掏出小刀，在两个名字旁边刻下：

"愿来世，你们能堂堂正正在一起。"

刻完，一阵风吹过，老槐树的叶子沙沙作响，像是一声叹息。`,
    effects: {
        sanity: 5,
        yin: -5,
        setFlag: 'huimen_exp2_carved_old_tree',
    },
    choices: [
        {
            text: '回村街',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_well_wall = {
    title: '井壁字',
    text: `你再次下到井底。

这次你没有看红棺，而是看井壁。井壁上密密麻麻刻满了字，都是秀兰用指甲刻的。你借着微弱的光，一行行读过去。

"民国二十三年，中秋前夜。周家害我。我腹中尚有周家骨肉。求后来人，为我正名。"`,
    effects: {
        sanity: -10,
        yin: 3,
        setFlag: 'huimen_exp2_read_well_wall_words',
    },
    choices: [
        {
            text: '在井壁上刻"我记住了"',
            next: 'huimen_exp2_well_wall_carve',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把这些字拓下来',
            next: 'huimen_exp2_well_wall_rubbing',
            effects: { yin: 1 }
        },
        {
            text: '上井',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_well_wall_carve = {
    title: '刻回应',
    text: `你在秀兰的字旁边刻下：

"周秀兰，周家后人记得你。你的委屈，不会随水而去。"

刻完，井水开始翻涌，秀兰的身影浮出来。她看着你刻的字，眼泪落进井里。

"谢谢你。" 她说，"我终于不是自言自语了。"`,
    effects: {
        sanity: 10,
        yin: -10,
        setFlag: 'huimen_exp2_responded_on_well_wall',
    },
    choices: [
        {
            text: '上井',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_well_wall_rubbing = {
    title: '拓字',
    text: `你掏出一张纸，把井壁上的字拓下来。

纸上的字迹血红，像是从石头里渗出来的。你把拓纸收好，准备带出村子。

"你要让外面的人看见？" 秀兰问。

"是的。" 你说。`,
    effects: {
        sanity: 5,
        yin: -5,
        addItem: '井壁字拓片',
    },
    choices: [
        {
            text: '上井',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_red_coffin_inside = {
    title: '棺中',
    text: `你再次打开红棺。

棺中没有尸体，只有一件叠得整整齐齐的嫁衣。嫁衣上放着一张照片，照片里是年轻的秀兰和周文，两人笑得羞涩。

照片背面写着："愿生生世世，不离不弃。"`,
    effects: {
        sanity: -8,
        yin: 3,
        setFlag: 'huimen_exp2_opened_red_coffin_again',
    },
    choices: [
        {
            text: '把照片给秀兰',
            next: 'huimen_exp2_red_coffin_photo',
            effects: { yin: -5 }
        },
        {
            text: '把嫁衣收好',
            next: 'huimen_exp_village_street',
            effects: { yin: 1, addItem: '红棺中的嫁衣' }
        },
    ]
};

StoryData.huimen_exp2_red_coffin_photo = {
    title: '照片',
    text: `你拿着照片，对着井说："秀兰，你看。"

秀兰的身影浮出来。她看着照片，手在发抖。

"他还留着。" 她说，"我以为他早就烧了。"

"他留着。" 你说，"直到死。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '红棺中的嫁衣',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_ancestral_women_wall_2 = {
    title: '女墙之下',
    text: `你再次来到祖祠的女墙前。

这次你带了一支笔和一罐红漆。你一笔一画，把墙上三十七个女子的名字重新描红。

"秀兰"、"柳红"、"阿绣"、"云袖"……每一个名字被你描红时，都会发出一道微光。`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp2_repainted_women_names',
    },
    choices: [
        {
            text: '在墙前磕头',
            next: 'huimen_exp2_ancestral_women_wall_bow',
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_ancestral_women_wall_bow = {
    title: '叩墙',
    text: `你在女墙前跪下，重重磕了三个头。

"我周家后人，今日给你们正名。你们不是不祥女，你们是周家欠下的人。"

墙上的名字开始流动，像血一样从墙上渗出，在地上汇成一条小河。河水流向村外，流向自由。`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp2_bowed_at_women_wall',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_moonlit_path_rest = {
    title: '月光路休息',
    text: `你走在月光小路上，感到疲惫。

路边出现一块大石头，你坐下来休息。石头上刻着一行小字："路人若累，可坐此石，听我讲故事。"

[red]石头是暖的，像被人坐过很多年。[/red]`,
    effects: {
        sanity: 3,
        yin: -2,
    },
    choices: [
        {
            text: '听石头讲故事',
            next: 'huimen_exp2_moonlit_path_stone_story',
            effects: { yin: -3 }
        },
        {
            text: '继续走',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_moonlit_path_stone_story = {
    title: '石语',
    text: `你坐下，石头发出一个苍老的声音：

"很久以前，这里还没有周家村。有一对外乡男女相爱，被村里人反对。女子被活埋，男子在井边守了一辈子。"

"那口井，就是后来的周家井。" 石头说，"那女子，就是秀兰的前世。"`,
    effects: {
        sanity: -5,
        yin: 2,
        setFlag: 'huimen_exp2_heard_stone_story',
    },
    choices: [
        {
            text: '问怎么结束这个循环',
            next: 'huimen_exp2_moonlit_path_stone_ask',
            effects: { yin: 1 }
        },
        {
            text: '继续走',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_moonlit_path_stone_ask = {
    title: '问法',
    text: `你问："怎么结束这个循环？"

石头说："有人愿意替她活一次，替她痛一次，替她记住一次。你做到了，循环就可以结束。"

"但你会老得很快。" 石头说，"因为你替她过了三十年。"`,
    effects: {
        sanity: -5,
        yin: -5,
        setFlag: 'huimen_exp2_knew_cycle_end_price',
    },
    choices: [
        {
            text: '愿意替她过',
            ending: 'huimen_exp2_ending_white_hair',
            ending: 'huimen_exp2_ending_white_hair',
            effects: { yin: -10 }
        },
        {
            text: '继续走',
            next: 'huimen_exp_moonlit_path',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mulberry_bird = {
    title: '桑树鸟',
    text: `你来到桑树下，发现枝头站着一只乌鸦。

乌鸦的眼睛是红色的，嘴里叼着一根红绳。它看见你，把红绳吐下来，正好落在你脚边。

[red]红绳上系着一个小布包，布包里是一枚乳牙。[/red]`,
    effects: {
        sanity: -3,
        yin: 1,
        addItem: '桑树上的乳牙',
    },
    choices: [
        {
            text: '把乳牙给元宝',
            next: 'huimen_exp2_mulberry_bird_give',
            condition: { flag: 'huimen_exp_boy_friendly' },
            effects: { sanity: 10, yin: -10 }
        },
        {
            text: '收好',
            next: 'huimen_exp_mulberry_tree',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_mulberry_bird_give = {
    title: '还牙',
    text: `你拿着乳牙来到井边。

元宝从井里浮出来，看见乳牙，高兴地跳起来："我的牙！我找了很久！"

他把牙放回嘴里，身体变得凝实了一些。

"谢谢你。" 他说，"我会一直保护你的。"`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '桑树上的乳牙',
        setFlag: 'huimen_exp2_returned_yuan_bao_tooth',
    },
    choices: [
        {
            text: '回桑树',
            next: 'huimen_exp_mulberry_tree',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_ruins_doll = {
    title: '废墟纸偶',
    text: `你在废墟的角落里发现一个破旧的纸偶。

纸偶穿着新郎服，脸上画着周文的模样。它的胸口贴着一张黄符，符上写着秀兰的生辰八字。

[red]这是周文扎的替身，想替秀兰受过。[/red]`,
    effects: {
        sanity: -5,
        yin: 2,
        addItem: '周文的纸偶',
    },
    choices: [
        {
            text: '把纸偶烧了',
            next: 'huimen_exp2_ruins_doll_burn',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '把纸偶给秀兰',
            next: 'huimen_exp2_riverbank',
            effects: { sanity: 10, yin: -10, removeItem: '周文的纸偶' }
        },
    ]
};

StoryData.huimen_exp2_ruins_doll_burn = {
    title: '焚偶',
    text: `你点燃纸偶。

纸偶在火中扭曲，发出周文的声音："秀兰，对不起。"

秀兰从井里浮出来，看着火光，没有说话。但她的眼泪落进井里，井水变得清澈。`,
    effects: {
        sanity: 10,
        yin: -10,
        removeItem: '周文的纸偶',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_shop_craftsman_doll = {
    title: '扎纸匠的最后一个纸人',
    text: `你再次来到纸扎铺，发现老人正在扎最后一个纸人。

纸人的脸是空白的，但身形纤细，像是一个女子。

"这是阿绣。" 老人说，"我扎了一辈子，这是最像的一个。"`,
    effects: {
        sanity: -5,
        yin: 2,
    },
    choices: [
        {
            text: '帮他点睛',
            next: 'huimen_exp2_paper_shop_craftsman_doll_eye',
            effects: { sanity: 5, yin: -5 }
        },
        {
            text: '离开',
            next: 'huimen_exp_paper_shop',
            effects: { yin: 1 }
        },
    ]
};

StoryData.huimen_exp2_paper_shop_craftsman_doll_eye = {
    title: '点睛',
    text: `你拿起朱砂，帮纸人点上眼睛。

纸人的眼睛一睁开，就活了过来。它从柜台上走下来，朝老人伸出手。

"阿绣……" 老人颤抖着握住那只纸手。

纸人化作一道光，和老人一起飘出铺子，消失在夜空。`,
    effects: {
        sanity: 15,
        yin: -15,
        setFlag: 'huimen_exp2_craftsman_reunited',
    },
    choices: [
        {
            text: '离开',
            next: 'huimen_exp_village_street',
            effects: { yin: 1 }
        },
    ]
};

// 把第四批新地点入口注入村街枢纽
StoryData.huimen_exp_village_street.choices.push({
    text: '去老槐树下',
    next: 'huimen_exp2_old_tree',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '再读井壁上的字',
    next: 'huimen_exp2_well_wall',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '再开一次红棺',
    next: 'huimen_exp2_red_coffin_inside',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去女墙重新描红名字',
    next: 'huimen_exp2_ancestral_women_wall_2',
    condition: { flag: 'huimen_exp_saw_women_wall' }, effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '在月光小路休息',
    next: 'huimen_exp2_moonlit_path_rest',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '看桑树上的乌鸦',
    next: 'huimen_exp2_mulberry_bird',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '在废墟里找纸偶',
    next: 'huimen_exp2_ruins_doll',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '看扎纸匠的最后一个纸人',
    next: 'huimen_exp2_paper_shop_craftsman_doll',
    condition: { flag: 'huimen_exp_knows_craftsman_past' }, effects: { yin: 1 }
});
// ============================================================
// 把循环入口注入主线场景
// ============================================================

StoryData.to_old_house.choices.push({
    text: '你注意到堂屋侧门的门帘被风掀起，帘后不是后院，而是一条陌生的村街',
    next: 'huimen_exp_village_loop_entry',
    condition: { yinAbove: 12 },
    hidden: true,
    effects: { sanity: -3, yin: 2 }
});

StoryData.ask_coffin.choices.push({
    text: '你借口去后院透气，暂时退出堂屋',
    next: 'huimen_exp_village_loop_entry',
    effects: { yin: 1 }
});

StoryData.hold_breath.choices.push({
    text: '无字碑后有条小路，似乎通向村子深处',
    next: 'huimen_exp_village_loop_entry',
    condition: { flag: 'knowsTruth' },
    effects: { yin: 2 }
});

StoryData.mirror_well.choices.push({
    text: '铜镜碎片里映出的村子，似乎多了一条月光铺成的小路',
    next: 'huimen_exp_village_loop_entry',
    condition: { hasItem: '铜镜碎片' },
    hidden: true,
    effects: { yin: 2 }
});

StoryData.open_red_coffin.choices.push({
    text: '红棺底部有一道缝隙，透出村街的灯火',
    next: 'huimen_exp_village_loop_entry',
    condition: { flag: 'foundBones' },
    hidden: true,
    effects: { yin: 2 }
});

// ============================================================
// 幻觉文本补充
// ============================================================

StoryData.huimen_exp_village_street.hallucination = "[whisper]你低头看自己的影子，影子里似乎还有一个人，正牵着你的衣角。[/whisper]";
StoryData.huimen_exp_well_night.hallucination = "[whisper]井水里的红轿子掀开帘，里面坐着的不是秀兰，是你自己。[/whisper]";
StoryData.huimen_exp_paper_shop.hallucination = "[whisper]柜台后面的老人抬起头，他的脸和你一模一样。[/whisper]";
StoryData.huimen_exp_mulberry_tree.hallucination = "[whisper]树干上的裂缝张开，像一张嘴，正在叫你的名字。[/whisper]";


// ============================================================
// 第五批扩展：秀兰生前、祖宅地窖、村民支线与循环破除
// ============================================================

// ------------------------------------------------------------
// 新增结局
// ------------------------------------------------------------

Endings.huimen_exp3_ending_dawn_return = {
    title: '普通结局 · 黎明还乡',
    text: `你在山村度过了最后一个夜晚。

天光破晓时，纸人退回墙缝，白灯笼一盏盏熄灭。你背着秀兰的骨殖，沿着那条只有清晨才出现的土路走出村子。

村口的老槐树落尽了叶子，露出枯枝间一只鸟巢。巢里空空荡荡，像是一个终于松开的手掌。

你没有回头。你知道有些债还清了，有些影子也该安息了。

回到城里，你把秀兰的骨殖葬在城南的公墓。墓碑上刻着她的名字，没有冠上"周"姓。每年清明，你会带一束她生前喜欢的白菊。

只是偶尔，夜深人静，你会梦见一口井，井水里浮着一轮月亮。月亮里有人轻轻唤你："谢谢你。"`
};

Endings.huimen_exp3_ending_paper_boat_ferry = {
    title: '普通结局 · 纸船渡',
    text: `你用扎纸匠留下的棉纸，折了一只小船，把秀兰的一缕头发放进去。

河水在夜里是黑色的，纸船却像一盏小灯，顺流而下。你跟着它走，走过石桥，走过芦苇荡，走到河面泛起鱼肚白。

纸船靠岸的地方，已不是山村。你看见远处有炊烟，有鸡鸣，有早起的农夫赶着牛车。

你上了岸，手里还攥着船底的一点湿纸。秀兰的头发不见了，也许是顺水走了，也许是化进了晨光里。

你终于回到人间。可你知道，那只纸船替你渡了两个人。`
};

Endings.huimen_exp3_ending_well_bottom_bones = {
    title: '普通结局 · 井骨',
    text: `你下到了井底。

井水比想象中温暖，像一口被捂热的棺。你在淤泥里摸到一具细小的骨架，腕上还系着褪色的红绳。

你把骨架抱上来，用外套裹好。月亮正好升到中天，井壁上的青苔一齐亮起微弱的绿光，像无数双闭上的眼睛。

秀兰站在井沿，没有说话。她朝你鞠了一躬，然后化作井底的一圈涟漪。

你带着骨殖离开。之后的许多年，你再也没有做过那个溺水的梦。`
};

Endings.huimen_exp3_ending_ancestral_cellar = {
    title: '普通结局 · 地窖长明',
    text: `你点燃了地窖里那盏百年油灯。

灯芯爆开一朵灯花，把满墙的名字照得通明。那些名字开始颤抖，像被火舌舔到的纸灰，一片片剥落。

周家祖先把脸埋进阴影里。他们说："罢了，罢了，这债我们不讨了。"

你提着灯走出地窖。灯光所到之处，山村退成一幅褪色的画。你在画外醒来，手里握着一盏早已熄灭的古灯。

灯虽灭了，但你知道，有些东西已经亮过。`
};

Endings.huimen_exp3_ending_carpenter_saw = {
    title: '普通结局 · 李木匠的锯',
    text: `李木匠把锯子交到你手里。

"去锯断那口井边的老槐树。"他说，"树里锁着她的名，名锁着魂。"

你锯了很久。树汁是暗红色的，像血，又像陈年的漆。最后一圈年轮断开时，井里传来一声长长的叹息。

秀兰走出来，脸色苍白，却带着笑。她把一枚木屑放进你手心："拿去，这是我还你的。"

你握着木屑走出山村。它在你口袋里慢慢变成一朵干枯的槐花。`
};

Endings.huimen_exp3_hidden_granny_wang_rest = {
    title: '隐藏结局 · 王婆安息',
    text: `王婆把那双绣鞋烧给了自己。

火光照亮她脸上的皱纹，每一道都藏着几十年的愧疚。她说："我当年不该劝她回门。不该给她穿上那双鞋。"

绣鞋在火里卷曲，像一只终于展翅的蝶。王婆的身影随之淡去，只留下一碗还温着的红糖水。

你喝了糖水，甜得发苦。走出屋子时，天已经亮了。山村的雾气散了，露出远处青色的山脊。

你再也没有见过王婆。但每年中元，你都会在门口放一双干净的布鞋。`
};

Endings.huimen_exp3_hidden_clan_head_penance = {
    title: '隐藏结局 · 族长忏',
    text: `周家族长跪在祖祠的门槛上，把族谱翻到秀兰那一页。

他用颤抖的手，蘸着朱砂，在"秀兰"二字旁边写下"周氏媳，冤"。一滴泪落进朱砂里，把那个"冤"字晕成一轮红日。

祠堂里的牌位齐齐震颤。最老的那一块裂开一道缝，缝里飘出一缕青烟，像是某个终于松开的叹息。

族长把族谱交给你："带她走吧。周家不配再留她。"

你接过族谱，感觉它轻得像一张纸。走出祠堂时，秀兰就站在日头里，脚边落着一双崭新的布鞋。`
};

Endings.huimen_exp3_hidden_return_with_xiulan = {
    title: '隐藏好结局 · 携骨归',
    text: `你把秀兰的骨殖包好，背在肩上，像背着一个未完的故事。

山村在你身后慢慢收起。纸人、白灯笼、老槐树、无字碑，都像被风卷起的纸灰，一层层褪进雾里。

秀兰走在你身侧，不是鬼魂，只是一个淡淡的影子。她说："这次我真的能走了。"

你问："去哪里？"
她说："去有花开的地方。"

你们走到镇上的汽车站。第一班车来的时候，天正好亮了。秀兰的影子在晨光里越来越淡，最后化作你肩头一缕暖意。

你带着她的骨殖回到城市，把她葬在一片开满白菊的山坡。从那以后，你再也没有被困在任何一个夜里。

偶尔你会在清晨醒来，枕边落着一根不属于你的长发。你知道，那是她路过时留下的谢意。`
};

// ------------------------------------------------------------
// 秀兰生前闪回：童年、织布、出嫁、被沉井
// ------------------------------------------------------------

StoryData.huimen_exp3_xiulan_memory_childhood_intro = {
    title: '秀兰的童年',
    text: `村街尽头忽然飘来一阵槐花香。

你循香走去，发现一扇半掩的木门。门后是一个小院，院里晒着粗布，一个扎着双髻的小女孩坐在门槛上绣花。

她抬起头，眼睛亮得像井水："你是来娶我的吗？"

你愣住。那眉眼，分明是年幼的秀兰。`,
    effects: { sanity: 3, yin: 1 },
    choices: [
        { text: '蹲下来，陪她绣花', next: 'huimen_exp3_xiulan_memory_childhood_sew', effects: { sanity: 2, yin: 0 } },
        { text: '问她长大后想做什么', next: 'huimen_exp3_xiulan_memory_childhood_dream', effects: { sanity: 2, yin: 1 } },
        { text: '悄悄退出门外', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_childhood_sew = {
    title: '绣花',
    text: `你坐在门槛上，看她一针一针绣一朵并蒂莲。

"我娘说，绣得好，将来才能嫁得好。"她把线头咬断，"可我不想嫁人。我想去镇上，看看戏台上的花旦是怎么走路的。"

一阵风吹过，粗布上的影子晃了晃。小女孩忽然长大了些许，变成少女的轮廓。`,
    effects: { sanity: 2, yin: 1 },
    choices: [
        { text: '说你会带她去看戏', next: 'huimen_exp3_xiulan_memory_childhood_promise', effects: { sanity: 3, yin: 1, setFlag: 'huimen_exp3_promised_xiulan_opera' } },
        { text: '沉默地看着她', next: 'huimen_exp3_xiulan_memory_childhood_fade', effects: { sanity: -2, yin: 2 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_childhood_dream = {
    title: '她的愿望',
    text: `"我想开一家绣庄。"她把绣花绷子抱在胸前，"绣自己的花样，不用看婆婆脸色。"

她话音刚落，院墙上的青苔忽然蔓延，像是要把这座院子吞回时光里。`,
    effects: { sanity: 2, yin: 1 },
    choices: [
        { text: '告诉她，她的绣品以后会被人记住', next: 'huimen_exp3_xiulan_memory_childhood_promise', effects: { sanity: 3, yin: 1 } },
        { text: '起身离开院子', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_childhood_promise = {
    title: '童言',
    text: `小女孩笑了，把绣了一半的并蒂莲塞进你手里。

"那你可要记得。大人最会忘事了。"

她的身影像被水晕开的墨，渐渐淡去。院里只剩一架织布机，还在空无一人的堂屋里"咔嗒咔嗒"地响。`,
    effects: { sanity: 3, yin: 1 },
    choices: [
        { text: '走进堂屋看织布机', next: 'huimen_exp3_xiulan_memory_weaving', effects: { yin: 1 } },
        { text: '带着绣品离开', next: 'huimen_exp_village_street', effects: { yin: 1, addItem: '秀兰的绣品' } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_childhood_fade = {
    title: '消散',
    text: `你没有说话。

小女孩低下头，继续绣花。她的身影越来越淡，最后只剩下一团模模糊糊的光，和门槛上一只没绣完的鞋面。

你捡起鞋面，发现上面绣的不是并蒂莲，是一口井。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_weaving = {
    title: '织布声',
    text: `织布机自己在动。

梭子来回穿梭，织出的不是布，是一幅幅画面：秀兰少年时熬夜织布，手指被梭子磨出血；她把卖布的钱藏进陶罐，说要给自己置办嫁妆；她娘把陶罐拿走，说"嫁人就是嫁妆"。

最后一幅画面停在一只红嫁衣上。嫁衣的袖口绣着井。`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '伸手触摸嫁衣', next: 'huimen_exp3_xiulan_memory_wedding_night', effects: { yin: 2 } },
        { text: '烧掉嫁衣', next: 'huimen_exp3_xiulan_memory_weaving_burn', effects: { sanity: 5, yin: -3 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_weaving_burn = {
    title: '焚衣',
    text: `火从嫁衣的袖口烧起，那口井在火焰里扭曲，变成一张哭脸。

织布机停了。屋里飘满纸灰的味道，像一场提前到来的葬礼。

你在灰烬里摸到一枚铜顶针，上面刻着一个小小的"秀"字。`,
    effects: { sanity: 5, yin: -3, addItem: '秀兰的顶针' },
    choices: [
        { text: '离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_wedding_night = {
    title: '出嫁前夜',
    text: `你的手指穿过红嫁衣，触到一片冰凉的空气。

空气里浮出另一间屋子。烛火摇曳，秀兰坐在床沿，盖头还盖在头上。一个老妇人的声音在门外说："明日回门，记得把鞋留在家中。"

秀兰低声说："我不想回门。"

老妇人笑了："不回门，就不是周家的人。"

烛火"噗"地灭了。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '掀开她的盖头', next: 'huimen_exp3_xiulan_memory_wedding_face', effects: { yin: 3 } },
        { text: '在门外问她害不害怕', next: 'huimen_exp3_xiulan_memory_wedding_fear', effects: { sanity: 2, yin: 2 } },
        { text: '烛火灭后，你看见窗外有人影拖着红嫁衣走向井边', next: 'huimen_exp3_xiulan_memory_well_death', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_wedding_face = {
    title: '盖头下',
    text: `盖头下不是秀兰的脸，是一张被水泡胀的纸人脸。

纸人的嘴唇动了："你掀开盖头，就要娶我。"

你猛地后退，撞翻了烛台。火舌舔上嫁衣，纸人在火里尖叫，声音越来越像秀兰。

最后一刻，你听见她说："快跑，别让他们把我沉下去。"`,
    effects: { sanity: -8, yin: 5 },
    choices: [
        { text: '从梦境中挣脱', next: 'huimen_exp_village_street', effects: { sanity: 3, yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_wedding_fear = {
    title: '她的回答',
    text: `"怕。"秀兰的声音很轻，"但我更怕不被当成一个人。"

你隔着门说："你不是周家的物。你是秀兰。"

她沉默了很久。然后你听见她在门里轻轻笑了一声："谢谢你。很久没人叫我的名字了。"

门缝里滑出一张红纸，上面写着她真正的生辰八字。`,
    effects: { sanity: 5, yin: -2, setFlag: 'huimen_exp3_knows_xiulan_birth' },
    choices: [
        { text: '收起红纸，离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_well_death = {
    title: '沉井',
    text: `你忽然站在井边。

夜很黑，井水里映着一弯残月。几个模糊的人影拖着一个人走来，那人的红嫁衣在地上拖出沙沙的响。

你认出那是秀兰。她的嘴被布条勒住，手腕被红绳捆着。他们没有说话，只是把她举起来，丢进井里。

"咕咚"一声。月亮碎了。`,
    effects: { sanity: -10, yin: 8 },
    choices: [
        { text: '大声呼喊她的名字', next: 'huimen_exp3_xiulan_memory_well_death_cry', effects: { sanity: -5, yin: 3 } },
        { text: '抓住红绳把她拉上来', next: 'huimen_exp3_xiulan_memory_well_death_pull', effects: { sanity: -3, yin: 5 } },
        { text: '闭上眼睛', next: 'huimen_exp3_xiulan_memory_well_death_close', effects: { sanity: 3, yin: 2 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_well_death_cry = {
    title: '呼喊',
    text: `你的喊声撞在井壁上，碎成无数回声。

那些人影回过头，脸上没有五官。他们朝你走来，脚步声像浸湿的纸。

秀兰从井水里探出头，朝你摇头："别喊。他们会听见你。"

你闭上嘴。人影失去了方向，像被风吹散的纸灰，一层层化进夜色里。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '问她怎么才能救她', next: 'huimen_exp3_xiulan_ask_save', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_well_death_pull = {
    title: '拉绳',
    text: `你扑到井边，抓住还搭在井沿的红绳。

绳子的另一端很重，像拖着一口装满水的缸。你咬紧牙关往上拉，掌心被勒出血。

就在秀兰的手要触到井沿时，红绳断了。你向后跌倒，手里只剩半截湿漉漉的绳子。`,
    effects: { sanity: -5, yin: 5, addItem: '半截红绳' },
    choices: [
        { text: '坐在井边', next: 'huimen_exp3_xiulan_ask_save', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_memory_well_death_close = {
    title: '闭眼',
    text: `你闭上眼睛，但水声还是钻进耳朵。

咕咚。咕咚。像是有什么东西在井底轻轻撞击。

然后一只手搭上你的肩膀。秀兰的声音贴着你的耳垂响起："你不敢看，我不怪你。但你要记住这里。记住我。"`,
    effects: { sanity: 2, yin: 3 },
    choices: [
        { text: '睁开眼睛', next: 'huimen_exp3_xiulan_ask_save', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_ask_save = {
    title: '未了心愿',
    text: `井水平静下来，映出秀兰苍白的脸。

"我想回家。"她说，"不是周家，是我自己的家。我想让我娘知道，我没有做错事。"

她的手指划过水面，荡开一圈涟漪。

"还有……"她顿了顿，"我想穿一次自己的嫁衣。不是周家给我穿的那件。"`,
    effects: { sanity: 3, yin: 2 },
    choices: [
        { text: '答应带她回家', next: 'huimen_exp3_xiulan_wish_home', effects: { sanity: 5, yin: 1, setFlag: 'huimen_exp3_wish_home' } },
        { text: '答应给她一件自己的嫁衣', next: 'huimen_exp3_xiulan_wish_dress', effects: { sanity: 5, yin: 1, setFlag: 'huimen_exp3_wish_dress' } },
        { text: '问她还需要什么', next: 'huimen_exp3_xiulan_wish_more', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_wish_home = {
    title: '回家',
    text: `秀兰笑了，那笑容像水面上最后一点月光。

"我娘住在村东头，门口有棵石榴树。她眼睛不好，你替我把顶针还给她。"

她的身影开始淡去，井水里只剩那弯残月。`,
    effects: { sanity: 5, yin: -2 },
    choices: [
        { text: '离开井边', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_xiulan_wish_dress = {
    title: '嫁衣',
    text: `"裁缝铺的刘姐手艺最好。"秀兰说，"我攒了三年布钱，本想请她做一件粉的。"

她的眼泪落进井水，没有溅起涟漪，而是变成一颗颗细小的珍珠，沉向井底。`,
    effects: { sanity: 5, yin: -2 },
    choices: [
        { text: '拾起一颗珍珠', next: 'huimen_exp_village_street', effects: { yin: 1, addItem: '秀兰泪珠' } }
    ]
};

StoryData.huimen_exp3_xiulan_wish_more = {
    title: '更多',
    text: `秀兰想了很久。

"我还想……听人叫我的名字。不是周家媳妇，不是井里的东西，是秀兰。"

她说完，井水里泛起一层薄薄的光，像是谁把月光碾碎了撒进去。`,
    effects: { sanity: 5, yin: -2, setFlag: 'huimen_exp3_wish_name' },
    choices: [
        { text: '离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

// ------------------------------------------------------------
// 周家祖宅、祖祠、地窖更多探索
// ------------------------------------------------------------

StoryData.huimen_exp3_zhou_mansion_gate = {
    title: '祖宅侧门',
    text: `村街深处有一座黑瓦白墙的老宅，门楣上挂着"周府"的灯笼。灯笼纸已经发黄，里面没有火，却隐隐透出一团红。

门环是两只铜蝙蝠，翅膀交叠成"福"字。你走近时，左边的蝙蝠眼睛转了一下。`,
    effects: { yin: 2 },
    choices: [
        { text: '推门进去', next: 'huimen_exp3_zhou_mansion_courtyard', effects: { yin: 2 } },
        { text: '先敲三下门', next: 'huimen_exp3_zhou_mansion_knock', effects: { yin: 1 } },
        { text: '绕到后院', next: 'huimen_exp3_zhou_mansion_backyard', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_knock = {
    title: '三声门环',
    text: `你敲了三下。

门里没有脚步声，却有吱呀一声，门自己开了一条缝。缝里飘出一股檀香混着霉味的气味，像是有人刚在这里烧过纸。

一个苍老的声音说："进来吧，等你很久了。"`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '进门', next: 'huimen_exp3_zhou_mansion_courtyard', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_backyard = {
    title: '后院枯井',
    text: `你绕到后院，看见一口被石板盖住的枯井。

石板上刻着密密麻麻的小字，都是女子的名字。最中间一行是"秀兰"，名字被凿掉了一半，旁边填上了"周氏媳"。`,
    effects: { yin: 2, sanity: -3 },
    choices: [
        { text: '用石头把"周氏媳"凿掉', next: 'huimen_exp3_zhou_mansion_backyard_chisel', effects: { sanity: 5, yin: -3 } },
        { text: '把石板掀开', next: 'huimen_exp3_zhou_mansion_backyard_open', effects: { yin: 5 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_backyard_chisel = {
    title: '还名',
    text: `石屑纷飞，"周氏媳"三个字一点点剥落。

当最后一笔被凿掉时，井底传来一声长长的叹息。石板上的"秀兰"二字泛起淡淡的红光，像是一个被解开的结。

你把凿下的石屑收进口袋。它们很轻，像烧过的纸灰。`,
    effects: { sanity: 5, yin: -3, setFlag: 'huimen_exp3_restored_xiulan_name' },
    choices: [
        { text: '去前院', next: 'huimen_exp3_zhou_mansion_courtyard', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_backyard_open = {
    title: '掀板',
    text: `石板很重，你用了全身力气才推开一条缝。

缝里涌出一股阴冷的风，风里夹着女人的哭声。你探头去看，井底没有水，只有层层叠叠的纸人，全都仰着脸，朝你露出一模一样的笑。

你赶紧把石板推回去，手还在发抖。`,
    effects: { sanity: -8, yin: 8 },
    choices: [
        { text: '离开后院', next: 'huimen_exp3_zhou_mansion_courtyard', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard = {
    title: '周家庭院',
    text: `庭院里种着一棵枯死的石榴树，树下的石凳上坐着一个穿长衫的老人。

老人正在剥一颗石榴，石榴籽是暗红色的，像一颗颗干缩的心脏。他抬头看你，眼神浑浊："你是来还债的，还是来讨债的？"`,
    effects: { yin: 2 },
    choices: [
        { text: '说自己是来讨债的', next: 'huimen_exp3_zhou_mansion_courtyard_debt', effects: { yin: 2 } },
        { text: '说自己是来还债的', next: 'huimen_exp3_zhou_mansion_courtyard_pay', effects: { yin: 2 } },
        { text: '问他秀兰的事', next: 'huimen_exp3_zhou_mansion_courtyard_xiulan', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_debt = {
    title: '讨债',
    text: `老人把石榴放在石凳上，石榴籽滚了一地。

"讨债？"他笑了，笑声像风吹过空棺材，"周家欠的债，几代人都还不清。你一个人，讨得完吗？"

他站起身，长衫下露出半截纸做的腿。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '问他周家欠了什么债', next: 'huimen_exp3_zhou_mansion_courtyard_debt_ask', effects: { yin: 1 } },
        { text: '转身离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_pay = {
    title: '还债',
    text: `老人点点头，似乎很满意。

"还债好。周家最喜欢还债的人。"他朝堂屋一指，"去地窖吧，把灯点上，债就清了。"

他的手指向堂屋深处，那里有一道向下的石阶，黑得像一张口。`,
    effects: { sanity: -2, yin: 3 },
    choices: [
        { text: '去地窖', next: 'huimen_exp3_zhou_mansion_cellar', effects: { yin: 3 } },
        { text: '不去', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_xiulan = {
    title: '秀兰',
    text: `老人的脸色变了。

"秀兰？"他重复这个名字，像是在确认自己还记不记得，"她是周家的媳妇。周家的媳妇，都是井里的人。"

他低下头，继续剥石榴。这一次，石榴籽里渗出一丝暗红的水。`,
    effects: { sanity: -3, yin: 2 },
    choices: [
        { text: '说秀兰不是周家的', next: 'huimen_exp3_zhou_mansion_courtyard_xiulan_refute', effects: { sanity: 3, yin: 2 } },
        { text: '追问井里还有多少女子', next: 'huimen_exp3_zhou_mansion_courtyard_women', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_debt_ask = {
    title: '周家的债',
    text: `"欠债就是欠债。"老人说，"周家为了发财，拿女子的命填井。填一个，富十年。填到第三代，村子就活了，女子就死了。"

他指了指自己的胸口："我就是第三代。"

他的胸口破了一个洞，里面塞满了纸钱。`,
    effects: { sanity: -5, yin: 4 },
    choices: [
        { text: '问他怎么破这个债', next: 'huimen_exp3_zhou_mansion_courtyard_debt_break', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_debt_break = {
    title: '破债',
    text: `"把井里的骨头都挖出来，一人一个坑，埋到山上。"老人说，"再把族谱上被划掉的名字重新写回去。最后……"

他顿了顿，"最后让活着的周家人，真心认一回错。"

他的身影开始消散，像被水泡烂的纸。`,
    effects: { sanity: 3, yin: -2, setFlag: 'huimen_exp3_knows_break_debt' },
    choices: [
        { text: '去地窖', next: 'huimen_exp3_zhou_mansion_cellar', effects: { yin: 2 } },
        { text: '离开祖宅', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_xiulan_refute = {
    title: '反驳',
    text: `"不是周家的？"老人愣了一下，随即大笑，"可她穿着周家的嫁衣，埋进周家的井，死了还要守周家的门。你说她不是周家的，她自己信吗？"

他的笑声里，石榴树无风自动，枯枝像无数只手指向天空。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '说你会带她走', next: 'huimen_exp3_zhou_mansion_courtyard_xiulan_take', effects: { sanity: 5, yin: 2 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_women = {
    title: '井里的女子',
    text: `老人数了数手指。

"秀兰之前，有七个。秀兰之后，又有两个。"他说，"周家祖祠的牌位后面，有她们的名字。男人们不敢看，女人们不敢忘。"

他的眼眶里流出两行黑水，像墨汁滴进纸里。`,
    effects: { sanity: -5, yin: 3, setFlag: 'huimen_exp3_knows_seven_women' },
    choices: [
        { text: '去祖祠', next: 'huimen_exp_ancestral_hall', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_courtyard_xiulan_take = {
    title: '带走',
    text: `老人不笑了。

"带走她？"他低声说，"那得看她自己愿不愿意跟你走。她恨了太久，恨成了井的一部分。你若能让她不恨，我就替你开地窖的门。"

他把手里的石榴核埋进土里。枯死的石榴树，忽然抽出一根新芽。`,
    effects: { sanity: 5, yin: -3, setFlag: 'huimen_exp3_zhou_elder_agrees' },
    choices: [
        { text: '去地窖', next: 'huimen_exp3_zhou_mansion_cellar', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar = {
    title: '地窖',
    text: `石阶很长，每一步都踩在潮湿的苔藓上。

地窖里没有灯，只有墙缝里渗出的一点磷光。你看见墙上钉着无数黄纸，每张纸上都写着一个女子的生辰八字，最下面一行是"秀兰，民国三年六月初七"。`,
    effects: { sanity: -3, yin: 4 },
    choices: [
        { text: '撕下秀兰的黄纸', next: 'huimen_exp3_zhou_mansion_cellar_tear', effects: { sanity: 3, yin: -2 } },
        { text: '点燃墙上的油灯', next: 'huimen_exp3_zhou_mansion_cellar_light', effects: { yin: 3 } },
        { text: '继续往深处走', next: 'huimen_exp3_zhou_mansion_cellar_deep', effects: { yin: 5 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_tear = {
    title: '撕纸',
    text: `黄纸被撕下的瞬间，地窖里响起一声女人的尖叫。

墙上其他的黄纸开始颤抖，像是一群被惊醒的蝴蝶。你把秀兰的纸折好收进口袋，那些颤抖慢慢平息下来。

纸上的朱砂字蹭到你手上，像血一样红。`,
    effects: { sanity: 3, yin: -2, addItem: '秀兰生辰纸' },
    choices: [
        { text: '去点灯', next: 'huimen_exp3_zhou_mansion_cellar_light', effects: { yin: 1 } },
        { text: '离开地窖', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_light = {
    title: '点灯',
    text: `你摸出一根火柴，点亮墙角的油灯。

火光一跳，地窖里亮了。你看见地上摆着九口小棺材，每口棺材里都躺着一个纸人。纸人们穿着不同花色的嫁衣，脸上画着一样的笑。

最里面的那口棺材是空的。`,
    effects: { sanity: -5, yin: 5 },
    choices: [
        { text: '查看空棺材', next: 'huimen_exp3_zhou_mansion_cellar_empty', effects: { yin: 2 } },
        { text: '烧掉纸人', next: 'huimen_exp3_zhou_mansion_cellar_burn', effects: { sanity: 8, yin: -5 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_deep = {
    title: '地窖深处',
    text: `你越往里走，空气越冷。

地窖尽头是一扇石门，门上刻着周家的族徽，被一圈红线缠着。红线已经褪色，有几处还沾着暗红的污渍。

门缝里传出低低的哭声，像是有很多人在门后说话。`,
    effects: { sanity: -5, yin: 6 },
    choices: [
        { text: '解开红线', next: 'huimen_exp3_zhou_mansion_cellar_door_open', effects: { yin: 8 } },
        { text: '把红线重新缠紧', next: 'huimen_exp3_zhou_mansion_cellar_door_seal', effects: { sanity: -3, yin: 2 } },
        { text: '隔着门说话', next: 'huimen_exp3_zhou_mansion_cellar_door_talk', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_empty = {
    title: '空棺',
    text: `空棺材里铺着一层红绸，红绸上放着一只绣花鞋。

鞋面绣着并蒂莲，针脚细密，是秀兰的手艺。鞋里塞着一张纸条，上面写着：" waiting for the one who remembers"。

你认出这是秀兰留的。她把一只鞋留在这里，作为还没被完全吞没的证据。`,
    effects: { sanity: 3, yin: -2, addItem: '秀兰的绣花鞋' },
    choices: [
        { text: '把鞋收好，继续探索', next: 'huimen_exp3_zhou_mansion_cellar_deep', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_burn = {
    title: '焚纸',
    text: `火从最近的纸人开始烧起，很快蔓延到所有小棺材。

纸人们在火里翻滚、尖叫，声音越来越小，最后变成一阵轻轻的叹息。火焰熄灭后，地上只剩九堆灰烬，和一股说不出的香气。

你感觉地窖里的阴气淡了许多。`,
    effects: { sanity: 8, yin: -8, setFlag: 'huimen_exp3_burned_paper_brides' },
    choices: [
        { text: '去石门', next: 'huimen_exp3_zhou_mansion_cellar_deep', effects: { yin: 1 } },
        { text: '离开地窖', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_door_open = {
    title: '门后',
    text: `红线一松，石门自己开了。

门后是一间更小的石室，室中央摆着一张供桌，桌上供着一块无字牌位。牌位后面，站着九个模糊的女子身影。

她们齐声说："你终于来了。我们等了很久。"`,
    effects: { sanity: -10, yin: 10 },
    choices: [
        { text: '问她们想要什么', next: 'huimen_exp3_zhou_mansion_cellar_women_want', effects: { yin: 2 } },
        { text: '转身逃跑', next: 'huimen_exp3_ending_ancestral_cellar_scene', effects: { yin: 3 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_door_seal = {
    title: '缠线',
    text: `你把红线一圈一圈缠紧，手指被勒出血也顾不上。

门后的哭声渐渐弱下去，最后只剩风声穿过红线的缝隙。你退后几步，靠在墙上大口喘气。

红线缠得很紧，但你知道，它总有一天会松的。`,
    effects: { sanity: -3, yin: 2 },
    choices: [
        { text: '离开地窖', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_door_talk = {
    title: '隔门对话',
    text: `你把手按在石门上，低声说："我知道你们。我知道你们的名字。"

门后的哭声停了片刻，然后一个声音说："那就把我们的名字念出来。念对了，门就让你进。念错了，你就留下陪我们。"`,
    effects: { sanity: -2, yin: 4 },
    choices: [
        { text: '念秀兰的名字', next: 'huimen_exp3_zhou_mansion_cellar_door_talk_xiulan', effects: { yin: 2 } },
        { text: '念九个人的名字', next: 'huimen_exp3_zhou_mansion_cellar_door_talk_nine', condition: { flag: 'huimen_exp3_knows_seven_women' }, effects: { sanity: 5, yin: -2 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_door_talk_xiulan = {
    title: '只念一人',
    text: `你只念了秀兰的名字。

门后沉默了很久。然后石门缓缓打开一条缝，缝里伸出一只苍白的手，把你拉了进去。

"秀兰说，你会来的。"那声音说，"我们让她先见你。"`,
    effects: { sanity: -3, yin: 5 },
    choices: [
        { text: '走进石室', next: 'huimen_exp3_zhou_mansion_cellar_women_want', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_door_talk_nine = {
    title: '九名',
    text: `你把九个人的名字一一念出。

有的名字你已经知道，有的是从族谱上背下来的。每念一个，门后的哭声就轻一分。

念到最后一个名字时，石门无声地开了。门后的女子身影朝两侧让开，露出供桌上那块无字牌位。

"给我们立个名。"她们说，"有名，才能走。"`,
    effects: { sanity: 5, yin: -3 },
    choices: [
        { text: '在无字牌位上写下九个人的名字', next: 'huimen_exp3_zhou_mansion_cellar_name_stele', effects: { sanity: 8, yin: -5 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_women_want = {
    title: '她们的心愿',
    text: `九个女子身影围成一圈，把你和无字牌位围在中间。

"我们想要一个名字。"最前面的身影说，"周家把我们的名字从族谱上划掉，我们就成了无名的鬼。无名，就不能投胎，不能回家。"

"帮我们刻回名字。"另一个身影说，"刻回名字，我们就放秀兰走。"`,
    effects: { sanity: -3, yin: 5 },
    choices: [
        { text: '答应她们', next: 'huimen_exp3_zhou_mansion_cellar_name_stele', effects: { sanity: 5, yin: -2 } },
        { text: '说只带秀兰走', next: 'huimen_exp3_zhou_mansion_cellar_women_angry', effects: { yin: 8 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_women_angry = {
    title: '众怒',
    text: `"只带她走？"女子们的声音重叠在一起，像井底的回声，"我们也是秀兰。我们也是被人忘了的秀兰。"

她们的影子朝你压过来，地窖里的温度骤降。你感觉呼吸开始困难，像是有水灌进肺里。`,
    effects: { sanity: -8, yin: 8 },
    choices: [
        { text: '改口答应所有人', next: 'huimen_exp3_zhou_mansion_cellar_name_stele', effects: { sanity: 3, yin: -2 } },
        { text: '拼死冲出地窖', next: 'huimen_exp_village_street', effects: { sanity: -5, yin: 5 } }
    ]
};

StoryData.huimen_exp3_zhou_mansion_cellar_name_stele = {
    title: '刻名',
    text: `你咬破手指，用血在无字牌位上写下九个名字。

每一个名字落上去，牌位就轻一分。女子身影一个个淡去，最后只剩秀兰站在你面前。

"你做到了。"她说，"现在，我可以跟你走了。"

她伸出手，掌心里是一枚冰凉的骨片。`,
    effects: { sanity: 10, yin: -10, addItem: '秀兰骨片', setFlag: 'huimen_exp3_freed_nine_women' },
    choices: [
        { text: '握住她的手', next: 'huimen_exp3_xiulan_hand', effects: { sanity: 5, yin: -3 } }
    ]
};

StoryData.huimen_exp3_xiulan_hand = {
    title: '牵手',
    text: `秀兰的手很凉，但不再是没有形状的雾气。

"地窖后面有一条密道，通向村口。"她说，"但我还不能直接走出去。我的尸骨还在井里，你得把我捞上来。"

她的身影慢慢淡去，只留下一句话："我在井边等你。"`,
    effects: { sanity: 3, yin: -2 },
    choices: [
        { text: '去井边', next: 'huimen_exp_well_night', effects: { yin: 1 } },
        { text: '先回村街准备', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_ending_ancestral_cellar_scene = {
    title: '地窖长明',
    text: `你转身往地窖口跑，却撞上一堵无形的墙。

女子们的影子从你身后涌来，却没有伤害你。她们只是围着你，一遍又一遍地念自己的名字。

不知过了多久，你口袋里的火柴自己划着了。火光落到地上，点燃了一片不知道什么时候铺在地上的纸钱。

火越烧越大，把地窖照得通明。女子们在火光里鞠躬，然后化作青烟。

你醒来时，躺在祖宅的门槛上，手里握着一盏熄灭的古灯。`,
    effects: { sanity: 5, yin: -5 },
    choices: [
        { text: '起身', ending: 'huimen_exp3_ending_ancestral_cellar', effects: { yin: 0 } }
    ]
};

// ------------------------------------------------------------
// 纸扎铺与井底更多探索
// ------------------------------------------------------------

StoryData.huimen_exp3_paper_shop_basement = {
    title: '纸扎铺地下室',
    text: `你掀开纸扎铺柜台后的布帘，发现一道向下的木梯。

梯子上落满灰尘，却有一串新鲜的脚印。脚印很小，像是女子的脚。你顺着梯子下去，地下室里堆满了未完工的纸人，有的有脸，有的没有。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '查看没有脸的纸人', next: 'huimen_exp3_paper_shop_faceless', effects: { yin: 2 } },
        { text: '找扎纸匠问问', next: 'huimen_exp_paper_doll_craftsman', effects: { yin: 1 } },
        { text: '点燃一盏油灯', next: 'huimen_exp3_paper_shop_basement_light', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_paper_shop_faceless = {
    title: '无脸纸人',
    text: `没有脸的纸人一共有七个，排成一排，像是在等什么东西。

你走近时，听见它们身上发出细微的沙沙声。仔细一看，纸人的胸口都贴着一张黄纸，写着女子的名字和生辰。

最边上的那个，贴着"秀兰"。`,
    effects: { sanity: -5, yin: 4 },
    choices: [
        { text: '撕下秀兰的纸', next: 'huimen_exp3_paper_shop_faceless_tear', effects: { sanity: 3, yin: -2 } },
        { text: '给它们画上脸', next: 'huimen_exp3_paper_shop_faceless_draw', effects: { yin: 5 } }
    ]
};

StoryData.huimen_exp3_paper_shop_faceless_tear = {
    title: '撕名',
    text: `黄纸一撕，那个无脸纸人忽然软倒，像被抽掉了骨头。

其他的纸人开始颤抖，发出婴儿哭泣般的声响。你赶紧把黄纸折好收进口袋，后退到梯子口。

纸人们慢慢平静下来，但它们的身体似乎比之前更瘦了。`,
    effects: { sanity: 3, yin: -3, addItem: '纸人名纸' },
    choices: [
        { text: '离开地下室', next: 'huimen_exp_paper_shop', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_paper_shop_faceless_draw = {
    title: '画脸',
    text: `你蘸着朱砂，给纸人一一画上眉眼。

画到第三个时，纸人忽然睁开眼睛。那眼睛里没有眼白，只有两团漆黑。它张开嘴，发出秀兰的声音："别画了。画脸就是借命。"

你吓得把笔一扔。纸人们齐声叹了口气，像是在惋惜。`,
    effects: { sanity: -8, yin: 8 },
    choices: [
        { text: '烧毁所有纸人', next: 'huimen_exp3_paper_shop_faceless_burn', effects: { sanity: 5, yin: -5 } },
        { text: '逃上梯子', next: 'huimen_exp_paper_shop', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_paper_shop_faceless_burn = {
    title: '焚毁',
    text: `火从纸人脚下燃起，很快吞噬了整排无脸纸人。

它们在火里没有尖叫，只是静静地燃烧，像是在等待这一刻已经很久。最后，灰烬里露出七枚小小的骨珠。

你拾起骨珠，感觉它们在掌心里微微发温。`,
    effects: { sanity: 5, yin: -5, addItem: '七枚骨珠' },
    choices: [
        { text: '离开地下室', next: 'huimen_exp_paper_shop', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_paper_shop_basement_light = {
    title: '地下室的光',
    text: `你点亮油灯，地下室里的阴影一下子退了很远。

在灯光照不到的角落里，有一口小小的纸棺材。棺材盖半开着，里面躺着一个穿着红肚兜的纸娃娃。

纸娃娃的脸上带着笑，手里攥着一张纸条："吾儿周安，满月夭折，以纸代之。"`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '把纸娃娃抱出来', next: 'huimen_exp3_paper_shop_baby_doll', effects: { yin: 3 } },
        { text: '盖上棺材盖', next: 'huimen_exp3_paper_shop_baby_doll_close', effects: { sanity: 3, yin: 1 } }
    ]
};

StoryData.huimen_exp3_paper_shop_baby_doll = {
    title: '纸娃娃',
    text: `纸娃娃很轻，轻得像一只空心的鸡蛋。

你把它抱起来时，它忽然动了动，把纸条塞进你手里。纸条背面还有一行小字："娘亲秀兰，愿儿来世不姓周。"

你的眼眶忽然一酸。`,
    effects: { sanity: -5, yin: 4, addItem: '纸娃娃' },
    choices: [
        { text: '把娃娃带去给秀兰', next: 'huimen_exp_well_night', effects: { yin: 1 } },
        { text: '放回棺材', next: 'huimen_exp3_paper_shop_baby_doll_close', effects: { sanity: 3, yin: 1 } }
    ]
};

StoryData.huimen_exp3_paper_shop_baby_doll_close = {
    title: '盖棺',
    text: `你把棺材盖轻轻盖上。

纸娃娃在盖合的瞬间发出一声细细的呜咽，随即安静下来。地下室里的阴气似乎也淡了一些。

你在棺材盖上摸了摸，发现刻着一行小字："以纸代骨，以名代魂。"`,
    effects: { sanity: 3, yin: 1 },
    choices: [
        { text: '离开', next: 'huimen_exp_paper_shop', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_well_bottom = {
    title: '井底',
    text: `你顺着井壁的凹槽，慢慢下到井底。

井底没有水，只有一层厚厚的淤泥。淤泥里散落着白骨，有的完整，有的已经碎裂。你借着头上的微光，一具一具地辨认。

最深处，有一具穿着红嫁衣的骨架，手腕上系着一根红绳。`,
    effects: { sanity: -5, yin: 6 },
    choices: [
        { text: '靠近红嫁衣骨架', next: 'huimen_exp3_well_bottom_xiulan_bones', effects: { yin: 3 } },
        { text: '先祭拜其他尸骨', next: 'huimen_exp3_well_bottom_bow', effects: { sanity: 5, yin: -2 } },
        { text: '在井底寻找出口', next: 'huimen_exp3_well_bottom_exit', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_well_bottom_bow = {
    title: '祭拜',
    text: `你跪在淤泥里，朝散落的白骨拜了三拜。

"我不知道你们的名字，但我知道你们受过苦。"你说，"我会把秀兰带出去。你们若愿意，也跟着光走。"

白骨上没有反应，但井底的阴气明显轻了。几缕磷光从骨缝里升起，像萤火虫一样飘向井口。`,
    effects: { sanity: 5, yin: -3 },
    choices: [
        { text: '去收敛秀兰的骨殖', next: 'huimen_exp3_well_bottom_xiulan_bones', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_well_bottom_xiulan_bones = {
    title: '秀兰的骨殖',
    text: `你轻轻拨开淤泥，露出红嫁衣下的骨架。

骨架很小，肩胛骨上还有一处旧伤，像是很久以前被什么东西勒过。嫁衣的袖口绣着井，井下绣着你的名字——不是周家的名字，是你在城里用的名字。

你这才明白，她一直在等你。`,
    effects: { sanity: -3, yin: 4, addItem: '秀兰的骨殖' },
    choices: [
        { text: '把骨殖包好', next: 'huimen_exp3_well_bottom_wrap', effects: { sanity: 3, yin: 1 } },
        { text: '给她换上带来的嫁衣', next: 'huimen_exp3_well_bottom_change_dress', condition: { flag: 'huimen_exp3_wish_dress' }, effects: { sanity: 8, yin: -3 } }
    ]
};

StoryData.huimen_exp3_well_bottom_wrap = {
    title: '包骨',
    text: `你脱下外套，把秀兰的骨殖一块一块包好。

骨殖很轻，像是包着一捆干柴。你把她系在背上，感觉有一股凉意贴着脊背，却并不沉重。

井壁上忽然渗出一行水字："背我回家。"`,
    effects: { sanity: 5, yin: -2, setFlag: 'huimen_exp3_has_bones' },
    choices: [
        { text: '寻找出路', next: 'huimen_exp3_well_bottom_exit', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_well_bottom_change_dress = {
    title: '换衣',
    text: `你从怀里取出那件粉色的嫁衣——是你在裁缝铺请刘姐连夜赶制的。

你小心翼翼地替她脱下那件绣着井的红嫁衣，换上粉色的新衣。粉色嫁衣套上骨架时，井底忽然亮起一层柔和的光。

"好看。"秀兰的声音在井壁间回荡，"比周家那件好看多了。"`,
    effects: { sanity: 10, yin: -5, setFlag: 'huimen_exp3_has_bones_dressed' },
    choices: [
        { text: '带她离开井底', next: 'huimen_exp3_well_bottom_exit', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_well_bottom_exit = {
    title: '井底出口',
    text: `井底一侧的淤泥里，露出半扇石门。石门上刻着："背井者出，负骨者归。"

你用力推开石门，后面是一条向上的石阶。石阶尽头有光，不是月光，是天亮前的鱼肚白。`,
    effects: { yin: 2 },
    choices: [
        { text: '沿石阶上去', next: 'huimen_exp3_well_bottom_surface', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_well_bottom_surface = {
    title: '出井',
    text: `你背着秀兰的骨殖，从石阶尽头钻出来。

外面是一片陌生的河岸。河面上漂浮着无数纸船，每只纸船上都点着一盏小灯。秀兰的声音轻轻说："纸船会带我们离开。"

你找了一只最大的纸船，把骨殖放进去。纸船没有沉，反而稳稳地漂向河心。`,
    effects: { sanity: 5, yin: -3 },
    choices: [
        { text: '跟着纸船走', next: 'huimen_exp3_ending_paper_boat_ferry_scene', effects: { yin: 1 } },
        { text: '把船推远，自己游上岸', next: 'huimen_exp3_well_bottom_shore', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_well_bottom_shore = {
    title: '上岸',
    text: `你游到对岸，浑身湿透。

回头再看，河面上的纸船已经汇成一条灯带，向远方漂去。你手里还攥着从船上抓下的一块船板，上面写着一个"周"字，被你一点点掰碎了。

天快亮了。`,
    effects: { sanity: 3, yin: -2 },
    choices: [
        { text: '朝有人烟的地方走', ending: 'huimen_exp3_ending_well_bottom_bones', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_ending_paper_boat_ferry_scene = {
    title: '渡',
    text: `你跟着纸船走了很久，直到河水变清，天边泛起金色。

纸船在晨光里慢慢融化，秀兰的骨殖沉入河底。你跪在岸边，看着最后一缕纸灰被风吹散。

"谢谢你。"她的声音从水里传来，"这次我真的走了。"`,
    effects: { sanity: 5, yin: -5 },
    choices: [
        { text: '目送她离去', ending: 'huimen_exp3_ending_paper_boat_ferry', effects: { yin: 0 } }
    ]
};

// ------------------------------------------------------------
// 村民支线：王婆、李木匠、周家族长
// ------------------------------------------------------------

StoryData.huimen_exp3_granny_wang_house = {
    title: '王婆家',
    text: `村街拐角有一间低矮的茅屋，门口挂着一串干辣椒和一只风干的老鼠。门缝里飘出艾草和红糖的味道。

你敲了敲门，一个沙哑的声音说："进来吧，外乡人。我等你很久了。"`,
    effects: { yin: 1 },
    choices: [
        { text: '推门进去', next: 'huimen_exp3_granny_wang_inside', effects: { yin: 1 } },
        { text: '问她为什么等你', next: 'huimen_exp3_granny_wang_ask', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_inside = {
    title: '王婆',
    text: `屋里很暗，只有灶上一盏油灯。一个老婆婆坐在灶前，正在熬一锅黑漆漆的药。

她抬起头，脸上皱纹纵横，眼睛却亮得吓人。"你是来找秀兰的？"她问，"那丫头命苦，是我亲手给她穿上的绣鞋。"`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '质问她为什么害秀兰', next: 'huimen_exp3_granny_wang_blame', effects: { yin: 2 } },
        { text: '问她是否后悔', next: 'huimen_exp3_granny_wang_regret', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_ask = {
    title: '为何等我',
    text: `王婆用勺子搅了搅药锅，药汁里浮出一张人脸，很快又散了。

"我梦里总有人告诉我，会有一个外乡人来问我秀兰的事。"她说，"我等了很多年，等到自己都快成鬼了。"

她指了指墙角的柜子："那双绣鞋还在。你想看看吗？"`,
    effects: { sanity: -3, yin: 2 },
    choices: [
        { text: '看绣鞋', next: 'huimen_exp3_granny_wang_shoes', effects: { yin: 2 } },
        { text: '问她秀兰的事', next: 'huimen_exp3_granny_wang_inside', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_shoes = {
    title: '绣鞋',
    text: `柜子里放着一双大红色的绣鞋，鞋面上绣着并蒂莲，针脚细密。

鞋尖各缀着一颗珍珠，珍珠已经发黄，像两颗凝固的眼泪。王婆说："穿上这双鞋回门的女子，都会被井神收走。这是周家的规矩，我改不了。"`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '把绣鞋烧掉', next: 'huimen_exp3_granny_wang_shoes_burn', effects: { sanity: 5, yin: -3 } },
        { text: '问她是谁定的规矩', next: 'huimen_exp3_granny_wang_rule', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_blame = {
    title: '质问',
    text: `"害她？"王婆的手抖了一下，药汁溅到灶台上，发出"嗤"的一声，"我是帮凶，可刀不是我磨的。周家族长说，不回门的媳妇会坏了村子的风水。我只是……不敢不听。"

她的眼泪落进药锅，药汁更黑了。`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '说她可以赎罪', next: 'huimen_exp3_granny_wang_redemption_path', effects: { sanity: 3, yin: 1 } },
        { text: '转身离开', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_regret = {
    title: '悔',
    text: `王婆沉默了很久。

"后悔？"她低声说，"我每天晚上都能听见她在井里哭。我给她烧了很多纸钱，可她不要钱，她要的是一个道歉。"

她抬起头看着你："你能替我说一声对不起吗？"`,
    effects: { sanity: 2, yin: 1 },
    choices: [
        { text: '答应她', next: 'huimen_exp3_granny_wang_redemption_path', effects: { sanity: 3, yin: 1, setFlag: 'huimen_exp3_granny_wang_sorry' } },
        { text: '说你要她自己说', next: 'huimen_exp3_granny_wang_speak', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_granny_wang_rule = {
    title: '规矩',
    text: `"规矩？"王婆冷笑，"周家为了发财，编出来的规矩。每代娶一个外姓女子，回门那日沉井，换村子十年太平。"

她指着墙上的年画："那画上的送子娘娘，原型就是第一个被沉井的女子。人们拜她，是因为不敢记得她原本的名字。"`,
    effects: { sanity: -3, yin: 2, setFlag: 'huimen_exp3_knows_first_woman' },
    choices: [
        { text: '问她第一个女子叫什么', next: 'huimen_exp3_granny_wang_first_name', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_first_name = {
    title: '第一个名字',
    text: `王婆凑近油灯，压低声音："她叫阿沅。是周家第一代媳妇，也是第一个发现井里秘密的人。"

"她发现什么秘密？"你问。

"她发现井底有金子。"王婆说，"可金子是用命换的。她不愿再害人，就被周家以中邪之名沉了井。"

灶上的药锅忽然翻涌，像是有谁在底下搅动。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '去井底找阿沅的骨殖', next: 'huimen_exp3_well_bottom', effects: { yin: 2 } },
        { text: '继续和王婆谈', next: 'huimen_exp3_granny_wang_redemption_path', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_redemption_path = {
    title: '赎罪之路',
    text: `王婆从怀里摸出一把生锈的剪刀。

"这是当年剪她头发用的剪刀。"她说，"你若能在井边烧掉这双绣鞋，再用这把剪刀剪断她腕上的红绳，她就能走。"

她把剪刀和绣鞋一起推到你面前，手抖得厉害。`,
    effects: { sanity: 3, yin: -1, addItem: '王婆的剪刀' },
    choices: [
        { text: '收下东西去井边', next: 'huimen_exp_well_night', effects: { yin: 1 } },
        { text: '让她一起去', next: 'huimen_exp3_granny_wang_together', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_granny_wang_speak = {
    title: '让她自己说',
    text: `"我自己说？"王婆的脸色变了，"我老了，走不到井边。你让我在这里说，她听不见的。"

她忽然抓住你的手，力气大得不像老人："你带我去。我跪在她面前，亲口说对不起。"`,
    effects: { sanity: -2, yin: 3 },
    choices: [
        { text: '扶她去井边', next: 'huimen_exp3_granny_wang_together', effects: { yin: 2 } },
        { text: '甩开她的手', next: 'huimen_exp_village_street', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_granny_wang_together = {
    title: '同去',
    text: `你扶着王婆走向井边。

她的脚步很轻，像踩在云上。每走一步，她身上的阴气就淡一分，等到了井边，她已经变得半透明。

秀兰的身影从井水里浮出来。王婆扑通跪下："秀兰，我对不住你。"

秀兰看了她很久，最后轻轻叹了口气："你起来吧。我恨不动了。"`,
    effects: { sanity: 8, yin: -5, setFlag: 'huimen_exp3_granny_wang_forgiven' },
    choices: [
        { text: '烧掉绣鞋', next: 'huimen_exp3_granny_wang_shoes_burn_together', effects: { sanity: 5, yin: -3 } }
    ]
};

StoryData.huimen_exp3_granny_wang_shoes_burn = {
    title: '烧鞋',
    text: `你把绣鞋扔进火里。

火光中，鞋子发出尖叫，像是有无数女子在鞋里哭泣。你念出秀兰的名字，哭声渐渐平息，最后只剩下一堆暗红的灰烬。

王婆站在你身后，喃喃道："断了，终于断了。"`,
    effects: { sanity: 5, yin: -3, setFlag: 'huimen_exp3_burned_red_shoes' },
    choices: [
        { text: '离开王婆家', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_granny_wang_shoes_burn_together = {
    title: '一同焚鞋',
    text: `王婆亲手把绣鞋扔进火里。

火焰腾起时，她的身影也随之燃烧。秀兰伸手想拦，王婆摇摇头："我欠你的，该还了。"

火光熄灭后，地上只剩一双烧焦的鞋模，和一缕青烟。秀兰站在青烟里，朝你轻轻点头。

你知道，王婆终于安息了。`,
    effects: { sanity: 10, yin: -8, setFlag: 'huimen_exp3_granny_wang_forgiven', setFlag: 'huimen_exp3_burned_red_shoes' },
    choices: [
        { text: '离开', ending: 'huimen_exp3_hidden_granny_wang_rest', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_shop = {
    title: '李木匠铺',
    text: `村街尽头有一间木匠铺，铺子里堆满刨花和未完工的棺木。

一个中年男人坐在刨花堆里，正在刨一块棺材板。他的手指粗大，掌心布满老茧，眼神却很温和。`,
    effects: { yin: 1 },
    choices: [
        { text: '问他是不是李木匠', next: 'huimen_exp3_carpenter_li_talk', effects: { yin: 1 } },
        { text: '看他在做什么', next: 'huimen_exp3_carpenter_li_work', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_talk = {
    title: '李木匠',
    text: `"是我。"李木匠放下刨子，"你要打棺材？还是要打家具？"

你摇摇头，说你是来找秀兰的。他的脸色变了，手里的刨子"当啷"一声掉在地上。

"秀兰……"他重复这个名字，像是怕惊动什么，"我给她打过嫁妆箱。她出嫁那天，我还偷偷在箱底刻了她的名字。"`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '问他为什么这么做', next: 'huimen_exp3_carpenter_li_why', effects: { yin: 1 } },
        { text: '问他知不知道秀兰被沉井', next: 'huimen_exp3_carpenter_li_know', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_work = {
    title: '棺木',
    text: `他正在给一口小棺材刨盖。棺材只有三尺长，像是给孩子用的。

"这是给周家小少爷的。"李木匠说，"那孩子满月就夭折了，周家要纸人陪葬，我偏要给他做一口真棺材。"

他的刨子推过木板，发出一声悠长的叹息。`,
    effects: { sanity: -3, yin: 2 },
    choices: [
        { text: '帮他一起刨', next: 'huimen_exp3_carpenter_li_help', effects: { sanity: 3, yin: 1 } },
        { text: '问他小少爷的母亲是谁', next: 'huimen_exp3_carpenter_li_mother', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_why = {
    title: '刻名',
    text: `"为什么？"李木匠苦笑，"因为我喜欢她。可她是周家定下的媳妇，我配不上。"

他从棺材板下摸出一张发黄的纸，上面画着一个女子侧面像，眉眼和秀兰一模一样。

"她出嫁前，求我给她画一张像。她说，想留个自己的样子。"`,
    effects: { sanity: -3, yin: 2, addItem: '秀兰的画像' },
    choices: [
        { text: '问他后来怎么样了', next: 'huimen_exp3_carpenter_li_later', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_know = {
    title: '知情',
    text: `"知道。"李木匠低下头，"全村人都知道。可谁敢管？周家有钱有势，井神的事情，谁管谁死。"

他忽然抬头，眼里有泪："我管了。我去井边烧纸，被他们打断了一条腿。"

他掀起裤脚，露出一截扭曲的小腿。`,
    effects: { sanity: -5, yin: 3 },
    choices: [
        { text: '说这次可以一起救她', next: 'huimen_exp3_carpenter_li_join', effects: { sanity: 3, yin: 1 } },
        { text: '沉默', next: 'huimen_exp_village_street', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_later = {
    title: '后来',
    text: `"后来她回门，再没回来。"李木匠说，"我去周家要人，被他们赶出来。我去井边哭，井里却传来她的声音，叫我别管。"

他把画像收回怀里："她说，让我好好活着。可我怎么活得下去？"

刨花堆里的刨子忽然自己动了，像是要刨出什么东西。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '帮他完成棺材', next: 'huimen_exp3_carpenter_li_help', effects: { sanity: 3, yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_help = {
    title: '帮手',
    text: `你拿起刨子，帮他推过木板。

木屑纷飞，棺材板越来越光滑。李木匠说："这口棺材，我打算送给秀兰。她的尸骨在井里泡了太久，该有个像样的家了。"`,
    effects: { sanity: 3, yin: 1, setFlag: 'huimen_exp3_carpenter_helped' },
    choices: [
        { text: '说你会把她的骨殖带出来', next: 'huimen_exp3_carpenter_li_promise', effects: { sanity: 5, yin: 1 } },
        { text: '问他要不要一起去井边', next: 'huimen_exp3_carpenter_li_together', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_mother = {
    title: '母亲',
    text: `"小少爷的母亲？"李木匠的声音更低了，"就是秀兰。她怀孕三个月时被沉的井，孩子也没了。"

"周家怕人说闲话，对外说是难产。其实那孩子根本没机会生下来。"他的拳头攥得发白，"秀兰井里喊得最凶的时候，就是孩子没的那天。"`,
    effects: { sanity: -8, yin: 4 },
    choices: [
        { text: '说一定要让她安息', next: 'huimen_exp3_carpenter_li_join', effects: { sanity: 5, yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_join = {
    title: '同行',
    text: `李木匠点点头，从墙上取下一把锯子。

"这把锯子，我藏了很多年。"他说，"井边那棵老槐树，是周家用第一个女子的血种下的。锯断它，井里的怨气就能散一半。"

他把锯子递给你："你走前面，我腿不好，跟在后面。"`,
    effects: { sanity: 3, yin: 1, addItem: '李木匠的锯' },
    choices: [
        { text: '去老槐树', next: 'huimen_exp_mulberry_tree', effects: { yin: 1 } },
        { text: '先去井边', next: 'huimen_exp_well_night', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_together = {
    title: '同往井边',
    text: `李木匠拄着一根木拐，一瘸一拐地跟你走到井边。

秀兰的身影从井里浮出来。李木匠扑通跪下，把脸埋进土里："秀兰，我没用，护不住你。"

秀兰看着他，眼泪无声地流进井水。她说："你已经做得够多了。"`,
    effects: { sanity: 8, yin: -3, setFlag: 'huimen_exp3_carpenter_at_well' },
    choices: [
        { text: '让他锯断老槐树', next: 'huimen_exp3_carpenter_li_saw_tree', condition: { hasItem: '李木匠的锯' }, effects: { sanity: 5, yin: -3 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_promise = {
    title: '承诺',
    text: `李木匠看着你，眼里第一次有了光。

"你若真能把她的骨殖带出来，我就把棺材给她。"他说，"再给她刻一块碑，碑上不写周家媳妇，只写'秀兰之墓'。"

他把手心的刨花吹散，像吹散一场隔了很久的雪。`,
    effects: { sanity: 5, yin: -2, setFlag: 'huimen_exp3_carpenter_promise' },
    choices: [
        { text: '去井底', next: 'huimen_exp3_well_bottom', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_carpenter_li_saw_tree = {
    title: '锯树',
    text: `李木匠接过锯子，一下一下锯向老槐树。

树汁喷涌而出，暗红如血。秀兰的身影站在树影里，随着每一锯下去，她的身形就清晰一分。

最后一锯落下，老槐树轰然倒地。树洞里滚出无数细小的骨珠，像是谁藏了一辈子的眼泪。`,
    effects: { sanity: 10, yin: -8, setFlag: 'huimen_exp3_tree_cut' },
    choices: [
        { text: '扶李木匠坐下', next: 'huimen_exp3_ending_carpenter_saw_scene', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_ending_carpenter_saw_scene = {
    title: '锯',
    text: `李木匠瘫坐在树桩上，浑身是汗。

秀兰走到他面前，伸出手，像是要替他擦汗。她的手穿过他的身体，带起一阵微风。

"谢谢你。"她说。

李木匠笑了，笑着笑着就哭了。`,
    effects: { sanity: 5, yin: -5 },
    choices: [
        { text: '离开', ending: 'huimen_exp3_ending_carpenter_saw', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_clan_head_house = {
    title: '族长家',
    text: `周家族长住在村东头最大的院子里。院门敞着，里面传出麻将碰撞的声音，还有人的笑声。

你走进去，看见几个穿着绸衫的男人围坐在石桌旁，正在推牌九。最老的那个抬起头，眼皮耷拉着，却像鹰一样锐利。`,
    effects: { yin: 2 },
    choices: [
        { text: '直接质问他秀兰的事', next: 'huimen_exp3_clan_head_confront', effects: { yin: 3 } },
        { text: '站在一旁看', next: 'huimen_exp3_clan_head_watch', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_clan_head_watch = {
    title: '旁观',
    text: `牌九上的图案不是常见的鱼虾蟹，而是女子的脸。每翻开一张，就有人笑，有人骂。

族长翻到最后一张，脸上露出满意的神色。他把牌一推："今天手气好，井神保佑。"

其他几个人齐声附和，笑声像钝刀刮过骨头。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '问他井神是谁', next: 'huimen_exp3_clan_head_god', effects: { yin: 2 } },
        { text: '掀翻牌桌', next: 'huimen_exp3_clan_head_flip', effects: { yin: 5 } }
    ]
};

StoryData.huimen_exp3_clan_head_confront = {
    title: '质问族长',
    text: `"秀兰？"族长把牌九拢进怀里，"周家的媳妇，轮不到外乡人问。"

"她是被人害死的。"你说。

族长笑了，露出几颗金牙："害死？她是被选中的。井神选中她，是她的福气。"`,
    effects: { sanity: -3, yin: 4 },
    choices: [
        { text: '说井神根本不存在', next: 'huimen_exp3_clan_head_deny', effects: { yin: 5 } },
        { text: '问他有没有愧疚', next: 'huimen_exp3_clan_head_guilt', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_clan_head_god = {
    title: '井神',
    text: `"井神？"族长压低声音，"井神就是第一个被沉井的女子。她死得冤，怨气大，周家用香火养着她，她保村子风调雨顺。"

"可她也在索命。"旁边一个年轻人插嘴，被族长瞪了一眼，不敢再说话。

族长转回来看你："每隔十年，井神要一个新娘。这是契约。"`,
    effects: { sanity: -5, yin: 3 },
    choices: [
        { text: '说契约可以打破', next: 'huimen_exp3_clan_head_break', effects: { yin: 2 } },
        { text: '问他愿不愿意认错', next: 'huimen_exp3_clan_head_guilt', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_clan_head_flip = {
    title: '掀桌',
    text: `你一把掀翻牌桌。

牌九散落一地，女子的脸在月光下扭曲。族长脸色铁青，几个男人站起来围住你。

"外乡人，你找死。"族长说。

就在这时，地上的牌九忽然自己动起来，拼成一个字："冤"。`,
    effects: { sanity: -5, yin: 6 },
    choices: [
        { text: '指着"冤"字质问', next: 'huimen_exp3_clan_head_word', effects: { yin: 3 } },
        { text: '趁机跑出院子', next: 'huimen_exp_village_street', effects: { yin: 3 } }
    ]
};

StoryData.huimen_exp3_clan_head_deny = {
    title: '否认',
    text: `"不存在？"族长站起身，院里的灯笼无风自动，"你以为这些年村子凭什么风调雨顺？凭什么五谷丰登？"

"凭的是人命。"你说。

族长的笑容僵在脸上。他身后的墙上，忽然渗出无数水迹，像是有谁在墙后哭泣。`,
    effects: { sanity: -3, yin: 5 },
    choices: [
        { text: '继续施压', next: 'huimen_exp3_clan_head_pressure', effects: { yin: 3 } }
    ]
};

StoryData.huimen_exp3_clan_head_guilt = {
    title: '愧疚',
    text: `族长沉默了一会儿。

"愧疚？"他低声说，"我爹把我姐姐沉井的时候，我也愧疚。可他说，不沉井，村子就完了。"

他抬起头，眼里有一丝裂缝："后来我当了族长，才知道……原来只要人心齐，不沉井也能活。可已经停不下来了。"`,
    effects: { sanity: -2, yin: 2 },
    choices: [
        { text: '说现在停下来还来得及', next: 'huimen_exp3_clan_head_repent', effects: { sanity: 5, yin: 1 } },
        { text: '说他也是凶手', next: 'huimen_exp3_clan_head_accuse', effects: { yin: 4 } }
    ]
};

StoryData.huimen_exp3_clan_head_break = {
    title: '破契',
    text: `"打破？"族长冷笑，"契约是血写的，要破契约，得用周家人的血。"

他伸出苍老的手，掌心有一道陈年伤疤："我爹当年用我姐姐的血续了契约。我老了，血快流干了。"

旁边几个男人低下头，不敢看他。`,
    effects: { sanity: -5, yin: 4 },
    choices: [
        { text: '说可以用其他方式偿还', next: 'huimen_exp3_clan_head_repent', effects: { yin: 2 } },
        { text: '说周家该偿命', next: 'huimen_exp3_clan_head_accuse', effects: { yin: 4 } }
    ]
};

StoryData.huimen_exp3_clan_head_word = {
    title: '冤',
    text: `"你们看。"你指着地上的字，"井神自己写的。这不是保佑，是控诉。"

族长的脸色变了。地上的牌九又动起来，拼出第二字："还"。然后是"我""名"。

"还我名字。"不知从何处传来女子的声音。`,
    effects: { sanity: -3, yin: 5 },
    choices: [
        { text: '让族长在族谱上补名', next: 'huimen_exp3_clan_head_name', effects: { yin: 2 } }
    ]
};

StoryData.huimen_exp3_clan_head_pressure = {
    title: '施压',
    text: `你一步一步逼近族长。

"秀兰不是第一个，也不会是最后一个。可今天，我站在这里，就是来终结的。"

院里的水迹越来越多，汇成一条条细流，流向族长的脚边。他的绸鞋被水浸湿，脸色惨白。`,
    effects: { sanity: -3, yin: 5 },
    choices: [
        { text: '逼他去祖祠认错', next: 'huimen_exp3_clan_head_repent', effects: { yin: 3 } }
    ]
};

StoryData.huimen_exp3_clan_head_repent = {
    title: '悔过',
    text: `族长沉默了很久，最后长叹一声。

"好。"他说，"我去祖祠。我把族谱上划掉的名字，一个一个写回去。"

他站起身，像是忽然老了二十岁。其他几个男人想拦他，被他一挥手推开。

"周家造孽太久，该还债了。"`,
    effects: { sanity: 5, yin: -3, setFlag: 'huimen_exp3_clan_head_repents' },
    choices: [
        { text: '跟他去祖祠', next: 'huimen_exp3_clan_head_ancestral', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_clan_head_accuse = {
    title: '指控',
    text: `"偿命？"族长笑了，笑声里带着凄凉，"我这条老命，早就不值钱了。可你杀了我也没用，契约还在。"

他从怀里掏出一把匕首，扔在你面前："你要偿命，就杀了我。但杀了我，下一个族长会接着沉井。"

匕首在月光下泛着寒光。`,
    effects: { sanity: -5, yin: 5 },
    choices: [
        { text: '不杀他，逼他去认错', next: 'huimen_exp3_clan_head_repent', effects: { sanity: 3, yin: 1 } },
        { text: '拿起匕首', next: 'huimen_exp3_clan_head_kill', effects: { yin: 8 } }
    ]
};

StoryData.huimen_exp3_clan_head_name = {
    title: '补名',
    text: `族长从屋里取出一本厚厚的族谱，翻到被涂黑的几页。

他的手抖得厉害，蘸了朱砂，在涂黑处写下第一个名字。每写一个字，院里的水迹就退一分。

"秀兰"二字落上去时，井边忽然传来一声清晰的叹息。`,
    effects: { sanity: 8, yin: -5, setFlag: 'huimen_exp3_clan_head_named' },
    choices: [
        { text: '继续写', next: 'huimen_exp3_clan_head_ancestral', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_clan_head_kill = {
    title: '刀',
    text: `你拿起匕首，但没有刺向他。

你把匕首插在牌桌上，刀尖穿透一张女子的脸牌。

"我不要你的命。"你说，"我要你记住她们的名字。每一天，每一夜，都记住。"

族长看着你，眼里的光一点点暗下去。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '逼他去祖祠', next: 'huimen_exp3_clan_head_repent', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_clan_head_ancestral = {
    title: '祖祠认错',
    text: `你跟族长来到祖祠。

他跪在祖先牌位前，把族谱摊开，用朱砂补全所有被划掉的名字。补到秀兰时，他的手停了很久。

"秀兰，周家对不起你。"他说。

祠堂里的牌位齐齐震颤，最老的那一块裂开一道缝。`,
    effects: { sanity: 10, yin: -8, setFlag: 'huimen_exp3_clan_head_repented' },
    choices: [
        { text: '扶他起来', next: 'huimen_exp3_hidden_clan_head_penance_scene', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_hidden_clan_head_penance_scene = {
    title: '忏',
    text: `族长把族谱紧紧抱在怀里，老泪纵横。

秀兰的身影出现在祠堂门口。她看着族长，没有恨，只有一种久远的疲惫。

"我原谅你。"她说，"不是为你，是为我自己。"

她转身走出祠堂，阳光从门外涌进来。族长跪在地上，朝她的背影重重磕了一个头。`,
    effects: { sanity: 10, yin: -10 },
    choices: [
        { text: '追上秀兰', ending: 'huimen_exp3_hidden_clan_head_penance', effects: { yin: 0 } }
    ]
};

// ------------------------------------------------------------
// 山村循环机制：多次循环寻找低阴气路径
// ------------------------------------------------------------

StoryData.huimen_exp3_loop_stone = {
    title: '循环石碑',
    text: `你在村街尽头发现一块被青苔覆盖的石碑。石碑上刻着："入村者三，出村者一。走错重来，走对归一。"

你伸手擦去青苔，石碑表面浮现出三个箭头，分别指向老宅、井边、纸扎铺。`,
    effects: { yin: 1 },
    choices: [
        { text: '走老宅方向', next: 'huimen_exp3_loop_mansion', effects: { yin: 1 } },
        { text: '走井边方向', next: 'huimen_exp3_loop_well', effects: { yin: 1 } },
        { text: '走纸扎铺方向', next: 'huimen_exp3_loop_paper', effects: { yin: 1 } },
        { text: '在石碑前等待', next: 'huimen_exp3_loop_wait', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_wait = {
    title: '等待',
    text: `你站在石碑前，没有急着选。

夜风吹过，石碑上的青苔重新合拢，把三个箭头盖住了。你忽然发现，石碑底部还有一行小字："心不动，则路自现。"`,
    effects: { sanity: 3, yin: 0 },
    choices: [
        { text: '闭上眼睛', next: 'huimen_exp3_loop_eyes_closed', effects: { sanity: 2, yin: 0 } },
        { text: '默念秀兰的名字', next: 'huimen_exp3_loop_call_xiulan', effects: { sanity: 3, yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_eyes_closed = {
    title: '闭眼',
    text: `你闭上眼睛。

耳边传来风声、水声、纸人的沙沙声，但你不为所动。渐渐地，所有声音都退远了，只剩自己的心跳。

心跳里，你听见秀兰轻声说："跟着我。"`,
    effects: { sanity: 5, yin: 0, setFlag: 'huimen_exp3_loop_heart' },
    choices: [
        { text: '凭感觉走', next: 'huimen_exp3_loop_path_heart', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_call_xiulan = {
    title: '念名',
    text: `你低声念出秀兰的名字。

名字像一粒石子投入井中，荡开涟漪。石碑上的青苔纷纷脱落，露出第四道箭头——它不是刻在石碑上，而是浮在空中，用月光凝成。

箭头指向村外。`,
    effects: { sanity: 5, yin: 0, setFlag: 'huimen_exp3_loop_moon_path' },
    choices: [
        { text: '沿月光箭头走', next: 'huimen_exp3_loop_moon_exit', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_mansion = {
    title: '老宅之路',
    text: `你走向老宅方向。

路越走越长，两边的房子越来越旧，最后变成一片废墟。废墟里站着许多纸人，它们朝你鞠躬，齐声说："周家的人，回来了。"

你意识到这是循环的一部分。`,
    effects: { sanity: -3, yin: 3 },
    choices: [
        { text: '继续走', next: 'huimen_exp3_loop_mansion_deep', effects: { yin: 3 } },
        { text: '退回石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_loop_well = {
    title: '井边之路',
    text: `你走向井边方向。

路越走越湿，脚下的石板渗出井水。你听见井底有人在唱歌，声音很熟悉，是秀兰常唱的那首童谣。

你走到井边，井水里映出的却不是你的脸，而是无数个你自己。`,
    effects: { sanity: -3, yin: 4 },
    choices: [
        { text: '看井水里的自己', next: 'huimen_exp3_loop_well_reflection', effects: { yin: 3 } },
        { text: '退回石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_loop_paper = {
    title: '纸扎铺之路',
    text: `你走向纸扎铺方向。

纸扎铺的灯笼亮了，但铺子里没有人。柜台后摆满了纸人，每个纸人都长着你的脸。

"选一个替身，你就可以走了。"一个声音说。`,
    effects: { sanity: -5, yin: 4 },
    choices: [
        { text: '拒绝选替身', next: 'huimen_exp3_loop_paper_refuse', effects: { sanity: 3, yin: 1 } },
        { text: '选一个纸人', next: 'huimen_exp3_loop_paper_chose', effects: { yin: 8 } }
    ]
};

StoryData.huimen_exp3_loop_mansion_deep = {
    title: '废墟深处',
    text: `废墟深处有一口枯井，井沿上坐着一个小女孩。

她背对着你，正在用井水梳头。你走近时，她回过头——没有脸，只有一团漆黑。

"你走错了。"她说，"回去重来。"`,
    effects: { sanity: -5, yin: 5 },
    choices: [
        { text: '问她怎么走对', next: 'huimen_exp3_loop_mansion_ask', effects: { yin: 1 } },
        { text: '退回石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_loop_well_reflection = {
    title: '水中倒影',
    text: `井水里的无数个你同时开口："留下来，陪我们。"

你感觉自己的意识在被拉扯，像是要分裂成很多份。你咬破舌尖，疼痛让你清醒过来。

"我不是你们。"你说，"我要出去。"`,
    effects: { sanity: -5, yin: 5 },
    choices: [
        { text: '砸碎水面', next: 'huimen_exp3_loop_well_smash', effects: { sanity: 3, yin: 2 } },
        { text: '退回石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 1 } }
    ]
};

StoryData.huimen_exp3_loop_paper_refuse = {
    title: '拒替',
    text: `"我不需要替身。"你说。

纸人们齐声叹了口气，像是很失望。柜台后的布帘掀起，露出一条通往村街的小路。

"你心性够硬。"那个声音说，"回去吧，下次再来。"`,
    effects: { sanity: 5, yin: -2 },
    choices: [
        { text: '回到石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_paper_chose = {
    title: '选替身',
    text: `你选了一个纸人。

纸人笑了，从柜台后面走出来，活动了一下手脚。它朝你鞠了一躬，然后推开铺门，走向村外。

你低头看自己的手，发现手指正在变纸。`,
    effects: { sanity: -10, yin: 10 },
    choices: [
        { text: '挣扎', next: 'huimen_exp_village_street', effects: { sanity: -5, yin: 5 } }
    ]
};

StoryData.huimen_exp3_loop_mansion_ask = {
    title: '问路',
    text: `"走对的路，不在地上。"无脸小女孩说，"在你心里。你心里装着谁，路就通向谁。"

她重新转过身，继续梳头。井水从她发梢滴落，在地上汇成一行字："想她。"`,
    effects: { sanity: 3, yin: 1 },
    choices: [
        { text: '想秀兰', next: 'huimen_exp3_loop_path_heart', effects: { sanity: 3, yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_well_smash = {
    title: '破水',
    text: `你捡起一块石头，砸向井水面。

水面碎成无数片，每一片里的你都尖叫着消散。井底传来秀兰的声音："快回来，别再看了。"

你退后几步，水面慢慢恢复平静，但那些倒影已经不见了。`,
    effects: { sanity: 5, yin: -2 },
    choices: [
        { text: '回到石碑', next: 'huimen_exp3_loop_stone', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_path_heart = {
    title: '心路',
    text: `你凭着心中的方向走，不再看路标。

脚下的石板时软时硬，两边的房屋时新时旧，但你没有停。你心里只想着一件事：带秀兰离开。

渐渐地，路变得平坦，天空泛起鱼肚白。`,
    effects: { sanity: 5, yin: -3 },
    choices: [
        { text: '继续走', next: 'huimen_exp3_loop_exit_dawn', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_moon_exit = {
    title: '月路尽头',
    text: `月光箭头指向一条蜿蜒的小路。

小路上没有纸人，没有白灯笼，只有清冷的月光和路边不知名的白花。你走了很久，走到天边泛起微光。

秀兰的身影出现在小路尽头。她说："你找到真正的路了。"`,
    effects: { sanity: 8, yin: -5 },
    choices: [
        { text: '走向她', next: 'huimen_exp3_loop_dawn_together', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_exit_dawn = {
    title: '黎明出口',
    text: `你走到小路的尽头，那里有一座石牌坊。

牌坊上刻着"回门"二字，但字迹已经风化，像是很多年没有人走过了。

你跨过牌坊，身后的山村忽然安静下来。你知道，循环被你打破了。`,
    effects: { sanity: 8, yin: -5 },
    choices: [
        { text: '继续走', ending: 'huimen_exp3_ending_dawn_return', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_dawn_together = {
    title: '同行',
    text: `秀兰走在你身侧，身影越来越淡。

"我不能再往前了。"她说，"但你已经打破循环，可以出去了。"

她把一样东西塞进你手里——是她腕上那根红绳，现在已经断了。

"带着它，别再回来。"`,
    effects: { sanity: 5, yin: -3, addItem: '断红绳' },
    choices: [
        { text: '独自离开', ending: 'huimen_exp3_ending_dawn_return', effects: { yin: 0 } },
        { text: '说你会带她一起', next: 'huimen_exp3_loop_dawn_bones', condition: { hasItem: '秀兰的骨殖' }, effects: { sanity: 5, yin: 0 } }
    ]
};

StoryData.huimen_exp3_loop_dawn_bones = {
    title: '携骨',
    text: `你把背上的骨殖抱到身前。

"我已经带你出来了。"你说，"不管是魂还是骨，我们一起走。"

秀兰的身影在晨光里颤抖。她伸出手，触碰骨殖，然后整个人化作一缕光，融入其中。

骨殖在你怀里变轻，最后只剩一件粉色的嫁衣。`,
    effects: { sanity: 10, yin: -10 },
    choices: [
        { text: '离开山村', ending: 'huimen_exp3_hidden_return_with_xiulan', effects: { yin: 0 } }
    ]
};

StoryData.huimen_exp3_return_mainline = {
    title: '回归主线',
    text: `你感觉到周围的雾气开始变薄。

村口的方向，你隐约看见老宅的轮廓——不是山村周家，而是你最初回到的那座老宅。堂屋里还点着灯，秀兰的红棺还在那里。

你背着秀兰的骨殖，一步一步走回去。`,
    effects: { yin: -5 },
    choices: [
        { text: '回到堂屋', next: 'to_old_house', effects: { yin: 0 } },
        { text: '先把骨殖安葬', next: 'ask_coffin', effects: { yin: 0 } }
    ]
};

// ------------------------------------------------------------
// 将新入口注入现有场景
// ------------------------------------------------------------

StoryData.huimen_exp_village_street.choices.push({
    text: '循着槐花香，走向村街尽头的小院',
    next: 'huimen_exp3_xiulan_memory_childhood_intro',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去周家祖宅看看',
    next: 'huimen_exp3_zhou_mansion_gate',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去王婆家',
    next: 'huimen_exp3_granny_wang_house',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去李木匠铺',
    next: 'huimen_exp3_carpenter_li_shop',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去族长家',
    next: 'huimen_exp3_clan_head_house',
    effects: { yin: 1 }
});
StoryData.huimen_exp_village_street.choices.push({
    text: '去看村街尽头的循环石碑',
    next: 'huimen_exp3_loop_stone',
    condition: { flag: 'huimen_exp3_loop_heart' },
    effects: { yin: 0 }
});

StoryData.huimen_exp_ancestral_hall.choices.push({
    text: '把族谱上划掉的名字补回去',
    next: 'huimen_exp3_zhou_mansion_cellar_name_stele',
    condition: { flag: 'huimen_exp3_knows_seven_women' },
    effects: { sanity: 5, yin: -2 }
});

StoryData.huimen_exp_paper_shop.choices.push({
    text: '去地下室看看',
    next: 'huimen_exp3_paper_shop_basement',
    effects: { yin: 2 }
});

StoryData.huimen_exp_well_night.choices.push({
    text: '下井',
    next: 'huimen_exp3_well_bottom',
    effects: { yin: 3 }
});

StoryData.huimen_exp_mulberry_tree.choices.push({
    text: '用李木匠的锯锯断老槐树',
    next: 'huimen_exp3_carpenter_li_saw_tree',
    condition: { hasItem: '李木匠的锯' },
    effects: { yin: 2 }
});

StoryData.ask_coffin.choices.push({
    text: '你背着秀兰的骨殖，感觉雾气正在散去，似乎可以回到主线',
    next: 'huimen_exp3_return_mainline',
    condition: { hasItem: '秀兰的骨殖' },
    hidden: true,
    effects: { yin: -3 }
});

StoryData.to_old_house.choices.push({
    text: '村街尽头有块石碑，刻着"入村者三，出村者一"',
    next: 'huimen_exp3_loop_stone',
    condition: { yinAbove: 8 },
    hidden: true,
    effects: { yin: 1 }
});

// ------------------------------------------------------------
// 可对话 NPC 选项注入
// ------------------------------------------------------------

StoryData.huimen_exp_village_street.choices.push({
    text: '街角站着个提白灯笼的老人',
    npc: 'lao_zhang',
    npcNode: 'start',
    effects: { yin: 1 },
    custom: true
});

StoryData.huimen_exp_paper_shop.choices.push({
    text: '柜台后还躲着一个年轻学徒',
    npc: 'xiao_fu',
    npcNode: 'start',
    effects: { yin: 1 },
    custom: true
});

StoryData.huimen_exp_temple_gate.choices.push({
    text: '庙门后坐着一个敲木鱼的枯瘦老人',
    npc: 'lao_zhou',
    npcNode: 'start',
    effects: { yin: 1 },
    custom: true
});

StoryData.huimen_exp_well_night.choices.push({
    text: '井沿上蹲着一个浣洗衣裳的女子虚影',
    npc: 'a_huan',
    npcNode: 'start',
    effects: { yin: 1 },
    custom: true
});

// ------------------------------------------------------------
// NPC 数据
// ------------------------------------------------------------

export const NPCs = {
    lao_zhang: {
        name: '老张',
        title: '守夜人',
        dialogue: {
            start: {
                text: `老张提着一盏白灯笼，站在街角的阴影里。他的脸被灯笼照得半明半暗，像一张正在燃烧的纸。

"后生，你是周家回来的吧？我守这村子三十年，活人见少，死人见多。今晚月亮停在东山不落，是秀兰在等人。"`,
                choices: [
                    { text: '这村子为什么变成这样？', next: 'ask_village' },
                    { text: '秀兰在等谁？', next: 'ask_xiulan' },
                    { text: '把半支安神香递给他', next: 'give_lantern', condition: { hasItem: '半支安神香' }, effects: { npcAffinity: 15, removeItem: '半支安神香', addItem: '守夜人的灯笼', setFlag: 'huimen_exp_lao_zhang_blessed' } },
                    { text: '离开', exit: true }
                ]
            },
            ask_village: {
                text: `"这村子有两副脸皮。白天是周家村，青砖灰瓦、炊烟袅袅；晚上是秀兰的村子，纸钱当雪、白灯笼当眼。"

老张压低灯笼，火光里的纸灰纷纷扬扬。

"她哭，村子就阴；她笑，村子就亮。你每走一步，都在她的心口上踩。"`,
                choices: [
                    { text: '怎么才能让她不哭？', next: 'ask_peace' },
                    { text: '回去再问他别的', next: 'start' }
                ]
            },
            ask_xiulan: {
                text: `"秀兰啊……" 老张的声音忽然轻了，像怕惊动什么。

"我守夜时常见她坐在井沿上梳头。她不害人，她就是想让周家的人看见她。可周家的人代代都装瞎，把她当脏水泼。"

他抬头看了你一眼："你是周家后人，也是第一个愿意停下来听我说话的人。"`,
                choices: [
                    { text: '她在等什么？', next: 'ask_peace' },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_peace: {
                text: `"有人陪她坐一夜，有人替她正名，有人给她烧一套像样的嫁妆。秀兰要的不是仪式，是被人当个人看。"

老张把灯笼举高，照亮你脚下的路："你得自己选一条路走到底，半途而废的人，都变成了纸人。"

他顿了顿，又低声说："记住，她最恨的不是周家害了她，是周家忘了她。"`,
                choices: [
                    { text: '我明白了', next: 'start', effects: { npcAffinity: 5, setFlag: 'huimen_exp_lao_zhang_peace_hint' } },
                    { text: '离开', exit: true }
                ]
            },
            give_lantern: {
                text: `你把那半支安神香递过去。老张愣了一下，眼眶里泛起水光——不是泪，是灯油烧化的热气。

"多少年……没人给我上过香了。" 他把白灯笼递给你，"拿着，这灯芯是我的指骨磨的，阴物不敢近。但记住，灯烧完了，我也就该散了。"

灯笼入手冰凉，火光却暖。`,
                choices: [
                    { text: '小心收好灯笼', next: 'start', effects: { npcAffinity: 5 } },
                    { text: '离开', exit: true }
                ]
            }
        }
    },
    xiao_fu: {
        name: '小福',
        title: '扎纸匠徒弟',
        dialogue: {
            start: {
                text: `柜台后面不只坐着那个盲眼老人，还蹲着一个瘦小的年轻人。他手里攥着一把浆糊刷，刷毛上的浆糊已经发黑了。

"别、别看我师父。" 年轻人把身子缩得更小，"他扎了一辈子纸人，眼睛扎瞎了，心也扎空了。我……我只想学个手艺活下去，没想到周家连活人的命都要扎进去。"`,
                choices: [
                    { text: '你师父为什么扎我的脸？', next: 'ask_master' },
                    { text: '纸人替身是什么意思？', next: 'ask_substitute' },
                    { text: '你能帮我什么？', next: 'ask_help' },
                    { text: '离开', exit: true }
                ]
            },
            ask_master: {
                text: `"师父不是坏人。三十年前，他爱的人被周家沉了塘，从那以后他就只会扎纸人。他说每扎一个，就替阿绣受一次罪。"

小福偷偷瞄了老人一眼。

"可周家发现了他的本事，逼他给每个男丁扎替身。你祖父的、你父亲的、你的……都在这铺子里。你看见那个下巴有痣的纸人了吗？那就是你。"`,
                choices: [
                    { text: '怎么才能毁掉替身？', next: 'ask_substitute' },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_substitute: {
                text: `"替身替你们挡灾、替你们成亲、替你们下井。秀兰等的不是周家男人，是和她一样被活埋在纸里的魂。"

小福从柜台下摸出一张黄纸，纸上画着繁复的符纹。

"如果你能找到自己的替身纸人，烧了它，秀兰就骗不了你。可师父……师父不会让你们烧的。那些纸人，是他的命。"

他忽然压低声音："除非，你能带来阿绣的消息。"`,
                choices: [
                    { text: '阿绣是谁？', next: 'ask_axiu' },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_axiu: {
                text: `"阿绣是周家的'不祥女'之一，和秀兰一样。她的坟在河边，碑上没刻名字。"

小福的声音更低了："师父等了她三十年。你要是能让她来见师父一面，师父什么都会答应你。"

他从怀里掏出一块用黄纸包着的碎骨："把这个放在阿绣坟前，她就知道师父还在等她。"`,
                choices: [
                    { text: '我记下了', next: 'start', effects: { npcAffinity: 10, addItem: '小福包的纸骨', setFlag: 'huimen_exp_xiao_fu_axiu_hint' } },
                    { text: '离开', exit: true }
                ]
            },
            ask_help: {
                text: `小福咬着嘴唇，从柜台角落摸出一把小小的浆糊刷。

"这个给你。师父说，浆糊是纸人的血，能粘住魂，也能糊住谎。你要是遇见会说话的脸、会眨眼的纸人，就用这刷子蘸水点它的眉心。"

他把刷子塞到你手里，指尖冰凉。`,
                choices: [
                    { text: '收下浆糊刷', next: 'start', effects: { npcAffinity: 10, addItem: '小福的浆糊刷', setFlag: 'huimen_exp_xiao_fu_helped' } },
                    { text: '离开', exit: true }
                ]
            }
        }
    },
    lao_zhou: {
        name: '老周',
        title: '守庙人',
        dialogue: {
            start: {
                text: `庙门只剩半扇，门后坐着一个枯瘦的老人。他手里敲着一柄小木鱼，木鱼声在空荡荡的庙里回响，像是从井底传上来的。

"周家后生？" 老人没有抬头，"我姓周，可我不认周家。我守着这庙四十年，守着秀兰的一缕魂，也守着周家不敢见光的罪。"`,
                choices: [
                    { text: '庙里为什么有口竖棺？', next: 'ask_coffin' },
                    { text: '秀兰的魂被分成了三份？', next: 'ask_three_souls' },
                    { text: '你为什么不认周家？', next: 'ask_zhou' },
                    { text: '离开', exit: true }
                ]
            },
            ask_coffin: {
                text: `"那棺材里不是尸体，是秀兰的一缕发魂。周家怕她报仇，把她的心、肺、魂分别镇在井、庙、桑三处。"

老周停止敲木鱼，庙里骤然安静。

"竖棺镇魂，是因为人躺着才能安息，站着就只能永远醒着。秀兰在这庙里站了三十年，你说她疼不疼？"`,
                choices: [
                    { text: '怎么解开镇魂？', next: 'ask_release' },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_release: {
                text: `"撕黄符、断红绳、唤真名。可在那之前，你得让她相信你。你要是带着恨去撕符，她会以为你是周家派来灭她的。"

老周把木鱼递给你："敲三下，告诉她你是来送她的，不是来镇她的。"`,
                choices: [
                    { text: '我记住了', next: 'start', effects: { npcAffinity: 5, setFlag: 'huimen_exp_lao_zhou_release_hint' } },
                    { text: '离开', exit: true }
                ]
            },
            ask_three_souls: {
                text: `"井里镇着她的心，庙里镇着她的肺，桑树里镇着她的肾。三魂归一，她才能想起自己是谁。"

老周从怀里掏出一枚小小的铜铃："这是庙里供了几十年的引魂铃。你若是去井边、桑树下，摇一摇，她的魂会跟着你走。"`,
                choices: [
                    { text: '收下铜铃', next: 'start', effects: { npcAffinity: 15, addItem: '老周的引魂铃', setFlag: 'huimen_exp_lao_zhou_bell' } },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_zhou: {
                text: `"周家男人活不过四十，是因为祖上把命都用来抵债了。每一代都有人拿女人的命换自己的寿。"

老周抬起眼，眼眶里一片浑浊："我年轻时也差点成了这种人。后来我在庙前跪了三天三夜，秀兰……秀兰她没害我。她说：'你不是他们。' 我就一直守到现在。"

他把手覆在你的手背上："别做他们。做个人。"`,
                choices: [
                    { text: '我会还她公道', next: 'start', effects: { npcAffinity: 10 } },
                    { text: '离开', exit: true }
                ]
            }
        }
    },
    a_huan: {
        name: '阿浣',
        title: '井边浣衣女',
        dialogue: {
            start: {
                text: `井沿上蹲着一个穿蓝布衫的女子，正用井水洗一件红色的嫁衣。嫁衣上的血色越洗越浓，把井水都染红了一小片。

她抬起头，脸是模糊的，像被水泡过的旧照片。

"你是周家的人？" 她问，"秀兰姐等你们，等得井底都长出了青苔。"`,
                choices: [
                    { text: '你认识秀兰？', next: 'ask_xiulan' },
                    { text: '这口井有什么古怪？', next: 'ask_well' },
                    { text: '你在洗什么？', next: 'ask_wash' },
                    { text: '离开', exit: true }
                ]
            },
            ask_xiulan: {
                text: `"秀兰姐是这世上最好的人。她没出嫁前，常把绣好的帕子分给我们这些穷人。她说等嫁了人，要在院子里种一棵桂花树。"

阿浣的声音像从水底传来："可周家不要桂花树，只要她的八字、她的肚子、她的命。"

她忽然凑近你："你要是想让她记住人的好，就给她带一枝桂花。她闻见桂花香，就会想起自己还是人的时候。"`,
                choices: [
                    { text: '我记下了', next: 'start', effects: { npcAffinity: 10, setFlag: 'huimen_exp_a_huan_osmanthus_hint' } },
                    { text: '离开', exit: true }
                ]
            },
            ask_well: {
                text: `"这口井是周家女人的坟。不只是秀兰，还有柳红、阿绣、云袖……她们的魂都在井底排着队，等一个出口。"

她停下洗衣的手："你下井的时候，会听见很多声音。不要回头，不要答应任何名字。只要叫秀兰，一直叫她的名字。"

阿浣从水里捞起一块皂角递给你："把这个碾碎了撒进井里，水会暖一些。她泡了三十年，太冷了。"`,
                choices: [
                    { text: '收下皂角', next: 'start', effects: { npcAffinity: 15, addItem: '阿浣的皂角', setFlag: 'huimen_exp_a_huan_soap' } },
                    { text: '回去', next: 'start' }
                ]
            },
            ask_wash: {
                text: `"我在洗她的嫁衣。她死的时候穿的就是这件，血浸透了丝线，怎么洗都洗不干净。"

阿浣把嫁衣浸入井水里，水面立刻浮出一张女子的脸，又很快消散。

"你要是愿意，帮我一起洗。洗淡了，她的怨气也会淡一点。"`,
                choices: [
                    { text: '帮她一起洗', next: 'start', effects: { npcAffinity: 10, sanity: -3, yin: -2, setFlag: 'huimen_exp_a_huan_washed' } },
                    { text: '离开', exit: true }
                ]
            }
        }
    }
};

export default { StoryData, Endings, NPCs };
