var intentos = 0;
var bloqueado = false;

function login() {
  var mensajeElement = document.getElementById("mensaje");
  mensajeElement.textContent = "";

  if (bloqueado) {
    mensajeElement.textContent =
      "Usuario bloqueado. Por favor, intenta más tarde.";
    return;
  }

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    mensajeElement.textContent = "Las contraseñas no coinciden.";
    return;
  }

  if (username === "admin" && password === "password") {
    mensajeElement.textContent = "Inicio de sesión exitoso.";
    intentos = 0;
  } else {
    mensajeElement.textContent = "Credenciales incorrectas.";
    intentos++;

    if (intentos === 3) {
      mensajeElement.textContent =
        "Has alcanzado el límite de intentos. Usuario bloqueado.";
      bloqueado = true;
    }
  }
}
