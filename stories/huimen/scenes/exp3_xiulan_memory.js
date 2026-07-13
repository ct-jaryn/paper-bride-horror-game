/**
 * 《回门》场景模块：exp3_xiulan_memory
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_xiulan_memory_childhood_intro: createScene('huimen_exp3_xiulan_memory_childhood_intro', {title:'秀兰的童年',text:`村街尽头忽然飘来一阵槐花香。

那香气浓得不像真的，浓得你鼻尖发酸。你循香走去，脚下的青石板一块块变新，墙上的青苔一点点退去，像是在往回走时光。

一扇半掩的木门出现在街角，门上的红漆已经斑驳，门环却擦得发亮。门后是一个小院，院里晒着粗布，布被风吹得"哗哗"响。一个扎着双髻的小女孩坐在门槛上绣花，脚边趴着一只黄狗。

她抬起头，眼睛亮得像井水："你是来学绣花的吗？"

那眉眼，分明是年幼的秀兰。黄狗摇了摇尾巴，像是在替她等你的回答。

你心里有什么东西"咯噔"一下，像是一根线被拨动了。`,effects:{"sanity":3,"yin":1},choices:[createChoice({"text":"蹲下来，陪她绣花","next":"huimen_exp3_xiulan_memory_childhood_sew","effects":{"sanity":2,"yin":0}}),createChoice({"text":"问她长大后想做什么","next":"huimen_exp3_xiulan_memory_childhood_dream","effects":{"sanity":2,"yin":1}}),createChoice({"text":"悄悄退出门外","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_memory_childhood_sew: createScene('huimen_exp3_xiulan_memory_childhood_sew', {title:'秀兰记忆绣花',text:`你坐在门槛上，看她一针一针绣一朵并蒂莲。

她的手很小，手指却很稳，针脚细密得像蚂蚁排队。她绣得很专注，眉头微微皱着，下唇被她咬出一道浅浅的牙印。

"我娘说，绣得好，将来才能嫁得好。"她把线头咬断，吐在手心里，"可我不想嫁人。我想去镇上，看看戏台上的花旦是怎么走路的。"

她说"花旦"两个字时，眼睛亮了一下，像井里忽然投进了一颗石子。

一阵风吹过，粗布上的影子晃了晃。风像时光一样吹过。你眨了眨眼，她已在时光里长了几分，从女童变成少女的轮廓。她脚边的黄狗也老了些，毛色从黄变成了灰。

时间在这里是软的，一吹就走。`,effects:{"sanity":2,"yin":1},choices:[createChoice({"text":"说你会带她去看戏","next":"huimen_exp3_xiulan_memory_childhood_promise","effects":{"sanity":3,"yin":1,"setFlag":"huimen_exp3_promised_xiulan_opera"}}),createChoice({"text":"沉默地看着她","next":"huimen_exp3_xiulan_memory_childhood_fade","effects":{"sanity":-2,"yin":2}})]}),
    huimen_exp3_xiulan_memory_childhood_dream: createScene('huimen_exp3_xiulan_memory_childhood_dream', {title:'她的愿望',text:`"我想开一家绣庄。"她把绣花绷子抱在胸前，像抱着一个宝贝，"绣自己的花样，不用看婆婆脸色。"

她说"不用看婆婆脸色"时，声音突然低了下去，像是已经预见到了自己未来的婆婆是什么样的人。她低下头，手指摩挲着绷子边缘，那是一种你从未在她身上见过的、属于成年人的疲惫。

她话音刚落，院墙上的青苔忽然蔓延，像是要把这座院子吞回时光里。青苔爬得很快，一眨眼就爬满了半面墙，墙上的粗布也开始泛黄、变脆。

连记忆都开始老了。`,effects:{"sanity":2,"yin":1},choices:[createChoice({"text":"告诉她，她的绣品以后会被人记住","next":"huimen_exp3_xiulan_memory_childhood_promise","effects":{"sanity":3,"yin":1}}),createChoice({"text":"起身离开院子","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_memory_childhood_promise: createScene('huimen_exp3_xiulan_memory_childhood_promise', {title:'童言',text:`小女孩笑了，把绣了一半的并蒂莲塞进你手里。

那并蒂莲还带着她的体温，针脚里还沾着她咬断线头时留的一点点湿。你握着它，像握着一只刚出窝的小鸟。

"那你可要记得。"她认真地看着你，眼睛里没有一丝阴影，"大人最会忘事了。"

她说"忘事"两个字时，声音忽然轻了，像是已经预感到自己会被忘掉。

她的身影像被水晕开的墨，渐渐淡去。先是脚，然后是裙摆，然后是腰。她笑到最后，只剩一张脸悬在半空，像一轮月亮。

院里只剩一架织布机，还在空无一人的堂屋里"咔嗒咔嗒"地响。

[whisper]那声音，像是一个人在自言自语。[/whisper]`,effects:{"sanity":3,"yin":1},choices:[createChoice({"text":"走进堂屋看织布机","next":"huimen_exp3_xiulan_memory_weaving","effects":{"yin":1}}),createChoice({"text":"带着绣品离开","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1,"addItem":"秀兰的绣品"}})]}),
    huimen_exp3_xiulan_memory_childhood_fade: createScene('huimen_exp3_xiulan_memory_childhood_fade', {title:'消散',text:`你没有说话。

小女孩低下头，继续绣花。她的针脚越来越慢，像是在等你开口，又像是在等你走。她没有抬头，但你看见她的睫毛湿了。

她的身影越来越淡，先是变成半透明，然后变成一团模模糊糊的光。那光在门槛上停了一会儿，像是在做最后的告别，然后才一点一点散去。

最后只剩门槛上一只没绣完的鞋面。

你捡起鞋面，发现上面绣的不是并蒂莲，是一口井。井绣得很细，井沿上还绣着一个小小的人影，那人影没有脸。

[red]她早就知道自己的结局。[/red]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"离开","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_memory_weaving: createScene('huimen_exp3_xiulan_memory_weaving', {title:'织布声',text:`织布机自己在动。

没人踩踏板，没人推梭子，它却"咔嗒咔嗒"地响，像有人在深夜赶工。你站在门口看了一会儿，发现梭子来回穿梭的速度越来越快，快得看不清。

梭子织出的不是布，是一幅幅画面。

第一幅：秀兰少年时熬夜织布，油灯下她的手指被梭子磨出血，血滴在白布上，开成一朵朵红花。第二幅：她把卖布的钱藏进陶罐，一个铜板一个铜板地数，说要给自己置办嫁妆。第三幅：她娘把陶罐拿走，说"嫁人就是嫁妆"，秀兰站在空荡荡的堂屋里，手里攥着空空的空气。

最后一幅画面停在一只红嫁衣上。嫁衣的袖口绣着井。

那井，是她一针一针绣上去的。`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"伸手触摸嫁衣","next":"huimen_exp3_xiulan_memory_wedding_night","effects":{"yin":2}}),createChoice({"text":"烧掉嫁衣","next":"huimen_exp3_xiulan_memory_weaving_burn","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp3_xiulan_memory_weaving_burn: createScene('huimen_exp3_xiulan_memory_weaving_burn', {title:'焚衣',text:`火从嫁衣的袖口烧起，那口井在火焰里扭曲，变成一张哭脸。

火是冷的，不像寻常的火。它烧起来没有热气，反而让堂屋里的温度降了几分。织布机"咔嗒"一声停了，像是被这突如其来的火吓了一跳。

嫁衣在火里缩成一团，又慢慢展开，像一个在火里挣扎的人。最后它烧成灰，灰里还带着一点桂花的香——那是秀兰出嫁那天喷的香，三十年都没散尽。

屋里飘满纸灰的味道，像一场提前到来的葬礼。

你在灰烬里摸到一枚铜顶针，上面刻着一个小小的"秀"字。顶针还是温的，像是刚从她手指上褪下来。

[faded]你烧掉的不是井底那件真实的红嫁衣，而是秀兰怨念化成的、绣着井纹的那件。真正的嫁衣仍穿在井底骨架上，等着你替她脱下。[/faded]`,effects:{"sanity":5,"yin":-3,"addItem":"秀兰的顶针"},choices:[createChoice({"text":"离开","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_memory_wedding_night: createScene('huimen_exp3_xiulan_memory_wedding_night', {title:'出嫁前夜',text:`你的手指穿过红嫁衣，触到一片冰凉的空气。

这不是秀兰自己选的婚礼。这是周家安排的冥婚礼前夜，是她被当成"周家物"送出去的前一夜。

那空气像一道帘子，被你的手指拨开。帘子后面浮出另一间屋子，比堂屋小，却点着更多的烛。烛火摇曳，红得发暗，像一锅煮开的血。

秀兰坐在床沿，盖头还盖在头上。盖头是大红的，绣着鸳鸯，鸳鸯的眼睛却被绣歪了，一只往左，一只往右，像是在互相躲。

        一个老妇人的声音在门外说："明日送你上轿，进了周家门，就把鞋留在家中。"

        秀兰低声说："我不上轿。"

        老妇人笑了，那笑声从门缝里钻进来，像一阵风："不上轿，就不是周家的人。"

烛火"噗"地灭了。屋里一下子黑了，黑得伸手不见五指。

[whisper]黑暗里，你听见有人在哭，哭得很轻，像怕被门外的人听见。[/whisper]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"掀开她的盖头","next":"huimen_exp3_xiulan_memory_wedding_face","effects":{"yin":3}}),createChoice({"text":"在门外问她害不害怕","next":"huimen_exp3_xiulan_memory_wedding_fear","effects":{"sanity":2,"yin":2}}),createChoice({"text":"烛火灭后，你看见窗外有人影拖着红嫁衣走向井边","next":"huimen_exp3_xiulan_memory_well_death","effects":{"yin":2}})]}),
    huimen_exp3_xiulan_memory_wedding_face: createScene('huimen_exp3_xiulan_memory_wedding_face', {title:'盖头下',text:`盖头下不是秀兰的脸，是一张被水泡胀的纸人脸。

你意识到，这不是秀兰的脸，是周家给她糊的纸人面。

那脸胀得很大，五官都挤在一起，像一团被水泡烂的纸浆。纸人的嘴唇动了，动得很慢，像是要说什么，又像是被水呛住了。

"你掀开盖头，就要娶我。"

你猛地后退，撞翻了烛台。烛台倒下，火舌舔上嫁衣的裙摆，火苗"呼"地窜起来，把整间屋子都染成红色。

纸人在火里尖叫，声音越来越像秀兰。那声音从低到高，从哭到喊，最后变成一声长长的、像是被井水呛住的呜咽。

最后一刻，你听见她说："快跑，别让他们把我沉下去。"

[red]火灭了。屋里只剩一股焦糊的纸味，和地上那片烧焦的嫁衣。[/red]`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"从梦境中挣脱","next":"huimen_exp3_xiulan_memory_return","effects":{"sanity":3,"yin":1}}),createChoice({"text":"捡起地上烧焦的盖头残片","ending":"hidden_brideVeil","effects":{"sanity":5,"yin":-2}})]}),
    huimen_exp3_xiulan_memory_wedding_fear: createScene('huimen_exp3_xiulan_memory_wedding_fear', {title:'她的回答',text:`"怕。"秀兰的声音很轻，轻得像怕惊动门外的人，"但我更怕不被当成一个人。"

她说"不被当成一个人"时，门里的烛火跳了一下，像是在替她心痛。你隔着门，把手按在门板上，门板凉得像井壁。

"你不是周家的物。你是秀兰。"你说，声音不大，却很稳。

她沉默了很久。久到你以为她已经走了，门里没有一丝声响，连呼吸都听不见。

然后你听见她在门里轻轻笑了一声，那笑里有泪，也有三十年的委屈一下子松开的声音："谢谢你。很久没人叫我的名字了。"

门缝里滑出一张红纸，上面写着她真正的生辰八字。字是她咬破手指写的，血字还湿着。

这是她藏了一辈子的真名字。`,effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_knows_xiulan_birth"},choices:[createChoice({"text":"收起红纸，离开","next":"huimen_exp3_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_memory_well_death: createScene('huimen_exp3_xiulan_memory_well_death', {title:'沉井',text:`你忽然站在井边。

夜很黑，井水里映着一弯残月。残月弯弯的，像一只半闭的眼睛。

几个模糊的人影拖着一个人走来，那人的红嫁衣在地上拖出沙沙的响。嫁衣的下摆已经被水浸湿，在地上拖出一条湿痕，像一道流血的伤口。

你认出那是秀兰。她的嘴被布条勒住，勒得很紧，脸颊都鼓了起来。她的手腕被红绳捆着，捆了一圈又一圈，红绳勒进肉里，渗出暗红的血。

他们没有说话。一个也没有。他们只是沉默地抬着她，像抬一袋米，像抬一件物。

他们把她举起来，丢进井里。

"咕咚"一声。月亮碎了。

[red]碎成无数片，每一片里都映着秀兰下沉的脸。[/red]`,effects:{"sanity":-10,"yin":8},choices:[createChoice({"text":"大声呼喊她的名字","next":"huimen_exp3_xiulan_memory_well_death_cry","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"抓住红绳把她拉上来","next":"huimen_exp3_xiulan_memory_well_death_pull","effects":{"sanity":-3,"yin":5}}),createChoice({"text":"闭上眼睛","next":"huimen_exp3_xiulan_memory_well_death_close","effects":{"sanity":3,"yin":2}})]}),
    huimen_exp3_xiulan_memory_well_death_cry: createScene('huimen_exp3_xiulan_memory_well_death_cry', {title:'呼喊',text:`你的喊声撞在井壁上，碎成无数回声。

那些回声在井壁间弹来弹去，变成一个又一个"秀兰"。喊声惊动了那些人影，他们齐齐回过头——脸上没有五官，只有一片白，白得像纸。

他们朝你走来，脚步声像浸湿的纸，"啪嗒、啪嗒"，一步比一步近。

秀兰从井水里探出头，头发糊了一脸。她朝你拼命摇头："别喊。他们会听见你。"

她的声音是从水底传上来的，带着咕噜咕噜的水泡声。

你闭上嘴。那些人影失去了方向，脚步乱了，像被风吹散的纸灰，一层层化进夜色里。

[whisper]最后一个化散时，回头看了你一眼。它没有眼，你却觉得它在看。[/whisper]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"问她怎么才能救她","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1},"setFlag":"huimen_exp3_promised_to_restore_name"})]}),
    huimen_exp3_xiulan_memory_well_death_pull: createScene('huimen_exp3_xiulan_memory_well_death_pull', {title:'拉绳',text:`你扑到井边，抓住还搭在井沿的红绳。

绳子是湿的，湿得像刚从水里捞出来，又黏又凉。你咬紧牙关往上拉，掌心被绳子的纤维勒出一道道红印，很快就被磨破，渗出血。

绳子的另一端很重，重得像拖着一口装满水的缸。你拉一下，绳子里就"咕噜"一声，像是有谁在水里被呛着了。

就在秀兰的手要触到井沿时——

红绳断了。

你向后跌倒，后脑勺磕在地上，眼前一黑。手里只剩半截湿漉漉的绳子，绳头还在滴着井水，滴在你脸上，凉得像泪。`,effects:{"sanity":-5,"yin":5,"addItem":"半截红绳"},choices:[createChoice({"text":"坐在井边","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1},"setFlag":"huimen_exp3_promised_to_restore_name"})]}),
    huimen_exp3_xiulan_memory_well_death_close: createScene('huimen_exp3_xiulan_memory_well_death_close', {title:'井底记忆闭眼',text:`你闭上眼睛，但水声还是钻进耳朵。

咕咚。咕咚。

像是有什么东西在井底轻轻撞击，一下，又一下，像心跳，又像敲门。每一下都让井壁震一震，震得你脚底发麻。

你想捂住耳朵，可水声是从骨头里传来的，捂不住。

然后一只手搭上你的肩膀。那手很凉，凉得像井水，却轻轻的，像怕惊动你。

秀兰的声音贴着你的耳垂响起，气息吹在你脖子上，激起一层鸡皮疙瘩："你不敢看，我不怪你。但你要记住这里。记住我。"

她的手收紧了一点，像是怕你跑掉。`,effects:{"sanity":2,"yin":3},choices:[createChoice({"text":"睁开眼睛","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1},"setFlag":"huimen_exp3_promised_to_restore_name"})]}),
    huimen_exp3_xiulan_memory_return: createScene('huimen_exp3_xiulan_memory_return', {title:'从记忆里回来',text:`槐花香忽然散了。

你像是被人从水底捞了出来，猛地吸了一口气。记忆里的雨声、烛火和纸浆味逐渐退远，眼前重新露出真实的场景。`,textVariants:[{condition:{custom:(state)=>state.history.slice(-3).includes('approach_coffin')},text:`你发现自己还站在灵堂的棺材边，手指仍搭在棺盖上。红盖头已经垂回原处，棺中的秀兰没有追出来，只有那枚祖母的婚戒在烛光里泛着冷光。`},{condition:{custom:(state)=>!state.history.slice(-3).includes('approach_coffin')},text:`你发现自己还站在村街尽头。青石板还是那块青石板，门后的院子却不见了，只剩一堵斑驳的土墙。你的手里空无一物，可指尖还留着绣品的触感、红绳的湿意、井水的凉。`},{condition:{flag:'huimen_exp3_promised_xiulan_opera'},text:`你想起答应过那个小女孩的话：带你去看戏。那句话像一根针，穿过三十年，仍停在她耳边。`},{condition:{flag:'huimen_exp3_knows_xiulan_birth'},text:`你也想起那张从门缝里滑出来的红纸，上面是她真正的生辰八字。那才是她的名字，不是周家随便写的一个。`},{condition:{flag:'huimen_exp3_promised_to_restore_name'},text:`你低声说："我会把你的名字写回族谱。"风停了，像有人在暗处点了点头。`}],choices:[createChoice({"text":"回到灵堂","next":"run_away_coffin","condition":{"custom":(state)=>state.history.slice(-3).includes("approach_coffin")},"effects":{"yin":1}}),createChoice({"text":"回到村街","next":"huimen_exp_village_street","condition":{"custom":(state)=>!state.history.slice(-3).includes("approach_coffin")},"effects":{"yin":1}})]})
};
