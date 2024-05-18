document.querySelector("button").addEventListener('click', () => {
   let email = document.getElementById('input-login').value;
  let password = document.getElementById('input-pass').value;

  if (email === "admin@mail.ru" && password === "adminPanel52") {
    window.location.href = "../html/admin-panel.html";
} else {
  customAlert()
}
 })