/**
 * 《回门》场景模块：exp3_granny_wang
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_granny_wang_house: createScene('huimen_exp3_granny_wang_house', {title:'王婆家',text:`村街拐角有一间低矮的茅屋，门口挂着一串干辣椒和一只风干的老鼠。

茅屋矮得几乎要塌，屋顶的茅草已经发黑，黑得像被烟熏过。门口那串干辣椒红得刺眼，挂在风里"沙沙"地响，像一群人在窃窃私语。那只风干的老鼠眼睛还睁着，眼珠发黑，像在盯着每一个路过的人。

门缝里飘出艾草和红糖的味道。那味道混在一起，又甜又苦，闻着像产房，又像停尸的屋子。

你敲了敲门，门板很薄，敲得"咚咚"响，像敲在一面鼓上。

一个沙哑的声音说："进来吧，外乡人。我等你很久了。"

[whisper]那声音像是被砂纸磨过，又像是哭过太久留下的。[/whisper]`,effects:{"yin":1},choices:[createChoice({"text":"推门进去","next":"huimen_exp3_granny_wang_inside","effects":{"yin":1}}),createChoice({"text":"问她为什么等你","next":"huimen_exp3_granny_wang_ask","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_inside: createScene('huimen_exp3_granny_wang_inside', {title:'王婆',text:`屋里很暗，只有灶上一盏油灯。

油灯的火苗很小，小得像一粒豆，却把老婆婆的影子拉得老长，投在墙上，像一道弯曲的沟。屋里堆满了东西——草药、剪刀、针线、还有一堆红绳，红绳缠成一团，像一团乱麻。

一个老婆婆坐在灶前，正在熬一锅黑漆漆的药。药锅"咕嘟咕嘟"地冒泡，泡破的时候发出"噗"的一声，溅出一星黑色的药汁。

她抬起头，脸上皱纹纵横，皱纹深得能夹死苍蝇。眼睛却亮得吓人，亮得像两颗嵌在枯木里的珠子。

"你是来找秀兰的？"她问，皱纹里的眼睛直勾勾地盯着你，"那丫头命苦，是我亲手给她穿上的绣鞋。"`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"质问她为什么害秀兰","next":"huimen_exp3_granny_wang_blame","effects":{"yin":2}}),createChoice({"text":"问她是否后悔","next":"huimen_exp3_granny_wang_regret","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_ask: createScene('huimen_exp3_granny_wang_ask', {title:'为何等我',text:`王婆用勺子搅了搅药锅，药汁里浮出一张人脸，很快又散了。

那张脸浮出来时，你认出是秀兰——眉眼弯弯，嘴角带笑，像她还是小姑娘时的样子。可那张脸只浮了一瞬就散了，散成一片黑色的漩涡。

"我梦里总有人告诉我，会有一个外乡人来问我秀兰的事。"她说，搅药的手没停，"我等了很多年，等到自己都快成鬼了。"

她指了指墙角的柜子，柜子很旧，旧得木都发黑了："那双绣鞋还在。你想看看吗？"

[faded]她说"还在"两个字时，声音抖了一下。[/faded]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"看绣鞋","next":"huimen_exp3_granny_wang_shoes","effects":{"yin":2}}),createChoice({"text":"问她秀兰的事","next":"huimen_exp3_granny_wang_inside","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_shoes: createScene('huimen_exp3_granny_wang_shoes', {title:'绣鞋',text:`柜子里放着一双大红色的绣鞋，鞋面上绣着并蒂莲，针脚细密。

那红色太红了，红得不像是染料，像是被什么东西浸过。鞋放在柜子最里层，垫着一块红布，红布下面压着一张黄纸，纸上写着秀兰的生辰八字。

鞋尖各缀着一颗珍珠，珍珠已经发黄，像两颗凝固的眼泪。你伸手去碰，指尖一触到鞋面，那鞋就"嗡"地响了一声，像是有谁在鞋里应了你。

王婆站在你身后，声音很低："穿上这双鞋回门的女子，都会被井神收走。这是周家的规矩，我改不了。"

[red]她说"改不了"三个字时，攥紧了围裙。[/red]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"把绣鞋烧掉","next":"huimen_exp3_granny_wang_shoes_burn","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"问她是谁定的规矩","next":"huimen_exp3_granny_wang_rule","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_blame: createScene('huimen_exp3_granny_wang_blame', {title:'质问',text:`"害她？"王婆的手抖了一下，药汁溅到灶台上，发出"嗤"的一声。

那"嗤"的一声很长，像是什么东西被烫化了。灶台上冒起一缕白烟，烟里带着一股焦糊的甜。

"我是帮凶，可刀不是我磨的。"她说，搅药的手停了，停在药锅上方，勺子还在滴药汁，"周家族长说，不回门的媳妇会坏了村子的风水。我只是……不敢不听。"

她的眼泪落进药锅，药汁更黑了。那黑深得像井底的水，看不见底。

[whisper]"不敢"两个字，她说得很轻，轻得像在替自己开脱。[/whisper]`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"说她可以赎罪","next":"huimen_exp3_granny_wang_redemption_path","effects":{"sanity":3,"yin":1}}),createChoice({"text":"转身离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_regret: createScene('huimen_exp3_granny_wang_regret', {title:'悔',text:`王婆沉默了很久。

那沉默长得很，长得药锅都熬干了，药汁糊在锅底，发出焦糊的味。她没有去管，只是低着头，盯着自己搅药的勺子，勺子上还沾着黑色的药渍。

"后悔？"她低声说，声音很轻，像怕惊动谁，"我每天晚上都能听见她在井里哭。我给她烧了很多纸钱，可她不要钱，她要的是一个道歉。"

她抬起头看着你，眼里有泪，泪很浊，浊得像井水："你能替我说一声对不起吗？"

[faded]她活了这么多年，到最后求的，只是一个替她去道歉的人。[/faded]`,effects:{"sanity":2,"yin":1},choices:[createChoice({"text":"答应她","next":"huimen_exp3_granny_wang_redemption_path","effects":{"sanity":3,"yin":1,"setFlag":"huimen_exp3_granny_wang_sorry"}}),createChoice({"text":"说你要她自己说","next":"huimen_exp3_granny_wang_speak","effects":{"yin":2}})]}),
    huimen_exp3_granny_wang_rule: createScene('huimen_exp3_granny_wang_rule', {title:'规矩',text:`"规矩？"王婆冷笑，笑得很冷，冷得嘴角都抽了一下。

"周家为了发财，编出来的规矩。每代娶一个外姓女子，回门那日沉井，换村子十年太平。"

她指着墙上的年画，年画已经发黄，画上的送子娘娘笑得很甜，怀里抱着一个胖娃娃："那画上的送子娘娘，原型就是第一个被沉井的女子。人们拜她，是因为不敢记得她原本的名字。"

她顿了顿，又补了一句："她原本叫阿沅。"

[red]王婆是村里唯一还记得阿沅名字的人。[/red]`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp3_knows_first_woman"},choices:[createChoice({"text":"问她第一个女子叫什么","next":"huimen_exp3_granny_wang_first_name","condition":{"noFlag":"huimen_exp3_knows_first_woman"},"effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_first_name: createScene('huimen_exp3_granny_wang_first_name', {title:'第一个名字',text:`王婆凑近油灯，压低声音。

油灯的火苗被她吹得一晃，照得她脸上皱纹更深了。她左看右看，确认没人偷听，才开口。

"她叫阿沅。是周家第一代媳妇，也是第一个发现井里秘密的人。"

"她发现什么秘密？"你问。

"她发现井底有金子。"王婆说，眼睛亮了一下，"可金子是用命换的。她不愿再害人，就被周家以中邪之名沉了井。"

灶上的药锅忽然翻涌，像是有谁在底下搅动。黑色的药汁溅出锅沿，滴在灶台上，"嗤嗤"地冒着白烟。

[whisper]那是阿沅在应话。[/whisper]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"去井底找阿沅的骨殖","next":"huimen_exp3_well_bottom","effects":{"yin":2}}),createChoice({"text":"继续和王婆谈","next":"huimen_exp3_granny_wang_redemption_path","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_redemption_path: createScene('huimen_exp3_granny_wang_redemption_path', {title:'赎罪之路',text:`王婆从怀里摸出一把生锈的剪刀。

那剪刀锈得发红，剪刀柄上缠着一圈红布，红布已经发黑。她摸出来的时候，手抖得厉害，剪刀在她手里"咔哒咔哒"地响。

"这是当年剪她头发用的剪刀。"她说，声音哑了，"你若能在井边烧掉这双绣鞋，再用这把剪刀剪断她腕上的红绳，她就能走。"

她把剪刀和绣鞋一起推到你面前，手抖得厉害，推的时候差点把剪刀推到地上。

[faded]她等这一天，等了三十年。等的就是一个敢去井边的人。[/faded]`,effects:{"sanity":3,"yin":-1,"addItem":"王婆的剪刀"},choices:[createChoice({"text":"收下东西去井边","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"让她一起去","next":"huimen_exp3_granny_wang_together","effects":{"yin":2}})]}),
    huimen_exp3_granny_wang_speak: createScene('huimen_exp3_granny_wang_speak', {title:'让她自己说',text:`"我自己说？"王婆的脸色变了，变得很白。

"我老了，走不到井边。你让我在这里说，她听不见的。"

她忽然抓住你的手，力气大得不像老人。她的手指冰凉，凉得你一激灵，指甲嵌进你的手腕，留下几道红印。

"你带我去。"她说，眼里有一种你从未见过的执拗，"我跪在她面前，亲口说对不起。"

[red]她不是不敢说，是没人带她去。[/red]`,effects:{"sanity":-2,"yin":3},choices:[createChoice({"text":"扶她去井边","next":"huimen_exp3_granny_wang_together","effects":{"yin":2}}),createChoice({"text":"甩开她的手","next":"huimen_exp_village_street","effects":{"yin":2}})]}),
    huimen_exp3_granny_wang_together: createScene('huimen_exp3_granny_wang_together', {title:'同去',text:`你扶着王婆走向井边。

她的脚步很轻，像踩在云上。每走一步，她身上的阴气就淡一分，等到了井边，她已经变得半透明。她的轮廓在月光下晃，像一张被水泡过的画。

秀兰的身影从井水里浮出来。她看见王婆，没有说话，只是静静地看着她。

王婆扑通跪下，膝盖磕在井沿的青石上，磕得很响。她把脸埋进土里，土是湿的，糊了她一脸泥。

"秀兰，我对不住你。"她说，声音闷在土里，听不清，却很重。

秀兰看了她很久，最后轻轻叹了口气："你起来吧。我恨不动了。"

[whisper]那叹气声里，有三十年的恨，也有三十年的累。[/whisper]`,effects:{"sanity":8,"yin":-5,"setFlag":"huimen_exp3_granny_wang_forgiven"},choices:[createChoice({"text":"烧掉绣鞋","next":"huimen_exp3_granny_wang_shoes_burn_together","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp3_granny_wang_shoes_burn: createScene('huimen_exp3_granny_wang_shoes_burn', {title:'王婆烧鞋',text:`你把绣鞋扔进火里。

火是你在井边生的，柴是湿的，火苗蹿起来时带着一股烟。绣鞋一进火，火苗"呼"地窜起三尺，红得像血。

火光中，鞋子发出尖叫，像是有无数女子在鞋里哭泣。那尖叫又尖又长，刺得你耳朵发疼。你念出秀兰的名字，每念一声，哭声就轻一分。

念到第三声时，哭声渐渐平息，最后只剩下一堆暗红的灰烬。灰烬里还冒着一缕烟，烟是白的，白得干净。

王婆站在你身后，喃喃道："断了，终于断了。"

她说"断了"两个字时，整个人像被抽掉了什么，佝偻的背又塌了几分。`,effects:{"sanity":5,"yin":-3,"setFlag":"huimen_exp3_burned_red_shoes"},choices:[createChoice({"text":"离开王婆家","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_granny_wang_shoes_burn_together: createScene('huimen_exp3_granny_wang_shoes_burn_together', {title:'一同焚鞋',text:`王婆亲手把绣鞋扔进火里。

她的手抖得厉害，扔的时候差点没扔准。绣鞋落进火里，火苗"呼"地窜起来，把她的袖子都燎了一下。

火焰腾起时，她的身影也随之燃烧。她的身体从脚开始变透明，透明的边缘泛着红光，像着了火却又不疼。

秀兰伸手想拦，王婆摇摇头，眼里有泪，也有一种你从未见过的释然："我欠你的，该还了。"

她的身影一点一点被火吞掉，最后只剩一双烧焦的鞋模，和一缕青烟。

秀兰站在青烟里，朝你轻轻点头。你知道，王婆终于安息了。`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp3_burned_red_shoes"},choices:[createChoice({"text":"离开","ending":"huimen_exp3_hidden_granny_wang_rest","effects":{"yin":0}})]})
};
