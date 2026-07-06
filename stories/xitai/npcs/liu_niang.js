import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《xitai》NPC：柳娘（河下绿衣）
 */

export const liu_niang = createNPC('liu_niang', {
  name: '柳娘',
  title: '河下绿衣',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你走到戏台后面那条河边。河水很浅，浅得能看见河底的卵石，可水黑得不正常，像是墨汁兑了水。

水面泛起一圈涟漪——没有风，没有鱼，涟漪却一圈一圈荡开。一个穿绿戏服的女子从河底浮起半截身子，水没到她的腰。她的脸被水泡得发白，白得像戏台上的旦角底妆，可那不是粉，是泡胀的皮。她的手里攥着一张湿软的戏单，戏单上的墨化了一半，可还能认出"牡丹亭"三个字。

她抬起头看你，嘴角牵起一个似笑非笑的弧度：

"来呀，水凉快呀……"`,
      choices: [createDialogueChoice({
        text: `你是谁？`,
        next: 'ask_identity'
      }), createDialogueChoice({
        text: `你父亲是刘掌柜？`,
        next: 'ask_father',
        condition: {
          flag: 'knowsSuspects'
        }
      }), createDialogueChoice({
        text: `我陪你唱一段`,
        next: 'sing_together'
      }), createDialogueChoice({
        text: `离开`,
        exit: true
      })]
    }),
    ask_identity: createDialogueNode('ask_identity', {
      text: `"我是春香班的备选旦角。"她举起手里的戏单，戏单上的水一滴一滴往下淌，"本来那场《牡丹亭》，该我唱杜丽娘的。班主说让我唱，都给我量了戏服了。可临开锣前一天，班主改了主意，说云袖姐的嗓子比我好，让我改唱花神。"

她的声音越来越轻，轻得像是从水底冒上来的气泡："我爹不甘心。他说，云袖不死，我就出不了头。他不是我，他不懂——我宁可一辈子唱花神，也不想云袖姐死。她是我师姐，是我唯一的朋友。"`,
      choices: [createDialogueChoice({
        text: `你恨云袖吗？`,
        next: 'ask_hate'
      }), createDialogueChoice({
        text: `你恨你爹吗？`,
        next: 'ask_hate_father'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_hate: createDialogueNode('ask_hate', {
      text: `"恨过。"柳娘低下头，水珠从她的发梢滴下来，滴到河面上，荡开小小的圈，"小时候恨过。恨她嗓子比我好，恨班主偏心，恨我练了十年水袖，练得手指都变形了，还是唱不了杜丽娘。"

"可水底下太冷。"她的声音抖了一下，"我一个人唱了三十年的水词，唱给鱼听，唱给水草听，唱给我自己的影子听。现在我只想有人和我和一曲。"

"云袖姐教我甩水袖，教我唱'袅晴丝'。火起的时候，她把我推出了台口——她知道我爹的事，她没怪我。她推我出去的时候说：'柳娘，你替我唱下去。'可我没唱下去，我跳了河。"`,
      effects: {
        npcAffinity: 10
      },
      choices: [createDialogueChoice({
        text: `我和你唱`,
        next: 'sing_together'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_hate_father: createDialogueNode('ask_hate_father', {
      text: `"他是我爹。"柳娘的声音像是从水底传来，闷闷的，"可他也烧了我上台的路。我投河那天，穿的是杜丽娘的戏服——我从班主那儿偷来的，是云袖姐那一件。我想，既然我爹说云袖不死我就唱不了杜丽娘，那我就穿着这身戏服，去水里唱给他听。"

"我唱了一夜。"她说，"唱到嗓子哑了，唱到水灌进了嘴里。可我爹没听见。他只听见过云袖唱，从来没听见过我唱。"

她的身形晃了晃，水面跟着晃："后来我才明白，我爹不是想让我唱戏。他是想要云袖死。他恨的不是我唱不了杜丽娘，他恨的是云袖抢了我的'命'——可那'命'是我爹自己想出来的，云袖从来没抢过。"`,
      choices: [createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_father: createDialogueNode('ask_father', {
      text: `"别提他。"柳娘的身形晃了晃，河水跟着翻了个浪，"但你是来查真相的，是不是？我告诉你——火前那晚，我看见他在油灯下数桐油壶。他数了十七下，春香班正好十七个人。我问他数什么，他说'数嫁妆'。我那时候傻，没听懂。"

"他还念叨：云袖不死，我女儿永无出头之日。我躲在门后听见的，一字不差。"

柳娘抬起头，看着你，眼眶里没有泪——水里的人是哭不出来的，泪出来就化进水里了："你要是见到云袖姐，替我说一句——柳娘不是来抢戏的，柳娘是来和声的。"`,
      effects: {
        npcAffinity: 5,
        setFlag: 'liuDaughterWitness'
      },
      choices: [createDialogueChoice({
        text: `还有别的吗？`,
        next: 'ask_father_more'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_father_more: createDialogueNode('ask_father_more', {
      text: `"有。"柳娘抬起头，水从她的下巴往下滴，"我爹不知道，我宁可一辈子唱丫鬟，也不想云袖姐死。她是我师姐，是我唯一的朋友。小时候我练水袖练哭了，是她把自己的糖塞给我，说'柳娘别哭，师姐给你唱一段'。"

"你要是见到她，"柳娘的声音哽了一下，"替我说一句——柳娘不是来抢戏的，柳娘是来和声的。柳娘在底下等她，等她唱完了，下来，我们再唱一曲。就我们俩，没有观众，没有班主，没有我爹。"`,
      effects: {
        npcAffinity: 10
      },
      choices: [createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    sing_together: createDialogueNode('sing_together', {
      text: `你坐在岸边，清了清嗓子，唱起《牡丹亭》里杜丽娘的念白。你唱得不好，嗓子发紧，调子也跑——可你唱了。

柳娘接了下去。她的嗓子是清的，清得像河底的卵石，一碰就响。一人在岸上唱，一人在水下和，两段声音在河心相遇，像是两根断了的弦被重新接上。你跑调的地方，她替你兜住；她唱不上去的地方，你替她垫一垫。两个人像是一个人。

唱到"则为你如花美眷"时，她忽然停了，从怀里掏出一样东西，递出水面给你。`,
      effects: {
        npcAffinity: 15
      },
      next: 'give_jade'
    }),
    give_jade: createDialogueNode('give_jade', {
      text: `"这是我娘留给我的玉坠。"柳娘把玉坠搁在岸边一块石头上，没有直接递到你手里——她的手是凉的，碰到活人会"烫"到她，"你拿着，去戏台时交给云袖姐，就说——柳娘不唱了，柳娘想和她一起歇。"

玉坠入手冰凉，上面刻着一个小小的"柳"字。玉是老玉，润得很，可你握一会儿，指尖就发麻——这玉在水里泡了三十年，凉气都浸到玉芯里了。

"还有，"柳娘的身形开始往下沉，"替我跟我爹说一句——我不恨他。可我也不原谅他。"`,
      effects: {
        addItem: '柳娘的玉坠'
      },
      choices: [createDialogueChoice({
        text: `我会转交`,
        next: 'start'
      }), createDialogueChoice({
        text: `离开`,
        exit: true
      })]
    })
  }
});
