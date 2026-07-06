/**
 * 《回门》场景模块：paper
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    paper_whisper: createScene('paper_whisper', {title:'纸人低语',text:`你屏住呼吸，把耳朵贴近女纸人。

风里传来极细极细的声音，像是从纸壳里透出来的：

[whisper]"井……下……有……人……"[/whisper]

[whisper]"别……喝……交……杯……酒……"[/whisper]

你猛地后退一步。纸人的嘴角似乎向上翘了翘，又恢复成原来的弧度。可你再看时，发现它的手腕上缠着一根细细的红绳，红绳的另一端，一直延伸到老宅的方向。

这不是纸扎。这是某种东西的壳。

你忽然明白了：秀兰不只在井底。她还在这些纸人里，在每一张纸钱上，在每一根红绳里。`,effects:{"sanity":-10,"yin":7,"setFlag":"heard_paper_whisper"},choices:[createChoice({"text":"顺着红绳的方向走去","next":"to_old_house"}),createChoice({"text":"追问李婆纸人说了什么","next":"ask_xiulan","effects":{"sanity":-5}})]}),
    burn_paper_money: createScene('burn_paper_money', {title:'烧纸钱',text:`你摸出随身带的打火机，"嚓"地一声，火苗舔上纸钱。

纸钱没有燃烧，而是发出一声凄厉的尖叫，像活物一样蜷缩起来，化为一缕黑烟消散。

李婆的身影也随之淡去，只留下一句话飘在风里：

[whisper]"火……烧不尽三十年的债……"[/whisper]

你的打火机也在这时熄灭了。你低头一看，打火机的金属外壳上，竟然结了一层薄薄的白霜。

你甩了甩打火机，把它塞回口袋，向老宅跑去。`,effects:{"sanity":-5,"time":30},choices:[createChoice({"text":"冲进老宅","next":"huimen_paper_doll_warning"})]}),
    inspect_paper_dolls: createScene('inspect_paper_dolls', {title:'纸人新娘',text:`你走近那两个纸人。

男纸人穿着长袍马褂，胸前别着一朵大红绸花。女纸人盖着红盖头，只露出尖尖的下巴。他们的脸是用黄纸糊的，再画上眉眼唇红。

你无意识地捻了捻女纸人喜服的边角。黄纸内衬的角落里，印着一方很小的朱红图章，字迹已经模糊，只能勉强认出"青石镇"和"周氏"两个字。

你心头掠过一丝异样。这山村离青石镇有百里之遥，纸扎人的内衬上，为什么会有那里的铺号？

可你越仔细看，越觉得不对劲。

女纸人的下巴上，有一颗小小的黑痣。和你母亲一模一样的位置。

[red]不，不是像母亲。是像你。[/red]

你下意识摸了摸自己的下巴。那里也有一颗痣。

"像吧？" 李婆的声音又响起来，"秀兰活着的时候，就长这样。你祖母说，周家男丁下巴有痣，是祖上留的印记。秀兰当年就是凭这颗痣，认出了你祖父。"

你猛地抬头："可我祖父已经死了三十年了！"

李婆笑了："[whisper]血脉里的债，总得有人还。你今晚上了轿，就是她的新郎了。[/whisper]"`,effects:{"sanity":-12,"yin":4},choices:[createChoice({"text":"质问李婆什么意思","next":"ask_meaning"}),createChoice({"text":"强忍恐惧，走向老宅","next":"huimen_paper_doll_warning"}),createChoice({"text":"那个空位上的纸人，脸画得很像自己","next":"huimen_exp_paper_doll_alt"}),createChoice({"text":"拆开纸人，检查里面藏着什么","next":"investigate_paper_dolls"}),createChoice({"text":"摸出护身符挡在纸人面前","next":"use_talisman_ghost","condition":{"hasItem":"护身符"},"hidden":true})]})
};
