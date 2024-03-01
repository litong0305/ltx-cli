import { MethodOfCreationEnum, ProjectNameOperationEnum } from "./init_consts.js";
import getAnswers from "./init_inquirer.js";
import spinner from "../../classes/Spinner.js";
import logger from "../../classes/Logger.js";
import { downloadTemplateByGit } from "../../utils/download.js";
import { getFileAbsolutePath, removeFilesOrFolder } from "../../utils/file.js";

/**
 * ltx init 命令交互完成后的处理
 */
const handleInit = async () => {
    logger.success('欢迎使用ltx cli，轻松构建react项目～ 🎉🎉🎉');
    const answers = await getAnswers();
    const { projectName, projectNameOperation, methodOfCreation, template } = answers;
    if(methodOfCreation === MethodOfCreationEnum.Template) {
        if(projectNameOperation === ProjectNameOperationEnum.Overwrite) {
            removeFilesOrFolder(getFileAbsolutePath(projectName));
            logger.warn(`已删除旧的${projectName}目录...`);
        }
        
        spinner.start('模板下载中..');
        downloadTemplateByGit(projectName, template).then(() => {
            spinner.succeed('模板下载完成!');
        }).catch((err) => {
            spinner.fail('模版下载失败!');
            console.log(err);
        })
        
    }
}

export default handleInit;