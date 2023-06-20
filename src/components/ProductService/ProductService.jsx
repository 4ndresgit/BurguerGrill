import productData from '../../product.json' 

const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
};

export default {
  getProducts,
};
