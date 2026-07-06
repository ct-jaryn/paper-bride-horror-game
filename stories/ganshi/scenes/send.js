/**
 * 《ganshi》场景模块：send
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    send_to_family: createScene('send_to_family', {
        title: "送她回家",
        text: "\"我送你回娘家。\" 你说。\n\n女尸摇摇头，指向西方。\n\n\"你想回周家？\" 你问。\n\n女尸又摇头，然后做了一个\"报仇\"的手势。\n\n你明白了。她不想回家，她想报仇。\n\n\"我帮你。\" 你说，\"但报仇之后，你要去该去的地方。\"\n\n女尸点点头，把一只手搭在你肩上。她的手是温的。\n\n[red]你们一起向周家走去。[/red]\n\n（未完待续，可衔接《回门》剧情）",
        effects: {
            yin: 10,
            setFlag: "hujia_to_zhou",
        },
        ending: "toZhouClan",
    })
};
