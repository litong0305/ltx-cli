import { resolve } from 'path';
import fsPromise from 'fs/promises';
import fs from 'fs-extra';

/**
 * 获取项目/文件的绝对路径
 * @param {*} projectName ltx命令输入的项目名称
 * @returns 
 */
 const getFileAbsolutePath = (projectName) => resolve(process.cwd(), projectName);

 /**
 * 获取package.json的信息
 */
const getPackageJsonInfo = async () => {
    try{
        const pkgData = await fsPromise.readFile(getFileAbsolutePath('package.json'));
        return JSON.parse(pkgData);
    }catch(err) {
        console.log(err);
    }
}

/**
 * 判断当前目录下是否已经存在该项目名称
 * @param {*} projectName ltx命令输入的项目名称
 */
 const checkDir = (projectName) => fs.existsSync(getFileAbsolutePath(projectName));

 /**
  * 删除文件/文件夹
  * @param {*} filePath 
  * @returns 
  */
 const removeFilesOrFolder = (filePath) => fs.removeSync(filePath);

 export {
    checkDir,
    getFileAbsolutePath,
    getPackageJsonInfo,
    removeFilesOrFolder,
 };
