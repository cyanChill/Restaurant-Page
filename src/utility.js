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

export { kebabCasefy, selectCurrentPage };
