/**
 * 《heniang》场景模块：leave
 */

export const scenes = {
    leave_dress_by_river: {
        title: '留衣',
        text: `你把秀兰的嫁衣平铺在河岸上，像是在为两个不相干的女子搭一座桥。

"秀兰阿姨，" 你对着河水说，"我妈也是个可怜人。她下来不是为了害你，是为了陪她的老朋友。如果你在天有灵，帮帮她，别让她忘了岸上的家。"

河水轻轻拍打着岸边的石头，发出温柔的声响。

母亲浮出水面，看着那件嫁衣。她的眼神不再空洞，而是带着一丝悲伤。

"秀兰……" 她说，"原来我们都一样。"

她转向你："儿子，妈不会拉你下水。但妈也上不去。你走吧，别再来河边了。"`,
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: 'xiulanDressOffered'
        },
        choices: [
            {
                text: '答应她，去找救她的办法',
                next: 'find_shenpo'
            }
        ]
    }
};
