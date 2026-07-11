import { createDialogueChoice, createDialogueNode, createNPC } from '../../../js/engine/endingFactory.js';
/**
 * 《heniang》NPC：town—镇上闲人的集体记忆
 * 镇上的人对河娘的传说各有了解。有的人看到了事、有的人听到了事、有的人胡编。
 * 但一句话流传最广—— "七月半，河娘现；红衣裳，莫近前。”
 */

export const town = createNPC('town', {
  name: '镇民',
  title: '众口铄金',
  dialogue: {
    start: createDialogueNode('start', {
      text: `镇上的老人们都聚在桥头的杂货铺外头——卖瓜子的卖瓜子、下棋的下棋、剥花生的剥花生——逢到有人上前打听河的事——便齐齐抬起头来——眼睛亮了一亮——像一群看见活鱼的猫。

张婶最先开口——她是镇上消息最灵通的人——谁家吵了架、谁家儿媳妇跑了、谁家的井里出了怪事——都知道："哎哟——你问河的事啊——我跟你说啊——河娘的事我听过——我婆婆的婆婆说过——原先河不叫这名——叫清水河——后来沈家出事——才叫的——"

李爷在下棋——听她啰嗦烦了——子落棋盘——咕哝了一声："你这个不对——我小时候听我爷爷说——河老早以前就有河娘——沈氏那是后来的——原先是水里的水鬼——"

对面李家的嫂子插嘴了："你们俩说的都不对！我听庙里的师傅说——河里住着一尾红鲤鱼成了精——吃童男童女——"

三个人便吵起来了。最后杂货铺老板王麻子从里头来了一句："吵吵吵——都是放屁！我亲眼见过——有一个穿红衣裳的站在水边唱歌——唱的是什么'月亮出来亮汪汪'——我过去的时候——就没有人了——只在地上留下一滩水。"

他们同时转过来问你："你问这个干什么？"
`,
      choices: [createDialogueChoice({
        text: '我妈到底怎么下河的',
        next: 'mother_details'
      }), createDialogueChoice({
        text: '沈家——沈家后人还在吗？',
        next: 'shen_clan_gossip'
      }), createDialogueChoice({
        text: '你们见过我娘吗',
        next: 'ask_about_mother'
      }), createDialogueChoice({
        text: '七月半有什么规矩？',
        next: 'seventh_month_customs'
      }), createDialogueChoice({
        text: '我先走了',
        exit: true
      })]
    }),
    mother_details: createDialogueNode('mother_details', {
      text: `张婶往嘴里扔了一粒瓜子——用嘴壳"嗑"地一声剥开——"你娘的事——造了孽了——你娘下河下得离奇——"

李爷接过来——敲了敲桌面说："哪里离奇。你娘是半夜自己去投河的——三更天——你爹值夜班——他后来跟我们说——你娘那晚起来上了好几次厕所——最后一次出去就没回来——天亮了发现人不见了——门口放着一双布鞋——布鞋湿透了——" 

李家嫂子拍了一下大腿："你们不说我知道——我那天早起喂鸡——你娘从河堤上过来——浑身水里捞的一样——脸白得像纸——看见我——冲我笑——那笑——我这辈子忘不了——像个木偶在笑——我喂完鸡回头再看——人就不见了——地上只剩一滩水——"

张婶压低声音——凑近了说："后来你家请了道士——道士画了符——你娘宅子符贴满了三个月——三个月之后就太平了——大家以为没事了——没想到上周你娘又出现了——出现在河里——"
`,
      choices: [createDialogueChoice({
        text: '道士贴的符还有什么用吗？',
        effects: { setFlag: 'askedAboutCharm' },
        next: 'charm_effects'
      }), createDialogueChoice({
        text: '我娘以前说过河的事吗',
        next: 'mother_knew_river'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    shen_clan_gossip: createDialogueNode('shen_clan_gossip', {
      text: `"沈家——"张婶把壳往地上一吐——声音都尖了："沈家完了——原先沈家是大户——后来就一代一代败落——到这一代只剩一个——他叫沈老七——他住在东街第三间土坯房——门口有一棵歪脖子的柳树——"

李爷哼了一声："沈老七那个人——成天喝得醉醺醺——嘴里念叨——说他祖上欠了债——说沈家马上就要全死——他闹着要搬走——可又没钱搬——"

李家嫂子插进来——"沈老七的爷爷——是在河里淹死的——沈老七的爹——也是淹死的——一家子男人都死在河里——你说怪不怪——所以沈老七成天喝——喝醉了就跟人嚷嚷——说什么'沈家三代男丁祭河——下一个就是我了'——吓人得很——"

张婶凑到你耳边——悄悄说："沈老七手里有一样东西——是他爷爷传下来的——一个铜的什么符——他说那符保他不死——可我见他那个样子——怕是保不了多久——"
`,
      choices: [createDialogueChoice({
        text: '沈老七的符是什么样的？',
        effects: { setFlag: 'shenAmulet' },
        next: 'charm_effects'
      }), createDialogueChoice({
        text: '找沈老七说什么好',
        next: 'visit_shen_tips'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    ask_about_mother: createDialogueNode('ask_about_mother', {
      text: `杂货铺老板王麻子放下手中秤杆——想了想说："我见过你娘——就在杂货铺前的大青石上——她就坐在那里——从太阳落山坐到天黑——她不买东西——就坐着——有时嘴唇在动——像在跟谁说话——我没敢接腔——"

张婶又补了一句——"我看见过你娘一个人在院子里站——半夜三更——站在天井里——仰头看月亮——穿着睡衣就出来了——你说她是不是被什么附了身了——"

李爷挥了挥手——"我告诉你——她在河里拉人——我亲眼看见的——上礼拜我夜起出来小解——瞥见河面上有一团红色的东西在飘——仔细一看——是一个穿红衣裳的女人——站在水面上——在唱歌——我吓得赶紧关了窗户——第二天就听说下游又淹死了一个人——穿红衣裳的——"

李家嫂子吓得瓜子都掉了——"你你你看见河娘了——你看见河娘了——你要是被她看了——她会跟你回家——你回去赶紧用艾草洗脚——"
`,
      choices: [createDialogueChoice({
        text: '我娘最近一次出现在河里是什么样',
        next: 'mother_appearence'
      }), createDialogueChoice({
        text: '怎么防河娘',
        next: 'charm_effects'
      }), createDialogueChoice({
        text: '我走了',
        exit: true
      })]
    }),
    seventh_month_customs: createDialogueNode('seventh_month_customs', {
      text: `"七月半——"张婶先把门窗看了一圈——确认关好了——才开口——声音压得低低的——像怕被墙外的什么东西听见——"七月半——鬼门开——人让道——鬼走路——"

李爷清了清嗓子——"规矩是这样的——七月十三之前把祖宗牌位前的供品摆好——纸钱要亲手折——不能用机器折的——机器折的不认账——七月十四晚上不能出门——七月十五白天不能近水——七月十五半夜——千万千千万万不能去河边——"

李家嫂子紧跟着说："但你要是非去不可——有三样东西可以护身——"

她竖起三根手指——第一根："一把桃木剑——越小越好——能揣在怀里的——第二根——一个铜钱——清代的道光通宝或者乾隆通宝最好——不要通的——要生的——生坑的——第三根——一根红头绳——扎在左手腕上——红头绳是封住脉络——不让阴气顺着脉走到心里。"

张婶最后总结——"但最好还是——七月半那晚——关好门窗——早点睡觉——别出门——别管听见什么——"
`,
      choices: [createDialogueChoice({
       text: '七月十五那晚河底会开一道门？',
        next: 'gate_secret'
      }), createDialogueChoice({
        text: '谁有道光通宝？',
        next: 'shen_clan_gossip'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    gate_secret: createDialogueNode('gate_secret', {
      text: `四个人忽然都不出声了。

张婶的瓜子不动了。李爷的棋不下了。李家嫂子的手停在半空。王麻子放下秤杆——秤砣砸在地上——"咚"的一声——闷响。

是李爷先开的口——他抬起头——脸上的皱纹都挤到一块——"这件事——我是听我爷爷的爷爷说的——"

"七月半——半夜子时——河底最深处——会开一扇门。"

"门很重——上面写着两个字——我爷爷的爷爷说——他不认得那两个字——但他一辈子都记得那个笔画——"

"什么笔画？"你问。

李爷伸出手指——在空中写——"那个字——上面一横——中间一竖——竖上面连一横——然后竖的两边各有一道弯——"

他忽然手一缩——"我不写了——写出来不吉利——你要是真想知道——就七月半那天夜里——自己到河边去——那开了——门自己开——你看见了——也别进去——进去就回不来了——"
`,
      choices: [createDialogueChoice({
        text: '那两个字大概是什么？',
        effects: { setFlag: 'townGateClue', sanity: -5 },
        next: 'gate_shape'
      }), createDialogueChoice({
        text: '谢谢——我记住了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    gate_shape: createDialogueNode('gate_shape', {
      text: `李爷歪着头想了一会儿。

"我爷爷说——那个字的上半部分——像一个'北'字——下面像一个没有底的水字——但又不完全像——两笔连在一起——左边一笔收的时候带了一勾——右边一笔收的时候点了一点——"

他忽然抱住肩——身子一哆嗦："我不能再说了——说出来那扇门就认了我——你明天再来找我——我就已经不见了——"

张婶赶紧打圆场——一边推你出门一边说："好了好了——你们李家的事——跟你娘的事你问就完了——别冲着字去——那是门——不是路——"

门在你身后关上。你听见里面的声音一下又闹起来了——像什么都没发生过。
`,
      choices: [createDialogueChoice({
        text: '我回去想想那个字',
        effects: { setFlag: 'riverGateClue' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    charm_effects: createDialogueNode('charm_effects', {
      text: `杂货铺老板王麻子想来想去——从柜台底下翻出一个纸盒——打开看——里面是一张发黄的纸片——"这张符——是我爹传下来的——说是从山上清虚观求来的——里面包的是雄黄和朱砂——带身上不干净的东西近不了身——"

他把符推到柜台上——"你娘的事——我怕也是那张符挡了三个月——把挡的事闹大了——你娘身子越弱符就越挡不住——你要是打算带着这张符去河边——找我买一副艾草香囊——香囊里装的是白术、藿香、苍术、橘皮——带身上河泥味进不了——"

李家嫂子接话："我们镇上以前有个人——名字我不说了——他身上带了七张符——还是被河娘拉下去了——为什么？因为符挡得住鬼——挡不住自己——他自己想下去——符管不了活人的心。"
`,
      choices: [createDialogueChoice({
        text: '买符',
         effects: { npcAffinity: 5, addItem: '杂货铺的符' },
        next: 'start'
      }), createDialogueChoice({
        text: '看看香囊',
        effects: { addItem: '艾草香囊' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    visit_shen_tips: createDialogueNode('visit_shen_tips', {
      text: `张婶把壳吐了一地——把声音压得低低的——说——"沈老七那个人——千不该万不该——别跟他提河的事——一提河的事他就翻桌子——就拿扫帚赶人——前一回有个搞研究的大学生来找他——问他祖上的事——被他拿扫帚打了出来——"

李爷补了一句——"但沈老七有一样东西好——他手里那个铜符——是爷爷三代传下来的——据说那个铜符上刻了一个字——你让他去河边——他不敢——他说符一离身他就会死——可你看他那个借酒浇愁的样子——怕死了也走得不干脆——"

李家嫂子拍了拍你的肩——"你要是找他——这么办——你去陪他喝酒——喝了三碗以上他就什么都哭了——等他哭了你就问他爷爷的事——他小时候听他爷爷说的——比他爹说的真——他爷爷是不撒谎的人。"
`,
      choices: [createDialogueChoice({
        text: '买酒去——我知道了',
        effects: { setFlag: 'visit_tips' },
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    }),
    mother_knew_river: createDialogueNode('mother_knew_river', {
      text: `张婶停了下来——还是说了。

"你娘——在出事前一年就说过——说河里的女人们在唱歌——说唱歌的人想上来——问她她不肯细说——"

王麻子接了一句——"你娘死之前一个月——还找我买艾草——买了很多——买了三斤——说身上发冷用艾草泡脚——三斤——那能泡到你儿子都能泡了——谁泡脚一次泡三斤——"

李家嫂子眼睛亮了——一拍大腿——"我就说——我就说——你娘去河边不是临时起意——她是有备而去——为什么不穿别的好衣裳——非要穿那件压箱底的红衣裳——那件红衣裳是她嫁过来那年穿的——"
`,
      choices: [createDialogueChoice({
        text: '红衣裳还在吗',
       effects: { setFlag: 'redClothesGone' },
        next: 'start'
      }), createDialogueChoice({
        text: '她有目的地下的河',
        next: 'start'
      })]
    }),
    mother_appearence: createDialogueNode('mother_appearence', {
      text: `他们又停下来了——这一回所有人都低下头——

还是李爷先说的——比上回更轻——"前天——傍晚——太阳刚落山——我在河堤上走——远远看见一个人穿着红衣裳站在水里——水刚过膝盖——头发散着——一直唱那首歌——"

"我走近了——看见那人是你娘。我看见她的时候——她没看见我——她眼珠子往上翻——翻到只剩眼白。我吓得腿软——就跑回去了——第二天就听说下游又淹死了人——"
`,
      choices: [createDialogueChoice({
        text: '我去找她',
        effects: { setFlag: 'sawMotherWhite' },
        next: 'start'
      }), createDialogueChoice({
        text: '放下吧——他已经不是我妈了',
        next: 'start'
      }), createDialogueChoice({
        text: '离开',
        exit: true
      })]
    })
  }
});
