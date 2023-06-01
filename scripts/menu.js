const currentLocation = window.location.pathname;
const basePath = '/prueba/'; // Ruta base del proyecto
const menuPath = currentLocation.endsWith(basePath) ? `${basePath}pages/menu.html` : `${basePath}pages/menu.html`;

fetch(menuPath)
  .then((response) => response.text())
  .then((html) => {
    document.getElementById('menuContainer').innerHTML = html;
  });
