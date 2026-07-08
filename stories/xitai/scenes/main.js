import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《xitai》场景模块：main
 */

export const scenes = {
  backstage: createScene('backstage', {
    title: '后台',
    text: `你掀开后台的布帘。布帘是厚重的黑绒，本该早就烂了，摸上去却还是潮的，像是昨夜刚被人用井水洗过。

帘子后面比外面暗得多。只有化妆台上点着一盏油灯，灯芯细得像一根头发丝，火苗蓝幽幽的，照不亮三步以外的地方。后台很小，挤着几面破旧的镜子和一张化妆台，镜子全是裂的，裂痕从中间向四散开，像蜘蛛网。

你走近化妆台。台上摆着一个打开的脸谱盒，盒里分着小格，盛着各色油彩——红、黑、白、金，每一种都还湿润，用指尖一碰就能拉出丝。旁边搁着一把断了齿的木梳，梳齿之间还缠着几根乌黑的长发。你把梳子拿起来，头发便一根一根从齿间松开，垂落到地上。

你顺手拉开抽屉。抽屉里散落着几张戏票和一本戏折子。戏票已经泛黄，上面印着"民国二十三年七月初七 青石戏台 春香班专场"，票价是三个铜板。戏折子翻开来，里面用工整的小楷抄着几句词：

[faded]"来呀，水凉快呀……
水底无灯，水底无岸，
水底无人等水凉快……"[/faded]

你不认得这曲调，纸条上写的不像是《牡丹亭》里的词。纸条边缘沾着水渍，渍痕已经发黄发硬，像是被人从河边带回来，揣在怀里揣了二十年。

墙上贴着一张戏单，纸已经脆得快碎了：

[faded]"今日剧目：《牡丹亭》
杜丽娘 — 云袖
柳梦梅 — 周生
花神 — 众伶
司鼓 — 老赵"[/faded]

你注意到，"柳梦梅"的名字被人用指甲狠狠划掉了，划了不止一道，一直划到把纸划穿。旁边用血写了一个字——"死"。

那字写得很急，笔画歪斜，最后一个钩拖得很长，像是写字的人手在抖。

镜子突然亮了一下。不是油灯亮了，是镜子自己亮了——镜面上浮起一层淡淡的水雾，雾散开，你看见镜子里，一个穿小生戏服的男人站在你身后，正把脸贴在你肩上。他的下巴搁在你的颈窝里，冰得像一块铁。

[red]他没有脸。五官的位置只有一片空白，像是化妆时，有人忘了给他画上。[/red]`,
    effects: {
      sanity: -25,
      yin: 20,
      visual: 'flicker'
    },
    choices: [createChoice({
      text: '问他是谁',
      next: 'ask_ghost_actor'
    }), createChoice({
      text: '用相机拍镜子',
      next: 'mirror_photo'
    }), createChoice({
      text: '头也不回跑出后台',
      next: 'run_from_backstage'
    }), createChoice({
      text: '取出烧焦的胶卷，在镜前烧掉它，看当年真正的火场',
      next: 'xitai_item_use_burnt_film',
      condition: {
        hasItem: '烧焦的胶卷'
      },
      hidden: true,
      effects: {
        sanity: -5,
        yin: 10
      }
    }), createChoice({
      text: '把云袖的戏服挂在化妆台前，替她扮上那场没唱完的妆',
      next: 'xitai_item_use_yunxiu_costume',
      condition: {
        hasItem: '云袖的戏服'
      },
      hidden: true,
      effects: {
        sanity: 5,
        yin: -10
      }
    })]
  })

  // 镜中留影（新增场景，补全引用）
};