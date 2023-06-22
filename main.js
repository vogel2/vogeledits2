const menuToggler = document.querySelector('.navbar-toggler')
const drawer = document.querySelector('.navbar-drawer')

menuToggler.addEventListener('click', () => drawer.toggleAttribute('enabled'))

const themeToggler = document.querySelector('.theme-toggler')
const html = document.querySelector('html')

themeToggler.addEventListener('click', () => html.classList.toggle('light-theme'))
