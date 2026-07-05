/**
 * 统一测试入口
 * 顺序运行所有测试脚本；任一失败即退出并返回非零状态码。
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const tests = [
    '../test_esm_boot.mjs',
    'stories-integration.mjs',
    'state-engine-integration.mjs'
];

async function runTest(script) {
    return new Promise((resolve, reject) => {
        const proc = spawn('node', [join(__dirname, script)], {
            stdio: ['ignore', 'inherit', 'inherit']
        });
        proc.on('close', code => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`${script} 退出码 ${code}`));
            }
        });
        proc.on('error', reject);
    });
}

async function main() {
    console.log('开始运行全部测试...\n');
    for (const test of tests) {
        await runTest(test);
    }
    console.log('\n✓ 全部测试通过');
}

main().catch(err => {
    console.error('\n✗ 测试失败:', err.message);
    process.exit(1);
});
