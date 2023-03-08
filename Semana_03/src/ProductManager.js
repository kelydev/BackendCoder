import fs from "fs";
export default class ProductManger
{
    constructor()
    {
        this.path = "./src/files/Productos.json"
    }

    getProducts = async () => {
        if (fs.existsSync(this.path)) 
        {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            return result;
        } 
        else 
        {
            return []
        }
    };

    addProducts = async (producto) => {
        const productos = await this.getProducts();
        if (productos.length === 0) 
        {
            producto.id = 1;
        } 
        else 
        {
            producto.id = productos[productos.length - 1].id + 1;
        }
        productos.push(producto);
        await fs.promises.writeFile( this.path, JSON.stringify(productos, null, "\t"));
        return producto;
    };

    getProductById = async (id) => {
        const productos = await this.getProducts();
        const productFound = productos.find(producto => producto.id === id);
        if (!productFound) 
        {
            return 'Producto no encontrado';
        } 
        return productFound;
    };

    updateProduct = async (id, product) => {
        const productos = await this.getProducts();
        const productFound = await this.getProductById(id);
        if (productFound.id===id) 
        {
            const updateProducts = productos.map(prod =>
                prod.id === id
                ? 
                {
                    ...product,
                    id:id
                }
                : prod
            );
            await fs.promises.writeFile( this.path, JSON.stringify(updateProducts, null, "\t"));
            return 'Producto actualizado';
        } 
        return 'Error al actualizar el producto';
    }

    deleteProduct = async (id) => {
        let productos = await this.getProducts();
        const productFound = await this.getProductById(id);
        if (productFound.id===id) 
        {
            productos = productos.filter(producto => producto.id !== id);
            await fs.promises.writeFile( this.path, JSON.stringify(productos, null, "\t"));
            return 'Producto eliminado correctamente';
        } 
        return 'Error al eliminar el producto';
    };
}