/**
 * 《回门》场景模块：exp2_mountain
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_mountain_path: createScene('huimen_exp2_mountain_path', {title:'山路',text:`你踏上一条通往后山的小路。

路是石头铺的，石头已经碎了大半，剩下的也松动了，踩上去"咯吱咯吱"响。路两旁是茂密的竹林，竹子很高，竹叶在风中沙沙作响，像无数人在低声说话，却听不清在说什么。

月光透过竹缝洒下来，在地上形成斑驳的影子，影子随着竹子的摇晃而动，像一群在地上爬的东西。空气里有一股潮湿的泥土味，混着竹叶的清香，清得让人发冷。

你走了很久，路越来越窄，竹子越来越密，最后只剩一条羊肠小道。路尽头停在一座石牌坊前。牌坊是青石的，已经裂了几道缝，缝里长着杂草。牌坊上刻着"周家禁地"四个字，字是阳刻，很深，像是要嵌进石头里。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"穿过牌坊","next":"huimen_exp2_mountain_path_in","effects":{"yin":2}}),createChoice({"text":"绕路走","next":"huimen_exp2_mountain_path_around","effects":{"yin":1}}),createChoice({"text":"继续往山路深处走","next":"huimen_exp2_mountain_path_deep","effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_in: createScene('huimen_exp2_mountain_path_in', {title:'禁地',text:`你穿过牌坊。牌坊下的石板有一道暗痕，像是被人拖过什么东西，留下一条长长的印记。

里面的景象和外面完全不同。没有竹林，只有一片荒凉的石滩。石滩上铺满碎石，每一步都"咯吱咯吱"地响。石滩上立着许多石碑，碑是青石的，矮矮的，每一块碑上都刻着一个名字。

你走近看，发现这些名字都是女子的名字。秀兰、柳红、阿绣、云袖……还有更多你不认识的。有些碑上的字已经被风化得看不清了，只剩一个模糊的轮廓。

[red]这是周家真正的祖坟。男人埋在村里，享受香火；女人埋在这里，无人祭扫。[/red]

石滩上没有一根草，连蟋蟀都不叫。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"在碑前磕头","next":"huimen_exp2_mountain_path_bow","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"寻找秀兰的碑","next":"huimen_exp2_mountain_path_xiulan","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_bow: createScene('huimen_exp2_mountain_path_bow', {title:'山路祭拜',text:`你在每一块碑前都磕了一个头。石滩上的碎石硌得膝盖生疼，你没有停。

"我不知道你们的名字。" 你说，声音在空旷的石滩上回荡，像是对着一群聋子说话，"但我知道你们受过委屈。我替周家给你们磕头。"

磕到最后一块碑，你的额头已经磕破了，血渗出来，滴在碎石上。石碑开始微微颤动，像是有什么东西在碑里醒过来。颤动从一块传到另一块，最后整个石滩都在轻轻地颤。

天边的月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_bowed_at_women_graves"},choices:[createChoice({"text":"继续寻找秀兰","next":"huimen_exp2_mountain_path_xiulan","effects":{"yin":1}}),createChoice({"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_xiulan: createScene('huimen_exp2_mountain_path_xiulan', {title:'秀兰之碑',text:`你找了一块又一块碑，终于在石滩最偏僻的角落，找到秀兰的碑。

碑比别的都矮，像是被人故意压下去。碑上没有名字，只有一行字，刻得很深："周氏不祥女之墓"。碑前放着一束枯萎的桂花，桂花已经发黑，却还散发着一丝若有若无的甜香。

你跪在碑前，用手把"不祥女"三个字一点一点擦掉。石面粗糙，擦得你指腹生疼。

"你不是不祥女。" 你说，一个字一个字地说，"你是周秀兰。你是民国三年生的人，有名字，有父母，有想嫁的人。你只是被人害了。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_found_xiulan_mountain_grave"},choices:[createChoice({"text":"把碑上的字改过来","next":"huimen_exp2_mountain_path_rename","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_rename: createScene('huimen_exp2_mountain_path_rename', {title:'山路正名',text:`你咬破手指，血珠子冒出来。你把血抹在碑上，一笔一画写下：

"周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

血字渗入石碑，发出淡淡的红光。光从秀兰的碑上蔓延开来，一块一块，照亮了整个石滩。每一块碑都亮了，像是被点燃了一样。

你感到有许多目光落在身上。那些目光不再有怨，只有感激。有几十年前的，有十几年的，有刚死的。她们都在看你，看你替她们做了一件周家三百年没做的事。

[red]你帮她们每一个人，拿回了名字。[/red]`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp2_renamed_mountain_grave"},choices:[createChoice({"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_around: createScene('huimen_exp2_mountain_path_around', {title:'绕路',text:`你绕开牌坊，从竹林里穿行。竹子很密，你拨开一根又一根，竹叶割手，割出一道道细口子。

竹林很深，你走了很久，天光被竹叶遮住，只剩下斑斑点点。脚下是厚厚的落叶，踩上去"沙沙"地响。

忽然，你听见前方传来水声。你加快脚步，拨开最后一丛竹子，看见一条小溪。溪水很清，清得能看见底下的卵石。

溪水里漂着许多纸船，每只船都是黄纸折的，船身上都写着"秀兰"二字。船一只接一只地漂过去，没有尽头。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"沿着溪走","next":"huimen_exp2_riverbank","effects":{"yin":1}}),createChoice({"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_deep: createScene('huimen_exp2_mountain_path_deep', {title:'山路深处',text:`你继续往山路深处走。

路越来越陡，脚下的碎石松动了就往下滑，你走得很吃力。两旁的竹子渐渐变了，不再是青的，而是白的——竹竿白得像骨头，竹叶也白得像纸。

你听见山顶传来钟声，沉闷而悠长，每响一声，地面就震动一下。那钟声不是寺庙的钟，是丧钟，一下一下，像是在替谁数日子。

前方有一座小庙，庙很小，只有一间正屋。庙门上挂着一块匾，匾是木的，已经开裂。匾上写着"送子观音"四个字，字是红漆写的，漆已经发黑。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"进庙","next":"huimen_exp2_mountain_temple","effects":{"yin":2}}),createChoice({"text":"绕过庙继续走","next":"huimen_exp2_mountain_path_peak","effects":{"yin":2}}),createChoice({"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_temple: createScene('huimen_exp2_mountain_temple', {title:'送子庙',text:`你走进庙里。庙里很暗，只有一盏长明灯，灯里的油快要烧干了。

庙里没有观音像。神龛上摆着的不是佛像，而是许多泥塑的婴儿。它们排成一排排，每一个都闭着眼，嘴角却带着笑。泥塑已经开裂，裂里露出里面的稻草和棉花。

每一婴儿泥塑的胸前都贴着一张黄符，符上写着生辰八字和"借命"二字。

[red]这是周家求子的地方。每一个泥塑婴儿，都代表一个被借走命的孩子——他们的命被借给周家男丁，借完了，孩子就死了，泥塑留下，当作"还愿"。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"砸碎泥塑","next":"huimen_exp2_mountain_temple_smash","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"给泥塑取名","next":"huimen_exp2_mountain_temple_name","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}})]}),
    huimen_exp2_mountain_temple_smash: createScene('huimen_exp2_mountain_temple_smash', {title:'砸像',text:`你举起一块石头，砸向泥塑婴儿。

石头砸下去，"咔嚓"一声，泥塑碎裂。碎泥里掉出一缕头发，是婴儿的胎发，细软，发黄。一股黑烟从碎泥里冒出来，化作一个小孩的虚影，朝你鞠一躬，然后飞出庙门。

每砸一个，就有一股黑烟，就有一个虚影。你砸了许多个，庙里弥漫着一股烧焦的味道，和一股婴儿的奶香。

"你放了他们。" 秀兰的声音从虚空里传来，"周家再也不能用他们续命了。"`,effects:{"sanity":-5,"yin":5,"setFlag":"huimen_exp2_smashed_baby_statues"},choices:[createChoice({"text":"继续砸","next":"huimen_exp2_mountain_temple","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}})]}),
    huimen_exp2_mountain_temple_name: createScene('huimen_exp2_mountain_temple_name', {title:'取名',text:`你对着泥塑婴儿们，一个一个取名。

"大宝、二宝、三宝……" 你编了许多名字，编到后来，编不出新的，就开始编"念儿"、"想儿"、"盼儿"。每一个名字，你都对着泥塑说一遍，像是在哄一个睡着的孩子。

每取一个，泥塑的笑容就更真一些，从僵的笑变成软的笑。

"我们有名字了。" 一个声音说，细细的，像是从每一个泥塑里发出来的，"有名字，就能找到回家的路。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_named_baby_statues"},choices:[createChoice({"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}})]}),
    huimen_exp2_mountain_path_peak: createScene('huimen_exp2_mountain_path_peak', {title:'山顶',text:`你绕过庙，爬到山顶。

山顶有一块平地，平地上立着一根巨大的石柱。石柱是青石的，有三个人高，柱身上密密麻麻刻满了名字。男子的名字是凸出来的，是阳刻；女子的名字是凹进去的，是阴刻，刻得很浅，像是不配凸出来。

你伸手去摸一个凹进去的名字，指尖传来一阵刺痛，像是被针扎了。你缩回手，指尖上渗出一颗血珠。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"把女子的名字刻深","next":"huimen_exp2_mountain_peak_names","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"在石柱前立誓","ending":"huimen_exp2_ending_mountain_pact","effects":{"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}}),createChoice({"text":"在石柱下发现一粒桂花种子","next":"huimen_exp2_mountain_seed","condition":{"flag":"huimen_exp2_deepened_mountain_names"},"effects":{"yin":1}})]}),
    huimen_exp2_mountain_peak_names: createScene('huimen_exp2_mountain_peak_names', {title:'刻深',text:`你用手指去抠那些凹进去的女子名字。

石面很硬，你的指甲翻了，血渗出来，渗进石柱的缝隙里。血一渗进去，石柱就颤一下，像是在吸你的血。可你没有停，你一个名字一个名字地抠，把它们抠深，抠清晰。

石柱开始颤抖，发出周家祖先的怒吼——那吼声从石柱里渗出来，像是从地底涌上来的，沉闷而愤怒。

但你不管。

"她们的名字，应该比你们的更深。" 你说，声音不大，却稳得很。`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp2_deepened_mountain_names"},choices:[createChoice({"text":"下山","next":"huimen_exp2_mountain_path","effects":{"yin":1}})]}),
    huimen_exp2_mountain_seed: createScene('huimen_exp2_mountain_seed', {title:'山顶种籽',text:`你在山顶石柱下，发现一粒种子。

种子是黑色的，像一颗小小的石头，却比石头轻。你把它捡起来，握在掌心，感到一阵温暖，像是握着一颗小小的太阳。

"那是我的桂花树种。" 秀兰的声音说，从风里传来，"我死前把它埋在后山，希望来世能闻到桂花香。我埋了三十年，它一直没发芽，因为我没有来世。"`,effects:{"sanity":-3,"yin":1,"addItem":"秀兰的桂花种子"},choices:[createChoice({"text":"把种子种在秀兰坟前","ending":"huimen_exp2_ending_seed","effects":{"yin":-5}}),createChoice({"text":"把种子带在身上","next":"huimen_exp2_mountain_path_peak","effects":{"yin":1}})]})
};
