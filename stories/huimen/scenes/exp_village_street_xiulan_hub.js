/**
 * 《回门》场景模块：exp_village_street_xiulan_hub
 * 与秀兰的互动、记忆入口与关键道具使用
 */

export const scenes = {
    huimen_exp_village_street_xiulan_hub: {
        title: '寻兰',
        text: `你知道秀兰就在这条村街的某个角落——井底、桑树下、月光小路上，或者某一片飘落的纸钱里。

你轻声唤她的名字。风停了片刻，像是有人在听。

[red]她不会让你轻易找到。但如果你真心想见她，她总会出现。[/red]`,
        effects: {"sanity":-2,"yin":1},
        choices: [
            {text:"雾里有声音在叫你的名字",next:"huimen_exp_street_calling",effects:{yin:1},hidden:true},
            {text:"再去井边看看秀兰",next:"huimen_exp_well_night_repeat",effects:{yin:1},condition:{flag:"huimen_exp_sat_with_xiulan"}},
            {text:"去桑树下陪秀兰哭",next:"huimen_exp_mulberry_weep",effects:{yin:1},condition:{flag:"huimen_exp_released_mulberry_soul"}},
            {text:"让秀兰唱一段戏",next:"huimen_exp_xiulan_sing",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"看秀兰跳舞",next:"huimen_exp_xiulan_dance",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"逗秀兰笑",next:"huimen_exp_xiulan_laugh",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"问秀兰恨不恨",next:"huimen_exp_xiulan_angry",effects:{yin:1},condition:{flag:"xiulanMercy"}},
            {text:"安慰害怕的秀兰",next:"huimen_exp_xiulan_scared",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"和秀兰聊未来",next:"huimen_exp_xiulan_hope",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"给秀兰做桂花糕",next:"huimen_exp_xiulan_cook",effects:{yin:-1},condition:{flag:"huimen_exp_knows_xiulan_wish"}},
            {text:"给秀兰做嫁衣",next:"huimen_exp_xiulan_sew",effects:{yin:-1},condition:{flag:"huimen_exp_knows_xiulan_wish"}},
            {text:"带秀兰去学堂遗址",next:"huimen_exp_xiulan_school",effects:{yin:-1},condition:{flag:"huimen_exp_xiulan_danced"}},
            {text:"用铜钱换秀兰自由",next:"huimen_exp_use_old_coin",effects:{yin:-1},condition:{hasItem:"清代铜钱"}},
            {text:"再照一次井水里的秀兰",next:"huimen_exp_xiulan_mirror_2",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"下雨了，陪秀兰一起淋",next:"huimen_exp_xiulan_rain",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"天亮时帮秀兰挡住阳光",next:"huimen_exp_xiulan_sun",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"拥抱秀兰",next:"huimen_exp_final_hug",effects:{yin:-1},condition:{flag:"huimen_exp_held_xiulan_hand"}},
            {text:"再摘一朵桂花给秀兰",next:"huimen_exp_xiulan_flower_2",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"给秀兰梳头",next:"huimen_exp_xiulan_hair",effects:{yin:-1},condition:{flag:"huimen_exp_combed_xiulan_hair"}},
            {text:"答应帮秀兰托梦",next:"huimen_exp_xiulan_dream",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"把秀兰的头发系在手腕上",next:"huimen_exp_use_xiulan_hair",effects:{yin:-1},condition:{hasItem:"秀兰的头发"}},
            {text:"向秀兰道歉",next:"huimen_exp_xiulan_apology",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"听秀兰说谢谢",next:"huimen_exp_xiulan_thanks",effects:{yin:-1},condition:{flag:"huimen_exp_apologized_to_xiulan"}},
            {text:"叫秀兰的名字",next:"huimen_exp_xiulan_name",effects:{yin:-1},condition:{flag:"xiulanMercy"}},
            {text:"问秀兰如果活着会是什么样",next:"huimen_exp_xiulan_age",effects:{yin:-1},condition:{flag:"huimen_exp_called_xiulan_name"}},
            {text:"和秀兰道别",next:"huimen_exp_xiulan_goodbye",effects:{yin:-1},condition:{flag:"huimen_exp_said_goodbye_to_xiulan"}},
            {text:"把婚床字条给秀兰",next:"huimen_exp_use_wedding_bed_note",effects:{yin:-1},condition:{hasItem:"婚床上的字条"}},
            {text:"把石狮口中的名字还给秀兰",next:"huimen_exp_use_stone_lion_name",effects:{yin:-1},condition:{hasItem:"石狮口中的名字"}},
            {text:"带秀兰做最后的告别",next:"huimen_exp_final_goodbye",effects:{yin:-5},condition:{flag:"huimen_exp_truly_saw_xiulan"}},
            {text:"你觉得自己已经属于这个村子，决定留下守护记忆",ending:"huimen_exp_ending_village_memory",effects:{yin:-5},condition:{flag:"huimen_exp_truly_saw_xiulan"}},
            {text:"直接把秀兰安葬",next:"huimen_exp_return_bury_xiulan",effects:{yin:-5},condition:{flag:"xiulanMercy"}}
        ],
    }
};
