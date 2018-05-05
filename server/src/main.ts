import ExpressApp from "./express/app";
import ElectronApp from "./electron/app";
import * as path from 'path';
import * as url from 'url';

const expressApp = new ExpressApp(path.join(__dirname, "../../client/public"));
expressApp.start(() => {
    const electronApp = new ElectronApp(expressApp.getURL());
    electronApp.start();
});

