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

// --- CATÁLOGO DE PRODUCTOS ---
const imagenesCatalogo = [
    'WhatsApp Image 2025-12-01 at 8.13.02 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.02 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.22 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.23 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.24 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.24 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.26 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.28 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.32 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.33 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.33 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.34 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.35 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.13.36 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.32 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.32 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.33 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.33 PM (2).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.33 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.34 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.34 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.36 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.37 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.37 PM (2).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.37 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.38 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.39 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.40 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.41 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.42 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.42 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.43 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.44 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.47 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.51 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.18.52 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.22 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.37 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.39 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.39 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.41 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.46 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.47 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.50 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.51 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.52 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.53 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.54 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.55 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.58 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.36.59 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.37.00 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.37.00 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.38.53 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.38.54 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.39.10 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.44.23 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.44.24 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.56.36 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.56.37 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.56.57 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.57.19 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.57.21 PM.jpeg',
    'WhatsApp Image 2025-12-01 at 8.57.23 PM (1).jpeg',
    'WhatsApp Image 2025-12-01 at 8.57.23 PM.jpeg'
];

function renderCatalogo() {
    const grid = document.getElementById('catalogo-grid');
    if (!grid) return;

    imagenesCatalogo.forEach(imagen => {
        const card = document.createElement('div');
        card.className = 'catalogo-card group';

        // Estructura de la tarjeta
        card.innerHTML = `
            <div class="relative overflow-hidden h-full">
                <img src="assets/catalogo/${imagen}" 
                     alt="Producto de Herrería" 
                     loading="lazy"
                     class="transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderProyectosDestacados() {
    const grid = document.getElementById('proyectos-destacados-grid');
    if (!grid) return;

    // Seleccionar 3 imágenes aleatorias únicas
    const indicesAleatorios = new Set();
    while (indicesAleatorios.size < 3 && indicesAleatorios.size < imagenesCatalogo.length) {
        const indice = Math.floor(Math.random() * imagenesCatalogo.length);
        indicesAleatorios.add(indice);
    }

    indicesAleatorios.forEach(indice => {
        const imagen = imagenesCatalogo[indice];
        const card = document.createElement('a');
        card.href = 'catalogo.html';
        card.className = 'group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-square cursor-pointer block';

        card.innerHTML = `
            <img src="assets/catalogo/${imagen}"
                alt="Proyecto destacado"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
        `;

        grid.appendChild(card);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderCatalogo();
    renderProyectosDestacados();
});
