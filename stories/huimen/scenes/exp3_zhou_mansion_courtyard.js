/**
 * 《回门》场景模块：exp3_zhou_mansion_courtyard
 * 周家庭院中的老人对话
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_zhou_mansion_courtyard: createScene('huimen_exp3_zhou_mansion_courtyard', {title:'周家庭院',text:`庭院里种着一棵枯死的石榴树，树下的石凳上坐着一个穿长衫的老人。

老人正在剥一颗石榴，石榴籽是暗红色的，像一颗颗干缩的心脏。他抬头看你，眼神浑浊："你是来还债的，还是来讨债的？"`,effects:{"yin":2},choices:[createChoice({"text":"说自己是来讨债的","next":"huimen_exp3_zhou_mansion_courtyard_debt","effects":{"yin":2}}),createChoice({"text":"说自己是来还债的","next":"huimen_exp3_zhou_mansion_courtyard_pay","effects":{"yin":2}}),createChoice({"text":"问他秀兰的事","next":"huimen_exp3_zhou_mansion_courtyard_xiulan","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt: createScene('huimen_exp3_zhou_mansion_courtyard_debt', {title:'讨债',text:`老人把石榴放在石凳上，石榴籽滚了一地。

"讨债？"他笑了，笑声像风吹过空棺材，"周家欠的债，几代人都还不清。你一个人，讨得完吗？"

他站起身，长衫下露出半截纸做的腿。`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"问他周家欠了什么债","next":"huimen_exp3_zhou_mansion_courtyard_debt_ask","effects":{"yin":1}}),createChoice({"text":"转身离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_pay: createScene('huimen_exp3_zhou_mansion_courtyard_pay', {title:'还债',text:`老人点点头，似乎很满意。

"还债好。周家最喜欢还债的人。"他朝堂屋一指，"去地窖吧，把灯点上，债就清了。"

他的手指向堂屋深处，那里有一道向下的石阶，黑得像一张口。`,effects:{"sanity":-2,"yin":3},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":3}}),createChoice({"text":"不去","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan', {title:'秀兰',text:`老人的脸色变了。

"秀兰？"他重复这个名字，像是在确认自己还记不记得，"她是周家的媳妇。周家的媳妇，都是井里的人。"

他低下头，继续剥石榴。这一次，石榴籽里渗出一丝暗红的水。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"说秀兰不是周家的","next":"huimen_exp3_zhou_mansion_courtyard_xiulan_refute","effects":{"sanity":3,"yin":2}}),createChoice({"text":"追问井里还有多少女子","next":"huimen_exp3_zhou_mansion_courtyard_women","effects":{"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt_ask: createScene('huimen_exp3_zhou_mansion_courtyard_debt_ask', {title:'周家的债',text:`"欠债就是欠债。"老人说，"周家为了发财，拿女子的命填井。填一个，富十年。填到第三代，村子就活了，女子就死了。"

他指了指自己的胸口："我就是第三代。"

他的胸口破了一个洞，里面塞满了纸钱。`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"问他怎么破这个债","next":"huimen_exp3_zhou_mansion_courtyard_debt_break","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_debt_break: createScene('huimen_exp3_zhou_mansion_courtyard_debt_break', {title:'破债',text:`"把井里的骨头都挖出来，一人一个坑，埋到山上。"老人说，"再把族谱上被划掉的名字重新写回去。最后……"

他顿了顿，"最后让活着的周家人，真心认一回错。"

他的身影开始消散，像被水泡烂的纸。`,effects:{"sanity":3,"yin":-2,"setFlag":"huimen_exp3_knows_break_debt"},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":2}}),createChoice({"text":"离开祖宅","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan_refute: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan_refute', {title:'反驳',text:`"不是周家的？"老人愣了一下，随即大笑，"可她穿着周家的嫁衣，埋进周家的井，死了还要守周家的门。你说她不是周家的，她自己信吗？"

他的笑声里，石榴树无风自动，枯枝像无数只手指向天空。`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"说你会带她走","next":"huimen_exp3_zhou_mansion_courtyard_xiulan_take","effects":{"sanity":5,"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_women: createScene('huimen_exp3_zhou_mansion_courtyard_women', {title:'井里的女子',text:`老人数了数手指。

"秀兰之前，有七个。秀兰之后，又有两个。"他说，"周家祖祠的牌位后面，有她们的名字。男人们不敢看，女人们不敢忘。"

他的眼眶里流出两行黑水，像墨汁滴进纸里。`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp3_knows_seven_women"},choices:[createChoice({"text":"去祖祠","next":"huimen_exp_ancestral_hall","effects":{"yin":2}})]}),
    huimen_exp3_zhou_mansion_courtyard_xiulan_take: createScene('huimen_exp3_zhou_mansion_courtyard_xiulan_take', {title:'带走',text:`老人不笑了。

"带走她？"他低声说，"那得看她自己愿不愿意跟你走。她恨了太久，恨成了井的一部分。你若能让她不恨，我就替你开地窖的门。"

他把手里的石榴核埋进土里。枯死的石榴树，忽然抽出一根新芽。`,effects:{"sanity":5,"yin":-3,"setFlag":"huimen_exp3_zhou_elder_agrees"},choices:[createChoice({"text":"去地窖","next":"huimen_exp3_zhou_mansion_cellar","effects":{"yin":1}})]})
};
