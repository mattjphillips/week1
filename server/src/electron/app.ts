
import {app as ElectronApp, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';

export default class {

    url: string;
    window: BrowserWindow;

    constructor(url: string) {
        this.url = url;
    }

    start() {
        ElectronApp.on('ready', () => this.createWindow());
  
        ElectronApp.on('window-all-closed', () => {
            ElectronApp.quit();
        });
    }

    createWindow() {
        this.window = new BrowserWindow({width: 1000, height: 800})
        this.window.loadURL(this.url);
        this.window.webContents.openDevTools();

        this.window.on('closed', () => {
            this.window = null
        });
    }
}
