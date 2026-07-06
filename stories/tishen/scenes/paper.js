import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：paper
 */

export const scenes = {
  paper_wedding_proposal: createScene('paper_wedding_proposal', {
    title: '冥婚',
    text: `你忽然想起村里老人说过的话：没有名字的孤魂野鬼，若是与人拜了堂，就能在阴间落了户，不再纠缠阳间的亲人。

"如果我用冥婚给你一个名分，"你对纸人说，"你愿意放过我爸吗？"

纸人愣了一下，随即露出一个你从未见过的笑。那笑容不是画上去的，而是从纸壳深处裂开的。

"你愿意娶我？"

"不是娶你，"你说，"是给你一个归处。"

它歪着头看了你很久，然后从纸壳下抽出一根湿漉漉的红绳。绳头系着一小撮头发——是你离家前梳头上掉落的，被父亲收进了纸人里。

"我没有嫁妆，也没有婚书。"它说，"只有这根红绳。"

[red]红绳上系着你的命。[/red]`,
    effects: {
      sanity: -10,
      yin: 15
    },
    choices: [createChoice({
      text: '答应与它拜堂',
      next: 'paper_wedding_ceremony'
    }), createChoice({
      text: '夺过红绳烧掉',
      next: '',
      ending: 'hidden_redThread'
    })]
  }),
  paper_wedding_ceremony: createScene('paper_wedding_ceremony', {
    title: '纸嫁',
    text: `院子里的香案是纸人自己摆的。它不知从哪翻出一套大红的纸嫁衣，穿在身上，盖着红盖头，站在槐树下等你。

母亲想阻拦，被它一挥手推回了屋里。你这才意识到，它早就不是父亲能控制的东西了。

一拜天地时，槐树上的乌鸦扑棱棱全飞了起来，遮住了月亮。

二拜高堂时，里屋传来父亲剧烈的咳嗽，像是要把肺咳出来。

夫妻对拜时，那根红绳突然活了，蛇一样缠上你的手腕，越勒越紧。你感到血液被纸吸走，皮肤变得干燥、惨白。

纸人掀起盖头。那张脸完完全全是你，却画着新娘的妆。

"从今以后，"它说，"你替我站在院子里，我替你活。"`,
    effects: {
      sanity: -40,
      yin: 30,
      visual: 'blood'
    },
    choices: [createChoice({
      text: '你已无法挣脱',
      next: '',
      ending: 'hidden_paperGroom'
    })]
  })

  // 记忆交换分支
};