/**
 * 《回门》场景模块：exp_village_street_events
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_laugh: createScene('huimen_exp_village_street_laugh', {title:'笑声',text:`你听见一阵笑声。

笑声从四面八方传来，像是很多人在笑，又像是同一个人在不同的方向笑。你转了一圈，看不见人。

"谁？" 你问。

笑声停了。然后一个声音说："我们在笑你。你居然还想救秀兰。"

"秀兰不值得救。" 另一个声音说，"她是个贱人，勾引周家少爷。"

"她该死。" 又一个声音说。

[red]你认出了这些声音。它们是三十年前围观秀兰被活埋的村民。[/red]

"她不该死。" 你说，"该死的是你们。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"大声反驳他们","next":"huimen_exp_village_street_laugh_refute","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"不去理会","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_laugh_refute: createScene('huimen_exp_village_street_laugh_refute', {title:'村街驳斥',text:`你大喊："秀兰没有勾引任何人！她和你我一样，只是想活下去！你们把她活埋，不是因为她是坏人，是因为你们懦弱！"

笑声变成了尖叫。

"你胡说！"

"我们没错！"

"周家让我们干的！"

"周家让你们干，你们就干？" 你冷笑，"那你们的命，和周家的狗有什么区别？"

笑声彻底消失了。村子里安静了很久。

[red]你感到一种奇异的痛快，像是替秀兰出了一口三十年前的气。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_refuted_villagers"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_cry: createScene('huimen_exp_village_street_cry', {title:'哭声',text:`你听见有人在哭。

不是秀兰的哭，是很多女人的哭，层层叠叠，像潮水一样涌来。你捂住耳朵，哭声还是从指缝里钻进来。

你蹲在地上，感到一阵无力。这些哭声里有绝望，有不甘，有对生命的眷恋。

[whisper]"救救我们……"[/whisper] 她们说，"我们不想做鬼……"

你抬起头，发现街道两旁的墙壁上浮现出许多张脸。都是女子的脸，有的年轻，有的苍老，有的还带着婴儿肥。

她们在墙里哭。`,effects:{"sanity":-12,"yin":3},choices:[createChoice({"text":"对她们说我会记住你们","next":"huimen_exp_village_street_cry_promise","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"逃离哭声","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}})]}),
    huimen_exp_village_street_cry_promise: createScene('huimen_exp_village_street_cry_promise', {title:'记住',text:`你说："我会记住你们。每一个人的名字，每一个人的脸，我都会记住。"

哭声渐渐小了。墙上的脸一个个露出感激的表情，然后慢慢淡去。

"谢谢你……" 她们说，"记住我们，我们就还存在。"

最后消失的那张脸，是一个年轻的姑娘。她朝你笑了笑，那笑容里没有怨，只有释然。

你站起身，感到自己的肩膀上多了一份重量。那是三十七个女子的托付。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_promised_to_remember"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_baby: createScene('huimen_exp_village_street_baby', {title:'婴啼',text:`你听见婴儿的哭声。

哭声很细，像是从很远的地方传来，又像是从你脚边传来。你低头看，石板缝里伸出一只小小的手。

那是一只婴儿的手，苍白，柔软，五指张开，像在抓什么。

[red]这是秀兰未出世的孩子。[/red]

你蹲下身，轻轻握住那只小手。小手很凉，却在你手心里动了动。

"娘……" 一个微弱的声音说，"我要娘……"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"带他去见秀兰","next":"huimen_exp_village_street_baby_to_xiulan","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"松开手","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}})]}),
    huimen_exp_village_street_baby_to_xiulan: createScene('huimen_exp_village_street_baby_to_xiulan', {title:'母子',text:`你捧着那只小手，来到井边。

秀兰的身影立刻浮出来。她看见那只小手，发出一声撕心裂肺的哭喊："我的孩子！"

小手从石板缝里挣脱出来，化作一个透明的小婴儿，飘向秀兰。秀兰接过婴儿，紧紧抱在怀里。

"元宝……我的元宝……" 她哭着说。

婴儿在她怀里笑了，小手抓着她的头发。

[red]这一刻，你不是在救一个怨鬼，而是在帮一个母亲找回孩子。[/red]

秀兰抬起头，泪眼婆娑地看着你："谢谢你。这是我三十年来，第一次抱他。"`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp_reunited_xiulan_and_baby"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_bride_parade: createScene('huimen_exp_village_street_bride_parade', {title:'送亲',text:`你看见一队送亲的队伍从巷子里出来。

不是纸人，而是真正的村民。他们穿着三十年前的衣裳，抬着一顶红轿子，脸上带着喜庆的笑。

可那喜庆里透着诡异。轿帘掀开，里面坐着一个盖着红盖头的女子。女子的手腕上系着红绳，红绳的另一端被四个村民牵着。

[red]这不是送亲，是送葬。[/red]

队伍从你面前经过，你没有动。最后一抬轿的村民看了你一眼，说："小伙子，让让，别挡着新娘子回门。"

回门？死人回什么门？`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"拦住队伍","next":"huimen_exp_village_street_bride_parade_stop","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"让开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"带走柳红的嫁衣","next":"huimen_exp_bride_link_alt"})]}),
    huimen_exp_village_street_bride_parade_stop: createScene('huimen_exp_village_street_bride_parade_stop', {title:'拦轿',text:`你冲到轿子前，掀开轿帘。

里面的女子抬起头，红盖头滑落。她的脸和秀兰一模一样，但眼神空洞，像是一个被操控的傀儡。

"秀兰？" 你喊。

"我不是秀兰。" 她说，"我是下一个秀兰。"

村民们的脸变了，变得纸一样白。他们朝你围过来："你也要上轿吗？"

你抱起轿子里的女子，转身就跑。她的身体很轻，像一张纸。

"谢谢你。" 她说，"我终于可以不用回门了。"`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp_saved_next_bride"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_horse: createScene('huimen_exp_village_street_paper_horse', {title:'纸马',text:`你看见一匹纸马站在路边。

纸马很高，差不多到你的肩膀。它的眼睛是两个黑洞，鼻孔里却喷出白气。

你走近它，它低下头，用鼻子蹭了蹭你的手。纸做的鼻子居然有温度。

"你想带我走？" 你问。

纸马点了点头。

你骑上马背。纸马迈开步子，跑向村口。风在你耳边呼啸，纸马的鬃毛扫过你的脸。

[red]它真的要带你离开这个村子。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"让它带你走","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"跳下马","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_ancestor_shadow: createScene('huimen_exp_village_street_ancestor_shadow', {title:'祖影',text:`你看见一个老人的影子跟在身后。

影子没有主人，就这么贴着地面走。你快它也快，你慢它也慢。

你停下，转身："你是谁？"

影子从地上立起来，化作一个穿长袍的老者。他的脸是模糊的，但下巴有一颗痣——和周家男人一样的痣。

"我是周家的先祖。" 他说，"我来劝你回头。"

"回头？" 你冷笑，"回去做周家的祭品？"

"你可以做周家的救星。" 他说，"娶了秀兰，平息她的怨，周家还能再续百年。"

[red]你明白了，他们从来没有把秀兰当人看，只把她当工具。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"拒绝","next":"huimen_exp_village_street_ancestor_shadow_refuse","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"假装答应","next":"huimen_exp_village_street","effects":{"yin":2}})]}),
    huimen_exp_village_street_ancestor_shadow_refuse: createScene('huimen_exp_village_street_ancestor_shadow_refuse', {title:'拒祖',text:`你说："周家的百年，不该用女人的血来续。"

老者影子的脸扭曲了："逆子！没有周家，哪来的你！"

"没有那些女子，也没有周家。" 你说，"你们吸她们的血，还觉得自己高高在上。"

你掏出打火机，点燃一张黄符，扔向影子。

影子发出一声尖叫，像被火烧的纸一样卷曲、焦黑，最后化为一缕烟。

"周家的根，早就烂了。" 你说。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_refused_ancestor_shadow"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_red_thread: createScene('huimen_exp_village_street_red_thread', {title:'红线',text:`你发现自己的手腕上缠着一根红线。

红线很细，一头系在你手腕上，另一头延伸到街道深处。你顺着红线走，发现它穿过无数纸人的手腕，最后系在一口井上。

这是秀兰的红线。她把所有的纸人都连在自己身上，像是一个巨大的蜘蛛网。

[red]你在这张网里，也是一只猎物。[/red]

可你忽然发现，红线不是绑着你的，而是绕着你。它似乎在保护你，不让纸人靠近。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"顺着红线去井边","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"把红线系紧","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}})]})
};
