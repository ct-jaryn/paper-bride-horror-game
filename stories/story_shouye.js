/**
 * 《守夜》—— 阴阳簿 · 第二卷
 *
 * 世界观：你是一名殡仪馆守灵人。
 * 这一夜，七号厅的尸体不愿意闭眼。
 */

export const StoryData = {
    prologue: {
        title: '守夜开始',
        text: `午夜十二点，殡仪馆的灯全灭了。

不是停电，是规矩。守夜人林叔说过："过了子时，厅里的灯不能开太亮。有些东西，见光会醒。"

你叫周遥，县殡仪馆最年轻的守灵人。今晚轮到你值守七号厅。

七号厅里躺着一具无名女尸，三天前在河边被发现。她穿着一身大红戏服，脸上化着浓妆，双手交叠放在胸前，指甲缝里全是河泥。

她的手腕露在戏服袖口外。你很确定入殓时那里什么都没有，可现在却有一圈浅浅的红印，像是曾经系过什么细细的红绳，又被人生生解了下来。

法医说她泡在水里至少一个月了，可她的妆一点没花。

你坐在厅外的塑料椅上，百无聊赖地刷着手机。忽然，七号厅里传来一声轻响。

[whisper]咔。[/whisper]

像是……有人把眼皮撑开了。`,
        effects: {
            sanity: -5,
            yin: 5
        },
        choices: [
            {
                text: '开灯进去查看',
                next: 'enter_with_light'
            },
            {
                text: '拿手电筒悄悄推门',
                next: 'enter_with_flashlight'
            },
            {
                text: '按规矩先敲三下门',
                next: 'knock_first',
                effects: { yin: -5 }
            },
            {
                text: '屏住呼吸，听见停尸间深处传来低语',
                next: 'morgue_whisper',
                condition: { yinAbove: 15 },
                hidden: true,
                effects: { sanity: -5, yin: 10 }
            }
        ]
    },

    // 停尸间低语（新增隐藏分支）
    morgue_whisper: {
        title: '停尸间低语',
        text: `你屏住呼吸，把耳朵贴近七号厅的门板。

门后传来极细极细的声音，像是从很远的地方传来，又像是从尸体口里直接吐出来的：

[whisper]"井……下……有……人……"[/whisper]

[whisper]"别……喝……交……杯……酒……"[/whisper]

你猛地后退一步。这声音和停尸间里的女尸毫无关系，却又像是从她身上某个更深处发出来的。

你忽然想起，云袖是被烧死在戏台上的。可她的尸体却在河边被发现，泡在水里整整一个月。

[red]是谁把她从戏台搬到了河里？[/red]

低语声停了。门缝里缓缓渗出一缕黑色的长发，像是有生命一样，在门板上画了一个字：

[faded]"周"[/faded]

那个字你不久前才在另一座山村见过。周家的债，原来也渗进了这座殡仪馆。`,
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: 'heard_paper_whisper'
        },
        choices: [
            {
                text: '推门进去查看',
                next: 'enter_with_flashlight'
            },
            {
                text: '先敲三下门，按规矩来',
                next: 'knock_first',
                effects: { yin: -5 }
            }
        ]
    },

    enter_with_light: {
        title: '开灯入厅',
        text: `你按亮顶灯，推开七号厅的门。

女尸还躺在灵床上，盖着白布。你走近，想确认刚才的声响。

白布下，她的眼睛是睁开的。

[red]眼白浑浊，瞳孔放大，正直直地盯着天花板。[/red]

你倒吸一口凉气。入殓时你明明看到她闭着眼睛。

更恐怖的是，她的嘴角似乎在上扬。

你伸手想去合上她的眼皮，指尖刚碰到她的皮肤——

[scream]她的头猛地转向你。[/scream]

厅里的灯开始闪烁。`,
        effects: {
            sanity: -25,
            yin: 20,
            visual: 'flicker'
        },
        choices: [
            {
                text: '继续尝试合上眼睛',
                next: 'close_eyes_force',
                effects: { sanity: -10 }
            },
            {
                text: '后退，问她是何人',
                next: 'ask_her_name'
            },
            {
                text: '逃出七号厅',
                next: 'flee_hall7'
            }
        ]
    },

    enter_with_flashlight: {
        title: '手电微光',
        text: `你打着手电筒，轻轻推开门。

光束扫过灵床，白布下的人形一动不动。

你松了口气，准备退出去。就在这时，手电筒的光照到了女尸的脸上。

[red]她的眼睛睁着。[/red]

不，不只是睁着。她的眼珠在动，慢慢地、慢慢地转向门口——转向你站的位置。

你捂住嘴，不敢出声。

她的嘴唇翕动，没有发出声音，但你看懂了口型：

[whisper]"帮……我……"[/whisper]`,
        effects: {
            sanity: -15,
            yin: 10
        },
        choices: [
            {
                text: '轻声问她需要什么帮助',
                next: 'ask_her_name'
            },
            {
                text: '关上灯，假装没看见',
                next: 'ignore_her',
                effects: { yin: 10 }
            },
            {
                text: '立刻退出房间锁门',
                next: 'flee_hall7'
            },
            {
                text: '你保持清醒，注意到她眼角有一滴没化开的胭脂泪',
                next: 'notice_tear',
                condition: { sanityAbove: 80 },
                hidden: true,
                effects: { sanity: -5 }
            }
        ]
    },

    // 泪痕（新增分支）
    notice_tear: {
        title: '胭脂泪',
        text: `你强迫自己冷静，不让恐惧淹没理智。

手电光重新扫过女尸的脸。她的眼睛还睁着，但这一次，你注意到她眼角有一滴暗红色的痕迹——不是血，是化了却没有干的胭脂。

戏子的妆，哭了才会花。

"你在哭？" 你轻声问。

女尸的眼珠动了动，转向你。她的嘴唇翕动，这一次你听见了一丝极轻的声音：

[whisper]"戏台……塌了……"[/whisper]

那不是威胁，是哀求。

你忽然明白，她不是来害人的。她只是一缕执念，被困在死亡的地方，反复重演最后一场戏。`,
        effects: {
            sanity: -5,
            yin: 5,
            setFlag: 'yunxiuTearSeen'
        },
        choices: [
            {
                text: '问她需要什么帮助',
                next: 'ask_her_name'
            },
            {
                text: '用手帕替她擦去泪痕',
                next: 'wipe_tear',
                effects: { sanity: 5, yin: -5 }
            }
        ]
    },

    // 擦去泪痕（新增分支）
    wipe_tear: {
        title: '拭泪',
        text: `你掏出随身携带的纸巾，轻轻按在她眼角。

纸巾触到胭脂的瞬间，女尸的眼睛缓缓闭上了。她的嘴角不再上扬，而是恢复了入殓时的平静。

你听见一声似有似无的叹息，像是从很远的地方传来。

"谢谢你。" 一个女子的声音说，"很久……没有人对我这么好过。"

你退后一步，手电光照向门口。门还是关着的，但门板上多了一行水渍写成的字：

[faded]"还我戏台，我便归去。"[/faded]

你收起纸巾，那上面沾着的胭脂，在黑暗中泛着淡淡的桂花香。`,
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: 'yunxiuComforted'
        },
        choices: [
            {
                text: '答应帮她完成心愿',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '去档案室查她的资料',
                next: 'search_archives'
            }
        ]
    },

    knock_first: {
        title: '敲门',
        text: `你按照老规矩，在门上敲了三下。

[whisper]咚。咚。咚。[/whisper]

每一声都像敲在水面上，声音传得很远，又很快消散。

然后你才推门进去，没有开灯，只借着走廊的幽光往里看。

女尸还躺在那里，眼睛闭着，双手规规矩矩地放在胸前。和入殓时一模一样。

但你注意到，她脚边的地面上，有一小片水渍。

水渍的形状像是一个脚印。

[red]朝着门口的方向。[/red]`,
        effects: {
            yin: 5,
            setFlag: 'followedRitual'
        },
        choices: [
            {
                text: '查看那片水渍',
                next: 'check_water_stain'
            },
            {
                text: '离开，继续守夜',
                next: 'continue_watch'
            }
        ]
    },

    close_eyes_force: {
        title: '强行合眼',
        text: `你颤抖着手，去合上她的眼皮。

手指刚碰到，她的眼皮就自动合上了。你刚松一口气，她的眼睛又睁开了。

再合上，再睁开。

再合上，再睁开。

反复三次之后，你听见她喉咙里发出"咯咯"的声音，像是有水要从里面涌出来。

[red]她的嘴突然张开，一股黑色的河水喷在你脸上。[/red]

河水腥臭刺骨，还带着水草的腥味。你踉跄后退，撞翻了香炉。

香灰撒了一地。`,
        effects: {
            sanity: -30,
            yin: 25,
            visual: 'blood'
        },
        choices: [
            {
                text: '擦干净脸，重新点香',
                next: 'light_incense'
            },
            {
                text: '咒骂她，让她安息',
                next: 'curse_corpse',
                effects: { sanity: -10 }
            },
            {
                text: '你神志恍惚，把她看成了还在喘气的人',
                next: 'corpse_as_alive',
                condition: { sanityBelow: 30 },
                hidden: true,
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    // 生人幻影（新增分支）
    corpse_as_alive: {
        title: '生人幻影',
        text: `你的理智像一根绷得太紧的弦，"啪"地一声断了。

眼前的女尸不再是尸体。她的胸口在起伏，她的眼皮在颤动，她的嘴唇微微张开，像是在呼吸。

"你醒了？" 你听见自己说，"你别怕，我是守夜的。"

女尸——不，那个年轻的女子——缓缓坐起来。她的戏服上还有烧焦的痕迹，但她的脸是温暖的，带着一点羞涩的笑。

"我唱得好吗？" 她问，"他们说，只要我唱完，就能回家。"

"你唱得很好。" 你说。

她笑了，伸手握住你的手。那只手是冰凉的，但你感觉不到。你的大脑已经替你把她改写成了一个活人。

"那你能送我回家吗？" 她问，"我想回青石镇。"

你点点头，任由她牵着你的手，向门外走去。

[red]走廊的尽头，不是出口，而是一座燃烧的戏台。[/red]`,
        effects: {
            sanity: -20,
            yin: 20
        },
        choices: [
            {
                text: '跟着她走向戏台',
                next: 'follow_her',
                ending: 'duetWithGhost'
            },
            {
                text: '猛掐自己大腿，强迫自己清醒',
                next: 'light_incense',
                effects: { sanity: -10 }
            }
        ]
    },

    ask_her_name: {
        title: '云袖',
        text: `你壮着胆子问："你是谁？有什么未了的心愿？"

女尸没有回答。但她的右手缓缓抬起，指向自己的戏服腰带。

你犹豫了一下，轻轻解开她的腰带。里面缝着一张泛黄的照片和一张纸条。

照片上是一个戏班子的合影。十几个演员站在戏台前，中间站着一个穿红戏服的年轻女子，笑得很甜。

照片边角有些模糊，但你隐约看见戏台后方的青石河畔，站着一个穿红衣裳的背影。那背影面向河水，长发垂到腰际，仿佛正在低头唱着什么。

你不确定那是照片上的污渍，还是真有人站在那里。

纸条上写着一行字：

[faded]"民国二十三年，春香班于青石镇演出《牡丹亭》，旦角柳梦梅者，名唤云袖。演至《幽媾》一出，戏台坍塌，云袖葬身火海。此后每逢雨夜，戏台自鸣锣鼓。"[/faded]

[whisper]原来她不是无名女尸。[/whisper]

她叫云袖，是一个死了近百年的戏子。`,
        effects: {
            sanity: -10,
            setFlag: 'knowsName'
        },
        choices: [
            {
                text: '搜索档案，查云袖的资料',
                next: 'search_archives'
            },
            {
                text: '把照片和纸条放回原处',
                next: 'return_items',
                effects: { yin: 5 }
            },
            {
                text: '把照片烧给她',
                next: 'burn_photo',
                effects: { yin: -10 }
            },
            {
                text: '你摸到口袋里的银钗，轻轻放在她眉心',
                next: 'silver_hairpin_memory',
                condition: { hasItem: '云袖的银钗' },
                hidden: true,
                effects: { sanity: -5, yin: -10 }
            }
        ]
    },

    // 银钗唤忆（新增分支）
    silver_hairpin_memory: {
        title: '银钗唤忆',
        text: `你摸出口袋里那枚银钗。钗身上刻着两个小字：[faded]"云袖"[/faded]。

你轻轻把银钗放在女尸的眉心。

刹那间，七号厅里的空气像是凝固了。女尸的眼睛猛地睁大，但这一次，那里面不是空洞，而是复杂的情绪——惊讶、悲伤、还有一丝久违的温柔。

"这是我的……" 她的声音不再嘶哑，变得清亮，"民国二十三年，班主把它赏给我，说我唱得最好。"

她的目光移向你，像是第一次真正"看见"你。

"你从哪里得到它的？"

"青石镇。" 你说，"旧戏台的废墟里。"

她闭上眼睛，一滴红色的泪从眼角滑落，滴在银钗上。

"原来，真的有人记得我。" 她说，"不只记得我的死，还记得我的戏。"`,
        effects: {
            sanity: 5,
            yin: -20,
            setFlag: 'yunxiuMemoryRestored'
        },
        choices: [
            {
                text: '问她想唱完哪一出',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '把银钗留给她，退到一旁',
                next: 'return_items',
                effects: { yin: -5 }
            }
        ]
    },

    ignore_her: {
        text: `你关掉手电筒，退出门外，轻轻带上门。

走廊里安静得可怕。你坐回塑料椅，假装什么都没发生。

但你知道，门后的她在看着你。

凌晨一点，走廊的灯开始闪烁。你听见七号厅里传来细微的声响——

[whisper]沙沙。沙沙。[/whisper]

像是有人在用指甲刮门。

你戴上耳机，把音乐调到最大声。

可音乐里混进了一个女人的唱腔，凄婉悠长：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]`,
        effects: {
            sanity: -20,
            yin: 20,
            time: 60
        },
        choices: [
            {
                text: '摘下耳机，回去处理',
                next: 'enter_with_flashlight'
            },
            {
                text: '继续装没听见',
                next: 'keep_ignoring',
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    flee_hall7: {
        text: `你转身就跑。

走廊好像变得很长，怎么跑都跑不到尽头。身后的门"吱呀"一声开了，然后是一串湿漉漉的脚步声。

[red]啪嗒。啪嗒。啪嗒。[/red]

你不敢回头，拼命冲向值班室。

终于，你撞开值班室的门，反手锁上。背靠着门，大口喘气。

门外安静了。

你慢慢转过身。值班室的玻璃窗外，贴着一张苍白的脸。

她的戏服还在滴水。`,
        effects: {
            sanity: -30,
            yin: 25,
            visual: 'shake'
        },
        choices: [
            {
                text: '用符咒封窗',
                next: 'seal_window',
                condition: { hasItem: '护身符' }
            },
            {
                text: '打电话求救',
                next: 'call_for_help'
            },
            {
                text: '拉下窗帘装看不见',
                next: 'hide_behind_curtain'
            }
        ]
    },

    check_water_stain: {
        text: `你蹲下身，用手电筒照着那片水渍。

水渍不是普通的脚印。它是由无数细小的文字组成的，每个字都只有蚂蚁大小：

[faded]"还我戏台。"[/faded]

四个字，密密麻麻地重复了千百遍。

你抬头看向灵床。女尸还闭着眼睛，但她的嘴唇在动，无声地重复着同一句话：

[whisper]"还我戏台。还我戏台。还我戏台。"[/whisper]

你突然明白了。她不是来害你的。她想回到戏台，唱完那出没唱完的戏。`,
        effects: {
            sanity: -5,
            setFlag: 'knowsDesire'
        },
        choices: [
            {
                text: '答应帮她完成心愿',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '这是别人的事，与你无关',
                next: 'not_my_problem',
                effects: { yin: 15 }
            }
        ]
    },

    continue_watch: {
        title: '继续守夜',
        text: `你退回走廊，继续守夜。

时间一分一秒过去。凌晨两点，殡仪馆的电话响了。

你接起来，里面传来一阵戏曲唱腔，然后是一个女人的声音：

"七号厅的灯……太亮了。"

你抬头看向七号厅。门缝里没有光。

可走廊尽头的灯，一盏一盏地灭了。`,
        effects: {
            sanity: -15,
            yin: 15,
            visual: 'flicker'
        },
        choices: [
            {
                text: '冲进七号厅',
                next: 'enter_with_flashlight'
            },
            {
                text: '躲在值班室',
                next: 'hide_in_duty_room'
            },
            {
                text: '你曾听见过纸人低语，那曲调里有相似的绝望',
                next: 'paper_whisper_tune',
                condition: { flag: 'heard_paper_whisper' },
                hidden: true,
                effects: { sanity: -5 }
            }
        ]
    },

    // 纸人低语曲调（新增分支）
    paper_whisper_tune: {
        title: '异曲同工',
        text: `电话里的唱腔让你愣了一下。

那调子不是《牡丹亭》，而是另一段更凄凉的旋律。你曾在某个山村的老槐树下听见过——纸扎人的身体里透出来的、细若游丝的低语。

[whisper]"井……下……有……人……"[/whisper]

那个声音和电话里的唱腔重叠在一起，像是一根红绳，把两个不同的亡魂串了起来。

你猛然意识到：云袖不是孤立的存在。她的死、她的怨、她的戏台，都和某个叫"周"的家族有关。

电话那头的女子似乎也听见了什么，唱腔戛然而止。良久，她轻声说：

"你也听过？"

[red]你也听过。[/red]

两个世界的回声，在这个午夜短暂地交汇。`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'yunxiuLinkedToPaper'
        },
        choices: [
            {
                text: '告诉她你理解她的执念',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '冲进七号厅找她',
                next: 'enter_with_flashlight'
            }
        ]
    },

    light_incense: {
        text: `你擦干净脸上的黑水，重新点燃三炷香，插在香炉里。

香烟袅袅升起，在空中形成一个奇怪的形状——像是一个人形，正在翩翩起舞。

女尸的眼睛缓缓闭上了。她的表情也变得安详。

你长舒一口气，以为事情结束了。

但三炷香烧到一半，同时熄灭了。

[red]香从中间断开，像是被人硬生生掐断的。[/red]

女尸的眼睛又睁开了。这一次，她的眼神里没有怨恨，只有哀求。

[whisper]"戏台……"[/whisper]`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'knowsDesire'
        },
        choices: [
            {
                text: '答应帮她',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '再点一次香，强行超度',
                next: 'force_exorcise',
                effects: { yin: 10 }
            }
        ]
    },

    curse_corpse: {
        text: `你怒了："你到底想怎样？死了就好好死，别折腾人！"

话音刚落，七号厅的温度骤降。你呼出的气变成了白雾。

女尸直挺挺地坐了起来。

她的脖子发出"咔咔"的响声，头慢慢转向你。戏服上的红绸在无风中飘动。

"你……不敬亡者……" 她的声音像是从井底传来，"那就……替我去唱吧……"`,
        effects: {
            sanity: -40,
            yin: 30,
            visual: 'shake'
        },
        choices: [
            {
                text: '跪地求饶',
                next: 'beg_mercy'
            },
            {
                text: '逃跑',
                next: 'flee_hall7'
            }
        ]
    },

    search_archives: {
        title: '旧档案',
        text: `你跑到档案室，翻找旧报纸。

在一堆发黄的报纸中，你找到了民国二十三年的一则新闻：

[faded]"青石镇戏台昨夜坍塌，春香班名伶云袖不幸遇难。据称，坍塌前云袖坚持要唱完《牡丹亭》最后一折，拒绝离台。班主称，云袖生前最大的心愿，是能以杜丽娘之身死在戏台上。"[/faded]

报纸旁边还有一张照片：戏台坍塌后，废墟中露出一只穿红绣鞋的女足。

你把报纸翻过来，背面右下角有一则小小的广告，用木刻字印着：

[faded]"周氏纸扎铺，青石镇东街。专扎冥婚喜服、纸人纸马，手艺精湛，百年老店。"[/faded]

你不明白为什么一则纸扎铺的广告会和云袖的新闻出现在同一张报纸上。也许，只是巧合。

云袖等了快一百年，只是想唱完那出戏。`,
        effects: {
            sanity: -5,
            setFlag: 'knowsFullStory'
        },
        choices: [
            {
                text: '回七号厅，告诉她你知道了',
                next: 'promise_help'
            },
            {
                text: '去旧戏台遗址',
                next: 'go_old_stage',
                effects: { time: 60 }
            }
        ]
    },

    return_items: {
        text: `你把照片和纸条重新塞回她的腰带，恭敬地鞠了三个躬。

"我不知道你想要什么，但我会尊重你。"

女尸的眼睛缓缓闭上了。她的嘴角似乎微微上扬，像是在笑。

你退出七号厅，轻轻带上门。

这一夜，七号厅再没传出任何声响。

天亮了，林叔来接班。他看着七号厅，点点头："你是个好守灵人。"`,
        ending: 'peacefulRest'
    },

    burn_photo: {
        text: `你用打火机点燃照片，放在女尸脚边的铁盆里。

火苗舔上照片，云袖的笑容在火焰中扭曲。

"我给你烧了照片，" 你说，"你可以安心走了。"

照片烧完，铁盆里只剩下一堆灰。灰里突然伸出一只苍白的手，抓住你的手腕。

女尸的眼睛睁得极大，眼眶里流出黑色的泪水：

[scream]"那不是我要的！"[/scream]

你被拖向灵床。`,
        effects: {
            sanity: -35,
            yin: 30
        },
        choices: [
            {
                text: '挣扎',
                next: 'struggle_dragged',
                ending: 'drownedOnLand'
            }
        ]
    },

    keep_ignoring: {
        text: `你继续装没听见。

但那唱腔越来越大，越来越近。最后，你感觉有人在你耳边唱：

[whisper]"则为你如花美眷，似水流年……"[/whisper]

你猛地摘下耳机。

七号厅的门敞开着。女尸站在门口，湿漉漉的戏服还在滴水。

她朝你伸出手。

"来……陪我……唱完……"`,
        effects: {
            sanity: -30,
            yin: 25
        },
        choices: [
            {
                text: '跟她走',
                next: 'follow_her',
                ending: 'duetWithGhost'
            },
            {
                text: '反抗',
                next: 'struggle_dragged',
                ending: 'drownedOnLand'
            }
        ]
    },

    seal_window: {
        text: `你把护身符贴在玻璃窗上。

窗外的女尸发出一声尖啸，向后退去。她的身影在走廊的灯光下渐渐淡去，最后只剩下一滩水渍。

你靠着墙滑坐在地上，浑身冷汗。

天快亮时，你听见七号厅里传来一阵轻微的锣鼓声，然后是云袖的唱腔，从高昂渐渐转为低沉，最后消失。

你打开门去看。女尸安静地躺着，眼睛闭着，嘴角带着一丝笑意。

她终于唱完了。`,
        effects: {
            sanity: 10,
            yin: -20
        },
        ending: 'sealedNight'
    },

    call_for_help: {
        text: `你颤抖着拨通林叔的电话。

"林叔，七号厅的尸体……"

"我知道。" 林叔的声音很平静，"她每年这个时候都会醒。你做了什么？"

"我……我没做什么。"

"你没敲门就进去了？" 林叔叹了口气，"年轻人，不守规矩是要付出代价的。"

电话断了。

窗外的女尸笑了。她的脸贴着玻璃，越贴越近，越贴越近——

[red]玻璃碎了。[/red]`,
        effects: {
            sanity: -40,
            yin: 30
        },
        ending: 'glassShatter'
    },

    hide_behind_curtain: {
        text: `你拉下窗帘，缩在值班室角落，浑身发抖。

你不知道她在外面站了多久。也许几分钟，也许几小时。

你不敢看表，不敢出声，甚至不敢呼吸。

终于，天亮了。你鼓起勇气拉开窗帘。

窗外什么都没有。只有玻璃上留着一个人形的湿印。

你打开值班室的门，准备离开。一低头，看见门缝下塞着一张湿透的戏票。

戏票上写着：

[faded]"今晚子时，青石戏台，《牡丹亭》。特邀：周遥。"[/faded]`,
        ending: 'invitedToShow'
    },

    promise_help: {
        title: '最后一折',
        text: `你跪坐在灵床边，轻声说："云袖，我知道你想唱完《牡丹亭》。我帮你。"

女尸的眼睛里流出一滴红色的泪。那不是血，是胭脂化了。

她的嘴唇翕动："戏台……塌了……没有戏台……"

"那我给你搭一个。" 你说。

你找来殡仪馆里的白布、花圈、纸扎，在七号厅中央搭了一个简易的戏台。你又打开手机，找到《牡丹亭·惊梦》的唱段，放给她听。

女尸缓缓坐起，对着那简陋的戏台，开始吟唱。

她的声音开始时沙哑难听，但越唱越清亮，越唱越婉转。到最后，七号厅里仿佛坐满了观众，掌声雷动。

一曲终了，她朝你福了一福，躺回灵床。

[red]这一次，她的眼睛再也没有睁开。[/red]`,
        effects: {
            sanity: 10,
            yin: -30
        },
        choices: [
            {
                text: '为她搭起简易戏台',
                next: 'yunxiu_final_stage'
            },
            {
                text: '你想起银钗唤起的记忆，问她的心愿是否不止于唱完一出戏',
                next: 'yunxiu_true_wish',
                condition: { flag: 'yunxiuMemoryRestored' },
                hidden: true,
                effects: { sanity: -5 }
            }
        ]
    },

    // 云袖终章前置（新增隐藏分支）
    yunxiu_true_wish: {
        title: '未了之愿',
        text: `你蹲下身，和云袖平视。

"你想唱完《牡丹亭》，我知道。" 你说，"但你的心愿不止这个，对吗？"

云袖沉默了。她的身影在七号厅昏暗的灯光下显得有些透明。

"我想被人记住。" 她终于说，"不是作为那个死在戏台上的鬼，而是作为唱过《牡丹亭》的云袖。"

你点点头："我会记住你。不只是我，我还会把你的名字、春香班的名字、那场大火的真相，都写下来。"

"写下来？"

"写下来。" 你说，"让以后每一个来守夜的人，都知道曾有一个叫云袖的女子，唱得很好。"

云袖笑了。那是你第一次看见她笑，不是戏里的笑，是一个真正释然的笑。

"那我可以安心走了。" 她说。`,
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: 'yunxiuWishComplete'
        },
        choices: [
            {
                text: '送她最后一程',
                next: 'yunxiu_final_stage'
            }
        ]
    },

    yunxiu_final_stage: {
        title: '牡丹亭终章',
        text: `你找来殡仪馆里能找到的一切：白布、花圈、纸扎、还有手机里的唱段。

你在七号厅中央搭起一座简陋的戏台。云袖缓缓飘到台上，对着你，唱完了《牡丹亭》的最后一折。

唱到"则为你如花美眷，似水流年"时，她的声音不再凄厉，而是带着一种从未有过的温柔。

曲终，她朝你深深一福。

"谢谢你。" 她说，"这一折，我等了近百年。"

她的身影渐渐变淡，最后化作点点红光，消散在空气中。

七号厅里，只剩下那枚银钗轻轻落在戏台上，发出一声清脆的响声。`,
        effects: {
            sanity: 15,
            yin: -30
        },
        choices: [
            {
                text: '拾起银钗，送她最后一程',
                next: '',
                ending: 'peony_pavilion_final',
                condition: { flag: 'yunxiuWishComplete' },
                hidden: true
            },
            {
                text: '目送她离去',
                next: '',
                ending: 'finalCurtain'
            }
        ]
    },

    not_my_problem: {
        text: `你摇摇头："你的戏台不在我这里。我只是个守夜的。"

女尸的眼睛里闪过一丝怨毒。

"那……你就替我……守着吧……"

她的身体开始融化，像被水泡烂的纸。黑水从灵床上流到地上，流到你的脚下。

你想跑，但双脚被黑水粘住。黑水漫过你的脚踝、膝盖、腰……

你拼命挣扎，但越挣扎沉得越快。

最后一刻，你听见林叔在门外叹气："都说了，不守规矩要付出代价。"`,
        effects: {
            sanity: -50,
            yin: 40
        },
        ending: 'drownedOnLand'
    },

    force_exorcise: {
        text: `你点燃一把香，围着灵床走动，口中念诵在网上查到的往生咒。

女尸开始剧烈颤抖。她的嘴张得极大，黑色的河水不断涌出。

"住手……" 她的声音凄厉，"你不懂……你不该这样……"

你不管不顾，继续念咒。

突然，所有的香同时熄灭。女尸的身体僵直，然后——

[scream]她爆炸成了一团黑水。[/scream]

黑水溅满了整个七号厅。你站在黑水中，以为结束了。

但黑水里，慢慢浮出无数个小小的戏台。每个戏台上，都有一个云袖在唱。

[whisper]"还我戏台……还我戏台……"[/whisper]

你再也走不出七号厅了。`,
        ending: 'endlessChorus'
    },

    beg_mercy: {
        text: `你跪在地上："对不起！我错了！我不该不敬亡者！求你放过我！"

女尸歪着头看你，像是在打量一只蝼蚁。

"放过你？" 她说，"那谁来放过我？"

她的手掐住你的脖子。那不是实体，而是冰冷的河水。

你感到自己在下沉，下沉，沉到一条漆黑的河里。河底有无数戏台，每个戏台上都在唱《牡丹亭》。

你成了观众之一。

永远。`,
        ending: 'drownedOnLand'
    },

    go_old_stage: {
        title: '旧戏台',
        text: `你请了假，骑着电动车赶到青石镇。

旧戏台的遗址还在，只剩下一圈烧焦的木桩和半塌的台基。当地人提起这里都讳莫如深，说夜里还能听见唱戏声。

你在废墟里找到了一块残破的戏牌，上面写着"春香班"三个字。戏牌背面刻着云袖的名字。

你把戏牌带回了殡仪馆，放在女尸枕边。

当晚，七号厅里锣鼓喧天。你隔着门，听完了整出《牡丹亭》。

曲终人散，再无异响。`,
        effects: {
            time: 180,
            yin: -20,
            sanity: 5
        },
        ending: 'stageRestored'
    },

    hide_in_duty_room: {
        text: `你躲进值班室，锁上门，用椅子抵住。

门外传来脚步声、水声、还有断断续续的唱腔。你蜷缩在床上，用被子蒙住头。

不知过了多久，一切声音都消失了。

你小心翼翼地探出头。

值班室的墙上，用黑水写满了字：

[faded]"还我戏台还我戏台还我戏台……"[/faded]

而在字的尽头，女尸背对着你，正在对着墙壁，一个人唱戏。`,
        effects: {
            sanity: -40
        },
        ending: 'trappedWatcher'
    },

    follow_her: {
        text: `你站起身，跟着她走向七号厅。

她牵起你的手。那只手冰冷湿滑，像刚从河里捞出来。

她带你走到灵床旁，自己躺下，然后示意你也躺下。

"你躺这里，" 她说，"我唱给你听。"

你躺下。她侧卧在你身边，开始轻声吟唱《牡丹亭》。

她的声音越来越轻，你的身体越来越冷。

你意识到，她已经找到了新的听众。

而你，再也不会醒来了。`,
        ending: 'duetWithGhost'
    },

    struggle_dragged: {
        text: `你拼命挣扎，但女尸的力气大得惊人。

她把你的头按进灵床上的黑水里。那不是水，是无数细小的戏台和唱戏的人。

你感到自己在窒息，在坠落。

最后一刻，你听见她说：

[whisper]"既然不愿意帮我唱，那就替我看完这场戏吧。"[/whisper]`,
        ending: 'drownedOnLand'
    },

    // 新增场景：桂香引
    osmanthus_trace: {
        title: '桂香引',
        text: `你本已准备推门，忽然闻到一缕若有若无的香气从门缝里渗出来。

不是香烛味，也不是尸体的腐臭，而是桂花的甜香。这香气在殡仪馆里显得格外诡异，像是从某个不该存在的季节飘来的。

你顺着香气望去，发现七号厅门下的缝隙里，有一小片暗红色的痕迹正在缓缓晕开。不是血，是胭脂。

那胭脂的痕迹像是一条细线，从门内延伸出来，一直爬到走廊拐角的阴影里。阴影中，放着一个你从未见过的旧妆奁。

妆奁的漆早已斑驳，铜扣上却干干净净，像是有人日日擦拭。`,
        effects: {
            sanity: -5,
            yin: 5
        },
        choices: [
            {
                text: '打开妆奁',
                next: 'open_makeup_box'
            },
            {
                text: '按规矩先敲门，不理会香气',
                next: 'knock_first',
                effects: { yin: -5 }
            }
        ]
    },

    // 新增场景：妆奁
    open_makeup_box: {
        title: '妆奁',
        text: `你蹲下身，轻轻掀开妆奁的盖子。

奁中铺着褪色的红绸，上面放着一面铜镜、一盒胭脂、一封泛黄的信。铜镜背面刻着[faded]"周生赠云袖"[/faded]五个小字。

你拿起铜镜，镜中却没有映出你的脸。你看见一座燃烧的舞台，一个穿红戏服的女子在火中起舞，而舞台下站着一个穿长衫的年轻男子，正泪流满面地望着她。

那男子手中握着一把剪刀，剪断了系在女子腕上的红绳。

你猛地放下镜子。再拿起那封信，信纸上的字迹已经模糊，但还能辨认：

[faded]"云袖吾爱，戏台将塌，我不得不将你移入青石河。水能灭火，亦能锁魂。待我找到救你之法，必来寻你。周生泣笔。"[/faded]

原来，把她从戏台搬到河里的，不是别人，正是她的心上人周生。`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'knowsZhouSheng'
        },
        choices: [
            {
                text: '把信念给云袖听',
                ending: 'hidden_zhouShengLetter'
            },
            {
                text: '再看一眼铜镜',
                ending: 'death_makeupMirror'
            },
            {
                text: '合上妆奁，答应帮她完成心愿',
                next: 'promise_help'
            }
        ]
    },

    // 新增场景：纸扎铺旧闻
    paper_shop_visit: {
        title: '纸扎铺旧闻',
        text: `你循着报纸上的地址，找到青石镇东街的周氏纸扎铺。

铺子已经破败，门口挂着的白灯笼上写着一个褪色的[faded]"周"[/faded]字。一个瞎眼的老太太坐在门槛上，像是在等你。

"你是来找云袖姑娘的？"她问，"我爷爷那辈就传下话，说有个唱戏的姑娘，魂没散干净。"

她从柜台底下取出一个纸人。纸人穿着红戏服，脸上画着旦角的妆，眉眼间竟和七号厅的女尸有几分相似。

"这是周生当年扎的替身。他本想烧给云袖，让她替自己受苦，可没来得及。"

老太太把纸人塞到你手里："你拿去，烧在七号厅。让她有个替身的，好上路。"`,
        effects: {
            time: 60,
            sanity: -5,
            yin: -5,
            setFlag: 'hasPaperFigure'
        },
        choices: [
            {
                text: '拿纸人回七号厅焚化',
                next: 'paper_burn_rite'
            },
            {
                text: '把纸人交给民俗研究所',
                ending: 'hidden_paperKeeper'
            }
        ]
    },

    // 新增场景：焚纸人
    paper_burn_rite: {
        title: '焚纸人',
        text: `你带着纸人回到七号厅。

云袖的眼睛还睁着。当你把纸人放在灵床边的铁盆里点燃时，她的眼珠猛地转向火盆。

纸人在火中扭曲，发出细微的"噼啪"声。那声音渐渐变成了唱戏声，又变成了女子的啜泣。

"替身……"云袖的声音很轻，"他要我替谁？"

你想起那个扎纸人的男人，和他未完成的执念。这个替身，本该替她受苦，如今却成了替她承受怨气、送她上路的舟。

纸人烧尽时，七号厅里的阴冷似乎也轻了一些。`,
        effects: {
            yin: -15,
            sanity: 5
        },
        choices: [
            {
                text: '把灰撒入青石河',
                ending: 'hidden_paperFigure'
            },
            {
                text: '火盆突然炸开，火星溅到花圈上',
                ending: 'death_burningStage'
            }
        ]
    },

    // 新增场景：焚香祭
    burn_incense_for_her: {
        title: '焚香祭',
        text: `你想起老规矩：守夜人不仅要防鬼，也要敬鬼。

你从供桌上取了三炷香，在七号厅门口点燃，恭敬地拜了三拜。

"云袖姑娘，"你说，"戏台之事，非我所能。但今夜，我周遥以守灵人之名，敬你一杯水酒。"

你把酒洒在门口。门内传来一声轻叹，像是风，又像是人的呼吸。

女尸没有睁眼，但你感觉到，她的怨气稍稍平息了。`,
        effects: {
            sanity: 5,
            yin: -10
        },
        choices: [
            {
                text: '继续守到天亮',
                ending: 'normal_morningRitual'
            }
        ]
    },

    // ============================================================
    // 批次1：殡仪馆深度探索线
    // ============================================================

    // 巡厅起始 —— 走廊巡夜
    patrol_corridor: {
        title: '巡厅',
        text: `你决定先把整个殡仪馆走一遍。守夜人的规矩里有一条：子时之后，至少要巡一次各厅，确认没有异样。

走廊的声控灯坏了两盏，只剩尽头那盏还在惨白地亮着。你的脚步声在瓷砖地上回荡，每一步都像是踩在什么东西的脊背上。

一号厅的门虚掩着，里面是老张头——三天前心梗走的，七十三岁，喜丧。三号厅的门紧闭，里面是那个骑摩托撞上桥墩的少年，才十九岁。五号厅空着，可你路过时，分明听见里面有翻动纸张的声音。

再往前，是七号厅。门缝下渗着一缕若有若无的桂花香。

走廊尽头，通往地下室的铁门上，挂着一把落满灰的锁。你从没见人下去过。

[faded]林叔说过，那下面，是老殡仪馆留下的东西。[/faded]`,
        effects: { sanity: -5, yin: 5 },
        choices: [
            { text: '进一号厅看看老张头', next: 'hall_one_inspection' },
            { text: '进三号厅看那个少年', next: 'hall_three_inspection' },
            { text: '推开五号厅的门', next: 'hall_five_inspection' },
            { text: '直接回七号厅', next: 'enter_with_flashlight' }
        ]
    },

    // 一号厅 —— 喜丧老人的秘密
    hall_one_inspection: {
        title: '一号厅 · 老张头',
        text: `一号厅的灯是暖黄色的，老张头躺在灵床上，盖着绣"寿"字的白绸。他的遗容化得很好，嘴角甚至带着一丝笑意，像是做了一个美梦。

老张头是镇上的老木匠，做了一辈子棺材。镇上有一半的老人，最后都是躺着他做的棺材走的。听说他临终前还在念叨："我的棺材还没给自己刨好呢。"

你在灵床前站定，按规矩鞠了三个躬。

就在你直起身的时候，你注意到老张头的右手——入殓时是交叠放在胸前的，现在却微微攥着拳，像是握着什么东西。

你犹豫了一下。按规矩，亡者的东西不能乱动。可那攥紧的手指缝里，露出半截泛黄的纸边。`,
        effects: { sanity: -5 },
        choices: [
            {
                text: '轻轻掰开他的手，看看握着什么',
                next: 'hall_one_paper',
                effects: { yin: 5 }
            },
            { text: '不碰，恭敬退出', next: 'hall_three_inspection' },
            {
                text: '你想起老木匠做的那些棺材，低声问他一句',
                next: 'hall_one_whisper',
                condition: { flag: 'knowsName' },
                hidden: true
            }
        ]
    },

    hall_one_paper: {
        title: '掌中纸',
        text: `你屏住呼吸，轻轻掰开老张头僵硬的手指。

指尖触到那截纸的瞬间，一股冰凉顺着你的胳膊窜上来。老张头的笑容似乎更深了一些。

你抽出那张纸。是一张被汗浸透又干透、反复折叠的旧信纸，上面的字迹歪歪扭扭，像是一个不怎么识字的人一笔一笔刻上去的：

[faded]"我做了四十年棺材。最后这口，是给七号厅那位姑娘留的。她不肯走，是因为没有一口像样的棺材装她的戏。棺材铺在地下室东墙根下，盖板第三块。切记，那棺材只能给云袖，旁人躺了，要出大事。"[/faded]

你猛地抬头。老张头的眼睛不知什么时候睁开了一条缝，浑浊的瞳仁正看着你。

他的嘴唇动了动，没有发出声音，但你读懂了口型：

[whisper]"地下……室……"[/whisper]

然后，他的眼睛又慢慢合上了。`,
        effects: { sanity: -15, yin: 10, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先收好纸条，继续巡厅', next: 'hall_three_inspection' },
            { text: '回七号厅告诉云袖', next: 'enter_with_flashlight', condition: { flag: 'knowsName' } }
        ]
    },

    hall_one_whisper: {
        title: '问棺',
        text: `你俯下身，凑到老张头耳边，轻声问："老张头，云袖姑娘的戏台，是不是得有口好棺材才唱得完？"

老张头的身体纹丝不动。但他的喉结——那个早已不会动的东西——缓缓地、艰难地上下滚了一下。

像是在点头。

然后，他的右手无力地垂落床沿。掌心里，一张纸条无声地飘落到地上。

你捡起来。上面写着地下室的位置，和一行小字：

[faded]"那口棺材，是我这辈子做得最好的一口。柚木，朱漆，里头衬了戏台幕布。给她，她就有了戏台。"[/faded]

你把纸条收好，再看老张头。他的笑容不见了，取而代之的是一种了却心愿的安详。

[whisper]做了一辈子棺材的人，最后的心愿，是替一个素不相识的戏子，做最后一口棺材。[/whisper]`,
        effects: { sanity: 5, yin: -5, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先去三号厅看看', next: 'hall_three_inspection' }
        ]
    },

    // 三号厅 —— 车祸少年的怨气
    hall_three_inspection: {
        title: '三号厅 · 少年',
        text: `三号厅的门推开时，一股血腥味扑面而来。那个十九岁的少年躺在灵床上，全身盖着白布，但白布的形状凹凸不平——他撞得太碎了，入殓师用了很多石膏才勉强拼出一个人形。

他叫陈磊，镇东头修车铺老板的儿子。上个月骑摩托送女朋友回家，在青石桥上撞了护栏。女朋友飞出去落进河里，到现在都没找到。

少年的母亲白天来守过灵，哭得撕心裂肺。她走的时候，在灵床前放了一瓶他生前最爱喝的橘子汽水。

现在，那瓶汽水倒在地上，橘色的液体正沿着瓷砖缝，缓缓朝白布下的人形流去。

你走近时，白布下传来一个含混的声音，像是有水灌进了喉咙：

[whisper]"她……还在水里……"[/whisper]

[whisper]"我没救上来她……"[/whisper]`,
        effects: { sanity: -10, yin: 15 },
        choices: [
            {
                text: '扶起汽水瓶，放回灵床前',
                next: 'hall_three_soda',
                effects: { sanity: 5 }
            },
            { text: '问他女朋友在哪里', next: 'hall_three_girl' },
            { text: '不掺和，赶紧离开', next: 'hall_five_inspection', effects: { yin: 10 } }
        ]
    },

    hall_three_soda: {
        title: '橘子汽水',
        text: `你蹲下身，捡起那瓶滚落的橘子汽水。瓶身还是温的，像是有人刚刚握过。

你把它轻轻放回灵床前的供桌上，又把歪倒的香炉扶正。

"陈磊，"你轻声说，"汽水我帮你放好了。你女朋友的事……你尽力了。"

白布下的躁动渐渐平息了。那个含混的声音消失了。

你刚要转身，听见"啵"的一声轻响——汽水瓶的盖子，自己弹开了。

一股橘子汽水的甜香飘出来，混着血腥味，有一种说不出的、少年人的味道。

白布下，少年的右手——那只据说是完好的手——缓缓抬起，又缓缓落下，像是在跟你挥手。

[faded]十九岁。他还想喝一口橘子汽水，还想送女朋友回家。[/faded]`,
        effects: { sanity: 10, yin: -10, setFlag: 'comfortedChenlei' },
        choices: [
            { text: '答应帮他找女朋友的下落', next: 'river_search', effects: { setFlag: 'promisedChenlei' } },
            { text: '去五号厅看看', next: 'hall_five_inspection' },
            { text: '回七号厅继续守云袖', next: 'enter_with_flashlight' }
        ]
    },

    hall_three_girl: {
        title: '水中人',
        text: `"她在哪里？" 你压低声音问。

白布剧烈地起伏了一下，像是在努力翻身。

少年的声音从白布下渗出来，每一个字都带着水泡破裂的声响：

[whisper]"青石桥……第三个桥洞下面……她的脚卡在石头缝里……我下去找她，可水太急了……"[/whisper]

[whisper]"我一直没敢跟人说……我怕她妈妈恨我……"[/whisper]

白布下传来压抑的抽泣。一个撞碎了全身的少年，连哭都哭不出完整的调子。

你心里一沉。如果他说的是真的，那个女孩的尸体还在青石桥下，卡在第三个桥洞里。

而青石桥下面那条河——正是云袖被捞上来的青石河。

[red]同一条河，吞了两个年轻人。[/red]`,
        effects: { sanity: -15, yin: 10, setFlag: 'knowsGirlLocation' },
        choices: [
            { text: '天亮后去青石桥找那个女孩', next: 'river_search', effects: { setFlag: 'promisedChenlei' } },
            { text: '这事你管不了，去五号厅', next: 'hall_five_inspection', effects: { yin: 5 } }
        ]
    },

    river_search: {
        title: '青石桥下',
        text: `天蒙蒙亮时，你请了假，骑着电动车赶往青石桥。

桥下的河水很浅，但很急。你挽起裤腿，踩着滑腻的卵石，摸到第三个桥洞。

桥洞下的石头缝里，果然卡着一只苍白的手。

你忍着恐惧，把那具早已泡发的女尸从石缝里拖出来。她的脸已经看不清了，但手腕上还戴着一条粉色的手绳，坠子是一个小小的摩托车挂件。

你报了警。警察来的时候，你听见其中一个老警察叹气：

"跟当年捞那个戏子的是一个地方。这桥底下，真是邪门。"

你看着那具女尸被抬走，忽然想起云袖也是从这里被捞上来的。

[whisper]同一条河，同一座桥，相隔近百年，收了两条人命。[/whisper]

河水哗哗地流着，像是什么都没发生过。`,
        effects: { time: 120, sanity: -10, yin: -10, setFlag: 'foundGirl' },
        choices: [
            { text: '回殡仪馆，把消息告诉少年的魂', next: 'river_search_report' }
        ]
    },

    river_search_report: {
        title: '了愿',
        text: `你回到殡仪馆时，天已经黑了。又一个夜晚开始了。

你直奔三号厅。少年的白布还盖着，但你知道他在等你。

"陈磊，"你说，"我找到她了。她在第三个桥洞下面，就像你说的。"

白布下沉默了很久。

然后，那只完好的右手再次缓缓抬起，又缓缓落下。这一次，没有沉重，只有一种如释重负的轻。

[whisper]"谢谢你……"[/whisper] 少年的声音清晰了许多，"告诉她妈妈……对不起……"

汽水瓶里的橘子水，无风自动，冒出了一个小小的气泡。

你退出三号厅，觉得今夜的殡仪馆，似乎安静了一些。

[red]但七号厅的方向，桂花香更浓了。[/red]`,
        effects: { sanity: 15, yin: -15, setFlag: 'chenleiReleased', clearFlag: 'promisedChenlei' },
        choices: [
            { text: '去七号厅守云袖', next: 'enter_with_flashlight' },
            { text: '先去地下室看看', next: 'basement_descent', condition: { flag: 'knowsCoffin' } },
            { text: '巡一圈其他厅', next: 'hall_five_inspection' }
        ]
    },

    // 五号厅 —— 空厅异响
    hall_five_inspection: {
        title: '五号厅 · 空厅',
        text: `五号厅是空的，已经空了半年。

半年前，这里躺着一具无名男尸，没人来认领。按规定存放期满后，他被送进了火化炉。从那以后，五号厅就一直空着，没人愿意往里放新的遗体。

"邪门。"林叔是这么说的。

你推开门。厅里干干净净，灵床上连白布都没铺。声控灯"啪"地亮了，惨白的光照着空荡荡的房间。

可你分明听见——

[whisper]沙。沙。沙。[/whisper]

像有人在翻一本很厚的书。

声音是从灵床下面传来的。

你绕到灵床侧面，弯下腰，往床底看去。

床底下，整整齐齐地码着一摞纸。不是普通的纸——是殡仪馆的旧登记册，民国时期的，封皮都烂了。

最上面那本，翻开着，停在某一页。那一页上，用毛笔写着一行字：

[faded]"无名男，丁丑年腊月，疑似周氏纸扎铺学徒，自缢于铺中。无人认领，存五号厅。"[/faded]

你的手开始发抖。丁丑年，是民国二十六年。周氏纸扎铺——云袖的周生，就是开纸扎铺的。`,
        effects: { sanity: -15, yin: 15, setFlag: 'foundApprenticeRecord' },
        choices: [
            { text: '翻看更多登记册', next: 'hall_five_archives' },
            { text: '把登记册带走，回头细看', next: 'basement_descent', effects: { addItem: '旧登记册' } },
            { text: '太邪门了，赶紧出去', next: 'patrol_corridor', effects: { sanity: -5 } }
        ]
    },

    hall_five_archives: {
        title: '尘封的册子',
        text: `你跪在地上，一本一本地翻那些旧登记册。

纸张脆得像枯叶，一碰就掉渣。但在那些褪色的字迹里，你拼凑出了一条让人心惊的线索：

[faded]"民国二十三年，秋。无名女，戏服，河中捞出。存七号厅。后由周氏纸扎铺周生认领，称是其未婚妻云袖。因尸身不腐，无法火化，暂存。"[/faded]

[faded]"民国二十三年，冬。周生来馆，留下铜镜、妆奁、替身纸人，托殡仪馆代为保管。言明待有缘人至，可还于云袖。"[/faded]

[faded]"民国二十四年，春。周生失踪。据传投青石河自尽，尸身未寻获。"[/faded]

[faded]"民国二十六年，腊月。周氏纸扎铺学徒自缢。临终遗言：'师父临走前说，他去找师娘了。'"[/faded]

你合上册子，手心全是冷汗。

原来周生没有抛下云袖。他把她托付给了殡仪馆，然后……自己也走进了那条河。

[red]同一条青石河，先后吞没了云袖、周生、还有那个学徒。[/red]

而那个学徒的魂魄，至今还留在五号厅空荡荡的灵床下，守着这些无人翻看的册子。`,
        effects: { sanity: -20, yin: 10, setFlag: 'knowsFullZhouShengStory', setFlag: 'knowsApprentice' },
        choices: [
            { text: '跟床下的"人"说句话', next: 'hall_five_apprentice' },
            { text: '带上册子，去地下室', next: 'basement_descent', effects: { addItem: '旧登记册' } },
            { text: '回七号厅找云袖', next: 'enter_with_flashlight', condition: { flag: 'knowsName' } }
        ]
    },

    hall_five_apprentice: {
        title: '床下人',
        text: `你对着灵床底下，轻声说："我知道你在。你是周生的学徒吧？"

翻书声停了。

沉默了很久，一个年轻的、怯生生的声音从床底响起：

"您……您能听见我？"

"能。" 你说，"你在这里守了多久了？"

"我记不清了。师父走后，我就把铺子关了。可我舍不得那些册子……殡仪馆的老馆长答应让我住在这儿，帮师父守着七号厅那位师娘的物件。后来老馆长走了，新来的人不知道我，我就一直待在床底下。"

"你为什么不走？"

"师娘还没散呢。" 学徒的声音低了下去，"师父临走说，他去找师娘了。可师娘还在七号厅，那师父去哪儿找她了？我想不通，就不敢走。"

你心里一酸。一个民国时期的学徒，在殡仪馆的空厅床底下，守了快一百年，只为想通一个问题。

"你师父，"你轻声说，"去找云袖了。他走进了青石河。他们现在，应该在一起了。"

床底下沉默了很久。

然后，那摞登记册自己滑了出来，整整齐齐地推到你脚边。

"那……我可以走了吧？" 学徒的声音带着一丝释然的颤抖，"替我跟师娘说一声……师父没有负她。"`,
        effects: { sanity: 10, yin: -15, setFlag: 'apprenticeReleased', addItem: '旧登记册' },
        choices: [
            { text: '答应他，目送他离去', next: 'basement_descent', effects: { sanity: 5 } },
            { text: '回七号厅转告云袖', next: 'yunxiu_apprentice_message', condition: { flag: 'knowsName' } }
        ]
    },

    yunxiu_apprentice_message: {
        title: '学徒的话',
        text: `你回到七号厅，把学徒的话原原本本告诉了云袖。

云袖听完，沉默了很久。她的眼角，缓缓流下一滴红色的泪。

"周生……他来找我了吗？" 她的声音很轻，"那个傻孩子，我都不知道他收了学徒。"

"他临走前让学徒转告你：师父没有负你。"

云袖闭上眼睛。当她再睁开时，眼里没有了怨恨，只剩一种深沉的、跨越近百年的悲伤。

"我一直以为，是他把我锁在了水里。" 她说，"原来，他也把自己赔了进去。"

她转向你，第一次露出一个完整的、带着泪的笑。

"守夜人，"她说，"我有些话，想托你带给一个人。可那个人，已经不在了。"`,
        effects: { sanity: 10, yin: -20, setFlag: 'yunxiuKnowsTruth' },
        choices: [
            { text: '问她想说什么', next: 'yunxiu_final_words' },
            { text: '带她去地下室，看周生留下的东西', next: 'basement_descent', condition: { flag: 'knowsCoffin' } }
        ]
    },

    yunxiu_final_words: {
        title: '托话',
        text: `"我想跟他说……"云袖的声音像是从很远的地方飘来，"那出《牡丹亭》，我唱到《寻梦》一折就……就断了。我一直在想，如果当时能唱完，杜丽娘是不是就不用死了。"

她顿了顿。

"可现在我明白了。杜丽娘死了，是为了在梦里再见柳梦梅一面。我死了，是为了……等周生一句话。"

"现在我知道了。他没负我。"

云袖的身影开始变得透明。但就在她即将消散时，她又凝实了。

"不，"她说，"我还不能走。我的戏台，还没搭起来。周生给我留了那么多东西，我总得看一眼，才算完整地唱完这一出。"

她看向你，眼神里有了温度。

"守夜人，带我去看看，他给我留了什么。"`,
        effects: { sanity: 15, yin: -25, setFlag: 'yunxiuWantsCoffin' },
        choices: [
            { text: '带她去地下室', next: 'basement_descent', condition: { flag: 'knowsCoffin' } },
            { text: '先去找周生留下的其他东西', next: 'paper_shop_visit', effects: { time: 60 } }
        ]
    },

    // 地下室 —— 老殡仪馆的遗存
    basement_descent: {
        title: '地下室',
        text: `你走到走廊尽头那扇落满灰的铁门前。

钥匙挂在值班室的抽屉里，林叔给过你一把备用钥匙，说是"以防万一"。你插进锁孔，锈蚀的锁芯发出刺耳的"咯吱"声，像是几十年没被打开过。

铁门吱呀一声敞开，一股潮湿的、混合着旧木头和樟脑丸的气味涌出来。

水泥台阶向下延伸，消失在黑暗里。声控灯到这儿就失灵了，你打开手电筒，一步一步往下走。

地下室比你想的大得多。这原本是老殡仪馆的停尸间，民国时期建的，后来上面盖了新楼，这里就封存了。

手电光扫过：东墙根下，靠着几口落灰的旧棺材；西墙是一排铁皮柜，柜门上贴着发黄的标签；正中央，摆着一张积灰的老式梳妆台，台上放着一面铜镜。

[faded]那张梳妆台，和七号厅走廊拐角发现的妆奁，是一套的。[/faded]`,
        effects: { sanity: -10, yin: 15 },
        choices: [
            { text: '去东墙根看那几口棺材', next: 'basement_coffins', condition: { flag: 'knowsCoffin' } },
            { text: '去东墙根看那几口棺材', next: 'basement_coffins_normal' },
            { text: '翻看西墙的铁皮柜', next: 'basement_lockers' },
            { text: '走近那张梳妆台', next: 'basement_vanity' }
        ]
    },

    basement_coffins: {
        title: '柚木棺',
        text: `你走到东墙根下，数到第三块盖板，按老张头纸条上说的，把它搬开。

盖板后面，赫然是一口崭新的——在满是灰尘的地下室里显得格外扎眼的崭新——柚木棺材。

朱漆锃亮，棺头雕着一枝牡丹，棺尾刻着一折戏台。你伸手摸了摸，漆面光滑温润，像是昨天才刷的。

可这明明是老张头做了一辈子的手艺，他在这里藏了多久？

棺盖没有钉死。你深吸一口气，用力推开。

棺材里铺着一层褪色的红绸——不，那不是普通的红绸。你认出来了，那是戏台的幕布。上面还绣着"春香班"三个褪色的金字。

棺材的内壁，密密麻麻地刻满了字。你凑近一看，是《牡丹亭·惊梦》的全本唱词，一笔一画，刻得极深，像是怕时间磨灭。

棺头内侧，刻着一行小字：

[faded]"云袖姑娘台启。愿此棺为汝戏台，一折唱罢，魂归何处，皆可安息。张木匠敬上，民国二十三年冬。"[/faded]

民国二十三年冬——正是云袖死后，周生失踪的那一年。老张头那时才三十出头，就已经替云袖做好了这口棺材，一直藏在这里，等了近百年。`,
        effects: { sanity: 5, yin: -10, setFlag: 'foundCoffin', addItem: '柚木戏台棺' },
        choices: [
            { text: '把棺材搬上去给云袖', next: 'coffin_to_yunxiu' },
            { text: '先看看铁皮柜里还有什么', next: 'basement_lockers' },
            { text: '看看那张梳妆台', next: 'basement_vanity' }
        ]
    },

    basement_coffins_normal: {
        title: '旧棺',
        text: `你走到东墙根下，看着那几口落灰的旧棺材。

都是空的。民国时期老殡仪馆留下的备棺，后来新馆建成后就没用过。棺木已经受潮变形，散发着一股霉味。

你挨个拍了一遍，听声音都是实的，没有暗格。

就在你准备离开时，你注意到第三块盖板——它和墙面的缝隙不太对，像是被频繁移动过。

你试着搬开它。盖板比想象中沉，背后露出一个黑黢黢的洞口，还有一口棺材的轮廓。

[whisper]这下面，藏着东西。[/whisper]`,
        effects: { sanity: -5, yin: 10 },
        choices: [
            { text: '把棺材拖出来看看', next: 'basement_coffins', effects: { setFlag: 'knowsCoffin' } }
        ]
    },

    basement_lockers: {
        title: '铁皮柜',
        text: `你走到西墙那排铁皮柜前，挨个拉开。

前几个柜子里是些民国时期的殡葬用具：发脆的孝服、落灰的纸幡、干涸的墨盒。

第四个柜门上贴着一张标签：[faded]"周生寄存"[/faded]。

你的手停在半空。

拉开柜门，里面整整齐齐地放着：一个油纸包（里面是一封信）、一个布包（里面是一套旦角的头面首饰）、还有一本蓝布封皮的手抄本，封皮上写着[faded]"春香班曲谱 · 云袖手抄"[/faded]。

你翻开曲谱。每一页都是工整的工尺谱，边角还用小字写着唱腔的提示。这是云袖生前亲手抄的戏本。

最后一页的空白处，有一行不同于工尺谱的、潦草的毛笔字：

[faded]"戏台将塌，火已及幕。周生冲上台来，剪我腕上红绳。他说：'水能灭火，亦能锁魂。云袖，等我。'然后他把我推进了后台的暗门，直通青石河。我落入水中时，看见戏台在他身后塌了，火光映红了半边天。我想喊他的名字，可河水灌进了我的喉咙。"[/faded]

[faded]"这是我最后清醒的记忆。之后，就是漫长的、在水底的等待。"[/faded]`,
        effects: { sanity: -15, yin: 10, setFlag: 'foundZhouShengCache', addItem: '云袖手抄曲谱', addItem: '周生的信', addItem: '旦角头面' },
        choices: [
            { text: '看那口棺材', next: 'basement_coffins', condition: { flag: 'knowsCoffin' } },
            { text: '看那口棺材', next: 'basement_coffins_normal' },
            { text: '看那张梳妆台', next: 'basement_vanity' },
            { text: '把东西都带上去给云袖', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } }
        ]
    },

    basement_vanity: {
        title: '梳妆台',
        text: `你走到地下室中央那张梳妆台前。

台面积了厚厚的灰，但台面上的东西——一面铜镜、一盒胭脂、一把檀木梳——却干干净净，像是有人天天在擦拭。

和七号厅走廊拐角发现的那个妆奁，是同一套。

你拿起铜镜。镜面氧化得发暗，但还能映出模糊的人影。

你照了一眼镜子。

镜子里不是你的脸。

是一个穿着红戏服的年轻女子，正坐在梳妆台前，对镜贴花黄。她的动作很慢，很认真，像是在为一场重要的演出做准备。

她从镜子里"看见"了你，停下动作，露出一个浅浅的笑。

[whisper]"帮我把鬓边的钗子扶正。"[/whisper] 她说，"我今晚，要唱《惊梦》。"

你下意识地伸手，去扶镜框旁边那支银钗。

指尖触到银钗的瞬间，一阵眩晕袭来。你感觉自己正在被拽进镜子里，拽进那个民国二十三年的夜晚……`,
        effects: { sanity: -20, yin: 20, setFlag: 'touchedVanityMirror' },
        choices: [
            {
                text: '任由自己被拽进镜子',
                next: 'memory_chunxiang_troupe',
                effects: { sanity: -10 }
            },
            {
                text: '猛地松手，后退',
                next: 'basement_lockers',
                effects: { sanity: -5 }
            }
        ]
    },

    // 把棺材带给云袖
    coffin_to_yunxiu: {
        title: '戏台棺',
        text: `你费了九牛二虎之力，把那口柚木棺材从地下室搬了上来。

棺材比想象中轻——也许是因为它本就是为云袖做的，也许是因为有什么在帮你。每上一级台阶，你都觉得身后有一股温柔的力量在托着棺尾。

你把棺材停在七号厅中央，打开棺盖，让红绸幕布和刻满的唱词显露出来。

云袖——七号厅灵床上的女尸——缓缓坐起身来。

她飘到棺材前，低头看着里面的幕布、唱词、还有老张头刻的那行字。

良久，她抬起头，眼里映着棺材内壁的牡丹雕花。

"这是……戏台。" 她的声音颤抖，"有人，给我做了一座戏台。"

她转过身，对着你深深一福。

"守夜人，"她说，"我等了近百年的戏台，终于有了。请你去地下室，把我生前的曲谱、周生留给我的信，还有那套头面，都拿来。今夜，我要在这座戏台上，唱完《牡丹亭》。"`,
        effects: { sanity: 20, yin: -30, setFlag: 'coffinReady' },
        choices: [
            {
                text: '去地下室取齐所有物件',
                next: 'coffin_final_rite',
                condition: { flag: 'foundZhouShengCache' }
            },
            {
                text: '还差些东西，去取齐',
                next: 'basement_lockers',
                condition: { noFlag: 'foundZhouShengCache' }
            },
            {
                text: '还差棺材里的幕布，去旧戏台找',
                next: 'go_old_stage',
                condition: { noFlag: 'foundCoffin' }
            }
        ]
    },

    // 棺中终章 —— 完整戏台
    coffin_final_rite: {
        title: '戏台成',
        text: `你把云袖手抄的曲谱摊开在棺盖内侧，把旦角头面摆在棺头的牡丹雕花旁，把周生的信折好，压在梳妆台的铜镜下。

你打开手机，找到《牡丹亭·惊梦》的伴奏，音量调到最小，放在棺材一角。

然后，你退到七号厅的角落，静静地等。

云袖飘进棺材里，躺在红绸幕布上，就像躺在真正的戏台上。她的戏服在没有任何光源的七号厅里，泛着一种自带的、微弱的红光。

她开口了。

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣。良辰美景奈何天，赏心乐事谁家院……"[/whisper]

起初声音很轻，像是怕惊扰了什么。渐渐地，她的声音清亮起来，婉转起来，七号厅的空气仿佛都跟着震颤。

唱到《寻梦》一折——那个她当年没能唱完的段落——她的声音哽咽了一下。

但只是一下。

她继续唱下去，每一个字都像是从近百年的水底浮上来的，沉重，又轻盈。

唱到最后一折，她的声音已经不像是从喉咙里发出的，而是从棺材内壁的唱词里、从幕布的经纬里、从头面的珠翠里，一起共鸣出来的。

一曲终了。

云袖躺在棺材里，看着天花板，笑了。

[red]那是近百年来，她第一次真正完整的笑。[/red]`,
        effects: { sanity: 25, yin: -40, setFlag: 'riteComplete' },
        choices: [
            {
                text: '为她合上棺盖，送她最后一程',
                ending: 'hidden_stageCoffinFarewell'
            },
            {
                text: '念周生的信给她听',
                next: 'coffin_read_letter',
                condition: { hasItem: '周生的信' }
            },
            {
                text: '问她，愿不愿意被后人记住',
                next: 'coffin_remember_her',
                condition: { flag: 'yunxiuWishComplete' }
            }
        ]
    },

    coffin_read_letter: {
        title: '念信',
        text: `你从棺材边拿起那封信，展开，一字一句地念给云袖听：

[faded]"云袖吾爱，戏台将塌，我不得不将你移入青石河。水能灭火，亦能锁魂。待我找到救你之法，必来寻你。"[/faded]

[faded]"可我找了一辈子，也没找到救你的法子。水锁了你的魂，也锁了我的心。我终于明白，能让你解脱的，不是法术，是一座戏台，和一个愿意听你唱完的人。"[/faded]

[faded]"云袖，如果有一天，有人把我的信念给你听，那说明，你终于等到了你的戏台。那一刻，请你也原谅我——原谅我当年没能陪你唱完。"[/faded]

[faded]"我会在水底等你。青石河的尽头，有一盏我为你点的长明灯。"[/faded]

[faded]"周生泣笔。"[/faded]

你念完最后一个字，七号厅里安静得能听见心跳。

云袖躺在棺材里，泪水从眼角滑落，滴在红绸幕布上，晕开一朵朵暗红的花。

"他……一直在等我。" 她说，"而我，一直在怨他。"

她闭上眼，再睁开时，已经没有了泪水。

"守夜人，"她说，"我想去青石河的尽头，找他。"`,
        effects: { sanity: 15, yin: -25, setFlag: 'yunxiuForgaveZhouSheng' },
        choices: [
            { text: '带她去青石河', next: 'coffin_to_river', effects: { time: 60 } },
            { text: '先合上棺盖，让她在戏台上安息', ending: 'hidden_stageCoffinFarewell' }
        ]
    },

    coffin_to_river: {
        title: '青石河',
        text: `天亮前，你请了假，把柚木棺材用殡仪馆的运尸车运到了青石河边。

河水在晨雾里静静地流着。你把棺材停在河岸上，打开棺盖。

云袖躺在里面，看着逐渐泛白的天际。

"周生说，青石河的尽头，有一盏他点的长明灯。" 她说，"我想去看看。"

你犹豫了："可你是……"

"我知道。" 她笑了，"但我已经唱完了我的戏。戏散了，魂也该散了。"

她从棺材里坐起来，飘到河边。她的戏服在晨光里变得透明，像一层薄薄的红雾。

她回过头，最后看了你一眼。

"守夜人，谢谢你。" 她说，"替我跟那个守了一百年册子的学徒说一声——师父没有负我。也跟那个做棺材的老木匠说一声——他做的戏台，很好。"

说完，她走进河里。

河水没有漫过她的脚踝，没有打湿她的戏服。她就像一阵红色的雾，缓缓沉入水底，消失不见。

你站在岸边，看着河面恢复平静。

[whisper]远处，仿佛有一盏灯，在水底亮了起来。[/whisper]`,
        effects: { sanity: 30, yin: -50, time: 90, setFlag: 'yunxiuDeparted' },
        choices: [
            { text: '目送她离去，回殡仪馆', ending: 'hidden_riverReunion' }
        ]
    },

    coffin_remember_her: {
        title: '铭记',
        text: `"云袖，"你问，"你希望被后人记住吗？"

云袖愣了一下。

"记住？"

"不只是我，"你说，"我想把你的故事、春香班的故事、那场大火的真相，都写下来。让以后每一个来守夜的人都知道，七号厅曾经住过一位叫云袖的旦角，她唱得很好。"

云袖的眼睛亮了起来，那是你从未见过的、属于活人的光彩。

"如果……如果有人能记住我……" 她的声音轻得像风，"那我就不是一具无名女尸了。我是云袖。唱过《牡丹亭》的云袖。"

她从棺材里坐起来，把头面上的一颗珠子摘下来，递给你。

"这个给你。" 她说，"以后你写我的故事时，看着它，就能想起我的样子。"

你接过珠子。它在掌心里发着温润的光。`,
        effects: { sanity: 20, yin: -30, addItem: '云袖的珠花', setFlag: 'yunxiuRemembered' },
        choices: [
            { text: '合上棺盖，送她安息', ending: 'hidden_stageCoffinFarewell' },
            { text: '答应写一本关于她的书', ending: 'hidden_yunxiuBook' }
        ]
    },

    // ============================================================
    // 批次2：云袖生前回忆线（铜镜入梦）
    // ============================================================

    memory_chunxiang_troupe: {
        title: '梦回春香',
        text: `眩晕过后，你发现自己站在一条青石板铺就的老街上。

天色将暮，街两旁挂满了红灯笼。空气里有桂花糕的甜香，有戏班的锣鼓隐隐传来。

你低头看自己——你穿着一身灰布长衫，手里提着一个纸扎的包袱。

[faded]这是周生的身体。你进入了周生的记忆。[/faded]

街尽头是一座气派的戏园子，门楣上挂着一块漆金匾额：[faded]"春香班"[/faded]。

门口聚着不少人，都在议论今晚的开台戏。你听见一个老太太说：

"听说今晚春香班的新旦角要登台了，叫云袖，才十七岁，是班主从苏州买来的丫头，嗓子是真好。"

你（周生）加快脚步，往戏园子里走。你（他）是来给春香班送扎好的纸花的——你是镇上有名的纸扎匠，戏班的开台、散台，都要用你的纸花。

戏园子里，戏台搭得花团锦簇。班主是个胖胖的中年人，正站在台前训话。

而在戏台后方的化妆间方向，传来一个清亮的、正在吊嗓子的女声——

[whisper]"咿——呀——"[/whisper]

那声音像一根银针，轻轻扎进了你（周生）的心里。`,
        effects: { sanity: -5, yin: 5 },
        choices: [
            { text: '去后台送纸花，顺便看一眼新旦角', next: 'memory_meet_yunxiu' },
            { text: '在前排找个位置，等开台戏', next: 'memory_first_show' }
        ]
    },

    memory_meet_yunxiu: {
        title: '初见',
        text: `你（周生）提着纸花，绕到戏园子后台。

化妆间里乱糟糟的，几个老戏子在勾脸。最里间，一个穿着水红外衣的年轻女孩正对着镜子描眉。

她听见脚步声，回过头来。

那就是云袖。

十七岁的云袖，脸还没有被脂粉掩埋，眉眼清秀得像一枝刚抽芽的柳。她看见你（周生）手里的纸花，眼睛亮了起来。

"这是给我的吗？" 她问，声音还是吊嗓子后的微微沙哑。

"是班主订的开台花。" 你（周生）把花递过去，"祝……祝姑娘首演大吉。"

云袖接过纸花，凑近闻了闻。纸花没有香味，可她闻得很认真。

"真好看。" 她说，"我们老家也扎这种花，不过没有你扎得细致。这牡丹的花瓣，是一层一层粘上去的吧？"

你（周生）愣住了。从来没人这样仔细看过你的纸花，更没人知道那花瓣是一层一层粘的。

"姑娘认得手艺？"

"我爹是扎纸匠。" 云袖低下头，"他把我卖给戏班的时候，给我扎了一朵一模一样的牡丹。我一直留着。"

她从领口拉出一朵褪色的小纸花，和你（周生）送的那朵，几乎一模一样。

那一刻，你（周生）觉得，眼前这个女孩，和你之间，有了一条看不见的、细细的红线。`,
        effects: { sanity: 5, yin: -5, setFlag: 'memoryMetYunxiu' },
        choices: [
            { text: '继续看她的开台戏', next: 'memory_first_show' },
            { text: '问她父亲的事', next: 'memory_yunxiu_father' }
        ]
    },

    memory_yunxiu_father: {
        title: '纸花与爹',
        text: `"我爹是青石镇人，"云袖摆弄着手里那朵旧纸花，"家里穷，养不起丫头。我七岁那年，春香班的班主路过，看我长得周正，就花五块大洋把我买走了。临走那天，我爹给我扎了一朵牡丹，说：'袖儿，这花不会谢。等你唱出名堂了，爹去听你的戏。'"

"后来呢？" 你（周生）问。

云袖沉默了一会儿。

"后来我爹死了。第二年的冬天，冻死在青石桥头。班主怕影响我练功，瞒了我半年才告诉我。"

她把那朵旧纸花贴在胸口。

"我没赶上我爹的丧。从那以后，我就把唱戏当成给爹唱的。我想，他在天上，总能听见吧。"

你（周生）看着她，心里有什么东西塌了一块。

你想起自己——你也是手艺人，扎了一辈子纸扎，给无数死人扎过引路的花。可你还活着，你的手艺还有人要。

而她的爹，一个同样扎纸花的人，冻死在桥上，连女儿都没见上最后一面。

"云袖，"你（周生）听见自己说，"以后，我给你扎花。你要多少，我扎多少。"

云袖抬起头，看着你（周生），笑了。

那是你第一次，在一个戏子的笑容里，看见真心。`,
        effects: { sanity: 10, yin: -10, setFlag: 'memoryZhouShengPromise' },
        choices: [
            { text: '去看她的开台戏', next: 'memory_first_show' }
        ]
    },

    memory_first_show: {
        title: '开台',
        text: `戏开场了。

云袖登台，扮的是杜丽娘。水袖一甩，台下的嘈杂瞬间静了。

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

她的声音从喉咙里飘出来，像一缕烟，缠住了戏园子里每一个人的耳朵。你（周生）坐在角落，手里攥着没送出去的那朵多余的纸花，听得忘了呼吸。

班主站在侧幕，嘴角咧到了耳根。他知道，他捡到宝了。

一曲唱罢，满堂喝彩。云袖在台上福了一福，水袖一收，退回后台。

就在她经过侧幕时，她朝你（周生）坐的方向，飞快地看了一眼，笑了一下。

那一眼，决定了你（周生）后来的一生。

[faded]也决定了，近百年后，你——守夜人周遥——为什么会站在这里。[/faded]`,
        effects: { sanity: 5, yin: -5, setFlag: 'memoryFirstShow' },
        choices: [
            { text: '记忆快进到那场大火', next: 'memory_fire_night' },
            { text: '看看他们后来的日子', next: 'memory_years_together' }
        ]
    },

    memory_years_together: {
        title: '数年',
        text: `记忆像流水一样淌过。

你（周生）看见接下来的几年：云袖成了春香班的台柱子，青石镇方圆百里，都知道春香班有个唱《牡丹亭》的云袖姑娘。

而你（周生），成了她固定的纸花供应商。每场戏，你都亲手扎一篮花，送到后台。云袖总是第一个挑出你扎的那一朵，别在鬓边。

镇上的人开始嚼舌根，说纸扎铺的周生和戏班的云袖有一腿。

你（周生）不在乎。云袖也不在乎。

民国二十二年的中秋，你在青石河边，把一枚刻着"周生赠云袖"的铜镜，送给了她。

"等我攒够聘礼，"你说，"我就去跟班主提亲。"

云袖捧着铜镜，眼里映着河里的月亮。

"我不要聘礼。"她说，"我只要你答应我一件事——等我死的那天，给我扎一座最大的纸花戏台，让我躺在花里走。"

你（周生）笑了，说："说什么死不死的，你还要唱很多年呢。"

云袖没说话，只是把铜镜贴在胸口。

[faded]她好像，早就预感到了什么。[/faded]`,
        effects: { sanity: 5, yin: -5, setFlag: 'memoryYearsTogether' },
        choices: [
            { text: '记忆快进到那场大火', next: 'memory_fire_night' }
        ]
    },

    memory_fire_night: {
        title: '大火',
        text: `民国二十三年，秋分。

春香班要在青石戏台演一场大戏——全本《牡丹亭》。这是云袖的心愿，她想完整地唱一遍这出戏。

你（周生）提前一个月，扎了一座纸花的戏台牌楼，准备在散戏时烧给她，贺她圆满。

可那天晚上，出事了。

戏唱到《寻梦》一折。云袖扮着杜丽娘，正唱到"偶然心间缱绻"——

[faded]戏台的后梁，发出一声沉闷的断裂声。[/faded]

你（周生）就坐在第一排。你抬头，看见后梁的榫卯处，冒出了一缕烟。紧接着，火舌从横梁的缝隙里窜了出来。

老戏台是木结构，上了大漆，一旦着火，就是燎原之势。

"着火了！" 有人尖叫。

戏园子大乱。观众拼命往门口挤，踩踏声、呼救声响成一片。

可台上的云袖没有动。

她还在唱。

[whisper]"生生死死随人愿……"[/whisper]

她像着了魔一样，不肯下台。火已经烧到了幕布，红色的火光映着她的红戏服，分不清哪里是火，哪里是人。

"云袖！" 你（周生）疯了一样冲上台。`,
        effects: { sanity: -15, yin: 15, visual: 'shake' },
        choices: [
            { text: '冲上台去救她', next: 'memory_save_yunxiu' }
        ]
    },

    memory_save_yunxiu: {
        title: '救人',
        text: `火已经封住了下台的路。

你（周生）冲上台，一把抓住云袖的手腕。她的手腕上系着一根红绳——那是你送她的定情红绳。

"走！" 你喊。

"不！" 云袖甩开你的手，"我还没唱完！戏没散，我不能走！"

"命都要没了，还唱什么戏！"

火舌舔上了云袖的水袖。她终于惊恐地叫了一声，可腿软了，走不动。

你（周生）做了一个决定。

你从怀里掏出扎纸花用的剪刀，一刀剪断了她手腕上的红绳。

[faded]你后来无数次想：是不是剪断那根红绳的那一刻，就把她和戏台、和生，都剪断了。[/faded]

你抱起云袖，往戏台后方冲。后台有一扇暗门，直通青石河——这是老戏园子的设计，方便卸货，也方便逃生。

你踹开暗门，把云袖推了出去。

"云袖，"你说，"水能灭火，亦能锁魂。你先走，到水里等我。我随后就来。"

云袖跌进了河里。你听见落水声。

然后，戏台的横梁塌了下来，压住了你的腿。

你（周生）趴在火里，看着河水吞没了云袖的红戏服。

[faded]你想爬过去，可腿被压住了。你想喊她的名字，可浓烟灌进了你的喉咙。[/faded]

记忆在这里，碎成了无数火红的碎片。`,
        effects: { sanity: -25, yin: 20, visual: 'flicker' },
        choices: [
            { text: '从梦境中醒来', next: 'memory_wake_up' }
        ]
    },

    memory_wake_up: {
        title: '惊梦醒',
        text: `你猛地从镜子前退开，一屁股坐在地下室的地上。

手电筒滚落在地，光柱乱晃。你大口喘气，冷汗把后背的衣服浸透了。

刚才那些——春香班、云袖、那场火、周生——全都是真真切切的记忆，涌进了你的脑子里。

你低头看自己的手。手心里，有一道浅浅的红印，像是曾经握过一根红绳，又被生生勒出来的痕迹。

[whisper]那是周生的手，留给你的印记。[/whisper]

你抬头看向梳妆台上的铜镜。镜面恢复了正常，映出你苍白、冷汗涔涔的脸。

但在镜子的角落，你似乎看见一个穿红戏服的身影，正缓缓转身，走向远方。

[faded]"谢谢你，让我知道他尽力了。"[/faded]

一个轻柔的声音，像是从镜子里传来，又像是从你心里浮起。

你扶着墙站起来。地下室恢复了死寂。

但你知道，云袖的故事，你现在已经完完整整地知道了。`,
        effects: { sanity: -10, yin: -10, setFlag: 'knowsCompleteMemory', setFlag: 'yunxiuMemoryRestored' },
        choices: [
            { text: '上楼，把这一切告诉云袖', next: 'memory_tell_yunxiu' },
            { text: '先看看棺材和其他物件', next: 'basement_coffins', condition: { flag: 'knowsCoffin' } },
            { text: '先看看棺材和其他物件', next: 'basement_coffins_normal' }
        ]
    },

    memory_tell_yunxiu: {
        title: '转述',
        text: `你回到七号厅，把在镜子里看到的一切，原原本本告诉了云袖。

春香班的开台戏，初见的纸花，青石河边的铜镜，还有那场大火——周生剪断红绳，把她推进暗门，自己却被横梁压住。

云袖听得很安静。她没有流泪，只是眼神一点一点地变了。

从怨恨，到震惊，到悲伤，最后，到一种深沉的、释然的安宁。

"原来，"她说，"他没有抛下我。他剪断红绳，是为了救我。他被压在火里的时候，还在看着我落水的地方。"

"他后来呢？" 她问。

你沉默了一下，然后说："档案上写，民国二十四年春，周生失踪。据传投青石河自尽，尸身未寻获。"

云袖闭上眼睛。

良久，她轻声说："他去河里找我了。"

她再睁开眼时，身上那股近百年的、浓重的怨气，肉眼可见地淡了下去。

"守夜人，"她说，"我想去青石河。我想去问他，这些年在水底，有没有等到我。"`,
        effects: { sanity: 20, yin: -30, setFlag: 'yunxiuWantsRiver' },
        choices: [
            { text: '带她去青石河', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } },
            { text: '先去找周生的棺材和遗物', next: 'basement_descent' },
            { text: '去找周生投河的记录', next: 'county_archive', effects: { time: 60 } }
        ]
    },

    // ============================================================
    // 批次3：周生线 + 守夜人传承线
    // ============================================================

    // 周生纸扎铺遗址
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

    // 县志馆深查
    county_archive: {
        title: '县志馆',
        text: `你去了县城的县志馆，在故纸堆里泡了一整天。

民国时期的县志保存得不算完整，但你在民国二十四年的警务日志里，找到了一条不起眼的记录：

[faded]"民国二十四年三月初九，青石镇周氏纸扎铺主周某，失踪。其学徒报案称，铺主留书出走，疑似投河。警方沿青石河搜寻三日，未获尸身。案卷悬置。"[/faded]

[faded]"附：学徒供词——师父临行前交代，'我去找师娘了。铺子里的东西都留给云袖姑娘，待她回来取。'"[/faded]

你在另一本民国二十六年的日志里，找到了那个学徒的后续：

[faded]"周氏纸扎铺学徒李某某，于铺中自缢身亡。遗书称：'师父走后，铺子空了。我守了三年，师娘还没回来。我等不下去了。'警方通知其原籍亲属，无人认领，遗体存县殡仪馆五号厅。"[/faded]

你合上卷宗，靠在椅背上。

一条青石河，一个纸扎铺，串起了三条人命。云袖、周生、还有那个连名字都没留下的学徒。

而他们三个，至今还散落在殡仪馆和河底，等了将近一百年。`,
        effects: { time: 120, sanity: -15, yin: 10, setFlag: 'knowsFullArchiveTruth' },
        choices: [
            { text: '回殡仪馆，把真相告诉云袖和学徒', next: 'archive_truth_reveal' },
            { text: '去找周生的墓', next: 'zhousheng_grave', effects: { time: 60 } }
        ]
    },

    archive_truth_reveal: {
        title: '真相',
        text: `你回到殡仪馆，先去五号厅。

那个守在床底下的学徒，听到你的脚步声，翻书声又响了起来。

"我都查到了。" 你蹲下身，对着床底说，"你师父，去青石河找师娘了。民国二十四年三月初九，投河，尸身没找到。"

床底沉默了很久。

"那……师娘呢？"

"师娘一直在七号厅。" 你说，"但她现在知道了真相。她不怨师父了。她想去河里见他。"

学徒的声音带上了哭腔："那我呢？我守了这么多年……师父和师娘，他们要走了吗？"

"你也该走了。" 你轻声说，"你师父临走前说，铺子里的东西都留给云袖姑娘。你替他守了这么多年，已经够了。"

床底又是一阵沉默。

然后，那摞登记册缓缓滑出来，整整齐齐地停在你脚边。

"那……我能跟师娘一起走吗？" 学徒的声音轻得像风，"我想看看师父和师娘，在一起的样子。"

"我去问问她。"`,
        effects: { sanity: 10, yin: -15, setFlag: 'apprenticeWantsToLeave' },
        choices: [
            { text: '去七号厅问云袖', next: 'yunxiu_apprentice_message', condition: { flag: 'knowsName' } },
            { text: '先去找周生的墓', next: 'zhousheng_grave', effects: { time: 60 } }
        ]
    },

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

    // 守夜人传承 —— 林叔的往事
    lin_shu_memory: {
        title: '林叔的往事',
        text: `守完一夜后，林叔来接班。

他看你熬得脸色发白，却精神出奇地好，便递给你一根烟，两人在殡仪馆后院坐下。

"你昨晚，见了她吧。" 林叔不是问句，是肯定。

你没否认。

林叔吐出一口烟，望着远处青石河的方向。

"我守了她三十年。" 他说，"我刚来这馆子的时候，才二十出头，比你还小。第一个夜班，就是七号厅。"

"我也怕过。" 他接着说，"她第一次睁眼，我吓得从椅子上摔下来，磕破了后脑勺。可后来我发现，她不害人。她只是想唱戏。"

林叔沉默了一会儿。

"我年轻的时候，也想帮她搭个戏台。可我不懂戏，搭不起来。后来我就想，等我找到一个懂行的守夜人，就把这茬交给他。"

他看了你一眼。

"周遥，你就是那个人。"

你愣住了。

林叔掐灭烟头，站起身。

"我快退休了。" 他说，"这馆子以后，就交给你了。七号厅那位云袖姑娘，也交给你。你比我有慧根。"

他从兜里掏出一本泛黄的小册子，递给你。

"这是上一代守夜人留给我的，现在给你。里面记的，都是这馆子里的规矩和故事。"`
,
        effects: { sanity: 15, yin: -10, setFlag: 'linShuPassedDown', addItem: '守夜人手记' },
        choices: [
            { text: '翻开那本守夜人手记', next: 'watcher_notebook' },
            { text: '谢过林叔，先回七号厅', next: 'enter_with_flashlight' }
        ]
    },

    watcher_notebook: {
        title: '守夜人手记',
        text: `你翻开那本泛黄的册子。

第一页，用毛笔写着四个大字：[faded]"阴阳簿 · 守"[/faded]。

往后翻，是一代代守夜人的记录。

第一代守夜人，民国二十三年。他记道：[faded]"今日收一具无名女尸，戏服，河中捞出。尸身不腐，似有执念。班主言，此乃春香班旦角云袖，死于戏台大火。嘱我善守之，待其执念消散。"[/faded]

第二代，民国三十年。记道：[faded]"云袖姑娘每岁子时必醒，求还戏台。我无力搭台，唯敬香守之。"[/faded]

第三代，建国后。记道：[faded]"馆子翻新，地下室封存。云袖姑娘物件，悉数移入，待有缘人。"[/faded]

……

第七代，林叔。记道：[faded]"我守了三十年。她不害人。我信，终有一日，有人能让她散了。"[/faded]

最后一页，是空白的。

林叔在旁边批了一行小字：[faded]"这一页，留给下一个守夜人。等你帮她唱完了戏，就把你的名字，写在这里。"[/faded]

你看着那页空白，忽然明白了一件事——

[whisper]你不仅仅是一个守灵人。你是这条延续了近百年的、守护之链上，最新的一环。[/whisper]

而云袖的戏，将在你手里，唱完最后一折。`,
        effects: { sanity: 20, yin: -15, setFlag: 'knowsWatcherLineage', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '回到七号厅，为云袖搭起戏台', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '先去地下室取齐物件', next: 'basement_descent' },
            { text: '去找齐所有线索再动手', next: 'patrol_corridor' }
        ]
    },

    // ============================================================
    // 批次4：民俗调查线 + 多夜推进 + 其他支线
    // ============================================================

    chunxiang_descendant_home: {
        title: '春香班后人',
        text: `你辗转打听，找到了春香班班主的后人——一个住在镇南养老院的八十岁老太太，姓孙，人称孙奶奶。

她的祖父就是当年春香班的班主。听说你是来问云袖的事，老人家的眼睛亮了。

"云袖姑姑啊！" 她拉着你的手，"我祖父一辈子最得意的，就是发现了云袖姑姑。他说，云袖姑姑是他见过的，嗓子最好的旦角。"

她颤巍巍地从枕头底下摸出一个红布包，打开，里面是一张泛黄的戏班合影，和一截断了的银簪子。

合影上，年轻的云袖站在正中间，笑得灿烂。

"我祖父说，云袖姑姑死后，戏班就散了。祖父一直想替她立个碑，可那时候兵荒马乱，没立成。这是他留给我的，说等太平了，一定要替云袖姑姑做点什么。"

她把合影和断簪子都塞到你手里。

"后生，你要是能替云袖姑姑了了心愿，就是替我们孙家也了了一桩。这照片和簪子，你拿去。云袖姑姑的，本就该归云袖姑姑。"`,
        effects: { time: 120, sanity: 10, yin: -10, setFlag: 'foundChunxiangPhoto', addItem: '春香班合影', addItem: '断银簪' },
        choices: [
            { text: '把合影带回七号厅给云袖看', next: 'chunxiang_photo_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '去戏曲研究所求证云袖的唱腔', next: 'opera_institute', effects: { time: 60 } }
        ]
    },

    chunxiang_photo_to_yunxiu: {
        title: '合影',
        text: `你把那张春香班的合影，放在云袖的枕边。

云袖低头看着照片上那个笑得灿烂的自己，身体僵住了。

"这是……我？" 她的声音颤抖，"我都快忘了，我笑起来是这个样子。"

她的手指轻轻抚过照片上每一个人的脸。班主、琴师、老生、花脸……最后停在自己身上。

"原来有人，把我们照下来了。" 她说，"原来我们春香班，真的存在过。"

她抬起头，看着你，眼里有了光。

"守夜人，"她说，"你答应我一件事。等我的戏唱完了，把这张照片，挂在七号厅的墙上。让以后来守夜的人，都看一眼。"

"我不只是七号厅里那具女尸。我是云袖。是春香班的旦角。是被人记住的，云袖。"

你郑重地点了点头。`,
        effects: { sanity: 20, yin: -25, setFlag: 'yunxiuSawPhoto', setFlag: 'yunxiuRemembered' },
        choices: [
            { text: '答应她，并为她搭起戏台', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '先去戏曲研究所，让她的唱腔被世人所知', next: 'opera_institute', effects: { time: 60 } }
        ]
    },

    opera_institute: {
        title: '戏曲研究所',
        text: `你带着从地下室找到的云袖手抄曲谱，去了省城的戏曲研究所。

一位研究民国戏曲的老教授接待了你。他戴上老花镜，小心翼翼地翻看那本曲谱，越看越激动。

"这是孤本！" 老教授的声音都抖了，"春香班的曲谱，学界找了半个多世纪，一直以为在战火里毁了。你这是从哪里……"

你把云袖的故事简单讲了一遍。老教授听得入了神，摘下眼镜擦了擦眼角。

"云袖……"他喃喃，"我会查证这段历史。如果属实，她的名字，应该被写进戏曲史。"

三个月后，老教授给你寄来一本刚出版的学术专著，扉页上写着：

[faded]"谨以此书，纪念春香班旦角云袖。她唱过的戏，终于有人听见了。"[/faded]

你把这本书，放在了七号厅的灵床边。`,
        effects: { time: 180, sanity: 25, yin: -30, setFlag: 'yunxiuInHistory' },
        choices: [
            { text: '回七号厅告诉云袖这个消息', next: 'opera_to_yunxiu', condition: { flag: 'knowsName' } }
        ]
    },

    opera_to_yunxiu: {
        title: '载入',
        text: `你把那本学术专著放在云袖的灵床边，告诉她：

"云袖，你的名字，被写进书里了。以后所有研究戏曲的人，都会知道春香班，都会知道你。"

云袖看着那本书的封面，看着上面印着自己的名字。

她的身影，开始变得透明。不是因为消散，而是因为，她身上的执念，一点一点地化成了光。

"守夜人，"她的声音空灵得像风，"我的戏，真的唱完了。"

她飘到灵床中央，对着空荡荡的七号厅，深深地福了一福——像是谢幕。

"我不再是困在这里的怨魂了。" 她说，"我是云袖。被记住的，唱过《牡丹亭》的，云袖。"`,
        effects: { sanity: 30, yin: -40, setFlag: 'yunxiuFulfilled' },
        choices: [
            { text: '送她最后一程', next: 'coffin_final_rite', condition: { flag: 'foundCoffin' } },
            { text: '为她搭起戏台，唱完最后一折', next: 'promise_help' }
        ]
    },

    // 多夜推进 —— 第二夜
    night_two_dawn: {
        title: '第二夜',
        text: `天亮了，林叔来接班。

你把昨夜发生的事，简略地告诉了他。林叔听完，沉默良久。

"你比我有慧根。" 他最后说，"有些事，我守了三十年都没办成。也许，该由你来办了。"

他拍了拍你的肩："今晚你还来。那位云袖姑娘，认你了。"

你回去睡了一整天，梦里全是青石河、戏台、和那场火。

夜幕再次降临，你回到殡仪馆。

七号厅的门虚掩着。你推开门，桂花香扑面而来。

云袖已经坐在了灵床上，等你。

"守夜人，"她说，"昨夜你说的那些——周生的信、棺材、青石河——我想亲眼去看看。"

"可你是……"

"到了夜里，"她轻轻一笑，"我能出去一小会儿。趁着子时到寅时，魂魄未散，我能跟你走一趟。"`,
        effects: { sanity: 5, yin: -5, time: 60, setFlag: 'nightTwo' },
        choices: [
            { text: '带她去地下室看她生前的物件', next: 'basement_descent' },
            { text: '带她去青石桥找周生的痕迹', next: 'zhousheng_bridge', effects: { time: 60 } },
            { text: '先带她去五号厅见那个学徒', next: 'hall_five_apprentice', condition: { flag: 'foundApprenticeRecord' } }
        ]
    },

    // 第三夜 —— 真相大白后的抉择
    night_three_choice: {
        title: '第三夜',
        text: `又是新的一夜。

经过前两夜，你已经把云袖、周生、学徒的故事，全部拼凑完整了。

七号厅里，柚木棺材已经摆好，曲谱摊在棺盖，头面摆在棺头。一切都准备就绪。

云袖站在棺材前，看着这一切，久久没有说话。

"守夜人，"她终于开口，"我该怎么走，你来定。"

"我可以在棺材里，唱完最后一折，然后安息。"

"我可以去青石河，找周生，和他一起散去。"

"我可以让世人记住我，把名字写进历史。"

"也可以……" 她顿了顿，"就这样守着七号厅，再唱一百年的戏。"

她看着你，等你的决定。

[red]这一夜，是最后的抉择。[/red]`,
        effects: { sanity: 10, yin: -10, setFlag: 'nightThree' },
        choices: [
            { text: '让她在棺材戏台上唱完，然后安息', ending: 'hidden_stageCoffinFarewell', condition: { flag: 'riteComplete' } },
            { text: '送她去青石河找周生', next: 'coffin_to_river', condition: { flag: 'yunxiuReadyToMeet' } },
            { text: '把她的故事写成书，让世人铭记', ending: 'hidden_yunxiuBook', condition: { flag: 'yunxiuRemembered' } },
            { text: '让她留下，继续守着七号厅', ending: 'hidden_eternalAudience' }
        ]
    },

    // ============================================================
    // 批次8：春香班其他死难者平行线
    // ============================================================

    // 火灾死难者名册 —— 从地下室铁皮柜发现
    fire_victim_list: {
        title: '死难名册',
        text: `你继续翻地下室铁皮柜里那摞旧登记册，在一本民国二十三年的殡葬记录里，找到了那场火灾的完整死难名单：

[faded]"民国二十三年九月初九，青石戏台坍塌起火。死难者共五人：

一、春香班旦角云袖，女，十七岁，尸体失踪（实为入河）；

二、春香班老生秦鸣远，男，四十二岁，火场中为救观众重返，殉职；

三、春香班花脸赵铁柱，男，三十五岁，横梁砸中头部，当场身亡；

四、春香班琴师孙瞎子，男，六十岁，被踩踏致死；

五、青石镇纸扎铺周生，男，二十岁，重伤，下落不明（实为投河）。"[/faded]

你手指一顿。除了云袖和周生，还有三个人死在那场火里。老生、花脸、琴师。

[faded]那些人，他们的魂魄，又去了哪里？[/faded]

你想起一件事——青石镇老戏台的废墟，至今夜里还能听见唱戏声。如果云袖的执念把她困在了殡仪馆，那另外三个人的执念，会不会还困在那座烧塌的戏台下面？`,
        effects: { sanity: -15, yin: 15, setFlag: 'knowsOtherVictims' },
        choices: [
            { text: '去青石戏台废墟找他们的踪迹', next: 'old_stage_victims', effects: { time: 60 } },
            { text: '先查另外三个人的身份', next: 'fire_victim_detail' }
        ]
    },

    fire_victim_detail: {
        title: '三人记',
        text: `你继续翻阅档案，拼凑出另外三位死难者的生平。

[faded]秦鸣远，老生。青石镇人氏，唱戏二十余年，是春香班的台柱子之一。家中有一妻一女。火灾当夜，他本已逃出，却看见台下一个孩子被困，返身去救。孩子救出来了，他被火封在台上了。[/faded]

[faded]赵铁柱，花脸。外乡人，体壮如牛，演关公、钟馓最拿手。据说火灾前夜他做了个梦，梦见自己卸了花脸妆，露出一张苍白的脸。第二天他就死在了横梁下。镇上人说他"被梦里那张脸叫走了"。[/faded]

[faded]孙瞎子，琴师。眼盲，但耳力极好，能听出云袖唱腔里最细微的颤音。火灾时人群奔逃，他被撞倒，再没起来。死时怀里还紧紧抱着那把跟了他一辈子的二胡。[/faded]

三个人，三种死法。一个为救人，一个被梦兆，一个死于踩踏。

但他们的共同点是：都死在了戏台上，都没能唱完最后一出。

[whisper]和云袖一样，他们的戏，也散了场。[/whisper]`,
        effects: { sanity: -10, yin: 10, setFlag: 'knowsVictimDetails' },
        choices: [
            { text: '去青石戏台废墟超度他们', next: 'old_stage_victims', effects: { time: 60 } },
            { text: '去找他们的后人', next: 'victim_descendants' }
        ]
    },

    old_stage_victims: {
        title: '废墟三魂',
        text: `你请了假，再次赶到青石镇。

老戏台的废墟还在。烧焦的木桩、塌了一半的台基、地上爬满了荒草。镇上人夜里不敢靠近，说这儿"邪"。

你站在废墟中央，闭上眼。

风过荒草的声音里，你听见了——

不是云袖的唱腔，而是三个男人的声音。

一个苍凉的、唱老生的男声：[whisper]"救……出来了吗……那个孩子……"[/whisper]

一个浑厚的、唱花脸的男声：[whisper]"我的脸……卸不下来了……"[/whisper]

一个沙哑的、哼琴师的调子：[whisper]"我的二胡……弦断了……"[/whisper]

三个声音重叠在一起，像一出永远唱不完的群戏。

你睁开眼。废墟上空无一人，但你能感觉到，他们就在这里，困了近百年，反复重演着火起的那一刻。

[faded]他们和云袖一样，需要有人帮他们散场。[/faded]`,
        effects: { time: 60, sanity: -15, yin: 20, visual: 'flicker' },
        choices: [
            { text: '告诉秦鸣远，那个孩子活下来了', next: 'qin_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '帮赵铁柱卸掉那张花脸', next: 'zhao_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '替孙瞎子修好那把二胡', next: 'sun_release', condition: { flag: 'knowsVictimDetails' } },
            { text: '三魂齐度', next: 'three_souls_rite', condition: { flag: 'knowsVictimDetails' } }
        ]
    },

    qin_release: {
        title: '老生散',
        text: `你对着废墟，大声说："秦先生！那个孩子，活下来了！他叫张小宝，今年已经八十多岁了，住在镇南！他一辈子都在说，是春香班的老生救了他的命！"

风声停了片刻。

那个苍凉的男声再次响起，但这次没有疑问，只有释然：

[whisper]"活下来了……就好……"[/whisper]

废墟的角落，一缕青烟升起，像是戏台上飘散的香火气，转瞬即逝。

你听见一个极轻的、完整的唱段，是老生的《空城计》——

[whisper]"我本是卧龙岗散淡的人……"[/whisper]

唱到一半，声音渐渐远了。

秦鸣远散了。他的戏，终于唱完了。`,
        effects: { sanity: 10, yin: -10, setFlag: 'qinReleased' },
        choices: [
            { text: '继续超度赵铁柱', next: 'zhao_release' },
            { text: '继续超度孙瞎子', next: 'sun_release' },
            { text: '三人皆度，回殡仪馆', next: 'enter_with_flashlight', condition: { flag: 'sunReleased', flagValue: { key: 'zhaoReleased', value: true } } }
        ]
    },

    zhao_release: {
        title: '花脸卸',
        text: `你走到废墟中央那根烧焦的横梁前——据档案，赵铁柱就是死在这里。

你蹲下身，用手扒开横梁下的灰烬。灰烬深处，有一块已经风化的、画着花脸妆的戏妆残片。红的、黑的、白的油彩，已经褪得几乎看不见，但还能辨认出那是关公的脸谱。

你想起档案里的话："他梦见自己卸了花脸妆，露出一张苍白的脸。"

"赵先生，"你轻声说，"你演了一辈子关公，忠义千秋。可关公也得卸妆睡觉。你不必再戴着这张脸了。"

你把那块戏妆残片，轻轻从灰烬里取出来，放进手心。

残片在你掌心慢慢软化，油彩一层层剥落，最后只剩下一小撮干净的灰。

[whisper]"卸……下来了……"[/whisper]

一个浑厚的男声，带着如释重负的疲惫。

废墟的另一角，又升起一缕青烟。`,
        effects: { sanity: 10, yin: -10, setFlag: 'zhaoReleased' },
        choices: [
            { text: '继续超度秦鸣远', next: 'qin_release', condition: { noFlag: 'qinReleased' } },
            { text: '继续超度孙瞎子', next: 'sun_release' },
            { text: '三人皆度，回殡仪馆', next: 'enter_with_flashlight', condition: { flag: 'qinReleased' } }
        ]
    },

    sun_release: {
        title: '二胡续弦',
        text: `你找到戏台侧后方——那是琴师的位置。

灰烬里，有一把已经烧得只剩骨架的二胡。两根弦都断了，琴筒也裂了。

你想起档案："死时怀里还紧紧抱着那把二胡。"

你把二胡的残骸小心地捡起来。它在你手里轻得像纸，可你能感觉到，里面有一个人一辈子的重量。

"孙先生，"你说，"弦断了，可以再续。您不用一直抱着它了。"

你从口袋里掏出一根线——是从周生桥头找到的那截红绳的碎头。你把它缠在断弦处，打了个结。

[red]就在打结的瞬间，你听见了。[/red]

一个沙哑的、跑了调的、却充满喜悦的琴声，从二胡的残骸里溢出来。

[whisper]"弦……接上了……"[/whisper]

琴声响了一会儿，然后渐渐弱了，弱成一丝，最后消失在风里。

废墟的第三角，最后一缕青烟升起。`,
        effects: { sanity: 15, yin: -15, setFlag: 'sunReleased' },
        choices: [
            { text: '继续超度秦鸣远', next: 'qin_release', condition: { noFlag: 'qinReleased' } },
            { text: '继续超度赵铁柱', next: 'zhao_release', condition: { noFlag: 'zhaoReleased' } },
            { text: '三人皆度，回殡仪馆', next: 'three_souls_complete', condition: { flag: 'qinReleased' } }
        ]
    },

    three_souls_rite: {
        title: '群戏散',
        text: `你站在废墟正中央，依次对三个方向说话。

对老生位："秦先生，孩子活下来了。"

对花脸位："赵先生，脸卸了。"

对琴师位："孙先生，弦续上了。"

说完，你闭上眼，静静等待。

风过废墟，发出呜呜的声响，像是戏台的幕布最后一次抖动。

然后，三个声音同时响起，齐齐唱了一句——

[whisper]"今日散场，各自归家。"[/whisper]

这是一句戏班的散场词。你听何伯说过，老戏班每演完一出，班主都会喊这句。

可这一次，是三个亡魂，对着彼此喊的。

声音渐渐远了。废墟上空，三缕青烟汇成一股，朝青石河的方向飘去。

[whisper]他们去找云袖和周生了。同一个班子的，总要齐齐整整地走。[/whisper]

你睁开眼，废墟恢复了真正的死寂。

但这一次，是干净的死寂。`,
        effects: { sanity: 25, yin: -30, setFlag: 'threeSoulsReleased', setFlag: 'qinReleased', setFlag: 'zhaoReleased', setFlag: 'sunReleased' },
        choices: [
            { text: '回殡仪馆告诉云袖，她的同伴走了', next: 'three_souls_to_yunxiu', condition: { flag: 'knowsName' } }
        ]
    },

    three_souls_complete: {
        title: '三人皆散',
        text: `三缕青烟都散尽了。

废墟上只剩下你一个人。风过荒草的声音，恢复了普通的风声，不再有唱腔。

你长舒一口气。

三个困了近百年的亡魂，终于散场了。

[red]可你忽然意识到一件事——[/red]

云袖，作为春香班的旦角，是最后一个还在"唱戏"的人。

如果她的同伴都走了，她是不是也该走了？

[whisper]她的戏台，是时候真正搭起来了。[/whisper]`,
        effects: { sanity: 15, yin: -15, setFlag: 'threeSoulsReleased' },
        choices: [
            { text: '回殡仪馆告诉云袖', next: 'three_souls_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '去找他们的后人', next: 'victim_descendants' }
        ]
    },

    three_souls_to_yunxiu: {
        title: '同伴',
        text: `你回到七号厅，把废墟上发生的事告诉云袖。

云袖听完，沉默了很久。

"秦叔、赵哥、孙师傅……都走了吗？" 她的声音很轻。

"都走了。"你说，"他们最后喊了一句'各自归家'。"

云袖的眼角，缓缓流下一滴泪。

"我们春香班，"她低声说，"散了快一百年了。我以为，我是最后一个还守着戏的人。"

她抬起头，看着七号厅的天花板，像是能透过层层楼板，看见青石镇废墟上空那三缕飘散的青烟。

"他们也等了我快一百年。" 她说，"等我和他们一起，回家。"

她转向你，眼神里没有了犹豫。

"守夜人，"她说，"我也该走了。我的戏，唱完了。班子里的人，都在河那头等我。"`,
        effects: { sanity: 20, yin: -30, setFlag: 'yunxiuReadyToDepart', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '为她搭起最后的戏台', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '送她去青石河与同伴重逢', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } }
        ]
    },

    // 三人后人支线
    victim_descendants: {
        title: '后人',
        text: `你在青石镇多方打听，找到了三位死难者的后人。

秦鸣远的女儿，如今已是八十多岁的老太太。她父亲死时她才三岁，对父亲几乎没记忆，但家里一直供着父亲的灵位。听说你提起了她父亲救孩子的事，老人家哭了。

"原来……我爸是为了救人。"她说，"我一直以为他是逃不出来。"

赵铁柱没有后人。他是外乡人，死后无人收殓，骨灰被镇上集体掩埋在乱葬岗。你在乱葬岗的一角，找到了一块没有名字的小碑。

孙瞎子有个徒弟，是镇上现在的盲人按摩师。他没见过师父，但师父的二胡技艺传到了他手里。你找到他时，他正在给客人按肩，旁边放着一把他自己做的二胡。

"师父的琴艺是春香班传下来的。"他说，"虽然我没见过他，但每次拉琴，我都觉得他在我身后听。"`,
        effects: { time: 120, sanity: 10, yin: -10, setFlag: 'metVictimDescendants' },
        choices: [
            { text: '请孙瞎子的徒弟拉一曲', next: 'sun_disciple_play' },
            { text: '回废墟超度三人', next: 'old_stage_victims' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    sun_disciple_play: {
        title: '一曲',
        text: `孙瞎子的徒弟——一个四十多岁的中年盲人——坐下来，拿起二胡。

"拉什么？"他问。

"《牡丹亭》的过门。"你说。

他愣了一下："这是老曲子了，现在没什么人听。您怎么知道这个？"

"我听过。"你说，"从一个老琴师那里。"

他没再问，调了调弦，开始拉。

琴声一响，你浑身起了一层鸡皮疙瘩。

那琴声，和你在废墟上听到的、孙瞎子"弦接上了"后那段琴声，几乎一模一样。同样的颤音，同样的滑指，同样的、属于盲人特有的、靠耳朵练出来的精准。

[whisper]师父的手艺，传到了徒弟手里。[/whisper]

拉到一半，徒弟忽然停下来，侧着耳朵听了一会儿。

"怪了。"他说，"我总觉得，身后有人在跟我合。"

你回头看了看。按摩铺的角落里，空无一人。

但那里，分明有一把椅子，正对着二胡的位置，像是留给某个看不见的听众的。

[whisper]也许是有的。[/whisper]`,
        effects: { sanity: 20, yin: -15, setFlag: 'sunDisciplePlayed', setFlag: 'sunReleased' },
        choices: [
            { text: '谢过徒弟，回废墟', next: 'old_stage_victims' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    // ============================================================
    // 批次9：周生视角回忆线（从地下室第二面镜子）
    // ============================================================

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

    old_opera_house_ruins: {
        title: '戏园旧址',
        text: `你找到了春香班当年驻唱的戏园子旧址。

如今这里是个废品收购站。但走进后院，还能看见当年戏园子的青砖地基，和半截埋在土里的、漆金剥落的"春香"二字门楣。

收购站的老板是个中年汉子，看见你盯着那半截门楣，主动搭话：

"你也是来找那个戏班的？前些年来过几拨人，有写书的，有搞研究的。这地基下面，据说埋了不少戏班的旧物。我不敢动，怕招晦气。"

他指了指后院角落的一个土坑："你要是有兴趣，自己挖挖看。挖出来的东西归你，别跟人说就行。"`,
        effects: { time: 60, sanity: -5, yin: 5 },
        choices: [
            { text: '在土坑里挖一挖', next: 'opera_house_dig' },
            { text: '问老板戏园子当年的事', next: 'opera_house_boss_story' }
        ]
    },

    opera_house_dig: {
        title: '出土',
        text: `你蹲在土坑边，用手一点点刨开浮土。

坑不深，大约两尺。底下埋着一个油布包，包得很严实。

你打开油布包。

里面是一摞戏单——春香班当年的演出戏单，从民国二十年一直到民国二十三年，每一场戏的剧目、演员、日期都印得清清楚楚。

最后一张戏单，日期是民国二十三年九月初九。剧目：全本《牡丹亭》。主演：云袖。

戏单的边角被火烧焦了，但中央的字还清晰。

戏单下面，压着一样东西——

是一朵纸扎的牡丹。颜色已经褪尽，但花瓣一层一层的，扎得极其细致。

[faded]和周生当年扎给云袖的，一模一样。[/faded]

你把纸花捧在掌心。它在土里埋了将近一百年，却一点没烂，像是有人日日擦拭。`,
        effects: { time: 30, sanity: 5, yin: -5, addItem: '周生的纸牡丹', addItem: '春香班戏单', setFlag: 'dugOperaHouse' },
        choices: [
            { text: '把纸花带回去给云袖', next: 'paper_peony_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '问老板这花的事', next: 'opera_house_boss_story' }
        ]
    },

    opera_house_boss_story: {
        title: '收购站老板',
        text: `你问老板这戏园子的往事。

老板挠挠头："我也是听我爸说的。我爸小时候，这戏园子还在。他说春香班是这儿最红的班子，特别是有个叫云袖的旦角，全镇的人都追着听。

"后来着了火，死了好几个人，戏园子就废了。我爸说，火是意外，戏台老了吗，木头都朽了。可镇上老人不信，说火是有人故意点的。"

你心里一动："谁点的？"

老板压低声音："不知道。但我爸说，火灾前一天，有人看见一个外乡人在戏台后头转悠。那人戴斗笠，看不清脸。火灾后就再没出现过。"

[red]一个戴斗笠的外乡人。在火灾前一天，出现在戏台后。[/red]

[whisper]那场火，也许根本不是意外。[/whisper]`,
        effects: { sanity: -10, yin: 15, setFlag: 'knowsArsonMystery' },
        choices: [
            { text: '深查纵火案', next: 'arson_investigation' },
            { text: '先去县志馆查', next: 'county_archive', effects: { time: 60 } }
        ]
    },

    paper_peony_to_yunxiu: {
        title: '还花',
        text: `你把那朵从戏园旧址挖出来的纸牡丹，放在云袖的枕边。

云袖低头看着那朵褪色的纸花，身体剧烈地颤抖起来。

"这是……" 她的声音哽咽，"周生扎的。开台那天他送我的第一朵。我以为它烧没了。"

她把纸花贴在胸口，像是抱着一个失而复得的、最重要的东西。

"他扎了一辈子纸花给我。" 她说，"我以为最后一朵，是火场里没来得及送出的那束。原来，第一朵还在。"

她抬起头，看着你，眼里有了从未有过的、完整的光。

"守夜人，"她说，"有了这朵花，我就有勇气走了。这是周生送我的第一份礼，也是我带走的第一份念想。"

[whisper]起点和终点，在这一刻，重合了。[/whisper]`,
        effects: { sanity: 25, yin: -30, setFlag: 'yunxiuGotFirstPeony', setFlag: 'yunxiuReadyToDepart' },
        choices: [
            { text: '为她搭起戏台，送她最后一程', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '深查纵火案，替她讨个公道', next: 'arson_investigation' }
        ]
    },

    arson_investigation: {
        title: '纵火疑云',
        text: `你开始调查那场"意外"。

县志馆的警务日志里，火灾的定性是"戏台年久失修，烛火引燃幕布"。但你查到当时验尸官的一份备注：

[faded]"死者赵铁柱（花脸）后脑有钝器伤痕，非火灾所致。疑为火灾前已遭袭击。"[/faded]

这条备注被夹在卷宗最末，没有人深究。

你又查到，火灾前一个月，青石镇来了一伙外地商人，想买下戏园子的地皮盖货栈。班主不卖。火灾后，那伙商人低价买下了地皮——也就是后来变成废品收购站的那块地。

[red]那场火，不是意外。是有人为了地皮，纵火灭口。[/red]

纵火的人早已作古，案子无法再追。但真相，至少浮出了水面。

云袖、周生、秦鸣远、赵铁柱、孙瞎子——五条人命，是因为一桩生意。`,
        effects: { time: 180, sanity: -15, yin: 10, setFlag: 'knowsArsonTruth' },
        choices: [
            { text: '回殡仪馆，把真相告诉云袖', next: 'arson_truth_to_yunxiu', condition: { flag: 'knowsName' } },
            { text: '去纵火者后人那里讨说法', next: 'arson_descendant' }
        ]
    },

    arson_truth_to_yunxiu: {
        title: '公道',
        text: `你把纵火案的真相，原原本本告诉云袖。

她听完，沉默了很久。

"原来……"她轻声说，"原来我们不是死于意外。是有人，为了一块地皮，烧死了五个人。"

她的眼里没有恨，只有一种深沉的悲凉。

"那个戴斗笠的外乡人，"她问，"他还活着吗？"

"早死了。"你说，"纵火者和他的后人，都没了。案子没法再追。"

云袖点点头。

"也好。"她说，"恨一个已经不在的人，太累了。"

她抬起头，看着七号厅的天花板。

"但我要记住。"她说，"我和周生、和班子里的人，不是白白死的。我们死，是因为有人贪。以后，你要把这个也写进去。让读我们故事的人知道，贪念能烧死五条命。"

你郑重地点了点头。`,
        effects: { sanity: 15, yin: -20, setFlag: 'yunxiuKnowsArson', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '答应她，为她讨回公道的方式就是铭记', ending: 'hidden_arsonExposed', condition: { flag: 'yunxiuRemembered' } },
            { text: '继续帮她搭戏台', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } }
        ]
    },

    arson_descendant: {
        title: '讨公道',
        text: `你查到了纵火者后人的下落。

那户人家如今已经败落，住在镇外的一个小村子里。纵火者的孙子是个五十多岁的农民，听说你提起当年的事，脸色惨白。

"那……那都是我爷爷干的事。"他结结巴巴，"跟我没关系。"

"我没让你负责。"你说，"我只想让你知道，你家这块地皮上，躺着五条人命。"

农民沉默了很久，最后从屋里拿出一沓钱："这……这是我能出的。你拿去，给那些人立个碑吧。"

你没有接钱。

"碑会立的。"你说，"用你爷爷的名字立。让以后路过的人都知道，这块地，是用五条命换的。"

农民的脸更白了。

[whisper]公道，有时候不需要法庭。只需要一个不被遗忘的名字。[/whisper]`,
        effects: { time: 120, sanity: 5, yin: -10, setFlag: 'arsonDescendantConfronted' },
        choices: [
            { text: '回殡仪馆告诉云袖', next: 'arson_truth_to_yunxiu', condition: { flag: 'knowsName' } }
        ]
    },

    // 桂花巷与老茶楼
    osmanthus_alley: {
        title: '桂花巷',
        text: `你听何伯提起过青石镇有条桂花巷——云袖生前住的地方。

你找到那条巷子。如今已经拆迁大半，只剩几间老房子。巷口有一棵老桂花树，树龄据说超过百年。

树下坐着个老太太，正在纳鞋底。她看见你，眯着眼打量了一会儿。

"后生，你是来找云袖姑娘的？"她问。

你愣住了："您怎么知道？"

老太太笑了笑："这棵树下，每隔几年就来一个找云袖姑娘的年轻人。上一个，是三十年前一个姓林的殡仪馆守夜人。"

[whisper]林叔。[/whisper]`,
        effects: { time: 60, sanity: -5, yin: 5, setFlag: 'metOsmanthusAlleyGranny' },
        choices: [
            { text: '问她和云袖的事', next: 'alley_granny_yunxiu' },
            { text: '问林叔当年的事', next: 'alley_granny_linshu' }
        ]
    },

    alley_granny_yunxiu: {
        title: '桂花树下',
        text: `"我小时候见过云袖姑娘。"老太太说，"那时候我才七八岁。她住巷子最里头那间，每天清晨在这棵树下吊嗓子。

"她人好，看见我们这些小孩，总是笑。有时候还给我们桂花糕吃——她自己做的，用这棵树上的桂花。

"她出事那天，这棵树突然落了一地的桂花，像是知道什么似的。镇上人都说，是云袖姑娘的魂，最后回来看了一眼。"

老太太指了指树根处："你要是有心，给她磕个头吧。这棵树的根，盘着她不少念想。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'grannyToldOsmanthus' },
        choices: [
            { text: '在树下磕三个头', next: 'alley_granny_kowtow', effects: { sanity: 5 } },
            { text: '问林叔当年的事', next: 'alley_granny_linshu' },
            { text: '告辞', exit: true, effects: { sanity: 5 } }
        ]
    },

    alley_granny_kowtow: {
        title: '三拜',
        text: `你走到桂花树下，对着树根，恭敬地磕了三个头。

第一个头，磕下去，老桂花树无风自动，落了几朵桂花在你肩上。

第二个头，磕下去，你感觉一阵极轻的风拂过脸颊，像是有人在你耳边叹息。

第三个头，磕下去，你听见——

[whisper]"谢谢你还记得我。"[/whisper]

那声音不在你耳边，而是在你心里。

你抬起头。树下空无一人，老太太不知什么时候已经回屋了。只有满地的桂花，香气浓郁得像是某个季节错乱了。

你捡起一朵桂花，夹进口袋。也许，这就是云袖给你的、最后的祝福。`,
        effects: { sanity: 20, yin: -20, addItem: '桂花巷的桂花', setFlag: 'yunxiuBlessed' },
        choices: [
            { text: '回殡仪馆', next: 'enter_with_flashlight' },
            { text: '去老茶楼看看', next: 'old_teahouse' }
        ]
    },

    alley_granny_linshu: {
        title: '林叔当年',
        text: `"林家那小子啊。"老太太笑了，"三十年前他来的时候，比你还年轻，胆子小得跟老鼠似的。

"他在那棵树下坐了一整天，最后也没敢去殡仪馆。后来他又来了好几次，每次都在树下坐一会儿。第四次来的时候，他跟我说，他决定了，要去当守夜人，守着云袖姑娘。

"我问他为什么。他说，'我总觉得她在等我。'

"这一守，就是三十年。"

老太太叹了口气。

"他是个好孩子。云袖姑娘能有他守着，也是福气。现在轮到你了，后生。你比他有慧根。"`,
        effects: { sanity: 10, yin: -5, setFlag: 'knowsLinShuPast' },
        choices: [
            { text: '去老茶楼', next: 'old_teahouse' },
            { text: '回殡仪馆', next: 'enter_with_flashlight' }
        ]
    },

    old_teahouse: {
        title: '老茶楼',
        text: `你找到了青石镇仅存的一家老茶楼。

茶楼还是民国时期的木结构，二楼有个小戏台，如今已经不再演戏，只供老人喝茶听评书。

你点了一壶茶，坐在角落。茶楼的老板是个六十多岁的老头，听说你对春香班感兴趣，主动坐过来聊。

"我爹生前是这茶楼的跑堂。"他说，"春香班当年红火的时候，班里的人天天来喝茶。云袖姑娘最爱坐你这个位置。

"她说，这个位置能看见戏台，又能看见门口，是最好的。"

你看了看自己坐的位置。靠窗，视野开阔，确是个好位子。

老板从柜台后拿出一本旧账册："这是我爹留下的茶楼账本，里面有春香班当年的赊账记录。云袖姑娘赊了不少桂花糕的账——她爱吃，可戏班穷，赊着赊着就还不上。后来班主帮她结了，但账本上还留着记录。"

你翻开账本。云袖的名字出现了二十多次，每次都是"桂花糕两块"。`,
        effects: { time: 60, sanity: 5, yin: -5, addItem: '茶楼旧账本', setFlag: 'visitedTeahouse' },
        choices: [
            { text: '点两块桂花糕，一块给云袖', next: 'teahouse_osmanthus_cake' },
            { text: '问老板其他春香班的事', next: 'teahouse_other_members' }
        ]
    },

    teahouse_osmanthus_cake: {
        title: '桂花糕',
        text: `你跟老板说："来两块桂花糕。"

老板愣了一下，然后会意地笑了。他端来两块桂花糕，一块放在你面前，一块放在你对面——云袖生前常坐的那个位置。

"这另一块，算我请的。"老板说，"替我爹请的。他生前总念叨，云袖姑娘的桂花糕账，他一直没好意思催。"

你看着对面那块桂花糕。

茶楼里其他客人都没注意到什么异样。但你能感觉到，对面那个空位上，有什么东西，正在静静地"吃"那块糕。

过了一会儿，对面的桂花糕，少了一小角。

[whisper]她来过了。[/whisper]`,
        effects: { sanity: 20, yin: -15, setFlag: 'yunxiuAteCake', setFlag: 'yunxiuComforted' },
        choices: [
            { text: '静静坐一会儿，陪她喝完这壶茶', ending: 'hidden_teahouseReunion' },
            { text: '问老板其他春香班的事', next: 'teahouse_other_members' }
        ]
    },

    teahouse_other_members: {
        title: '班里的人',
        text: `你问老板春香班其他成员的事。

老板翻了翻账本："除了云袖，还有老生秦鸣远、花脸赵铁柱、琴师孙瞎子。这四位是班里的台柱子。

"秦鸣远人厚道，每次来喝茶都多给小费。赵铁柱嗓门大，进门总要喊一嗓子。孙瞎子话少，总是坐在角落听别人说。

"对了，还有班主孙老胖——孙奶奶的爷爷。他最疼云袖，逢人就夸'我家袖儿'。

"这五个人，加上那个纸扎铺的周生，是茶楼的常客。他们赊的账，我爹从来没真要过。"

老板合上账本。

"火后，他们一个都没再来。我爹把他们的赊账一笔一笔划了，说是替他们'结了尘世的账'。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'knowsTeahouseMembers' },
        choices: [
            { text: '替他们把账还了', next: 'teahouse_pay_debt' },
            { text: '去废墟超度他们', next: 'old_stage_victims', condition: { flag: 'knowsVictimDetails' } }
        ]
    },

    teahouse_pay_debt: {
        title: '还账',
        text: `你掏出钱，要把春香班的赊账还了。

老板摆摆手："我爹说了，他们的账，早结了。你给钱，反而是不敬。"

你想了想，把钱收起来。

"那我换个方式还。"你说，"我替他们，把这茶楼的戏台重新修一修。让以后来喝茶的人，还能看见戏台。"

老板愣住了，然后笑了。

"那敢情好。"他说，"戏台修好了，我请你喝第一壶茶。"

半年后，老茶楼的小戏台翻新完工。开台那天，老板请了镇上的票友来唱了一出《牡丹亭》。

你坐在云袖生前常坐的位置，听完了整出戏。

[whisper]戏台上没有人。可你总觉得，有个穿红戏服的身影，在台上和你对视。[/whisper]`,
        effects: { time: 180, sanity: 25, yin: -25, setFlag: 'teahouseStageRestored', setFlag: 'yunxiuRemembered' },
        choices: [
            { text: '回殡仪馆告诉云袖', next: 'enter_with_flashlight' }
        ]
    },

    // ============================================================
    // 批次11：第一代守夜人 + 神秘来电者
    // ============================================================

    first_watcher_journal: {
        title: '初代手记',
        text: `你在林叔给你的守夜人手记里，发现了夹在最后一页的一张更老的、脆得快碎的纸。

那是第一代守夜人的亲笔。字迹是繁体竖排，毛笔写的：

[faded]"吾名陈守一，青石镇人。民国二十三年秋，镇上戏台大火，春香班五人罹难。其中旦角云袖，尸身入河，数日后浮起，被送至本馆。

"尸身不腐，面如生人。吾从业三十年，未见此状。班主言，云袖姑娘执念深，魂未散，需善守之。

"吾不才，愿守此灵。待有缘人至，助姑娘了却心愿，吾之责尽矣。

"陈守一，民国二十三年冬书。"[/faded]

陈守一。第一代守夜人。

你忽然想起，殡仪馆后山的壁龛里，林叔带你去扫过墓。最老的一座，墓碑上的名字正是——陈守一。

[whisper]原来，他是这一切的起点。[/whisper]`,
        effects: { sanity: 5, yin: -5, setFlag: 'foundFirstWatcherJournal' },
        choices: [
            { text: '去后山拜陈守一的墓', next: 'first_watcher_grave' },
            { text: '回七号厅继续守云袖', next: 'enter_with_flashlight' }
        ]
    },

    first_watcher_grave: {
        title: '初代守墓',
        text: `你来到殡仪馆后山的壁龛。

陈守一的墓碑最老，石头都风化了，但上面的字还能辨认：

[faded]"陈公讳守一之墓。生卒不详，守灵一生，善始善终。"[/faded]

碑前有人最近上过香——香灰还是新的。你猜是林叔。

你在碑前站定，按规矩鞠了三个躬。

"陈先生，"你说，"我是第七代守夜人。您守的那位云袖姑娘，我快帮她了却心愿了。"

风吹过壁龛，发出呜呜的声响。你总觉得，那是有人在回应。

就在这时，你注意到碑的侧面，刻着一行极小的字，不仔细看根本看不见：

[faded]"吾无能，仅能守。望后来者，能渡。"[/faded]

[whisper]守与渡。第一代守夜人只做到了守，把"渡"留给了后来者。[/whisper]

[whisper]而你，也许就是那个能渡的人。[/whisper]`,
        effects: { sanity: 15, yin: -15, setFlag: 'visitedFirstWatcherGrave', setFlag: 'knowsWatcherLineage' },
        choices: [
            { text: '回七号厅，决心渡她', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } },
            { text: '先去地下室找更多线索', next: 'basement_descent' }
        ]
    },

    // 神秘来电者
    mysterious_call: {
        title: '神秘来电',
        text: `凌晨三点，殡仪馆的座机响了。

这个时间来电，不是好事。你接起来。

电话那头先是一阵杂音，然后是一个苍老的、像是隔着一层什么的男声：

"……是七号厅的守夜人吗？"

"我是。您哪位？"

电话那头沉默了一会儿。

"我是上一个殡仪馆的……守夜人。林叔的前任。我姓陈。"

你心里一惊。林叔的前任？那是第六代守夜人。可林叔说过，他的前任早就退休了，不知去向。

"陈先生，您怎么知道这里的电话？"

"我一直在关注这馆子。"老人说，"七号厅那位，我守了二十年，没能帮她。我老了，没那个慧根。听说来了个年轻人，懂行……我想问问，你，能不能替我，了了这桩心愿？"

[red]电话那头，隐约传来唱戏声。不是从电话里，而是从老人那边。[/red]`,
        effects: { sanity: -10, yin: 10, setFlag: 'mysteriousCaller' },
        choices: [
            { text: '答应他', next: 'caller_promise' },
            { text: '问他和云袖的事', next: 'caller_yunxiu_story' },
            { text: '问他为什么现在才打来', next: 'caller_why_now' }
        ]
    },

    caller_promise: {
        title: '应承',
        text: `"我答应您。"你说。

电话那头沉默了很久。

"好。"老人说，声音里带着一丝释然，"那我就能安心了。

"孩子，我告诉你一个秘密。云袖姑娘的心愿，不是唱完一出戏，也不是有人记住她。她的心愿，是周生。

"她等的不是戏台。她等的是周生来找她。周生没来，她就一直等。可周生……"

老人的声音低了下去。

"周生也在等她。他们在同一条河里，隔着一层水，谁也没找到谁。你要是真想渡她，就带她去青石河。不是去河畔，是去河里——去他们彼此错过的地方。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'callerRevealedRiver' },
        choices: [
            { text: '问他怎么知道这些', next: 'caller_identity' },
            { text: '挂了电话，去青石河', next: 'coffin_to_river', condition: { flag: 'foundCoffin' }, effects: { time: 60 } }
        ]
    },

    caller_yunxiu_story: {
        title: '前任的故事',
        text: `"我守了她二十年。"老人说，"从七十年代到九十年代。

"那时候殡仪馆条件差，没有手电筒，我就点煤油灯守夜。云袖姑娘每年子时都会醒，我都害怕，但不敢不守。

"有一次，我壮着胆子跟她说话。我问她，你想要什么。

"她没回答。但她抬起手，指了指墙上的一幅画。那是民国时期留下的、一幅褪色的牡丹图。

"我后来才明白，她想要的是戏台。可我不会搭，也没钱搭。我只能年复一年地守着她，给她点三炷香，敬一杯酒。

"守了二十年，我累了，也老了。我把这摊事交给了林家小子。可我心里一直过不去——我守了，却没能渡。"`,
        effects: { sanity: 5, yin: -5, setFlag: 'callerToldStory' },
        choices: [
            { text: '问为什么现在才打来', next: 'caller_why_now' },
            { text: '答应替他了愿', next: 'caller_promise' }
        ]
    },

    caller_why_now: {
        title: '此刻',
        text: `"为什么现在才打来？"你问。

老人沉默了一会儿。

"因为我快走了。"他说，"我得了病，医生说撑不过这个月。

"我守了一辈子灵，最后，轮到别人来守我的灵了。可我放心不下云袖姑娘。我托人打听，听说馆里来了个年轻人，懂行，跟云袖姑娘处得不错。

"我想，在我走之前，把这桩事，托付出去。"

电话那头传来一阵咳嗽。

"孩子，"老人的声音弱了下去，"替我渡她。我……我在那边，会保佑你的。"`,
        effects: { sanity: -5, yin: 5, setFlag: 'callerDying' },
        choices: [
            { text: '郑重答应他', next: 'caller_promise' },
            { text: '问他到底是谁', next: 'caller_identity' }
        ]
    },

    caller_identity: {
        title: '身份',
        text: `"陈先生，"你问，"您到底是谁？"

电话那头笑了，笑声苍老而温和。

"我说了，我姓陈。我是第六代守夜人。可我没告诉你——"

他顿了顿。

"陈守一，是我爷爷。第一代守夜人。"

你握着话筒的手紧了。

"我们陈家，守了云袖姑娘四代。爷爷、我爸、我、然后交给了林家小子。我们是世代的守灵人。

"可到了我这一代，断了。我没孩子，守夜人的衣钵传不下去，只能交给外姓。林家小子是好的，可他也没孩子。

"现在轮到你了。"老人说，"你不是陈家人，也不是林家人。但你是被选中的人。阴阳簿的记录者，从来不是靠血脉传的，是靠缘。"

[whisper]你，就是那个有缘人。[/whisper]`,
        effects: { sanity: 10, yin: -10, setFlag: 'callerIdentityRevealed', setFlag: 'knowsWatcherLineage' },
        choices: [
            { text: '答应他，接受这份传承', next: 'caller_accept_lineage' }
        ]
    },

    caller_accept_lineage: {
        title: '传承',
        text: `"我接受。"你说。

电话那头沉默了一会儿，然后传来一声轻轻的、如释重负的叹息。

"好孩子。"老人说，"好孩子。

"那我就……安心了。"

电话那头的杂音越来越重，唱戏声也渐渐远了。

"最后一件事，"老人的声音像是从很远的地方飘来，"我走后，你会收到一个包裹。那是我守夜二十年的笔记，和我爷爷、我爸留下的东西。都交给你了。

"孩子，渡了她。然后，把你的名字，写进阴阳簿。"

电话断了。

你握着话筒，久久没有放下。

[faded]三天后，你收到了一个包裹。寄件人地址是省城一家医院。里面是一摞泛黄的笔记，和一枚刻着"守"字的铜印。[/faded]

[whisper]传承，在你手里，续上了。[/whisper]`,
        effects: { sanity: 20, yin: -20, addItem: '历代守夜人笔记', addItem: '守夜人铜印', setFlag: 'acceptedLineage', setFlag: 'yunxiuWishComplete' },
        choices: [
            { text: '带着这份传承，去渡云袖', next: 'coffin_to_yunxiu', condition: { flag: 'foundCoffin' } }
        ]
    },

    // 青石河底探索
    river_bottom_vision: {
        title: '河底',
        text: `你站在青石桥头，望着浑浊的河水。

你已经知道，云袖和周生，都葬身在这条河里。一个民国二十三年，一个民国二十四年。相隔一年，相隔一层水。

你从口袋里掏出那枚铜镜——周生的镜。你把镜子抛向河心。

[red]镜子没有沉下去。[/red]

它漂浮在水面上，像一朵莲花。然后，它缓缓旋转，发出微弱的光。

河水在镜子周围开始打旋，形成一个漩涡。漩涡中央，露出了一段向下的阶梯——通向河底。

[whisper]这是一条只属于亡魂的路。而你，作为守夜人，被允许踏上去。[/whisper]`,
        effects: { sanity: -15, yin: 20 },
        choices: [
            { text: '沿着阶梯走下去', next: 'river_bottom_descent', effects: { sanity: -10 } },
            { text: '后退，这太危险了', next: 'enter_with_flashlight', effects: { sanity: -5 } }
        ]
    },

    river_bottom_descent: {
        title: '沉',
        text: `你沿着阶梯，一步步走下河底。

水没有浸湿你。你像是一个透明的影子，穿过浑浊的河水，来到河床。

河底铺满了淤泥和水草。但有一条清晰的小路，通向远方。

小路两旁，立着一盏又一盏的长明灯。有些已经熄灭，有些还在微微亮着。

你走到一盏最亮的灯前。灯下，坐着一个穿长衫的年轻人。他的背微驼，手里捏着一朵纸扎的牡丹。

他抬起头，看见你，愣住了。

[whisper]"你是……"[/whisper]

[red]那是周生。一百零二岁的、永远二十岁的周生。[/red]`,
        effects: { sanity: -20, yin: 15, setFlag: 'metZhouSheng' },
        choices: [
            { text: '告诉他，云袖一直在等他', next: 'river_bottom_zhousheng' }
        ]
    },

    river_bottom_zhousheng: {
        title: '河底周生',
        text: `"周生，"你轻声说，"我叫周遥，是青石镇殡仪馆的守夜人。"

周生站起来，手里还捏着那朵纸牡丹。他的脸很年轻，可眼睛里有一种跨越百年的疲惫。

"守夜人？"他问，"陈家的人？"

"不是。"你说，"我是第七代。陈家、林家之后，传到了我。"

周生点点头，像是早就预料到了。

"那……云袖呢？"他的声音颤抖，"她……还在等你吗？"

"她一直在等你。"你说，"她以为你抛下了她。她怨了你将近一百年。可现在，她知道了真相。她不怨了。她想来找你。"

周生的眼泪，无声地落进河水里。

[whisper]"我等了一百年。"[/whisper]他说，[whisper]"就等这一句话。"[/whisper]

他把手里那朵纸牡丹，递给你。

"带给她。"他说，"告诉她，我在河这头等她。我点了一盏灯，她能看见。"`,
        effects: { sanity: 10, yin: -10, addItem: '河底的纸牡丹', setFlag: 'zhouShengWaiting' },
        choices: [
            { text: '答应他，回到岸上带云袖来', next: 'river_bottom_return' }
        ]
    },

    river_bottom_return: {
        title: '上岸',
        text: `你沿着阶梯，回到河面。

漩涡在你身后闭合，铜镜沉入水中，再也没浮起来。

[whisper]它完成了它的使命——为你指了一条路。[/whisper]

你站在桥头，手里攥着那朵周生给你的纸牡丹。

天快亮了。可你知道，下一个夜晚，你将带着云袖，再次来到这里。

这一次，她将走下阶梯，走向那盏灯，走向那个等了她一百零二年的年轻人。

[red]而你，将站在岸上，目送她。[/red]

[red]因为你是守夜人。你的职责，是送她走，然后，继续守着下一个夜晚。[/red]`,
        effects: { sanity: 20, yin: -20, setFlag: 'readyToBringYunxiu' },
        choices: [
            { text: '回殡仪馆，等下一个夜晚', next: 'night_three_choice', condition: { flag: 'foundCoffin' } }
        ]
    }
};

// ============================================================
// 结局集合（恢复 + 新增）
// ============================================================
export const Endings = {
    finalCurtain: {
        title: '真结局 · 最后一折',
        text: `你为云袖搭起戏台，听她唱完最后一出《牡丹亭》。

曲终人散，她的怨气随之消散。

第二天，殡仪馆来了一个新的守灵人。林叔把你叫到一边，递给你一本泛黄的古籍：

"你很有天赋。这本书叫《阴阳簿》，以后，你就是它的记录者了。"

你翻开第一页，上面已经写好了标题：

[faded]《回门》[/faded]

而第二页，是空白的，等待你写下下一个故事。`
    },
    peony_pavilion_final: {
        title: '隐藏结局 · 牡丹亭终章',
        text: `你不仅帮云袖唱完了戏，还让她知道：即使近百年过去，仍有人记得她的名字。

她消散前，把那枚银钗留给了你。钗身上的"云袖"二字，在晨光中泛着温润的光。

你把银钗和一份写满春香班故事的册子，一起交给了民俗研究所的朋友。

三个月后，青石镇戏台重建。戏台正中央立了一块碑，刻着十七个名字，云袖排在第一位。

开光那天，你没有上台，只是站在人群最后。风过时，你仿佛听见一个女子轻声说：

[whisper]"原来姹紫嫣红开遍……"[/whisper]

这一次，她的声音里没有怨，只有满足。

戏终于散了。`
    },
    peacefulRest: {
        title: '普通结局 · 安息',
        text: `你的恭敬换来了云袖的安宁。

她闭上眼睛，再也没有醒来。殡仪馆的工作恢复了正常。

但你知道，她只是暂时睡去。也许明年，也许十年后，她还会再次睁开眼睛。

因为那个戏台，始终没有修好。`
    },
    sealedNight: {
        title: '险胜结局 · 封门一夜',
        text: `你用护身符挡住了云袖，撑到了天亮。

她消失了，但护身符也裂成了碎片。

林叔看着你，摇摇头："她只是换了个地方唱戏。下次醒来，怨气会更重。"

你低头看着碎掉的护身符，知道这件事还没有结束。`
    },
    drownedOnLand: {
        title: '死亡结局 · 陆沉',
        text: `你被黑水吞没，沉入了永恒的戏台之下。

那里没有白天，只有一出接一出的《牡丹亭》。云袖在台上唱，你在台下听。

听了几百年后，你也会忘记自己曾经是谁。

只依稀记得，某个午夜，你本该敲那三下门。`
    },
    glassShatter: {
        title: '死亡结局 · 碎窗',
        text: `玻璃碎了，无数碎片扎进你的身体。

但你不觉得疼。你只感到冰冷的手抚过你的脸，然后是一个声音在你耳边说：

"来，陪我唱。"

第二天，林叔在值班室发现了你的尸体。你的脸上带着诡异的微笑，嘴里塞满了碎玻璃。

你的眼睛睁得很大，像是在看一场永不落幕的戏。`
    },
    invitedToShow: {
        title: '开放式结局 · 特邀观众',
        text: `你逃过了这一夜，但收到了云袖的邀请。

那张戏票一直放在你的口袋里，怎么扔都扔不掉。

每到午夜，你都会听见青石戏台的方向传来锣鼓声。

你知道，总有一天你会去。

因为你已经听懂了她的戏。`
    },
    endlessChorus: {
        title: '死亡结局 · 万戏同鸣',
        text: `你的强行超度激怒了云袖。

她分裂成无数个自己，在七号厅里永远唱下去。

而你，成了第一个被困在合唱中的活人。

你的耳朵永远充斥着《牡丹亭》的唱段，你的眼睛永远看见红色的戏服。

直到你学会那出戏，直到你变成她的一部分。`
    },
    stageRestored: {
        title: '真结局 · 戏台重修',
        text: `你把青石戏台的戏牌还给了云袖。

她的怨气终于找到了归宿。从此，青石镇的旧戏台不再闹鬼，反而成了当地戏曲爱好者重建的项目。

你偶尔会回去看看。有人说，月圆之夜，能在戏台上看见一个穿红戏服的女子在唱《牡丹亭》。

她的脸上，带着满足的笑。`
    },
    trappedWatcher: {
        title: '死亡结局 · 永远的观众',
        text: `你被困在值班室里，成了云袖唯一的观众。

她对着墙壁唱，你对着她看。日复一日，年复一年。

你的身体渐渐干枯，但你的眼睛始终睁着。

因为戏，还没有散场。`
    },
    duetWithGhost: {
        title: '死亡结局 · 阴阳同唱',
        text: `你和云袖躺在一起，听她唱完了《牡丹亭》。

最后一折结束时，你的呼吸也停止了。

但你并不孤独。在云袖的戏里，你是她百年来的第一个知音。

你们的戏，从此再也不用落幕。`
    },
    hidden_tearBlessing: {
        title: '隐藏结局 · 泪祝',
        text: `你替云袖擦去了那滴胭脂泪。

她的眼睛缓缓闭上，嘴角带着笑。七号厅的温度恢复了正常，香炉里的三炷香齐齐燃尽，留下三道笔直的青烟。

林叔第二天来接班，看见你睡在椅子上，手里攥着一张湿纸巾。他没有说什么，只是拍了拍你的肩膀。

从那以后，七号厅再也没有出过事。

有人说，云袖走之前，把最后一滴泪留在了你的纸巾上。那是她的祝福。`
    },
    hidden_silverHairpinReturn: {
        title: '隐藏结局 · 还钗',
        text: `你把银钗放回了云袖的枕边。

"这是你的东西。"你说，"我替你收了很多年，现在物归原主。"

银钗碰到她枕头的瞬间，发出一声清脆的响声。云袖的身影在空气中浮现，她拿起银钗，朝你深深一福。

"谢谢你记得我。"她说，"不只记得我的戏，还记得我。"

她的身影消散后，七号厅里多了一股淡淡的桂花香。

林叔说，那是云袖留下的最后一点气息。`
    },
    hidden_stageRecord: {
        title: '隐藏结局 · 录音',
        text: `你用手机录下了云袖唱的《牡丹亭》。

录音里杂音很重，但仔细听，能听到一个女子婉转的唱腔。你把录音发给了民俗研究所的同事。

三个月后，一位老教授说，这段唱腔和春香班遗留的唱段完全吻合。

"这是失传近百年的唱腔。"他说，"你立了大功。"

云袖的名字被写进了戏曲史。她不再只是七号厅里的一具无名女尸，而是春香班最后的旦角。

你每年清明都会给她放一段录音。她说，那是她听过最好的返场。`
    },
    hidden_riversideStage: {
        title: '隐藏结局 · 河畔戏台',
        text: `你带着云袖的遗物，去了青石河畔。

你在河边搭了一座简易的戏台，用手机放着《牡丹亭》的伴奏。夜里，河面上起了一层薄雾，雾中隐约有人影在唱。

你唱得很差，但云袖不嫌弃。她说，河畔的戏台，比殡仪馆的七号厅更像家。

唱完后，你把戏服和银钗一起放进了河里。河水轻轻托着它们，流向远方。

"去找真正的戏台吧。"你说。

雾气散了，河面恢复平静。你知道，她终于回家了。`
    },
    hidden_paperWhisperDuet: {
        title: '隐藏结局 · 纸人和声',
        text: `你在七号厅里贴满了纸人。

不是纸扎人，是孩子们用白纸剪的小人。你在每个纸人身上写了云袖的名字，还有《牡丹亭》里的一句唱词。

夜里，纸人们无风自动，发出沙沙的声响。那声音连成一片，像是一支无声的合唱队。

云袖站在纸人中间，笑得像个孩子。

"我也有观众了。"她说。

你点点头："以后每年都会有人来看你的戏。"

那些纸人你没有烧，而是装进了一个木盒，放在七号厅的角落里。`
    },
    hidden_yunxiuNamePlaque: {
        title: '隐藏结局 · 名牌',
        text: `你在一块木牌上刻下"云袖"两个字，挂在七号厅的门边。

林叔问你这是干什么。你说，这里住过一位名伶，她应该有名字。

从那以后，每个来七号厅守夜的人都会看到那块木牌。有人问起，你就讲云袖的故事。

渐渐地，云袖不再是恐怖传说，而成了一个被人记得的戏曲演员。

有一天夜里，木牌上的名字闪了一下。你打开门，七号厅里空无一人，但戏台上留着一支银钗。

她知道，你做到了。`
    },
    hidden_lastAudience: {
        title: '隐藏结局 · 最后一名观众',
        text: `你决定做云袖最后一名观众。

你关掉所有灯，坐在七号厅的角落里。云袖在灵床上唱，你在黑暗里听。

她不看你，你也不看她。你们之间隔着生死，但在这出戏里，你们只是演员和观众。

一曲终了，她朝你福了一福。

"散场了。"她说。

"嗯。"你说，"再见。"

"再见。"

这是她第一次说"再见"，而不是"来陪我"。`
    },
    hidden_burningCurtain: {
        title: '隐藏结局 · 焚幕',
        text: `你点燃了七号厅里那块破烂的戏台幕布。

火焰中，幕布上的图案扭曲、消散。你听见云袖在火中唱完最后一句，然后一切归于寂静。

消防队赶来时，火已经灭了。七号厅的墙壁被熏黑，但云袖的尸体安然无恙。

你把烧焦的幕布残渣装进一个玻璃罐，放在她的灵床边。

"戏台的幕布烧了，戏就真正散场了。"你说。

林叔摇摇头："你胆子真大。"

但你知道，云袖需要的不是胆子，是一个愿意帮她落幕的人。`
    },
    hidden_morgueLullaby: {
        title: '隐藏结局 · 停尸间摇篮曲',
        text: `你没有给云袖唱《牡丹亭》，而是唱了一首摇篮曲。

那是你小时候母亲哄你睡觉的歌。你的声音沙哑，跑调跑得厉害，但云袖听得很安静。

"我不记得我妈了。"她说，"但你唱得，像她。"

她闭上眼睛，像是一个终于睡着的孩子。

从那以后，每当七号厅的灯闪烁，你就会轻轻哼那首摇篮曲。云袖不再睁眼，也不再唱戏。

她只是睡在那里，做一个很长的梦。`
    },
    hidden_farewellSong: {
        title: '隐藏结局 · 送别曲',
        text: `你请了一天假，专门去学唱《牡丹亭》的《离魂》一折。

学得不好，但你记得每一个字。夜里，你站在七号厅中央，对着云袖唱：

"花花草草由人恋，生生死死随人愿……"

云袖的身影在灵床上渐渐透明。她看着你，眼中有泪，但那是感激的泪。

"你唱得比周生好。"她说。

"我知道。"你笑了笑，"因为我是真心想送你走。"

她化作点点红光，消散在空气中。

七号厅的灯，第一次整夜没有闪烁。`
    },
    hidden_zhouShengLetter: {
        title: '隐藏结局 · 周生信',
        text: `你把信的内容念给云袖听。

"戏台将塌，我不得不将你移入青石河。水能灭火，亦能锁魂……"

云袖的眼睛睁得很大，黑色的泪水从眼眶里涌出，但那不是怨，是悲。

"原来……是他。"她的声音颤抖，"我以为他负了我。原来他是想救我。"

她望向虚空，仿佛能看见那个早已化作尘土的男子。

"周生，"她轻声说，"我不怪你。"

话音落下，她的身影开始变淡。戏服上的焦痕一片片剥落，露出底下原本鲜艳的红色。最后，她化作一缕桂花香，消散在七号厅里。

铜镜从妆奁中滑落，背面那五个字在晨光中泛着温润的光：

[faded]周生赠云袖[/faded]

你捡起镜子，把它放在她的枕边。`
    },
    death_makeupMirror: {
        title: '死亡结局 · 妆镜',
        text: `你忍不住又看了一眼铜镜。

这一次，镜中的燃烧舞台上站着的不是云袖，而是你自己。

你穿着那身大红戏服，脸上化着旦角的妆，台下坐满了没有脸的人。他们齐齐鼓掌，等你开嗓。

你想放下镜子，却发现自己的手已经变成了戏服上的水袖。你的喉咙里不受控制地溢出唱词：

[whisper]"原来姹紫嫣红开遍……"[/whisper]

镜子外的你，缓缓倒在了七号厅的地上。镜子里的你，对着满场无面的观众，福了一福。

戏，开演了。

而你，再也演不完。`
    },
    hidden_paperKeeper: {
        title: '隐藏结局 · 纸人保管员',
        text: `你没有把纸人烧掉，而是把它带到了民俗研究所。

专家们对纸人的制作工艺惊叹不已。经过考证，这正是周氏纸扎铺为云袖特制的"替魂纸人"，在民国时期的丧葬习俗中极为罕见。

纸人被收入了博物馆的库房，云袖的故事也被写进了地方志。

每年的中元节，研究所都会举办一场小型的《牡丹亭》演出，纪念这位春香班的旦角。

你偶尔会去看。演出结束时，你总觉得后台的帷幕后面，站着一个穿红戏服的身影，正在对你微笑。`
    },
    hidden_paperFigure: {
        title: '隐藏结局 · 替身焚化',
        text: `你把纸人的灰烬撒入青石河。

河水轻轻一旋，将那堆灰托住，然后缓缓向下游漂去。你仿佛看见灰烬中升起一个纤细的身影，穿着红戏服，对着你遥遥一福。

"谢谢你。"那声音顺着风传来，"我终于不用一个人唱那出戏了。"

从此以后，七号厅再也没有传出过唱戏声。青石河的渔民说，每逢月夜，河面上会飘过一阵桂花香，还有一段若有若无的《牡丹亭》。

那不再是怨，是归途。`
    },
    death_burningStage: {
        title: '死亡结局 · 焚台重演',
        text: `火盆里的纸人突然直立起来，像是被什么东西拽住了。

它的嘴一张一合，发出云袖凄厉的尖叫：

[scream]"戏台塌了！戏台塌了！"[/scream]

火星溅到花圈上，白布、纸扎、花圈瞬间燃烧起来。你想逃，却发现七号厅的门已经消失，四周只剩下一座正在坍塌燃烧的戏台。

你站在戏台中央，穿着不知何时落在身上的红戏服。横梁砸下来的时候，你听见云袖在你耳边说：

"这一次，有人陪我一起死了。"`
    },
    normal_morningRitual: {
        title: '普通结局 · 晨祭',
        text: `你整晚守在七号厅外，每隔一个时辰便上一炷香，洒一杯酒。

女尸没有睁眼，也没有再唱。她只是安静地躺着，像一具真正的尸体。

天亮时，林叔来接班。他看着你熬红的双眼，又看了看香炉里燃尽的香灰，点了点头。

"守夜人敬鬼，鬼亦敬人。"他说，"这一夜，你守住了规矩。"

云袖后来被火化了。她的骨灰被安放在殡仪馆后山的一处壁龛里。

你知道她没有真正散去。也许某个雨夜，她还会醒来，继续找她的戏台。

但至少今夜，你们相安无事。`
    },

    // ===== 批次5新增结局 =====
    hidden_stageCoffinFarewell: {
        title: '真结局 · 戏台棺',
        text: `你为云袖合上柚木棺盖。

棺盖落下的最后一刻，你看见她躺在红绸幕布上，嘴角带着近百年来第一个完整的笑。棺内壁刻满的《牡丹亭》唱词，在她消散的微光里，一字一句地亮了起来，像是一场无声的谢幕。

你把棺材安放在七号厅正中央。林叔来接班时，看见那口崭新的柚木棺，愣了很久。

"老张头的手艺。"他摸着棺头的牡丹雕花，眼眶红了，"他等了一辈子，等的就是今天。"

你没有把云袖火化。你向上级申请，把七号厅永久封存，作为这座殡仪馆最特殊的一间——里面没有遗体，只有一口戏台棺，和一位终于唱完了戏的旦角。

后来，每一个新来的守夜人，都会被带到七号厅门口。林叔会指指门上的木牌——那上面刻着两个字：

[faded]云袖[/faded]

"记住这个名字。"林叔说，"她不是鬼。她是唱过《牡丹亭》的云袖。"

月圆之夜，路过七号厅的人都说，能听见棺材里传来极轻极轻的唱腔。

那不再是怨。是安息后，做的美梦。`
    },
    hidden_riverReunion: {
        title: '真结局 · 青河重逢',
        text: `云袖走进青石河的那一刻，河水静止了。

你站在岸边，看见水底亮起两盏灯。一盏是她，一盏——是等了近百年的人。

水雾里，两个红色的身影缓缓靠近。一个是穿戏服的旦角，一个是穿长衫的纸扎匠。

他们隔着百年的水，终于握住了彼此的手。

[whisper]"周生，你来接我了。"[/whisper]

[whisper]"云袖，我说过，会来寻你。"[/whisper]

水雾散去，河面恢复平静。两盏灯沉入水底，再也没亮起来。

但青石河的渔民说，从那以后，每逢中秋，河面上会飘过一阵桂花香，还有两个人和声的《牡丹亭》——一男一女，唱的是《惊梦》。

你把那口空了的柚木棺材，运回了青石镇，葬在周生的衣冠冢旁。墓碑上只刻了一行字：

[faded]"周生与云袖，同穴于此。戏已散，魂同归。"[/faded]

守夜人的手记上，你写下了自己的名字。

而阴阳簿的第二页，终于写满了。`
    },
    hidden_yunxiuBook: {
        title: '真结局 · 留名',
        text: `你花了整整一年，写完了一本书。

书名叫《青石河畔的牡丹亭——春香班旦角云袖传》。你把云袖的身世、学艺、那场大火、周生的牺牲、近百年的等待，都一字一句地写了下来。

书出版那天，你把第一本，烧在了七号厅的灵床前。

"云袖，"你说，"你的名字，现在印在纸上了。不会再有人忘记你。"

七号厅里安静了很久。然后，你感觉有一只冰凉的手，轻轻拍了拍你的肩。

[whisper]"谢谢你，守夜人。"[/whisper]

那本书后来成了地方文史研究的经典。青石镇重建了戏台，戏台旁立了一座云袖的汉白玉像——不是女尸的样子，是那个十七岁、第一次登台、笑得灿烂的姑娘。

每年清明，都有戏迷来献花。他们不知道这个故事的全部，但他们记得：曾有一个叫云袖的女子，唱得很好。

而你，作为阴阳簿的记录者，知道这才是她真正想要的结局。

[red]被记住，比被超度更重要。[/red]`
    },
    hidden_eternalAudience: {
        title: '隐藏结局 · 永世观众',
        text: `"留下吧。"你说，"七号厅需要你。"

云袖看着你，久久没有说话。

"你确定？"她问，"留在这里，我可能再也散不去了。"

"我知道。"你说，"但有些戏，不该散场。"

云袖笑了。她飘回灵床上，躺下，闭上眼睛。

从那以后，七号厅再也没有闹过鬼。但每一个来守夜的年轻人，都会在子时听见一声极轻的唱腔。

林叔退休后，你成了新的老守夜人。你把守夜人手记传给了下一个年轻人，扉页上写着你和林叔的名字，还有一行字：

[faded]"七号厅住着一位朋友。她不害人。她只是在等，有没有人愿意听她唱完。"[/faded]

你也老了。你坐在当年林叔坐过的塑料椅上，刷着手机，偶尔抬头看看七号厅的门。

门缝里，飘出一缕桂花香。

你笑了笑，继续刷手机。

[whisper]有些守候，是一辈子的。但只要有人守着，戏就不会真正散场。[/whisper]`
    },

    // ===== 批次12：新增大量结局 =====
    hidden_teahouseReunion: {
        title: '隐藏结局 · 茶楼重逢',
        text: `你没有急着走，而是静静坐着，陪她喝完了那壶茶。

茶楼里其他客人渐渐散去，老板也在柜台后打起了盹。只有你和对面那个"看不见"的客人，还坐在那儿。

对面的桂花糕，已经吃完了一块。你的那块，也吃完了。

"谢谢你。"一个轻柔的声音说，"好久没有人，陪我坐这么久了。"

你没有回答，只是又给她倒了一杯茶。

茶楼外，暮色渐浓。青石镇的灯火一盏盏亮起来，照着这条老街，照着戏园子的旧址，照着青石河上粼粼的波光。

"我该走了。"那个声音说。

"嗯。"你说。

你感觉一只冰凉的手，轻轻覆在你的手背上，只一瞬，就收了回去。

"再见，守夜人。"

"再见，云袖。"

你抬起头。对面的桂花糕盘子空了，茶杯也空了。窗外的暮色里，一缕桂花香飘过。

老板醒来，揉着眼睛问你："客人，这么晚还不走？"

你笑了笑，结了账，走出了茶楼。

身后，那盏你坐过的灯，无风自动，闪了两下。`
    },
    hidden_arsonExposed: {
        title: '真结局 · 火与名',
        text: `你花了三年，写完了那本书。

书名《青石镇戏台大火真相——被掩盖近百年的五条人命》。出版后，在地方史学界引起轰动。

纵火者的后人不堪舆论压力，公开发表了道歉声明，并出资在青石镇重建了戏台，立了五人纪念碑。

碑上刻着五个名字：云袖、周生、秦鸣远、赵铁柱、孙瞎子。

纪念碑落成那天，你站在人群最后。戏台上，省城来的剧团正在演全本《牡丹亭》。

唱到《惊梦》一折时，你看见戏台角落，站着一群人——

一个穿红戏服的旦角，一个穿长衫的纸扎匠，一个唱老生的中年人，一个画花脸的壮汉，还有一个抱着二胡的盲老人。

他们齐齐看着戏台，像是在看自己的戏，又像是在看彼此的戏。

一曲终了，五个人齐齐转身，朝你这边福了一福，然后，化作五缕青烟，散入风中。

[whisper]戏散了。债清了。名留了。[/whisper]

[whisper]他们终于，可以回家了。[/whisper]

你把那本书，烧在了纪念碑前。扉页上写着：

[faded]"献给云袖，和所有被遗忘的名字。"[/faded]`
    },
    hidden_riverLantern: {
        title: '真结局 · 河灯',
        text: `中元节那天，你来到青石桥头。

你买了两盏河灯，一盏写着"云袖"，一盏写着"周生"。

你把两盏灯点燃，轻轻放入青石河。

河水载着它们，缓缓向下游漂去。两盏灯在水面上漂了一会儿，然后，渐渐靠拢，靠拢，最后靠在了一起。

它们相依着，漂向远方。

你站在桥头，目送它们消失在夜色里。

就在这时，你看见河底——是的，河底——亮起了无数盏灯。

一盏，两盏，十盏，百盏……

那是近百年来，所有在这条河里失去性命的人点的灯。云袖、周生、还有那个学徒、还有车祸的少年、还有少年的女朋友……

他们的灯，在水底汇成一条银河，缓缓流向你看不见的远方。

[whisper]"我们也回家啦。"[/whisper]

一个声音，从河底飘上来，带着笑意。

你笑了，眼泪却流了下来。

[red]这一夜，青石河，终于安静了。[/red]`
    },
    hidden_threeSoulsReunion: {
        title: '真结局 · 班社团圆',
        text: `你在青石镇废墟上，为春香班五人举行了一场完整的法事。

你请来了省城的戏班，演了全本《牡丹亭》。戏台就搭在废墟上，正对着当年的青石河。

戏开场时，无风。戏唱到一半，起了一阵轻风，吹动了幕布。

戏唱完，幕布落下。你站在台前，对着空气说：

"散场了。"

"散场了。"五个声音，齐齐回答。

然后，废墟上空，升起五缕青烟——一红（云袖）、一灰（周生）、一青（秦鸣远）、一黑（赵铁柱）、一白（孙瞎子）。

五缕青烟在空中交汇，绕了三圈，然后朝青石河的方向飘去。

[whisper]"班子齐了，"[/whisper]一个苍老的声音说——是班主孙老胖的声音，从河那头传来，[whisper]"回家啦。"[/whisper]

从那以后，青石镇的老人说，夜里再也没听见过戏台废墟的唱腔。

可在月圆之夜，偶尔能看见青石河上，有五盏河灯，相依着向下游漂去。

那是一条班子，在河上巡演。

[red]他们的戏，永远不会散场了。[/red]`
    },
    hidden_watcherLineage: {
        title: '真结局 · 守渡',
        text: `你完成了渡云袖的使命。

那天夜里，你翻开林叔给你的守夜人手记，在最后一页的空白处，工工整整地写下了自己的名字：

[faded]"第七代守夜人，周遥。渡云袖姑娘于青石河。戏散，魂归，名留。"[/faded]

写完，你合上手记，把它放在值班室的抽屉里，留给下一个守夜人。

然后，你走出殡仪馆，站在后山的壁龛前，对着陈守一的墓碑鞠了三个躬。

"陈先生，"你说，"您说'望后来者能渡'。我渡了。"

风吹过壁龛，发出一阵温柔的声音，像是一声长长的、释然的叹息。

你直起身，望向青石河的方向。河面上，一盏灯缓缓漂过——那是你为中元节放的，献给云袖和周生的河灯。

灯漂远了，越来越小，最后消失在夜色里。

[whisper]守与渡。第一代守，第七代渡。[/whisper]

[whisper]这条链，在你手里，圆满了。[/whisper]

你转身回到殡仪馆，继续守你的夜。

明天，会有新的故事，新的亡魂，新的等待。

而你，已经是真正的守夜人了。`
    },
    hidden_callerPeace: {
        title: '隐藏结局 · 前任安息',
        text: `神秘来电后的第七天，你收到了殡仪馆的通知——前任守夜人陈老先生，在省城医院病逝了。

按他的遗愿，骨灰送回了青石镇，葬在殡仪馆后山陈家的墓地里，和他父亲、祖父——第五代、第一代守夜人——葬在一起。

你去参加了葬礼。林叔也来了，两个老守夜人在墓前站了很久。

"他守了二十年。"林叔说，"走得不安心，是因为云袖姑娘的事没办完。"

"办完了。"你说，"我答应他了。"

林叔看着你，点了点头。

"那就好。"他说，"他听见，能安心走了。"

下葬那天，青石河的方向，飘来一阵桂花香，在墓地上空盘旋了很久，才散去。

你抬头看了看天。

[whisper]"谢谢您，陈先生。"你轻声说，"我接您的班了。"[/whisper]

风过墓碑，发出一声轻响。

像是，有人在回答："好孩子。"`,
    },
    death_riverBottom: {
        title: '死亡结局 · 河底长眠',
        text: `你沿着阶梯走下河底，却没有在周生面前停下。

那盏长明灯太亮了，太温暖了。你被它吸引着，一步一步走过去。

周生喊你："别过去！那灯不是给你的！"

可你听不见了。

你伸手触碰那盏灯。

[red]灯灭了。河底陷入了永恒的黑暗。[/red]

你感觉自己在下沉，下沉。河水终于浸透了你的身体，灌进你的喉咙、你的肺、你的心。

你最后的意识里，听见周生的叹息：

[whisper]"又一个，被灯骗下去的。"[/whisper]

[whisper]"云袖，对不起。又来一个人陪你等了。"[/whisper]

第二天，林叔在青石桥头发现了你的鞋子。你的身体，再也没有浮上来。

七号厅的记录上，多了一行字：

[faded]"第七代守夜人周遥，失踪于青石河。存七号厅。"[/faded]

[red]你成了七号厅，新的住客。[/red]`,
    },
    death_arsonCurse: {
        title: '死亡结局 · 火咒',
        text: `你去找纵火者后人对峙的那天晚上，殡仪馆着火了。

火是从七号厅烧起来的。消防队赶来时，七号厅已经烧成了一片火海。

你想逃，可门被火封住了。你站在火中央，穿着不知何时落在身上的红戏服。

横梁砸下来的时候，你听见五个声音，齐齐在你耳边说：

[whisper]"你不是想知道纵火是什么滋味吗？"[/whisper]

[whisper]"那就，自己也尝尝。"[/whisper]

你最后看见的，是一群穿戏服的人影，在火中翩翩起舞。

然后，一切归于黑暗。

[red]纵火的诅咒，传承了近百年，终于找到了新的祭品。[/red]`,
    },
    hidden_allSoulsRelease: {
        title: '真结局 · 普度',
        text: `你用了一整年，把殡仪馆里所有的"未了魂"都渡了。

云袖、周生、学徒、车祸少年、少年的女朋友，还有那些你此前没注意到的、困在各个角落的零碎执念……

你一个个找，一个个听他们的故事，一个个帮他们了愿。

一年后，殡仪馆变得前所未有的"干净"。夜里巡厅，再也没有异响。守夜，真的只是守夜了。

林叔来接班那天，看着焕然一新的馆子，老泪纵横。

"我守了三十年，没能做到的事。"他说，"你一年做完了。"

你笑了笑："是他们都愿意走。我只是，听他们说话。"

林叔拍了拍你的肩。

"周遥，你不只是守夜人了。"他说，"你是阴阳簿的记录者。这本书，以后就归你了。"

你回到值班室，翻开那本泛黄的古籍——《阴阳簿》。

第一页，是《回门》。那是上一任记录者写的故事。

第二页，是《守夜》。你自己的字迹，密密麻麻写满了这一页。

第三页，是空白的。

[whisper]你知道，下一个故事，已经在某个角落，等着被你写下了。[/whisper]`,
    },
    hidden_apprenticeFamily: {
        title: '隐藏结局 · 学徒归家',
        text: `你查到了那个纸扎学徒的真名——李根生，河南人，民国十五年生于一个贫苦农家。

你辗转联系上了他老家。他还有一个侄孙，如今已经是个六十多岁的退休教师。

"李根生？"老人在电话那头惊讶，"我爷爷一直惦记这个弟弟。说他十二岁出去学手艺，就再也没回来。家里找了一辈子，没找到。"

"他一直在青石镇。"你说，"守着他师父留下的东西，守了将近一百年。"

电话那头沉默了很久，然后传来压抑的哭声。

一个月后，李根生的侄孙带着全家，来到了青石镇殡仪馆。你在五号厅，对着那张空荡荡的灵床，把根生的故事讲给他们听。

一家人哭成一团。

他们把根生的牌位请回了老家，葬进了李家祖坟。漂泊近百年的孩子，终于回家了。

临走时，侄孙握着你的手，泣不成声：

"谢谢你，让他有了名字。让他，能回家了。"

你目送他们离开，转身回到五号厅。

空荡荡的厅里，你仿佛听见一个年轻的声音，最后一次响起：

[whisper]"谢谢您，守夜人。我终于，不用再守了。"[/whisper]`,
    },
    hidden_zhouShengRebornHint: {
        title: '隐藏结局 · 转世',
        text: `云袖和周生在青石河重逢的那天，你站在桥头目送。

就在他们化作两缕青烟、即将消散的瞬间，你看见河面上，泛起一阵奇异的涟漪。

两缕青烟没有完全消散。它们在空中盘旋了一会儿，然后，化作两颗明亮的光点，朝不同的方向飞去。

一颗，飞向青石镇方向。一颗，飞向省城方向。

你愣住了。这是……？

第二天，你听镇上人说，桂花巷的老太太家，添了个重孙女，生下来不哭不闹，只是睁着一双亮晶晶的眼睛，看着窗外的桂花树。

而省城的朋友告诉你，他邻居家里，也添了个男孩，生下来手心里攥着一朵——不知道哪里来的——纸牡丹。

[whisper]他们走了。可他们，又回来了。[/whisper]

[whisper]这一次，他们能在一起了。没有火，没有河，没有错过。[/whisper]

你笑了，把这件事，悄悄记进了阴阳簿。

[faded]有些故事，结束了。有些故事，刚刚开始。[/faded]`,
    },
    hidden_gravekeeperLife: {
        title: '隐藏结局 · 守墓人',
        text: `你没有继续当守夜人。

渡了云袖之后，你辞了殡仪馆的工作，搬到了青石镇后山，守着陈家历代守夜人的墓地，还有春香班五人的衣冠冢。

你成了一个守墓人。

每天清晨，你给每座墓碑擦一遍灰，点一炷香。每个中元节，你在青石河放五盏河灯。每个清明，你替那些没有后人的亡魂，烧一沓纸钱。

镇上人都说你怪。可他们都知道，这个守墓的后生，是个好人。

你就这样守了四十年。

你老得走不动了的那天，你坐在陈守一的墓碑前，对着石头说：

"陈先生，我学您，守了一辈子。现在，轮到我，等后来者来守我了。"

风吹过墓地，发出一阵温柔的声响。

你闭上眼，靠在墓碑上，睡着了。

[whisper]你没有醒。可你的脸上，带着和陈守一一模一样的、了却心愿的安详。[/whisper]

[whisper]守了一辈子墓的人，最后，成了墓的一部分。[/whisper]`,
    },
    normal_simpleWatch: {
        title: '普通结局 · 平夜',
        text: `你选择不深究。

你只是按规矩守夜，敲三下门，敬一杯酒，点三炷香。天亮了，林叔来接班，你回家睡觉。

七号厅的事，你没再去主动碰。

云袖还在那里，年年子时醒来，唱一段没人听的戏。

你偶尔会在值班的时候，听见她若有若无的唱腔。你装作没听见，继续刷手机。

日子一天天过去。

你成了一个普通的守夜人。不犯错，也不出彩。林叔退休后，你接了他的班，又守了二十年。

二十年后，你把手记传给了下一个年轻人。

手记的最后一页，你只写了一行字：

[faded]"七号厅住着一位朋友。她不害人。我只是……没能帮她。对不起。"[/faded]

[whisper]守，不难。难的是渡。[/whisper]

[whisper]你守住了，却没能渡。这，也是一种结局。[/whisper]`,
    }
};

// 低理智幻觉
StoryData.prologue.hallucination = "[whisper]你低头看自己的影子，发现影子的脖子上缠着一圈黑色的长发。[/whisper]";
StoryData.continue_watch.hallucination = "[whisper]走廊的镜子里，你的身后站着一个穿红戏服的人。[/whisper]";
StoryData.promise_help.hallucination = "[whisper]你仿佛看见云袖站在真正的戏台上，台下坐满了没有脸的人。[/whisper]";

// 新增分支入口
StoryData.prologue.choices.push({
    text: '你闻到一缕桂花香从门缝飘出',
    next: 'osmanthus_trace'
});
StoryData.search_archives.choices.push({
    text: '去青石镇东街找周氏纸扎铺',
    next: 'paper_shop_visit',
    effects: { time: 60 }
});
StoryData.knock_first.choices.push({
    text: '在门外焚香祭拜，按老规矩敬亡者',
    next: 'burn_incense_for_her',
    effects: { yin: -5 }
});

// NPC 对话入口
StoryData.prologue.choices.push({
    text: '先给林叔打个电话',
    npc: 'lin_shu',
    npcNode: 'start',
    custom: 'npc'
});
StoryData.search_archives.choices.push({
    text: '打电话向林叔求证',
    npc: 'lin_shu',
    npcNode: 'start',
    custom: 'npc'
});
StoryData.paper_shop_visit.choices.push({
    text: '和瞎眼阿婆多聊几句',
    npc: 'zhou_popo',
    npcNode: 'start',
    custom: 'npc'
});
StoryData.ask_her_name.choices.push({
    text: '尝试与云袖对话',
    npc: 'yunxiu',
    npcNode: 'start',
    custom: 'npc'
});

// ============================================================
// 批次7：新增支线入口与 NPC 对话入口
// ============================================================

// 巡厅入口（殡仪馆深度探索线）
StoryData.prologue.choices.push({
    text: '先巡一遍各厅，按规矩确认',
    next: 'patrol_corridor'
});

// 地下室入口（条件：知道棺材或巡过厅）
StoryData.patrol_corridor.choices.push({
    text: '去走廊尽头看看那扇铁门',
    next: 'basement_descent'
});

// 县志馆入口（民俗调查线）
StoryData.search_archives.choices.push({
    text: '去县志馆深查当年的警务记录',
    next: 'county_archive',
    effects: { time: 60 }
});

// 老票友入口（需先到青石镇）
(StoryData.go_old_stage.choices = StoryData.go_old_stage.choices || []).push({
    text: '去青石镇茶馆找老人打听',
    npc: 'old_fan',
    npcNode: 'start',
    custom: 'npc'
});
StoryData.zhousheng_workshop_ruins.choices.push({
    text: '去茶馆找老票友何伯聊聊',
    npc: 'old_fan',
    npcNode: 'start',
    custom: 'npc'
});

// 五号厅学徒对话入口
StoryData.hall_five_apprentice.choices.push({
    text: '坐下来，跟学徒多聊几句',
    npc: 'apprentice_ghost',
    npcNode: 'start',
    custom: 'npc'
});

// 三号厅少年对话入口
StoryData.hall_three_inspection.choices.push({
    text: '尝试和少年说几句话',
    npc: 'chenlei_ghost',
    npcNode: 'start',
    custom: 'npc'
});
StoryData.hall_three_girl.choices.push({
    text: '再陪少年说几句',
    npc: 'chenlei_ghost',
    npcNode: 'start',
    custom: 'npc'
});

// 周生纸扎铺遗址入口（从档案室或纸扎铺延伸）
StoryData.paper_shop_visit.choices.push({
    text: '去周氏纸扎铺的旧址看看',
    next: 'zhousheng_workshop_ruins',
    effects: { time: 30 }
});

// 春香班后人入口（从周生墓或老戏台延伸）
StoryData.zhousheng_grave.choices.push({
    text: '去找春香班班主的后人',
    next: 'chunxiang_descendant_home',
    effects: { time: 60 }
});

// 戏曲研究所入口
StoryData.chunxiang_photo_to_yunxiu.choices.push({
    text: '把手抄曲谱送去戏曲研究所',
    next: 'opera_institute',
    effects: { time: 60 }
});

// 第二夜推进入口（需完成棺材仪式或取得足够线索）
StoryData.coffin_final_rite.choices.push({
    text: '天亮后，等待第二夜的到来',
    next: 'night_two_dawn',
    condition: { flag: 'coffinReady' }
});

// 守夜人传承入口（林叔往事）
StoryData.burn_incense_for_her.choices.push({
    text: '天亮后，跟来接班的林叔聊聊',
    next: 'lin_shu_memory'
});

// 隐藏：第三夜最终抉择入口（需集齐多条线索）
StoryData.watcher_notebook.choices.push({
    text: '一切就绪，进入第三夜的最终抉择',
    next: 'night_three_choice',
    condition: { flag: 'riteComplete' },
    hidden: true
});

// ===== 新增低理智幻觉 =====
StoryData.basement_descent.hallucination = "[whisper]地下室的阴影里，你看见无数穿戏服的人影，排着队走向一面铜镜。[/whisper]";
StoryData.memory_fire_night.hallucination = "[whisper]你不是周生。可火里那个被压住腿的人，转过头来，长着你的脸。[/whisper]";
StoryData.hall_three_inspection.hallucination = "[whisper]白布下伸出的不只是手，还有一张和你一模一样、碎裂的脸。[/whisper]";
StoryData.coffin_to_river.hallucination = "[whisper]河水里倒映的不是云袖，是你自己穿着红戏服，对着一座空戏台唱戏。[/whisper]";

// ============================================================
// 批次14：新增支线入口（深度探索/调查/回忆/平行线）
// ============================================================

// 火灾死难者平行线入口（从地下室铁皮柜）
StoryData.basement_lockers.choices.push({
    text: '翻找火灾死难者的记录',
    next: 'fire_victim_list'
});

// 周生镜入口（在地下室，发现第二面镜子）
StoryData.basement_lockers.choices.push({
    text: '柜底有面红绸包着的镜子',
    next: 'zhousheng_mirror_vision',
    condition: { flag: 'foundZhouShengCache' },
    hidden: true
});

// 青石戏园旧址入口（从老戏台延伸）
StoryData.go_old_stage.choices.push({
    text: '去春香班驻唱的戏园子旧址看看',
    next: 'old_opera_house_ruins'
});

// 桂花巷入口（从纸扎铺或戏园延伸）
StoryData.paper_shop_visit.choices.push({
    text: '打听一下云袖生前住的桂花巷',
    next: 'osmanthus_alley'
});

// 老茶楼入口（从桂花巷延伸）
StoryData.osmanthus_alley.choices.push({
    text: '去镇上的老茶楼坐坐',
    next: 'old_teahouse'
});

// 神秘来电入口（条件：守过一夜且知道云袖名字，时间推进）
StoryData.continue_watch.choices.push({
    text: '凌晨三点，殡仪馆的座机响了',
    next: 'mysterious_call',
    condition: { flag: 'knowsName', timeAfter: 1500 },
    hidden: true
});

// 第一代守夜人手记入口（从守夜人手记延伸）
StoryData.watcher_notebook.choices.push({
    text: '翻翻手记最后一页夹着的旧纸',
    next: 'first_watcher_journal'
});

// 青石河底入口（条件：知道云袖和周生都葬身河中 + 有铜镜）
StoryData.zhousheng_bridge.choices.push({
    text: '拿出铜镜，看看河底',
    next: 'river_bottom_vision',
    condition: { flag: 'knowsCompleteMemory', hasItem: '云袖的银钗' },
    hidden: true
});

// 林叔对话入口扩充
StoryData.prologue.choices.push({
    text: '问林叔其他厅的规矩',
    npc: 'lin_shu',
    npcNode: 'lin_other_halls',
    custom: 'npc',
    condition: { flag: 'linRulesLearned' }
});
StoryData.search_archives.choices.push({
    text: '问林叔退休的事',
    npc: 'lin_shu',
    npcNode: 'lin_retirement',
    custom: 'npc',
    condition: { flag: 'linShuPassedDown' }
});

// 云袖新对话入口
StoryData.ask_her_name.choices.push({
    text: '问云袖活着的滋味',
    npc: 'yunxiu',
    npcNode: 'yunxiu_life_question',
    custom: 'npc',
    condition: { flag: 'yunxiuComforted' }
});
StoryData.ask_her_name.choices.push({
    text: '问云袖那场火',
    npc: 'yunxiu',
    npcNode: 'yunxiu_memory_fire',
    custom: 'npc',
    condition: { flag: 'knowsName' }
});
StoryData.ask_her_name.choices.push({
    text: '问云袖其他班子里的人',
    npc: 'yunxiu',
    npcNode: 'yunxiu_other_members',
    custom: 'npc',
    condition: { flag: 'knowsOtherVictims' }
});
StoryData.ask_her_name.choices.push({
    text: '问云袖的梦',
    npc: 'yunxiu',
    npcNode: 'yunxiu_dream',
    custom: 'npc',
    condition: { flag: 'yunxiuTearSeen' }
});
StoryData.ask_her_name.choices.push({
    text: '问云袖想怎么走',
    npc: 'yunxiu',
    npcNode: 'yunxiu_farewell_prep',
    custom: 'npc',
    condition: { flag: 'knowsCompleteMemory' }
});
StoryData.ask_her_name.choices.push({
    text: '和云袖谈谈纵火的事',
    npc: 'yunxiu',
    npcNode: 'yunxiu_question_greed',
    custom: 'npc',
    condition: { flag: 'knowsArsonTruth' }
});

// 春香班三人散场后，云袖状态变化
StoryData.three_souls_to_yunxiu.choices.push({
    text: '问云袖还想不想走',
    npc: 'yunxiu',
    npcNode: 'yunxiu_farewell_prep',
    custom: 'npc'
});

export const NPCs = {
    lin_shu: {
        name: '林叔',
        title: '老守夜人',
        dialogue: {
            start: {
                text: `电话响了三声才接通。林叔的声音带着睡意："周遥？这才几点。七号厅……那位醒了？"`,
                choices: [
                    { text: '她是谁？', next: 'lin_yunxiu' },
                    { text: '守夜有什么规矩？', next: 'lin_rules' },
                    { text: '我能换班吗？', next: 'lin_switch', effects: { npcAffinity: -10 } },
                    { text: '没事，挂了吧', exit: true }
                ]
            },
            lin_yunxiu: {
                text: `林叔沉默片刻："她叫云袖，民国二十三年春香班的旦角。死在青石镇戏台一场大火里。后来有人把她从河里捞出来，送到这儿。她啊，不是想害人，是想唱完那出《牡丹亭》。"`,
                choices: [
                    { text: '谁把她移到河里的？', next: 'lin_zhou_sheng' },
                    { text: '该怎么对她？', next: 'lin_rules' },
                    { text: '谢谢林叔', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            lin_rules: {
                text: `林叔压低声音："三条规矩记牢：子时后莫开大灯；进门先敲三下；她若开口求你，能答应就答应，答应不了也要敬一杯水酒。守夜人敬鬼，鬼亦敬人。"`,
                choices: [
                    { text: '记住了', exit: true, effects: { npcAffinity: 5, setFlag: 'linRulesLearned' } },
                    { text: '您以前守过她？', next: 'lin_past' }
                ]
            },
            lin_zhou_sheng: {
                text: `"听老辈说是青石镇周氏纸扎铺的少爷，叫周生。戏台要塌时把她推进河里，想以水克火。结果水锁了魂。你要是见着什么老镜子、银钗，那都是他的念想，别乱碰。"`,
                choices: [
                    { text: '原来如此', exit: true, effects: { npcAffinity: 5, setFlag: 'linHintedZhouSheng' } },
                    { text: '守夜规矩再说一遍', next: 'lin_rules' }
                ]
            },
            lin_past: {
                text: `林叔苦笑："年轻时我也怕她，被她吓掉半条命。后来才明白，她不是恶鬼，只是戏没散。你要是有心，替她搭个台，她能记你一辈子。"`,
                choices: [
                    { text: '我会试试', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            lin_switch: {
                text: `"换班？"林叔的声音冷下来，"守夜人哪有临阵脱逃的规矩。她既然醒了，就是冲着你来。你跑，她跟你一辈子。"`,
                choices: [
                    { text: '我懂了', next: 'lin_rules' },
                    { text: '还是算了，我再想想', exit: true }
                ]
            },
            // ===== 批次13：扩充林叔对话 =====
            lin_other_halls: {
                text: `"林叔，"你问，"馆里其他厅，有没有什么讲究？"

林叔想了想："一号厅的老张头，做了一辈子棺材，是个善人。你要是巡到那儿，多拜拜，他保你。

"三号厅那个孩子，车祸走的，怨气重。你要是听见他说话，别怕，问问他有什么放不下的，帮他说了，他就安生了。

"五号厅空着，可你别以为真空。那里头住着一个民国来的学徒，守着他师父的东西。他不害人，就是爱翻书。你要是听见翻书声，别理他，那是他在守他的本分。"

林叔顿了顿。

"这馆子里，每一个厅都有故事。守夜人，守的不只是尸，是这些故事。"`,
                choices: [
                    { text: '记住了', exit: true, effects: { npcAffinity: 15, setFlag: 'linToldOtherHalls', sanity: 5 } },
                    { text: '那地下室呢？', next: 'lin_basement' }
                ]
            },
            lin_basement: {
                text: `"地下室？"林叔的声音压低了，"你怎么知道地下室？"

"走廊尽头那扇铁门。"

林叔沉默了一会儿。

"那地方，我守了三十年都没敢下去。老馆长临终前交代过，地下室里存着老殡仪馆的旧物，还有……一些不该动的东西。

"他说，民国时候有个纸扎匠，把一堆东西存在那儿，说是'待有缘人'。可谁是那个有缘人，老馆长也不知道。他就把这事，一代代传下来了。

"你要是觉得，你就是那个有缘人……"林叔叹了口气，"那你就去吧。钥匙在值班室抽屉里。我给你留着呢。"`,
                choices: [
                    { text: '谢过林叔，去地下室', exit: true, effects: { npcAffinity: 20, setFlag: 'linGaveBasementKey', sanity: 5 } },
                    { text: '再问问', next: 'lin_other_halls' }
                ]
            },
            lin_retirement: {
                text: `"林叔，"你问，"您什么时候退休？"

林叔沉默了很久。

"快了。"他说，"我心脏不好，医生说我撑不了几年了。

"我本来想，再守几年，等云袖姑娘的事了了再说。可我这身子骨……"他苦笑，"怕是等不到了。"

"您放心。"你说，"云袖的事，我接手。"

电话那头，林叔长长地舒了一口气。

"好孩子。"他说，声音里带着一丝哽咽，"好孩子。我守了三十年，就盼着有人能跟我说这句话。

"周遥，你比我强。我老了，只能守。你能渡。云袖姑娘等了快一百年，等的就是你这样的人。"

林叔顿了顿。

"我退休后，这馆子就交给你了。守夜人手记我会留给你。还有一本老书，叫《阴阳簿》，是上一任记录者留下的。你也一并收着。"`,
                choices: [
                    { text: '郑重答应', exit: true, effects: { npcAffinity: 30, setFlag: 'linShuPassedDown', sanity: 15, addItem: '守夜人手记' } }
                ]
            },
            lin_dying_wish: {
                text: `"周遥，"林叔的声音忽然变得郑重，"我有件事，想托付你。"

"您说。"

"我退休后，要是哪天……我走了，你替我，把我葬在殡仪馆后山。陈家几代守夜人都葬在那儿，我想跟他们做伴。

"还有，我守了云袖姑娘三十年，没能帮她。我走的时候，你替我在她灵床前，点三炷香，告诉她，林叔对不起她，没能让她唱完那出戏。

"然后，你替我，把这事办了。让她散。让她，和周生在一起。"

电话那头传来林叔压抑的咳嗽。

"我这辈子，就这一个遗憾。你能替我了，我就能安心走了。"`,
                choices: [
                    { text: '我答应您，林叔', exit: true, effects: { npcAffinity: 40, setFlag: 'linDyingWish', sanity: 20, setFlag: 'yunxiuWishComplete' } }
                ]
            }
        }
    },
    zhou_popo: {
        name: '瞎眼阿婆',
        title: '周氏纸扎铺守铺人',
        dialogue: {
            start: {
                text: `阿婆侧耳听了听你的脚步声："后生，你是来找云袖姑娘的吧？我爷爷那辈就守着这铺子，等一个能把替身送出去的人。"`,
                choices: [
                    { text: '替身是什么？', next: 'popo_tishen' },
                    { text: '周生是什么样的人？', next: 'popo_zhousheng' },
                    { text: '我带了青石镇的旧报纸', next: 'popo_newspaper', condition: { hasItem: '青石镇旧报纸' } },
                    { text: '告辞', exit: true }
                ]
            },
            popo_tishen: {
                text: `"纸人替身，替真身受过。周生扎了云袖的替身，本想烧给她，让她免了戏台坍塌的灾。可他没来得及。这纸人如今还在我柜底，你要是拿去七号厅焚了，云袖就有个替身的，好上路。"`,
                choices: [
                    { text: '怎么才能得到它？', next: 'popo_price' },
                    { text: '我明白了', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            popo_price: {
                text: `阿婆枯瘦的手指敲了敲柜台："不要钱。但要你替周生做一件事——把铜镜和信，一并还给她。让他在阴间也能了了这桩心愿。"`,
                choices: [
                    { text: '我答应', exit: true, effects: { npcAffinity: 10, setFlag: 'promisedReturnZhouSheng' } },
                    { text: '我只想要纸人', next: 'popo_greedy', effects: { npcAffinity: -15 } },
                    { text: '算了', exit: true }
                ]
            },
            popo_greedy: {
                text: `阿婆脸色一沉："贪心的人，替身不会认你。回去吧，等你想清楚了再来。"`,
                choices: [
                    { text: '对不起', exit: true, effects: { npcAffinity: 5 } },
                    { text: '哼，不要也罢', exit: true }
                ]
            },
            popo_zhousheng: {
                text: `"周生啊……是个手巧的扎纸匠，也是云袖的戏迷。戏台塌那晚，他冲进去救人，被横梁砸了背。后来他把云袖背到青石河，以为水能灭火。他临走前把铜镜和信留在我这儿，说总有一天会有人来接。"`,
                choices: [
                    { text: '铜镜有什么用？', next: 'popo_mirror' },
                    { text: '信在哪里？', next: 'popo_letter' },
                    { text: '他们真可怜', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            popo_mirror: {
                text: `"铜镜是定情物，背面刻着"周生赠云袖"。镜里映的不是人脸，是他最后看见的火。你若有缘得到它，放在她枕边，她就知道他不是负心人。"`,
                choices: [
                    { text: '记下了', exit: true, effects: { npcAffinity: 5, setFlag: 'popoHintedMirror' } }
                ]
            },
            popo_letter: {
                text: `"信在我这里，但只有真心想送还的人，才能拆开。你若念给她听，比烧一百叠纸钱都管用。"`,
                choices: [
                    { text: '请把信给我', next: 'popo_give_letter', condition: { flag: 'promisedReturnZhouSheng' } },
                    { text: '我会再来', exit: true }
                ]
            },
            popo_give_letter: {
                text: `阿婆从柜台底摸出一个油纸包，递给你："念给她听时，声音轻一点。她等这句话，等了近百年。"`,
                choices: [
                    { text: '收下', exit: true, effects: { addItem: '周生的信', npcAffinity: 10 } }
                ]
            },
            popo_newspaper: {
                text: `你读出报纸上"青石镇戏台坍塌"的标题。阿婆点点头："你这报纸是从别处得来的吧？云袖的事不是青石镇一家的债。你能找来这个，说明你和她有缘。"`,
                choices: [
                    { text: '能告诉我更多吗？', next: 'popo_zhousheng' },
                    { text: '谢谢阿婆', exit: true, effects: { npcAffinity: 5, sanity: 5 } }
                ]
            }
        }
    },
    yunxiu: {
        name: '云袖',
        title: '春香班旦角',
        dialogue: {
            start: {
                text: `她的眼珠缓缓转向你，戏服上的水珠滴落在地。她没有张嘴，声音却直接落进你耳中："活人见了我，不是逃就是骂。你为何还站在这里？"`,
                choices: [
                    { text: '我知道你的名字', next: 'yunxiu_knows_name', condition: { flag: 'knowsName' } },
                    { text: '我想帮你', next: 'yunxiu_help' },
                    { text: '你为什么不肯闭眼？', next: 'yunxiu_awake' },
                    { text: '我这就走', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_knows_name: {
                text: `"云袖……"她轻轻重复，像是在品一壶隔夜的茶。"好久没人叫我的名字了。他们都叫我七号厅那位、那具女尸、那个唱戏的鬼。"`,
                choices: [
                    { text: '你想唱完哪一出？', next: 'yunxiu_final_play' },
                    { text: '谁把你移到河里的？', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '我会记住你', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            yunxiu_help: {
                text: `"帮我？"她低声笑了，笑声像碎玉落地。"帮我搭一座戏台，帮我唱完《牡丹亭》。或者……帮我找到那个把我放进河里的人，问问他，可曾后悔。"`,
                choices: [
                    { text: '我答应帮你搭戏台', exit: true, effects: { npcAffinity: 15, setFlag: 'promised', sanity: 5 } },
                    { text: '你是说周生？', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '我需要报酬', next: 'yunxiu_payment' }
                ]
            },
            yunxiu_awake: {
                text: `"我醒来，是因为有人记得我，也是因为有人忘了我。守夜的人换了一拨又一拨，只有你问我需要什么。"她顿了顿，"可你要小心，记得我的人，也会被我的执念缠住。"`,
                choices: [
                    { text: '我不怕', next: 'yunxiu_help' },
                    { text: '我会保持距离', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_final_play: {
                text: `"《牡丹亭·惊梦》。"她说，"我死在那一场火里，戏台塌了，鼓点停了。可我的魂还在唱。你若替我搭一座戏台，我便安心。"`,
                choices: [
                    { text: '我答应你', exit: true, effects: { npcAffinity: 20, setFlag: 'promised' } },
                    { text: '如果我也喜欢上你的戏呢？', next: 'yunxiu_duet', condition: { flag: 'yunxiuComforted' } }
                ]
            },
            yunxiu_duet: {
                text: `云袖愣了一下，随即露出一个极淡的笑："那我便唱给你一个人听。只是听完了，你可别像我，再也走不出那出戏。"`,
                choices: [
                    { text: '我甘愿做你的最后一名观众', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuLastAudience' } }
                ]
            },
            yunxiu_zhou_sheng: {
                text: `"周生……"她的声音忽然变得很轻，"他把我放进青石河，说水能灭火。他以为救了我，却锁住了我的魂。我不怪他。我只是想问他，那枚银钗，他可还记得。"`,
                choices: [
                    { text: '我会替你问他', exit: true, effects: { npcAffinity: 15, setFlag: 'yunxiuForgaveZhouSheng' } },
                    { text: '如果你见到他呢？', next: 'yunxiu_meet_zhou' }
                ]
            },
            yunxiu_meet_zhou: {
                text: `"若再见他，我便唱完《牡丹亭》，然后随他走。戏散了，魂也该散了。"她闭上眼，"可我不知道，他还在不在。"`,
                choices: [
                    { text: '我会帮你找他的痕迹', exit: true, effects: { npcAffinity: 10, setFlag: 'yunxiuSearchZhouSheng' } }
                ]
            },
            yunxiu_payment: {
                text: `"活人总是贪。"她的戏服无风自动，"你要什么？我的银钗？我的戏服？还是我的命？"`,
                choices: [
                    { text: '你的银钗', next: 'yunxiu_give_hairpin', condition: { lacksItem: '云袖的银钗' } },
                    { text: '我开玩笑的', exit: true, effects: { npcAffinity: -5 } }
                ]
            },
            yunxiu_give_hairpin: {
                text: `云袖取下鬓边的银钗，轻轻放在你掌心。钗身冰凉，刻着她的名字。"拿去吧。但你要记住，拿了戏子的钗，就要听戏子的话。"`,
                choices: [
                    { text: '收下', exit: true, effects: { addItem: '云袖的银钗', npcAffinity: -5, yin: 5 } }
                ]
            },
            // ===== 批次13：扩充云袖对话 =====
            yunxiu_life_question: {
                text: `"守夜人，"云袖忽然问，"活着的滋味，是什么样的？"

你愣了一下。

"我死得太早了，"她低声说，"早到我都快忘了，活着是什么感觉。是热的吗？是甜的吗？"

你想了想："活着，什么滋味都有。有苦有甜，有冷有热。可最珍贵的，是你还能选——选明天做什么，选爱谁，选走哪条路。"

云袖听完，沉默了一会儿。

"那我，再也没得选了。"她说，"我从火里落进河里的那一刻，就再也没得选了。"

"可你现在，还在选。"你说，"你选了等周生。你选了不害人。你选了，跟我说这些话。"

云袖抬起头，看着你。

"你说得对。"她露出一个极淡的笑，"原来，死了也还能选。谢谢你，守夜人。"`,
                choices: [
                    { text: '继续陪她聊聊', next: 'yunxiu_final_play' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 15, sanity: 10 } }
                ]
            },
            yunxiu_other_members: {
                text: `"你见过班子里其他人吗？"你问。

云袖的眼神黯了黯。

"秦叔、赵哥、孙师傅……"她一一念着名字，"他们和我一起，死在那场火里。可我不知道他们去了哪里。我醒的时候，七号厅里只有我一个。"

"他们还在青石镇的废墟。"你说。

云袖的身体颤了一下。

"还在？"她急切地问，"他们……还好吗？"

"不太好。"你如实说，"他们和你一样，困在最后那一刻，反复重演。秦叔还在问救出来的孩子活着没。赵哥的脸卸不下来。孙师傅的二胡弦断了。"

云袖的眼泪涌了出来。

"我没想到，他们也在受苦。"她哽咽，"我以为，只有我一个。"

"我帮你去超度他们。"你说。

"谢谢你。"云袖擦了擦泪，"告诉他们……告诉他们，云袖想他们了。"`,
                choices: [
                    { text: '答应她，去废墟', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuAskedAboutMembers', sanity: 5 } },
                    { text: '问她和周生的事', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } }
                ]
            },
            yunxiu_memory_fire: {
                text: `"你还记得那场火吗？"你轻声问。

云袖闭上了眼。

"记得。"她说，"每一个细节，都记得。

"我记得火从后梁窜出来。我记得台下的人尖叫着跑。我记得秦叔冲下台，去抱那个孩子。我记得孙师傅被人群撞倒，再没起来。

"我记得赵哥站在台上，想挡住塌下来的横梁。他那么壮，可横梁太重了。

"我记得……我记得我没跑。"

她睁开眼，眼里有一种困惑。

"我不知道我为什么没跑。也许是吓傻了。也许是……入戏太深。我把自己当成了杜丽娘，觉得杜丽娘就该死在戏台上。"

"周生冲上来救你。"你说。

"是。"云袖的泪又涌出来，"他剪了我的红绳。他把我推进暗门。他说'云袖，等我'。

"然后我就，落进了水里。我挣扎，我喊他的名字，可河水灌进我的喉咙。我最后看见的，是火光映红了的天，和戏台塌下去的那一瞬。"

她闭上眼，声音轻得像风：

"然后，就是漫长的、水底的黑暗。"`,
                choices: [
                    { text: '告诉她周生的真相', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '什么都不说，只是握住她的手', exit: true, effects: { npcAffinity: 20, sanity: 10, setFlag: 'yunxiuComforted' } }
                ]
            },
            yunxiu_dream: {
                text: `"云袖，"你问，"你这些年，做过梦吗？"

她愣了一下，然后苦笑。

"鬼怎么会做梦呢？我们就是别人的梦。"

她顿了顿。

"可我总在重复一个画面——周生冲上台，剪断我的红绳。我落进水里。然后，我看见他在火里，朝我伸出手。

"每一次，我都想握住他的手。每一次，都握不住。然后我就醒——'醒'，也就是重新浮在七号厅的灵床上。"

"那不是梦。"你说，"那是记忆。"

"可如果是记忆，"云袖低下头，"为什么每次我都握不住他的手？我明明记得，他朝我伸了手。"

你沉默了一会儿。

"也许，"你轻声说，"是因为，你心里一直觉得他抛下了你。所以记忆里，你也握不住他。"

云袖抬起头，看着你，眼里的雾，一点一点散了。`,
                choices: [
                    { text: '告诉她周生一直在等她', next: 'yunxiu_zhou_sheng', condition: { flag: 'knowsZhouSheng' } },
                    { text: '继续陪她', exit: true, effects: { npcAffinity: 20, sanity: 5 } }
                ]
            },
            yunxiu_farewell_prep: {
                text: `"云袖，"你问，"如果有一天，你真的能走了，你想怎么走？"

她想了很久。

"我想穿着戏服走。"她说，"那是我这辈子最体面的衣服。

"我想在戏台上唱完最后一折，然后，福一福，谢幕。

"我想……我想周生在台下看着我。就像当年，他每场戏都坐在第一排，看我唱。"

她转向你，眼神里有一种近乎活人的光彩。

"你能帮我，实现这个吗？"

"能。"你说。

"那，"她笑了，"我现在就开始练嗓子。这一折《惊梦》，我等了一百年，要唱得最好。"`,
                choices: [
                    { text: '答应她，为她搭起戏台', exit: true, effects: { npcAffinity: 30, setFlag: 'promised', setFlag: 'yunxiuWishComplete', sanity: 10 } }
                ]
            },
            yunxiu_question_greed: {
                text: `"守夜人，"云袖忽然问，"人为什么会害人？"

"什么意思？"

"那场火。"她说，"我后来知道了，不是意外。是有人，为了地皮，烧了戏台。"

她低下头。

"五条命，就为了一块地。我到今天都想不通。地，能比命贵吗？"

你想了想："对有些人来说，能。"

"那他们，"云袖的声音带着一丝冷意，"晚上睡得着吗？"

"睡得着。"你说，"因为那种人，没有心。"

云袖沉默了很久。

"我恨过他们。"她终于说，"恨了将近一百年。可恨太累了。我决定不恨了。我只希望，以后的人，能记住这件事。记住贪婪能烧死五条命。"

"我会记住的。"你说，"我还会写下来。"

"那就好。"云袖点点头，"有你在，我放心了。"`,
                choices: [
                    { text: '答应她把真相写进书里', exit: true, effects: { npcAffinity: 25, setFlag: 'yunxiuKnowsArson', setFlag: 'yunxiuRemembered', sanity: 10 } }
                ]
            }
        }
    },

    // ===== 批次6：新增 NPC =====
    old_fan: {
        name: '何伯',
        title: '青石镇老票友',
        dialogue: {
            start: {
                text: `你在青石镇茶馆里找到何伯。他八十多岁了，耳朵背，但一听见"春香班"三个字，眼睛就亮了。

"春香班！哎呀，那是多少年前的事了。"何伯拍着大腿，"我年轻时候，追着春香班跑了半个县，就为了听云袖姑娘一出《牡丹亭》。"`,
                choices: [
                    { text: '你听过云袖唱戏？', next: 'fan_yunxiu_voice' },
                    { text: '那场大火你知道吗？', next: 'fan_fire' },
                    { text: '周生是什么人？', next: 'fan_zhousheng' },
                    { text: '告辞', exit: true }
                ]
            },
            fan_yunxiu_voice: {
                text: `"听过！怎么没听过！"何伯闭上眼，像是回到了几十年前，"云袖姑娘的嗓子，那是老天爷赏饭吃。她一开腔，满园子鸦雀无声，连树上的鸟都不叫了。

"我记得她唱《惊梦》，唱到'良辰美景奈何天'，我在台下，眼泪就下来了。那时候我不懂什么叫好戏，可我就是想哭。后来我才明白，那是唱到了人心里去。"`,
                choices: [
                    { text: '除了你，还有人记得她吗？', next: 'fan_others_remember' },
                    { text: '那场大火怎么回事？', next: 'fan_fire' },
                    { text: '谢谢何伯', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            fan_fire: {
                text: `何伯的脸色暗下来。

"那场火啊……是我这辈子见过最惨的事。戏台后梁断了，火一下子就烧起来。满园子的人疯了一样往外跑。

"可云袖姑娘没跑。她站在台上，还在唱。大家都说她疯了，可我那时候就坐在第一排，我看清了——她不是疯了，她是入戏了。她把自己当成了杜丽娘，死也要死在戏台上。"

何伯擦了擦眼角。

"后来有个年轻人冲上去救她。听说是纸扎铺的周生。再后来，戏台塌了，火光里什么都看不见了。云袖姑娘和周生，都没出来。"`,
                choices: [
                    { text: '周生后来呢？', next: 'fan_zhousheng' },
                    { text: '你会唱《牡丹亭》吗？', next: 'fan_can_sing' },
                    { text: '谢谢何伯告诉我这些', exit: true, effects: { npcAffinity: 10, setFlag: 'fanToldFire', sanity: 5 } }
                ]
            },
            fan_zhousheng: {
                text: `"周生啊……"何伯想了想，"是个老实人。话不多，手特别巧。他扎的纸花，全镇第一。

"他对云袖姑娘好，全镇都知道。每场戏，他都送一篮子纸花去后台。云袖姑娘上台，鬓边别的花，十有八九是他扎的。

"大伙儿都说他们是天生一对，就等周生攒够聘礼提亲了。谁能想到……"

何伯叹了口气。

"要是没那场火，他们早成亲了，没准儿现在孙子都有了。哪至于……一个泡在河里，一个不知所踪。"`,
                choices: [
                    { text: '周生其实投河了', next: 'fan_zhousheng_river', condition: { flag: 'foundZhouShengDiary' } },
                    { text: '那场大火的详情？', next: 'fan_fire' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            fan_zhousheng_river: {
                text: `你把周生投河的事告诉何伯。

老人家的茶杯停在半空，手抖得厉害。

"他……他也走了？"何伯的声音哽咽，"为了云袖姑娘，他也……"

他沉默了很久。

"那他们，总算是在一起了。"他最后说，"水里也好，土里也好，总算是在一起了。"

何伯颤巍巍地从怀里掏出一张发黄的戏票，递给你。

"这是云袖姑娘最后那场戏的票。我留了一辈子。你拿去，替我烧给她。告诉她，何伯这辈子，没忘了她的戏。"`,
                choices: [
                    { text: '收下戏票', exit: true, effects: { addItem: '云袖最后的戏票', npcAffinity: 20, sanity: 10, setFlag: 'fanGaveTicket' } }
                ]
            },
            fan_others_remember: {
                text: `"记得她的人？"何伯想了想，"老一辈的，走得差不多了。年轻人谁还知道春香班？

"不过，你要是真想找人，去镇南养老院找孙家奶奶。她爷爷是春香班的班主，家里应该还留着些旧物件。

"再就是省城有个戏曲研究所，前些年来人问过云袖姑娘的事，说是要写进什么书里。你若有心，可以去那边问问。"`,
                choices: [
                    { text: '记下了，谢谢何伯', exit: true, effects: { npcAffinity: 10, setFlag: 'fanHintedDescendant' } }
                ]
            },
            fan_can_sing: {
                text: `何伯愣了一下，然后清了清嗓子。

"我唱得不好，就记得几句。"

他闭着眼，用沙哑的、跑调的嗓音，轻轻唱了起来：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

茶馆里的人都转过头来看。何伯唱得不好，但每一个字都带着一种说不出的、苍凉的深情。

唱完，他睁开眼，笑了。

"云袖姑娘唱得比我好一万倍。可我这一辈子，也没忘过这一句。"`,
                choices: [
                    { text: '何伯，谢谢你', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'fanSangForYunxiu' } }
                ]
            }
        }
    },

    apprentice_ghost: {
        name: '纸扎学徒',
        title: '五号厅守册人',
        dialogue: {
            start: {
                text: `你对着五号厅灵床底下轻声说："我能跟你聊聊吗？"

翻书声停了。过了一会儿，一个怯生生的年轻声音响起：

"您……您又来了？我以为您只是路过。"`,
                choices: [
                    { text: '你叫什么名字？', next: 'app_name' },
                    { text: '你师父是个什么样的人？', next: 'app_master' },
                    { text: '你知道七号厅的云袖吗？', next: 'app_yunxiu' },
                    { text: '你该走了', next: 'app_leave', condition: { flag: 'yunxiuKnowsTruth' } },
                    { text: '告辞', exit: true }
                ]
            },
            app_name: {
                text: `"我？"声音沉默了一会儿，"我叫……我想不起来了。师父叫我'小扎'，因为我年纪小，专门帮他扎纸花的花瓣。

"我大概是十二三岁来的铺子。家里穷，爹妈把我送给师父学手艺。师父人好，不打我，还管饭。"

"后来师父走了，铺子就剩我一个人。殡仪馆的老馆长可怜我，让我住这儿，帮师父守着那些册子。"`,
                choices: [
                    { text: '你师父是什么样的人？', next: 'app_master' },
                    { text: '你知道云袖吗？', next: 'app_yunxiu' },
                    { text: '我帮你记起名字', exit: true, effects: { npcAffinity: 10 } }
                ]
            },
            app_master: {
                text: `"师父啊……"学徒的声音温柔起来，"师父是全青石镇手艺最好的纸扎匠。他扎的纸人，眉眼跟活的一样。

"可师父心里只有一个人。就是云袖姑娘。师父给她扎花，扎了好多好多年。

"云袖姑娘出事那天，师父疯了一样冲进火里。后来云袖姑娘不见了，师父就变了个人。他白天扎纸，夜里去河边，一站就是一宿。

"有一天，师父把我叫到跟前，说：'小扎，铺子交给你了。云袖姑娘的东西都在殡仪馆地下室，你帮我守着。我去找她了。'

"然后师父就再也没回来。"`,
                choices: [
                    { text: '他去找云袖了，在青石河里', next: 'app_master_river', condition: { flag: 'foundZhouShengDiary' } },
                    { text: '你知道云袖吗？', next: 'app_yunxiu' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            app_master_river: {
                text: `"在河里……"学徒的声音颤抖，"师父他……跳进了河里？"

床底下沉默了很久。

"那他现在，和师娘在一起了吗？"学徒小心翼翼地问。

"师娘知道了真相。"你说，"她不怨师父了。她想去找他。"

"那……"学徒的声音带上了哭腔，"那我是不是也可以走了？我守了这么多年，就是想等师娘不怨师父的那一天……"`,
                choices: [
                    { text: '你可以走了，我带你去见师娘', next: 'app_leave', effects: { npcAffinity: 15 } },
                    { text: '再等等', exit: true }
                ]
            },
            app_yunxiu: {
                text: `"师娘？"学徒的声音里带着敬畏，"我从来没见过师娘。师父不让我见。

"可我知道师父给她扎了好多东西。有一口棺材——不对，是一座戏台。师父说那不是棺材，是师娘的戏台。

"还有头面、曲谱、铜镜……师父都存在殡仪馆的地下室了。他说，等有缘人来，就把这些东西都给师娘送去。"

"我一直在等那个有缘人。"学徒轻声说，"等了好多好多年。也许，就是您？"`,
                choices: [
                    { text: '我就是那个有缘人', exit: true, effects: { npcAffinity: 20, setFlag: 'apprenticeTrust', sanity: 5 } },
                    { text: '我只是路过', exit: true }
                ]
            },
            app_leave: {
                text: `学徒沉默了很久。

"好。"他终于说，声音轻得像风，"那……您替我跟师娘说一声。师父没有负她。师父这辈子，只喜欢过她一个人。"

"还有，我跟师父说一声。师父，小扎守完了。可以歇了。"

床底下，那摞登记册最后一次滑出来，整整齐齐停在你脚边。

然后，翻书声彻底消失了。

五号厅恢复了真正的空寂——是那种亡者已得安息的、干净的空寂。`,
                choices: [
                    { text: '默哀片刻', exit: true, effects: { npcAffinity: 30, sanity: 15, yin: -15, setFlag: 'apprenticeReleased', clearFlag: 'apprenticeWantsToLeave' } }
                ]
            }
        }
    },

    chenlei_ghost: {
        name: '陈磊',
        title: '三号厅 · 车祸少年',
        dialogue: {
            start: {
                text: `你站在三号厅的白布前，轻声说："陈磊，能听见我吗？"

白布下沉默了一会儿。然后，一个年轻的、带着水泡声的声音响起：

"叔叔……您能听见我？白天我妈来的时候，她听不见。只有您能听见。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '你女朋友的事……', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你今年多大？', next: 'cl_age' },
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            cl_worry: {
                text: `"我妈。"少年的声音哽咽，"我爸走得早，就剩我妈一个人。我没了，她怎么活？

"还有……还有小月。那天是我送她回家。桥上那段路没灯，是我骑太快了。我看见护栏的时候，已经刹不住了。

"小月飞出去的时候，我还伸手去抓她。可我抓了个空。然后我也撞上去了。"`,
                choices: [
                    { text: '小月找到了，在第三个桥洞', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你妈妈会好起来的', next: 'cl_mother' },
                    { text: '不是你的错', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            cl_girlfriend: {
                text: `"找到了？"白布下的声音一下子亮了起来，"她在哪？她还好吗？"

"在青石桥第三个桥洞下面。"你说，"我们把她捞上来了。她妈妈也知道了。"

白布下传来压抑的抽泣。

"那就好……那就好。我一直不敢跟人说她在哪。我怕小月她妈恨我。是我害了小月。"

"不是你害的。"你说，"是个意外。"

"可如果那天我骑慢一点……"`,
                choices: [
                    { text: '小月不会怪你的', next: 'cl_xiaoyue_forgive' },
                    { text: '你该走了，别让小月等太久', exit: true, effects: { npcAffinity: 20, sanity: 10, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_xiaoyue_forgive: {
                text: `"小月……不怪我？"少年的声音颤抖。

"她手腕上那条手绳，"你说，"坠子是个小摩托。她每天都戴着。你觉得，她会怪一个她那么在乎的人吗？"

白布下安静了很久。

"谢谢你，叔叔。"少年的声音变得清澈，不再有水泡声，"帮我跟我妈说一声……对不起。下辈子，我还做她儿子，再也不骑快车了。"

"还有小月……如果有下辈子，我还送她回家。这次，我一定骑慢一点。"`,
                choices: [
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 30, sanity: 20, yin: -20, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_mother: {
                text: `"我妈……"少年哽咽，"她白天来哭了好久。我听见了，可我动不了，也说不出话。

"叔叔，您要是见到我妈，跟她说……别太难过。她还有我姐。我姐会照顾她的。

"还有我屋里那个摩托车模型，是我自己拼的。让她别扔了，送给我表弟吧。他一直想要。"`,
                choices: [
                    { text: '我会转告的', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'chenleiMotherMessage' } }
                ]
            },
            cl_age: {
                text: `"十九。"少年说，"刚考上大专，汽修专业。我妈说，等我毕业了，就能进我表舅的修车铺，自己挣钱了。

"我上个月刚买了那辆二手摩托，是用攒的零花钱买的。我妈骂我乱花钱，说太危险。

"她说得对。太危险了。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '安息吧', exit: true, effects: { npcAffinity: 5 } }
                ]
            }
        }
    }
};

export default { StoryData, Endings, NPCs };
