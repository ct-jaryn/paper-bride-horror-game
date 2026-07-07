/**
 * 《回门》场景模块：exp3_clan_head
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_clan_head_house: createScene('huimen_exp3_clan_head_house', {title:'族长家',text:`周家族长住在村东头最大的院子里。

院子大得不像村子里的屋，院墙高过人头，墙头上还插着碎瓷片，防的不知是贼还是鬼。院门敞着，门里挂着一串铜铃，风一吹"叮叮当当"地响，响得人心烦。

里面传出麻将碰撞的声音，还有人的笑声。那笑声很响，响得刻意，像是有人故意笑给别人听的。笑声底下，压着一种说不出的紧张。

你走进去，看见几个穿着绸衫的男人围坐在石桌旁，正在推牌九。最老的那个抬起头，眼皮耷拉着，却像鹰一样锐利。

他的眼皮耷拉着，却半睁着，眼里藏着一道冷光，像井底的水。他看你一眼，又低下头去推牌，像没看见你。`,effects:{"yin":2},choices:[createChoice({"text":"直接质问他秀兰的事","next":"huimen_exp3_clan_head_confront","effects":{"yin":3}}),createChoice({"text":"站在一旁看","next":"huimen_exp3_clan_head_watch","effects":{"yin":1}})]}),
    huimen_exp3_clan_head_watch: createScene('huimen_exp3_clan_head_watch', {title:'旁观',text:`牌九上的图案不是常见的鱼虾蟹，而是女子的脸。

每张牌上都刻着一个女子，眉眼各异，却都低着头。牌面磨得发亮，亮得能照见人影。每翻开一张，就有人笑，有人骂，骂得很脏，像是在骂一个不在场的婊子。

族长翻到最后一张，脸上露出满意的神色。他把牌一推："今天手气好，井神保佑。"

其他几个人齐声附和，笑声像钝刀刮过骨头。那笑声不真，假得像戏台上的念白。

[whisper]你知道，他们不是在打牌，是在数人头。每翻一张，就数一个井里的女子。[/whisper]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"问他井神是谁","next":"huimen_exp3_clan_head_god","effects":{"yin":2}}),createChoice({"text":"掀翻牌桌","next":"huimen_exp3_clan_head_flip","effects":{"yin":5}})]}),
    huimen_exp3_clan_head_confront: createScene('huimen_exp3_clan_head_confront', {title:'质问族长',text:`"秀兰？"族长把牌九拢进怀里，动作很慢，慢得像在故意晾你。

他抬起眼皮，那眼皮耷拉着，却从缝里射出一道冷光："周家的媳妇，轮不到外乡人问。"

"她是被人害死的。"你说。

族长笑了，露出几颗金牙。那金牙在烛光下闪，闪得刺眼："害死？她是被选中的。井神选中她，是她的福气。"

他说"福气"两个字时，旁边一个推牌九的男人低下了头，不敢看你。`,effects:{"sanity":-3,"yin":4},choices:[createChoice({"text":"说井神根本不存在","next":"huimen_exp3_clan_head_deny","effects":{"yin":5}}),createChoice({"text":"问他有没有愧疚","next":"huimen_exp3_clan_head_guilt","effects":{"yin":2}})]}),
    huimen_exp3_clan_head_god: createScene('huimen_exp3_clan_head_god', {title:'井神',text:`"井神？"族长压低声音，像是怕惊动什么。

他左右看了看，确认没人偷听，才往下说："井神就是第一个被沉井的女子。她死得冤，怨气大，周家用香火养着她，她保村子风调雨顺。"

他顿了顿，端起茶碗喝了一口，茶碗在手里抖了一下，茶水洒出来几滴。

"可她也在索命。"旁边一个年轻人插嘴，声音很急，被族长瞪了一眼，立刻不敢再说话，缩着脖子退回牌桌后。

族长转回来看你，眼里有倦，也有狠："每隔十年，井神要一个新娘。这是契约。"`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"说契约可以打破","next":"huimen_exp3_clan_head_break","effects":{"yin":2}}),createChoice({"text":"问他愿不愿意认错","next":"huimen_exp3_clan_head_guilt","effects":{"yin":2}})]}),
    huimen_exp3_clan_head_flip: createScene('huimen_exp3_clan_head_flip', {title:'掀桌',text:`你一把掀翻牌桌。

牌桌很沉，沉得你用了全身力气才掀动。牌九散落一地，"哗啦"一声，像下了一场冰雹。女子的脸在月光下扭曲，每张脸都像是活的，在地上滚了几滚才停下。

族长脸色铁青，青得像涂了漆。几个男人站起来围住你，手伸进袖子里，袖子里藏着什么硬的东西。

"外乡人，你找死。"族长说，声音很平，平得发冷。

就在这时，地上的牌九忽然自己动起来，"咔哒、咔哒"地拼成一个字："冤"。

那字拼得歪歪扭扭，却很清楚。`,effects:{"sanity":-5,"yin":6},choices:[createChoice({"text":"指着\"冤\"字质问","next":"huimen_exp3_clan_head_word","effects":{"yin":3}}),createChoice({"text":"趁机跑出院子","next":"huimen_exp_village_street","effects":{"yin":3}})]}),
    huimen_exp3_clan_head_deny: createScene('huimen_exp3_clan_head_deny', {title:'否认',text:`"不存在？"族长站起身，椅子被带倒，"咣当"一声。

他站得笔直，绸衫的下摆无风自动，像有一只手在底下扯。院里的灯笼也跟着动了，灯笼纸被风吹得"哗哗"响，纸里的火苗跳得厉害。

"你以为这些年村子凭什么风调雨顺？凭什么五谷丰登？"他一步一步逼近你，每走一步，灯笼就亮一分。

"凭的是人命。"你说。

族长的笑容僵在脸上。他身后的墙上，忽然渗出无数水迹，像是有谁在墙后哭泣。水迹越渗越多，汇成一道道细流，顺着墙往下淌。`,effects:{"sanity":-3,"yin":5},choices:[createChoice({"text":"继续施压","next":"huimen_exp3_clan_head_pressure","effects":{"yin":3}})]}),
    huimen_exp3_clan_head_guilt: createScene('huimen_exp3_clan_head_guilt', {title:'愧疚',text:`族长沉默了一会儿。

那沉默很长，长得你能听见自己心跳。他低着头，看着自己手里的牌，牌面上的女子也看着他，眉眼低垂，像在等他说什么。

"愧疚？"他低声说，声音忽然软了，软得不像他，"我爹把我姐姐沉井的时候，我也愧疚。可他说，不沉井，村子就完了。"

他抬起头，眼里有一丝裂缝，那裂缝里透出一点光，光里是累："后来我当了族长，才知道……原来只要人心齐，不沉井也能活。可已经停不下来了。"

[faded]他知道是错的，可他已经回不了头了。[/faded]`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"说现在停下来还来得及","next":"huimen_exp3_clan_head_repent","effects":{"sanity":5,"yin":1}}),createChoice({"text":"说他也是凶手","next":"huimen_exp3_clan_head_accuse","effects":{"yin":4}})]}),
    huimen_exp3_clan_head_break: createScene('huimen_exp3_clan_head_break', {title:'破契',text:`"打破？"族长冷笑，笑得很短，像一声干咳。

"契约是血写的，要破契约，得用周家人的血。"

他伸出苍老的手，掌心摊开给你看。掌心有一道陈年伤疤，疤很深，疤肉是紫色的，像一条死虫趴在掌心。

"我爹当年用我姐姐的血续了契约。"他说，声音很平，平得像在说别人的事，"我老了，血快流干了。"

旁边几个男人低下头，不敢看他。有一个的肩膀抖了一下，像是在忍哭。`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"说可以用其他方式偿还","next":"huimen_exp3_clan_head_repent","effects":{"yin":2}}),createChoice({"text":"说周家该偿命","next":"huimen_exp3_clan_head_accuse","effects":{"yin":4}})]}),
    huimen_exp3_clan_head_word: createScene('huimen_exp3_clan_head_word', {title:'冤',text:`"你们看。"你指着地上的字。

地上那张拼好的"冤"字在烛光里泛着幽光，像是活的。牌面上的女子脸都朝着这个字，像是在朝拜。

族长的脸色变了，变得很慢，从青到白，从白到灰。地上的牌九又动起来，"咔哒、咔哒"地拼出第二字："还"。然后是"我""名"。

每拼一个字，院里就亮一分，像是有什么东西被照亮了。

"还我名字。"不知从何处传来女子的声音。那声音不大，却很清，清得像井水。`,effects:{"sanity":-3,"yin":5},choices:[createChoice({"text":"让族长在族谱上补名","next":"huimen_exp3_clan_head_name","effects":{"yin":2}})]}),
    huimen_exp3_clan_head_pressure: createScene('huimen_exp3_clan_head_pressure', {title:'施压',text:`你一步一步逼近族长。

每走一步，他就退一步，退得踉跄，差点绊倒。他的绸衫后摆已经被汗浸湿了，贴在腿上。

"秀兰不是第一个，也不会是最后一个。可今天，我站在这里，就是来终结的。"

院里的水迹越来越多，汇成一条条细流，流向族长的脚边。他的绸鞋被水浸湿，水是凉的，凉得他打了个寒颤。他的脸色惨白，白得像墙。

[faded]墙上渗出的水，是井里的水。井里的水，是那些女子的泪。[/faded]`,effects:{"sanity":-3,"yin":5},choices:[createChoice({"text":"逼他去祖祠认错","next":"huimen_exp3_clan_head_repent","effects":{"yin":3}})]}),
    huimen_exp3_clan_head_repent: createScene('huimen_exp3_clan_head_repent', {title:'悔过',text:`你押着族长往祖祠方向走了几步。他挣了一下，没挣开。族长沉默了很久，最后长叹一声。

那一叹很长，长得像三十年。他叹完，肩膀就塌了，整个人像是被抽掉了骨头。

"好。"他说，声音哑了，"我去祖祠。我把族谱上划掉的名字，一个一个写回去。"

他站起身，像是忽然老了二十岁。其他几个男人想拦他，被他一挥手推开。那挥手很重，把一个想拉他的男人推得退了三步。

"周家造孽太久，"他头也不回地往院门走，"该还债了。"`,effects:{"sanity":5,"yin":-3,"setFlag":"huimen_exp3_clan_head_repents"},choices:[createChoice({"text":"跟他去祖祠","next":"huimen_exp3_clan_head_ancestral","effects":{"yin":1}})]}),
    huimen_exp3_clan_head_accuse: createScene('huimen_exp3_clan_head_accuse', {title:'指控',text:`"偿命？"族长笑了，笑声里带着凄凉。

那笑比哭还难听，笑得他眼角的皱纹都挤成一团。他从怀里掏出一把匕首，"咣"地扔在你面前。匕首落在青石板上，发出脆响，弹了两下才停。

"你要偿命，就杀了我。"他说，声音很平，"但杀了我，下一个族长会接着沉井。"

匕首在月光下泛着寒光，刀身上刻着一个"周"字，字已经被磨得发亮。

[red]这把匕首，是周家传了好几代的"催命刀"。每沉一个女子，就用它割一刀手心。[/red]`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"不杀他，逼他去认错","next":"huimen_exp3_clan_head_repent","effects":{"sanity":3,"yin":1}}),createChoice({"text":"拿起匕首","next":"huimen_exp3_clan_head_kill","effects":{"yin":8}})]}),
    huimen_exp3_clan_head_name: createScene('huimen_exp3_clan_head_name', {title:'补名',text:`族长从屋里取出一本厚厚的族谱，翻到被涂黑的几页。

那族谱厚得像一块砖，封皮是黑布的，已经被翻得发毛。他翻得很慢，每翻一页，手就抖一下。翻到被涂黑的几页时，他的手抖得更厉害，几乎握不住笔。

他蘸了朱砂，在涂黑处写下第一个名字。每写一个字，院里的水迹就退一分。朱砂是红的，写在被涂黑的地方，红得刺眼，像血渗进墨。

"秀兰"二字落上去时，井边忽然传来一声清晰的叹息。那叹息很轻，却很清楚，清楚得像就在你耳边。`,effects:{"sanity":8,"yin":-5,"setFlag":"huimen_exp3_clan_head_named"},choices:[createChoice({"text":"继续写","next":"huimen_exp3_clan_head_ancestral","effects":{"yin":1}})]}),
    huimen_exp3_clan_head_kill: createScene('huimen_exp3_clan_head_kill', {title:'刀',text:`你拿起匕首，但没有刺向他。

匕首很沉，沉得你的手腕往下坠。你握着它，刀尖朝着族长，却没有刺下去。

你把匕首插在牌桌上，"咄"的一声，刀尖穿透一张女子的脸牌，把那张牌钉死在桌上。

"我不要你的命。"你说，声音很稳，"我要你记住她们的名字。每一天，每一夜，都记住。"

族长看着你，眼里的光一点点暗下去。那光暗下去的时候，他脸上最后一点倔强也没了，只剩一种深深的倦。`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"逼他去祖祠","next":"huimen_exp3_clan_head_repent","effects":{"yin":1}})]}),
    huimen_exp3_clan_head_ancestral: createScene('huimen_exp3_clan_head_ancestral', {title:'祖祠认错',text:`你跟族长来到祖祠。

祖祠很暗，只有供桌前两根长明灯在亮。灯里的油不知道烧了多少年，油都熬成黑色的了，火苗还一跳一跳地撑着。祖先牌位一排排码在供桌后，黑漆漆的，像一堵墙。

他跪在祖先牌位前，把族谱摊开，用朱砂补全所有被划掉的名字。补到秀兰时，他的手停了很久，停得你能听见他急促的呼吸。

"秀兰，周家对不起你。"他说，声音不大，却很重。

祠堂里的牌位齐齐震颤，最老的那一块裂开一道缝。那缝里渗出一点黑水，像是在替祖宗流泪。`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp3_clan_head_repented"},choices:[createChoice({"text":"扶他起来","next":"huimen_exp3_hidden_clan_head_penance_scene","effects":{"yin":1}})]}),
    huimen_exp3_hidden_clan_head_penance_scene: createScene('huimen_exp3_hidden_clan_head_penance_scene', {title:'忏',text:`族长把族谱紧紧抱在怀里，老泪纵横。

那眼泪落在他满是皱纹的脸上，顺着皱纹往下流，流进他嘴里，他也不擦。他抱着族谱，像抱着一个孩子，抱得很紧，紧得手都发白。

秀兰的身影出现在祠堂门口。她穿着那件红嫁衣，却不再湿了，红得干净，像新染的。

她看着族长，没有恨，只有一种久远的疲惫。那种疲惫比恨还深，像是恨了太久，恨都恨不动了。

"我原谅你。"她说，声音很轻，"不是为你，是为我自己。"

她转身走出祠堂，阳光从门外涌进来，照在她身上，她整个人都透了。

族长跪在地上，朝她的背影重重磕了一个头。那头磕得很响，响得祠堂的回声都震了。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"追上秀兰","ending":"huimen_exp3_hidden_clan_head_penance","effects":{"yin":0}})]})
};
