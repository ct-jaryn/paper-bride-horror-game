/**
 * NPC 模块：town（已拆分为 lao_zhang.js 和 shen_po.js）
 * 本文件保留重新导出以保持向后兼容
 */

import { lao_zhang } from './lao_zhang.js';
import { shen_po } from './shen_po.js';

export const NPCs = {
    lao_zhang,
    shen_po
};

export default NPCs;
