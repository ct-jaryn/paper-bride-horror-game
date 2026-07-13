/**
 * 《回门》场景模块：exp2_nameless_stones
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_nameless_stones: createScene('huimen_exp2_nameless_stones', {title:'无名碑林',text:`你在祖坟地深处，拨开一丛半人高的野草，发现一片碑林。

碑林里有几十块无字碑，青石的，矮矮的，排列得整整齐齐，像一群沉默的人。每一块碑都磨得光滑，光滑得发亮，像是有人常来抚摸。可碑上没有字，连一个名字都没有。

你走近一块碑，蹲下身，发现碑下压着一张黄纸。纸是新的，不像是三十年的旧物，像是有人定期来换。纸上写着一行字，是一个女子的生辰八字，却没有名字。

[red]这些是无名女子的墓。周家连名字都不愿刻在碑上，只把她们的八字压在碑下，当作压胜用的符。[/red]

你数了数碑，有三十几块，和祖祠女墙上的名字对得上。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"一张张看黄纸","next":"huimen_exp2_nameless_stones_read","effects":{"yin":2}}),createChoice({"text":"在每块碑上写名字","next":"huimen_exp2_nameless_stones_write","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_nameless_stones_read: createScene('huimen_exp2_nameless_stones_read', {title:'无名碑读纸',text:`你一张张翻看黄纸。

每一张纸都一样，都有一个女子的生辰八字，却都没有名字。八字的格式工整，是同一人手笔——周家的账房。

你翻到最下面一张，那张纸比别的都新。纸上是秀兰的八字：

"民国三年三月初七，子时。"

你念出声。念完的瞬间，碑林里起了一阵风，风是从每一块碑下吹上来的，凉的，带着一股铁锈味。

[whisper]"那是我出生的时辰。"[/whisper] 秀兰说，声音从碑林深处传来，"周家连我的八字都记得，记了三十年，用来压我。可他们记不住我的名字。他们叫我'不祥女'，叫了三十年。"`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp2_read_nameless_papers"},choices:[createChoice({"text":"把八字收好","next":"huimen_exp2_nameless_stones","effects":{"yin":1,"addItem":"秀兰的八字纸"}}),createChoice({"text":"烧掉它们","next":"huimen_exp2_nameless_stones","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_nameless_stones_write: createScene('huimen_exp2_nameless_stones_write', {title:'写名',text:`你咬破手指，在每块无字碑上写下名字。

你不知道她们真正的名字，就写"周氏女子之墓"、"无名姐妹之墓"、"被周家所害之墓"。血字写在青石上，渗进石头的缝里，像被吸进去了一样。

写到最后一笔，碑林开始发光。光是淡淡的，从每一块碑上溢出来，像萤火。无数女子的身影从碑后浮现，一个，两个，十个，三十个……她们朝你鞠躬，那动作整齐得吓人，像排练了三十年。

"谢谢你。" 她们说，声音叠在一起，像风穿过竹林，"终于有人知道我们在这里。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_wrote_nameless_stones"},choices:[createChoice({"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}})]})
};
