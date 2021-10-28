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
  return ingredientsList.map(ingredientEl => {
    const ingredientLi = document.createElement("li");
    ingredientLi.textContent = ingredientEl;
    ingredientLi.className = "item";
    return ingredientLi});
}

const arrayTag = makeArrayTag(ingredients);

ingridients.append(...arrayTag);

console.log(...arrayTag);
