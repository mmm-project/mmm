import { listenerCount } from "cluster"
import _ from 'lodash'
import path from 'path'
import process from 'process'
import express from 'express'



export class Server {
    private _options = {
        port: 0,
        listen: '',
        workDir: '',
        htmlDir: '',
    };

    private _app = express();


    constructor(argv: any) {
        _.assign(this._options, _.pick(argv, _.keys(this._options)));
        if (!path.isAbsolute(this._options.htmlDir)) {
            this._options.htmlDir = path.resolve(process.cwd(), this._options.htmlDir);
        }

        console.log('options:', this._options);
    }

    listen() {
        this._app.use(express.static(this._options.htmlDir, {
            index: false
        }));
        try {
            this._app.listen(this._options.port, this._options.listen, () => {
                console.log('listen sucessed on:', this._options.listen, this._options.port);
            })
        } catch (e) {
            console.log('listen error:', e.message);
        }

    }

}