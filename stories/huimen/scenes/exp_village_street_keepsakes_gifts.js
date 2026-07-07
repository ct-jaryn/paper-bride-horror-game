/**
 * 《回门》场景模块：exp_village_street_keepsakes_gifts
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_song_book: createScene('huimen_exp_village_street_song_book', {title:"歌本",text:`你在路边的垃圾堆里，翻到一本旧歌本。

歌本的封面已经烂了，纸页发黄发脆，但里面的字迹还很清楚，是钢笔写的。你翻开一页，是一首叫《兰花花》的民歌：

[faded]"青线线那个蓝线线，蓝格英英的彩，生下一个兰花花，实实的爱死个人……"[/faded]

歌本最后一页写着一行小字，墨色已淡："秀兰最爱唱。民国二十二年。"

[red]你把歌本贴在胸口，像是贴着一颗三十年前还在跳的心。[/red]`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的歌本"},choices:[createChoice({"text":"把歌本给秀兰","next":"huimen_exp_village_street_song_book_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_song_book_give: createScene('huimen_exp_village_street_song_book_give', {title:"还歌",text:`你把歌本放在井沿。

秀兰浮出来，看着歌本，眼泪落了下来，一滴一滴。

"这是我从学堂借来的。"她说，声音哽咽，"我死的时候，还想着要还回去。"

"我帮你还。"你说。

"不用了。"她摇摇头，"让它留在这里吧。这是我活过的证据。"

歌本化作一道光，没入井里。秀兰轻轻哼起了《兰花花》，声音清澈得像山间的溪水。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的歌本"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_embroidery: createScene('huimen_exp_village_street_embroidery', {title:"绣帕",text:`你看见窗台上放着一方绣帕，叠得整整齐齐。

绣帕上绣着一对鸳鸯，针脚细密，栩栩如生，水波纹都绣得清清楚楚。帕角绣着一个"兰"字，娟秀。

你拿起绣帕，发现背面还有一行小字，藏在夹层里：

[faded]"愿与君共白头。"[/faded]

[red]这是秀兰绣给祖父的定情之物。[/red]

帕子上的鸳鸯被血染红了一半，红一道白一道，像是一对被迫分离的恋人。`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的绣帕"},choices:[createChoice({"text":"把绣帕给秀兰","next":"huimen_exp_village_street_embroidery_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_embroidery_return: createScene('huimen_exp_village_street_embroidery_return', {title:"还帕",text:`你把绣帕放进井里。

秀兰接过绣帕，贴在脸上，闭着眼。她的眼泪把帕子上的血迹晕开，像是一朵盛开的花，红艳艳的。

"我绣了一个月。"她说，"想在成亲那天送给他。"

"他收到了。"你说，"在另一个世界。"

秀兰笑了笑，把绣帕系在手腕上，像系一根红绳。

"那我也算嫁过他了。"她说。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的绣帕"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_lost_shoe: createScene('huimen_exp_village_street_lost_shoe', {title:"遗鞋",text:`石板路上有一只绣花鞋，端端正正放着。

不是红绣鞋，是一只普通的青色布鞋，鞋面上绣着一朵兰花，针脚朴素。鞋跟处磨损得很厉害，说明主人经常走路，走了很远的路。

你捡起鞋，发现里面有一张纸条，折得方方正正：

[faded]"秀兰，把这双鞋烧了，让她路上有伴。"[/faded]

[red]这是秀兰的母亲留给她的。[/red]

你捧着鞋，感到一阵心酸。一个母亲，连女儿下葬的鞋都要偷偷准备。`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的布鞋"},choices:[createChoice({"text":"把鞋烧给秀兰","next":"huimen_exp_village_street_lost_shoe_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_lost_shoe_burn: createScene('huimen_exp_village_street_lost_shoe_burn', {title:"街鞋烧鞋",text:`你点燃那只布鞋。

火焰不是红色的，而是淡青色，柔和得像月光。火光里，一个老妇人的身影浮现出来，白发苍苍。

"秀兰，"老妇人说，声音苍老，"娘对不起你，没能保护你。"

秀兰从井里浮出来，看着老妇人，哭喊："娘！"

母女俩隔着火焰相望，却无法相拥，伸出的手穿过了彼此。最后，老妇人的身影化作一缕青烟，和布鞋一起消散。

"我娘来送我了。"秀兰说，眼泪止不住，"我可以走了。"`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的布鞋"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
