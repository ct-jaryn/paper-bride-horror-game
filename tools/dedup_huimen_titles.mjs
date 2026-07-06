/**
 * 为重复的场景 title 增加上下文前缀
 */

import { StoryData } from '../stories/huimen/index.js';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const sceneDir = '/workspace/stories/huimen/scenes';
const files = readdirSync(sceneDir).filter(f => f.endsWith('.js'));

// 收集 title 到场景 ID 的映射
const titleMap = {};
for (const [id, scene] of Object.entries(StoryData)) {
    if (!scene.title) continue;
    if (!titleMap[scene.title]) titleMap[scene.title] = [];
    titleMap[scene.title].push(id);
}

// 只处理重复 title
const duplicates = Object.entries(titleMap).filter(([_, ids]) => ids.length > 1);

// 根据场景 ID 生成前缀规则
function prefixFor(id) {
    if (id.includes('river_god')) return '河石';
    if (id.includes('carpenter_li')) return '木匠';
    if (id.includes('zhou_mansion_cellar_name_stele')) return '地窖名碑';
    if (id.includes('bridge_name')) return '桥';
    if (id.includes('village_heart')) return '村心';
    if (id.includes('zhou_mansion_cellar')) return '地窖';
    if (id.includes('granary')) return '粮仓';
    if (id.includes('river_lantern')) return '河灯';
    if (id.includes('graveyard')) return '坟前';
    if (id.includes('mountain_path')) return '山路';
    if (id.includes('well_bottom')) return '井底';
    if (id.includes('old_tree')) return '老树';
    if (id.includes('school')) return '学堂';
    if (id.includes('xiulan_memory_well_help')) return '井中相助';
    if (id.includes('paper_shop_basement')) return '纸扎铺地下室';
    if (id.includes('ruins_doll')) return '废墟';
    if (id.includes('burn_dolls_alt')) return '焚偶';
    if (id.includes('tailor')) return '裁缝铺';
    if (id.includes('xiulan_wish_dress')) return '秀兰心愿';
    if (id.includes('xiulan_sew')) return '秀兰';
    if (id.includes('blind_granny_sing_more')) return '盲婆婆';
    if (id.includes('xiulan_sing_more')) return '秀兰';
    if (id.includes('blind_granny_ask')) return '盲婆婆';
    if (id.includes('child_ghost_ask')) return '鬼孩';
    if (id.includes('granary_soul')) return '谷魂';
    if (id.includes('stone_bridge')) return '石桥';
    if (id.includes('ancestor_grave')) return '祖坟';
    if (id.includes('kitchen_stove')) return '灶台';
    if (id.includes('kitchen_talk')) return '厨房';
    if (id.includes('midwife_talk')) return '稳婆';
    if (id.includes('burn_grandmother_talisman')) return '祖母符';
    if (id.includes('mirror_lake')) return '镜湖';
    if (id.includes('street_hand')) return '墙缝';
    if (id.includes('restore_xiulan_name')) return '族谱';
    if (id.includes('nameless_stones')) return '无名碑';
    if (id.includes('village_head_vault')) return '村长密室';
    if (id.includes('paper_boat_read')) return '河边纸船';
    if (id.includes('street_paper_boat')) return '街缝纸船';
    if (id.includes('paper_maker_release')) return '纸匠';
    if (id.includes('grandfather_release')) return '祖父';
    if (id.includes('river_cross')) return '河边';
    if (id.includes('moonlit_river_cross')) return '月光河';
    if (id.includes('village_head_confront')) return '村长';
    if (id.includes('grandmother_confront')) return '祖母';
    if (id.includes('village_head_refute')) return '村长';
    if (id.includes('laugh_refute')) return '村街';
    if (id.includes('xiulan_memory_childhood_sew')) return '秀兰记忆';
    if (id.includes('xiulan_memory_betrayal_hug')) return '背叛记忆';
    if (id.includes('final_hug')) return '终幕';
    if (id.includes('xiulan_memory_wedding_wait')) return '婚礼记忆';
    if (id.includes('loop_wait')) return '循环';
    if (id.includes('carpenter_li_join')) return '木匠';
    if (id.includes('loop_dawn_together')) return '黎明循环';
    if (id.includes('carpenter_li_promise')) return '木匠';
    if (id.includes('xiulan_wish_promise')) return '秀兰心愿';
    if (id.includes('granny_wang_shoes_burn')) return '王婆';
    if (id.includes('lost_shoe_burn')) return '街鞋';
    if (id.includes('loop_eyes_closed')) return '循环';
    if (id.includes('xiulan_memory_well_death_close')) return '井底记忆';
    if (id.includes('exp3_well_bottom')) return '三代井底';
    if (id.includes('exp_well_bottom')) return '深井';
    if (id.includes('zhou_mansion_backyard_chisel')) return '祖宅后院';
    if (id.includes('use_stone_lion_name')) return '石狮';
    if (id.includes('zhou_mansion_cellar')) return '祖宅地窖';
    if (id.includes('ruins_cellar')) return '废墟地窖';
    if (id.includes('gate_of_paper_alt')) return '纸门';
    if (id.includes('street_paper_door')) return '街门';
    if (id.includes('ruins_letter_show')) return '废墟';
    if (id.includes('letter_box_give')) return '信箱';
    if (id.includes('ruins_photo')) return '废墟旧照';
    if (id.includes('show_xiulan_photo')) return '给秀兰看旧照';
    if (id.includes('use_child_tooth')) return '用护身乳牙';
    if (id.includes('use_talisman_ghost')) return '以符驱鬼';
    if (id.includes('well_whisper')) return '井语';
    if (id.includes('approach_coffin')) return '祖母';
    if (id.includes('red_coffin_open_alt')) return '井底';
    if (id.includes('temple_release')) return '庙中';
    return '';
}

function newTitle(id, oldTitle) {
    const prefix = prefixFor(id);
    if (!prefix) return oldTitle;
    return prefix + oldTitle;
}

const changes = [];
for (const [title, ids] of duplicates) {
    for (const id of ids) {
        const nt = newTitle(id, title);
        if (nt !== title) {
            changes.push({ id, oldTitle: title, newTitle: nt });
        }
    }
}

console.log('需要重命名的场景:', changes.length);

// 建立场景 ID 到文件映射
const idToFile = {};
for (const f of files) {
    const content = readFileSync(join(sceneDir, f), 'utf8');
    const matches = content.matchAll(/\b([a-zA-Z0-9_]+):\s*\{\s*\n\s*title:/g);
    for (const m of matches) {
        idToFile[m[1]] = f;
    }
}

let applied = 0;
for (const { id, oldTitle, newTitle } of changes) {
    const f = idToFile[id];
    if (!f) {
        console.log('未找到文件:', id);
        continue;
    }
    const path = join(sceneDir, f);
    let content = readFileSync(path, 'utf8');
    // 构造精确替换字符串
    const oldStr = `    ${id}: {\n        title: '${oldTitle}',`;
    const newStr = `    ${id}: {\n        title: '${newTitle}',`;
    if (content.includes(oldStr)) {
        content = content.replace(oldStr, newStr);
        writeFileSync(path, content);
        applied++;
        console.log(`[${f}] ${id}: "${oldTitle}" -> "${newTitle}"`);
    } else {
        // 尝试双引号
        const oldStr2 = `    ${id}: {\n        title: "${oldTitle}",`;
        const newStr2 = `    ${id}: {\n        title: "${newTitle}",`;
        if (content.includes(oldStr2)) {
            content = content.replace(oldStr2, newStr2);
            writeFileSync(path, content);
            applied++;
            console.log(`[${f}] ${id}: "${oldTitle}" -> "${newTitle}"`);
        } else {
            console.log('无法定位:', id, oldTitle);
        }
    }
}

console.log('已应用:', applied);
