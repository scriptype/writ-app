const MainView = async ({ el, settings }) => {
  el.innerHTML = `
    <pre>${JSON.stringify(settings, null, 2)}</pre>
  `
  return window.writ.run(settings.rootDirectory)
}

export default MainView
