import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import './ProductListContainer.scss';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';

const ProductListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        let productsRef = collection(db, 'productos');

        if (categoryId) {
          // Filtrar por la categoría seleccionada
          productsRef = query(
            productsRef,
            where('categoria', '==', categoryId),
            orderBy('categoria')
          );
        } else {
          productsRef = query(productsRef, orderBy('categoria'));
        }

        const snapshot = await getDocs(productsRef);

        const items = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setProducts(items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="product-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductListContainer;

