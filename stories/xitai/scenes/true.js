import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：true
 */

export const scenes = {
  true_backstage: createScene('true_backstage', {
    title: '真正的后台',
    text: `你放下相机，揉了揉眼睛。

戏台并没有空。幕布后面，十几个穿戏服的人正在忙碌。有人对着镜子画脸，有人整理水袖，有人调弦试嗓。

他们不是幻象。他们是真实的——至少对你来说，此刻是真实的。

你看见一个穿红戏服的女子坐在最里面的位置，由两个丫鬟模样的人伺候着上妆。她的脸还没画完，但眉眼已经能看出惊人的美。

"云袖姑娘，" 一个老妇人模样的人说，"今天唱《惊梦》，您可别再像上次那样，唱到一半就哭了。"

云袖笑了笑："最后一次了。唱完这出，我就跟他走。"

她说的"他"，是谁？

你正想走近，一阵冷风吹过，后台的景象像水波一样晃了晃，消失了。戏台又恢复了破败荒凉的样子。

但你心里清楚，你刚才看见的，是二十年前火灾发生前的最后一刻。`,
    effects: {
      sanity: -10,
      yin: 15,
      setFlag: 'sawTrueBackstage'
    },
    choices: [createChoice({
      text: '去后台查看',
      next: 'backstage'
    }), createChoice({
      text: '找镇上老人打听',
      next: 'ask_villagers'
    })]
  })
};