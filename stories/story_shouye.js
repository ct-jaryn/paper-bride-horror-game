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
    }
};

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

    // 新增结局
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
            }
        }
    }
};

export default { StoryData, Endings };
