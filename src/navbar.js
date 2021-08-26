import displayHomePage from "./home.js";
import displayMenuPage from "./menu.js";
import displayContactPage from "./contact.js";
import { kebabCasefy } from "./utility.js";

function createNav() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  const navbar = document.createElement("nav");
  navbar.id = "nav-bar";
  navContainer.appendChild(navbar);

  const homeLink = createNavLink("Home");
  navbar.appendChild(homeLink);
  homeLink.addEventListener("click", () => {
    displayHomePage();
    highlightSelected();
  });

  const menuLink = createNavLink("Menu");
  navbar.appendChild(menuLink);
  menuLink.addEventListener("click", () => {
    displayMenuPage();
    highlightSelected();
  });

  const contactLink = createNavLink("Contact");
  navbar.appendChild(contactLink);
  contactLink.addEventListener("click", () => {
    displayContactPage();
    highlightSelected();
  });

  return navContainer;
}

function createNavLink(content) {
  const anchor = document.createElement("a");
  anchor.textContent = content;
  anchor.classList.add("nav-link");
  anchor.href = "#";
  anchor.setAttribute("data-page", kebabCasefy(content));

  return anchor;
}

function addNavAnimation() {
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
}

export { createNav, addNavAnimation };
