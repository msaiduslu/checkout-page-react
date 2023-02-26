import { BsCheckLg } from "react-icons/bs";
import ProductCard from "./ProductCard";
import React, { useState } from "react";

const CardTotal = ({ data, getProductsData }) => {
  const initialSubtotal = data.reduce((acc, item) => {
    return acc + item.amount * item.price * item.dampingRate;
  }, 0);
  const [subtotal, setSubtotal] = useState(initialSubtotal);
  return (
    <div className="card-total">
      <div className="card-container">
        {data.map((item) => {
          return (
            <ProductCard
              getProductsData={getProductsData}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
      <div className="total-container">
        <p>
          Subtotal <span>${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Tax(%18) <span>${(subtotal * 0.18).toFixed(2)}</span>
        </p>
        <p>
          Shipping <span>$25</span>
        </p>
        <p>
          Total <span>${(subtotal + subtotal * 0.18 + 25).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CardTotal;
