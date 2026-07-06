import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《tishen》场景模块：sleep
 */

export const scenes = {
  sleep_first_night: createScene('sleep_first_night', {
    title: '第一夜',
    text: `你回到自己房间，锁上门，躺在床上。门锁是你走之前就有的老式铜锁，钥匙你一直带着，五年了，铜都绿了。

床还是你小时候睡的那张，木板的，硬，硌得慌。床单上有一股霉味，混着樟脑味，是母亲走之前晒过又收进柜子里的旧味道。你翻来覆去睡不着，窗外槐树的影子投在墙上，一颤一颤，像有人在窗外晃。

半夜，你听见门外有脚步声。脚步声很轻，轻得不像是脚——像是有什么东西在地上拖。是纸在地上摩擦的声音，沙沙的，一下一下，由远及近。

[whisper]沙沙。沙沙。沙沙。[/whisper]

那声音停在你的门口。门把手缓缓转动，咔哒，咔哒，铜锁撑住了，没开。可那转动一下又一下，耐心得吓人，像是它有的是时间，可以转到天亮。

"开门。" 一个声音说，"我想看看你。"

那是你的声音。是你自己的声音，从门板另一侧传过来，连你说话时喉结微微震动的那个习惯都学去了。你摸了摸自己的喉咙——它没动，可那声音明明是从你嘴里出来的腔调。`,
    effects: {
      sanity: -25,
      yin: 15
    },
    choices: [createChoice({
      text: '保持沉默',
      next: 'stay_silent'
    }), createChoice({
      text: '问它想干什么',
      next: 'ask_what_wants'
    }), createChoice({
      text: '用椅子抵住门',
      next: 'barricade_door',
      effects: {
        sanity: -5
      }
    }), createChoice({
      text: '你保持清醒，听出脚步声不是从门外传来的',
      next: 'stay_calm_night',
      condition: {
        sanityAbove: 80
      },
      hidden: true,
      effects: {
        sanity: -5
      }
    })]
  })

  // 清醒之夜（新增分支）
};