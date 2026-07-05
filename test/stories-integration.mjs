/**
 * 剧情数据集成测试
 * 导入校验模块，以静默模式运行，断言无错误与警告。
 */

import { validateAllStories, createSilentReport } from '../tools/validate-stories.mjs';

const report = createSilentReport();
const { errors, warnings } = await validateAllStories(report);

if (errors > 0 || warnings > 0) {
    console.error(`✗ 剧情数据校验失败：错误 ${errors} 个，警告 ${warnings} 个`);
    report.messages.forEach(m => {
        console.error(`[${m.type}] ${m.story}: ${m.message}`);
    });
    process.exit(1);
}

console.log(`✓ 全部故事数据校验通过（${report.messages.length} 项检查无异常）`);
