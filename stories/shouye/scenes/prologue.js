/**
 * 《守夜》场景模块：prologue
 */

export const scenes = {
    prologue: {
        title: '守夜开始',
        text: `午夜十二点，殡仪馆的灯全灭了。

不是停电，是规矩。守夜人林叔说过："过了子时，厅里的灯不能开太亮。有些东西，见光会醒。"

你叫周遥，县殡仪馆最年轻的守灵人。今晚轮到你值守七号厅。

七号厅里躺着一具无名女尸，三天前在河边被发现。她穿着一身大红戏服，脸上化着浓妆，双手交叠放在胸前，指甲缝里全是河泥。

她的手腕露在戏服袖口外。你很确定入殓时那里什么都没有，可现在却有一圈浅浅的红印，像是曾经系过什么细细的红绳，又被人生生解了下来。

法医说她泡在水里至少一个月了，可她的妆一点没花。

你坐在厅外的塑料椅上，百无聊赖地刷着手机。忽然，七号厅里传来一声轻响。

[whisper]咔。[/whisper]

像是……有人把眼皮撑开了。`,
        effects: {
            sanity: -5,
            yin: 5
        },
        choices: [
            {
                text: '开灯进去查看',
                next: 'enter_with_light'
            },
            {
                text: '拿手电筒悄悄推门',
                next: 'enter_with_flashlight'
            },
            {
                text: '按规矩先敲三下门',
                next: 'knock_first',
                effects: { yin: -5 }
            },
            {
                text: '屏住呼吸，听见停尸间深处传来低语',
                next: 'morgue_whisper',
                condition: { yinAbove: 15 },
                hidden: true,
                effects: { sanity: -5, yin: 10 }
            }
        ]
    },

    // 停尸间低语（新增隐藏分支）
};
