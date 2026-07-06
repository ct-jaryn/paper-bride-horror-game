/**
 * 《hujia》场景模块：village
 */

export const scenes = {
    village_battle: {
        title: '村庄之战',
        text: `村民们拿起农具，和狐群战在一起。

但普通人怎么是狐狸的对手？很快，村民们就被狐群冲散。惨叫声、哭喊声混成一片。

你看见老村长被一只狐狸扑倒，看见隔壁家的孩子被狐狸叼走。

[red]这都是因为你。[/red]

你大喊："停下！我跟你们走！"

狐群停了下来。狐女走到你面前，伸手擦去你脸上的血："早点答应，不就好了？"`,
        effects: {
            sanity: -40,
            yin: 30,
            visual: 'blood'
        },
        choices: [
            {
                text: '跟她走',
                next: 'marry_fox'
            }
        ]
    }
};
