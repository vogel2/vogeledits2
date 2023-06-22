const menuTogglers = document.querySelectorAll('.navbar-toggler')
const drawer = document.querySelector('.navbar-drawer')

menuTogglers.forEach(toggler =>
    toggler.addEventListener('click', () => drawer.toggleAttribute('enabled')))

const navbarLinks = document.querySelectorAll('.navbar-links')

navbarLinks.forEach(link =>
    link.addEventListener('click', () => drawer.attributes.removeNamedItem('enabled')))

// const themeToggler = document.querySelector('.theme-toggler')
// const html = document.querySelector('html')

// themeToggler.addEventListener('click', () => html.classList.toggle('light-theme'))
