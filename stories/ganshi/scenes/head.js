/**
 * 《ganshi》场景模块：head
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    head_to_qingshi: createScene('head_to_qingshi', {
        title: "青石镇",
        text: "你带着三具尸体，向青石镇走去。\n\n天亮了，尸体不能再走。你找了一间义庄，把尸体停好，自己休息。\n\n傍晚时分，你来到青石镇。\n\n镇上很热闹，像是有什么喜事。你拉住一个路人问：\"今天是什么日子？\"\n\n路人笑着说：\"周老爷家办喜事，给儿子娶亲呢！\"\n\n你看着义庄里女尸的红嫁衣，心里一沉。\n\n[red]周家又在办冥婚了。[/red]\n\n（未完待续，可衔接《回门》剧情）",
        effects: {
            yin: 10,
            setFlag: "ganshi_to_qingshi",
        },
        ending: "arrivedQingshi",
    })
};
