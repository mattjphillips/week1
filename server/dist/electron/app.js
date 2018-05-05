"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class default_1 {
    constructor(url) {
        this.url = url;
    }
    start() {
        electron_1.app.on('ready', () => this.createWindow());
        electron_1.app.on('window-all-closed', () => {
            electron_1.app.quit();
        });
    }
    createWindow() {
        this.window = new electron_1.BrowserWindow({ width: 1000, height: 800 });
        this.window.loadURL(this.url);
        this.window.webContents.openDevTools();
        this.window.on('closed', () => {
            this.window = null;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=app.js.map