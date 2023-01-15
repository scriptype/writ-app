import { sleep } from './utils.js'

export const saveSettings = async (settings, storage = localStorage) => {
  storage.setItem('writ-settings', JSON.stringify(settings))
  console.log('saved settings', JSON.stringify(settings))
  await sleep(1)
  return settings
}

export const loadSettings = async (storage = localStorage) => {
  const settings = storage.getItem('writ-settings')
  console.log('loaded settings', JSON.parse(settings))
  await sleep(1)
  if (settings) {
    return JSON.parse(settings)
  }
  return {}
}
