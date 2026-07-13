/**
 * 《回门》场景模块：exp2_abandoned_hall
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_abandoned_hall: createScene('huimen_exp2_abandoned_hall', {title:'废弃祠堂',text:`你循着一股若有若无的腐木气息，来到一座废弃的祠堂前。

祠堂的屋顶塌了一半，瓦片像脱落的指甲，一片一片悬在断梁上。门上的朱漆剥落殆尽，露出底下灰白的木纹，像一张被剥了皮的脸。门环上缠着蛛网，蛛网上挂着几只干瘪的飞蛾，风一吹，窸窣作响。

你推开门，门轴发出一声长长的哀鸣，像老妇人在哭。祠堂里没有牌位，供桌倾倒，香炉碎在地上，香灰洒了一地。墙角的纸幡已经褪成灰白色，上面用墨画着眼睛，一只一只，全都盯着你。

正墙上画着许多女子的画像。每一个女子都穿着大红嫁衣，针脚细密，金线绣成的喜鹊却都没有头。画像上的脸是空白的，没有五官，只有一片惨白。

画像下方用娟秀的字迹写着她们的名字：秀兰、柳红、阿绣、云袖……

你念出第一个名字时，墙角的纸幡无风自动。[whisper]"还有我……还有我……"[/whisper] 许多细碎的声音从画像里渗出来，像水从墙缝里渗出来一样。

空气里弥漫着一股陈年的桂花香，甜得发腻，甜得让人想吐。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"给画像补上五官","next":"huimen_exp2_abandoned_hall_draw","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"在画像前烧香","next":"huimen_exp2_abandoned_hall_incense","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_abandoned_hall_draw: createScene('huimen_exp2_abandoned_hall_draw', {title:'补脸',text:`你蹲下身，在供桌下的灰里捡起一截木炭。木炭很轻，轻得像骨头。

你走到墙前，给每一幅画像补上五官。你画得很慢，很认真——秀兰的眼睛、柳红的眉、阿绣的嘴、云袖的鼻……你一边画，一边念她们的名字。每念一个，画像的衣角就轻轻动一下，像是在向你行礼。

木炭在墙上摩擦，发出细碎的沙沙声。你画到第三十一个名字时，手已经开始发抖。那些画像似乎在催你——快一点，再快一点，她们已经等了太久。

画完最后一笔，墙上的画像似乎都活了。她们朝你微笑，嘴角缓缓上扬，露出画里没有的牙齿。然后画像上的颜色一点点褪去，像被水洗过一样，露出底下洁白的墙。

墙上只剩下一行新字，像是从墙里渗出来的血：

[faded]"记住我们。"[/faded]

你的手指还沾着木炭灰，灰是温热的，像人的体温。`,effects:{"sanity":-5,"yin":-10,"setFlag":"huimen_exp2_drew_faces_for_women"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_abandoned_hall_incense: createScene('huimen_exp2_abandoned_hall_incense', {title:'上香',text:`你在地上找到几支没烧完的香，香身已经受潮，颜色发黑。你用打火机点了几次才点着。

烟雾升起，盘旋着，不肯散去，在空中凝成许多女子的身影。她们的身形模糊，只有嫁衣的轮廓清晰可辨。她们朝你鞠躬，一个接一个，像是在谢恩。

[whisper]"谢谢你。"[/whisper] 秀兰的声音从烟雾深处传来，比其他声音都要轻，"她们终于被人看见了。三十年了，没有人进过这间祠堂，没有人记得她们曾经活过。"

烟雾渐渐散去，墙上的画像也淡了许多。你听见远处传来一阵低低的哭声，不是悲伤，是释然。

香烧到一半，火光跳了一下，像有人在替你拨香灰。你低头看，地上多了一行用香灰写的小字："周家欠我们一个名字。"`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp2_burned_incense_for_women"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
