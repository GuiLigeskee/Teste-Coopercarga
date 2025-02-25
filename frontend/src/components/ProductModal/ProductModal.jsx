import React from "react";
import "./ProductModal.css";
import { Modal } from "react-bootstrap";

const ProductModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image_url}
          alt={product.name}
          className="img-fluid mb-3"
        />
        <p>{product.details}</p>
        <p>
          <strong>Preço:</strong> R$ {product.price.toFixed(2)}
        </p>
        {product.available_sizes.length > 0 ? (
          <p>
            <strong>Tamanhos disponíveis:</strong>{" "}
            {product.available_sizes.join(", ")}
          </p>
        ) : (
          <p className="text-danger">
            <strong>Produto não disponível no momento.</strong>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
