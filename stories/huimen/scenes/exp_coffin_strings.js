/**
 * 《回门》场景模块：exp_coffin_strings
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_untie_red_string: createScene('huimen_exp_untie_red_string', {title:"解绳",text:"你解开一根红绳。\n\n红绳落下的瞬间，树上的小布包\"啪\"地一声打开，里面掉出一枚发黑的乳牙。乳牙落地，化为一个透明的小孩。\n\n小孩看着你，没有眼睛，只有两个黑洞。\n\n\"你把我的命还我了？\" 他问。\n\n你点点头。\n\n小孩笑了，露出没有牙的嘴：\"那我也帮你一次。\"\n\n他飘到桑树前，对着树洞吹了一口气。树洞里飞出无数萤火虫，照亮了整棵树。\n\n[red]你看见树干上刻满了名字，都是那些被\"借命\"的女子。[/red]",effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp_freed_child_spirit"},choices:[createChoice({"text":"谢谢小孩，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_cut_red_string: createScene('huimen_exp_cut_red_string', {title:"断绳",text:"你用缠发剪刀剪向手腕。\n\n剪刀没有碰到皮肉，却剪断了一根看不见的红绳。红绳断裂的瞬间，你听见村子里传来无数声惊呼。\n\n\"他剪断了！\"\n\n\"周家的命线断了！\"\n\n你低头看自己的手腕，那里原本有一圈红印，现在红印消失了，只剩下一道浅浅的白痕。\n\n[red]你不再是周家用来抵债的祭品了。[/red]\n\n废墟外传来纸钱纷飞的声音，但你一点也不怕。",effects:{"sanity":10,"yin":-10,"removeItem":"缠发剪刀","setFlag":"huimen_exp_cut_fate_string"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_return_coffin: createScene('huimen_exp_return_coffin', {title:"回堂屋",text:"你回到堂屋。\n\n棺材还摆在正中，倒挂的囍字还在墙上。二叔、三姑、四婶转过头看你，嘴角依然挂着那种统一的笑。\n\n\"想通了？\" 二叔问，\"想通了就拜堂。\"\n\n你握紧拳头。你刚从另一个村子回来，你知道了更多真相。秀兰不是耻辱，是被害的人。周家的债，不该用你的生命来还。\n\n[red]你决定从棺材这条线继续。[/red]",effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"继续主线","next":"ask_coffin","effects":{"yin":1}})]}),
    huimen_exp_return_red_coffin: createScene('huimen_exp_return_red_coffin', {title:"回红棺",text:"你顺着井绳下到井底。\n\n红漆棺材还在，九根桃木钉封着棺盖。你摸了摸胸口的铜钥匙，知道是时候了。\n\n秀兰的三份魂已经在另一个村子归一，但她真正的尸骨和怨念，还封在这口红棺里。\n\n[red]开棺，是结束一切的钥匙。[/red]",effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"继续主线","next":"open_red_coffin","effects":{"yin":1}})]})
};
