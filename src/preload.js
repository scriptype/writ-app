const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('writ', {
  run: (options) => {
    return ipcRenderer.invoke('writ:run', options)
  },
  getDefaultSettings: (rootDirectory) => {
    return ipcRenderer.invoke('writ:getDefaultSettings', rootDirectory)
  }
})

contextBridge.exposeInMainWorld('nativeHelpers', {
  showOpenDirectoryDialog: () => {
    return ipcRenderer.invoke('nativeHelpers:showOpenDirectoryDialog')
  }
})
