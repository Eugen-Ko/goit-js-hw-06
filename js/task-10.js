// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// инициализация узлов
const amountField = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesPlace = document.querySelector("#boxes");

// Функция вызывает функцию очистки всех ранее созданных элементов
//  и функцию проверки корректного ввода числа
const createElements = (amount) => {
  destroyElements();
  checkedNumber(amount);
};

// Функция удаляет все ранее созданные элементы,
// как квадратики так и сообщение об ошибке ввода.
const destroyElements = () => {

  // Удаление через childrend + remove
  // ---------------------------------
  // const numberOfElements = boxesPlace.children.length;
  // for (let i = 0; i < numberOfElements; i += 1) {
  //   boxesPlace.querySelector(".insertedElement").remove();
  // }
  // ---------------------------------
  boxesPlace.innerHTML = "";

};

// Функция проверяет корректность ввода числа
const checkedNumber = (amount) =>
  amount > 100 || amount < 1 ? insertError() : createBoxes(amount);

// Функция выводит сообщение о некоректном вводе числа
// И очищает значение в поле ввода.

const insertError = () => {
  
  boxesPlace.insertAdjacentHTML(
    "beforeend",
    '<p class="insertedElement">Не допустимое значение!!! Введите число от "1" до "100".</p>'
  );
  
  amountField.value = "";

};

// Функция создает цветные квадратики
const createBoxes = (amount) => {
  for (let i = 0; i <= amount - 1; i += 1) {
    boxesPlace.insertAdjacentHTML(
      "beforeend",
      `<div class="insertedElement" style="width : ${i * 10 + 30}px; 
      height : ${i * 10 + 30}px; 
      background-color: ${getRandomHexColor()}"></div>`
    );
  }
};

// слушатели --------------
// слушатель на "Сreate".
createBtn.addEventListener("click", () => {
  createElements(amountField.value);
});
// слушатель на "Destroy"
destroyBtn.addEventListener("click", destroyElements);
