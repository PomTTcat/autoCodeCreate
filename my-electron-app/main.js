/*
 * @Author: your name
 * @Date: 2020-10-23 17:03:28
 * @LastEditTime: 2020-10-23 17:03:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-electron-app/main.js
 */
const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})