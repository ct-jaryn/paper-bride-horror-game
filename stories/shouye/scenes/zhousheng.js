/**
 * 《守夜》场景模块：zhousheng
 */

export const scenes = {
    zhousheng_workshop_ruins: {
        title: '纸扎铺',
        text: `你循着登记册上的地址，找到了青石镇东街。

如今的东街已经拆迁大半，只剩几间破败的老铺面。周氏纸扎铺的门脸还在，但招牌早已脱落，只剩两个生锈的铁钩。

你推开虚掩的板门。铺子里空空荡荡，地上积了厚厚的灰。柜台后面，还挂着几件落满虫蛀的纸扎人偶。

在柜台的抽屉里，你找到了一本蓝布封皮的手抄本——是周生的手记。

你翻开。里面记的都是些纸扎的手艺：怎么扎牡丹花瓣，怎么调朱漆，怎么给纸人开脸。

但在手记的最后几页，字迹变得潦草，内容也从手艺变成了絮语：

[faded]"云袖走后第三月。我夜夜去青石河边，想听她唱戏。可河水只有哗哗声。"[/faded]

[faded]"云袖走后第六月。班主说春香班散了。我把他给我的定亲铜镜，托殡仪馆的老馆长代存。我说，等有缘人来了，还给她。"[/faded]

[faded]"云袖走后第九月。我终于想明白了。她在水里等我。我应该去。"[/faded]

最后一页，只有一行字，墨迹晕开，像是被泪水打湿过：

[faded]"青石河，桥头第三柱下。云袖，我来找你了。"[/faded]`,
        effects: { time: 60, sanity: -15, yin: 10, setFlag: 'foundZhouShengDiary', addItem: '周生手记' },
        choices: [
            { text: '去青石桥第三柱看看', next: 'zhousheng_bridge' },
            { text: '去找瞎眼阿婆问周生的事', next: 'paper_shop_visit', effects: { time: 30 } }
        ]
    },

    zhousheng_bridge: {
        title: '桥头',
        text: `你来到青石桥，数到第三根桥柱。

桥柱的石缝里，卡着一截褪色的红绳。你认得——那和你（周生记忆里）剪断的那根，是一样的编法。

你蹲下身，把红绳从石缝里抠出来。绳子已经朽了，一碰就掉渣，但你依稀能看出，绳头打着一个同心结。

[faded]那是定情时打的结。[/faded]

你握着这截红绳，望向桥下的青石河。河水浑浊，看不见底。

你忽然想起手记里的话："青石河，桥头第三柱下。云袖，我来找你了。"

周生就是从这里，跳下去的。

他剪断了云袖腕上的红绳，又在这根桥柱下，把自己交给了同一条河。

[whisper]水能灭火，亦能锁魂。他把这两样，都应验在了自己身上。[/whisper]

你把红绳小心地收好。也许，云袖见到这截红绳，就能明白周生最后的心意。`,
        effects: { sanity: -10, yin: 5, setFlag: 'foundRedRope', addItem: '褪色的同心结红绳' },
        choices: [
            { text: '回殡仪馆，把红绳给云袖看', next: 'zhousheng_rope_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '去县志馆查周生投河的记录', next: 'county_archive', effects: { time: 60 } }
        ]
    },

    zhousheng_rope_to_yunxiu: {
        title: '还绳',
        text: `你回到七号厅，把那截褪色的同心结红绳，放在云袖的枕边。

云袖低头看着那截红绳，身体微微颤抖。

"这是……" 她的声音哽咽，"我腕上的那根。他剪断了它，可他又捡了回来，打成了同心结，留在了桥头。"

她伸出苍白的手，把红绳捧在掌心。红绳在她手里，渐渐泛起一点温润的光，像是被什么捂热了。

"他一直没忘。" 云袖的泪水滴在红绳上，"剪断是为了救我，结成同心，是为了告诉我——他从未想断。"

她抬起头，看着你。

"守夜人，"她说，声音平静而坚定，"我想去青石河。不是怨，不是等。是去见他。我已经唱完了我的戏，他也该从水底上来了。"`,
        effects: { sanity: 20, yin: -30, setFlag: 'yunxiuReadyToMeet' },
        choices: [
            { text: '带她去青石河', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } },
            { text: '先去县志馆确认周生投河的真相', next: 'county_archive', effects: { time: 60 } }
        ]
    },

    // 县志馆深查,

    zhousheng_grave: {
        title: '衣冠冢',
        text: `你在青石镇后山，找到了周生的衣冠冢。

那是镇上老辈人凑钱立的，因为周生尸骨无存，只能立个衣冠冢。坟很小，墓碑上刻着：

[faded]"故友周生之衣冠冢。生卒不详，纸扎一生，义重于山。青石镇同乡公立。"[/faded]

碑前放着一束早已枯成灰的纸花——那是当年镇上人祭奠时放的，和你（周生记忆里）扎的牡丹，一模一样。

你在坟前站定，按规矩鞠了三个躬。

"周生，"你说，"云袖一直在等你。她现在知道了真相，她想去找你。"

风吹过坟头的荒草，发出簌簌的声响，像是一种回应。

你弯腰，把碑前那束枯灰的纸花，换成了你从殡仪馆带来的一朵新扎的纸牡丹。

"这花，"你说，"就当我替云袖，先还你一朵。"

坟前的纸花，无风自动，花瓣轻轻颤了颤。

[whisper]像是有人，接住了它。[/whisper]`,
        effects: { time: 90, sanity: 5, yin: -10, setFlag: 'visitedZhouShengGrave' },
        choices: [
            { text: '回殡仪馆，带云袖来青石河', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } },
            { text: '去找春香班的后人', next: 'chunxiang_descendant_home', effects: { time: 60 } }
        ]
    },

    // 守夜人传承 —— 林叔的往事,

    zhousheng_mirror_vision: {
        title: '周生镜',
        text: `在地下室的深处，你发现了第二面铜镜。

这面镜子藏在铁皮柜的最底层，用红绸包着，绸子上绣着"周生"二字。和云袖那面是一对。

你打开红绸，看向镜面。

这一次，镜子里的画面是连贯的、完整的——像是有人在镜子里演了一出戏，主角是周生。

[whisper]你将看到，周生视角的那一百年。[/whisper]`,
        effects: { sanity: -10, yin: 15 },
        choices: [
            { text: '看下去', next: 'zhousheng_vision_after_fire' }
        ]
    },

    zhousheng_vision_after_fire: {
        title: '火后',
        text: `镜中——

火灾后的第三天。周生被镇上人从废墟里挖出来，腿断了，但还活着。

他醒来的第一句话是："云袖呢？"

没人回答。所有人都知道云袖失踪了，但没人敢告诉他。他们怕他撑不住。

周生在床上躺了三个月。腿接好了，但瘸了。他再也不能像从前那样，扛着纸花篮在戏园子后台跑来跑去了。

第三个月，他能下地的那天，他拄着拐，一瘸一拐地去了青石河边。

他在河边坐了一整天。

天黑的时候，他对着河水说了一句话：

[whisper]"云袖，你听见我吗？我活着。你呢？"[/whisper]

河水没有回答。只有哗哗的水声，像是嘲笑，又像是安抚。`,
        effects: { sanity: -10, yin: 10, setFlag: 'sawZhouAfterFire' },
        choices: [
            { text: '继续看', next: 'zhousheng_vision_river_nights' }
        ]
    },

    zhousheng_vision_river_nights: {
        title: '河边夜',
        text: `镜中的时间快进。

周生开始夜夜去河边。

白天，他在铺子里扎纸花——给云袖扎的，一朵又一朵，扎满了整个铺子。

晚上，他拄着拐，走到青石桥头第三柱，坐在那里，对着河水说话。

有时是说云袖生前的事，有时是念戏词，有时只是静静地坐到天亮。

镇上人都说他疯了。瞎眼阿婆的爷爷——那时的纸扎铺老掌柜——劝他："周生，云袖姑娘不在了。你得往前看。"

周生只是摇头："她没走。她在水里。我能感觉到。"

老掌柜叹气，不再劝了。

[whisper]镜中的画面，一页页翻过，周生的头发一点一点白了。他三十岁，看起来像五十岁。[/whisper]`,
        effects: { sanity: -10, yin: 10, setFlag: 'sawZhouRiverNights' },
        choices: [
            { text: '继续看', next: 'zhousheng_vision_decision' }
        ]
    },

    zhousheng_vision_decision: {
        title: '决意',
        text: `镜中的画面，停在民国二十四年的春天。

那是一个雨夜。周生照常坐在桥头第三柱下。

但这一次，他没有说话。他从怀里掏出一样东西——是那枚铜镜，背面刻着"周生赠云袖"。

他把铜镜放在掌心，对着河水，轻声说：

[whisper]"云袖，我想明白了。水能灭火，亦能锁魂。你的魂，被锁在水里了。我剪断了你的红绳，却没能解开你的锁。"[/whisper]

[whisper]"我解不开。但我可以……陪你一起锁着。"[/whisper]

他从怀里又掏出一封信——就是后来在妆奁里发现的那封。他把信写完，折好，连同铜镜、妆奁、替身纸人，一起托付给了殡仪馆的老馆长。

"待有缘人至，可还于云袖。"他说。

然后，他站起身，最后一次，对着河水笑了笑。

[red]那个笑，和云袖在火场最后看见的笑，一模一样。[/red]`,
        effects: { sanity: -15, yin: 15, setFlag: 'sawZhouDecision' },
        choices: [
            { text: '看他最后的样子', next: 'zhousheng_vision_jump' }
        ]
    },

    zhousheng_vision_jump: {
        title: '入水',
        text: `镜中的最后一幕。

民国二十四年三月初九，子时。

周生站在青石桥头第三柱下。他没有犹豫，没有回头。

他对着河水说了最后一句话——

[whisper]"云袖，我来找你了。"[/whisper]

然后，他纵身一跃。

水花溅起，又迅速被河水吞没。

镜中归于黑暗。

良久，黑暗里浮起一点微光——是河底的一盏灯。周生点亮了它，等着云袖。

[faded]他等了将近一百年。[/faded]

[faded]云袖等了将近一百年。[/faded]

[faded]他们隔着一层水，谁也没等到谁。直到你来了。[/faded]

你从镜面前退开，泪流满面。`,
        effects: { sanity: -20, yin: 10, setFlag: 'sawZhouJump', setFlag: 'knowsCompleteMemory' },
        choices: [
            { text: '上楼，把这些告诉云袖', next: 'memory_tell_yunxiu' }
        ]
    },

    // ============================================================
    // 批次10：青石镇地点探索
    // ============================================================
};
