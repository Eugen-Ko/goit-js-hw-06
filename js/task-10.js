// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// инициализация узлов
const controls = document.querySelector("#controls");
const amountField = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesPlace = document.querySelector("#boxes");

// Максимально допустимое колличество квадратов,
// считывается из HTML.input.max
const maxSquare = amountField.max;

// Минимально допустимое колличество квадратов,
// считывается из HTML.input.min
const minSquare = amountField.min;

// Глобальный счетчик квадратов
let globalCounter = 0;

// Создаем блок с информацией о колличестве квадратов на экране.
controls.insertAdjacentHTML("beforeend", `<span class="info"></span>`);
// Инициализируем узел этого блока
const info = controls.querySelector(".info");
// Функция обновляет колличество квадратов на экране
const showNumberOfSquare = () =>
  (info.textContent = `На экране ${globalCounter} квадратов.`);

// Функция вызывает функцию проверки/очистки строки ошибок
//  и функцию проверки корректного ввода числа
const createElements = (amount) => {
  checkedAlertStr();
  checkedNumber(amount);
};

// Функция проверки и удаления строки ошибочного ввода
const checkedAlertStr = () => {
  const errorStr = boxesPlace.querySelector(".wrongRange");
  errorStr ? errorStr.remove() : null;
};

// Функция проверяет корректность ввода числа
const checkedNumber = (amount) =>
  amount > maxSquare || amount < minSquare
    ? insertError()
    : checkMaxSquare(amount);

// Функция проверки того, что общее колличество квадратов
// не превышает максимальное значение.
const checkMaxSquare = (amount) => {
  Number(globalCounter + amount) <= maxSquare
    ? createBoxes(amount)
    : errorMaxSquare(amount);
};

// Функция выводит сообщение, что будет выведено
// (макс.значение - (сколько уже есть)) квадратов
const errorMaxSquare = (amount) => {
  boxesPlace.insertAdjacentHTML(
    "afterbegin",
    `<p class="wrongRange">Суммарное колличество квадратов будет превышать ${maxSquare} шт. По этому будет выведено ${
      maxSquare - globalCounter
    } шт. </p>`
  );
  createBoxes(maxSquare - globalCounter);
};

// Функция создает цветные квадратики
const createBoxes = (amount) => {
  for (let i = 0; i <= amount - 1; i += 1) {
    boxesPlace.insertAdjacentHTML(
      "beforeend",
      `<div class="insertedElement" style="width : ${
        (i + globalCounter) * 10 + 30
      }px;
      height : ${(i + globalCounter) * 10 + 30}px;
      background-color: ${getRandomHexColor()}"></div>`
    );
  }
  // Увеличение счетчика квадратов
  globalCounter + amount <= maxSquare
    ? (globalCounter += amount)
    : (globalCounter = maxSquare);
  // Вывод на экран колличества квадратов
  showNumberOfSquare();
  // Очистка поля ввода
  fieldClear();
};

// Функция выводит сообщение о некоректном вводе числа
// И очищает значение в поле ввода.
const insertError = () => {
  boxesPlace.insertAdjacentHTML(
    "afterbegin",
    `<p class="wrongRange">Не допустимое значение!!! Введите число от "${minSquare}" до "${maxSquare}".</p>`
  );
  // Очистка поля ввода
  fieldClear();
};

// Функция выводит общее колличество квадратов на экране
const howManySquares = () => {};

// Функция очистки поля ввода
const fieldClear = () => (amountField.value = "");

// Функция удаляет все ранее созданные элементы,
// как квадратики так и сообщение об ошибке ввода.
const destroyElements = () => {
  boxesPlace.innerHTML = "";
  globalCounter = 0;
  info.textContent = "";
};

// слушатель на "Сreate".
createBtn.addEventListener("click", () => {
  createElements(amountField.valueAsNumber);
});

// // слушатель на "Destroy"
destroyBtn.addEventListener("click", destroyElements);

// ---------------------------------------------------------------------------
// Старый вариант
// ---------------------------------------------------------------------------

// // Функция вызывает функцию очистки всех ранее созданных элементов
// //  и функцию проверки корректного ввода числа
// const createElements = (amount) => {
//   destroyElements();
//   checkedNumber(amount);
// };

// // Функция удаляет все ранее созданные элементы,
// // как квадратики так и сообщение об ошибке ввода.
// const destroyElements = () => {

//   // Удаление через childrend + remove
//   // ---------------------------------
//   // const numberOfElements = boxesPlace.children.length;
//   // for (let i = 0; i < numberOfElements; i += 1) {
//   //   boxesPlace.querySelector(".insertedElement").remove();
//   // }
//   // ---------------------------------
//   boxesPlace.innerHTML = "";

// };

// // Функция проверяет корректность ввода числа
// const checkedNumber = (amount) =>
//   amount > 100 || amount < 1 ? insertError() : createBoxes(amount);

// // Функция выводит сообщение о некоректном вводе числа
// // И очищает значение в поле ввода.

// const insertError = () => {

//   boxesPlace.insertAdjacentHTML(
//     "beforeend",
//     '<p class="insertedElement">Не допустимое значение!!! Введите число от "1" до "100".</p>'
//   );

//   amountField.value = "";

// };

// // Функция создает цветные квадратики
// const createBoxes = (amount) => {
//   for (let i = 0; i <= amount - 1; i += 1) {
//     boxesPlace.insertAdjacentHTML(
//       "beforeend",
//       `<div class="insertedElement" style="width : ${i * 10 + 30}px;
//       height : ${i * 10 + 30}px;
//       background-color: ${getRandomHexColor()}"></div>`
//     );
//   }
// };

// // слушатели --------------
// // слушатель на "Сreate".
// createBtn.addEventListener("click", () => {
//   createElements(amountField.value);
// });
// // слушатель на "Destroy"
// destroyBtn.addEventListener("click", destroyElements);
