document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. ANIMACIÓN DE ENTRADA (REVEAL ON SCROLL)
    // =========================================
    // Seleccionamos los elementos que tienen la clase 'reveal' o son tarjetas de servicio
    const revealElements = document.querySelectorAll('.reveal, .service-card');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distancia desde el fondo para activar la animación

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            // Si el elemento está dentro de la ventana visible, lo mostramos
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Ejecutamos al hacer scroll y también al cargar la página por si ya hay elementos visibles
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    // =========================================
    // 2. HEADER DINÁMICO (CAMBIA AL HACER SCROLL)
    // =========================================
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        // Si bajamos más de 50px, añadimos la clase 'scrolled' para encoger el header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // =========================================
    // 3. BOTÓN FLOTANTE DE WHATSAPP (APARECE AL BAJAR)
    // =========================================
    const whatsappBtn = document.getElementById('whatsappBtn');

    const toggleWhatsAppBtn = () => {
        // Si bajamos más de 300px, mostramos el botón de WhatsApp
        if (window.scrollY > 300) {
            whatsappBtn.classList.add('show');
        } else {
            whatsappBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', toggleWhatsAppBtn);

    // =========================================
    // 4. SLIDER DE IMÁGENES AUTOMÁTICO
    // =========================================
    // Buscamos todos los contenedores de slider en la página
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        let currentSlide = 0;

        // Si el slider tiene más de una imagen, iniciamos la rotación automática
        if (slides.length > 1) {
            setInterval(() => {
                // 1. Quitamos la clase 'active' de la imagen actual
                slides[currentSlide].classList.remove('active');
                
                // 2. Calculamos cuál es la siguiente imagen (si llegamos al final, volvemos a 0)
                currentSlide = (currentSlide + 1) % slides.length;
                
                // 3. Añadimos la clase 'active' a la nueva imagen para que aparezca
                slides[currentSlide].classList.add('active');
            }, 3000); // 3000 milisegundos = 3 segundos. Puedes cambiar este valor para que rote más rápido o más lento.
        }
    });

});