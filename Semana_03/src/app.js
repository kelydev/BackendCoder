import express from 'express';
import ProductManger from "./ProductManager.js";
const product = new ProductManger();
const port = 8080;
const app = express();

app.get("/products", async (req, res) => {
    let products = await product.getProducts();
    const limit = parseInt(req.query.limit);
    if(!limit) return res.send({products});
    let productos = []
    for (let i = 0; i < limit; i++) 
    {
        productos.push(products[i]);
    }
    res.send(productos);
});

app.get("/products/:pid", async (req, res) => {
    let products = await product.getProducts();
    const pid = parseInt(req.params.pid);
    const producto = products.find((u) => u.id === pid);
    if (!producto) return res.send({ error: "Producto no encontrado" });
    res.send(producto);
}); 

app.listen(port, () => {
    console.log("Listening on port 8080");
});
