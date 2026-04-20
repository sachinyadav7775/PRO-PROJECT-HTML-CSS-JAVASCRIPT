// Dynamic Navigation Background on Scroll
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});

// Mobile Nav Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Cursor Blob Effect
const blob = document.querySelector('.cursor-blob');
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth animation for blob using requestAnimationFrame
function animateBlob() {
    blob.style.left = `${mouseX}px`;
    blob.style.top = `${mouseY}px`;
    requestAnimationFrame(animateBlob);
}
animateBlob();

// Simple interactive element: Change blob color on hover over clickable elements
const interactables = document.querySelectorAll('a, button, .hamburger, .glass-panel');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        blob.style.background = 'radial-gradient(circle, var(--secondary-color) 0%, rgba(0, 245, 212, 0) 70%)';
        blob.style.transform = 'translate(-50%, -50%) scale(1.3)';
    });
    
    el.addEventListener('mouseleave', () => {
        blob.style.background = 'radial-gradient(circle, var(--primary-color) 0%, rgba(123,44,191,0) 70%)';
        blob.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
