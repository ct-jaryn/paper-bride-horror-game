/**
 * 《hujia》NPC：守墓狐灵
 */

export const shoumu_huling = {
    name: '守墓狐灵',
    title: '古墓守门人',
    dialogue: {
        start: {
            text: `古墓石门开启的瞬间，一股寒气涌出。石阶上蹲着一只半透明的老狐，身形佝偻，眼睛却亮如星子。"后人，"它开口，声音像风吹过空棺，"你来取避雷珠？"`,
            choices: [
                { text: '问它要什么代价', next: 'ask_price' },
                { text: '问它有没有别的路', next: 'other_way' },
                { text: '问它青丘和老狐的关系', next: 'relationship' },
                { text: '离开', exit: true }
            ]
        },
        ask_price: {
            text: `"代价？"守墓狐灵笑了，笑声像骨头摩擦，"我守墓三百年，最缺的就是生气。拿你三十年寿命，或者你身后那小狐女一半内丹，珠子便给。"它看向青丘，"她若不肯，你们便死在墓里。"`,
            choices: [
                { text: '问它为何如此苛刻', next: 'why_harsh' },
                { text: '离开', exit: true }
            ]
        },
        other_way: {
            text: `"别的路？"老狐眯起眼，"墓后有条小洞，是当年山崩时裂开的。但那洞窄，只能过一人，而且通向墓室深处，没有火把照路，十死无生。"它看了看你，"你若从那边走，可以绕到我背后。但能不能拿到珠子，看你造化。"`,
            effects: { npcAffinity: 5 },
            choices: [
                { text: '问它洞在哪里', next: 'back_hole_location', condition: { flag: 'knowsTombBackPath' } },
                { text: '离开', exit: true }
            ]
        },
        relationship: {
            text: `"青丘？"守墓狐灵的眼神柔和了一瞬，"她是我曾孙女。她母亲就是我女儿。当年周家猎狐，她母亲险些死在那场劫里，是你们周家那个猎户救了她。"它冷笑，"所以我说你们人类奇怪，一边杀我们，一边又救我们。"`,
            choices: [
                { text: '问它是否肯成全青丘', next: 'plea_for_qingqiu' },
                { text: '离开', exit: true }
            ]
        },
        why_harsh: {
            text: `"苛刻？"守墓狐灵站起身，身形骤然变大，"三百年了，你们人类进这墓的，哪个不是来抢珠子的？我若不给代价，你们便动手。我若给代价，你们又说苛刻。"它重新蹲下，"想要珠子，就拿出诚意来。"`,
            choices: [
                { text: '离开', exit: true }
            ]
        },
        back_hole_location: {
            text: `守墓狐灵有些意外："你知道那条路？"它点点头，"墓后第三块石碑下，藤蔓最密处。进去后一直向左，不要碰墙上的红漆。走到尽头，就是放珠子的石台。"它顿了顿，"但记住，珠子有灵，强取不得。"`,
            effects: { npcAffinity: 10, addItem: '守墓狐灵的提示' },
            choices: [
                { text: '谢过它', exit: true }
            ]
        },
        plea_for_qingqiu: {
            text: `守墓狐灵沉默了很久。"成全？"它说，"我守墓三百年，早没了当年的情分。但……"它看着青丘，"她长得真像她母亲。"它叹了口气，"若你能让她心甘情愿分你一半内丹，再分我一半，我便把珠子给你们。这样你们三人各受损伤，却也各得其所。"`,
            effects: { npcAffinity: 5 },
            choices: [
                { text: '离开', exit: true }
            ]
        }
    }
};
