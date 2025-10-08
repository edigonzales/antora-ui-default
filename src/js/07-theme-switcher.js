(function () {
  'use strict'

  const userTheme = window.localStorage.getItem('theme')
  const themeCurrentImage = document.querySelector('.theme-current')

  function theme (t) {
    themeCurrentImage.src = '/_/img/theme-' + t + '.svg'
    document.documentElement.dataset.theme = t
  }

  if (userTheme) {
    console.log(document)
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
        theme('system')
        break
      }
    }
  } else {
    // used system theme
    themeCurrentImage.src = '/_/img/theme-system.svg'
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

    theme(newTheme)

    if (newTheme === 'dark') {
      window.localStorage.setItem('theme', 'dark')
    }

    if (newTheme === 'light') {
      window.localStorage.setItem('theme', 'light')
    }

    if (newTheme === 'system') {
      window.localStorage.removeItem('theme')
    }
  }

  // Theme switches
  const themeSwitches = document.querySelectorAll('.theme-menu .theme')
  themeSwitches.forEach((themeSwitch) => {
    themeSwitch.addEventListener('click', switchTheme)
  })
})()
