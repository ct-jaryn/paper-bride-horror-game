/**
 * 《回门》场景模块：main_ritual
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_meaning: createScene('ask_meaning', {title:'李婆的护身符',text:`李婆不回答，只是从怀里掏出一张黄纸，塞到你手里。

那黄纸叠得很整齐，边角都磨得发毛，像是被人揣了很久。她的手抖得厉害，塞的时候差点没塞准。你接过黄纸，纸是凉的，凉得像刚从井里捞出来。

黄纸上画着一道符，朱砂勾勒的纹路已经有些褪色，褪得像一道旧伤。符纸背面写着一行小字：

[faded]"子时之前，贴在心口。否则，她会认出你。"[/faded]

"这是什么意思？谁会认出我？"

李婆摇摇头，转身消失在雨雾里。她的背影佝偻，但走路没有声音，像飘在地上一样。雨雾很浓，她一走进去就看不见了，只剩那盏白灯笼的光，越来越远，越来越淡。

你握着那张符，手心全是冷汗。`,effects:{"addItem":"护身符","sanity":-5,"yin":2},choices:[createChoice({"text":"把符贴身收好","next":"huimen_paper_doll_warning","effects":{"sanity":5}}),createChoice({"text":"觉得晦气，把符扔了","next":"huimen_paper_doll_warning","effects":{"sanity":-5,"yin":5,"removeItem":"护身符"}})]}),
    to_old_house: createScene('to_old_house', {title:'周家老宅',text:`月光把青砖照得发白，老宅的门洞开着，像一张黑洞洞的嘴。

门洞很深，深得看不见底，只看见里面一点昏黄的烛光。烛光摇曳，把堂屋里的影子投到门口，影子里有人，人影很长，长得拖到门槛外。

堂屋里点着两根红蜡烛，烛火摇曳，把墙上的人影拉得很长。一口漆黑的棺材摆在正中，棺材上却没有常见的"奠"字，而是贴着一个倒挂的"囍"。那"囍"字写得很歪，像是写的人手在抖，朱砂的墨都淌了，淌成一道道红，像血。

[red]红烛、白幡、黑棺、囍字。[/red]

四种颜色撞在一起，刺得你眼睛发疼。红是喜，白是丧，黑是棺，囍是冥婚——这堂屋里，喜丧不分，生死不分。

棺材前跪着几个人，是你的叔伯婶娘。他们听见脚步声，齐刷刷地转过头来。转头的动作很齐，齐得像一声令下同时抬头的鸟群。

"回来啦。" 二叔说。

"回来啦。" 三姑说。

"回来啦。" 四婶说。

他们的嘴角都向上弯着，露出同样的弧度，像是用同一把尺子量出来的。那笑是画的，画得很均匀，均匀得不像是人笑出来的。

你注意到，他们每个人的手腕上，都系着一根红绳。红绳的另一端，消失在棺材下面。`,textVariants:[{condition:{custom:(state)=>state.history.lastIndexOf('huimen_old_house_gate')>Math.max(state.history.lastIndexOf('safe_house'),state.history.lastIndexOf('huimen_exp_return_old_house'),state.history.lastIndexOf('old_house_door_locked'))},text:`你推开贴着生辰八字黄符的正门，迈进老宅前院。`},{condition:{custom:(state)=>state.history.lastIndexOf('safe_house')>Math.max(state.history.lastIndexOf('huimen_old_house_gate'),state.history.lastIndexOf('huimen_exp_return_old_house'),state.history.lastIndexOf('old_house_door_locked'))},text:`你刚从西侧偏房出来，穿过回廊，回到前院。`},{condition:{custom:(state)=>state.history.lastIndexOf('huimen_exp_return_old_house')>Math.max(state.history.lastIndexOf('huimen_old_house_gate'),state.history.lastIndexOf('safe_house'),state.history.lastIndexOf('old_house_door_locked'))},text:`你穿过村街，从老宅侧门回到院中。`},{condition:{custom:(state)=>state.history.lastIndexOf('old_house_door_locked')>Math.max(state.history.lastIndexOf('huimen_old_house_gate'),state.history.lastIndexOf('safe_house'),state.history.lastIndexOf('huimen_exp_return_old_house'))},text:`你翻过贴着血印名封的侧门，落入老宅的院子里。门上的巴掌印在你身后慢慢合拢，像两只眼睛闭上了。`},{condition:{custom:(state)=>!['huimen_old_house_gate','safe_house','huimen_exp_return_old_house','old_house_door_locked'].some(s=>state.history.includes(s))},text:`你翻过后院的矮墙，落入老宅的院子里。`}],effects:{"sanity":-10,"yin":5,"visual":"flicker","visualDuration":3000},choices:[createChoice({"text":"迈进堂屋","next":"huimen_observe_hall"}),createChoice({"text":"观察手腕上的红绳","next":"huimen_observe_hall","effects":{"sanity":-8}}),createChoice({"text":"不进灵堂，先去西侧偏房看看","next":"safe_house"}),createChoice({"text":"先不进灵堂，在老宅四周调查","next":"investigate_old_house"}),createChoice({"text":"已知真相则潜回后院","next":"sneak_back_yard","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":1}}),createChoice({"text":"时辰已近，去井边","next":"shichen_zi_entry","condition":{"timeAfter":1320},"hidden":true,"effects":{"time":30}})],hallucination:'[whisper]棺材下面传来婴儿的啼哭声，但只持续了一秒。[/whisper]'}),
    talisman_against_rope: createScene('talisman_against_rope', {title:'符镇红绳',text:`你摸到胸口的护身符，那是离家时母亲塞给你的。

符纸贴着皮肤，凉凉的，像一片湿叶子。你把护身符按在手腕上，冰凉的黄符纸贴着皮肤，发出淡淡的艾草香。那香很淡，淡得像一缕烟，却让那些原本像蛇一样朝你游来的红绳，像是被烫到一般，猛地缩了回去。

二叔脸色变了。他的手腕上，红绳正疯狂地扭动，像是要挣脱皮肉。那红绳扭得很凶，扭得他皮肉都翻出来了，血顺着手腕往下淌，他却像不觉得疼。

"你……你哪来的这东西？" 他的声音发颤，颤得像一片在风里抖的纸。

你没有回答。你看见红绳缩回棺材底下，棺材板发出一声闷响，"咚"的一声，像是有什么东西在棺材底下应了一声。

[whisper]"别想逃。"[/whisper] 秀兰的声音从棺材里传出来，"子时还没到。"[/whisper]`,effects:{"sanity":5,"yin":-10,"setFlag":"talisman_used"},choices:[createChoice({"text":"趁红绳退缩，冲向小门","next":"small_door"}),createChoice({"text":"追问二叔护身符为何有效","next":"ask_talisman_meaning","effects":{"sanity":-5}})]}),
    ask_talisman_meaning: createScene('ask_talisman_meaning', {title:'符从何来',text:`你举着那张已经发黑的符纸，质问二叔："这东西是从哪来的？为什么能镇住红绳？"

二叔盯着符纸，手腕上的红绳还在扭动，血顺着袖口滴到青砖上。他像是没听见你，又像是听见的不是一句话，而是一声雷。

三姑替他开口，声音压得比烛芯还低："三十年前，秀兰被抬进井底那夜，你祖母请了一位过路的道人。道人给了她三张符，说一张镇棺，一张镇井，还有一张……"她顿了顿，目光落在你手里那张已经发黑的黄纸上，"留给将来回门的周家后人。"

"她早知道我会回来？"

"她只知道，"二叔终于出声，声音沙哑，"欠债的，总得有人还。"

符纸在你手里碎成几片，像烧尽的纸钱。你忽然明白，这护身符从来不是给你的——是给你周家血脉里，那个必须替祖父还债的人。`,effects:{"sanity":-5,"yin":2,"removeItem":"护身符"},choices:[createChoice({"text":"趁他们还在畏惧，冲向小门","next":"small_door"}),createChoice({"text":"退到堂屋中央，再找机会","next":"run_away_coffin"})]}),
    swear_justice: createScene('swear_justice', {title:'坟前誓',text:`你跪在坟前，重重磕了三个头。

膝盖磕在泥里，泥是湿的，凉得你膝盖都麻了。你每磕一个头，额头都磕在石头上，磕得"咚咚"响，响得像在敲钟。

"秀兰，我周家欠你的，我会还。你的尸骨在哪里，我带你离开这里。"

话音刚落，一阵温暖的风拂过你的后颈。那风不像刚才那样阴冷，反而带着一点若有若无的桂花香。桂花香很淡，淡得像一缕烟，却让你心里一暖。

无字碑上的血字慢慢消失了，取而代之的是一行新字。那字是慢慢浮出来的，一笔一画都红得发亮：

[faded]"井底红棺，子时开。以我心头血，解你半生冤。"[/faded]

你摸了摸胸口。那里不知道什么时候，多了一把生锈的铜钥匙。钥匙是凉的，凉得像铁，却贴着你的皮肤，像是在等你用它。

钥匙柄上刻着一个"周"字，和你家老宅门上那把锁一模一样。`,effects:{"addItem":"铜钥匙","sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"去井底开棺","next":"huimen_red_coffin_discovery"}),createChoice({"text":"先去井底取回骨殖","next":"find_bones"})]}),
    find_bones: createScene('find_bones', {title:'井底寻骨',text:`你来到老宅后院，那口老井在月光下泛着幽光。

井水是黑的，黑得像一块墨。井沿上的铜镜碎片还在，碎片很多，每一片都映着一弯残月。

但镜面里的倒影不是你，而是一个盖着红盖头的女子。那女子在镜里，也看着你。她朝你伸出手，指向井底。那手指白得像一根骨头，指的方向是黑的。

你找来井绳，系在腰上，慢慢往井底降。井绳粗得硌手，每往下一寸，空气就凉一分。

井水冰凉刺骨。越往下，水越红，像是稀释的血。井壁上刻着密密麻麻的符咒，都是镇魂用的。那些符咒是朱砂写的，朱砂被水泡得发黑，却还看得清笔画。

终于，你的脚碰到了硬物。

那是一口红漆棺材，棺盖上钉着九根桃木钉。`,textVariants:[{condition:{custom:(state)=>state.history[state.history.length-1]==='swear_justice'},text:`你刚从无字碑前赶来，铜钥匙在胸口贴着皮肤，凉得像在催你。月亮偏西了，月光把后院照得惨白。`},{condition:{custom:(state)=>state.history[state.history.length-1]==='huimen_red_coffin_discovery'},text:`你刚从井底上来，知道红棺就在那里。这一回你没有犹豫，重新系好井绳。`},{condition:{custom:(state)=>state.history[state.history.length-1]==='run_away_coffin'},text:`你刚从堂屋逃出来，心还跳得厉害。可你明白，井底才是该去的地方。`},{condition:{custom:(state)=>state.history[state.history.length-1]==='shichen_chou_entry'},text:`丑时的村街静得吓人，你一路赶到井边，每一步都像踩在秀兰走过的路上。`}],effects:{"sanity":-20,"yin":12,"visual":"blood","visualDuration":3000},choices:[createChoice({"text":"继续探查红棺","next":"huimen_red_coffin_discovery","effects":{"yin":1}}),createChoice({"text":"拔出桃木钉，打开棺材","next":"open_red_coffin","condition":{"hasItem":"铜钥匙"},"effects":{"yin":2}}),createChoice({"text":"没有钥匙，只能徒手拔钉","next":"pull_nails_barehand","effects":{"sanity":-15,"yin":7}})]}),
    give_letter: createScene('give_letter', {title:'递字条',text:`你在红棺前跪下，把秀兰的嫁衣、骨殖和孩子的骸骨一起包好。然后转过身，把手中能证明真相的东西递向红光里传来的声音——不管是字条、照片、虎头鞋，还是那一小截骸骨。

手伸出去，伸进一片红光里。那红光是暖的，暖得你手指都松了一点。

秀兰就站在井底的红光里。她没有盖头，脸色苍白，但眉眼清秀，不像鬼，更像一个受了委屈的姑娘。她的眉眼很淡，淡得像被水泡过的画，却清清楚楚，连眼角那颗泪痣都看得见。

她接过字条，看了一遍，又看了一遍。看第一遍时，她没动。看第二遍时，她的手开始抖，抖得字条都跟着抖。

"三十年，" 她说，声音很轻，轻得像怕惊动井底那些睡着的人，"我等了三十年，就想听他亲口说一句对不起。"

她的眼泪是红色的，滴在字条上，把"对不起"三个字晕成了一片血红。那血红慢慢洇开，洇成一片，像一朵花。

"你走吧。" 秀兰说，"带上我的嫁衣和孩子的骨头，把我埋在后山。我要看着这个村子，看着他们一个一个来找我赎罪。"

井水开始上涨，你抱着红嫁衣和骸骨，被一股力量托出了井口。`,effects:{"sanity":20,"yin":-30,"setFlag":"xiulanMercy","addItem":["秀兰的嫁衣","秀兰的骨殖","孩子的骸骨"]},choices:[createChoice({"text":"向她承诺正名与安葬","next":"huimen_xiulan_forgiveness","effects":{"yin":1}})]}),
    small_door: createScene('small_door', {title:'喜房',text:`你推开那扇小门。

门是木的，木很旧，旧得一推就"吱呀"地响。门后是一间喜房，比堂屋小，却点着更多的烛。红烛高照，烛火把整间屋子染成红色，红得像血。

床上坐着一个盖着红盖头的新娘。盖头是大红的，绣着鸳鸯，鸳鸯的眼睛却绣歪了，一只往左，一只往右。新娘坐得很直，直得像一根钉子钉在床上，一动不动。

听见门响，新娘缓缓转过头。她的脖子发出"咯吱咯吱"的声音，像是很久没动过，关节都锈了。那声音又干又涩，听得你头皮发麻。

"夫君……" 她说，声音甜甜的，甜得发腻，"你来了。"

盖头滑落。你先看见下巴，然后是嘴唇——那唇色红得不自然。再往上看，眉眼的轮廓一寸寸熟悉起来，熟悉得让你想后退。最后你看清了整张脸。那脸白得像纸，却和你照镜子时一模一样。

你忽然意识到，红盖头下的不是祖母本人，是周家规矩借她的形，继续守这场亲。`,effects:{"sanity":-50,"yin":20,"visual":"shake"},choices:[createChoice({"text":"把护身符按在面前","next":"small_door_talisman_escape","condition":{"hasItem":"护身符"},"effects":{"sanity":10,"yin":-15,"removeItem":"护身符","setFlag":"talisman_used"}}),createChoice({"text":"举起铜镜碎片照她","next":"small_door_mirror_escape","condition":{"hasItem":"铜镜碎片"},"effects":{"sanity":5,"yin":-10}}),createChoice({"text":"撒一把糯米","next":"small_door_rice_escape","condition":{"hasItem":"糯米"},"effects":{"yin":-15,"removeItem":"糯米"}}),createChoice({"text":"尖叫着冲出门","next":"run_away_coffin"})]}),
    small_door_talisman_escape: createScene('small_door_talisman_escape', {title:'符退新娘',text:`你把护身符按在面前。黄纸刚碰到红盖头，便像被火烫到一样卷曲起来，朱砂的字一笔一笔亮起。

新娘猛地后退，盖头下传来一声尖利的嘶鸣。喜房的红烛同时熄灭，门外的灵堂露出一道逃生的缝隙。护身符在你掌心化成灰，只剩一股艾草味。

你趁她退开的瞬间冲向门外。`,effects:{"sanity":5,"yin":-5,"setFlag":"small_door_talisman_escape"},choices:[createChoice({"text":"冲出喜房，奔向大门","next":"run_away_coffin"})]}),
    small_door_mirror_escape: createScene('small_door_mirror_escape', {title:'照魂退影',text:`你举起铜镜碎片，对准红盖头下那张和你一模一样的脸。

镜片里的新娘没有动，现实中的她却像被一只无形的手扯住，身体向后折去。红盖头下传来两道声音，一道是秀兰的哭声，另一道是纸张撕裂的声响。她身后的红烛逐盏熄灭，门外的灵堂重新露出来。

你没有等她站稳，转身冲出喜房。`,effects:{"sanity":5,"yin":-8,"setFlag":"small_door_mirror_escape"},choices:[createChoice({"text":"冲出喜房，奔向大门","next":"run_away_coffin"})]}),
    small_door_rice_escape: createScene('small_door_rice_escape', {title:'糯米镇影',text:`你抓起一把糯米撒向新娘的脚边。

糯米落地的瞬间，红盖头下的影子像被钉住一样停止了挣动。她发出一声压抑的呜咽，脚边的红色迅速褪成灰白。门外传来木板松动的声音，逃出去的路终于出现。

你趁她无法追来，冲出喜房。`,effects:{"sanity":5,"yin":-5,"setFlag":"small_door_rice_escape"},choices:[createChoice({"text":"冲出喜房，奔向大门","next":"run_away_coffin"})]}),
    pull_back_hand: createScene('pull_back_hand', {title:'扯黑发',text:`你用力一扯，手从水面上挣脱。

扯的时候很用力，用力得你整个人都往后仰。可你带出来的不是井水，而是一团黑色的长发。长发缠在你的手腕上，越勒越紧，紧得你手腕都开始发紫。那头发是活的，会动，像一条黑色的蛇。

铜镜碎片掉在地上，发出清脆的响声。"叮——"的一声，很长，长得像在敲钟。那团头发像是怕光一样，听到碎镜的响声，"嗖"地缩回了井里。缩回去的时候，带起一阵风，风里夹着井水的腥。

你的手腕上留下了一圈青紫的勒痕，形状像是一只手握过的痕迹。那痕迹是红的，红得像被人掐过。`,effects:{"sanity":-15,"yin":5,"time":30},choices:[createChoice({"text":"逃离后院","next":"to_old_house"})]}),
    huimen_extinguish_lantern: createScene('huimen_extinguish_lantern', {title:'吹灯',text:`你深吸一口气，吹向红灯笼。

那口气很长，长得你肺都空了。可灯笼没有灭，火苗反而窜起三尺高，"呼"地一声，火苗窜得比你还高。火光里，你看见无数张脸在尖叫，都是被红灯笼困住的魂。那些脸挤在火苗里，一张挨着一张，挤得五官都糊在一起。

"你吹不灭。" 新娘说，声音从火里传出来，"这灯笼烧了三十年的脂油，是你的血亲供的。"

你咬破手指，把血弹向灯笼。血是红的，弹出去化成几滴，落在灯笼纸上。

"嗤"的一声，火苗熄灭了。灯笼纸迅速焦黑，化作灰烬落下。灰烬落得很慢，像一场黑色的雪。

新娘发出一声哀鸣，红盖头飘落，露出一张和你一模一样的脸。`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"趁她愣住，逃离","next":"huimen_exp_village_street","effects":{"yin":2}})]})
};
