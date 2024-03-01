import ora from "ora";
import logger from "./Logger.js";
class Spinner {
    spinner;
    constructor() {
        this.spinner = ora();
    }

    /**
     * 开始加载
     * @param {*} text 
     */
    start = (text = '') => {
        const msg = `${text}...\n`;
        this.spinner.start(msg);
    }

    // 加载成功
    succeed = (text = '') => {
        this.spinner.stopAndPersist({
            symbol: "🎉",
            text: `${text}\n`,
        });
    };

  // 加载失败
    fail = (text = '') => {
        this.spinner.fail(logger.red(text));
    };
}

export default new Spinner();