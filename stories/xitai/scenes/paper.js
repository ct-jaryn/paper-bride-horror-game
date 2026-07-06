/**
 * 《xitai》场景模块：paper
 */

export const scenes = {
    paper_whisper_melody: {
        title: '纸人余音',
        text: `戏台上的唱腔让你愣了一下。

那不是普通的《牡丹亭》。在婉转的曲调里，你听见了一段更细、更凉的旋律——像是在某个山村老槐树下，从纸扎人身体里透出来的低语。

[whisper]"井……下……有……人……"[/whisper]

两段声音重叠在一起，像是一根细细的红绳，把云袖和另一个被活埋的新娘连在了一起。

你猛然意识到：云袖不是孤立的存在。她的死、她的怨、她的戏台，都和某个叫"周"的家族有关。

台上的戏子似乎也感觉到了什么，齐齐停下动作。云袖缓缓转向你，没有五官的脸上似乎有什么在流动。

"你也听过？" 她的声音很轻，"那你也……见过她？"

"见过。" 你说，"她叫秀兰。她等了三十年的名分。"

云袖沉默了很久。最后她说："我等的，不是名分。是一句对不起。"`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'yunxiuLinkedToPaper'
        },
        choices: [
            {
                text: '去后台找周生',
                next: 'truth_for_yunxiu',
                condition: { flag: 'knowsTruth' }
            },
            {
                text: '上台替她唱完',
                next: 'perform_opera'
            }
        ]
    }
};
