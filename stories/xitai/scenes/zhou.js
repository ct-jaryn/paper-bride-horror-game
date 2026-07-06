/**
 * 《xitai》场景模块：zhou
 */

export const scenes = {
    zhou_descendants: {
        title: '周生后人',
        text: `你找到周生的后人，一个退休教师。

老人听说你问周生，沉默了很久："我爷爷那辈子，只做错了一件事。"

"什么事？"

"他没能救出云袖。" 老人说，"火起来的时候，他冲进戏台，但横梁砸下来，把他挡在外面。他看着云袖被烧死，从那以后就疯了。"

"那戏单上被划掉的名字……"

"那是他自己划的。" 老人说，"他说自己不配演柳梦梅。"

你想起镜子里那个没有脸的小生。原来他一直困在后台，不是在害人，是在赎罪。`,
        effects: {
            sanity: -5,
            setFlag: 'knowsZhouInnocent'
        },
        choices: [
            {
                text: '回戏台告诉云袖真相',
                next: 'return_to_stage'
            }
        ]
    }
};
