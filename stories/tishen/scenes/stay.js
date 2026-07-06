/**
 * 《tishen》场景模块：stay
 */

export const scenes = {
    stay_calm_night: {
        title: '清醒',
        text: `你屏住呼吸，仔细分辨声音的来源。

脚步声确实在门口。但那不是走路的声音，而是有什么东西在门外缓慢地、一圈一圈地转。

[red]它不是在等你开门。它是在等你崩溃。[/red]

你想起民俗资料里提到过：替身纸人没有真正的意志，它们靠吸食宿主的恐惧来成长。你越怕它，它越像你。

你深吸一口气，对着门口说："我知道你在。我不会怕你。"

门外的脚步声停了。

良久，纸人的声音传来，带着一丝不甘："你为什么不怕？"

"因为你是我的八字扎出来的。" 你说，"你像我，是因为我。没有我，你什么都不是。"

门外安静了很久。然后，脚步声渐渐远去。`,
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: 'resistedFear'
        },
        choices: [
            {
                text: '开门查看',
                next: 'ask_what_wants'
            },
            {
                text: '继续休息，等天亮',
                next: 'stay_silent'
            }
        ]
    },

    stay_silent: {
        title: '保持沉默',
        text: `你捂住嘴，不敢出声。

门外的"你"等了一会儿，又开始说话："我知道你在里面。我听得见你的心跳。"

[whisper]它真的能听见。[/whisper]

"你的心跳很快。" 它说，"和我一样快。"

脚步声渐渐远去。你松了一口气。

可下一秒，你听见窗户传来响动。你转头，看见纸人的脸贴在玻璃上，正对着你笑。

"窗户没锁。" 它说。`,
        effects: {
            sanity: -25,
            yin: 15
        },
        choices: [
            {
                text: '跳窗逃跑',
                next: 'jump_window'
            },
            {
                text: '拿东西砸窗户',
                next: 'break_window_doll'
            }
        ]
    }
};
