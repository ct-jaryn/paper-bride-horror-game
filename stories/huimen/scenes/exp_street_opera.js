/**
 * 《回门》场景模块：exp_street_opera
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_street_opera_tune: createScene('huimen_exp_street_opera_tune', {title:'戏腔',text:`远处传来唱戏的声音。

唱的是《牡丹亭》里的"游园惊梦"，可唱腔越走越调，到了后半段，竟变成了哭腔，一声一哽咽，听得人心里发酸。

你顺着声音来到一座破败的戏台前。戏台上没有演员，只有一件大红戏服在空中飘动，水袖自己挥舞，一甩一收，像是在表演给一个空荡荡的台子看。

戏服的心口处有一道裂缝，缝里渗出红色的水，一滴一滴，落在台板上。

[red]这是一件会自己唱戏的戏服。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"鼓掌叫好","next":"huimen_exp_street_opera_tune_clap","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"问它是不是秀兰","next":"huimen_exp_street_opera_tune_ask","effects":{"yin":2}})]}),
    huimen_exp_street_opera_tune_clap: createScene('huimen_exp_street_opera_tune_clap', {title:'戏散',text:`你鼓起掌来，"啪啪啪"，在空旷的夜色里格外响亮。

戏服停住了。它缓缓转向你，虽然没有头，你却分明感到它在"看"你，那目光带着惊讶，也带着感激。

"好……"一个女子的声音从戏服里传出，幽幽的，"终于有人给我鼓掌了。"

戏服从空中落下，平铺在地上，像一具失去生气的尸体。裂缝里渗出最后一滴红水，然后不动了。

你走近，发现戏服内衬上绣着一个名字："柳红"。

[red]不是秀兰。是另一个被周家害死的女子。[/red]`,effects:{"sanity":-5,"yin":-3,"setFlag":"huimen_exp_found_liu_hong_dress"},choices:[createChoice({"text":"把戏服收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}})]}),
    huimen_exp_street_opera_tune_ask: createScene('huimen_exp_street_opera_tune_ask', {title:'问戏',text:`你问："你是秀兰吗？"

戏服颤抖了一下，发出一声苦笑，笑里带着说不出的苦。

"秀兰？她不在这里。她在井里。"戏服说，"我是柳红，青石镇来的戏子。我和秀兰一样，被周家配了冥婚。"

"青石镇？"你想起村口旧报纸上的话。

"是啊。"柳红说，声音低了下去，"周家的罪，不止这一个小山村。你若救秀兰，也救救我。把我的戏服带出村子，交给一个赶尸匠。他会懂。"`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp_met_liu_hong"},choices:[createChoice({"text":"答应她","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}})]}),
    huimen_exp_street_drum: createScene('huimen_exp_street_drum', {title:'鼓声',text:`你听见一声沉闷的鼓声。

"咚——"

鼓声从地底传来，每响一声，地面就轻微颤动一下，脚底发麻。你趴在地上听，发现鼓声是从村子中央传来的，一声一声，有节奏。

你来到村中央，那里有一口古井，井口盖着一块大石板。石板上画着八卦图，八卦图的中央是一面鼓的图案。

[red]这口井，是村子的"心"。[/red]

鼓声就是从井底传来的，像是有一颗巨大的心脏，在井底跳动。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"掀开石板","next":"huimen_exp_street_drum_open","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"把耳朵贴在石板上听","next":"huimen_exp_street_drum_listen","effects":{"yin":2}})]}),
    huimen_exp_street_drum_listen: createScene('huimen_exp_street_drum_listen', {title:'听鼓',text:`你把耳朵贴在石板上，石板冰凉。

鼓声里混着很多声音：有女人的哭喊，有男人的叹息，有婴儿的啼哭，还有秀兰轻轻哼唱的摇篮曲，一声一声，混在一起。

你听了很久，忽然明白了——这口井不是井，是村子的"记忆"。所有被周家害死的人，都被封在这里，成为维持这个村子运转的"心"。

"你想让我们安静吗？"一个声音问，"那就把我们的心放出去。"`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_heard_village_heart"},choices:[createChoice({"text":"想办法掀开石板","next":"huimen_exp_street_drum_open","effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_drum_open: createScene('huimen_exp_street_drum_open', {title:'开井',text:`你弯下腰，用尽全力掀开石板。

石板下不是井水，而是一面巨大的鼓。鼓面是用人皮糊的，惨白发黄，上面画着密密麻麻的符咒。鼓槌是一根骨头，正自己一下一下地敲击着鼓面。

你伸手去按鼓面，想让它停下来。鼓面却把你吸了进去。

你感到自己在坠落，穿过无数张脸，无数双手，无数个声音。它们抓你、喊你、求你。最后，你落在一个漆黑的空间里，四周一片死寂。

"你来了。"秀兰说，声音空灵，"这是我的心。你怕吗？"

[red]你落在了秀兰的记忆深处。[/red]`,effects:{"sanity":-15,"yin":5},choices:[createChoice({"text":"说不怕","next":"huimen_exp_xiulan_memory_1","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"沉默","next":"huimen_exp_xiulan_memory_1","effects":{"yin":1}})]})
};
