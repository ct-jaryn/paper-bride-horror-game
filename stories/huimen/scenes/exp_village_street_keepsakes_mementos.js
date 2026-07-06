/**
 * 《回门》场景模块：exp_village_street_keepsakes_mementos
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_comb: createScene('huimen_exp_village_street_comb', {title:"木梳",text:"你在井边发现一把木梳。\n\n木梳上缠着几根长发，梳齿间还残留着一点油脂。你把梳子拿起来，发现梳背上刻着\"秀兰\"二字。\n\n[red]这是秀兰常用的梳子。[/red]\n\n你用清水把梳子洗干净，放在井沿。\n\n\"你的梳子。\" 你说。\n\n秀兰浮出来，拿起梳子，轻轻梳了梳自己的长发。\n\n\"谢谢你。\" 她说，\"三十年没梳头了。\"",effects:{"sanity":5,"yin":-3,"addItem":"秀兰的木梳"},choices:[createChoice({"text":"看她梳头","next":"huimen_exp_village_street_comb_watch","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_comb_watch: createScene('huimen_exp_village_street_comb_watch', {title:"梳发",text:"秀兰坐在井沿上，一下一下梳着自己的头发。\n\n她的动作很慢，很温柔，像是在对待一件珍贵的宝物。梳齿划过发丝，发出细微的声响。\n\n\"我娘说，女子的头发是命。\" 她说，\"要好好梳，不能打结。\"\n\n\"你现在没有打结了。\" 你说。\n\n秀兰笑了笑，把梳子递给你：\"帮我梳一次，好吗？\"\n\n你接过梳子，轻轻梳理她的长发。那头发冰凉，却很柔顺。\n\n\"谢谢你。\" 她说，\"这是我三十年来，最像人的时刻。\"",effects:{"sanity":10,"yin":-10,"removeItem":"秀兰的木梳"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box: createScene('huimen_exp_village_street_letter_box', {title:"信箱",text:"你发现一个老旧的信箱。\n\n信箱已经生锈，里面塞满了没有寄出的信。你抽出最上面一封，信封上写着\"秀兰收\"。\n\n信是你祖父写的：\n\n[faded]\"兰妹，今日母亲将我软禁，无法赴约。但我心已定，明日无论如何都会来接你。等我。\"[/faded]\n\n[red]这封信，永远没能寄到秀兰手里。[/red]\n\n你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。",effects:{"sanity":-5,"yin":1,"addItem":"未寄出的信"},choices:[createChoice({"text":"把信给秀兰","next":"huimen_exp_village_street_letter_box_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_letter_box_give: createScene('huimen_exp_village_street_letter_box_give', {title:"信箱信归",text:"你把信交给秀兰。\n\n她读了一遍又一遍，眼泪把信纸打湿。\n\n\"他来了。\" 她说，\"他真的来了。\"\n\n\"是的。\" 你说，\"他来了。\"\n\n秀兰把信贴在心口，信纸化作一道光，渗入她的身体。\n\n\"我等了三十年，\" 她说，\"不是等他救我，是等他告诉我，他没有放弃我。\"\n\n天边的月亮似乎亮了一些。",effects:{"sanity":10,"yin":-10,"removeItem":"未寄出的信"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_old_broom: createScene('huimen_exp_village_street_old_broom', {title:"旧帚",text:"你发现一把旧扫帚靠在墙边。\n\n扫帚柄上缠着一根红绳，绳上系着一个小布包。你打开布包，里面是一缕头发和一张纸条。\n\n纸条上写着：\"秀兰之发，用以束帚，扫尽不祥。\"\n\n[red]周家把秀兰的头发绑在扫帚上，让她替周家扫走晦气。[/red]\n\n你解开红绳，把头发取下来。\n\n\"你的头发，不该用来扫地。\" 你说。\n\n头发在你手心里动了动，像是有生命一般。它轻轻缠上你的手指，又松开，像是在向你道谢。",effects:{"sanity":-5,"yin":2,"addItem":"扫帚上的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
