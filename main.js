const path = require("path");
const url = require("url");
const {app, BrowserWindow} = require("electron");
const electron = require("electron");

let mainWindow;
const Menu = electron.Menu;

function createWindow() {
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({

    });
    // mainWindow.loadURL('http://localhost:8080/');
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './dist/index.html'),
        protocol: 'file',
        slashes: true
    }))
    mainWindow.on('close', function() {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})
