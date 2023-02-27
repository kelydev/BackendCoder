import ProductManger from "./ProductManager.js";

const product = new ProductManger();

const env = async () => {
    //Leer productos
    
    let reedProducts = await product.getProducts();
    console.log(reedProducts);
    

    //Agregar productos
    /*
    const producto = { 
        title: "producto prueba",
        description: "Este es un producto prueba",
        price:200,
        thumbnail:"Sin imagen", 
        code:"abc123", 
        stock:24
    };
    
    let productos = await product.addProducts(producto);
    console.log(productos);
    */

    //Buscar producto por id 
    /*
    let searchProduct = await product.getProductById(7);
    console.log(searchProduct);
    */

    //Actualizar un producto
    /*
    const producto = { 
        title: "producto actualizado",
        description: "cereales",
        price:60,
        thumbnail:"Sin imagen", 
        code:"c002", 
        stock:5
    };
    let Productos = await product.updateProduct(4, producto);
    console.log(Productos);
    */

    //Eliminar Producto
    /*
    let deleteProduct = await product.deleteProduct(7);
    console.log(deleteProduct);
    */
};

env();


