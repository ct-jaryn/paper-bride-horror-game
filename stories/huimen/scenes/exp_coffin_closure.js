/**
 * 《回门》场景模块：exp_coffin_closure
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_xiulan_scared: createScene('huimen_exp_xiulan_scared', {title:"秀兰的怕",text:`你正要开口，忽然发现秀兰在发抖。

不是冷的抖，是从骨头里透出来的那种颤栗。

"你怎么了？"你问。

"我怕。"她说，声音轻得像随时会断，"我怕天亮。"

"为什么？"

"因为天亮之后，我可能就不存在了。"她低下头，"鬼是不能见太阳的。"

你看着她，心里一阵钝痛。她等了三十年的解脱，却害怕解脱本身。

"你不会消失。"你说，"你会变成风，变成雨，变成桂花。你会以另一种方式存在。"

秀兰抬起眼看你，眼眶里那抹骇人的红色淡了一些："真的吗？"

"真的。"你认真地说，"我会记得你。这就是你的存在。"

她沉默了很久，最后轻轻点了点头。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"握住她的手","next":"huimen_exp_xiulan_scared_hold","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_scared_hold: createScene('huimen_exp_xiulan_scared_hold', {title:"相握",text:`你把手伸进井水，握住秀兰的手。

她的手很凉，凉得像一块浸在深水里的玉。你没有缩回，反而握得更紧了些。你握着她的手，像握着一块冰，也像握着一个即将融化的梦。

"我不怕了。"她说，"有人在，我就不怕。"

你点点头，喉咙发紧，眼泪却不争气地流了下来。你为秀兰哭，也为所有来不及被爱的人哭。

井水开始变暖，秀兰的手也渐渐有了温度。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_held_xiulan_hand"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_redemption_loop: createScene('huimen_exp_redemption_loop', {title:"带她走",text:`你牵起秀兰的手。

她的手很凉，却没有先前那种刺骨的寒意。你们沿着月光铺成的小路走，两旁的纸门在你们身后一扇扇打开，又轻轻关闭，像是在为你们送行。

走到村口时，秀兰停下脚步，回头望了望村子。村子里静悄悄的，纸人不再动，灯笼不再飘。

"三十年了。"她说，"我终于可以走了。"

你把她的手攥得更紧。你们一起走出山村，走向天光。

村口的老桑树在你们身后轻轻摇晃，沙沙作响，像是在道别。`,effects:{"sanity":20,"yin":-20},ending:"huimen_exp_redemption_loop"}),
    huimen_exp_red_coffin_open_alt: createScene('huimen_exp_red_coffin_open_alt', {title:"井底开棺",text:`你用铜钥匙打开了井底的红棺。

棺盖"咯吱"一声推开，里面没有尸体——只有一件叠得整整齐齐的嫁衣，大红绣金，针脚细密。嫁衣旁边，躺着一个巴掌大的纸人。

纸人脸上画着秀兰的眉眼，胸口贴着一张黄纸，纸上写着你的生辰八字。

你一下明白了：周家不仅想让你娶秀兰，还想让你成为她的替身。

你把嫁衣和纸人一起烧了。火光中，秀兰的身影渐渐清晰，眼里有泪。

"你救了自己，"她说，"也救了我。`,choices:[createChoice({"text":"结束替身","ending":"hidden_redCoffinOpen"})]}),
    huimen_exp_redemption_loop_alt: createScene('huimen_exp_redemption_loop_alt', {title:"回门续章",text:`你牵着秀兰的手，沿着月光小路走出山村。

她没有盖头，没有血泪，只是一个沉默的姑娘。你把她带到后山，和无字碑一起，重新立了一座新碑。

碑上你一笔一画刻着："周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

秀兰看着那行字，忽然笑了："原来回门，是真的可以回家的。"

她化作红光消散前，把一枚金戒指轻轻放在你手心。戒指温热，像是带着体温。`,choices:[createChoice({"text":"带她回家","ending":"huimen_exp_redemption_loop"}),createChoice({"text":"在带她走之前，先问她是否愿意把她的故事告诉世人","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]})
};
