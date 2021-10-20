const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayTag = [];


ingredients.forEach((elem, index) => {
  const temp = (document.createElement("li"));
  temp.textContent = ingredients[index];
  temp.className = "item";
  arrayTag.push(temp);
});

document.querySelector("#ingredients").append(...arrayTag);
console.log(...arrayTag);
