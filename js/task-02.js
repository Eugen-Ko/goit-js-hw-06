const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Инициализация узла
const ingridients = document.querySelector("#ingredients");

const makeArrayTag = ingredientsList => {
  return ingredientsList.map(ingredient => {
    const ingredientLi = document.createElement("li");
    ingredientLi.textContent = ingredient;
    ingredientLi.className = "item";
    return ingredientLi});
}

const arrayTag = makeArrayTag(ingredients);

ingridients.append(...arrayTag);

console.log(...arrayTag);
