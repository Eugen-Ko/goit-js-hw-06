const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", () =>
  inputField.value.length === Number(inputField.getAttribute("data-length"))
    ? (inputField.className = "valid")
    : (inputField.className = "invalid")
);

// Не понял как напрямую без getAtribute достучаться до "data-length".
