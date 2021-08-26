import { kebabCasefy, selectCurrentPage } from "./utility";
import { breakfastItems, lunchItems, dessertItems } from "./menuItems";

function createMenuSection(sectionName, menuItems) {
  const menuSection = document.createElement("section");
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

  const foodImg = document.createElement("img");
  foodImg.classList.add("meal-card-img");
  foodImg.src = itemDescription.img;
  foodImg.alt = itemDescription.name;
  card.appendChild(foodImg);

  const mealInfo = document.createElement("div");
  mealInfo.classList.add("meal-information");
  card.appendChild(mealInfo);

  const mealName = document.createElement("p");
  mealName.classList.add("meal-name");
  mealName.textContent = itemDescription.name;
  mealInfo.appendChild(mealName);

  const mealDescriptionContainer = document.createElement("div");
  mealDescriptionContainer.classList.add("description");
  mealInfo.appendChild(mealDescriptionContainer);

  const mealDescription = document.createElement("p");
  mealDescription.classList.add("meal-description");
  mealDescription.textContent = itemDescription.description;
  mealDescriptionContainer.appendChild(mealDescription);

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = itemDescription.price;
  mealDescriptionContainer.appendChild(price);

  return card;
}

export default function displayMenuPage() {
  const contentContainer = document.getElementById("page-content");

  contentContainer.textContent = "";
  contentContainer.appendChild(createMenuSection("Breakfast", breakfastItems));
  contentContainer.appendChild(createMenuSection("Lunch", lunchItems));
  contentContainer.appendChild(createMenuSection("Dessert", dessertItems));

  selectCurrentPage("menu");
}
