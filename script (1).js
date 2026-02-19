let cart = [];
let total = 0;

// Get all order buttons
const orderButtons = document.querySelectorAll('.order-button');

// Add click event for each button
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text of the dish and its price
        const itemText = button.parentElement.querySelector('.item-details').textContent.trim();
        const priceMatch = itemText.match(/- (\d+) شيكل/);

        if (priceMatch) {
            const itemPrice = parseInt(priceMatch[1], 10);
            
            // Add the item to the cart
            cart.push({ name: itemText, price: itemPrice });
            
            // Update the total amount
            total += itemPrice;
            
            // Update the shopping cart display on the page
            updateCart();
        } else {
            console.error('Valid price not found');
        }
    });
});

// Function to update the shopping cart display on the page
function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Reset the cart item list
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} شيكل`;
        cartItemsList.appendChild(listItem);
    });
    
    // Update the total amount
    document.getElementById('totalAmount').textContent = `Total: ${total} شيكل`;
}
