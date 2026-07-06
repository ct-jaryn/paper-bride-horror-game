/**
 * 《回门》场景模块：ancestral
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    find_family_tree: createScene('find_family_tree', {title:'周家族谱',text:`你在老宅东厢房的樟木箱底翻出一本泛黄的族谱。

族谱最后一页，秀兰的名字被墨水涂黑了，旁边用朱笔写着"周氏不祥女"五个字。你手指发抖，把涂黑的地方一点点刮开。

秀兰。周家长子未婚妻。民国二十三年卒。

[red]她不是不祥。她是被周家活埋的。[/red]

你在她名字旁边，用颤抖的手写下："周氏秀兰，明媒正娶。"

刚写完最后一个字，窗外的纸钱忽然停了。远处传来一声似有似无的叹息。`,effects:{"sanity":-10,"yin":-15,"setFlag":"restored_xiulan_name"},choices:[createChoice({"text":"把族谱带去找秀兰","next":"small_door"}),createChoice({"text":"把族谱烧了，重写一份","next":"huimen_exp_family_tree_alt"}),createChoice({"text":"族谱碎成几片，需要先拼起来","next":"family_tree_puzzle","condition":{"hasItem":"族谱碎片二"}})]}),
    defend_family: createScene('defend_family', {title:'辩解',text:`你下意识说："那是三十年前的事了，和我没关系……"

话音未落，井底的水突然结冰。秀兰的脸色变得惨白，眼睛里的黑色迅速蔓延，占满了整个眼眶。

"和你没关系？" 她的声音变成了千百个人的合唱，"你是周家的种！你的血里，流着他的罪！"

她的手掐住了你的脖子。那不是实体，而是无数根黑发缠绕成的手。

[red]你的阴气太重了。[/red]`,effects:{"sanity":-30,"yin":20},choices:[createChoice({"text":"挣扎","next":"struggle_in_well","ending":"possessed"})]}),
    family_tree_puzzle: createScene('family_tree_puzzle', {title:'族谱拼图',text:`你手中的族谱碎片只有三张，拼起来刚好是一页。

第一片记载着周家男丁的姓名和生卒。第二片记载着每一代"纸新娘"的名字，但都被朱砂划掉了。第三片是空白，只在角落有一行小字：

[faded]"女不入谱，以纸代之。"[/faded]

你把三张碎片按顺序拼好，族谱上浮现出一个完整的名单——周家百年来所有被活埋、被纸替的女子名字。

[faded]秀兰、柳红、云袖……还有更多你不知道的名字。[/faded]`,effects:{"sanity":-15,"yin":10,"setFlag":"family_tree_complete"},choices:[createChoice({"text":"把完整的族谱带走","next":"huimen_exp_family_tree_alt"}),createChoice({"text":"把族谱碎片贴回祠堂墙上","next":"huimen_exp_zhou_women_alt"}),createChoice({"text":"烧了族谱，终结契约","ending":"hidden_paperDollBurned","condition":{"hasItem":"周家纸人契约"}})]})
};
