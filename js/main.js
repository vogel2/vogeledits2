const menuTogglers = document.querySelectorAll('.navbar-toggler')
const drawer = document.querySelector('.navbar-drawer')

menuTogglers.forEach(toggler =>
    toggler.addEventListener('click', () => drawer.toggleAttribute('enabled')))

const navbarLinks = document.querySelectorAll('.navbar-links')

navbarLinks.forEach(link =>
    link.addEventListener('click', () => drawer.attributes.removeNamedItem('enabled')))

// Fade-in animation: create the observer
var observer = new IntersectionObserver((entries) => {
    applyAnimation(entries);
});

function applyAnimation(entries) {
    entries.forEach((entry) => {
        entry.target.classList.toggle("slide-up", entry.isIntersecting);
        if (entry.intersectionRatio > 0) observer.unobserve(entry.target);
    });
}

function stopAnimation(entries) {
    entries.forEach((entry) => observer.unobserve(entry.target));
}

// Observe the elements
[
    ...document.querySelectorAll(".hero-item"),
    ...document.querySelectorAll("#videos section h2"),
    ...document.querySelectorAll(".grid-item > div"),
    ...document.querySelectorAll("#get-in-touch > *"),
].forEach((element) => {
    observer.observe(element);
});

// Blue line animation
window.onload = function () {
    const styleSheet = document.styleSheets[0];
    const rule = styleSheet.cssRules[23];
    setTimeout(() => rule.style.width = '100%'
        , 1500);
};

// const inputs = document.querySelectorAll("#get-in-touch form input")

// inputs.forEach(input =>
//     input.addEventListener('change', _ =>
//         checkFormValidity()
//     )
// )

// function checkFormValidity() {
//     const form = document.querySelector("#get-in-touch form")
//     const submitButton = document.querySelector("#get-in-touch button[type='submit']")
//     if (!form.checkValidity())
//         submitButton.setAttribute('disabled', true)
//     submitButton.removeAttribute('disabled');
// }