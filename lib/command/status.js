const chalk = require('chalk');
const log = console.log;
const green = chalk.green;
const red = chalk.red;
const axios = require('axios');


module.exports = {
    run(argv) {
        axios.get('https://etherpush.io').then(() => {
            log(green("https://etherpush.io is online"));
        }).catch((err) => {
            log(red("https://etherpush.io is offline"));
        });
    }
}
