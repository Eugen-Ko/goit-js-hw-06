// Инициализация узлов
const fontSizeControl = document.querySelector("#font-size-control");

// Изменение размера шрифта при потере фокуса.
const changeFontSize = () => {
  const mutableText = document.querySelector("#text");
  mutableText.insertAdjacentHTML('afterend', `<span id="text" style="font-size: ${fontSizeControl.valueAsNumber}px">Abracadabra!</span>`);
  mutableText.remove();
}

// слушатели 
fontSizeControl.addEventListener("blur", changeFontSize);

// Как-то не уверен в решении, но как достучаться к span.style.fontSize - не придумал.