import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';
/**
 * 《heniang》场景模块：find
 */

export const scenes = {
  find_shenpo: createScene('find_shenpo', {
    title: '神婆',
    title: '神婆',
    text: `村里的神婆住在河下游的一间老屋里。她今年八十多岁，眼瞎了一只，但据说能看见"那边"的东西。

你说明来意，神婆用剩下的那只眼睛盯着你看了很久。

她身后的土墙上贴着一张泛黄的海报，边角被烟熏得发黑。海报上画着一个穿红戏服的女子，标题用繁体字写着：

[faded]"春香班 牡丹亭 青石镇大戏台 民国二十三年"[/faded]

你不明白一个老神婆的屋子里，为什么会有近百年前的戏单子。

"你娘不是第一个。" 她说，"这条河里有七个河娘。每一个都是自愿下去的。"

"自愿？"

"河娘会在人最脆弱的时候出现。" 神婆说，"失恋的、丧子的、被背叛的、活不下去的。河娘会哄她们，说水底下暖和，没有痛苦。"

"那我妈……"

"你爸走后，你娘一个人过了十五年。" 神婆说，"她太寂寞了。"

她递给你一个布包："这里面是香灰和朱砂。如果遇到河娘唱歌，把香灰撒进水里。如果遇到河娘拉你，用朱砂点她眉心。"

"怎么救我妈？"

神婆沉默了很久："找到上一任河娘的尸骨，让她替你妈。"`,
    effects: {
      sanity: -5,
      yin: 5,
      addItem: '香灰和朱砂'
    },
    choices: [createChoice({
      text: '问上一任河娘是谁',
      next: 'ask_previous_heniang'
    }), createChoice({
      text: '回到河边找线索',
      next: 'walk_riverbank'
    })]
  }),
  find_first_heniang: createScene('find_first_heniang', {
    title: '找到初代河娘',
    text: `你沿着河往上走，走了三天三夜，来到一个古老的村落。

村口有一口古井，井边立着一块碑。碑上刻着：

[faded]"沈氏，因不守妇道，沉塘于此。后人立碑，以儆效尤。"[/faded]

你向村里老人打听，得知沈氏是三百年前的人。她被诬陷与人私通，绑上石头沉了塘。从那以后，这条河就开始闹河娘。

"要超度她，" 老人说，"得有人承认她没错。"`,
    effects: {
      sanity: -5,
      yin: 10,
      setFlag: 'foundSource'
    },
    choices: [createChoice({
      text: '在碑前为沈氏正名',
      next: 'clear_shen_name',
      effects: {
        setFlag: 'clearedName'
      }
    }), createChoice({
      text: '找到沈氏后人，让他们道歉',
      next: 'find_shen_descendants'
    })]
  }),
  find_shen_descendants: createScene('find_shen_descendants', {
    title: '找到沈氏后人',
    text: `你找到村里姓沈的人家，说明来意。

老人们商量了很久，最后推出一个代表。那代表跪在河边，替祖先磕头道歉。

"沈氏列祖列宗，后人无知，累及先人蒙冤。今特来赔罪，望先人安息。"

河水开始翻涌，但不是愤怒的翻涌，而是像人在哭泣。

沈氏的身影出现在水面，她的眼神不再怨毒，而是疲惫。

"算了。" 她说，"都三百年了，算了。"`,
    effects: {
      yin: -15
    },
    ending: 'descendantsApologize'
  }),
  find_traitor_descendants: createScene('find_traitor_descendants', {
    title: '找到负心人后人',
    text: `你打听到秀姑当年的未婚夫姓赵，后人在镇上开了一家理发店。

你找到那家理发店，说明来意。赵老板一开始不信，但当你说出秀姑的名字时，他的脸色变了。

"我爷爷……确实做过对不起人的事。" 他说。

你带赵老板来到河边。让他跪下，向秀姑道歉。

赵老板磕了三个头："赵家后人，替先祖向秀姑姑娘赔罪。"

水面分开，秀姑浮出来。她看着赵老板，看了很久。

"你长得真像他。" 她说。

然后她转向母亲："莲姐，我放下了。你上去吧。"`,
    effects: {
      sanity: -5,
      yin: -20
    },
    ending: 'apologyRedeems'
  })
};