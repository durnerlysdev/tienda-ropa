document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto agregado al carrito!');
        });
    });
});