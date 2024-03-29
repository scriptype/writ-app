import Constants from './constants.js'
import { saveSettings, loadSettings } from './settings.js'
import IntroView from './views/intro.js'
import DefineSettingsView from './views/define-settings.js'
import SettingsLoadingView from './views/settings-loading.js'
import SettingsSavingView from './views/settings-saving.js'
import MainView from './views/main.js'

const debugFirstTimeFlow = 0

export const MasterFlow = async ({ el }) => {
  const [ , settings ] = await Promise.all([
    SettingsLoadingView({ el }),
    loadSettings()
  ])
  if (debugFirstTimeFlow) {
    return FirstTimeFlow({ el })
  }
  return settings?.rootDirectory ?
    ContinuationFlow({ el, settings }) :
    FirstTimeFlow({ el })
}

export const ContinuationFlow = async ({ el, settings }) => {
  return MainView({ el, settings })
}

export const FirstTimeFlow = async ({ el }) => {
  await IntroView({ el })

  const { settings } = await DefineSettingsView({ el })

  const defaultSettings = await window.writ.getDefaultSettings(settings.rootDirectory)

  const fullSettings = {
    ...defaultSettings,
    ...settings
  }

  await Promise.all([
    SettingsSavingView({ el }),
    saveSettings(fullSettings)
  ])

  return MainView({ el, settings: fullSettings })
}
