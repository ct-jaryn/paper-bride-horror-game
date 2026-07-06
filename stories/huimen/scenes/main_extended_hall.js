/**
 * 《回门》场景模块：main_extended_hall
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_observe_hall: createScene('huimen_observe_hall', {title:"堂前止步",text:"你站在老宅堂屋门口，没有立刻进去。\n\n堂屋里的光线很奇怪。两根红蜡烛的火焰不是黄色的，而是泛着青白色，像两团鬼火。棺材上的倒挂囍字被烛火一照，影子投在墙上，像是一个女人在低头哭泣。\n\n你注意到，棺材前面的供桌上摆着三样东西：一杯酒、一碗饭、一双红筷子。酒杯里的酒是浑的，碗里的饭是生的，红筷子却整整齐齐地插在饭上——那是给死人上供的摆法。\n\n[red]这不是给祖母的供品。这是给你的。[/red]\n\n二叔的声音从堂屋深处传来：\"进来吧，吉时快到了。\"",effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"迈进堂屋","next":"huimen_enter_coffin_room","effects":{"yin":1}}),createChoice({"text":"先绕到棺材侧面看一眼","next":"huimen_coffin_inspection","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"问二叔供桌上的东西是什么意思","next":"huimen_enter_coffin_room","effects":{"sanity":-3,"yin":1}})]}),
    huimen_enter_coffin_room: createScene('huimen_enter_coffin_room', {title:"踏入灵堂",text:"你迈进堂屋，脚下的青砖发出空洞的回响。\n\n二叔、三姑、四婶跪成一排，他们的手腕上都系着红绳，红绳的另一端消失在棺材底下。你每走一步，那些红绳就轻轻颤动一下，像是在呼吸。\n\n棺材上贴着一个倒挂的\"囍\"字，字是用朱砂写的，在烛光下像是一滩血。你注意到棺材盖没有钉死，留了一条缝。\n\n\"跪下吧。\"二叔说，\"给你祖母磕个头。\"\n\n可你知道，棺材里躺着的，可能不是祖母。",effects:{"sanity":-12,"yin":4},choices:[createChoice({"text":"问为什么棺材上贴囍字","next":"ask_coffin","effects":{"yin":1}}),createChoice({"text":"走近棺材看一眼","next":"huimen_coffin_inspection","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"观察亲戚们的手腕红绳","next":"observe_red_strings","effects":{"sanity":-8,"yin":2}})]}),
    huimen_coffin_inspection: createScene('huimen_coffin_inspection', {title:"棺侧",text:"你绕到棺材侧面，发现棺盖上刻着一行小字：\n\n[faded]\"周氏秀兰，未过门而亡。今以周家嫡孙配之，以全其名。\"[/faded]\n\n你的血一下子凉了。\n\n[red]祖母的棺材里，要配的是秀兰。[/red]\n\n棺材缝里渗出一点点暗红色的液体，你用手指抹了一点，凑到鼻尖闻了闻——不是血，是朱砂 mixed with 某种香料。这是冥婚的封棺仪式，意味着棺材里已经\"住\"了两个人。\n\n二叔的手搭在你肩上：\"别看了。看了，就更要成亲了。\"",effects:{"sanity":-15,"yin":5,"setFlag":"saw_coffin_inscription"},choices:[createChoice({"text":"推开棺盖看个究竟","next":"huimen_enter_coffin_room","effects":{"sanity":-10,"yin":3}}),createChoice({"text":"后退，先问清楚","next":"huimen_enter_coffin_room","effects":{"yin":1}}),createChoice({"text":"质问二叔这是什么意思","next":"ask_coffin","effects":{"sanity":-5,"yin":1}})]})
};
