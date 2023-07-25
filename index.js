class ProductManager {
  constructor() {
    this.products = [];
    this.lastProductId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.error("El campo 'code' ya está en uso.");
      return;
    }

    const product = {
      id: ++this.lastProductId,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };
    this.products.push(product);
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      console.error("Not found");
    }
    return product;
  }

  getProducts() {
    return this.products;
  }
}

const productos = new ProductManager();

productos.addProduct(
  "Placa de video 1",
  "Descripción de placa de video",
  100000,
  "imagen no disponible",
  "001",
  10
);
productos.addProduct(
  "teclado 2",
  "Descripción del teclado",
  10000,
  "imagen no disponible",
  "002",
  30
);
productos.addProduct(
  "mouse 3",
  "Descripción del mouse",
  30,
  "Imagen no disponible",
  "003",
  25
);

const teclado = productos.getProductById(2);
console.log(teclado);

const productNotFound = productos.getProductById(4); // Debería mostrar "Not found" en la consola
