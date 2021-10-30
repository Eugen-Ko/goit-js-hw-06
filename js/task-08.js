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

  // !!!!! Создание объекта через FormData
  // ---------------------------------------------------------
  const resObject = new FormData(event.currentTarget);
  // Вывод объекта в консоль
  resObject.forEach((value, name) => {
    console.log(`field ${name} = ${value}`);
  });
  // ---------------------------------------------------------

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
