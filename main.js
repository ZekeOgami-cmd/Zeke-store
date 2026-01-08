// Lógica geral: navegação, tema
document.addEventListener('DOMContentLoaded', () => {
    // Aplicar tema celestial (já via CSS)
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Função para carregar produtos (usada em múltiplas páginas)
function loadProducts(prods, containerId) {
    const container = document.getElementById(containerId);
    prods.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('product-item');
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>${formatCurrency(product.price)}</p>
            <a href="product-detail.html?id=${product.id}">Ver Detalhes</a>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        container.appendChild(item);
    });
}