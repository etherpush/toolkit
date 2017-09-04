const cheerio = require('cheerio');
const axios = require('axios');
const chalk = require('chalk');
const ora = require('ora');
const log = console.log;
const green = chalk.green;
const red = chalk.red;


const options = {
  onDownloadProgress(progressEvent) {
    console.log(progressEvent);
  }
}


module.exports = {
    run(argv) {
        let url = argv.url;
        if (!url) {
            log(chalk.red("must set the url"));
            return;
        }

        if(url.endsWith("/")) {
            url = url.slice(0, url.length-1);
        }

        const spinner = ora(`Loading ${url}`).start();

        axios.get(url, options).then((res) => {
            spinner.stop();

            if (res.status != 200) {
                log(chalk.red(`${url} did not return 200`));
                return;
            }

            const $ = cheerio.load(res.data);

            let title, desc, icon;

            title = $('title').get(0);
            title = title ? $(title).text() : "";

            $('meta').each((i, e) => {
                let name = $(e).attr('name') ;
                if (!name) {
                    name = $(e).attr('property');
                }

                switch (name) {
                    case 'og:description':
                    case 'description':
                        desc = $(e).attr('content');
                        break;
                    default:
                        break;
                }
            });

            $('head>link').attr('ref', 'icon').each((i, e) => {
                const href = $(e).attr('href');
                if (href.endsWith('ico')) {
                    icon = href;
                    if (!icon.startsWith('http')) {
                        icon = `${url}/${icon}`;
                    }
                }
            });

            if (!icon) {
                $('head>link').attr('ref', 'icon').each((i, e) => {
                    const href = $(e).attr('href');
                    if (href.endsWith('jpeg') || href.endsWith('png')) {
                        icon = href;
                        if (!icon.startsWith('http')) {
                             icon = `${url}${icon}`;
                        }
                    }
                });
            }

            icon = icon.replace("/./", "/");

            log(green(JSON.stringify({
                title,
                desc,
                icon,
                website: url,
            }, null, 4)));

        }).catch((err) => {
            spinner.stop();
            log(chalk.red(`Uncatch error: ${err.message}`));
        });
    }
}
