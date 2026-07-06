/**
 * 《hujia》场景模块：agree
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    agree_fox: createScene('agree_fox', {
        title: "答应狐女",
        text: "\"好，我跟你走。\" 你说。\n\n狐女的眼睛亮了起来，像是燃起了两团火。她牵起你的手，她的手很软，但指尖冰凉。\n\n\"你不会后悔的。\" 她说。\n\n你上了轿子。轿子轻轻一晃，开始往山里飘。\n\n透过轿帘，你看见村子越来越小，最后消失在夜色里。山上的树木变得古怪起来，有的树长着人的脸，有的石头像蹲着的野兽。\n\n不知过了多久，轿子停了。\n\n你下来，看见一座灯火通明的洞府。洞府里坐满了\"人\"，但仔细一看，有的长着尾巴，有的耳朵尖尖，有的眼睛在黑暗中发着绿光。\n\n[red]他们都是狐狸。[/red]\n\n\"拜堂！\" 一个苍老的声音喊道。",
        effects: {
            sanity: -20,
            yin: 25,
        },
        choices: [
            createChoice({
                text: "和狐女拜堂",
                next: "marry_fox",
            }),
            createChoice({
                text: "反悔，想逃跑",
                next: "try_escape_cave",
            }),
        ],
    })
};
