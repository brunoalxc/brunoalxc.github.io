// JavaScript for Onix App

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Basic quantity controls for cart page
    const quantityControls = document.querySelectorAll('.quantity-controls');

    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.quantity-minus');
        const plusBtn = control.querySelector('.quantity-plus');
        const quantitySpan = control.querySelector('.quantity');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
        });
    });

    // Image Slider functionality
    const sliderImages = document.querySelector('.slider-images');
    const images = sliderImages ? sliderImages.querySelectorAll('img') : [];
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        if (images.length === 0) return;
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    if (prevBtn && nextBtn && images.length > 0) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide === images.length - 1) ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });

        showSlide(currentSlide); // Initialize first slide
    }
});