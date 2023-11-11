import { MasterFlow } from './flows.js'

MasterFlow({
  el: document.getElementById('app')
})

document.addEventListener('dragover', (e) => {
  e.preventDefault()
  e.stopPropagation()
});

document.addEventListener('drop', (event) => {
  event.preventDefault()
  event.stopPropagation()
  console.log('event text', event.dataTransfer.getData('text'))
  console.log('event url', event.dataTransfer.getData('url'))
});
