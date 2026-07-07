/**
 * 《回门》场景模块：exp_village_street_keepsakes_mementos
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_comb: createScene('huimen_exp_village_street_comb', {title:"木梳",text:`你在井边发现一把木梳，半埋在青苔里。

木梳上缠着几根长发，乌黑发亮，梳齿间还残留着一点油脂，像主人常用。你把梳子拿起来，发现梳背上刻着"秀兰"二字，字迹娟秀。

[red]这是秀兰常用的梳子。[/red]

你用清水把梳子洗干净，放在井沿，水珠"叮咚"地落进井里。

"你的梳子。"你说。

秀兰浮出来，拿起梳子，轻轻梳了梳自己的长发，一下一下。

"谢谢你。"她说，"三十年没梳头了。"`,effects:{"sanity":5,"yin":-3,"addItem":"秀兰的木梳"},choices:[createChoice({"text":"看她梳头","next":"huimen_exp_village_street_comb_watch","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_comb_watch: createScene('huimen_exp_village_street_comb_watch', {title:"梳发",text:`秀兰坐在井沿上，一下一下梳着自己的头发。

她的动作很慢，很温柔，像是在对待一件珍贵的宝物。梳齿划过发丝，发出细微的"沙沙"声，在夜色里格外清晰。

"我娘说，女子的头发是命。"她说，"要好好梳，不能打结。"

"你现在没有打结了。"你说。

秀兰笑了笑，把梳子递给你："帮我梳一次，好吗？"

你接过梳子，轻轻梳理她的长发。那头发冰凉，却很柔顺，像流水。

"谢谢你。"她说，"这是我三十年来，最像人的时刻。"`,effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的木梳"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box: createScene('huimen_exp_village_street_letter_box', {title:"信箱",text:`你发现一个老旧的信箱，钉在墙边。

信箱已经生锈，铁皮翘起，里面塞满了没有寄出的信，一封一封。你抽出最上面一封，信封上写着"秀兰收"，字迹潦草。

信是你祖父写的，墨色已淡：

[faded]"兰妹，今日母亲将我软禁，无法赴约。但我心已定，明日无论如何都会来接你。等我。"[/faded]

[red]这封信，永远没能寄到秀兰手里。[/red]

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,effects:{"sanity":-5,"yin":1,"addItem":"未寄出的信"},choices:[createChoice({"text":"把信给秀兰","next":"huimen_exp_village_street_letter_box_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box_give: createScene('huimen_exp_village_street_letter_box_give', {title:"信箱信归",text:`你把信交给秀兰。

她读了一遍又一遍，手在发抖，眼泪把信纸打湿，墨迹晕开。

"他来了。"她说，"他真的来了。"

"是的。"你说，"他来了。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，"她说，"不是等他救我，是等他告诉我，他没有放弃我。"

天边的月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"removeItem":"未寄出的信"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_old_broom: createScene('huimen_exp_village_street_old_broom', {title:"旧帚",text:`你发现一把旧扫帚，靠在墙边，落满灰。

扫帚柄上缠着一根红绳，绳上系着一个小布包，鼓鼓的。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，用以束帚，扫尽不祥。"

[red]周家把秀兰的头发绑在扫帚上，让她替周家扫走晦气。[/red]

你解开红绳，把头发取下来。

"你的头发，不该用来扫地。"你说。

头发在你手心里动了动，像是有生命一般。它轻轻缠上你的手指，又松开，像是在向你道谢。`,effects:{"sanity":-5,"yin":2,"addItem":"扫帚上的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
