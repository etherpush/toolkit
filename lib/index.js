#!/usr/bin/env node

/*
 * https://etherpush.io
 */

const fetchmeta = require('./command/fetchmeta');
const readme = require('./command/readme');
const status = require('./command/status');

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
    .command('readme', 'output the template of etherpush readme', {
    }, (argv) => {
        readme.run(argv);
    })
    .command('status', 'status of etherpush.io', {
    }, (argv) => {
        status.run(argv);
    })
    .demandCommand()
    .help()
    .argv

