"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const url = require("url");
class ExpressApp {
    constructor(staticPath) {
        this.port = 8081;
        this.staticPath = staticPath;
    }
    start(whenReady) {
        this.app = express();
        this.app.use(express.static(this.staticPath));
        this.app.listen(this.port, () => {
            console.log(`server running on ${this.port}`);
            whenReady();
        });
    }
    getURL() {
        return url.format({
            pathname: "/",
            host: "localhost:8081",
            protocol: 'http:',
            slashes: true
        });
    }
}
exports.default = ExpressApp;
//# sourceMappingURL=app.js.map