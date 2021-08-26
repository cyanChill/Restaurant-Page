/* Master File that loads files in and deals with click events? */
import displayHomePage from "./home.js";
import displayMenuPage from "./menu.js";
import displayContactPage from "./contact.js";

displayHomePage();

const homeLink = document.querySelector("a[data-page='home']");
const menuLink = document.querySelector("a[data-page='menu']");
const contactLink = document.querySelector("a[data-page='contact']");

homeLink.addEventListener("click", () => {
  displayHomePage();
  highlightSelected();
});
menuLink.addEventListener("click", () => {
  displayMenuPage();
  highlightSelected();
});
contactLink.addEventListener("click", () => {
  displayContactPage();
  highlightSelected();
});

/* Smooth border-bottom transition */
const navbar = document.getElementById("nav-bar");
const navLinks = document.querySelectorAll("#nav-bar > a");

// Make our own highlight element
const highlight = document.createElement("span");
highlight.classList.add("highlight");
navbar.append(highlight);

function highlightLink() {
  highlightItem(this);
}

function highlightSelected() {
  const selectedElement = document.querySelector("a.selected");
  highlightItem(selectedElement);
}

function highlightItem(item) {
  const navLocation = navbar.getBoundingClientRect(); // Gives us where the navbar is on the page
  const linkCoords = item.getBoundingClientRect(); // Gives us where the element is on the page

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top - navLocation.top + window.scrollY,
    left: linkCoords.left - navLocation.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

(function () {
  highlight.style.opacity = 0;
  highlightSelected();
  highlight.addEventListener("transitionend", () => {
    highlight.style.opacity = 1;
  });
})();

navLinks.forEach((a) => a.addEventListener("mouseenter", highlightLink));
navLinks.forEach((a) => a.addEventListener("mouseleave", highlightSelected));
window.addEventListener("resize", highlightSelected);
