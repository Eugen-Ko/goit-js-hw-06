const inputField = document.querySelector("#validation-input");

// Изменение цвета рамки после потери фокуса
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
inputField.addEventListener("input", (event) => {
  switch (event.currentTarget.value.length) {
    case Number(inputField.getAttribute("data-length")):
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

// Не понял как напрямую без getAtribute достучаться до "data-length".
