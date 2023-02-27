class ProductManager
{
    constructor()
    {
        this.products = [];
        this.Id = 0;
    }

    addProduct(product)
    {
        const existingProduct = this.products.find(
            p => p.id === product.id
        );

        const existingProductCode = this.products.find(
            p => p.code === product.code
        );

        if (!product.title || !product.description || !product.thumbnail || !product.code || !product.stock) 
        {
            return console.log('Todos los campos son obligatorios');
        }

        if(existingProductCode)
        {
            return console.log(`El producto con código ${product.code} ya existe`);
        }

        if(existingProduct)
        {
            return console.log(`El producto con id ${product.id} ya existe`);
        }
    
        const newProduct = 
        { 
            ...product,
            id: ++this.Id 
        };
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts()
    {
        return this.products;
    }

    getProductById(id)
    {
        const product = this.products.find(product => product.id === id);
        if(!product)
        {
            return 'Producto no encontrado';
        }
        return product;
    }
}
const producto = new ProductManager();

//------------------- 01. Listar Productos -------------------
//console.log(producto.getProducts());


//-------------------------- 02. Validacion para ingresar todos los campos y Validacion del campo Code ----------------------
/*
const product1 = { title: "producto prueba", description: "Este es un producto prueba1", thumbnail:"Sin imagen", code:"abc123", stock:24};
const product2 = { title: "producto prueba", description: "Este es un producto prueba1", thumbnail:"Sin imagenn", code:"abc123", stock:25};
producto.addProduct(product1);
producto.addProduct(product2);
console.log(producto.getProducts());
*/


//-------------- 03. Id Repetido -------------------
/*
const product1 = { title: "producto prueba", description: "Este es un producto prueba1", thumbnail:"Sin imagen", code:"abc123", stock:25};
const product2 = { title: "producto prueba", description: "Este es un producto prueba2", thumbnail:"Sin imagen", code:"abc1234", stock:25, id:1};
producto.addProduct(product1);
producto.addProduct(product2);
console.log(producto.getProducts());
*/


// --------------------- 04. Id generado automaticamente para cada producto ------------------*/
/*
const product1 = { title: "producto prueba", description: "Este es un producto prueba1", thumbnail:"Sin imagen", code:"abc123", stock:25};
const product2 = { title: "producto prueba", description: "Este es un producto prueba2", thumbnail:"Sin imagen", code:"abc124", stock:25};
const product3 = { title: "producto prueba", description: "Este es un producto prueba3", thumbnail:"Sin imagen", code:"abc125", stock:25};

producto.addProduct(product1);
producto.addProduct(product2);
producto.addProduct(product3);

console.log(producto.getProducts());
*/


// --------------------- 05. Buscar un producto por el ID ------------------

const product1 = { title: "producto prueba", description: "Este es un producto prueba1", thumbnail:"Sin imagen", code:"abc123", stock:25};
const product2 = { title: "producto prueba", description: "Este es un producto prueba2", thumbnail:"Sin imagen", code:"abc124", stock:25};

producto.addProduct(product1);
producto.addProduct(product2);
 
console.log(producto.getProductById(3));

