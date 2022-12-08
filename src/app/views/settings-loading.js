const SettingsLoadingView = async ({ el }) => {
  const template = () => `
    <div class="view settings-loading-view">
      <h1>loading</h1>
    </form>
  `
  el.innerHTML = template()
}

export default SettingsLoadingView
