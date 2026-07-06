/**
 * 《回门》村街：祭品与食物相关场景
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_mooncake: createScene('huimen_exp_village_street_mooncake', {title:'月饼',text:`你经过一个院子，桌上摆着一盘月饼。

月饼是红色的，像血染过。你拿起一个，发现月饼上印着"团圆"二字。

"今天是中秋吗？" 你问。

"每天都是中秋。" 一个声音说，"因为秀兰死在中秋前夜。"

[red]原来秀兰是在团圆节前一天被活埋的。[/red]

你把月饼放回去，对着月亮鞠了一躬。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"把月饼带给秀兰","next":"huimen_exp_village_street_mooncake_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_mooncake_give: createScene('huimen_exp_village_street_mooncake_give', {title:'团圆',text:`你捧着月饼来到井边。

秀兰看着月饼，眼泪落了下来。

"我死的那天晚上，本来要吃月饼的。" 她说，"周文说，等月亮圆了，就来接我。"

"月亮圆了很多次了。" 你说，"这次，我陪你吃。"

你把月饼掰成两半，一半放在井沿，一半自己咬了一口。月饼是苦的，但你咽了下去。

秀兰也"吃"了一口。她笑了："甜的。原来团圆是甜的。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_ate_mooncake_with_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_incense_burner: createScene('huimen_exp_village_street_incense_burner', {title:'香炉',text:`你在一座废弃的祠堂前找到一个香炉。

香炉里插着许多香，香都熄灭了。你仔细一看，香头上刻着的不是"福"，而是女子的名字。

"这是周家女人用的香炉。" 秀兰说，"我们生前不能进正祠，只能在这里偷偷烧香。"

你把香炉擦干净，点燃三支香，插了进去。

[red]烟雾袅袅升起，在空中化作许多女子的脸。[/red]

她们朝你笑了笑，然后散去。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_money_pile: createScene('huimen_exp_village_street_paper_money_pile', {title:'纸钱堆',text:`你来到一个院子，院子里堆满了纸钱。

纸钱堆得像小山一样，每一张上都印着"囍"字。你走近，发现纸钱堆里埋着一个人。

是个女子，穿着嫁衣，双手交叠放在胸前，像是睡着了。

"她是秀兰的替身。" 一个声音说，"周家每年给她烧一个替身，替秀兰受过。"

[red]你看着那个和秀兰一模一样的纸人，感到一阵愤怒。[/red]

"她不是秀兰。" 你说，"秀兰不需要替身。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"把纸钱堆烧掉","next":"huimen_exp_village_street_paper_money_pile_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_money_pile_burn: createScene('huimen_exp_village_street_paper_money_pile_burn', {title:'焚堆',text:`你点燃纸钱堆。

火焰冲天而起，纸钱在火中尖叫、扭曲。那个和秀兰一模一样的纸人坐起来，朝你笑了笑，然后化为灰烬。

"谢谢你。" 她说，"我终于不用替谁受过了。"

火光照亮了整个村子。你看见无数纸人从屋里跑出来，朝着火光跪拜。

[red]你烧了周家三十年的谎言。[/red]`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp_burned_paper_money_pile"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_wedding_cake: createScene('huimen_exp_village_street_wedding_cake', {title:'喜糕',text:`你来到一户人家的厨房，桌上摆着一盘点心。

点心是红色的，做成喜字的形状。你拿起一块，发现糕点是纸做的，里面塞着一张黄符。

黄符上写着你的生辰八字。

[red]这是给你准备的喜糕。[/red]

你想起秀兰说过，成亲那天要吃桂花糕。可周家给你准备的，是纸做的喜糕。`,effects:{"sanity":-8,"yin":3,"addItem":"纸喜糕"},choices:[createChoice({"text":"把喜糕烧了","next":"huimen_exp_village_street_wedding_cake_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_wedding_cake_burn: createScene('huimen_exp_village_street_wedding_cake_burn', {title:'焚糕',text:`你点燃纸喜糕。

喜糕在火中卷曲，发出凄厉的尖叫。火光里，你看见一个穿新郎服的纸人在跳舞，那纸人的脸和你一模一样。

"你烧了我！" 纸人尖叫，"你烧了自己！"

"你不是我。" 你说，"我是人，你是周家的替身。"

纸人化为灰烬，喜糕里的黄符也烧成了灰。你感到手腕上的红绳松了一些。`,effects:{"sanity":10,"yin":-10,"removeItem":"纸喜糕"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_rice_bowl: createScene('huimen_exp_village_street_rice_bowl', {title:'饭碗',text:`你在一户人家的灶台上发现一个碗。

碗里装着半碗米饭，米饭已经发黑。碗底压着一张纸条："秀兰的最后一顿饭。"

[red]原来秀兰被活埋前，周家给了她一碗饭，说是送她上路。[/red]

你端起碗，把发黑的米饭倒在地上。

"这不是送你的上路饭。" 你说，"这是周家的罪证。"

米饭落地，化作一群黑色的蚂蚁，四散爬走。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_fish: createScene('huimen_exp_village_street_paper_fish', {title:'纸鱼',text:`你看见一条纸鱼在石板路上跳。

纸鱼是红色的，身上画着鳞片。它一跳一跳地朝井的方向去，像是要回家。

你跟着它来到井边。纸鱼在井沿上停了一下，然后跳进井里。

井水里浮出秀兰的脸，她嘴里咬着那条纸鱼。

"这是我小时候放的纸鱼。" 她说，"每年端午，我都会放一条，许愿能嫁个好人家。"

[red]她的愿望，永远停在了那一年。[/red]

你把手指伸进井水里，轻轻碰了碰纸鱼。纸鱼化作一道红光，绕着秀兰转了一圈，然后消散在水中。

"它回家了。" 秀兰说，"我也该回家了。"`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
