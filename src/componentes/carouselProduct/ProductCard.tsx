import React, { useState } from "react";
import Modal from "react-modal";


interface ProductCardProps {
  image: string;
  description: string;
  oldPrice: string;
  price: string;
  installment: string;
  freeShipping: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  description,
  oldPrice,
  price,
  installment,
  freeShipping,
}) => {
    const [isModalOpen, setModalOpen] = useState(false);
     const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <>
    <div className="card">
      <div className="card__image-wrapper">
        <img src={image} alt="Produto" className="card__image" />
      </div>

      <p className="card__description">{description}</p>

      <span className="card__old-price">{oldPrice}</span>
      <h3 className="card__price">{price}</h3>
      <p className="card__installment">{installment}</p>

      <a href="#" className="card__shipping">{freeShipping}</a>

      <button className="card__button" onClick={() => setModalOpen(true)}>COMPRAR</button>
    </div>
     <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Detalhes do Produto"
      style={{
        content: {
          maxWidth: "769px",
          maxHeight:"299px",
          margin: "auto",
          borderRadius: "8px",
          padding: "1rem",
        },
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        },
      }}
    >
      <div className="modal-content">
        {/* Imagem do produto */}
        <div className="modal-image">
          <img src={image} alt="Produto" />
        </div>

        {/* Informações do produto */}
        <div className="modal-info">
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            &times;
          </button>

          <h2>Detalhes do Produto</h2>
          <p>{description}</p>
          {oldPrice && <p className="old-price">De: {oldPrice}</p>}
          <p className="price">Por: {price}</p>
          {installment && <p>{installment}</p>}
          {freeShipping && <p>{freeShipping}</p>}

          <div className="modal-actions">
            <div className="quantity">
              <button onClick={decrement}>-</button>
              <span>{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
            <button className="buy-btn">Comprar</button>
          </div>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default ProductCard;
