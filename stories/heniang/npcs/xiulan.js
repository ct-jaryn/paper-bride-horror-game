import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：秀兰（xiulan）
 * 秀兰是母亲年轻时的好友——比母亲早死四十年。
 * 她在河底久无人问，执念比秀姑弱、但孤独更深。
 * 她穿着一件绣工精致的红嫁衣——胸口绣着"周氏秀兰"。
 * 她的记忆里藏着母亲年轻时的事，也藏着周沈两家最早的血债。
 */

export const xiulan = createNPC('xiulan', {
  name: '秀兰',
  title: '四十年水底绣娘',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你踏进水里——水没过脚踝——水没过膝盖——水没过腰——你憋住气——往河底的光亮处游——

就在快憋不住的时候——一个女人挡在了你面前。

她穿着红嫁衣——绣着鸳鸯与并蒂莲——胸口绣着四个字——"周氏秀兰"——你的背包里也有一件——神婆给的那件——一模一样的——

她像你妈——但比你妈年轻。她的眼神像一口浅井——井底有一层薄薄的水——水平如镜——但镜子的底是黑的。

"你是……阿英的丫头？"她的声音不闷不湿——和别的河娘不一样——像是她还在用活人的声带在说话——只是每个字的尾音都带着一点点气泡的咕噜声。

"你妈经常给我讲她闺女的事——我听了几十年了——"
`,
      choices: [createDialogueChoice({
        text: '你认识我妈？',
        next: 'asks_mother'
      }), createDialogueChoice({
        text: '你叫秀兰——我听说过你',
        next: 'xiulan_story'
      }), createDialogueChoice({
        text: '我想见我妈',
        next: 'ask_to_see_mother'
      }), createDialogueChoice({
        text: '你是怎么下河的？',
        next: 'xiulan_own_death'
      }), createDialogueChoice({
        text: '对不起——我走了',
        exit: true
      })]
    }),
    asks_mother: createDialogueNode('asks_mother', {
      text: `秀兰唇角弯了弯——弯得像河底的一弯月——"认识。何止认识。我和你妈——从小一起在河边长大——我比你妈大三岁——小时候她叫我兰姐——我叫她阿英。"

她在水走了两步——水在她脚底下荡开的波纹是逆流的——和我们活的波纹朝着相反的方向走。

"阿英命比我好——嫁了个好人家——你爹老实——不打她不骂她——你们院子里有一棵石榴树——石榴熟了满院子都是娃娃在抢——有一段日子她是笑着过日子的——"

秀兰吸了一口气——带进去的不是空气——是水——水从她嘴角溢出来——"可她——后来——中了沈家的咒——沈家三代——男子死于河——女子也死于河——沈家的债——越背越沉——背到她这一代——她就——"

她像是在说别人的事——声音平平的——但平波底下的压着的暗流——你听得见。`,
      choices: [createDialogueChoice({
        text: '沈家——这事跟沈家有关？',
        effects: { sanity: -10, setFlag: 'xiulanShenClue' },
        next: 'xiulan_shen_secret'
      }), createDialogueChoice({
        text: '让我去找我妈——拜托你',
        next: 'ask_to_see_mother'
      }), createDialogueChoice({
        text: '你跟我说说——我妈年轻时候的事',
        next: 'xiulan_youth'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_story: createDialogueNode('xiulan_story', {
      text: `"听说过——那是自然。"秀兰把衣襟理了理——红嫁衣在水中不湿不皱——像活的刺绣——"你觉得秀兰这个名字是什么？"

她自问自答——"秀兰——沈家乳娘给我起的——我原姓周——周家女儿——"

"周家——"她停了停——像是这个名字很烫嘴——"镇上人都说周家是开豆腐坊的——你家豆腐是镇上最白最嫩的——可他们不知道——周家的发家——不是靠豆腐——"

"周家的老祖宗——沈家娘子沉塘的时候——他在场——他是把她绑进猪笼的人之一。——沈家赔了他一百两封口钱——他就靠那一百两开起了豆腐坊——传了三百年传到周家这一代——"

秀兰看着你："——周家的每一块豆腐——都是沈家娘子的血泡的。"
`,
      choices: [createDialogueChoice({
        text: '周家——我是周家什么人？',
        effects: { sanity: -15, setFlag: 'xiulanBloodSecret' },
        next: 'xiulan_blood'
      }), createDialogueChoice({
        text: '你恨周家？',
        effects: { setFlag: 'xiulanHatesZhou' },
        next: 'xiulan_own_death'
      }), createDialogueChoice({
        text: '你告诉我这些——是因为什么？',
        next: 'xiulan_motive'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_to_see_mother: createDialogueNode('ask_to_see_mother', {
      text: `秀兰沉默了一瞬——然后抬头看着你的眼睛——眼珠漆黑如墨——像是两口深井——井水冰冷刺骨——

"你妈——"秀兰的声音变了——像一个小孩在咬嘴唇——"她不在这——她在更深的下面——隔着第二道门——那扇门我进不去——你也不能——"

秀兰伸出手——腕上戴着一串红绳编织的手链——上面串着七颗红豆——每颗红豆都发光——像七盏小灯——

"这是我自己编的——用了四十年——红豆一粒一粒从河底的朽木上长出来的——七颗——七是极阳之数——能照开一道门。你要是想见你妈——你要先帮我做一件事。"

她的声音被水推了一下——变得急促起来——被什么东西打断了——她回头看了一眼——你跟着她看——水面下有一片红雾在涌——

"——她来了。"`,
      choices: [createDialogueChoice({
        text: '谁来了？',
        effects: { sanity: -10, setFlag: 'xiulanSeesSomething' },
        next: 'xiulan_warns'
      }), createDialogueChoice({
        text: '别说了——告诉我是什么事',
        next: 'xiulan_quest'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_own_death: createDialogueNode('xiulan_own_death', {
      text: `"我——"秀兰低头看着自己红嫁衣上的并蒂莲——"我十三岁那年——沈家又要祭河。"

她说话的声音平平的——像是河底的淤泥托着她的声音——不扬不沉：

"沈家的规矩——每隔七年——要选一个未及笄的女儿送到河伯庙里'出嫁'——嫁给河伯——不然沈家就要死一个男丁——谁家女儿被选上谁家就哭————那一年——沈家自己没有合适的女儿——他们就从镇上的佃户里选——"

"我爹欠了沈家三辈子还不清的租——沈家让我去。"

秀兰伸手摸了摸自己的头发——头发在水中漂得像一丛水藻——"花轿抬到半路上——伴娘把轿帘掀开——把我推下河——水灌进来的那一刻——我在轿子里只看见四个字——

"她深吸一口气——"胸口绣着的——'周氏秀兰'。——外面的人都觉得那件嫁衣是我自己穿的——其实——"
`,
      choices: [createDialogueChoice({
        text: '其实什么？',
        effects: { setFlag: 'xiulanTruth' },
        next: 'xiulan_own_death2'
      }), createDialogueChoice({
        text: '你被推下河——看见了什么？',
        next: 'xiulan_seen_objects'
      }), createDialogueChoice({
        text: '你恨推你的人',
        next: 'xiulan_hatred'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_shen_secret: createDialogueNode('xiulan_shen_secret', {
      text: `"沈家——沈家不能跟你说——"秀兰往前一倾——红嫁衣在水中带起一股暗流——"沈家是——沈家——"

她回头看了一眼——你跟着她看——黑压压的水下似乎有什么东西在翻涌——像一只沉睡的巨兽翻了个身——

"沈家是守碑人。"秀兰的声音又沉又闷——一字一字地往外挤——

"碑——河底那块碑——上面的名字被符压着走不了——沈家的职责就是——守住碑——让那些名字永远沉在下面——沈家的男人为什么代代死于河？因为他们和碑订了契——用一条命换碑一年的安——"

秀兰的眼睛忽然亮了——亮了一瞬——暗了——"但沈家私心————那些名字里——有一个是沈家自己的——沈家某一代的女儿也进去了——她要出来——所以她哄骗自己人——让他们代她守——而不是真正把碑碎掉——"

秀兰盯着你——眼睛亮得像灯——"老七女儿——沈家——"
`,
      choices: [createDialogueChoice({
        text: '沈家也有女儿在碑里',
        effects: { setFlag: 'xiulanFamily' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_youth: createDialogueNode('xiulan_youth', {
      text: `"阿英小时候——"秀兰的声音变得很柔——柔得像泡软了的水草——好事被翻出来——沉渣泛起——带出了一股活水的味道——

"你妈的眉毛很淡——我老笑她——说她是无眉道人——她就追着我打——从河这头追到河那头——我跑得快——她追不上——后来我就不跑了——站在原地让她追——打完了两个人都倒在河滩上喘气——"

秀兰的眼眶里开始涨水——但一直不溢出来——像水面满了又退——退了又满——"

"你妈嫁人之前一天晚上——哭——我陪她坐在河堤上——她跟我说——兰姐——我害怕——我说怕什么——她说怕嫁错人——她说——阿英——我今天跟你说了——沈家欠周家欠河里的——这个债——将来怕是要我们来还——"

"我当时不懂————现在我——在河里泡了四十年——我全懂了——"
`,
      choices: [createDialogueChoice({
        text: '我替你们还',
        effects: { setFlag: 'xiulanWillRepay', sanity: -10 },
        next: 'xiulan_quest'
      }), createDialogueChoice({
        text: '你为什么不告诉我妈这些',
        next: 'xiulan_hatred'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_warns: createDialogueNode('xiulan_warns', {
      text: `红雾越来越近——你的耳边开始有一种很低很低的声响——不是水声——是几百个声音同时在低吟——听不清在说什么——但你的牙根开始发酸——你的手开始抖——

秀兰猛地抓住你的手——握的不是肉——是冰——冷透骨的冰——

"听我说——"她的声音变成了急流——"你来的时候带了什么——你带了神婆给的红嫁衣——你带了——"

她的眼睛一下子亮了——亮得像两团火——烧在水里——不灭不熄——

"红嫁衣——神婆给的红嫁衣——你闻一闻——上面有什么味道——"

你闻——樟木味——河泥味——还有一股——你从来没闻过的——腥甜的——发酸的——像放了很多年的——
`,
      choices: [createDialogueChoice({
        text: '——血味？',
        effects: { sanity: -15, setFlag: 'xiulanSeesBlood' },
        next: 'xiulan_revelation'
      }), createDialogueChoice({
        text: '——香水？',
        next: 'xiulan_insist_smell'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_quest: createDialogueNode('xiulan_quest', {
      text: `秀兰等那片红雾退了一些——才松开你的手——她的脸颊上划了一道水痕——像是哭过——但河娘哭不出来的——水痕慢慢地渗回了水中——

"四十年前我给我的绣娘阿桂留了一封信——用蜡封了——塞在绣房的檀木匣子里——走的那天我没能带走——"

"信里写的是——沈家让我替死的事——和周家拿沈家银子的事——和我自己的身世——我原名不叫秀兰——原名叫周招弟——"

秀兰看着你的眼睛——像是要透过你的眼睛看另一个人的眼睛——

"你要是能找到那封信——你就知道了一切——就知道了所有的来龙去脉——也知道了——"

她犹豫了一瞬——"——也知道了我是你的什么人。"
`,
      choices: [createDialogueChoice({
        text: '你的信——我去找',
        effects: { setFlag: 'xiulanLetterQuest' },
        next: 'xiulan_letter_direction'
      }), createDialogueChoice({
        text: '你是我的什么人？',
        effects: { setFlag: 'xiulanFamily' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_motive: createDialogueNode('xiulan_motive', {
      text: `秀兰垂下眼——睫毛在水里轻轻地像两把黑扇——闪了闪——扇起了两个小漩涡——

"告诉你这些——是因为你妈——"

她顿了很久——长到你以为她要消失了——

"你妈活着的时候——每月初一都给我供一碗白米饭——一杯冷酒——一碗凉茶——她跟谁都讲我是她的好朋友——她自己没有过几件好事——不好意思讲——就反反复复讲一件事——秀兰是我这辈子的第一个朋友——我死了以后她哭得比我出嫁还惨。"

她抬头看着你——"我在水里泡了四十年——靠她供饭——才没散——她下河以后我也供她——她来了以后灶上的供饭就不再有人添了——你和你爹都不认识我——都没有给我供过——"

"但我记得你们。我记得你满月的时候——你妈抱着你的脸——对我说——兰姐你看——好看不？"
`,
      choices: [createDialogueChoice({
        text: '对不起——我不记得了',
        effects: { npcAffinity: 15 },
        next: 'start'
      }), createDialogueChoice({
        text: '我会给你供',
        effects: { setFlag: 'xiulanWillOffer', npcAffinity: 10 },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_hatred: createDialogueNode('xiulan_hatred', {
      text: `"恨？"秀兰的眼眶里涨满了水——但她就是不让水流出来——那些水在眼眶里打转——像一只被逼到墙角的猫——

"我怎么不恨。我恨推我的伴娘——是我亲妹妹——我爹把她送去做沈家的丫鬟——换她一条活路——她推我的时候在哆嗦——我看见她的手在哆嗦——但我还是在往下沉。"

"我恨沈家——拿我们当牲口——一代一代地喂河——"

"我恨周家——靠我的命发的家——一块豆腐一块豆腐地卖了三百年的良心——"

她的声音忽然低了——低到你听不见——只剩水里的震动——

"但我最恨的——是河。河不说话——河不选择——人把什么都往河里扔——河照单全收——河以为沉默就是慈悲——"
`,
      choices: [createDialogueChoice({
        text: '河应该发声',
        effects: { setFlag: 'xiulanRiverShouldSpeak' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_revelation: createDialogueNode('xiulan_revelation', {
      text: `秀兰的嘴唇在水里无声地动了动——你看看她的眼睛里——眼睛里倒映出一样东西——

你顺着看过去——是你的背包——神婆给的——红嫁衣——

红嫁衣上的味道——是血——但不是普通的血——是——

秀兰在你耳边说了一句话——声音——

"——是处子血。"

你忽然懂了。红嫁衣是秀兰死时穿的——那上面的血——是她的神婆拿回来的——

秀兰的红嫁衣怎么会到神婆手里？神婆怎么找到她落水的地点？神婆找到为什么不报警？不报官？反而拿了嫁衣回来——等着卖给你——

秀兰的眼睛直视你——她的眼睛里有三个字在沉浮：

"查神婆。"
`,
      choices: [createDialogueChoice({
        text: '为什么——神婆有问题',
        effects: { setFlag: 'xiulanSuspicion' },
        sanity: -15,
        next: 'start'
      }), createDialogueChoice({
        text: '你说的我都不信',
        next: 'start'
      })]
    }),
    xiulan_insist_smell: createDialogueNode('xiulan_insist_smell', {
      text: `秀兰的手在你手心里攥紧了几分——又冷了几分——像攥着一块冰——

"你再闻一遍——"

你凑近了红嫁衣——樟木味——河泥味——还有什么——

秀兰往你袖口处捏了捏——把那块绣着鸳鸯的布料凑到你鼻下——

"——这是鸳鸯。你看鸳鸯眼睛——是用红线一针一针勾的。仔细看——红线底下——有东西。"

你细看——鸳鸯眼睛的位置——红线的底下——隐约有深色的发黑的斑点——

"那不是绣进去的。"秀兰说——"那是——渗进去的。"

她看着你的眼睛——又重复了一遍："那是时间渗不掉的——处子血。"
`,
      choices: [createDialogueChoice({
        text: '你在告诉我——神婆杀了你？',
        effects: { setFlag: 'xiulanSuspicion', sanity: -20 },
        next: 'xiulan_revelation'
      }), createDialogueChoice({
        text: '我知道了',
        exit: true
      })]
    }),
    xiulan_blood: createDialogueNode('xiulan_blood', {
      text: `"你是周家的后人——豆腐坊周家——靠沈家的钱起家的周家——"秀兰的声音从四面八方逼过来——水声围着你的耳朵——"你的血——里——有沈家的血——也有周家的血——沈家在碑上有名——周家在外面欠着沈家——你身上背着两家的债——"

秀兰退了一步——像是怕碰着你——

"如果你去碑上念名字——你会看见——碑上有你周家——也有你沈家的名字——你念不念——"

她的声音只剩一口气——

"你妈身上有两家血——你家世代都是——你是第七代——"
`,
      choices: [createDialogueChoice({
        text: '我接着——我去念',
        effects: { setFlag: 'xiulanSeventh' },
        next: 'start'
      }), createDialogueChoice({
        text: '我周家沈家都不欠她们',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_seen_objects: createDialogueNode('xiulan_seen_objects', {
      text: `秀兰闭上了眼睛——像是在看一段很旧很旧的电影——每一帧都在水下闪过——

"花轿帘子掀开的那一瞬间——我看见井——河边的井——井口站着一个小姑娘——扎着红头绳——"

秀兰的眼睛猛地睁开——"她看着我笑——笑了就转身跑了——"

"后来我在河里听见那个小姑娘唱歌——唱的就是那条小河淌水的调子——我跟着学——学会了——唱了几十年——才知道——"

秀兰看着你的眼睛——她的眼睛里现在有两盏小灯在烧——是红豆手链的光——

"那个小姑娘——叫阿彩。"
`,
      choices: [createDialogueChoice({
        text: '阿彩——她看见你被推进河里',
        effects: { setFlag: 'xiulanSeesAca' },
        next: 'start'
      }), createDialogueChoice({
        text: '阿彩后来也投河了',
        effects: { setFlag: 'xiulanKnowsAcaFate' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_own_death2: createDialogueNode('xiulan_own_death2', {
      text: `秀兰低头——看着自己胸口的"周氏秀兰"——用手指在白线上一笔一笔地摸——像摸一个很旧很旧的伤口——

"其实——嫁衣不是我穿的——是伴娘——我亲妹妹周招弟——穿上了嫁衣上了轿——替我——"

秀兰的声音开始碎了——碎成了几百片水花——

"我姓周——我名招弟——秀兰是沈家给我起的——我本名——叫周招弟——我原名——不是秀兰——"

她的眼睛直看着你——像是要穿过你的眼睛——看见一个站在门口的小姑娘——

"我后来才知道——我亲妹妹推我下去以后——和她喜欢的人跑了——再后来——再后来她嫁了人——生了女儿——她女儿——"

她停了。
`,
      choices: [createDialogueChoice({
        text: '她女儿是谁？',
        effects: { setFlag: 'xiulanOwnNiece', sanity: -10 },
        next: 'start'
      }), createDialogueChoice({
        text: '不说了——我够了',
        exit: true
      })]
    }),
    xiulan_letter_direction: createDialogueNode('xiulan_letter_direction', {
      text: `"绣房在豆腐坊的东屋——檀木匣子在炕洞里——炕洞左边第三块砖——砖是活动的——往里推——转一下——就开了——"

秀兰从红豆手链上取下一颗——放在你掌心——红豆发光——暖的——不冰——

"拿着这个——你进了绣房以后——绣娘阿桂的魂还在——她一直在等我把信拿回来——她不会害你——但你进去以后别说你姓周——阿桂恨周家人——你就说你是沈家的——"

她把红豆按在你掌心——烧了一瞬就灭了——留下一个小小红色的痣——

"而且——还有一件事。"
`,
      choices: [createDialogueChoice({
        text: '什么事？',
        next: 'xiulan_extra'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    xiulan_extra: createDialogueNode('xiulan_extra', {
      text: `"绣房里——不光有信——还有我留给你妈的遗物。"

秀兰从红嫁衣的袖子里抽出一个小小的布包——布包是油纸包的——在水里没湿——打开来看——里面是一缕头发——用红绳系着的——和一枚银的长命锁——

长命锁正面刻着"秀兰"两个字——背面刻着一行小字——"长命百岁 莫失莫忘"——

"这是我出生那天我爹打的——说要我长命——可我没长命——你拿着长命锁——你要是遇见我亲妹妹的后人——把锁给他——锁里有——锁里有——"

她没说完——红雾涌上来——吞了她半截身子。

"——锁里有——我的话——我的话在锁里——"`,
      choices: [createDialogueChoice({
        text: '我接着——给我',
        effects: { addItem: '长命锁', setFlag: 'xiulanLock' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
