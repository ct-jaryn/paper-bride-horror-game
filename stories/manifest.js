/**
 * 《阴阳簿》故事清单
 * 七卷故事各成一篇，仅通过零散彩蛋与玩家记忆暗中相连
 */

export const StoryManifest = [
    {
        id: 'huimen',
        title: '回门',
        subtitle: '冥婚 · 纸人 · 山村',
        description: '祖母病逝，你回到三十年未归的山村。白幡、红烛、黑棺，还有一口井下等了你三十年的新娘。',
        difficulty: '中等',
        horrorLevel: 9,
        playTime: '30–45 分钟',
        tags: ['冥婚', '复仇', '家族罪孽'],
        scriptPath: 'stories/story_huimen.js'
    },
    {
        id: 'shouye',
        title: '守夜',
        subtitle: '灵堂 · 诈尸 · 守灵人',
        description: '你在县城殡仪馆做守灵人。这一夜，七号厅的尸体不愿意闭上眼睛。它一直在看门口。',
        difficulty: '简单',
        horrorLevel: 8,
        playTime: '20–30 分钟',
        tags: ['诈尸', '殡仪馆', '因果'],
        scriptPath: 'stories/story_shouye.js'
    },
    {
        id: 'xitai',
        title: '戏台',
        subtitle: '戏班 · 鬼戏 · 未唱完的曲',
        description: '荒废二十年的老戏台突然又唱起了戏。村里老人说，那是给鬼听的。戏不散，人莫近。',
        difficulty: '困难',
        horrorLevel: 10,
        playTime: '40–60 分钟',
        tags: ['鬼戏', '戏班', '诅咒'],
        scriptPath: 'stories/story_xitai.js'
    },
    {
        id: 'tishen',
        title: '替身',
        subtitle: '纸扎 · 挡灾 · 身份置换',
        description: '你五年未归，老家院子里站着一个纸扎的"你"。父母说它是替你挡灾的，可它越来越像你。',
        difficulty: '中等',
        horrorLevel: 9,
        playTime: '30–45 分钟',
        tags: ['纸人', '替身', '身份恐怖'],
        scriptPath: 'stories/story_tishen.js'
    },
    {
        id: 'heniang',
        title: '河娘',
        subtitle: '溺亡 · 红裳 · 河边唱歌的女人',
        description: '母亲自己走进了河里。村里人说，她是被河娘叫走的。可你小时候，也是她把你从河娘手里抢回来的。',
        difficulty: '中等',
        horrorLevel: 8,
        playTime: '25–40 分钟',
        tags: ['水鬼', '母女', '救赎'],
        scriptPath: 'stories/story_heniang.js'
    },
    {
        id: 'hujia',
        title: '狐嫁',
        subtitle: '狐女 · 人婚 · 青丘山',
        description: '山里的狐女修炼千年，只差一场人婚。她选中了你。跟她走，你能长生；拒绝她，全村人替你答应。',
        difficulty: '困难',
        horrorLevel: 9,
        playTime: '35–50 分钟',
        tags: ['狐妖', '人妖', '长生'],
        scriptPath: 'stories/story_hujia.js'
    },
    {
        id: 'ganshi',
        title: '赶尸',
        subtitle: '湘西 · 雨夜 · 三具尸体',
        description: '你是湘西最年轻的赶尸匠。这一单有三具尸体要送，可其中一具在笑。雨夜山路，铜铃停了。',
        difficulty: '困难',
        horrorLevel: 10,
        playTime: '40–60 分钟',
        tags: ['赶尸', '雨夜', '尸变'],
        scriptPath: 'stories/story_ganshi.js'
    }
];

export default StoryManifest;
