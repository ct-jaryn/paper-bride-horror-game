/**
 * 《ganshi》NPC 对话：阿菊
 */

export const zhou_maid = {
    name: '阿菊',
    title: '周家旧婢',
    dialogue: {
        start: {
            text: `洞壁的阴影里走出一个老妇人的鬼魂，穿着周家下人的青布衣裳。她看着你，目光浑浊。\n\n"又一个来送死的姑娘……不对，是个赶尸匠。"`,
            choices: [
                { text: '你是谁？', next: 'who_are_you' },
                { text: '你认识周家？', next: 'know_zhou' },
                { text: '（离开）', exit: true }
            ]
        },
        who_are_you: {
            text: `"我姓菊，曾是周家的婢女。"老妇人说，"活着的时候给他们浆洗冥婚喜服，死了被他们封在这洞里，免得我说出去。"\n\n她看向女尸："这姑娘的嫁衣，就是我死前浆洗的最后一件。"`,
            choices: [
                { text: '周家还做过什么？', next: 'know_zhou' },
                { text: '怎样才能救她？', next: 'save_bride' },
                { text: '（离开）', exit: true }
            ]
        },
        know_zhou: {
            text: `"周家祖上造过大孽。"阿菊压低声音，"他们害过狐族，狐女却报恩救了周家后人。可周家后人不懂积德，反而拿狐族的血脉当护身符，继续害人。"\n\n"你若去青石镇，看看周家祠堂的狐仙牌位，就明白了。"`,
            choices: [
                { text: '狐族和周家有什么关系？', next: 'fox_link', condition: { noFlag: 'hujia_to_zhou' } },
                { text: '我已经知道这层关系', next: 'fox_known', condition: { flag: 'hujia_to_zhou' } },
                { text: '（离开）', exit: true }
            ]
        },
        save_bride: {
            text: `"别把她葬进周家祖坟。"阿菊说，"让她在阳间留下名字，周家才会怕。周家最怕的不是厉鬼，是被人知道。"\n\n"账册、血书、喜服内衬的朱印，都是证据。"`,
            choices: [
                { text: '狐族和周家有什么关系？', next: 'fox_link', condition: { noFlag: 'hujia_to_zhou' } },
                { text: '（离开）', exit: true }
            ]
        },
        fox_link: {
            text: `"周远那孩子，就是他父亲救过狐。"阿菊说，"狐女来报恩，周家却以为是理所应当。他们不知道，狐族的恩情是要还的，孽也是要还的。"\n\n"你若遇见狐族的人，把这话带给她：周家的债，该从狐仙牌位后头算起。"`,
            effects: { setFlag: 'hujia_to_zhou', npcAffinity: 20, sanity: -5, yin: 5 },
            choices: [
                { text: '我该去哪里找狐族？', next: 'fox_hint' },
                { text: '（离开）', exit: true }
            ]
        },
        fox_known: {
            text: `"你果然知道。"阿菊点点头，"那我就不多说了。记住，狐族报恩也讨债，周家最怕的，就是这笔账被翻出来。"`,
            effects: { npcAffinity: 5 },
            choices: [
                { text: '（离开）', exit: true }
            ]
        },
        fox_hint: {
            text: `"去青丘山。"阿菊说，"狐女常在山腰的望月石旁。你告诉她，阿菊没有忘，周家祠堂里那些姑娘也没有忘。"\n\n她的身影退入石壁，像一滴墨溶进水里。`,
            choices: [
                { text: '（离开）', exit: true }
            ]
        }
    }
};
