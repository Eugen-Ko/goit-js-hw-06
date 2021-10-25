const loginForm = document.querySelector(".login-form");
const email = loginForm.querySelector("input[name='email']");
const password = loginForm.querySelector("input[name='password']");
const button = document.querySelector(".login-form button");

console.log(loginForm);
console.log({ email });
console.log(password);
console.log(`${button.type}`);
// button.type = "button";
console.log(`${button.type}`);

const submit = () => {
  if (email.validity.valid) {
    console.log(email.value);
    console.log(password.value);
    button.type = "button";
  } else {
    email.value = "Адрес введен не корректно";
  }
  if (email.value === "" || password.value === "") {
    loginForm.insertAdjacentHTML("afterend", "поля не заполнены");
  }
  
  if (password.value === "") password.value = "Заполни пароль";
  // email.value =
  const userForm {
    email : email.value;
    password : password.value;
  }

};

button.addEventListener("click", submit);
