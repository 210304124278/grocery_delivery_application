document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const cartContents = document.getElementById('cartContents');
    const checkoutButton = document.getElementById('checkoutButton');

    const products = [
        { id: 1, name: 'Apple', price: 0.5 },
        { id: 2, name: 'Banana', price: 0.3 },
        { id: 3, name: 'Carrot', price: 0.2 },
        { id: 4, name: 'Tomato', price: 0.4 }
    ];

    const cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function displayCart() {
        cartContents.innerHTML = '';
        if (cart.length === 0) {
            cartContents.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                `;
                cartContents.appendChild(cartItem);
            });
        }
    }

    productList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            displayCart();
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality is not implemented in this example.');
    });

    displayProducts();
    displayCart();
});
