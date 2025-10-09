(function () {
  'use strict'

  const config = (document.getElementById('site-script') || { dataset: {} })
    .dataset
  const uiRootPath =
    (config.uiRootPath == null ? window.uiRootPath : config.uiRootPath) || '.'
  const userTheme = window.localStorage.getItem('theme')
  const themeCurrentImage = document.querySelector('.theme-current')

  function theme (t) {
    themeCurrentImage.src = uiRootPath + '/img/theme-' + t + '.svg'
    document.documentElement.dataset.theme = t
  }

  if (userTheme) {
    // User set theme manually
    switch (userTheme) {
      case 'dark': {
        theme('dark')
        break
      }
      case 'light': {
        theme('light')
        break
      }
      default: {
        themeCurrentImage.src = uiRootPath + '/img/theme-system.svg'
        delete document.documentElement.dataset.theme
        break
      }
    }
  } else {
    // used system theme
    themeCurrentImage.src = uiRootPath + '/img/theme-system.svg'
  }

  const toggle = document.querySelector('.themes .theme-menu-toggle')
  if (!toggle) return

  const selector = document.querySelector('.themes')

  toggle.addEventListener('click', function (e) {
    selector.classList.toggle('is-active')
    e.stopPropagation() // trap event
  })

  document.documentElement.addEventListener('click', function () {
    selector.classList.remove('is-active')
  })

  function switchTheme (event) {
    const newTheme = this.dataset.theme

    if (newTheme === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      theme('dark')
    }

    if (newTheme === 'light') {
      window.localStorage.setItem('theme', 'light')
      theme('light')
    }

    if (newTheme === 'system') {
      window.localStorage.removeItem('theme')
      themeCurrentImage.src = uiRootPath + '/img/theme-system.svg'
      delete document.documentElement.dataset.theme
    }
  }

  // Theme switches
  const themeSwitches = document.querySelectorAll('.theme-menu .theme')
  themeSwitches.forEach((themeSwitch) => {
    themeSwitch.addEventListener('click', switchTheme)
  })
})()
