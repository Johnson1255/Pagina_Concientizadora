document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Envío del formulario
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    
    // Limpiar el formulario
    this.reset();
});
