/**
 * 《阴阳簿》跨卷彩蛋与隐藏分支扩展
 *
 * 设计原则：
 * - 每卷故事仍独立成篇，不破坏首次游玩体验。
 * - 彩蛋只在玩家已经历过其他故事后，以“似曾相识”“旧报纸”“路人低语”
 *   等模糊方式出现，不直接点明“阴阳世界”。
 * - 新增选择均带有 condition/hidden，不影响主线流程。
 */

import { Huimen } from './namespace.js';

/**
 * 需要注入到当前故事场景中的额外选择
 * key 格式：storyId:sceneId
 */
const EASTER_EGG_CHOICES = {
    // 回门 · 村口老槐：若玩家曾在赶尸中到过青石镇，会对报纸上“青石镇戏台”多一分留意
    'huimen:prologue': [
        {
            text: '青石镇……这名字像在别处听过',
            next: 'huimen_easter_qingshi_paper',
            condition: { flag: 'ganshi_to_qingshi' },
            hidden: true,
            effects: { sanity: -3, yin: 5 }
        }
    ],

    // 回门 · 老宅：若玩家曾在守夜中见过纸人还魂，会对灵堂纸扎人多一分警觉
    'huimen:to_old_house': [
        {
            text: '这纸人的扎法，与别处见过的“云秀”有几分相似',
            next: 'huimen_easter_paper_doll',
            condition: { flag: 'yunxiuLinkedToPaper' },
            hidden: true,
            effects: { sanity: -5, yin: 8 }
        }
    ],

    // 守夜 · 序章：若玩家曾在回门中听过纸人低语，会对殡仪馆里的纸灰更敏感
    'shouye:prologue': [
        {
            text: '检查地上那一点奇怪的纸灰',
            next: 'shouye_easter_paper_ash',
            condition: { flag: 'heard_paper_whisper' },
            hidden: true,
            effects: { sanity: -5, yin: 10 }
        }
    ],

    // 戏台 · 后台：若玩家曾在河娘中听过水下合唱，会对戏台水缸中的回响有共鸣
    'xitai:backstage': [
        {
            text: '水缸里的回声……像是河边唱歌的女人',
            next: 'xitai_easter_river_voice',
            condition: { flag: 'heardUnderwaterChorus' },
            hidden: true,
            effects: { sanity: -6, yin: 8 }
        }
    ],

    // 替身 · 院子：若玩家曾在狐嫁中见过狐影，会察觉纸人身上的“青丘”纹样
    'tishen:prologue': [
        {
            text: '纸人衣角绣着青丘山纹',
            next: 'tishen_easter_fox_mark',
            condition: { flag: 'sawFoxShadow' },
            hidden: true,
            effects: { sanity: -4, yin: 6 }
        }
    ],

    // 河娘 · 河边：若玩家曾在戏台中见过真后台，会对水中戏服有熟悉感
    'heniang:prologue': [
        {
            text: '那件红裳的款式，像在戏台见过',
            next: 'heniang_easter_opera_dress',
            condition: { flag: 'sawTrueBackstage' },
            hidden: true,
            effects: { sanity: -4, yin: 7 }
        }
    ],

    // 狐嫁 · 青丘山：若玩家曾在回门中得知周家罪孽，会对狐女口中的“周家债”有反应
    'hujia:prologue': [
        {
            text: '周家的债……是指回门那口井？',
            next: 'hujia_easter_zhou_debt',
            condition: { flag: 'zhouDebtAcknowledged' },
            hidden: true,
            effects: { sanity: -5, yin: 8, setFlag: 'zhouDebtAcknowledgedByFox' }
        }
    ],

    // 赶尸 · 雨夜山路：若玩家曾在替身的纸扎铺见过同名纸人，会对尸体手中的纸条多看一眼
    'ganshi:prologue': [
        {
            text: '尸体手里攥着一张纸条，上面写着一个名字',
            next: 'ganshi_easter_paper_name',
            condition: { flag: 'dollHasOwnFace' },
            hidden: true,
            effects: { sanity: -5, yin: 8 }
        }
    ]
};

/**
 * 彩蛋专属场景
 */
const EASTER_EGG_SCENES = {
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
    },

    shouye_easter_paper_ash: {
        title: '纸灰',
        text: `你蹲下身，从殡仪馆门槛的缝隙里刮出一点纸灰。

不是普通的黄纸，而是喜纸——那种印着“囍”字、用来扎纸人的红纸。灰烬已经冰凉，你却仿佛听见很远的地方有人吹奏唢呐。

[faded]“山村……冥婚……井下新娘……”[/faded]

你把纸灰小心包好。这不是七号厅的故事，但它似乎愿意借七号厅的口，说给你听。`,
        effects: { sanity: -5, yin: 10, addItem: '纸人灰烬' },
        choices: [
            { text: '继续值班', next: 'morgue_whisper' }
        ]
    },

    xitai_easter_river_voice: {
        title: '水缸回声',
        text: `你把手伸进水缸，水面泛起涟漪。

涟漪中竟传来歌声。那歌声不像戏台上的青衣，倒像河边浣衣的女人，低低地哼着一首送魂曲。

[whisper]“河娘等桥断，戏子等台塌……我们都是被水留下的人。”[/whisper]

你猛地抽回手。水面上只剩你自己的倒影，苍白如纸。`,
        effects: { sanity: -6, yin: 8 },
        choices: [
            { text: '擦干手，离开水缸', next: 'return_to_stage' }
        ]
    },

    tishen_easter_fox_mark: {
        title: '青丘纹',
        text: `你蹲下身，看清了纸人衣角的纹样。

那不是寻常纸扎铺会用的云纹，而是九尾狐绕月的图腾。你只在深山古庙里见过类似的石刻，老人们说那是青丘山的标记。

纸人忽然动了一下。不是风，是衣角自己抖了抖，像有生命在纸壳下呼吸。

[red]“你认得我？”[/red] 纸人的嘴里发出细不可闻的声音。

你没有回答。`,
        effects: { sanity: -4, yin: 6 },
        choices: [
            { text: '撕掉那片衣角', next: 'notice_parents' }
        ]
    },

    heniang_easter_opera_dress: {
        title: '戏服红裳',
        text: `你望向河中那件红裳，指尖触到戏服特有的刺绣。

不是嫁衣，是戏台上的行头。水波荡漾间，你仿佛听见锣鼓声从很远的地方传来，还有一声清越的唱腔，唱的是“魂归何处”。

[faded]“戏台塌了二十年，戏服却漂到了这里。”[/faded]

你把目光移开。它缓缓漂向下游，像一场没有观众的落幕。`,
        effects: { sanity: -4, yin: 7, addItem: '湿戏服碎片' },
        choices: [
            { text: '继续沿河寻找', next: 'walk_riverbank' }
        ]
    },

    hujia_easter_zhou_debt: {
        title: '周家债',
        text: `狐女的眼神变了。

“你竟然知道周家。”她轻声说，声音里第一次没有了戏谑。

[whisper]“周家欠的不只是我的命。井底那位、戏台那位、河边那位，都姓周，也都不姓周。”[/whisper]

她不再解释，只是伸手抚过你的眉心。你感到一阵刺痛，仿佛有什么东西被打通了。

“既然你知道，便该明白：答应我，就是答应所有被周家辜负的人。”`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '追问其他“被辜负的人”', next: 'ask_why_chosen' }
        ]
    },

    ganshi_easter_paper_name: {
        title: '无名纸条',
        text: `你费力地展开尸体手中那张被雨水泡烂的纸条。

上面只有一个名字，墨迹已经晕开，却还能辨认：

[red]“云秀”[/red]

你想起某个关于纸扎铺的传闻：替身的纸人一旦有了自己的脸，就会替真正的“云秀”活下去。而真正的云秀，也许从未离开过。

尸体忽然握紧了你的手腕。`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '挣脱手腕', next: 'corpse_conversation' }
        ]
    }
};

/**
 * 在当前加载的故事数据中注入彩蛋
 */
export function applyEasterEggs() {
    if (!Huimen.StoryData || !Huimen.CurrentStory) return;

    const storyId = Huimen.CurrentStory.id;

    // 注入新场景
    Object.entries(EASTER_EGG_SCENES).forEach(([sceneId, scene]) => {
        if (!Huimen.StoryData[sceneId]) {
            Huimen.StoryData[sceneId] = scene;
        }
    });

    // 注入额外选择
    Object.entries(EASTER_EGG_CHOICES).forEach(([key, choices]) => {
        const [targetStoryId, sceneId] = key.split(':');
        if (targetStoryId !== storyId) return;

        const scene = Huimen.StoryData[sceneId];
        if (!scene || !Array.isArray(scene.choices)) return;

        choices.forEach(choice => {
            const exists = scene.choices.some(c => c.text === choice.text && c.next === choice.next);
            if (!exists) {
                scene.choices.push(choice);
            }
        });
    });
}
