/**
 * 《回门》场景模块：exp2_medicine
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_medicine_shop: createScene('huimen_exp2_medicine_shop', {title:'药铺',text:`你循着一股苦涩的药味，来到一间破败的药铺前。

药铺的门面是木板的，木板已经发黑，漆皮翘起来，像鱼鳞。招牌挂在门楣上，只剩半块，上面写着"济世堂"三个字，"堂"字缺了一角。

你推开门，门板"嘎吱"一声，像老人的咳嗽。一股苦涩的药味扑面而来，混着发霉的木味和陈年的灰尘。药柜靠墙立着，一排排小抽屉，每个抽屉上贴着发黄的标签。抽屉大多已经腐烂，有的敞着口，露出里面空空如也。地上散落着各种药材——枯黄的草根、发黑的枣、碎成渣的茯苓。

柜台后面挂着一块匾额，匾是乌木的，上面写着"悬壶济世"，字是金漆写的，金漆已经剥落大半。最末一个"世"字被人用刀划掉了，划痕很深，像是有恨。

你走近柜台，发现柜台上的药戥子还在，秤盘里残留着一撮黑色的粉末。你凑近闻了闻，是一股腥甜的味道，不是药，像血。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"翻看药柜","next":"huimen_exp2_medicine_drawer","effects":{"yin":1}}),createChoice({"text":"查看柜台下的账本","next":"huimen_exp2_medicine_account","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已读过药铺账本，柜台后似乎还有暗门","next":"huimen_exp2_medicine_secret","condition":{"flag":"huimen_exp2_read_medicine_account"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_medicine_drawer: createScene('huimen_exp2_medicine_drawer', {title:'药柜',text:`你拉开一个药柜抽屉。抽屉的木轨已经朽了，一拉就掉下来，砸在地上，溅起一片灰。

里面没有药材，只有一叠黄纸。纸已经发脆，边角卷起，像是被人翻过很多次。纸上写着许多人的名字和生辰八字，字迹工整，是账房先生的笔迹。

你一张张翻过去，翻到最后，找到了秀兰的名字。

纸条背面写着："堕胎药一剂，银元三枚。"

银元三枚。一条命，三枚银元。你把纸条攥在手里，纸条发出"咔"的一声，碎了。`,effects:{"sanity":-8,"yin":3,"addItem":"药铺堕胎记录"},choices:[createChoice({"text":"把记录收好","next":"huimen_exp2_medicine_shop","effects":{"yin":1}}),createChoice({"text":"烧掉记录","next":"huimen_exp2_medicine_shop","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_medicine_account: createScene('huimen_exp2_medicine_account', {title:'账本',text:`你蹲下身，翻开柜台下的账本。

账本是蓝布面的，已经很旧，封面上沾着药渍。你翻开，纸页"哗啦哗啦"地响，每一页都密密麻麻地记着药铺三十年的生意——谁买了什么药，花了多少钱，几月几日。

你翻到最后一页，那一页的纸比别的都新，墨迹也新。上面写着：

"民国二十三年中秋前夜，周家取堕胎药一副，用于不祥女秀兰。另附：稳婆费用，另计。"

[red]原来连药铺都是帮凶。这村子里没有一双干净的手。[/red]

你合上账本，账本比刚翻开时沉了许多，像是那几个字把重量全压了进去。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_read_medicine_account"},choices:[createChoice({"text":"把账本带走","next":"huimen_exp2_medicine_shop","effects":{"yin":1,"addItem":"药铺账本"}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_medicine_secret: createScene('huimen_exp2_medicine_secret', {title:'药铺密室',text:`你在药铺的柜台后发现一道暗门。门是木板的，和墙一个颜色，不仔细看根本看不出来。你按下墙上一块凸起的砖，门"咯"地一声，弹开了。

暗门后是一间小密室，没有窗，只有一盏油灯，灯已经熄了，灯油却还是满的。墙上挂着许多女子的画像，每一幅都画得很细，眉眼、衣裳、神态，一笔一画，像是在画活人。

每一幅画像下面都摆着一碗黑乎乎的药渣。药渣已经干透，结成一块，碗底却还有一圈暗红，像血。

[red]这些药渣，是周家给"不祥女"喝的堕胎药。一碗一碗，都是一条未生的命。[/red]

你数了数，画像有三十几幅，碗有三十几碗。`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"砸碎药碗","next":"huimen_exp2_medicine_secret_smash","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"把画像翻过来","next":"huimen_exp2_medicine_secret_turn","effects":{"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}})]}),
    huimen_exp2_medicine_secret_smash: createScene('huimen_exp2_medicine_secret_smash', {title:'砸碗',text:`你举起一个药碗，用力砸在地上。

碗碎成几瓣，药渣飞溅。每一颗药渣飞起来，都化作一个女子的哭声，尖锐，短促，像被掐住喉咙的猫。墙上的画像开始抖动，画里的女子睁开眼，像是要从画里走出来。

"你砸了我们的药。" 她们说，声音叠在一起，像风穿过竹林，"我们不用再喝了。"

你继续砸，一个接一个。每砸一个，就有一股黑烟从碗里冒出来，化作一个女子的虚影，朝你鞠一躬，然后消散。`,effects:{"sanity":-5,"yin":10,"setFlag":"huimen_exp2_smashed_medicine_bowls"},choices:[createChoice({"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}})]}),
    huimen_exp2_medicine_secret_turn: createScene('huimen_exp2_medicine_secret_turn', {title:'翻画像',text:`你把画像一幅一幅翻过来。

画像背面写着每个女子的真实姓名和生辰，以及一句话："我本无辜。"

字迹各不相同，有的娟秀，有的潦草，有的用力到纸都破了。你把它们一一念出来。每念一个名字，画像上的女子就笑一下，然后那幅画就空了，只剩一张白纸。

念到最后一个——秀兰——你停了一下。她的画像背面写着："周秀兰，民国三年三月初七子时生。我本无辜，亦不愿死。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_read_medicine_portraits"},choices:[createChoice({"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}})]})
};
