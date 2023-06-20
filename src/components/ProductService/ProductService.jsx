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
      const productData = require('../../product.json');
      const product = productData.find((p) => p.id === productId);
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  },
};

export default ProductService;
