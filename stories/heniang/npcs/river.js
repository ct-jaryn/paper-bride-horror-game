import { hong_xiu } from './hong_xiu.js';
import { a_cai } from './a_cai.js';

/**
 * river 模块：聚合红袖与阿彩
 * 保持向后兼容，供 index.js 通过 `import { NPCs } from './river.js'` 引用
 */

export const NPCs = { hong_xiu, a_cai };
