const form = document.querySelector('#settings')

form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  return window.writ.run(formData.get('rootDirectory'))
})
