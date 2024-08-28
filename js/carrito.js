document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    let cart = [
        { id: 1, name: 'Floral Midi Dress', size: 'Medium', color: 'Navy', price: 74.99, quantity: 1, image: '/placeholder.svg' },
        { id: 2, name: 'Linen Button-Up Shirt', size: 'Large', color: 'White', price: 74.99, quantity: 1, image: '/placeholder.svg' },
    ];

    const updateCart = () => {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item bg-light rounded p-3 mb-3 shadow-sm';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3 class="h5">${item.name}</h3>
                    <p class="text-muted mb-1">Size: ${item.size}, Color: ${item.color}</p>
                    <p class="mb-0">$${item.price.toFixed(2)}</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            subtotal += item.price * item.quantity;
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + 5).toFixed(2)}`;
    };

    window.changeQuantity = (itemId, delta) => {
        const item = cart.find(i => i.id === itemId);
        if (item) {
            item.quantity += delta;
            if (item.quantity < 1) item.quantity = 1;
            updateCart();
        }
    };

    updateCart();
});
