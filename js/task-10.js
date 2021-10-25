// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 
const amountField = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesPlace = document.querySelector("#boxes");

let counter = 0;

const createBoxes = (amount) => {
  console.log(amount);
  for (let i = 0; i <= amount; i += 1) {
    boxesPlace.insertAdjacentHTML("beforeend",`<div  style="width : ${i * 10 + 30}px; height : ${i * 10 + 30}px; background-color: ${getRandomHexColor()}"></div>`)
  }
}



createBtn.addEventListener("click", createBoxes(Number(amountField.textContent)));
// createBtn.addEventListener("click", destroyBox());





