/**
 * 《回门》场景模块：exp_ancestral_hall
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_ancestral_hall: createScene('huimen_exp_ancestral_hall', {title:"周家祖祠",text:`雨不知何时停了，可空气里仍浸着湿意，你踩着满地发软的纸钱走向周家祖祠。

祠堂的门是朱红色的，漆皮翘起剥落，露出底下层层叠叠的黄符。每一张符上都用朱砂写着名字，全都是周家男丁——你祖父、你父亲、你……

你伸手去推门，指尖触到木门的一瞬，一阵寒意顺着胳膊窜上来，像是摸到了一具冰凉的尸体。

门"吱呀"一声开了。里面是一排排黑漆牌位，密密麻麻排到看不见尽头。香炉里积着寸许厚的香灰，几根没烧尽的香还冒着青烟，烟里混着一股陈年霉味和若有若无的血腥气。

最上面的牌位刻着"周氏先祖"，往下牌位越来越小，像是一代一代压着下一代。最末一排，有一个空位。

[red]那个空位的旁边，已经刻好了你的名字。墨迹还是新的。[/red]

你的心跳猛地漏了一拍。你伸出手，指尖缓缓触到那两个字的瞬间——

所有牌位齐齐发出一声叹息，像是一屋子的人在同时呼气。

[whisper]"回来了……回来了……"[/whisper]

    墙角立着一幅落尘的画像，后墙隐约有刻痕，供桌下的地砖似乎可以推动——这祖祠里藏着的，远不止牌位。`,effects:{"sanity":-10,"yin":3,"visual":"flicker","visualDuration":2000},textVariants:[{condition:{flag:'restored_xiulan_name'},text:`牌位上秀兰的名字已被你正名。香炉里的香灰自燃，像是终于有人来认了她的名分。`},{condition:{flag:'knowsTruth'},text:`你看着周家列祖列宗的牌位，胸口发闷。这些名字背后，藏着多少被纸替的女子。`}],choices:[createChoice({"text":"查看牌位后的暗格","next":"huimen_exp_ancestral_hall_vault","effects":{"yin":2}}),createChoice({"text":"跪拜祖先，请求宽恕","next":"huimen_exp_ancestor_judge_scene","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"用香灰涂抹刻着自己名字的牌位","next":"huimen_exp_erase_name","condition":{"hasItem":"香灰"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"查看角落里的画像","next":"huimen_exp_ancestral_painting","effects":{"yin":2}}),createChoice({"text":"去后墙看看那面女墙","next":"huimen_exp_ancestral_women_wall","condition":{"flag":"huimen_exp_read_ancestral_record"},"effects":{"yin":2}}),createChoice({"text":"寻找祖祠地下密室","next":"huimen_exp_ancestral_blood_pool","condition":{"flag":"huimen_exp_defied_ancestor"},"effects":{"yin":3}}),createChoice({"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"把族谱上划掉的名字补回去","next":"huimen_exp3_zhou_mansion_cellar_name_stele","condition":{"flag":"huimen_exp3_knows_seven_women"},"effects":{"sanity":5,"yin":-2}}),createChoice({"text":"跪在祖宗牌位前，承认周家的罪","next":"huimen_exp_zhou_curse_alt"}),createChoice({"text":"寅时将近，是时候做最后抉择","next":"shichen_yin_entry","condition":{"timeAfter":1620},"hidden":true,"effects":{"time":30}}),createChoice({"text":"绕到祠堂后面查看","next":"investigate_ancestral_hall"})]}),
    huimen_exp_ancestral_hall_vault: createScene('huimen_exp_ancestral_hall_vault', {title:"暗格",text:`你蹲下身，挪开最老的那座牌位。木头沉得出奇，底座发出一声闷响，后面露出一方暗格。

暗格里静静躺着一本薄薄的册子，封皮发黑，上书"周家秘录"四个字。你翻开第一页，纸页脆得像枯叶，上面密密麻麻记着周家每一代"不祥女"的名字。

秀兰、柳红、云袖、素心、月娥……每一个名字后面都跟着两个字——"活埋"、"配冥婚"、"沉塘"。

[red]周家不是靠男丁传宗接代，而是靠这些女人的血，一口一口地养着。[/red]

你的手开始发抖，册子也跟着簌簌颤动。你翻到最后一页，却发现是空白的。

空白页上只有一滴干涸发黑的血，血迹旁边有一行极小的字，像是用指甲尖抠出来的：

[faded]"最后一个名字，由你来写。"[/faded]

烛火忽然跳动了一下，那滴血仿佛重新湿润起来，缓缓向纸页边缘流淌。`,effects:{"sanity":-15,"yin":3,"setFlag":"huimen_exp_read_ancestral_record"},choices:[createChoice({"text":"写下秀兰的名字，承认她的身份","next":"huimen_exp_restore_xiulan_name","effects":{"sanity":10,"yin":-10}}),createChoice({"text":"撕掉这本册子","next":"huimen_exp_burn_ancestral_record","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"把册子带走","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"周家秘录"}}),createChoice({"text":"在空位上写下自己的名字","next":"huimen_exp_forgotten_alt","condition":{"flag":"knowsTruth"},"effects":{"sanity":-15,"yin":8},"hidden":true})]}),
    huimen_exp_burn_ancestral_record: createScene('huimen_exp_burn_ancestral_record', {title:"焚册",text:`你颤抖着划亮火折，点燃了那本周家秘录。

火苗窜起的瞬间，金色的火光照亮了整座祖祠。牌位上的名字在火中扭曲、卷曲，像是在无声地尖叫。

你听见无数女子的哭声从火光里涌出来，一声叠着一声，塞满了整座祠堂。

"你烧了我们的名字！"她们哭喊，"我们连鬼都做不成了！"

你愣在原地。你本想毁掉周家的罪证，却连她们最后存在的痕迹也一并烧成了灰。

火势顺着册子蔓延到牌位上，整座祖祠开始燃烧。黄符卷起，香炉倾倒，你想夺门而逃——

门却被一层层黄符封死了，怎么也推不开。

[red]你与周家所有的秘密，一起化成了灰烬。[/red]

火海里，最后一声叹息消散。`,effects:{"sanity":-20,"yin":10},ending:"huimen_exp_forgotten"})
};
