/**
 * 《回门》场景模块：exp_final
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_final_confrontation: createScene('huimen_exp_final_confrontation', {title:'最终对质',text:`你回到村中央，那里的空气黏稠得像凝固的血。

周家所有的祖先都站在那里，身影模糊，却带着令人窒息的压迫感。他们一言不发，可你感到无数道目光钉在你身上，像无数根针。

最老的那个祖先缓缓走上前，每一步都踩得地面发闷。他停在你面前："你闹够了没有？"

"没有。"你说，胸口发紧，声音却不抖，"我要带秀兰走，要给所有被周家害死的女子正名。"

"你敢！"祖先们齐声怒吼，声音震得你耳膜嗡嗡作响，"没有这些女子的血，周家早就完了！"

[red]你终于听到了真相：周家的兴旺，是踩着女人的尸骨堆起来的。[/red]

"那周家就完了。"你说，一字一顿，"从今天起，周家不再靠女人续命。"`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"用族谱和她们谈判","next":"huimen_exp_final_choice","condition":{"hasItem":"周家秘录"},"effects":{"yin":-5}}),createChoice({"text":"无视警告，带秀兰走","ending":"huimen_exp_ancestor_judge","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"牵着秀兰的手，静静离开","next":"huimen_exp_final_goodbye","effects":{"yin":-5}})]}),
    huimen_exp_final_choice: createScene('huimen_exp_final_choice', {title:'抉择',text:`你掏出周家秘录，当着所有祖先的面，"嘶啦"一声撕下了记载女子罪名的那一页。

"周家的债，我来还。"你说，"但你们欠她们的清白，我现在就还给她们。"

你把撕下的纸页点燃，火苗蹿起——那不是普通的火，是金色的。火光里，三十七个女子的身影一个接一个浮现出来，她们穿着不同年代的衣裳，却都带着同样疲惫而释然的笑。

"我们自由了。"她们齐声说。

祖先们的身影开始颤抖、扭曲，最后化为灰烬，被金色的火光吹散。

[red]周家的诅咒，从你这一代，彻底终结。[/red]`,effects:{"sanity":20,"yin":-20,"removeItem":"周家秘录","setFlag":"huimen_exp_ended_zhou_curse"},choices:[createChoice({"text":"带秀兰离开","next":"huimen_exp_redemption_loop","effects":{"yin":-5}})]}),
    huimen_exp_final_goodbye: createScene('huimen_exp_final_goodbye', {title:'终别',text:`你决定带秀兰离开。

天边泛起鱼肚白，村子开始崩塌。纸人化为灰烬，红绳寸寸断裂，囍字褪成惨白。你牵着秀兰的手，沿着村口的小路往外走。

秀兰走得很慢，每走几步就回头望一眼。

"舍不得？"你问。

"不是舍不得。"她说，声音很轻，"是在告别。"

她对着渐渐崩塌的村子轻轻说："再见了，我的三十年。"

你们走出村口，第一缕阳光照在你们身上。秀兰的身影开始变淡，像被阳光一点点擦去，但她的笑容很真。

"谢谢你。"她说，"我终于可以走了。"`,effects:{"sanity":20,"yin":-20},choices:[createChoice({text:"带她回家",next:"huimen_exp_redemption_loop",effects:{yin:-5}})]}),
    huimen_exp_final_hug: createScene('huimen_exp_final_hug', {title:'终幕拥抱',text:`你张开双臂，对井水里的秀兰说："我能抱你一下吗？"

秀兰愣住了："你不怕？"

"不怕。"你说。

秀兰从井里慢慢浮出来，一寸一寸靠近你。她的身体冰凉，凉得你打了个寒颤，但你还是伸出手，紧紧抱住了她。

她在你怀里发抖，像是一个受了太多委屈、终于敢哭出来的孩子。

"三十年了，"她说，声音闷在你肩头，"第一次有人抱我。"

你抱得更紧了一些。

"你不会再孤单了。"你说，"无论结局如何，我都在这里。"`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp_hugged_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
