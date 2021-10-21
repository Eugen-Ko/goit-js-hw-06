// Инициализация узлов
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Изменение Имени по нажатию на "ENTER"
const changeNameByEnter = ({key}) => {
  key === "Enter" ? nameOutput.textContent = nameInput.value : nameOutput.textContent;
  nameInput.value === "" ? nameOutput.textContent = "Anonymous" : nameOutput.textContent;
}

// Изменение Имени при потере фокуса.
const changeNameByBlur = () => {
  nameInput.value === "" ? nameOutput.textContent = "Anonymous" : nameOutput.textContent = nameInput.value;
}

// слушатели 
nameInput.addEventListener("keydown", changeNameByEnter);
nameInput.addEventListener("blur", changeNameByBlur);
