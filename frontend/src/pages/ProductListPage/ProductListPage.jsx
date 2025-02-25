import React from "react";
import "./ProductListPage.css";
import ProductList from "../../components/ProductList/ProductList";

const ProductListPage = () => {
  return (
    <div className="product-list-page">
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListPage;
