/**
 * 《回门》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // huimen:prologue
    'huimen:prologue': [
        {
            text: '青石镇……这名字像在别处听过',
            next: 'huimen_easter_qingshi_paper'
        }
    ],
    // huimen:to_old_house
    'huimen:to_old_house': [
        {
            text: '这纸人的扎法，与别处见过的“云秀”有几分相似',
            next: 'huimen_easter_paper_doll'
        }
    ]
};

export const scenes = {
    huimen_easter_qingshi_paper: {
        title: '旧报碎片',
        text: `你蹲下身，从泥水里捞出那张湿透的旧报纸。

头条已被水泡得模糊不清，但配图仍能辨认：一座残破戏台，台下黑压压地坐着许多“人”。那些“人”的姿势太整齐了，不像活人。

[faded]“青石镇戏台鬼戏又唱，三具尸体连夜离镇……”[/faded]

你心中一动。这戏台、这尸体，仿佛和眼前山村隔着千山万水，又仿佛只隔了一层薄薄的纸。

你把报纸折好，塞进了怀里。也许只是巧合。也许不是。`,
        effects: { sanity: -3, yin: 5, addItem: '青石镇旧报纸' },
        choices: [
            { text: '起身进村', next: 'to_old_house' }
        ]
    },

    huimen_easter_paper_doll: {
        title: '纸人残影',
        text: `你凑近灵堂里的纸扎人。

它的眉眼与记忆中的“云秀”并不相同，可那种被纸壳封住的绝望如出一辙。纸人没有眼睛，你却觉得它在看着你，看着你身后的某段过去。

[whisper]“替身的纸，守夜的灰，都是同一双手扎出来的。”[/whisper]

你猛然回头，身后空无一人。`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '后退一步', next: 'to_old_house' }
        ]
    }
};
