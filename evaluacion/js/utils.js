export function createProductElements(products) {
    return products.map(product => `
        <div class="product">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="alert('¡Añadido al carrito: ${product.title}')">Añadir al carrito</button>
        </div>
    `);
}

export function filterProducts(products, query) {
    return products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
}
