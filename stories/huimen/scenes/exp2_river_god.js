/**
 * 《回门》场景模块：exp2_river_god
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_river_god: createScene('huimen_exp2_river_god', {title:'河神石',text:`你在河边发现一块巨大的石头。

石头立在河中央，半截没在水里，半截露出水面。石头是青石的，被水冲得光滑，上面长着一层青苔。石头上刻着"河神之位"四个字，字是阳刻，很深，每一笔都像是要嵌进石头里。

石头周围漂着许多纸船，每只船都是黄纸折的，船身上都写着一个名字。纸船围着石头转，像是在绕圈，转了几十年也没散。

你走近石头，发现石头上有一道裂缝。缝是从顶上裂下来的，裂得很深，缝里渗出黑色的液体，像血，又像墨。液体顺着石头往下流，滴进河水里，把河水染黑了一小片。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"把手放在石头上","next":"huimen_exp2_river_god_touch","effects":{"yin":3}}),createChoice({"text":"在石头上刻字","next":"huimen_exp2_river_god_carve","effects":{"yin":-3}}),createChoice({"text":"把纸船推开","next":"huimen_exp2_river_god_boats","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_god_touch: createScene('huimen_exp2_river_god_touch', {title:'河神之触',text:`你把手放在石头上。

石头很冰，冰得刺骨，像是把你的手心冻进骨头里。你感到有什么东西从石头里钻出来，顺着你的手臂往上爬——是一种黏腻的、湿冷的感觉，像是有许多小虫子在皮肤下面走。

"又一个周家的人。" 一个苍老的声音说，从石头里传来，沉闷，像是从地底涌上来的，"你们周家欠这条河太多命。三百年，三十几条命，都沉在这河底。"

"我来还债。" 你说。

"那就把你的名字刻上来。" 河神说，"刻一个名字，还一条命。"`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"刻秀兰的名字","next":"huimen_exp2_river_god_carve_xiulan","effects":{"sanity":5,"yin":-10}}),createChoice({"text":"刻自己的名字","next":"huimen_exp2_river_god_carve_self","effects":{"yin":10}})]}),
    huimen_exp2_river_god_carve_xiulan: createScene('huimen_exp2_river_god_carve_xiulan', {title:'河石刻名',text:`你用手指，在石头上刻下"周氏秀兰"四个字。

石头很硬，你的指甲翻了，血渗出来，渗进石头里，石头就把字吸了进去。刻完，石头开始震动，黑色的液体从裂缝里涌出，却不是血，而是像墨水一样的东西，黑得发亮。

河面上的纸船纷纷让开，让出一条路。路尽头，露出河底的一块青石，和你在河边见过的那块一样。

"你替她还了船钱。" 河神说，"她可以渡河了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_paid_xiulan_river_fare"},choices:[createChoice({"text":"送秀兰渡河","ending":"huimen_exp2_ending_river_god","effects":{"yin":-5}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_god_carve_self: createScene('huimen_exp2_river_god_carve_self', {title:'刻己',text:`你刻下自己的名字。

石头吸收了你的名字，你感到自己的生命力在流失——像是有什么东西从你的胸口被抽走，顺着你的手臂，流进石头里。你的头发在变白，一根一根地，从发根白到发梢。

河神的声音变得满意，带着一种贪食后的餍足："好，又一条命。"

[red]你成了周家又一个献祭给河的人。你的名字会被刻在石头上，和秀兰的并排。后来人会念你的名字，却不知道你是谁。[/red]`,effects:{"sanity":-15,"yin":10},choices:[createChoice({"text":"挣脱","next":"huimen_exp2_riverbank","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"放弃","ending":"huimen_exp2_ending_village_head_judge","effects":{"yin":5}})]}),
    huimen_exp2_river_god_carve: createScene('huimen_exp2_river_god_carve', {title:'刻石',text:`你捡起一块尖锐的石头，在河神石上刻字。

石头砸石头，发出"叮叮"的声响，火星四溅。你刻下"无辜"二字，每一笔都刻得很深，深得几乎要把石头凿穿。

石头发出一声哀鸣，像是被你打疼了。裂缝里的黑液开始变清，从墨色变成灰色，又从灰色变成无色。

"你刻的是什么？" 河神问，声音里有疑惑。

"真相。" 你说，继续刻。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_river_god"},choices:[createChoice({"text":"继续刻","next":"huimen_exp2_river_god_carve_more","effects":{"sanity":-3,"yin":-3}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_god_carve_more: createScene('huimen_exp2_river_god_carve_more', {title:'刻满',text:`你继续刻，刻下"秀兰、柳红、阿绣、云袖……"所有你能记住的名字。

每刻一个，河神石就颤一下，像是在替那个人松一口气。刻到最后一个，河神石"咔嚓"一声，从中间裂开。黑色的液体全部涌出，化作许多女子的身影。她们朝你鞠躬，然后顺着河水漂向远方，越漂越远，越漂越淡。

"你替我们把名字刻在了河上。" 她们说，声音渐远，"河水会记住我们。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_carved_all_names_on_river"},choices:[createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_god_boats: createScene('huimen_exp2_river_god_boats', {title:'推船',text:`你把河神石周围的纸船，一只一只推开。

每只船被你推开时，都会发出一声轻轻的叹息。那叹息是女子的声音，每一只船的叹息都不一样，有的轻，有的重，有的像是在哭。

你推了许久，忽然意识到，这些船不是被困在这里，而是在等一个愿意推它们走的人。它们等了三十年，等一个人来，对它们说"你可以走了"。

"谢谢你。" 一个声音说，从许多只船里同时传出来，"我们等了三十年，终于等到有人愿意让我们走。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"继续推","next":"huimen_exp2_riverbank","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
