const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Evento de cambio del dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    // Eliminar la clase 'active' de todos los elementos del dropdown
    dropdownItems.forEach(item => item.classList.remove('active'));

    // Agregar la clase 'active' al elemento seleccionado
    this.classList.add('active');

    const theme = this.id === 'theme-dark' ? 'dark' : 'light'; // Obtener el tema seleccionado

    if (theme === 'dark') {
      // Si se selecciona 'dark', se carga el tema oscuro
      fetch('https://bootswatch.com/api/5.json')
        .then(response => response.json())
        .then(data => loadTheme(data, true)); // Cargar el tema oscuro pasando 'true'
    } else {
      // Si se selecciona 'light', se restablece el tema
      resetTheme();
    }
  });
});

// Evento de carga inicial de la página
window.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('selectedTheme');

  if (storedTheme === 'dark') {
    // Si se almacenó el tema oscuro, se marca el elemento 'oscuro' del dropdown
    dropdownItems[1].classList.add('active');
  } else {
    // Si no se almacenó el tema oscuro, se marca el elemento 'claro' del dropdown
    dropdownItems[0].classList.add('active');
  }

  // Se carga el tema correspondiente (claro u oscuro) según el estado del dropdown
  fetch('https://bootswatch.com/api/5.json')
    .then(response => response.json())
    .then(data => {
      const isDarkTheme = dropdownItems[1].classList.contains('active');
      loadTheme(data, isDarkTheme); // Cargar el tema según el estado actual del dropdown
    });
});

// Función para cargar el tema
function loadTheme(data, isDarkTheme) {
  // Filtrar los temas disponibles para obtener solo 'Morph' y 'Darkly'
  const themes = data.themes.filter(theme => theme.name === 'Morph' || theme.name === 'Darkly');

  // Seleccionar el tema correspondiente (claro u oscuro) según el estado del dropdown
  const theme = isDarkTheme ? themes.find(theme => theme.name === 'Darkly') : themes.find(theme => theme.name === 'Morph');

  // Aplicar el tema seleccionado cambiando la referencia al archivo CSS
  document.querySelector('#theme').setAttribute('href', theme.css);

  // Guardar el estado del tema en el almacenamiento local
  localStorage.setItem('selectedTheme', isDarkTheme ? 'dark' : 'light');
}

// Función para restablecer el tema
function resetTheme() {
  // Eliminar la referencia al archivo CSS para restablecer el tema
  document.querySelector('#theme').removeAttribute('href');

  // Eliminar la clase 'active' de los elementos del dropdown
  dropdownItems.forEach(item => item.classList.remove('active'));

  // Eliminar el estado del tema del almacenamiento local
  localStorage.removeItem('selectedTheme');
}

