// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Инициализация узлов
const changeBodyColor = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

// Слушатель
btnChange.addEventListener("click", () => {
  outputColor.textContent = getRandomHexColor();
  changeBodyColor.style.backgroundColor = outputColor.textContent;
});
