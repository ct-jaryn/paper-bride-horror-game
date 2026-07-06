import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《huimen》NPC：阿欢（井沿虚影）
 */

export const a_huan = createNPC('a_huan', {
  name: '阿欢',
  title: '井沿虚影',
  dialogue: {
    start: createDialogueNode('start', {
      text: `井沿上蹲着一个女子的虚影。她半透明，月光能穿过她照在地上。她穿着一身洗得发白的旧衣裳，手里攥着一根棒槌，正在一下一下地捶着井沿上的青石——像是在洗衣裳，可她面前没有盆，没有水，只有一块磨得发亮的青石。\n\n她捶一下，井里就"咚"地响一声。她捶得很慢，很慢，慢得像是怕吵醒井底下的什么人。\n\n你走近时，她抬起了头。她的脸是模糊的，像隔着一层水看，可你能看见她在笑——一种很苦的笑。\n\n"你来了。" 她说，声音像是从井底传上来的，"秀兰说你会来。她让我在这儿等你。"`,
      choices: [createDialogueChoice({
        text: '你认识秀兰？',
        next: 'ask_xiulan'
      }), createDialogueChoice({
        text: '你在洗什么？',
        next: 'ask_wash'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_xiulan: createDialogueNode('ask_xiulan', {
      text: `"认识。" 虚影点点头，棒槌停了一下，"我是秀兰的陪嫁丫鬟。我叫阿欢。我跟着她嫁过来的——可我没能跟着她回去。"\n\n她低下头，又开始捶青石："成亲那天，轿子抬到井边，秀兰说口渴，要喝口井水。我去打水，井绳断了，我掉下去了。井水冷，冷得我喘不上气。我喊秀兰，她听不见——她那时候已经被'他'接走了。"\n\n"我在井底等了三十年。" 阿欢说，"等秀兰来找我。可她没来。她还在等她的新郎。"`,
      effects: { npcAffinity: 5 },
      choices: [createDialogueChoice({
        text: '她的新郎是谁？',
        next: 'ask_bridegroom'
      }), createDialogueChoice({
        text: '你能帮我什么？',
        next: 'ask_help'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_wash: createDialogueNode('ask_wash', {
      text: `阿欢低头看了看手里的棒槌，苦笑了一下。\n\n"我洗的是喜服。秀兰成亲那天穿的喜服，被井水泡了三十年，红都泡成了黑。我天天洗，天天洗，可洗不掉——血是洗不掉的。"\n\n她举起棒槌又捶了一下，井里"咚"地响了一声："这喜服上的血，不是秀兰的。是那个'他'的——他成亲那天动了刀子。秀兰不知道，她到现在都不知道她那天嫁的是个死人。"\n\n"我洗了三十年，"阿欢说，"是想把血洗干净，好让秀兰能穿干净点走。可我洗不干净。也许要等那个'他'来，血才能散。"`,
      effects: { npcAffinity: 5, setFlag: 'huimen_exp_ahuan_blood_secret' },
      choices: [createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_bridegroom: createDialogueNode('ask_bridegroom', {
      text: `阿欢的虚影晃了晃，像是被风吹动了。她沉默了好一会儿，才开口。\n\n"她的新郎……" 她说，声音更轻了，"是你们家的人。秀兰临死前念的那个名字，是你祖父的。她等了三十年，等的也是他。可你祖父早死了，来不了了。"\n\n她抬起头看你，那张模糊的脸上，眼睛忽然清了一下："你来，是因为你身上有他一点血。她闻到了，她以为他来了。你祖母带你来磕那三个头，就是想让你……替他还个愿。"\n\n"可还愿要还什么，"阿欢摇摇头，"我不知道。我只知道，井里那个红轿子，是给'他'坐的。你要是坐进去了，就出不来了。"`,
      effects: { npcAffinity: 10, setFlag: 'huimen_exp_ahuan_bridegroom_truth' },
      choices: [createDialogueChoice({
        text: '我祖父对她做了什么？',
        next: 'ask_grandfather'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_grandfather: createDialogueNode('ask_grandfather', {
      text: `阿欢的棒槌停了。她把棒槌搁在井沿上，双手交叠在膝上，像是在整理什么要说的话。\n\n"秀兰本来要嫁的不是你祖父。"她说，"是隔壁村的一个后生，秀兰喜欢他，他也喜欢秀兰。可你祖父也看上了秀兰，托人去说亲，秀兰家嫌你家是村头大户，就答应了。"\n\n"成亲那天，秀兰还在等那个后生来抢亲。后生没来——他被你祖父的人堵在山路上，打断了腿。秀兰不知道，她以为后生负了她，就赌气上了轿。轿子抬到井边，她要喝水，我去打水，就……"\n\n阿欢的虚影淡了一点："你祖父后来娶了别人。秀兰的坟没人祭，就成了孤魂。她等了三十年，等的就是问一句——他到底有没有爱过她。"\n\n"你要是能见到她，"阿欢看着你，"替我祖父，也替你祖父，说一声对不起。她要的不过是这一句。"`,
      effects: { npcAffinity: 15, setFlag: 'huimen_exp_ahuan_grandfather_sin' },
      choices: [createDialogueChoice({
        text: '我会记住',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_help: createDialogueNode('ask_help', {
      text: `阿欢想了想，从怀里掏出一样东西。那是一根红绳，绳头已经褪色，绳上还系着一枚小小的铜钱。\n\n"这是秀兰成亲那天系的红绳，'结发'用的。"她说，"绳子本该系在新人腕上，可成亲没成，绳子就系在了井绳上。我把它解下来，揣了三十年。"\n\n她把红绳递给你，虚影在她递东西的时候又淡了一些："你拿着。井里要是有人叫你，你就把这绳子系在手腕上。红绳认主，她看见红绳，会以为你是'他'。你可千万别答应她——一答应，红绳就断了，你也走不了了。"\n\n"还有，"她又补了一句，"你要是真想帮她散，就让她听见那句'对不起'。这是她等了三十年的东西。"`,
      effects: { npcAffinity: 15, addItem: '褪色的红绳' },
      choices: [createDialogueChoice({
        text: '收下红绳',
        next: 'start'
      })]
    })
  }
});
