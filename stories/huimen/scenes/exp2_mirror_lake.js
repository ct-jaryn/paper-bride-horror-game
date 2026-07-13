/**
 * 《回门》场景模块：exp2_mirror_lake
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_mirror_lake: createScene('huimen_exp2_mirror_lake', {title:'镜湖',text:`你沿着河走，走了很久，来到一片平静的湖面。

湖面很宽，一眼望不到对岸。水面像一面巨大的镜子，没有一丝涟漪，倒映着天空、月亮、还有岸边的树。倒影清晰得吓人，每一根树枝，每一片云，都和天上一模一样。

可你看了一会儿，发现不对。镜中的月亮是红色的，而天上的月亮是白色的。镜中的树枝是开花的，而岸边的树是枯的。镜中的你没有影子，而岸上的你影子分明。

[red]这不是倒影，是另一个世界。镜子里的是一个相反的、活着的、却又死去的世界。[/red]

湖面忽然泛起一圈涟漪，从中心扩散开来，像一个眨眼。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"把手伸进湖里","next":"huimen_exp2_mirror_lake_touch","effects":{"yin":3}}),createChoice({"text":"对湖面说话","next":"huimen_exp2_mirror_lake_talk","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_mirror_lake_touch: createScene('huimen_exp2_mirror_lake_touch', {title:'触镜',text:`你蹲下身，把手伸进湖里。

你以为会碰到水，可你的手穿过了水面，没有溅起一滴水。湖水不是凉的，是温的，温得像人的体温，像血。

你的手在镜面那一边穿行，触到一只冰冷的手。那只手抓住了你的手腕，力气很大，像是要把你拉下去。

你拼命挣扎，终于把手抽回来。手上湿漉漉的，却没有水，只有一层淡淡的红色，像被谁握过，握得很紧。

[red]你的手腕上多了一道红印，像被人握过。红印是凉的，凉得刺骨，像那只手还留在你手腕上。[/red]`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"再试一次","next":"huimen_exp2_mirror_lake_pull","effects":{"yin":5}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_mirror_lake_pull: createScene('huimen_exp2_mirror_lake_pull', {title:'镜湖拉人',text:`你再次把手伸进湖里。

这次你没有挣扎。那只手又抓住了你，你用力一拉，往后仰，把湖里的东西拽出来。

水"哗啦"一声——却没有水花。湖里被你拉出一个人，是秀兰，浑身湿透，脸色苍白，头发贴在脸上。她跌坐在岸上，大口喘气，像是从很深的水里浮上来。

"你救了我？" 她问，声音沙哑，像嗓子里灌过水。

"我拉你出来。" 你说，把外衣脱下来披在她身上。

她低头看自己的手，手是透明的，像还在镜子里。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_pulled_xiulan_from_lake"},choices:[createChoice({"text":"用镜子照她","ending":"huimen_exp2_ending_mirror_lake","effects":{"yin":-5}})]}),
    huimen_exp2_mirror_lake_talk: createScene('huimen_exp2_mirror_lake_talk', {title:'湖语',text:`你蹲在湖边，对着湖面说："秀兰，你在这里吗？"

湖面泛起涟漪，一圈一圈，从中心扩散开来，像是一个人在回应你。涟漪里，浮现出秀兰的脸——不是井里那个湿漉漉的脸，是十六岁时的脸，年轻，干净，眼角有一颗泪痣。

她看着你，眼神里有一丝惊讶，又有一丝不相信。

"你看得见我？" 她问，声音从湖底传来，很远，却很清楚。

"看得见。" 你说，"你不是倒影，你就在这里。"

她的脸在涟漪里晃动，笑了一下，那笑容很短，像烛火被风吹了一下。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"继续说话","next":"huimen_exp2_mirror_lake","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
