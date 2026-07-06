/**
 * 《回门》场景模块：exp_xiulan_bond
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_restore_xiulan_name: createScene('huimen_exp_restore_xiulan_name', {title:'族谱正名',text:`你咬破手指，在空白页上写下：

"周氏秀兰，周家长子未婚妻，明媒正娶，未嫁而亡。周家后人今正其名，以血为证。"

血字渗入纸页，发出淡淡的红光。祖祠里的牌位开始颤抖，最上面那座"周氏先祖"的牌位"咔嚓"一声裂开。

[whisper]"够了。"[/whisper] 秀兰的声音从四面八方传来，"不用再写了。"

你感到胸口的压抑彻底消散了。手腕上的红痕也变得温热，像是一个安心的印记。`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp_restored_xiulan_name_in_hall"},choices:[createChoice({"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"回老宅，把这件事告诉亲戚","next":"huimen_exp_return_coffin","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish: createScene('huimen_exp_xiulan_wish', {title:'秀兰的愿望',text:`秀兰想了很久。

"我最想要的？" 她说，"我想穿一次凤冠霞帔，光明正大地嫁一次人。不是冥婚，不是替身，是堂堂正正地拜天地。"

"我还想吃一次桂花糕。小时候母亲说过，嫁人的时候，要请全村人吃桂花糕。"

"我还想……" 她顿了顿，"想有人在我死的时候，叫我一声秀兰，而不是不祥女。"

[red]她的愿望很小，小到让人心碎。[/red]`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_xiulan_wish"},choices:[createChoice({"text":"答应帮她实现愿望","next":"huimen_exp_xiulan_wish_promise","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_wish_promise: createScene('huimen_exp_xiulan_wish_promise', {title:'秀兰心愿承诺',text:`你说："我会帮你实现。我带你去拜天地，给你买桂花糕，让所有人都叫你的名字。"

秀兰愣了一下，然后笑了。她笑得很轻，像一片落叶飘在水面。

"你知不知道，" 她说，"男人骗女人的时候，最喜欢说'我会'。"

"我不会骗你。" 你说。

秀兰看着你，眼眶里的红色渐渐褪去。

"那好。" 她说，"我信你这一次。"

井水泛起涟漪，像是一个女子终于舒展了眉头。`,effects:{"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_outside_world: createScene('huimen_exp_xiulan_outside_world', {title:'外面',text:`你坐在井沿上，给秀兰讲外面的世界。

你讲汽车、火车、飞机，讲高楼、电影、手机。你讲女孩子可以读书、工作、自己决定嫁不嫁人。

秀兰听得入神，时不时问一句："真的吗？"

"真的。" 你说，"如果你活到现在，你可以做任何想做的事。"

秀兰沉默了很久，然后说："那下辈子，我要活在你说的那个世界里。"

[whisper]"我要考大学，要当老师，要嫁一个真心待我的人。"[/whisper]

[red]她的声音很轻，却带着一种穿越三十年的渴望。[/red]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"告诉她一定会的","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-3}})]}),
    huimen_exp_xiulan_hair: createScene('huimen_exp_xiulan_hair', {title:'梳头',text:`你坐在井边，给秀兰梳头。

她的头发很长，从井里一直拖到地上。你用手指梳理那些打结的发丝，动作很轻。

"我娘以前也这样给我梳头。" 秀兰说，"她说，女子的头发是命，要爱惜。"

"你的命不该这么短。" 你说。

秀兰沉默了一会儿，然后说："可我的头发还在。三十年了，还在长。"

[red]你梳了很久，直到她的头发顺得像一条黑色的河。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_combed_xiulan_hair_2"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_use_xiulan_hair: createScene('huimen_exp_use_xiulan_hair', {title:'缠发',text:`你取出秀兰的头发，握在手心。

头发虽然离开了她，却依然带着她的气息。你把头发系在手腕上，和自己的脉搏贴在一起。

"你做什么？" 秀兰问。

"这样你就不会走丢了。" 你说。

秀兰笑了："傻子，我是鬼，不会走丢的。"

"可我会。" 你说，"所以让我带着你。"

头发化作一道红光，缠上你的手腕，像一根细细的红绳。`,effects:{"sanity":5,"yin":-5,"removeItem":"秀兰的头发","setFlag":"huimen_exp_wearing_xiulan_hair"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_name: createScene('huimen_exp_xiulan_name', {title:'名字',text:`你问秀兰："你的名字是谁取的？"

"我娘。" 她说，"她说我出生的时候，院子里的兰花开了，所以叫我秀兰。"

"很好听。" 你说。

"可周家的人从不叫我的名字。" 她说，"他们叫我贱人、不祥女、赔钱货。"

"那是他们瞎。" 你说，"你的名字很好听。秀兰，周秀兰。"

秀兰看着你，眼泪落了下来。这次的眼泪不是红色的，是透明的。

"你再叫一次。" 她说。

"周秀兰。" 你说。

她又哭了，但这一次是笑着哭的。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_called_xiulan_name"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_age: createScene('huimen_exp_xiulan_age', {title:'年华',text:`你问秀兰："如果你活着，现在多大了？"

秀兰算了算："四十六了。"

"四十六……" 你说，"应该是一个安稳的年纪。"

"是啊。" 她说，"也许有孩子，也许有孙子。也许我会在院子里种桂花，等他们回家。"

"你会是个好母亲。" 你说。

"你怎么知道？" 她问。

"因为你等了孩子三十年。" 你说，"光这份等，就没人比得上。"

秀兰低下头，看着自己的手。那双手苍白，却温柔。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_rain: createScene('huimen_exp_xiulan_rain', {title:'雨诉',text:`下雨了。

秀兰从井里伸出手，接住一滴雨。

"这雨是我的眼泪。" 她说，"我哭的时候，村子就下雨。"

"那你别哭了。" 你说。

"我忍不住。" 她说，"三十年的委屈，不是想停就能停的。"

你把手伸进雨里，和秀兰一起接着雨滴。

"那我陪你一起淋。" 你说，"你哭多少，我陪多少。"

秀兰看着你，眼泪和雨水混在一起。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_sun: createScene('huimen_exp_xiulan_sun', {title:'向阳',text:`天边露出一丝阳光。

秀兰连忙缩回井里："别照到我。"

"为什么？" 你问。

"鬼不能见太阳。" 她说，"会魂飞魄散的。"

你脱下外套，撑在井口，为她挡住阳光。

"你看，" 你说，"有我在，你可以见太阳。"

秀兰探出一点头，阳光照在她脸上。她眯起眼睛，像是很久没有见过光。

"好暖和。" 她说，"原来太阳这么好。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_mirror_2: createScene('huimen_exp_xiulan_mirror_2', {title:'再照',text:`你再次用井水照秀兰。

这次水面很平静，映出秀兰完整的脸。她没有盖头，没有血泪，只是一个清秀的姑娘。

"我好看吗？" 她问。

"好看。" 你说。

"比新娘子还好看？"

"比任何新娘子都好看。" 你说。

秀兰笑了，那笑容像一朵在井底开了三十年的花。

"谢谢你让我看见自己。" 她说，"三十年了，我第一次觉得自己不那么可怕。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
