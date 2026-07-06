import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《xitai》NPC：周婆（纸扎铺守夜人）
 */

export const zhou_po = createNPC('zhou_po', {
  name: '周婆',
  title: '纸扎铺守夜人',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你推开周氏纸扎铺的门。门轴锈得厉害，"吱呀"一声，像是一只老猫被踩了尾巴。

柜台后走出一个佝偻的老妇人，手里攥着一把还没糊完的竹篾。她的脸皱得像一张没展开的纸，可眼睛亮得很，亮得不像这个年纪的人。她看了你一眼，又看了看架子上的纸女——那是一个穿红戏服的纸扎女子，眉眼画得极细，水袖拖在柜台上。

"别碰她。"周婆的声音干巴巴的，像是竹篾互相刮，"那是周生三十年前订的，他说要做一个和云袖一模一样的纸人。订金我都收了，不能毁约。"`,
      choices: [createDialogueChoice({
        text: `你认识周生？`,
        next: 'ask_zhou'
      }), createDialogueChoice({
        text: `纸人有什么用？`,
        next: 'ask_paper'
      }), createDialogueChoice({
        text: `离开`,
        exit: true
      })]
    }),
    ask_zhou: createDialogueNode('ask_zhou', {
      text: `"怎么不认识？那孩子小时候常来我铺子里玩，骑在我柜台上要糖吃。"周婆用竹篾敲了敲柜台，"火前一晚，他红着眼睛来订这具纸女，说要红衣水袖，眉眼要和云袖一个模子。我问他做什么用，他不说，只塞给我一锭银子，说'周婆，明早之前糊好，我有急用'。"

"我想问他急什么用，可他眼睛红得像兔子，我没敢问。我熬了一夜糊，天亮糊好了。可纸女还没糊完，火就烧起来了。"

周婆叹了口气："那锭银子我一直没花，搁在柜台底下。等了三十年，他也没来取。"`,
      choices: [createDialogueChoice({
        text: `他成功了吗？`,
        next: 'ask_fail'
      }), createDialogueChoice({
        text: `云袖知道吗？`,
        next: 'ask_yunxiu_knows'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_fail: createDialogueNode('ask_fail', {
      text: `"成功？"周婆苦笑，"纸女现在还挂在那儿呢。周生死了，云袖也成了鬼，这纸女没人点睛，就只是一堆竹篾和纸。"

她伸手摸了摸纸女的脸，摸得很轻，像是怕摸花了妆："不过，"她忽然压低声音，凑近你，"要是有人用朱砂笔替她点上眼睛，她就能替云袖把那场戏唱完。云袖歇了，戏也就散了。"

"纸人替真人，是老手艺。我糊了四十年纸扎，点过睛的纸人，没有一百也有八十。可这具，"她看了一眼架子上的纸女，"我不敢点。点了，就是我替周生做的主——这主，我做了三十年，做不了。"`,
      choices: [createDialogueChoice({
        text: `怎么点睛？`,
        next: 'ask_how_eye'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_yunxiu_knows: createDialogueNode('ask_yunxiu_knows', {
      text: `"她不知道。"周婆摇摇头，摇得很慢，"周生想给她惊喜，想让她在唱完《惊梦》之后，看见台下有人捧着她的人偶等她——他说，要让云袖知道，就算她唱不成杜丽娘，也有人愿意做她的柳梦梅。"

"可有时候，惊喜等不到天亮。"周婆的眼睛又黯下去，"云袖到死都以为周生负了她，以为是他划掉了戏单上的名字。她不知道，周生划掉名字，是因为他觉得自己不配——柳梦梅该救杜丽娘，可他没救成。"

"两个傻瓜。"周婆嘟囔了一句，"一个不敢说，一个不肯问。等了三十年，还在等。"`,
      choices: [createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_paper: createDialogueNode('ask_paper', {
      text: `"纸人替真人，是老手艺。"周婆放下竹篾，从柜台底下摸出一本发黄的手抄本，翻给你看，"点上眼，纸女就有魂；穿上戏服，就能登台。但替角儿唱戏，唱的是替身的命——纸女唱完，替身也就散了。"

"你若真想让云袖散场，就得让纸女替她唱完那出《牡丹亭》。纸女烧成灰，云袖的执念也就跟着散了。"

她合上手抄本，看着你："可你得想清楚。纸女替云袖唱，唱的是云袖的命，烧的也是云袖的命。云袖愿意不愿意，我不知道。你要替她做这个主，得先问她。"`,
      choices: [createDialogueChoice({
        text: `给我朱砂笔`,
        next: 'give_cinnabar'
      }), createDialogueChoice({
        text: `我再想想`,
        next: 'start'
      })]
    }),
    ask_how_eye: createDialogueNode('ask_how_eye', {
      text: `"用朱砂笔，点双目。点了眼，纸女就是魂的容器，你要负责把她送上戏台。"周婆的语气严肃起来，"要是不送，她会反过来缠上点睛的人——她有了魂，却没戏唱，就会找你算账。"

她从柜台底下摸出一支发黑的毛笔，笔杆是竹的，缠着褪色的红绳。笔头还沾着一点干透的朱砂，红得发黑。

"这是我守铺子三十年，剩的最后一点朱砂。"周婆把笔搁在柜台上，没递给你，"你要拿，就拿。但我丑话说前头——点了，就得送。送不上台，你跟我都脱不了干系。"`,
      choices: [createDialogueChoice({
        text: `接过朱砂笔`,
        next: 'give_cinnabar'
      }), createDialogueChoice({
        text: `不要`,
        next: 'start'
      })]
    }),
    give_cinnabar: createDialogueNode('give_cinnabar', {
      text: `"拿去吧。"周婆把笔推给你，转过身去，不看你了，"这是我守铺子三十年，剩的最后一点朱砂。但愿你用得上，也但愿你用不上。"

她背对着你，又补了一句："用完了，把笔还我。这笔跟了我四十年，我不想让它陪葬。"

你把笔收好。笔入手冰凉，笔杆上的红绳松了，你系了系，系不紧——这绳子本来是双股的，另一股不知道什么时候断了。`,
      effects: {
        npcAffinity: 10,
        addItem: '朱砂笔'
      },
      choices: [createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    })
  }
});
