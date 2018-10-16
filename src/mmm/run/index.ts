import { Server } from './Server'
import path from 'path'
import process from 'process'

module.exports = {
    command: 'run [options]',
    describe: 'run mmm service',
    builder: {
        port: {
            alias: 'p',
            default: 8998,
            description: 'listen port'
        },
        listen: {
            alias: 'l',
            default: '0.0.0.0',
            description: 'listen host'
        },
        workDir: {
            alias: 'w',
            default: '~/mmm',
            description: 'work dir '
        },
        htmlDir: {
            alias: 'h',
            default: path.resolve(__dirname, '../html'),
            description: 'static html dir'
        }
    }
    ,
    handler: function (argv) {
        new Server(argv).listen();
    }
}

