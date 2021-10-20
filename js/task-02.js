const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayTag = ingredients.map(element => {const temp = document.createElement("li");
   temp.textContent = element;
   temp.className = "item";
   return temp});

document.querySelector("#ingredients").append(...arrayTag);

console.log(...arrayTag);
