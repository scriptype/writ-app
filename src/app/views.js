import { mockSettings } from './settings.js'
import Constants from './constants.js'
import { getRandomFrom, sleep } from './utils.js'

export const IntroView = async ({ el }) => {
  el.innerHTML = 'intro view'
  return sleep(3)
}

export const DefineSettingsView = async ({ el }) => {
  el.innerHTML = 'define settings view'
  await sleep(3)
  return {
    settings: mockSettings,
    theWayItsDefined: getRandomFrom([
      Constants.IMPORT_SETTINGS,
      Constants.CREATE_SETTINGS_USING_FORM,
      Constants.SOMEHOW_SETTINGS_ARE_THERE
    ])
  }
}

export const SettingsLoadingView = async ({ el }) => {
  el.innerHTML = 'loading settings'
  return sleep(0)
}

export const SettingsSavingView = async ({ el }) => {
  el.innerHTML = 'saving settings'
  return sleep(0)
}

export const SettingsImportedView = async ({ el }) => {
  el.innerHTML = Constants.IMPORT_SETTINGS
  return sleep(3)
}

export const SettingsCreatedView = async ({ el }) => {
  el.innerHTML = Constants.CREATE_SETTINGS_USING_FORM
  return sleep(3)
}

export const SettingsJustEmergedView = async ({ el }) => {
  el.innerHTML = Constants.SETTINGS_ARE_SOMEHOW_THERE
  return sleep(3)
}

export const MainView = async ({ el, settings }) => {
  el.innerHTML = 'main view'
}
