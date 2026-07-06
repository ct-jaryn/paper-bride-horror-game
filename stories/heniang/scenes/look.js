/**
 * 《heniang》场景模块：look
 */

export const scenes = {
    look_old_photos: {
        title: '翻看老照片',
        text: `你回到老屋，翻母亲的遗物。

在一个铁盒里，你找到一叠老照片。照片里，年轻时的母亲和一个穿红衣服的姑娘站在一起。姑娘梳着两条辫子，笑得很甜。

照片背面写着："秀姑与莲姐，摄于青石河畔。"

另一张照片里，秀姑一个人站在河边，背对着镜头。她的背影看起来很孤独。

最下面压着一封信，是秀姑写给母亲的：

[faded]"莲姐，我要走了。这世上的苦，我受够了。河娘说水底下暖和，我去了。你要好好活着，把孩子养大。"[/faded]

[red]原来秀姑是主动成为河娘的。[/red]`,
        effects: {
            sanity: -10,
            setFlag: 'foundLetter'
        },
        choices: [
            {
                text: '带着信去河边',
                next: 'walk_riverbank'
            }
        ]
    }
};
