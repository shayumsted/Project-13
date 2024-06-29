// U78784426
document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://course-api.com/react-store-products';
    // Loading state
    const loadingElement = document.getElementById('loading'); 
    // The Error implementation
    const errorElement = document.getElementById('error');
    const productDisplayElement = document.getElementById('product-display');
    const productNameElement = document.getElementById('product-name');
    const productImgElement = document.getElementById('product-img');
    const productPriceElement = document.getElementById('product-price');
    const productDescriptionElement = document.getElementById('product-description');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
// Let terms
    let products = [];
    let currentIndex = 0;

    // Fetching product data from API
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            products = data;
            if (products.length > 0) {
                displayProduct(products[currentIndex]);
                loadingElement.classList.add('hidden');
                productDisplayElement.classList.remove('hidden');
            } else {
                showError(); } })
        .catch(() => {
            showError();});

    // Display of product
    function displayProduct(product) {
        productNameElement.textContent = product.name;
        productImgElement.src = product.image;
        productPriceElement.textContent = `$${product.price}`;
        productDescriptionElement.textContent = product.description;}

    // Shows error message
    function showError() {
        loadingElement.classList.add('hidden');
        errorElement.classList.remove('hidden');}

    // Handle Previous button click
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        displayProduct(products[currentIndex]); });

    // Handle Next button click
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        displayProduct(products[currentIndex]);});});
