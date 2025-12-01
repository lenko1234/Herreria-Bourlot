// Configuración de Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                rust: {
                    400: '#fb923c', /* Naranja claro (fuego/óxido luz) */
                    500: '#ea580c', /* Naranja óxido principal */
                    600: '#c2410c', /* Óxido oscuro */
                    900: '#431407', /* Marrón muy oscuro */
                },
                metal: {
                    800: '#1c1917', /* Stone 900 - Metal cálido */
                    900: '#0c0a09', /* Stone 950 - Negro cálido */
                }
            }
        }
    }
};

// Inicializar iconos
lucide.createIcons();

// Toggle Menú Móvil
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Navbar effect on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-metal-900/90', 'bg-metal-900/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-metal-900/95', 'bg-metal-900/90');
    }
});

// --- ANIMACIÓN HERRERÍA (NAVBAR) ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('navbarLogoAnimation');
    if (!container) return;

    const textToType = "FG HERRERIA";
    const sparksPerLetter = 15; // Menos chispas para el logo pequeño
    const typingSpeed = 150; // Más rápido

    // 1. Preparar letras
    textToType.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');
        span.style.fontFamily = "'Bebas Neue', sans-serif"; // Asegurar fuente
        if (char === ' ') span.classList.add('letter-space');
        container.appendChild(span);
    });

    const letters = container.querySelectorAll('.letter');

    // 2. Función para lanzar chispas
    function spawnSparksAt(rect) {
        const centerX = rect.left + (rect.width / 2);
        const centerY = rect.top + (rect.height / 2);

        for (let i = 0; i < sparksPerLetter; i++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            document.body.appendChild(spark);

            // Variación reducida para logo pequeño
            const variationX = (Math.random() - 0.5) * 10;
            const variationY = (Math.random() - 0.5) * 5;
            spark.style.left = (centerX + variationX) + 'px';
            spark.style.top = (centerY + variationY) + 'px';

            // Física ajustada para logo pequeño
            const angle = Math.PI + (Math.random() * Math.PI);
            const velocity = 20 + Math.random() * 30; // Menor velocidad

            const tx = (Math.cos(angle) * velocity) + 'px';
            const gravity = 40 + Math.random() * 50; // Menor gravedad
            const ty = (Math.sin(angle) * velocity + gravity) + 'px';

            spark.style.setProperty('--tx', tx);
            spark.style.setProperty('--ty', ty);

            const duration = 0.3 + Math.random() * 0.4 + 's';
            spark.style.animation = `spark-fly ${duration} ease-out forwards`;

            setTimeout(() => { spark.remove(); }, 1000);
        }
    }

    // 3. Bucle de animación principal
    letters.forEach((letterSpan, index) => {
        setTimeout(() => {
            letterSpan.classList.add('active');
            if (!letterSpan.classList.contains('letter-space')) {
                const rect = letterSpan.getBoundingClientRect();
                spawnSparksAt(rect);
            }
        }, index * typingSpeed + 500);
    });
});
