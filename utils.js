// Funções úteis: validações, formatação
function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function validateForm() {
    // Validação simples para formulário de contato
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        return true;
    }
    alert('Preencha todos os campos!');
    return false;
}