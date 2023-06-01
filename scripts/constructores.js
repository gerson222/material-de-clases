function msjAlert(contenido, ubicacion, id) {
  var elemento = document.createElement("div");
  elemento.textContent = contenido;

  if (id) {
    elemento.id = id;
  }

  if (ubicacion instanceof Element) {
    ubicacion.appendChild(elemento);
  } else if (typeof ubicacion === "string") {
    var padre = document.querySelector(ubicacion);
    if (padre) {
      padre.appendChild(elemento);
    } else {
      console.error("Ubicación no encontrada");
    }
  } else {
    console.error("Parámetro de ubicación inválido");
  }
}

var padre = document.getElementById("id_padre")
msjAlert("texto", padre, "prueba id")


function registro() {
  var user = {
      username: document.getElementById("username").value,
      useremail: document.getElementById("useremail").value,
      password: document.getElementById("inputPassword5").value,
      confirmPassword: document.getElementById("inputPassword6").value
  };

  var tieneLetras = /[a-zA-Z]/.test(user.password);
  var tieneNumeros = /\d/.test(user.password);

  var padreMensaje1 = document.getElementById("password");
  if (tieneNumeros && tieneLetras) {
      padreMensaje1.style.color = "green";
      padreMensaje1.innerHTML = "<h5>Es válido</h5>";
  } else {
      padreMensaje1.style.color = "red";
      padreMensaje1.innerHTML = "No es válido";
  }

  var padreMensaje2 = document.getElementById("password2");
  if (user.password === user.confirmPassword) {
      padreMensaje2.style.color = "green";
      padreMensaje2.innerHTML = "Es válido";
      // Guardar los datos en un archivo JSON
      var jsonData = JSON.stringify(user);
      guardarEnArchivo(jsonData); // Esta función guarda los datos en un archivo
  } else {
      padreMensaje2.style.color = "red";
      padreMensaje2.innerHTML = "No es válido";
  }
}

function guardarEnArchivo(data) {
  var jsonData = JSON.stringify(data);
  var blob = new Blob([jsonData], { type: "application/json" });

  // Definir la ruta relativa del archivo JSON
  var jsonFilePath = '../json/usuario.json';

  // Crear un enlace de descarga
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = jsonFilePath;

  // Agregar el enlace de descarga al documento
  document.body.appendChild(a);

  // Hacer clic en el enlace para iniciar la descarga del archivo
  a.click();

  // Eliminar el enlace del documento
  document.body.removeChild(a);
}



function tema() {
  var elementos = document.body.getElementsByTagName("*");

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];

    // Verifica si el elemento contiene texto
    if (elemento.classList.contains("oscuro")) {
      // Si contiene texto, agrega la clase "claro" y remueve la clase "oscuro"
      elemento.classList.add("claro");
      elemento.classList.remove("oscuro");
    } else {
      // Si no contiene texto, agrega la clase "oscuro" y remueve la clase "claro"
      elemento.classList.add("oscuro");
      elemento.classList.remove("claro");
    }
  }
}