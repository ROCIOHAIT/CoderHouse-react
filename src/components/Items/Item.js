import React from "react";
import { Link } from "react-router-dom";


const Item = ({ product }) => {
  const { title, price, image } = product;

  return (
    <div className="link">
      <Link to={`/item/${product.id}`}>
        <div className="counter link__item" style={{ width: "15rem" }}>
          <div className="counter__content">
            <h5 className="card-title">{title}</h5>
            <img
              src={image}
              className="card-img-top"
              alt="Imagen de Producto"
            />
            
            <h6>${price}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;