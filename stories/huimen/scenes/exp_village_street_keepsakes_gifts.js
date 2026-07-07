/**
 * 《回门》场景模块：exp_village_street_keepsakes_gifts
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_song_book: createScene('huimen_exp_village_street_song_book', {title:"歌本",text:`你在路边的垃圾堆里，翻到一本旧歌本。

歌本的封面已经烂了，纸页发黄发脆，但里面的字迹还很清楚，是钢笔写的。你翻开一页，是一首叫《兰花花》的民歌：

[faded]"青线线那个蓝线线，蓝格英英的彩，生下一个兰花花，实实的爱死个人……"[/faded]

歌本最后一页写着一行小字，墨色已淡："秀兰最爱唱。民国二十二年。"

[faded]你翻过几页，发现每首歌旁边都批着小字，是秀兰的字迹，娟秀——"这首好听，但太悲，不唱给元宝听""这首爹娘喜欢，过节唱""这首……留到出嫁那天唱"。[/faded]

最后一首叫《回门调》，旁边批着："此曲不祥，不唱。"可歌本的折角，偏偏折在这一页——说明她其实翻过很多次，每次都翻到这一页又合上，合上又翻。

[red]你把歌本贴在胸口，像是贴着一颗三十年前还在跳的心。[/red]`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的歌本"},choices:[createChoice({"text":"把歌本给秀兰","next":"huimen_exp_village_street_song_book_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_song_book_give: createScene('huimen_exp_village_street_song_book_give', {title:"还歌",text:`你把歌本放在井沿。

秀兰浮出来，看着歌本，眼泪落了下来，一滴一滴。

"这是我从学堂借来的。"她说，声音哽咽，"我死的时候，还想着要还回去。"

"我帮你还。"你说。

"不用了。"她摇摇头，"让它留在这里吧。这是我活过的证据。"

[faded]秀兰翻开歌本，翻到折角的那一页——《回门调》。她看了很久，然后用手指轻轻抚平了那个折角。[/faded]

[whisper]"我以前不敢唱这一首。"[/whisper]她说，"村里的老人说，回门调一唱，亡魂就要回家。我怕我一唱，就把周家害我的那些人招回来，又让他们害一遍。"

她清了清嗓子，轻声哼了起来。曲调起得低，慢慢扬上去，每一句"门"字都被她唱得悠长，像是在叫一个永远叫不开的门。井水随着她的调子一圈圈荡开，水面上浮起一片片桂花瓣，不知从哪里飘来的。

歌本化作一道光，没入井里。秀兰轻轻哼起了《兰花花》，声音清澈得像山间的溪水。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的歌本"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_embroidery: createScene('huimen_exp_village_street_embroidery', {title:"绣帕",text:`你看见窗台上放着一方绣帕，叠得整整齐齐。

绣帕上绣着一对鸳鸯，针脚细密，栩栩如生，水波纹都绣得清清楚楚。帕角绣着一个"兰"字，娟秀。

你拿起绣帕，发现背面还有一行小字，藏在夹层里：

[faded]"愿与君共白头。"[/faded]

[red]这是秀兰绣给祖父的定情之物。[/red]

帕子上的鸳鸯被血染红了一半，红一道白一道，像是一对被迫分离的恋人。

[faded]你把帕子翻过来又翻过去，发现夹层里还藏着别的东西——一根头发，长长的，打了个结。结是死结，三十年了也没松。打结的头发，民间叫"同心结"，是恋人私下许了终身才打的。可见当年秀兰和祖父，是动了真心的，不是为了攀周家门楣。[/faded]

[whisper]"帕子上的血，是她自己绣完时咳的。"[/whisper]一个老妇的声音在窗后响起，你回头看，窗后空无一人，只有半截褪色的红绸在风里飘，"她绣了一个月，一边绣一边咳，绣完那天，她把帕子叠好，说'明天给他'。第二天，她就被埋了。"

你攥紧帕子，指节发白。`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的绣帕"},choices:[createChoice({"text":"把绣帕给秀兰","next":"huimen_exp_village_street_embroidery_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_embroidery_return: createScene('huimen_exp_village_street_embroidery_return', {title:"还帕",text:`你把绣帕放进井里。

秀兰接过绣帕，贴在脸上，闭着眼。她的眼泪把帕子上的血迹晕开，像是一朵盛开的花，红艳艳的。

"我绣了一个月。"她说，"想在成亲那天送给他。"

"他收到了。"你说，"在另一个世界。"

秀兰笑了笑，把绣帕系在手腕上，像系一根红绳。

[faded]帕子上的鸳鸯在月光下动了动，仿佛要游起来。那只雄鸳鸯的翅膀，绣了又拆、拆了又绣——你忽然明白，秀兰当年绣这只雄鸳鸯时，绣的是祖父的模样。她想让他"游"起来，游到自己身边来。[/faded]

[whisper]"他给我系过红绳吗？"[/whisper]秀兰忽然问，声音很小，"成亲那天，是要系红绳的。一根红线，系两人手腕，说是要系一辈子。"

"他系了。"你撒了个谎，又觉得自己撒得不算谎——祖父日记里确实写过，他在她下葬那天，一个人系了一根红线在自己手腕上，另一头系在棺材钉上，又把那根线埋进了土里。他系了，只是她看不见。

秀兰把绣帕系在手腕上，红帕垂下来，像一道新娘的盖头边。

"那我也算嫁过他了。"她说。`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的绣帕"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_lost_shoe: createScene('huimen_exp_village_street_lost_shoe', {title:"遗鞋",text:`石板路上有一只绣花鞋，端端正正放着。

不是红绣鞋，是一只普通的青色布鞋，鞋面上绣着一朵兰花，针脚朴素。鞋跟处磨损得很厉害，说明主人经常走路，走了很远的路。

你捡起鞋，发现里面有一张纸条，折得方方正正：

[faded]"秀兰，把这双鞋烧了，让她路上有伴。"[/faded]

[red]这是秀兰的母亲留给她的。[/red]

[faded]你把鞋翻过来，鞋底缝着一层厚厚的布，针脚密得不像鞋底，倒像是藏了什么。你小心地拆开布层，里面夹着一张薄薄的黄纸符——是"避邪符"，民间出远门的人缝在鞋底防小鬼的。一个母亲怕女儿在黄泉路上被小鬼欺负，连鞋底都缝了符。[/faded]

[whisper]"她娘来过井边。"[/whisper]一个声音在你身后说，是那个瞎眼婆婆，"活埋那天夜里，她娘把这只鞋放在井沿，跪了一夜。第二天被人发现，她已经哭瞎了眼。"

你捧着鞋，感到一阵心酸。一个母亲，连女儿下葬的鞋都要偷偷准备。`,effects:{"sanity":-5,"yin":1,"addItem":"秀兰的布鞋"},choices:[createChoice({"text":"把鞋烧给秀兰","next":"huimen_exp_village_street_lost_shoe_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_lost_shoe_burn: createScene('huimen_exp_village_street_lost_shoe_burn', {title:"街鞋烧鞋",text:`你点燃那只布鞋。

火焰不是红色的，而是淡青色，柔和得像月光。火光里，一个老妇人的身影浮现出来，白发苍苍。

"秀兰，"老妇人说，声音苍老，"娘对不起你，没能保护你。"

秀兰从井里浮出来，看着老妇人，哭喊："娘！"

母女俩隔着火焰相望，却无法相拥，伸出的手穿过了彼此。最后，老妇人的身影化作一缕青烟，和布鞋一起消散。

[faded]青烟消散前，在空中停了一停，化作一只布蝴蝶，绕着秀兰的肩膀转了三圈。每一圈都比上一圈慢，最后一圈几乎停下来，停在秀兰的发髻边，像是当年母亲替她梳头时停下的那只手。[/faded]

[whisper]"我娘给我梳过头。"[/whisper]秀兰说，眼泪止不住，"她手粗，梳得疼，可我那时候不懂事，总嫌她梳得不好。后来我自己梳，才梳明白——她的手粗，是因为她替我做了太多事。"

青烟散尽。井沿的青苔上，留下了一小片鞋灰，黑黑的，混着一点没烧尽的鞋面线头。秀兰蹲下去，用手指把那点线头头捻起来，攥在手心，攥得很紧。

"我娘来送我了。"秀兰说，眼泪止不住，"我可以走了。"`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的布鞋"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
