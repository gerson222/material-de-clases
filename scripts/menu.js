const currentLocation = window.location.pathname;

// Obtener la ruta base del proyecto
const basePath = currentLocation.endsWith('/') ? currentLocation : currentLocation + '/';

// Construir la ruta relativa al archivo "menu.html" según la ubicación actual
const menuPath = basePath + 'pages/menu.html';

fetch(menuPath)
  .then((response) => response.text())
  .then((html) => {
    document.getElementById('menuContainer').innerHTML = html;
  });
