import { resolve } from 'path';
import fs from 'fs-extra';
import Logger from '../classes/Logger.js';
import { stopExecution } from './index.js';

/**
 * 获取项目/文件的绝对路径
 * @param {*} projectName ltx命令输入的项目名称
 * @returns 
 */
 const getFileAbsolutePath = (projectName) => resolve(process.cwd(), projectName);

 /**
 * 判断当前目录下是否已经存在该项目名称
 * @param {*} projectName ltx命令输入的项目名称
 */
  const checkDir = (filePath) => fs.existsSync(filePath);

 /**
 * 获取package.json的信息
 */
const getPackageJsonInfo = (packageJsonPath = 'package.json') => {
    try{
        const filePath = getFileAbsolutePath(packageJsonPath);
        if(!checkDir(filePath)) {
            Logger.error(`${filePath}文件不存在！`);
            stopExecution();
        }

        const pkgData = fs.readFileSync(filePath);
        return JSON.parse(pkgData);
    }catch(err) {
        console.log(err);
        stopExecution();
    }
}

/**
 * 更新package.json中的信息
 * @param {*} projectName 哪个项目
 * @param {*} pkgInfo 要更新的内容
 * @returns 
 */
const setPackageJsonInfo = (projectName, pkgInfo) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = `${projectName}/package.json`;
            const pkgVal = getPackageJsonInfo(filePath);
            const newPkgVal = { ...pkgVal, ...pkgInfo };
            fs.writeFileSync(getFileAbsolutePath(filePath), JSON.stringify(newPkgVal, null, '\t'), 'utf-8');
            resolve();
        }catch(err) {
            reject(err);
        }
        
    })
}



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
    setPackageJsonInfo,
    removeFilesOrFolder,
 };
