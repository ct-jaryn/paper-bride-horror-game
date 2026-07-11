import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：hong_xiu（红袖）
 */

export const hong_xiu = createNPC('hong_xiu', {
  name: '红袖',
  title: '水下戏魂',
  dialogue: {
    start: createDialogueNode('start', {
      text: `水面下传来咿咿呀呀的唱腔，像有一根细线牵着你的耳朵。那调子婉转凄美，有时高到像是有人拿刀在玻璃上刮，有时又低到你以为停了，却还感到耳膜在颤。

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

那截红绸水袖在风里轻轻颤动，仿佛在等待什么。红绸上有水珠在滚，但水珠不掉——像是红绸自己在吸水。你仔细看，水袖的尾端绣着一朵牡丹，牡丹已经有些褪色了，但花瓣的纹路还清清楚楚——是一针一针勾出来的。

"你听见了？"水下传来一个声音——不是唱，是说。那声音像有人在水面下敲了一下磬，嗡嗡的，清而远。`,
      choices: [createDialogueChoice({
        text: '你是谁？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '接唱下一句',
        next: 'sing_together'
      }), createDialogueChoice({
        text: '把红绸还给她',
        next: 'return_sleeve'
      }), createDialogueChoice({
        text: '唱得真好',
        next: 'praise_singing'
      }), createDialogueChoice({
        text: '转身离开',
        exit: true
      })]
    }),
    ask_story: createDialogueNode('ask_story', {
      text: `水下的声音近了些，带着旧戏台特有的回音。你想起了小时候跟母亲去镇上赶庙会，戏台搭在关帝庙前面，台上的人飞来飞去，台下的人仰着脖子叫好。

"我是春香班的旦角。七岁学戏，十四岁登台。师傅说我嗓子好，将来一定能挂头牌。"那声音像是从戏台的雕栏画栋间传来的，带着脂粉和金粉的气味，"后来——后来我二十四岁那年，镇上一个姓陈的布商说要娶我当三太太。他送了我一对银镯子、一匹杭罗、一盒杏花楼的胭脂。我想布商好啊，一辈子吃穿不愁，就不用再唱戏唱到哑了嗓子了。"

她突然停了，水面上冒出一串泡。

"他是骗了他老婆说要娶我。他老婆——娘家是镇上的地头蛇——带人砸了我的戏班子。砸了我半截门牙，剪了我的头发，把我的戏服全扔到河里。我在河里捞了三天的戏服——什么都没有捞起来。我就穿着那身破烂的戏服，跳到河里去了。"`,
      choices: [createDialogueChoice({
        text: '你一直在等谁？',
        next: 'ask_peony'
      }), createDialogueChoice({
        text: '我替你唱完这出戏',
        next: 'sing_together'
      }), createDialogueChoice({
        text: '那个布商呢？',
        next: 'tell_cloth_merchant_fate'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    sing_together: createDialogueNode('sing_together', {
      text: `你嗓子发干，但还记得母亲年轻时哼过的调子。你接唱：

[whisper]"似这般都付与断井颓垣……"[/whisper]

水下的唱腔忽然停了。连河面的风都停了，水面平得像一面铜镜。你看见水底有个影子动了动——那是一个穿着红戏服的女人，乌黑的长发在水里散开，像一团黑雾。她缓慢地抬起手，那手苍白得发亮，手指尖尖的，指头上还残留的凤仙花汁——戏班的旦角染的——在幽暗中发出暗淡的红。

片刻后，那声音再起时，竟带了三分笑意："你哭腔唱得不对。'断井颓垣'要用气托着，不能硬压。我来教你——"[whisper]"似这般……都付与断井颓垣……"[/whisper] 她唱的时候，你的脚底感到河水在震动，像河底有什么东西醒了。`,
      choices: [createDialogueChoice({
        text: '继续唱',
        effects: {
          npcAffinity: 20,
          setFlag: 'hongxiuSangTogether'
        },
        next: 'sing_response'
      }), createDialogueChoice({
        text: '她唱的是什么调？',
        next: 'discuss_aria'
      }), createDialogueChoice({
        text: '问她想要什么',
        next: 'ask_peony'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    sing_response: createDialogueNode('sing_response', {
      text: `"多少年没人接我的戏了。"红袖的声音像是从很远的地方传来，"以前在戏班，我下台来都是别人喝好。后来到了河里，头几年还有路过河边的牧童听见叫声好。后来就不再有人叫了。只有河里的鱼虾听见了我的戏。鱼虾不会说话——它们只会用尾巴打河底。"

她的声音忽然变得很轻："你若再来，我教你整出《惊梦》。唱完了——我也就散了。不散也要散了。戏唱一遍有一遍的意义，唱到最后就没意义了。没了意义，就不用再等了。"`,
      choices: [createDialogueChoice({
        text: '我来学《惊梦》',
        effects: { setFlag: 'knowsPeonyDream' },
        next: 'teach_opera'
      }), createDialogueChoice({
        text: '把红绸还你',
        next: 'return_sleeve'
      }), createDialogueChoice({
        text: '为什么唱完了就能散？',
        next: 'tell_opera_truth'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_peony: createDialogueNode('ask_peony', {
      text: `"牡丹是我最爱的花。"红袖轻声说，"河底沉着一件红戏服，上面绣着半朵牡丹。那戏服是我师父传给我的——他唱了一辈子柳梦梅，那件戏服是他师父的师父的师父传下来的。整出《牡丹亭》就靠这件戏服压台。你穿着它上台，台下的就不再是你——你就是柳梦梅，就是杜丽娘。"

"但那场砸戏之后，戏服被撕掉了那只水袖——就是你现在找到的那截红绸。"她的声音有些哑了，"没有那只水袖，出不了场。没有那只水袖，我就不是旦角了——我是一个没有手的戏子。"

你若能把漂走的水袖拼回去，我就能唱完最后一出。唱完了，我就走。不再拉人下水。"`,
      choices: [createDialogueChoice({
        text: '我帮你找牡丹戏服',
        effects: {
          npcAffinity: 10,
          setFlag: 'knowsPeonyDress'
        },
        next: 'return_sleeve'
      }), createDialogueChoice({
        text: '怎么拼回去？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '半朵牡丹是什么意思？',
        next: 'explain_half_peony'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    return_sleeve: createDialogueNode('return_sleeve', {
      text: `你把红绸水袖轻轻放回水面。水袖没有往下沉——它浮在水上，像一条红蛇，自己慢慢游向河心。

"还你了。"你说。

水下的唱腔低回婉转，像是在道谢。唱的是什么你听不清——但那调子像一只手在轻轻抚摸你的头发，让你感到悲伤，又让那悲伤变得很美。

水面上的红绸慢慢地沉了下去，在最后一刻，你看见红绸上的那朵牡丹亮了一下——像是有人点了一盏灯，在红色的花瓣中央。

"一件戏服拼齐了——"水下的声音说，"我的时间也到了。剩下的，交给后来的人吧。"`,
      choices: [createDialogueChoice({
        text: '我会帮你唱完',
        effects: {
          npcAffinity: 15,
          setFlag: 'returnedSleeve'
        },
        next: 'start'
      }), createDialogueChoice({
        text: '希望你来世还能唱戏',
        effects: { npcAffinity: 20 },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    // ===== 新增节点 =====
    praise_singing: createDialogueNode('praise_singing', {
      text: `水下沉默了一瞬，忽然"咯咯"地笑了。那笑声不像人的笑——像是谁用指甲轻轻敲了一下青瓷碗，清而脆，余音颤颤的。

"你这后生嘴真甜。"红袖的声音绕了绕，像是戏台上的云步，"在戏班的时候，班主夸我唱得好，我就给他磕一个。在河里的时候——谁来夸过？只有那个疯婆子阿彩，偶尔从上游飘过来，说我唱得像她娘哄她睡觉。那是夸我呢还是损我呀？"

她顿了顿，"但我听得出来——阿彩那是真心的。鬼有没有真心？有的。鬼比人真。人嘴里说着好话，心里打的什么算盘，鬼一眼就能看出来。鬼没有那个弯弯绕——魂太轻了，装不下那些重的。"`,
      choices: [createDialogueChoice({
        text: '我唱一句，你接',
        next: 'sing_together'
      }), createDialogueChoice({
        text: '教我一两句',
        next: 'teach_opera'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    discuss_aria: createDialogueNode('discuss_aria', {
      text: `"《牡丹亭·惊梦》。"红袖的声音忽然变得很正经，像在课堂上给学生讲学，"汤显祖写的。说的是杜丽娘梦见一个书生叫柳梦梅，在牡丹亭下相见。梦醒了，杜丽娘就死了——相思死的。后来柳梦梅真的来了，在坟里找到杜丽娘，把她叫活了。"

她轻轻哼了一个过门："这出戏是旦角最难工的戏。唱念做打全要。哭要哭得美——不能嚎，嚎就俗了。笑要笑得苦——不能咧嘴，咧嘴就假了。你站在水边，水面是你的台；风是你的琴师；月亮是你的灯。"

"但你记住——唱这出戏有个规矩：'只唱一场，不唱第二场'。唱完一场，你就得停。不停的话，你就会去梦里找你的柳梦梅——那梦上了瘾，就醒不过来了。"`,
      choices: [createDialogueChoice({
        text: '唱一场就够了',
        next: 'teach_opera'
      }), createDialogueChoice({
        text: '你找到你的柳梦梅了吗？',
        effects: { sanity: -5 },
        next: 'tell_opera_truth'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_cloth_merchant_fate: createDialogueNode('tell_cloth_merchant_fate', {
      text: `"他？"红袖的声音变冷了，像冬天的井水，"他后来得了痨病，咳了三年，咳死了。死的时候瘦得像一把干柴，——我想那就是报应。"

"他老婆在我们戏班砸了之后三年也死了——上吊死的。有人说她梦见了我，梦见我穿着红戏服坐在她床头唱戏，唱了一整夜。第二天她醒过来就疯了，嘴上只会唱'似这般都付与断井颓垣'，唱了三天就把自己吊死在房梁上。"

她的声音变轻了："我从来不想拉人下水。我以前在戏班唱戏的时候，有个规矩——唱完戏不敢回头望台下。回头望了，就把台下的魂勾上来了。我死的时候就没回头。我到现在也没回头看过——我不想看见那两口子的脸。"`,
      choices: [createDialogueChoice({
        text: '你做的是对的',
        effects: { npcAffinity: 5 },
        next: 'ask_peony'
      }), createDialogueChoice({
        text: '也许她们不是被你勾的',
        next: 'ask_peony'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    teach_opera: createDialogueNode('teach_opera', {
      text: `红袖的声音忽然变得极清晰，像有人在你耳边咬耳朵："我教你一句最关键的——"

[whisper]"则为你如花美眷，似水流年……"[/whisper]

"这句是杜丽娘唱给柳梦梅的。唱的时候要看着你心里想的那个人——可以是活人，可以是死人，可以是不存在的。你看她的同时，唱出——"

她的声音停了，水面忽然起了一阵风，风里有淡淡的脂粉味："唱了几十年了。我在河里唱，唱到后来我自己都分不清我是杜丽娘还是红袖了。你要是唱了，也记得这个——我不是杜丽娘，我不能把你们都唱活了。我只能把你唱疼了。疼的记忆比什么都深。"`,
      choices: [createDialogueChoice({
        text: '唱了出来',
        effects: {
          npcAffinity: 15,
          setFlag: 'knowsOperaLine',
          sanity: -5
        },
        next: 'sing_response'
      }), createDialogueChoice({
        text: '不唱了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    explain_half_peony: createDialogueNode('explain_half_peony', {
      text: `"牡丹花开并蒂——一茎两朵，一阴一阳。"红袖的声音变得像在念经，"我的那件戏服上绣的是并蒂牡丹。一半是阴——是被扯掉的、丢了的那一半水袖上的；另一半是阳——也就是现在沉在河底的戏服上剩下的那一半。"

她停了一下："阴的一半跟着水袖走了——就是你找到的那截红绸。阳的一半被压在河底最深的泥里。两块要合在一起，就必须有一个人同时碰过这两样东西——只有碰过两样东西的人，才能把阴和阳重新缝起来。"

"你要是找回了戏服，你把红绸搭上去——绣线会自己接上。但你手上要是沾了别的水——比如别人河娘的水——绣线就接不上了。必须是你的——活人的水。活人的水是最干净的。"`,
      choices: [createDialogueChoice({
        text: '我去找那件戏服',
        effects: { setFlag: 'knowsPeonyDress', npcAffinity: 15 },
        next: 'return_sleeve'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_opera_truth: createDialogueNode('tell_opera_truth', {
      text: `水下的声音忽然变得很小——不像是故意放轻，像是她自己也快要听不清了。

"唱完了就能散——不是我到时间了，是我自己会散了。"她的字一个一个跳出来，"人死的时候要是有一件没做完的事——戏没唱完、话没说完、人没见到——就会留下来。变成鬼也要把那一件事做完。做完了，那个'后天的我'就散了——只剩下的'本来的我'。本来的我，就是活着时候的那个我。活着的时候我是什么？我是一个唱戏的。唱完了，我就不是唱戏的了。"

她顿了顿："所以我希望你听完我的戏。你听完了我就可以不再是唱戏的了。那个不再是唱戏的红袖，就能去该去的地方了。"`,
      choices: [createDialogueChoice({
        text: '我帮你唱完最后一出',
        effects: {
          npcAffinity: 20,
          setFlag: 'promisesToSing'
        },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
