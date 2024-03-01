/**
 * 项目名称重复时可进行的操作枚举
 */
const ProjectNameOperationEnum = {
    /** 覆盖当前目录中的项目 */
    Overwrite: 1, 
    /** 重命名当前项目名称 */
    Rename: 2,
}

/**
 * 项目名称重复时可选择的选项信息
 */
const ProjectNameOperationMap = new Map([
    [
        ProjectNameOperationEnum.Overwrite, {
            name: '覆盖',
            value: ProjectNameOperationEnum.Overwrite,
        },
    ],
    [
        ProjectNameOperationEnum.Rename, {
            name: '重命名',
            value: ProjectNameOperationEnum.Rename,
        }, 
    ]
])

/**
 * 选择创建项目的方式枚举
 */
const MethodOfCreationEnum = {
    /** 使用模版配置 */
    Template: 1,
    /** 使用自定义配置 */
    Custom: 2,
}

/**
 * 选择创建项目方式的选项信息
 */
const MethodOfCreationMap = new Map([
    [
        MethodOfCreationEnum.Template, {
            name: '使用模版',
            value: MethodOfCreationEnum.Template,
        },
    ],
    // [
    //     MethodOfCreationEnum.Custom, {
    //         name: '使用自定义配置',
    //         value: MethodOfCreationEnum.Custom,
    //     },
    // ]
])

/**
 * 可使用模版的枚举值
 */
const TemplateEnum = {
    /** React18 + TS + Webpack5 */
    Webpack: 1, 
    /** React18 + TS + vite5  */
    Vite: 2,
}

/**
 * 选择使用模版的选项信息
 */
const TemplateChoosesMap = new Map([
    // [
    //     TemplateEnum.Webpack, {
    //         name: 'React18 + TS + Webpack5',
    //         value: TemplateEnum.Webpack,
    //     },
    // ],
    [
        TemplateEnum.Vite, {
            name: 'React18 + TS + vite5',
            value: TemplateEnum.Vite,
        },
    ]
])

/**
 * 可使用模版的git下载地址
 */
const TemplateUrlOfGitMap = new Map([
    [
        TemplateEnum.Webpack, 'git@gitee.com:bugMakerByLt/react-template.git'
    ],
    [
        TemplateEnum.Vite, 'git@gitee.com:bugMakerByLt/react-template.git'
    ]
]);

export {
    ProjectNameOperationEnum,
    ProjectNameOperationMap,
    MethodOfCreationEnum,
    MethodOfCreationMap,
    TemplateEnum,
    TemplateChoosesMap,
    TemplateUrlOfGitMap,
}