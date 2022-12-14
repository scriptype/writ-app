const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const { join } = require('path');

const debug = 1
const windowWidth = 600
const windowHeight = 600

const APP_DIRECTORY = join(__dirname, 'app')

let webWindow

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

ipcMain.handle('writ:run', (event, settings) => {
  const writ = require('../../writ-cms')
  return writ(settings)
})

ipcMain.handle('nativeHelpers:showOpenDirectoryDialog', (event, options) => {
  return dialog.showOpenDialog(webWindow, {
    properties: ['openDirectory']
  })
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(join(APP_DIRECTORY, 'index.html'));
  if (debug) {
    win.webContents.openDevTools();
  }
  return win
};

if (!debug) {
  Menu.setApplicationMenu(null)
}

app.on('ready', () => {
  webWindow = createWindow()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    webWindow = createWindow();
  }
});
