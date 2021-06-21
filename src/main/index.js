import { app, BrowserWindow } from "electron";
import "../renderer/store";
import ipc from "./app/ipc";

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
        minWidth: 880,
        minHeight: 620,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(winURL);

    mainWindow.on("closed", () => {
        mainWindow = null
    });

    ipc(mainWindow);
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