(function () {
  'use strict'

  const userTheme = window.localStorage.getItem('theme')
  const systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const themeLight = 'theme-light'
  const themeDark = 'theme-dark'
  const bodyClasses = document.body.classList
  const themeCurrentImage = document.querySelector('.theme-current')

  if (userTheme) {
    // User set theme manually
    switch (userTheme) {
      case 'dark': {
        bodyClasses.add(themeDark)
        bodyClasses.remove(themeLight)
        themeCurrentImage.src = '/_/img/theme-dark.svg'
        break
      }
      case 'light': {
        bodyClasses.add(themeLight)
        bodyClasses.remove(themeDark)
        themeCurrentImage.src = '/_/img/theme-light.svg'
        break
      }
      default: {
        bodyClasses.remove(themeLight)
        bodyClasses.remove(themeDark)
        themeCurrentImage.src = '/_/img/theme-system.svg'
        break
      }
    }
  } else {
    // User don't set theme manually
    if (systemThemeIsDark) {
      // system theme is dark
      bodyClasses.add(themeDark)
      bodyClasses.remove(themeLight)
      themeCurrentImage.src = '/_/img/theme-dark.svg'
    } else {
      // used system theme
      bodyClasses.remove(themeLight)
      bodyClasses.remove(themeDark)
      themeCurrentImage.src = '/_/img/theme-system.svg'
    }
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
    const bodyClasses = document.body.classList

    if (newTheme === 'dark') {
      bodyClasses.add(themeDark)
      bodyClasses.remove(themeLight)
      themeCurrentImage.src = '/_/img/theme-dark.svg'
      window.localStorage.setItem('theme', 'dark')
    }

    if (newTheme === 'light') {
      bodyClasses.add(themeLight)
      bodyClasses.remove(themeDark)
      themeCurrentImage.src = '/_/img/theme-light.svg'
      window.localStorage.setItem('theme', 'light')
    }

    if (newTheme === 'system') {
      bodyClasses.remove(themeLight)
      bodyClasses.remove(themeDark)
      themeCurrentImage.src = '/_/img/theme-system.svg'
      window.localStorage.removeItem('theme')
    }
  }

  // Theme switches
  const themeSwitches = document.querySelectorAll('.theme-menu .theme')
  themeSwitches.forEach((themeSwitch) => {
    themeSwitch.addEventListener('click', switchTheme)
  })
})()
