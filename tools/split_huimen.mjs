// 回门专用拆分脚本
// 因为 story_huimen_expansion.js 是对 story_huimen.js 的深拷贝扩展，
// 需要用 ES module 动态导入合并后的最终对象。

import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = '/workspace/stories/huimen';
mkdirSync(join(outputDir, 'scenes'), { recursive: true });
mkdirSync(join(outputDir, 'endings'), { recursive: true });
mkdirSync(join(outputDir, 'npcs'), { recursive: true });

const { StoryData, Endings } = await import('/workspace/stories/story_huimen_expansion.js');

function classify(sceneId) {
    if (sceneId === 'prologue') return 'prologue';
    // exp3 (second expansion)
    if (sceneId.startsWith('huimen_exp3_')) {
        if (sceneId.includes('zhou_mansion')) return 'exp3_zhou_mansion';
        if (sceneId.includes('granny_wang')) return 'exp3_granny_wang';
        if (sceneId.includes('carpenter_li')) return 'exp3_carpenter_li';
        if (sceneId.includes('clan_head')) return 'exp3_clan_head';
        if (sceneId.includes('loop')) return 'exp3_loop';
        if (sceneId.includes('xiulan_memory')) return 'exp3_xiulan_memory';
        if (sceneId.includes('xiulan_')) return 'exp3_xiulan';
        return 'exp3_main';
    }
    // exp2
    if (sceneId.startsWith('huimen_exp2_')) {
        if (sceneId.includes('river_god')) return 'exp2_river_god';
        if (sceneId.includes('river')) return 'exp2_river';
        if (sceneId.includes('graveyard') || sceneId.includes('grave') || sceneId.includes('tomb')) return 'exp2_graveyard';
        if (sceneId.includes('midwife')) return 'exp2_midwife';
        if (sceneId.includes('blind_granny')) return 'exp2_blind_granny';
        if (sceneId.includes('school')) return 'exp2_school';
        if (sceneId.includes('mountain')) return 'exp2_mountain';
        if (sceneId.includes('child_ghost')) return 'exp2_child_ghost';
        if (sceneId.includes('cowherd')) return 'exp2_cowherd';
        if (sceneId.includes('medicine')) return 'exp2_medicine';
        if (sceneId.includes('tailor')) return 'exp2_tailor';
        if (sceneId.includes('abandoned_hall')) return 'exp2_abandoned_hall';
        if (sceneId.includes('theater')) return 'exp2_theater';
        if (sceneId.includes('kitchen')) return 'exp2_kitchen';
        if (sceneId.includes('granary')) return 'exp2_granary';
        if (sceneId.includes('blood_contract')) return 'exp2_blood_contract';
        if (sceneId.includes('secret_tunnel')) return 'exp2_secret_tunnel';
        if (sceneId.includes('old_tree')) return 'exp2_old_tree';
        if (sceneId.includes('mirror_lake')) return 'exp2_mirror_lake';
        if (sceneId.includes('river_lantern')) return 'exp2_river_lantern';
        if (sceneId.includes('nameless_stones')) return 'exp2_nameless_stones';
        if (sceneId.includes('paper_maker')) return 'exp2_paper_maker';
        if (sceneId.includes('village_head')) return 'exp2_village_head';
        if (sceneId.includes('paper_doll_origin') || sceneId.includes('paper_shop') || sceneId.includes('paper_boat')) return 'exp2_paper';
        if (sceneId.includes('well_wall')) return 'exp2_well';
        if (sceneId.includes('red_coffin')) return 'exp2_coffin';
        if (sceneId.includes('ancestral_women')) return 'exp2_ancestral';
        if (sceneId.includes('moonlit')) return 'exp2_moonlit';
        if (sceneId.includes('mulberry_bird') || sceneId.includes('mulberry')) return 'exp2_mulberry';
        if (sceneId.includes('ruins')) return 'exp2_ruins';
        if (sceneId.includes('xiulan_memory')) return 'exp2_xiulan_memory';
        return 'exp2_main';
    }
    // first expansion
    if (sceneId.startsWith('huimen_exp')) {
        if (sceneId.includes('village')) {
            if (sceneId.includes('street')) {
            // 进一步细分村庄街道场景
            const core = [
                'huimen_exp_village_street',
                'huimen_exp_village_street_dawn',
                'huimen_exp_village_street_midnight',
                'huimen_exp_village_street_empty'
            ];
            if (core.includes(sceneId)) return 'exp_village_street_core';
            const events = ['street_laugh', 'street_cry', 'street_baby', 'street_bride_parade', 'street_paper_horse', 'street_ancestor_shadow', 'street_red_thread'];
            if (events.some(k => sceneId.includes(k))) return 'exp_village_street_events';
            if (sceneId.includes('street_well_sound')) return 'exp_village_street_well';
            const toys = ['paper_kite', 'swing', 'well_bucket', 'old_well', 'paper_fan'];
            if (toys.some(k => sceneId.includes(k))) return 'exp_village_street_toys';
            return 'exp_village_street_offerings';
        }
            return 'exp_village';
        }
        if (sceneId.includes('well')) return 'exp_well';
        if (sceneId.includes('paper') || sceneId.includes('doll')) {
            if (sceneId.includes('paper_shop')) return 'exp_paper_shop';
            if (sceneId.includes('paper_doll') || sceneId.includes('doll_eyes') || sceneId.includes('burn_paper') || sceneId.includes('burn_all_dolls')) return 'exp_paper_doll';
            if (sceneId.includes('paper_offering')) return 'exp_paper_offering';
            if (sceneId.includes('paper_boat') || sceneId.includes('paper_rain')) return 'exp_paper_river';
            return 'exp_paper';
        }
        if (sceneId.includes('coffin') || sceneId.includes('red')) return 'exp_coffin';
        if (sceneId.includes('ancestral') || sceneId.includes('family')) return 'exp_ancestral';
        if (sceneId.includes('moon')) return 'exp_moon';
        if (sceneId.includes('shichen')) return 'exp_time';
        if (sceneId.includes('clue') || sceneId.includes('item') || sceneId.includes('safe') || sceneId.includes('lock')) return 'exp_clues';
        if (sceneId.includes('temple')) return 'exp_temple';
        if (sceneId.includes('mulberry')) return 'exp_mulberry';
        if (sceneId.includes('ruins')) return 'exp_ruins';
        if (sceneId.includes('street')) {
            if (sceneId.includes('fog')) return 'exp_street_fog';
            if (sceneId.includes('rain')) return 'exp_street_rain';
            if (sceneId.includes('footsteps') || sceneId.includes('whistle') || sceneId.includes('calling') || sceneId.includes('hand') || sceneId.includes('knocking')) return 'exp_street_encounter';
            if (sceneId.includes('mirror')) return 'exp_street_mirror';
            if (sceneId.includes('little_girl')) return 'exp_street_girl';
            if (sceneId.includes('opera') || sceneId.includes('drum')) return 'exp_street_opera';
            return 'exp_street';
        }
        if (sceneId.includes('xiulan_')) {
            if (sceneId.includes('xiulan_memory') || sceneId.includes('xiulan_dream') || sceneId.includes('xiulan_apology') || sceneId.includes('xiulan_thanks') || sceneId.includes('xiulan_goodbye')) return 'exp_xiulan_memory';
            if (sceneId.includes('xiulan_flower') || sceneId.includes('xiulan_sing') || sceneId.includes('xiulan_dance') || sceneId.includes('xiulan_cook') || sceneId.includes('xiulan_sew') || sceneId.includes('xiulan_school') || sceneId.includes('xiulan_laugh') || sceneId.includes('xiulan_angry') || sceneId.includes('xiulan_hope')) return 'exp_xiulan_daily';
            if (sceneId.includes('xiulan_wish') || sceneId.includes('xiulan_outside_world') || sceneId.includes('xiulan_rain') || sceneId.includes('xiulan_sun') || sceneId.includes('xiulan_mirror') || sceneId.includes('xiulan_name') || sceneId.includes('xiulan_age') || sceneId.includes('xiulan_hair')) return 'exp_xiulan_bond';
            return 'exp_xiulan';
        }
        if (sceneId.includes('memory')) return 'exp_memory';
        if (sceneId.includes('final')) return 'exp_final';
        if (sceneId.includes('use_')) return 'exp_use';
        if (sceneId.includes('grandfather') || sceneId.includes('grandmother')) return 'exp_family';
        if (sceneId.includes('wedding') || sceneId.includes('bride') || sceneId.includes('palanquin')) return 'exp_wedding';
        if (sceneId.includes('dog') || sceneId.includes('fox_fire')) return 'exp_creature';
        if (sceneId.includes('old_woman') || sceneId.includes('singing_woman')) return 'exp_women';
        if (sceneId.includes('dawn_tree') || sceneId.includes('bridge_name') || sceneId.includes('ancestor_judge') || sceneId.includes('erase_name')) return 'exp_ritual';
    }
    // mainline
    if (sceneId === 'prologue') return 'prologue';
    if (sceneId.startsWith('shichen_')) return 'main_time';
    if (sceneId.startsWith('investigate_')) return 'main_investigation';
    if (sceneId.startsWith('safe_house')) return 'main_safe';
    if (sceneId === 'old_house_door_locked' || sceneId === 'true_ending_gate') return 'main_locks';
    const mainEscape = ['chase_li_po', 'break_free', 'refuse_wine_plan', 'pretend_comply', 'break_window', 'hold_breath', 'hide_in_woodshed', 'burn_woodshed', 'sneak_back_yard', 'charge_exit', 'paralyzed', 'turn_around'];
    if (mainEscape.includes(sceneId)) return 'main_escape';
    const mainConfront = ['shadow_in_corner', 'ask_who_are_you', 'ask_really_me', 'wait_chance', 'pretend_marry', 'pull_nails_barehand', 'corpse_bride_link'];
    if (mainConfront.includes(sceneId)) return 'main_confront';
    const mainRitual = ['ask_meaning', 'to_old_house', 'talisman_against_rope', 'swear_justice', 'find_bones', 'give_letter', 'small_door', 'pull_back_hand', 'huimen_extinguish_lantern'];
    if (mainRitual.includes(sceneId)) return 'main_ritual';
    if (sceneId.includes('village') || sceneId.includes('villager')) return 'village';
    if (sceneId.includes('well')) return 'well';
    if (sceneId.includes('paper') || sceneId.includes('doll')) return 'paper';
    if (sceneId.includes('coffin') || sceneId.includes('red') || sceneId.includes('marriage')) return 'coffin';
    if (sceneId.includes('ancestral') || sceneId.includes('family') || sceneId.includes('lineage')) return 'ancestral';
    if (sceneId.includes('moon') || sceneId.includes('night')) return 'moon';
    if (sceneId.includes('xiulan') || sceneId.includes('xiu')) return 'xiulan';
    if (sceneId.includes('zhou')) return 'zhou';
    if (sceneId.includes('ghost')) return 'ghost';
    if (sceneId.includes('escape') || sceneId.includes('flee') || sceneId.includes('run')) return 'escape';
    return 'main';
}

function stringify(obj, indent = 4) {
    return JSON.stringify(obj, null, indent)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/`/g, '\\`')
        .replace(/'/g, "\\'")
        .replace(/"/g, "'");
}

// 因为场景 text 字段是模板字符串，JSON.stringify 会把它变成普通字符串，
// 为了保持原有格式并支持多行，我们使用 toSource 风格手动序列化。
function serializeScene(sceneId, sceneObj) {
    const lines = [`    ${sceneId}: {`];
    for (const [key, value] of Object.entries(sceneObj)) {
        if (key === 'text' && typeof value === 'string') {
            // 转义模板字符串中的反引号和 ${}
            const escaped = value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
            lines.push(`        ${key}: \`${escaped}\`,`);
        } else if (typeof value === 'string') {
            const escaped = value.replace(/'/g, "\\'");
            lines.push(`        ${key}: '${escaped}',`);
        } else if (Array.isArray(value)) {
            lines.push(`        ${key}: ${JSON.stringify(value)},`);
        } else if (typeof value === 'object' && value !== null) {
            lines.push(`        ${key}: ${JSON.stringify(value)},`);
        } else {
            lines.push(`        ${key}: ${value},`);
        }
    }
    lines.push('    }');
    return lines.join('\n');
}

const groups = {};
for (const [sceneId, sceneObj] of Object.entries(StoryData)) {
    const g = classify(sceneId);
    if (!groups[g]) groups[g] = [];
    groups[g].push([sceneId, sceneObj]);
}

for (const [g, items] of Object.entries(groups)) {
    const file = join(outputDir, 'scenes', `${g}.js`);
    const out = [`/**\n * 《回门》场景模块：${g}\n */\n`, 'export const scenes = {'];
    for (let i = 0; i < items.length; i++) {
        const [id, obj] = items[i];
        out.push(serializeScene(id, obj));
        if (i < items.length - 1) out.push(',');
    }
    out.push('};\n');
    writeFileSync(file, out.join('\n'), 'utf-8');
    console.log(`已写入 ${file}（${items.length} 场景）`);
}

// endings
writeFileSync(join(outputDir, 'endings', 'index.js'),
    `/**\n * 《回门》结局集合\n */\n\nexport const Endings = ${JSON.stringify(Endings, null, 4).replace(/"([^"]+)":/g, '$1:')};\n`, 'utf-8');
console.log('已写入 endings/index.js');

// npcs
writeFileSync(join(outputDir, 'npcs', 'index.js'),
    `/**\n * 《回门》NPC 对话\n */\n\nexport const NPCs = {};\n`, 'utf-8');
console.log('已写入 npcs/index.js');

// index.js
const sceneFiles = Object.keys(groups).sort();
let indexContent = `/**\n * 《回门》故事入口\n */\n\n`;
for (const g of sceneFiles) {
    indexContent += `import { scenes as ${g}Scenes } from './scenes/${g}.js';\n`;
}
indexContent += `import { Endings } from './endings/index.js';\n`;
indexContent += `import { NPCs } from './npcs/index.js';\n\n`;
indexContent += `export const StoryData = {\n`;
for (let i = 0; i < sceneFiles.length; i++) {
    indexContent += `    ...${sceneFiles[i]}Scenes,\n`;
}
indexContent += `};\n\nexport { Endings, NPCs };\nexport { StoryConfig } from './config.js';\n`;
writeFileSync(join(outputDir, 'index.js'), indexContent, 'utf-8');
console.log('已写入 index.js');
console.log('\n提示：请手动创建 config.js 并更新 stories/manifest.js 中的 scriptPath');
console.log('  scriptPath: "stories/huimen/index.js"');
