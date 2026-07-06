/**
 * 微信小游戏剧情数据包
 * 指向 stories/{id}/index.js 模块化入口。
 */

import * as huimen from '../../stories/huimen/index.js';
import * as shouye from '../../stories/shouye/index.js';
import * as xitai from '../../stories/xitai/index.js';
import * as tishen from '../../stories/tishen/index.js';
import * as heniang from '../../stories/heniang/index.js';
import * as hujia from '../../stories/hujia/index.js';
import * as ganshi from '../../stories/ganshi/index.js';

export const StoryBundles = {
    huimen,
    shouye,
    xitai,
    tishen,
    heniang,
    hujia,
    ganshi
};

export default StoryBundles;
