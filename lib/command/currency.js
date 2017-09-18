const axios = require('axios');
const chalk = require('chalk');
const log = console.log;
const green = chalk.green;
const red = chalk.red;


module.exports = {
    run(argv) {
        const url = "https://api.coinmarketcap.com/v1/ticker/";
        axios.get(url, {}).then((res) => {
            res.data.map((e) => {
                log(chalk.green(e.id));
            })
        }).catch((err) => {
            console.log()
            log(chalk.red(`Uncatch error: ${err.message}`));
        });
    }
}
