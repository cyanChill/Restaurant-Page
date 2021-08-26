/* Master File that loads files in and deals with click events? */
import { createNav, addNavAnimation } from "./navbar.js";
import displayHomePage from "./home.js";

const contentContainer = document.getElementById("content");

(function () {
  const pageContent = document.createElement("main");
  pageContent.id = "page-content";
  contentContainer.appendChild(pageContent);

  contentContainer.insertBefore(createNav(), pageContent);
  displayHomePage();
  addNavAnimation();
})();
