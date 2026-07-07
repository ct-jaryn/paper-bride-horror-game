/**
 * 《回门》村街：祭品与食物相关场景
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_mooncake: createScene('huimen_exp_village_street_mooncake', {title:'月饼',text:`你经过一个院子，桌上摆着一盘月饼。

月饼是红色的，红得像血染过，在月光下泛着诡异的光。你拿起一个，发现月饼上印着"团圆"二字，金粉剥落。

"今天是中秋吗？"你问。

"每天都是中秋。"一个声音说，幽幽的，"因为秀兰死在中秋前夜。"

[red]原来秀兰是在团圆节前一天被活埋的。[/red]

[faded]月饼的馅露出来一半，不是普通的豆沙或莲蓉，而是一团暗红色的、黏稠的东西，闻着像血腥，又像糖浆烧焦的味道。你凑近看，那馅里裹着一根细细的红线——是当年周家绑秀兰手腕的红绳，被一起埋进了月饼模子里，三十年没人动过。[/faded]

[whisper]"周家每年中秋都摆这一盘。"[/whisper]那个瞎眼婆婆不知什么时候站在院门口，"说是给秀兰过节，其实是怕她怨气重，节里出来闹。摆一盘，意思就是'你也过节，别出来'。"

你把月饼放回去，对着月亮鞠了一躬。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"把月饼带给秀兰","next":"huimen_exp_village_street_mooncake_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_mooncake_give: createScene('huimen_exp_village_street_mooncake_give', {title:'团圆',text:`你捧着月饼来到井边。

秀兰看着月饼，眼泪落了下来，一滴一滴。

"我死的那天晚上，本来要吃月饼的。"她说，"周文说，等月亮圆了，就来接我。"

"月亮圆了很多次了。"你说，"这次，我陪你吃。"

你把月饼掰成两半，一半放在井沿，一半自己咬了一口。月饼是苦的，苦得发涩，但你咽了下去。

秀兰也"吃"了一口。她笑了："甜的。原来团圆是甜的。"

[faded]秀兰"吃"月饼的时候，月饼在她手里慢慢变透明，里面的馅化成一团红光，渗进她的手心。她吃得很慢，每一口都细嚼慢咽，像是要把三十年错过的中秋都补回来。[/faded]

[whisper]"我死那晚，"[/whisper]她说，"井口上飘着半块月饼，是周文偷偷扔下来的。我没敢吃——我怕里面有药。后来我才知道，那是他唯一能做的。他连送一块月饼都要偷偷的，像做贼。"

月亮在井水里晃，晃成两个。一个挂在天上，一个沉在井底，被秀兰捧在手里，亮得发烫。

"原来团圆是甜的。"她又重复了一遍，声音很轻，像是说给自己听。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_ate_mooncake_with_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_incense_burner: createScene('huimen_exp_village_street_incense_burner', {title:'香炉',text:`你在一座废弃的祠堂前，找到一个香炉。

香炉是青铜的，长满绿锈，里面积着厚厚的香灰，插着许多香，香都熄灭了。你仔细一看，香头上刻着的不是"福"，而是女子的名字，一个一个。

"这是周家女人用的香炉。"秀兰说，"我们生前不能进正祠，只能在这里偷偷烧香。"

你把香炉擦干净，点燃三支香，插了进去。

[faded]香一燃起来，香灰开始自己翻动，"沙沙"地响。每一撮灰里都浮出一个名字，飘到空中转一圈，又落回香炉。这些名字都是周家历代"处置"过的女子，她们生前连烧香的资格都没有，只能把自己的名字塞进香灰里，让后人点香时能捎带念一句。[/faded]

[red]烟雾袅袅升起，在空中化作许多女子的脸。[/red]

[whisper]"有人点香了。"[/whisper]那些脸轻声说，"有人记得我们了。"

她们朝你笑了笑，然后散去。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_money_pile: createScene('huimen_exp_village_street_paper_money_pile', {title:'纸钱堆',text:`你来到一个院子，院子里堆满了纸钱，像小山。

纸钱堆得像小山一样，每一张上都印着"囍"字，红得刺眼。你走近，发现纸钱堆里埋着一个人。

是个女子，穿着嫁衣，双手交叠放在胸前，像是睡着了，脸色蜡黄。

"她是秀兰的替身。"一个声音说，"周家每年给她烧一个替身，替秀兰受过。"

[faded]替身的脸做得极像秀兰，连眉眼的那颗小痣都点上了。可你蹲下来细看，发现她的指甲是新的——纸人的指甲是画上去的，可这一个，指甲是真的，是从活人手上剪下来的。周家为了"真"，连活人的指甲都敢剪。[/faded]

[whisper]"替身每隔十年烧一次。"[/whisper]那个声音又说，"烧之前，要从周家选一个丫鬟，剪一缕发、一片甲，埋进替身里。意思是'以活补死'，让替身更像秀兰，怨气才认。三十年，烧了三个，烧了三个丫鬟的发和甲。"

你看着那个和秀兰一模一样的纸人，感到一阵愤怒。她不是替身，她是又一个被周家剪过的女子。

"她不是秀兰。"你说，"秀兰不需要替身。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"把纸钱堆烧掉","next":"huimen_exp_village_street_paper_money_pile_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_money_pile_burn: createScene('huimen_exp_village_street_paper_money_pile_burn', {title:'焚堆',text:`你点燃纸钱堆。

火焰冲天而起，纸钱在火中尖叫、扭曲，"噼里啪啦"地响。那个和秀兰一模一样的纸人坐起来，朝你笑了笑，然后化为灰烬。

"谢谢你。"她说，"我终于不用替谁受过了。"

火光照亮了整个村子。你看见无数纸人从屋里跑出来，朝着火光跪拜，一排排跪倒。

[faded]跪拜的纸人里，有几个不是纸做的，是真人。他们穿着周家的衣裳，戴着周家的孝，跪在地上，额头磕出一片青黑——他们是被周家选中"陪葬"的活人，等着替周家挡灾。三十年来，周家每办一次大事，就要"用"几个人。[/faded]

[whisper]"我们也是替身。"[/whisper]跪着的一个老妇抬起头，脸上是麻木的平静，"我们替周家挡灾，挡了一辈子，挡到死。你烧了这堆，我们就不用再替了。"

火光越来越亮，纸灰像雪一样从天上落下来，落在你肩上，烫得你一缩。

[red]你烧了周家三十年的谎言。[/red]`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp_burned_paper_money_pile"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_wedding_cake: createScene('huimen_exp_village_street_wedding_cake', {title:'喜糕',text:`你来到一户人家的厨房，桌上摆着一盘点心。

点心是红色的，做成喜字的形状，一个一个码得整齐。你拿起一块，发现糕点是纸做的，一捏就瘪，里面塞着一张黄符。

黄符上写着你的生辰八字。

[red]这是给你准备的喜糕。[/red]

[faded]厨房里还有别的——灶台上一口大锅，锅里煮着红米饭，红得发黑，还在"咕嘟咕嘟"地冒泡。灶神像被红布蒙住眼睛，意思是"看不见"，免得灶神上天告状。民间婚事里，灶神是要看见喜事的，可周家的"喜"是冥婚，怕灶神看了生气，就蒙了眼。[/faded]

[whisper]"这是冥婚的喜糕。"[/whisper]一个老厨娘的声音从灶后飘出，"冥婚的喜糕是纸做的，给活人吃，是定魂——吃了，你的魂就被周家定住了，跑不掉了。"

你想起秀兰说过，成亲那天要吃桂花糕。可周家给你准备的，是纸做的喜糕。`,effects:{"sanity":-8,"yin":3,"addItem":"纸喜糕"},choices:[createChoice({"text":"把喜糕烧了","next":"huimen_exp_village_street_wedding_cake_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_wedding_cake_burn: createScene('huimen_exp_village_street_wedding_cake_burn', {title:'焚糕',text:`你点燃纸喜糕。

喜糕在火中卷曲，发出凄厉的尖叫，"嘶嘶"地响。火光里，你看见一个穿新郎服的纸人在跳舞，那纸人的脸和你一模一样，咧嘴笑着。

"你烧了我！"纸人尖叫，"你烧了自己！"

"你不是我。"你说，"我是人，你是周家的替身。"

[faded]纸人跳舞的动作越来越快，纸皮被火烧得"噼啪"响，每一下都撕下一片脸皮——撕下来的脸皮在空中飘，又拼回原处，再被烧，再拼，反反复复，像是周家三十年来一直在"造"你这种替身，造一个烧一个，烧一个再造一个。[/faded]

[whisper]"这一炉，烧了三十年。"[/whisper]纸人跳着跳着，声音慢了下来，"周家每选一个'新郎'，就烧一炉喜糕。你是第七个被选中的。前面六个，都吃了喜糕，成了周家的鬼新郎。"

纸人化为灰烬，喜糕里的黄符也烧成了灰。你感到手腕上的红绳松了一些。`,effects:{"sanity":10,"yin":-10,"removeItem":"纸喜糕"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_rice_bowl: createScene('huimen_exp_village_street_rice_bowl', {title:'饭碗',text:`你在一户人家的灶台上发现一个碗，落着灰。

碗里装着半碗米饭，米饭已经发黑，结了硬壳。碗底压着一张纸条："秀兰的最后一顿饭。"

[red]原来秀兰被活埋前，周家给了她一碗饭，说是送她上路。[/red]

[faded]碗边搁着一双筷子，筷子是断了又接的，接处缠着黑线。民间说法，断筷子给死人用，意思是"断了阳间的饭"。米饭上插着一根香，烧了一半就灭了，香灰落在饭上，把"团圆"那一撮米饭染成了灰。[/faded]

[whisper]"这碗饭，她没吃。"[/whisper]一个老妇的声音从灶后飘出，"她说，她要留着，等周文来接她那天再吃。可周文没来，饭就放到了今天。"

你端起碗，把发黑的米饭倒在地上。

"这不是送你的上路饭。"你说，"这是周家的罪证。"

米饭落地，化作一群黑色的蚂蚁，四散爬走，"沙沙"地响。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_fish: createScene('huimen_exp_village_street_paper_fish', {title:'纸鱼',text:`你看见一条纸鱼在石板路上跳，"啪嗒啪嗒"地响。

纸鱼是红色的，身上画着鳞片，栩栩如生。它一跳一跳地朝井的方向去，像是要回家。

你跟着它来到井边。纸鱼在井沿上停了一下，然后"扑通"一声跳进井里。

井水里浮出秀兰的脸，她嘴里咬着那条纸鱼，像含着糖。

[faded]纸鱼在她嘴里慢慢化开，红颜料染了一井的水，红艳艳的，像一条染血的丝带。她"吃"得很慢，每"咽"一口，水就清一分，等到纸鱼吃完，井水又恢复了原来的黑。[/faded]

[whisper]"这是我小时候放的纸鱼。"[/whisper]她说，"每年端午，母亲都给我折一条，让我放进河里，许愿能嫁个好人家。我放了十年，一条都没回过河，全沉了。母亲说，沉了是好事，意思是愿望被河神收了。"

[red]她的愿望，永远停在了那一年。[/red]

你把手指伸进井水里，轻轻碰了碰纸鱼。纸鱼化作一道红光，绕着秀兰转了一圈，然后消散在水中。

"它回家了。"秀兰说，"我也该回家了。"`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
