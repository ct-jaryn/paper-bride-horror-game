/**
 * 《回门》场景模块：coffin
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_coffin: createScene('ask_coffin', {title:'喜丧',text:`你指着棺材上倒挂的"囍"字质问二叔："这是什么意思？祖母刚过世，堂屋里却贴着喜字——这就是你说的喜丧？"

可堂屋里明明供着白幡、点着白烛，怎么算"喜"？你瞥了一眼那口黑漆棺材，棺材上贴的不是寿字，是大红"囍"字——这哪里是丧事的摆设。

"可囍字为什么是倒挂的？" 你追问。

堂屋里忽然安静下来。那种安静不是人闭了嘴，是连烛火"噼啪"的声音都停了，红蜡烛"啪"地爆了个灯花，烛芯歪到一边，火苗矮了半截。

三姑缓缓开口，她的声音压得很低，像怕惊动什么："倒挂的囍，是给阴间的人看的。阳间正看，阴间倒看——活人看见喜，死人看见的也是喜。你祖母这辈子没给秀兰名分，死了总得办一场，让她在底下也算周家的人。"

[whisper]"什么名分？"[/whisper] 你听见自己的声音在发抖，喉咙像被什么东西掐着。

四婶一直没说话，这时才抬手，指了指棺材后面。那里有一扇小门，门缝里透出暗红色的光，光一跳一跳的，像是里面点着红烛。

"秀兰的灵位在里面。" 二叔说，声音还是稳的，可他端着的茶碗在微微抖，"今晚子时，你替她掀开盖头，拜了天地，周家欠她的，就算还清了。"

你的脑袋"嗡"地一声。

[red]这不是还债。这是要把你搭进去。[/red]`,effects:{"sanity":-10,"yin":5,"time":60},choices:[createChoice({"text":"去那扇小门看看","next":"small_door","danger":true}),createChoice({"text":"坚持要先看祖母遗体","next":"huimen_coffin_inspection"}),createChoice({"text":"想起纸人的话：别喝交杯酒","next":"refuse_wine_plan","condition":{"flag":"heard_paper_whisper"},"hidden":true,"effects":{"sanity":-5}}),createChoice({"text":"你借口去后院透气，暂时退出堂屋","next":"huimen_exp_village_loop_entry","effects":{"yin":1}})]}),
    ask_coffin_with_inscription: createScene('ask_coffin_with_inscription', {title:'喜丧',text:`你指着棺盖上的刻字质问二叔："这是什么意思？周氏秀兰，未过门而亡——这就是你说的喜丧？"

可堂屋里明明供着白幡、点着白烛，怎么算"喜"？你瞥了一眼那口黑漆棺材，棺材上贴的不是寿字，是大红"囍"字——这哪里是丧事的摆设。

"可囍字为什么是倒挂的？" 你追问。

堂屋里忽然安静下来。那种安静不是人闭了嘴，是连烛火"噼啪"的声音都停了，红蜡烛"啪"地爆了个灯花，烛芯歪到一边，火苗矮了半截。

三姑缓缓开口，她的声音压得很低，像怕惊动什么："倒挂的囍，是给阴间的人看的。阳间正看，阴间倒看——活人看见喜，死人看见的也是喜。你祖母这辈子没给秀兰名分，死了总得办一场，让她在底下也算周家的人。"

[whisper]"什么名分？"[/whisper] 你听见自己的声音在发抖，喉咙像被什么东西掐着。

四婶一直没说话，这时才抬手，指了指棺材后面。那里有一扇小门，门缝里透出暗红色的光，光一跳一跳的，像是里面点着红烛。

"秀兰的灵位在里面。" 二叔说，声音还是稳的，可他端着的茶碗在微微抖，"今晚子时，你替她掀开盖头，拜了天地，周家欠她的，就算还清了。"

你的脑袋"嗡"地一声。

[red]这不是还债。这是要把你搭进去。[/red]`,effects:{"sanity":-10,"yin":5,"time":60},choices:[createChoice({"text":"去那扇小门看看","next":"small_door","danger":true}),createChoice({"text":"坚持要先看祖母遗体","next":"huimen_coffin_inspection"}),createChoice({"text":"想起纸人的话：别喝交杯酒","next":"refuse_wine_plan","condition":{"flag":"heard_paper_whisper"},"hidden":true,"effects":{"sanity":-5}}),createChoice({"text":"你借口去后院透气，暂时退出堂屋","next":"huimen_exp_village_loop_entry","effects":{"yin":1}})]}),
    observe_red_strings: createScene('observe_red_strings', {title:'红绳入骨',text:`你盯着那些红绳看。

红绳系在跪着的亲戚们手腕上，每根都绷得很紧，勒进皮肉里，每个人的手腕上都有一圈深深的红印，皮肉翻起，露出底下发青的肉。更诡异的是，你越看越觉得不对——

红绳不是系在手腕上的。

[red]是从皮肉里长出来的。[/red]

像是血管变成了红色，从手腕的皮肉里钻出来，顺着手臂蜿蜒，再钻进袖子里，最后从袖口探出来，汇成一股，钻入棺材底下。你能看见那股红绳在棺材底的青砖缝里微微搏动，一下一下，跟人的脉搏一个节奏。

二叔注意到你的目光，下意识把手缩进袖子里，可那红绳已经勒出来了，缩也缩不回去。他咳了一声，遮掩似的："别看了。这是周家男人的命，等你成亲那天，也会有的。"

"什么成亲？" 你的声音变了调，自己都听不出是自己的。

三姑指了指棺材后面的小门，门缝里那点暗红的光还在一跳一跳："秀兰在里面等你。今晚子时，拜堂。"`,effects:{"sanity":-18,"yin":7},choices:[createChoice({"text":"冲向小门","next":"small_door"}),createChoice({"text":"假装顺从，趁机观察环境","next":"pretend_comply"}),createChoice({"text":"用护身符抵住红绳，防止它缠上自己","next":"talisman_against_rope","condition":{"hasItem":"护身符"},"effects":{"sanity":5,"yin":-10}}),createChoice({"text":"这红绳……和赶尸匠见过的冥婚新娘一样","next":"corpse_bride_link","condition":{"flag":"ganshi_to_qingshi"}})]}),
    approach_coffin: createScene('approach_coffin', {title:'祖母开棺',text:`你一步一步走近棺材。

堂屋里很静，静得能听见自己心跳的声音，能闻到棺材上那层黑漆混着桐油的气味。亲戚们的目光跟着你移动，像一群盯紧猎物的眼睛，但没有人阻止你，也没有人开口。

棺材没有盖严实，留了一条缝，缝里透出一丝凉气，凉得发甜，带着一股说不清的腐朽味，又压着一层浓重的桂花香——香得不像真的，像是有人故意撒了香料盖什么。

你把手放在棺盖上，触感冰凉粘腻，指腹下"咯吱"一下，像是摸到了一层薄薄的、紧绷的皮。不像是木头，更像是……皮肤。

你深吸一口气，那口凉气呛进肺里，甜得发腻。你用力推开棺盖，棺盖"吱呀"一声滑开，重得像推开一块石碑。

[scream]棺材里躺着的，不是祖母。[/scream]

是一具穿着大红嫁衣的女尸。嫁衣金线绣的龙凤在烛光下泛着冷光，她的脸被红盖头遮住，双手交叠放在胸前，十指苍白，指头上戴着一枚金戒指。

你认得那枚戒指。戒面的花纹、内圈磨损的弧度，是祖母的婚戒。祖母临终前还戴着它，怎么会在别人手上？

女尸的胸口忽然起伏了一下。一下，很轻，像睡着的人翻身。

[red]她吸了一口气。[/red]

然后，她的头缓缓转向你，盖头跟着动，盖头下的阴影里传来一个年轻女子的声音，带着井水的回音：

[whisper]"你终于……来娶我了。"[/whisper]`,effects:{"sanity":-40,"yin":15,"visual":"blood","visualDuration":3000},choices:[createChoice({"text":"盖上棺盖，转身就跑","next":"run_away_coffin","effects":{"sanity":-10}}),createChoice({"text":"双腿发软，动弹不得","next":"paralyzed","ending":"ghostMarriage"}),createChoice({"text":"伸手去掀她的红盖头","next":"huimen_exp3_xiulan_memory_wedding_face"}),createChoice({"text":"查看她手上的金戒指","next":"approach_coffin_ring"})]}),
    approach_coffin_ring: createScene('approach_coffin_ring', {title:'祖母的婚戒',text:`你没有碰盖头，先伸手去看她指上的金戒指。

戒指卡在苍白的无名指上，戒面刻着一朵变形的并蒂莲。你用指腹摸到内圈，那里有一道熟悉的磨痕——这是祖母戴了一辈子的婚戒。

可祖母的手腕明明已经僵硬，戒指却出现在秀兰手上。你终于明白，周家不是把祖母请来主持这场婚事，而是把她最后一点身份也拿来替秀兰“补名分”。

秀兰的手指忽然收紧，戒指在皮肉上勒出一道红痕。她隔着盖头问你："你也要把她留下的东西，从我手上拿走吗？"

你立刻收回手。眼前的女尸不是一件供品，戒指也不是证据——这是一个被周家强行塞进婚礼的人。`,effects:{"sanity":-8,"yin":5,"setFlag":"saw_grandmother_ring"},choices:[createChoice({"text":"盖回盖头，趁她分神逃走","next":"run_away_coffin","effects":{"sanity":-5}}),createChoice({"text":"喊出秀兰的名字，告诉她你不是来娶她的","next":"beg_xiulan"})]}),
    run_away_coffin: createScene('run_away_coffin', {title:'无处可逃',text:`你发疯似的冲向大门。

可大门在你眼前"砰"地一声关上了，门闩没人动，自己落下来的。门板上贴满了黄符，符上的朱砂字像虫子一样蠕动，一笔一画地扭着，发出极轻的"沙沙"声。

二叔的声音从背后传来，还是那种四平八稳的语调，像在劝一个闹脾气的孩子：

"跑什么？你祖母生前最疼你，她临终前唯一的愿望，就是看着你成亲。"

"秀兰是个好孩子，" 三姑接话，声音也稳，"三十年前那场喜事没办成，是她命不好。现在你回来了，正好补上。补上了，她安心，你祖母也安心，一家人都安心。"

四婶已经把红嫁衣捧到了你面前。嫁衣叠得整整齐齐，金线绣的龙凤在烛光下泛光，料子冰凉，透着一股井水的湿气。你盯着那嫁衣看，越看越不对——龙的眼睛，是用黑线绣的，没有眼白，黑洞洞地瞪着你，像两颗墨点。

[red]你无路可逃。但后窗的纸糊似乎松动了，风从缝里灌进来。[/red]`,effects:{"sanity":-20,"yin":10,"time":60},choices:[createChoice({"text":"接过嫁衣，假装配合","next":"pretend_marry"}),createChoice({"text":"喊出秀兰的名字，求她放过你","next":"beg_xiulan","condition":{"flag":"xiulanMercy"},"effects":{"sanity":5}}),createChoice({"text":"推开四婶，撞破窗户","next":"break_window","danger":true}),createChoice({"text":"奔向后院井底","next":"huimen_red_coffin_discovery","effects":{"yin":2}})]}),
    open_red_coffin: createScene('open_red_coffin', {title:'开红棺',text:`你把手伸向红棺的棺盖。这口井底的棺材比你想的轻，也比你想象的更冷。你深吸一口气，准备打开它。`,textVariants:[{condition:{custom:(state)=>state.inventory.includes('铜钥匙')},text:`铜钥匙插入棺盖上的锁孔，发出一声沉闷的"咔哒"声，那声音不响，却像敲在心口上，闷闷地震了一下。

九根桃木钉同时松动，一根一根从棺沿跳出来，落在青砖地上，发出清脆的、参差不齐的响声，像谁在数数。井底的水跟着晃了晃，倒映的红棺裂开一道道细纹。

你推开棺盖，棺盖比想象的轻，轻得不像石头，像推开一层纸。

里面没有完整的尸身。

只有一件叠得整整齐齐的红嫁衣，金线绣的龙凤还泛着冷光，衣襟上却没有一丝褶皱，像是刚被人叠好的。嫁衣下面，除了那具小小的、已经发白的婴儿骸骨，还埋着另一副骨架——秀兰的骸骨。她蜷在嫁衣里，像是到死都在护着肚子里的孩子。

[red]秀兰被活埋时，肚子里还怀着孩子。[/red]

嫁衣上放着一张字条，纸已经发黄发脆，字迹是你祖父的——你见过祖父留下的笔迹，写家训时用的同一种力道。字写得很慢，一笔一画，像用尽了力气：

[faded]"兰妹勿怪，家族所逼，我不得不从。你若有恨，恨我一人，放过周家后人。"[/faded]

你攥着字条，纸在指腹下"簌簌"地抖。眼泪不知道为什么流了下来，一滴一滴砸在字条上，把"兰妹"两个字晕开。

身后，秀兰的声音轻轻响起，没有怨，只有一种你听不懂的、近乎释然的疲惫："他……也写过这样的话吗？"

她问这话时，声音很轻，像是怕惊碎了什么等了三十年的东西。`},{condition:{custom:(state)=>(state.inventory.includes('云袖银簪')||state.flags.red_coffin_unlocked)&&!state.inventory.includes('铜钥匙')},text:`你把云袖银簪插入棺盖与棺身之间的缝隙，银簪是云袖的遗物，簪头刻着"照魂"二字。你一点点撬开棺盖，每动一下，银簪便发出一声细碎的呻吟，像是云袖也在帮你。

九根桃木钉随之松动，一根一根从棺沿跳出来，落在青砖地上，发出清脆的、参差不齐的响声。井底的水跟着晃了晃，倒映的红棺裂开一道道细纹。

你推开棺盖，棺盖比想象的轻，轻得不像石头，像推开一层纸。

里面没有完整的尸身。

只有一件叠得整整齐齐的红嫁衣，金线绣的龙凤还泛着冷光，衣襟上却没有一丝褶皱，像是刚被人叠好的。嫁衣下面，除了那具小小的、已经发白的婴儿骸骨，还埋着另一副骨架——秀兰的骸骨。她蜷在嫁衣里，像是到死都在护着肚子里的孩子。

[red]秀兰被活埋时，肚子里还怀着孩子。[/red]

嫁衣上放着一张字条，纸已经发黄发脆，字迹是你祖父的——你见过祖父留下的笔迹，写家训时用的同一种力道。字写得很慢，一笔一画，像用尽了力气：

[faded]"兰妹勿怪，家族所逼，我不得不从。你若有恨，恨我一人，放过周家后人。"[/faded]

你攥着字条，纸在指腹下"簌簌"地抖。眼泪不知道为什么流了下来，一滴一滴砸在字条上，把"兰妹"两个字晕开。

身后，秀兰的声音轻轻响起，没有怨，只有一种你听不懂的、近乎释然的疲惫："他……也写过这样的话吗？"

她问这话时，声音很轻，像是怕惊碎了什么等了三十年的东西。`},{condition:{custom:(state)=>!state.inventory.includes('铜钥匙')&&!state.inventory.includes('云袖银簪')&&!state.flags.red_coffin_unlocked},text:`你没有钥匙，也没有银簪，只能用指甲抠住棺盖边缘，一点一点往外掰。棺盖的木头被井水泡得发软，指甲抠进去又疼又凉。九根桃木钉一根一根被你拔出来，每拔一根，掌心便多一道灼伤似的红痕。

最后一根钉子脱出时，棺盖自己滑开了。井底的水晃了晃，红棺的倒影裂开了细纹。

你推开棺盖，棺盖比想象的轻，轻得不像石头，像推开一层纸。

里面没有完整的尸身。

只有一件叠得整整齐齐的红嫁衣，金线绣的龙凤还泛着冷光，衣襟上却没有一丝褶皱，像是刚被人叠好的。嫁衣下面，除了那具小小的、已经发白的婴儿骸骨，还埋着另一副骨架——秀兰的骸骨。她蜷在嫁衣里，像是到死都在护着肚子里的孩子。

[red]秀兰被活埋时，肚子里还怀着孩子。[/red]

嫁衣上放着一张字条，纸已经发黄发脆，字迹是你祖父的——你见过祖父留下的笔迹，写家训时用的同一种力道。字写得很慢，一笔一画，像用尽了力气：

[faded]"兰妹勿怪，家族所逼，我不得不从。你若有恨，恨我一人，放过周家后人。"[/faded]

你攥着字条，纸在指腹下"簌簌"地抖。眼泪不知道为什么流了下来，一滴一滴砸在字条上，把"兰妹"两个字晕开。

身后，秀兰的声音轻轻响起，没有怨，只有一种你听不懂的、近乎释然的疲惫："他……也写过这样的话吗？"

她问这话时，声音很轻，像是怕惊碎了什么等了三十年的东西。`}],effects:{"sanity":-10,"yin":-20,"setFlag":"foundBones","addItem":["秀兰的嫁衣","秀兰的骨殖","孩子的骸骨","祖父日记残页"]},choices:[createChoice({"text":"把字条递给她","next":"give_letter","effects":{"setFlag":"xiulanMercy"}}),createChoice({"text":"为周家辩解","next":"defend_family","effects":{"sanity":-10}}),createChoice({"text":"她已经原谅你了，准备安葬","next":"huimen_xiulan_forgiveness","condition":{"flag":"xiulanMercy"},"effects":{"yin":1}}),createChoice({"text":"红棺底部有一道缝隙，透出村街的灯火","next":"huimen_exp_village_loop_entry","condition":{"flag":"foundBones"},"hidden":true,"effects":{"yin":2}})]}),
    resist_marriage: createScene('resist_marriage', {title:'掀翻供桌',text:`你掀翻了供桌。

那一下用尽了全身的力气，供桌"哐啷"一声翻倒，香炉、供果、红烛、酒壶，全摔在地上。红烛倒地，火苗"呼"地窜起来，舔上垂着的白幡，白幡遇火就着，火舌一路往上爬，整个堂屋瞬间陷入火海。

秀兰发出一声尖叫。那声音里没有愤怒，只有一种排山倒海的悲伤，像三十年的委屈在这一声里全挤出来。

"为什么……为什么你们周家的人，总是要烧掉我的一切……"

她的身影在火中扭曲，化作无数纸灰。纸灰漫天飞舞，扑向你，钻进你的眼睛、鼻子、嘴巴，呛得你喘不上气。你感到自己的身体在变轻，皮肤在变白，四肢在变得僵硬，像被什么东西一寸一寸地抽干、填满。

[red]你成了新的纸人。[/red]

火灭之后，堂屋的角落里，多了一个穿着新郎服的纸人。它的脸，和你一模一样。`,ending:'paperDoll'}),
    red_coffin_locked: createScene('red_coffin_locked', {title:'红棺封印',text:`井底的红棺被九根红绳捆着，每根红绳都绷得极紧，勒进棺木里，勒出一道道深痕。每根红绳的绳头都系着一枚铜钱，铜钱发黑，钱孔里塞着朱砂，朱砂已经干成暗红色，像凝固的血。

棺盖上刻着一行字，笔画极深，是用刀一笔一笔凿出来的：

[faded]"开棺需以情丝为引，以照魂为镜。"[/faded]

你摸了摸口袋里的断同心结红绳和云袖银簪——银簪是云袖的遗物，云袖是百年前周家另一个被纸替的女子。可云袖银簪是照魂的吗？你不确定。情丝好懂，是同心结红绳，可照魂……

也许，你还需要一件能照见魂魄的遗物。`,effects:{"yin":10},choices:[createChoice({"text":"用照魂银簪解开封印","next":"open_red_coffin","condition":{"hasItem":"云袖银簪"},"effects":{"removeItem":"云袖银簪","setFlag":"red_coffin_unlocked"}}),createChoice({"text":"强行扯断红绳","ending":"hidden_redCoffinOpen"}),createChoice({"text":"放弃开棺","next":"huimen_exp_well_night"})]})
};

scenes.approach_coffin.cg = 'assets/images/cg/huimen/approach-coffin.webp';
