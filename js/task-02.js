const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayTag = [];

ingredients.forEach(element => {arrayTag.push(document.createElement("li").textContent = " " + element)})

// Здесь элементы передаются одной строкой и выводятся в одну строку в HTML
// Не могу придумать как при такой записи сделать перенос на следующую строку.
document.querySelector("#ingredients").append([...arrayTag]);

// -------------------------------------------
// Это просто разделитель
document.querySelector("#ingredients").append(document.createElement("p"));
// -------------------------------------------


//Что бы элементы располагались в столбик, как показано ниже.
arrayTag.forEach(element => {
  document.querySelector("#ingredients").append(document.createElement("br"));
  document.querySelector("#ingredients").append(element);
});
