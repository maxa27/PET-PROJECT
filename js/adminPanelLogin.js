function validateLogin() {
  let email = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  // Проверка логина и пароля
  if(email || password === '') {
    alert("Пожалуйста заполните все поля!")
  }
  if (email === "admin@mail.ru" && password === "admin1234") {
    alert("Вы успешно вошли в админ панель!");
    window.location.href = "admin-panel.html";
  } else {
    alert("Неправильный логин или пароль!");
  }
}
