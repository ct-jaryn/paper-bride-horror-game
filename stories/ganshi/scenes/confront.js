/**
 * 《ganshi》场景模块：confront
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    confront_client: createScene('confront_client', {
        title: "对峙雇主",
        text: "你直接去找委托人。\n\n委托人是个富态的中年人，看见你带着三具尸体回来，脸色变了：\"你怎么回来了？\"\n\n\"这三具尸体，都是被人害死的。\" 你说，\"大人，您知道真相吧？\"\n\n委托人后退一步：\"你胡说什么？\"\n\n\"账房先生发现了您和县太爷贪赈灾银的事。\" 你说，\"青年是您赌坊的债主。至于这个女子……是您儿子配冥婚的新娘，对吗？\"\n\n委托人脸色惨白。他忽然从袖中掏出一把匕首，刺向你。\n\n但你早有防备，侧身躲过。\n\n三具尸体忽然动了。它们扑向委托人，把他按倒在地。",
        effects: {
            sanity: -15,
            yin: 20,
        },
        ending: "corpsesRevenge",
    })
};
