/**
 * 《回门》场景模块：exp2_mirror_lake
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_mirror_lake: createScene('huimen_exp2_mirror_lake', {title:'镜湖',text:`你沿着河走，来到一片平静的湖面。

湖面像一面巨大的镜子，倒映着天空和月亮。可镜中的月亮是红色的，而天上的月亮是白色的。

[red]这不是倒影，是另一个世界。[/red]`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"把手伸进湖里","next":"huimen_exp2_mirror_lake_touch","effects":{"yin":3}}),createChoice({"text":"对湖面说话","next":"huimen_exp2_mirror_lake_talk","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_mirror_lake_touch: createScene('huimen_exp2_mirror_lake_touch', {title:'触镜',text:`你把手伸进湖里。

湖水不是凉的，是温的，像人的体温。你的手穿过了水面，触到一只冰冷的手。

那只手把你往下拉。你拼命挣扎，终于把手抽回来。

[red]你的手腕上多了一道红印，像被人握过。[/red]`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"再试一次","next":"huimen_exp2_mirror_lake_pull","effects":{"yin":5}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_mirror_lake_pull: createScene('huimen_exp2_mirror_lake_pull', {title:'镜湖拉人',text:`你再次把手伸进湖里。

这次你没有挣扎，而是用力一拉。湖里被你拉出一个人——是秀兰，浑身湿透，脸色苍白。

"你救了我？" 她问。

"我拉你出来。" 你说。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_pulled_xiulan_from_lake"},choices:[createChoice({"text":"用镜子照她","ending":"huimen_exp2_ending_mirror_lake","effects":{"yin":-5}})]}),
    huimen_exp2_mirror_lake_talk: createScene('huimen_exp2_mirror_lake_talk', {title:'湖语',text:`你对着湖面说："秀兰，你在这里吗？"

湖面泛起涟漪，涟漪中浮现出秀兰的脸。她看着你，眼神里有一丝惊讶。

"你看得见我？" 她问。

"看得见。" 你说，"你不是倒影，你就在这里。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"继续说话","next":"huimen_exp2_mirror_lake","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
