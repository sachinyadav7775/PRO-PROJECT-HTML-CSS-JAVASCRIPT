document.addEventListener('DOMContentLoaded', () => {
    // Mouse Glow Tracking
    const mouseGlow = document.querySelector('.mouse-glow');
    if (mouseGlow && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            mouseGlow.style.left = `${e.clientX}px`;
            mouseGlow.style.top = `${e.clientY}px`;
        });
    }

    // Reusable Typing Effect Function
    function initTypingEffect(selector, words) {
        const typingText = document.querySelector(selector);
        if (!typingText) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1500; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    // Initialize Typing Effects
    initTypingEffect('.typing-text', ['my universe', 'the digital world', 'my portfolio']);
    initTypingEffect('.name-typing-text', ['sky_khushi', 'SKY@']);

    // Scroll Animation for Navbar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.5)';
            nav.style.boxShadow = 'none';
            nav.style.padding = '1.5rem 5%';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission (Prevent default for UI demo)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sent Successfully! <i class="fas fa-check"></i>';
            btn.style.background = '#00c853';
            btn.style.boxShadow = '0 10px 20px rgba(0, 200, 83, 0.3)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
                form.reset();
            }, 3000);
        });
    }
    // Animation class toggle on scroll
    const animateElements = document.querySelectorAll('.section-title, .about-content, .project-card, .contact-container');
    
    // Fallback: make elements immediately visible to prevent the "not showing" bug
    animateElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});