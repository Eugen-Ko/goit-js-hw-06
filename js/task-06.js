const inputField = document.querySelector("#validation-input");

const checkLength = () =>
  inputField.value.length === Number(inputField.getAttribute("data-length"))
    ? (inputField.className = "valid")
    : (inputField.className = "invalid");

inputField.addEventListener("blur", checkLength);

// Не понял как по простому достучаться до "data-length".
