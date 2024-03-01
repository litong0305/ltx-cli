import chalk from 'chalk';

class Logger {
    constructor() {
        const { green, yellow, red, cyan } = chalk;
        this.red = red;
        this.green = green;
        this.yellow = yellow;
        this.cyan = cyan;
    }

    warn(text = '') {
        console.log(this.yellow(text));
    }

    info(text = '') {
        console.log(this.cyan(text));
    }

    error(text = '') {
        console.log(this.red(text));
    }

    success(text = '') {
        console.log(this.green(text));
    }
}

export default new Logger();