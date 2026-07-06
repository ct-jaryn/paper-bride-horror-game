import { createEnding } from '../../../js/engine/endingFactory.js';
/**
 * 结局模块：normal_and_death
 */

export const Endings = {
deceivedSalvation: createEnding('deceivedSalvation', {
        title: '普通结局 · 骗来的团圆',
        text: `你骗了秀姑，烧了她的尸骨，换回了母亲。

母亲上岸后大病一场，但活了下来。

可从那以后，你每晚都会梦见秀姑。她站在水里，问你："为什么骗我？"

你无法回答。

三十年后，你老了。一个雨夜，你走到河边，看见秀姑站在那里。

"我来还债了。" 你说。

你走进河里。这一次，你没有挣扎。`
    }),
otherHeniang: createEnding('otherHeniang', {
        title: '死亡结局 · 众怒',
        text: `你烧了秀姑，激怒了河里的其他河娘。

她们把母亲拉了回去，又把你也拖下了水。

你在水下看见了无数穿红衣服的女人。她们没有脸，只有一团团黑发。

"留下来陪我们。" 她们说。

你拼命挣扎，但河水太重。你感到肺里灌满了水，意识渐渐模糊。

最后一刻，你看见母亲游过来，想推开你。

但她推不动。

你们母子，都留在了河里。`
    }),
joinMother: createEnding('joinMother', {
        title: '死亡结局 · 母子同归',
        text: `你走进河里，陪母亲。

水下没有你想的那么可怕。很安静，很温暖。母亲和秀姑一左一右扶着你。

"傻孩子。" 母亲说。

"我不傻。" 你说，"我只是不想让你一个人。"`
    })
};
