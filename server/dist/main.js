"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./express/app");
const app_2 = require("./electron/app");
const path = require("path");
const expressApp = new app_1.default(path.join(__dirname, "../../client/public"));
expressApp.start(() => {
    const electronApp = new app_2.default(expressApp.getURL());
    electronApp.start();
});
//# sourceMappingURL=main.js.map