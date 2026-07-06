/**
 * 《ganshi》场景模块：refuse
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    refuse_abandon: createScene('refuse_abandon', {
        title: "拒绝抛弃",
        text: "\"我不会丢下它们。\" 你说。\n\n你重新牵起铜铃，挡在三具尸体前面。\n\n\"前辈，我师父对不起您，您找我报仇，我认。但这些尸体是无辜的，它们要回家。您若还有半点道门中人的良心，就让开。\"\n\n洞里安静了很久。\n\n苍老的声音叹了口气：\"你比你师父强。\"\n\n洞壁上的身影渐渐散去。洞口出现了一缕月光——天快亮了。\n\n\"走吧。\" 声音说，\"但记住，你师父的债，还在你身上。\"",
        effects: {
            sanity: 10,
            yin: -10,
        },
        ending: "passedTheTest",
    }),
    refuse_inherit_sin: createScene('refuse_inherit_sin', {
        title: "拒绝继承罪孽",
        text: "\"师父的错，不该由我来承担。\" 你说。\n\n鬼道人冷笑：\"那你说，该由谁承担？\"\n\n\"该由您自己承担。\" 你说，\"您当年若是没有私心，怎么会和我师父反目？您若是没有执念，怎么会困在这洞里三十年？\"\n\n鬼道人愣住了，然后发出愤怒的咆哮。洞里刮起狂风，石头纷纷落下。\n\n你护住三具尸体，被一块石头砸中了肩膀。\n\n\"你说得对。\" 鬼道人最后说，\"我也有错。\"\n\n风停了。",
        effects: {
            sanity: -10,
            yin: -10,
        },
        ending: "ghostRealizesFault",
    })
};
