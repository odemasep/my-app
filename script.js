// Simple scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }
    });
});

// Initial state
cards.forEach(card => {
    card.style.transform = 'translateY(40px)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.6s ease';
});
