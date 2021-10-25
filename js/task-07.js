// Инициализация узла
const fontSizeControl = document.querySelector("#font-size-control");

// Изменение размера шрифта при потере фокуса
// с прописыванием инлайн стиля физически
// ---------------------------------------------
// const changeFontSize = () => {
//   const mutableText = document.querySelector("#text");
//   mutableText.insertAdjacentHTML('afterend', `<span id="text" style="font-size: ${fontSizeControl.valueAsNumber}px">Abracadabra!</span>`);
//   mutableText.remove();
// }
// ---------------------------------------------

// Изменение размера шрифта при потере фокуса
// с изменением свойства атрибута
// ---------------------------------------------------
const mutableText = document.querySelector("#text");

const changeFontSize = () => {
  mutableText.style.fontSize = `${fontSizeControl.value}px`;
}
// ---------------------------------------------------

// слушатели 
fontSizeControl.addEventListener("blur", changeFontSize);

// Как-то не уверен в решении, но как достучаться к span.style.fontSize - не придумал.