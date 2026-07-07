/**
 * 《回门》场景模块：exp_street_rain
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_street_rain: createScene('huimen_exp_street_rain', {title:'夜雨',text:`雨又下了起来。

不是普通的雨。雨点落在皮肤上，会留下一道浅浅的红印，微微发烫。你抬头看天，天上没有云，只有一轮惨白的月亮，悬在半空。

雨是从月亮里落下来的，像月亮在哭。

街道两旁的纸人开始融化，脸上的颜料顺着雨水流下，红一道黑一道，像五颜六色的泪。它们伸出手想抓你，但手指一碰到雨，就软成了纸浆，"啪嗒"一声掉在地上。

[whisper]"躲一躲吧。"[/whisper]一个声音说。

你看见路边有一间敞开的门，门里点着一盏油灯，灯火昏黄。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"进门躲雨","next":"huimen_exp_street_rain_shelter","effects":{"yin":2}}),createChoice({"text":"在雨里继续走","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":3}})]}),
    huimen_exp_street_rain_shelter: createScene('huimen_exp_street_rain_shelter', {title:'避雨',text:`你冲进那间屋子，甩了甩身上的雨水。

屋里很暖和，暖得有些不正常。正中摆着一张八仙桌，桌上有一碗热气腾腾的汤圆。桌子旁坐着一个老太太，正低着头绣花，针线翻飞。

"吃吧。"老太太头也不抬，"吃完雨就停了。"

你看着那碗汤圆——汤圆是红色的，浮在黑色的汤里，像一锅熬化的血。

"我不饿。"你说。

老太太终于抬起头。她的眼睛是两个黑洞，嘴角却带着慈祥的笑："不饿？那你的心呢？心不饿，怎么活？"

[red]你意识到，她不是活人，而是村子用来"留人"的饵。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"吃一口汤圆","next":"huimen_exp_street_rain_eat","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"转身离开","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}})]}),
    huimen_exp_street_rain_eat: createScene('huimen_exp_street_rain_eat', {title:'红汤圆',text:`你舀起一个汤圆，迟疑了一下，还是放进嘴里。

汤圆不是糯米做的，而是纸浆。它在你嘴里化开，变成一团湿冷的纸糊，堵住你的喉咙，又腥又黏。

你想吐，却吐不出来。老太太在旁边鼓掌，发出"咯咯"的笑："好孩子，吃了周家的饭，就是周家的人了。"

你感到自己的胃在变重，像塞了一团纸，沉甸甸地往下坠。你跌跌撞撞地冲出屋子，雨已经停了，月光照在你身上。

[red]你低头看自己的手——皮肤正在泛白，像纸一样。[/red]`,effects:{"sanity":-15,"yin":10},choices:[createChoice({"text":"拼命催吐","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":-3}}),createChoice({"text":"接受变化","ending":"huimen_exp_paper_doll","effects":{"yin":5}})]})
};
