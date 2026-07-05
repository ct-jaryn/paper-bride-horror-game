/**
 * 微信小游戏入口
 *
 * 创建 Canvas 并启动《阴阳簿》小游戏主控。
 */

const systemInfo = wx.getSystemInfoSync();
const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');

// 适配设备像素比
const pixelRatio = systemInfo.pixelRatio || 1;
canvas.width = systemInfo.windowWidth * pixelRatio;
canvas.height = systemInfo.windowHeight * pixelRatio;
ctx.scale(pixelRatio, pixelRatio);

// 启动游戏
import('./js/minigame-main.js').then(({ start }) => {
    start(canvas, ctx, systemInfo);
}).catch(err => {
    console.error('小游戏启动失败:', err);
});
