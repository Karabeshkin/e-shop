import React from 'react';

function AdminProductCard(): JSX.Element {
  return (
    <div>
      <div>{product.title}</div>
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>{product.price}</div>
    </div>
  );
}

export default AdminProductCard;
