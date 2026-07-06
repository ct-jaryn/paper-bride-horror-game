/**
 * 《回门》场景模块：ghost
 */

export const scenes = {
    use_talisman_ghost: {
        title: '以符驱鬼',
        text: `一个纸人突然朝你扑来！

你下意识摸出护身符挡在面前。纸人撞到符上，发出一声刺耳的尖叫，像被火烧到一样缩了回去。

但护身符也瞬间变成了黑色，碎成几片飘落。

[faded]它替你挡了一次。[/faded]`,
        effects: {"sanity":-5,"removeItem":"护身符","yin":-10},
        choices: [{"text":"趁机会逃走","next":"huimen_exp_village_street"}],
    }
};
