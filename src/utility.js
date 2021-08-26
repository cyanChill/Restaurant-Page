function kebabCasefy(str) {
  return str.toLowerCase().replace(/\s/g, "-");
}

function selectCurrentPage(page) {
  const currLink = kebabCasefy(page);
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach((link) => link.classList.remove("selected"));
  const currentPage = document.querySelector(`a[data-page="${currLink}"]`);
  currentPage.classList.add("selected");
}

function createLinkedIcon(link, iconClass) {
  const anchor = document.createElement("a");
  anchor.href = link;

  anchor.appendChild(createIcon(iconClass));

  return anchor;
}

function createIcon(iconClass) {
  const icon = document.createElement("i");
  icon.classList = iconClass;

  return icon;
}

export { kebabCasefy, selectCurrentPage, createLinkedIcon, createIcon };
