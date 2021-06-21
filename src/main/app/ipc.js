import { ipcMain } from "electron";

export default (mainWindow) => {
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