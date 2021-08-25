import displayHomePage from "./home.js";
import displayMenuPage from "./menu.js";
import displayContactPage from "./contact.js";
import kebabCasefy from "./utility.js";

export default function createNav() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  const navbar = document.createElement("nav");
  navbar.id = "nav-bar";
  navContainer.appendChild(navbar);

  const homeLink = createNavLink("Home");
  navbar.appendChild(homeLink);
  homeLink.addEventListener("click", displayHomePage);

  const menuLink = createNavLink("Menu");
  navbar.appendChild(menuLink);
  menuLink.addEventListener("click", displayMenuPage);

  const contactLink = createNavLink("Contact");
  navbar.appendChild(contactLink);
  contactLink.addEventListener("click", displayContactPage);

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
