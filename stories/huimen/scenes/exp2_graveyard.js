/**
 * 《回门》场景模块：exp2_graveyard
 */

export const scenes = {
    huimen_exp2_graveyard: {
        title: '祖坟地',
        text: `你来到村后的祖坟地。

坟头密密麻麻，像一片起伏的海。每一座坟前都插着白幡，幡上没有字，只有墨点画成的眼睛。

你走过一座座坟，发现男丁的坟都很高大，女子的坟却只有一个小小的土包，有些甚至连碑都没有。

[whisper]"她们连死后都没有名字。"[/whisper]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"寻找秀兰的坟","next":"huimen_exp2_graveyard_search","effects":{"yin":1}},{"text":"在一座无名坟前停下","next":"huimen_exp2_unknown_grave","effects":{"yin":1}},{"text":"查看最大的那座祖坟","next":"huimen_exp2_ancestor_grave","effects":{"yin":2}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_graveyard_search: {
        title: '寻坟',
        text: `你在坟地里寻找秀兰的坟。

没有碑，只有一块扁平的石头。石头上放着一束枯萎的桂花，和一双小小的红绣鞋。

你蹲下身，发现石头下面压着一张纸：

[faded]"秀兰之骨，分埋三处。此处仅有一缕头发。"[/faded]

[red]原来连她的坟，都是不完整的。[/red]`,
        effects: {"sanity":-8,"yin":3,"addItem":"秀兰坟前的桂花"},
        choices: [{"text":"把桂花献给井里的秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"秀兰坟前的桂花"}},{"text":"在坟前磕头","next":"huimen_exp2_graveyard_bow","effects":{"sanity":5,"yin":-5}},{"text":"继续寻找其他骨头","next":"huimen_exp2_graveyard_dig","effects":{"yin":2}}],
    }
,
    huimen_exp2_graveyard_bow: {
        title: '坟前祭拜',
        text: `你在秀兰的坟前磕了三个头。

"秀兰，" 你说，"我来看你了。不是作为周家的后人，而是作为一个人。"

坟头的石头忽然裂了一道缝，缝里飘出一缕青烟。青烟在空中凝成一个女子的身形，朝你福了一福。

"谢谢你。" 她说，"三十年了，第一次有人给我磕头。"`,
        effects: {"sanity":10,"yin":-8,"setFlag":"huimen_exp2_bowed_at_grave"},
        choices: [{"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}}],
    }
,
    huimen_exp2_unknown_grave: {
        title: '无名坟',
        text: `你停在一座小小的无名坟前。

坟前没有供品，只有一根枯萎的野菊。你蹲下身，轻轻把野菊扶正。

"你是谁？" 你问。

坟里传来一个微弱的声音："我叫阿绣。三十年前被沉塘。没有人记得我。"

[red]阿绣。扎纸匠爱过的那个女子。[/red]`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"告诉她扎纸匠还在等她","next":"huimen_exp2_unknown_grave_release","effects":{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_told_axiu_about_craftsman"}},{"text":"在坟前再插一根野菊","next":"huimen_exp2_graveyard","effects":{"sanity":3,"yin":-3}}],
    }
,
    huimen_exp2_unknown_grave_release: {
        title: '转告',
        text: `你对着坟说："阿绣，扎纸匠一直在等你。他扎了三十年纸人，每一个都当是给你扎的替身。"

坟里沉默了很久。然后，一个女子的身影从土里浮出来。她长得清秀，眉眼间带着愁苦。

"他真的……还在等我？" 她问。

"是的。" 你说，"你可以去找他了。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_axiu_released"},
        choices: [{"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}},{"text":"去纸扎铺告诉老人","next":"huimen_exp_paper_shop","condition":{"flag":"huimen_exp2_axiu_released"},"effects":{"yin":-3}}],
    }
,
    huimen_exp2_ancestor_grave: {
        title: '祖坟',
        text: `你来到最大的那座祖坟前。

坟前立着一块高大的石碑，碑上刻着"周氏列祖列宗之墓"。碑前的香炉里还冒着青烟，像是刚有人祭拜过。

你绕到碑后，发现背面刻着许多小字，都是女子的名字。秀兰、柳红、阿绣……每一个名字后面都刻着"供养"二字。

[red]她们不是被供奉，是被献祭。[/red]`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"用石头凿掉\"供养\"二字","next":"huimen_exp2_ancestor_grave_chisel","effects":{"sanity":-5,"yin":3}},{"text":"在碑前烧纸钱","next":"huimen_exp2_ancestor_grave_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":5}},{"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}}],
    }
,
    huimen_exp2_ancestor_grave_chisel: {
        title: '凿碑',
        text: `你捡起一块尖锐的石头，开始凿碑上的"供养"二字。

每凿一下，石碑就颤抖一下，像是什么东西在碑里尖叫。你不管，继续凿。把"供养"凿平后，你在每个名字后面刻上"安息"。

[red]安息。她们本该安息。[/red]

刻完最后一个字，石碑"咔嚓"一声裂开，露出里面空空如也。`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp2_chiseled_ancestor_grave"},
        choices: [{"text":"决定留在坟地守墓","ending":"huimen_exp2_ending_graveyard_keeper","effects":{"yin":-5}},{"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}}],
    }
,
    huimen_exp2_ancestor_grave_burn: {
        title: '祖坟焚纸',
        text: `你在秀兰的坟前点燃纸钱。

火焰不是红色的，而是淡淡的金色。纸灰被风吹起，在空中旋转，像一只只黑色的蝴蝶。

坟头的石头开始发热，"周氏不祥女"四个字在热里扭曲、焦黑，最后化为灰烬。

[red]你烧了周家给秀兰贴的标签。[/red]

灰烬落在地上，拼成一行新字："周氏秀兰之墓。"`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_burned_at_ancestor_grave"},
        choices: [{"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}}],
    }
,
    huimen_exp2_graveyard_dig: {
        title: '挖坟',
        text: `你用手挖开秀兰坟边的泥土。

土很松，像是被人挖过很多次。你挖了没多久，就碰到一个陶罐。陶罐里装着一截指骨，指骨上套着一枚生锈的铜戒指。

[red]那是秀兰的戒指。[/red]

你把戒指取出来，感到一阵刺骨的寒意。`,
        effects: {"sanity":-8,"yin":3,"addItem":"秀兰的铜戒指"},
        choices: [{"text":"把戒指还给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的铜戒指","setFlag":"huimen_exp2_returned_copper_ring"}},{"text":"收好","next":"huimen_exp2_graveyard","effects":{"yin":1}}],
    }
};
