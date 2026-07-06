/**
 * 《xitai》场景模块：condemn
 */

export const scenes = {
    condemn_zhou: {
        title: '谴责周生',
        text: `你怒道："你害死了她，现在还想让我替你赎罪？"

周生的脸再次扭曲。他的声音变成了咆哮："你以为我想这样吗？！我每天都看着她再死一次！我每天都听见她在唱！"

戏台上的锣鼓声突然变得急促。周生的身影膨胀，化成一团黑雾向你扑来。

"既然你不愿意唱，" 他的声音从黑雾中传出，"那就永远听我们唱！"`,
        effects: {
            sanity: -30,
            yin: 25
        },
        ending: 'trappedAudience'
    }
};
