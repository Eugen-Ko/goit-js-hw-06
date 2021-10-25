// Инициализация узла
const fontSizeControl = document.querySelector("#font-size-control");

// Изменение размера шрифта при потере фокуса
// с прописыванием инлайн стиля физически
// ---------------------------------------------
// fontSizeControl.addEventListener("blur", () => {
//   const mutableText = document.querySelector("#text");
//   mutableText.insertAdjacentHTML(
//     "afterend",
//     `<span id="text" style="font-size: ${fontSizeControl.valueAsNumber}px">Abracadabra!</span>`
//   );
//   mutableText.remove();
// });
// ---------------------------------------------

// Изменение размера шрифта при потере фокуса
// с изменением свойства атрибута
// ---------------------------------------------
// const mutableText = document.querySelector("#text");
// fontSizeControl.addEventListener("blur", () => {
//   mutableText.style.fontSize = `${fontSizeControl.value}px`;
// });
// ---------------------------------------------

// Изменение размера шрифта "онлайн"
const mutableText = document.querySelector("#text");
fontSizeControl.addEventListener("input", (event) => {
  mutableText.style.fontSize = `${event.currentTarget.value}px`;
});
