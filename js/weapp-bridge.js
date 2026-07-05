/**
 * 微信小程序 web-view JSSDK 桥接
 *
 * 当 H5 被微信小程序 web-view 加载时，需要引入微信 JSSDK
 * 才能使用 wx.miniProgram.postMessage 等能力。
 * 本模块提供动态加载 SDK 的便捷方法。
 */

const JSSDK_URL = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';

export function isWechatWebview() {
    return typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
}

export function initWeappBridge() {
    return new Promise((resolve, reject) => {
        if (typeof wx !== 'undefined') {
            resolve();
            return;
        }
        if (typeof document === 'undefined') {
            reject(new Error('非浏览器环境，无法加载 JSSDK'));
            return;
        }
        const script = document.createElement('script');
        script.src = JSSDK_URL;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('微信 JSSDK 加载失败'));
        document.head.appendChild(script);
    });
}

export function getMiniProgramEnv() {
    return new Promise((resolve) => {
        if (typeof wx === 'undefined' || !wx.miniProgram || !wx.miniProgram.getEnv) {
            resolve({ miniprogram: false });
            return;
        }
        wx.miniProgram.getEnv((res) => {
            resolve(res || { miniprogram: false });
        });
    });
}
