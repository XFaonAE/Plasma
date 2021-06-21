import { app, BrowserWindow, ipcMain } from "electron"
import "../renderer/store"
if (process.env.NODE_ENV !== "development") {
    global.__static = require("path").join(__dirname, "/static").replace(/\\/g, "\\\\");
}

let mainWindow
const winURL = process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow () {
    mainWindow = new BrowserWindow({
        height: 700,
        useContentSize: true,
        width: 1500,
        frame: false
    });

    mainWindow.loadURL(winURL);

    mainWindow.on("closed", () => {
        mainWindow = null
    });

    ipcMain.on("_ELECTRON_windowClose", (event, data) => {
        mainWindow.close(); 
    });

    ipcMain.on("_ELECTRON_windowResize", (event, data) => {
        if (mainWindow.isMaximized()) {
        mainWindow.restore();
        return; 
        }
        mainWindow.maximize(); 
    });

    ipcMain.on("_ELECTRON_windowMinimize", (event, data) => {
        mainWindow.minimize(); 
    });
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow()
    }
});