/**
 * 《回门》场景模块：exp3_zhou_mansion_courtyard
 * 周家庭院中的老人对话
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_zhou_mansion_courtyard: createScene('huimen_exp3_zhou_mansion_courtyard', {title:'周家庭院',text:`庭院里种着一棵枯死的石榴树，树下的石凳上坐着一个穿长衫的老人。

石榴树死得很透，枝干干裂，像被抽干了血。树下落了一地干枯的石榴，没人收，烂成了一摊摊暗红的泥。

老人正在剥一颗石榴，石榴籽是暗红色的，像一颗颗干缩的心脏。他的手指很瘦，骨节突出，剥石榴的动作却很慢，像在剥一件瓷器。

他抬头看你，眼神浑浊，浑浊得像井底的水。可那浑浊下面，却藏着一道鹰一样的光。

"你是来还债的，还是来讨债的？"他问，声音像风吹过空棺材。`,effects:{"yin":2},choices:[createChoice({"text":"说自己是来讨债的","next":"huimen_exp3_zhou_mansion_courtyard_debt","effects":{"yin":2}}),createChoice({"text":"说自己是来还债的","next":"huimen_exp3_zhou_mansion_courtyard_pay","effects":{"yin":2}}),createChoice({"text":"问他秀兰的事","next":"huimen_exp3_zhou_mansion_courtyard_xiulan","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt: createScene('huimen_exp3_zhou_mansion_courtyard_debt', {title:'讨债',text:`老人把石榴放在石凳上，石榴籽滚了一地。

那些石榴籽滚得很慢，每一颗都像有自己的方向。它们滚到墙根，滚到石阶，滚到树根底下，像是要把整个院子都铺满。

"讨债？"他笑了，笑声像风吹过空棺材，干干的，没有一点水气，"周家欠的债，几代人都还不清。你一个人，讨得完吗？"

他站起身，长衫下露出半截纸做的腿。那腿是纸糊的，糊得很精细，连膝盖的褶皱都糊出来了，却一看就不是肉做的。

[red]他也不是活人。[/red]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"问他周家欠了什么债","next":"huimen_exp3_zhou_mansion_courtyard_debt_ask","effects":{"yin":1}}),createChoice({"text":"转身离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_pay: createScene('huimen_exp3_zhou_mansion_courtyard_pay', {title:'还债',text:`老人点点头，似乎很满意。

他点头时，脖子里发出"咔"的一声，像是一根干枯的树枝折断了。他不在意，只是笑着，笑得纸做的脸上都起了褶。

"还债好。周家最喜欢还债的人。"他朝堂屋一指，手指瘦得像一根竹枝，"去地窖吧，把灯点上，债就清了。"

他的手指向堂屋深处，那里有一道向下的石阶，黑得像一张口。石阶口飘出一股冷气，冷气里夹着纸灰的香。

[faded]他在等你下去。等了很久了。[/faded]`,effects:{"sanity":-2,"yin":3},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":3}}),createChoice({"text":"不去","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan', {title:'秀兰',text:`老人的脸色变了。

那变化很慢，像一池水被人投进了一颗石子。他手里的石榴停在半空，剥石榴的手也僵了。

"秀兰？"他重复这个名字，像是在确认自己还记不记得，"她是周家的媳妇。周家的媳妇，都是井里的人。"

他说"井里的人"四个字时，声音低了下去，低得像是从井底传上来的。

他低下头，继续剥石榴。这一次，石榴籽里渗出一丝暗红的水。那水是黏的，淌在他手指上，像血，却比血更黑。

[whisper]他剥的不是石榴，是一颗心。[/whisper]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"说秀兰不是周家的","next":"huimen_exp3_zhou_mansion_courtyard_xiulan_refute","effects":{"sanity":3,"yin":2}}),createChoice({"text":"追问井里还有多少女子","next":"huimen_exp3_zhou_mansion_courtyard_women","effects":{"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt_ask: createScene('huimen_exp3_zhou_mansion_courtyard_debt_ask', {title:'周家的债',text:`"欠债就是欠债。"老人说，声音很平，像在说一件别人的事，"周家为了发财，拿女子的命填井。填一个，富十年。填到第三代，村子就活了，女子就死了。"

他指了指自己的胸口，手指戳进去，戳得很深，发出"噗"的一声，像戳进一团烂纸。

"我就是第三代。"

他的胸口破了一个洞，里面塞满了纸钱。纸钱叠得整整齐齐，一叠一叠码在胸腔里，像是在替他的心做着什么。`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"问他怎么破这个债","next":"huimen_exp3_zhou_mansion_courtyard_debt_break","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt_break: createScene('huimen_exp3_zhou_mansion_courtyard_debt_break', {title:'破债',text:`"把井里的骨头都挖出来，一人一个坑，埋到山上。"老人说，一边说一边把胸口的纸钱一张一张往外抽，"再把族谱上被划掉的名字重新写回去。最后……"

他顿了顿，抽纸钱的手停了。他看着你，眼里的浑浊里第一次有了一点清明。

"最后让活着的周家人，真心认一回错。"

他说"真心"两个字时，声音很重，重得像一块石头砸进井里。

他的身影开始消散，像被水泡烂的纸。先是脚，然后是腿，然后是腰。他坐在石凳上，石凳却没有塌，像是一直在等着有人来坐。`,effects:{"sanity":3,"yin":-2,"setFlag":"huimen_exp3_knows_break_debt"},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":2}}),createChoice({"text":"离开祖宅","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan_refute: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan_refute', {title:'反驳',text:`"不是周家的？"老人愣了一下，随即大笑。

那笑声很大，大得震落了石榴树上最后一片枯叶。他笑得前仰后合，长衫的下摆都掀起来了，露出底下纸糊的腿。

"可她穿着周家的嫁衣，埋进周家的井，死了还要守周家的门。"他笑得眼泪都出来了——可他没有眼泪，眼眶里只有干枯的黑，"你说她不是周家的，她自己信吗？"

他的笑声里，石榴树无风自动，枯枝像无数只手指向天空。那些手指在月光下晃，像在数天上的星，又像在数地上的坟。

[red]你忽然明白，他就是周家祖上某一代的"债主"。他守在这里，是因为他也还不清。[/red]`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"说你会带她走","next":"huimen_exp3_zhou_mansion_courtyard_xiulan_take","effects":{"sanity":5,"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_women: createScene('huimen_exp3_zhou_mansion_courtyard_women', {title:'井里的女子',text:`老人数了数手指。

他的手指一根一根竖起来，竖到第七根时停了停，又竖起第八根、第九根。每一根手指竖起来，他的脸色就白一分。

"秀兰之前，有六个。秀兰是第七个。秀兰之后，又有两个。一共九个。"他说，声音越来越轻，"周家祖祠的牌位后面，有她们的名字。男人们不敢看，女人们不敢忘。"

他的眼眶里流出两行黑水，像墨汁滴进纸里。那黑水顺着他的脸颊流下来，流进他嘴角的褶皱里，他没有擦。

[faded]他记得每一个。一个都没忘。[/faded]`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp3_knows_seven_women"},choices:[createChoice({"text":"去祖祠","next":"huimen_exp_ancestral_hall","effects":{"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan_take: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan_take', {title:'带走',text:`老人不笑了。

他脸上的笑像被人一把抹掉，露出底下一种说不出的神情。那神情里有酸，有苦，也有一点释然。

"带走她？"他低声说，声音忽然软了下来，"那得看她自己愿不愿意跟你走。她恨了太久，恨成了井的一部分。你若能让她不恨，我就替你开地窖的门。"

他把手里的石榴核埋进土里。枯死的石榴树，忽然抽出一根新芽。新芽嫩绿，绿得发亮，在满院枯败里绿得不像话。

[whisper]那一根新芽，是秀兰替周家守了三十年的院子里，长出来的第一棵活物。[/whisper]`,effects:{"sanity":5,"yin":-3,"setFlag":"huimen_exp3_zhou_elder_agrees"},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":1}})]})
};
