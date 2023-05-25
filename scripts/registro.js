function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showError("Las contraseñas no coinciden.");
    return;
  }

  if (!isPasswordValid(password)) {
    showError("La contraseña no cumple con los requisitos.");
    return;
  }

  if (!isEmailValid(email)) {
    showError("El correo electrónico no es válido.");
    return;
  }

  // Realizar el procesamiento adicional, como enviar los datos al servidor, almacenar en una base de datos, etc.

  showSuccess("Registro exitoso.");
}

function showError(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function showSuccess(message) {
  const successElement = document.getElementById("success");
  successElement.textContent = message;
  successElement.style.display = "block";
}

function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
