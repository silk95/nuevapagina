let currentIndex = 0; // Índice inicial
const items = document.querySelectorAll(".carousel-item"); // Seleccionar elementos del carrusel
const totalItems = items.length; // Total de elementos
const intervalTime = 3000; // Intervalo de 3 segundos para autoejecución

const nextBtn = document.getElementById("nextBtn"); // Botón "siguiente"
const prevBtn = document.getElementById("prevBtn"); // Botón "anterior"


// Función para mostrar la imagen activa
function showItem(index) {
    // Eliminar la clase 'active' de todos los elementos
    items.forEach((item) => item.classList.remove("active"));
    // Añadir la clase 'active' al elemento correspondiente
    items[index].classList.add("active");
}

// Función para avanzar al siguiente elemento
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems; // Ciclo circular
    showItem(currentIndex);
}
  
// Función para retroceder al elemento anterior
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo circular
    showItem(currentIndex);
}

// Event listeners para los botones de control
nextBtn.addEventListener("click", () => {
    clearInterval(autoPlay); // Detener autoejecución temporalmente
    nextItem(); // Mostrar siguiente elemento
    autoPlay = setInterval(nextItem, intervalTime); // Reiniciar autoejecución
});
  
prevBtn.addEventListener("click", () => {
    clearInterval(autoPlay); // Detener autoejecución temporalmente
    prevItem(); // Mostrar elemento anterior
    autoPlay = setInterval(nextItem, intervalTime); // Reiniciar autoejecución
});
  
// Autoejecución del carrusel
let autoPlay = setInterval(nextItem, intervalTime);
  
// Mostrar el primer elemento al cargar la página
showItem(currentIndex);