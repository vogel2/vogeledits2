const menuTogglers = document.querySelectorAll('.navbar-toggler')
const drawer = document.querySelector('.navbar-drawer')

// Enables the navigation menu
menuTogglers.forEach(toggler =>
    toggler.addEventListener('click', () => drawer.toggleAttribute('enabled')))

const navbarLinks = document.querySelectorAll('.navbar-links')

// Closes the drawer on link click event
navbarLinks.forEach(link =>
    link.addEventListener('click', () => drawer.attributes.removeNamedItem('enabled')))

// Fade-in animation: create the observer
const observer = new IntersectionObserver((entries) =>
    entries.forEach(function (entry) {
        entry.target.classList.toggle("slide-up", entry.isIntersecting);
        if (entry.intersectionRatio > 0) observer.unobserve(entry.target);
    })
);

// Observe the elements
const elements = [
    ...document.querySelectorAll(".hero-item"),
    ...document.querySelectorAll("#videos section h2"),
    ...document.querySelectorAll(".grid-item > div"),
    ...document.querySelectorAll("#get-in-touch > *"),
]

elements.forEach((element) => observer.observe(element));

// Blue line animation
const styleSheet = document.styleSheets[0];
const rule = styleSheet.cssRules[23];
setTimeout(() => rule.style.width = '100%', 1500);

// Disabling right click on hero GIF
const video = document.querySelector('.hero-avatar video')
video.addEventListener('contextmenu', e => e.preventDefault())