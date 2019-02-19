const defaultOptions = {
}

export default function install (Vue, setupOptions = {}) {
  const options = Object.assign({}, defaultOptions, setupOptions)
  if (options.router) {
    options.router.afterEach((to, from) => {
      if (from.path !== '/') {
        let url
        if (options.router.mode === 'history') {
          url = location.protocol + '//' + location.host + (options.router.options.base || '') +  to.fullPath
        } else {
          url = location.protocol + '//' + location.host + location.pathname + location.search + '#' + to.fullPath
        }
        if (options.trackPageView) {
          options.trackPageView(url)
        } else {
          window._xystj && _xystj.trackPageView(url)
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