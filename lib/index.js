#!/usr/bin/env node

/*
 * https://etherpush.io
 */

const fetchmeta = require('./command/fetchmeta');

require('yargs')
    .usage('$0 <cmd> [args]')
    .command('fetchmeta [url]', 'fetch meta of url', {
        url: {
            default: 'https://etherpush.io',
            describe: 'the url you want to fetch'
        }
    }, (argv) => {
        fetchmeta.run(argv);
    })
    .demandCommand()
    .help()
    .argv

