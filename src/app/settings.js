import { sleep } from './utils.js'

const storage = {
  _data: {},
  setItem(itemKey, value) {
    this._data[itemKey] = value
  },
  getItem(itemKey) {
    if (Math.random() > 0.5) {
      return mockSettings
    }
    return this._data[itemKey]
  }
}

export const mockSettings = {
  site: {
    title: 'Hello',
    description: ''
  },
  rootDirectory: '/Users/enes/code/writ-test-blog'
}

export const saveSettings = async (settings) => {
  storage.setItem('writ-settings', settings)
  await sleep(2)
  return settings
}

export const loadSettings = async () => {
  const settings = storage.getItem('writ-settings')
  await sleep(1)
  return settings
}
