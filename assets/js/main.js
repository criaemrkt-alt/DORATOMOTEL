document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(14, 14, 14, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.background = 'rgba(14, 14, 14, 0.7)';
        }
    });

    // Mobile Menu Toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links & Close Mobile Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close menu if open
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
