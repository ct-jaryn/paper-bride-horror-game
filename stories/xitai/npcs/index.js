import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《xitai》NPC 对话
 */

export const NPCs = {
  lao_zhao: createNPC('lao_zhao', {
    name: '老赵',
    title: '春香班司鼓',
    dialogue: {
      start: createDialogueNode('start', {
        text: '后台的阴影里坐着一个干瘦老人，膝盖上横着一对枣木鼓槌。他听见脚步声，抬起眼皮。\n\n"三十年没人敢进这后台了。你是来听戏的，还是来散戏的？"',
        choices: [createDialogueChoice({
          text: '打听当年的事',
          next: 'ask_past'
        }), createDialogueChoice({
          text: '你能帮我什么？',
          next: 'ask_help',
          condition: {
            flag: 'knowsArson'
          }
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      ask_past: createDialogueNode('ask_past', {
        text: '老赵用鼓槌敲了敲膝盖，发出沉闷的咚咚声。\n\n"民国二十三年七月十五，春香班唱《牡丹亭》。我敲到第三通开场鼓，就闻见台下有桐油味。火是从台板缝里蹿上来的，像有人在地上浇了一圈。"',
        choices: [createDialogueChoice({
          text: '谁放的火？',
          next: 'ask_arsonist'
        }), createDialogueChoice({
          text: '云袖当时怎样？',
          next: 'ask_yunxiu_past'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_arsonist: createDialogueNode('ask_arsonist', {
        text: '老赵摇摇头。\n\n"我没看见脸。只看见一双绸缎鞋，鞋底沾着桐油，在台板下头踱步。火起之前，那人站了整整一出《游园》的时间，像是在等戏唱到最热闹的时候才下手。"\n\n他顿了顿，压低声音："但我听见他念叨了一句——云袖不死，我女儿永无出头之日。"',
        effects: {
          npcAffinity: 5,
          setFlag: 'zhaoHeardArsonist'
        },
        choices: [createDialogueChoice({
          text: '继续问云袖',
          next: 'ask_yunxiu_past'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_yunxiu_past: createDialogueNode('ask_yunxiu_past', {
        text: '"云袖那孩子，是最后一个还在唱的。"老赵的声音低了下去，"戏服都烧着了，她还站在台口唱"原来姹紫嫣红开遍"。班主去拉她，被她甩开了。"\n\n"她说：戏开了，就要唱完。唱不完，魂就散不了。"',
        choices: [createDialogueChoice({
          text: '她为什么非要唱完？',
          next: 'ask_why_sing'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_why_sing: createDialogueNode('ask_why_sing', {
        text: '老赵叹了口气。\n\n"戏班的规矩。开锣的戏，锣鼓不停，戏就不能散。云袖是角儿，她比谁都信这个。所以她把魂也唱进了戏里，等着有人替她演完柳梦梅。"\n\n"你要是有胆子登台，记住——唱到"则为你如花美眷"时，别看她的眼睛。"',
        choices: [createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_help: createDialogueNode('ask_help', {
        text: '老赵端详你很久，把鼓槌递过来。\n\n"你既然知道是刘掌柜放的火，就该知道这场戏不是唱给人听的。拿着这对鼓槌，要是台上锣鼓乱了，就敲三下。三下，不能多，不能少。多了，戏子以为你在催场；少了，他们以为你不想听。"',
        effects: {
          npcAffinity: 10,
          addItem: '老赵的鼓槌'
        },
        choices: [createDialogueChoice({
          text: '收下鼓槌',
          next: 'start'
        })]
      })
    }
  }),
  zhou_po: createNPC('zhou_po', {
    name: '周婆',
    title: '纸扎铺守夜人',
    dialogue: {
      start: createDialogueNode('start', {
        text: '柜台后走出一个佝偻的老妇人，手里攥着一把还没糊完的竹篾。她看了你一眼，又看了看架子上的纸女。\n\n"别碰她。那是周生三十年前订的，他说要做一个和云袖一模一样的纸人。"',
        choices: [createDialogueChoice({
          text: '你认识周生？',
          next: 'ask_zhou'
        }), createDialogueChoice({
          text: '纸人有什么用？',
          next: 'ask_paper'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      ask_zhou: createDialogueNode('ask_zhou', {
        text: '"怎么不认识？那孩子小时候常来我铺子里玩。火前一晚，他红着眼睛来订这具纸女，说要红衣水袖，眉眼要和云袖一个模子。"\n\n周婆用竹篾敲了敲柜台："他想用纸人替云袖唱完那场《牡丹亭》，好带云袖私奔。可纸女还没糊完，火就烧起来了。"',
        choices: [createDialogueChoice({
          text: '他成功了吗？',
          next: 'ask_fail'
        }), createDialogueChoice({
          text: '云袖知道吗？',
          next: 'ask_yunxiu_knows'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_fail: createDialogueNode('ask_fail', {
        text: '"成功？"周婆苦笑，"纸女现在还挂在那儿呢。周生死了，云袖也成了鬼，这纸女没人点睛，就只是一堆竹篾和纸。"\n\n"不过，"她忽然压低声音，"要是有人用朱砂笔替她点上眼睛，她就能替云袖把那场戏唱完。云袖歇了，戏也就散了。"',
        choices: [createDialogueChoice({
          text: '怎么点睛？',
          next: 'ask_how_eye'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_yunxiu_knows: createDialogueNode('ask_yunxiu_knows', {
        text: '"她不知道。周生想给她惊喜，想让她在唱完《惊梦》之后，看见台下有人捧着她的人偶等她。"\n\n周婆摇摇头："可有时候，惊喜等不到天亮。云袖到死都以为周生负了她，以为是他划掉了戏单上的名字。"',
        choices: [createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_paper: createDialogueNode('ask_paper', {
        text: '"纸人替真人，是老手艺。点上眼，纸女就有魂；穿上戏服，就能登台。但替角儿唱戏，唱的是替身的命。"\n\n"你若真想让云袖散场，就得让纸女替她唱完那出《牡丹亭》。纸女烧成灰，云袖的执念也就跟着散了。"',
        choices: [createDialogueChoice({
          text: '给我朱砂笔',
          next: 'give_cinnabar'
        }), createDialogueChoice({
          text: '我再想想',
          next: 'start'
        })]
      }),
      ask_how_eye: createDialogueNode('ask_how_eye', {
        text: '"用朱砂笔，点双目。点了眼，纸女就是魂的容器，你要负责把她送上戏台。要是不送，她会反过来缠上点睛的人。"\n\n周婆从柜台底下摸出一支发黑的毛笔，笔杆上缠着褪色的红绳。',
        choices: [createDialogueChoice({
          text: '接过朱砂笔',
          next: 'give_cinnabar'
        }), createDialogueChoice({
          text: '不要',
          next: 'start'
        })]
      }),
      give_cinnabar: createDialogueNode('give_cinnabar', {
        text: '"拿去吧。这是我守铺子三十年，剩的最后一点朱砂。但愿你用得上，也但愿你用不上。"',
        effects: {
          npcAffinity: 10,
          addItem: '朱砂笔'
        },
        choices: [createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      })
    }
  }),
  liu_niang: createNPC('liu_niang', {
    name: '柳娘',
    title: '河下绿衣',
    dialogue: {
      start: createDialogueNode('start', {
        text: '水面泛起一圈涟漪，一个穿绿戏服的女子从河底浮起半截身子。她的脸被水泡得发白，手里攥着一张湿软的戏单。\n\n"来呀，水凉快呀……"',
        choices: [createDialogueChoice({
          text: '你是谁？',
          next: 'ask_identity'
        }), createDialogueChoice({
          text: '你父亲是刘掌柜？',
          next: 'ask_father',
          condition: {
            flag: 'knowsSuspects'
          }
        }), createDialogueChoice({
          text: '我陪你唱一段',
          next: 'sing_together'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      }),
      ask_identity: createDialogueNode('ask_identity', {
        text: '"我是春香班的备选旦角。"她举起手里的戏单，"本来那场《牡丹亭》，该我唱杜丽娘的。可班主说，云袖姐的嗓子比我好，让我唱花神。"\n\n她的声音越来越轻："我爹不甘心。他说，云袖不死，我就出不了头。"',
        choices: [createDialogueChoice({
          text: '你恨云袖吗？',
          next: 'ask_hate'
        }), createDialogueChoice({
          text: '你恨你爹吗？',
          next: 'ask_hate_father'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_hate: createDialogueNode('ask_hate', {
        text: '"恨过。"柳娘低下头，"可水底下太冷，我一个人唱了三十年的水词。现在我只想有人和我和一曲。"\n\n"云袖姐教我甩水袖，教我唱"袅晴丝"。火起的时候，她把我推出了台口。她不知道，推我出去之后，我爹的事就让我活不下去了。"',
        effects: {
          npcAffinity: 10
        },
        choices: [createDialogueChoice({
          text: '我和你唱',
          next: 'sing_together'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_hate_father: createDialogueNode('ask_hate_father', {
        text: '"他是我爹。"柳娘的声音像是从水底传来，"可他也烧了我上台的路。我投河那天，穿的是杜丽娘的戏服。我想，既然我爹说云袖不死我就唱不了杜丽娘，那我就穿着这身戏服，去水里唱给他听。"',
        choices: [createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_father: createDialogueNode('ask_father', {
        text: '"别提他。"柳娘的身形晃了晃，"但你是来查真相的，是不是？我告诉你——火前那晚，我看见他在油灯下数桐油壶。他数了十七下，春香班正好十七个人。"\n\n"他还念叨：云袖不死，我女儿永无出头之日。"',
        effects: {
          npcAffinity: 5,
          setFlag: 'liuDaughterWitness'
        },
        choices: [createDialogueChoice({
          text: '还有别的吗？',
          next: 'ask_father_more'
        }), createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      ask_father_more: createDialogueNode('ask_father_more', {
        text: '"有。"柳娘抬起头，"我爹不知道，我宁可一辈子唱丫鬟，也不想云袖姐死。她是我师姐，是我唯一的朋友。"\n\n"你要是见到她，替我说一句——柳娘不是来抢戏的，柳娘是来和声的。"',
        effects: {
          npcAffinity: 10
        },
        choices: [createDialogueChoice({
          text: '回去',
          next: 'start'
        })]
      }),
      sing_together: createDialogueNode('sing_together', {
        text: '你坐在岸边，清了清嗓子，唱起《牡丹亭》里杜丽娘的念白。\n\n柳娘接了下去。一人在岸上唱，一人在水下和，两段声音在河心相遇，像是两根断了的弦被重新接上。\n\n唱到"则为你如花美眷"时，她忽然停了，从怀里掏出一样东西递给你。',
        effects: {
          npcAffinity: 15
        },
        next: 'give_jade'
      }),
      give_jade: createDialogueNode('give_jade', {
        text: '"这是我娘留给我的玉坠。你拿着，去戏台时交给云袖姐，就说——柳娘不唱了，柳娘想和她一起歇。"\n\n玉坠入手冰凉，上面刻着一个小小的"柳"字。',
        effects: {
          addItem: '柳娘的玉坠'
        },
        choices: [createDialogueChoice({
          text: '我会转交',
          next: 'start'
        }), createDialogueChoice({
          text: '离开',
          exit: true
        })]
      })
    }
  })
};