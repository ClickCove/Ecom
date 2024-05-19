import React from 'react';

const ProductCard = ({ imageUrl, productName }) => {
  return (
<>

    <div className="container">
      <div className="card border-2 rounded-2xl border-blue-400">
        <div className="imgBx">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="contentBx">
          <h2>{productName}</h2>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>


    </>
  );
};

export default ProductCard;
