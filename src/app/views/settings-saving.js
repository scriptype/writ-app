import { sleep } from '../utils.js'

const SettingsSavingView = async ({ el }) => {
  el.innerHTML = 'saving settings'
  return sleep(0)
}

export default SettingsSavingView
