/**
 * 《回门》场景模块：exp2_coffin
 */

export const scenes = {
    huimen_exp2_red_coffin_inside: {
        title: '棺中',
        text: `你再次打开红棺。

棺中没有尸体，只有一件叠得整整齐齐的嫁衣。嫁衣上放着一张照片，照片里是年轻的秀兰和周文，两人笑得羞涩。

照片背面写着："愿生生世世，不离不弃。"`,
        effects: {"sanity":-8,"yin":3,"setFlag":"huimen_exp2_opened_red_coffin_again"},
        choices: [{"text":"把照片给秀兰","next":"huimen_exp2_red_coffin_photo","effects":{"yin":-5}},{"text":"把嫁衣收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"红棺中的嫁衣"}}],
    }
,
    huimen_exp2_red_coffin_photo: {
        title: '照片',
        text: `你拿着照片，对着井说："秀兰，你看。"

秀兰的身影浮出来。她看着照片，手在发抖。

"他还留着。" 她说，"我以为他早就烧了。"

"他留着。" 你说，"直到死。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"红棺中的嫁衣"},
        choices: [{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
