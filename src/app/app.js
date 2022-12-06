const form = document.querySelector('#settings')

form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  const settings = {
    site: {
      title: formData.get('title'),
      description: formData.get('description')
    },
    rootDirectory: formData.get('rootDirectory'),
    ignorePaths: [
      "package.json",
      "package-lock.json",
      "node_modules",
      "settings.json",
    ]
  }
  return window.writ.run(settings)
})
