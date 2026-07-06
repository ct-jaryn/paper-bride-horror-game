/**
 * 《heniang》场景模块：ask
 */

export const scenes = {
    ask_previous_heniang: {
        title: '问上一任河娘',
        text: `"上一任河娘是谁？" 你问。

神婆抽了一口旱烟："秀姑。你妈最好的姐妹。"

"秀姑不是病死的？"

"病什么病。" 神婆冷笑，"三十年前，秀姑的男人在外面有了人，不要她了。她一时想不开，跳了河。那时候你妈已经嫁给你爸了，还大着肚子，硬是跑到河边去拉她。"

"拉住了吗？"

"拉住了手，没拉住命。" 神婆说，"秀姑把你妈一起往下拽。最后关头，秀姑松了手，自己沉了下去。"

你愣住了："秀姑救了我妈？"

"算是吧。" 神婆说，"所以她成了河娘后，一直没有害你妈。可现在你妈也成了河娘，秀姑就管不住了。"`,
        effects: {
            sanity: -5,
            setFlag: 'knowsXiuguStory'
        },
        choices: [
            {
                text: '问怎么让秀姑替母亲',
                next: 'ask_how_substitute'
            }
        ]
    },

    ask_underwater_woman: {
        title: '问水下女子',
        text: `"你是谁？" 你对着河水喊。

水面泛起涟漪，另一张脸浮现出来。那是一个年轻女人，比母亲年轻很多，穿着大红嫁衣。

"我叫秀姑。" 她说，"是你娘最好的姐妹。"

"是你害死我妈的？"

秀姑摇摇头："我没害她。是她自己愿意下来的。她太想我了。"

她的笑容很温柔，但眼神冰冷："不过既然她下来了，我就不寂寞了。我们姐妹俩，可以永远在河里作伴。"

"我不允许。"

秀姑的笑容僵了一下："那你想怎样？"

"我带她走。" 你说。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '和秀姑谈判',
                next: 'negotiate_xiugu'
            },
            {
                text: '威胁要毁掉她的尸骨',
                next: 'threaten_xiugu',
                effects: { yin: 10 }
            }
        ]
    },

    ask_how_substitute: {
        title: '问如何替人',
        text: `"怎么让秀姑替我妈？" 你问。

神婆从床底下拖出一个木盒，盒子里放着几根白骨和一段红布。

"秀姑的尸骨不全。当年捞上来一部分埋了，还有一部分留在河里。" 神婆说，"你要找到她全部的骨头，在河边烧掉。烧的时候念她的名字，让她知道有人在找她。"

"然后呢？"

"然后她会以为你要超度她。" 神婆说，"等她离开河底，你母亲就可以上来了。"

"这不是骗她吗？"

神婆看着你："你想救你妈，还是想做善人？"

你沉默了。`,
        effects: {
            yin: 5,
            setFlag: 'knowsRitual'
        },
        choices: [
            {
                text: '决定按神婆说的做',
                next: 'plan_ritual'
            },
            {
                text: '拒绝欺骗秀姑',
                next: 'refuse_deceive',
                effects: { setFlag: 'honestApproach' }
            }
        ]
    },

    ask_mother_promise: {
        title: '问母亲承诺',
        text: `"我妈答应过你什么？" 你问。

秀姑的眼神变得恍惚，像是在回忆很久远的事。

"三十年前，我跳河那天，你妈追到河边。" 她说，"她拉住我的手，说要陪我一起死。我骂她傻，把她推回了岸上。"

"她哭着说：'秀姑，你等我。等我老了，就来陪你。'"

秀姑看着你："她做到了。她下来了。"

你感到一阵心痛。原来母亲和秀姑之间，有过这样的约定。

[red]一个关于死亡的约定。[/red]`,
        effects: {
            sanity: -10,
            yin: 5,
            setFlag: 'knowsPromise'
        },
        choices: [
            {
                text: '说母亲还有你',
                next: 'tell_mother_has_you'
            },
            {
                text: '沉默',
                next: 'silence_by_river'
            }
        ]
    },

    ask_how_cruel: {
        title: '问如何断根',
        text: `"比她更狠，就是断了她的根。" 神婆说。

"什么意思？"

"秀姑是因为情伤跳河的。她的根，就是对那个负心汉的恨。" 神婆说，"你找到那个负心汉的后人，让他们在河边磕头认错，秀姑的怨气就散了。"

"可那男人早就死了。"

"后人还在。" 神婆说，"他们继承了秀姑的仇人血脉。他们的道歉，比任何法事都管用。"`,
        effects: {
            yin: 10,
            setFlag: 'knowsCruelWay'
        },
        choices: [
            {
                text: '去找负心汉的后人',
                next: 'find_traitor_descendants'
            }
        ]
    }
};
