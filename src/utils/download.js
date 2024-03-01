import download from 'download-git-repo';
import { TemplateUrlOfGitMap } from '../commands/init/init_consts.js';

/**
 * 下载 Git 模版
 * @param {*} projectName 
 */
 const downloadTemplateByGit = (projectName, methodOfTemplate) => {
    return new Promise((resolve, reject) => {
        // 通过 gitee 中的ssh地址拉取已经配置好的模版代码，需要在地址前加上direct:，不然会报错：'git clone' failed with status 128 
        download(`direct:${TemplateUrlOfGitMap.get(methodOfTemplate)}`, projectName, { clone: true }, (err) => {
            if(err) {
                reject(err);
                return;
            }
            
            resolve();
        })
    })
}

export {
    downloadTemplateByGit,
};