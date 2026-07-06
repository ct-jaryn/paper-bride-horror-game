/**
 * 《回门》场景模块：exp2_nameless_stones
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_nameless_stones: createScene('huimen_exp2_nameless_stones', {title:'无名碑林',text:`你在祖坟地深处发现一片碑林。

碑林里有几十块无字碑，排列得整整齐齐，像一群沉默的人。你走近一块碑，发现碑下压着一张黄纸，纸上写着一个女子的生辰八字。

[red]这些是无名女子的墓。周家连名字都不愿刻在碑上。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"一张张看黄纸","next":"huimen_exp2_nameless_stones_read","effects":{"yin":2}}),createChoice({"text":"在每块碑上写名字","next":"huimen_exp2_nameless_stones_write","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_nameless_stones_read: createScene('huimen_exp2_nameless_stones_read', {title:'无名碑读纸',text:`你一张张翻看黄纸。

每一张纸上都有一个女子的生辰八字，却没有名字。你翻到最下面一张，发现是秀兰的。

"民国三年三月初七，子时。" 你念出声。

[whisper]"那是我出生的时辰。"[/whisper] 秀兰说，"周家连我的八字都记得，却不愿记我的名字。"`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp2_read_nameless_papers"},choices:[createChoice({"text":"把八字收好","next":"huimen_exp2_nameless_stones","effects":{"yin":1,"addItem":"秀兰的八字纸"}}),createChoice({"text":"烧掉它们","next":"huimen_exp2_nameless_stones","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_nameless_stones_write: createScene('huimen_exp2_nameless_stones_write', {title:'写名',text:`你咬破手指，在每块无字碑上写下名字。

你不知道她们真正的名字，就写"周氏女子之墓"、"无名姐妹之墓"、"被周家所害之墓"。

写到最后一笔，碑林开始发光。无数女子的身影从碑后浮现，朝你鞠躬。

"谢谢你。" 她们说，"终于有人知道我们在这里。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_wrote_nameless_stones"},choices:[createChoice({"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}})]})
};
