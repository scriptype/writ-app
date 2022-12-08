const template = () => `
  <form id="complete-step-form" class="view intro-view">
    <h1>Hello,</h1>
    <p>I'll walk you through a few steps to get started.</p>
    <button autofocus class="btn cta-btn">Let's start!</button>
  </form>
`

const cssVariables = ({ transitionDuration }) => `;
  --transition-duration: ${transitionDuration};
`

const IntroView = async ({ el }) => {
  const transitionDuration = 500

  const listenToFormSubmit = (onSubmit) => {
    const form = el.querySelector('#complete-step-form')
    form.addEventListener('submit', e => {
      e.preventDefault()
      form.classList.add('exiting')
      setTimeout(onSubmit, transitionDuration)
    })
  }

  el.innerHTML = template()
  el.style.cssText += cssVariables({
    transitionDuration
  })

  await new Promise(listenToFormSubmit)
}

export default IntroView
