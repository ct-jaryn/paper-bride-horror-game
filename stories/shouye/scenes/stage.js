/**
 * 《守夜》场景模块：stage
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    continue_watch: createScene('continue_watch', {
        title: "继续守夜",
        text: "你退回走廊，继续守夜。\n\n时间一分一秒过去。凌晨两点，殡仪馆的电话响了。\n\n你接起来，里面传来一阵戏曲唱腔，然后是一个女人的声音：\n\n\"七号厅的灯……太亮了。\"\n\n你抬头看向七号厅。门缝里没有光。\n\n可走廊尽头的灯，一盏一盏地灭了。",
        effects: {
            sanity: -15,
            yin: 15,
            visual: "flicker",
        },
        choices: [
            createChoice({
                text: "冲进七号厅",
                next: "enter_with_flashlight",
            }),
            createChoice({
                text: "躲在值班室",
                next: "hide_in_duty_room",
            }),
            createChoice({
                text: "子时已过，按规定巡一次各厅",
                next: "patrol_corridor",
            }),
            createChoice({
                text: "去河边走走，那里有未散的戏魂",
                next: "river_search",
            }),
            createChoice({
                text: "去县档案馆查旧案",
                next: "county_archive",
            }),
            createChoice({
                text: "去桂花巷找老戏班后人",
                next: "osmanthus_trace",
            }),
            createChoice({
                text: "你已知云袖之名，循着桂花香去青石镇桂花巷",
                next: "osmanthus_alley",
                condition: {
                    flag: "knowsName",
                },
                hidden: true,
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "凌晨三点，座机忽然响了，仿佛有故人要嘱托",
                next: "mysterious_call",
                condition: {
                    flag: "knowsName",
                },
                hidden: true,
                effects: {
                    yin: 5,
                },
            }),
            createChoice({
                text: "天快亮了，林叔来接班时似乎有话要说",
                next: "lin_shu_memory",
                condition: {
                    flag: "promised",
                },
                hidden: true,
                effects: {
                    time: 30,
                },
            }),
            createChoice({
                text: "你曾听见过纸人低语，那曲调里有相似的绝望",
                next: "paper_whisper_tune",
                condition: {
                    flag: "heard_paper_whisper",
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    }),
    paper_whisper_tune: createScene('paper_whisper_tune', {
        title: "异曲同工",
        text: "电话里的唱腔让你愣了一下。\n\n那调子不是《牡丹亭》，而是另一段更凄凉的旋律。你曾在某个山村的老槐树下听见过——纸扎人的身体里透出来的、细若游丝的低语。\n\n[whisper]\"井……下……有……人……\"[/whisper]\n\n那个声音和电话里的唱腔重叠在一起，像是一根红绳，把两个不同的亡魂串了起来。\n\n你猛然意识到：云袖不是孤立的存在。她的死、她的怨、她的戏台，都和某个叫\"周\"的家族有关。\n\n电话那头的女子似乎也听见了什么，唱腔戛然而止。良久，她轻声说：\n\n\"你也听过？\"\n\n[red]你也听过。[/red]\n\n两个世界的回声，在这个午夜短暂地交汇。",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "yunxiuLinkedToPaper",
        },
        choices: [
            createChoice({
                text: "告诉她你理解她的执念",
                next: "promise_help",
                effects: {
                    setFlag: "promised",
                },
            }),
            createChoice({
                text: "冲进七号厅找她",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    go_old_stage: createScene('go_old_stage', {
        title: "旧戏台",
        text: "你请了假，骑着电动车赶到青石镇。\n\n旧戏台的遗址还在，只剩下一圈烧焦的木桩和半塌的台基。当地人提起这里都讳莫如深，说夜里还能听见唱戏声。\n\n你在废墟里找到了一块残破的戏牌，上面写着\"春香班\"三个字。戏牌背面刻着云袖的名字。\n\n你把戏牌带回了殡仪馆，放在女尸枕边。\n\n当晚，七号厅里锣鼓喧天。你隔着门，听完了整出《牡丹亭》。\n\n曲终人散，再无异响。",
        effects: {
            time: 180,
            yin: -20,
            sanity: 5,
        },
        ending: "normal_stageRestored",
    }),
    hide_in_duty_room: createScene('hide_in_duty_room', {
        title: "躲进值班室",
        text: "你躲进值班室，锁上门，用椅子抵住。\n\n门外传来脚步声、水声、还有断断续续的唱腔。你蜷缩在床上，用被子蒙住头。\n\n不知过了多久，一切声音都消失了。\n\n你小心翼翼地探出头。\n\n值班室的墙上，用黑水写满了字：\n\n[faded]\"还我戏台还我戏台还我戏台……\"[/faded]\n\n而在字的尽头，女尸背对着你，正在对着墙壁，一个人唱戏。",
        effects: {
            sanity: -40,
        },
        ending: "death_trappedWatcher",
    }),
    follow_her: createScene('follow_her', {
        title: "跟随她",
        text: "你站起身，跟着她走向七号厅。\n\n她牵起你的手。那只手冰冷湿滑，像刚从河里捞出来。\n\n她带你走到灵床旁，自己躺下，然后示意你也躺下。\n\n\"你躺这里，\" 她说，\"我唱给你听。\"\n\n你躺下。她侧卧在你身边，开始轻声吟唱《牡丹亭》。\n\n她的声音越来越轻，你的身体越来越冷。\n\n你意识到，她已经找到了新的听众。\n\n而你，再也不会醒来了。",
        ending: "death_duetWithGhost",
    }),
    struggle_dragged: createScene('struggle_dragged', {
        title: "被拖入黑水",
        text: "你拼命挣扎，但女尸的力气大得惊人。\n\n她把你的头按进灵床上的黑水里。那不是水，是无数细小的戏台和唱戏的人。\n\n你感到自己在窒息，在坠落。\n\n最后一刻，你听见她说：\n\n[whisper]\"既然不愿意帮我唱，那就替我看完这场戏吧。\"[/whisper]",
        ending: "death_drownedOnLand",
    })
};
