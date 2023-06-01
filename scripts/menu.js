const currentLocation = window.location.pathname;
const menuPath = currentLocation.endsWith('/') ? 'pages/menu.html' : './pages/menu.html';

fetch(menuPath)
  .then((response) => response.text())
  .then((html) => {
    document.getElementById('menuContainer').innerHTML = html;
  });
