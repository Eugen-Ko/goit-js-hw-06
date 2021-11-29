
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueSpan = document.querySelector('#value');
let counterValue = 0;
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
    console.log(valueSpan);
});
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
    console.log(valueSpan);
 });






// // Инициализация узлов
// const btnDecrement = document.querySelector("[data-action='decrement']");
// const btnIncrement = document.querySelector("[data-action='increment']");
// const value = document.querySelector("#value");

// // Мой вариант -------------------------------------
// // Слушатели + сразу обработка события 
// // работает с любым начальным значением, заданным в HTML.
// // 
// // btnDecrement.addEventListener("click", () => {
// //   value.textContent = Number(value.textContent) - 1;
// // });
// // btnIncrement.addEventListener("click", () => {
// //   value.textContent = Number(value.textContent) + 1;
// // });
// // ----------------------------------------------------

// // Вариант по условию задачи ----------------------
// let counterValue = 0;

// btnDecrement.addEventListener("click", () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });
// btnIncrement.addEventListener("click", () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// });


