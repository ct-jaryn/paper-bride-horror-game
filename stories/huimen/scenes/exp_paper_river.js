/**
 * 《回门》场景模块：exp_paper_river
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_street_paper_rain: createScene('huimen_exp_street_paper_rain', {title:'纸钱雨',text:`天上忽然下起了纸钱。

不是飘，是下，像雪片一样密集，从黑沉沉的夜空里一片片砸下来。纸钱落在地上，发出"沙沙"的声响，像无数只脚在地上走。

你捡起一张，借着月光一看——上面印着你的脸。不是照片，是用朱砂一笔一笔画上去的，眉眼唇红，和你一模一样。

[red]每一张纸钱上，都是你的脸。[/red]

纸钱越落越多，渐渐埋到你的脚踝。你想跑，却发现纸钱像磁铁一样吸住你的鞋，怎么也抬不起脚。

"别浪费。"一个纸人从纸钱堆里探出头说，"这些都是你的买命钱。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"用打火机烧纸钱","next":"huimen_exp_street_paper_rain_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"把纸钱一张张撕碎","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}})]}),
    huimen_exp_street_paper_rain_burn: createScene('huimen_exp_street_paper_rain_burn', {title:'焚钱',text:`你点燃打火机，火苗舔上脚边的纸钱。

纸钱发出尖利的叫声，像活物一样卷曲、焦黑，最后化为一缕青烟。奇怪的是，那些烟没有散去，而是在空中聚拢，慢慢凝成一个人形。

那人形和你一样高，一样胖瘦，只是没有脸，脸上是一片空白。

"你烧了自己的买命钱。"它说，"现在你的命，没人能买走了。"

它朝你深深鞠了一躬，然后散开了。纸钱雨也停了，地上只剩一层薄薄的灰烬。`,effects:{"sanity":5,"yin":-8},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_paper_boat: createScene('huimen_exp_street_paper_boat', {title:'街缝纸船',text:`你看见石板路上漂着一只纸船。

纸船不是被人放在地上的，而是像在河里一样，顺着石缝往前漂。船头点着一根小蜡烛，烛光摇曳，在湿漉漉的石板上投下摇晃的影子。

你跟着纸船走，它带你来到一口井边。纸船在井沿停了一下，像是在犹豫，然后一头栽进井里。

井底传来一声轻笑，清脆得很。

[whisper]"船到了。"[/whisper]

你探头往里看，井水里浮着许多纸船，密密麻麻，每一只船上都写着一个人的名字。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"也折一只纸船放下去","next":"huimen_exp_street_paper_boat_make","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"离开井边","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_paper_boat_make: createScene('huimen_exp_street_paper_boat_make', {title:'放船',text:`你捡起一张黄纸，折成一只小船。

你在船身上写下"周氏秀兰"四个字，然后把船轻轻放进井里。

纸船没有沉，而是稳稳地漂在水面上，像被一只看不见的手托着。井底那些纸船纷纷让开一条道，让你的船驶向深处。

[whisper]"我收到了。"[/whisper]秀兰说，"谢谢你送的船。"

你感到一阵轻松，像是把某种沉重的东西交给了水。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp_sent_paper_boat"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
