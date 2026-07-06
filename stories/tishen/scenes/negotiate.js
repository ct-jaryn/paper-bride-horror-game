import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：negotiate
 */

export const scenes = {
  negotiate_doll: createScene('negotiate_doll', {
    title: '与纸人谈判',
    text: `"如果我不烧你，也不让你变成我，" 你说，声音尽量放平，"有没有第三条路？"

纸人想了想。它想的时候歪着头，那动作和你思考时一模一样——你心里咯噔一下，告诉自己以后不要再歪头想了。

"有。" 它说，"你带我走。"

"带你走？"

"带我离开这个院子。" 纸人说，声音里第一次有了亮，"你爸的咒把我困在这里。槐树是阵眼，院墙是界，我走出这道院门，魂就被咒勒着，走不远。可你要是带我走——你亲手抱着我出去，咒就认你是主，放我过界。只要你带我出去，让我见见外面的世界，我就告诉你怎么解开我和你爸的联系。"

"然后你就自由了？"

"也许吧。" 纸人说，那"也许"两个字说得郑重，像是它在认真考虑这件事的可能性，"至少我能选择自己的结局。是散，是留，是走，都由我自己说了算。我现在连散都散不了——你爸的咒把我钉在这里，我想死都死不掉。"

它抬头看了一眼槐树，又看了一眼院墙外的天："你没站过院子，你不知道。五年，每天看着同一棵树，同一片天，同一堵墙。我宁愿散了，也不想再这么站着了。"`,
    effects: {
      yin: 5
    },
    choices: [createChoice({
      text: '答应带它走',
      next: 'take_doll_away',
      effects: {
        setFlag: 'takeDollAway'
      }
    }), createChoice({
      text: '拒绝，把它封在院子里',
      next: 'seal_doll_in_yard'
    })]
  })
};