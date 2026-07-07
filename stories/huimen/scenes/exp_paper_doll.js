/**
 * 《回门》场景模块：exp_paper_doll
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_paper_doll_craftsman: createScene('huimen_exp_paper_doll_craftsman', {title:'扎纸匠',text:`你压下心里的寒意，问老人："你为什么扎我的脸？"

老人终于抬起头。他的眼眶里没有眼珠，只有两团干涸的墨渍，黑洞洞的，像两口枯井。

"不是我要扎。"他说，声音干涩得像砂纸，"是周家要扎。"

"周家每个男丁满三十岁，都要来扎一个自己的替身。替身替你们挡灾，替你们成亲，替你们下井。"

他抬起枯瘦的手，指了指铺子里密密麻麻的纸人："这些，都是周家男人的替身。你祖父的、你父亲的、你二叔的……还有你的。"

[red]你这才看清，那些纸人的下巴，都有一颗和你一样的痣。[/red]

"秀兰等的不是你。"老人说，"她等的是替身。等一个和她一样，被活埋在纸里的魂。"`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp_learned_doll_substitute"},choices:[createChoice({"text":"烧掉铺子里所有纸人","next":"huimen_exp_burn_all_dolls","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"拒绝扎替身，离开铺子","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-5}}),createChoice({"text":"答应扎一个替身","ending":"huimen_exp_paper_doll","effects":{"sanity":-20,"yin":10}})]}),
    huimen_exp_paper_doll_chase: createScene('huimen_exp_paper_doll_chase', {title:'纸人追',text:`你转身想跑，可铺子里的纸人全都动了。

它们的关节发出"咯吱咯吱"的声响，像一群刚学会走路的傀儡，摇摇晃晃。它们没有追你，而是先围住了门口，一排排站着，把出去的路堵得死死的。

"别走。"它们一起开口，声音重叠在一起，"脸还没画完。"

你退到柜台后面，手碰到了一摞黄纸。黄纸上印着人脸的轮廓，像面膜一样，等着被贴上去。

你抓起一把黄纸朝它们扔去。纸人们停住了，开始争抢地上的黄纸，把它们往自己空白的脸上贴。

[red]每一张纸脸贴上去，都变成了你的样子。[/red]

你趁机从窗户口翻了出去，身后传来纸人们满足的笑声。`,effects:{"sanity":-10,"yin":3,"visual":"paper-doll","visualDuration":3000},choices:[createChoice({"text":"拼命跑回村街","next":"huimen_exp_village_street","effects":{"yin":2}}),createChoice({"text":"躲进旁边的巷子","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"追上那个纸人，把它和同伴一起烧了","next":"huimen_exp_burn_dolls_alt"})]}),
    huimen_exp_burn_paper_face: createScene('huimen_exp_burn_paper_face', {title:'焚面',text:`你摸出打火机，点燃了秀兰的纸脸。

火苗舔上纸面的瞬间，纸脸发出一声凄厉的尖叫，那声音不是秀兰的，而是无数女子叠加在一起的哭声，一声叠着一声。

火光里，你看见许多张脸在旋转。有秀兰、有祖母、有许多你不认识的女子。她们的脸在火中扭曲、挣扎，最后化为一缕缕青烟，飘向屋顶。

铺子里的纸人突然安静下来。它们放下手里的黄纸，齐刷刷地转向你，然后——

[red]一起跪下了。[/red]

老人在柜台后面叹了口气："你烧了她们的脸，她们就自由了。可周家，不会放过你。"`,effects:{"sanity":5,"yin":-10,"removeItem":"秀兰的纸脸","setFlag":"huimen_exp_burned_paper_faces"},choices:[createChoice({"text":"离开纸扎铺","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_burn_all_dolls: createScene('huimen_exp_burn_all_dolls', {title:'焚铺',text:`你点燃了铺子里的纸人。

火势蔓延得很快。纸马、纸轿、纸房子，还有那一排排长着你的脸的纸人，都在火中扭曲、尖叫、化为灰烬。火光映红了半条街。

你站在火中，感到一种奇异的解脱，像是身上有什么东西在燃烧中松开了。

[scream]"你烧的是你自己！"[/scream]老人在火外大喊，"你烧的是周家男丁的命！"

你低头一看，发现自己的手正在变纸，变薄，变脆，变白。火焰顺着你的指尖往上爬，却不烫，只让你觉得轻，轻得像要飘起来。

你明白得太晚了。`,effects:{"sanity":-20,"yin":10},ending:'huimen_exp_paper_doll'}),
    huimen_exp_paper_doll_alt: createScene('huimen_exp_paper_doll_alt', {title:'纸人堂',text:`你走近那排纸人，发现其中一个空位。纸扎匠正在往那个空位上贴一张新的脸——眉眼分明，神情木然。

那是你的脸。

你想起村里的规矩：纸人替命。周家欠的债，需要一个活人来还。而你就是被选中的那一个。

你想动，却动弹不得。红绸花别上你的胸口，喜服披在你的肩上，纸扎的冠戴在你的头上。

李婆笑着对围观的孩子们说："看，新郎官来了。"

你也跟着笑。纸人是不会哭的。`,choices:[createChoice({"text":"成为纸人","ending":"paperDoll"})]})
};
