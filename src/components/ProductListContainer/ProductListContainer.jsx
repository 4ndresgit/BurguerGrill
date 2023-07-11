import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService/ProductService';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import './ProductListContainer.scss'
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../Firebase/config';

const ProductListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, 'productos')
    getDocs(productsRef)
      .then((resp) => {
        const items =  resp.docs.map((doc) => doc.data())
        setProducts(items)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))

  }, [categoryId]);


  return (
    <div className='product-list-container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))
      )}
    </div>
  );
};      

export default ProductListContainer;
