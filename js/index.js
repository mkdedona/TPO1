//NAVBAR
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
}); 

// Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const indexSubmitBtn = document.getElementById('indexSubmitBtn');
const registrationForm = document.getElementById('registrationForm');

// Función para abrir el modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Función para cerrar el modal
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Función para manejar el envío del formulario
indexSubmitBtn.addEventListener('click', function() {
  // Validar los datos (puedes agregar más validaciones según tus necesidades)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username == "aguscodo" && password== "kitchen23532") {
    // Redirigir a otra página si los datos son correctos
    window.open('https://kitchen23532.netlify.app/', '_blank');
  } else{
    alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.')
  }
});
