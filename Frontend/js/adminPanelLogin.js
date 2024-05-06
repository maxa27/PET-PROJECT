document.querySelector("form").addEventListener('click', (e) => {
  let email = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  const fields = [
    {
      id: "login",
      errorId: "login_error",
      message: "Логин обязателен для заполнения",
    },
    {
      id: "password",
      errorId: "password_error",
      message: "Пароль обязателен для заполнения",
    }
  ];

  let isValid = true;

  fields.forEach((field) => {
    const value = document.querySelector(`#${field.id}`).value;
    const error = document.querySelector(`#${field.errorId}`);

    if (value === "" || value === null) {
      e.preventDefault();
      error.innerHTML = field.message;
      isValid = false;
    } else {
      error.innerHTML = "";
    }
  });

  if (isValid) {
    // Проверка логина и пароля
    if (email === "admin@mail.ru" && password === "adminPanel52") {
        window.location.href = "../html/admin-panel.html";
    } else {
        alert("Неправильный логин или пароль!");
    }
}

 })