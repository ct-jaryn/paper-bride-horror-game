/**
 * 《tishen》场景模块：smash
 */

export const scenes = {
    smash_doll: {
        title: '砸毁纸人',
        text: `你抄起院子里的铁锹，砸向纸人。

纸人的头被砸扁了，身体歪向一边。但它没有倒下，反而伸出纸手，抓住了铁锹。

"你砸我，" 纸人说，"就是在砸你自己。"

它的话让你愣住。你低头看自己的手，发现手背上出现了一道伤口——和纸人被砸的位置一模一样。

[red]你们真的连在一起了。[/red]

"别伤害我。" 纸人说，"我不想伤害你。我只是想活。"`,
        effects: {
            sanity: -20,
            yin: 15
        },
        choices: [
            {
                text: '放下铁锹',
                next: 'ask_doll_truth'
            },
            {
                text: '继续砸',
                next: 'keep_smashing',
                effects: { sanity: -15 }
            }
        ]
    },

    // 继续砸纸人（新增场景，补全引用）
};
