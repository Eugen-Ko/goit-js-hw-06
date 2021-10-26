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

const createBoxes = () => {
  for (let i = 1; i <= amountField.value; i += 1) {
    boxesPlace.insertAdjacentHTML("beforeend", `<div  class="box${i}" style="width : ${i * 10 + 30}px; height : ${i * 10 + 30}px; background-color: ${getRandomHexColor()}"></div>`)
  }
  counter + amountField.value <= 100 ? counter += amountField.value : counter = 100;
}

const destroyBoxes = () => {
  for (let i = amountField.value; i > 0; i -= 1) {
    document.querySelector(`.box${i}`).remove();
  }
  counter - amountField.value >= 0 ? counter -= amountField.value : counter = 0;
}

  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);



// let counter = 0;

// const createBoxes = (amount) => {
//   console.log(amount);
    // for (let i = 0; i <= amount; i += 1) {
    //   boxesPlace.insertAdjacentHTML("beforeend",`<div  style="width : 30px; height : 30px; background-color: ${getRandomHexColor()}"></div>`)
    // }
// };

// createBtn.addEventListener("click", console.log(amountField.valueAsNumber));
// createBtn.addEventListener("click", destroyBox());

// incorrect value. Values ​​range from 1 to 100
