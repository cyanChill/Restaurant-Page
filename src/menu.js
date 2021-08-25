import createNav from "./navbar";
import { kebabCasefy } from "./utility";
import { breakfastItems, lunchItems, dessertItems } from "./menuItems";

const contentContainer = document.getElementById("content");

function createMenuSection(sectionName, menuItems) {
  const menuSection = document.createElement("esction");
  menuSection.id = kebabCasefy(sectionName);
  menuSection.classList.add("meal");

  const header = document.createElement("p");
  header.classList.add("header");
  header.textContent = sectionName;
  menuSection.appendChild(header);

  const meals = document.createElement("div");
  meals.classList.add("meals");
  menuSection.appendChild(meals);
  menuItems.forEach((item) => {
    const menuItem = createMenuCard(item);
    meals.appendChild(menuItem);
  });

  return menuSection;
}

function createMenuCard(itemDescription) {
  const card = document.createElement("div");
  card.classList.add("meal-card");
  card.innerHTML = `
    <img
        src="${itemDescription.img}"
        alt="${itemDescription.name}"
        class="meal-card-img"
    />
    <div class="meal-information">
        <p class="meal-name">${itemDescription.name}</p>
        <div class="description">
        <p class="meal-description">${itemDescription.description}</p>
        <p class="price">${itemDescription.price}</p>
        </div>
    </div>
  `;

  return card;
}

export default function displayMenuPage() {
  contentContainer.innerHTML = "";
  contentContainer.appendChild(createNav());
  contentContainer.appendChild(createMenuSection("Breakfast", breakfastItems));
  contentContainer.appendChild(createMenuSection("Lunch", lunchItems));
  contentContainer.appendChild(createMenuSection("Dessert", dessertItems));

  const currentPage = document.querySelector("a[data-page='menu']");
  currentPage.classList.add("selected");
}
