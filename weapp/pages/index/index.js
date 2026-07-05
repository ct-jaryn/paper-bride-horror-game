const app = getApp();

Page({
    data: {
        h5Url: app.globalData.h5Url
    },

    onLoad(options) {
        // 支持通过页面参数临时指定 H5 地址，便于测试
        if (options && options.url) {
            this.setData({ h5Url: decodeURIComponent(options.url) });
        }
    },

    onWebviewLoad(event) {
        console.log('web-view 加载完成', event.detail);
    },

    onWebviewError(event) {
        console.error('web-view 加载失败', event.detail);
        wx.showModal({
            title: '加载失败',
            content: '无法打开游戏页面，请检查网络与业务域名配置。',
            showCancel: false
        });
    },

    onMessage(event) {
        // 接收 web-view 内 H5 通过 wx.miniProgram.postMessage 发送的消息
        const messages = event.detail && event.detail.data ? event.detail.data : [];
        messages.forEach(msg => {
            if (!msg || !msg.event) return;
            switch (msg.event) {
                case 'share':
                    this._sharePayload = msg.payload || {};
                    break;
                case 'save':
                    // 如需把 H5 存档同步到小程序云或服务端可在此处理
                    break;
                default:
                    break;
            }
        });
    },

    onShareAppMessage() {
        const payload = this._sharePayload || {};
        return {
            title: payload.title || '《阴阳簿》中式文字恐怖游戏集',
            path: '/pages/index/index',
            imageUrl: payload.imageUrl || ''
        };
    }
});
