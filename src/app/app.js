const storage = {
  _storage: {},
  setItem(itemKey, value) {
    this._storage[itemKey] = value
  },
  getItem(itemKey) {
    return this._storage[itemKey]
  }
}

const saveSettings = (settings) => {
  storage.setItem('writ-settings', settings)
  return settings
}

const loadSettings = () => {
  return storage.getItem('writ-settings')
}

const Constants = {
  IMPORT_SETTINGS: 'settings is defined using importing existing folder',
  CREATE_SETTINGS_USING_FORM: 'settings is defined using a form',
  SETTINGS_ARE_SOMEHOW_THERE: 'you somehow managed to define the settings in an unexpected way'
}

const IntroView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = 'intro view'
    setTimeout(resolve, 3000)
  })

const DefineSettingsView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = 'define settings view'
    setTimeout(() => {
      resolve({
        settings: {
          site: {
            title: 'Hello',
            description: ''
          },
          rootDirectory: '/Users/enes/code/writ-test-blog'
        },
        theWayItsDefined: Math.random() < 0.333 ?
        Constants.IMPORT_SETTINGS :
          Math.random() > 0.5 ?
            Constants.CREATE_SETTINGS_USING_FORM :
            Constants.SOMEHOW_SETTINGS_ARE_THERE
      })
    }, 3000)
  })

const SettingsSavingView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = 'saving settings'
    setTimeout(resolve, 2000)
  })

const SettingsImportedView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = Constants.IMPORT_SETTINGS
    setTimeout(resolve, 3000)
  })

const SettingsCreatedView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = Constants.CREATE_SETTINGS_USING_FORM
    setTimeout(resolve, 3000)
  })

const SettingsJustEmergedView = ({ el }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = Constants.SETTINGS_ARE_SOMEHOW_THERE
    setTimeout(resolve, 3000)
  })

const MainView = ({ el, settings }) =>
  new Promise((resolve, reject) => {
    el.innerHTML = 'main view'
  })

const FirstTimeFlow = async ({ el }) => {
  const {
    IMPORT_SETTINGS,
    CREATE_SETTINGS_USING_FORM
  } = Constants

  await IntroView({ el })

  const {
    settings,
    theWayItsDefined
  } = await DefineSettingsView({ el })

  await SettingsSavingView({ el })
  await saveSettings(settings)

  if (theWayItsDefined === IMPORT_SETTINGS) {
    await SettingsImportedView({ el })
  } else if (theWayItsDefined === CREATE_SETTINGS_USING_FORM) {
    await SettingsCreatedView({ el })
  } else {
    await SettingsJustEmergedView({ el })
  }
  return MainView({ el, settings })
}

const ContinuationFlow = async ({ el, settings }) => {
  return MainView({ el, settings })
}

const MasterFlow = async ({ el }) => {
  const settings = await loadSettings()
  return settings?.rootDirectory ?
    ContinuationFlow({ el, settings }) :
    FirstTimeFlow({ el })
}

MasterFlow({
  el: document.getElementById('app')
})
