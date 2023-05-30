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


function registro(){
    var user = [
        document.getElementById("username").value,
        document.getElementById("useremail").value,
        document.getElementById("inputPassword5").value,
        document.getElementById("inputPassword6").value,
    ]


    var tieneLetras = /[a-zA-Z]/.test(user[2]); // Comprueba si contiene letras
    var tieneNumeros = /\d/.test(user[2]); // Comprueba si contiene números

    var padreMensaje1 = document.getElementById("password")
    if (tieneNumeros==true && tieneLetras==true){
        // var mensaje = document.createTextNode("las contraseña es valida")
        padreMensaje1.style.color = "green";
        padreMensaje1.innerHTML = "<h5> es valido </h5>";
    } else {
        // var mensaje = document.createTextNode("las contraseña NO ES VALIDA")
        padreMensaje1.style.color = "red";
        padreMensaje1.innerHTML = "es no valido";
    }

    var padreMensaje2 = document.getElementById("password2")
    if(user[2]===user[3]){
        // var mensaje = document.createTextNode("las contraseñas coinciden")
        padreMensaje2.style.color = "green";
        padreMensaje2.innerHTML = "es valido";
    }else {
        // var mensaje = document.createTextNode("las contraseñas NO coinciden")
        padreMensaje2.style.color = "red";
        padreMensaje2.innerHTML = "es no valido";
    }

}
