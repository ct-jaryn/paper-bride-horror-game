import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：a_cai（阿彩）
 */

export const a_cai = createNPC('a_cai', {
  name: '阿彩',
  title: '无名河娘',
  dialogue: {
    start: createDialogueNode('start', {
      text: `秀姑的尸骨旁，浮现出一个瘦小的女子身影。她低着头，红头绳在雾里若隐若现。那红头绳已经褪成了粉色，像放了很多年的旧对联。她的脚悬在水面上方一寸，像是踩着什么看不见的地面。

她不开口，只是用手指在泥地上反复画着三个字，又被河水冲掉。你蹲下来仔细看——那三个字像是"我活过"。

"你……看得见我？"她的声音从很远的地方传来，又闷又湿，像在水缸里说话。`,
      choices: [createDialogueChoice({
        text: '你叫什么名字？',
        next: 'ask_name'
      }), createDialogueChoice({
        text: '你在这里多久了？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '我给你起个名字',
        next: 'give_name'
      }), createDialogueChoice({
        text: '其他河娘呢？',
        next: 'tell_other_river_girls'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_name: createDialogueNode('ask_name', {
      text: `女子抬起头，眼眶里不是泪，是河水。那河水清澈得不正常——明明底下是浑浊的河泥，倒映出来的却是一个干干净净的小姑娘，梳着双丫髻，头上别着一朵小花。

"我……我不记得了。"她的声音发抖，像秋蝉，"他们把我的名字从族谱上抹了，我就没有名字了。没有名字的人，连鬼都做不安稳。做鬼不安稳，就什么都记不得——记不得自己是谁、从哪里来、在这里做什么。"
      ""     
新娘抬起眼睛看你，眼眶里的河水在打转："我只记得他们叫我'赔钱货'。赔钱货不是名字……那是骂人的。你是第一个问我名字的人。"`,
      choices: [createDialogueChoice({
        text: '我给你起个名字',
        next: 'give_name'
      }), createDialogueChoice({
        text: '谁抹了你的名字？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '你还记得自己长什么样吗？',
        next: 'ask_appearance'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_name: createDialogueNode('give_name', {
      text: `你看着那根褪色的红头绳，轻声说："从今以后，你叫阿彩。彩色的彩。"

女子的身影颤了一下，像是被风吹到了。她张开嘴，无声地重复："阿……彩……"

一滴水从她落着泥土的脚尖滴下来，落在地上的"我活过"三个字上。字没有被冲掉——水渗进了土里，三个字更清晰了。

"……阿彩。"她终于发出了声音，又沙又哑，像几十年没说过话，"阿彩也好看。别人都说红色好看——我就是红色的。"`,
      choices: [createDialogueChoice({
        text: '对，你叫阿彩',
        effects: {
          npcAffinity: 25,
          setFlag: 'namedAca'
        },
        next: 'named_response'
      }), createDialogueChoice({
        text: '我再想想',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    named_response: createDialogueNode('named_response', {
      text: `阿彩抬起头，眼里有了光。那光很微弱，像风里的烛火。烛火不是白色的——是暗红色的，像河底的水被映亮了。

"阿彩……我也有名字了。"她笑了，笑容里带着几十年的委屈，"你是第一个叫我名字的人。以前他们都叫我赔钱货——后来连赔钱货都不叫了，就叫我'那个死的'。"

她低头看了看自己的手——手指是透明的，能看见后面的泥土："谢谢你。你叫我阿彩的时候——我想起了一些事情。我记起我以前有一条红头绳……红头绳是我娘给扎的。我死之前那晚，我把红头绳扯断了。要是当时没有扯断，也许我就不会走到河边。"`,
      choices: [createDialogueChoice({
        text: '你为什么会投河？',
        next: 'ask_story'
      }), createDialogueChoice({
        text: '我给你立碑',
        next: 'promise_bury'
      }), createDialogueChoice({
        text: '红头绳的事……详细说说',
        next: 'tell_red_ribbon_story'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_story: createDialogueNode('ask_story', {
      text: `"我是童养媳。"阿彩的声音很轻，从河底飘上来的声音那样，"八岁到他家，婆婆嫌我吃得多。十二岁还没来红，婆婆骂我是'不会下崽的鸡'。后来我来了红——他娘的反而更打我，说我'骚'。"

她绞着手指，手指间渗出河水："男人——就是我嫁的那个——打我是用扁担。扁担打断了三根。有一根断了之后他换了一根铁的——铁的会把手打骨折。我两只手都断了过。后来他打后背——后背不容易看出来。"

她闭上了眼："半夜投的河。我不会水。我不会水还是投了——因为比投河更可怕的事，是他说明天要把我卖给隔壁镇的屠户。"`,
      choices: [createDialogueChoice({
        text: '我帮你立碑',
        next: 'promise_bury'
      }), createDialogueChoice({
        text: '你已经自由了',
        next: 'give_name'
      }), createDialogueChoice({
        text: '他们现在怎么样了？',
        next: 'tell_fate_of_family'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    promise_bury: createDialogueNode('promise_bury', {
      text: `阿彩看着你，像是在确认你是不是认真的。她的手伸进自己透明的身子，摸出一个小小的东西——是一枚铜钱，上面长满了绿色的铜锈，但"道光通宝"四个字还清清楚楚。

"你要是给我立碑，"她把铜钱放在你掌心——铜钱是冰冷的，"碑上就刻：'无名女阿彩之墓'。不，我现在有名字了——'女阿彩之墓'。"

她笑了，这一次笑得像个真正的姑娘："这是我在河里唯一的东西。也许是生前的——我不记得了。但我想给你。你要是替我立了碑，铜钱就能回到我手里。你要是没立——铜钱就会变成一个铜手，半夜来找你要债。"

她笑着，但你看见她的牙齿间有水草在晃动。"开玩笑的。我不好那一口。"`,
      choices: [createDialogueChoice({
        text: '我答应你',
        effects: {
          npcAffinity: 20,
          setFlag: 'promisedAcaBurial'
        },
        next: 'accept_burial_promise'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    // ===== 新增节点 =====
    tell_other_river_girls: createDialogueNode('tell_other_river_girls', {
      text: `"其他河娘？"阿彩抬起头，朝河心指了指，"你看见那片黑水了吗？那下面挤着几十个。有的比我老，有的比我新。新来的叫'刚泡'——刚泡的还记得岸上的事，会爬上岸来看。泡久了就不上来了，挤在最底下，和泥混在一起了。"

她的声音变得忽远忽近，像被水流推来推去："最老的是沈家娘子——你别去招惹她。她不是坏——她是疼。她疼了三百年了，疼到把整条河都变成了疼。我们这些后来的，都是被她的疼卷进来的。"

阿彩顿了顿："还有一个——穿红戏服的，在河弯那边的枯柳下面。她每天半夜唱戏，唱完就哭。我们都不敢靠近她——她唱的时候水会变温，然后底下的泥会冒泡，像河在发高烧。"`,
      choices: [createDialogueChoice({
        text: '我去见见那个唱戏的',
        effects: { setFlag: 'knowsCostumeLady' },
        next: 'start'
      }), createDialogueChoice({
        text: '沈家娘子在河底做什么？',
        effects: { sanity: -5 },
        next: 'tell_about_shen_girls'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_appearance: createDialogueNode('ask_appearance', {
      text: `阿彩歪着头想了一会儿，像是在翻一本很旧很旧的画册。

"我长得很像我娘。但我娘的样子我已经记不太清了——只记得她的眉毛很淡，像我一样。我的手很小很小——七岁就能握住一个鸡蛋，我娘说我手小抓不住福气。"

她低头看看自己现在的手——河水灌注的手，青白青白的，像河里泡了很久的石头："现在的我要是去看我娘——我娘怕是认不得我。我在水里泡了太久，皮都泡烂了，肉都是泥糊的。但我还有这把骨头——骨头是干净的。"`,
      choices: [createDialogueChoice({
        text: '我帮你立碑',
        next: 'promise_bury'
      }), createDialogueChoice({
        text: '你还记得你家在哪里吗？',
        next: 'tell_home_location'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_red_ribbon_story: createDialogueNode('tell_red_ribbon_story', {
      text: `"那条红头绳是我娘出嫁那天戴的。"阿彩摸了摸自己的红头绳，像是在摸一个久违的朋友，"我娘给了我。她说：'妮儿，这是我这辈子唯一戴过的红色。往后怕是没有再戴红的机会了。'后来我娘死了——被我公公打死的，公公嫌她生了我这个赔钱货。"

阿彩的眼眶里的河水开始打转："我死之前那晚——我就是我男人说要卖我去屠户家的那晚——我躺在床上想起我娘的话。我看了看自己手腕上的红头绳，想着我娘这辈子没戴过红，我死的时候至少可以戴着红走。"

她忽然把红头绳解下来，托在掌心给你看——绳子在你眼前是半透明的，像一团凝固的血，"可是我把红头绳扯断了——因为我想，我死了红头绳也就没用了。扯断的时候我听见'嘣'的一声——我娘在我心里，崩了。"`,
      choices: [createDialogueChoice({
        text: '阿彩，你的红头绳是你娘的意思',
        effects: { npcAffinity: 15, setFlag: 'ribbondBack' },
        next: 'named_response'
      }), createDialogueChoice({
        text: '我帮你把红头绳重新接上',
        effects: { npcAffinity: 20, setFlag: 'tiedRibbon' },
        next: 'named_response'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_fate_of_family: createDialogueNode('tell_fate_of_family', {
      text: `"他们？"阿彩的眼睛里忽然起了漩涡，"我男人的腿断了——上山砍柴的时候从崖上掉下去的。接好了瘸了，现在拄着一条竹竿走路。婆婆得了一种手抖的病——筷子都拿不稳。后来她也投了河——就在这条河——就是三年前。"

她看着河面上自己的倒影："她在河里泡了三年了——就在那块大石头下面。她不认得我了——泡久了就忘了。但她还记得恨——恨我。她恨我拉了她的乖儿子垫背。可明明是她儿子把我推下去的。"

阿彩把声音压得极低："你要是在半夜看见水里有个老婆婆在骂人——别理她。她在骂我，骂了三年了，还没骂够。"`,
      choices: [createDialogueChoice({
        text: '你恨他们吗？',
        next: 'ask_revenge'
      }), createDialogueChoice({
        text: '我替你去看看她',
        effects: { sanity: -10 },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    accept_burial_promise: createDialogueNode('accept_burial_promise', {
      text: `阿彩把铜钱放在你的手心里——你感到一阵冰凉从掌心蹿上天灵盖。铜钱在你手里越来越冷，像是把寒气往你骨缝里钻。

"你要是立碑，把它放在碑顶上。"阿彩说，"放上去之后，铜钱会变热。热了，就是我在笑。凉了，就是我在哭。"

她顿了顿："你要是没立碑，铜钱会在你口袋里自己翻面。翻到'通宝'那面朝上——是我来找你了。"

阿彩开始往后退，身子一点一点融进雾气里："我走了。你记得来看看我——不是来看我的碑，是来看看水。水涨了一寸，就是我在说话。"`,
      choices: [createDialogueChoice({
        text: '我会来的',
        effects: { npcAffinity: 10, addItem: '道光通宝' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_about_shen_girls: createDialogueNode('tell_about_shen_girls', {
      text: `阿彩的身子晃了晃，像是被什么看不见的东西撞了一下。

"沈家娘子在河底最深处——我够不着那里。水到了那里是红的——不是红水是黑红色的，像陈年的血。"她的声音变得极细极远，"她在下面唱歌——不是用嘴唱，是用全身的骨头唱。你要是站在河面上，脚底板会振动，那就是她在唱。"

她忽然抓住你的手臂——她的手虚虚的，只感到凉没有感到疼："你要是真的在脚底感觉到了振动——马上往岸上跑。不要想为什么，不要回头看。跑的越远越好。她不是要拉你下去——她是想让整条河翻个身。河翻身了，整条河的水都会涌上岸，整个镇子都要被淹。"`,
      choices: [createDialogueChoice({
        text: '这种事发生过吗？',
        effects: { setFlag: 'knowsRiverRollover' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    tell_home_location: createDialogueNode('tell_home_location', {
      text: `阿彩摇摇头，又点点头："我记得是在河边——我爹家在河东头，我婆子在河东头再过去三里地。"

她伸手朝东指，手指划过的雾气里浮现出一幅模糊的画面——破旧的土坯房，房顶上长着枯草，门口一棵歪脖子枣树："我记得那棵枣树。我八岁到婆家的时候，结的枣子是甜的。后来枣树被公公砍了——因为枣树招鬼。砍了之后第二年，我公公就开始手抖——就是那个后来得抖病的手。"

她把手缩了回去："那棵枣树的位置现在应该还在。你去找——要是找到了，在树下喊三声'阿彩'——不管我应不应，你就是在叫我。叫我多了，我就记得回家的路。"`,
      choices: [createDialogueChoice({
        text: '我去找你的枣树',
        effects: { setFlag: 'willFindJujubeTree' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_revenge: createDialogueNode('ask_revenge', {
      text: `"恨？"阿彩想了很久，久到河面上起了风，雾气散了又聚。

"我以前恨。"她的声音像结了冰的水面——冷冷的，一踩就碎，"我刚死的时候，每天晚上都站在我家门口。我男人吓病了，三天没下床。婆婆请了道士来做法事。道士贴了符——符一贴上，我就进不去了。我就在门口站了一整夜。第二天符掉了——我进去坐在他床头。他看见我了。"

她顿了顿，"后来我不恨了。不恨不是因为原谅了——是因为恨比泡在水里还疼。恨让人记住自己曾经苦过。不想苦了，就把恨也扔掉。"

她抬头看你："你要是见到他们——别替我报仇。活人替死人报仇，报完之后会变得跟死人一样冷。"`,
      choices: [createDialogueChoice({
        text: '我记住了',
        effects: { npcAffinity: 5 },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
