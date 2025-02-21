document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll('.carousel-img');
        let currentIndex = 0;
        const totalImages = images.length;

        const updateCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        };

        const prevButton = carousel.querySelector('.left-arrow');
        const nextButton = carousel.querySelector('.right-arrow');

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        // does next image thing every 5 secon d
        if(totalImages > 1) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            }, 5000);
        }
    });

    // scroll thing 
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});