/**
 * NPC 模块：old_fan
 */

export const NPCs = {
old_fan: {
        name: '何伯',
        title: '青石镇老票友',
        dialogue: {
            start: {
                text: `你在青石镇茶馆里找到何伯。他八十多岁了，耳朵背，但一听见"春香班"三个字，眼睛就亮了。

"春香班！哎呀，那是多少年前的事了。"何伯拍着大腿，"我年轻时候，追着春香班跑了半个县，就为了听云袖姑娘一出《牡丹亭》。"`,
                choices: [
                    { text: '你听过云袖唱戏？', next: 'fan_yunxiu_voice' },
                    { text: '那场大火你知道吗？', next: 'fan_fire' },
                    { text: '周生是什么人？', next: 'fan_zhousheng' },
                    { text: '告辞', exit: true }
                ]
            },
            fan_yunxiu_voice: {
                text: `"听过！怎么没听过！"何伯闭上眼，像是回到了几十年前，"云袖姑娘的嗓子，那是老天爷赏饭吃。她一开腔，满园子鸦雀无声，连树上的鸟都不叫了。

"我记得她唱《惊梦》，唱到'良辰美景奈何天'，我在台下，眼泪就下来了。那时候我不懂什么叫好戏，可我就是想哭。后来我才明白，那是唱到了人心里去。"`,
                choices: [
                    { text: '除了你，还有人记得她吗？', next: 'fan_others_remember' },
                    { text: '那场大火怎么回事？', next: 'fan_fire' },
                    { text: '谢谢何伯', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            fan_fire: {
                text: `何伯的脸色暗下来。

"那场火啊……是我这辈子见过最惨的事。戏台后梁断了，火一下子就烧起来。满园子的人疯了一样往外跑。

"可云袖姑娘没跑。她站在台上，还在唱。大家都说她疯了，可我那时候就坐在第一排，我看清了——她不是疯了，她是入戏了。她把自己当成了杜丽娘，死也要死在戏台上。"

何伯擦了擦眼角。

"后来有个年轻人冲上去救她。听说是纸扎铺的周生。再后来，戏台塌了，火光里什么都看不见了。云袖姑娘和周生，都没出来。"`,
                choices: [
                    { text: '周生后来呢？', next: 'fan_zhousheng' },
                    { text: '你会唱《牡丹亭》吗？', next: 'fan_can_sing' },
                    { text: '谢谢何伯告诉我这些', exit: true, effects: { npcAffinity: 10, setFlag: 'fanToldFire', sanity: 5 } }
                ]
            },
            fan_zhousheng: {
                text: `"周生啊……"何伯想了想，"是个老实人。话不多，手特别巧。他扎的纸花，全镇第一。

"他对云袖姑娘好，全镇都知道。每场戏，他都送一篮子纸花去后台。云袖姑娘上台，鬓边别的花，十有八九是他扎的。

"大伙儿都说他们是天生一对，就等周生攒够聘礼提亲了。谁能想到……"

何伯叹了口气。

"要是没那场火，他们早成亲了，没准儿现在孙子都有了。哪至于……一个泡在河里，一个不知所踪。"`,
                choices: [
                    { text: '周生其实投河了', next: 'fan_zhousheng_river', condition: { flag: 'foundZhouShengDiary' } },
                    { text: '那场大火的详情？', next: 'fan_fire' },
                    { text: '告辞', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            fan_zhousheng_river: {
                text: `你把周生投河的事告诉何伯。

老人家的茶杯停在半空，手抖得厉害。

"他……他也走了？"何伯的声音哽咽，"为了云袖姑娘，他也……"

他沉默了很久。

"那他们，总算是在一起了。"他最后说，"水里也好，土里也好，总算是在一起了。"

何伯颤巍巍地从怀里掏出一张发黄的戏票，递给你。

"这是云袖姑娘最后那场戏的票。我留了一辈子。你拿去，替我烧给她。告诉她，何伯这辈子，没忘了她的戏。"`,
                choices: [
                    { text: '收下戏票', exit: true, effects: { addItem: '云袖最后的戏票', npcAffinity: 20, sanity: 10, setFlag: 'fanGaveTicket' } }
                ]
            },
            fan_others_remember: {
                text: `"记得她的人？"何伯想了想，"老一辈的，走得差不多了。年轻人谁还知道春香班？

"不过，你要是真想找人，去镇南养老院找孙家奶奶。她爷爷是春香班的班主，家里应该还留着些旧物件。

"再就是省城有个戏曲研究所，前些年来人问过云袖姑娘的事，说是要写进什么书里。你若有心，可以去那边问问。"`,
                choices: [
                    { text: '记下了，谢谢何伯', exit: true, effects: { npcAffinity: 10, setFlag: 'fanHintedDescendant' } }
                ]
            },
            fan_can_sing: {
                text: `何伯愣了一下，然后清了清嗓子。

"我唱得不好，就记得几句。"

他闭着眼，用沙哑的、跑调的嗓音，轻轻唱了起来：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]

茶馆里的人都转过头来看。何伯唱得不好，但每一个字都带着一种说不出的、苍凉的深情。

唱完，他睁开眼，笑了。

"云袖姑娘唱得比我好一万倍。可我这一辈子，也没忘过这一句。"`,
                choices: [
                    { text: '何伯，谢谢你', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'fanSangForYunxiu' } }
                ]
            }
        }
    }
};
