export default function createNav() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  navContainer.innerHTML = `
    <nav id="nav-bar">
      <a class="nav-link" data-page="home">Home</a>
      <a class="nav-link" data-page="menu">Menu</a>
      <a class="nav-link" data-page="contact">Contact</a>
    </nav>
  `;

  return navContainer;
}
