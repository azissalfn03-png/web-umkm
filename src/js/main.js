/**
 * Logika Utama UI - main.js (Premium Version)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Navbar Transisi (Scroll Effect)
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.getElementById('nav-links');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Saat di-scroll ke bawah: Background putih, teks gelap, shadow halus
            navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            navbar.classList.remove('py-6');
            
            navLogo.classList.remove('text-white');
            navLogo.classList.add('text-brand-dark');
            
            navLinks.classList.remove('text-white');
            navLinks.classList.add('text-gray-600');
            
            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-brand-dark');
        } else {
            // Saat di posisi paling atas: Transparan, teks putih
            navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            navbar.classList.add('py-6');
            
            navLogo.classList.add('text-white');
            navLogo.classList.remove('text-brand-dark');
            
            navLinks.classList.add('text-white');
            navLinks.classList.remove('text-gray-600');
            
            mobileBtn.classList.add('text-white');
            mobileBtn.classList.remove('text-brand-dark');
        }
    });

    // 2. Fullscreen Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        const isClosed = mobileMenu.classList.contains('opacity-0');
        
        if (isClosed) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
            menuIcon.classList.add('text-white'); // Memastikan ikon silang berwarna putih di atas background gelap
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
            // Kembalikan warna asli tombol menyesuaikan scroll (handled by CSS/Scroll logic)
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Scroll Animation Logic (Intersection Observer)
    // Membuat elemen muncul dengan transisi halus saat masuk ke viewport (layar)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Animasi terpicu saat 15% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hanya animasi 1x saat pertama kali di-scroll
            }
        });
    }, observerOptions);

    // Menerapkan observer ke semua elemen dengan class 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});