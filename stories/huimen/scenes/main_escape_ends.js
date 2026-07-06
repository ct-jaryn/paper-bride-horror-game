/**
 * 《回门》场景模块：main_escape_ends
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    sneak_back_yard: createScene('sneak_back_yard', {title:"潜回后院",text:"你悄悄潜回老宅后院。\n\n井边的铜镜碎片在月光下泛着冷光。你注意到井绳垂在井里，还在微微晃动——像是刚有人下去过。\n\n你顺着井绳滑下，井底的红棺已经打开了。\n\n秀兰坐在棺材边，手里捧着那张祖父的字条。她抬头看你，眼神不再怨毒。\n\n\"你来了。\" 她说，\"我知道你会来。\"",effects:{"yin":-10},choices:[createChoice({"text":"递上字条","next":"give_letter"}),createChoice({"text":"她已经原谅你了，准备安葬","next":"huimen_xiulan_forgiveness","condition":{"flag":"xiulanMercy"},"effects":{"yin":1}})]}),
    charge_exit: createScene('charge_exit', {title:"硬闯村口",text:"你冲向村口。\n\n村民们没有拦你，只是默默让开一条路。你跑出村口，跑出山路，一直跑到天亮。\n\n你回到了城市，回到了自己的公寓，冲了个澡，躺在床上。\n\n一切仿佛都是一场噩梦。\n\n直到三天后，你在镜子前刮胡子，发现镜中的自己穿着一身大红喜服，嘴角咧到耳根。\n\n[red]它对你笑了笑。[/red]\n\n你低头看向自己的身体。皮肤苍白，四肢僵硬，胸口贴着一张黄符，上面写着你的生辰八字。\n\n原来，你从来没有逃出那个村子。",ending:"escapedButNot"}),
    paralyzed: createScene('paralyzed', {title:"动不了",text:"你想跑，但双腿像灌了铅。\n\n秀兰从棺材里坐起来，红盖头滑落到肩上。她的脸和你一模一样，只是没有血色。\n\n\"别怕，\" 她说，\"成亲之后，你就不会怕了。\"\n\n她握住你的手。那只手冰冷刺骨，但你竟然感到一阵安心。\n\n堂屋里的亲戚们开始敲锣打鼓，唢呐声再次响起。\n\n\"送入洞房——\"\n\n你被扶进那顶红轿子。轿帘放下的一瞬间，你看见轿壁上贴满了黄符，每一张都写着同一个名字：\n\n[red]你的名字。[/red]\n\n从此，山村多了一对恩爱的鬼夫妻。每年七月半，都能听见他们的笑声。",ending:"ghostMarriage"}),
    turn_around: createScene('turn_around', {title:"回头",text:"你转过身。\n\n秀兰的脸几乎贴在你的脸上。她的眼睛没有瞳孔，只有两团漆黑的墨点。\n\n\"你终于看我了。\" 她说。\n\n她的嘴唇贴上你的额头。那不是亲吻，而是某种古老的契约。\n\n你感到有什么东西钻进了你的身体。你的记忆开始模糊，取而代之的，是另一个女人的记忆——\n\n被活埋的恐惧，孩子的哭声，三十年的等待，还有……爱。\n\n[red]你变成了秀兰。[/red]\n\n而秀兰，穿着你的衣服，走向了天亮。",ending:"possessed"})
};
