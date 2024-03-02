#! /usr/bin/env node
// #! /usr/bin/env node的作用：告诉操作系统用node环境来执行ltx.js
import  { program } from 'commander';
import Logger from '../src/classes/Logger.js';
import handleInit from '../src/commands/init/index.js';
import { getPackageJsonInfo } from '../src/utils/file.js';
/**
 * 查看 ltx 的版本号
 */
program.option('-v').usage('<command> [options]').action(() => {
    const pkgJson = getPackageJsonInfo(); // 取当前package.json中的版本
    Logger.info(`v${pkgJson.version}`)
    
});

/**
 * 初始化项目
 */
program.command('init').description('Initialize a project').action(handleInit);

/**
 * 启动项目
 */
program.command('start').description('Start a project').action(() => {
    Logger.success('开始运行项目！');
});

/**
 * 构建项目
 */
 program.command('build').description('Build a project').action(() => {
    console.log(blue('开始构建项目！'));
});

program.parse(process.argv);