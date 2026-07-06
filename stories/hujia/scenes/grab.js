/**
 * 《hujia》场景模块：grab
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    grab_pearl: createScene('grab_pearl', {
        title: "夺取狐珠",
        text: "你伸手去抓避雷珠。\n\n石棺盖突然飞起，一只巨大的狐狸爪子拍向你。你被拍飞出去，撞在墓墙上，吐出一口血。\n\n狐女惊呼一声，化作白狐扑向石棺。\n\n墓室里一片混乱。你趁着混乱抓起避雷珠，往墓外跑。\n\n你跑出古墓，身后传来狐女的惨叫。你没有回头。\n\n[red]你活下来了，但狐女死在了里面。[/red]\n\n你看着手里的避雷珠，不知道自己是该哭还是该笑。",
        effects: {
            sanity: -40,
            yin: 20,
        },
        ending: "survivedAlone",
    })
};
