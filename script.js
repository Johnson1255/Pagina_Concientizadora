document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100; // Ajusta según la altura de tu header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});


// Simple form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
        alert('¡Gracias por suscribirte!');
        form.reset();
    } else {
        alert('Por favor, ingresa un email válido.');
    }
});

document.getElementById('donationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar monto de donación
    const monto = parseInt(document.getElementById('monto').value);
    if (monto < 50) {
        alert("El monto mínimo para donar es de 50 pesos.");
        return;
    }

    // Validar que los campos estén completos
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const pais = document.getElementById('pais').value;
    const direccion = document.getElementById('direccion').value;
    const publicarNombre = document.querySelector('input[name="publicarNombre"]:checked');
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !cedula || !pais || !direccion || !publicarNombre || !terminos) {
        alert("Por favor, complete todos los campos y acepte los términos.");
        return;
    }

    // Mostrar mensaje de éxito
    document.getElementById('resultado').style.display = 'block';
});
    
    
