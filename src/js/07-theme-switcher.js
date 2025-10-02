(function () {
  'use strict'

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
})()
