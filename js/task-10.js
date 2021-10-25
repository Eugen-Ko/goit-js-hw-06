// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//
const amountField = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesPlace = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes(amountField.value));

function createBoxes(amount) {
  console.log(amount);

  console.log("ggggggggggggggggg");
  return;
}

// let counter = 0;

// const createBoxes = (amount) => {
//   console.log(amount);
//   //   for (let i = 0; i <= amount; i += 1) {
//   //     boxesPlace.insertAdjacentHTML("beforeend",`<div  style="width : 30px; height : 30px; background-color: ${getRandomHexColor()}"></div>`)
//   //   }
// };

// createBtn.addEventListener("click", console.log(amountField.valueAsNumber));
// createBtn.addEventListener("click", destroyBox());

// incorrect value. Values ​​range from 1 to 100
