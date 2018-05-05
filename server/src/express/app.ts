import * as express from 'express';
import * as path from 'path';
import * as url from 'url';

export default class ExpressApp {
    staticPath: string;
    port: number = 8081;
    app: express.Express;

    constructor(staticPath: string) {
        this.staticPath = staticPath;
    }

    start(whenReady: () => void) {
        this.app = express();
        this.app.use(express.static(this.staticPath));
        this.app.listen(this.port, () => {
            console.log(`server running on ${this.port}`)
            whenReady();
        });
    }

    getURL(): string {
        return url.format({
            pathname: "/",
            host: "localhost:8081",
            protocol: 'http:',
            slashes: true
        });
    }
}




