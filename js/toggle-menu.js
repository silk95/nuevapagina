// Alterna el menú responsive al dar clic sobre el botón
// toggle-menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-menu');

    // Pone visible la barra de menú en forma vertical
    navLinks.classList.toggle('nav-active');
})