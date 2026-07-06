/**
 * 《回门》场景模块：main_confront
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    shadow_in_corner: createScene('shadow_in_corner', {title:'暗角之人',text:`你强迫自己冷静，目光扫过堂屋每一个角落。

烛火把跪在棺材前的叔伯婶娘的影子投在墙上，像一群弯曲的问号。但你发现，在棺材左侧的暗角里，还有一团影子。

那团影子没有主人。

它贴着墙根，细长细长，像是一个被拉长的女人。你眨了眨眼，它又往暗处缩了缩。

[whisper]"你看得见我？"[/whisper] 一个声音直接在你脑子里响起。

你不敢回答。你想起母亲说过的话：在山里，有些问题一旦回答，就再也走不掉了。

那团影子见你不答，慢慢地、慢慢地沉进了地板缝里，只留下一缕潮湿的、像是从井底带上来的腥气。`,effects:{"sanity":-10,"yin":5,"setFlag":"saw_corner_shadow"},choices:[createChoice({"text":"告诉亲戚们角落里有人","next":"ask_coffin","effects":{"sanity":-10}}),createChoice({"text":"假装没看见，继续观察棺材","next":"approach_coffin"})]}),
    ask_who_are_you: createScene('ask_who_are_you', {title:'你是谁',text:`水里的女子沉默了很久。

"我？" 她终于开口，声音像是从很远的地方传来，"我是秀兰。是你周家欠了三十年的一条命。也是……你今晚会变成的样子。"

她缓缓抬起手，指向你的胸口："你这里，也有一颗红痣。和我当年一样。周家男人娶媳妇，看的不是脸，是这颗痣。"

你低头看向自己的胸口。衬衫不知何时敞开了，心口处赫然有一颗鲜红的痣。

你忽然想起小时候祖母说过的话："周家男丁心口都有痣，那是祖上留下的印记。"

[red]原来，从你一出生，他们就知道你会回来。[/red]`,effects:{"sanity":-25,"yin":10},choices:[createChoice({"text":"用井水泼向铜镜","next":"mirror_well"})]}),
    ask_really_me: createScene('ask_really_me', {title:'真的是我',text:`四婶摇摇头，不再说话。

她把你带到一间偏房，锁上了门。

"吉时到之前，你就在这里待着。别想跑，秀兰认得你，你跑到哪里，她都会找到你。"

你听见门外传来唢呐声，凄厉婉转，不像喜乐，更像丧乐。

窗缝里塞进一张红纸，上面是你的生辰八字。`,effects:{"time":60,"yin":5},choices:[createChoice({"text":"翻窗逃走","next":"break_window"}),createChoice({"text":"等待机会","next":"wait_chance"})]}),
    wait_chance: createScene('wait_chance', {title:'等到子时',text:`你等到了子时。

门外传来脚步声，还有重物拖过地面的声音。

门开了。二叔和三姑站在门口，他们身后是一顶红轿子。轿帘掀开，里面坐着一个盖着红盖头的人。

"新郎官，上轿吧。" 二叔说。

你注意到，他的手腕上，红绳已经勒进了骨头里。`,effects:{"yin":15,"time":120},choices:[createChoice({"text":"反抗","next":"resist_marriage","ending":"sacrificed"}),createChoice({"text":"顺从","next":"pretend_marry"})]}),
    pretend_marry: createScene('pretend_marry', {title:'拜堂',text:`你穿上了红嫁衣。

不，不对。给你穿的是新郎服，但刺绣的龙凤位置却是反的——龙在右，凤在左，像是给死人穿的寿衣。

你被牵着走进堂屋。棺材已经打开，秀兰站在棺材旁边，盖着头，身形虚幻。

"一拜天地——" 二叔高喊。

你跟着跪下。抬头时，发现堂屋的天花板上贴满了黄符，符上全是你的名字。

"二拜高堂——"

棺材里的女尸坐了起来。

"夫妻对拜——"

秀兰的盖头飘了起来。`,effects:{"sanity":-30,"yin":15,"visual":"shake"},choices:[createChoice({"text":"掀翻供桌逃跑","next":"run_away_coffin","condition":{"noFlag":"xiulanMercy"}}),createChoice({"text":"喊出秀兰的名字，求她放过你","next":"beg_xiulan","condition":{"flag":"xiulanMercy"}})]}),
    pull_nails_barehand: createScene('pull_nails_barehand', {title:'徒手拔钉',text:`你一根一根拔出桃木钉。

每拔一根，井底就传来一声凄厉的哭喊。你的手掌被钉上的符咒灼伤，皮肉翻开，露出森森白骨。

但你没有停。

最后一根钉子拔出时，红棺的盖子自动滑开。里面飘出一股桂花香。

秀兰躺在棺材里，像是睡着了。她的肚子微微隆起，手里攥着一张泛黄的照片。

照片上，是年轻的祖父和一个穿学生装的女子。女子笑得很甜。

[red]那不是祖母。[/red]`,effects:{"sanity":-20,"yin":5,"setFlag":"foundBones"},choices:[createChoice({"text":"取出照片和嫁衣","next":"give_letter"}),createChoice({"text":"她已经原谅你了，准备安葬","next":"huimen_xiulan_forgiveness","condition":{"flag":"xiulanMercy"},"effects":{"yin":1}})]}),
    corpse_bride_link: createScene('corpse_bride_link', {title:'同命新娘',text:`你盯着那些从皮肉里长出来的红绳，忽然想起赶尸匠田小七说过的话。

他在雨夜山路上遇见过一具女尸，穿着大红嫁衣，被当成第四具尸体送来。那女尸手腕系着红绳，嘴里念叨着要回青石镇。

[red]青石镇。周家。红嫁衣。[/red]

你猛地看向棺材后面的小门。门缝里透出暗红色的光，光里似乎有一件嫁衣在飘动。

秀兰的声音从门后传来："原来……我不是唯一一个被周家害死的新娘。"

你推开门。门后没有喜房，只有一面巨大的铜镜。镜中映出一个穿红嫁衣的女子，她的心口有一道新疤，正和你一样看着镜外。

"柳红。" 你念出镜中女子嫁衣上的名字。

铜镜"咔"地一声裂开，一件绣着"柳"字的红嫁衣从镜中飘出，落在你手里。秀兰的嫁衣也自动从你怀中飞出，两件嫁衣叠在一起，像是一对同命相连的姐妹。

[faded]"柳红，青石镇人，年十九，被活埋配冥婚。与我同命，愿同归土。"[/faded]

你把两件嫁衣紧紧抱在怀里。周家的罪孽，比你想的更深、更广。`,effects:{"sanity":-10,"yin":7,"addItem":"柳红的嫁衣"},ending:'hidden_brideLink'})
};
