import { selectCurrentPage } from "./utility";

function createWelcoming() {
  const header = document.createElement("header");
  header.id = "welcoming";

  header.innerHTML = `
    <div class="text-logo">
        <span class="miniturize">MINITURIZED</span>
        <span>FOODS</span></div>
    <p class="tag-line">The best Instagrammable foods</p>
  `;

  return header;
}

function createBusinessHours() {
  const section = document.createElement("section");
  section.id = "business-hours";
  section.innerHTML = `
    <div class="hours-bkg"></div>
    <i class="fas fa-calendar-alt header"></i>
    <p class="header">Hours</p>
    <div id="day">
      <p>Mon</p>
      <p>Tue</p>
      <p>Wed</p>
      <p>Thu</p>
      <p>Fri</p>
      <p>Sat</p>
      <p>Sun</p>
    </div>
    <div id="hours">
      <p>12pm-6pm</p>
      <p>Closed</p>
      <p>12pm-6pm</p>
      <p>Closed</p>
      <p>12pm-4pm</p>
      <p>2pm-6pm</p>
      <p>2pm-6pm</p>
    </div>
  `;

  return section;
}

function createSocials() {
  const section = document.createElement("section");
  section.id = "socials";

  section.innerHTML = `
    <p>Socials</p>
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
  `;

  return section;
}

export default function displayHomePage() {
  const contentContainer = document.getElementById("page-content");

  contentContainer.innerHTML = "";
  contentContainer.appendChild(createWelcoming());
  contentContainer.appendChild(createBusinessHours());
  contentContainer.appendChild(createSocials());

  const heroImg = document.createElement("img");
  heroImg.classList.add("hero-img");
  heroImg.src = "./img/tiny_fruit_tart.png";
  heroImg.alt = "tiny fruit tart";
  contentContainer.appendChild(heroImg);

  selectCurrentPage("home");
}
