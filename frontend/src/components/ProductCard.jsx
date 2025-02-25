import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <img
          src={product.image_url}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
