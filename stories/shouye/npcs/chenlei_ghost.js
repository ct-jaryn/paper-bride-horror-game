/**
 * NPC 模块：chenlei_ghost
 */

export const NPCs = {
chenlei_ghost: {
        name: '陈磊',
        title: '三号厅 · 车祸少年',
        dialogue: {
            start: {
                text: `你站在三号厅的白布前，轻声说："陈磊，能听见我吗？"

白布下沉默了一会儿。然后，一个年轻的、带着水泡声的声音响起：

"叔叔……您能听见我？白天我妈来的时候，她听不见。只有您能听见。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '你女朋友的事……', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你今年多大？', next: 'cl_age' },
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 5 } }
                ]
            },
            cl_worry: {
                text: `"我妈。"少年的声音哽咽，"我爸走得早，就剩我妈一个人。我没了，她怎么活？

"还有……还有小月。那天是我送她回家。桥上那段路没灯，是我骑太快了。我看见护栏的时候，已经刹不住了。

"小月飞出去的时候，我还伸手去抓她。可我抓了个空。然后我也撞上去了。"`,
                choices: [
                    { text: '小月找到了，在第三个桥洞', next: 'cl_girlfriend', condition: { flag: 'foundGirl' } },
                    { text: '你妈妈会好起来的', next: 'cl_mother' },
                    { text: '不是你的错', exit: true, effects: { npcAffinity: 10, sanity: 5 } }
                ]
            },
            cl_girlfriend: {
                text: `"找到了？"白布下的声音一下子亮了起来，"她在哪？她还好吗？"

"在青石桥第三个桥洞下面。"你说，"我们把她捞上来了。她妈妈也知道了。"

白布下传来压抑的抽泣。

"那就好……那就好。我一直不敢跟人说她在哪。我怕小月她妈恨我。是我害了小月。"

"不是你害的。"你说，"是个意外。"

"可如果那天我骑慢一点……"`,
                choices: [
                    { text: '小月不会怪你的', next: 'cl_xiaoyue_forgive' },
                    { text: '你该走了，别让小月等太久', exit: true, effects: { npcAffinity: 20, sanity: 10, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_xiaoyue_forgive: {
                text: `"小月……不怪我？"少年的声音颤抖。

"她手腕上那条手绳，"你说，"坠子是个小摩托。她每天都戴着。你觉得，她会怪一个她那么在乎的人吗？"

白布下安静了很久。

"谢谢你，叔叔。"少年的声音变得清澈，不再有水泡声，"帮我跟我妈说一声……对不起。下辈子，我还做她儿子，再也不骑快车了。"

"还有小月……如果有下辈子，我还送她回家。这次，我一定骑慢一点。"`,
                choices: [
                    { text: '安息吧，孩子', exit: true, effects: { npcAffinity: 30, sanity: 20, yin: -20, setFlag: 'chenleiReleased' } }
                ]
            },
            cl_mother: {
                text: `"我妈……"少年哽咽，"她白天来哭了好久。我听见了，可我动不了，也说不出话。

"叔叔，您要是见到我妈，跟她说……别太难过。她还有我姐。我姐会照顾她的。

"还有我屋里那个摩托车模型，是我自己拼的。让她别扔了，送给我表弟吧。他一直想要。"`,
                choices: [
                    { text: '我会转告的', exit: true, effects: { npcAffinity: 15, sanity: 10, setFlag: 'chenleiMotherMessage' } }
                ]
            },
            cl_age: {
                text: `"十九。"少年说，"刚考上大专，汽修专业。我妈说，等我毕业了，就能进我表舅的修车铺，自己挣钱了。

"我上个月刚买了那辆二手摩托，是用攒的零花钱买的。我妈骂我乱花钱，说太危险。

"她说得对。太危险了。"`,
                choices: [
                    { text: '你还有什么放不下的？', next: 'cl_worry' },
                    { text: '安息吧', exit: true, effects: { npcAffinity: 5 } }
                ]
            }
        }
    }
};
