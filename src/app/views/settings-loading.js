const template = () => `
  <div class="view settings-loading-view">
    <span class="dummy-logo">Writ</span>
  </div>
`

const SettingsLoadingView = async ({ el }) => {
  const animationDuration = 1500

  el.innerHTML = template()
  el.style.cssText += `;
    --animation-duration: ${animationDuration}ms;
  `

  const listenToAnimationEnd = (onEnd) => {
    setTimeout(onEnd, animationDuration)
  }

  await new Promise(listenToAnimationEnd)
}

export default SettingsLoadingView
