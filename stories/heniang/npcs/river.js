import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';

/**
 * 《heniang》NPC：河娘（river）——水中聚合意识
 * 河娘并非单一沈氏，而是所有河底怨气聚成的集体意识。
 * 她的声音是水流、淤泥与骨头的混响，说的话是几百年来所有河娘心里的碎片。
 */

export const river = createNPC('river', {
  name: '河娘',
  title: '万溺之聚',
  dialogue: {
    start: createDialogueNode('start', {
      text: `河面在月光下忽然起了涟漪——不是被风吹的，是河底有什么东西在往上冒。河水变成了暗红色，像有人在一缸清水里滴进了一滴墨，慢慢散开来。

你听见一个声音。那声音不像是一个人在说话——像是几百个人在同时说话，有的尖、有的哑、有的老、有的小，但她们说着同样的话，一个节拍都不差：

[whisper]"来……下来……来……下来……来……下来……"[/whisper]

水面裂开了一道缝。一只惨白的手从水里伸出来——是小孩的手，肥短短的，上面还戴着一个小小的银镯子。手在水面上抓了抓——像是要抓住你的影子。

然后手慢慢缩回去，在它消失之前，它指了指河底——在水下最深的地方，隐隐约约能看到一道青色的光。`,
      choices: [createDialogueChoice({
        text: '河底有光？那是什么？',
        effects: { sanity: -10, setFlag: 'sawRiverLight' },
        next: 'river_light'
      }), createDialogueChoice({
        text: '你是谁？',
        next: 'river_who'
      }), createDialogueChoice({
        text: '你拉过多少人？',
        effects: { sanity: -5 },
        next: 'river_toll'
      }), createDialogueChoice({
        text: '我是来带我母亲走的',
        next: 'river_mother'
      }), createDialogueChoice({
        text: '我这就走',
        exit: true
      })]
    }),
    river_who: createDialogueNode('river_who', {
      text: `"谁？"——几百个声音一起重复了这个字，像回音壁一样在河面上绕来绕去。

"我们是……"声音忽然她们分裂成了不同的音色——

一个小女孩的声音："我是阿彩，童养媳，十八岁投的河。"

一个中年妇人的声音："我是周家三娘，大妇不容，腊月推下水的。"

一个沙哑的女声："我是沈沉——三百年前的——我忘了我的名字了——"

最后一个声音是温柔的、母亲般的："——我是你妈。你妈也在里面。"

水面上那只小手又伸出来，这一次手里攥着一样东西——是一只顶针。是你妈做针线活用的那只铜顶针。`,
      choices: [createDialogueChoice({
        text: '妈？妈是你吗？',
        effects: { sanity: -15, setFlag: 'seesMotherInRiver' },
        next: 'river_mother'
      }), createDialogueChoice({
        text: '放了她们的魂',
        next: 'river_release'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_light: createDialogueNode('river_light', {
      text: `"……是碑。"那个聚合的声音忽然变低了，带着一种古老的疼痛，像有人把一根生了锈的针慢慢扎进你的耳膜，"河底最深处有一块碑。碑上面刻着——"

声音忽然加大了，河面上的水开始往上涌，像有一口看不见的井在往上冒水：

"——刻着我们所有人最开始的名字！沈家娘子最先的！我们的名字被刻在碑上，碑就压住我们走不了！你要是想要光灭了——就到碑前去念上面的名字——每一个都念出来——"

小手又伸出来，掌心朝上——掌心有一个字在发光："沈"。`,
      choices: [createDialogueChoice({
        text: '碑上的名字有多少？',
        next: 'river_toll'
      }), createDialogueChoice({
        text: '我来念——我带你去找碑',
        effects: { sanity: -20, setFlag: 'riverPledgeToStele' },
        next: 'river_plege'
      }), createDialogueChoice({
        text: '我走了',
        exit: true
      })]
    }),
    river_toll: createDialogueNode('river_toll', {
      text: `那只小手收了回去——然后是第二只手、第三只、第四只——河面上伸出一只又一只手。有的戴着顶针，有的攥着银镯，有的什么都没戴。她们数一个，水面上的手就多一章。

你数到第一百只手的时候，她们停了下来。水面下传来一阵又低又哑的笑声——几百个人一起笑，笑声合成了一个大浪的声音。

"——等你走了再数吧。你的手指不够数的。"聚合的声音说，"而且你妈还在你上面数着你在不在。你要是愿意可以下来一起数——数到第一千个的时候，第一千零一个就来了。"
`,
      choices: [createDialogueChoice({
        text: '你是在说我也会变成第一千零一个？',
        effects: { sanity: -10, setFlag: 'riverChallengesYou' },
        next: 'river_mother'
      }), createDialogueChoice({
        text: '你到底害了多少人？',
        next: 'river_toll_again'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_mother: createDialogueNode('river_mother', {
      text: `忽然，几百个声音都停了——只有一个声音留了下来。这个声音从河中央响起，带起一片水雾。水雾散开，一个穿着洗得发白的蓝布褂子的女人站在水面上。她赤着脚，脚底下的水没有涟漪——像是她踩的不是水，是玻璃。

她的脸——她长得跟你一模一样，只是眼窝是黑的，嘴角是往下弯的。她抬起手，伸向你——手心向上，手指微微弯着，像是要托起一张小脸。

"……儿啊。"声音是沙的，含着水气，"娘好想你。娘在河里好冷。"

她停顿了一手宽的功夫："你下来吧——你下来陪陪娘吧——娘一个人——在这里这么久了——真的好冷好冷好冷——"

她的手尖滴着水。水滴到了水面上，泛起了一个又一个涟漪——圈圈套着圈子，把你围在中心。`,
      choices: [createDialogueChoice({
        text: '妈，我救你出去',
        effects: { sanity: -15, setFlag: 'riverMotherPleas' },
        next: 'river_plege'
      }), createDialogueChoice({
        text: '你不是我妈',
        effects: { sanity: +5, npcAffinity: -15, setFlag: 'riverCallsOutImposter' },
        next: 'river_angry'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_release: createDialogueNode('river_release', {
      text: `"放了？那个声音先是一愣，然后——几百个声音同时在笑——笑声在水面上形成了浪。

"放了——哈哈——放了——你知不知道放了会怎么样？"被聚合的声音放着狠话，但语气像孩子在撒娇，"放了，碑就碎。碑碎了——河底的泥就翻。泥翻了——三百年泡的浑水就涌上岸——镇子就变成另一个河。"

那个聚合的声音忽然回头加了一句，低沉的像深渊里发出的："——但你妈也就在里面。放了就破了——她连这个河都待不住——她就要散了——散了就再也找不回来了——那可是连灰都不剩的——"

小手又伸出来——手心攥着的顶针尖上滴了一滴红色的水。`,
      choices: [createDialogueChoice({
        text: '难道就没有不放也能让她们安息的办法？',
        next: 'river_way_out'
      }), createDialogueChoice({
        text: '碎了也比我妈在里面强',
        effects: { setFlag: 'wantsToBreakStele' },
        next: 'river_plege'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_angry: createDialogueNode('river_angry', {
      text: `水面猛地一翻——蓝布褂子的女人像被一只巨手往下拽，慢动作一样沉进河里。她的嘴张着，还在说着话，但声音已经变成了一连串的水泡：

"好——好——你认不出你娘了——你是被村那些活人骗了——他们教你认不得娘——他们教你忘了——忘了——"

河水猛涨了三寸——水面上的石头变成了浑圆矶——浑圆矶的表面开始淌下长长的水流——像石头在哭。

那个聚合的声音重新响了起来——但这一次不再是低低的歌、柔柔的唤——这一次是嘶吼：

"滚——滚出河边——你要是再敢来——我连带你一块儿拴住——你和你娘和所有人——我都拴住——一百年——一千年——"
`,
      choices: [createDialogueChoice({
        text: '好——我走',
        exit: true
      })]
    }),
    river_plege: createDialogueNode('river_plege', {
      text: `三百个声音忽然同时再唱——这一次不再是唤你下来——这一次是吟一个很古老的调子，像送葬的唢呐吹出的长音：

[whisper]"来世莫做女儿身来世莫做女儿身来世莫做女儿身……"[/whisper]

小手从水面下再次伸出来——这一次手里攥着一朵将谢未谢的花——是水底的红莲——三百年没枯萎过。

聚合的声音极轻："好——你去找碑——去念——每一个名字都念出来——每一个——念够了——碑就碎——碑就碎——碑就碎——"

你忽然听见最深处有一个声音在你耳边说了一句话——那声音又轻又空，像是从你脑子里直接生出来的——

"——但你要是把碑碎了——你妈也碎——你愿不愿意你妈也碎？"
`,
      choices: [createDialogueChoice({
        text: '我愿意——只要能让她安息',
        effects: {
          sanity: -25,
          setFlag: 'riverTotalSacrifice'
        },
        next: 'start'
      }), createDialogueChoice({
        text: '不愿意——还有别的办法',
        next: 'river_way_out'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_way_out: createDialogueNode('river_way_out', {
      text: `三百个声音沉默了——像是都被这个问题卡住了。

然后——从最小的那个声音开始——最小的女孩的声音——阿彩——她开口说：

"有。"她那小得几乎听不见的声音说："每年七月半——河底的门会打开一条缝——只要有人从那扇门走进去——又走出来——门就再也不会开了。"

"走进去再走出来。"聚合的声音重复说——这一次没有几百个声音一起回响，只有一个声音——低沉的老女人的声音——沈氏娘子本人的声音——"——但不是随便谁都能走出来的。你必须——在河底找到你最怕的那件事——你看见它——你认出来——然后——你还能往前走。'

"要是你停下来——你就永远停在河底了。"
`,
      choices: [createDialogueChoice({
        text: '七月半——还有多久？',
        next: 'river_half_july'
      }), createDialogueChoice({
        text: '我最怕的那件事是什么？',
        next: 'river_fear'
      }), createDialogueChoice({
        text: '沈氏——沈家欠你的',
        next: 'river_shen_apology'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_half_july: createDialogueNode('river_half_july', {
      text: `"七月半——"聚合的声音慢悠悠地计算，像在数念珠，"今年还有——六天。"

"但你不能一个人去。"沈氏的声音补了一句。她的声音听起来很远很远，远得像是从水面的另一边传来的，"河底的门很重——活着的人拉不开——死的人推不动。你必须带一个既不是完全活也不是完全死的人去——"

"——神婆的那只眼睛。"阿彩的声音补了一句，"那只眼睛看得到门。"

"——还有……布——红袖的声音犹犹豫豫地响起来——"半朵牡丹的花瓣——拿一片出来——那片花瓣是门的钥匙——"

"——然后……"聚合的声音最后归于沈氏，"你就站在门前——往里走——不要回头。"
`,
      choices: [createDialogueChoice({
        text: '我去找这些',
        effects: { setFlag: 'riverQuestStarted' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_fear: createDialogueNode('river_fear', {
      text: `三百个声音交换了一阵支离破碎的回音——她们在商量。最后沈氏的声音说：

"你怕什么——我不知道。"

声音忽然变得极近——像是三百个人一起凑到你耳朵旁边吹气："——但我们能感觉到。我们看你的时候——从上往下看——你能骗人——但你骗不了水。水能看见你心里最深处的地方。"

她又放慢了语调，一字一字地："你要是进了门——不要怕看见你自己。你看见你自己的时候——你会怕那个你。你要是认不出她了——"

声音停了。手收回水里。万籁只剩水的声音。
`,
      choices: [createDialogueChoice({
        text: '我不会怕我自己',
        effects: { setFlag: 'riverNotAfraid' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_shen_apology: createDialogueNode('river_shen_apology', {
      text: `沉默。漫长的沉默。河水不再流动了——连风都停了。那只小手缩回了河底——那几百个声音像有人把火压灭了——只剩一缕白烟还在升。

最后——一个声音极慢极慢地从水底浮上来——不是从嘴里——是直接从骨头里传出来的——是沈氏几百年前埋进骨头里那句话——

"你——说——什么？"

声音在颤抖——像一把弓拉到了极限——
"你——方才——说了那五个字——你再说一遍——"

水面开始三百年来第一次起大浪——浪头拍在石头上——水沫打在你脸上——是咸的——是她的泪。
`,
      choices: [createDialogueChoice({
        text: '我说——沈家欠你的',
        effects: {
          npcAffinity: 50,
          sanity: -30,
          setFlag: 'riverConfessionHeard'
        },
        next: 'river_sobbing'
      }), createDialogueChoice({
        text: '你不要我再说',
        exit: true
      })]
    }),
    river_sobbing: createDialogueNode('river_sobbing', {
      text: `整个河——三百年——哭了。

没有声音。没有风声。只有水——河面上开始冒泡——从最深的地方——大泡小泡连成了一条线——像是河底有一口大锅在烧。

三百个女人的哭声一齐传上来——不是嚎啕——是那种哭了一万年哭干了眼泪之后的抽噎——空气都在打颤——你的鼻腔里灌满了水。

"——你说了——你说了——你说了——"

小手从水底伸出来——这一次——没有往上伸——只是摊开——掌心朝上——掌心有一个字在发光——不是"沈"——

是一个"谢"字。

那个字发光了三息——灭了——河恢复如初。水面又平得像一面铜镜。但你知道——有什么东西碎了——在水底最深处。
`,
      choices: [createDialogueChoice({
        text: '你可以放手了',
        effects: { setFlag: 'riverAbsolved' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    river_toll_again: createDialogueNode('river_toll_again', {
      text: `"害——哈哈——害——"聚合的声音笑了——笑声在河面上翻滚——浪头拍打石岸啪啪作响。

"我们不害人——我们就是人——我们三百年来就站在这里——腿泡烂了肉烂了骨头露出来——就是不走——为什么不走？因为我们的名字被压在碑下——碑上的那张符把我们全锁在这里——锁了三百年——符不消——碑不动——谁来都没用——"

声音忽然凑到你耳边——近得你感觉到了水里透出来的寒气："你说我们害人——但是——最先杀沈氏的——不是我们——是沈氏自己的沈家族亲——最先推别人下水的——不是我们——是活人——我们是受害者——凭什么怪我们——"

那只小手再次伸出来——手心里攥着那张符的碎片——发黄的纸片，朱砂画的字在水里不化。
`,
      choices: [createDialogueChoice({
        text: '对不起',
        next: 'river_shen_apology'
      }), createDialogueChoice({
        text: '符——我想看看',
        effects: { addItem: '符的碎片', setFlag: 'riverSeesCharm' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
