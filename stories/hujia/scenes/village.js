/**
 * 《hujia》场景模块：village
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    village_battle: createScene('village_battle', {
        title: "村庄之战",
        text: "村民们拿起农具，和狐群战在一起。\n\n但普通人怎么是狐狸的对手？很快，村民们就被狐群冲散。惨叫声、哭喊声混成一片。\n\n你看见老村长被一只狐狸扑倒，看见隔壁家的孩子被狐狸叼走。\n\n[red]这都是因为你。[/red]\n\n你大喊：\"停下！我跟你们走！\"\n\n狐群停了下来。狐女走到你面前，伸手擦去你脸上的血：\"早点答应，不就好了？\"",
        effects: {
            sanity: -40,
            yin: 30,
            visual: "blood",
        },
        choices: [
            createChoice({
                text: "跟她走",
                next: "marry_fox",
            }),
        ],
    })
};
