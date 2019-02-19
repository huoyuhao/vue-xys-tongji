const defaultOptions = {
}

export default function install (Vue, setupOptions = {}) {
  const options = Object.assign({}, defaultOptions, setupOptions)
  if (options.router) {
    options.router.afterEach((to, from) => {
      if (from.path !== '/') {
        if (options.trackPageView) {
          options.trackPageView(location.protocol + '//' + location.host + to.fullPath)
        } else {
          window._xystj && _xystj.trackPageView(location.protocol + '//' + location.host + to.fullPath)
        }
      }
    })
  }
  Vue.directive('xys-strack', {
    bind(el, binding) {
      el.addEventListener('click', () => {
        if (options.trackEvent) {
          options.trackEvent(binding.value, 'click')
        } else {
          window._xystj && _xystj.trackEvent(binding.value, 'click')
        }
      }, false)
    }
  })
}