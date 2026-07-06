/**
 * 《回门》场景模块：exp_moon_entrance
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_moonlit_path: createScene('huimen_exp_moonlit_path', {title:"月光路",text:"你顺着月光照出的小路走。\n\n小路很窄，两旁是及腰的野草。野草里藏着许多东西：破碎的瓷碗、生锈的铜镜、褪色的红绸带。\n\n月光把路面照得像一条银白色的河。你踩上去，脚下会泛起一圈圈涟漪，但路面是干的。\n\n[whisper]\"这条路是秀兰的记忆。\"[/whisper]\n\n你看见路边有一座小石桥，桥下有流水声。可桥下没有水，只有一层薄薄的纸灰。\n\n纸灰上印着脚印，很小，是女人的脚印。",effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"跟着脚印走","next":"huimen_exp_moonlit_path_end","effects":{"yin":2}}),createChoice({"text":"过桥看看","next":"huimen_exp_moonlit_bridge","effects":{"yin":2}}),createChoice({"text":"路边有块可以休息的大石头","next":"huimen_exp2_moonlit_path_rest","effects":{"yin":1}}),createChoice({"text":"路边有座孤坟","next":"huimen_exp_moonlit_grave","effects":{"yin":1}}),createChoice({"text":"继续走到河边","next":"huimen_exp_moonlit_river","condition":{"flag":"huimen_exp_named_xiulan_on_bridge"},"effects":{"yin":2}}),createChoice({"text":"小路在前方分成两条","next":"huimen_exp_moonlit_path_fork","condition":{"flag":"huimen_exp_truly_saw_xiulan"},"effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_moonlit_bridge: createScene('huimen_exp_moonlit_bridge', {title:"石桥",text:"你走上石桥。\n\n桥面很滑，像涂了一层油脂。你扶着桥栏，发现桥栏上刻满了名字，都是女子的名字，密密麻麻，一直刻到桥的另一端。\n\n桥下有东西在动。\n\n你探头一看，桥下不是纸灰，而是无数张仰着的脸。它们没有身体，只有脸，像莲花一样浮在黑暗里。\n\n\"过桥的人，要留下名字。\" 它们一起说。\n\n你感到桥栏上有力量在吸你的手。如果你再不松手，你的名字也会被刻上去。",effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"咬破手指，在桥栏上写秀兰的名字","next":"huimen_exp_bridge_name","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"奋力挣脱，跑过桥去","next":"huimen_exp_moonlit_path_end","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"退回桥头","next":"huimen_exp_moonlit_path","effects":{"yin":1}})]})
};
