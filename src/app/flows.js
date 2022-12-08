import Constants from './constants.js'
import { saveSettings, loadSettings } from './settings.js'
import {
  IntroView,
  DefineSettingsView,
  SettingsLoadingView,
  SettingsSavingView,
  SettingsImportedView,
  SettingsCreatedView,
  SettingsJustEmergedView,
  MainView
} from './views.js'

export const MasterFlow = async ({ el }) => {
  const [ , settings ] = await Promise.all([
    SettingsLoadingView({ el }),
    loadSettings()
  ])
  return settings?.rootDirectory ?
    ContinuationFlow({ el, settings }) :
    FirstTimeFlow({ el })
}

export const ContinuationFlow = async ({ el, settings }) => {
  return MainView({ el, settings })
}

export const FirstTimeFlow = async ({ el }) => {
  await IntroView({ el })

  const {
    settings,
    theWayItsDefined
  } = await DefineSettingsView({ el })

  await Promise.all([
    SettingsSavingView({ el }),
    saveSettings(settings)
  ])

  if (theWayItsDefined === Constants.IMPORT_SETTINGS) {
    await SettingsImportedView({ el })
  } else if (theWayItsDefined === Constants.CREATE_SETTINGS_USING_FORM) {
    await SettingsCreatedView({ el })
  } else {
    await SettingsJustEmergedView({ el })
  }
  return MainView({ el, settings })
}
