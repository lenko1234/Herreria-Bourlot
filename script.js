// Configuración de Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                emerald: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    900: '#064e3b',
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
        navbar.classList.replace('bg-slate-900/90', 'bg-slate-900/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-slate-900/95', 'bg-slate-900/90');
    }
});
