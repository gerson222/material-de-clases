// Variables globales
const carrito = [];

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(event) {
  const boton = event.target;
  const id = boton.getAttribute('data-id');
  const nombre = boton.getAttribute('data-nombre');
  const precio = parseFloat(boton.getAttribute('data-precio'));

  const producto = { id, nombre, precio };
  carrito.push(producto);

  mostrarMensaje(`Producto "${nombre}" agregado al carrito`);
  actualizarCarrito();
}

// Función para mostrar un mensaje
function mostrarMensaje(mensaje) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
}

// Función para actualizar el carrito de compras en el HTML
function actualizarCarrito() {
  const carritoUL = document.getElementById('mostrar');
  carritoUL.innerHTML = '';

  for (const producto of carrito) {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - Precio: ${producto.precio}`;

    carritoUL.appendChild(li);
  }
}

// Evento para agregar productos al carrito
const agregarCarritoBotones = document.querySelectorAll('.agregar-carrito');
agregarCarritoBotones.forEach(boton => {
  boton.addEventListener('click', agregarProductoAlCarrito);
});
