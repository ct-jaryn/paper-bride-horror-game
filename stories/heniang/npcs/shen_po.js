import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：神婆（河婆）
 */

export const shen_po = createNPC('shen_po', {
  name: '神婆',
  title: '河婆',
  dialogue: {
    start: createDialogueNode('start', {
      text: `神婆用剩下的那只眼睛盯着你，那浑浊的眼珠像是蒙了一层河底的淤泥，却亮得出奇。她忽然咧嘴笑了，嘴里的牙只剩三五颗，黑黄的，像老河滩上裸露的树根。

"你身上有阴气。重的很呐——像是有人在河里拽你的衣裳角。"她伸出手，枯瘦的手指在你面前的空气中抓了一把，然后把手放到鼻子底下嗅了嗅，"你妈在找你，秀姑也在找你。她们两个，一个在水里泡久了，一个在河底压着，都不是好相与的主。你打算怎么办？"

她顿了顿，把头歪向一边，像是在听河水说话："我这把老骨头看了六十七年的河，什么没见过。镇上的人叫我河婆，因为我能听见河说话——不过这本事，是拿一只眼睛换的。"`,
      choices: [createDialogueChoice({
        text: '怎么救我妈？',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '第一个河娘是谁？',
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '再给我点东西防身',
        next: 'give_charm'
      }), createDialogueChoice({
        text: '你拿眼睛换了什么本事？',
        next: 'ask_eye_secret'
      }), createDialogueChoice({
        text: '先告辞',
        exit: true
      })]
    }),
    ask_ritual: createDialogueNode('ask_ritual', {
      text: `"想救你妈，路有三条。"神婆竖起三根枯瘦的手指，指甲缝里嵌着黑泥，"头一条，找个替身，骗秀姑替你妈。这条最容易，也最缺德——要害另一个人。第二条，正了这条河的源头，让河娘没有根。这条路远，要翻过后山去找沈氏的碑。最难得的路……"她忽然放低了声音，"是有人肯渡她们。"

她深深地吸了一口气，屋里的油灯跟着暗了一暗。

"渡人过河，说起来容易。可那水里的不是一般人，是怨气结成的。你渡她们，她们就会把你拖下去。你下去了，还能不能上来，那就是你的命。"`,
      choices: [createDialogueChoice({
        text: '渡她们是什么意思？',
        next: 'ask_ferryman_path'
      }), createDialogueChoice({
        text: '源头怎么正？',
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '教我一首河娘爱听的歌',
        next: 'teach_song'
      }), createDialogueChoice({
        text: '替身的事……详细说说',
        next: 'warn_substitute'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_first_heniang: createDialogueNode('ask_first_heniang', {
      text: `"第一个河娘？"神婆闭上那只完好的眼睛，像是在翻一本只有她自己看得见的旧账，"三百年前，清廷还在的时候，镇上沈家的女儿沈云娘，被人撞见和一个外乡的货郎说了几句话。沈家的族老说她不贞，在祠堂里动了私刑，活活把她沉了塘。"

她的声音忽然变得又细又远，像是从井底传来："她沉塘那天，河面冒了三天三夜的血泡。后来镇上闹瘟疫，死了半个村的人——沈家的人死得最干净。村里人说是沈云娘的怨气成了根，从塘底扎进河里，变成了河娘。"

她睁开眼，盯着你："你要想正名，就去她碑前说一句：她没错。一句话，三百年没人说过。你要是说了，兴许根就断了。"`,
      choices: [createDialogueChoice({
        text: '沈氏后人呢？',
        next: 'ask_descendants'
      }), createDialogueChoice({
        text: '教我唱歌',
        next: 'teach_song'
      }), createDialogueChoice({
        text: '沈氏的碑在哪里？',
        effects: { setFlag: 'knowsSteleLocation' },
        next: 'tell_stele_location'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_descendants: createDialogueNode('ask_descendants', {
      text: `"后人？村里还有姓沈的。"神婆冷笑，那笑声像是指甲划过晒干的竹篾，"沈老七，就住在东头石桥边。沈家现在是村里最穷的一脉，沈老七的爹死前跟他讲过祖上的事，可沈老七不信。"

她撑着膝盖站起来，从供桌下面摸出一根香点上，"人就是这样——欠了祖先的债，不想还，只想着当下。你要是真想走这条路，得先让他们相信，河里还在闹，是因为他们欠了债。"

她把香插进香炉，青烟笔直地升到屋顶，忽然断了："我替你算了一卦。你要是去找沈老七，他会问你三个问题。你答对了两个，他就信你。答错了——"她闭上嘴，不再往下说。`,
      choices: [createDialogueChoice({
        text: '怎么让他们相信？',
        effects: { setFlag: 'knowsShenDescendants' },
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '三个问题都是什么？',
        next: 'tell_three_questions'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_ferryman_path: createDialogueNode('ask_ferryman_path', {
      text: `"超度、正名、道歉，都是活人的规矩。"神婆眯起眼，那只瞎眼里忽然有微光一闪，"河娘不是人，也不是寻常的鬼。她们是河本身的痛。你超度一条河的痛，那是和尚道士干不了的事。"

她伸出手指，在你眉心虚虚一点，你感到一阵凉意窜进脑仁儿："河娘要的不是规矩，是有人把她们从这边，送到那边。送过去了，她们就不疼了。送不过去，她们就日日夜夜地疼，还要拉人和她们一起疼。"

她把手缩回袖子里，声音变轻了："你要是心里够硬，也够软，就去做那个撑船的人。撑船的人，要有一个名字当船钱——这个名字，得是你心里最舍不得的那个。"`,
      choices: [createDialogueChoice({
        text: '名字当船钱是什么意思？',
        effects: { setFlag: 'knowsFerrymanPath' },
        next: 'tell_name_price'
      }), createDialogueChoice({
        text: '我做不到',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '撑船需要什么？',
        next: 'give_charm'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    teach_song: createDialogueNode('teach_song', {
      text: `神婆清了清嗓子，翘起干裂的嘴唇。她唱的时候，声音忽然变了，不是老人沙哑的嗓，而是年轻女子清亮的、带着水气的调子：

[whisper]"月亮出来亮汪汪，亮汪汪，想起我的阿妹在深山。月亮出来照半坡，照半坡，望见月亮想起我的哥……"

她唱到一半，忽然停了，像是有人在水下拽住了她的舌头。"这是《小河淌水》。以前河边的姑娘都会唱。后来河里的姑娘也学会唱了。"她用食指点了一点你心口的位置，"七月半那天晚上，在河边唱给秀姑听，她兴许会松口。但你记住——唱这首歌的时候，不能回头。一回头，她就知道你怕她了。"`,
      choices: [createDialogueChoice({
        text: '记住这支歌',
        effects: { npcAffinity: 10, setFlag: 'knowsRiverSong' },
        next: 'start'
      }), createDialogueChoice({
        text: '为什么不能回头？',
        effects: { sanity: -5 },
        next: 'warn_about_turning'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_charm: createDialogueNode('give_charm', {
      text: `神婆从袖中摸出一道折成三角的黄符，符上朱砂已经有些发暗，但不是褪色，是吸了太多阴气变成了暗紫。她把符塞进你手心里，你感到一阵刺痛，像被蚂蟥叮了一口。

"这道符不伤人，只护身。带着它，河娘拉你的时候，你能多挣一口气。"她替你把拳头合上，像包一个襁褓里的婴儿，"这一口气，够你想明白一件事——要不要跟她走。"

她顿了顿："这道符用过一次就废了。你只有一次机会，想好了再用。"`,
      choices: [createDialogueChoice({
        text: '收下护身符',
        effects: { npcAffinity: 10, addItem: '河婆护身符' },
        next: 'charm_warning'
      }), createDialogueChoice({
        text: '不要了',
        exit: true
      })]
    }),
    // ===== 新增节点 =====
    ask_eye_secret: createDialogueNode('ask_eye_secret', {
      text: `神婆沉默了一会儿，慢慢地把左眼上那道疤摸了摸。那疤从眉骨一直延伸到颧骨，已经发白了，像一条蜈蚣趴在脸上。

"三十年前，我十七岁。那年闹水，河里的石头说话了——真说话了，问我：你要看，还是要命？"她的嘴角抽了扯，不知道是笑还是哭，"我说我不要命，我要看。河就把我这只眼珠收走了。"

她用手指戳了戳自己干瘪的眼窝，发出"笃"的一声闷响："河给我的不是眼睛，是看见——能看见河里面的事，能看见水里的人看见了谁，能看见她们心里最疼的那处伤。所以我什么都知道，也知道知道了也没用。有些人就是这样，知道了，反而更孤独。"`,
      choices: [createDialogueChoice({
        text: '你看见我妈了吗？',
        effects: { sanity: -5, setFlag: 'askedRiverEye' },
        next: 'ask_mother_vision'
      }), createDialogueChoice({
        text: '河里面是什么样子？',
        next: 'tell_river_inside'
      }), createDialogueChoice({
        text: '先告辞了',
        exit: true
      })]
    }),
    tell_three_questions: createDialogueNode('tell_three_questions', {
      text: `神婆伸出三根手指，"第一，沈家的债是怎么欠的？你要是答'沉塘害命'，他就信你三分。第二，沈云娘沉塘那天，河里冒了三天血泡，那是什么原因？你要是答'三百年的冤气化成河'，他就信你五分。第三——"

她忽然把手缩回袖子里，脸色变得很难看："第三，沈云娘死的时候，嘴里说了什么话？"

"这个，我没法替你答。"她摇头，"这是沈家自己的秘密，只有姓沈的才知道。沈老七的爷爷临终前把这第三个问题的答案传给了沈老七的爹，他爹又传给了沈老七。你要是问他，他就会先问你——你怎么知道这件事？你想好了再说。"`,
      choices: [createDialogueChoice({
        text: '前两个答案就够了',
        effects: { knowShenDescendants: true, setFlag: 'knowsTwoAnswers' },
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '怎么才能让沈老七开口？',
        next: 'tell_shen_secret_method'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_name_price: createDialogueNode('tell_name_price', {
      text: `神婆从供桌上拿起一把裁纸刀，在桌上慢慢刻了一个字——"名"。刀尖在木头上的声音让你牙根发酸。

"人活一世，有名字才算个人。名字是爹妈给的第一件东西，也是最后一件能带过河的。"她把刀放下，抬眼看你，"你要渡河去接你妈，就得拿一个名字当船钱。这个名字，不能是别人的，得是你自己心里最舍不得的。"

她伸出手，在你的心口画了一个圈："你妈叫你什么？你要是把'你妈叫你的那个名字'给了撑船的，她就什么都记不得了。你——也记不得她了。所以渡口上的人，上了船，就再也回不了头。"`,
      choices: [createDialogueChoice({
        text: '还有其他办法吗？',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '……我甘愿',
        effects: { sanity: -10, setFlag: 'acceptsNamePrice' },
        next: 'ask_ferryman_path'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    warn_substitute: createDialogueNode('warn_substitute', {
      text: `神婆的嘴角往下一拉，整张脸忽然老了十岁。

"替身的事，是让你去找一个人，让河娘误以为她就是你妈，把她拉下去，你妈就能上来。"她盯着你，目光像两片薄冰，"你镇上的人，你认得谁？嫁出去的、死了丈夫的、没人管的——那些容易被河盯上的。你要是想走这条路，就去打听谁最近总往河边走，谁在半夜听见有人叫她名字。"

她顿了顿，声音忽然压得很低："但我告诉你——这条路走不得。你害了一个人来换你妈，你妈上来以后，知道了这件事，你以为她还会活着？她会恨自己。恨自己比死还难受。"`,
      choices: [createDialogueChoice({
        text: '你说的对，我不走这条路',
        effects: { npcAffinity: 5 },
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '我已经有了人选',
        effects: { npcAffinity: -10, sanity: -10, setFlag: 'choseSubstitutePath' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    warn_about_turning: createDialogueNode('warn_about_turning', {
      text: `神婆猛地一拍桌子，油灯跳了一跳："你这娃子，怎么什么都要问'为什么'！"

她抓起你的手，手指冰凉得像刚从河里捞出来的："河娘唱的歌，是唱给活人听的。你听见了，心里就会想回头看看谁在唱你。你一回头——就看见她站在你背后，离你不到三步远。"

她把手放了，声音变轻了："我师父就是回了一次头，第二天人们发现他坐在河边，眼睛变成了两个黑洞。他不是死了，是'空了'。河娘把他的魂用歌勾走了，人还活着，但里面什么都没有了。"`,
      choices: [createDialogueChoice({
        text: '……记住了，不回头',
        next: 'teach_song'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_stele_location: createDialogueNode('tell_stele_location', {
      text: `"沈氏的碑在后山鹰嘴崖下面，被老藤遮住了。"神婆用手比划着方位，"你要去，白天去，带一把镰刀开路。碑不大，就是一块青石板，上面刻着'沈氏云娘之位'，没有落款，没有年月。碑底下的土是红色的——不是红土，是三百年的血渗进土里了。"

她忽然抓住你的手腕，力气大得出奇："你在碑前说话的时候，只能说实话。你要是说了假话，碑就会裂开，她就会从裂缝里伸出手来拽你下去。这不是吓唬你——我亲眼见过三个不信邪的人。"`,
      choices: [createDialogueChoice({
        text: '我白天就去',
        effects: { setFlag: 'willVisitStele' },
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_river_inside: createDialogueNode('tell_river_inside', {
      text: `"河里面？"神婆闭上一只眼，睁着的那只忽然瞪大了，瞳仁里有什么东西在流动，"河里面是另一个镇子。房还在，路还在，人也在。但那些人都站着不动，泡在水里，头发像水草一样散开，眼珠子还在转——看见你了，就跟着你游过来。"

她眨了眨眼，瞳仁里的水流消失了："河底最深处有一扇门，门是青石板的，上面刻着两个字。我看不清——每次想看清楚，脑子就像被人拿棍子搅了一次。但我知道那两个字很重要。那扇门后面，是所有河娘挤在一起的地方。门要是开了，水就会涌出来，整个镇子都要被淹。"`,
      choices: [createDialogueChoice({
        text: '门上的两个字是什么？',
        effects: { sanity: -10, setFlag: 'askedGateWords' },
        next: 'tell_gate_words'
      }), createDialogueChoice({
        text: '别再说了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    charm_warning: createDialogueNode('charm_warning', {
      text: `神婆看着你把符塞进口袋，忽然叹了一口气，像是替你惋惜。

"你记住——这道符防的是拉，不是缠。河娘要是拉你，符烧起来，你还能挣开。但要是她缠你——"她拍了拍自己的心口，"她唱到你心里去了，你明明醒了也想往河里走，符就不管用了。到那时候，你得靠你自己。"`,
      choices: [createDialogueChoice({
        text: '我记住了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_mother_vision: createDialogueNode('ask_mother_vision', {
      text: `神婆把头低下来，下巴几乎碰到胸口，像是在听一个很远很远的地方传来的声音。

"你妈……泡在水里，她已经不太像人了。"她的声音变得很奇怪，又闷又湿，像是她自己也在水下说话，"她的头发散在水里，眼睛变成绿的。她站在河心最深的地方，背后是那些别的河娘——她们挤在一起，像一片红衣裳的林子。你妈在最前面，她一边唱歌，一边看你。"

她猛地抬起头，捂住胸口咳嗽了几声："她唱的调子，和你小时候她哄你睡觉的调子一模一样。但她唱的时候，脖子往后仰着，嘴张得很大，大到不像一个人能张那么大。你要是听得专注了——就别听了。那是她在叫你下去。"`,
      choices: [createDialogueChoice({
        text: '我能救她吗？',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '我想见她',
        effects: { sanity: -5 },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_shen_secret_method: createDialogueNode('tell_shen_secret_method', {
      text: `"沈老七这个人，软硬不吃，但他有一个软肋。"神婆从床底下摸出一个布包，打开来，里面是一枚生锈的铜钱，"这是他爷爷留下的。他爷爷是沈家最后一个知道第三个答案的人。临死前把这枚铜钱攥在手心里，攥得手指头都变形了。"

她把铜钱推到你面前："你把这枚铜钱还给沈老七，别说是我给的，就说是在河边捡的。他看见了，就会想起他爷爷。人一想起先人，就要流泪。人一流泪，嘴就松了。到时你再问他，他就什么都告诉你了。"`,
      choices: [createDialogueChoice({
        text: '收下铜钱',
        effects: { npcAffinity: 15, addItem: '沈爷爷的铜钱', setFlag: 'hasShenCoin' },
        next: 'start'
      }), createDialogueChoice({
        text: '不用了',
        exit: true
      })]
    }),
    tell_gate_words: createDialogueNode('tell_gate_words', {
      text: `神婆的嘴唇动了动，像是说了两个字，但你什么都没听见。屋里忽然安静得可怕，连油灯的灯芯都不响了。

"我说了一遍，你听不见。"她的脸色发青，"这两个字不是用嘴说的，是用——算了，我告诉你也没用，你听不见就是听不见。你要是真想知道，就自己走到河底，去那扇门前看。"

她摆了摆手，像是赶苍蝇："走吧走吧。你要是还想问别的，再来找我。但我能说的，已经差不多了。剩下的，得你自己去水里摸。"`,
      choices: [createDialogueChoice({
        text: '那我走了',
        effects: { setFlag: 'triedKnowGateWords' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
