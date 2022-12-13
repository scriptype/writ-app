const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('writ', {
  run: (settings) => ipcRenderer.invoke('writ:run', settings)
})

contextBridge.exposeInMainWorld('nativeHelpers', {
  showOpenDirectoryDialog: () => ipcRenderer.invoke('nativeHelpers:showOpenDirectoryDialog')
})
