/**
 * 《回门》场景模块：exp_xiulan_bond_name
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_restore_xiulan_name: createScene('huimen_exp_restore_xiulan_name', {title:"族谱正名",text:"你咬破手指，在空白页上写下：\n\n\"周氏秀兰，周家长子未婚妻，明媒正娶，未嫁而亡。周家后人今正其名，以血为证。\"\n\n血字渗入纸页，发出淡淡的红光。祖祠里的牌位开始颤抖，最上面那座\"周氏先祖\"的牌位\"咔嚓\"一声裂开。\n\n[whisper]\"够了。\"[/whisper] 秀兰的声音从四面八方传来，\"不用再写了。\"\n\n你感到胸口的压抑彻底消散了。手腕上的红痕也变得温热，像是一个安心的印记。",effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp_restored_xiulan_name_in_hall"},choices:[createChoice({"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"回老宅，把这件事告诉亲戚","next":"huimen_exp_return_coffin","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish: createScene('huimen_exp_xiulan_wish', {title:"秀兰的愿望",text:"秀兰想了很久。\n\n\"我最想要的？\" 她说，\"我想穿一次凤冠霞帔，光明正大地嫁一次人。不是冥婚，不是替身，是堂堂正正地拜天地。\"\n\n\"我还想吃一次桂花糕。小时候母亲说过，嫁人的时候，要请全村人吃桂花糕。\"\n\n\"我还想……\" 她顿了顿，\"想有人在我死的时候，叫我一声秀兰，而不是不祥女。\"\n\n[red]她的愿望很小，小到让人心碎。[/red]",effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_xiulan_wish"},choices:[createChoice({"text":"答应帮她实现愿望","next":"huimen_exp_xiulan_wish_promise","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish_promise: createScene('huimen_exp_xiulan_wish_promise', {title:"秀兰心愿承诺",text:"你说：\"我会帮你实现。我带你去拜天地，给你买桂花糕，让所有人都叫你的名字。\"\n\n秀兰愣了一下，然后笑了。她笑得很轻，像一片落叶飘在水面。\n\n\"你知不知道，\" 她说，\"男人骗女人的时候，最喜欢说'我会'。\"\n\n\"我不会骗你。\" 你说。\n\n秀兰看着你，眼眶里的红色渐渐褪去。\n\n\"那好。\" 她说，\"我信你这一次。\"\n\n井水泛起涟漪，像是一个女子终于舒展了眉头。",effects:{"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_use_xiulan_hair: createScene('huimen_exp_use_xiulan_hair', {title:"缠发",text:"你取出秀兰的头发，握在手心。\n\n头发虽然离开了她，却依然带着她的气息。你把头发系在手腕上，和自己的脉搏贴在一起。\n\n\"你做什么？\" 秀兰问。\n\n\"这样你就不会走丢了。\" 你说。\n\n秀兰笑了：\"傻子，我是鬼，不会走丢的。\"\n\n\"可我会。\" 你说，\"所以让我带着你。\"\n\n头发化作一道红光，缠上你的手腕，像一根细细的红绳。",effects:{"sanity":5,"yin":-5,"removeItem":"秀兰的头发","setFlag":"huimen_exp_wearing_xiulan_hair"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_name: createScene('huimen_exp_xiulan_name', {title:"名字",text:"你问秀兰：\"你的名字是谁取的？\"\n\n\"我娘。\" 她说，\"她说我出生的时候，院子里的兰花开了，所以叫我秀兰。\"\n\n\"很好听。\" 你说。\n\n\"可周家的人从不叫我的名字。\" 她说，\"他们叫我贱人、不祥女、赔钱货。\"\n\n\"那是他们瞎。\" 你说，\"你的名字很好听。秀兰，周秀兰。\"\n\n秀兰看着你，眼泪落了下来。这次的眼泪不是红色的，是透明的。\n\n\"你再叫一次。\" 她说。\n\n\"周秀兰。\" 你说。\n\n她又哭了，但这一次是笑着哭的。",effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_called_xiulan_name"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
