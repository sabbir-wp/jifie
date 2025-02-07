document.addEventListener('DOMContentLoaded', function () {
    new Splide('#slider', {
        type: 'loop',
        perPage: 1, // Show one card at a time
        perMove: 1, // Move one card per navigation
        gap: '1rem',
        breakpoints: {
            768: { perPage: 2 }, // Display 2 slides on tablets
            576: { perPage: 1 }  // Display 1 slide on phones
        },
    }).mount();
});



document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 576) { // Activate slider only for phones
        new Splide('#partner-slider', {
            type: 'loop',
            perPage: 3, // Show one slide at a time on phones
            perMove: 1, // Move one slide per navigation
            gap: '1rem',
        }).mount();
    }
});
