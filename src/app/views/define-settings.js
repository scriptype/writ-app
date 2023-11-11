const template = () => `
  <form id="complete-step-form" class="view define-settings-view">
    <label for="folder-input">Please click here to select a folder.</label>
    <input type="text" id="folder-input" required />
  </form>
`

const cssVariables = ({ transitionDuration }) => `;
  --transition-duration: ${transitionDuration};
`

const DefineSettingsView = async ({ el }) => {
  const transitionDuration = 500

  el.innerHTML = template()
  el.style.cssText += cssVariables({
    transitionDuration
  })

  const listenToFolderSelect = (onSelect) => {
    document.querySelector('#folder-input').addEventListener('click', async (e) => {
      const { cancelled, filePaths } = await window.nativeHelpers.showOpenDirectoryDialog()
      if (cancelled || !filePaths || !filePaths[0]) {
        return
      }
      document.querySelector('#complete-step-form').classList.add('exiting')
      setTimeout(() => {
        onSelect({
          settings: {
            rootDirectory: filePaths[0]
          }
        })
      }, transitionDuration)
    })
  }

  return new Promise(listenToFolderSelect)
}

export default DefineSettingsView
