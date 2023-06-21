const menuToggler = document.querySelector('.navbar-toggler')
const drawer = document.querySelector('.navbar-drawer')

menuToggler.addEventListener('click', () => drawer.toggleAttribute('enabled'))