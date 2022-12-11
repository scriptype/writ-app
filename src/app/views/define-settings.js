import { mockSettings } from '../settings.js'
import Constants from '../constants.js'
import { getRandomFrom, sleep } from '../utils.js'

const DefineSettingsView = async ({ el }) => {
  el.innerHTML = 'define settings view'
  await sleep(3)

  const theWayItsDefined = getRandomFrom([
    Constants.IMPORT_SETTINGS,
    Constants.CREATE_SETTINGS_USING_FORM,
    Constants.SOMEHOW_SETTINGS_ARE_THERE
  ])

  if (theWayItsDefined === Constants.IMPORT_SETTINGS) {
    await SettingsImportedView({ el })
  } else if (theWayItsDefined === Constants.CREATE_SETTINGS_USING_FORM) {
    await SettingsCreatedView({ el })
  } else {
    await SettingsJustEmergedView({ el })
  }

  return {
    settings: mockSettings
  }
}

const SettingsImportedView = async ({ el }) => {
  el.innerHTML = Constants.IMPORT_SETTINGS
  return sleep(3)
}

const SettingsCreatedView = async ({ el }) => {
  el.innerHTML = Constants.CREATE_SETTINGS_USING_FORM
  return sleep(3)
}

const SettingsJustEmergedView = async ({ el }) => {
  el.innerHTML = Constants.SETTINGS_ARE_SOMEHOW_THERE
  return sleep(3)
}

export default DefineSettingsView
