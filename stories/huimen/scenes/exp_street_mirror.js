/**
 * 《回门》场景模块：exp_street_mirror
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_street_mirror: createScene('huimen_exp_street_mirror', {title:'雾镜',text:`雾中，不知何时多了一面镜子。

镜子很大，立在街道中央，像一道门。镜框是朱红色的，刻着龙凤呈祥，金漆斑驳。你走近，发现镜子里映出的不是你——而是秀兰。

她坐在喜房里，对着铜镜梳头。她梳得很慢，木梳一下一下，每一梳都带下一缕头发，落在地上。

"你看得见我？"她问，没有回头。

你点点头，虽然知道她看不见。

"那你告诉我，"她说，手上的动作停了，"我好看吗？"

镜子里的她没有盖头，脸色苍白，像一张白纸，但眉眼清秀。你忽然发现，如果她活着，应该是个很好看的姑娘。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"说好看","next":"huimen_exp_street_mirror_praise","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"沉默","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_mirror_praise: createScene('huimen_exp_street_mirror_praise', {title:'镜笑',text:`你说："好看。"

秀兰愣了一下，然后笑了。她笑得很浅，像是一朵刚开的花，怯生生的。

"三十年了，"她说，"第一次有人夸我好看。"

镜子里的画面变了。秀兰站了起来，理了理衣裳，朝你福了一福，然后转身走向一扇门。门后是一片白光，温暖而柔和。

"我会记得你的。"她说，"你也别忘了我。"

镜子"咔"地一声裂了，裂痕正好把你的脸和秀兰的脸分开。`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp_praised_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
