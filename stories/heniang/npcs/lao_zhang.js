import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：老张（守夜人）
 */

export const lao_zhang = createNPC('lao_zhang', {
  name: '老张',
  title: '守夜人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `河边站着个佝偻老头，手里提着一盏昏黄的马灯。灯罩上有个豁口，风一吹，灯影在水面上乱晃，像水底有什么东西在搅。他看见你，把灯举高了些，光打在一条深深的、从额头划到下巴的旧疤上。

"小子，夜里别靠河太近。这河吃人，不是一天两天了。"他的声音像砂纸在木板上拖，"三十年前我娃就是在这条河里没的。我娃才十一岁，和我孙子差不多大。后来我就不走了——我守在这，是想看着别的娃别下去。"

他朝黑漆漆的河面啐了一口："你娘的事我听说了。我不想骗你——被河娘拉下去的人，日子久了，就不是人了。你要是真想去救她，就先去问问神婆，听听她的三条路。自己一个人跑来河边，没用。"`,
      choices: [createDialogueChoice({
        text: '你守这条河多久了？',
        next: 'ask_duty'
      }), createDialogueChoice({
        text: '你见过河娘吗？',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '你见过我妈吗？',
        next: 'ask_mother'
      }), createDialogueChoice({
        text: '你儿子是怎么出事的？',
        next: 'ask_old_days'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_duty: createDialogueNode('ask_duty', {
      text: `"三十年喽。"老张叹了口气，马灯的火苗跟着暗了暗，"以前守河，是怕人失足。那时候河里淹死的，多半是夏天洗衣裳的女人、摸鱼的小孩。水性好的人，拉一把就回来了。"

他顿了顿，把马灯上的灰吹了吹："现在守河，是怕人自己往下跳。这几年，跳河的人越来越多。有欠了赌钱的，有嫁了混账男人的，有老了病了不想拖累儿女的。跳之前都来河边站着，站一会儿，然后扑通一声就下去了。"

他指向河面上一块黑色的礁石："你看见那块石头没有？上个月有个女人，穿着红裙子，半夜三点走到那块石头上，坐了整整一个小时。我以为她要喊救命，刚准备过去——她站起来，直直地就倒下去了。我拼命游过去捞，只捞起来一只绣花鞋。"`,
      choices: [createDialogueChoice({
        text: '河娘到底是什么？',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '绣花鞋还在吗？',
        next: 'tell_shoe'
      }), createDialogueChoice({
        text: '给我点防身的东西',
        next: 'give_lantern'
      }), createDialogueChoice({
        text: '先走一步',
        exit: true
      })]
    }),
    ask_river: createDialogueNode('ask_river', {
      text: `"穿红衣裳的女人，半夜站在水边唱歌。"老张压低声音，像是怕河听见了，"你要是听见有人叫你名字，千万别答应。答应了，魂就被勾走了——这是老辈子传下来的规矩。"

他从马灯旁边的布袋子里摸出一块生了锈的铁片，铁片上刻着些歪歪扭扭的纹路："这个是我爹传给我的，叫'河铁'。老辈子说，河里的人害怕这种铁，因为铁是'离水之物'，水里的东西一碰到铁，就像人被烫了一样。但你把这个带在身边，只能让河娘不近你的身——她要是缠上了你，还得靠你自己挣。"`,
      choices: [createDialogueChoice({
        text: '那怎么脱身？',
        next: 'warn_ferryman'
      }), createDialogueChoice({
        text: '给我一盏河灯',
        next: 'give_lantern'
      }), createDialogueChoice({
        text: '河娘穿什么红衣裳？',
        next: 'tell_about_dresses'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_mother: createDialogueNode('ask_mother', {
      text: `老张沉默了一会儿，点点头，喉结上下滚了好几滚："上礼拜我还看见你娘在河边发呆。她站在那块大青石上，一动不动，像个柱子。我叫她，她不应。我走近了看——她的脸白得像纸，眼睛直勾勾地盯着水面，好像水底有什么东西在跟她说话。"

他顿了顿，把马灯换到另一只手里，声音放得更低："我守了三十年河，见过被拉下水的人在水里怎么变。你娘现在刚下去没多久，还认得出人，还会回去看你家门口。再过一阵子，她就不认得了。她只会记得一件事——唱歌，然后找人替她。"

他拍了拍你的肩膀，手掌又粗又硬："你娘是个好人。你小时候她每年都给我送鸡汤。别让她害了你们姐弟。你要是救不了她——就把她忘了吧。宁可她一个人在水里，也别让她回来把你拉下去。"`,
      choices: [createDialogueChoice({
        text: '她还会回来看我？',
        next: 'tell_about_visits'
      }), createDialogueChoice({
        text: '谢谢你告诉我',
        effects: { npcAffinity: 10, setFlag: 'laoZhangSawMother' },
        next: 'ask_duty'
      }), createDialogueChoice({
        text: '我不会放弃她',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_lantern: createDialogueNode('give_lantern', {
      text: `老张解开马灯的底座，从里面拧出一个缩小了号的纸糊河灯。纸是上好的棉纸，上面糊了一层桐油，灯芯是用他娃小时候穿的旧布条搓成的，浸透了桐油，闻起来有一股河泥味。

"拿着。要是被河娘缠住，点上它。光起来的时候，她们会以为你是来给她们送行的。"他郑重地叮嘱，"送行的规矩是这样的：点灯的时候，你要说一句'我送你走'，然后看灯往哪个方向走。她们以为是她们自己要走了，就不会拉你了。"

他把灯塞进你的手里，眼神忽然变得很悲伤："我娃当年要是也有一盏这个灯……算了，你记得——只能点一次。点完这一次，灯就废了。"`,
      choices: [createDialogueChoice({
        text: '收下河灯',
        effects: { npcAffinity: 15, addItem: '守夜人的河灯' },
        next: 'lantern_given'
      }), createDialogueChoice({
        text: '不用了',
        exit: true
      })]
    }),
    lantern_given: createDialogueNode('lantern_given', {
      text: `"灯灭了，你就得自己游回来。"老张把马灯转了个方向，光照在河面上，水底好像有什么东西在反光。

"子时以后，这条河不归活人管。那时候河会涨一寸——不是水涨高，是水往河堤上漫。你要是站在河边，会觉得离水更近了。你要是盯着水面看久了，会觉得水里有张脸在看你。看见了，就别看。看见了就转身走，别回头。"

他顿了顿，压低嗓子："子时到卯时这四个时辰，是河最凶的时候。你要是非夜里来——就白天把该说的话、该做的事都办妥了。"`,
      choices: [createDialogueChoice({
        text: '子时会发生什么？',
        next: 'warn_ferryman'
      }), createDialogueChoice({
        text: '你给我的灯芯，是你娃的衣服？',
        effects: { setFlag: 'knowsCoreIsSonShirt' },
        next: 'tell_core_secret'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    warn_ferryman: createDialogueNode('warn_ferryman', {
      text: `"子时过后，河上会有条船。"老张的眼神变得飘忽，光打在他脸上像蒙了一层水雾，"那船是青竹扎的，船舷上挂着白纸灯笼，灯笼上不写字。船夫没有脸，只有一团水雾，雾里有一双手。手是白的，指甲很长，一直在滴水。"

他咽了口唾沫，喉结滚得很慢："上了船，就别想下来。除非——"他伸出两根手指，"你舍得用一个名字当船钱。什么样的名字都行——你的，你妈的，你妈的妈的。只要你觉得这个名字比你的命还重要，那它就值一张船票。"

他忽然抓住你的手腕："但我告诉你——用名字当船钱的人，到了对岸，就忘了自己是谁。他们过河之后就傻站着，问他们什么都不知道，只会重复一句话——'我的名字呢？'"`,
      choices: [createDialogueChoice({
        text: '用名字当船钱？',
        effects: { setFlag: 'knowsFerrymanWarning' },
        next: 'ask_river'
      }), createDialogueChoice({
        text: '你怎么知道这些？',
        next: 'tell_ferryman_witness'
      }), createDialogueChoice({
        text: '走了，多谢',
        exit: true
      })]
    }),
    ask_old_days: createDialogueNode('ask_old_days', {
      text: `老张的手在马灯杆上攥紧了，攥得指节发白："不提了。提了也没用。"

他沉默了好一会儿，像是和什么东西较劲。最后还是开了口："我娃叫根生。那年他九岁，夏天，和他表弟两个到河里洗澡。我在河堤上抽旱烟，远远看着他们闹。后来根生往水深处走，走到脖子深的地方——他表弟喊他别过去，他不听，说要学凫水。"

他的声音开始发抖："我看见他手在水面上拍了两下，然后就不见了。他表弟吓哭了跑来叫我。我跳下去捞了整整一夜，捞起来的——是根生的布鞋。一只，在河底的泥里。"

他把马灯举高，光照亮了他那张沟壑纵横的脸："他走了之后，他娘——我老婆——疯了好几年。后来她也投了河。就是在这条河，就在这块大青石上面。"`,
      choices: [createDialogueChoice({
        text: '……对不起',
        effects: { npcAffinity: 10 },
        next: 'ask_duty'
      }), createDialogueChoice({
        text: '所以你才守河三十年',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_shoe: createDialogueNode('tell_shoe', {
      text: `老张从腰间解下一个布包，打开来，里面是一只干干净净的红绣花鞋。鞋面上绣的是并蒂莲，用金线绣的，在灯光下还亮闪闪的。

"这只鞋好好的，连泥都没沾。"他把鞋翻过来给你看鞋底——鞋底干干净净，一个泥点子都没有，"她坐了一个小时，鞋上一点河水的渍都没有。我说她根本不是人。"

他把鞋包好，重新系在腰间："这鞋我留着，想还给那个女人。但我不知道她是谁，也不知道她家住哪。镇上有几家死了人的——没有穿红裙子投河的。所以我怀疑……她不是这个镇上的人。"`,
      choices: [createDialogueChoice({
        text: '能让我看看那只鞋吗？',
        next: 'show_shoe_detail'
      }), createDialogueChoice({
        text: '走了，谢谢',
        exit: true
      })]
    }),
    tell_about_dresses: createDialogueNode('tell_about_dresses', {
      text: `"红衣裳——不是正红，是那种暗红、旧红，像放了很久的血。"老张伸着手指比划，"有的长衣裳长到脚背，有的还带着绣花。有的衣裳上面还有金线——她们死的时候穿的，入水之后衣裳就不烂，就跟着她们在水里泡着。"

他忽然压低了声音："我年轻的时候听老人说，以前有个规矩——河里捞起来的衣裳不能拿回家。拿了，它们半夜就会自己穿回主人身上。有一年发大水，从上游冲下来一摞红衣裳。有个老婆婆贪便宜捡了两件回去晾着——第二天早上老婆婆死了，穿着一件红衣裳坐在河边的石头上。人们把她抬下来，衣裳脱不下来，像是长在肉上了。"`,
      choices: [createDialogueChoice({
        text: '后来呢？',
        next: 'tell_dress_ending'
      }), createDialogueChoice({
        text: '这些衣裳从哪里来的？',
        next: 'ask_first_heniang'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_about_visits: createDialogueNode('tell_about_visits', {
      text: `"会。前阵子有好几家人跟我说，半夜听见有人敲门，开门一看没人，但门口有一滩水。"老张把马灯晃了晃，灯影在河面上荡出一圈圈涟漪，"有一回更离谱——村东头老李家的娃说，半夜醒来看见他妈站在床边摸他的脸。可他妈三年前就死了，就死在这条河里。"

他叹了口气，"人都说'日有所思夜有所梦'，可我要是说你也梦到你娘站在河边——你别怕，那八成是真的来看你了。河娘回到她认识的地方、认识的人那里，是想看看还记不记得。你要是她还认得你——她暂时不会拉你。要是有一天她不认得了——"他没有往下说。`,
      choices: [createDialogueChoice({
        text: '我不怕她',
        next: 'ask_ritual'
      }), createDialogueChoice({
        text: '怎么让她记得我？',
        effects: { setFlag: 'knowsMotherVisits' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_core_secret: createDialogueNode('tell_core_secret', {
      text: `老张的眼睛忽然红了，使劲忍着没掉泪："你不是第一个问的人。但你问了，我就告诉你。"

他把马灯从里拧开底座，取出一小截布条——布条已经旧得看不出颜色了，但上面还能看出半个"生"字，是用红线绣的："我娃走的那天穿的是这件汗褂。我把褂子撕了一条，做成芯子。"

他的声音闷得像被人捂住了嘴："我用了他衣裳的一部分做灯芯，这样我点灯的时候就觉得他还在。每次灯亮起来，我好像就看见他在水面上游。我知道那是假的——可假的也好。假的也不会疼。"`,
      choices: [createDialogueChoice({
        text: '……给我河灯',
        effects: { npcAffinity: 20, setFlag: 'knowsLanternStory' },
        next: 'give_lantern'
      }), createDialogueChoice({
        text: '谢谢你告诉我',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_shoe_detail: createDialogueNode('show_shoe_detail', {
      text: `老张把灯凑近了那只红鞋。你低头细看——鞋面是杭纺绸料子，绣的并蒂莲花瓣用了十几种颜色的丝线，绣工细密得看不出针脚。鞋底纳的是千层布底，白线纳的，针脚齐齐整整。

但最让你不安的——是鞋的内里。内里还带着一点微微的潮气，像刚从脚上脱下来的，可那女人已经跳河一个月了。

"你摸摸。"老张说。

你伸手触了触鞋面——是温的。不是灯照的温，是从里往外透的温，像一个人穿着它在走。

老张把鞋收了回去："这鞋不能留在我身边太久。上一个看它的人也摸过——第二天他就往河边跑，说听见他死掉的媳妇在叫他。"`,
      choices: [createDialogueChoice({
        text: '这鞋的主人就是你说的那个红衣女人',
        next: 'ask_river'
      }), createDialogueChoice({
        text: '我去查查镇上谁家做这种鞋',
        effects: { setFlag: 'willInvestigateShoe' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_first_heniang: createDialogueNode('ask_first_heniang', {
      text: `"你这后生怎么什么都不知道？"老张翻了个白眼，"河里的红衣女人——最老的那个——是三百年前沉塘的沈家娘子。这是镇上老一辈人人皆知的。后来河里淹死的那些——有投河的、有被推下去的、有失足落底的——她们泡久了，都变成了河娘的'衣裳'。"

他往河面上甩了一颗石子："你往河里扔颗石子，沉到底，再捞上来——河底的泥是红色的。老辈子说那是沈家娘子的血。三百多年了，血还在。"`,
      choices: [createDialogueChoice({
        text: '怎么才能让她们安息？',
        next: 'warn_ferryman'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_ferryman_witness: createDialogueNode('tell_ferryman_witness', {
      text: `老张脸色变了几变，最终像泄露天机一样压着嗓子说："我年轻的时候亲眼见过那条船。"

他的声音发紧："那年我十七，跟我爹到镇上赶集回来，走夜路经过河堤。那时候没有表，但我知道是子时——因为河里开始冒白烟。烟一出来，河面上就浮出来一条船，船头挂着一盏灯。我爹拉着我趴下，叫我别出声。"

他闭上眼睛："我看见船夫撑起竹篙，从西岸往东岸划。船上坐着个人，穿白衣服，脸埋在膝盖里。船到河中间停了一下——那个人站起来了，回头看了一眼。"他猛地睁开眼，"他回头看见了我。他的脸——是我的脸。但我还是十七岁的样子。"`,
      choices: [createDialogueChoice({
        text: '那人是谁？',
        effects: { sanity: -15, setFlag: 'ferrymanSawSelf' },
        next: 'start'
      }), createDialogueChoice({
        text: '你认错了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_dress_ending: createDialogueNode('tell_dress_ending', {
      text: `"后来？后来那个老婆婆被埋了，红衣裳也脱不下来。"老张的嘴角往下一撇，"埋了不到一个月，坟头上长了一棵红花开——是大红的牡丹。镇上的人都说那牡丹不对劲，花瓣上有一股河泥的腥味。后来沈家人把那牡丹连根刨了，刨出来的根是红色的，流出来的汁液像血。"

他重重地叹了口气："那之后沈家就开始走下坡。原先沈家是镇上第一大户，人有钱有地。牡丹刨了之后不到十年，沈家人死的死、疯的疯。现在沈家就剩一个沈老七了——穷得叮当响，住一间漏雨的土坯房。"`,
      choices: [createDialogueChoice({
        text: '沈老七知道这些吗？',
        effects: { setFlag: 'knowsSteleLocation' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
