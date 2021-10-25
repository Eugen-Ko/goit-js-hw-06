// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 
const controls = document.querySelector("#controls").children;
const amountField = controls[0];
const createBtn = controls[1];
const destroyBtn = controls[2];
const boxesPlace = document.querySelector("#boxes");

let counter = 0;

const createBoxes = (amount) => {
  console.log(amount);
  for (let i = 0; i <= amount; i += 1) {
    boxesPlace.insertAdjacentHTML("beforeend",`<div  style="width : 30px; height : 30px; background-color: ${getRandomHexColor()}"></div>`)
  }
}



createBtn.addEventListener("click", createBoxes(amountField.textContent));
// createBtn.addEventListener("click", destroyBox());





