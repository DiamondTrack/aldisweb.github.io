document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });
});

