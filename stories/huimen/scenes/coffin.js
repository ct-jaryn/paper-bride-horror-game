/**
 * 《回门》场景模块：coffin
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_coffin: createScene('ask_coffin', {title:'喜丧',text:`二叔的笑容没有变："喜丧嘛，你不懂。你祖母高寿，走的时候是笑着走的。"

"可囍字为什么是倒挂的？" 你追问。

堂屋里忽然安静下来。红蜡烛"噼啪"爆了个灯花。

三姑缓缓开口："倒挂的囍，是给阴间的人看的。阳间正看，阴间倒看。你祖母这辈子没给秀兰名分，死了总得办一场。"

[whisper]"什么名分？"[/whisper] 你听见自己的声音在发抖。

四婶指了指棺材后面。那里有一扇小门，门缝里透出暗红色的光。

"秀兰的灵位在里面。" 二叔说，"今晚子时，你替她掀开盖头，拜了天地，周家欠她的，就算还清了。"

你的脑袋嗡的一声。

[red]这不是还债。这是要把你搭进去。[/red]`,effects:{"sanity":-15,"yin":5},choices:[createChoice({"text":"去那扇小门看看","next":"small_door","danger":true}),createChoice({"text":"坚持要先看祖母遗体","next":"huimen_coffin_inspection"}),createChoice({"text":"想起纸人的话：别喝交杯酒","next":"refuse_wine_plan","condition":{"flag":"heard_paper_whisper"},"hidden":true,"effects":{"sanity":-5}}),createChoice({"text":"你借口去后院透气，暂时退出堂屋","next":"huimen_exp_village_loop_entry","effects":{"yin":1}}),createChoice({"text":"你背着秀兰的骨殖，感觉雾气正在散去，似乎可以回到主线","next":"huimen_exp3_return_mainline","condition":{"hasItem":"秀兰的骨殖"},"hidden":true,"effects":{"yin":-3}})]}),
    observe_red_strings: createScene('observe_red_strings', {title:'红绳入骨',text:`你盯着那些红绳看。

红绳系得很紧，勒进皮肉里，每个人的手腕都有一圈红印。更诡异的是，红绳不是系在手腕上的——

[red]是从皮肉里长出来的。[/red]

像是血管变成了红色，从手腕延伸出来，钻入棺材底下。

二叔注意到你的目光，把手缩进袖子里："别看了。这是周家男人的命，等你成亲那天，也会有的。"

"什么成亲？" 你的声音变了调。

三姑指了指棺材后面的小门："秀兰在里面等你。今晚子时，拜堂。"`,effects:{"sanity":-18,"yin":7},choices:[createChoice({"text":"冲向小门","next":"small_door"}),createChoice({"text":"假装顺从，趁机观察环境","next":"pretend_comply","effects":{"setFlag":"gainedTrust"}}),createChoice({"text":"用护身符抵住红绳，防止它缠上自己","next":"talisman_against_rope","condition":{"hasItem":"护身符"},"effects":{"sanity":5,"yin":-10}}),createChoice({"text":"这红绳……和赶尸匠见过的冥婚新娘一样","next":"corpse_bride_link","condition":{"flag":"ganshi_to_qingshi"}})]}),
    approach_coffin: createScene('approach_coffin', {title:'祖母开棺',text:`你一步一步走近棺材。

亲戚们的目光跟着你移动，但没有人阻止你。

棺材没有盖严实，留了一条缝。你把手放在棺盖上，触感冰凉粘腻，不像是木头，更像是……皮肤。

你深吸一口气，推开棺盖。

[scream]棺材里躺着的，不是祖母。[/scream]

是一具穿着大红嫁衣的女尸。她的脸被红盖头遮住，双手交叠放在胸前，指头上戴着一枚金戒指。

你认得那枚戒指。是祖母的婚戒。

女尸的胸口忽然起伏了一下。

[red]她吸了一口气。[/red]

然后，她的头缓缓转向你，红盖头下传来一个年轻女子的声音：

[whisper]"你终于……来娶我了。"[/whisper]`,effects:{"sanity":-40,"yin":15,"visual":"blood","visualDuration":3000},choices:[createChoice({"text":"盖上棺盖，转身就跑","next":"run_away_coffin","effects":{"sanity":-10}}),createChoice({"text":"双腿发软，动弹不得","next":"paralyzed","ending":"ghostMarriage"}),createChoice({"text":"打开井底的红棺","next":"huimen_exp_red_coffin_open_alt"}),createChoice({"text":"红棺被红绳和铜钱封印着","next":"red_coffin_locked"})]}),
    run_away_coffin: createScene('run_away_coffin', {title:'无处可逃',text:`你发疯似的冲向大门。

可大门在你眼前"砰"地一声关上了。门板上贴满了黄符，符上的朱砂字像虫子一样蠕动。

二叔的声音从背后传来，还是那种四平八稳的语调：

"跑什么？你祖母生前最疼你，她临终前唯一的愿望，就是看着你成亲。"

"秀兰是个好孩子，" 三姑接话，"三十年前那场喜事没办成，是她命不好。现在你回来了，正好补上。"

四婶已经把红嫁衣捧到了你面前。嫁衣上的金线绣着龙凤，可那龙的眼睛是用黑线绣的，没有眼白。

[red]你无路可逃。[/red]`,effects:{"sanity":-20,"yin":10,"time":60},choices:[createChoice({"text":"接过嫁衣，假装配合","next":"pretend_marry","effects":{"setFlag":"willingGroom"}}),createChoice({"text":"推开四婶，撞破窗户","next":"break_window","danger":true}),createChoice({"text":"奔向后院井底","next":"huimen_red_coffin_discovery","effects":{"yin":2}}),createChoice({"text":"头也不回地离开村子","next":"huimen_exp_village_escape_alt"})]}),
    open_red_coffin: createScene('open_red_coffin', {title:'开红棺',text:`铜钥匙插入棺盖上的锁孔，发出一声沉闷的"咔哒"声。

九根桃木钉同时松动，落在地上发出清脆的响声。

你推开棺盖。

里面没有尸体。

只有一件叠得整整齐齐的红嫁衣，和一具小小的、已经发白的婴儿骸骨。

[red]秀兰被活埋时，肚子里还怀着孩子。[/red]

嫁衣上放着一张字条，是你祖父的笔迹：

[faded]"兰妹勿怪，家族所逼，我不得不从。你若有恨，恨我一人，放过周家后人。"[/faded]

你攥着字条，眼泪不知道为什么流了下来。

身后，秀兰的声音轻轻响起："他……也写过这样的话吗？"`,effects:{"sanity":-10,"yin":-20,"setFlag":"foundBones"},choices:[createChoice({"text":"把字条递给她","next":"give_letter","effects":{"setFlag":"xiulanMercy"}}),createChoice({"text":"为周家辩解","next":"defend_family","effects":{"sanity":-10}}),createChoice({"text":"她已经原谅你了，准备安葬","next":"huimen_xiulan_forgiveness","condition":{"flag":"xiulanMercy"},"effects":{"yin":1}}),createChoice({"text":"红棺底部有一道缝隙，透出村街的灯火","next":"huimen_exp_village_loop_entry","condition":{"flag":"foundBones"},"hidden":true,"effects":{"yin":2}})]}),
    resist_marriage: createScene('resist_marriage', {title:'掀翻供桌',text:`你掀翻了供桌。

红烛倒在地上，火苗窜上白幡，整个堂屋陷入火海。秀兰发出一声尖叫，那不是愤怒，而是悲伤。

"为什么……为什么你们周家的人，总是要烧掉我的一切……"

她的身影在火中扭曲，化作无数纸灰。纸灰扑向你，钻进你的眼睛、鼻子、嘴巴。

你感到自己的身体在变轻，皮肤在变白，四肢在变得僵硬。

[red]你成了新的纸人。[/red]

堂屋的角落里，多了一个穿着新郎服的纸人。它的脸，和你一模一样。`,ending:'paperDoll'}),
    red_coffin_locked: createScene('red_coffin_locked', {title:'红棺封印',text:`井底的红棺被七根红绳捆着，每根红绳都系着一枚铜钱。

棺盖上刻着一行字：

[faded]"开棺需以情丝为引，以照魂为镜。"[/faded]

你摸了摸口袋里的断同心结红绳和云袖银簪——不对，云袖银簪是照魂的吗？

也许，你还需要找到一面镜子。`,effects:{"yin":10},choices:[createChoice({"text":"用红绳和铜镜一起解封","next":"open_red_coffin","condition":{"hasItem":"云袖银簪"},"effects":{"removeItem":"云袖银簪","setFlag":"red_coffin_unlocked"}}),createChoice({"text":"强行扯断红绳","ending":"hidden_redCoffinOpen"}),createChoice({"text":"放弃开棺","next":"huimen_exp_well_night"})]})
};
