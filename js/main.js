const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": {
    route: "/html/portfolio.html",
    script: runPortfolioScript,
  },
  "/shop": {
    route: "/html/shop.html",
    script: runShopScript,
  },
};

const handleLocation = async () => {
  const path = window.location.pathname;
  if (!routes[path]) return;
  const route = routes[path].route;
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("dynamic-page").innerHTML = html;
  routes[path].script();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
function runShopScript() {
  document.title = "vogel's shop";
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  html.classList.add("shop-display");
  body.classList.add("shop-display");
}

function runPortfolioScript() {
  document.title = "vogel's portfolio";
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  html.classList.remove("shop-display");
  body.classList.remove("shop-display");
  const menuTogglers = document.querySelectorAll(".navbar-toggler");
  const drawer = document.querySelector(".navbar-drawer");

  // Enables the navigation menu
  menuTogglers.forEach((toggler) =>
    toggler.addEventListener("click", () => drawer.toggleAttribute("enabled"))
  );

  const navbarLinks = document.querySelectorAll(".navbar-links");

  // Closes the drawer on link click event
  navbarLinks.forEach((link) =>
    link.addEventListener("click", function () {
      if (drawer.attributes.getNamedItem("enabled"))
        drawer.attributes.removeNamedItem("enabled");
      else return;
    })
  );

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
    ...document.querySelectorAll("section h2"),
    ...document.querySelectorAll(".grid-item > div"),
    ...document.querySelectorAll("#get-in-touch > *"),
    ...document.querySelectorAll("hr:not(:last-of-type)"),
    ...document.querySelectorAll(".client-container"),
  ];

  elements.forEach((element) => observer.observe(element));

  // Disabling right click on hero GIF
  const video = document.querySelector(".hero-avatar video");
  video.addEventListener("contextmenu", (e) => e.preventDefault());

  // Shorts
  const shortsVideo = document.querySelectorAll("#shorts video");
  shortsVideo.forEach((video) => {
    video.addEventListener("fullscreenchange", () => {
      video.classList.toggle("contained");
    });
  });
  video.addEventListener("fullscreenchange", (e) => e.preventDefault());

  // Loader
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    window.scrollTo({ top: 0 });
    loader.classList.toggle("hidden");
  }, 1500);

  // Blue line animation
  const styleSheet = document.styleSheets[0];
  const rule = styleSheet.cssRules[22];

  setTimeout(
    () => (rule.style.width = screen.width < 445 ? "7ch" : "100%"),
    3500
  );

  // Handle contact form
  var form = document.getElementById("contact-form");
  var submitButton = document.getElementById("submit-button");

  async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          submitButton.innerHTML = "Submitted";
          submitButton.classList.add("submitted");
        } else {
          response.json().then((data) => console.log(data));
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);

  // On reloading, it navigates to index.html
  if (location.href.includes("#")) location.assign("/");
}
