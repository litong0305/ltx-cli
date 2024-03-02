import { input, select }  from '@inquirer/prompts';
import { ProjectNameOperationEnum, MethodOfCreationEnum, ProjectNameOperationMap, MethodOfCreationMap, TemplateChoosesMap } from './init_consts.js';
import { checkDir, getFileAbsolutePath } from '../../utils/file.js';
import { getGitUserName } from '../../utils/git.js';
/*
 * 获取项目名称的值
 * @returns 
 */
const getProjectName = async () => {
    const projectName = await input({ 
        message: "请输入项目名称", 
        validate: (value) => /^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/.test(value)? true : '请输入包含有数字、字母、下划线，且不以下划线开头和结尾的项目名称。',
    });
    if(!checkDir(getFileAbsolutePath(projectName))) {
      return { projectName }  
    }

    const projectNameOperation = await select({
        message: `目录中已存在${projectName}项目，请选择`,
        choices: Array.from(ProjectNameOperationMap.values()),
    });
    if(projectNameOperation === ProjectNameOperationEnum.Overwrite) {
        return { projectName, projectNameOperation };
    }

   return await getProjectName();
}

/**
 * 获取作者信息
 * @returns 
 */
const getAuthor = async () => ({
    author: await input({
        message: '请输入作者',
        default: getGitUserName('username'),
    })
})
/**
 * 获取选择的模版信息
 * @returns 
 */
const getTempalteInfo = async () => await select({
    message: '请选择模版：',
    choices: Array.from(TemplateChoosesMap.values()),
});

/**
 * 获取创建项目方式的值
 */
 const getMethodOfCreation = async () => {
    const methodOfCreation = await select({
        message: '请选择创建项目的方式',
        choices: Array.from(MethodOfCreationMap.values()),
    });
    if(methodOfCreation === MethodOfCreationEnum.Template) {
        return { methodOfCreation, template: await getTempalteInfo() };
    }
    
    return { methodOfCreation, };
}

/**
 * 获取 ltx init 命令下所有的交互值
 * @returns 
 */
const getAnswers = async () => {
    return {
        ... await getProjectName(),
        ... await  getAuthor(),
        ... await getMethodOfCreation(),
    }
}

export default getAnswers;