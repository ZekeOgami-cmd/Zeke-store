// Carrinho: adicionar/remover, localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Adicionado ao carrinho! ⭐');
    }
}

function loadCart() {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    let total = 0;
    cart.forEach((product, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${formatCurrency(product.price)}</p>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        container.appendChild(item);
        total += product.price;
    });
    document.getElementById('cart-total').textContent = `Total: ${formatCurrency(total)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}