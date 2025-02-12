function cambiarSlide(n, sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return; // Si el slider no existe, salir

    const slides = slider.querySelectorAll('.slide');
    let slideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (slideIndex === -1) slideIndex = 0; // Si no hay slide activo, selecciona el primero

    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

