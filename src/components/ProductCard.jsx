import { AiFillMinusSquare } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import React, { useState } from "react";

const ProductCard = ({ id, name, image, price, dampingRate, amount }) => {
  return (
    <div className="product-container">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          ${(price * dampingRate).toFixed(2)} <span>${price}</span>
        </p>
        <div className="counter">
          <div className="minus">
            <AiFillMinusSquare />
          </div>
          <div className="amount">{amount}</div>
          <div className="plus">
            <AiFillPlusSquare />
          </div>
        </div>
        <BsTrash />
        <button>Remove</button>
        <p>Product Total:{(amount * price * dampingRate).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
