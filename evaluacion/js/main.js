const defaultProducts = [
    { id: 1, title: 'Comida para Perro', body: 'Comida premium para perros adultos.', image: '/images/alimentoperro.jpg' },
    { id: 2, title: 'Juguete para Perro', body: 'Juguete duradero para mantener a tu perro entretenido.', image: '/images/jueguetes.jpg' },
    { id: 3, title: 'Cama para Perro', body: 'Cama cómoda y resistente para perros de tamaño grande.', image: '/images/cama.jpg' }
];


const renderProducts = (products) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar productos actuales

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.body}</p>
            <button onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
};


const filterProducts = () => {
    const searchBox = document.getElementById('searchBox');
    const searchText = searchBox.value.toLowerCase();

    const filteredPosts = defaultProducts.filter(product => 
        product.title.toLowerCase().includes(searchText) ||
        product.body.toLowerCase().includes(searchText)
    );

    renderProducts(filteredPosts);
};

const fetchProducts = async () => {
    try {
        const response = await fetch('https://api.example.com/products'); // Reemplaza con la URL de la API real
        if (!response.ok) {
            throw new Error('Error al cargar productos desde la API');
        }
        const data = await response.json();
        return data.products; // Ajusta según la estructura de la API
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return defaultProducts; // Usa productos por defecto en caso de error
    }
};


const init = async () => {
    const products = await fetchProducts();
    renderProducts(products);

   
    document.getElementById('searchBox').addEventListener('input', filterProducts);
};


const addToCart = (productId) => {
    Swal.fire({
        title: 'Producto Añadido',
        text: `Producto con ID ${productId} añadido al carrito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
};


document.addEventListener('DOMContentLoaded', init);
