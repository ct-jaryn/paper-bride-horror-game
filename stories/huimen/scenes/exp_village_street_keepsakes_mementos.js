/**
 * 《回门》场景模块：exp_village_street_keepsakes_mementos
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_comb: createScene('huimen_exp_village_street_comb', {title:"木梳",text:`你在井边发现一把木梳，半埋在青苔里。

木梳上缠着几根长发，乌黑发亮，梳齿间还残留着一点油脂，像主人常用。你把梳子拿起来，发现梳背上刻着"秀兰"二字，字迹娟秀。

[red]这是秀兰常用的梳子。[/red]

[faded]梳子的齿很密，是民间出嫁女用的那种，叫"密齿梳"，意思是把头发梳得一丝不乱，婚后日子也过得顺顺当当。梳背上除了"秀兰"二字，还刻着一个小小的"囍"——是她自己刻的，刻得很浅，像是不敢让人看见。[/faded]

你用清水把梳子洗干净，放在井沿，水珠"叮咚"地落进井里。

"你的梳子。"你说。

秀兰浮出来，拿起梳子，轻轻梳了梳自己的长发，一下一下。

[whisper]"三十年没梳头了。"[/whisper]她说，声音带着一点不好意思，"我死那天，他们剪了我的发。剪之前，我求他们让我最后梳一次，他们没让。"

"现在没人拦你了。"你说。

秀兰笑了笑，梳得很慢，每一梳都像在补回错过的三十年。`,effects:{"sanity":5,"yin":-3,"addItem":"秀兰的木梳"},choices:[createChoice({"text":"看她梳头","next":"huimen_exp_village_street_comb_watch","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_comb_watch: createScene('huimen_exp_village_street_comb_watch', {title:"梳发",text:`秀兰坐在井沿上，一下一下梳着自己的头发。

她的动作很慢，很温柔，像是在对待一件珍贵的宝物。梳齿划过发丝，发出细微的"沙沙"声，在夜色里格外清晰。

[faded]月光照下来，秀兰的长发披散在肩上，乌黑得发亮。她每梳一下，发梢就卷起一缕细细的水雾，水雾绕着梳齿转一圈，又散开。三十年没梳的头发，居然没打结——也许是井水泡软了，也许是有别的什么在帮她。[/faded]

"我娘说，女子的头发是命。"她说，"要好好梳，不能打结。"

"你现在没有打结了。"你说。

[whisper]"我娘还说过另一句。"[/whisper]秀兰轻声说，"她说，要是有个人愿意替你梳一辈子头，那就是嫁对了人。"

她顿了一下，把梳子递给你："帮我梳一次，好吗？"

你接过梳子，轻轻梳理她的长发。那头发冰凉，却很柔顺，像流水。你梳得很慢，怕扯疼她——可她连一声"疼"都没喊过，三十年前被剪发时也没喊。

"谢谢你。"她说，"这是我三十年来，最像人的时刻。"`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的木梳"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box: createScene('huimen_exp_village_street_letter_box', {title:"信箱",text:`你发现一个老旧的信箱，钉在墙边。

信箱已经生锈，铁皮翘起，里面塞满了没有寄出的信，一封一封。你抽出最上面一封，信封上写着"秀兰收"，字迹潦草。

信是你祖父写的，墨色已淡：

[faded]"兰妹，今日母亲将我软禁，无法赴约。但我心已定，明日无论如何都会来接你。等我。"[/faded]

[red]这封信，永远没能寄到秀兰手里。[/red]

[faded]你把信箱里的信一封封抽出来，每一封都是祖父的字迹，每一封都没寄出。最早的几封还写得工整，到后面字迹越来越乱，有的甚至只写了一行就停下——"今日又被看守，无法出门。"最后一封的日期是秀兰下葬后第三天，信纸上只有四个字："我对不起。"后面是长长的一片空白，笔尖在纸上戳了一个洞。[/faded]

[whisper]"这些信，是我祖父偷偷藏的。"[/whisper]一个苍老的声音从墙后飘出，是个守着信箱的纸扎老仆，"周家发现一封烧一封，发现一封烧一封。这一箱，是他临死前最后藏下的。他说，万一哪天有人来找秀兰，就给谁看。"

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,effects:{"sanity":-5,"yin":1,"addItem":"未寄出的信"},choices:[createChoice({"text":"把信给秀兰","next":"huimen_exp_village_street_letter_box_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box_give: createScene('huimen_exp_village_street_letter_box_give', {title:"信箱信归",text:`你把信交给秀兰。

她读了一遍又一遍，手在发抖，眼泪把信纸打湿，墨迹晕开。

"他来了。"她说，"他真的来了。"

"是的。"你说，"他来了。"

[faded]秀兰一页页翻着信，每翻一页，就哭一声。她哭得很轻，怕惊扰了信纸上的字。读到最后一封"我对不起"时，她停下来，把脸贴在那四个字上，很久很久没动。[/faded]

[whisper]"他写了多少封？"[/whisper]她问。

"一箱。"你说。

"一箱……"她喃喃地重复，"我以为他一封都没写过。我死前，最后一句话是骂他的——我说，他是个骗子，他骗我。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，"她说，"不是等他救我，是等他告诉我，他没有放弃我。"

天边的月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"removeItem":"未寄出的信"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_old_broom: createScene('huimen_exp_village_street_old_broom', {title:"旧帚",text:`你发现一把旧扫帚，靠在墙边，落满灰。

扫帚柄上缠着一根红绳，绳上系着一个小布包，鼓鼓的。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，用以束帚，扫尽不祥。"

[red]周家把秀兰的头发绑在扫帚上，让她替周家扫走晦气。[/red]

[faded]扫帚的帚身是用芦花扎的，本来是黄的，被人用红绳一圈圈缠紧，缠得帚身发黑——那是经年累月扫下来的脏东西压的。你凑近闻，能闻到一股陈年的腥气，混着烧纸的焦味。这把扫帚扫过的，不是普通的灰，是周家几十年的"晦气"——那些被周家害死的人，他们的怨气都被扫到这把帚上。[/faded]

[whisper]"民间说法，女子的发能镇邪。"[/whisper]一个老妇的声音在墙后说，"周家把秀兰的发绑在帚上，是要让她死了还得替他们挡灾。这叫'阴扫'——活人扫帚扫灰，死人扫帚扫魂。"

你解开红绳，把头发取下来。

"你的头发，不该用来扫地。"你说。

头发在你手心里动了动，像是有生命一般。它轻轻缠上你的手指，又松开，像是在向你道谢。`,effects:{"sanity":-5,"yin":2,"addItem":"扫帚上的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
