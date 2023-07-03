import productData from '../../product.json';

const ProductService = {
  getProducts: async () => {
    try {
      return productData;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error.message);
    }
  },
  getProductById: async (productId) => {
    try {
      const product = productData.find((p) => p.id === productId);
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  },
  getProductsByCategory: async (categoryId) => {
    try {
      const filteredProducts = productData.filter((product) => product.categoria === categoryId);
      return filteredProducts;
    } catch (error) {
      throw new Error('Error al obtener los productos por categoría: ' + error.message);
    }
  },
};

export default ProductService;
