/**
 * 《回门》场景模块：exp2_moonlit
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_moonlit_path_rest: createScene('huimen_exp2_moonlit_path_rest', {title:'月光路休息',text:`你走在月光小路上，双腿像灌了铅，每一步都沉。

路是青石板铺的，缝里长着青苔。月光照下来，把石板照得发白，像一地的骨头。路两旁是枯黄的野草，草里有蟋蟀在叫，叫得断断续续，像是也累了。

你走了很久，看见路边有一块大石头。石头是青色的，圆头圆脑，像一个蹲着的人。你坐下来，石头是暖的，暖得不正常——像是被人坐过很多年，坐出了人的体温。

你低头看，石头上刻着一行小字，字迹已经被磨得模糊，还能辨认：

"路人若累，可坐此石，听我讲故事。"

[red]石头是暖的，像被人坐过很多年。坐的人，等了很久，等一个愿意听故事的人。[/red]`,effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"听石头讲故事","next":"huimen_exp2_moonlit_path_stone_story","effects":{"yin":-3}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]}),
    huimen_exp2_moonlit_path_stone_story: createScene('huimen_exp2_moonlit_path_stone_story', {title:'石语',text:`你坐下，把耳朵贴在石头上。石头是暖的，你听见里面有"咚咚"的声音，像心跳。

石头发出一个苍老的声音，从石头里渗出来，像是从地底传上来的：

"很久以前，这里还没有周家村。有一户外乡女子被沉进井里，只因她不愿嫁给不认识的男子。后来又有第二户、第三户……井边的石头听惯了哭声，就暖了。"

"那口井，就是后来的周家井。" 石头说，"秀兰不是第一个，也不会是最后一个。历史在这里有回声，不是轮回，是同样的罪一再发生。"

"我讲了很多年，讲不动了。"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_heard_stone_story"},choices:[createChoice({"text":"问怎么结束这个循环","next":"huimen_exp2_moonlit_path_stone_ask","effects":{"yin":1}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]}),
    huimen_exp2_moonlit_path_stone_ask: createScene('huimen_exp2_moonlit_path_stone_ask', {title:'问法',text:`你问："怎么结束这个循环？"

石头沉默了一会儿。沉默里，你听见它的心跳慢了下来。

"有人愿意替她活一次，替她痛一次，替她记住一次。" 石头终于说，"你做到了，循环就可以结束。她会安息，你也会被记住。"

"但你会老得很快。" 石头的声音里有悲哀，"因为你替她过了三十年。你的头发会白，你的背会驼，你的眼睛会花。你愿意吗？"

月光忽然暗了一下，像是云遮住了月亮，又像是月亮不忍心看你的回答。`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_knew_cycle_end_price"},choices:[createChoice({"text":"愿意替她过","ending":"huimen_exp2_ending_white_hair","effects":{"yin":-10}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]})
};
