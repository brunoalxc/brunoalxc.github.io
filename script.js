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
                updateCartCount(); // Update cart count on quantity change
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateCartCount(); // Update cart count on quantity change
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

    // Cart Count functionality
    const cartCountSpan = document.querySelector('.cart-count');

    function updateCartCount() {
        // For demonstration, let's assume a simple count based on items in cart.html
        // In a real app, this would come from a global state or backend.
        let totalItems = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantitySpan = item.querySelector('.quantity');
            if (quantitySpan) {
                totalItems += parseInt(quantitySpan.textContent);
            }
        });
        if (cartCountSpan) {
            cartCountSpan.textContent = totalItems;
        }
    }

    // Initial update of cart count on page load
    updateCartCount();

    // Add to cart button functionality (for demonstration)
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            // In a real application, this would add the product to a cart array/object
            // and then update the cart count.
            // For now, let's just increment the cart count by 1 for demonstration.
            let currentCount = parseInt(cartCountSpan.textContent);
            cartCountSpan.textContent = currentCount + 1;
        });
    });
});
