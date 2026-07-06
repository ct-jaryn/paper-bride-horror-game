/**
 * 《ganshi》场景模块：throw
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    throw_talisman: createScene('throw_talisman', {
        title: "掷出符咒",
        text: "你掏出黄符，向声音传来的方向抛去。\n\n黄符在空中燃烧，照亮了洞里的东西。你看见洞壁上趴着无数透明的身影，都在看着你。\n\n苍老的声音发出一声惨叫：\"田家人！你们只会用这些邪术！\"\n\n洞里刮起一阵阴风，把火堆吹灭了。黑暗中，你听见尸体倒地的声音，听见铜铃滚落的声音。\n\n你趴在地上，不敢动弹。\n\n不知过了多久，风停了。你点燃火把，发现三具尸体都不见了。\n\n洞壁上多了一行血字：\n\n[red]\"尸体我收下了。你的命，下次再取。\"[/red]",
        effects: {
            sanity: -30,
            yin: 20,
            visual: "blood",
        },
        ending: "corpsesTaken",
    })
};
