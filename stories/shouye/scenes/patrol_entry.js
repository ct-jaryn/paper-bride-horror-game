/**
 * 《守夜》场景模块：patrol_entry
 * 巡厅入口
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    patrol_corridor: createScene('patrol_corridor', {
        title: "巡厅",
        text: "你决定先把整个殡仪馆走一遍。守夜人的规矩里有一条：子时之后，至少要巡一次各厅，确认没有异样。\n\n走廊的声控灯坏了两盏，只剩尽头那盏还在惨白地亮着。你的脚步声在瓷砖地上回荡，每一步都像是踩在什么东西的脊背上。\n\n一号厅的门虚掩着，里面是老张头——三天前心梗走的，七十三岁，喜丧。三号厅的门紧闭，里面是那个骑摩托撞上桥墩的少年，才十九岁。五号厅空着，可你路过时，分明听见里面有翻动纸张的声音。\n\n再往前，是七号厅。门缝下渗着一缕若有若无的桂花香。\n\n走廊尽头，通往地下室的铁门上，挂着一把落满灰的锁。你从没见人下去过。\n\n[faded]林叔说过，那下面，是老殡仪馆留下的东西。[/faded]",
        effects: {
            sanity: -5,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "进一号厅看看老张头",
                next: "hall_one_inspection",
            }),
            createChoice({
                text: "进三号厅看那个少年",
                next: "hall_three_inspection",
            }),
            createChoice({
                text: "推开五号厅的门",
                next: "hall_five_inspection",
            }),
            createChoice({
                text: "直接回七号厅",
                next: "enter_with_flashlight",
            }),
        ],
    })
};
