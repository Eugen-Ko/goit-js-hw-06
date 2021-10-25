// Функция генератора случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Инициализация узлов
const changeBodyColor = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

// Изменение цвета фона и вывод номера цвета в спан.
const changeBgColor = () => {
  const colorTemp = getRandomHexColor();
  changeBodyColor.style.backgroundColor = colorTemp;
  outputColor.textContent = colorTemp;
}

// Слушатель
btnChange.addEventListener("click", changeBgColor); 

