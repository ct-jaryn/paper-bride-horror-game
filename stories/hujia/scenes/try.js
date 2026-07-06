/**
 * 《hujia》场景模块：try
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    try_escape_cave: createScene('try_escape_cave', {
        title: "尝试逃出山洞",
        text: "你转身就跑。\n\n洞府里的狐狸们没有追你，只是笑着看你跑。你跑出洞府，冲进山林。\n\n但山林里的路好像永远走不完。你跑了很久，最后发现自己又回到了洞府门口。\n\n狐女站在门口，摇摇头：\"你跑不出去的。这是青丘山，不是人间。\"\n\n她伸出手：\"回来吧。我会对你好的。\"",
        effects: {
            sanity: -15,
            yin: 10,
        },
        choices: [
            createChoice({
                text: "跟她回去",
                next: "marry_fox",
            }),
            createChoice({
                text: "继续跑",
                ending: "lostInFoxRealm",
            }),
        ],
    }),
    try_love_fox: createScene('try_love_fox', {
        title: "尝试爱上她",
        text: "\"我愿意试着爱你。\" 你说。\n\n狐女的眼睛亮了起来。她走过来，轻轻抱住你。她的身体很软，带着桂花和狐狸的味道。\n\n\"你不会后悔的。\" 她说。\n\n接下来的日子，你住在青丘山。狐女教你识字、修仙、与山中精怪打交道。她对你很好，好得让你忘记她是妖。\n\n三年后，雷劫来临。\n\n你站在狐女身前，为她挡雷。但出乎意料的是，当雷劈下来时，狐女推开了你，自己承受了雷击。\n\n\"我说过，\" 她倒在地上，笑着说，\"真心爱我的人，雷劈不死。\"\n\n[red]原来她一直在等你真心。[/red]",
        effects: {
            sanity: 10,
            yin: -20,
        },
        ending: "trueLove",
    })
};
