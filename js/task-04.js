// Инициализация узлов
const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

// Слушатели
btnDecrement.addEventListener("click", () => {
  value.textContent = Number(value.textContent) - 1;
});
btnIncrement.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 1;
});
