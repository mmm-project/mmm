import yargs from 'yargs'
yargs
    .usage('Usage: mmm <command> [options]')
    .command(require('./run'))
    .command(require('./test'))
    .demandCommand(1, 'please input command,or using mmm <command> --help ')
    .help()
    .argv

