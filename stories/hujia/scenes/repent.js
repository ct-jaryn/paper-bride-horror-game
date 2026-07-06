/**
 * 《hujia》场景模块：repent
 */

export const scenes = {
    repent_kill_fox: {
        title: '悔杀狐女',
        text: `你跪在地上，对着狐女消散的方向磕头。

"对不起……" 你说，"我不该杀你……"

但道歉没有用。狐女已经死了。

你捡起地上的狐妖内丹，犹豫了很久，最后把它埋在了院子里。

"愿你安息。" 你说。

从那以后，你每天晚上都会梦见一只白狐。它不咬你，只是远远地看着你。

你知道，它是在等你下去赔命。`,
        effects: {
            sanity: -20,
            yin: 10
        },
        ending: 'hauntedByFox'
    }
};
