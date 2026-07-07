/**
 * 《回门》场景模块：exp3_loop_resolution
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_path_heart: createScene('huimen_exp3_loop_path_heart', {title:'心路',text:`你凭着心中的方向走，不再看路标。

脚下的石板时软时硬——软的时候像踩在湿泥上，硬的时候像踩在棺材盖上。你不去想它们是什么，只是把秀兰的脸放在心里，一步一步往前走。

两边的房屋时新时旧，时而是你记忆里的山村，时而变成你从未见过的陌生街巷。有一瞬间，你看见街角站着一个穿学生装的女子，眉眼像秀兰，又不像。她朝你笑了笑，然后融进墙里。

你没有停。

[whisper]秀兰的声音一直在你心口，像一根引路的线。[/whisper]

渐渐地，路变得平坦，天空泛起鱼肚白。雾气从你脚边退去，像退潮的水，露出底下干净的青石板。

你回头，看见身后的山村正在变淡，像一幅被水洇湿的画。那些纸人、灯笼、井、老槐树，都在一点一点褪色。`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"继续走","next":"huimen_exp3_loop_exit_dawn","effects":{"yin":0}})]}),
    huimen_exp3_loop_moon_exit: createScene('huimen_exp3_loop_moon_exit', {title:'月路尽头',text:`月光箭头指向一条蜿蜒的小路。

小路上没有纸人，没有白灯笼，只有清冷的月光和路边不知名的白花。那些花开得很安静，花瓣薄得像纸，风一吹就落，落在你肩上又化成水。

你走了很久，久到分不清是走了一夜还是走了三十年。鞋底磨穿了，脚底磨出血，血滴在路上，被月光照得发亮。

走到天边泛起微光时，你看见前方有一个人影。

秀兰站在小路尽头。她穿着那件粉色的新嫁衣，不是周家给的红，是她自己想要的粉。她身上没有井水的湿气，没有怨鬼的阴冷，只是一个等了很久的姑娘。

"你找到真正的路了。"她说，声音里带着笑意，也带着一点哭腔。`,effects:{"sanity":8,"yin":-5},choices:[createChoice({"text":"走向她","next":"huimen_exp3_loop_dawn_together","effects":{"yin":0}})]}),
    huimen_exp3_loop_exit_dawn: createScene('huimen_exp3_loop_exit_dawn', {title:'黎明出口',text:`你走到小路的尽头，那里有一座石牌坊。

牌坊上刻着"回门"二字，但字迹已经风化，笔画断断续续，像是很多年没有人走过了。石缝里长满了青苔，青苔里开着细小的白花，和你来时路上的一样。

你伸手去摸那两个字，指尖触到的石是温的，像有人刚刚还在这里站过。

你跨过牌坊，身后的山村忽然安静下来。不是死寂，是一种久违的、干净的静——没有纸钱的沙沙声，没有井底的水声，没有秀兰的哭。

风从牌坊外吹来，带着泥土和青草的味道。你深吸一口气，肺里第一次没有了那股腐朽的甜。

你知道，循环被你打破了。

[faded]但你手里还攥着一根断掉的红绳，像攥着一段没有说完的话。[/faded]`,effects:{"sanity":8,"yin":-5},choices:[createChoice({"text":"继续走","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}})]}),
    huimen_exp3_loop_dawn_together: createScene('huimen_exp3_loop_dawn_together', {title:'黎明循环同行',text:`秀兰走在你身侧，身影越来越淡。

晨光落在她身上，她就像一张被阳光照透的纸。你伸手想拉她，手却穿过了她的指尖——那指尖已经凉了，凉得像晨露。

"我不能再往前了。"她说，停下脚步。她的脚边，那件粉色嫁衣的下摆开始化成纸灰，"但你已经打破循环，可以出去了。"

她把一样东西塞进你手里——是她腕上那根红绳，现在已经断了。断口很整齐，像是被人用剪刀剪断的，又像是自己终于撑不住，断了。

"带着它，别再回来。"她说，"回来一次，就多困一个你。"

[whisper]她的声音越来越远，像是从井底传上来的最后一句话。[/whisper]`,effects:{"sanity":5,"yin":-3,"addItem":"断红绳"},choices:[createChoice({"text":"独自离开","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}}),createChoice({"text":"说你会带她一起","next":"huimen_exp3_loop_dawn_bones","condition":{"hasItem":"秀兰的骨殖"},"effects":{"sanity":5,"yin":0}})]}),
    huimen_exp3_loop_dawn_bones: createScene('huimen_exp3_loop_dawn_bones', {title:'携骨',text:`你把背上的骨殖抱到身前。

骨殖很轻，轻得像一捆干柴。你隔着布包摸到她的肩胛骨，那处旧伤的凹痕还在——是被红绳勒出来的，三十年都没长好。

"我已经带你出来了。"你说，声音哽在喉咙里，"不管是魂还是骨，我们一起走。"

秀兰的身影在晨光里颤抖。她伸出手，触碰骨殖。指尖触到的那一刻，她整个人化成一缕光，融进骨殖里。

骨殖在你怀里变轻，越来越轻，最后只剩一件粉色的嫁衣，叠得整整齐齐，像刚从裁缝铺取回来。

嫁衣上还带着一点桂花的香。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"离开山村","ending":"huimen_exp3_hidden_return_with_xiulan","effects":{"yin":0}}),createChoice({"text":"回老宅，完成最后一件事","next":"huimen_exp3_return_mainline","condition":{"hasItem":"秀兰的骨殖"},"effects":{"yin":0}})]})
};
