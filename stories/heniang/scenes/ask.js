import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：ask
 */

export const scenes = {
  ask_previous_heniang: createScene('ask_previous_heniang', {
    title: '问上一任河娘',
    text: `"上一任河娘是谁？" 你问。

神婆从腰里摸出一根旱烟杆，装上烟丝，划了三根火柴才点着。她深深吸了一口，吐出一团青烟，烟散在屋里，半天不散。

"秀姑。你妈最好的姐妹。"

"秀姑不是病死的？"

"病什么病。" 神婆冷笑了一声，露出两颗发黄的牙，"三十年前，秀姑的男人在外面有了人，回来要退婚。秀姑闹了一场，没闹赢，一时想不开，半夜里跳了河。那时候你妈已经嫁给你爸了，还大着肚子——硬是挺着肚子跑到河边去拉她。"

"拉住了吗？"

"拉住了手，没拉住命。" 神婆说，烟杆在地上磕了磕，"秀姑把你妈一起往下拽。你妈不会水，两个人都往下沉。最后关头，秀姑松了手，自己沉了下去。你妈被人捞上来，救活了，秀姑再也没上来。"

你愣住了："秀姑救了我妈？"

"算是吧。" 神婆说，"所以她成了河娘后，一直没有害你妈。三十年了，她一个人在河底，等着有人下来陪她。可现在你妈也成了河娘，秀姑就管不住了——她太想有人作伴了。"`,
    effects: {
      sanity: -5,
      setFlag: 'knowsXiuguStory'
    },
    choices: [createChoice({
      text: '问怎么让秀姑替母亲',
      next: 'ask_how_substitute'
    })]
  }),
  ask_underwater_woman: createScene('ask_underwater_woman', {
    title: '问水下女子',
    text: `"你是谁？" 你对着河水喊。

水面泛起一圈涟漪，慢慢荡开。另一张脸浮现出来——不是母亲。那是一个年轻女人，比母亲年轻很多，穿着大红嫁衣，嫁衣在水里洇开，像一团化不开的血。她的脸很白，眉眼很清秀，可那双眼睛是死的，没有一点光。

"我叫秀姑。" 她说，声音带着水声，"是你娘最好的姐妹。"

"是你害死我妈的？" 你攥紧了拳头。

秀姑摇摇头，水面跟着晃："我没害她。是她自己愿意下来的。她太想我了。三十年了，她天天来河边看我，我也天天看她。她活着太苦了。"

她的笑容很温柔，但眼神冰冷，像是从河底捞上来的石头："不过既然她下来了，我就不寂寞了。我们姐妹俩，可以永远在河里作伴。"

"我不允许。" 你说。

秀姑的笑容僵了一下："那你想怎样？"

"我带她走。" 你说。`,
    effects: {
      sanity: -10,
      yin: 10
    },
    choices: [createChoice({
      text: '和秀姑谈判',
      next: 'negotiate_xiugu'
    }), createChoice({
      text: '威胁要毁掉她的尸骨',
      next: 'threaten_xiugu',
      effects: {
        yin: 10
      }
    })]
  }),
  ask_how_substitute: createScene('ask_how_substitute', {
    title: '问如何替人',
    text: `"怎么让秀姑替我妈？" 你问。

神婆没立刻答。她从床底下拖出一个木盒——木盒是樟木的，年头久了，发着暗红的光。盒盖上落满灰，她吹了一口，灰飞起来呛得你咳嗽。她打开盒子，里面垫着红布，布上放着几根白骨和一段褪了色的红布条。

"秀姑的尸骨不全。" 神婆说，手指拨弄着那几根骨头，"当年捞上来一部分埋了，还有一部分留在河里——她不愿意全上来。你要找到她全部的骨头，凑齐了，在河边烧掉。烧的时候念她的名字，一遍一遍念，让她知道有人在找她。"

"然后呢？"

"然后她会以为你要超度她。" 神婆说，抬起那只独眼看你，"等她离开河底，跟着火走的时候，你母亲就可以上来了。"

"这不是骗她吗？"

神婆看着你，那只独眼里映着跳动的烛火："你想救你妈，还是想做善人？"

你沉默了。河风从门缝里钻进来，吹得烛火一晃一晃。`,
    effects: {
      yin: 5,
      setFlag: 'knowsRitual'
    },
    choices: [createChoice({
      text: '决定按神婆说的做',
      next: 'plan_ritual'
    }), createChoice({
      text: '拒绝欺骗秀姑',
      next: 'refuse_deceive',
      effects: {
        setFlag: 'honestApproach'
      }
    })]
  }),
  ask_mother_promise: createScene('ask_mother_promise', {
    title: '问母亲承诺',
    text: `"我妈答应过你什么？" 你问。

秀姑的眼神变得恍惚，像是在回忆很久远的事。她垂下眼，水面跟着暗了一暗。

"三十年前，我跳河那天，你妈追到河边。" 她说，声音放得很轻，"她挺着大肚子，跑得喘不上气。她拉住我的手，说要陪我一起死。我骂她傻，骂她不要孩子了？我用劲推她，把她推回了岸上。"

"她哭着说：'秀姑，你等我。等我老了，就来陪你。'"

秀姑看着你，眼底有一丝水光："她做到了。三十年了，她年年都来河边看我。今年，她下来了。"

你感到一阵心痛，像有只手攥着你的心口拧。原来母亲和秀姑之间，有过这样的约定。

[red]一个关于死亡的约定。[/red]`,
    effects: {
      sanity: -10,
      yin: 5,
      setFlag: 'knowsPromise'
    },
    choices: [createChoice({
      text: '说母亲还有你',
      next: 'tell_mother_has_you'
    }), createChoice({
      text: '沉默',
      next: 'silence_by_river'
    })]
  }),
  ask_how_cruel: createScene('ask_how_cruel', {
    title: '问如何断根',
    text: `"比她更狠，就是断了她的根。" 神婆说。

"什么意思？"

"秀姑是因为情伤跳河的。她的根，就是对那个负心汉的恨。这股恨撑着她三十年没散。" 神婆说，烟杆往河的方向一指，"你找到那个负心汉的后人，让他们在河边磕头认错，当着秀姑的面认。秀姑的怨气就散了，她就能走了。"

"可那男人早就死了。"

"后人还在。" 神婆说，那只独眼盯着你，"他们继承了秀姑的仇人血脉。他们的道歉，比任何法事都管用。要让仇人的血脉低头，这比烧她骨头还狠。"`,
    effects: {
      yin: 10,
      setFlag: 'knowsCruelWay'
    },
    choices: [createChoice({
      text: '去找负心汉的后人',
      next: 'find_traitor_descendants'
    })]
  })
};
