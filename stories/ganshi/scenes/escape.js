/**
 * 《ganshi》场景模块：escape
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    escape_with_woman: createScene('escape_with_woman', {
        title: "带她逃走",
        text: "你脱下自己的外套给女子披上，扶着她往山外走。\n\n女子还很虚弱，走得很慢。你索性背起她。\n\n\"你叫什么名字？\" 你问。\n\n\"柳……柳红。\" 她说。\n\n\"柳红，你撑住。天亮前我们必须到镇上。\"\n\n你背着柳红，牵着另外两具尸体，在雨中艰难前行。\n\n天快亮时，你们终于到达了一个小镇。你把柳红送进医馆，又把两具尸体暂时停放在义庄。\n\n大夫说，柳红只是缺氧昏迷，休养几天就好。\n\n你松了口气。",
        effects: {
            sanity: 5,
            yin: -15,
        },
        ending: "savedBride",
    })
};
