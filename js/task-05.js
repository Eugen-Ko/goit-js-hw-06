// Инициализация узлов
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// При загрузке сразу фокусируем на поле ввода.
nameInput.focus();

// Изменение Имени при нажатиии "Enter".
// nameInput.addEventListener("keydown", ({ key }) => {
//   key === "Enter"
//     ? (nameOutput.textContent = nameInput.value)
//     : nameOutput.textContent;
//   nameInput.value === ""
//     ? (nameOutput.textContent = "Anonymous")
//     : nameOutput.textContent;
// });

// Изменение Имени при потере фокуса.
// nameInput.addEventListener("blur", () => {
//   nameInput.value === ""
//     ? (nameOutput.textContent = "Anonymous")
//     : (nameOutput.textContent = nameInput.value);
// });

// Изменение имени "онлайн".
nameInput.addEventListener("input", (event) => {
  event.currentTarget.value !== ""
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = "Anonymous");
});
