/**
 * 《回门》场景模块：exp_xiulan_bond_name
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_restore_xiulan_name: createScene('huimen_exp_restore_xiulan_name', {title:"族谱正名",text:`你咬破手指，鲜血涌出来，红艳艳的。你在族谱的空白页上，一笔一划写下：

"周氏秀兰，周家长子未婚妻，明媒正娶，未嫁而亡。周家后人今正其名，以血为证。"

血字渗入纸页，发出淡淡的红光，一闪一闪。祖祠里的牌位开始颤抖，一个接一个，像受了惊。最上面那座"周氏先祖"的牌位"咔嚓"一声裂开，裂缝从正中直贯到底。

[whisper]"够了。"[/whisper]秀兰的声音从四面八方传来，像是填满了整间祠堂，"不用再写了。"

你感到胸口的压抑彻底消散了。手腕上的红痕也变得温热，像是一个安心的印记，贴着脉搏。`,effects:{"sanity":15,"yin":-15,"setFlag":["huimen_exp_restored_xiulan_name_in_hall","restored_xiulan_name"]},choices:[createChoice({"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"回老宅，把这件事告诉亲戚","next":"huimen_exp_return_coffin","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish: createScene('huimen_exp_xiulan_wish', {title:"秀兰的愿望",text:`秀兰想了很久，井水里泛着一圈一圈的涟漪。

"我最想要的？"她说，声音轻轻的，"我想穿一次凤冠霞帔，光明正大地嫁一次人。不是冥婚，不是替身，是堂堂正正地拜天地。"

"我还想吃一次桂花糕。小时候母亲说过，嫁人的时候，要请全村人吃桂花糕。"

"我还想……"她顿了顿，声音低了下去，"想有人在我死的时候，叫我一声秀兰，而不是不祥女。"

[red]她的愿望很小，小到让人心碎。[/red]`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_xiulan_wish"},choices:[createChoice({"text":"答应帮她实现愿望","next":"huimen_exp_xiulan_wish_promise","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish_promise: createScene('huimen_exp_xiulan_wish_promise', {title:"秀兰心愿承诺",text:`你说："我会帮你实现。我带你去拜天地，给你买桂花糕，让所有人都叫你的名字。"

秀兰愣了一下，然后笑了。她笑得很轻，像一片落叶飘在水面，荡开一圈涟漪。

"你知不知道，"她说，"男人骗女人的时候，最喜欢说'我会'。"

"我不会骗你。"你说。

秀兰看着你，眼眶里的红色渐渐褪去，一点一点。

"那好。"她说，"我信你这一次。"

井水泛起涟漪，像是一个女子终于舒展了眉头。`,effects:{"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_use_xiulan_hair: createScene('huimen_exp_use_xiulan_hair', {title:"缠发",text:`你取出秀兰的头发，握在手心，乌黑冰凉。

头发虽然离开了她，却依然带着她的气息，一股淡淡的桂花香。你把头发系在手腕上，和自己的脉搏贴在一起，一跳一跳。

"你做什么？"秀兰问。

"这样你就不会走丢了。"你说。

秀兰笑了："傻子，我是鬼，不会走丢的。"

"可我会。"你说，"所以让我带着你。"

头发化作一道红光，缠上你的手腕，像一根细细的红绳，勒出一道浅浅的印。`,effects:{"sanity":5,"yin":-5,"removeItem":"秀兰的头发","setFlag":"huimen_exp_wearing_xiulan_hair"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_name: createScene('huimen_exp_xiulan_name', {title:"名字",text:`你问秀兰："你的名字是谁取的？"

"我娘。"她说，"她说我出生的时候，院子里的兰花开了，开了一院子的白，所以叫我秀兰。"

"很好听。"你说。

"可周家的人从不叫我的名字。"她说，声音低了下去，"他们叫我贱人、不祥女、赔钱货。"

"那是他们瞎。"你说，"你的名字很好听。秀兰，周秀兰。"

秀兰看着你，眼泪落了下来。这次的眼泪不是红色的，是透明的，清亮。

"你再叫一次。"她说。

"周秀兰。"你说。

她又哭了，但这一次是笑着哭的，肩膀一耸一耸。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_called_xiulan_name"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
