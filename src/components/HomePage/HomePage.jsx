import React from 'react';
import ProductListContainer from '../ProductListContainer/ProductListContainer';
import  takeaway  from '../../assets/images/takeaway.jpg'

const HomePage = () => {
  return (
    <div>
      <img
        src={takeaway}
        alt="Take-Away"
        style={{ width: "100%" }}
      />
      <ProductListContainer />
    </div>
  );
};

export default HomePage;

