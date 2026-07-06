import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《xitai》NPC：老赵（春香班司鼓）
 */

export const lao_zhao = createNPC('lao_zhao', {
  name: '老赵',
  title: '春香班司鼓',
  dialogue: {
    start: createDialogueNode('start', {
      text: `后台的阴影里坐着一个干瘦老人。他盘腿坐在地上，膝盖上横着一对枣木鼓槌，鼓槌磨得发亮，像是被手攥了几十年。他听见脚步声，慢慢抬起眼皮，露出一双浑浊的、布满血丝的眼睛。

他把你从头到脚看了一遍，目光在你背的相机上停了一下。

"三十年没人敢进这后台了。"他的嗓音像砂纸磨过的木板，哑、干、有锯末味，"你是来听戏的，还是来散戏的？"`,
      choices: [createDialogueChoice({
        text: `打听当年的事`,
        next: 'ask_past'
      }), createDialogueChoice({
        text: `你能帮我什么？`,
        next: 'ask_help',
        condition: {
          flag: 'knowsArson'
        }
      }), createDialogueChoice({
        text: `离开`,
        exit: true
      })]
    }),
    ask_past: createDialogueNode('ask_past', {
      text: `老赵用鼓槌敲了敲膝盖，发出沉闷的咚咚声，像是在试音。

"民国二十三年七月初七，乞巧节。春香班唱《牡丹亭》，是我司鼓。我那年四十二，敲了二十年鼓，手最稳的那一年。"他顿了顿，"我敲到第三通开场鼓，闻见台下有桐油味。桐油那味儿冲鼻子，一闻就上头，我一辈子忘不了。"

"火是从台板缝里蹿上来的，像有人在地上浇了一圈。不是一处起火，是沿着戏台底浇了一圈，火从四面同时烧起来。我敲鼓的手停在半空，没敲下去——那一通鼓，本该催杜丽娘出场的。"`,
      choices: [createDialogueChoice({
        text: `谁放的火？`,
        next: 'ask_arsonist'
      }), createDialogueChoice({
        text: `云袖当时怎样？`,
        next: 'ask_yunxiu_past'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_arsonist: createDialogueNode('ask_arsonist', {
      text: `老赵摇摇头，鼓槌在手里转了一圈。

"我没看见脸。火光太亮，眯着眼，只看见一双绸缎鞋——宝蓝色的，鞋底沾着桐油，在台板下头踱步。那人在台板底下站了整整一出《游园》的时间，像是在等戏唱到最热闹的时候才下手。"

他压低声音，凑近你，你能闻到他嘴里一股陈年的旱烟味："但我听见他念叨了一句——'云袖不死，我女儿永无出头之日。'"

"宝蓝绸缎鞋，"老赵又说了一遍，"这镇上穿得起那种鞋的，只有一家。刘记绸缎庄。"`,
      effects: {
        npcAffinity: 5,
        setFlag: 'zhaoHeardArsonist'
      },
      choices: [createDialogueChoice({
        text: `继续问云袖`,
        next: 'ask_yunxiu_past'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_yunxiu_past: createDialogueNode('ask_yunxiu_past', {
      text: `"云袖那孩子，是最后一个还在唱的。"老赵的声音低了下去，低到你得凑近才听得见，"戏服都烧着了，火苗从水袖烧到袖口，从袖口烧到肩，她还站在台口唱'原来姹紫嫣红开遍'。班主去拉她，被她甩开了。"

"她说：戏开了，就要唱完。唱不完，魂就散不了。"

老赵的眼睛湿了，他用鼓槌擦了擦眼角："她说这话的时候，眼睛是清的。她不是不怕，她是知道——这戏要是散了，她那口气就泄了，泄了就再也提不起来了。她是拿命在唱。"`,
      choices: [createDialogueChoice({
        text: `她为什么非要唱完？`,
        next: 'ask_why_sing'
      }), createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_why_sing: createDialogueNode('ask_why_sing', {
      text: `老赵叹了口气，叹得很长，像是把这三十年的气都叹出来了。

"戏班的规矩。开锣的戏，锣鼓不停，戏就不能散。云袖是角儿，她比谁都信这个。所以她把魂也唱进了戏里，等着有人替她演完柳梦梅。"

"你要是有胆子登台，"他把鼓槌往你手里塞了塞，又收回来，"记住——唱到'则为你如花美眷'时，别看她的眼睛。一看，你就走不了了。她等的不是戏唱完，是有人陪她唱完。"

"还有，"他又补了一句，"别回头。戏班子的规矩，上了台就不能回头。回头，戏就散了，人也散了。"`,
      choices: [createDialogueChoice({
        text: `回去`,
        next: 'start'
      })]
    }),
    ask_help: createDialogueNode('ask_help', {
      text: `老赵端详你很久，久到你以为他不打算说话了。然后他把鼓槌递过来——不是递一只，是一对。枣木的，磨得发亮，握上去冰凉。

"你既然知道是刘掌柜放的火，就该知道这场戏不是唱给人听的。这鼓槌我敲了三十年，三十年没敲过一次正经的开场鼓。今天给你。"

"拿着这对鼓槌，要是台上锣鼓乱了，就敲三下。三下，不能多，不能少。多了，戏子以为你在催场，他们会催得更急；少了，他们以为你不想听，会停下来看你。三下，刚好是'散场'的鼓点。"

他把鼓槌塞进你手里，又抓紧了一下："敲完三下，转身就走，别回头。我三十年没敢敲，是没等到一个能替我敲的人。"`,
      effects: {
        npcAffinity: 10,
        addItem: '老赵的鼓槌'
      },
      choices: [createDialogueChoice({
        text: `收下鼓槌`,
        next: 'start'
      })]
    })
  }
});
