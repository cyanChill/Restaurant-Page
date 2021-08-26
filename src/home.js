import { selectCurrentPage, createLinkedIcon, createIcon } from "./utility";

const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const Hours = ["12pm-6pm", "Closed", "12pm-6pm", "Closed", "12pm-4pm", "2pm-6pm", "2pm-6pm"];

function createWelcoming() {
  const header = document.createElement("header");
  header.id = "welcoming";

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("text-logo");
  header.appendChild(logoDiv);

  const logoTxt1 = document.createElement("span");
  logoTxt1.classList.add("miniturize");
  logoTxt1.textContent = "MINITURIZED";
  logoDiv.appendChild(logoTxt1);

  const logoTxt2 = document.createElement("span");
  logoTxt2.textContent = "Foods";
  logoDiv.appendChild(logoTxt2);

  const tagline = document.createElement("p");
  tagline.classList.add("tag-line");
  tagline.textContent = "The best Instagrammable foods";
  logoDiv.appendChild(tagline);

  return header;
}

function createBusinessHours() {
  const section = document.createElement("section");
  section.id = "business-hours";

  const hoursBkg = document.createElement("div");
  hoursBkg.classList.add("hours-bkg");
  section.appendChild(hoursBkg);

  let dayHeader = createIcon("fas fa-calendar-alt");
  dayHeader.classList.add("header");
  section.appendChild(dayHeader);

  let hourHeader = document.createElement("p");
  hourHeader.classList.add("header");
  hourHeader.textContent = "Hours";
  section.appendChild(hourHeader);

  const dayDiv = document.createElement("div");
  dayDiv.id = "day";
  section.appendChild(dayDiv);

  Days.forEach((day) => {
    const p = document.createElement("p");
    p.textContent = day;
    dayDiv.appendChild(p);
  });

  const hourDiv = document.createElement("div");
  hourDiv.id = "hours";
  section.appendChild(hourDiv);

  Hours.forEach((hour) => {
    const p = document.createElement("p");
    p.textContent = hour;
    hourDiv.appendChild(p);
  });

  return section;
}

function createSocials() {
  const section = document.createElement("section");
  section.id = "socials";

  const sectionTitle = document.createElement("p");
  sectionTitle.textContent = "Socials";
  section.appendChild(sectionTitle);
  section.appendChild(createLinkedIcon("#", "fab fa-facebook"));
  section.appendChild(createLinkedIcon("#", "fab fa-instagram"));
  section.appendChild(createLinkedIcon("#", "fab fa-twitter"));

  return section;
}

export default function displayHomePage() {
  const contentContainer = document.getElementById("page-content");

  contentContainer.textContent = "";
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
