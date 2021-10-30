// Инициализация узлов
const refs = {
  loginForm: document.querySelector(".login-form"),
  email: document.querySelector(".login-form input[name='email']"),
  password: document.querySelector(".login-form input[name='password']"),
  button: document.querySelector(".login-form button"),
};

refs.loginForm.addEventListener("submit", onFormSubmit);

// Обработка события сабмит
function onFormSubmit(event) {
  // отмена перегрузки страницы
  event.preventDefault();

  // Проверка пустых полей
  if (!checkField(refs)) return;

  // Создание объекта
  const resObject = {
    email: refs.loginForm.elements[0].value,
    password: refs.loginForm.elements[1].value,
  };

  // вывод в консоль
  console.log(resObject);

  // очиста полей формы
  refs.loginForm.reset();
}

function checkField({ email, password }) {
  if (email.value === "") {
    alert("Поле Email не заполнено !!!");
    return false;
  }
  if (password.value === "") {
    alert("Поле Password не заполнено !!!");
    return false;
  }
  return true;
}
new Map();
