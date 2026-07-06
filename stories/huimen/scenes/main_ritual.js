/**
 * 《回门》场景模块：main_ritual
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_meaning: createScene('ask_meaning', {title:'李婆的护身符',text:`李婆不回答，只是从怀里掏出一张黄纸，塞到你手里。

黄纸上画着一道符，朱砂勾勒的纹路已经有些褪色。符纸背面写着一行小字：

[faded]"子时之前，贴在心口。否则，她会认出你。"[/faded]

"这是什么意思？谁会认出我？"

李婆摇摇头，转身消失在雨雾里。她的背影佝偻，但走路没有声音，像飘在地上一样。

你握着那张符，手心全是冷汗。`,effects:{"addItem":"护身符","sanity":-5,"yin":2},choices:[createChoice({"text":"把符贴身收好","next":"huimen_paper_doll_warning","effects":{"setFlag":"hasTalisman"}}),createChoice({"text":"觉得晦气，把符扔了","next":"huimen_paper_doll_warning","effects":{"sanity":-5,"yin":5}})]}),
    to_old_house: createScene('to_old_house', {title:'周家老宅',text:`老宅的门敞开着，像一张黑洞洞的嘴。

堂屋里点着两根红蜡烛，烛火摇曳，把墙上的人影拉得很长。一口漆黑的棺材摆在正中，棺材上却没有常见的"奠"字，而是贴着一个倒挂的"囍"。

[red]红烛、白幡、黑棺、囍字。[/red]

四种颜色撞在一起，刺得你眼睛发疼。

棺材前跪着几个人，是你的叔伯婶娘。他们听见脚步声，齐刷刷地转过头来。

"回来啦。" 二叔说。

"回来啦。" 三姑说。

"回来啦。" 四婶说。

他们的嘴角都向上弯着，露出同样的弧度，像是用同一把尺子量出来的。

你注意到，他们每个人的手腕上，都系着一根红绳。红绳的另一端，消失在棺材下面。`,effects:{"sanity":-10,"yin":5,"visual":"flicker","visualDuration":3000},choices:[createChoice({"text":"迈进堂屋","next":"huimen_observe_hall"}),createChoice({"text":"走近棺材，想看祖母最后一眼","next":"huimen_observe_hall","danger":true}),createChoice({"text":"观察亲戚们的手腕红绳","next":"huimen_observe_hall","effects":{"sanity":-8}}),createChoice({"text":"你保持清醒，注意到烛火阴影里还有一个人","next":"shadow_in_corner","condition":{"sanityAbove":80},"hidden":true,"effects":{"sanity":-5}}),createChoice({"text":"你注意到堂屋侧门的门帘被风掀起，帘后不是后院，而是一条陌生的村街","next":"huimen_exp_village_loop_entry","condition":{"yinAbove":12},"hidden":true,"effects":{"sanity":-3,"yin":2}}),createChoice({"text":"把老宅的门换成一扇纸门","next":"huimen_exp_gate_of_paper_alt"}),createChoice({"text":"村街尽头有块石碑，刻着\"入村者三，出村者一\"","next":"huimen_exp3_loop_stone","condition":{"yinAbove":8},"hidden":true,"effects":{"yin":1}}),createChoice({"text":"子时将至，去井边看看","next":"shichen_zi_entry","condition":{"timeAfter":1350},"hidden":true,"effects":{"time":30}}),createChoice({"text":"不进灵堂，先调查老宅","next":"investigate_old_house"}),createChoice({"text":"先去西侧偏房歇一歇","next":"safe_house"}),createChoice({"text":"你已知真相，不愿惊动灵堂，悄悄潜回后院","next":"sneak_back_yard","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":1}})],hallucination:'[whisper]棺材下面传来婴儿的啼哭声，但只持续了一秒。[/whisper]'}),
    talisman_against_rope: createScene('talisman_against_rope', {title:'符镇红绳',text:`你摸到胸口的护身符，那是离家时母亲塞给你的。

你把护身符按在手腕上，冰凉的黄符纸贴着皮肤，发出淡淡的艾草香。那些原本像蛇一样朝你游来的红绳，像是被烫到一般，猛地缩了回去。

二叔脸色变了。他的手腕上，红绳正疯狂地扭动，像是要挣脱皮肉。

"你……你哪来的这东西？" 他的声音发颤。

你没有回答。你看见红绳缩回棺材底下，棺材板发出一声闷响。

[whisper]"别想逃。"[/whisper] 秀兰的声音从棺材里传出来，"子时还没到。"`,effects:{"sanity":5,"yin":-10,"setFlag":"talisman_used"},choices:[createChoice({"text":"趁红绳退缩，冲向小门","next":"small_door"}),createChoice({"text":"追问二叔护身符为何有效","next":"ask_meaning","effects":{"sanity":-5}})]}),
    swear_justice: createScene('swear_justice', {title:'坟前誓',text:`你跪在坟前，重重磕了三个头。

"秀兰，我周家欠你的，我会还。你的尸骨在哪里，我带你离开这里。"

话音刚落，一阵温暖的风拂过你的后颈。那风不像刚才那样阴冷，反而带着一点若有若无的桂花香。

无字碑上的血字慢慢消失了，取而代之的是一行新字：

[faded]"井底红棺，子时开。以我心头血，解你半生冤。"[/faded]

你摸了摸胸口。那里不知道什么时候，多了一把生锈的铜钥匙。

钥匙柄上刻着一个"周"字，和你家老宅门上那把锁一模一样。`,effects:{"addItem":"铜钥匙","sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"去井底开棺","next":"huimen_red_coffin_discovery"}),createChoice({"text":"直接准备安葬","next":"huimen_prepare_burial"})]}),
    find_bones: createScene('find_bones', {title:'井底寻骨',text:`你壮着胆子回到村子，绕到老宅后院。

后院那口老井在月光下泛着幽光。井沿上的铜镜碎片还在，但镜面里的倒影不是你，而是一个盖着红盖头的女子。

她朝你伸出手，指向井底。

你找来井绳，系在腰上，慢慢往井底降。

井水冰凉刺骨。越往下，水越红，像是稀释的血。井壁上刻着密密麻麻的符咒，都是镇魂用的。

终于，你的脚碰到了硬物。

那是一口红漆棺材，棺盖上钉着九根桃木钉。`,effects:{"sanity":-20,"yin":12,"visual":"blood","visualDuration":3000},choices:[createChoice({"text":"继续探查红棺","next":"huimen_red_coffin_discovery","effects":{"yin":1}}),createChoice({"text":"拔出桃木钉，打开棺材","next":"open_red_coffin","condition":{"hasItem":"铜钥匙"},"effects":{"yin":2}}),createChoice({"text":"没有钥匙，只能徒手拔钉","next":"pull_nails_barehand","effects":{"sanity":-15,"yin":7}})]}),
    give_letter: createScene('give_letter', {title:'递字条',text:`你转过身，把字条递向声音传来的方向。

秀兰就站在井底的红光里。她没有盖头，脸色苍白，但眉眼清秀，不像鬼，更像一个受了委屈的姑娘。

她接过字条，看了一遍，又看了一遍。

"三十年，" 她说，"我等了三十年，就想听他亲口说一句对不起。"

她的眼泪是红色的，滴在字条上，把"对不起"三个字晕成了一片血红。

"你走吧。" 秀兰说，"带上我的嫁衣和孩子的骨头，把我埋在后山。我要看着这个村子，看着他们一个一个来找我赎罪。"

井水开始上涨，你抱着红嫁衣和骸骨，被一股力量托出了井口。`,effects:{"sanity":20,"yin":-30,"setFlag":"xiulanMercy","addItem":"秀兰的嫁衣"},choices:[createChoice({"text":"向她承诺正名与安葬","next":"huimen_xiulan_forgiveness","effects":{"yin":1}})]}),
    small_door: createScene('small_door', {title:'喜房',text:`你推开那扇小门。

门后是一间喜房。红烛高照，床上坐着一个盖着红盖头的新娘。

听见门响，新娘缓缓转过头。她的脖子发出"咯吱咯吱"的声音，像是很久没动过。

"夫君……" 她说，"你来了。"

[scream]盖头下，是一张和你一模一样的脸。[/scream]`,effects:{"sanity":-50,"yin":20,"visual":"shake"},choices:[createChoice({"text":"尖叫着冲出门","next":"run_away_coffin"})]}),
    pull_back_hand: createScene('pull_back_hand', {title:'扯黑发',text:`你用力一扯，手从水面上挣脱。

可你带出来的不是井水，而是一团黑色的长发。长发缠在你的手腕上，越勒越紧。

铜镜碎片掉在地上，发出清脆的响声。那团头发像是怕光一样，缩回了井里。

你的手腕上留下了一圈青紫的勒痕，形状像是一只手握过的痕迹。`,effects:{"sanity":-15,"yin":5,"time":30},choices:[createChoice({"text":"逃离后院","next":"to_old_house"})]}),
    huimen_extinguish_lantern: createScene('huimen_extinguish_lantern', {title:'吹灯',text:`你深吸一口气，吹向红灯笼。

灯笼没有灭，火苗反而窜起三尺高。火光里，你看见无数张脸在尖叫，都是被红灯笼困住的魂。

"你吹不灭。" 新娘说，"这灯笼烧了三十年的脂油，是你的血亲供的。"

你咬破手指，把血弹向灯笼。

"嗤"的一声，火苗熄灭了。灯笼纸迅速焦黑，化作灰烬落下。

新娘发出一声哀鸣，红盖头飘落，露出一张和你一模一样的脸。`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"趁她愣住，逃离","next":"huimen_exp_village_street","effects":{"yin":2}})]})
};
