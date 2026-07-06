import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《huimen》NPC：小福（纸扎铺学徒）
 */

export const xiao_fu = createNPC('xiao_fu', {
  name: '小福',
  title: '纸扎铺学徒',
  dialogue: {
    start: createDialogueNode('start', {
      text: `你绕到柜台后面，发现柜台底下的暗格里蜷着一个年轻人。他大概十六七岁，脸上有几道没擦干净的浆糊印子，眼睛红红的，像是刚哭过。\n\n他看见你，吓了一跳，往后缩了缩："你、你是谁？别告诉师傅我躲这儿，他会打我的。"\n\n他说的"师傅"，应该是那个糊纸人的老人。`,
      choices: [createDialogueChoice({
        text: '你为什么躲起来？',
        next: 'ask_hide'
      }), createDialogueChoice({
        text: '你师傅在扎什么？',
        next: 'ask_master'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_hide: createDialogueNode('ask_hide', {
      text: `小福吸了吸鼻子，声音压得低低的。\n\n"师傅让我扎一个纸人，扎得和活人一模一样。我扎不好，他打我。"他伸出手给你看，手背上有一道道青紫的印子，"他说，这个纸人是要'用'的，不能扎错一点。要是脸不对，'她'就不肯进来。"\n\n"她是谁？" 你问。\n\n小福摇摇头："师傅没说。只让我扎得下巴有颗痣。我偷偷看过那个纸人——它的脸，和你长得一模一样。"`,
      effects: { npcAffinity: 5 },
      choices: [createDialogueChoice({
        text: '他扎了几个纸人？',
        next: 'ask_count'
      }), createDialogueChoice({
        text: '你怕他吗？',
        next: 'ask_fear'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_master: createDialogueNode('ask_master', {
      text: `"师傅？" 小福的脸更白了，"他是……他是村里的人，可他比村里人都老。我小时候他就那样，现在我长大了，他还是那样。村里人说他是'借寿'的，借别人的寿活。"\n\n他凑近你，压低声音："我偷看过他的账本。账本上记着每一个他扎过的纸人——每一个都对应一个村里人。名字后面画着圈，画了圈的，后来都不见了。"\n\n"我师傅扎的纸人，"小福的声音抖起来，"不是给死人烧的。是给活人'替'的。"`,
      effects: { npcAffinity: 10, setFlag: 'huimen_exp_xiaofu_paper_substitute' },
      choices: [createDialogueChoice({
        text: '账本在哪？',
        next: 'ask_ledger'
      }), createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_count: createDialogueNode('ask_count', {
      text: `小福想了想，掰着手指头数："我来的这三年，师傅扎了……七个？不对，八个。有一个扎坏了，师傅说'她'不肯进来，就烧了重扎。"\n\n"烧的时候，"小福打了个寒颤，"我听见纸人叫了一声。像小猫叫，又像小孩哭。师傅说听错了，是我耳朵有毛病。可我听得清清楚楚——那是'疼'的声音。"\n\n他看着你："你说，纸人要是扎得和活人一模一样，它会不会也觉得自己是活人？它会不会疼？"`,
      effects: { npcAffinity: 5 },
      choices: [createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    }),
    ask_fear: createDialogueNode('ask_fear', {
      text: `"怕？" 小福苦笑了一下，那笑在他这张年轻的脸上显得很老，"我怕的不是他打我。我怕的是……我也在账本上。"\n\n他伸出胳膊给你看，胳膊内侧有一道淡淡的墨痕，像是被什么东西画过又洗掉："这是我偷看账本那天晚上，自己冒出来的。师傅说我被'记上了'，逃不掉的。他说，等扎完那个和你一样的纸人，就轮到我。"\n\n"你要是能走，"他忽然抓住你的袖子，"带我走吧。我不想变成纸人。"`,
      effects: { npcAffinity: 10 },
      choices: [createDialogueChoice({
        text: '我没办法带你走',
        next: 'refuse_take'
      }), createDialogueChoice({
        text: '账本在哪，我去看看',
        next: 'ask_ledger'
      })]
    }),
    ask_ledger: createDialogueNode('ask_ledger', {
      text: `小福指了指铺子后面的楼梯："账本在阁楼上，师傅上楼时会把钥匙挂在腰上。可他下午要睡一觉，睡得死，雷都打不醒。那时候你能上去。"\n\n他从怀里掏出一样东西递给你——是一根细细的竹签，一头削尖了，像是开锁用的。\n\n"这是我撬柜子时用的。阁楼的锁是老式的，用这个一捅就开。"他看着你，眼神里有一种赌命的决绝，"你要是看了账本，能不能……能不能把我的名字划掉？我不想变成纸人。"`,
      effects: { npcAffinity: 15, addItem: '竹签', setFlag: 'huimen_exp_xiaofu_ledger_hint' },
      choices: [createDialogueChoice({
        text: '我会想办法',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    refuse_take: createDialogueNode('refuse_take', {
      text: `小福的手松开了。他没哭，只是低下头，把脸埋进膝盖里。\n\n"我知道。" 他闷闷地说，"你也是被'记上'的人。两个被记上的人，谁也救不了谁。"\n\n他安静了一会儿，又抬起头："那账本，你要是看了，替我看看……我后面是不是真的有个圈。我要是知道了，至少心里有个数。"\n\n他把那根竹签又往你手里塞了塞："拿着吧。我不该留这东西，留着也是死，不留也是死。"`,
      effects: { npcAffinity: 5, addItem: '竹签' },
      choices: [createDialogueChoice({
        text: '回去',
        next: 'start'
      })]
    })
  }
});
