import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《hujia》NPC：小石头
 */

export const xiao_shitou = createNPC('xiao_shitou', {
  name: '小石头',
  title: '村中小孩',
  dialogue: {
    start: createDialogueNode('start', {
      text: `狐女的轿子飞走后，你看见井边蹲着一个小身影。是隔壁家的石头，才八岁，胆子却比大人还大。"周远哥，"他小声说，"我刚才看见那狐狸姐姐哭了。"`,
      choices: [createDialogueChoice({
        text: '问他狐女为什么哭',
        next: 'fox_cry'
      }), createDialogueChoice({
        text: '问他山里有没有怪事',
        next: 'mountain_weird'
      }), createDialogueChoice({
        text: '给他一块麦芽糖',
        next: 'give_candy'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    fox_cry: createDialogueNode('fox_cry', {
      text: `"她就蹲在那棵老槐树下，尾巴卷成一团。"小石头比划着，"她好像在等谁，等了很久。然后她抬头看月亮，眼泪就掉下来了。我听见她说'母亲'。"他挠挠头，"狐狸也有妈妈吗？"`,
      choices: [createDialogueChoice({
        text: '问他后来呢',
        next: 'after_cry'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    mountain_weird: createDialogueNode('mountain_weird', {
      text: `"有！"小石头眼睛亮了，"后山古墓那边，晚上会发光。我爹说是鬼火，不让我靠近。但我看见过一只大白狐从墓里走出来，嘴里叼着一颗珠子，亮晶晶的。"他压低声音，"我还知道一条小路，可以绕到墓后面。"`,
      effects: {
        npcAffinity: 5,
        setFlag: 'knowsTombBackPath'
      },
      choices: [createDialogueChoice({
        text: '让他画下来',
        next: 'draw_map'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    give_candy: createDialogueNode('give_candy', {
      text: `你从口袋里摸出一块麦芽糖递给他。小石头高兴地接过去，剥开糖纸塞进嘴里。"周远哥，你真好。不像村长，老是吓我们说狐狸会吃小孩。"他含糊地说，"我告诉你一个秘密——狐狸不吃人，村长才吃人。"`,
      effects: {
        npcAffinity: 10
      },
      choices: [createDialogueChoice({
        text: '问他什么意思',
        next: 'chief_secret'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    after_cry: createDialogueNode('after_cry', {
      text: `"后来她就不哭了，站起来拍了拍裙子。"小石头说，"她看见我躲在树后，也没生气，只是对我笑了笑。她的虎牙尖尖的，但笑得很温柔。她说'小孩，别告诉你周远哥我哭过'。"`,
      effects: {
        npcAffinity: 5
      },
      choices: [createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    draw_map: createDialogueNode('draw_map', {
      text: `小石头用树枝在地上画了一条歪歪扭扭的路线："从这里绕到后山，有个被藤蔓遮住的小洞。我钻进去过，里面很凉快，还有好多亮晶晶的石头。我爹说那是狐狸的宝藏。"`,
      effects: {
        addItem: '手绘古墓后路图'
      },
      choices: [createDialogueChoice({
        text: '谢过他',
        exit: true
      })]
    }),
    chief_secret: createDialogueNode('chief_secret', {
      text: `"我听见我爹和村长喝酒的时候说，"小石头压低声音，"村长儿子不是狐狸害的，是他自己进山偷小狐狸，被山里的狼咬死的。村长知道，但不敢说，怕丢人。"`,
      effects: {
        npcAffinity: 5,
        setFlag: 'knowsChiefSonTruth'
      },
      choices: [createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
export const NPCs = {
  xiao_shitou
};