// script.js

// Function to filter products based on search input
function filterProducts() {
    // Get the search input value and convert it to lowercase
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase();
    
    // Get all product elements
    const products = document.querySelectorAll('.product');

    // Loop through each product
    products.forEach(product => {
        // Get the product description text and convert it to lowercase
        const productDescription = product.querySelector('p').textContent.toLowerCase();
        
        // Check if the product description includes the search input
        if (productDescription.includes(searchInput)) {
            product.style.display = 'block'; // Show product if it matches
        } else {
            product.style.display = 'none'; // Hide product if it doesn't match
        }
    });
}

// Add event listener to the search input
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input[type="text"]').addEventListener('input', filterProducts);
});