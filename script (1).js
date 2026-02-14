 // Cart array and total price
let cart = [];
let total = 0;

// Get all order buttons
const orderButtons = document.querySelectorAll('.order-button');

// Add click event to each button
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent li element
        const liElement = button.parentElement;
        
        // Get the item details span
        const itemDetails = liElement.querySelector('.item-details').textContent;
        
        // Extract price using regex
        const priceMatch = itemDetails.match(/(\d+)\s*شيكل/);
        const itemPrice = parseInt(priceMatch[1]);
        
        // Extract item name (remove price)
        let itemName = itemDetails.replace(/\d+\s*شيكل/, '').trim();
        
        // Add item to cart
        cart.push({ name: itemName, price: itemPrice });
        
        // Update total
        total += itemPrice;
        
        // Update cart display
        updateCart();
    });
});

// Update cart display function
function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear cart list
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} شيكل`;
        cartItemsList.appendChild(listItem);
    });
    
    // Update total amount
    document.getElementById('totalAmount').textContent = `المجموع: ${total} شيكل - Total: ${total} ILS`;
}