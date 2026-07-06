import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：return
 */

export const scenes = {
  return_to_stage: createScene('return_to_stage', {
    title: '重返戏台',
    text: `你回到老戏台时，天已经黑了。

戏台上点满了红色的灯笼，把整个台子照得如同白昼。锣鼓声、二胡声、唱腔声混杂在一起，热闹非凡。

但台下没有观众。

台上，一群没有五官的戏子正在演出《牡丹亭》。他们唱得很投入，身段优美，水袖翻飞。

你注意到，演杜丽娘的那个戏子，腰间系着一条红绳。

红绳的另一端，系在台柱上。那绳结打得古怪，不是戏班子里常见的系法，倒像是你曾在某座深山村落的冥婚喜房里见过的——把人和桩子绑成一对，象征"永不分离"。`,
    effects: {
      sanity: -20,
      yin: 20
    },
    choices: [createChoice({
      text: '入座看戏',
      next: 'watch_ghost_opera'
    }), createChoice({
      text: '绕到戏台侧面',
      next: 'side_of_stage'
    }), createChoice({
      text: '你摸到胸口的护身符，决定用它来抵抗鬼戏的魅惑',
      next: 'talisman_resist',
      condition: {
        hasItem: '护身符'
      },
      hidden: true,
      effects: {
        sanity: 5,
        yin: -10
      }
    })]
  }),
  // 符镇戏台（新增分支）,

  return_hairpin: createScene('return_hairpin', {
    title: '归还银钗',
    text: `你把银钗轻轻放回烧焦的痕迹上。

银钗接触木板的瞬间，发出一声轻微的嗡鸣。戏台上的锣鼓声停了。

你听见一个女子的声音在唱：

[whisper]"情不知所起，一往而深……"[/whisper]

唱腔渐渐远去，像是有人从戏台上走下来，又走了很远。

你再抬头时，戏台上的红灯笼全灭了。幕布垂着，仿佛什么都没发生过。

你平安走出了青石镇。`,
    effects: {
      sanity: 10,
      yin: -30
    },
    ending: 'peacefulDeparture'
  })
};