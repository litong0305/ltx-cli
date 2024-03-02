import  { execSync } from 'child_process';
import { stopExecution } from './index.js';

/**
 * 获取 git 配置的name信息
 */
const getGitUserName = () => {
    return Buffer.from(execSync('git config --global user.name', (error, stdout, stderr) => {
        if (error) {
            console.error(`执行Git命令时发生错误：${error}`);
            stopExecution();
            return;
        }

        return stdout;
    })).toString().trim();
}

export {
    getGitUserName
}