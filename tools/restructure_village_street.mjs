/**
 * 从旧版 story_huimen_expansion.js 提取 huimen_exp_village_street
 * 并将其 choices 拆分到主场景 + 三个枢纽场景
 */

import { readFileSync, writeFileSync } from 'fs';

const oldFile = readFileSync('/workspace/stories/story_huimen_expansion.js', 'utf8');

// 找到 StoryData.huimen_exp_village_street 的定义
const startMarker = 'StoryData.huimen_exp_village_street = {';
const startIdx = oldFile.indexOf(startMarker);
if (startIdx === -1) throw new Error('未找到 huimen_exp_village_street 定义');

// 找到下一个 StoryData.xxx = 或 Endings 定义，作为结束
const nextStoryRe = /\nStoryData\.[a-zA-Z0-9_]+\s*=\s*\{/g;
nextStoryRe.lastIndex = startIdx + startMarker.length;
const nextMatch = nextStoryRe.exec(oldFile);
const endIdx = nextMatch ? nextMatch.index : oldFile.length;

const block = oldFile.slice(startIdx, endIdx);

// 用 Function 构造器安全地提取对象（仅用于本地数据处理）
const fn = new Function('StoryData', `
const Endings = {};
${block}
return StoryData.huimen_exp_village_street;
`);
const scene = fn({});

const choices = scene.choices;
console.log('原始 choices 数量:', choices.length);

const coreLocations = choices.filter((c, i) => i < 7);
const weatherEvents = choices.filter(c =>
    /雾里|雨点|纸钱像雪|雾里有声音|朱红镜子|天快亮|子时|下雨了|囍字纸钱/.test(c.text)
);
const xiulanInteractions = choices.filter(c =>
    /秀兰|她.*(?:唱|舞|笑|哭|聊|安慰|做|带|给|问|看|陪|挡|抱|梳头|道歉|道别|托梦|名字)|元宝/.test(c.text) ||
    /照一次井水|天亮时|拥抱|桂花|头发|谢谢|叫.*名字|活着|告别|安葬|记忆/.test(c.text)
);
const exitMain = choices.filter(c =>
    c.next === 'to_old_house' ||
    /该去开红棺|后院井边|老宅正堂/.test(c.text)
);
const districtLocations = choices.filter(c =>
    (c.next || '').startsWith('huimen_exp2_') || (c.next || '').startsWith('huimen_exp3_')
);
const metaLoop = choices.filter(c =>
    /住下来|寻找自己的名字|循环石碑/.test(c.text)
);

const used = new Set([
    ...coreLocations, ...weatherEvents, ...xiulanInteractions,
    ...exitMain, ...districtLocations, ...metaLoop
].map(c => choices.indexOf(c)));

const other = choices.filter((c, i) => !used.has(i));

function renderEffects(eff) {
    if (!eff) return '';
    const pairs = [];
    for (const [k, v] of Object.entries(eff)) {
        if (typeof v === 'string') pairs.push(`${k}:"${v}"`);
        else pairs.push(`${k}:${v}`);
    }
    return `effects:{${pairs.join(',')}}`;
}

function renderCondition(cond) {
    if (!cond) return '';
    const parts = [];
    for (const [k, v] of Object.entries(cond)) {
        if (typeof v === 'string') parts.push(`${k}:"${v}"`);
        else parts.push(`${k}:${JSON.stringify(v)}`);
    }
    return `condition:{${parts.join(',')}}`;
}

function renderChoice(c, indent = '            ') {
    const parts = [`text:"${c.text}"`];
    if (c.next) parts.push(`next:"${c.next}"`);
    if (c.ending) parts.push(`ending:"${c.ending}"`);
    if (c.effects) parts.push(renderEffects(c.effects));
    if (c.condition) parts.push(renderCondition(c.condition));
    if (c.hidden) parts.push('hidden:true');
    if (c.danger) parts.push('danger:true');
    return `${indent}{${parts.join(',')}}`;
}

function renderChoices(arr, indent = '            ') {
    return arr.map(c => renderChoice(c, indent)).join(',\n');
}

const coreChoices = [
    ...coreLocations,
    { text: '调查村街四周', next: 'huimen_exp_village_street_events_hub', effects: { yin: 1 } },
    { text: '寻找秀兰', next: 'huimen_exp_village_street_xiulan_hub', condition: { flag: 'knowsTruth' }, effects: { yin: 1 } },
    { text: '探索更远的区域', next: 'huimen_exp_village_street_districts_hub', condition: { flag: 'huimen_exp_explored_village' }, effects: { yin: 1 } },
    ...weatherEvents.filter(c => /天快亮|子时/.test(c.text)),
    ...exitMain,
];

const hubEventsChoices = [
    ...weatherEvents.filter(c => !/天快亮|子时/.test(c.text)),
    ...other,
];

const hubXiulanChoices = xiulanInteractions;

const hubDistrictsChoices = [
    ...districtLocations,
    ...metaLoop,
];

const coreFile = `/**
 * 《回门》场景模块：exp_village_street_core
 * 村街主入口，只保留核心入口与聚合枢纽
 */

export const scenes = {
    huimen_exp_village_street: {
        title: '村街',
        text: \`你站在村街中央。

街道两旁是低矮的瓦房，每一扇窗后都有一盏白灯笼。灯笼上没有字，只有一个墨点画成的眼睛。你走到哪，那些眼睛就跟到哪。

石板路是湿的，踩上去会发出黏腻的声响，像踩在舌头上。

远处有纸钱在旋舞，偶尔能看见一个纸人的背影拐进巷子。你叫一声，它不回头；你追上去，巷子尽头是一堵墙。

[whisper]"别追。追上了，你就变成它。"[/whisper]

风里传来这句话，你分不清是警告还是邀请。

[red]这里可以通往村子的每个角落。[/red]\`,
        effects: {"sanity":-3,"yin":2},
        choices: [
${renderChoices(coreChoices, '            ')}
        ],
        hallucination: '[whisper]你低头看自己的影子，影子里似乎还有一个人，正牵着你的衣角。[/whisper]',
    }
,
    huimen_exp_village_street_dawn: {
        title: '黎明前的村街',
        text: \`你在村街上走了很久，久到月亮开始西斜。

村里的雾气变得稀薄，街道两旁的纸人开始枯萎，像被晒干的树叶。你听见远处传来鸡鸣声，可那鸡鸣声不像来自活鸡，而像来自某个纸扎的鸡。

[whisper]"天快亮了。"[/whisper] 秀兰的声音说，"天亮之前，你必须做出选择。"

你抬头看天，东方的云层里透出一丝灰白。那是黎明的前兆。

[red]可这个村子，从来没有真正天亮过。[/red]\`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"趁天亮前离开村子","next":"huimen_exp_moonlit_escape","effects":{"yin":-3}},{"text":"继续探索","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"去村口老槐树下等天亮","next":"huimen_exp_dawn_tree","effects":{"yin":2}}],
    }
,
    huimen_exp_village_street_midnight: {
        title: '子夜村街',
        text: \`子时到了。

村街忽然安静下来，纸人、灯笼、纸钱，都停住了。整个村子像被按下了暂停键，只有你的心跳还在响。

你抬头看天，月亮变成了血红色。月光照在地上，把石板路照得像一条血河。

[whisper]"子时是一天的尽头，也是阴阳交替的时候。"[/whisper] 秀兰的声音说，"在这个时候，你可以看见村子真正的样子。"

你环顾四周，发现每一栋房子都在渗出黑色的液体，像血，又像墨。那些液体顺着石板缝流向村子中央，流向那口井。\`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"去村子中央看看","next":"huimen_exp_village_heart","effects":{"yin":2}},{"text":"找地方躲起来","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":1}}],
    }
,
    huimen_exp_village_street_empty: {
        title: '空村',
        text: \`你走着走着，发现村街空了。

纸人不见了，灯笼熄灭了，连风声都停了。整条街只剩你一个人，脚步声在空旷中回响。

你推开一扇门，屋里空荡荡的，只有一张供桌。供桌上摆着一张照片，照片里是一家人的合影。

你仔细一看，照片上的人都没有脸。

[red]这个村子的人，早就不是人了。他们只是一段段被保存下来的记忆。[/red]

你把照片翻过来，背面写着："周家村，民国二十三年。"\`,
        effects: {"sanity":-8,"yin":2,"addItem":"民国二十三年周家村合影"},
        choices: [{"text":"把照片收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
`;

const eventsHubFile = `/**
 * 《回门》场景模块：exp_village_street_events_hub
 * 村街随机事件、物品发现与天气事件聚合
 */

export const scenes = {
    huimen_exp_village_street_events_hub: {
        title: '村街四顾',
        text: \`你放慢脚步，仔细观察村街的每一处动静。

雾气在石板路上流转，纸钱偶尔从某个看不见的窗口飘出。你听见风声、水声、远处隐约的唢呐声，却分不清哪些是活人的，哪些是死人的。

[red]这里发生过太多事。每一件旧物，都可能藏着一段记忆。[/red]\`,
        effects: {"sanity":-2,"yin":1},
        choices: [
${renderChoices(hubEventsChoices, '            ')}
        ],
    }
};
`;

const xiulanHubFile = `/**
 * 《回门》场景模块：exp_village_street_xiulan_hub
 * 与秀兰的互动、记忆入口与关键道具使用
 */

export const scenes = {
    huimen_exp_village_street_xiulan_hub: {
        title: '寻兰',
        text: \`你知道秀兰就在这条村街的某个角落——井底、桑树下、月光小路上，或者某一片飘落的纸钱里。

你轻声唤她的名字。风停了片刻，像是有人在听。

[red]她不会让你轻易找到。但如果你真心想见她，她总会出现。[/red]\`,
        effects: {"sanity":-2,"yin":1},
        choices: [
${renderChoices(hubXiulanChoices, '            ')}
        ],
    }
};
`;

const districtsHubFile = `/**
 * 《回门》场景模块：exp_village_street_districts_hub
 * 村街外围区域与深层地点聚合
 */

export const scenes = {
    huimen_exp_village_street_districts_hub: {
        title: '村外之路',
        text: \`你沿着村街向更深处走去。

房屋越来越稀疏，雾气却越来越浓。路边开始出现一些你不认识的建筑：没有门牌的药铺、挂着褪色红绸的裁缝铺、半塌的学堂、长满青苔的河神石。

[red]这些才是村子真正的脏腑。[/red]\`,
        effects: {"sanity":-3,"yin":2},
        choices: [
${renderChoices(hubDistrictsChoices, '            ')}
        ],
    }
};
`;

writeFileSync('/workspace/stories/huimen/scenes/exp_village_street_core.js', coreFile);
writeFileSync('/workspace/stories/huimen/scenes/exp_village_street_events_hub.js', eventsHubFile);
writeFileSync('/workspace/stories/huimen/scenes/exp_village_street_xiulan_hub.js', xiulanHubFile);
writeFileSync('/workspace/stories/huimen/scenes/exp_village_street_districts_hub.js', districtsHubFile);

console.log('核心入口 choices:', coreChoices.length);
console.log('事件枢纽 choices:', hubEventsChoices.length);
console.log('秀兰枢纽 choices:', hubXiulanChoices.length);
console.log('区域枢纽 choices:', hubDistrictsChoices.length);
console.log('总计:', coreChoices.length + hubEventsChoices.length + hubXiulanChoices.length + hubDistrictsChoices.length);
console.log('已写入 4 个文件');
