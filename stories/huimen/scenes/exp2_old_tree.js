/**
 * 《回门》场景模块：exp2_old_tree
 */

export const scenes = {
    huimen_exp2_old_tree: {
        title: '老槐树下',
        text: `你再次来到村口的老槐树下。

老槐树的树干上刻满了名字，有新有旧。你仔细辨认，发现最深处刻着"周文"和"秀兰"两个名字，中间画着一颗心。

[red]那是他们年轻时刻下的。[/red]`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"抚摸那两个名字","next":"huimen_exp2_old_tree_touch","effects":{"yin":-3}},{"text":"在名字旁边刻字","next":"huimen_exp2_old_tree_carve","effects":{"yin":-3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_old_tree_touch: {
        title: '触名',
        text: `你用手指抚摸"周文"和"秀兰"两个字。

树皮粗糙，字迹却很深，像是刻了很多遍。你忽然感到一阵温暖，不是树皮的热，是记忆里残留的温度。

"他刻了很多遍。" 秀兰说，"每次吵架，他都会来刻一遍，说这样我就不会离开他。"`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_touched_old_tree_names"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_old_tree_carve: {
        title: '老树刻字',
        text: `你掏出小刀，在两个名字旁边刻下：

"愿来世，你们能堂堂正正在一起。"

刻完，一阵风吹过，老槐树的叶子沙沙作响，像是一声叹息。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_old_tree"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
