/**
 * 《回门》场景模块：exp2_moonlit
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_moonlit_path_rest: createScene('huimen_exp2_moonlit_path_rest', {title:'月光路休息',text:`你走在月光小路上，感到疲惫。

路边出现一块大石头，你坐下来休息。石头上刻着一行小字："路人若累，可坐此石，听我讲故事。"

[red]石头是暖的，像被人坐过很多年。[/red]`,effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"听石头讲故事","next":"huimen_exp2_moonlit_path_stone_story","effects":{"yin":-3}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]}),
    huimen_exp2_moonlit_path_stone_story: createScene('huimen_exp2_moonlit_path_stone_story', {title:'石语',text:`你坐下，石头发出一个苍老的声音：

"很久以前，这里还没有周家村。有一对外乡男女相爱，被村里人反对。女子被活埋，男子在井边守了一辈子。"

"那口井，就是后来的周家井。" 石头说，"那女子，就是秀兰的前世。"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp2_heard_stone_story"},choices:[createChoice({"text":"问怎么结束这个循环","next":"huimen_exp2_moonlit_path_stone_ask","effects":{"yin":1}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]}),
    huimen_exp2_moonlit_path_stone_ask: createScene('huimen_exp2_moonlit_path_stone_ask', {title:'问法',text:`你问："怎么结束这个循环？"

石头说："有人愿意替她活一次，替她痛一次，替她记住一次。你做到了，循环就可以结束。"

"但你会老得很快。" 石头说，"因为你替她过了三十年。"`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_knew_cycle_end_price"},choices:[createChoice({"text":"愿意替她过","ending":"huimen_exp2_ending_white_hair","effects":{"yin":-10}}),createChoice({"text":"继续走","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]})
};
