/**
 * 《xitai》场景模块：burn
 */

export const scenes = {
    burn_photo: {
        title: '焚照',
        text: `你用打火机点燃照片。

火苗舔上照片边缘，戏台上的云袖忽然转过头，像是隔着时空看了你一眼。

照片烧成灰烬，风里传来一声若有似无的叹息。

[whisper]"你和他们一样……都想让我消失。"[/whisper]

你手中的灰烬被风吹散，落在化妆台的镜子上，拼出两个字：

[red]"别走。"[/red]`,
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: 'burned_stage_photo'
        },
        choices: [
            {
                text: '冲出后台',
                next: 'run_from_backstage'
            }
        ]
    }
};
