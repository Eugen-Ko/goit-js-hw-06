const inputField = document.querySelector("#validation-input");

// Изменение цвета рамки после потери фокуса
// При нажатии на "Enter" то же самое, только другое событие + проверка
// ------------------------------------------
// inputField.addEventListener("blur", () =>
//   inputField.value.length === Number(inputField.getAttribute("data-length"))
//     ? (inputField.className = "valid")
//     : (inputField.className = "invalid")
// );
// ------------------------------------------

// Изменение цвета рамки "онлайн"
// ------------------------------------------
inputField.style.outline = "none";
inputField.addEventListener("input", (even) => {
  switch (even.currentTarget.value.length) {
    case Number(inputField.attributes[2].textContent):
      inputField.className = "valid";
      break;
    case 0:
      inputField.className = "";
      break;
    default:
      inputField.className = "invalid";
  }
});
// ------------------------------------------

// Не понял как напрямую достучаться до "data-length".
