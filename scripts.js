// Additional animation for floating effect
document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Random floating animation
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            shape.style.transform = translate(${randomX}px, ${randomY}px);
        }, 2000 + index * 500);
    });
});