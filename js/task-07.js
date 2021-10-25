// Инициализация узлов
const fontSizeControl = document.querySelector("#font-size-control");
const mutableText = document.querySelector("#text");

// Изменение размера шрифта при потере фокуса.
const changeFontSize = () => {
  mutableText.style.fontSize = `${fontSizeControl.value}px`;
  // числовое значение в консоль для контроля
  console.log(mutableText.style.fontSize);
}

// слушатели 
fontSizeControl.addEventListener("blur", changeFontSize);