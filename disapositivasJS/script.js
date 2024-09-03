// Variable que mantiene el índice de la diapositiva actual
let slideIndex = 1; // Empezamos desde la primera diapositiva

// Función principal para mostrar una diapositiva específica
function showSlides(n) {
    let slides = $(".slides");

    // Si el índice es mayor que el número de diapositivas, volvemos a la primera
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Si el índice es menor que 1, vamos a la última diapositiva
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultamos todas las diapositivas
    slides.hide();

    // Mostramos la diapositiva correspondiente
    slides.eq(slideIndex - 1).fadeIn();
}

// Función para cambiar de diapositiva al hacer clic en los botones de navegación
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Iniciamos mostrando la primera diapositiva cuando se carga la página
$(document).ready(function() {
    showSlides(slideIndex);
});
